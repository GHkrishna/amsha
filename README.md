# amshah
A fractionalization project created under, buildspace (n&amp;w s4)

## Journey
The name ‘Amshah’ is a Sanskrit word for ‘excerpt/fraction’ and the project is about NFT fractionalization. It started in a cohort and has been in progress since then.

The tech stack used for the project is ReactJs for frontend, NestJs for backend, and truffle for smart contract deployment (However, with the discontinued support for Truffle I’m exploring Hardhat).

The current implementation allows an NFT holder to fractionalize their NFTs on the supported chain to be fractionalised.

Here, fractionalization defines transferring the ownership of the ERC-721 token from the holder to the fractionalization contract.

In return, the fractionalizer receives Amshah (AMSH), an ERC-20 token. The tokenomics is not yet configured and the amount of native token received and the price of the NFT if sellable, are set by the fractionalizer.

### Details

- **Tech Stack**: ReactJS (frontend); <br>
                  NESTJS (backend);<br>
                  Truffle, Remix (Contract management and deployment) <br>
- **Supported Blockchain**: Polygon Mumbai (Testnet) <br>
- **Contract Address**: <br>
- **GitHub**: https://github.com/amshah <br>


### Initializing

<code>$ git clone https://github.com/amshah code</code>

<code>$ cd code</code>

<i>Note: more about truffle react box used as a template, [here](https://trufflesuite.com/boxes/react/)</i>

Start the react frontend:

```sh
$ cd client
$ npm start
```
Build with [Truffle](https://trufflesuite.com) and [Webpack](https://webpack.js.org)

Start the Nest backend:
```sh
$ cd server
$ npm start
```
This starts the ReactJS client and the NestJS server.

## Sample screenshots:

### Wallet not connected

![Screenshot 2023-10-08 025102](https://github.com/GHkrishna/amshah/assets/74084119/ca20e76e-8403-4a14-b54a-fb1160c06ebf)

### Connecting the Wallet using WalletConnect
![Screenshot 2023-10-08 025115](https://github.com/GHkrishna/amshah/assets/74084119/b0727a67-d50c-4d10-979b-891f9a352d2d)

### Wallet connected but unsupported chain selected
![Screenshot 2023-10-08 025140](https://github.com/GHkrishna/amshah/assets/74084119/14a98aad-0a1a-422e-bf5b-23999f9fb9e6)

### Switching to supported chain #1
![Screenshot 2023-10-08 025157](https://github.com/GHkrishna/amshah/assets/74084119/c5c5b9ec-5e1e-4c4e-929c-fbec25e5f7dd)

### Switching to supported chain #2
![Screenshot 2023-10-08 025214](https://github.com/GHkrishna/amshah/assets/74084119/a0630559-0618-481a-a1c3-dee4ec67f322)

### Wallet connected and owned NFTs displayed to be fractionalized
![Screenshot 2023-10-08 025231](https://github.com/GHkrishna/amshah/assets/74084119/dc8f85b6-c83c-4464-91d7-0450da4662e8)
