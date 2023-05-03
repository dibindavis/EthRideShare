var RideShare = artifacts.require('./src/contracts/RideSharing');
module.exports = function(deployer) {
    deployer.deploy(RideShare);
    // Additional contracts can be deployed here
};