// import Web3 from "web3";

// const provider = new Web3(Web3.givenProvider);

// const getProvider = () => {
//     return provider;
// }

// export default provider;
import {
    useAccount,
    useConnect,
    useDisconnect,
    useEnsAvatar,
    useEnsName,
  } from 'wagmi'


const { address, connector, isConnected } = useAccount()

export {address, connector, isConnected}