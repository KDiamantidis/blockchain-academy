---
order: 5
title: Σπάμε smart contracts
goal: Να σκέφτεσαι σαν attacker. Αυτό είναι ακριβώς το στυλ των blockchain challenges στα CTFs.
prerequisites: Φάσεις 2 και 4. Η Φάση 3 βοηθάει πολύ στα πιο δύσκολα levels.
terms: [reentrancy, delegatecall, tx-origin, storage-slot, selfdestruct, write-up, ctf]
steps:
  - id: p5-ethernaut-0
    group: 'Ethernaut: levels 0–5'
    title: 'Ethernaut, level 0: Hello Ethernaut'
    provider: OpenZeppelin
    url: https://ethernaut.openzeppelin.com/
    required: true
    note: Μαθαίνεις να μιλάς με ένα contract από την console του browser.
  - id: p5-ethernaut-1
    group: 'Ethernaut: levels 0–5'
    title: 'Level 1: Fallback'
    provider: OpenZeppelin
    url: https://ethernaut.openzeppelin.com/
    required: true
    hint: Τι κάνουν οι συναρτήσεις fallback και receive, και ποιος μπορεί να τις καλέσει.
  - id: p5-ethernaut-2
    group: 'Ethernaut: levels 0–5'
    title: 'Level 2: Fallout'
    provider: OpenZeppelin
    url: https://ethernaut.openzeppelin.com/
    required: true
    hint: Πώς γράφονταν οι constructors στις παλιές εκδόσεις και γιατί ένα τυπογραφικό λάθος κοστίζει.
  - id: p5-ethernaut-3
    group: 'Ethernaut: levels 0–5'
    title: 'Level 3: Coin Flip'
    provider: OpenZeppelin
    url: https://ethernaut.openzeppelin.com/
    required: true
    hint: Γιατί τα δεδομένα του block δεν είναι πηγή τυχαιότητας.
  - id: p5-ethernaut-4
    group: 'Ethernaut: levels 0–5'
    title: 'Level 4: Telephone'
    provider: OpenZeppelin
    url: https://ethernaut.openzeppelin.com/
    required: true
    hint: Η διαφορά ανάμεσα σε tx.origin και msg.sender.
  - id: p5-ethernaut-5
    group: 'Ethernaut: levels 0–5'
    title: 'Level 5: Token'
    provider: OpenZeppelin
    url: https://ethernaut.openzeppelin.com/
    required: true
    hint: Integer underflow στις εκδόσεις πριν από τη Solidity 0.8.
  - id: p5-ethernaut-6
    group: 'Ethernaut: levels 6–11'
    title: 'Level 6: Delegation'
    provider: OpenZeppelin
    url: https://ethernaut.openzeppelin.com/
    required: true
    hint: Τι κάνει το delegatecall με το storage του contract που το καλεί.
  - id: p5-ethernaut-7
    group: 'Ethernaut: levels 6–11'
    title: 'Level 7: Force'
    provider: OpenZeppelin
    url: https://ethernaut.openzeppelin.com/
    required: true
    hint: Τρόποι να στείλεις ETH σε ένα contract που δεν το δέχεται.
  - id: p5-ethernaut-8
    group: 'Ethernaut: levels 6–11'
    title: 'Level 8: Vault'
    provider: OpenZeppelin
    url: https://ethernaut.openzeppelin.com/
    required: true
    hint: Γιατί το private δεν σημαίνει κρυφό όταν όλα είναι on-chain.
  - id: p5-ethernaut-9
    group: 'Ethernaut: levels 6–11'
    title: 'Level 9: King'
    provider: OpenZeppelin
    url: https://ethernaut.openzeppelin.com/
    required: true
    hint: Denial of service, όταν ένα contract περιμένει ότι η μεταφορά ETH θα πετύχει πάντα.
  - id: p5-ethernaut-10
    group: 'Ethernaut: levels 6–11'
    title: 'Level 10: Re-entrancy'
    provider: OpenZeppelin
    url: https://ethernaut.openzeppelin.com/
    required: true
    hint: Reentrancy και το pattern checks-effects-interactions.
  - id: p5-ethernaut-11
    group: 'Ethernaut: levels 6–11'
    title: 'Level 11: Elevator'
    provider: OpenZeppelin
    url: https://ethernaut.openzeppelin.com/
    required: true
    hint: Γιατί δεν εμπιστεύεσαι ένα εξωτερικό contract να απαντήσει με συνέπεια.
  - id: p5-ethernaut-12-plus
    group: 'Μετά το Ethernaut'
    title: 'Ethernaut, levels 12 και πάνω (advanced)'
    provider: OpenZeppelin
    url: https://ethernaut.openzeppelin.com/
    required: false
    note: Privacy, Gatekeeper One/Two, Naught Coin, Preservation, Recovery, MagicNumber, Alien Codex, Denial, Shop, Dex, Dex Two, Puzzle Wallet, Motorbike και τα νεότερα levels.
  - id: p5-buidlguidl-ctf
    group: 'Μετά το Ethernaut'
    title: BuidlGuidl CTF
    provider: BuidlGuidl
    url: https://ctf.buidlguidl.com
    required: false
    note: 12 challenges με smart contracts.
  - id: p5-dvdefi
    group: 'Μετά το Ethernaut'
    title: Damn Vulnerable DeFi
    url: https://www.damnvulnerabledefi.xyz/
    required: false
    note: Το επόμενο βήμα μετά το Ethernaut. Επιθέσεις σε DeFi πρωτόκολλα.
  - id: p5-cyfrin-security
    group: 'Μετά το Ethernaut'
    title: 'Cyfrin Updraft: Smart Contract Security (advanced)'
    provider: Cyfrin Updraft
    url: https://updraft.cyfrin.io/courses/security
    required: false
    note: Δωρεάν αλλά όχι για αρχάριους. Auditing, fuzzing και invariant testing με Foundry.
checks:
  - Μπορείς να εξηγήσεις το reentrancy και πώς το σταματά το checks-effects-interactions;
  - Ποια είναι η διαφορά ανάμεσα σε tx.origin και msg.sender, και γιατί έχει σημασία;
  - Γιατί μια private μεταβλητή μπορεί να διαβαστεί από οποιονδήποτε;
  - Τι γίνεται με το storage όταν ένα contract κάνει delegatecall;
  - Έχεις γράψει write-up για κάθε level που έλυσες;
pitfalls:
  - Ανοίγεις τη λύση μετά από πέντε λεπτά. Το κόλλημα είναι το μάθημα.
  - Ζητάς από το AI να λύσει το level. Ρώτα το να σου εξηγήσει την έννοια, όχι να σου δώσει exploit.
  - Λύνεις χωρίς να γράψεις γιατί ήταν ευάλωτο. Χωρίς write-up, σε έναν μήνα δεν θα θυμάσαι τίποτα.
  - Το Ethernaut τρέχει σε testnet. Χρειάζεσαι λίγο testnet ETH από faucet πριν ξεκινήσεις.
---

## Ο κανόνας

Προσπάθησε κάθε level **τουλάχιστον μία ώρα** πριν κοιτάξεις λύση.

Όταν το λύσεις, γράψε 3–4 γραμμές: **γιατί** ήταν ευάλωτο και **πώς** διορθώνεται. Αυτό είναι το write-up σου, όπως σε ένα πραγματικό CTF. Ανέβασέ το στο GitHub σου.
