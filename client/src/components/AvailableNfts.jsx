import CustomCard from "./cards/index"
// import {useAccount} from 'wagmi';
// import { useToken } from 'wagmi'


function AvailableNfts() {
  // const account  = useAccount();
  // console.log("This is account data", account);
  return (
    <div className="AvailableNfts">
    <div className="cardDeque">
        <CustomCard/>
    </div>
    </div>
  );
}


export default AvailableNfts;