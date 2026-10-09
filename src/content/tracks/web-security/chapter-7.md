---
order: 7
title: Κύριες ευπάθειες web
goal: Να αναγνωρίζεις τις πιο διαδεδομένες ευπάθειες web εφαρμογών, να ξέρεις πώς δουλεύουν και πώς προστατεύεται μια εφαρμογή από αυτές.
prerequisites: Κεφάλαια 5 και 6.
steps:
  - id: web-7-1
    title: SQL Injection (SQLi)
    anchor: '7.1'
    required: true
    group: Διάβασε
  - id: web-7-2
    title: Cross-Site Scripting (XSS)
    anchor: '7.2'
    required: true
    group: Διάβασε
  - id: web-7-3
    title: Cross-Site Request Forgery (CSRF)
    anchor: '7.3'
    required: true
    group: Διάβασε
  - id: web-7-4
    title: Insecure file upload
    anchor: '7.4'
    required: true
    group: Διάβασε
  - id: web-7-5
    title: Server-Side Request Forgery (SSRF)
    anchor: '7.5'
    required: true
    group: Διάβασε
  - id: web-7-lab-sqli
    title: 'Labs: SQL injection'
    provider: PortSwigger Web Security Academy
    url: https://portswigger.net/web-security/sql-injection
    required: false
    group: Εξάσκηση
    note: Ξεκίνα από τα labs με την ένδειξη Apprentice. Θα χρειαστείς το Burp Suite του Κεφαλαίου 4.
  - id: web-7-lab-xss
    title: 'Labs: Cross-site scripting'
    provider: PortSwigger Web Security Academy
    url: https://portswigger.net/web-security/cross-site-scripting
    required: false
    group: Εξάσκηση
  - id: web-7-lab-csrf
    title: 'Labs: CSRF'
    provider: PortSwigger Web Security Academy
    url: https://portswigger.net/web-security/csrf
    required: false
    group: Εξάσκηση
  - id: web-7-lab-upload
    title: 'Labs: File upload vulnerabilities'
    provider: PortSwigger Web Security Academy
    url: https://portswigger.net/web-security/file-upload
    required: false
    group: Εξάσκηση
  - id: web-7-lab-ssrf
    title: 'Labs: SSRF'
    provider: PortSwigger Web Security Academy
    url: https://portswigger.net/web-security/ssrf
    required: false
    group: Εξάσκηση
checks:
  - Πώς το admin' -- σαν username παρακάμπτει τον έλεγχο του password, και τι το σταματάει;
  - Ποια η διαφορά ανάμεσα σε reflected, stored και DOM-based XSS;
  - Γιατί σε ένα CSRF ο browser του θύματος στέλνει τα cookies του, και πώς το σταματάει ένα CSRF token;
  - Αναφέρε τρεις ελέγχους που πρέπει να κάνει μια εφαρμογή όταν δέχεται upload αρχείων.
  - Γιατί ένα SSRF είναι ιδιαίτερα επικίνδυνο σε εφαρμογές που τρέχουν στο cloud;
---

Θα εξετάσουμε τις πιο διαδεδομένες κατηγορίες ευπαθειών web εφαρμογών. Θα τις παρουσιάσουμε σε επίπεδο εισαγωγής, αρκετά ώστε να τις κατανοείς, αλλά όχι τόσο βαθιά ώστε να γίνουν επικίνδυνες.

> **Αναφορά:** Η κορυφαία λίστα ευπαθειών, το OWASP Top 10, ενημερώνεται τακτικά και αποτελεί σημείο αναφοράς για τη βιομηχανία.

## 7.1 SQL Injection (SQLi)

Η **SQL Injection** είναι μία από τις πιο παλιές και ακόμα πιο διαδεδομένες ευπάθειες. Επιτρέπει σε έναν επιτιθέμενο να παρεμβάλει κακόβουλες SQL εντολές στα queries της βάσης δεδομένων.

> **SQL:** Structured Query Language, η γλώσσα που χρησιμοποιείται για επικοινωνία με βάσεις δεδομένων.

### Πώς λειτουργεί;

Φαντάσου μια φόρμα login. Ο developer έχει γράψει:

```sql
SELECT * FROM users WHERE username='{input}' AND password='{pass}'
```

Αν κάποιος εισάγει ως username:

```text
admin' --
```

Το query γίνεται:

```sql
SELECT * FROM users WHERE username='admin' --' AND password='...'
```

Το `--` είναι σχόλιο σε SQL: όλα όσα ακολουθούν αγνοούνται! Άρα ο έλεγχος password παρακάμπτεται.

### Τύποι SQL injection

- **In-band:** Τα αποτελέσματα εμφανίζονται στην ίδια σελίδα.
- **Blind SQLi:** Δεν εμφανίζονται αποτελέσματα, βασίζεσαι σε true/false ή time delays.
- **Out-of-band:** Δεδομένα εξάγονται μέσω διαφορετικού καναλιού.

### Προστασία

- Χρήση prepared statements / parameterized queries
- Χρήση ORM frameworks
- Input validation
- Αρχή ελάχιστων δικαιωμάτων στη βάση δεδομένων

