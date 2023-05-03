import Web3 from "web3";

const MetamaskInit = async () => {
  if (window.ethereum!==undefined) {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
      return Promise.resolve(accounts[0]);
    } catch (error) {
      console.error(error);
      return Promise.reject(undefined);
    }
  } else {
    console.error("Metamask is not installed");
  }
};

export default MetamaskInit;