import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { configureChains, createConfig } from 'wagmi'
import { arbitrum, mainnet, polygon, polygonMumbai } from 'wagmi/chains'

const chains = [mainnet, polygon, polygonMumbai, arbitrum];
const projectId = process.env.REACT_APP_WALLETCONNECT_PROJECT_ID;

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

export {ethereumClient, wagmiConfig};