## 7.2 Cross-Site Scripting (XSS)

Το **XSS** επιτρέπει σε έναν επιτιθέμενο να εισάγει κακόβουλο JavaScript που εκτελείται στον browser άλλων χρηστών.

### Τύποι XSS

- **Reflected XSS:** Το κακόβουλο script «αντικατοπτρίζεται» από τον server στην απάντηση. Απαιτεί ο χρήστης να κάνει κλικ σε κακόβουλο link.
- **Stored XSS:** Το script αποθηκεύεται στον server (π.χ. σε σχόλιο ή forum). Εκτελείται σε κάθε επίσκεψη. Πιο επικίνδυνο.
- **DOM-based XSS:** Γίνεται εξ ολοκλήρου client-side, τροποποιώντας το DOM.

### Τι μπορεί να κάνει ένα XSS;

- Κλοπή cookies και Session IDs
- Keylogging (καταγραφή πλήκτρων)
- Ανακατεύθυνση σε phishing sites
- Τροποποίηση περιεχομένου σελίδας
- Εκτέλεση ενεργειών εκ μέρους του θύματος

### Παράδειγμα

Αν μια σελίδα εμφανίζει το input χωρίς encoding:

```text
https://example.com/search?q=<script>alert('XSS')</script>
```

Ο browser εκτελεί το script!

### Προστασία

- Output encoding (HTML, JS, CSS, URL encoding)
- Content Security Policy (CSP) headers
- HttpOnly flag σε cookies
- Χρήση modern frameworks που κάνουν auto-escaping

## 7.3 Cross-Site Request Forgery (CSRF)

Ο επιτιθέμενος εξαπατά τον browser του θύματος να στείλει αιτήματα σε άλλη εφαρμογή εκ μέρους του θύματος. Επειδή ο browser στέλνει τα cookies αυτόματα (Κεφάλαιο 2), το αίτημα φτάνει στην εφαρμογή σαν να το έκανε ο ίδιος ο χρήστης.

### Προστασία

- **CSRF tokens:** Μοναδικό token ανά αίτημα που επαληθεύεται από τον server
- SameSite cookie attribute
- Έλεγχος Origin/Referer headers
- Απαίτηση επανεισαγωγής κωδικού για ευαίσθητες ενέργειες

## 7.4 Insecure file upload

Αν μια εφαρμογή επιτρέπει upload αρχείων χωρίς κατάλληλους ελέγχους, ένας επιτιθέμενος μπορεί να ανεβάσει κακόβουλα αρχεία.

### Τι μπορεί να κάνει ένας επιτιθέμενος;

- Να ανεβάσει web shell (κακόβουλο script για εκτέλεση εντολών)
- Να αντικαταστήσει υπάρχοντα αρχεία
- Να ανεβάσει αρχεία που θα εκτελεστούν (PHP, ASP κ.λπ.)
- Denial of Service με τεράστια αρχεία

### Προστασία

- Επικύρωση MIME type (τύπου αρχείου)
- Επικύρωση επέκτασης αρχείου (whitelist)
- Μέγιστο μέγεθος αρχείου
- Αποθήκευση αρχείων εκτός web root
- Μετονομασία αρχείων μετά το upload
- Σάρωση για malware

## 7.5 Server-Side Request Forgery (SSRF)

Το **SSRF** επιτρέπει σε έναν επιτιθέμενο να εξαναγκάσει τον server να κάνει αιτήματα για λογαριασμό του.

### Παράδειγμα

Μια εφαρμογή επιτρέπει εισαγωγή URL για να φορτώσει εικόνα:

```text
https://example.com/fetch?url=https://external-image.com/img.jpg
```

Ο επιτιθέμενος αλλάζει σε:

```text
https://example.com/fetch?url=http://169.254.169.254/latest/meta-data/
```

Αυτό είναι το AWS metadata endpoint, δηλαδή εσωτερική υπηρεσία cloud που μπορεί να αποκαλύψει credentials και ευαίσθητες πληροφορίες!

### Τι μπορεί να κάνει ένα SSRF;

- Πρόσβαση σε εσωτερικές υπηρεσίες (μη δημόσιες)
- Port scanning εσωτερικού δικτύου
- Κλοπή cloud metadata (AWS/Azure/GCP credentials)
- Bypass firewall rules

## Σύνοψη

- **SQL Injection:** Εισαγωγή κακόβουλων SQL εντολών. Προστασία: prepared statements.
- **XSS:** Εισαγωγή κακόβουλου JavaScript. Προστασία: output encoding, CSP.
- **CSRF:** Εξαπάτηση του browser ώστε να στείλει αίτημα σε άλλη εφαρμογή. Προστασία: CSRF tokens, SameSite.
- **File upload:** Ανέβασμα κακόβουλων αρχείων. Προστασία: επικύρωση τύπου και μεγέθους.
- **SSRF:** Εξαναγκασμός του server να κάνει εσωτερικά αιτήματα. Εξαιρετικά επικίνδυνο σε cloud.
