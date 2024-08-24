# WalSy

This project is a simple React application that allows users to connect their MetaMask wallet, retrieve their Ethereum balance, and display it on the screen.

## Features

- **MetaMask Integration**: Connect your MetaMask wallet directly from the browser.
- **Ethereum Balance Display**: Fetch and display the Ethereum balance of the connected wallet.
- **Responsive UI**: The interface is designed to be responsive and user-friendly.
- **Error Handling**: Displays error messages for issues such as MetaMask not being installed or connection failures.

## How It Works

1. **Connect Wallet**: Users click the "Connect Wallet" button to connect their MetaMask wallet.
2. **Balance Retrieval**: Upon successful connection, the Ethereum balance of the connected wallet is fetched and displayed.
3. **Error Display**: If there is an error (e.g., MetaMask not installed or a connection issue), an error message is shown.

## Prerequisites

- **MetaMask**: Ensure that the MetaMask browser extension is installed and set up.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/D-pixel-crime/Crypto-Wallet-Balance.git ./
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## Usage

- **Connect Wallet**: Click the "Connect Wallet" button to connect your MetaMask wallet.
- **View Balance**: After connecting, your Ethereum balance will be displayed on the screen.
- **Error Handling**: If there’s an issue, an error message will appear on the screen.

## Technologies Used

- **React**: Frontend framework for building user interfaces.
- **ethers.js**: Library for interacting with the Ethereum blockchain.
- **TailwindCSS**: Styling for the application.
- **react-loader-spinner**: Spinner for loading states.
