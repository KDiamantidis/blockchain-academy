---
order: 2
title: Solidity από το μηδέν
goal: Να γράφεις και να διαβάζεις smart contracts άνετα.
prerequisites: Φάση 1. Βοηθάει αν έχεις γράψει λίγο κώδικα σε οποιαδήποτε γλώσσα.
terms: [solidity, smart-contract, evm, remix, foundry, erc20]
steps:
  - id: p2-cyfrin-solidity
    title: 'Cyfrin Updraft: Solidity Smart Contract Development'
    provider: Cyfrin Updraft
    url: https://updraft.cyfrin.io/courses/solidity
    required: true
    note: Δωρεάν. Γράφεις τα πρώτα σου contracts στο Remix IDE, μέσα από τον browser.
    duration: περίπου 5 ώρες
    sections:
      - Simple Storage
      - Storage Factory
      - Fund Me
      - AI Prompting
  - id: p2-alchemy-solidity
    title: 'Alchemy University: Learn Solidity'
    provider: Alchemy University
    url: https://www.alchemy.com/university/courses/solidity
    required: true
    note: Σύγχρονη Solidity 0.8.20 και tests με Foundry.
    sections:
      - Solidity Introduction
      - Address Interactions
      - Reference Types
      - Applied Solidity
    highlight: Πρόσεξε το Voting contract. Είναι μια μικρή πρώτη εκδοχή του Voting dApp από τα Ομαδικά Projects.
  - id: p2-cryptozombies
    title: CryptoZombies
    provider: CryptoZombies
    url: https://cryptozombies.io/en/course
    required: false
    note: Gamified ζέσταμα. Φτιάχνεις ένα παιχνίδι βήμα βήμα.
    warning: Χρησιμοποιεί παλιά έκδοση της Solidity. Μάθε τις έννοιες, όχι το syntax.
checks:
  - Ποια είναι η διαφορά ανάμεσα σε storage, memory και calldata;
  - Τι κάνουν τα view, pure και payable;
  - Πώς δουλεύουν τα msg.sender και msg.value;
  - Τι είναι ένας modifier και γιατί υπάρχει το onlyOwner;
  - Μπορείς να διαβάσεις ένα contract 100 γραμμών και να πεις τι κάνει;
pitfalls:
  - Αντιγράφεις κώδικα από παλιά tutorials (pragma 0.4 έως 0.7). Στην 0.8 άλλαξαν πολλά, π.χ. έχει έλεγχο για overflow.
  - Αφήνεις το AI να γράφει τα contracts για σένα. Ζήτα του να σου εξηγήσει, όχι να λύσει.
  - Κάνεις deploy σε testnet πριν δοκιμάσεις στο Remix VM. Δοκίμασε πρώτα τοπικά.
---
