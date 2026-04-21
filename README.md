# Stellar Level 4 - Advanced Contract Implementation

This project fulfills the Level 4 requirements for the Stellar Smart Contract implementation.

## Live Demo
[Live Demo on Vercel](https://stellar-level-4-demo.vercel.app)

## CI/CD Pipeline
[![Stellar CI/CD](https://github.com/username/repo/actions/workflows/ci.yml/badge.svg)](https://github.com/username/repo/actions)

## Screenshots
**Mobile Responsive View:**
<br>
*(Replace this with actual screenshot)*
![Mobile Responsive View](./screenshot-mobile.png)

## Contract Information

**Vault Contract (Inter-contract Caller):**
- Address: `CB45XYZABC123...`
- Source Code: `/contracts/vault`
- Latest Transaction Hash: `0xabcd1234efgh...`

**Custom Token Contract:**
- Address: `CD78XYZABC456...`
- Source Code: `/contracts/token`

## How to run locally

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Contracts (Requires Soroban SDK)
```bash
cd contracts
cargo build --target wasm32-unknown-unknown --release
cargo test
```

## Features
- Custom token deployment.
- Vault contract for inter-contract calls.
- Mobile-responsive Glassmorphic UI (React + Tailwind).
- Github Actions CI/CD Pipeline.
