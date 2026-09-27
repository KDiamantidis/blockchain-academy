---
order: 4
title: Χτίζουμε dApps
goal: Να φτιάχνεις ολόκληρες εφαρμογές (contract και front-end) και να τις ανεβάζεις σε testnet.
prerequisites: Φάση 2. Η Φάση 3 βοηθάει αλλά δεν είναι απαραίτητη για να ξεκινήσεις.
terms: [dapp, testnet, sepolia, faucet, dex, oracle, stablecoin]
steps:
  - id: p4-speedrun-0
    group: 'Speedrun Ethereum: τα βασικά challenges'
    title: 'Speedrun Ethereum: Challenge #0 Tokenization'
    provider: Speedrun Ethereum
    url: https://speedrunethereum.com/
    required: true
    note: Το πρώτο challenge. Στήνεις το Scaffold-ETH 2 και φτιάχνεις το πρώτο σου token contract με front-end.
  - id: p4-speedrun-1
    group: 'Speedrun Ethereum: τα βασικά challenges'
    title: 'Challenge #1 Crowdfunding'
    provider: Speedrun Ethereum
    url: https://speedrunethereum.com/
    required: true
    note: Ένα contract που μαζεύει χρήματα από πολλούς χρήστες και αποφασίζει τι θα γίνουν.
  - id: p4-speedrun-2
    group: 'Speedrun Ethereum: τα βασικά challenges'
    title: 'Challenge #2 Token Vendor'
    provider: Speedrun Ethereum
    url: https://speedrunethereum.com/
    required: true
    note: Ένα contract που πουλάει και αγοράζει tokens.
  - id: p4-speedrun-3
    group: 'Speedrun Ethereum: τα βασικά challenges'
    title: 'Challenge #3 Dice Game'
    provider: Speedrun Ethereum
    url: https://speedrunethereum.com/
    required: true
    note: Η πρώτη σου «επίθεση». Προβλέπεις αδύναμη τυχαιότητα και κερδίζεις το παιχνίδι.
  - id: p4-speedrun-4
    group: 'Speedrun Ethereum: τα βασικά challenges'
    title: 'Challenge #4 Build a DEX'
    provider: Speedrun Ethereum
    url: https://speedrunethereum.com/
    required: true
    note: Φτιάχνεις ένα μικρό decentralized exchange.
  - id: p4-speedrun-5
    group: 'Speedrun Ethereum: προχωρημένα challenges'
    title: 'Challenge #5 Oracles'
    provider: Speedrun Ethereum
    url: https://speedrunethereum.com/
    required: false
  - id: p4-speedrun-6
    group: 'Speedrun Ethereum: προχωρημένα challenges'
    title: 'Challenge #6 Over-Collateralized Lending'
    provider: Speedrun Ethereum
    url: https://speedrunethereum.com/
    required: false
  - id: p4-speedrun-7
    group: 'Speedrun Ethereum: προχωρημένα challenges'
    title: 'Challenge #7 Stablecoins'
    provider: Speedrun Ethereum
    url: https://speedrunethereum.com/
    required: false
  - id: p4-speedrun-8
    group: 'Speedrun Ethereum: προχωρημένα challenges'
    title: 'Challenge #8 Prediction Markets'
    provider: Speedrun Ethereum
    url: https://speedrunethereum.com/
    required: false
  - id: p4-speedrun-9
    group: 'Speedrun Ethereum: προχωρημένα challenges'
    title: 'Challenge #9 ZK Voting'
    provider: Speedrun Ethereum
    url: https://speedrunethereum.com/
    required: false
    highlight: Σχετικό με την ιδέα του Voting dApp στα Ομαδικά Projects.
  - id: p4-cyfrin-foundry
    group: 'Για περισσότερο βάθος'
    title: 'Cyfrin Updraft: Foundry Fundamentals'
    provider: Cyfrin Updraft
    url: https://updraft.cyfrin.io/courses/foundry
    required: false
    note: Δωρεάν. Foundry σε βάθος. Θα το χρειαστείς για τα πιο δύσκολα CTFs.
checks:
  - Πώς μιλάει ένα front-end με ένα contract; Τι ρόλο παίζουν το wallet και το ABI;
  - Γιατί η «τυχαιότητα» μέσα σε ένα contract μπορεί να προβλεφθεί;
  - Μπορείς να κάνεις deploy ένα contract στο Sepolia και να το βρεις σε block explorer;
  - Τι είναι ένα faucet και γιατί δουλεύουμε σε testnet;
pitfalls:
  - Βάζεις το private key του deployer σε αρχείο που ανεβαίνει στο GitHub. Έλεγξε το .gitignore πριν από κάθε push.
  - Κάνεις deploy με wallet που έχει πραγματικά χρήματα. Χρησιμοποίησε μόνο το wallet για testnets.
  - Κολλάς σε faucet που δεν σου δίνει ETH. Τα faucets έχουν όρια. Ρώτα στο #block-chain πριν χάσεις ώρες.
---

## Πριν ξεκινήσεις: setup

Από εδώ και πέρα δουλεύεις τοπικά στον υπολογιστή σου. Χρειάζεσαι:

- **Node.js** και **Git**
- το **wallet** σου (μόνο για testnets)
- **Sepolia testnet ETH** από ένα faucet
- το **Scaffold-ETH 2**, που το στήνεις στο πρώτο challenge

Ανέβαζε κάθε challenge στο GitHub σου μόλις το τελειώσεις.
