// import { useState } from "react";
import ConnectWallet from "./connectWallet";
import { ethereumClient, wagmiConfig } from "../../contexts/WalletContext";
import { Web3Modal } from "@web3modal/react";
import { WagmiConfig } from "wagmi";

const projectId = process.env.REACT_APP_WALLETCONNECT_PROJECT_ID;
function Navbar() {

  return (
    <div className="navbar">
      <h1>amshaḥ</h1>
      <WagmiConfig config={wagmiConfig}>
        <ConnectWallet />
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />

      {/*<Web3NetworkSwitch />
      <Web3Button icon="show" label="Connect Wallet" balance="show" />
  */}
    </div>
  );
}

export default Navbar;
