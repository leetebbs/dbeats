import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react"

import AppLayout from "./pages/AppLayout"
import LandingPage from "./pages/LandingPage"

const projectId = import.meta.env.VITE_WALLETCONNECT_ID

const mainnet = {
    chainId: 1,
    name: "Ethereum",
    currency: "ETH",
    explorerUrl: "https://etherscan.io",
    rpcUrl: import.meta.env.VITE_ETH_MAINNET_RPC,
}

const base = {
    chainId: 8453,
    name: "Base",
    currency: "ETH",
    rpcUrl: import.meta.env.VITE_BASE_RPC,
}

const metadata = {
    name: "DBeats",
    description: "NFT Marketplace For Music",
    url: "https://dbeats.xyz", // origin must match your domain & subdomain
    icons: [],
}

const ethersConfig = defaultConfig({
    metadata,
    enableEIP6963: true, // true by default
    enableInjected: true, // true by default
    enableCoinbase: true, // true by default
    defaultChainId: 1, // used for the Coinbase SDK
    auth: {
        email: true,
        socials: ["google", "x", "apple", "farcaster"],
        showWallets: true,
        walletFeatures: true,
    },
})

createWeb3Modal({
    ethersConfig,
    chains: [mainnet, base],
    projectId,
    enableAnalytics: true,
    themeMode: "light",
})

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <LandingPage />,
            },
        ],
    },
])

function App() {
    return <RouterProvider router={router} />
}

export default App