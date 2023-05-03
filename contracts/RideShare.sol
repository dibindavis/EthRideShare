// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RideSharing {
    enum STATUS {
        CREATED,
        STARTED,
        CANCELED,
        FINISHED
    }

    struct Ride {
        uint256 rideId;
        uint256 fare;
        uint256 totalFare;
        string pickup;
        string dropoff;
        address driver;
        uint256 capacity;
        address[] passengers;
        uint departure;
        uint distance;
        uint rate;
        STATUS status;
        uint rating;
    }
    mapping(uint => mapping(address => uint256)) passengerFinalFare;
    mapping(uint => mapping(address => uint256)) passengerTravelDistance;
    mapping(uint => mapping(address => string)) passengerDropoff;
    mapping(address => bool) isPassengerReady;
    mapping(uint => Ride) rides;
    mapping(address => bool) isPassengerFinished;
    mapping(address => uint256) public DriverRatings;
    mapping(address => uint256) public RideCompleted;
    mapping(address => uint256) public DriverReward;
    mapping(address => uint[]) ridesByDriver;
    mapping(address => uint[]) ridesByPassenger;
    mapping(uint => uint) public rideJoiningAmounts;

    uint rideCounter;

    function addRide(
        uint256 _fare,
        uint256 _capacity,
        string memory _pickup,
        string memory _dropoff,
        uint _departure,
        uint _rate,
        uint _distance
    ) public {
        Ride storage ride = rides[rideCounter];
        ride.rideId = rideCounter;
        ride.fare = _fare;
        ride.driver = msg.sender;
        ride.capacity = _capacity;
        ride.pickup = _pickup;
        ride.dropoff = _dropoff;
        ride.rate = _rate;
        ride.distance = _distance;
        ride.departure = _departure;
        ride.status = STATUS.CREATED;
        ridesByDriver[msg.sender].push(rideCounter);
        rideCounter++;
    }

    function getRide(
        uint _rideId
    )
        public
        view
        returns (uint, uint, uint256, address, address[] memory, STATUS)
    {
        Ride storage ride = rides[_rideId];
        return (
            ride.rideId,
            ride.capacity,
            ride.fare,
            ride.driver,
            ride.passengers,
            ride.status
        );
    }

    function getAllRides() public view returns (Ride[] memory) {
        Ride[] memory allRides = new Ride[](rideCounter);
        uint availableCount = 0;
        for (uint i = 0; i < rideCounter; i++) {
            if (rides[i].status == STATUS.CREATED && rides[i].fare != 0) {
                allRides[availableCount] = rides[i];
                availableCount++;
            }
        }
        return allRides;
    }

    function getridesByDriver(
        address _driver
    ) public view returns (Ride[] memory) {
        uint[] storage driverRideIds = ridesByDriver[_driver];
        Ride[] memory ridesByDriver_ = new Ride[](driverRideIds.length);
        for (uint i = 0; i < driverRideIds.length; i++) {
            ridesByDriver_[i] = rides[driverRideIds[i]];
        }
        return ridesByDriver_;
    }

    function getRidesByPassenger(
        address _passenger,
        STATUS _status
    ) public view returns (Ride[] memory) {
        uint[] memory rideIds = ridesByPassenger[_passenger];
        Ride[] memory passengerRides = new Ride[](rideIds.length);
        uint counter = 0;
        for (uint i = 0; i < rideIds.length; i++) {
            if (
                rides[rideIds[i]].status == _status &&
                rides[rideIds[i]].rate > 0
            ) {
                passengerRides[counter] = rides[rideIds[i]];
                counter++;
            }
        }
        Ride[] memory result = new Ride[](counter);
        for (uint j = 0; j < counter; j++) {
            result[j] = passengerRides[j];
        }
        return result;
    }

    function hasActiveRide(address _user) internal view returns (bool) {
        for (uint i = 1; i <= rideCounter; i++) {
            Ride storage ride = rides[i];
            if (ride.status == STATUS.STARTED) {
                if (ride.driver == _user) {
                    return false;
                }
            }
        }
        return true;
    }

    function joinRide(uint _rideId) public payable {
        require(_rideId < rideCounter, "Ride does not exist");
        Ride storage ride = rides[_rideId];
        require(
            ride.status == STATUS.CREATED,
            "Ride should be created or already started"
        );
        require(msg.sender != ride.driver, "Driver cannot join the ride");
        require(!hasJoined(ride, msg.sender), "rider already joined");
        require(ride.passengers.length < ride.capacity, "Ride is already full");
        require(msg.value == rides[_rideId].fare, "Fare amount not matching");
        ride.passengers.push(msg.sender);
        isPassengerReady[msg.sender] = false;
        ridesByPassenger[msg.sender].push(_rideId);
    }

    function areAllPassengersReady(uint _rideId) internal view returns (bool) {
        Ride storage ride = rides[_rideId];
        for (uint i = 0; i < ride.passengers.length; i++) {
            if (!isPassengerReady[ride.passengers[i]]) {
                return false;
            }
        }
        return true;
    }

    function areAllPassengersFinished(
        uint _rideId
    ) internal view returns (bool) {
        Ride storage ride = rides[_rideId];
        for (uint i = 0; i < ride.passengers.length; i++) {
            if (!isPassengerFinished[ride.passengers[i]]) {
                return false;
            }
        }
        return true;
    }

    function startRide(uint _rideId) public {
        require(_rideId < rideCounter, "Ride does not exist");
        Ride storage ride = rides[_rideId];
        require(
            hasActiveRide(ride.driver),
            "You cannot start another ride before completing current"
        );
        require(
            ride.status == STATUS.CREATED,
            "Ride should be created to start"
        );
        require(msg.sender == ride.driver, "Rider cannot start the ride");
        require(areAllPassengersReady(_rideId), "All Passengers are not ready");

        ride.status = STATUS.STARTED;
    }

    function hasJoined(
        Ride memory _ride,
        address _passenger
    ) internal pure returns (bool) {
        for (uint i = 0; i < _ride.passengers.length; i++) {
            if (_ride.passengers[i] == _passenger) {
                return true;
            }
        }
        return false;
    }

    function cancelRide(uint _rideId, address _passenger) public {
        Ride storage ride = rides[_rideId];
        uint[] storage rideIds = ridesByPassenger[_passenger];
        

        if (hasJoined(ride, _passenger)) {
            require(
                ride.status == STATUS.CREATED,
                "Ride cannot be canceled now."
            );
            uint refundAmount = ride.fare;
            bool isPassenger = false;
            for (uint i = 0; i < ride.passengers.length; i++) {
                if (ride.passengers[i] == _passenger) {
                    isPassenger = true;
                    ride.passengers[i] = ride.passengers[
                        ride.passengers.length - 1
                    ];
                    ride.passengers.pop();
                    rideIds[_rideId] = rideIds[rideIds.length-1];
                    rideIds.pop();
                    break;
                }
            }
            require(isPassenger, "Passenger not found in ride.");
            payable(_passenger).transfer(refundAmount);
        } else {
            require(msg.sender == ride.driver, "must be driver");
            if (ride.passengers.length != 0) {
                for (uint i = 0; i < ride.passengers.length; i++) {
                    payable(ride.passengers[i]).transfer(ride.fare);
                }
            }
            ride.status = STATUS.CANCELED;
        }
    }

    function passengerIsReady(uint _rideId) public {
        require(_rideId <= rideCounter, "Invalid ride ID");
        Ride storage ride = rides[_rideId];
        require(msg.sender != ride.driver, "Driver cannot call this function");
        require(ride.passengers.length > 0, "No passengers joined this ride");

        bool isPassenger = false;
        for (uint i = 0; i < ride.passengers.length; i++) {
            if (ride.passengers[i] == msg.sender) {
                isPassengerReady[msg.sender] = true;
                isPassenger = true;
                break;
            }
        }
        require(isPassenger, "Only joined passenger can call this function");
    }

    function passengerIsFinished(
        uint _rideId,
        string memory _destination,
        uint _distance
    ) public payable {
        require(_rideId <= rideCounter, "Invalid ride ID");
        Ride storage ride = rides[_rideId];
        require(msg.sender != ride.driver, "Driver cannot call this function");
        require(ride.status == STATUS.STARTED, "Ride has not been started yet");
        bool isPassenger = false;
        for (uint i = 0; i < ride.passengers.length; i++) {
            if (ride.passengers[i] == msg.sender) {
                passengerFinalFare[_rideId][msg.sender] = msg.value;
                passengerTravelDistance[_rideId][msg.sender] = _distance;
                passengerDropoff[_rideId][msg.sender] = _destination;
                isPassengerFinished[msg.sender] = true;
                isPassenger = true;
                ride.totalFare += msg.value;
                break;
            }
        }
        require(isPassenger, "Only joined passenger can call this function");
    }

    function rateDriver(uint _rideId, uint _rating) public {
        Ride storage ride = rides[_rideId];
        require(hasJoined(ride, msg.sender), "Must be a passenger to rate");
        require(ride.status == STATUS.FINISHED);
        DriverRatings[ride.driver] += (_rating / ride.passengers.length);
    }

    function completeJourney(uint _rideId) public {
        Ride storage ride = rides[_rideId];
        require(
            msg.sender == ride.driver,
            "Only driver can complete the journey."
        );
        require(ride.status == STATUS.STARTED, "Journey has not yet started.");
        require(ride.passengers.length > 0, "No passengers in this ride.");
        require(
            areAllPassengersFinished(_rideId),
            "All passengers need to acknowledge that the journey is finished."
        );
        uint256 fare = ride.totalFare + (ride.fare * ride.passengers.length);
        uint256 driverAmount = (fare * 8) / 10;
        uint rewardAmount = fare - driverAmount;

        // Check if driver has completed 5 rides and has an average rating of at least 3
        if (
            RideCompleted[msg.sender] % 5 == 0 && DriverRatings[msg.sender] > 3
        ) {
            payable(ride.driver).transfer(DriverReward[msg.sender]);
            DriverReward[msg.sender] = 0;
        } else {
            DriverReward[msg.sender] += DriverReward[msg.sender] + rewardAmount;
        }
        payable(ride.driver).transfer(driverAmount);
        RideCompleted[msg.sender]++;
        ride.status = STATUS.FINISHED;
    }

    function getReward(address _driver) public view returns (uint256) {
        return DriverReward[_driver];
    }

    function getDriverRating(address _driver) public view returns (uint256) {
        return DriverRatings[_driver]/(RideCompleted[_driver]);
    }

    function rideCompleted(address _driver) public view returns (uint256) {
        return RideCompleted[_driver];
    }

    function rideCompletedPassenger(
        address _passenger
    ) public view returns (uint256) {
        uint[] memory rideIds = ridesByPassenger[_passenger];
        return rideIds.length;
    }
}
