import { Web3Button, Web3NetworkSwitch } from "@web3modal/react";

const ConnectWallet = () => {
    return(
        <>
        <Web3NetworkSwitch />
        <Web3Button icon="show" label="Connect Wallet" balance="show" />
        </>
    )
}

export default ConnectWallet;