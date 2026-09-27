---
order: 0
title: Προετοιμασία
goal: Να έχεις τα εργαλεία και την ελάχιστη βάση σε προγραμματισμό.
prerequisites: Κανένα. Από εδώ ξεκινάνε όλοι.
terms: [git, wallet, private-key, seed-phrase, testnet]
steps:
  - id: p0-github-skills
    title: 'GitHub Skills: Introduction to GitHub'
    provider: GitHub Skills
    url: https://github.com/skills/introduction-to-github
    required: true
    note: Δωρεάν και διαδραστικό. Μαθαίνεις branches, commits και pull requests πάνω σε πραγματικό repo.
    duration: κάτω από 1 ώρα
  - id: p0-wallet
    title: Εγκατάσταση wallet (π.χ. MetaMask) και κανόνες ασφαλείας
    required: true
    note: Βάζεις ένα wallet στον browser σου και μαθαίνεις να το χρησιμοποιείς με ασφάλεια. Κατέβασέ το μόνο από το επίσημο site ή το επίσημο store του browser.
    warning: Μόνο testnets, ποτέ πραγματικά χρήματα. Ποτέ μην επικολλήσεις private key ή seed phrase σε κώδικα ή σε site.
  - id: p0-alchemy-js
    title: 'Alchemy University: Learn JavaScript'
    provider: Alchemy University
    url: https://www.alchemy.com/university/courses/js
    required: false
    note: Για όσους δεν έχουν γράψει JavaScript. Θα τη χρειαστείς στη Φάση 3 και στα dApps της Φάσης 4.
  - id: p0-cyfrin-wallet-security
    title: 'Cyfrin Updraft: Web3 Wallet Security Basics'
    provider: Cyfrin Updraft
    url: https://updraft.cyfrin.io/courses/web3-wallet-security-basics
    required: false
    note: Πώς δουλεύουν τα wallets και πώς ελέγχεις ένα transaction ή μια υπογραφή πριν πατήσεις «Confirm».
    duration: περίπου 1 ώρα
checks:
  - Μπορείς να εξηγήσεις τι είναι commit, branch και pull request;
  - Έχεις δικό σου repo στο GitHub για ό,τι θα φτιάξεις από εδώ και πέρα;
  - Ξέρεις τη διαφορά ανάμεσα σε testnet και mainnet;
  - Ξέρεις γιατί δεν δίνεις ποτέ σε κανέναν το seed phrase σου, ούτε σε «support»;
pitfalls:
  - Χρησιμοποιείς το ίδιο wallet για δοκιμές και για πραγματικά χρήματα. Φτιάξε ξεχωριστό wallet μόνο για testnets.
  - Κάνεις commit ένα αρχείο .env με private key. Βάλε το .env στο .gitignore από την πρώτη μέρα.
  - Κατεβάζεις wallet από διαφήμιση ή από link σε chat. Υπάρχουν ψεύτικα extensions που κλέβουν seed phrases.
---

## Γιατί Git από την πρώτη μέρα

Ό,τι φτιάχνεις σε αυτόν τον οδηγό το κρατάς στα δικά σου repos στο GitHub: ασκήσεις από τα courses, τα Speedrun projects, τα write-ups από το Ethernaut. Στο τέλος αυτό είναι το portfolio σου.

Τα ομαδικά projects θα τα χτίσουμε με pull requests και code reviews. Αν ξέρεις ήδη branches και PRs, μπαίνεις κατευθείαν στη δουλειά.
