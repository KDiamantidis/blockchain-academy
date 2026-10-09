---
order: 6
title: Session management
goal: Να ξέρεις πώς μια εφαρμογή «θυμάται» ότι έκανες login, και πώς αυτό σπάει.
prerequisites: Κεφάλαιο 2 (cookies) και Κεφάλαιο 5.
steps:
  - id: web-6-1
    title: Πώς λειτουργούν τα sessions
    anchor: '6.1'
    required: true
  - id: web-6-2
    title: Cookies σε βάθος
    anchor: '6.2'
    required: true
  - id: web-6-3
    title: Tokens, JWT
    anchor: '6.3'
    required: true
  - id: web-6-4
    title: Ευπάθειες session management
    anchor: '6.4'
    required: true
  - id: web-6-5
    title: Καλές πρακτικές session management
    anchor: '6.5'
    required: true
checks:
  - Περιέγραψε τα βήματα από το login μέχρι ο server να σε αναγνωρίζει σε κάθε επόμενο request.
  - Τι κάνουν τα HttpOnly, Secure και SameSite σε ένα cookie;
  - Γιατί δεν πρέπει να βάζεις ευαίσθητα δεδομένα στο payload ενός JWT;
  - Ποια η διαφορά ανάμεσα σε session hijacking και session fixation;
  - Γιατί η εφαρμογή πρέπει να δίνει νέο session ID μετά το login;
---

Όπως είδαμε στο Κεφάλαιο 2, το HTTP είναι stateless. Για να διατηρείται η κατάσταση σύνδεσης, χρησιμοποιούμε **sessions** (συνεδρίες). Η σωστή διαχείριση sessions είναι κρίσιμη για την ασφάλεια.

## 6.1 Πώς λειτουργούν τα sessions

Όταν συνδέεσαι σε μια εφαρμογή:

1. Εισάγεις username/password και πατάς Login.
2. Ο server επαληθεύει τα credentials.
3. Ο server δημιουργεί ένα μοναδικό Session ID (π.χ. `a3f8b2d9e1c4...`).
4. Ο server αποθηκεύει αυτό το Session ID μαζί με πληροφορίες για τον χρήστη.
5. Ο browser αποθηκεύει το Session ID σε ένα cookie.
6. Σε κάθε επόμενο αίτημα, ο browser στέλνει αυτό το cookie στον server.
7. Ο server αναγνωρίζει τον χρήστη μέσω του Session ID.

> **Αναλογία:** Φαντάσου ότι μπαίνεις σε ένα club. Στην είσοδο σου δίνουν ένα μοναδικό βραχιολάκι. Σε κάθε εξυπηρέτηση, δείχνεις το βραχιολάκι χωρίς να χρειάζεται να δείχνεις ταυτότητα.

## 6.2 Cookies σε βάθος

Τα cookies είναι το κυριότερο μέσο αποθήκευσης Session IDs. Έχουν σημαντικές ιδιότητες ασφαλείας:

- **HttpOnly:** Το cookie δεν είναι προσβάσιμο από JavaScript. Προστατεύει από XSS επιθέσεις που προσπαθούν να κλέψουν το session.
- **Secure:** Το cookie αποστέλλεται μόνο μέσω HTTPS. Αποτρέπει την υποκλοπή σε μη κρυπτογραφημένες συνδέσεις.
- **SameSite:** Ελέγχει αν το cookie αποστέλλεται με cross-site requests. Τιμές: `Strict`, `Lax`, `None`. Προστατεύει από CSRF επιθέσεις.
- **Domain:** Ποιο domain μπορεί να έχει πρόσβαση στο cookie.
- **Path:** Ποιο path του domain μπορεί να έχει πρόσβαση.
- **Expires/Max-Age:** Πότε λήγει το cookie.

Παράδειγμα ασφαλούς cookie:

```http
Set-Cookie: session_id=a3f8b2d9; HttpOnly; Secure; SameSite=Strict; Path=/
```

## 6.3 Tokens, JWT

Μια εναλλακτική στα session cookies είναι τα **JSON Web Tokens** (JWT). Είναι κρυπτογραφικά υπογεγραμμένα κομμάτια δεδομένων που αποθηκεύουν πληροφορίες χρήστη.

Ένα JWT αποτελείται από τρία μέρη διαχωρισμένα με τελεία:

- **Header:** Αλγόριθμος κρυπτογράφησης.
- **Payload:** Δεδομένα χρήστη (user ID, role κ.λπ.).
- **Signature:** Κρυπτογραφική υπογραφή που επαληθεύει την αυθεντικότητα.

Παράδειγμα JWT:

```text
eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiam9obiIsInJvbGUiOiJ1c2VyIn0.abc123
```

<p class="warn"><strong>Σημαντικό:</strong> Το payload του JWT είναι μόνο Base64-encoded, δηλαδή δεν είναι κρυπτογραφημένο! Μπορεί να διαβαστεί από οποιονδήποτε. Ποτέ μην αποθηκεύεις ευαίσθητες πληροφορίες στο payload.</p>

## 6.4 Ευπάθειες session management

### Session hijacking

Ο επιτιθέμενος κλέβει το Session ID ενός χρήστη και χρησιμοποιεί το session σαν να ήταν αυτός ο χρήστης. Τρόποι κλοπής Session ID:

- **XSS:** Κακόβουλο script κλέβει το cookie.
- **Network sniffing:** Υποκλοπή σε μη κρυπτογραφημένη σύνδεση.
- **Predictable Session IDs:** Αν τα IDs είναι εύκολα μαντεύσιμα.

### Session fixation

Ο επιτιθέμενος «ορίζει» εκ των προτέρων το Session ID ενός χρήστη. Αν η εφαρμογή δεν δημιουργεί νέο Session ID μετά το login, ο επιτιθέμενος γνωρίζει ήδη το ID.

### CSRF (Cross-Site Request Forgery)

Ο επιτιθέμενος εξαπατά τον browser του θύματος να στείλει αιτήματα σε άλλη εφαρμογή εκ μέρους του θύματος. Θα το δούμε αναλυτικά στο Κεφάλαιο 7.

## 6.5 Καλές πρακτικές session management

- Χρησιμοποίησε μεγάλα, τυχαία Session IDs (τουλάχιστον 128 bits).
- Δημιούργησε νέο Session ID μετά από κάθε επιτυχημένο login.
- Όρισε κατάλληλο χρόνο λήξης session.
- Ακύρωσε τα sessions κατά το logout.
- Χρησιμοποίησε HttpOnly και Secure flags στα cookies.
- Εφάρμοσε SameSite για προστασία από CSRF.

## Σύνοψη

- Τα sessions διατηρούν κατάσταση σύνδεσης μέσω Session IDs αποθηκευμένων σε cookies.
- Τα σημαντικά flags των cookies είναι τα HttpOnly, Secure και SameSite.
- Τα JWT είναι εναλλακτική στα session cookies. Το payload τους είναι ορατό αλλά υπογεγραμμένο.
- Session hijacking, session fixation και CSRF είναι κοινές επιθέσεις στο session management.
