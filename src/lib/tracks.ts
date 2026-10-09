export type Option = { label: string; next?: string; result?: number; note?: string };
export type Question = { id: string; text: string; options: Option[] };

export type Guide = {
  // Progress lives in localStorage under this key, so changing it resets everyone's progress for the track.
  storageKey: string;
  unit: string;
  unitIn: string;
  // Plural with its article, since Greek gender differs: "οι φάσεις", "τα κεφάλαια".
  units: string;
  allUnits: string;
  nextUnit: string;
  // Mono label shown next to each phase, followed by its number.
  addrPrefix: string;
  hashes: boolean;
  // Discord channel for questions about this guide.
  channel: string;
  doneLabel: string;
  heroTitle: string;
  heroLead: string[];
  roadmapLead: string;
  quizIntro: string;
  questions: Question[];
  safety: { title: string; text: string };
  exit: { href: string; short: string; long: string; external?: boolean };
  extraNav: { path: string; label: string }[];
};

export type Track = {
  slug: string;
  name: string;
  handle: string;
  summary: string[];
  guide?: Guide;
};

export const TRACKS: Track[] = [
  {
    slug: 'network-forensics',
    name: 'Network Forensics',
    handle: 'network-forensics',
    summary: [
      'Αναλύουμε την κυκλοφορία ενός δικτύου για να ανακαλύψουμε κυβερνοεπιθέσεις, διαρροές δεδομένων και κακόβουλη δραστηριότητα. Η δουλειά μας απαντά στα βασικά ερωτήματα: τι έγινε στο δίκτυο, πότε, από ποιον και πώς.',
      'Από την καταγραφή και ανάλυση πακέτων, μέχρι την τεκμηρίωση ευρημάτων και την προσομοίωση πραγματικών επιθέσεων, μαθαίνουμε να σκεφτόμαστε σαν investigators.',
    ],
  },
  {
    slug: 'web-security',
    name: 'Web Security',
    handle: 'web-sec',
    summary: [
      'Η ομάδα ασχολείται με την ασφάλεια εφαρμογών ιστού, εστιάζοντας στον εντοπισμό και την εκμετάλλευση ευπαθειών. Μέσα από την ανάλυση αιτημάτων (requests) και αποκρίσεων (responses), εντοπίζουμε αδυναμίες και προσομοιώνουμε ρεαλιστικά σενάρια επιθέσεων, με στόχο την ανάδειξη κρίσιμων σημείων και τη βελτίωση της συνολικής ασφάλειας των εφαρμογών ιστού.',
    ],
    guide: {
      storageKey: 'dst-web-progress-v1',
      unit: 'Κεφάλαιο',
      unitIn: 'στο Κεφάλαιο',
      units: 'τα κεφάλαια',
      allUnits: 'Όλα τα κεφάλαια',
      nextUnit: 'στο επόμενο κεφάλαιο',
      addrPrefix: 'GET /ch/',
      hashes: false,
      channel: '#chat',
      doneLabel: '200 OK',
      heroTitle: 'Από το πρώτο HTTP request στις πρώτες σου ευπάθειες.',
      heroLead: [
        'Ο εισαγωγικός οδηγός της ομάδας Web Security, σε επτά κεφάλαια. Ξεκινάς από το πώς μιλάει ο browser με τον server και φτάνεις σε SQL Injection, XSS και SSRF.',
        'Κάθε κεφάλαιο χτίζει πάνω στο προηγούμενο. Τσεκάρεις τις ενότητες που διάβασες και η πρόοδος μένει στον browser σου.',
      ],
      roadmapLead:
        'Επτά κεφάλαια, από το πώς λειτουργεί ο ιστός μέχρι τις κύριες ευπάθειες. Άνοιξε ένα κεφάλαιο, διάβασε τις ενότητες και τσέκαρέ τες.',
      quizIntro:
        'Μέχρι πέντε ερωτήσεις. Απάντα με ειλικρίνεια: αν ξεκινήσεις πιο μπροστά απ’ όσο πρέπει, θα κολλήσεις. Μπορείς πάντα να γυρίσεις σε προηγούμενο κεφάλαιο.',
      questions: [
        {
          id: 'q1',
          text: 'Ξέρεις τι γίνεται όταν γράφεις ένα URL στον browser: DNS, HTTP request και response, status codes, cookies;',
          options: [
            { label: 'Όχι, ή μόνο κάποια από αυτά', result: 1 },
            { label: 'Ναι, μπορώ να τα εξηγήσω', next: 'q2' },
          ],
        },
        {
          id: 'q2',
          text: 'Ξέρεις βασικά HTML και JavaScript και τι είναι το DOM;',
          options: [
            { label: 'Όχι ακόμα', result: 3, note: 'Διάβασε πρώτα την ενότητα 1.4 για το νομικό πλαίσιο. Ισχύει για όλους.' },
            { label: 'Ναι', next: 'q3' },
          ],
        },
        {
          id: 'q3',
          text: 'Έχεις χρησιμοποιήσει τα DevTools (καρτέλα Network) ή το Burp Suite για να δεις ή να αλλάξεις ένα request;',
          options: [
            { label: 'Όχι', result: 4, note: 'Διάβασε πρώτα την ενότητα 1.4 για το νομικό πλαίσιο. Ισχύει για όλους.' },
            { label: 'Ναι', next: 'q4' },
          ],
        },
        {
          id: 'q4',
          text: 'Μπορείς να εξηγήσεις γιατί το validation μόνο στον browser δεν αρκεί και τι κάνει το output encoding;',
          options: [
            { label: 'Όχι ακόμα', result: 5, note: 'Διάβασε πρώτα την ενότητα 1.4 για το νομικό πλαίσιο. Ισχύει για όλους.' },
            { label: 'Ναι', next: 'q5' },
          ],
        },
        {
          id: 'q5',
          text: 'Ξέρεις πώς δουλεύουν τα sessions, τι κάνουν τα HttpOnly, Secure και SameSite και τι περιέχει ένα JWT;',
          options: [
            { label: 'Όχι ακόμα', result: 6, note: 'Διάβασε πρώτα την ενότητα 1.4 για το νομικό πλαίσιο. Ισχύει για όλους.' },
            {
              label: 'Ναι',
              result: 7,
              note: 'Ξέρεις ήδη τα θεμέλια. Ρίξε μια ματιά στο «Πριν προχωρήσεις» των προηγούμενων κεφαλαίων και μετά πήγαινε στα labs του PortSwigger.',
            },
          ],
        },
      ],
      safety: {
        title: 'Το νομικό πλαίσιο του Κεφαλαίου 1 ισχύει για όλους, όποιο κεφάλαιο κι αν σου βγει.',
        text: 'Δοκίμαζε μόνο σε δικά σου συστήματα, σε εκπαιδευτικά labs ή με γραπτή άδεια. Ποτέ σε συστήματα τρίτων.',
      },
      exit: {
        href: 'https://portswigger.net/web-security',
        short: 'PortSwigger labs',
        long: 'Τελείωσες τον οδηγό; Συνέχισε στα labs του PortSwigger',
        external: true,
      },
      extraNav: [],
    },
  },
  {
    slug: 'vulnerability-exploitation',
    name: 'Vulnerability Exploitation',
    handle: 'vuln-exploitation',
    summary: [
      'Η ομάδα ασχολείται με τον εντοπισμό, την ανάλυση και την πρακτική εκμετάλλευση ευπαθειών σε πληροφοριακά συστήματα. Μέσα από εργαλεία και τεχνικές κυβερνοασφάλειας, εντοπίζει πιθανά κενά ασφαλείας, αξιολογεί τη σοβαρότητά τους και δοκιμάζει τρόπους εκμετάλλευσής τους.',
      'Στόχος είναι η καλύτερη κατανόηση των κινδύνων και η συμβολή στη βελτίωση της ασφάλειας των συστημάτων μέσω τεκμηριωμένων αναφορών και προτάσεων.',
    ],
  },
  {
    slug: 'blockchain',
    name: 'Blockchain',
    handle: 'block-chain',
    summary: [
      'Η ομάδα ασχολείται με την κατανόηση της τεχνολογίας του blockchain και του ευρύτερου οικοσυστήματος του Web3. Εστιάζουμε στην αρχιτεκτονική των αποκεντρωμένων δικτύων, στους μηχανισμούς συναίνεσης (consensus mechanisms) και στη λογική πίσω από τα έξυπνα συμβόλαια (smart contracts).',
      'Μέσα από έρευνα και πρακτική ενασχόληση, κατανοούμε πώς λειτουργούν τα κρυπτονομίσματα και οι αποκεντρωμένες εφαρμογές (dApps), χτίζοντας γερές βάσεις για τις τεχνολογίες του αύριο.',
    ],
    guide: {
      storageKey: 'dst-bc-progress-v1',
      unit: 'Φάση',
      unitIn: 'στη Φάση',
      units: 'οι φάσεις',
      allUnits: 'Όλες οι φάσεις',
      nextUnit: 'στην επόμενη φάση',
      addrPrefix: 'block #',
      hashes: true,
      channel: '#block-chain',
      doneLabel: 'confirmed',
      heroTitle: 'Από το μηδέν στο hacking smart contracts.',
      heroLead: [
        'Ένας οδηγός βήμα βήμα από την ομάδα Blockchain του Democritus Sec Team. Σε στέλνει στα καλύτερα δωρεάν courses με τη σωστή σειρά, σου λέει γιατί μετράει το καθένα και κρατάει την πρόοδό σου.',
        'Στο τέλος λύνεις blockchain challenges όπως στα CTFs και μπαίνεις σε ένα πραγματικό ομαδικό project για το portfolio σου.',
      ],
      roadmapLead:
        'Επτά φάσεις, από το στήσιμο των εργαλείων μέχρι να σπάς smart contracts. Άνοιξε μια φάση, κάνε τα βήματα και τσέκαρέ τα.',
      quizIntro:
        'Μέχρι τέσσερις ερωτήσεις. Απάντα με ειλικρίνεια: αν ξεκινήσεις πιο μπροστά απ’ όσο πρέπει, θα κολλήσεις. Μπορείς πάντα να γυρίσεις σε προηγούμενη φάση.',
      questions: [
        {
          id: 'q1',
          text: 'Πόσο κώδικα έχεις γράψει μέχρι τώρα;',
          options: [
            { label: 'Καθόλου', result: 0, note: 'Κάνε και το προαιρετικό Learn JavaScript της Φάσης 0. Θα το χρειαστείς αργότερα.' },
            { label: 'Λίγο, αλλά όχι JavaScript', result: 0, note: 'Κάνε και το Learn JavaScript της Φάσης 0. Θα το χρειαστείς στις Φάσεις 3 και 4.' },
            { label: 'Ξέρω JavaScript (functions, arrays, objects)', next: 'q2' },
          ],
        },
        {
          id: 'q2',
          text: 'Μπορείς να εξηγήσεις τι είναι blockchain, transaction, wallet και gas;',
          options: [
            { label: 'Όχι ακόμα, ή μόνο λίγο', result: 1, note: 'Βεβαιώσου ότι έχεις GitHub και ένα wallet μόνο για testnets (Φάση 0).' },
            { label: 'Ναι, με δικά μου λόγια', next: 'q3' },
          ],
        },
        {
          id: 'q3',
          text: 'Έχεις γράψει Solidity;',
          options: [
            { label: 'Όχι', result: 2, note: 'Αν σε ενδιαφέρει τι γίνεται «από κάτω», ξεκίνα παράλληλα και τη Φάση 3.' },
            { label: 'Ναι, απλά contracts', next: 'q4' },
          ],
        },
        {
          id: 'q4',
          text: 'Έχεις φτιάξει και ανεβάσει σε testnet ένα dApp (contract και front-end);',
          options: [
            { label: 'Όχι', result: 4, note: 'Αν δεν έχεις κάνει τη Φάση 3, κάν’ τη παράλληλα. Θα σε βοηθήσει πολύ στο security.' },
            {
              label: 'Ναι',
              result: 5,
              note: 'Ρίξε μια ματιά στις ερωτήσεις «Πριν προχωρήσεις» των Φάσεων 2 έως 4. Αν κάπου κολλάς, γύρνα πίσω.',
            },
          ],
        },
      ],
      safety: {
        title: 'Οι κανόνες ασφαλείας της Φάσης 0 ισχύουν για όλους, όποια φάση κι αν σου βγει.',
        text: 'Μόνο testnets, ποτέ πραγματικά χρήματα. Ποτέ private key ή seed phrase σε κώδικα, σε repo ή σε site.',
      },
      exit: {
        href: 'blockchain/projects/',
        short: 'Ομαδικά projects',
        long: 'Τελείωσες τον οδηγό; Δες τα ομαδικά projects',
      },
      extraNav: [
        { path: 'blockchain/projects/', label: 'Ομαδικά Projects' },
        { path: 'blockchain/glossary/', label: 'Γλωσσάρι' },
        { path: 'blockchain/faq/', label: 'Πώς δουλεύουμε' },
      ],
    },
  },
];

export type GuidedTrack = Track & { guide: Guide };

export const GUIDED = TRACKS.filter((t): t is GuidedTrack => Boolean(t.guide));

export function getTrack(slug: string): GuidedTrack {
  const track = GUIDED.find((t) => t.slug === slug);
  if (!track) throw new Error(`Unknown track: ${slug}`);
  return track;
}
