---
order: 4
title: Βασικά εργαλεία
goal: Να ξέρεις τα εργαλεία που χρησιμοποιείς σχεδόν σε κάθε δοκιμή, και πού μπορείς να εξασκηθείς νόμιμα.
prerequisites: Κεφάλαια 2 και 3, ή να ξέρεις ήδη HTTP, HTML και JavaScript.
steps:
  - id: web-4-1
    title: Browser Developer Tools
    anchor: '4.1'
    required: true
    group: Διάβασε
  - id: web-4-2
    title: Burp Suite
    anchor: '4.2'
    required: true
    group: Διάβασε
  - id: web-4-3
    title: OWASP ZAP
    anchor: '4.3'
    required: true
    group: Διάβασε
  - id: web-4-4
    title: Nmap
    anchor: '4.4'
    required: true
    group: Διάβασε
  - id: web-4-5
    title: Άλλα χρήσιμα εργαλεία
    anchor: '4.5'
    required: true
    group: Διάβασε
  - id: web-4-6
    title: Εκπαιδευτικά περιβάλλοντα (labs)
    anchor: '4.6'
    required: true
    group: Διάβασε
  - id: web-4-burp
    title: Εγκατάστησε το Burp Suite Community Edition
    provider: PortSwigger
    url: https://portswigger.net/burp/communitydownload
    required: false
    group: Στήσε τα εργαλεία σου
    note: Η δωρεάν έκδοση αρκεί. Εγκατάστησέ το στο virtual machine σου και δοκίμασε να δεις τα requests ενός site μέσα από το Proxy.
  - id: web-4-academy
    title: Φτιάξε λογαριασμό στο Web Security Academy
    provider: PortSwigger
    url: https://portswigger.net/web-security
    required: false
    group: Στήσε τα εργαλεία σου
    note: Δωρεάν online labs από τους δημιουργούς του Burp Suite. Εκεί θα εξασκηθείς στις ευπάθειες του Κεφαλαίου 7.
checks:
  - Ποια καρτέλα των DevTools σου δείχνει τα HTTP requests και responses, και τι βλέπεις όταν κάνεις κλικ σε ένα;
  - Τι είναι ένα proxy και γιατί το Burp Suite είναι τόσο χρήσιμο στο security testing;
  - Ποια η διαφορά ανάμεσα στο Repeater και στο Intruder του Burp Suite;
  - Πού μπορείς να εξασκηθείς νόμιμα; Αναφέρε δύο labs.
---

Ένας καλός οδοιπόρος χρειάζεται τα σωστά εργαλεία. Στο Web Security, υπάρχουν ορισμένα εργαλεία που χρησιμοποιείς σχεδόν σε κάθε εργασία. Θα τα χωρίσουμε σε κατηγορίες.

## 4.1 Browser Developer Tools

Το πιο προσβάσιμο εργαλείο είναι ήδη στον browser σου. Τα **Developer Tools** (DevTools) είναι ένα ισχυρό σύνολο εργαλείων ενσωματωμένο σε κάθε σύγχρονο browser.

**Πώς τα ανοίγεις:** Πάτα <kbd>F12</kbd> ή κλικ δεξί → "Inspect" σε οποιαδήποτε σελίδα.

### Βασικές καρτέλες (tabs)

- **Elements:** Δείχνει τον HTML κώδικα της σελίδας. Μπορείς να δεις και να τροποποιήσεις (προσωρινά) τη δομή.
- **Console:** Εδώ εκτελείται JavaScript. Μπορείς να δεις σφάλματα και να τρέξεις εντολές.
- **Network:** Δείχνει όλα τα HTTP αιτήματα και απαντήσεις. Αυτή είναι η πιο σημαντική καρτέλα για security testing.
- **Storage:** Δείχνει cookies, localStorage και sessionStorage.
- **Sources:** Δείχνει τα αρχεία JS και CSS που έχουν φορτωθεί.

Στην καρτέλα Network: κάθε αίτημα εμφανίζεται ως γραμμή. Κάνε κλικ σε ένα αίτημα για να δεις τα πλήρη headers, το body, την απάντηση κ.λπ.

## 4.2 Burp Suite

