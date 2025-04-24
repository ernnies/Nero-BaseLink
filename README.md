## BaseLink Overview

BaseLink is a Dapp that enables users and small businesses to create USDT payment links on Base!

## Problem

Currently, social media-based business owners face significant barriers in receiving international payments. While they can easily market their products globally, converting international interest into actual sales remains a challenge. They can share long wallet addresses to receive payments but this is prone to typo error. This approach is also inconvenient for users or small businesses who want to track payments and inventory.

## Solution

BaseLink lets users create listings, share links, and receive USDT payments directly to their wallet. It's great for small businesses, donations, and community contributions. BaseLink has the benefits of:

- Eliminating error with long wallet addresses
- Enables cross border payments
- Inventory management

## Demo & Transaction

- [Live Dapp](https://baselnk.vercel.app)

## Tech Stack

- **Backend**: Solidity, Remix, PostgreSql

- **Frontend**: NextJs, Wagmi library, Base smart wallet for blockchain interaction

- **Approach**: Associate listings with smart wallet addresses on smart contract. Facilitate payments via smart contract on BASE(Sepolia) blockchain for speed, and gas free!

## Road Map (v0.0.1)

- incorporate sponsored gas for managing listings on mainnet

- make payments (approval and transfer) one click

- Add optional email notification on received payments

- Add Images and videos to listings

- Add public listing page for verified social media businesses (Marketplace)

## Previews

![homepage](https://baselnk.vercel.app/img/homepage.png)

![dashboard](https://baselnk.vercel.app/img/dashboard.png)

![create_listing](https://baselnk.vercel.app/img/create_listing.png)

![view_listing](https://baselnk.vercel.app/img/view_listing.png)

![payment_page](https://baselnk.vercel.app/img/payment_page.png)