Το **Burp Suite** είναι το πιο διαδεδομένο εργαλείο για web security testing. Λειτουργεί ως proxy, δηλαδή παρεμβάλλεται μεταξύ του browser και του server, επιτρέποντάς σου να δεις, να τροποποιήσεις και να επαναστείλεις αιτήματα.

> **Proxy:** Ένας ενδιάμεσος που "ακούει" την κυκλοφορία μεταξύ δύο σημείων. Σαν έναν μεσολαβητή που διαβάζει τα γράμματα πριν τα παραδώσει.

### Βασικά components του Burp Suite

- **Proxy:** Παρακολουθεί και τροποποιεί HTTP αιτήματα σε πραγματικό χρόνο.
- **Repeater:** Επαναστέλνει αιτήματα με τροποποιήσεις, ιδανικό για δοκιμή ευπαθειών.
- **Intruder:** Αυτοματοποιεί επαναληπτικά αιτήματα με διαφορετικές τιμές (fuzzing).
- **Scanner (Pro):** Αυτόματη ανίχνευση ευπαθειών.
- **Decoder:** Κωδικοποιεί/αποκωδικοποιεί δεδομένα (Base64, URL encoding κ.λπ.).

Υπάρχει δωρεάν έκδοση (Community) και επί πληρωμή (Professional). Η Community Edition αρκεί.

## 4.3 OWASP ZAP

Το **OWASP ZAP** (Zed Attack Proxy) είναι ένα δωρεάν, open-source εναλλακτικό του Burp Suite. Αναπτύσσεται από τον OWASP (Open Web Application Security Project), έναν μη κερδοσκοπικό οργανισμό αφιερωμένο στην ασφάλεια web. Είναι εξαιρετικό για αρχάριους λόγω της εύκολης διεπαφής και του automated scanner.

## 4.4 Nmap

Το **Nmap** (Network Mapper) είναι ένα εργαλείο ανακάλυψης δικτύου. Χρησιμοποιείται για να εντοπίσεις ποιες συσκευές είναι συνδεδεμένες σε ένα δίκτυο και ποιες θύρες (ports) είναι ανοιχτές.

> **Port:** Ένα «παράθυρο» στον server μέσω του οποίου λαμβάνει συγκεκριμένο τύπο κυκλοφορίας. Π.χ. θύρα 80 για HTTP, 443 για HTTPS, 22 για SSH.

```bash
nmap -sV 192.168.1.1   # Ανίχνευση υπηρεσιών σε IP
```

## 4.5 Άλλα χρήσιμα εργαλεία

- **curl:** Εργαλείο command line για αποστολή HTTP αιτημάτων. Εξαιρετικό για γρήγορες δοκιμές.
- **SQLmap:** Αυτόματη ανίχνευση SQL injection ευπαθειών.
- **Nikto:** Web server scanner (ανιχνεύει γνωστές ευπάθειες).
- **Gobuster / DirBuster:** Ανακαλύπτει κρυφές σελίδες και directories.

## 4.6 Εκπαιδευτικά περιβάλλοντα (labs)

Αυτά είναι νόμιμα, ελεγχόμενα περιβάλλοντα για εξάσκηση:

- **DVWA** (Damn Vulnerable Web Application): Ιστοσελίδα σκόπιμα ευάλωτη, τοπική εγκατάσταση.
- **WebGoat** (OWASP): Διαδραστικό εκπαιδευτικό εργαλείο για web ευπάθειες.
- **HackTheBox:** Online πλατφόρμα με challenges και vulnerable machines.
- **TryHackMe:** Online πλατφόρμα με καθοδηγούμενα μαθήματα, ιδανική για αρχάριους.
- **PortSwigger Web Academy:** Δωρεάν online labs από τους δημιουργούς του Burp Suite.

## Σύνοψη

- Τα Browser DevTools είναι ο πρώτος σου σύμμαχος, δωρεάν και πάντα διαθέσιμα.
- Το Burp Suite είναι το industry-standard proxy εργαλείο για web security testing.
- Το OWASP ZAP είναι δωρεάν εναλλακτικό, εξαιρετικό για αρχάριους.
- Εξασκήσου πάντα σε νόμιμα labs (DVWA, TryHackMe, HackTheBox).
