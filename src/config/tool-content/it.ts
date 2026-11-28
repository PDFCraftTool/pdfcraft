/**
 * Italian tool content for SEO
 * Contains detailed descriptions, how-to steps, use cases, and FAQs for all 67 tools
 * Requirements: 4.2-4.5 - Tool page content (description, how-to, use cases, FAQ)
 */

import { ToolContent } from '@/types/tool';
import { toolContentEn } from './en';

/**
 * Contenuti degli strumenti in italiano per SEO
 * Contiene descrizioni dettagliate, guide passo-passo, casi d’uso e FAQ per tutti i 67 strumenti
 * Requisiti: 4.2–4.5 - Contenuti delle pagine degli strumenti (descrizione, guida, casi d’uso, FAQ)
 */
export const toolContentIt: Record<string, ToolContent> = {
  "pdf-multi-tool": {
    "title": "Strumento PDF multifunzione",
    "metaDescription": "Editor PDF tutto-in-uno: unisci, dividi, organizza, elimina, ruota ed estrai pagine in un unico potente strumento.",
    "keywords": [
      "pdf multifunzione",
      "editor pdf",
      "unisci pdf",
      "dividi pdf",
      "organizza pdf",
      "pdf tutto in uno"
    ],
    "description": "\n      <p>Lo Strumento PDF multifunzione è la tua soluzione completa per tutte le attività di gestione delle pagine PDF. Questo potente strumento tutto‑in‑uno combina più operazioni PDF in un'unica interfaccia intuitiva, facendoti risparmiare tempo e fatica.</p>\n      <p>Che tu debba unire più documenti, dividere un PDF grande in file più piccoli, riorganizzare le pagine, eliminare contenuti indesiderati, ruotare le pagine o estrarre sezioni specifiche, questo strumento gestisce tutto senza passare tra applicazioni diverse.</p>\n      <p>Tutta l'elaborazione avviene direttamente nel tuo browser, garantendo che i tuoi documenti rimangano privati e sicuri. Nessun file viene caricato su alcun server.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il tuo PDF",
        "description": "Trascina e rilascia il tuo file PDF nell’area di caricamento, oppure clicca per sfogliare e selezionare i file dal tuo dispositivo."
      },
      {
        "step": 2,
        "title": "Scegli l’operazione",
        "description": "Seleziona tra le operazioni disponibili: unisci, dividi, organizza, elimina pagine, ruota, aggiungi pagine vuote o estrai pagine."
      },
      {
        "step": 3,
        "title": "Configura le opzioni",
        "description": "Regola le impostazioni specifiche dell’operazione scelta, come intervalli di pagine, angoli di rotazione o ordine di unione."
      },
      {
        "step": 4,
        "title": "Elabora e scarica",
        "description": "Clicca sul pulsante di elaborazione e scarica il PDF modificato una volta completata l’operazione."
      }
    ],
    "useCases": [
      {
        "title": "Preparazione documenti",
        "description": "Prepara i documenti per l’invio rimuovendo pagine superflue, riordinando i contenuti e combinando più file.",
        "icon": "file-check"
      },
      {
        "title": "Assemblaggio report",
        "description": "Combina più sezioni di report, aggiungi copertine e organizza i capitoli in un unico documento professionale.",
        "icon": "book-open"
      },
      {
        "title": "Gestione archivi",
        "description": "Dividi grandi file d’archivio in sezioni gestibili, estrai pagine rilevanti e riorganizza documenti storici.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Quanti PDF posso elaborare contemporaneamente?",
        "answer": "Puoi caricare ed elaborare fino a 10 file PDF in simultanea, con dimensione complessiva massima di 500MB."
      },
      {
        "question": "I segnalibri verranno preservati?",
        "answer": "Sì, durante l’unione il tool preserva i segnalibri esistenti e può opzionalmente combinarli in una struttura unificata."
      },
      {
        "question": "C’è un limite di pagine?",
        "answer": "Non c’è un limite rigoroso. Il tool gestisce documenti con centinaia di pagine; i file molto grandi possono richiedere più tempo di elaborazione."
      }
    ]
  },
  "merge-pdf": {
    "title": "Unisci PDF",
    "metaDescription": "Combina più file PDF in un unico documento. Unione PDF online gratuita con riordinamento tramite drag‑and‑drop.",
    "keywords": [
      "unisci pdf",
      "combina pdf",
      "unire pdf",
      "unione pdf",
      "concatena pdf"
    ],
    "description": "\n      <p>Unisci PDF ti consente di combinare rapidamente e facilmente più documenti PDF in un unico file. Che tu stia consolidando report, unendo documenti scansionati o assemblando una presentazione, questo strumento rende il processo fluido.</p>\n      <p>Carica i file, disponili nell’ordine desiderato tramite drag‑and‑drop e uniscili in un unico documento coerente. Il tool preserva la qualità dei file originali e può opzionalmente mantenere i segnalibri di ciascun documento sorgente.</p>\n      <p>L’unione avviene interamente nel tuo browser, garantendo piena privacy per i tuoi documenti sensibili.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica i PDF",
        "description": "Trascina e rilascia più file PDF nell’area di caricamento, oppure clicca per selezionarli dal tuo dispositivo."
      },
      {
        "step": 2,
        "title": "Ordina i file",
        "description": "Trascina e rilascia le miniature dei file per disporle nell’ordine desiderato."
      },
      {
        "step": 3,
        "title": "Unisci e scarica",
        "description": "Clicca su “Unisci” per combinare tutti i file, quindi scarica il PDF unito."
      }
    ],
    "useCases": [
      {
        "title": "Combina report",
        "description": "Unisci report mensili o trimestrali in un unico documento annuale per semplificare distribuzione e archiviazione.",
        "icon": "file-text"
      },
      {
        "title": "Assembla portfolio",
        "description": "Combina documenti di progetto, certificati o campioni di lavoro in un portfolio professionale.",
        "icon": "briefcase"
      },
      {
        "title": "Consolida fatture",
        "description": "Unisci più fatture o ricevute in un unico documento per contabilità e conservazione.",
        "icon": "receipt"
      }
    ],
    "faq": [
      {
        "question": "Quanti PDF posso unire?",
        "answer": "Puoi unire fino a 100 PDF contemporaneamente, con dimensione totale massima di 500MB."
      },
      {
        "question": "La qualità originale viene mantenuta?",
        "answer": "Sì, il processo di unione preserva la qualità originale dei documenti senza compressione o perdita di qualità."
      },
      {
        "question": "Posso unire PDF protetti da password?",
        "answer": "Prima occorre rimuovere la password. Usa lo strumento “Decripta PDF” per sbloccare i file prima dell’unione."
      }
    ]
  },
  "rotate-custom": {
    "title": "Ruota con gradi personalizzati",
    "metaDescription": "Ruota le pagine PDF con qualsiasi angolo. Rotazione personalizzata precisa per raddrizzare documenti scansionati.",
    "keywords": [
      "ruota pdf angolo personalizzato",
      "raddrizza pdf",
      "correggi inclinazione pdf",
      "rotazione pdf personalizzata"
    ],
    "description": "\n      <p>La rotazione con gradi personalizzati ti offre un controllo preciso sull’orientamento delle pagine PDF. A differenza degli strumenti standard che supportano solo incrementi di 90°, questo tool consente di ruotare le pagine con qualsiasi angolo specifico.</p>\n      <p>È perfetto per raddrizzare documenti scansionati leggermente inclinati o per regolare diagrammi e grafici alla corretta orientazione. Puoi correggere singole pagine oppure applicare la stessa rotazione all’intero documento.</p>\n      <p>L’elaborazione avviene localmente nel tuo browser, garantendo privacy e un allineamento impeccabile.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Carica il file PDF contenente le pagine da ruotare."
      },
      {
        "step": 2,
        "title": "Imposta l’angolo",
        "description": "Inserisci il grado esatto di rotazione per ogni pagina oppure imposta un angolo batch per tutte le pagine."
      },
      {
        "step": 3,
        "title": "Anteprima e regolazioni",
        "description": "Usa l’anteprima in tempo reale per garantire un allineamento perfetto delle pagine."
      },
      {
        "step": 4,
        "title": "Applica e scarica",
        "description": "Clicca su “Ruota” per applicare le modifiche e scaricare il PDF raddrizzato."
      }
    ],
    "useCases": [
      {
        "title": "Documenti scansionati",
        "description": "Raddrizza pagine scansionate inserite nello scanner con un angolo.",
        "icon": "scan"
      },
      {
        "title": "Disegni tecnici",
        "description": "Regola con precisione l’orientamento di diagrammi tecnici e planimetrie.",
        "icon": "ruler"
      },
      {
        "title": "Layout creativi",
        "description": "Crea layout originali ruotando le pagine a specifici angoli artistici.",
        "icon": "pen-tool"
      }
    ],
    "faq": [
      {
        "question": "Posso ruotare con decimali, ad es. 45,5°?",
        "answer": "Al momento il tool supporta gradi interi; stiamo lavorando per abilitare la precisione decimale."
      },
      {
        "question": "La rotazione influisce sul contenuto?",
        "answer": "Il contenuto viene ruotato visivamente. La dimensione della pagina si adatta automaticamente al contenuto ruotato."
      },
      {
        "question": "Posso ruotare solo una pagina?",
        "answer": "Sì, puoi impostare un angolo di rotazione personalizzato per una singola pagina lasciando invariate le altre."
      }
    ]
  },
  "grid-combine": {
    "title": "Combina PDF in griglia",
    "metaDescription": "Combina più file PDF su pagine singole con un layout a griglia flessibile. Disponi 2, 4, 6, 9 o più PDF per pagina con bordi e spaziatura.",
    "keywords": [
      "griglia pdf",
      "unisci pdf in griglia",
      "collage pdf",
      "più pdf su una pagina",
      "pdf n-up",
      "combina pdf in griglia"
    ],
    "description": "\n      <p>Lo strumento “Combina in griglia” offre un modo unico per unire più file PDF distinti su pagine singole. Diversamente da “Unisci PDF”, che accoda le pagine, o da “N‑Up”, che riorganizza le pagine di un singolo documento, la griglia prende più file in input e li dispone affiancati in un layout personalizzabile.</p>\n      <p>Puoi scegliere tra diverse configurazioni di griglia, come 2×1, 2×2, 3×3, ecc. È ideale per confrontare più documenti, creare dispense da fonti diverse o stampare versioni compatte di vari file.</p>\n      <p>Personalizza l’output controllando dimensione pagina, orientamento, margini, spaziatura e bordi. Tutta l’elaborazione avviene localmente nel browser per la massima privacy.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica i PDF",
        "description": "Carica due o più file PDF da combinare. Puoi riordinarli nell’ordine desiderato."
      },
      {
        "step": 2,
        "title": "Scegli il layout di griglia",
        "description": "Seleziona il layout di griglia (es. 2×2 per 4 file a pagina, 3×3 per 9 file a pagina)."
      },
      {
        "step": 3,
        "title": "Personalizza l’aspetto",
        "description": "Regola impostazioni come dimensione pagina (A4, Letter), orientamento, spaziatura e bordi."
      },
      {
        "step": 4,
        "title": "Combina e scarica",
        "description": "Clicca su “Combina PDF” per generare il documento con layout a griglia e scaricare il risultato."
      }
    ],
    "useCases": [
      {
        "title": "Confronto visivo",
        "description": "Metti versioni diverse di un progetto o documento affiancate sulla stessa pagina per un confronto rapido.",
        "icon": "layout-grid"
      },
      {
        "title": "Stampa dispense",
        "description": "Combina più documenti brevi o slide su un unico foglio per risparmiare sui costi di stampa.",
        "icon": "printer"
      },
      {
        "title": "Creazione portfolio",
        "description": "Mostra più file di progetto in una panoramica ordinata e pulita in griglia.",
        "icon": "image"
      }
    ],
    "faq": [
      {
        "question": "In cosa differisce da N‑Up?",
        "answer": "N‑Up prende pagine da UN solo PDF e le mette su un foglio. La griglia prende PIÙ PDF DIVERSI e li mette sullo stesso foglio."
      },
      {
        "question": "Quanti file posso combinare?",
        "answer": "Puoi combinare fino a 100 file a seconda della memoria del browser; layout come 4×4 consentono fino a 16 file per pagina."
      },
      {
        "question": "Posso aggiungere bordi?",
        "answer": "Sì, puoi aggiungere i bordi intorno a ciascun file PDF e personalizzare il colore del bordo."
      }
    ]
  },
  "split-pdf": {
    "title": "Dividi PDF",
    "metaDescription": "Dividi i file PDF in più documenti. Estrai pagine specifiche o suddividi per intervalli di pagine.",
    "keywords": [
      "dividi pdf",
      "separa pdf",
      "estrai pagine",
      "divisione pdf"
    ],
    "description": "\n      <p>Dividi PDF consente di suddividere un singolo documento PDF in più file più piccoli. È ideale per estrarre capitoli specifici, separare documenti combinati o creare file individuali da un PDF multipagina.</p>\n      <p>Puoi dividere per intervalli di pagine, estrarre pagine singole o suddividere il documento a intervalli regolari. Il tool offre un’anteprima visiva delle pagine, rendendo facile selezionare esattamente ciò che ti serve.</p>\n      <p>Tutta l’elaborazione avviene localmente nel tuo browser, garantendo che i documenti restino privati e sicuri.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il PDF oppure clicca per sfogliare e selezionare il file da dividere."
      },
      {
        "step": 2,
        "title": "Seleziona il metodo",
        "description": "Scegli come dividere: per intervalli di pagine, estrai pagine specifiche oppure dividi a intervalli regolari."
      },
      {
        "step": 3,
        "title": "Definisci gli intervalli",
        "description": "Inserisci i numeri di pagina o gli intervalli da estrarre (es. 1‑5, 8, 10‑15)."
      },
      {
        "step": 4,
        "title": "Dividi e scarica",
        "description": "Clicca su “Dividi” per creare i nuovi PDF e scaricarli singolarmente o come archivio ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Estrai capitoli",
        "description": "Dividi un libro o un manuale in capitoli singoli per una lettura o distribuzione più agevole.",
        "icon": "book"
      },
      {
        "title": "Separa scansioni combinate",
        "description": "Suddividi un documento scansionato in batch in file individuali per ciascun documento originale.",
        "icon": "copy"
      },
      {
        "title": "Crea dispense",
        "description": "Estrai slide o pagine specifiche da una presentazione per creare dispense mirate.",
        "icon": "presentation"
      }
    ],
    "faq": [
      {
        "question": "Posso dividere un PDF in pagine singole?",
        "answer": "Sì, puoi dividere un PDF in file a pagina singola selezionando l’opzione “Dividi ogni pagina”."
      },
      {
        "question": "Cosa succede ai segnalibri durante la divisione?",
        "answer": "I segnalibri che ricadono nell’intervallo estratto vengono preservati nei PDF risultanti."
      },
      {
        "question": "Posso dividere PDF protetti da password?",
        "answer": "Prima occorre decriptare il PDF usando lo strumento “Decripta PDF” e poi effettuare la divisione."
      }
    ]
  },
  "compress-pdf": {
    "title": "Comprimi PDF",
    "metaDescription": "Riduci la dimensione dei file PDF mantenendo una qualità accettabile. Compressione PDF online gratuita per file più leggeri.",
    "keywords": [
      "comprimi pdf",
      "riduci dimensione pdf",
      "compressore pdf",
      "riduci pdf",
      "ottimizza pdf"
    ],
    "description": "\n      <p>Comprimi PDF riduce la dimensione dei tuoi documenti PDF mantenendo una qualità accettabile. È fondamentale per allegati email, caricamenti web o risparmio di spazio di archiviazione.</p>\n      <p>Il tool offre più livelli di compressione per bilanciare riduzione della dimensione e preservazione della qualità. Puoi scegliere una compressione aggressiva per la massima riduzione o leggera per mantenere maggiore qualità.</p>\n      <p>Tutta la compressione avviene nel browser, assicurando che i tuoi documenti non lascino mai il dispositivo.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il tuo PDF oppure clicca per selezionare il documento da comprimere."
      },
      {
        "step": 2,
        "title": "Scegli il livello di compressione",
        "description": "Seleziona il livello preferito: Basso (migliore qualità), Medio (bilanciato) o Alto (dimensione più piccola)."
      },
      {
        "step": 3,
        "title": "Comprimi e scarica",
        "description": "Clicca su “Comprimi” per ridurre la dimensione, quindi scarica il PDF ottimizzato."
      }
    ],
    "useCases": [
      {
        "title": "Allegati email",
        "description": "Riduci la dimensione dei PDF per rispettare i limiti degli allegati e garantire una consegna più rapida.",
        "icon": "mail"
      },
      {
        "title": "Pubblicazione web",
        "description": "Ottimizza i PDF per il download sul web, migliorando tempi di caricamento ed esperienza utente.",
        "icon": "globe"
      },
      {
        "title": "Ottimizzazione archiviazione",
        "description": "Comprimi documenti archiviati per risparmiare spazio su disco mantenendo l’accessibilità.",
        "icon": "hard-drive"
      }
    ],
    "faq": [
      {
        "question": "Di quanto posso ridurre la dimensione?",
        "answer": "I risultati variano in base al contenuto. PDF ricchi di immagini spesso si riducono del 50‑80%, mentre i PDF solo testo hanno riduzioni minori."
      },
      {
        "question": "La compressione influisce sulla qualità del testo?",
        "answer": "Il testo resta nitido e leggibile a tutti i livelli. La compressione incide principalmente su immagini e grafica."
      },
      {
        "question": "Posso comprimere più PDF contemporaneamente?",
        "answer": "Sì, puoi caricare e comprimere fino a 10 file PDF in simultanea."
      }
    ]
  },
  "edit-pdf": {
    "title": "Modifica PDF",
    "metaDescription": "Modifica i file PDF online. Aggiungi testo, immagini, annotazioni, evidenziazioni e forme ai tuoi documenti.",
    "keywords": [
      "modifica pdf",
      "editor pdf",
      "annota pdf",
      "aggiungi testo a pdf",
      "markup pdf"
    ],
    "description": "\n      <p>Modifica PDF offre un set completo di strumenti per modificare e annotare i tuoi documenti PDF. Aggiungi testo, immagini, forme, evidenziazioni, commenti e altro senza software desktop costosi.</p>\n      <p>L’interfaccia intuitiva rende facile contrassegnare i documenti per la revisione, aggiungere note per la collaborazione, oscurare informazioni sensibili o arricchire i documenti con contenuti aggiuntivi.</p>\n      <p>Tutte le modifiche avvengono localmente nel tuo browser, garantendo piena privacy ai tuoi documenti sensibili.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il tuo file PDF oppure clicca per selezionare il documento da modificare."
      },
      {
        "step": 2,
        "title": "Seleziona lo strumento",
        "description": "Scegli dalla toolbar: testo, evidenziazione, forme, immagini, commenti o strumenti di redazione."
      },
      {
        "step": 3,
        "title": "Esegui le modifiche",
        "description": "Clicca sul documento per aggiungere annotazioni, trascina per posizionare gli elementi e usa il pannello proprietà per personalizzare."
      },
      {
        "step": 4,
        "title": "Salva e scarica",
        "description": "Clicca su “Salva” per applicare le modifiche e scaricare il PDF modificato."
      }
    ],
    "useCases": [
      {
        "title": "Revisione documenti",
        "description": "Aggiungi commenti, evidenziazioni e markup ai documenti per revisioni collaborative.",
        "icon": "message-square"
      },
      {
        "title": "Compilazione moduli",
        "description": "Compila campi di testo, aggiungi firme e completa moduli PDF senza stampare.",
        "icon": "edit-3"
      },
      {
        "title": "Redazione contenuti",
        "description": "Rimuovi in modo permanente informazioni sensibili dai documenti prima di condividerli.",
        "icon": "eye-off"
      }
    ],
    "faq": [
      {
        "question": "Posso modificare il testo originale nel PDF?",
        "answer": "Questo strumento si concentra sull’aggiunta di annotazioni e nuovi contenuti. Per modificare il testo esistente, potrebbe essere necessario usare il documento sorgente."
      },
      {
        "question": "Le modifiche sono permanenti?",
        "answer": "Le annotazioni possono essere appiattite per renderle permanenti oppure mantenute come livelli modificabili, a seconda della preferenza."
      },
      {
        "question": "Posso annullare le modifiche?",
        "answer": "Sì, l’editor supporta annulla/ripristina. Puoi anche ripristinare il documento originale in qualsiasi momento prima di salvare."
      }
    ]
  },
  "jpg-to-pdf": {
    "title": "JPG in PDF",
    "metaDescription": "Converti immagini JPG in PDF. Combina più file JPG in un unico documento PDF.",
    "keywords": [
      "jpg in pdf",
      "jpeg in pdf",
      "converti jpg",
      "immagine in pdf",
      "foto in pdf"
    ],
    "description": "\n      <p>JPG in PDF converte rapidamente e facilmente le tue immagini JPEG in documenti PDF. Che si tratti di una singola foto o di più immagini, questo tool crea PDF dall’aspetto professionale.</p>\n      <p>Puoi combinare più file JPG in un unico PDF, ordinarli in qualsiasi ordine e personalizzare dimensione e orientamento della pagina. La conversione preserva la qualità delle immagini creando PDF compatti e condivisibili.</p>\n      <p>Tutta la conversione avviene nel browser, garantendo che le tue foto rimangano private.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica immagini JPG",
        "description": "Trascina e rilascia i file JPG oppure clicca per selezionare le immagini dal tuo dispositivo."
      },
      {
        "step": 2,
        "title": "Disponi e configura",
        "description": "Riordina le immagini trascinando e seleziona le opzioni di dimensione e orientamento della pagina."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Clicca su “Converti” per creare il PDF e scaricare il risultato."
      }
    ],
    "useCases": [
      {
        "title": "Album fotografici",
        "description": "Crea album fotografici PDF da foto di vacanza o eventi per una condivisione semplice.",
        "icon": "image"
      },
      {
        "title": "Scansione documenti",
        "description": "Converti foto di documenti scattate con il telefono in veri file PDF.",
        "icon": "camera"
      },
      {
        "title": "Creazione portfolio",
        "description": "Raggruppa lavori fotografici o campioni di design in un portfolio PDF professionale.",
        "icon": "folder"
      }
    ],
    "faq": [
      {
        "question": "Quante immagini posso convertire?",
        "answer": "Puoi convertire fino a 100 immagini JPG in un unico documento PDF."
      },
      {
        "question": "La qualità delle immagini viene preservata?",
        "answer": "Sì, le immagini sono incorporate alla loro qualità originale. Puoi opzionalmente comprimerle per ridurre la dimensione del file."
      },
      {
        "question": "Posso impostare dimensioni di pagina diverse?",
        "answer": "Il tool applica una dimensione pagina uniforme a tutte le pagine. Ogni immagine viene scalata per adattarsi alla dimensione selezionata mantenendo le proporzioni."
      }
    ]
  },
  "sign-pdf": {
    "title": "Firma PDF",
    "metaDescription": "Aggiungi firme elettroniche ai documenti PDF. Disegna, digita o carica la tua firma.",
    "keywords": [
      "firma pdf",
      "firma elettronica",
      "e-signature",
      "firma digitale",
      "firma documento pdf"
    ],
    "description": "\n      <p>Firma PDF ti consente di aggiungere firme elettroniche ai tuoi documenti PDF in modo rapido e sicuro. Crea la tua firma disegnandola, digitando il nome o caricando un’immagine, quindi posizionala dove preferisci.</p>\n      <p>Puoi aggiungere più firme allo stesso documento, ridimensionarle e posizionarle con precisione, e salvare la firma per utilizzi futuri. Lo strumento è ideale per contratti, accordi, moduli e qualsiasi documento che richieda la tua firma.</p>\n      <p>Tutta la firma avviene localmente nel browser, garantendo che documenti e firme restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionare il documento da firmare."
      },
      {
        "step": 2,
        "title": "Crea la firma",
        "description": "Disegna la firma con mouse o touch, digita il tuo nome per generarla oppure carica un’immagine della firma. Puoi anche scansionare la foto di una firma scritta su carta."
      },
      {
        "step": 3,
        "title": "Posiziona e regola",
        "description": "Clicca sul documento per posizionare la firma, poi trascina per spostarla e ridimensionarla secondo necessità."
      },
      {
        "step": 4,
        "title": "Salva e scarica",
        "description": "Clicca su “Salva” per applicare la firma e scaricare il PDF firmato."
      }
    ],
    "useCases": [
      {
        "title": "Firma contratti",
        "description": "Firma contratti e accordi elettronicamente senza stampare o scansionare.",
        "icon": "file-signature"
      },
      {
        "title": "Compilazione moduli",
        "description": "Aggiungi la tua firma a moduli di richiesta, consensi e documenti ufficiali.",
        "icon": "clipboard"
      },
      {
        "title": "Flussi di approvazione",
        "description": "Approva documenti come parte di processi di revisione e approvazione.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "La firma elettronica è giuridicamente vincolante?",
        "answer": "Le firme elettroniche sono legalmente riconosciute nella maggior parte dei paesi. Tuttavia, alcuni documenti possono richiedere tipi specifici di firme digitali. Verifica le normative locali."
      },
      {
        "question": "Posso salvare la firma per usi futuri?",
        "answer": "Sì, puoi salvare la tua firma nella memoria locale del browser per un accesso rapido quando firmi altri documenti."
      },
      {
        "question": "Posso aggiungere più firme allo stesso documento?",
        "answer": "Sì, puoi aggiungere tutte le firme necessarie, posizionando ciascuna indipendentemente su qualunque pagina."
      }
    ]
  },
  "crop-pdf": {
    "title": "Taglia PDF",
    "metaDescription": "Taglia le pagine PDF per rimuovere margini e aree indesiderate. Rifila i documenti PDF con precisione.",
    "keywords": [
      "taglia pdf",
      "rifila pdf",
      "rimuovi margini pdf",
      "ridimensiona pagine pdf",
      "taglierina pdf"
    ],
    "description": "\n      <p>Taglia PDF consente di rifilare i margini e rimuovere aree indesiderate dalle pagine PDF. È utile per eliminare spazi bianchi in eccesso, focalizzarsi su aree di contenuto specifiche o standardizzare le dimensioni delle pagine.</p>\n      <p>Puoi ritagliare tutte le pagine in modo uniforme oppure regolare ciascuna pagina individualmente. L’interfaccia visiva mostra esattamente cosa verrà mantenuto, facilitando risultati precisi.</p>\n      <p>Tutto il ritaglio avviene localmente nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il tuo PDF oppure clicca per selezionare il documento da ritagliare."
      },
      {
        "step": 2,
        "title": "Definisci l’area di taglio",
        "description": "Trascina le maniglie di ritaglio per definire l’area da mantenere oppure inserisci misure precise."
      },
      {
        "step": 3,
        "title": "Applica alle pagine",
        "description": "Scegli se applicare il ritaglio a tutte le pagine o solo a pagine specifiche."
      },
      {
        "step": 4,
        "title": "Taglia e scarica",
        "description": "Clicca su “Taglia” per applicare le modifiche e scaricare il PDF ritagliato."
      }
    ],
    "useCases": [
      {
        "title": "Rimuovi margini",
        "description": "Rifila margini eccessivi da documenti scansionati o PDF con bordi ampi.",
        "icon": "maximize-2"
      },
      {
        "title": "Focalizza contenuto",
        "description": "Ritaglia per evidenziare aree di contenuto specifiche, rimuovendo intestazioni, piè di pagina o sidebar.",
        "icon": "target"
      },
      {
        "title": "Standardizza pagine",
        "description": "Rendi tutte le pagine della stessa dimensione ritagliando a misure uniformi.",
        "icon": "square"
      }
    ],
    "faq": [
      {
        "question": "Il ritaglio rimuove definitivamente il contenuto?",
        "answer": "Sì, il ritaglio elimina il contenuto fuori dall’area di taglio. Tieni una copia di backup del file originale."
      },
      {
        "question": "Posso ritagliare pagine in modo diverso?",
        "answer": "Sì, puoi applicare impostazioni di ritaglio differenti a singole pagine o gruppi di pagine."
      },
      {
        "question": "Il ritaglio influisce sulla qualità del testo?",
        "answer": "No, il ritaglio rimuove solo le aree fuori dal bordo di taglio. Il contenuto restante mantiene la qualità originale."
      }
    ]
  },
  "extract-pages": {
    "title": "Estrai pagine",
    "metaDescription": "Estrai pagine specifiche dai file PDF. Seleziona e salva pagine singole come nuovi documenti.",
    "keywords": [
      "estrai pagine pdf",
      "salva pagine pdf",
      "copia pagine pdf",
      "estrattore pagine pdf"
    ],
    "description": "\n      <p>Estrai pagine consente di selezionare e salvare pagine specifiche di un documento PDF come nuovi file. È perfetto per estrarre sezioni rilevanti, creare estratti o separare documenti combinati.</p>\n      <p>Puoi estrarre pagine singole, intervalli di pagine o più pagine non consecutive. L’anteprima visiva rende facile identificare e selezionare esattamente le pagine necessarie.</p>\n      <p>Tutta l’estrazione avviene localmente nel tuo browser, garantendo la privacy dei documenti.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionare il documento da cui estrarre pagine."
      },
      {
        "step": 2,
        "title": "Seleziona le pagine",
        "description": "Clicca sulle miniature per selezionarle oppure inserisci numeri e intervalli di pagina nel campo di input."
      },
      {
        "step": 3,
        "title": "Estrai e scarica",
        "description": "Clicca su “Estrai” per creare un nuovo PDF con le pagine selezionate e scaricarlo."
      }
    ],
    "useCases": [
      {
        "title": "Crea estratti",
        "description": "Estrai pagine rilevanti da report o libri per creare documenti di riferimento mirati.",
        "icon": "file-minus"
      },
      {
        "title": "Condividi contenuti specifici",
        "description": "Estrai pagine specifiche da condividere senza inviare l’intero documento.",
        "icon": "share-2"
      },
      {
        "title": "Archivia pagine importanti",
        "description": "Estrai e salva pagine chiave per l’archiviazione a lungo termine.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Posso estrarre pagine non consecutive?",
        "answer": "Sì, puoi selezionare qualsiasi combinazione di pagine, consecutive o distribuite nel documento."
      },
      {
        "question": "I segnalibri verranno preservati?",
        "answer": "I segnalibri che puntano alle pagine estratte vengono preservati nel nuovo documento."
      },
      {
        "question": "Posso estrarre da più PDF?",
        "answer": "Questo strumento lavora con un PDF alla volta. Per combinare pagine da più PDF, usa lo strumento Unisci PDF."
      }
    ]
  },
  "organize-pdf": {
    "title": "Organizza PDF",
    "metaDescription": "Riordina, duplica ed elimina pagine PDF. Trascina e rilascia per riorganizzare i tuoi documenti.",
    "keywords": [
      "organizza pdf",
      "riordina pagine pdf",
      "riallinea pdf",
      "organizzatore pagine pdf"
    ],
    "description": "\n      <p>Organizza PDF offre un’interfaccia intuitiva di drag‑and‑drop per riordinare le pagine dei tuoi documenti PDF. Riordina pagine, duplica sezioni importanti o rimuovi pagine indesiderate con facilità.</p>\n      <p>Le miniature delle pagine facilitano l’identificazione dei contenuti e la disposizione esattamente come ti serve. Perfetto per ristrutturare documenti, creare ordini di pagina personalizzati o pulire file scansionati.</p>\n      <p>Tutta l’organizzazione avviene localmente nel browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il tuo file PDF oppure clicca per selezionare il documento da organizzare."
      },
      {
        "step": 2,
        "title": "Riordina le pagine",
        "description": "Trascina le miniature delle pagine per riordinarle. Usa i pulsanti duplica o elimina su ciascuna pagina se necessario."
      },
      {
        "step": 3,
        "title": "Salva e scarica",
        "description": "Clicca su “Salva” per applicare le modifiche e scaricare il PDF riorganizzato."
      }
    ],
    "useCases": [
      {
        "title": "Correggi ordine pagine",
        "description": "Correggi l’ordine di pagine scansionate o combinate in modo errato.",
        "icon": "arrow-up-down"
      },
      {
        "title": "Crea ordine personalizzato",
        "description": "Disponi le pagine in una sequenza specifica per presentazioni o report.",
        "icon": "list"
      },
      {
        "title": "Rimuovi pagine indesiderate",
        "description": "Elimina pagine vuote, duplicati o contenuti irrilevanti dai documenti.",
        "icon": "trash-2"
      }
    ],
    "faq": [
      {
        "question": "Posso duplicare pagine?",
        "answer": "Sì, puoi duplicare qualsiasi pagina e posizionare la copia ovunque nel documento."
      },
      {
        "question": "Esiste una funzione annulla?",
        "answer": "Sì, puoi annullare e ripristinare le modifiche. Puoi anche ripristinare l’ordine originale in qualsiasi momento."
      },
      {
        "question": "Posso organizzare più PDF insieme?",
        "answer": "Questo strumento lavora con un PDF alla volta. Per combinare e organizzare più PDF, uniscili prima con lo strumento Unisci PDF."
      }
    ]
  },
  "delete-pages": {
    "title": "Elimina pagine",
    "metaDescription": "Rimuovi pagine indesiderate dai file PDF. Seleziona ed elimina pagine specifiche con facilità.",
    "keywords": [
      "elimina pagine pdf",
      "rimuovi pagine pdf",
      "rimozione pagine pdf",
      "elimina pagine da pdf"
    ],
    "description": "\n      <p>Elimina pagine consente di rimuovere rapidamente e facilmente pagine indesiderate dai tuoi PDF. Che tu debba eliminare pagine vuote, contenuti obsoleti o informazioni sensibili, questo strumento semplifica il processo.</p>\n      <p>Le miniature delle pagine aiutano a identificare esattamente quali pagine rimuovere. Puoi eliminare singole pagine o più pagine contemporaneamente.</p>\n      <p>Tutta l’elaborazione avviene localmente nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il tuo file PDF oppure clicca per selezionare il documento da cui eliminare pagine."
      },
      {
        "step": 2,
        "title": "Seleziona le pagine da eliminare",
        "description": "Clicca sulle miniature per marcarle per l’eliminazione oppure inserisci i numeri di pagina nel campo di input."
      },
      {
        "step": 3,
        "title": "Elimina e scarica",
        "description": "Clicca su “Elimina” per rimuovere le pagine selezionate e scaricare il PDF aggiornato."
      }
    ],
    "useCases": [
      {
        "title": "Rimuovi pagine vuote",
        "description": "Pulisci i documenti rimuovendo pagine vuote incluse accidentalmente.",
        "icon": "file-x"
      },
      {
        "title": "Rimuovi contenuti sensibili",
        "description": "Elimina pagine con informazioni riservate prima di condividere i documenti.",
        "icon": "shield"
      },
      {
        "title": "Snellisci i documenti",
        "description": "Rimuovi pagine obsolete o irrilevanti per creare documenti più mirati.",
        "icon": "filter"
      }
    ],
    "faq": [
      {
        "question": "Posso recuperare le pagine eliminate?",
        "answer": "L’eliminazione è permanente nel file di output. Conserva una copia di backup del documento originale se potresti aver bisogno delle pagine in seguito."
      },
      {
        "question": "Posso eliminare più pagine contemporaneamente?",
        "answer": "Sì, puoi selezionare ed eliminare più pagine in simultanea."
      },
      {
        "question": "L’eliminazione influisce sui segnalibri?",
        "answer": "I segnalibri che puntano alle pagine eliminate vengono rimossi. I segnalibri verso le pagine restanti sono preservati."
      }
    ]
  },
  "bookmark": {
    "title": "Modifica segnalibri",
    "metaDescription": "Aggiungi, modifica e gestisci i segnalibri PDF. Crea una struttura di navigazione per i tuoi documenti.",
    "keywords": [
      "segnalibri pdf",
      "modifica segnalibri",
      "aggiungi segnalibri",
      "navigazione pdf",
      "sommario"
    ],
    "description": "\n      <p>Modifica segnalibri consente di creare, modificare e organizzare i segnalibri nei tuoi documenti PDF. I segnalibri offrono una navigazione rapida verso sezioni specifiche, rendendo più semplici i documenti lunghi.</p>\n      <p>Puoi aggiungere nuovi segnalibri, modificare quelli esistenti, riorganizzare la gerarchia o importare segnalibri da fonti esterne. Questo strumento è essenziale per creare documenti professionali e ben navigabili.</p>\n      <p>Tutte le modifiche avvengono localmente nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il tuo file PDF oppure clicca per selezionare il documento da modificare."
      },
      {
        "step": 2,
        "title": "Gestisci i segnalibri",
        "description": "Aggiungi nuovi segnalibri, modifica quelli esistenti o trascina per riorganizzare la gerarchia."
      },
      {
        "step": 3,
        "title": "Salva e scarica",
        "description": "Clicca su “Salva” per applicare le modifiche e scaricare il PDF con i segnalibri aggiornati."
      }
    ],
    "useCases": [
      {
        "title": "Crea navigazione",
        "description": "Aggiungi segnalibri a documenti lunghi per aiutare i lettori a raggiungere rapidamente sezioni specifiche.",
        "icon": "navigation"
      },
      {
        "title": "Organizza capitoli",
        "description": "Crea una struttura gerarchica di segnalibri che rispecchi l’organizzazione dei capitoli del documento.",
        "icon": "book-open"
      },
      {
        "title": "Migliora accessibilità",
        "description": "Aggiungi segnalibri per rendere i documenti più accessibili e facili da usare.",
        "icon": "accessibility"
      }
    ],
    "faq": [
      {
        "question": "Posso creare segnalibri nidificati?",
        "answer": "Sì, puoi creare una struttura gerarchica con segnalibri genitore e figli."
      },
      {
        "question": "Posso importare segnalibri da un file?",
        "answer": "Sì, puoi importare strutture di segnalibri da file JSON o di testo."
      },
      {
        "question": "I segnalibri funzionano in tutti i lettori PDF?",
        "answer": "Sì, i segnalibri sono una funzione standard supportata da tutti i principali lettori PDF."
      }
    ]
  },
  "table-of-contents": {
    "title": "Sommario",
    "metaDescription": "Genera un sommario per il tuo PDF. Crea una navigazione cliccabile dai segnalibri.",
    "keywords": [
      "sommario pdf",
      "generatore toc",
      "indice pdf",
      "navigazione documento"
    ],
    "description": "\n      <p>Sommario genera una pagina di indice navigabile per i tuoi documenti PDF. Il TOC può essere creato da segnalibri esistenti o da voci personalizzate, offrendo ai lettori una panoramica e una navigazione rapida.</p>\n      <p>Personalizza l’aspetto con stili, font e layout differenti. Il TOC generato include link cliccabili che portano direttamente alle pagine di riferimento.</p>\n      <p>Tutto avviene localmente nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionare il documento."
      },
      {
        "step": 2,
        "title": "Configura il TOC",
        "description": "Scegli se generare dai segnalibri o creare voci personalizzate. Seleziona stile e posizionamento."
      },
      {
        "step": 3,
        "title": "Genera e scarica",
        "description": "Clicca su “Genera” per creare il sommario e scaricare il PDF aggiornato."
      }
    ],
    "useCases": [
      {
        "title": "Lavori accademici",
        "description": "Aggiungi un sommario professionale a tesi, dissertazioni e lavori di ricerca.",
        "icon": "graduation-cap"
      },
      {
        "title": "Report aziendali",
        "description": "Crea report navigabili con elenchi chiari di sezioni per gli stakeholder.",
        "icon": "bar-chart"
      },
      {
        "title": "Manuali utente",
        "description": "Genera TOC completi per documentazione tecnica e guide utente.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "Posso personalizzare l’aspetto del TOC?",
        "answer": "Sì, puoi scegliere tra stili, font e layout diversi per il tuo sommario."
      },
      {
        "question": "Dove viene inserito il TOC?",
        "answer": "Per impostazione predefinita, il TOC viene inserito all’inizio del documento, ma puoi scegliere una posizione diversa."
      },
      {
        "question": "Le voci del TOC sono cliccabili?",
        "answer": "Sì, ogni voce è un link cliccabile che porta alla pagina corrispondente."
      }
    ]
  },
  "page-numbers": {
    "title": "Numeri di pagina",
    "metaDescription": "Aggiungi numeri di pagina ai documenti PDF. Personalizza posizione, formato e numero iniziale.",
    "keywords": [
      "aggiungi numeri di pagina",
      "numeri di pagina pdf",
      "numerazione pagine pdf",
      "paginazione pdf"
    ],
    "description": "\n      <p>Numeri di pagina aggiunge una numerazione personalizzabile ai tuoi documenti PDF. Scegli tra vari formati, posizioni e stili per adattarti al design del documento.</p>\n      <p>Puoi impostare il numero iniziale, saltare determinate pagine e usare formati diversi (1, 2, 3 oppure i, ii, iii). Perfetto per creare documenti professionali con paginazione corretta.</p>\n      <p>Tutto avviene localmente nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionare il documento."
      },
      {
        "step": 2,
        "title": "Configura la numerazione",
        "description": "Scegli posizione, formato, numero iniziale e quali pagine numerare."
      },
      {
        "step": 3,
        "title": "Applica e scarica",
        "description": "Clicca su “Applica” per aggiungere i numeri di pagina e scaricare il PDF aggiornato."
      }
    ],
    "useCases": [
      {
        "title": "Documenti professionali",
        "description": "Aggiungi numeri di pagina a report, proposte e documenti aziendali.",
        "icon": "file-text"
      },
      {
        "title": "Lavori accademici",
        "description": "Numera le pagine secondo i requisiti di formattazione accademica.",
        "icon": "graduation-cap"
      },
      {
        "title": "Documenti legali",
        "description": "Aggiungi paginazione corretta a contratti e atti legali.",
        "icon": "scale"
      }
    ],
    "faq": [
      {
        "question": "Posso saltare la prima pagina?",
        "answer": "Sì, puoi specificare quali pagine numerare e quali saltare, come pagina del titolo o copertina."
      },
      {
        "question": "Quali formati di numerazione sono disponibili?",
        "answer": "Puoi usare numeri arabi (1, 2, 3), numeri romani (i, ii, iii oppure I, II, III) o lettere (a, b, c)."
      },
      {
        "question": "Posso aggiungere il formato “Pagina X di Y”?",
        "answer": "Sì, puoi includere il conteggio totale delle pagine nel formato di numerazione."
      }
    ]
  },
  "add-watermark": {
    "title": "Aggiungi filigrana",
    "metaDescription": "Aggiungi filigrane di testo o immagine ai file PDF. Proteggi e personalizza i tuoi documenti.",
    "keywords": [
      "aggiungi filigrana",
      "filigrana pdf",
      "timbra pdf",
      "brandizza pdf",
      "proteggi pdf"
    ],
    "description": "\n      <p>Aggiungi filigrana ti consente di inserire filigrane di testo o immagine sui tuoi documenti PDF. Le filigrane possono indicare lo stato del documento (Bozza, Riservato), aggiungere branding o scoraggiare copie non autorizzate.</p>\n      <p>Personalizza posizione, dimensione, opacità, rotazione e colore della filigrana. Applica a tutte le pagine o seleziona pagine specifiche. Il tool supporta sia filigrane di testo sia filigrane immagine.</p>\n      <p>Tutto avviene localmente nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionare il documento."
      },
      {
        "step": 2,
        "title": "Crea la filigrana",
        "description": "Inserisci il testo o carica un’immagine per la filigrana. Regola posizione, dimensione, opacità e rotazione."
      },
      {
        "step": 3,
        "title": "Applica e scarica",
        "description": "Clicca su “Applica” per aggiungere la filigrana e scaricare il PDF aggiornato."
      }
    ],
    "useCases": [
      {
        "title": "Protezione documenti",
        "description": "Aggiungi filigrane “Riservato” o “Bozza” per indicare lo stato del documento.",
        "icon": "shield"
      },
      {
        "title": "Branding documenti",
        "description": "Inserisci loghi o nomi aziendali nei documenti ufficiali.",
        "icon": "award"
      },
      {
        "title": "Avviso copyright",
        "description": "Aggiungi informazioni sul copyright per proteggere la proprietà intellettuale.",
        "icon": "copyright"
      }
    ],
    "faq": [
      {
        "question": "Posso usare un’immagine come filigrana?",
        "answer": "Sì, puoi caricare immagini PNG, JPG o SVG da usare come filigrana."
      },
      {
        "question": "Posso rendere la filigrana semitrasparente?",
        "answer": "Sì, puoi regolare l’opacità da completamente trasparente a completamente opaca."
      },
      {
        "question": "Posso applicare filigrane diverse a pagine diverse?",
        "answer": "Il tool applica la stessa filigrana alle pagine selezionate. Per filigrane diverse, elabora il documento più volte."
      }
    ]
  },
  "header-footer": {
    "title": "Intestazione e piè di pagina",
    "metaDescription": "Aggiungi intestazioni e piè di pagina ai documenti PDF. Includi numeri di pagina, date e testo personalizzato.",
    "keywords": [
      "intestazione pdf",
      "piè di pagina pdf",
      "aggiungi intestazione piè di pagina",
      "carta intestata pdf"
    ],
    "description": "\n      <p>Intestazione e piè di pagina aggiunge intestazioni e piè di pagina personalizzabili ai tuoi PDF. Includi numeri di pagina, date, titoli del documento o qualsiasi testo personalizzato nelle aree dedicate.</p>\n      <p>Posiziona il contenuto a sinistra, al centro o a destra di intestazione/piè di pagina. Usa contenuti differenti per pagine pari e dispari, se necessario. Perfetto per creare documenti professionali con formattazione coerente.</p>\n      <p>Tutto avviene localmente nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionare il documento."
      },
      {
        "step": 2,
        "title": "Configura intestazione/piè di pagina",
        "description": "Inserisci il testo per le aree di intestazione e piè di pagina. Aggiungi numeri di pagina, date o testo personalizzato."
      },
      {
        "step": 3,
        "title": "Applica e scarica",
        "description": "Clicca su “Applica” per aggiungere intestazioni/piè di pagina e scaricare il PDF aggiornato."
      }
    ],
    "useCases": [
      {
        "title": "Documenti aziendali",
        "description": "Aggiungi nome dell’azienda e numeri di pagina ai documenti professionali.",
        "icon": "briefcase"
      },
      {
        "title": "Documenti legali",
        "description": "Includi numeri di causa, date e riferimenti di pagina negli atti legali.",
        "icon": "scale"
      },
      {
        "title": "Lavori accademici",
        "description": "Aggiungi intestazioni in corsa con titolo e autore del lavoro.",
        "icon": "graduation-cap"
      }
    ],
    "faq": [
      {
        "question": "Posso avere intestazioni diverse su pagine pari e dispari?",
        "answer": "Sì, puoi configurare contenuti differenti per pagine dispari e pari."
      },
      {
        "question": "Posso includere la data corrente?",
        "answer": "Sì, puoi inserire campi data dinamici che mostrano la data corrente."
      },
      {
        "question": "Posso saltare intestazione/piè di pagina su alcune pagine?",
        "answer": "Sì, puoi specificare quali pagine devono avere intestazione/piè di pagina e quali devono essere escluse."
      }
    ]
  },
  "invert-colors": {
    "title": "Inverti colori",
    "metaDescription": "Inverti i colori dei PDF per la lettura in modalità scura. Converti i documenti in colori negativi.",
    "keywords": [
      "inverti colori pdf",
      "pdf modalità scura",
      "pdf negativo",
      "inverti colori"
    ],
    "description": "\n      <p>Inverti colori invertisce i colori nei tuoi documenti PDF, creando un effetto immagine negativa. È particolarmente utile per creare versioni in modalità scura dei documenti, facilitando la lettura in condizioni di scarsa luminosità.</p>\n      <p>Il tool può invertire tutti i colori oppure preservare selettivamente alcuni elementi come le immagini. Perfetto per ridurre l’affaticamento visivo durante la lettura notturna.</p>\n      <p>Tutto avviene localmente nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionare il documento."
      },
      {
        "step": 2,
        "title": "Configura le opzioni",
        "description": "Scegli se invertire tutto il contenuto o preservare le immagini."
      },
      {
        "step": 3,
        "title": "Inverti e scarica",
        "description": "Clicca su “Inverti” per elaborare il documento e scaricare il risultato."
      }
    ],
    "useCases": [
      {
        "title": "Lettura notturna",
        "description": "Crea versioni in modalità scura dei documenti per una lettura confortevole di notte.",
        "icon": "moon"
      },
      {
        "title": "Riduci affaticamento visivo",
        "description": "Inverti documenti molto luminosi per ridurre l’affaticamento degli occhi durante letture prolungate.",
        "icon": "eye"
      },
      {
        "title": "Risparmio stampa",
        "description": "Inverti i documenti per ridurre l’uso di inchiostro nella stampa di bozze.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Le immagini verranno invertite?",
        "answer": "Per impostazione predefinita sì. Puoi scegliere di preservare le immagini originali invertendo solo testo e sfondi."
      },
      {
        "question": "Posso invertire solo alcune pagine?",
        "answer": "Sì, puoi selezionare quali pagine invertire."
      },
      {
        "question": "L'inversione è reversibile?",
        "answer": "Puoi invertire nuovamente il documento per tornare approssimativamente ai colori originali."
      }
    ]
  },
  "background-color": {
    "title": "Colore di sfondo",
    "metaDescription": "Cambia il colore di sfondo del PDF. Aggiungi sfondi colorati alle pagine del documento.",
    "keywords": [
      "pdf colore sfondo",
      "cambia sfondo pdf",
      "pdf colorato",
      "colore pagina pdf"
    ],
    "description": "\n      <p>Colore di sfondo consente di cambiare o aggiungere colori di sfondo alle pagine del tuo PDF. Può migliorare la leggibilità, aggiungere interesse visivo o rispettare i requisiti di branding.</p>\n      <p>Scegli qualsiasi colore e applicalo a tutte le pagine o solo a quelle selezionate. Lo strumento preserva i contenuti esistenti aggiungendo uno strato di sfondo.</p>\n      <p>Tutto l'elaborato avviene localmente nel tuo browser, mantenendo privati i tuoi documenti.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Scegli il colore",
        "description": "Seleziona un colore con il selettore o inserisci un codice hex."
      },
      {
        "step": 3,
        "title": "Applica e scarica",
        "description": "Clicca Applica per aggiungere lo sfondo e scaricare il PDF aggiornato."
      }
    ],
    "useCases": [
      {
        "title": "Migliora la leggibilità",
        "description": "Aggiungi uno sfondo crema o seppia per ridurre l’affaticamento visivo.",
        "icon": "eye"
      },
      {
        "title": "Branding dei documenti",
        "description": "Usa i colori del brand come sfondo per i materiali di marketing.",
        "icon": "palette"
      },
      {
        "title": "Evidenzia sezioni",
        "description": "Usa sfondi diversi per distinguere le sezioni del documento.",
        "icon": "layers"
      }
    ],
    "faq": [
      {
        "question": "Lo sfondo copre i contenuti esistenti?",
        "answer": "No, lo sfondo viene aggiunto dietro ai contenuti esistenti, preservando testo e immagini."
      },
      {
        "question": "Posso usare colori diversi per pagine diverse?",
        "answer": "Sì, ma dovrai elaborare il documento più volte per applicare colori differenti a pagine diverse."
      },
      {
        "question": "Posso rimuovere uno sfondo esistente?",
        "answer": "Questo strumento aggiunge sfondi. Per rimuoverli, usa lo strumento Modifica PDF."
      }
    ]
  },
  "text-color": {
    "title": "Cambia colore del testo",
    "metaDescription": "Modifica il colore del testo nei documenti PDF. Cambia il colore di tutti i contenuti testuali.",
    "keywords": [
      "cambia colore testo pdf",
      "colore testo pdf",
      "modifica colore testo",
      "ricolora testo pdf"
    ],
    "description": "\n      <p>Cambia colore del testo consente di modificare il colore del testo nei tuoi documenti PDF. È utile per migliorare il contrasto, rispettare il branding o creare varianti visive dei documenti.</p>\n      <p>Seleziona un nuovo colore e applicalo a tutto il testo del documento. Lo strumento elabora gli elementi testuali preservando immagini e altri contenuti.</p>\n      <p>Tutto l'elaborato avviene localmente nel tuo browser, mantenendo privati i tuoi documenti.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Scegli il colore",
        "description": "Seleziona un nuovo colore per il testo con il selettore o inserisci un codice hex."
      },
      {
        "step": 3,
        "title": "Applica e scarica",
        "description": "Clicca Applica per cambiare il colore del testo e scaricare il PDF aggiornato."
      }
    ],
    "useCases": [
      {
        "title": "Migliora il contrasto",
        "description": "Cambia il colore del testo per migliorare la leggibilità rispetto allo sfondo.",
        "icon": "contrast"
      },
      {
        "title": "Coerenza di brand",
        "description": "Aggiorna i colori del testo in base alle linee guida del brand.",
        "icon": "palette"
      },
      {
        "title": "Accessibilità",
        "description": "Adegua i colori del testo ai requisiti di contrasto per l’accessibilità.",
        "icon": "accessibility"
      }
    ],
    "faq": [
      {
        "question": "Tutto il testo verrà modificato?",
        "answer": "Sì, lo strumento cambia il colore di tutti gli elementi di testo nel documento."
      },
      {
        "question": "Posso cambiare solo parti di testo?",
        "answer": "Questo strumento modifica tutto il testo. Per cambi selettivi, usa lo strumento Modifica PDF."
      },
      {
        "question": "Il testo formattato (grassetto, corsivo) viene preservato?",
        "answer": "Sì, la formattazione del testo viene preservata; cambia solo il colore."
      }
    ]
  },
  "add-stamps": {
    "title": "Aggiungi timbri",
    "metaDescription": "Aggiungi timbri ai documenti PDF. Usa timbri predefiniti o personalizzati per approvazioni, revisioni e altro.",
    "keywords": [
      "timbri pdf",
      "aggiungi timbro",
      "timbro approvazione",
      "timbro pdf"
    ],
    "description": "\n      <p>Aggiungi timbri consente di posizionare immagini di timbri sui tuoi documenti PDF. Usa timbri predefiniti come “Approvato”, “Respinto”, “Bozza”, oppure carica immagini di timbri personalizzati.</p>\n      <p>Posiziona i timbri ovunque nella pagina, ridimensionali e applicali a singole o multiple pagine. Perfetto per flussi documentali, approvazioni e indicatori di stato.</p>\n      <p>Tutto l'elaborato avviene localmente nel tuo browser, mantenendo privati i tuoi documenti.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Seleziona il timbro",
        "description": "Scegli un timbro predefinito oppure carica un’immagine personalizzata."
      },
      {
        "step": 3,
        "title": "Posiziona e applica",
        "description": "Clicca per posizionare il timbro, regola posizione e dimensione, quindi scarica."
      }
    ],
    "useCases": [
      {
        "title": "Approvazione documenti",
        "description": "Aggiungi timbri “Approvato” o “Respinto” nei flussi di revisione.",
        "icon": "check-circle"
      },
      {
        "title": "Indicazione stato",
        "description": "Contrassegna i documenti come “Bozza”, “Finale” o “Confidenziale”.",
        "icon": "tag"
      },
      {
        "title": "Controllo qualità",
        "description": "Aggiungi timbri QC per indicare ispezione o conclusione revisione.",
        "icon": "clipboard-check"
      }
    ],
    "faq": [
      {
        "question": "Quali timbri predefiniti sono disponibili?",
        "answer": "Tra i predefiniti: Approvato, Respinto, Bozza, Finale, Confidenziale, Copia e altri."
      },
      {
        "question": "Posso caricare timbri personalizzati?",
        "answer": "Sì, puoi caricare immagini PNG o JPG da usare come timbri personalizzati."
      },
      {
        "question": "Posso aggiungere più timbri in un documento?",
        "answer": "Sì, puoi aggiungere più timbri e posizionarli indipendentemente."
      }
    ]
  },
  "remove-annotations": {
    "title": "Rimuovi annotazioni",
    "metaDescription": "Rimuovi annotazioni dai file PDF. Elimina commenti, evidenziazioni e markup.",
    "keywords": [
      "rimuovi annotazioni pdf",
      "elimina commenti",
      "rimuovi evidenziazioni",
      "pulisci pdf"
    ],
    "description": "\n      <p>Rimuovi annotazioni elimina commenti, evidenziazioni, note adesive e altre annotazioni dai tuoi documenti PDF. Crea una versione pulita del documento senza marcature.</p>\n      <p>Puoi rimuovere tutte le annotazioni o scegliere selettivamente i tipi da rimuovere. Ideale per creare versioni finali di documenti revisionati o per togliere commenti sensibili.</p>\n      <p>Tutto l'elaborato avviene localmente nel tuo browser, mantenendo privati i tuoi documenti.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Seleziona i tipi di annotazione",
        "description": "Scegli quali tipi rimuovere: commenti, evidenziazioni, link, ecc."
      },
      {
        "step": 3,
        "title": "Rimuovi e scarica",
        "description": "Clicca Rimuovi per eliminare le annotazioni e scaricare il PDF pulito."
      }
    ],
    "useCases": [
      {
        "title": "Finalizza documenti",
        "description": "Rimuovi commenti di revisione e marcature prima della pubblicazione.",
        "icon": "file-check"
      },
      {
        "title": "Protezione della privacy",
        "description": "Elimina commenti che possono contenere informazioni sensibili prima di condividere.",
        "icon": "shield"
      },
      {
        "title": "Distribuzione pulita",
        "description": "Crea copie pulite di documenti annotati per la distribuzione.",
        "icon": "copy"
      }
    ],
    "faq": [
      {
        "question": "Quali tipi di annotazioni posso rimuovere?",
        "answer": "Commenti, evidenziazioni, sottolineature, barrature, note adesive, timbri e link."
      },
      {
        "question": "Posso mantenere alcune annotazioni?",
        "answer": "Sì, puoi selezionare quali tipi rimuovere e quali mantenere."
      },
      {
        "question": "È reversibile?",
        "answer": "No, la rimozione è permanente. Conserva una copia di backup se necessario."
      }
    ]
  },
  "form-filler": {
    "title": "Compila moduli",
    "metaDescription": "Compila moduli PDF online. Completa moduli PDF interattivi senza stampare.",
    "keywords": [
      "compila modulo pdf",
      "compilatore moduli pdf",
      "compila moduli",
      "pdf interattivo"
    ],
    "description": "\n      <p>Compila moduli consente di completare moduli PDF interattivi direttamente nel browser. Compila campi di testo, seleziona caselle di controllo, scegli opzioni e aggiungi firme senza stampare.</p>\n      <p>Lo strumento supporta moduli PDF standard e moduli XFA. I dati inseriti possono essere salvati e il modulo può essere “piatto” (flatten) per impedire ulteriori modifiche.</p>\n      <p>Tutto l'elaborato avviene localmente nel tuo browser, mantenendo privati i tuoi dati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il modulo PDF",
        "description": "Trascina e rilascia il modulo oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Compila il modulo",
        "description": "Clicca sui campi per inserire testo, spuntare caselle o selezionare opzioni."
      },
      {
        "step": 3,
        "title": "Salva e scarica",
        "description": "Clicca Salva per preservare i dati e scaricare il modulo compilato."
      }
    ],
    "useCases": [
      {
        "title": "Moduli di candidatura",
        "description": "Completa candidature di lavoro, richieste di permessi e moduli di registrazione.",
        "icon": "clipboard"
      },
      {
        "title": "Moduli fiscali",
        "description": "Compila documenti fiscali e moduli finanziari in modo elettronico.",
        "icon": "file-text"
      },
      {
        "title": "Contratti",
        "description": "Compila moduli contrattuali con le tue informazioni prima della firma.",
        "icon": "file-signature"
      }
    ],
    "faq": [
      {
        "question": "Posso salvare i progressi?",
        "answer": "Sì, puoi salvare moduli compilati parzialmente e riprendere in seguito."
      },
      {
        "question": "Cos’è il “flattening” del modulo?",
        "answer": "Il flattening converte i campi dei moduli in contenuto statico, impedendo ulteriori modifiche."
      },
      {
        "question": "I moduli XFA sono supportati?",
        "answer": "Sì, lo strumento supporta sia AcroForms standard sia moduli XFA."
      }
    ]
  },
  "form-creator": {
    "title": "Crea moduli",
    "metaDescription": "Crea moduli PDF compilabili. Aggiungi campi di testo, caselle di selezione e menu a discesa ai documenti.",
    "keywords": [
      "crea modulo pdf",
      "creatore moduli pdf",
      "pdf compilabile",
      "aggiungi campi modulo"
    ],
    "description": "\n      <p>Crea moduli trasforma documenti PDF statici in moduli interattivi compilabili. Aggiungi campi di testo, caselle di selezione, pulsanti di opzione, menu a discesa e altro per creare moduli professionali.</p>\n      <p>Trascina e rilascia gli elementi del modulo sul documento, configura le proprietà dei campi e crea moduli compilabili elettronicamente. Perfetto per candidature, sondaggi e moduli di raccolta dati.</p>\n      <p>Tutto avviene localmente nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionare il documento da trasformare in modulo."
      },
      {
        "step": 2,
        "title": "Aggiungi campi modulo",
        "description": "Seleziona i tipi di campo dalla toolbar e clicca per posizionarli nel documento."
      },
      {
        "step": 3,
        "title": "Configura e salva",
        "description": "Imposta le proprietà dei campi, poi salva e scarica il modulo PDF compilabile."
      }
    ],
    "useCases": [
      {
        "title": "Moduli di candidatura",
        "description": "Crea candidature di lavoro, moduli di iscrizione e registrazioni compilabili.",
        "icon": "user-plus"
      },
      {
        "title": "Sondaggi",
        "description": "Costruisci sondaggi interattivi e questionari per la raccolta dati.",
        "icon": "clipboard-list"
      },
      {
        "title": "Moduli d'ordine",
        "description": "Crea moduli d’ordine prodotti con campi quantità e caselle di selezione.",
        "icon": "shopping-cart"
      }
    ],
    "faq": [
      {
        "question": "Quali tipi di campi posso aggiungere?",
        "answer": "Campi di testo, caselle di selezione, pulsanti di opzione, menu a discesa, selettori di data e campi firma."
      },
      {
        "question": "Posso rendere i campi obbligatori?",
        "answer": "Sì, puoi contrassegnare i campi come obbligatori e aggiungere regole di validazione."
      },
      {
        "question": "Posso aggiungere calcoli?",
        "answer": "Puoi aggiungere calcoli di base come somma e media ai campi numerici."
      }
    ]
  },
  "remove-blank-pages": {
    "title": "Rimuovi pagine vuote",
    "metaDescription": "Rileva e rimuove automaticamente le pagine vuote dai documenti PDF.",
    "keywords": [
      "rimuovi pagine vuote",
      "elimina pagine vuote",
      "pulisci pdf",
      "rimozione pagine vuote pdf"
    ],
    "description": "\n      <p>Rimuovi pagine vuote rileva automaticamente e rimuove le pagine vuote dai tuoi documenti PDF. Utile per ripulire documenti scansionati, rimuovere pagine separatrici o eliminare pagine vuote inserite accidentalmente.</p>\n      <p>Il tool usa un rilevamento intelligente per identificare le pagine realmente vuote, preservando quelle con contenuto minimo. Puoi regolare la soglia di sensibilità per controllare cosa viene considerato “vuoto”.</p>\n      <p>Tutto avviene localmente nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionare il documento."
      },
      {
        "step": 2,
        "title": "Regola la soglia",
        "description": "Imposta la soglia di rilevamento del vuoto se necessario (il valore predefinito va bene per la maggior parte dei documenti)."
      },
      {
        "step": 3,
        "title": "Rimuovi e scarica",
        "description": "Clicca Rimuovi per eliminare le pagine vuote e scaricare il PDF pulito."
      }
    ],
    "useCases": [
      {
        "title": "Pulisci documenti scansionati",
        "description": "Rimuovi pagine vuote dai documenti scansionati in batch.",
        "icon": "scan"
      },
      {
        "title": "Rimuovi separatori",
        "description": "Elimina pagine separatrici vuote dai documenti uniti.",
        "icon": "minus"
      },
      {
        "title": "Riduci dimensioni file",
        "description": "Rimuovi pagine vuote non necessarie per ridurre la dimensione del documento.",
        "icon": "minimize-2"
      }
    ],
    "faq": [
      {
        "question": "Come funziona il rilevamento delle pagine vuote?",
        "answer": "Il tool analizza il contenuto della pagina e considera vuote quelle con contenuto minimo o non visibile."
      },
      {
        "question": "Posso vedere l’anteprima delle pagine che verranno rimosse?",
        "answer": "Sì, le pagine vuote rilevate vengono evidenziate per revisione prima della rimozione."
      },
      {
        "question": "E se una pagina ha solo intestazione/piè di pagina?",
        "answer": "Puoi regolare la soglia per decidere se le pagine con contenuto minimo devono essere considerate vuote."
      }
    ]
  },
  "image-to-pdf": {
    "title": "Immagine in PDF",
    "metaDescription": "Converti qualsiasi immagine in PDF. Supporto per i formati JPG, PNG, WebP, BMP, TIFF, SVG e HEIC.",
    "keywords": [
      "immagine in pdf",
      "converti immagine",
      "foto in pdf",
      "immagini in pdf"
    ],
    "description": "\n      <p>Immagine in PDF converte immagini di qualsiasi formato in documenti PDF. Il supporto per JPG, PNG, WebP, BMP, TIFF, SVG e HEIC rende questo uno strumento universale di conversione.</p>\n      <p>Combina più immagini in un unico PDF, disponile nell’ordine preferito e personalizza dimensioni e orientamento della pagina. Perfetto per album fotografici, archivi documentali o portfolio.</p>\n      <p>Tutta la conversione avviene nel tuo browser, garantendo che le immagini restino private.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica immagini",
        "description": "Trascina e rilascia immagini di qualsiasi formato supportato oppure clicca per selezionare i file."
      },
      {
        "step": 2,
        "title": "Ordina e configura",
        "description": "Riordina le immagini e seleziona dimensioni e orientamento della pagina."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Clicca Converti per creare il PDF e scaricare il risultato."
      }
    ],
    "useCases": [
      {
        "title": "Raccolte fotografiche",
        "description": "Combina foto da diverse sorgenti in un unico album PDF.",
        "icon": "images"
      },
      {
        "title": "Documenti a formato misto",
        "description": "Converti immagini di formati diversi in un PDF uniforme.",
        "icon": "file-stack"
      },
      {
        "title": "Creazione archivi",
        "description": "Crea archivi PDF da raccolte di immagini per conservazione a lungo termine.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Quali formati di immagine sono supportati?",
        "answer": "JPG, JPEG, PNG, WebP, BMP, TIFF, TIF, SVG, HEIC e HEIF sono tutti supportati."
      },
      {
        "question": "Posso mescolare formati di immagine diversi?",
        "answer": "Sì, puoi combinare immagini di formati differenti in un unico PDF."
      },
      {
        "question": "La qualità delle immagini viene preservata?",
        "answer": "Sì, le immagini vengono incorporate alla qualità originale, salvo che tu scelga di comprimerle."
      }
    ]
  },
  "png-to-pdf": {
    "title": "PNG in PDF",
    "metaDescription": "Converti immagini PNG in PDF. Preserva la trasparenza e combina più file PNG.",
    "keywords": [
      "png in pdf",
      "converti png",
      "convertitore png",
      "immagine trasparente in pdf"
    ],
    "description": "\n      <p>PNG in PDF converte le tue immagini PNG in documenti PDF preservando la trasparenza. Perfetto per grafiche, loghi, screenshot e immagini con sfondi trasparenti.</p>\n      <p>Combina più file PNG in un unico PDF, disponili nell’ordine preferito e personalizza le impostazioni di pagina. La conversione mantiene l’alta qualità delle immagini originali.</p>\n      <p>Tutta la conversione avviene nel tuo browser, garantendo che le immagini restino private.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica file PNG",
        "description": "Trascina e rilascia le immagini PNG oppure clicca per selezionarle."
      },
      {
        "step": 2,
        "title": "Ordina e configura",
        "description": "Riordina le immagini e seleziona le opzioni di dimensione pagina."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Clicca Converti per creare il tuo PDF e scaricarlo."
      }
    ],
    "useCases": [
      {
        "title": "Portfolio grafico",
        "description": "Compila grafiche e design PNG in un portfolio professionale.",
        "icon": "palette"
      },
      {
        "title": "Documentazione screenshot",
        "description": "Converti screenshot in documentazione PDF.",
        "icon": "monitor"
      },
      {
        "title": "Raccolte di loghi",
        "description": "Crea cataloghi PDF di loghi e asset di brand.",
        "icon": "award"
      }
    ],
    "faq": [
      {
        "question": "La trasparenza viene preservata?",
        "answer": "La trasparenza PNG è preservata nell’output PDF."
      },
      {
        "question": "E le PNG animate?",
        "answer": "Le PNG animate vengono convertite come immagini statiche usando il primo fotogramma."
      },
      {
        "question": "Posso impostare un colore di sfondo?",
        "answer": "Sì, puoi scegliere un colore di sfondo per le aree trasparenti."
      }
    ]
  },
  "webp-to-pdf": {
    "title": "WebP in PDF",
    "metaDescription": "Converti immagini WebP in PDF. Conversione del formato moderno con preservazione della qualità.",
    "keywords": [
      "webp in pdf",
      "converti webp",
      "convertitore webp",
      "immagine web in pdf"
    ],
    "description": "\n      <p>WebP in PDF converte immagini WebP moderne in documenti PDF. WebP è un formato molto diffuso sul web e questo strumento semplifica la conversione per stampa o archiviazione.</p>\n      <p>Combina più file WebP in un unico PDF con impostazioni di pagina personalizzabili. La conversione preserva la qualità delle immagini creando file PDF compatti.</p>\n      <p>Tutta la conversione avviene nel tuo browser, garantendo che le immagini restino private.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica file WebP",
        "description": "Trascina e rilascia le immagini WebP oppure clicca per selezionarle."
      },
      {
        "step": 2,
        "title": "Configura opzioni",
        "description": "Disponi le immagini e seleziona dimensioni e orientamento della pagina."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Clicca Converti per creare il tuo PDF."
      }
    ],
    "useCases": [
      {
        "title": "Archivio contenuti web",
        "description": "Converti immagini dal web in PDF per l’archiviazione offline.",
        "icon": "globe"
      },
      {
        "title": "Preparazione alla stampa",
        "description": "Converti immagini WebP in PDF per scopi di stampa.",
        "icon": "printer"
      },
      {
        "title": "Standardizzazione formato",
        "description": "Converti WebP moderni in PDF universalmente compatibili.",
        "icon": "file-check"
      }
    ],
    "faq": [
      {
        "question": "Cos’è il formato WebP?",
        "answer": "WebP è un formato immagine moderno sviluppato da Google che offre compressione superiore per le immagini web."
      },
      {
        "question": "La qualità è preservata?",
        "answer": "Sì, la conversione preserva la qualità originale dell’immagine."
      },
      {
        "question": "Posso convertire WebP animati?",
        "answer": "I file WebP animati vengono convertiti come immagini statiche."
      }
    ]
  },
  "svg-to-pdf": {
    "title": "SVG in PDF",
    "metaDescription": "Converti grafica vettoriale SVG in PDF. Mantieni scalabilità e qualità.",
    "keywords": [
      "svg in pdf",
      "converti svg",
      "vettoriale in pdf",
      "grafica scalabile in pdf"
    ],
    "description": "\n      <p>SVG in PDF converte grafica vettoriale scalabile in documenti PDF preservando la qualità vettoriale. I file SVG restano nitidi a qualsiasi dimensione e questa qualità è mantenuta nell’output PDF.</p>\n      <p>Perfetto per convertire loghi, icone, illustrazioni e disegni tecnici. Il PDF risultante mantiene la scalabilità della grafica vettoriale originale.</p>\n      <p>Tutta la conversione avviene nel tuo browser, garantendo che i file restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica file SVG",
        "description": "Trascina e rilascia i file SVG oppure clicca per selezionarli."
      },
      {
        "step": 2,
        "title": "Configura impostazioni",
        "description": "Seleziona dimensioni della pagina e opzioni di disposizione."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Clicca Converti per creare il tuo PDF vettoriale."
      }
    ],
    "useCases": [
      {
        "title": "Conversione loghi",
        "description": "Converti loghi SVG in PDF per materiali di stampa.",
        "icon": "award"
      },
      {
        "title": "Disegni tecnici",
        "description": "Converti esportazioni CAD e illustrazioni tecniche in PDF.",
        "icon": "ruler"
      },
      {
        "title": "Raccolte di icone",
        "description": "Crea cataloghi PDF di set di icone e grafiche.",
        "icon": "grid"
      }
    ],
    "faq": [
      {
        "question": "La qualità vettoriale è preservata?",
        "answer": "Sì, la qualità vettoriale degli SVG è completamente preservata nell’output PDF."
      },
      {
        "question": "Posso convertire SVG complessi?",
        "answer": "Sì, SVG complessi con gradienti, filtri ed effetti sono supportati."
      },
      {
        "question": "Che succede ai font incorporati?",
        "answer": "I font incorporati nei file SVG vengono preservati nel PDF."
      }
    ]
  },
  "bmp-to-pdf": {
    "title": "BMP in PDF",
    "metaDescription": "Converti immagini bitmap BMP in PDF. Supporto al formato legacy con preservazione della qualità.",
    "keywords": [
      "bmp in pdf",
      "converti bmp",
      "bitmap in pdf",
      "convertitore bmp"
    ],
    "description": "\n      <p>BMP in PDF converte immagini bitmap in documenti PDF. BMP è un formato immagine legacy comunemente usato negli ambienti Windows; questo strumento semplifica la conversione in moderno formato PDF.</p>\n      <p>Combina più file BMP in un unico PDF con impostazioni personalizzabili. La conversione comprime i file BMP solitamente grandi preservando la qualità dell’immagine.</p>\n      <p>Tutta la conversione avviene nel tuo browser, garantendo che le immagini restino private.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica file BMP",
        "description": "Trascina e rilascia le immagini BMP oppure clicca per selezionare i file."
      },
      {
        "step": 2,
        "title": "Configura opzioni",
        "description": "Disponi le immagini e seleziona le impostazioni di pagina."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Clicca Converti per creare il PDF."
      }
    ],
    "useCases": [
      {
        "title": "Conversione file legacy",
        "description": "Converti vecchi file BMP in moderno formato PDF.",
        "icon": "history"
      },
      {
        "title": "Screenshot Windows",
        "description": "Converti screenshot bitmap di Windows in PDF.",
        "icon": "monitor"
      },
      {
        "title": "Modernizzazione archivi",
        "description": "Aggiorna archivi di immagini legacy al formato PDF.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "La dimensione del file sarà ridotta?",
        "answer": "Sì, i file BMP vengono generalmente compressi in modo significativo quando convertiti in PDF."
      },
      {
        "question": "La qualità viene preservata?",
        "answer": "Sì, la qualità dell’immagine è mantenuta durante la conversione."
      },
      {
        "question": "Quali profondità di colore BMP sono supportate?",
        "answer": "Sono supportate tutte le profondità di colore standard, incluse 24 e 32 bit."
      }
    ]
  },
  "psd-to-pdf": {
    "title": "PSD in PDF",
    "metaDescription": "Converti file Adobe Photoshop (PSD) in formato PDF. Supporta più file e preserva la qualità delle immagini.",
    "keywords": [
      "psd in pdf",
      "converti psd",
      "photoshop in pdf",
      "convertitore psd",
      "adobe psd in pdf"
    ],
    "description": "\n      <p>PSD in PDF converte file Adobe Photoshop (PSD) in documenti PDF. Questo strumento ti permette di visualizzare e condividere i design PSD senza avere Photoshop installato.</p>\n      <p>Puoi convertire più file PSD contemporaneamente e combinarli in un unico documento PDF. Lo strumento elabora ogni PSD renderizzando i livelli visibili in pagine PDF di alta qualità.</p>\n      <p>Tutta la conversione avviene localmente nel tuo browser, garantendo che i tuoi design restino privati e sicuri.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica file PSD",
        "description": "Trascina e rilascia i file PSD o PSB oppure clicca per selezionarli dal dispositivo."
      },
      {
        "step": 2,
        "title": "Ordina i file",
        "description": "Trascina le miniature per disporre i file nell’ordine desiderato."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Clicca Converti per renderizzare i PSD e scaricare il documento PDF."
      }
    ],
    "useCases": [
      {
        "title": "Condividi design",
        "description": "Condividi design Photoshop con clienti o colleghi che non hanno Photoshop.",
        "icon": "share-2"
      },
      {
        "title": "Creazione portfolio",
        "description": "Compila il tuo lavoro di design in un portfolio PDF professionale.",
        "icon": "layout"
      },
      {
        "title": "Preparazione alla stampa",
        "description": "Converti i design in PDF per scopi di stampa.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Serve avere Photoshop installato?",
        "answer": "No, questo strumento funziona interamente nel browser senza richiedere Adobe Photoshop."
      },
      {
        "question": "I livelli vengono preservati?",
        "answer": "Lo strumento rende lo stato visibile del PSD (immagine composita). I singoli livelli vengono appiattiti nel PDF."
      },
      {
        "question": "Qual è la dimensione massima del file?",
        "answer": "Puoi caricare file fino a 100MB ciascuno. I PSD di grandi dimensioni possono richiedere qualche istante di elaborazione."
      }
    ]
  },
  "heic-to-pdf": {
    "title": "HEIC in PDF",
    "metaDescription": "Converti foto HEIC di iPhone in PDF. Conversione del formato immagine Apple semplificata.",
    "keywords": [
      "heic in pdf",
      "converti heic",
      "foto iphone in pdf",
      "immagine apple in pdf"
    ],
    "description": "\n      <p>HEIC in PDF converte le foto in formato HEIC (High Efficiency Image Format) di Apple in documenti PDF. HEIC è il formato predefinito su iPhone e iPad; questo strumento rende facile condividere queste foto.</p>\n      <p>Combina più foto HEIC in un unico PDF, perfetto per creare album fotografici o archivi di documenti dalle foto del tuo iPhone.</p>\n      <p>Tutta la conversione avviene nel tuo browser, garantendo che le foto restino private.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica file HEIC",
        "description": "Trascina e rilascia le foto HEIC oppure clicca per selezionare i file."
      },
      {
        "step": 2,
        "title": "Ordina le foto",
        "description": "Riordina le foto e seleziona le impostazioni di pagina."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Clicca Converti per creare il PDF."
      }
    ],
    "useCases": [
      {
        "title": "Album foto iPhone",
        "description": "Crea album PDF dalle foto iPhone per condivisione.",
        "icon": "smartphone"
      },
      {
        "title": "Scansione documenti",
        "description": "Converti scansioni di documenti da iPhone in PDF.",
        "icon": "scan"
      },
      {
        "title": "Condivisione multipiattaforma",
        "description": "Converti HEIC in PDF per compatibilità universale.",
        "icon": "share-2"
      }
    ],
    "faq": [
      {
        "question": "Cos’è il formato HEIC?",
        "answer": "HEIC (High Efficiency Image Container) è il formato immagine di Apple che offre migliore compressione rispetto a JPEG."
      },
      {
        "question": "Le Live Photos sono supportate?",
        "answer": "Le Live Photos vengono convertite come immagini statiche usando il fotogramma chiave."
      },
      {
        "question": "I dati EXIF vengono preservati?",
        "answer": "I metadati delle foto possono essere preservati o rimossi durante la conversione, a scelta."
      }
    ]
  },
  "tiff-to-pdf": {
    "title": "TIFF in PDF",
    "metaDescription": "Converti immagini TIFF in PDF. Supporto per TIFF multipagina e conversione di alta qualità.",
    "keywords": [
      "tiff in pdf",
      "converti tiff",
      "tif in pdf",
      "tiff multipagina"
    ],
    "description": "\n      <p>TIFF in PDF converte immagini TIFF, inclusi file TIFF multipagina, in documenti PDF. TIFF è comunemente usato per scansioni di alta qualità e grafica professionale.</p>\n      <p>I file TIFF multipagina vengono convertiti automaticamente in PDF multipagina. La conversione preserva l’alta qualità delle immagini originali.</p>\n      <p>Tutta la conversione avviene nel tuo browser, garantendo che i file restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica file TIFF",
        "description": "Trascina e rilascia i file TIFF oppure clicca per selezionarli."
      },
      {
        "step": 2,
        "title": "Configura opzioni",
        "description": "Seleziona impostazioni di pagina e opzioni di compressione."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Clicca Converti per creare il PDF."
      }
    ],
    "useCases": [
      {
        "title": "Documenti scansionati",
        "description": "Converti scansioni di alta qualità da TIFF a PDF.",
        "icon": "scan"
      },
      {
        "title": "Grafica professionale",
        "description": "Converti grafica TIFF professionale per la distribuzione.",
        "icon": "image"
      },
      {
        "title": "Conversione archivi",
        "description": "Converti archivi TIFF in formato PDF più accessibile.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "I TIFF multipagina sono supportati?",
        "answer": "Sì, i file TIFF multipagina vengono convertiti automaticamente in PDF multipagina."
      },
      {
        "question": "La qualità è preservata?",
        "answer": "Sì, la qualità TIFF è completamente preservata nell’output PDF."
      },
      {
        "question": "Che compressione viene usata?",
        "answer": "Puoi scegliere tra opzioni di compressione senza perdita o con perdita."
      }
    ]
  },
  "txt-to-pdf": {
    "title": "Testo in PDF",
    "metaDescription": "Converti file di testo in PDF. Personalizza font, margini e layout pagina.",
    "keywords": [
      "txt in pdf",
      "testo in pdf",
      "converti file di testo",
      "testo semplice in pdf"
    ],
    "description": "\n      <p>Testo in PDF converte file di testo semplice in documenti PDF formattati. Personalizza font, dimensioni, margini e layout pagina per creare documenti professionali a partire da testo semplice.</p>\n      <p>Perfetto per convertire file di codice, log, note o qualsiasi contenuto di testo semplice in formato PDF condivisibile.</p>\n      <p>Tutta la conversione avviene nel tuo browser, garantendo che i file restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica file di testo",
        "description": "Trascina e rilascia il file .txt oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Personalizza formattazione",
        "description": "Scegli font, dimensione, margini e impostazioni di pagina."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Clicca Converti per creare il tuo PDF formattato."
      }
    ],
    "useCases": [
      {
        "title": "Documentazione codice",
        "description": "Converti file di sorgente in PDF per documentazione.",
        "icon": "code"
      },
      {
        "title": "Archivi di log",
        "description": "Converti file di log in PDF per archiviazione.",
        "icon": "file-text"
      },
      {
        "title": "Conversione note",
        "description": "Trasforma note di testo semplice in documenti PDF formattati.",
        "icon": "sticky-note"
      }
    ],
    "faq": [
      {
        "question": "Quali font sono disponibili?",
        "answer": "Sono disponibili più font incluse famiglie monospazi per il codice."
      },
      {
        "question": "Il ritorno a capo è automatico?",
        "answer": "Sì, le righe lunghe vengono automaticamente spezzate per adattarsi alla pagina."
      },
      {
        "question": "Posso preservare la formattazione?",
        "answer": "Spazi bianchi e indentazione del testo originale vengono preservati."
      }
    ]
  },
  "json-to-pdf": {
    "title": "JSON in PDF",
    "metaDescription": "Converti file JSON in PDF formattato. Evidenziazione sintattica e output strutturato.",
    "keywords": [
      "json in pdf",
      "converti json",
      "visualizzatore json",
      "formattatore json"
    ],
    "description": "\n      <p>JSON in PDF converte file di dati JSON in documenti PDF formattati e leggibili. L’output include evidenziazione sintattica e corretta indentazione per una lettura facilitata.</p>\n      <p>Perfetto per documentare risposte API, file di configurazione o qualsiasi dato JSON da condividere o archiviare in formato leggibile.</p>\n      <p>Tutta la conversione avviene nel tuo browser, garantendo che i dati restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica file JSON",
        "description": "Trascina e rilascia il file .json oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Configura visualizzazione",
        "description": "Scegli opzioni di formattazione ed evidenziazione della sintassi."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Clicca Converti per creare il PDF formattato."
      }
    ],
    "useCases": [
      {
        "title": "Documentazione API",
        "description": "Converti risposte API in PDF per documentazione.",
        "icon": "code"
      },
      {
        "title": "Archivi config",
        "description": "Archivia file di configurazione in PDF leggibile.",
        "icon": "settings"
      },
      {
        "title": "Report dati",
        "description": "Crea report PDF a partire da esportazioni JSON.",
        "icon": "bar-chart"
      }
    ],
    "faq": [
      {
        "question": "È inclusa l’evidenziazione sintattica?",
        "answer": "Sì, la sintassi JSON è evidenziata con colori per chiavi, valori e tipi."
      },
      {
        "question": "Come viene gestito il dato annidato?",
        "answer": "Oggetti e array annidati vengono correttamente indentati per migliorare la leggibilità."
      },
      {
        "question": "E i file JSON molto grandi?",
        "answer": "I file di grandi dimensioni vengono paginati automaticamente su più pagine."
      }
    ]
  },
  "word-to-pdf": {
    "title": "Word in PDF",
    "metaDescription": "Converti documenti Word (DOCX) in PDF. Preserva formattazione e layout nei documenti convertiti.",
    "keywords": [
      "word in pdf",
      "docx in pdf",
      "converti word",
      "convertitore word",
      "microsoft word in pdf"
    ],
    "description": "\n      <p>Word in PDF converte documenti Microsoft Word in formato PDF preservando formattazione originale, layout e struttura del contenuto.</p>\n      <p>Carica i tuoi file DOCX e ottieni PDF di alta qualità, adatti a condivisione, stampa o archiviazione. La conversione mantiene formattazione del testo, stili di paragrafo e struttura base del documento.</p>\n      <p>Tutto avviene localmente nel tuo browser, garantendo che i documenti restino privati e sicuri.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica documento Word",
        "description": "Trascina e rilascia il file .docx oppure clicca per selezionarlo dal dispositivo."
      },
      {
        "step": 2,
        "title": "Attendi l’elaborazione",
        "description": "Lo strumento caricherà il documento e lo preparerà alla conversione."
      },
      {
        "step": 3,
        "title": "Scarica il PDF",
        "description": "Clicca Scarica per salvare il documento PDF convertito."
      }
    ],
    "useCases": [
      {
        "title": "Condivisione documenti",
        "description": "Converti documenti Word in PDF per condivisione e visualizzazione universale.",
        "icon": "share-2"
      },
      {
        "title": "Preparazione alla stampa",
        "description": "Crea PDF pronti per la stampa da documenti Word.",
        "icon": "printer"
      },
      {
        "title": "Archivio documenti",
        "description": "Archivia documenti Word in formato PDF stabile per conservazione a lungo termine.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Il formato .doc è supportato?",
        "answer": "Attualmente è supportato solo .docx. Converti i file .doc in .docx con Microsoft Word o LibreOffice."
      },
      {
        "question": "Le immagini vengono preservate?",
        "answer": "Il contenuto testuale e la formattazione base sono preservati. Layout complessi con molte immagini potrebbero avere un rendering semplificato."
      },
      {
        "question": "La conversione è sicura?",
        "answer": "Sì, tutta l’elaborazione avviene nel browser. I documenti non lasciano mai il tuo dispositivo."
      }
    ]
  },
  "excel-to-pdf": {
    "title": "Excel in PDF",
    "metaDescription": "Converti fogli di calcolo Excel (XLSX) in PDF. Preserva tabelle e dati nei documenti convertiti.",
    "keywords": [
      "excel in pdf",
      "xlsx in pdf",
      "converti excel",
      "foglio di calcolo in pdf",
      "microsoft excel in pdf"
    ],
    "description": "\n      <p>Excel in PDF converte fogli di calcolo Microsoft Excel in formato PDF preservando struttura delle tabelle e organizzazione dei dati.</p>\n      <p>Carica i tuoi file XLSX e ottieni un PDF pulito con tabelle formattate correttamente. Ogni foglio del workbook diventa una sezione separata nel PDF.</p>\n      <p>Tutto avviene localmente nel tuo browser, garantendo che i dati restino privati e sicuri.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica file Excel",
        "description": "Trascina e rilascia il file .xlsx oppure clicca per selezionarlo dal dispositivo."
      },
      {
        "step": 2,
        "title": "Attendi l’elaborazione",
        "description": "Lo strumento caricherà il foglio e convertirà tutti i fogli."
      },
      {
        "step": 3,
        "title": "Scarica il PDF",
        "description": "Clicca Scarica per salvare il documento PDF convertito."
      }
    ],
    "useCases": [
      {
        "title": "Condivisione report",
        "description": "Converti report Excel in PDF per distribuzione agli stakeholder.",
        "icon": "file-text"
      },
      {
        "title": "Archiviazione dati",
        "description": "Archivia dati dei fogli di calcolo in formato PDF stabile.",
        "icon": "archive"
      },
      {
        "title": "Preparazione alla stampa",
        "description": "Crea PDF pronti per la stampa dai fogli Excel.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Sono supportati più fogli?",
        "answer": "Sì, tutti i fogli del workbook sono convertiti e inclusi nel PDF."
      },
      {
        "question": "Il formato .xls è supportato?",
        "answer": "Attualmente è supportato solo .xlsx. Salva i file .xls come .xlsx prima."
      },
      {
        "question": "Le formule vengono preservate?",
        "answer": "Il PDF mostra i valori calcolati. Le formule non sono eseguibili in formato PDF."
      }
    ]
  },
  "pptx-to-pdf": {
    "title": "PowerPoint in PDF",
    "metaDescription": "Converti presentazioni PowerPoint (PPTX) in PDF. Preserva slide e contenuti per una facile condivisione.",
    "keywords": [
      "powerpoint in pdf",
      "pptx in pdf",
      "converti pptx",
      "presentazione in pdf",
      "slide in pdf"
    ],
    "description": "\n      <p>PowerPoint in PDF converte presentazioni Microsoft PowerPoint in formato PDF, preservando contenuti delle slide e testo per una facile condivisione e visualizzazione.</p>\n      <p>Ogni slide diventa una pagina nel PDF, mantenendo il flusso della presentazione. Perfetto per condividere presentazioni con chi non ha PowerPoint installato.</p>\n      <p>Tutto avviene localmente nel tuo browser, garantendo che le presentazioni restino private e sicure.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica file PowerPoint",
        "description": "Trascina e rilascia il file .pptx oppure clicca per selezionarlo dal dispositivo."
      },
      {
        "step": 2,
        "title": "Attendi l’elaborazione",
        "description": "Lo strumento estrarrà i contenuti delle slide e creerà il PDF."
      },
      {
        "step": 3,
        "title": "Scarica il PDF",
        "description": "Clicca Scarica per salvare il documento PDF convertito."
      }
    ],
    "useCases": [
      {
        "title": "Condivisione presentazioni",
        "description": "Condividi presentazioni con chiunque senza richiedere PowerPoint.",
        "icon": "share-2"
      },
      {
        "title": "Creazione dispense",
        "description": "Crea dispense PDF a partire dalle slide della presentazione.",
        "icon": "file-text"
      },
      {
        "title": "Archivio presentazioni",
        "description": "Archivia presentazioni in formato PDF stabile.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Le animazioni vengono preservate?",
        "answer": "Il PDF è un formato statico, quindi animazioni e transizioni non sono preservate. Ogni slide diventa una pagina statica."
      },
      {
        "question": "Il formato .ppt è supportato?",
        "answer": "Attualmente è supportato solo .pptx. Converti i file .ppt in .pptx prima."
      },
      {
        "question": "Le note del relatore sono incluse?",
        "answer": "Al momento, le note del relatore non sono incluse nell’output PDF."
      }
    ]
  },
  "xps-to-pdf": {
    "title": "XPS in PDF",
    "metaDescription": "Converti documenti XPS in PDF. Conversione ad alta fedeltà che preserva layout e grafica.",
    "keywords": [
      "xps in pdf",
      "converti xps",
      "convertitore xps",
      "microsoft xps in pdf",
      "oxps in pdf"
    ],
    "description": "\n      <p>XPS in PDF converte documenti Microsoft XPS (XML Paper Specification) in formato PDF preservando layout originale, testo e grafica vettoriale.</p>\n      <p>XPS è un formato a documento fisso simile al PDF. Questo strumento offre conversione ad alta fedeltà usando parsing XPS nativo, garantendo riproduzione accurata dei documenti.</p>\n      <p>Tutto avviene localmente nel tuo browser, garantendo che i documenti restino privati e sicuri.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica file XPS",
        "description": "Trascina e rilascia il file .xps oppure clicca per selezionarlo dal dispositivo."
      },
      {
        "step": 2,
        "title": "Attendi l’elaborazione",
        "description": "Lo strumento analizzerà e convertirà il documento XPS."
      },
      {
        "step": 3,
        "title": "Scarica il PDF",
        "description": "Clicca Scarica per salvare il documento PDF convertito."
      }
    ],
    "useCases": [
      {
        "title": "Conversione formato",
        "description": "Converti documenti XPS in PDF, formato più supportato.",
        "icon": "file"
      },
      {
        "title": "Condivisione documenti",
        "description": "Condividi XPS con utenti senza visualizzatori dedicati.",
        "icon": "share-2"
      },
      {
        "title": "Migrazione archivi",
        "description": "Migra archivi XPS in formato PDF per migliore compatibilità.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Cos’è il formato XPS?",
        "answer": "XPS (XML Paper Specification) è il formato a documento fisso di Microsoft, simile al PDF. È usato comunemente per la stampa in Windows."
      },
      {
        "question": "La conversione è senza perdita?",
        "answer": "Sì, testo, grafica e layout sono preservati con alta fedeltà."
      },
      {
        "question": "I file XPS multipagina sono supportati?",
        "answer": "Sì, tutte le pagine del documento XPS vengono convertite nel PDF."
      }
    ]
  },
  "rtf-to-pdf": {
    "title": "RTF in PDF",
    "metaDescription": "Converti file RTF (Rich Text Format) in PDF. Preserva la formattazione del testo nei documenti.",
    "keywords": [
      "rtf in pdf",
      "converti rtf",
      "rich text in pdf",
      "convertitore rtf"
    ],
    "description": "\n      <p>RTF in PDF converte file in formato Rich Text in documenti PDF. RTF è un formato di testo ampiamente supportato che include formattazioni base come font, colori e stili.</p>\n      <p>Carica i tuoi file RTF e ottieni un PDF pulito preservando contenuto testuale e formattazione base. Perfetto per convertire documenti legacy in formato PDF moderno.</p>\n      <p>Tutto avviene localmente nel tuo browser, garantendo che i documenti restino privati e sicuri.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica file RTF",
        "description": "Trascina e rilascia il file .rtf oppure clicca per selezionarlo dal dispositivo."
      },
      {
        "step": 2,
        "title": "Attendi l’elaborazione",
        "description": "Lo strumento analizzerà e convertirà il contenuto RTF."
      },
      {
        "step": 3,
        "title": "Scarica il PDF",
        "description": "Clicca Scarica per salvare il documento PDF convertito."
      }
    ],
    "useCases": [
      {
        "title": "Conversione legacy",
        "description": "Converti vecchi documenti RTF in formato PDF moderno.",
        "icon": "history"
      },
      {
        "title": "Condivisione documenti",
        "description": "Condividi documenti RTF in formato PDF universalmente visualizzabile.",
        "icon": "share-2"
      },
      {
        "title": "Archivia documenti",
        "description": "Archivia file RTF in formato PDF stabile per conservazione a lungo termine.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Quale formattazione viene preservata?",
        "answer": "Formattazione base del testo inclusi font, paragrafi e stili viene convertita. Funzionalità RTF complesse possono essere semplificate."
      },
      {
        "question": "Posso convertire più file RTF?",
        "answer": "Attualmente si converte un file alla volta. Usa Unisci PDF per combinare più file convertiti."
      },
      {
        "question": "Le immagini incorporate sono supportate?",
        "answer": "Il focus è sul contenuto testuale. Oggetti incorporati potrebbero non essere renderizzati."
      }
    ]
  },
  "epub-to-pdf": {
    "title": "EPUB in PDF",
    "metaDescription": "Converti e-book EPUB in PDF. Preserva formattazione, immagini e struttura dei capitoli.",
    "keywords": [
      "epub in pdf",
      "converti epub",
      "ebook in pdf",
      "convertitore epub"
    ],
    "description": "\n      <p>EPUB in PDF converte file di e-book in documenti PDF di alta qualità. EPUB è il formato di e-book più popolare, usato dalla maggior parte dei lettori e delle biblioteche digitali.</p>\n      <p>Questo strumento preserva formattazione del testo, immagini e struttura dei capitoli dei tuoi e-book. Perfetto per stampa, archiviazione o condivisione in formato universalmente visualizzabile.</p>\n      <p>Tutto avviene localmente nel tuo browser usando tecnologia di rendering avanzata, garantendo privacy e conversione veloce.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica file EPUB",
        "description": "Trascina e rilascia il file .epub oppure clicca per selezionarlo dal dispositivo."
      },
      {
        "step": 2,
        "title": "Attendi la conversione",
        "description": "Lo strumento renderizzerà e convertirà tutte le pagine del tuo e-book."
      },
      {
        "step": 3,
        "title": "Scarica il PDF",
        "description": "Clicca Scarica per salvare il documento PDF convertito."
      }
    ],
    "useCases": [
      {
        "title": "Stampa e-book",
        "description": "Converti e-book in PDF per stampa fisica.",
        "icon": "printer"
      },
      {
        "title": "Archivia libri",
        "description": "Conserva e-book in formato PDF stabile a lungo termine.",
        "icon": "archive"
      },
      {
        "title": "Condividi documenti",
        "description": "Condividi e-book con chiunque, anche senza e-reader.",
        "icon": "share-2"
      }
    ],
    "faq": [
      {
        "question": "La formattazione viene preservata?",
        "answer": "Sì! Questo strumento usa rendering EPUB nativo, preservando formattazione del testo, immagini e layout con alta fedeltà."
      },
      {
        "question": "Gli EPUB con DRM sono supportati?",
        "answer": "No, gli e-book protetti da DRM non possono essere convertiti. Sono supportati solo file EPUB senza DRM."
      },
      {
        "question": "Come viene determinata la dimensione pagina?",
        "answer": "Il contenuto EPUB viene renderizzato su formato A4 standard per leggibilità ottimale."
      }
    ]
  },
  "mobi-to-pdf": {
    "title": "MOBI in PDF",
    "metaDescription": "Converti e-book MOBI in PDF. Supporto per formato Kindle con rendering di alta qualità.",
    "keywords": [
      "mobi in pdf",
      "converti mobi",
      "kindle in pdf",
      "azw in pdf",
      "convertitore mobi"
    ],
    "description": "\n      <p>MOBI in PDF converte file e-book Amazon Kindle in documenti PDF di alta qualità. Il formato MOBI (inclusi AZW e AZW3) è il formato proprietario di Amazon usato sui dispositivi Kindle.</p>\n      <p>Questo strumento preserva formattazione del testo, immagini e struttura dei tuoi libri Kindle. Perfetto per stampa, archiviazione o lettura su dispositivi che non supportano il formato MOBI.</p>\n      <p>Tutto avviene localmente nel tuo browser usando tecnologia di rendering avanzata, garantendo privacy.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica file MOBI",
        "description": "Trascina e rilascia file .mobi, .azw o .azw3 oppure clicca per selezionarli dal dispositivo."
      },
      {
        "step": 2,
        "title": "Attendi la conversione",
        "description": "Lo strumento renderizzerà e convertirà tutte le pagine del tuo e-book."
      },
      {
        "step": 3,
        "title": "Scarica il PDF",
        "description": "Clicca Scarica per salvare il documento PDF convertito."
      }
    ],
    "useCases": [
      {
        "title": "Stampa libri Kindle",
        "description": "Converti e-book Kindle in PDF per stampa fisica.",
        "icon": "printer"
      },
      {
        "title": "Archivia libri",
        "description": "Conserva libri Kindle in formato PDF universale.",
        "icon": "archive"
      },
      {
        "title": "Lettura cross-device",
        "description": "Leggi libri Kindle su dispositivi che supportano solo PDF.",
        "icon": "tablet-smartphone"
      }
    ],
    "faq": [
      {
        "question": "Quali formati MOBI sono supportati?",
        "answer": "Lo strumento supporta file .mobi, .azw e .azw3 (versioni senza DRM)."
      },
      {
        "question": "I libri Kindle con DRM sono supportati?",
        "answer": "No, gli e-book protetti da DRM non possono essere convertiti. Sono supportati solo file senza DRM."
      },
      {
        "question": "La formattazione viene preservata?",
        "answer": "Sì! Lo strumento usa rendering MOBI nativo per preservare testo, immagini e layout."
      }
    ]
  },
  "djvu-to-pdf": {
    "title": "DJVU in PDF",
    "metaDescription": "Converti file documento DJVU in PDF. Rendering di alta qualità per documenti e libri scansionati.",
    "keywords": [
      "djvu in pdf",
      "converti djvu",
      "convertitore djvu",
      "djvu pdf",
      "djv in pdf"
    ],
    "description": "\n      <p>DJVU in PDF converte file documento DjVu in PDF di alta qualità. DjVu è un formato ideato principalmente per archiviare documenti scansionati, specialmente con combinazioni di testo, disegni e fotografie.</p>\n      <p>Questo strumento renderizza ogni pagina del tuo file DJVU al DPI scelto (punti per pollice) e le combina in un PDF ricercabile. Perfetto per convertire libri scansionati, manuali tecnici e documenti d’archivio.</p>\n      <p>Tutto avviene localmente nel tuo browser, garantendo che i documenti restino privati e sicuri.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica file DJVU",
        "description": "Trascina e rilascia il file .djvu o .djv oppure clicca per selezionarlo dal dispositivo."
      },
      {
        "step": 2,
        "title": "Configura opzioni",
        "description": "Scegli DPI di output (72, 150 o 300) e qualità immagine per il PDF."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Clicca Converti in PDF e scarica il documento convertito."
      }
    ],
    "useCases": [
      {
        "title": "Archivia documenti",
        "description": "Converti archivi DJVU in formato PDF universale.",
        "icon": "archive"
      },
      {
        "title": "Condividi libri scansionati",
        "description": "Condividi libri scansionati in PDF per compatibilità più ampia.",
        "icon": "share-2"
      },
      {
        "title": "Stampa documenti",
        "description": "Converti DJVU in PDF di alta qualità per la stampa.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Cos’è il formato DJVU?",
        "answer": "DjVu è un formato pensato per memorizzare documenti scansionati, con testo, disegni e immagini. Offre compressione migliore del PDF per contenuti scansionati."
      },
      {
        "question": "Quale DPI dovrei scegliere?",
        "answer": "72 DPI è adatto alla visualizzazione web, 150 DPI per documenti standard e 300 DPI per stampa di alta qualità."
      },
      {
        "question": "Il testo sarà ricercabile?",
        "answer": "Il testo viene renderizzato come immagini. Se ti serve testo ricercabile, usa lo strumento OCR PDF dopo la conversione."
      }
    ]
  },
  "fb2-to-pdf": {
    "title": "FB2 in PDF",
    "metaDescription": "Converti e-book FictionBook (FB2) in PDF. Supporta più file con rendering di alta qualità.",
    "keywords": [
      "fb2 in pdf",
      "converti fb2",
      "fictionbook in pdf",
      "convertitore fb2",
      "fb2.zip in pdf"
    ],
    "description": "\n      <p>FB2 in PDF converte file e-book FictionBook (FB2) in documenti PDF di alta qualità. FB2 è un formato e-book XML molto diffuso in Russia e nell’Europa orientale.</p>\n      <p>Questo strumento supporta sia file .fb2 sia .fb2.zip e può elaborare più file contemporaneamente. Preserva formattazione del testo, immagini e struttura dei capitoli dei tuoi e-book.</p>\n      <p>Tutto avviene localmente nel tuo browser usando tecnologia di rendering avanzata, garantendo privacy e conversione veloce.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica file FB2",
        "description": "Trascina e rilascia uno o più file .fb2 o .fb2.zip oppure clicca per selezionarli dal dispositivo."
      },
      {
        "step": 2,
        "title": "Seleziona qualità",
        "description": "Scegli qualità di output: Bassa (72 DPI), Media (150 DPI) o Alta (300 DPI)."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Clicca Converti in PDF e scarica i documenti convertiti."
      }
    ],
    "useCases": [
      {
        "title": "Stampa e-book",
        "description": "Converti e-book FB2 in PDF per stampa fisica.",
        "icon": "printer"
      },
      {
        "title": "Conversione batch",
        "description": "Converti più file FB2 in PDF contemporaneamente.",
        "icon": "layers"
      },
      {
        "title": "Formato universale",
        "description": "Condividi e-book in formato PDF che funziona su qualsiasi dispositivo.",
        "icon": "share-2"
      }
    ],
    "faq": [
      {
        "question": "Posso convertire più file FB2 insieme?",
        "answer": "Sì! Lo strumento supporta conversione batch fino a 20 file FB2 simultaneamente."
      },
      {
        "question": "I file .fb2.zip sono supportati?",
        "answer": "Sì, lo strumento estrae e converte automaticamente i file FB2 dagli archivi .fb2.zip."
      },
      {
        "question": "La formattazione viene preservata?",
        "answer": "Sì! Lo strumento usa rendering FB2 nativo, preservando formattazione del testo, immagini e struttura dei capitoli con alta fedeltà."
      }
    ]
  },
  "pdf-to-jpg": {
    "title": "PDF in JPG",
    "metaDescription": "Converti pagine PDF in immagini JPG. Estrazione di alta qualità con risoluzione personalizzabile.",
    "keywords": [
      "pdf in jpg",
      "pdf in jpeg",
      "converti pdf in immagine",
      "estrai immagini pdf"
    ],
    "description": "\n      <p>PDF in JPG converte le pagine dei documenti PDF in immagini JPG di alta qualità. Estrai tutte le pagine o selezionane alcune, con impostazioni personalizzabili di risoluzione e qualità.</p>\n      <p>Perfetto per estrarre immagini dai PDF, creare miniature o convertire documenti per uso web.</p>\n      <p>Tutta la conversione avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Seleziona pagine e qualità",
        "description": "Scegli quali pagine convertire e imposta opzioni di qualità/DPI."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Clicca Converti per estrarre le immagini e scaricare come ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Pubblicazione web",
        "description": "Converti pagine PDF in immagini per siti web.",
        "icon": "globe"
      },
      {
        "title": "Social media",
        "description": "Estrai pagine come immagini per condivisione sui social.",
        "icon": "share-2"
      },
      {
        "title": "Presentazioni",
        "description": "Converti slide PDF in immagini per presentazioni.",
        "icon": "presentation"
      }
    ],
    "faq": [
      {
        "question": "Quali impostazioni di qualità sono disponibili?",
        "answer": "Puoi impostare DPI da 72 a 300 e qualità JPEG da 1 a 100."
      },
      {
        "question": "Posso convertire solo alcune pagine?",
        "answer": "Sì, puoi selezionare pagine singole o intervalli di pagine da convertire."
      },
      {
        "question": "Come vengono gestite più pagine?",
        "answer": "Ogni pagina diventa un file JPG separato, scaricato come archivio ZIP."
      }
    ]
  },
  "pdf-to-png": {
    "title": "PDF in PNG",
    "metaDescription": "Converti pagine PDF in immagini PNG. Qualità senza perdita con supporto alla trasparenza.",
    "keywords": [
      "pdf in png",
      "converti pdf in png",
      "estrazione immagini pdf",
      "conversione pdf lossless"
    ],
    "description": "\n      <p>PDF in PNG converte le pagine dei documenti PDF in immagini PNG di alta qualità con compressione senza perdita. Il formato PNG preserva perfettamente la qualità e supporta la trasparenza.</p>\n      <p>Ideale per estrarre grafici, diagrammi o qualsiasi contenuto in cui la preservazione della qualità è critica.</p>\n      <p>Tutta la conversione avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Configura opzioni",
        "description": "Seleziona le pagine e imposta opzioni di risoluzione (DPI)."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Clicca Converti per estrarre le immagini PNG."
      }
    ],
    "useCases": [
      {
        "title": "Estrazione grafica",
        "description": "Estrai diagrammi e grafici con qualità perfetta.",
        "icon": "image"
      },
      {
        "title": "Asset di design",
        "description": "Converti design PDF in PNG per software di editing.",
        "icon": "palette"
      },
      {
        "title": "Documentazione",
        "description": "Crea immagini di alta qualità per documentazione tecnica.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "Perché scegliere PNG rispetto a JPG?",
        "answer": "PNG offre compressione senza perdita e supporto alla trasparenza, ideale per grafica e testo."
      },
      {
        "question": "Gli sfondi trasparenti sono supportati?",
        "answer": "Sì, le pagine PDF con trasparenza sono preservate nell’output PNG."
      },
      {
        "question": "Quale DPI dovrei usare?",
        "answer": "Usa 150 DPI per visualizzazione a schermo, 300 DPI per stampa."
      }
    ]
  },
  "pdf-to-webp": {
    "title": "PDF in WebP",
    "metaDescription": "Converti pagine PDF in immagini WebP. Formato moderno con ottima compressione.",
    "keywords": [
      "pdf in webp",
      "converti pdf in webp",
      "formato immagine moderno",
      "immagini ottimizzate web"
    ],
    "description": "\n      <p>PDF in WebP converte le pagine dei documenti PDF in immagini WebP, il formato moderno di Google che offre ottima compressione con alta qualità.</p>\n      <p>Le immagini WebP sono più piccole di JPG o PNG mantenendo qualità comparabile, ideali per uso web.</p>\n      <p>Tutta la conversione avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Imposta qualità",
        "description": "Scegli le pagine e imposta opzioni di qualità/compressione."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Clicca Converti per creare le immagini WebP."
      }
    ],
    "useCases": [
      {
        "title": "Ottimizzazione web",
        "description": "Crea immagini ottimizzate per il web dai contenuti PDF.",
        "icon": "globe"
      },
      {
        "title": "Risparmio banda",
        "description": "Riduci la dimensione dei file immagine per caricamenti più rapidi.",
        "icon": "zap"
      },
      {
        "title": "Siti moderni",
        "description": "Usa formati immagine moderni per progetti web contemporanei.",
        "icon": "layout"
      }
    ],
    "faq": [
      {
        "question": "Cos’è il formato WebP?",
        "answer": "WebP è un formato immagine moderno di Google che offre compressione superiore."
      },
      {
        "question": "WebP è ampiamente supportato?",
        "answer": "Sì, tutti i browser moderni supportano il formato WebP."
      },
      {
        "question": "Quanto sono più piccoli i file WebP?",
        "answer": "I file WebP sono tipicamente il 25-35% più piccoli rispetto ai JPG equivalenti."
      }
    ]
  },
  "pdf-to-bmp": {
    "title": "PDF in BMP",
    "metaDescription": "Converti pagine PDF in immagini bitmap BMP. Formato non compresso per massima compatibilità.",
    "keywords": [
      "pdf in bmp",
      "converti pdf in bitmap",
      "immagini non compresse",
      "formato legacy"
    ],
    "description": "\n      <p>PDF in BMP converte le pagine dei documenti PDF in immagini bitmap BMP. BMP è un formato non compresso che garantisce massima compatibilità con sistemi e applicazioni legacy.</p>\n      <p>Sebbene i file BMP siano più grandi dei formati compressi, offrono qualità perfetta e compatibilità universale.</p>\n      <p>Tutta la conversione avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Seleziona pagine",
        "description": "Scegli quali pagine convertire e imposta il DPI."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Clicca Converti per creare le immagini BMP."
      }
    ],
    "useCases": [
      {
        "title": "Sistemi legacy",
        "description": "Crea immagini compatibili con software più vecchi.",
        "icon": "history"
      },
      {
        "title": "Applicazioni Windows",
        "description": "Genera file BMP per applicazioni specifiche Windows.",
        "icon": "monitor"
      },
      {
        "title": "Archivi non compressi",
        "description": "Crea archivi di immagini non compressi dai PDF.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Perché usare il formato BMP?",
        "answer": "BMP offre qualità non compressa e massima compatibilità con sistemi legacy."
      },
      {
        "question": "I file BMP sono più grandi?",
        "answer": "Sì, i BMP sono non compressi e significativamente più grandi di JPG o PNG."
      },
      {
        "question": "Quali profondità di colore sono supportate?",
        "answer": "Sono supportate profondità colore a 24 e 32 bit."
      }
    ]
  },
  "pdf-to-tiff": {
    "title": "PDF in TIFF",
    "metaDescription": "Converti PDF in immagini TIFF. Qualità professionale con supporto multipagina.",
    "keywords": [
      "pdf in tiff",
      "converti pdf in tiff",
      "immagini professionali",
      "tiff multipagina"
    ],
    "description": "\n      <p>PDF in TIFF converte i documenti PDF in immagini TIFF di alta qualità. TIFF è il formato preferito per stampa professionale e archiviazione grazie alla compressione senza perdita.</p>\n      <p>Crea TIFF a pagina singola oppure combina tutte le pagine in un file TIFF multipagina. Perfetto per scopi professionali e di archivio.</p>\n      <p>Tutta la conversione avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Configura l’output",
        "description": "Scegli TIFF a pagina singola o multipagina e imposta il DPI."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Clicca Converti per creare le immagini TIFF."
      }
    ],
    "useCases": [
      {
        "title": "Stampa professionale",
        "description": "Crea file TIFF pronti per la stampa dai documenti PDF.",
        "icon": "printer"
      },
      {
        "title": "Archiviazione documenti",
        "description": "Archivia documenti in formato TIFF di alta qualità.",
        "icon": "archive"
      },
      {
        "title": "Publishing",
        "description": "Converti PDF in TIFF per flussi di pubblicazione.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "Posso creare TIFF multipagina?",
        "answer": "Sì, puoi combinare tutte le pagine PDF in un unico TIFF multipagina."
      },
      {
        "question": "Quali opzioni di compressione sono disponibili?",
        "answer": "Sono disponibili LZW, ZIP e nessuna compressione."
      },
      {
        "question": "Quale DPI usare per la stampa?",
        "answer": "Usa 300 DPI o superiore per stampa professionale."
      }
    ]
  },
  "pdf-to-svg": {
    "title": "PDF in SVG",
    "metaDescription": "Converti pagine PDF in grafica vettoriale SVG. Scalabilità perfetta a qualsiasi dimensione con esportazione per pagina.",
    "keywords": [
      "pdf in svg",
      "converti pdf in svg",
      "grafica vettoriale",
      "pdf scalabile",
      "convertitore svg"
    ],
    "description": "\n      <p>PDF in SVG converte ogni pagina del tuo documento PDF in grafica vettoriale scalabile (SVG). SVG è un formato vettoriale che mantiene qualità perfetta a qualsiasi livello di zoom o dimensione di stampa.</p>\n      <p>A differenza dei formati raster (JPG, PNG), la grafica SVG non diventa mai pixelata quando viene scalata. Ideale per loghi, diagrammi, disegni tecnici e contenuti da mostrare a dimensioni diverse.</p>\n      <p>Visualizza l’anteprima di ogni pagina convertita e scaricale singolarmente o come archivio ZIP. Tutto avviene localmente nel tuo browser, garantendo piena privacy.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Configura opzioni",
        "description": "Imposta qualità della risoluzione e, opzionalmente, specifica intervalli di pagine."
      },
      {
        "step": 3,
        "title": "Anteprima e conversione",
        "description": "Clicca Converti per elaborare. Visualizza l’anteprima cliccando sulle miniature."
      },
      {
        "step": 4,
        "title": "Scarica",
        "description": "Scarica file SVG individuali o tutte le pagine come archivio ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Loghi e grafica",
        "description": "Estrai loghi e grafica vettoriale dai PDF per usarli nei software di design.",
        "icon": "pen-tool"
      },
      {
        "title": "Diagrammi tecnici",
        "description": "Converti disegni tecnici e diagrammi in formato SVG scalabile.",
        "icon": "ruler"
      },
      {
        "title": "Sviluppo web",
        "description": "Crea file SVG pronti per il web dai contenuti PDF.",
        "icon": "globe"
      },
      {
        "title": "Stampa a qualsiasi dimensione",
        "description": "Genera grafica vettoriale che stampa perfettamente a qualsiasi dimensione.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Cos’è il formato SVG?",
        "answer": "SVG (Scalable Vector Graphics) è un formato di immagine vettoriale scalabile a qualsiasi dimensione senza perdita di qualità. È ampiamente usato per loghi, icone e grafica web."
      },
      {
        "question": "L’SVG sarà davvero vettoriale?",
        "answer": "L’SVG contiene un rendering ad alta risoluzione della pagina PDF. Per PDF con contenuti vettoriali, otterrai output nitido a qualsiasi scala."
      },
      {
        "question": "Posso vedere l’anteprima prima di scaricare?",
        "answer": "Sì! Clicca su una miniatura per vedere l’anteprima a dimensione intera e scaricare pagine singole o tutte insieme."
      },
      {
        "question": "Che risoluzione dovrei scegliere?",
        "answer": "Risoluzioni più alte (216 o 288 DPI) producono SVG più grandi e dettagliati. Usa valori inferiori per elaborazione più rapida e file più piccoli."
      }
    ]
  },
  "pdf-to-greyscale": {
    "title": "PDF in scala di grigi",
    "metaDescription": "Converti PDF a colori in scala di grigi. Riduci la dimensione del file e prepara per stampa in bianco e nero.",
    "keywords": [
      "pdf in scala di grigi",
      "pdf in bianco e nero",
      "rimuovi colori pdf",
      "grayscale pdf"
    ],
    "description": "\n      <p>PDF in scala di grigi converte documenti PDF a colori in bianco e nero (scala di grigi). Questo riduce la dimensione del file e prepara i documenti alla stampa in bianco e nero.</p>\n      <p>La conversione preserva la nitidezza del testo e il dettaglio delle immagini rimuovendo le informazioni di colore. Perfetto per stampe di bozza o versioni ottimizzate per la stampante.</p>\n      <p>Tutta la conversione avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF a colori",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Anteprima conversione",
        "description": "Visualizza l’anteprima dell’aspetto della versione in scala di grigi."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Clicca Converti per creare il PDF in scala di grigi."
      }
    ],
    "useCases": [
      {
        "title": "Risparmio stampa",
        "description": "Converti in scala di grigi per ridurre i costi di stampa a colori.",
        "icon": "printer"
      },
      {
        "title": "Documenti di bozza",
        "description": "Crea bozze in bianco e nero per revisione.",
        "icon": "file-text"
      },
      {
        "title": "Riduzione dimensioni",
        "description": "Riduci le dimensioni del PDF rimuovendo le informazioni di colore.",
        "icon": "minimize-2"
      }
    ],
    "faq": [
      {
        "question": "Il testo rimarrà leggibile?",
        "answer": "Sì, la nitidezza del testo è preservata durante la conversione."
      },
      {
        "question": "Quanto si riduce la dimensione del file?",
        "answer": "La riduzione varia, ma può essere del 20-50% per documenti ricchi di colore."
      },
      {
        "question": "Posso convertire solo alcune pagine?",
        "answer": "Sì, puoi selezionare quali pagine convertire in scala di grigi."
      }
    ]
  },
  "pdf-to-json": {
    "title": "PDF in JSON",
    "metaDescription": "Estrai contenuti PDF in formato JSON. Ottieni dati strutturati dai documenti PDF.",
    "keywords": [
      "pdf in json",
      "estrai dati pdf",
      "parser pdf",
      "dati pdf strutturati"
    ],
    "description": "\n      <p>PDF in JSON estrae contenuti dai documenti PDF in formato JSON strutturato. Estrai testo, metadati, informazioni sulle pagine e struttura del documento per uso programmatico.</p>\n      <p>Perfetto per estrazione dati, analisi documenti o integrazione dei contenuti PDF in applicazioni e flussi di lavoro.</p>\n      <p>Tutta l’estrazione avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Seleziona i dati",
        "description": "Scegli quali contenuti estrarre: testo, metadati, struttura."
      },
      {
        "step": 3,
        "title": "Estrai e scarica",
        "description": "Clicca Estrai per generare il JSON e scaricarlo."
      }
    ],
    "useCases": [
      {
        "title": "Estrazione dati",
        "description": "Estrai dati strutturati dai documenti PDF.",
        "icon": "database"
      },
      {
        "title": "Analisi documenti",
        "description": "Analizza struttura e contenuti PDF in modo programmatico.",
        "icon": "search"
      },
      {
        "title": "Integrazione",
        "description": "Importa contenuti PDF nelle applicazioni via JSON.",
        "icon": "plug"
      }
    ],
    "faq": [
      {
        "question": "Quali dati vengono estratti?",
        "answer": "Contenuto testuale, metadati, dimensioni pagina, font e struttura del documento."
      },
      {
        "question": "Il formato JSON è documentato?",
        "answer": "Sì, lo schema JSON è coerente e ben documentato."
      },
      {
        "question": "Posso estrarre da PDF scansionati?",
        "answer": "I PDF scansionati richiedono prima l’OCR. Usa lo strumento OCR PDF prima dell’estrazione."
      }
    ]
  },
  "pdf-to-pptx": {
    "title": "PDF in PowerPoint",
    "metaDescription": "Converti PDF in presentazioni PowerPoint. Ogni pagina diventa una slide di alta qualità.",
    "keywords": [
      "pdf in pptx",
      "pdf in powerpoint",
      "converti slide pdf",
      "presentazione pdf"
    ],
    "description": "\n      <p>PDF in PowerPoint converte i tuoi documenti PDF in presentazioni PowerPoint (PPTX) modificabili. Ogni pagina PDF viene trasformata in una slide di alta qualità, preservando perfettamente il layout visivo.</p>\n      <p>Ideale per convertire report, dispense o qualsiasi contenuto PDF in formato presentazione. Puoi scegliere la qualità immagine (DPI) per bilanciare dimensione del file e nitidezza.</p>\n      <p>Tutto avviene localmente nel tuo browser, garantendo che i documenti restino privati e sicuri.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo dal dispositivo."
      },
      {
        "step": 2,
        "title": "Scegli la qualità",
        "description": "Seleziona la qualità immagine (DPI) per le slide. DPI più alti significano migliore qualità ma file più grande."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Clicca Converti per creare la presentazione PowerPoint e scaricare il file PPTX."
      }
    ],
    "useCases": [
      {
        "title": "Creazione presentazioni",
        "description": "Converti report o documenti PDF in slide per riunioni.",
        "icon": "presentation"
      },
      {
        "title": "Materiali di formazione",
        "description": "Trasforma documenti formativi PDF in presentazioni PowerPoint interattive.",
        "icon": "book-open"
      },
      {
        "title": "Riutilizzo contenuti",
        "description": "Converti contenuti PDF esistenti in formato slide modificabile.",
        "icon": "refresh-cw"
      }
    ],
    "faq": [
      {
        "question": "Le slide saranno modificabili?",
        "answer": "Ogni slide contiene un’immagine di alta qualità della pagina PDF. Puoi aggiungere testi, forme e annotazioni in PowerPoint."
      },
      {
        "question": "Quale DPI scegliere?",
        "answer": "Usa 150 DPI per presentazioni su schermo. Usa 300 DPI per stampa o quando serve la massima qualità."
      },
      {
        "question": "Posso convertire PDF multipagina?",
        "answer": "Sì, ogni pagina del PDF diventa una slide separata nella presentazione."
      }
    ]
  },
  "pdf-to-excel": {
    "title": "PDF in Excel",
    "metaDescription": "Converti PDF in fogli di calcolo Excel. Estrai tabelle in formato XLSX.",
    "keywords": [
      "pdf in excel",
      "pdf in xlsx",
      "converti tabelle pdf",
      "estrai tabelle"
    ],
    "description": "\n      <p>PDF in Excel converte i tuoi documenti PDF in fogli di calcolo Microsoft Excel (XLSX) modificabili. Lo strumento rileva automaticamente le tabelle nel PDF ed estrae ciascuna in fogli separati.</p>\n      <p>Ideale per analizzare report finanziari, fatture o qualsiasi dato presentato in tabelle. Le tabelle di ogni pagina vengono organizzate in fogli per una facile manipolazione.</p>\n      <p>Tutto avviene localmente nel tuo browser, garantendo che i dati restino privati e sicuri.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Elabora",
        "description": "Lo strumento identificherà automaticamente ed estrarrà le tabelle."
      },
      {
        "step": 3,
        "title": "Scarica Excel",
        "description": "Scarica il file Excel con le tabelle estratte."
      }
    ],
    "useCases": [
      {
        "title": "Analisi finanziaria",
        "description": "Converti estratti conto o fatture in Excel per l’analisi.",
        "icon": "trending-up"
      },
      {
        "title": "Estrazione dati",
        "description": "Estrai tabelle da articoli di ricerca o report.",
        "icon": "database"
      },
      {
        "title": "Gestione inventario",
        "description": "Converti elenchi inventario da PDF a foglio di calcolo.",
        "icon": "clipboard"
      }
    ],
    "faq": [
      {
        "question": "Come vengono gestite le tabelle?",
        "answer": "Le tabelle rilevate su ogni pagina vengono estratte in fogli corrispondenti nel file Excel."
      },
      {
        "question": "E se non ci sono tabelle?",
        "answer": "Verrà creato un foglio informativo che indica che non sono state trovate tabelle."
      },
      {
        "question": "La formattazione è preservata?",
        "answer": "I dati sono preservati, ma la formattazione visiva complessa può essere semplificata per l’uso nel foglio."
      }
    ]
  },
  "ocr-pdf": {
    "title": "OCR PDF",
    "metaDescription": "Rendi i PDF scansionati ricercabili con OCR. Estrai testo da immagini e documenti scansionati.",
    "keywords": [
      "ocr pdf",
      "pdf ricercabile",
      "riconoscimento testo",
      "scansione in testo"
    ],
    "description": "\n      <p>OCR PDF utilizza il Riconoscimento Ottico dei Caratteri per estrarre testo da documenti scansionati e immagini contenute nei PDF. Converte PDF basati su immagini in documenti con testo ricercabile e selezionabile.</p>\n      <p>Il supporto multilingue garantisce un riconoscimento accurato indipendentemente dalla lingua del documento. Il layout originale viene preservato aggiungendo un livello di testo ricercabile.</p>\n      <p>Tutto l’elaborato OCR avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica PDF scansionato",
        "description": "Trascina e rilascia il PDF scansionato oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Seleziona lingua",
        "description": "Scegli la lingua del documento per un riconoscimento accurato."
      },
      {
        "step": 3,
        "title": "Elabora e scarica",
        "description": "Clicca Elabora per eseguire l’OCR e scaricare il PDF ricercabile."
      }
    ],
    "useCases": [
      {
        "title": "Digitalizza archivi",
        "description": "Rendi ricercabili archivi di documenti scansionati.",
        "icon": "archive"
      },
      {
        "title": "Ricerca nei documenti",
        "description": "Abilita la ricerca testuale nei documenti scansionati.",
        "icon": "search"
      },
      {
        "title": "Estrazione del testo",
        "description": "Estrai testo da documenti scansionati per la modifica.",
        "icon": "type"
      }
    ],
    "faq": [
      {
        "question": "Quali lingue sono supportate?",
        "answer": "Sono supportate oltre 100 lingue, tra cui inglese, cinese, giapponese, coreano e molte altre."
      },
      {
        "question": "Il layout originale viene preservato?",
        "answer": "Sì, il layout visivo originale è preservato aggiungendo un livello di testo ricercabile."
      },
      {
        "question": "Quanto è accurato l’OCR?",
        "answer": "L’accuratezza dipende dalla qualità della scansione, ma di solito supera il 95% per documenti nitidi."
      }
    ]
  },
  "alternate-merge": {
    "title": "Unione alternata",
    "metaDescription": "Unisci PDF alternando le pagine. Combina scansioni fronte/retro in un unico documento.",
    "keywords": [
      "unione alternata",
      "intercalare pagine pdf",
      "combina scansioni",
      "unisci fronte-retro"
    ],
    "description": "\n      <p>L’Unione alternata combina due PDF intercalando le loro pagine in modo alternato. Perfetta per unire in un unico documento le pagine fronte e retro scansionate separatamente.</p>\n      <p>Carica due PDF e lo strumento li unirà prendendo a turno una pagina da ciascuno. Puoi anche invertire l’ordine di uno dei documenti per scansioni retro→fronte.</p>\n      <p>Tutto l’elaborato avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica due PDF",
        "description": "Carica il PDF delle pagine fronte e quello delle pagine retro."
      },
      {
        "step": 2,
        "title": "Configura l’ordine",
        "description": "Scegli se invertire il secondo documento per scansioni retro→fronte."
      },
      {
        "step": 3,
        "title": "Unisci e scarica",
        "description": "Clicca Unisci per intercalare le pagine e scaricare."
      }
    ],
    "useCases": [
      {
        "title": "Scansione duplex",
        "description": "Combina pagine fronte e retro scansionate separatamente.",
        "icon": "copy"
      },
      {
        "title": "Assemblaggio documenti",
        "description": "Intercala pagine da due documenti correlati.",
        "icon": "layers"
      },
      {
        "title": "Scansione libri",
        "description": "Combina scansioni di pagine pari e dispari in libri completi.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "E se i documenti hanno pagine diverse?",
        "answer": "Le pagine extra del documento più lungo vengono aggiunte alla fine."
      },
      {
        "question": "Posso invertire l’ordine delle pagine?",
        "answer": "Sì, puoi invertire uno dei due documenti prima dell’unione."
      },
      {
        "question": "È diverso dalla fusione normale?",
        "answer": "Sì, la fusione normale accoda i documenti; l’unione alternata interseca le pagine."
      }
    ]
  },
  "add-attachments": {
    "title": "Aggiungi allegati",
    "metaDescription": "Incorpora file nei documenti PDF. Allega qualsiasi tipo di file ai tuoi PDF.",
    "keywords": [
      "allegati pdf",
      "incorpora file",
      "allega a pdf",
      "portfolio pdf"
    ],
    "description": "\n      <p>Aggiungi allegati incorpora file di qualsiasi tipo nei tuoi documenti PDF. Allega fogli di calcolo, immagini, file sorgente o altri documenti per creare pacchetti PDF completi.</p>\n      <p>Gli allegati sono incorporati nel PDF e possono essere estratti dai destinatari con qualsiasi lettore PDF. Perfetto per distribuire file correlati insieme.</p>\n      <p>Tutto avviene nel tuo browser, garantendo che i tuoi file restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Aggiungi allegati",
        "description": "Seleziona i file da allegare al PDF."
      },
      {
        "step": 3,
        "title": "Salva e scarica",
        "description": "Clicca Salva per incorporare gli allegati e scaricare."
      }
    ],
    "useCases": [
      {
        "title": "Pacchetti di progetto",
        "description": "Raggruppa file di progetto con PDF di documentazione.",
        "icon": "package"
      },
      {
        "title": "Distribuzione report",
        "description": "Allega file di dati sorgente ai PDF dei report.",
        "icon": "paperclip"
      },
      {
        "title": "Bundle di contratti",
        "description": "Includi documenti di supporto con i contratti.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "Quali tipi di file posso allegare?",
        "answer": "Qualsiasi tipo di file può essere allegato a un PDF."
      },
      {
        "question": "Esiste un limite di dimensione?",
        "answer": "La dimensione totale del PDF, inclusi gli allegati, non dovrebbe superare i 500 MB."
      },
      {
        "question": "I destinatari possono estrarre gli allegati?",
        "answer": "Sì, qualsiasi lettore PDF può estrarre gli allegati incorporati."
      }
    ]
  },
  "extract-attachments": {
    "title": "Estrai allegati",
    "metaDescription": "Estrai i file incorporati dai PDF. Scarica tutti gli allegati dai documenti PDF.",
    "keywords": [
      "estrai allegati",
      "allegati pdf",
      "scarica file incorporati",
      "estrazione pdf"
    ],
    "description": "\n      <p>Estrai allegati recupera tutti i file incorporati nei documenti PDF. Scarica gli allegati singolarmente o come archivio ZIP contenente tutti i file.</p>\n      <p>Perfetto per accedere a file sorgente, dati o materiali supplementari incorporati nei pacchetti PDF.</p>\n      <p>Tutta l’estrazione avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Visualizza allegati",
        "description": "Vedi l’elenco di tutti i file incorporati nel PDF."
      },
      {
        "step": 3,
        "title": "Estrai e scarica",
        "description": "Scarica i file singolarmente o tutti insieme come ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Accedi ai file sorgente",
        "description": "Estrai i file di dati originali dai report PDF.",
        "icon": "download"
      },
      {
        "title": "Recupera allegati",
        "description": "Recupera i file incorporati dai pacchetti PDF.",
        "icon": "folder-open"
      },
      {
        "title": "Estrazione in batch",
        "description": "Estrai allegati da più PDF contemporaneamente.",
        "icon": "layers"
      }
    ],
    "faq": [
      {
        "question": "E se non ci sono allegati?",
        "answer": "Lo strumento indicherà se non vengono trovati file incorporati."
      },
      {
        "question": "Sono supportati tutti i tipi di allegati?",
        "answer": "Sì, tutti i tipi di file incorporati possono essere estratti."
      },
      {
        "question": "Posso estrarre da più PDF?",
        "answer": "Sì, puoi elaborare più PDF e scaricare tutti gli allegati."
      }
    ]
  },
  "extract-images": {
    "title": "Estrai immagini dal PDF",
    "metaDescription": "Estrai tutte le immagini incorporate dai PDF. Scarica singolarmente o come archivio ZIP. Filtra automaticamente le immagini troppo piccole.",
    "keywords": [
      "estrai immagini pdf",
      "estrazione immagini pdf",
      "recupera immagini da pdf",
      "scarica immagini pdf",
      "pdf in immagini"
    ],
    "description": "\n      <p>Estrai immagini dal PDF recupera tutte le immagini incorporate nei tuoi documenti PDF. Scarica immagini di alta qualità singolarmente o come comodo archivio ZIP.</p>\n      <p>Lo strumento filtra automaticamente immagini piccole come icone e decorazioni in base a soglie di dimensione personalizzabili. Elabora più PDF contemporaneamente per un’estrazione efficiente in batch.</p>\n      <p>Tutta l’estrazione avviene nel tuo browser, garantendo che i documenti restino privati e sicuri.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica i PDF",
        "description": "Trascina e rilascia uno o più file PDF oppure clicca per selezionarli dal dispositivo."
      },
      {
        "step": 2,
        "title": "Imposta i filtri",
        "description": "Regola larghezza, altezza e dimensione minima per filtrare le immagini indesiderate."
      },
      {
        "step": 3,
        "title": "Estrai immagini",
        "description": "Clicca Estrai per trovare tutte le immagini incorporate nei PDF."
      },
      {
        "step": 4,
        "title": "Scarica",
        "description": "Scarica immagini singole o tutte le immagini come archivio ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Recupero foto",
        "description": "Estrai foto e immagini incorporate nei PDF per riutilizzo o archivio.",
        "icon": "image"
      },
      {
        "title": "Raccolta asset",
        "description": "Raccogli tutte le grafiche e immagini da report, presentazioni o brochure in PDF.",
        "icon": "folder"
      },
      {
        "title": "Riutilizzo contenuti",
        "description": "Estrai immagini dai PDF per usarle in altri documenti, siti web o presentazioni.",
        "icon": "refresh-cw"
      }
    ],
    "faq": [
      {
        "question": "Quali formati di immagine vengono estratti?",
        "answer": "Le immagini vengono estratte nel loro formato nativo (JPEG, PNG, ecc.) quando possibile, oppure convertite in PNG per dati immagine grezzi."
      },
      {
        "question": "Perché alcune immagini mancano?",
        "answer": "Le immagini troppo piccole sotto la soglia impostata vengono filtrate. Regola i filtri per estrarre immagini più piccole."
      },
      {
        "question": "Posso estrarre da PDF scansionati?",
        "answer": "I PDF scansionati di solito contengono una grande immagine per pagina. Usa invece lo strumento PDF in Immagini per la conversione pagina per pagina."
      }
    ]
  },
  "edit-attachments": {
    "title": "Modifica allegati",
    "metaDescription": "Gestisci gli allegati nei PDF. Visualizza, rinomina e rimuovi i file incorporati.",
    "keywords": [
      "modifica allegati",
      "gestisci file pdf",
      "rimuovi allegati",
      "rinomina allegati"
    ],
    "description": "\n      <p>Modifica allegati ti consente di gestire i file incorporati nei documenti PDF. Visualizza tutti gli allegati, rinominali oppure rimuovi i file indesiderati dal PDF.</p>\n      <p>Perfetto per ripulire i pacchetti PDF o aggiornare le informazioni degli allegati prima della distribuzione.</p>\n      <p>Tutte le modifiche avvengono nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Gestisci allegati",
        "description": "Visualizza, rinomina o elimina i file incorporati."
      },
      {
        "step": 3,
        "title": "Salva e scarica",
        "description": "Clicca Salva per applicare le modifiche e scaricare."
      }
    ],
    "useCases": [
      {
        "title": "Ripulisci i PDF",
        "description": "Rimuovi allegati non necessari dai pacchetti PDF.",
        "icon": "trash-2"
      },
      {
        "title": "Rinomina file",
        "description": "Aggiorna i nomi degli allegati per maggiore chiarezza.",
        "icon": "edit"
      },
      {
        "title": "Revisiona contenuti",
        "description": "Verifica i file incorporati prima della distribuzione.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "Posso aggiungere nuovi allegati qui?",
        "answer": "Usa lo strumento Aggiungi allegati per incorporare nuovi file."
      },
      {
        "question": "La rimozione è permanente?",
        "answer": "Sì, gli allegati rimossi non possono essere recuperati dal file di output."
      },
      {
        "question": "Posso visualizzare un’anteprima degli allegati?",
        "answer": "Puoi vedere nomi e dimensioni; usa Estrai allegati per visualizzare i contenuti."
      }
    ]
  },
  "divide-pages": {
    "title": "Dividi pagine",
    "metaDescription": "Dividi le pagine PDF in più sezioni. Suddivisione orizzontale, verticale o a griglia.",
    "keywords": [
      "dividi pagine pdf",
      "suddividi pagina",
      "taglia pagina pdf",
      "sezioni pagina"
    ],
    "description": "\n      <p>Dividi pagine suddivide le singole pagine PDF in più sezioni. Taglia le pagine in orizzontale, verticale o in una griglia per creare più pagine da una sola.</p>\n      <p>Perfetto per dividere documenti scansionati con più elementi per pagina o per separare pagine in grande formato in dimensioni standard.</p>\n      <p>Tutto l’elaborato avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Imposta la suddivisione",
        "description": "Scegli suddivisione orizzontale, verticale o a griglia e imposta il numero di sezioni."
      },
      {
        "step": 3,
        "title": "Dividi e scarica",
        "description": "Clicca Dividi per separare le pagine e scaricare."
      }
    ],
    "useCases": [
      {
        "title": "Dividere scansioni",
        "description": "Separa pagine scansionate che contengono più documenti.",
        "icon": "scissors"
      },
      {
        "title": "Ridimensionare pagine",
        "description": "Dividi pagine grandi in formati carta standard.",
        "icon": "maximize-2"
      },
      {
        "title": "Creare schede",
        "description": "Dividi pagine in sezioni formato tessera per la stampa.",
        "icon": "grid"
      }
    ],
    "faq": [
      {
        "question": "Posso dividere in sezioni disuguali?",
        "answer": "Attualmente le suddivisioni sono uguali. Usa lo strumento Ritaglia PDF per sezioni personalizzate."
      },
      {
        "question": "Cosa succede al contenuto sulle linee di divisione?",
        "answer": "Il contenuto viene tagliato sulla linea di divisione; assicurati che elementi importanti non cadano sui bordi."
      },
      {
        "question": "Posso dividere solo alcune pagine?",
        "answer": "Sì, puoi selezionare quali pagine dividere."
      }
    ]
  },
  "add-blank-page": {
    "title": "Aggiungi pagina vuota",
    "metaDescription": "Inserisci pagine vuote nei PDF. Aggiungi pagine vuote in qualsiasi posizione.",
    "keywords": [
      "aggiungi pagina vuota",
      "inserisci pagina",
      "pagina vuota",
      "inserimento pagine pdf"
    ],
    "description": "\n      <p>Aggiungi pagina vuota inserisce pagine vuote nei tuoi PDF in qualsiasi posizione. Aggiungi pagine prima, dopo o tra quelle esistenti con dimensione personalizzabile.</p>\n      <p>Perfetto per aggiungere spazio per note, creare divisori di sezione o preparare i documenti per la stampa.</p>\n      <p>Tutto l’elaborato avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Scegli la posizione",
        "description": "Seleziona dove inserire le pagine vuote e quante aggiungerne."
      },
      {
        "step": 3,
        "title": "Aggiungi e scarica",
        "description": "Clicca Aggiungi per inserire le pagine e scaricare."
      }
    ],
    "useCases": [
      {
        "title": "Spazio per note",
        "description": "Aggiungi pagine vuote per appunti a mano.",
        "icon": "edit-3"
      },
      {
        "title": "Divisori di sezione",
        "description": "Inserisci pagine vuote tra le sezioni del documento.",
        "icon": "minus"
      },
      {
        "title": "Preparazione stampa",
        "description": "Aggiungi pagine per l’allineamento nella stampa fronte/retro.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Posso scegliere la dimensione della pagina?",
        "answer": "Sì, le pagine vuote possono corrispondere a quelle esistenti o usare dimensioni personalizzate."
      },
      {
        "question": "Posso aggiungere più pagine vuote?",
        "answer": "Sì, puoi aggiungere qualsiasi numero di pagine vuote in una volta."
      },
      {
        "question": "Posso aggiungere pagine colorate?",
        "answer": "Usa lo strumento Colore di sfondo dopo l’inserimento per aggiungere colore."
      }
    ]
  },
  "reverse-pages": {
    "title": "Inverti pagine",
    "metaDescription": "Inverti l’ordine delle pagine PDF. Capovolgi le pagine dalla fine all’inizio.",
    "keywords": [
      "inverti pdf",
      "inverti ordine pagine",
      "capovolgi pagine",
      "inverti documento"
    ],
    "description": "\n      <p>Inverti pagine capovolge l’ordine delle pagine nel tuo PDF, mettendo l’ultima per prima e la prima per ultima. Utile per documenti scansionati al contrario o per esigenze di stampa specifiche.</p>\n      <p>Lo strumento elabora l’intero documento o intervalli di pagine selezionati, mantenendo intatti contenuti e formattazione.</p>\n      <p>Tutto l’elaborato avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Seleziona le pagine",
        "description": "Scegli se invertire tutte le pagine o un intervallo."
      },
      {
        "step": 3,
        "title": "Inverti e scarica",
        "description": "Clicca Inverti per capovolgere l’ordine e scaricare."
      }
    ],
    "useCases": [
      {
        "title": "Correggi l’ordine di scansione",
        "description": "Sistema documenti scansionati in ordine inverso.",
        "icon": "refresh-cw"
      },
      {
        "title": "Preparazione stampa",
        "description": "Inverti le pagine per requisiti di stampa specifici.",
        "icon": "printer"
      },
      {
        "title": "Riordino documenti",
        "description": "Capovolgi rapidamente l’ordine per la revisione.",
        "icon": "arrow-up-down"
      }
    ],
    "faq": [
      {
        "question": "I segnalibri vengono aggiornati?",
        "answer": "Sì, i segnalibri vengono aggiornati per puntare alle pagine invertite corrette."
      },
      {
        "question": "Posso invertire solo alcune pagine?",
        "answer": "Sì, puoi selezionare un intervallo di pagine da invertire."
      },
      {
        "question": "È la stessa cosa della rotazione?",
        "answer": "No, invertire cambia l’ordine delle pagine; ruotare cambia l’orientamento."
      }
    ]
  },
  "rotate-pdf": {
    "title": "Ruota PDF",
    "metaDescription": "Ruota le pagine PDF di 90, 180 o 270 gradi.",
    "keywords": [
      "ruota pdf",
      "ruota pagine pdf",
      "rotazione pdf",
      "correggi orientamento"
    ],
    "description": "\n      <p>Ruota PDF gira le pagine del documento di 90, 180 o 270 gradi. Correggi scansioni con orientamento errato, ruota pagine orizzontali o regola l’orientamento per la visualizzazione.</p>\n      <p>Ruota tutte le pagine in modo uniforme oppure seleziona pagine specifiche da ruotare singolarmente. Lo strumento preserva contenuti e formattazione.</p>\n      <p>Tutto l’elaborato avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Seleziona la rotazione",
        "description": "Scegli l’angolo di rotazione e le pagine da ruotare."
      },
      {
        "step": 3,
        "title": "Ruota e scarica",
        "description": "Clicca Ruota per applicare le modifiche e scaricare."
      }
    ],
    "useCases": [
      {
        "title": "Correggi scansioni",
        "description": "Correggi l’orientamento dei documenti scansionati.",
        "icon": "rotate-cw"
      },
      {
        "title": "Pagine orizzontali",
        "description": "Ruota le pagine in orizzontale per una corretta visualizzazione.",
        "icon": "monitor"
      },
      {
        "title": "Orientamento misto",
        "description": "Uniforma l’orientamento in documenti con pagine miste.",
        "icon": "layout"
      }
    ],
    "faq": [
      {
        "question": "Posso ruotare pagine diverse in modo diverso?",
        "answer": "Sì, puoi applicare rotazioni differenti a pagine differenti."
      },
      {
        "question": "La rotazione influisce sulla qualità di stampa?",
        "answer": "No, la rotazione preserva la qualità dei contenuti."
      },
      {
        "question": "Posso ruotare di angoli personalizzati?",
        "answer": "La rotazione è limitata a incrementi di 90° (90, 180, 270)."
      }
    ]
  },
  "n-up-pdf": {
    "title": "N-up PDF",
    "metaDescription": "Stampa più pagine PDF per foglio. Crea layout 2-up, 4-up o personalizzati.",
    "keywords": [
      "n-up pdf",
      "più pagine per foglio",
      "stampa 2-up",
      "imposizione pagine"
    ],
    "description": "\n      <p>N-up PDF dispone più pagine su un unico foglio, creando layout 2-up, 4-up, 6-up, 9-up o personalizzati. Perfetto per risparmiare carta in stampa o creare dispense.</p>\n      <p>Scegli tra layout predefiniti o crea disposizioni personalizzate. Lo strumento ridimensiona e posiziona automaticamente le pagine per risultati ottimali.</p>\n      <p>Tutto l’elaborato avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Scegli il layout",
        "description": "Seleziona 2-up, 4-up, 6-up, 9-up o griglia personalizzata."
      },
      {
        "step": 3,
        "title": "Crea e scarica",
        "description": "Clicca Crea per generare il PDF n-up e scaricare."
      }
    ],
    "useCases": [
      {
        "title": "Risparmio carta",
        "description": "Stampa più pagine per foglio per ridurre l’uso di carta.",
        "icon": "leaf"
      },
      {
        "title": "Crea dispense",
        "description": "Crea dispense compatte da slide di presentazioni.",
        "icon": "file-text"
      },
      {
        "title": "Revisioni",
        "description": "Stampa documenti ridotti per la revisione.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "Quali layout sono disponibili?",
        "answer": "2-up, 4-up, 6-up, 9-up e griglie personalizzate."
      },
      {
        "question": "Posso aggiungere bordi tra le pagine?",
        "answer": "Sì, puoi aggiungere bordi e spazi (gutter) tra le pagine."
      },
      {
        "question": "L’ordine delle pagine è preservato?",
        "answer": "Sì, le pagine sono disposte in ordine di lettura (da sinistra a destra, dall’alto in basso)."
      }
    ]
  },
  "combine-single-page": {
    "title": "Combina in pagina singola",
    "metaDescription": "Cuci le pagine PDF in un’unica pagina continua. Crea documenti scorrevoli su una sola pagina.",
    "keywords": [
      "combina pagine",
      "pdf pagina singola",
      "unisci pagine",
      "scorrimento continuo"
    ],
    "description": "\n      <p>Combina in pagina singola unisce tutte le pagine del PDF in un’unica pagina continua. Ideale per documenti scorrevoli perfetti per la visualizzazione web o la lettura continua.</p>\n      <p>Le pagine sono unite verticalmente con spaziatura personalizzabile. Il risultato è una singola pagina lunga contenente tutto il contenuto.</p>\n      <p>Tutto l’elaborato avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Imposta spaziatura",
        "description": "Scegli lo spazio tra le pagine unite."
      },
      {
        "step": 3,
        "title": "Combina e scarica",
        "description": "Clicca Combina per creare il PDF a pagina singola."
      }
    ],
    "useCases": [
      {
        "title": "Documenti web",
        "description": "Crea PDF scorrevoli da incorporare sul web.",
        "icon": "globe"
      },
      {
        "title": "Lettura continua",
        "description": "Converti documenti impaginati in scorrimento continuo.",
        "icon": "scroll"
      },
      {
        "title": "Contenuti lunghi",
        "description": "Combina pagine per lettura lunga senza interruzioni.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "Esiste un limite di pagine?",
        "answer": "Documenti molto lunghi possono essere limitati dalla memoria del browser."
      },
      {
        "question": "Posso aggiungere separatori tra le pagine?",
        "answer": "Sì, puoi aggiungere spazi o linee tra le pagine originali."
      },
      {
        "question": "Funziona per la stampa?",
        "answer": "Il risultato è ideale per lo schermo; per la stampa usa N-up per i layout."
      }
    ]
  },
  "view-metadata": {
    "title": "Visualizza metadati",
    "metaDescription": "Visualizza le proprietà dei PDF. Vedi autore, titolo, date e altri metadati.",
    "keywords": [
      "metadati pdf",
      "proprietà documento",
      "info pdf",
      "dettagli pdf"
    ],
    "description": "\n      <p>Visualizza metadati mostra tutte le proprietà e i metadati dei tuoi file PDF. Vedi autore, titolo, oggetto, parole chiave, data di creazione, data di modifica e altro.</p>\n      <p>Utile per audit dei documenti, verifica delle informazioni del file o controllo dell’autenticità.</p>\n      <p>Tutta la visualizzazione avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Visualizza proprietà",
        "description": "Consulta tutti i metadati mostrati in formato organizzato."
      },
      {
        "step": 3,
        "title": "Esporta se necessario",
        "description": "Esporta opzionalmente i metadati in JSON."
      }
    ],
    "useCases": [
      {
        "title": "Audit documenti",
        "description": "Revisiona le proprietà per conformità.",
        "icon": "clipboard-check"
      },
      {
        "title": "Verifica autenticità",
        "description": "Controlla date di creazione e informazioni sull’autore.",
        "icon": "shield"
      },
      {
        "title": "Informazioni file",
        "description": "Ottieni informazioni dettagliate sui PDF.",
        "icon": "info"
      }
    ],
    "faq": [
      {
        "question": "Quali metadati vengono mostrati?",
        "answer": "Titolo, autore, oggetto, parole chiave, creatore, produttore, date e versione PDF."
      },
      {
        "question": "Posso modificare i metadati qui?",
        "answer": "Usa lo strumento Modifica metadati per modificare le proprietà."
      },
      {
        "question": "I metadati XMP sono inclusi?",
        "answer": "Sì, vengono mostrati sia i metadati standard che quelli XMP."
      }
    ]
  },
  "edit-metadata": {
    "title": "Modifica metadati",
    "metaDescription": "Modifica le proprietà dei PDF. Cambia titolo, autore, oggetto e parole chiave.",
    "keywords": [
      "modifica metadati pdf",
      "cambia proprietà pdf",
      "autore pdf",
      "info documento"
    ],
    "description": "\n      <p>Modifica metadati ti consente di aggiornare le proprietà del documento nei tuoi PDF. Cambia titolo, autore, oggetto, parole chiave e altri campi di metadati.</p>\n      <p>Perfetto per correggere informazioni, aggiungere attribuzioni corrette o preparare i file alla distribuzione.</p>\n      <p>Tutte le modifiche avvengono nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Modifica proprietà",
        "description": "Aggiorna titolo, autore, oggetto, parole chiave e altri campi."
      },
      {
        "step": 3,
        "title": "Salva e scarica",
        "description": "Clicca Salva per applicare le modifiche e scaricare."
      }
    ],
    "useCases": [
      {
        "title": "Aggiungi attribuzione",
        "description": "Imposta correttamente autore e creatore.",
        "icon": "user"
      },
      {
        "title": "Ottimizzazione SEO",
        "description": "Aggiungi parole chiave e descrizioni per la ricercabilità.",
        "icon": "search"
      },
      {
        "title": "Preparazione documenti",
        "description": "Prepara documenti con metadati corretti prima della condivisione.",
        "icon": "file-check"
      }
    ],
    "faq": [
      {
        "question": "Quali campi posso modificare?",
        "answer": "Titolo, autore, oggetto, parole chiave, creatore e produttore."
      },
      {
        "question": "Posso rimuovere tutti i metadati?",
        "answer": "Usa lo strumento Rimuovi metadati per eliminare tutte le proprietà."
      },
      {
        "question": "Le date sono modificabili?",
        "answer": "Le date di creazione e modifica vengono aggiornate automaticamente."
      }
    ]
  },
  "pdf-to-zip": {
    "title": "PDF in ZIP",
    "metaDescription": "Raggruppa più PDF in un archivio ZIP. Comprimi e combina i file PDF.",
    "keywords": [
      "pdf in zip",
      "comprimere pdf",
      "raggruppa pdf",
      "archiviare pdf"
    ],
    "description": "\n      <p>PDF in ZIP raggruppa più file PDF in un unico archivio ZIP. Comprimi e combina i tuoi PDF per condivisione, archiviazione o backup più semplici.</p>\n      <p>Lo strumento crea un archivio compresso con tutti i file PDF, riducendo la dimensione totale e semplificando la gestione dei file.</p>\n      <p>Tutto avviene nel tuo browser, garantendo che i tuoi file restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica i PDF",
        "description": "Trascina e rilascia più file PDF oppure clicca per selezionarli."
      },
      {
        "step": 2,
        "title": "Configura archivio",
        "description": "Imposta facoltativamente nome dell’archivio e livello di compressione."
      },
      {
        "step": 3,
        "title": "Crea e scarica",
        "description": "Clicca Crea per generare l’archivio ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Condivisione file",
        "description": "Raggruppa più PDF per condividerli più facilmente.",
        "icon": "share-2"
      },
      {
        "title": "Creazione backup",
        "description": "Crea backup compressi di raccolte PDF.",
        "icon": "archive"
      },
      {
        "title": "Allegati email",
        "description": "Combina PDF in un unico allegato per l’email.",
        "icon": "mail"
      }
    ],
    "faq": [
      {
        "question": "Quanta compressione viene applicata?",
        "answer": "La compressione ZIP in genere riduce la dimensione totale del 10-30%."
      },
      {
        "question": "Esiste un limite di file?",
        "answer": "Puoi includere fino a 100 PDF in un singolo archivio."
      },
      {
        "question": "Posso impostare una password?",
        "answer": "La creazione di ZIP protetti da password non è attualmente supportata."
      }
    ]
  },
  "compare-pdfs": {
    "title": "Confronta PDF",
    "metaDescription": "Confronta due documenti PDF. Evidenzia le differenze tra versioni.",
    "keywords": [
      "confronta pdf",
      "diff pdf",
      "confronto documenti",
      "confronto versioni"
    ],
    "description": "\n      <p>Confronta PDF analizza due documenti PDF ed evidenzia le differenze tra di essi. Perfetto per rivedere revisioni, controllare modifiche ai contratti o verificare gli interventi.</p>\n      <p>Visualizza i documenti affiancati o in modalità sovrapposizione con differenze evidenziate. Lo strumento identifica modifiche al testo, aggiunte e cancellazioni.</p>\n      <p>Tutto il confronto avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica due PDF",
        "description": "Carica i documenti PDF originale e modificato."
      },
      {
        "step": 2,
        "title": "Confronta documenti",
        "description": "Visualizza le differenze evidenziate affiancate o in sovrapposizione."
      },
      {
        "step": 3,
        "title": "Esporta risultati",
        "description": "Scarica un report di confronto o un PDF annotato."
      }
    ],
    "useCases": [
      {
        "title": "Revisione contratti",
        "description": "Confronta versioni dei contratti per identificare cambiamenti.",
        "icon": "file-text"
      },
      {
        "title": "Revisioni documento",
        "description": "Controlla le modifiche tra versioni del documento.",
        "icon": "git-compare"
      },
      {
        "title": "Quality assurance",
        "description": "Verifica che siano stati applicati solo i cambiamenti previsti.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "Quali differenze vengono rilevate?",
        "answer": "Aggiunte di testo, cancellazioni, modifiche e cambiamenti di formattazione."
      },
      {
        "question": "Posso confrontare documenti scansionati?",
        "answer": "Per il confronto testuale, esegui prima l’OCR dei documenti scansionati."
      },
      {
        "question": "È disponibile il confronto visivo?",
        "answer": "Sì, la modalità sovrapposizione mostra le differenze visive tra pagine."
      }
    ]
  },
  "posterize-pdf": {
    "title": "Posterizza PDF",
    "metaDescription": "Dividi grandi pagine PDF in riquadri stampabili. Crea poster da pagine PDF.",
    "keywords": [
      "posterizza pdf",
      "suddividi pdf in riquadri",
      "stampa grande formato",
      "poster pdf"
    ],
    "description": "\n      <p>Posterizza PDF divide grandi pagine PDF in riquadri più piccoli stampabili su carta standard e assemblabili in poster. Perfetto per stampare diagrammi, mappe o illustrazioni di grande formato.</p>\n      <p>Configura dimensione della griglia e sovrapposizione per un facile assemblaggio. Lo strumento calcola automaticamente le dimensioni dei riquadri per l’output desiderato.</p>\n      <p>Tutto l’elaborato avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il PDF in grande formato oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Configura riquadri",
        "description": "Imposta dimensione griglia, sovrapposizione e formato carta di output."
      },
      {
        "step": 3,
        "title": "Crea e scarica",
        "description": "Clicca Crea per generare i riquadri stampabili."
      }
    ],
    "useCases": [
      {
        "title": "Stampa poster",
        "description": "Stampa grandi poster su carta standard.",
        "icon": "maximize-2"
      },
      {
        "title": "Stampa mappe",
        "description": "Stampa grandi mappe in sezioni da assemblare.",
        "icon": "map"
      },
      {
        "title": "Riproduzione artwork",
        "description": "Crea stampe di grande formato da illustrazioni PDF.",
        "icon": "image"
      }
    ],
    "faq": [
      {
        "question": "Quanta sovrapposizione usare?",
        "answer": "È consigliata una sovrapposizione di 10–20 mm per un facile allineamento in fase di assemblaggio."
      },
      {
        "question": "Posso aggiungere crocini di taglio?",
        "answer": "Sì, è possibile aggiungere crocini per facilitare taglio e allineamento."
      },
      {
        "question": "Quali formati di carta sono supportati?",
        "answer": "Sono supportati A4, Letter, A3 e formati personalizzati."
      }
    ]
  },
  "fix-page-size": {
    "title": "Uniforma dimensione pagina",
    "metaDescription": "Standardizza le dimensioni delle pagine PDF. Converte tutte le pagine a misure uniformi.",
    "keywords": [
      "uniforma dimensione pagina",
      "standardizza pdf",
      "pagine uniformi",
      "ridimensiona pagine pdf"
    ],
    "description": "\n      <p>Uniforma dimensione pagina rende tutte le pagine del tuo PDF di dimensioni uniformi. Converte documenti con pagine di misure diverse in formati coerenti per una presentazione o stampa professionale.</p>\n      <p>Scegli tra formati standard (A4, Letter, ecc.) oppure imposta dimensioni personalizzate. Il contenuto viene ridimensionato o posizionato per adattarsi alla nuova pagina.</p>\n      <p>Tutto l’elaborato avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Seleziona dimensione target",
        "description": "Scegli un formato standard o inserisci dimensioni personalizzate."
      },
      {
        "step": 3,
        "title": "Applica e scarica",
        "description": "Clicca Applica per uniformare le pagine e scaricare."
      }
    ],
    "useCases": [
      {
        "title": "Preparazione stampa",
        "description": "Standardizza le pagine per una stampa coerente.",
        "icon": "printer"
      },
      {
        "title": "Pulizia documenti",
        "description": "Correggi documenti con dimensioni di pagina incoerenti.",
        "icon": "file-check"
      },
      {
        "title": "Documenti professionali",
        "description": "Crea documenti uniformi per la distribuzione.",
        "icon": "briefcase"
      }
    ],
    "faq": [
      {
        "question": "Come viene gestito il contenuto?",
        "answer": "Il contenuto viene ridimensionato per adattarsi o centrato sulla nuova pagina."
      },
      {
        "question": "Posso preservare le proporzioni?",
        "answer": "Sì, il contenuto può essere scalato proporzionalmente per adattarsi."
      },
      {
        "question": "Quali formati standard sono disponibili?",
        "answer": "A4, A3, Letter, Legal e altri formati comuni."
      }
    ]
  },
  "linearize-pdf": {
    "title": "Linearizza PDF",
    "metaDescription": "Ottimizza i PDF per la visualizzazione web veloce. Abilita il caricamento progressivo.",
    "keywords": [
      "linearizza pdf",
      "visualizzazione web veloce",
      "ottimizza pdf",
      "pdf progressivo"
    ],
    "description": "\n      <p>Linearizza PDF ottimizza i documenti per una visualizzazione rapida sul web. I PDF linearizzati possono iniziare a essere mostrati prima che l’intero file sia scaricato, migliorando l’esperienza utente.</p>\n      <p>Conosciuta anche come \"Visualizzazione web veloce\", questa ottimizzazione riorganizza la struttura del PDF per il caricamento progressivo nei browser.</p>\n      <p>Tutto l’elaborato avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Linearizza",
        "description": "Clicca Linearizza per ottimizzare la visualizzazione web."
      },
      {
        "step": 3,
        "title": "Scarica",
        "description": "Scarica il PDF ottimizzato."
      }
    ],
    "useCases": [
      {
        "title": "Pubblicazione web",
        "description": "Ottimizza i PDF per il download sui siti web.",
        "icon": "globe"
      },
      {
        "title": "Allegati email",
        "description": "Crea PDF che si aprono più velocemente per i destinatari.",
        "icon": "mail"
      },
      {
        "title": "Documenti online",
        "description": "Migliora l’esperienza di visualizzazione dei documenti online.",
        "icon": "cloud"
      }
    ],
    "faq": [
      {
        "question": "Cos’è la linearizzazione?",
        "answer": "La linearizzazione riorganizza i dati del PDF per il caricamento progressivo."
      },
      {
        "question": "Riduce la dimensione del file?",
        "answer": "La linearizzazione può aumentare leggermente la dimensione a causa della struttura aggiunta."
      },
      {
        "question": "È compatibile con tutti i lettori?",
        "answer": "Sì, i PDF linearizzati funzionano in tutti i lettori PDF."
      }
    ]
  },
  "page-dimensions": {
    "title": "Dimensioni pagina",
    "metaDescription": "Analizza le dimensioni delle pagine PDF. Visualizza le misure di tutte le pagine del documento.",
    "keywords": [
      "dimensione pagina pdf",
      "dimensioni pagine",
      "misure pdf",
      "dimensione documento"
    ],
    "description": "\n      <p>Dimensioni pagina analizza e mostra la misura di ogni pagina del tuo PDF. Visualizza le dimensioni in varie unità (pollici, mm, punti) e identifica pagine con formati non standard.</p>\n      <p>Utile per preparazione alla stampa, analisi del documento o per individuare incoerenze nelle dimensioni delle pagine.</p>\n      <p>Tutta l’analisi avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Visualizza dimensioni",
        "description": "Consulta le dimensioni mostrate per tutte le pagine."
      },
      {
        "step": 3,
        "title": "Esporta report",
        "description": "Esporta facoltativamente le dimensioni in JSON."
      }
    ],
    "useCases": [
      {
        "title": "Pianificazione stampa",
        "description": "Controlla le dimensioni pagina prima della stampa.",
        "icon": "printer"
      },
      {
        "title": "Analisi documenti",
        "description": "Individua pagine con dimensioni insolite.",
        "icon": "search"
      },
      {
        "title": "Controllo qualità",
        "description": "Verifica che le dimensioni soddisfino le specifiche.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "Quali unità sono disponibili?",
        "answer": "Pollici, millimetri, centimetri e punti."
      },
      {
        "question": "Mostra anche l’orientamento?",
        "answer": "Sì, viene indicato se la pagina è verticale o orizzontale."
      },
      {
        "question": "Posso correggere dimensioni incoerenti?",
        "answer": "Usa lo strumento Uniforma dimensione pagina per standardizzare le misure."
      }
    ]
  },
  "remove-restrictions": {
    "title": "Rimuovi restrizioni",
    "metaDescription": "Rimuovi le restrizioni dai PDF. Sblocca permessi di stampa, copia e modifica.",
    "keywords": [
      "rimuovi restrizioni pdf",
      "sblocca pdf",
      "permessi pdf",
      "rimuovi limitazioni"
    ],
    "description": "\n      <p>Rimuovi restrizioni sblocca i PDF che hanno limitazioni di permesso che impediscono stampa, copia o modifica. Questo strumento rimuove le restrizioni protette da password proprietario preservando i contenuti.</p>\n      <p>Nota: questo strumento non può rimuovere password utente che impediscono l’apertura del documento. Usa Decrypt PDF per i file protetti da password.</p>\n      <p>Tutto l’elaborato avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF con restrizioni",
        "description": "Trascina e rilascia il PDF con restrizioni oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Rimuovi restrizioni",
        "description": "Clicca Rimuovi per sbloccare il documento."
      },
      {
        "step": 3,
        "title": "Scarica",
        "description": "Scarica il PDF senza restrizioni."
      }
    ],
    "useCases": [
      {
        "title": "Abilita stampa",
        "description": "Sblocca PDF che impediscono la stampa.",
        "icon": "printer"
      },
      {
        "title": "Abilita copia",
        "description": "Consenti selezione e copia del testo.",
        "icon": "copy"
      },
      {
        "title": "Abilita modifica",
        "description": "Rimuovi le restrizioni sulla modifica del documento.",
        "icon": "edit"
      }
    ],
    "faq": [
      {
        "question": "È legale?",
        "answer": "La rimozione di restrizioni da documenti di tua proprietà o per i quali hai diritti è generalmente legale."
      },
      {
        "question": "Può rimuovere password di apertura?",
        "answer": "No, usa Decrypt PDF per i documenti protetti da password."
      },
      {
        "question": "Il contenuto viene alterato?",
        "answer": "No, vengono rimosse solo le restrizioni; i contenuti restano invariati."
      }
    ]
  },
  "repair-pdf": {
    "title": "Ripara PDF",
    "metaDescription": "Correggi file PDF danneggiati. Recupera e ripara documenti corrotti.",
    "keywords": [
      "ripara pdf",
      "correggi pdf",
      "recupera pdf",
      "pdf danneggiato"
    ],
    "description": "\n      <p>Ripara PDF tenta di correggere file PDF corrotti o danneggiati. Lo strumento analizza la struttura del documento e la ricostruisce per recuperare il maggior contenuto possibile.</p>\n      <p>Utile per recuperare file che non si aprono, mostrano errori o hanno contenuti mancanti a causa di corruzione.</p>\n      <p>Tutte le operazioni di riparazione avvengono nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica PDF danneggiato",
        "description": "Trascina e rilascia il PDF corrotto oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Ripara documento",
        "description": "Clicca Ripara per tentare il recupero."
      },
      {
        "step": 3,
        "title": "Scarica",
        "description": "Scarica il PDF riparato, se il recupero ha successo."
      }
    ],
    "useCases": [
      {
        "title": "Recupera file",
        "description": "Recupera PDF che non si aprono correttamente.",
        "icon": "refresh-cw"
      },
      {
        "title": "Correggi errori",
        "description": "Ripara file che mostrano messaggi di errore.",
        "icon": "wrench"
      },
      {
        "title": "Ripristina contenuti",
        "description": "Recupera contenuti da file parzialmente corrotti.",
        "icon": "file-check"
      }
    ],
    "faq": [
      {
        "question": "Tutti i PDF possono essere riparati?",
        "answer": "Il successo dipende dal tipo e dall’entità della corruzione."
      },
      {
        "question": "Tutto il contenuto verrà recuperato?",
        "answer": "Lo strumento recupera il più possibile; file gravemente danneggiati possono avere perdite."
      },
      {
        "question": "Devo conservare l’originale?",
        "answer": "Sì, conserva sempre il file originale come backup."
      }
    ]
  },
  "encrypt-pdf": {
    "title": "Crittografa PDF",
    "metaDescription": "Proteggi i PDF con password. Aggiungi crittografia e imposta i permessi.",
    "keywords": [
      "crittografa pdf",
      "proteggi pdf con password",
      "pdf sicuro",
      "crittografia pdf"
    ],
    "description": "\n      <p>Crittografa PDF aggiunge protezione con password e crittografia ai tuoi documenti PDF. Imposta la password utente per impedirne l’apertura e la password proprietario per controllare permessi come stampa e copia.</p>\n      <p>Scegli tra diversi livelli di crittografia (AES a 128 o 256 bit) in base alle tue esigenze di sicurezza.</p>\n      <p>Tutta la crittografia avviene nel tuo browser, garantendo che password e documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Imposta le password",
        "description": "Inserisci password utente e/o password proprietario. Configura i permessi."
      },
      {
        "step": 3,
        "title": "Crittografa e scarica",
        "description": "Clicca Crittografa per proteggere il PDF e scaricare."
      }
    ],
    "useCases": [
      {
        "title": "Documenti riservati",
        "description": "Proteggi documenti aziendali sensibili.",
        "icon": "lock"
      },
      {
        "title": "File personali",
        "description": "Metti al sicuro documenti personali come dichiarazioni dei redditi.",
        "icon": "shield"
      },
      {
        "title": "Distribuzione controllata",
        "description": "Limita ciò che i destinatari possono fare con i documenti.",
        "icon": "key"
      }
    ],
    "faq": [
      {
        "question": "Differenza tra password utente e proprietario?",
        "answer": "La password utente impedisce l’apertura; la password proprietario controlla i permessi."
      },
      {
        "question": "Che crittografia viene usata?",
        "answer": "Sono disponibili opzioni AES a 128 o 256 bit."
      },
      {
        "question": "Posso impostare permessi senza password utente?",
        "answer": "Sì, puoi impostare solo la password proprietario per controllare i permessi."
      }
    ]
  },
  "sanitize-pdf": {
    "title": "Pulisci PDF",
    "metaDescription": "Rimuovi dati nascosti dai PDF. Pulisci metadati, script e informazioni sensibili.",
    "keywords": [
      "pulisci pdf",
      "sanifica pdf",
      "rimuovi dati nascosti",
      "privacy pdf"
    ],
    "description": "\n      <p>Pulisci PDF rimuove dati nascosti e potenzialmente sensibili dai tuoi documenti. Elimina metadati, script incorporati, allegati, commenti e altri contenuti nascosti.</p>\n      <p>Essenziale per preparare documenti alla distribuzione pubblica o quando la privacy è una priorità.</p>\n      <p>Tutto avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Seleziona cosa rimuovere",
        "description": "Scegli i tipi di dati nascosti da eliminare."
      },
      {
        "step": 3,
        "title": "Pulisci e scarica",
        "description": "Clicca Pulisci per ripulire il PDF e scaricare."
      }
    ],
    "useCases": [
      {
        "title": "Pubblica online",
        "description": "Prepara documenti per distribuzione pubblica.",
        "icon": "globe"
      },
      {
        "title": "Protezione privacy",
        "description": "Rimuovi informazioni personali prima di condividere.",
        "icon": "shield"
      },
      {
        "title": "Conformità sicurezza",
        "description": "Rispetta i requisiti di sicurezza nella gestione dei documenti.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "Quali dati nascosti vengono rimossi?",
        "answer": "Metadati, script, allegati, commenti, dati dei moduli e livelli nascosti."
      },
      {
        "question": "Il contenuto visibile viene modificato?",
        "answer": "No, viene rimosso solo il contenuto nascosto; il contenuto visibile resta intatto."
      },
      {
        "question": "È reversibile?",
        "answer": "No, i dati rimossi non possono essere recuperati. Conserva una copia dell’originale."
      }
    ]
  },
  "decrypt-pdf": {
    "title": "Decripta PDF",
    "metaDescription": "Rimuovi la password dai PDF. Sblocca documenti protetti da password.",
    "keywords": [
      "decripta pdf",
      "rimuovi password pdf",
      "sblocca pdf",
      "rimozione password pdf"
    ],
    "description": "\n      <p>Decripta PDF rimuove la protezione con password dai documenti PDF. Inserisci la password attuale per sbloccare il file e creare una copia non protetta.</p>\n      <p>Questo strumento richiede che tu conosca la password attuale. Non può decifrare o aggirare password sconosciute.</p>\n      <p>Tutta la decrittazione avviene nel tuo browser, garantendo che password e documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica PDF protetto",
        "description": "Trascina e rilascia il PDF protetto da password."
      },
      {
        "step": 2,
        "title": "Inserisci la password",
        "description": "Inserisci la password attuale del documento."
      },
      {
        "step": 3,
        "title": "Decripta e scarica",
        "description": "Clicca Decripta per rimuovere la protezione e scaricare."
      }
    ],
    "useCases": [
      {
        "title": "Rimuovi vecchie password",
        "description": "Sblocca documenti quando la password non è più necessaria.",
        "icon": "unlock"
      },
      {
        "title": "Accesso semplificato",
        "description": "Crea copie non protette per una condivisione più semplice.",
        "icon": "share-2"
      },
      {
        "title": "Archivia documenti",
        "description": "Rimuovi password prima dell’archiviazione a lungo termine.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Può decifrare password sconosciute?",
        "answer": "No, devi conoscere la password attuale per decriptare."
      },
      {
        "question": "Il file originale viene modificato?",
        "answer": "No, viene creata una nuova copia non protetta."
      },
      {
        "question": "E se ho dimenticato la password?",
        "answer": "Purtroppo non possiamo recuperare password dimenticate."
      }
    ]
  },
  "flatten-pdf": {
    "title": "Appiattisci PDF",
    "metaDescription": "Appiattisci moduli e annotazioni nei PDF. Rendi il contenuto non modificabile.",
    "keywords": [
      "appiattisci pdf",
      "appiattisci moduli",
      "appiattisci annotazioni",
      "pdf non modificabile"
    ],
    "description": "\n      <p>Appiattisci PDF converte elementi interattivi come campi modulo e annotazioni in contenuto statico. Il PDF appiattito appare uguale ma non può più essere modificato.</p>\n      <p>Perfetto per finalizzare moduli compilati, preservare annotazioni o creare versioni non modificabili.</p>\n      <p>Tutto avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il PDF con moduli o annotazioni."
      },
      {
        "step": 2,
        "title": "Seleziona cosa appiattire",
        "description": "Scegli se appiattire moduli, annotazioni o entrambi."
      },
      {
        "step": 3,
        "title": "Appiattisci e scarica",
        "description": "Clicca Appiattisci per creare il PDF statico."
      }
    ],
    "useCases": [
      {
        "title": "Finalizza moduli",
        "description": "Blocca i dati dei moduli compilati per evitare modifiche.",
        "icon": "lock"
      },
      {
        "title": "Preserva annotazioni",
        "description": "Rendi permanenti le annotazioni nel documento.",
        "icon": "check-circle"
      },
      {
        "title": "Archivio documenti",
        "description": "Crea versioni non modificabili per l’archiviazione.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "L’appiattimento è reversibile?",
        "answer": "No, l’appiattimento è permanente. Conserva un backup dell’originale."
      },
      {
        "question": "Cambia l’aspetto?",
        "answer": "No, il documento appare uguale ma non è più interattivo."
      },
      {
        "question": "Riduce la dimensione del file?",
        "answer": "Talvolta sì, poiché gli elementi interattivi vengono convertiti in contenuto più semplice."
      }
    ]
  },
  "remove-metadata": {
    "title": "Rimuovi metadati",
    "metaDescription": "Elimina i metadati dai PDF. Rimuovi autore, date e proprietà del documento.",
    "keywords": [
      "rimuovi metadati pdf",
      "elimina metadati",
      "privacy pdf",
      "pdf anonimo"
    ],
    "description": "\n      <p>Rimuovi metadati elimina tutte le proprietà e i metadati dai tuoi PDF. Rimuovi nomi dell’autore, date di creazione, informazioni sul software e altri dati identificativi.</p>\n      <p>Essenziale per la privacy nella condivisione di documenti o quando i metadati potrebbero rivelare informazioni sensibili.</p>\n      <p>Tutto avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Rimuovi metadati",
        "description": "Clicca Rimuovi per eliminare tutti i metadati."
      },
      {
        "step": 3,
        "title": "Scarica",
        "description": "Scarica il PDF privo di metadati."
      }
    ],
    "useCases": [
      {
        "title": "Protezione privacy",
        "description": "Rimuovi informazioni personali prima di condividere.",
        "icon": "shield"
      },
      {
        "title": "Documenti anonimi",
        "description": "Crea documenti senza attribuzione dell’autore.",
        "icon": "user-x"
      },
      {
        "title": "Distribuzione pulita",
        "description": "Distribuisci documenti senza metadati interni.",
        "icon": "send"
      }
    ],
    "faq": [
      {
        "question": "Quali metadati vengono rimossi?",
        "answer": "Autore, titolo, oggetto, parole chiave, date, informazioni su creatore e produttore."
      },
      {
        "question": "I metadati XMP vengono rimossi?",
        "answer": "Sì, vengono eliminati sia i metadati standard che quelli XMP."
      },
      {
        "question": "Il contenuto viene modificato?",
        "answer": "No, viene rimosso solo il metadata; il contenuto del documento resta invariato."
      }
    ]
  },
  "change-permissions": {
    "title": "Modifica permessi",
    "metaDescription": "Modifica i permessi dei PDF. Controlla accesso a stampa, copia e modifica.",
    "keywords": [
      "permessi pdf",
      "modifica accesso pdf",
      "restrizioni pdf",
      "sicurezza pdf"
    ],
    "description": "\n      <p>Modifica permessi aggiorna i controlli di accesso sui tuoi PDF. Abilita o disabilita permessi di stampa, copia, modifica e annotazione.</p>\n      <p>Imposta una password proprietario per far rispettare queste restrizioni. I destinatari possono vedere il documento ma hanno azioni limitate.</p>\n      <p>Tutto avviene nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Imposta i permessi",
        "description": "Abilita o disabilita stampa, copia, modifica e annotazioni."
      },
      {
        "step": 3,
        "title": "Applica e scarica",
        "description": "Imposta la password proprietario e scarica il PDF con restrizioni."
      }
    ],
    "useCases": [
      {
        "title": "Impedisci la copia",
        "description": "Disabilita la copia del testo per proteggere i contenuti.",
        "icon": "copy"
      },
      {
        "title": "Controlla la stampa",
        "description": "Limita o consenti la stampa del documento.",
        "icon": "printer"
      },
      {
        "title": "Limita le modifiche",
        "description": "Impedisci modifiche al documento.",
        "icon": "edit-3"
      }
    ],
    "faq": [
      {
        "question": "Serve una password?",
        "answer": "È necessaria una password proprietario per far rispettare i permessi."
      },
      {
        "question": "Le restrizioni possono essere rimosse?",
        "answer": "Sì, con la password proprietario o usando lo strumento Rimuovi restrizioni."
      },
      {
        "question": "Tutti i lettori PDF sono compatibili?",
        "answer": "La maggior parte rispetta i permessi, ma alcuni potrebbero non applicarli."
      }
    ]
  },
  "pdf-to-docx": {
    "title": "PDF in Word",
    "metaDescription": "Converti PDF in documenti Word (DOCX) modificabili. Preserva formattazione e layout.",
    "keywords": [
      "pdf in word",
      "converti pdf in docx",
      "pdf in doc",
      "pdf modificabile"
    ],
    "description": "\n      <p>PDF in Word converte i tuoi PDF in file Microsoft Word (DOCX) modificabili. Lo strumento preserva il layout originale, la formattazione, le immagini e il flusso del testo.</p>\n      <p>Modifica facilmente i contenuti del PDF in Word senza dover riscrivere. Perfetto per contratti, report e curriculum.</p>\n      <p>Tutta la conversione avviene localmente nel tuo browser con tecnologia WebAssembly, garantendo che i documenti non lascino mai il tuo dispositivo.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Converti",
        "description": "Attendi il completamento del processo di conversione."
      },
      {
        "step": 3,
        "title": "Scarica Word",
        "description": "Scarica il file DOCX completamente modificabile."
      }
    ],
    "useCases": [
      {
        "title": "Modifica contratti",
        "description": "Converti contratti PDF in Word per modifica e revisione.",
        "icon": "file-text"
      },
      {
        "title": "Aggiorna CV",
        "description": "Aggiorna vecchi curriculum PDF convertendoli in Word.",
        "icon": "user"
      },
      {
        "title": "Riutilizzo contenuti",
        "description": "Estrai contenuti da report PDF per altri documenti.",
        "icon": "copy"
      }
    ],
    "faq": [
      {
        "question": "La formattazione è preservata?",
        "answer": "Sì, lo strumento mira a preservare layout, font e immagini il più fedelmente possibile."
      },
      {
        "question": "Posso convertire PDF scansionati?",
        "answer": "I PDF scansionati vengono convertiti come immagini in Word a meno di usare prima l’OCR."
      },
      {
        "question": "È compatibile con Word?",
        "answer": "Sì, l’output è un file .docx standard compatibile con Microsoft Word e Google Docs."
      }
    ]
  },
  "pdf-to-markdown": {
    "title": "PDF in Markdown",
    "metaDescription": "Converti PDF in formato Markdown. Estrai testo e preserva formattazione come titoli e liste.",
    "keywords": [
      "pdf in markdown",
      "converti pdf in md",
      "estrazione testo pdf",
      "convertitore markdown",
      "pdf in testo"
    ],
    "description": "\n      <p>PDF in Markdown converte i tuoi documenti PDF in file Markdown puliti e ben strutturati. Lo strumento estrae intelligentemente il testo e cerca di preservare la formattazione come titoli, liste e paragrafi.</p>\n      <p>Perfetto per convertire PDF in formati modificabili per documentazione, appunti o sistemi di gestione contenuti che supportano Markdown.</p>\n      <p>Tutta la conversione avviene localmente nel tuo browser, garantendo che i documenti restino privati e sicuri.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Configura opzioni",
        "description": "Imposta intervallo pagine, includi numeri di pagina e regola le interruzioni di riga."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Clicca Converti per generare il file Markdown e scaricare."
      }
    ],
    "useCases": [
      {
        "title": "Documentazione",
        "description": "Converti manuali e guide PDF in Markdown per documentazione versionata.",
        "icon": "file-text"
      },
      {
        "title": "Presa di appunti",
        "description": "Estrai contenuti da articoli e libri PDF per il tuo sistema di note.",
        "icon": "edit-3"
      },
      {
        "title": "Migrazione contenuti",
        "description": "Migra contenuti PDF in piattaforme CMS che supportano Markdown.",
        "icon": "copy"
      }
    ],
    "faq": [
      {
        "question": "La formattazione è preservata?",
        "answer": "Lo strumento cerca di rilevare i titoli in base alla dimensione del font e liste puntate/numerate. Layout complessi possono richiedere aggiustamenti manuali."
      },
      {
        "question": "Posso convertire pagine specifiche?",
        "answer": "Sì, puoi specificare un intervallo come \"1-3, 5, 7\" per convertire solo quelle pagine."
      },
      {
        "question": "Funziona con PDF scansionati?",
        "answer": "I PDF scansionati contengono immagini, non testo. Usa prima il nostro strumento OCR per estrarre il testo, poi converti in Markdown."
      }
    ]
  },
  "deskew-pdf": {
    "title": "Raddrizza PDF",
    "metaDescription": "Raddrizza automaticamente pagine PDF scansionate o inclinate. Correggi l’inclinazione con rilevamento preciso dell’angolo.",
    "keywords": [
      "raddrizza pdf",
      "allinea pdf",
      "correggi scansione inclinata",
      "rotazione automatica pdf",
      "correggi angolo pdf"
    ],
    "description": "\n      <p>Raddrizza PDF rileva e corregge automaticamente pagine inclinate nei tuoi documenti PDF usando analisi avanzata della varianza del profilo di proiezione. È essenziale per documenti scansionati inseriti nello scanner con angolo.</p>\n      <p>Lo strumento analizza l’allineamento di testo e contenuti a diversi angoli per trovare la rotazione ottimale, quindi applica la correzione. Puoi regolare la soglia di sensibilità (1-30) e il DPI (72-300) per risultati ottimali.</p>\n      <p>Tutto avviene localmente nel tuo browser con tecnologia WebAssembly, garantendo che i documenti restino privati e sicuri.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF scansionato",
        "description": "Trascina e rilascia il PDF scansionato oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Configura impostazioni",
        "description": "Regola sensibilità della soglia e DPI se necessario per rilevamento migliore."
      },
      {
        "step": 3,
        "title": "Elabora e scarica",
        "description": "Clicca Raddrizza per correggere le pagine e scaricare il PDF."
      }
    ],
    "useCases": [
      {
        "title": "Documenti scansionati",
        "description": "Correggi pagine scansionate con inclinazione dai feeder.",
        "icon": "scan"
      },
      {
        "title": "Scansioni da mobile",
        "description": "Correggi foto inclinate di documenti scattate con smartphone.",
        "icon": "smartphone"
      },
      {
        "title": "Restauro archivi",
        "description": "Raddrizza vecchi archivi scansionati per migliore leggibilità.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Quanto è accurato il rilevamento dell’angolo?",
        "answer": "Lo strumento usa l’analisi del profilo di proiezione per rilevare angoli fino a ±10° con alta accuratezza. Salta automaticamente pagine con angolo inferiore a 0,3°."
      },
      {
        "question": "La qualità del testo ne risente?",
        "answer": "Per rotazioni multiple di 90° non c’è perdita di qualità. Per altri angoli, lo strumento arrotonda al grado più vicino mantenendo buona qualità."
      },
      {
        "question": "Posso raddrizzare solo alcune pagine?",
        "answer": "Analizza tutte le pagine ma corregge solo quelle con inclinazione oltre la soglia. Le pagine con minima inclinazione restano inalterate."
      },
      {
        "question": "Cos’è la soglia di sensibilità?",
        "answer": "Valori 1-10 correggono solo inclinazioni evidenti, 11-20 rilevano inclinazioni moderate, 21-30 catturano angoli sottili. Default 10 per equilibrio."
      },
      {
        "question": "Quanto dura l’elaborazione?",
        "answer": "Dipende da dimensione file e DPI. 150 DPI (default) offre buon equilibrio tra velocità e accuratezza. DPI più alti sono più accurati ma lenti."
      }
    ]
  },
  "pdf-booklet": {
    "title": "Creatore opuscoli PDF",
    "metaDescription": "Crea layout opuscolo da PDF per la stampa. Dispone le pagine per rilegatura a sella con varie griglie.",
    "keywords": [
      "opuscolo pdf",
      "creatore opuscoli",
      "stampa opuscolo",
      "saddle stitch",
      "imposizione"
    ],
    "description": "\n      <p>Creatore opuscoli PDF dispone le pagine del tuo PDF in layout opuscolo pronti per stampa e piega. Perfetto per creare brochure, zine, opuscoli e pubblicazioni con rilegatura a sella.</p>\n      <p>Scegli fra varie modalità di griglia (1x2, 2x2, 2x4, 4x4), formati carta e opzioni di orientamento. Lo strumento gestisce automaticamente l’imposizione per la sequenza di piega corretta.</p>\n      <p>Tutto avviene localmente nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Carica il documento PDF che vuoi convertire in opuscolo."
      },
      {
        "step": 2,
        "title": "Scegli il layout",
        "description": "Seleziona modalità griglia, formato carta, orientamento e opzioni di rotazione."
      },
      {
        "step": 3,
        "title": "Crea e scarica",
        "description": "Genera il layout opuscolo e scarica per la stampa."
      }
    ],
    "useCases": [
      {
        "title": "Brochure",
        "description": "Crea brochure pronte alla piega da PDF standard.",
        "icon": "book-open"
      },
      {
        "title": "Zine",
        "description": "Produci zine autopubblicate con imposizione corretta.",
        "icon": "book"
      },
      {
        "title": "Programmi eventi",
        "description": "Crea opuscoli professionali per eventi.",
        "icon": "calendar"
      }
    ],
    "faq": [
      {
        "question": "Cos’è la rilegatura a sella?",
        "answer": "È una tecnica in cui i fogli piegati sono annidati e spillati lungo la piega."
      },
      {
        "question": "Quale modalità di griglia usare?",
        "answer": "1x2 è lo standard per opuscoli. Usa 2x2 o superiori per multi-up e risparmio carta."
      },
      {
        "question": "Posso vedere un’anteprima?",
        "answer": "Sì, lo strumento fornisce un’anteprima visiva prima di generare l’opuscolo."
      }
    ]
  },
  "rasterize-pdf": {
    "title": "Rasterizza PDF",
    "metaDescription": "Converti pagine PDF in immagini di alta qualità. Esporta in PNG, JPEG o WebP con DPI personalizzato.",
    "keywords": [
      "rasterizza pdf",
      "pdf in immagine",
      "pdf in png",
      "pdf in jpeg",
      "converti pagine pdf"
    ],
    "description": "\n      <p>Rasterizza PDF converte le pagine del tuo PDF in immagini raster di alta qualità. Scegli tra formati di output PNG, JPEG o WebP con pieno controllo su DPI e qualità.</p>\n      <p>Perfetto per creare miniature, grafiche social o archiviare contenuti PDF come immagini. Supporta selezione dell’intervallo pagine e elaborazione in batch.</p>\n      <p>Tutto avviene localmente nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Trascina e rilascia il file PDF oppure clicca per selezionarlo."
      },
      {
        "step": 2,
        "title": "Configura output",
        "description": "Seleziona DPI, formato (PNG/JPEG/WebP), qualità e intervallo pagine."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Elabora le pagine e scarica le immagini singolarmente o come archivio ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Social media",
        "description": "Converti slide PDF in immagini per la pubblicazione sui social.",
        "icon": "share-2"
      },
      {
        "title": "Miniature",
        "description": "Genera anteprime in miniatura per documenti PDF.",
        "icon": "image"
      },
      {
        "title": "Pubblicazione web",
        "description": "Converti contenuti PDF in formati immagine adatti al web.",
        "icon": "globe"
      }
    ],
    "faq": [
      {
        "question": "Quale DPI usare?",
        "answer": "72 DPI per schermo, 150 DPI per uso generale, 300 DPI per qualità di stampa."
      },
      {
        "question": "Quale formato è migliore?",
        "answer": "PNG per qualità/trasparenza, JPEG per dimensioni ridotte, WebP per uso web moderno."
      },
      {
        "question": "Posso convertire pagine specifiche?",
        "answer": "Sì, specifica intervalli come \"1-5, 8, 10-15\" per convertire solo quelle pagine."
      }
    ]
  },
  "markdown-to-pdf": {
    "title": "Markdown in PDF",
    "metaDescription": "Converti file Markdown in PDF ben formattati. Supporta GFM e evidenziazione della sintassi.",
    "keywords": [
      "markdown in pdf",
      "md in pdf",
      "converti markdown",
      "gfm in pdf",
      "convertitore markdown"
    ],
    "description": "\n      <p>Markdown in PDF converte i tuoi file Markdown in documenti PDF con stile professionale. Supporta CommonMark e GitHub Flavored Markdown (GFM), inclusi tabelle, liste di attività e blocchi di codice.</p>\n      <p>Scegli tra più temi (chiaro, scuro, GitHub) e personalizza dimensione e margini pagina. I blocchi di codice sono evidenziati per migliorare la leggibilità.</p>\n      <p>Tutta la conversione avviene localmente nel tuo browser, garantendo che i contenuti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica file Markdown",
        "description": "Carica il tuo file .md o .markdown."
      },
      {
        "step": 2,
        "title": "Scegli il tema",
        "description": "Seleziona un tema visivo e configura le impostazioni della pagina."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Genera il PDF stilizzato e scarica."
      }
    ],
    "useCases": [
      {
        "title": "Documentazione",
        "description": "Converti README e documenti in PDF condivisibili.",
        "icon": "file-text"
      },
      {
        "title": "Esporta note",
        "description": "Esporta note Markdown in PDF per stampa o condivisione.",
        "icon": "edit-3"
      },
      {
        "title": "Report",
        "description": "Crea report da Markdown con stile professionale.",
        "icon": "bar-chart"
      }
    ],
    "faq": [
      {
        "question": "GFM è supportato?",
        "answer": "Sì, sono supportati tabelle, liste di attività, barrati e altre funzionalità GFM."
      },
      {
        "question": "Posso personalizzare lo stile?",
        "answer": "Scegli tra temi preimpostati o aggiungi CSS personalizzato per controllo totale."
      },
      {
        "question": "I blocchi di codice sono evidenziati?",
        "answer": "Sì, i blocchi includono evidenziazione della sintassi per i linguaggi comuni."
      }
    ]
  },
  "email-to-pdf": {
    "title": "Email in PDF",
    "metaDescription": "Converti file email (.eml, .msg) in documenti PDF. Preserva formattazione, immagini inline, link cliccabili e incorpora allegati.",
    "keywords": [
      "email in pdf",
      "eml in pdf",
      "msg in pdf",
      "converti email",
      "convertitore email",
      "salva email come pdf",
      "outlook in pdf"
    ],
    "description": "\n      <p>Email in PDF converte i tuoi file email (.eml e .msg) in documenti PDF ben formattati. Lo strumento preserva intestazioni, corpo del messaggio, immagini inline con sostituzione CID, link cliccabili e incorpora gli allegati direttamente nel PDF.</p>\n      <p>Personalizza le opzioni di output tra dimensione pagina (A4, Letter, Legal), formato data con supporto fuso orario e inclusione dei campi CC/BCC e informazioni sugli allegati.</p>\n      <p>Tutta la conversione avviene localmente nel tuo browser, garantendo che le email restino private e sicure.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica file email",
        "description": "Carica il tuo file .eml o .msg."
      },
      {
        "step": 2,
        "title": "Configura opzioni",
        "description": "Imposta dimensione pagina, formato data, fuso orario e scegli i campi da includere."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Converti in PDF con allegati incorporati e scarica il risultato."
      }
    ],
    "useCases": [
      {
        "title": "Archivi legali",
        "description": "Archivia email importanti come PDF con allegati incorporati per documentazione legale.",
        "icon": "scale"
      },
      {
        "title": "Archivi aziendali",
        "description": "Converti corrispondenza aziendale in PDF per conservazione a lungo termine.",
        "icon": "briefcase"
      },
      {
        "title": "Conservazione prove",
        "description": "Salva prove email con immagini inline e allegati in formato PDF non modificabile.",
        "icon": "shield"
      }
    ],
    "faq": [
      {
        "question": "Quali formati email sono supportati?",
        "answer": "Sono pienamente supportati i file .eml (RFC 822) e .msg (Microsoft Outlook)."
      },
      {
        "question": "Gli allegati sono inclusi?",
        "answer": "Sì! Gli allegati sono incorporati direttamente nel PDF. Puoi estrarli con un lettore PDF compatibile."
      },
      {
        "question": "Le immagini inline vengono visualizzate?",
        "answer": "Sì, le immagini riferite via CID vengono convertite in data URI base64 e visualizzate nel PDF."
      },
      {
        "question": "I link sono cliccabili?",
        "answer": "Sì, tutti i link HTML (tag a) e gli URL in email testuali diventano link cliccabili nel PDF."
      },
      {
        "question": "La formattazione dell’email è preservata?",
        "answer": "Sì, le email HTML mantengono la formattazione il più fedelmente possibile, inclusi stili, immagini e link."
      }
    ]
  },
  "cbz-to-pdf": {
    "title": "CBZ in PDF",
    "metaDescription": "Converti archivi di fumetti (CBZ) in PDF. Preserva ordine e qualità delle immagini per fumetti digitali.",
    "keywords": [
      "cbz in pdf",
      "fumetti in pdf",
      "converti cbz",
      "convertitore fumetti",
      "convertitore cbz"
    ],
    "description": "\n      <p>CBZ in PDF converte gli archivi di fumetti (Comic Book Archive) in documenti PDF. Lo strumento estrae tutte le immagini dall’archivio CBZ e le compila in un PDF mantenendo l’ordine di lettura corretto.</p>\n      <p>Scegli tra opzioni di dimensione pagina, inclusa la dimensione originale dell’immagine o formati standard dei fumetti. Perfetto per leggere fumetti su dispositivi che supportano PDF ma non CBZ.</p>\n      <p>Tutta la conversione avviene localmente nel tuo browser, garantendo che i fumetti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica file CBZ",
        "description": "Carica il tuo archivio fumetti .cbz."
      },
      {
        "step": 2,
        "title": "Seleziona opzioni",
        "description": "Scegli dimensione pagina e impostazioni di qualità immagine."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Converti in PDF e scarica il fumetto."
      }
    ],
    "useCases": [
      {
        "title": "Compatibilità e-reader",
        "description": "Converti CBZ in PDF per e-reader che supportano solo PDF.",
        "icon": "book"
      },
      {
        "title": "Archivi fumetti",
        "description": "Crea archivi PDF della tua collezione di fumetti digitali.",
        "icon": "archive"
      },
      {
        "title": "Preparazione stampa",
        "description": "Converti fumetti digitali in PDF per la stampa.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Cos’è il formato CBZ?",
        "answer": "CBZ è un archivio ZIP contenente pagine del fumetto come file immagine, con estensione .cbz."
      },
      {
        "question": "La qualità delle immagini è preservata?",
        "answer": "Sì, le immagini sono incorporate alla qualità originale nel PDF."
      },
      {
        "question": "Sono supportate cartelle annidate?",
        "answer": "Sì, le immagini di tutte le cartelle nell’archivio vengono estratte e ordinate."
      }
    ]
  },
  "pdf-to-pdfa": {
    "title": "PDF in PDF/A",
    "metaDescription": "Converti PDF in formato d’archivio PDF/A. Garantisci conservazione a lungo termine conforme agli standard ISO.",
    "keywords": [
      "pdf in pdfa",
      "convertitore pdfa",
      "archivia pdf",
      "archivio pdf",
      "conservazione lungo termine"
    ],
    "description": "\n      <p>PDF in PDF/A converte i tuoi documenti PDF in formato PDF/A, lo standard ISO per l’archiviazione a lungo termine. PDF/A garantisce che i documenti saranno visualizzabili e riproducibili per decenni.</p>\n      <p>Scegli tra PDF/A-1b (conformità base), PDF/A-2b (raccomandato, supporta trasparenze) o PDF/A-3b (consente file incorporati). Lo strumento incorpora i font e appiattisce le trasparenze quando necessario.</p>\n      <p>Tutta la conversione avviene localmente nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Carica il PDF che vuoi convertire in PDF/A."
      },
      {
        "step": 2,
        "title": "Seleziona livello PDF/A",
        "description": "Scegli conformità PDF/A-1b, PDF/A-2b o PDF/A-3b."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Converti in PDF/A e scarica il documento d’archivio."
      }
    ],
    "useCases": [
      {
        "title": "Archivi legali",
        "description": "Converti documenti legali in PDF/A per archiviazione ammissibile in tribunale.",
        "icon": "scale"
      },
      {
        "title": "Registri governativi",
        "description": "Rispetta i requisiti di archiviazione amministrativa con PDF/A.",
        "icon": "building"
      },
      {
        "title": "Archivi aziendali",
        "description": "Preserva documenti aziendali importanti per accessibilità futura.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Quale livello PDF/A usare?",
        "answer": "PDF/A-2b è consigliato nella maggior parte dei casi. Usa 1b per massima compatibilità o 3b se servono file incorporati."
      },
      {
        "question": "Cosa distingue PDF/A?",
        "answer": "PDF/A incorpora i font, disabilita la crittografia e rende tutti gli elementi auto-consistenti per la visione futura."
      },
      {
        "question": "Posso tornare indietro da PDF/A?",
        "answer": "I PDF/A sono PDF standard e si aprono normalmente. Le caratteristiche d’archivio aggiungono restrizioni, non limitazioni."
      }
    ]
  },
  "font-to-outline": {
    "title": "Font in tracciati",
    "metaDescription": "Rimuovi dipendenze dai font convertendo le pagine in immagini di alta qualità. Garantisce compatibilità su tutti i sistemi.",
    "keywords": [
      "font in tracciati",
      "converti font in contorni",
      "rimuovi font",
      "compatibilità font",
      "appiattisci font pdf",
      "rimozione font pdf"
    ],
    "description": "\n      <p>Font in tracciati rimuove tutte le dipendenze dai font nel tuo PDF convertendo ogni pagina in contenuto raster ad alta qualità. Garantisce che il documento appaia identico su qualsiasi sistema, anche senza i font originali installati.</p>\n      <p>Lo strumento renderizza ogni pagina al DPI scelto (150–600), rimuovendo i font incorporati e preservando l’aspetto visivo esatto. Facoltativamente, puoi aggiungere un livello di testo invisibile per mantenere la ricercabilità.</p>\n      <p>È essenziale per preparazione alla stampa, compatibilità multipiattaforma e per evitare problemi di licenza dei font nella condivisione. Tutto avviene localmente nel tuo browser.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Carica il PDF che contiene i font da rimuovere."
      },
      {
        "step": 2,
        "title": "Configura qualità",
        "description": "Scegli il DPI (300 raccomandato per stampa, 150 per schermo). Abilita testo ricercabile se necessario."
      },
      {
        "step": 3,
        "title": "Converti e scarica",
        "description": "Elabora il file e scarica il PDF indipendente dai font."
      }
    ],
    "useCases": [
      {
        "title": "Preparazione stampa",
        "description": "Elimina problemi di font in tipografia rimuovendo tutte le dipendenze.",
        "icon": "printer"
      },
      {
        "title": "Condivisione multipiattaforma",
        "description": "Condividi documenti identici su qualsiasi dispositivo, indipendentemente dai font installati.",
        "icon": "share-2"
      },
      {
        "title": "Licenze font",
        "description": "Rimuovi font incorporati per evitare questioni di licenza nella distribuzione.",
        "icon": "shield"
      }
    ],
    "faq": [
      {
        "question": "Come funziona?",
        "answer": "Lo strumento renderizza ogni pagina ad alta risoluzione (DPI scelto) e ricrea il PDF da queste immagini, rimuovendo le dipendenze dai font preservando l’aspetto."
      },
      {
        "question": "Posso ancora selezionare il testo?",
        "answer": "Di default no: il testo diventa parte dell’immagine. Puoi però abilitare \"Mantieni testo ricercabile\" per aggiungere un livello di testo invisibile."
      },
      {
        "question": "Quale DPI usare?",
        "answer": "300 DPI è consigliato per stampa; 150 DPI basta per schermo e produce file più piccoli; 600 DPI massima qualità ma file grandi."
      },
      {
        "question": "La dimensione del file aumenta?",
        "answer": "Dipende da DPI e contenuto: 150 DPI spesso riduce la dimensione, 300 può aumentarla, 600 la aumenta molto. Viene applicata compressione automaticamente."
      },
      {
        "question": "È reversibile?",
        "answer": "No, i dati dei font vengono rimossi in modo permanente. Conserva l’originale se ti serve testo modificabile con i font originali."
      },
      {
        "question": "E le grafiche vettoriali?",
        "answer": "Le grafiche vettoriali (forme, linee) nel PDF originale saranno convertite in raster insieme al testo. La qualità visiva è preservata al DPI scelto."
      }
    ]
  },
  "extract-tables": {
    "title": "Estrai tabelle dal PDF",
    "metaDescription": "Rileva ed estrai tabelle dai PDF. Esporta in JSON, Markdown o CSV.",
    "keywords": [
      "estrai tabelle",
      "estrazione tabelle pdf",
      "pdf in csv",
      "pdf in excel",
      "rilevamento tabelle"
    ],
    "description": "\n      <p>Estrai tabelle dal PDF rileva dati tabellari nei tuoi documenti PDF e li esporta in formati strutturati. Scegli JSON per integrazione dati, Markdown per documentazione o CSV per fogli di calcolo.</p>\n      <p>Lo strumento usa algoritmi di rilevamento intelligenti per identificare strutture di tabelle anche in documenti complessi. Specifica intervalli di pagine e regola parametri di rilevamento per risultati ottimali.</p>\n      <p>Tutto avviene localmente nel tuo browser, garantendo che i documenti restino privati.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Carica il PDF contenente le tabelle da estrarre."
      },
      {
        "step": 2,
        "title": "Configura rilevamento",
        "description": "Imposta intervallo pagine e soglie minime di colonne/righe."
      },
      {
        "step": 3,
        "title": "Esporta e scarica",
        "description": "Scegli il formato (JSON/Markdown/CSV) e scarica."
      }
    ],
    "useCases": [
      {
        "title": "Analisi dati",
        "description": "Estrai dati tabellari per analisi in fogli o database.",
        "icon": "bar-chart"
      },
      {
        "title": "Elaborazione report",
        "description": "Recupera tabelle da report PDF per ulteriore elaborazione.",
        "icon": "file-text"
      },
      {
        "title": "Documentazione",
        "description": "Converti tabelle PDF in Markdown per documentazione tecnica.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "Rileva tabelle complesse?",
        "answer": "Funziona al meglio con tabelle a griglia semplice. Celle unite complesse possono richiedere aggiustamenti manuali."
      },
      {
        "question": "E se non trova tabelle?",
        "answer": "Prova ad aumentare le soglie minime di colonne/righe o verifica che nel PDF ci siano vere strutture tabellari."
      },
      {
        "question": "Posso estrarre da pagine specifiche?",
        "answer": "Sì, specifica un intervallo di pagine per limitare l’estrazione."
      }
    ]
  },
  "ocg-manager": {
    "title": "Gestore livelli PDF (OCG)",
    "metaDescription": "Gestisci i livelli PDF (Optional Content Groups). Visualizza, attiva/disattiva, aggiungi, elimina e rinomina i livelli nei tuoi PDF.",
    "keywords": [
      "livelli pdf",
      "gestore ocg",
      "optional content groups",
      "visibilità livelli pdf",
      "gestisci livelli pdf"
    ],
    "description": "\n      <p>Gestore livelli PDF ti consente di visualizzare e gestire gli Optional Content Groups (OCG) nei tuoi documenti PDF. I livelli OCG sono usati in disegni tecnici, mappe e documenti complessi per organizzare contenuti in livelli attivabili/disattivabili.</p>\n      <p>Visualizza tutti i livelli nel PDF, alterna la visibilità, aggiungi nuovi livelli, elimina quelli indesiderati o rinomina quelli esistenti. Strumento essenziale per PDF a livelli come planimetrie, esportazioni CAD e documenti pronti per la stampa.</p>\n      <p>Tutto avviene localmente nel tuo browser, garantendo che i documenti restino privati e sicuri.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il PDF",
        "description": "Carica un PDF che contiene livelli (OCG) o uno a cui vuoi aggiungere livelli."
      },
      {
        "step": 2,
        "title": "Visualizza livelli",
        "description": "Lo strumento elenca automaticamente tutti i livelli trovati nel documento con stato di visibilità."
      },
      {
        "step": 3,
        "title": "Gestisci livelli",
        "description": "Alterna visibilità, rinomina livelli, aggiungine di nuovi o elimina quelli indesiderati."
      },
      {
        "step": 4,
        "title": "Salva e scarica",
        "description": "Scarica il PDF modificato con i cambiamenti ai livelli applicati."
      }
    ],
    "useCases": [
      {
        "title": "Disegni tecnici",
        "description": "Gestisci livelli nelle esportazioni CAD per mostrare/nascondere quote, annotazioni o viste.",
        "icon": "ruler"
      },
      {
        "title": "Modifica mappe",
        "description": "Alterna livelli come topografia, strade ed etichette per stampe personalizzate.",
        "icon": "map"
      },
      {
        "title": "Preparazione stampa",
        "description": "Prepara PDF a livelli per la stampa attivando i livelli appropriati per le diverse versioni.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Cosa sono i livelli PDF (OCG)?",
        "answer": "Gli Optional Content Groups sono livelli in un PDF che possono essere mostrati o nascosti. Usati comunemente in disegni CAD, mappe e documenti complessi."
      },
      {
        "question": "Perché il mio PDF non mostra livelli?",
        "answer": "Non tutti i PDF contengono livelli. Di solito vengono aggiunti durante la creazione da software di design o CAD."
      },
      {
        "question": "Le modifiche ai livelli influiscono sul contenuto?",
        "answer": "Le modifiche alla visibilità influiscono solo su ciò che viene mostrato o stampato. Il contenuto resta nel documento."
      }
    ]
  },
  "pdf-reader": {
    "title": "Lettore PDF",
    "metaDescription": "Lettore PDF online gratuito. Visualizza, naviga, zooma, ruota e stampa documenti PDF direttamente nel browser.",
    "keywords": [
      "lettore pdf",
      "visualizzatore pdf",
      "visualizza pdf online",
      "leggi pdf",
      "viewer pdf browser"
    ],
    "description": "\n      <p>Lettore PDF è un visualizzatore completo che ti consente di leggere e navigare documenti PDF direttamente nel browser. Nessuna installazione richiesta: carica il PDF e inizia a leggere.</p>\n      <p>Passa tra le pagine, esegui zoom in/out, ruota la vista e usa la modalità a schermo intero per una lettura senza distrazioni. Puoi anche stampare o scaricare i documenti per l’accesso offline.</p>\n      <p>Tutta la visualizzazione avviene localmente nel tuo browser. I tuoi documenti non vengono mai caricati su alcun server, garantendo massima privacy.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Apri il PDF",
        "description": "Clicca per caricare o trascina e rilascia un file PDF per aprirlo nel lettore."
      },
      {
        "step": 2,
        "title": "Naviga tra le pagine",
        "description": "Usa i controlli per andare alla pagina precedente/successiva o salta a un numero di pagina specifico."
      },
      {
        "step": 3,
        "title": "Regola la vista",
        "description": "Zoom in/out, ruota la vista o entra in modalità a schermo intero per una lettura confortevole."
      },
      {
        "step": 4,
        "title": "Stampa o scarica",
        "description": "Stampa il documento o scaricalo per l’accesso offline quando necessario."
      }
    ],
    "useCases": [
      {
        "title": "Revisione documenti",
        "description": "Rivedi rapidamente PDF senza installare software.",
        "icon": "book-open"
      },
      {
        "title": "Lettura mobile",
        "description": "Leggi PDF su qualsiasi dispositivo con un browser web.",
        "icon": "smartphone"
      },
      {
        "title": "Anteprima rapida",
        "description": "Visualizza PDF prima di decidere se scaricare o stampare.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "Il mio documento è al sicuro?",
        "answer": "Sì, il documento è elaborato interamente nel tuo browser e non viene caricato su alcun server."
      },
      {
        "question": "Posso annotare o modificare il PDF?",
        "answer": "Questo strumento serve solo per la visualizzazione. Usa i nostri strumenti Firma PDF o Annotazione PDF per modifiche."
      },
      {
        "question": "Funziona su dispositivi mobili?",
        "answer": "Sì, il Lettore PDF funziona su tutti i dispositivi con browser moderno."
      }
    ]
  },
  "digital-sign-pdf": {
    "title": "Firma Digitale",
    "metaDescription": "Aggiungi firme digitali X.509 ai documenti PDF. Firma PDF con certificati PFX, P12 o PEM per validità legale.",
    "keywords": [
      "firma digitale pdf",
      "certificato x509",
      "firma pfx",
      "firma p12",
      "firma pem",
      "firma elettronica"
    ],
    "description": "<p>Lo strumento Firma Digitale ti permette di aggiungere firme digitali X.509 crittografiche ai documenti PDF.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica PDF",
        "description": "Carica il documento PDF che vuoi firmare digitalmente."
      },
      {
        "step": 2,
        "title": "Carica Certificato",
        "description": "Carica il tuo file certificato X.509 (.pfx, .p12 o .pem) e inserisci la password."
      },
      {
        "step": 3,
        "title": "Firma e Scarica",
        "description": "Clicca su Firma PDF per applicare la firma digitale e scarica il documento firmato."
      }
    ],
    "useCases": [
      {
        "title": "Documenti Legali",
        "description": "Firma contratti e documenti legali con firme digitali legalmente vincolanti.",
        "icon": "scale"
      },
      {
        "title": "Approvazioni Aziendali",
        "description": "Firma digitalmente fatture e documenti di approvazione per tracce di audit.",
        "icon": "briefcase"
      },
      {
        "title": "Integrità del Documento",
        "description": "Assicurati che i documenti non siano stati alterati dopo la firma.",
        "icon": "shield-check"
      }
    ],
    "faq": [
      {
        "question": "Quali formati di certificato sono supportati?",
        "answer": "Sono supportati i formati di certificato PFX (.pfx), PKCS#12 (.p12) e PEM (.pem)."
      },
      {
        "question": "La firma è legalmente valida?",
        "answer": "Sì, le firme digitali X.509 con un certificato valido sono legalmente riconosciute nella maggior parte delle giurisdizioni."
      },
      {
        "question": "Posso aggiungere una firma visibile?",
        "answer": "Sì, puoi aggiungere una firma visibile con testo, immagine, posizione e stile personalizzati."
      }
    ]
  },
  "validate-signature": {
    "title": "Valida Firma",
    "metaDescription": "Verifica le firme digitali nei documenti PDF. Controlla la validità del certificato, le informazioni del firmatario e l'integrità del documento.",
    "keywords": [
      "valida firma pdf",
      "verifica firma digitale",
      "controlla certificato pdf",
      "verifica firma"
    ],
    "description": "<p>Lo strumento Valida Firma ti permette di verificare le firme digitali nei documenti PDF.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica PDF Firmato",
        "description": "Carica un documento PDF che contiene firme digitali."
      },
      {
        "step": 2,
        "title": "Visualizza Risultati",
        "description": "Vedi tutte le firme trovate nel documento con il loro stato di validità."
      },
      {
        "step": 3,
        "title": "Esporta Report",
        "description": "Opzionalmente scarica un report JSON dei risultati di validazione."
      }
    ],
    "useCases": [
      {
        "title": "Verifica Documenti",
        "description": "Verifica che i documenti firmati siano autentici e non siano stati alterati.",
        "icon": "shield-check"
      },
      {
        "title": "Audit di Conformità",
        "description": "Controlla la validità delle firme per scopi di conformità e audit.",
        "icon": "clipboard-check"
      },
      {
        "title": "Revisione Certificati",
        "description": "Visualizza i dettagli del certificato e le date di scadenza dei documenti firmati.",
        "icon": "award"
      }
    ],
    "faq": [
      {
        "question": "Cosa significa \"valido\"?",
        "answer": "Una firma valida significa che il documento non è stato modificato dalla firma e la catena di certificati è intatta."
      },
      {
        "question": "Posso validare più PDF?",
        "answer": "Sì, puoi caricare più PDF e validare tutte le firme in batch."
      },
      {
        "question": "Perché una firma potrebbe essere invalida?",
        "answer": "Le firme possono essere invalide se il documento è stato modificato, il certificato è scaduto o il certificato non è attendibile."
      }
    ]
  },
  "form-logic-designer": {
    "title": "Logica Moduli",
    "metaDescription": "Progetta comportamenti dinamici tramite una tela di nodi in stile glassmorphic e inietta logica interattiva AcroJS nei moduli PDF.",
    "keywords": [
      "logica modulo PDF",
      "iniezione AcroJS",
      "flusso nodi",
      "PDF interattivo",
      "dipendenze campi"
    ],
    "description": "\n        <p>Il Progettista Logico di Moduli Interattivi è uno strumento pionieristico che colma una grande lacuna nelle funzionalità PDF: la creazione di campi attivi e reattivi invece di moduli piatti e statici.</p>\n        <p>Attraverso la nostra tela visiva con \"nodi in stile glassmorphic luminosi\" (basata su React Flow), i campi del modulo sono rappresentati come moduli collegati. È possibile trascinare i collegamenti per definire le relazioni: ad es., quando una casella di controllo viene selezionata ➜ abilitare un inserimento di testo ➜ calcolare automaticamente i valori e aggiornare un campo totale.</p>\n        <p>Una volta progettato, il motore AcroJS compila la logica in Acrobat JavaScript ufficiale e la inietta nei dizionari '/AA' (Azioni Aggiuntive) dell'AcroForm. I comportamenti interattivi vengono eseguiti nativamente in qualsiasi lettore PDF standard.</p>\n      ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica PDF Interattivo",
        "description": "Fornisci un file PDF che contiene già campi modulo attivi (AcroForm)."
      },
      {
        "step": 2,
        "title": "Progetta la Logica sulla Tela",
        "description": "Collega i campi come nodi. Collega gli eventi di output (modifica, perdita di focus) alle azioni di destinazione (mostra, nascondi, calcola, disabilita)."
      },
      {
        "step": 3,
        "title": "Compila e Inietta",
        "description": "Inietta la logica JavaScript compilata nel dizionario PDF e salva il documento intelligente finale."
      }
    ],
    "useCases": [
      {
        "title": "Contratti Commerciali Intelligenti",
        "description": "Mostra o nascondi campi di inserimento supplementari in modo dinamico in base alle condizioni selezionate dal cliente.",
        "icon": "file-signature"
      },
      {
        "title": "Moduli Spese Automatizzati",
        "description": "Somma più righe di spesa e calcola le tasse in modo dinamico senza calcoli manuali.",
        "icon": "calculator"
      },
      {
        "title": "Questionari Interattivi",
        "description": "Salta domande irrilevanti in base alle risposte precedenti, offrendo un'esperienza di compilazione mobile più pulita.",
        "icon": "form-input"
      }
    ],
    "faq": [
      {
        "question": "Ho bisogno di un PDF con campi preesistenti?",
        "answer": "Sì. Questo strumento è progettato per associare regole logiche ai campi esistenti. Se il tuo PDF non ha campi interattivi, usa prima il nostro strumento Creatore di Moduli per aggiungere inserimenti e caselle di controllo."
      },
      {
        "question": "Questa logica funzionerà su qualsiasi lettore PDF?",
        "answer": "Funziona su tutti i lettori PDF conformi agli standard Adobe e che supportano Acrobat JavaScript (come Adobe Acrobat Reader, Foxit Reader e i principali browser web). I lettori mobili minimalisti potrebbero supportare solo azioni di base."
      },
      {
        "question": "Questo influisce sulla stampa su carta?",
        "answer": "Per niente. Gli script iniettati vengono eseguiti solo sullo schermo durante la compilazione del modulo. Al momento della stampa, lo stato attuale dei campi viene stampato in modo statico senza alcuna visualizzazione dei nodi."
      }
    ]
  },
  "global-invoice-parser": {
    "title": "Traduttore e Conversione Fatture",
    "metaDescription": "Estrai i totali in valuta dalle fatture multinazionali, esegui calcoli e applica timbri di tasso di cambio interattivi in stile glassmorphic.",
    "keywords": [
      "tradurre fattura",
      "convertitore valuta fattura",
      "calcolatrice tasso di cambio pdf",
      "timbro valuta locale",
      "strumento fattura globale"
    ],
    "description": "\n        <p>Il Traduttore di Fatture Globali offre la massima chiarezza per i team finanziari internazionali e gli acquirenti globali.</p>\n        <p>La gestione di fatture in più valute ($, €, ¥) comporta spesso una noiosa aritmetica manuale. Questo strumento consente la <strong>traduzione delle etichette sul posto e la conversione dei tassi di cambio in tempo real</strong>.</p>\n        <p>Scansiona il documento alla ricerca dei totali dei prezzi, esegue calcoli basati su valute di riferimento e applica fisicamente un elegante registro del tasso di cambio in stile glassmorphic semitrasparente nel margine della pagina. Viene visualizzato con uno splendido effetto visivo di cifre rotanti stile slot-machine, portando il controllo assoluto sulla fatturazione globale.</p>\n      ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica la Fattura PDF",
        "description": "Importa qualsiasi fattura emessa in valuta estera (ad esempio, USD, EUR, JPY)."
      },
      {
        "step": 2,
        "title": "Seleziona Valuta Locale",
        "description": "Scegli la tua valuta locale (ad esempio, EUR) e specifica un tasso di cambio personalizzato o in tempo reale."
      },
      {
        "step": 3,
        "title": "Applica il Timbro",
        "description": "Fare clic su Esegui per sovrapporre il registro del tasso di cambio pronto per la contabilità."
      }
    ],
    "useCases": [
      {
        "title": "Rimborso di Trasferte di Lavoro",
        "description": "Converti le fatture di viaggio nella valuta locale e applica il timbro con i dettagli di conversione, semplificando i flussi di lavoro contabili.",
        "icon": "plane"
      },
      {
        "title": "Verifica di Acquisti Transfrontalieri",
        "description": "Traduci le colonne delle fatture e individua il costo effettivo dei beni acquistati via e-commerce.",
        "icon": "credit-card"
      },
      {
        "title": "Contabilità Commerciale Internazionale",
        "description": "Applica timbri di conversione coerenti sulle fatture aziendali per ottimizzare gli audit di fine anno.",
        "icon": "folder-open"
      }
    ],
    "faq": [
      {
        "question": "Come rileva gli importi delle fatture?",
        "answer": "Scansiona il flusso di caratteri alla ricerca di simboli di valuta e analizza le intestazioni semantiche come \"Totale\" o \"Dovuto\" per individuare la somma finale della fattura."
      },
      {
        "question": "I tassi di cambio vengono recuperati in tempo reale?",
        "answer": "Sì. Per impostazione predefinita, recupera i tassi di base da API finanziarie standard. È anche possibile specificare tassi personalizzati per audit interni."
      },
      {
        "question": "Il timbro coprirà dettagli importanti della fattura?",
        "answer": "Il motore scansiona il margine della pagina per trovare il posizionamento ottimale. Il timbro è semitransparente, allineandosi in modo elegante con i tuoi layout."
      }
    ]
  },
  "pdf-to-cbz": {
    "title": "PDF in CBZ",
    "metaDescription": "Converti file PDF in archivi di fumetti CBZ. Mantiene l'ordine e la qualità delle immagini.",
    "keywords": [
      "pdf in cbz",
      "convertitore fumetti",
      "cbz pdf"
    ],
    "description": "\n      <p>PDF to CBZ is custom-engineered for comic enthusiasts and digital ebook archivists. It renders every page of your PDF volumes into high-fidelity rasterized graphics and compiles them into a standard Comic Book ZIP (.cbz) bundle.</p>\n      <p>To eliminate frustrating manual scraping in systems like Calibre, Komga, Kavita, or CDisplayEx, the processor automatically generates and injects both <strong>ComicInfo.xml</strong> and <strong>metadata.opf</strong> files internally, while simultaneously writing a standardized <strong>ComicBookInfo JSON</strong> payload directly into the ZIP file comment metadata.</p>\n      <p>Includes complete configuration sliders for image compression quality, page dimension scale, right-to-left layout reading toggles (Manga mode), and black-and-white grayscale color filtering.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload Comic PDF",
        "description": "Drag and drop your primary comic, artbook, or manga PDF file."
      },
      {
        "step": 2,
        "title": "Input Comic Metadata",
        "description": "Fill out Series, Volume, Title, Writer, and Publisher fields, and toggle layout or grayscale optimization."
      },
      {
        "step": 3,
        "title": "Compile and Download",
        "description": "Click Convert to compile and retrieve your metadata-rich .cbz file instantly ready for Calibre."
      }
    ],
    "useCases": [
      {
        "title": "Retrograde Comic Packaging",
        "description": "Transform raw scanned PDF books into compact, standard-compliant CBZ comic files easily scrapable by comic library managers.",
        "icon": "book"
      },
      {
        "title": "Zero-Effort Calibre Integration",
        "description": "The built-in metadata.opf schema allows Calibre to fetch and classify creators and volume issues without manual lookup.",
        "icon": "database"
      },
      {
        "title": "E-Ink Screen Enhancement",
        "description": "Pre-filter graphic color channels into high-contrast grayscale on compile, boosting visual refresh and clarity on E-ink screens while saving storage.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "What is a .cbz file?",
        "answer": "A CBZ file is a specialized archive container format for comic book series. It is internally formatted as a ZIP package containing sequentially numbered page images alongside structural metadata XML files."
      },
      {
        "question": "How is metadata compatible?",
        "answer": "We compile and embed ComicInfo.xml, metadata.opf, and ZIP File Comments in one pass. This guarantees absolute compliance across multiple comic and e-book ecosystems."
      },
      {
        "question": "Why use Grayscale mode?",
        "answer": "If you read on a grayscale E-ink reader (like Kindle or Kobo), compiling directly in Grayscale reduces artifact ghosting, delivers superior contrast levels, and shrinks the final CBZ file size."
      }
    ]
  },
  "overlay-pdf": {
    "title": "Sovrapponi PDF",
    "metaDescription": "Sovrapponi due pagine PDF in una sola. Ideale per timbri, sfondi e filigrane.",
    "keywords": [
      "sovrapponi pdf",
      "pdf overlay",
      "timbro pdf"
    ],
    "description": "\n      <p>Overlay PDF allows you to layer pages of one PDF document on top or underneath another PDF document. It is perfect for applying letterheads, adding background grids, stamping watermarks, or fusing layout drafts together.</p>\n      <p>Supports both Overlay mode (layer goes on top) and Underlay mode (layer goes underneath). Specify custom target page ranges or loop shorter overlay documents to cover the entire base file automatically.</p>\n      <p>All processing is executed entirely inside your web browser locally, guaranteeing total security and data privacy.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload Main PDF",
        "description": "Drag and drop your primary base PDF document."
      },
      {
        "step": 2,
        "title": "Upload Layer PDF",
        "description": "Provide the overlay/underlay document that acts as the layer."
      },
      {
        "step": 3,
        "title": "Configure Layering",
        "description": "Choose overlay or underlay mode, specify page ranges, and enable page looping."
      },
      {
        "step": 4,
        "title": "Compile and Download",
        "description": "Click Compile to process and download the layered result PDF."
      }
    ],
    "useCases": [
      {
        "title": "Corporate Letterheads",
        "description": "Layer invoice contents on top of standard company letterhead templates.",
        "icon": "file-text"
      },
      {
        "title": "Watermarks & Seals",
        "description": "Overlay security stamps, signature seals, or backgrounds across documents.",
        "icon": "shield"
      },
      {
        "title": "Drawing Blueprints",
        "description": "Combine draft architectures or layout grids underneath text blocks.",
        "icon": "layout"
      }
    ],
    "faq": [
      {
        "question": "What is the difference between Overlay and Underlay?",
        "answer": "Overlay places the secondary layer on top of your main content. Underlay places it at the very bottom, acting as a background template."
      },
      {
        "question": "Can I loop the overlay layer?",
        "answer": "Yes, if the layer PDF is shorter than the base document, enabling Loop will cycle it (e.g. page 1, 2, 1, 2) to cover all base pages."
      },
      {
        "question": "Is page range supported?",
        "answer": "Yes, you can target specific pages using range syntax such as \"1-5\", \"odd\", \"even\", or comma-separated lists."
      }
    ]
  },
  "timestamp-pdf": {
    "title": "Marca Temporale PDF",
    "metaDescription": "Applica una marca temporale sicura RFC 3161 ai documenti PDF per certificare la data e l'ora di creazione.",
    "keywords": [
      "marca temporale pdf",
      "rfc 3161",
      "certificazione temporale"
    ],
    "description": "\n      <p>Timestamp PDF adds RFC 3161 compliant trusted timestamps to your PDF documents using external Time Stamping Authorities (TSA). It provides legally-binding mathematical proof that a document existed in a specific, unaltered state at a precise instant in time.</p>\n      <p>Select from global trusted TSA servers such as DigiCert, Sectigo, SSL.com, FreeTSA, or MeSign. No personal signing certificates are required to secure your documents against future tampering.</p>\n      <p>Supports fully secure local hashing before handshake, guaranteeing absolute document contents remain 100% confidential.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload PDF Document",
        "description": "Select the target PDF file you want to timestamp."
      },
      {
        "step": 2,
        "title": "Select TSA Server",
        "description": "Choose a trusted global Time Stamping Authority from the list."
      },
      {
        "step": 3,
        "title": "Apply and Timestamp",
        "description": "Click Timestamp to fetch secure response from TSA and embed the token."
      }
    ],
    "useCases": [
      {
        "title": "Intellectual Property",
        "description": "Establish clear priority proof of patents, drafts, and ideas before public release.",
        "icon": "lightbulb"
      },
      {
        "title": "Financial Auditing",
        "description": "Provide certified tamper-proof logging of ledger archives and balance reports.",
        "icon": "activity"
      },
      {
        "title": "Legal Contracts",
        "description": "Lock legal agreements with a trusted time proof to avoid backdating arguments.",
        "icon": "file-check"
      }
    ],
    "faq": [
      {
        "question": "What is a trusted timestamp (RFC 3161)?",
        "answer": "An RFC 3161 timestamp is a cryptographically signed token issued by a recognized third-party authority (TSA) that links a document hash to a specific, verified clock source."
      },
      {
        "question": "Do I need a digital certificate?",
        "answer": "No, the cryptographic signature is provided directly by the trusted TSA server, making the process effortless for document owners."
      },
      {
        "question": "Does the TSA see my document contents?",
        "answer": "Never. The tool only sends a secure SHA-256 hash of your document to the TSA server, keeping your actual document completely private."
      }
    ]
  },
  "add-page-labels": {
    "title": "Aggiungi Etichette di Pagina",
    "metaDescription": "Imposta etichette di pagina personalizzate (es. I, II per la prefazione). Migliora la navigazione.",
    "keywords": [
      "etichette di pagina",
      "numerazione pagine pdf",
      "navigazione pdf"
    ],
    "description": "\n      <p>Add Page Labels allows you to inject custom page labeling metadata (/PageLabels) into your PDF's root Catalog dictionary. This customizes the labels displayed in professional PDF reader navigation sidebars and top page number jump panels (e.g. using Roman numerals for front matter, decimal sequences for main body, or custom prefixes such as A-0, A-1 for technical subsections).</p>\n      <p>Supports combining multiple custom rules seamlessly. Crucially, we've built a highly optimized <strong>disjoint-range slicing algorithm</strong>: even if you declare complex alternating patterns (e.g., odd pages style A, even pages style B), the tool will elegantly dissect and compose boundaries to ensure proper standard-compliant display without leaking formats into unmapped pages.</p>\n      <p>All operations are processed entirely inside your local browser sandbox, securing absolute data privacy.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload PDF Document",
        "description": "Provide the target PDF document you wish to label."
      },
      {
        "step": 2,
        "title": "Configure Labeling Rules",
        "description": "Add one or more rules specifying page ranges (e.g., \"1-5\", \"odd\", or comma-separated lists), prefix, style, and starting sequence."
      },
      {
        "step": 3,
        "title": "Preview and Download",
        "description": "Review the live page label list preview below, then compile and download your updated PDF document."
      }
    ],
    "useCases": [
      {
        "title": "Academic Thesis Formatting",
        "description": "Set lowercase Roman numerals (i, ii, iii) for introductory front matter and transition to decimal for main chapters.",
        "icon": "book"
      },
      {
        "title": "Engineering Blueprint Prefixes",
        "description": "Attach subsystem abbreviations (e.g., \"A-1\", \"M-5\") as page label prefixes, letting teams search and locate pages in seconds.",
        "icon": "layout"
      },
      {
        "title": "Custom Alternating Layouts",
        "description": "Apply highly specific page range indexing to odd/even sequences or non-contiguous sections with maximum freedom.",
        "icon": "shuffle"
      }
    ],
    "faq": [
      {
        "question": "What are page labels vs page numbers?",
        "answer": "Ordinary page numbers are visual text blocks rendered directly on the paper canvas (visible when printed). Page labels, however, are structural metadata injected into the PDF catalog. They control what is displayed underneath thumbnails and in the page lookup box inside software like Adobe Acrobat or Apple Preview."
      },
      {
        "question": "What happens if I leave the Page Range empty?",
        "answer": "Leaving the page range empty causes the rule to apply globally to all pages of the document."
      },
      {
        "question": "How are overlapping rules handled?",
        "answer": "Rules are evaluated sequentially in the order they are listed. If a page range of a later rule overlaps with an earlier one, the later rule takes priority and overrides the label for that page."
      }
    ]
  },
  "ai-pdf-reflower": {
    "title": "Riorganizzazione PDF con IA",
    "metaDescription": "Riorganizza il testo dei documenti PDF per dispositivi mobili. Supporta l'esportazione in Markdown ed EPUB.",
    "keywords": [
      "riflusso pdf",
      "pdf responsive",
      "pdf in markdown",
      "esportazione epub"
    ],
    "description": "\n      <p>AI PDF Layout Reflower is your ultimate companion for reading PDF documents on mobile devices. Traditional PDFs use a fixed layout, which often requires endless zooming and horizontal scrolling on smartphones or tablets, resulting in a tedious reading experience.</p>\n      <p>This tool intelligently parses the text flow, line spacing, and physical coordinates of the PDF pages, reconstructing the semantic paragraphs and heading hierarchies. For multi-column or dual-column documents, it intelligently merges column flows into a single responsive flow, ensuring smooth reading.</p>\n      <p>Additionally, it supports rendering mathematical formulas into LaTeX/MathJax and offers multiple reading themes (Sepia, Dark, Eye-protecting Green). You can export the reflowed layout as Markdown or a standard EPUB ebook with a single click.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload PDF File",
        "description": "Drag and drop your PDF file or click to browse and select it."
      },
      {
        "step": 2,
        "title": "Select Reading Theme",
        "description": "Choose your preferred font size and theme colors in the 3D mobile simulator on the right."
      },
      {
        "step": 3,
        "title": "Export Document",
        "description": "Once satisfied, use the physical pull-rope to export the document as Markdown or EPUB."
      }
    ],
    "useCases": [
      {
        "title": "Mobile Literature Reading",
        "description": "Read academic papers and research reports on your phone seamlessly without constant zooming.",
        "icon": "smartphone"
      },
      {
        "title": "Ebook Conversion",
        "description": "Convert text-heavy PDFs into EPUB files and import them into Kindle or other ebook readers.",
        "icon": "book"
      },
      {
        "title": "Note Archive",
        "description": "Directly convert structured PDF content into clean Markdown files for your personal knowledge base.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "Does it handle dual-column PDFs correctly?",
        "answer": "Yes, the layout reflower detects the horizontal coordinates of text blocks and structures left and right columns sequentially, preventing line interleaving."
      },
      {
        "question": "Will images and math formulas be lost?",
        "answer": "Mathematical formulas are converted to LaTeX/MathJax syntax for clean web rendering, and images are preserved in their corresponding semantic positions."
      },
      {
        "question": "Is the conversion done in the cloud?",
        "answer": "No, all layout analysis and format packaging are performed locally in your browser to guarantee the absolute privacy of your documents."
      }
    ]
  },
  "citation-linker": {
    "title": "Attivatore di Link di Citazione",
    "metaDescription": "Scansiona e attiva i riferimenti bibliografici nei PDF, convertendoli in link DOI cliccabili o salti interni.",
    "keywords": [
      "link citazioni",
      "collegamento pdf",
      "corrispondenza doi",
      "pdf accademico"
    ],
    "description": "\n      <p>Citation Linker is designed specifically for academic researchers. In many PDF papers, citation markers (e.g., [1], [2]) are plain text, forcing readers to scroll back and forth to the reference list at the end of the document, interrupting their focus.</p>\n      <p>This tool reads PDF text locally, uses pattern recognition to match citation markers to their corresponding reference entries, and overlays clickable PDF link annotations using DOI lookups or page-jump coordinates.</p>\n      <p>It also generates an interactive citation relationship map to visually navigate the document's reference network.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload Academic PDF",
        "description": "Upload a PDF paper or thesis containing a bibliography/reference section."
      },
      {
        "step": 2,
        "title": "Review Citations",
        "description": "Inspect the citation pairs in the interactive map and manually edit or add DOI links if necessary."
      },
      {
        "step": 3,
        "title": "Inject Links",
        "description": "Click the activate button to overlay hyperlinks onto the PDF and download the updated document."
      }
    ],
    "useCases": [
      {
        "title": "Deep Literature Reading",
        "description": "Click citation markers to immediately view reference details or navigate to external DOI pages.",
        "icon": "link"
      },
      {
        "title": "Pre-publication Preparation",
        "description": "Ensure your written academic papers have fully active hyperlink navigations before final submission.",
        "icon": "award"
      },
      {
        "title": "Reference Map Analysis",
        "description": "Understand literature hierarchies and connections via the interactive network topology map.",
        "icon": "git-network"
      }
    ],
    "faq": [
      {
        "question": "What if a reference has no DOI?",
        "answer": "If a DOI cannot be found, the tool falls back to an internal \"GoTo Page\" action, allowing you to click the marker and jump directly to the reference page."
      },
      {
        "question": "Which citation formats are supported?",
        "answer": "It supports common numeric brackets (e.g., [1], [1-3]) and author-year citations (e.g., Author et al., 202X)."
      },
      {
        "question": "Will it modify the appearance of my PDF?",
        "answer": "No, it injects invisible Link annotations on top of the text, preserving the original layout, fonts, and styling of your document."
      }
    ]
  },
  "vector-extractor": {
    "title": "Estrattore di Vettori PDF",
    "metaDescription": "Converti PDF in SVG ad alta fedeltà. Seleziona ed estrai grafiche vettoriali e loghi senza alcuna perdita di qualità.",
    "keywords": [
      "estrarre vettori pdf",
      "esportazione svg",
      "estrarre loghi",
      "grafica vettoriale"
    ],
    "description": "\n      <p>PDF Vector Extractor unlocks vector paths and artwork embedded inside PDF files. Easily extract vector charts, diagrams, or logos from documents for design work or printing.</p>\n      <p>Under the hood, it utilizes high-fidelity SVG rendering to deconstruct PDF vector paths into clean, standard SVG element trees without loss of precision.</p>\n      <p>The interface highlights hover elements with a Z-axis 3D layer explosion effect, complete with a color picker panel for designers to adjust and extract vector nodes.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload PDF Document",
        "description": "Upload a PDF containing vector assets, diagrams, charts, or logos."
      },
      {
        "step": 2,
        "title": "Select Elements",
        "description": "Hover over the vector canvas to highlight elements, then click to select a node."
      },
      {
        "step": 3,
        "title": "Customize and Export",
        "description": "Adjust path attributes in the panel, then download as SVG or copy SVG source code."
      }
    ],
    "useCases": [
      {
        "title": "Design Asset Extraction",
        "description": "Quickly extract company logos, icons, and illustrations from brand guidelines or brochures.",
        "icon": "bezier"
      },
      {
        "title": "Scientific Chart Export",
        "description": "Extract vector charts from research papers to use in high-resolution printing or presentations.",
        "icon": "presentation"
      },
      {
        "title": "Vector Asset Recoloring",
        "description": "Modify the stroke and fill colors of extracted assets before saving them for web projects.",
        "icon": "crown"
      }
    ],
    "faq": [
      {
        "question": "Why can't I select certain images?",
        "answer": "PDFs contain both raster images (like photos or scanned pages) and vector artwork (like shapes and curves). Only vector paths can be deconstructed into SVG paths."
      },
      {
        "question": "Does the output SVG contain styles?",
        "answer": "Yes, the exported SVG retains all original properties including fills, strokes, opacity, gradients, and coordinate transforms."
      },
      {
        "question": "Will large files lag?",
        "answer": "We use WebAssembly acceleration, but PDFs with extremely complex CAD drawings or thousands of vector paths may take a few seconds to render."
      }
    ]
  },
  "deep-sanitize": {
    "title": "Sanificazione Profonda dei Metadati",
    "metaDescription": "Rimuovi definitivamente autore, cronologia modifiche, livelli nascosti e oggetti orfani dal codice binario del PDF.",
    "keywords": [
      "sanificare pdf",
      "eliminare metadati",
      "privacy pdf",
      "sicurezza documento"
    ],
    "description": "\n      <p>Deep Metadata Sanitizer is your ultimate defense against metadata leaks and hidden tracking. Simply drawing black boxes over visible text in PDF files is not enough to protect commercial secrets.</p>\n      <p>This tool scans the PDF binary structure to completely erase author info, creator software, editing logs (XMP Metadata), proprietary PieceInfo caches, and OCG optional content groups (often used for invisible watermarks).</p>\n      <p>It also rewrites the cross-reference tables (xref) completely, discarding all incremental update blocks to ensure that deleted or modified historical data cannot be restored.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload PDF",
        "description": "Select the PDF file containing sensitive data or modification history."
      },
      {
        "step": 2,
        "title": "Run Scanner",
        "description": "Trigger the 3D containment scanner to check the file for hidden metadata and layers."
      },
      {
        "step": 3,
        "title": "Deep Sanitize",
        "description": "Click sanitize to wipe out tracking elements and download the fully clean PDF."
      }
    ],
    "useCases": [
      {
        "title": "Contract Sharing",
        "description": "Remove drafting records, paths, and previous revisions before sharing business contracts with third parties.",
        "icon": "file-signature"
      },
      {
        "title": "Anonymized Publishing",
        "description": "Wipe invisible annotations and watermarks to publish documents anonymously and securely.",
        "icon": "eye-off"
      },
      {
        "title": "PDF Optimization",
        "description": "Remove orphaned objects and garbage data streams to make files load faster on the web.",
        "icon": "zap"
      }
    ],
    "faq": [
      {
        "question": "How is this different from standard metadata removal?",
        "answer": "Standard tools only clear basic fields like title or author. Deep Sanitizer reconstructs the entire PDF xref table, wiping PieceInfo, hidden watermarks, and historical incremental revisions."
      },
      {
        "question": "Will this affect document layout or text?",
        "answer": "No, it only strips hidden description streams and structure data. The visible layout, texts, and graphics remain unchanged."
      },
      {
        "question": "Does this remove PDF passwords?",
        "answer": "No, if a PDF is encrypted, you must unlock it first before performing a deep sanitization."
      }
    ]
  },
  "booklet-folding-simulator": {
    "title": "Simulatore 3D di Piegatura e Imposizione",
    "metaDescription": "Disponi le pagine del PDF su grandi fogli macchina e simula il processo di piegatura e rilegatura in 3D.",
    "keywords": [
      "imposizione 3d",
      "piegatura carta",
      "rilegatura a punto metallico",
      "impaginazione"
    ],
    "description": "\n      <p>3D Booklet & Folding Simulator is an advanced tool designed for print designers and publishing professionals. Traditional book layout requires calculating complex page overlays and imposition pagination sequences. This tool visualizes and automates that entire process.</p>\n      <p>Under the hood, our custom imposition algorithm maps a sequential PDF page list into standard print sheet layouts (such as 4-page half-folds, 8-page saddle stitches, or accordion folds), merging pages onto the front and back of large physical sheets.</p>\n      <p>On the front-end, we utilize pure CSS 3D Matrix transforms and spring-mass physics curves to animate sheet folding horizontally and vertically, delivering a physical-like binding preview with a high WOW factor.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload PDF File",
        "description": "Drag and drop the PDF document you wish to layout for printing."
      },
      {
        "step": 2,
        "title": "Select Folding Layout",
        "description": "Choose your preferred imposition scheme (e.g., 4-page fold, 8-page saddle stitch, 4-page accordion)."
      },
      {
        "step": 3,
        "title": "Interactive 3D Preview",
        "description": "Drag the slider to watch the sheet fold in 3D and inspect the final page numbering layout."
      },
      {
        "step": 4,
        "title": "Generate Imposed PDF",
        "description": "Click generate to download the rearranged and merged physical sheet PDF, ready for double-sided printing."
      }
    ],
    "useCases": [
      {
        "title": "Brochure Prototyping",
        "description": "Pre-visualize the folding sequence of tri-folds and pamphlets to prevent upsidedown pages after printing.",
        "icon": "book-open"
      },
      {
        "title": "Book Saddle-Stitching",
        "description": "Generate imposed print sheets for multi-page magazines or booklets automatically.",
        "icon": "layers"
      },
      {
        "title": "Print Shop Visual Aids",
        "description": "Help clients visualize how pages are physically distributed and folded on print sheets.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "What is \"Imposition\"?",
        "answer": "Imposition is a fundamental step in prepress printing. Since commercial presses print on large sheets, pages are arranged out of order so that once printed, folded, and bound, the pages appear in the correct sequential order. This tool automatically calculates that layout."
      },
      {
        "question": "Does the 3D preview alter my PDF content?",
        "answer": "No, the original PDF content is merely rendered as texture mappings onto the 3D sheet. The generated PDF only adjusts page order and placement; text and graphic qualities are kept intact."
      },
      {
        "question": "What if my PDF page count is not a multiple of 4 or 8?",
        "answer": "The optimizer automatically appends blank pages at the end to satisfy the mathematical page-count requirements of the selected folding layout."
      }
    ]
  },
  "pdf-to-slide": {
    "title": "PDF a Presentazione",
    "metaDescription": "Analizza la struttura del PDF ed estrai schemi e grafici vettoriali in una presentazione PPTX modificabile.",
    "keywords": [
      "pdf in ppt",
      "creare diapositive",
      "convertitore pptx",
      "estrazione grafici"
    ],
    "description": "\n      <p>AI PDF-to-Slide Reconstructor breathes new life into static PDF documents, transforming them into modern, highly-customizable PowerPoint slides (PPTX).</p>\n      <p>The tool uses an advanced layout outline extractor that automatically parses document heading levels, paragraph lines, and font weights to establish a logical slide framework. It also isolates vector charts and high-resolution tables, stripping background artifacts to embed them cleanly as independent editable assets.</p>\n      <p>All PPTX outputs are built using standard Office Open XML elements, meaning all text remains fully editable and vectors do not lose resolution. The front-end showcases a fluid \"starfield\" card transition animation that visualizes the reconstruction in an engaging manner.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload Academic/Business PDF",
        "description": "Upload a PDF document that contains structured sections and diagrams."
      },
      {
        "step": 2,
        "title": "Analyze Slide Outlines",
        "description": "Inspect the extracted slide structure, adjust titles, or delete unneeded card blocks."
      },
      {
        "step": 3,
        "title": "Reconstruct to PPTX",
        "description": "Start the compilation engine to receive a standard, editable presentation file."
      }
    ],
    "useCases": [
      {
        "title": "Research Paper Presentation",
        "description": "Convert academic journal PDFs, text structures, and vector diagrams into slide decks ready for talks.",
        "icon": "graduation-cap"
      },
      {
        "title": "Business Report Summary",
        "description": "Distill massive annual corporate reports into clean, bulleted presentation drafts instantly.",
        "icon": "presentation"
      },
      {
        "title": "Multi-Device Demos",
        "description": "Avoid copying screenshots manually. Get a clean, fully-editable layout framework in seconds.",
        "icon": "laptop"
      }
    ],
    "faq": [
      {
        "question": "Are the slides editable in Microsoft Office?",
        "answer": "Yes. The files are generated natively in memory according to the official Office Open XML (OOXML) specification. Texts, tables, and placeholders are fully interactive in PowerPoint, Keynote, and WPS."
      },
      {
        "question": "How are charts extracted?",
        "answer": "The engine scans vector paths and raster layers in the PDF, detects bounded areas representing graphs, and clips them out as standalone SVG nodes or high-DPI images."
      },
      {
        "question": "Does this work on scanned documents?",
        "answer": "For scanned PDFs lacking actual text layers, we recommend running our OCR tool first before passing the file to the Slide Reconstructor."
      }
    ]
  },
  "eink-optimizer": {
    "title": "Ottimizzatore per e-Ink Reader",
    "metaDescription": "Ottimizza i PDF per schermi a inchiostro elettronico tramite eliminazione del rumore, binarizzazione Otsu e ispessimento del testo.",
    "keywords": [
      "ottimizzazione eink",
      "binarizzazione otsu",
      "ingrandire tratti",
      "lettura ereader"
    ],
    "description": "\n      <p>e-Ink Reader Optimizer is a must-have tool custom-made for e-Reader enthusiasts using Kindle, Onyx Boox, Kobo, or other e-paper devices.</p>\n      <p>Many scanned PDF e-books suffer from faint lettering, muddy gray backgrounds, noise, or scan shadows when viewed on e-Ink screens. This tool analyzes gray-value histograms and applies Otsu's Binarization Thresholding to separate text from background, converting gray backdrops to clean white.</p>\n      <p>Additionally, it integrates morphological dilation to bold and thicken thin, faded characters, providing crisp, high-contrast typography. The inertia-damped contrast slider allows you to fine-tune the paper-like contrast in real-time.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload Scanned PDF",
        "description": "Upload e-books or scanned documents with faint text or gray backgrounds."
      },
      {
        "step": 2,
        "title": "Adjust Contrast Slider",
        "description": "Drag the damped slider to balance background removal and character bolding in real-time."
      },
      {
        "step": 3,
        "title": "Optimize and Download",
        "description": "Process the entire PDF to generate a high-contrast, eye-friendly document tailored for e-Ink."
      }
    ],
    "useCases": [
      {
        "title": "Ancient Manuscript Restoration",
        "description": "Thicken faded text in scans of historical books or handwritten manuscripts to make them readable.",
        "icon": "scroll"
      },
      {
        "title": "Exam Sheet Clean-up",
        "description": "Bleach background shadows from photocopied or photographed exams, returning clean black text on white paper.",
        "icon": "file-text"
      },
      {
        "title": "E-paper Device Tailoring",
        "description": "Convert colored PDFs to optimized grayscale, preventing messy, dithering artifacts on monochrome screens.",
        "icon": "tablet"
      }
    ],
    "faq": [
      {
        "question": "How does the \"character bolding\" work?",
        "answer": "In image processing, this is called dilation. It uses a structuring matrix to expand character margins by a pixel, physically thickening faint strokes to make them legible."
      },
      {
        "question": "Will this process bloat the file size?",
        "answer": "Quite the opposite. By binarizing complex color/grayscale images to simple black-and-white layouts, standard compression (like CCITT Group 4) can shrink the PDF file size significantly."
      },
      {
        "question": "Does this support native text PDFs?",
        "answer": "Yes. Native vector PDFs are rasterized at high resolutions in the background, optimized, and compiled back, ensuring unified high-contrast reading."
      }
    ]
  },
  "cert-cryptor": {
    "title": "Cifra Certificato",
    "metaDescription": "Cifra i PDF con certificati a chiave pubblica e applica una firma PKCS#7 abbinata a un sigillo tridimensionale in ceralacca.",
    "keywords": [
      "cifratura certificati",
      "sigillo ceralacca 3d",
      "firma digitale",
      "pkcs7"
    ],
    "description": "\n      <p>3D Wax-Seal & Certificate Cryptor provides military-grade security and premium physical-grade aesthetics for sensitive corporate files, degrees, or agreements.</p>\n      <p>Technically, it offers asymmetric public-key encryption: import a recipient's public key certificate (.cer/.crt) to lock the PDF stream; only the holder of the matching private key (.pfx) can decrypt it. It also generates standard PKCS#7 digital signatures to ensure document tamper-proof integrity.</p>\n      <p>Visually, we feature a 3D physical gold or red wax-seal stamp. When you sign, a beautifully rendered stamp descends with a satisfying mechanical sound, leaving a 3D wax seal with realistic normal-mapped height variations and wax run-offs on the page, surrounded by glowing cryptographic tracks.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload PDF and Cert",
        "description": "Add your PDF and import your signing certificate (.pfx) or the recipient's public certificate (.cer)."
      },
      {
        "step": 2,
        "title": "Place the 3D Stamp",
        "description": "Drag and locate the seal on the document preview, and pick a wax style (e.g., gold, crimson)."
      },
      {
        "step": 3,
        "title": "Press and Sign",
        "description": "Click execute to watch the 3D wax-seal imprint ceremony, generating a physical-grade digital signature."
      },
      {
        "step": 4,
        "title": "Download Secured PDF",
        "description": "Save the output document, now cryptographically locked and stamped."
      }
    ],
    "useCases": [
      {
        "title": "Diplomas and Certificates",
        "description": "Affix highly-valued 3D wax seal badges to digital diplomas and awards, backed by genuine digital signatures.",
        "icon": "award"
      },
      {
        "title": "Confidential Agreements",
        "description": "Lock sensitive contracts using the client's public certificate so that only their secure physical keycard can unlock it.",
        "icon": "shield-alert"
      },
      {
        "title": "Official Press Releases",
        "description": "Digitally sign public announcements to prevent malicious text edits or spoofing.",
        "icon": "stamp"
      }
    ],
    "faq": [
      {
        "question": "Is the wax seal just an image or a real signature?",
        "answer": "Both. The system renders an incredibly realistic 3D wax imprint with normal-mapped depth (visual layer) and encodes an authentic, tamper-proof PKCS#7 cryptographic signature inside the PDF (data layer)."
      },
      {
        "question": "What is \"Certificate-based Encryption\"?",
        "answer": "It is a passwordless encryption technique. You encrypt the file using the recipient's public key. The reader automatically searches for their local private certificate to decrypt the file seamlessly, ensuring robust security."
      },
      {
        "question": "Can I customize the stamp design?",
        "answer": "Yes. We provide multiple designs like the PDFCraft watermark or a Royal crest, and you can adjust the wax melting radius and normal-map indentation depth in the panel."
      }
    ]
  },
  "passport-id-composer": {
    "title": "Copia ID Fronte Retro'Identità",
    "metaDescription": "Combina fronte e retro di carte d'identità o passaporti su una singola pagina A4 con filigrane antiradicali.",
    "keywords": [
      "copia carta identita",
      "fronte retro a4",
      "copia passaporto",
      "filigrana"
    ],
    "description": "\n      <p>The Passport & ID Double-sided Composer is an incredibly useful productivity utility for standard business and personal operations.</p>\n      <p>When applying for bank accounts, onboarding, or signing agreements, we frequently need copies of both sides of ID cards. This tool accepts front/back images or PDF pages and precisely arranges them onto a single A4 page complying with national standard layout resolutions.</p>\n      <p>Furthermore, you can customize overlapping translucent anti-counterfeit watermarks (e.g. \"FOR ONBOARDING ONLY\") to prevent unauthorized document reuse. It even features a 3D glow laser sweep copier scanner door visual effect to deliver premium feedback.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload ID files",
        "description": "Upload front and back photos/scans of your ID or passport (up to 2 files)."
      },
      {
        "step": 2,
        "title": "Configure secure watermark",
        "description": "Input custom text overlay to restrict unauthorized document replication."
      },
      {
        "step": 3,
        "title": "Compose & download",
        "description": "Click execute to generate a single-page print-ready A4 PDF."
      }
    ],
    "useCases": [
      {
        "title": "HR onboarding submission",
        "description": "Quickly align employee ID copies and apply protective watermarks.",
        "icon": "user"
      },
      {
        "title": "Government & banking service",
        "description": "Prepare standardized ID prints that meet physical archive requirements.",
        "icon": "landmark"
      },
      {
        "title": "Travel backups",
        "description": "Arrange passport pages and visa details onto a unified A4 paper.",
        "icon": "plane"
      }
    ],
    "faq": [
      {
        "question": "Will watermarks block identity text details?",
        "answer": "No. The watermark is rendered at a carefully tuned 15% opacity to block forgery without sacrificing the legibility of text or photo fields."
      },
      {
        "question": "Is the composite card size accurate?",
        "answer": "Yes. It renders the ID card at the standard physical dimension of 85.6mm × 54mm scaled perfectly on the A4 page."
      },
      {
        "question": "Does it support driver licenses?",
        "answer": "Yes, it works beautifully for any card-based identity scans."
      }
    ]
  },
  "annotation-exporter": {
    "title": "Esporta Annotazioni",
    "metaDescription": "Estrai evidenziature, note e commenti inseriti nei PDF in un comodo file di testo Markdown per lo studio.",
    "keywords": [
      "esportare annotazioni",
      "estrarre evidenziature",
      "note lettura",
      "markdown"
    ],
    "description": "\n      <p>The Smart Annotation Exporter is a powerful workspace that unlocks full value from your PDF annotations.</p>\n      <p>While conducting literature reviews or reading extensive ebooks, we make heavy use of highlights and sticky notes. This tool deserializes the low-level PDF <code>/Annots</code> dictionary and extracts all highlights, notes, underlines, and hand-drawn ink markers.</p>\n      <p>It automatically aligns the comments with their respective outline headers, generating a structured Markdown or JSON notebook with page reference anchors. Watch your highlights float beautifully into the frosted-glass notebook panel.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Import annotated PDF",
        "description": "Upload any PDF essay or book containing your underlines, highlights, or comments."
      },
      {
        "step": 2,
        "title": "Configure filters & format",
        "description": "Select the annotation types you want to extract and choose Markdown or JSON."
      },
      {
        "step": 3,
        "title": "Extract notebook",
        "description": "Click execute to parse the comments stream and assemble your outline summary."
      }
    ],
    "useCases": [
      {
        "title": "Scientific literature synthesis",
        "description": "Extract reading notes across multiple papers into Markdown templates to compose lit reviews instantly.",
        "icon": "graduation-cap"
      },
      {
        "title": "Study journal compiling",
        "description": "Collect beautiful insights and personal remarks from textbooks into Obsidian databases.",
        "icon": "book"
      },
      {
        "title": "Document collaborative audit",
        "description": "Gather review corrections from different team members and establish actionable task lists.",
        "icon": "users"
      }
    ],
    "faq": [
      {
        "question": "Can it extract tablet hand-drawn ink strokes?",
        "answer": "Yes. As long as the hand-drawn marks are stored as standard PDF Ink annotations, the tool can perfectly isolate and structure their page positions."
      },
      {
        "question": "Why are some highlighted extracts empty?",
        "answer": "If the PDF is a non-searchable image scan lacking underlying text, highlights only store coordinates. Run OCR on the PDF first, then extract annotations."
      },
      {
        "question": "Do the Markdown links jump back to the PDF?",
        "answer": "The exported file lists precise page numbers and original outline headings to make cross-referencing seamless."
      }
    ]
  },
  "batch-watermark-remover": {
    "title": "Rimuovi Filigrana",
    "metaDescription": "Analizza il flusso grafico del PDF e rimuovi in modo pulito filigrane di testo e immagini di sfondo (XObjects).",
    "keywords": [
      "rimuovere filigrana",
      "cancellare logo pdf",
      "pulizia documento"
    ],
    "description": "\n      <p>The Batch Watermark Remover is a state-of-the-art PDF sanitizer that physically cleanses documents.</p>\n      <p>Generic watermark removers usually just overlay white blocks or distort document spacing. This tool utilizes a robust <strong>Content Stream Purge</strong> technique.</p>\n      <p>It parses the low-level rendering operators of each page, identifies specific watermark string commands (e.g. \"Confidential\", \"DRAFT\") or background image objects, and physically deletes or overwrites them. The watermarks disappear completely, preserving the original formatting and vector quality.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload watermarked file",
        "description": "Provide the PDF document showing commercial logos or security labels."
      },
      {
        "step": 2,
        "title": "Define target watermark",
        "description": "Input the exact string to delete, or toggle translucent XObject image cleanup."
      },
      {
        "step": 3,
        "title": "Run physical purge",
        "description": "Click execute to scrub the content operators with high fidelity."
      }
    ],
    "useCases": [
      {
        "title": "Archiving corporate assets",
        "description": "Remove expired \"Confidential\" or \"Draft\" watermarks for general public distribution.",
        "icon": "archive"
      },
      {
        "title": "Clearing background clutter",
        "description": "Scrub heavy background pictures that distract readers from scanning text.",
        "icon": "eye"
      },
      {
        "title": "Document reusing",
        "description": "Cleanse old page footer branding elements to apply new corporate templates easily.",
        "icon": "copy"
      }
    ],
    "faq": [
      {
        "question": "Can the purged watermarks be recovered?",
        "answer": "No. Unlike visual masks, we rewrite the page binary stream to erase the operators, leaving no traces."
      },
      {
        "question": "Does it support complex gradients?",
        "answer": "If the watermark is stored as a separate text node or image XObject, the tool can isolate and physically wipe it."
      },
      {
        "question": "Will it modify normal page text?",
        "answer": "No. The scrubbing engine only target operators matching the specified watermark signature; regular text remains untouched."
      }
    ]
  },
  "smart-data-redactor": {
    "title": "Redigi Dati Sensibili",
    "metaDescription": "Rileva e censura in modo permanente e irreversibile email, numeri telefonici e codici fiscali all'interno del PDF.",
    "keywords": [
      "censurare pdf",
      "mascheramento dati",
      "anonymizzare pdf",
      "dati sensibili"
    ],
    "description": "\n      <p>The Smart Privacy Data Redactor is an automated tool designed to ensure robust document privacy compliance.</p>\n      <p>Simply overlaying black boxes in normal editors is unsafe because the underlying text can still be copied. This tool implements true <strong>NLP pattern matching and physical content stream sanitization</strong>.</p>\n      <p>It scans the document for emails, phone numbers, SSNs, or custom keywords, places a premium matte black mask over the coordinates, and permanently overwrites the character stream with <code>[REDACTED]</code>, blocking copy-paste leaks.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload target PDF",
        "description": "Provide the contract or statement showing sensitive customer details."
      },
      {
        "step": 2,
        "title": "Select redaction rules",
        "description": "Check target patterns (email, phone, ID) or define custom sensitive words."
      },
      {
        "step": 3,
        "title": "Auto redact & download",
        "description": "Click execute to overlay secure masks and wipe the text streams."
      }
    ],
    "useCases": [
      {
        "title": "Commercial agreements sharing",
        "description": "Safely publish business documents by hiding personal salaries, phone numbers, or emails.",
        "icon": "file-signature"
      },
      {
        "title": "Resume database anonymization",
        "description": "Strip applicant names, contact info, or addresses to comply with strict privacy regulations.",
        "icon": "user-check"
      },
      {
        "title": "Financial statement distribution",
        "description": "Conceal specific ledger numbers or shareholder names before publishing reports.",
        "icon": "pie-chart"
      }
    ],
    "faq": [
      {
        "question": "Are redacted details truly un-copyable?",
        "answer": "Yes. We rewrite the page content stream to erase the characters. Copy-pasting from the redacted box will only extract the string \"[REDACTED]\"."
      },
      {
        "question": "Does it work for scanned image PDFs?",
        "answer": "This tool targets vector text streams. For scanned image files, use our OCR tool first or crop manually."
      },
      {
        "question": "Is the red HUD target scope saved in the file?",
        "answer": "No, that is a gorgeous frontend interactive loading effect. The output PDF displays standard clean black rectangles."
      }
    ]
  },
  "bookmarks-auto-generator": {
    "title": "Genera Segnalibri",
    "metaDescription": "Analizza la dimensione del carattere e la gerarchia del testo per generare automaticamente un albero strutturato di segnalibri.",
    "keywords": [
      "segnalibri pdf",
      "albero navigazione",
      "indice strutturato"
    ],
    "description": "\n      <p>The Auto Bookmarks Generator brings absolute clarity to lengthy, unstructured PDF documents.</p>\n      <p>Scanning through books or booklets with no outline navigation is painful. This tool parses typographic hierarchies (such as font sizes and weights) along with regex rules (like \"Chapter 1\", \"Section 1.1\") to automatically deduce headings.</p>\n      <p>It then compiles and injects these headings directly into the PDF <code>/Outline</code> dictionary. Any standard viewer will then show a beautifully structured, multi-level navigation sidebar, backed by an interactive 3D outline tree preview.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Provide unstructured PDF",
        "description": "Upload large brochures, academic papers, or ebooks lacking a catalog sidebar."
      },
      {
        "step": 2,
        "title": "Tune heading rules",
        "description": "Configure strategies specifying minimum font size thresholds and match rules."
      },
      {
        "step": 3,
        "title": "Build and inject",
        "description": "Click execute to render the outline nodes and physically write the outline bookmarks."
      }
    ],
    "useCases": [
      {
        "title": "Technical manuals organizing",
        "description": "Auto compile multi-level chapters for standard guidelines, saving hours of manual indexing.",
        "icon": "tool"
      },
      {
        "title": "Thesis preparation",
        "description": "Inject clean nested bookmarks matching exact academic submission standards.",
        "icon": "graduation-cap"
      },
      {
        "title": "Ebook navigation optimization",
        "description": "Structure scanned text publications into readable chapters for tablets or mobile readers.",
        "icon": "tablet"
      }
    ],
    "faq": [
      {
        "question": "Can it match custom chapter formats?",
        "answer": "Yes. You can add custom regex patterns in the sidebar panel (e.g., `^Part\\s+\\w+`) to target unique layouts."
      },
      {
        "question": "Will this affect the visual page presentation?",
        "answer": "No. The tool only adds an internal structural bookmark catalog. The text and visual assets of the pages remain untouched."
      },
      {
        "question": "How many bookmark levels are supported?",
        "answer": "The tool supports deeply nested bookmark structures, allowing chapter, section, and subsection layouts."
      }
    ]
  },
  "batch-barcode-injector": {
    "title": "Inserisci Codici in Blocco",
    "metaDescription": "Inserisci codici a barre (Code128) e codici QR in coordinate specifiche su più pagine del PDF contemporaneamente.",
    "keywords": [
      "inserire qr code",
      "codice a barre pdf",
      "tracciabilità documenti"
    ],
    "description": "\n      <p>The Batch Barcode precision injector bridges digital asset tracking with physical document indexing.</p>\n      <p>In warehousing, contract review, or logistics, we often need to Stamp unique barcodes onto invoices or device cards. This tool makes it incredibly easy.</p>\n      <p>Generate highly readable QR codes or Code128 barcodes, and use our gorgeous aligning workspace with green laser guides to position them. A clean scan audio beep triggers on placement, providing highly premium feedback.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload document",
        "description": "Drag and drop single or multi-page PDFs representing agreements or shipping lists."
      },
      {
        "step": 2,
        "title": "Position barcode coordinates",
        "description": "Set code type, value, and drag the placement box to specify coordinates."
      },
      {
        "step": 3,
        "title": "Stamps and download",
        "description": "Click execute to render the code layer onto the targeted page indices."
      }
    ],
    "useCases": [
      {
        "title": "Contract validation tracing",
        "description": "Apply a unique QR code showing anti-counterfeit details onto the header of contracts.",
        "icon": "file-check"
      },
      {
        "title": "Shipping lists coding",
        "description": "Place Code128 barcodes at target spots for quick warehouse scanning gun validation.",
        "icon": "truck"
      },
      {
        "title": "Asset registration carding",
        "description": "Add inventory QR codes displaying maintenance specs onto physical equipment sheets.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Are the generated barcodes highly scannable?",
        "answer": "Yes. We embed lossless high-resolution PNG representations that remain sharp even when printed at very small dimensions."
      },
      {
        "question": "Can I inject unique values on each page?",
        "answer": "Currently, the batch run applies the same configured code onto all selected pages. Multi-valued excel import is planned in a future update."
      },
      {
        "question": "What does the `pt` coordinate represent?",
        "answer": "`pt` (Point) is the standard PDF physical unit (72 pt = 1 inch). A4 pages are represented as 595 × 842 pt."
      }
    ]
  },
  "signature-ink-optimizer": {
    "title": "Estrai Firme e Timbri",
    "metaDescription": "Estrai firme autografe e timbri da documenti scansionati, ripulendo lo sfondo per ottenere file PNG trasparenti.",
    "keywords": [
      "estrarre firma",
      "digitalizzare timbro",
      "sfondo trasparente png"
    ],
    "description": "\n      <p>The Signature & Stamp Chroma Ink Optimizer functions as a professional high-fidelity ink purifier.</p>\n      <p>Signatures or corporate seals captured on phones often suffer from yellow paper tint, uneven shadows, and page wrinkles. Pasting them directly onto contract PDFs looks amateur.</p>\n      <p>This tool separates the Alpha channel based on luminance and color space. It completely bleaches paper backgrounds while sharpening stamp red (Chroma Ink) and handwriting black. The result is a premium, transparent PNG stamp carrying genuine ink textures.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload seal photo",
        "description": "Provide a phone-captured photo of your signature or stamp seal."
      },
      {
        "step": 2,
        "title": "Adjust cleaning sliders",
        "description": "Move contrast and luminance sliders to isolate the background noise in real-time."
      },
      {
        "step": 3,
        "title": "Download clean signature",
        "description": "Export as transparent PNG ready to be stamped onto formal document agreements."
      }
    ],
    "useCases": [
      {
        "title": "Professional e-signature prep",
        "description": "Convert gray signature photos into beautiful, transparent layers to sign agreements.",
        "icon": "file-signature"
      },
      {
        "title": "Corporate seal sanitizing",
        "description": "Clean physical stamp scans by discarding paper fiber noise, preparing crisp transparent stamp seals.",
        "icon": "stamp"
      },
      {
        "title": "Drawn line art extraction",
        "description": "Isolate black strokes from drawing sketchbooks for easy Photoshop coloring workflows.",
        "icon": "edit"
      }
    ],
    "faq": [
      {
        "question": "How does self-adaptive Alpha extraction differ from normal keying?",
        "answer": "Standard chroma-keying often makes signature stroke details look blocky and pixelated. Our algorithm isolates only white/yellow background noise and smooths the ink borders."
      },
      {
        "question": "Which image formats are supported?",
        "answer": "We support JPG, JPEG, and PNG. For best results, capture your signature photo under bright, even lighting."
      },
      {
        "question": "Will the handwriting detail be modified?",
        "answer": "No. The pixel filtering acts on original coordinates, sharpening contrast while maintaining genuine stroke textures."
      }
    ]
  },
  "dead-link-debugger": {
    "title": "Ripara Link Interrotti",
    "metaDescription": "Scansiona i collegamenti esterni (/URI) nel PDF per individuare link non funzionanti e correggerli al volo.",
    "keywords": [
      "link rotti pdf",
      "correggere url pdf",
      "verifica collegamenti"
    ],
    "description": "\n      <p>The Dead Link Debugger is a deep structural editor that guarantees link interaction quality in published files.</p>\n      <p>Broken urls (404/500) inside manuals, whitepapers, or guides reduce branding authority. This tool lets you manage the hyperlinks database seamlessly.</p>\n      <p>It parses the low-level <code>/Link</code> dictionaries on each page, Probes them, and displays link status in an interactive grid (red for dead links, orange for redirects). Simply type the updated redirect URL, and the tool writes the new target directly back into the PDF binary stream.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Provide target document",
        "description": "Upload the PDF manual or catalog containing links to debug."
      },
      {
        "step": 2,
        "title": "Scan and update",
        "description": "Let the debugger extract all URL entities. Input new redirect URLs for broken items."
      },
      {
        "step": 3,
        "title": "Save redirect updates",
        "description": "Click execute to rewrite /URI actions and download the corrected PDF."
      }
    ],
    "useCases": [
      {
        "title": "Flyer broken links hotfix",
        "description": "Instantly correct wrong urls on published flyers without reopening original design editors.",
        "icon": "refresh-cw"
      },
      {
        "title": "Bibliography links verification",
        "description": "Verify academic bibliography links in reports, updating references to maintain authority.",
        "icon": "book"
      },
      {
        "title": "Corporate rebranding updates",
        "description": "Batch update old URLs across corporate PDFs when company domain names are changed.",
        "icon": "globe"
      }
    ],
    "faq": [
      {
        "question": "Why isn't link reachability fully checked online?",
        "answer": "Web browsers enforce strict CORS policies that block direct multi-origin link checking. Our tool lists the links clearly and lets you hot-fix them manually."
      },
      {
        "question": "Will this modify the visual text representation on the page?",
        "answer": "No. It only alters the underlying `/URI` navigation action. The visual link text remains unchanged."
      },
      {
        "question": "Does it support modifying internal page bookmarks?",
        "answer": "This tool handles external `/URI` hyperlinks. For internal layout navigation, use our interactive TOC tool."
      }
    ]
  },
  "interactive-toc-generator": {
    "title": "Genera Indice Interattivo",
    "metaDescription": "Aggiungi una pagina di indice interattivo cliccabile collegata alle sezioni, con pulsanti di ritorno all'indice (↩).",
    "keywords": [
      "indice interattivo",
      "creare sommario pdf",
      "indice con link"
    ],
    "description": "\n      <p>The Interactive TOC Builder introduces a revolutionary navigation experience to extensive PDFs.</p>\n      <p>Flipping through hundreds of pages in unstructured documents to locate target chapters is frustrating. This tool introduces <strong>Bidirectional TOC compilation</strong>.</p>\n      <p>It scans headers and generates an origami-inspired, premium Table of Contents page inserted right after the cover. In addition to creating clickable /GoTo links for each index row, it injects a tiny, elegant \"TOC ↩\" hovering anchor at the corner of each target chapter page. Readers can jump back and forth instantly, enjoying web-like navigation.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Provide PDF document",
        "description": "Upload a report, eBook, or proposal that needs an interactive catalog."
      },
      {
        "step": 2,
        "title": "Set TOC title & index",
        "description": "Customize the main title and choose the page index to insert the TOC page."
      },
      {
        "step": 3,
        "title": "Weave anchors & save",
        "description": "Click execute to compile the pages and write the dual-link navigation."
      }
    ],
    "useCases": [
      {
        "title": "Annual corporate report polishing",
        "description": "Inject a beautiful index page after the cover sheet to allow shareholders to jump between financial charts.",
        "icon": "file-bar"
      },
      {
        "title": "Thesis indexing",
        "description": "Fast compile standard indexes aligned with university formatting rules.",
        "icon": "bookmark"
      },
      {
        "title": "Operation manual navigation",
        "description": "Help handbook readers quickly jump from troubleshooting sheets back to the main TOC.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "How do the bidirectional anchors work?",
        "answer": "We create standard Link annotations on the TOC page targeting the respective pages; then we embed a link back to the TOC page on all target chapter sheets."
      },
      {
        "question": "Will inserting the TOC page break existing page numbers?",
        "answer": "No. The compiler accounts for the offset of the newly inserted TOC page, ensuring all target destinations align."
      },
      {
        "question": "Is the TOC page valid when printed physically?",
        "answer": "Yes. The generated TOC lists clean physical page numbers to guide paper readers while enabling clickable links on screen."
      }
    ]
  },
  "pdf-deskew-aligner": {
    "title": "Correzione Inclinazione Scansioni",
    "metaDescription": "Rileva automaticamente gli angoli di inclinazione nelle scansioni PDF e raddrizza le pagine a livello orizzontale.",
    "keywords": [
      "raddrizzare pdf",
      "correzione storto scansione",
      "allineamento fogli"
    ],
    "description": "\n      <p>The PDF Scan Aligner is a mandatory utility for sanitizing tilted digital assets and mobile snapshots.</p>\n      <p>Documents scanned via physical flatbeds or captured quickly with smartphones often carry subtle rotations. Tilted pages look highly unprofessional, hinder text readability, and cause margins to clip during printing.</p>\n      <p>This tool utilizes robust <strong>Radon Transform and Hough Line detection algorithms</strong> to scan gradients and text lines under 20ms. It precisely measures skew down to 0.01 degrees and performs pixel-level Canvas rotation, snapping your receipts, contracts, and booklets back into crisp geometric alignment.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Provide skew PDF",
        "description": "Upload any PDF sheet carrying rotated or poorly aligned scanned documents."
      },
      {
        "step": 2,
        "title": "Analyze and tweak",
        "description": "The engine auto-detects skew angle and draws aligning grids. Tweak angle manually if needed."
      },
      {
        "step": 3,
        "title": "Straighten & download",
        "description": "Click execute to swing pages through a smooth gyroscope transition and download aligned PDF."
      }
    ],
    "useCases": [
      {
        "title": "Receipt & Contract Archiving",
        "description": "Straighten quick hand-held mobile contract scans before saving them as formal digital PDF archives.",
        "icon": "file-text"
      },
      {
        "title": "Academic Book Digitizing",
        "description": "Sanitize microfilm book scans where text lines drift out of horizontal margins.",
        "icon": "book"
      },
      {
        "title": "Student Homework Grading",
        "description": "Correct homework snapshots taken by student phones, relaxing the eyes of grading teachers.",
        "icon": "edit-3"
      }
    ],
    "faq": [
      {
        "question": "How is document skew detected?",
        "answer": "We run high-speed Hough Line projections on text lines. Since formal prints have clear horizontal spacing patterns, finding the angle with the maximum variance isolates the rotation."
      },
      {
        "question": "Will this process crop away page edges?",
        "answer": "No. The engine calculates the rotated boundary and extends the Canvas using auto-padding, ensuring all margin text remains intact without cropping."
      },
      {
        "question": "Does it support documents filled with diagrams?",
        "answer": "Yes, as long as there is an underlying structure of lines or general paragraphs, our algorithms can accurately lock onto the principal reading angle."
      }
    ]
  },
  "pdf-two-column-reflower": {
    "title": "Riorganizza PDF a Due Colonne",
    "metaDescription": "Dividi layout a due colonne duplicando le pagine e restringendo il CropBox in un flusso di lettura a colonna singola.",
    "keywords": [
      "due colonne a una",
      "riflusso articoli",
      "split cropbox"
    ],
    "description": "\n      <p>The Academic Two-Column Reflower solves the most significant pain point of digital research: reading papers on standard mobile screens.</p>\n      <p>Double-column layouts (used by IEEE, ACM, Nature, and major reports) are designed for A4 paper. Navigating them on phone screens or Kindle devices requires constant zooming, dragging right, scrolling down, and panning back up. It breaks reading comprehension completely.</p>\n      <p>Our processor implements a <strong>smart paragraph reflow and vertical partition barrier scan</strong>. It analyzes character coordinates to map double-column gutters, divides the layout, and weaves segments vertically (left column first, then right). Graphs, formulas, and headings are seamlessly rearranged into a single-column, flowable vertical scroll PDF.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload double-column PDF",
        "description": "Provide the IEEE/ACM journal report or multi-column PDF sheet."
      },
      {
        "step": 2,
        "title": "Inspect partition gutter",
        "description": "Verify the red vertical partition slice guides. Adjust margins to prevent overlapping elements."
      },
      {
        "step": 3,
        "title": "Reflow and save",
        "description": "Click execute to compile the pages into flowable layouts and download instantly."
      }
    ],
    "useCases": [
      {
        "title": "e-Reader Book Import",
        "description": "Convert dense double-column essays into comfortable single-column documents matching Kindle and Onyx screens.",
        "icon": "tablet"
      },
      {
        "title": "Subway Phone Reading",
        "description": "Read research literature comfortably with single-hand vertical swipe gestures during transit.",
        "icon": "smartphone"
      },
      {
        "title": "Archival Journal Formatting",
        "description": "Modernize old narrow-column newspapers into readable, single-column web formats.",
        "icon": "book-open"
      }
    ],
    "faq": [
      {
        "question": "How are broad charts and equations handled?",
        "answer": "Our engine applies \"span element detection.\" When an equation or diagram exceeds normal column widths, it is isolated as a full-width item, maintaining original proportions without clipping."
      },
      {
        "question": "Will this modify the vector text resolution?",
        "answer": "Not at all. We rewrite PDF text object transform matrices at the object tree level instead of rasterizing, meaning text remains 100% vector and fully selectable."
      },
      {
        "question": "Does this work on scanned image documents?",
        "answer": "For flat image-based PDFs, we highly recommend running our OCR tool first before executing the Reflow process."
      }
    ]
  },
  "pdf-page-resizer-uniform": {
    "title": "Uniforma Dimensioni Pagine",
    "metaDescription": "Scala le pagine del PDF di dimensioni diverse centrandole e adattandole in modo uniforme a un formato di destinazione.",
    "keywords": [
      "uniformare pagine",
      "ridimensionare pdf a4",
      "centrare pagine pdf"
    ],
    "description": "\n      <p>The Multi-Format PDF Resizer is the ultimate standardizer for cluttered, mismatched corporate documents.</p>\n      <p>Combining invoices, contracts, and supplementary charts often results in a PDF containing massive A3 ledger pages, standard A4 agreements, and Letter-sized envelopes. Flipping through them is highly distracting, and sending them to physical office printers often causes jam errors due to size mismatch.</p>\n      <p>This tool rewrites the low-level <code>/MediaBox</code> and <code>/CropBox</code> grids on each page. It maps existing widths and heights, scales original pages proportionally to match target presets (e.g. standard A4), and introduces elegant, consistent surrounding margins, making the entire file look incredibly polished.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Provide mixed-size PDF",
        "description": "Upload a merged PDF document containing mismatched, messy page sizes."
      },
      {
        "step": 2,
        "title": "Choose target preset",
        "description": "Select the target uniform size (e.g. A4, Letter, A3) and toggle scale modes."
      },
      {
        "step": 3,
        "title": "Align and download",
        "description": "Click execute to trigger 3D sheet alignment, downloading a beautifully standardized PDF."
      }
    ],
    "useCases": [
      {
        "title": "Corporate RFP Proposals",
        "description": "Standardize scanned qualification certificates and A4 bidding sheets before physical printing.",
        "icon": "file-text"
      },
      {
        "title": "Financial Chart Integration",
        "description": "Scale broad A3 financial cash flows into neat A4 pages, preserving printing standards.",
        "icon": "layout"
      },
      {
        "title": "Book Margin Standardization",
        "description": "Force slightly varied scanned book pages into an absolutely uniform dimension for comfortable reading.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "Will this warp my content?",
        "answer": "Never. We support both \"Contain\" (proportional scaling with white bars) and \"Cover\" (centered crop). The default Contain mode preserves aspect ratios, preventing distortion."
      },
      {
        "question": "Will existing forms and annotations remain clickable?",
        "answer": "Yes. The algorithm maps the scaling factors to the Annotation coordinate arrays, scaling link boxes, sign boundaries, and inputs to align perfectly after resizing."
      },
      {
        "question": "Is there a limit on how many pages I can resize?",
        "answer": "No. Since all operations run locally in your client sandbox using native JavaScript, you can process extensive PDFs containing hundreds of pages in seconds."
      }
    ]
  },
  "handwriting-ink-contrast-booster": {
    "title": "Migliora Contrasto Scrittura",
    "metaDescription": "Ripulisci sfondi ingialliti o in ombra ed evidenzia il tratto di penne blu/nere e timbri rossi autografi.",
    "keywords": [
      "contrastare firme",
      "sbiancare foglio scansione",
      "inchiostro nitido"
    ],
    "description": "\n      <p>The Handwriting Ink Contrast Booster is a savior for digitizing signed agreements and historical manuscript archives.</p>\n      <p>Scans of hand-signed documents often look dull due to grey scanner glass reflection, yellow paper tint, or faded ink. Re-printing or photocopying these files results in blurry, illegible signatures. Traditional contrast tools darken the entire background, worsening the layout.</p>\n      <p>This tool utilizes **Contrast Limited Adaptive Histogram Equalization (CLAHE) and hue-based color separation**. In a secure local Canvas process, it isolates handwriting strokes (both black and blue) from background parchment, bleaches shadow wrinkles completely, and infuses faded inks with deep, saturated contrast, leaving your documents looking incredibly crisp and clean.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Import hand-signed document",
        "description": "Provide a PDF containing faded signatures, handwritten diaries, or sketches."
      },
      {
        "step": 2,
        "title": "Configure ink filter",
        "description": "Select the color profile to isolate (e.g. blue ink, black ink, or both) and adjust sharpening."
      },
      {
        "step": 3,
        "title": "Sharpen and download",
        "description": "Click execute to trace colors with a radar scanner effect and download purified PDF."
      }
    ],
    "useCases": [
      {
        "title": "Executed Contracts Repair",
        "description": "Repair poorly scanned agreements, sharpening signatures and bleaching paper background to A4-pure white.",
        "icon": "file-check"
      },
      {
        "title": "Handwritten Manuscripts Archive",
        "description": "Digitize written journals or diaries, extracting clear black strokes while erasing age-related stains.",
        "icon": "book"
      },
      {
        "title": "Historical Ledger Restoration",
        "description": "Restore faint ink details on aged archival ledgers, rescuing valuable handwritten coordinates.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "How does this differ from normal grayscale conversion?",
        "answer": "Grayscale converts paper shadows into gray values. Our adaptive algorithm separates background luminance and isolates signature \"ink spectrums,\" purifying the backdrop to absolute white while leaving stroke edges sharp."
      },
      {
        "question": "Will I lose handwriting stroke texture?",
        "answer": "No. The CLAHE algorithm works on a sub-pixel level, preserving natural pen-stroke pressure, ink fading, and dynamic line weights."
      },
      {
        "question": "Can I keep red corporate stamp marks?",
        "answer": "Yes. By enabling \"Chroma Ink Preservation,\" the booster whitens paper background and darkens writing, while maintaining the bright colors of red seals and blue ink signatures."
      }
    ]
  },
  "pdf-spine-bookbinder": {
    "title": "Calcola Spessore Dorso",
    "metaDescription": "Calcola lo spessore del dorso in millimetri in base alle pagine e alla grammatura della carta, e genera la copertina PDF.",
    "keywords": [
      "calcolo dorso libro",
      "rilegatura brossura",
      "copertina con pieghe"
    ],
    "description": "\n      <p>The PDF Spine Bookbinder is a pre-press savior for designers, self-publishing authors, and commercial bidding teams.</p>\n      <p>When compiling thick book catalogs, bidding proposals, or annual directories, perfect binding (glue binding) requires a cover with precise spine coordinates. If the spine width is off by even 1mm, the bound cover will warp, shift, or crease. Calculating page counts against paper weight is complex and error-prone.</p>\n      <p>This tool utilizes a <strong>physically modeled GSM paper-to-thickness library</strong>. Simply input your PDF page count and select paper stock (e.g. 80 GSM offset, 100 GSM glossy). The engine calculates spine width down to micrometers and compiles a print-ready, extra-wide cover PDF complete with standard front/back flaps and precise fold mark creases.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Set pages & stock type",
        "description": "Input document page count and select the target paper stock specifications."
      },
      {
        "step": 2,
        "title": "Input spine text",
        "description": "Enter book titles, author details, and customize spine/cover backgrounds."
      },
      {
        "step": 3,
        "title": "3D Preview & Export",
        "description": "Spin and inspect your book cover in an interactive 3D binder. Export high-resolution vector PDF."
      }
    ],
    "useCases": [
      {
        "title": "Thick Bidding Proposals",
        "description": "Design professional cover sheets with precise spine crease alignments for thick tender bids.",
        "icon": "layers"
      },
      {
        "title": "Thesis Hardcover Binding",
        "description": "Map out perfect spine layout widths for university master/doctorate degree theses.",
        "icon": "award"
      },
      {
        "title": "Self-Publishing Novel Covers",
        "description": "Calculate book spine width easily before submitting files to Print-on-Demand publishing services.",
        "icon": "book-open"
      }
    ],
    "faq": [
      {
        "question": "How accurate is the GSM paper-thickness calculation?",
        "answer": "Highly accurate. Our physics library matches industry averages (e.g. 70 GSM = 0.09mm, 80 GSM = 0.10mm, 150 GSM glossy = 0.125mm). We also include a \"Double-sided printing\" toggle to halve calculations automatically."
      },
      {
        "question": "Are the exported covers ready for direct printing?",
        "answer": "Yes. The files are vector-perfect PDFs carrying standard registration marks, color bars, and spine guides, fully compliant with offset and digital commercial presses."
      },
      {
        "question": "Can I upload a background image spanning the spine?",
        "answer": "Yes. You can upload custom layouts, and our compositor will wrap and align the graphics across the spine folds automatically."
      }
    ]
  },
  "pdf-signature-anchor-helper": {
    "title": "Guida Posizionamento Firma",
    "metaDescription": "Inserisci etichette visuali di invito alla firma e link di scorrimento rapido nei punti in cui è richiesta la firma.",
    "keywords": [
      "ancoraggio firma",
      "invito alla firma",
      "navigazione contratti"
    ],
    "description": "\n      <p>The PDF Signature Guide Injector guarantees clean, error-free signing workflows for multi-page agreements.</p>\n      <p>When sending multi-page NDA agreements, financial statements, or commercial leases, clients often miss critical signing boxes, requiring endless back-and-forth email loops and delayed business transactions.</p>\n      <p>Our tool uses <strong>natural regex semantic mapping</strong>. It scans the PDF character map to locate terms like <code>Signature:</code>, <code>签字：</code>, <code>Witness:</code>, or <code>签署日期：</code>. It then leverages <code>pdf-lib</code> to inject standard PDF interactive Link annotations. When opened in any standard reader, clients see blinking, neon-bordered arrows that instantly guide them to the correct boxes, making signing foolproof.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Import business contract",
        "description": "Upload the PDF contract or NDA that needs signature coordinates."
      },
      {
        "step": 2,
        "title": "Auto-scan signature slots",
        "description": "Inspect the automatically located signing boxes, and manually add custom sign points if needed."
      },
      {
        "step": 3,
        "title": "Inject anchors & save",
        "description": "Click execute to write the interactive pointer layers into the PDF structure."
      }
    ],
    "useCases": [
      {
        "title": "Corporate NDA Agreements",
        "description": "Inject clear, flashing guides next to sign blocks to prevent onboarding employees from missing clauses.",
        "icon": "file-text"
      },
      {
        "title": "Commercial Lease Contracts",
        "description": "Guide multiple co-signers through multi-page real estate documents with custom-colored tabs.",
        "icon": "users"
      },
      {
        "title": "Procurement PO Signatures",
        "description": "Overlay interactive pointers on invoices and purchase orders to accelerate accounting approval loops.",
        "icon": "briefcase"
      }
    ],
    "faq": [
      {
        "question": "Will these guides appear when I print the contract?",
        "answer": "No. The anchors are injected with the standard PDF `Printable` flag set to false. They display beautifully on computer/tablet screens but remain completely invisible when printed."
      },
      {
        "question": "Can clients jump between signature fields easily?",
        "answer": "Yes. We weave bidirectional internal anchors. Clients can click the \"Sign Guide\" bookmark to automatically jump to the next empty signature slot instantly."
      },
      {
        "question": "Does this work on scanned image documents?",
        "answer": "Yes. Besides looking up text streams, our spatial layout parser estimates signature lines based on horizontal rules and bounding boxes on scanned sheets."
      }
    ]
  },
  "pdf-lossless-slicer": {
    "title": "Ritaglio Planimetrie senza Perdite",
    "metaDescription": "Ritaglia porzioni di disegni CAD o grandi mappe modificando i confini di MediaBox e CropBox in modo vettoriale nativo.",
    "keywords": [
      "ritagliare planimetrie",
      "ritaglio vettoriale",
      "cropbox disegni"
    ],
    "description": "\n      <p>The PDF Lossless Drawing Slicer is a high-precision, surgical tool built for architects, engineers, and map detailers.</p>\n      <p>When extracting a specific pump room or chip core from a massive CAD engineering blueprint or geographic map PDF, traditional screenshots result in pixelated, blurry text. Normal cropping tools simply place a mask over the sheet, meaning the massive 100MB file remains huge, and hidden content can still be extracted.</p>\n      <p>This tool edits the page <code>/MediaBox</code>, <code>/CropBox</code>, and <code>/BleedBox</code> matrices at the object tree level. It physically isolates vector nodes outside the selected region, keeping the target area 100% vector-perfect (allowing infinite zoom magnification) while purging redundant off-screen paths and images to shrink the file size by 95%!</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Import large blueprint",
        "description": "Upload the vector-rich CAD, GIS map, or high-resolution catalog PDF."
      },
      {
        "step": 2,
        "title": "Draw cutting box",
        "description": "Drag and scale the green laser-line crop box to target the local region you want to slice."
      },
      {
        "step": 3,
        "title": "Trigger laser crop",
        "description": "Click execute to trigger our low-level object slicer and download the tiny, lossless PDF."
      }
    ],
    "useCases": [
      {
        "title": "CAD Blueprint Isolation",
        "description": "Slice out a \"cooling system\" detail from a massive 100MB floor plan blueprint to share with sub-contractors.",
        "icon": "crop"
      },
      {
        "title": "GIS Map Snipping",
        "description": "Extract a lossless, vector-clear block of a city street map for a presentation slide without resolution loss.",
        "icon": "map"
      },
      {
        "title": "Manual Illustration Tracing",
        "description": "Lossless isolate scientific book figures to embed into high-quality academic papers.",
        "icon": "image"
      }
    ],
    "faq": [
      {
        "question": "How is this different from standard cropping?",
        "answer": "Standard cropping merely adjusts visual bounds; the hidden vectors remain in the file. Our slicer trims overlapping vector paths and purges out-of-bounds XObject images, ensuring complete data isolation and maximum file compression."
      },
      {
        "question": "Will text layers remain searchable?",
        "answer": "Yes. Any text characters that fall inside the sliced boundary remain fully vector-clear, searchable, and selectable."
      },
      {
        "question": "Can I export sliced regions to SVG?",
        "answer": "The output is a standardized vector PDF. You can pass the resulting file to our PDF-to-SVG tool to convert it to a web-scalable vector graphics format."
      }
    ]
  },
  "pdf-scratchpad-canvas": {
    "title": "Quaderno Appunti Quadricolato",
    "metaDescription": "Estende la larghezza o l'altezza del PDF ricucendo al bordo uno spazio di scrittura quadrettato o a righe.",
    "keywords": [
      "estendere foglio pdf",
      "bordo appunti",
      "quaderno a quadretti"
    ],
    "description": "\n      <p>The PDF Scratchpad Margin Extender is an essential study companion tailored for students, researchers, and professional exam candidates.</p>\n      <p>When solving practice test papers, reviewing slides, or reading academic textbooks on digital tablets, page margins are incredibly tight. Opening a separate notes app forces you to toggle screens constantly, breaking focus. Adding flat blank sheets prevents you from viewing the problem and your calculation side-by-side.</p>\n      <p>This tool rewrites page width or height dimensions in the low-level PDF structure, expanding <code>/MediaBox</code> margins by 200~250 pt on the right or bottom. It then overlays clean grid lines, college-ruled notebook lines, or Cornell layouts in the new margins, giving you dedicated, adjacent draft boards next to every single slide or question!</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Upload lecture slides",
        "description": "Provide the PDF textbook, slides, or study papers."
      },
      {
        "step": 2,
        "title": "Choose margin & grid style",
        "description": "Pick margin expansion direction (e.g. right side for tablets) and select the grid template."
      },
      {
        "step": 3,
        "title": "Stitch canvas & download",
        "description": "Click execute to generate expanded pages complete with beautiful draft grids."
      }
    ],
    "useCases": [
      {
        "title": "STEM Exam Preparation",
        "description": "Stitch grid margins next to math and physics exam questions, solving derivations right next to the question.",
        "icon": "edit-3"
      },
      {
        "title": "Language Reading Analysis",
        "description": "Add ruled notebook margins next to foreign language essays for vocabulary analysis and paragraph translation.",
        "icon": "book"
      },
      {
        "title": "Architectural Blueprint Audit",
        "description": "Add empty margin spaces on the side of blueprints for engineering calculations and client review comments.",
        "icon": "columns"
      }
    ],
    "faq": [
      {
        "question": "Will this squish my original PDF text?",
        "answer": "Not at all. The algorithm expands the paper dimension outwards. The original content retains its layout, fonts, and resolution; we simply stretch the white space on the borders and draw grids on them."
      },
      {
        "question": "Can standard hand-writing pens write in the scratchpad?",
        "answer": "Yes. The new PDF pages are compiled natively. Popular tablet note-taking applications like Goodnotes, Notability, Xodo, and Acrobat can write, highlight, and doodle directly in the new grid space."
      },
      {
        "question": "Are grid lines dark and distracting?",
        "answer": "We curated three subtle, eye-friendly colors (soft blue-gray, warm brown, and glowing green). The lines are thin and gentle, serving as guides without distracting you from the original page content."
      }
    ]
  },
  "photo-tiling-prepress": {
    "title": "Impaginazione Foto Tessera",
    "metaDescription": "Dispone una singola fototessera in una griglia ordinata su formati standard da 5\" o 6\", con crocini di taglio.",
    "keywords": [
      "fototessera stampa",
      "impaginazione foto",
      "crocini di taglio"
    ],
    "description": "\n      <p>The Prepress Photo Tiling tool is a cost-effective, high-precision layout compiler built for personal registration cards and photography studios.</p>\n      <p>Printing passport photos, ID photos, or driver licenses at home often results in incorrect physical dimensions (often printed too large or too small), wasted photo paper, and uneven alignments. Going to professional print shops to get layouts made is time-consuming.</p>\n      <p>Our tool integrates a <strong>precision prepress matrix engine</strong>. It accepts portrait photographs or ID card scans, crops them to standard dimensions (e.g. 1\" or 2\" passport specs), calculates optimal tile counts for standard photo papers (e.g. 5\" or 6\" sheets), and injects crisp, micro-pixel crop lines for easy physical cutting, generating a perfect printable PDF.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Import passport photo",
        "description": "Upload the camera portrait snapshot or double-sided ID card images."
      },
      {
        "step": 2,
        "title": "Configure paper & layout",
        "description": "Select the target print paper size (e.g. 6\") and choose the grid layouts (e.g. 8 copies of 1\" photos)."
      },
      {
        "step": 3,
        "title": "Tile and export",
        "description": "Inspect photo tiles on our grid, and export the high-DPI printable PDF."
      }
    ],
    "useCases": [
      {
        "title": "Self-Service Passport Photos",
        "description": "Arrange your mobile-shot passport portraits onto a single 6\" photo paper grid, and print 8 copies for a fraction of standard studio costs.",
        "icon": "user"
      },
      {
        "title": "ID Card Double-sided Copy",
        "description": "Format front and back scans of national ID cards neatly on standard Letter/A4 sheets for official submissions.",
        "icon": "file-text"
      },
      {
        "title": "Batch Photo Thumbnail Sheets",
        "description": "Tile multiple family memories or design snapshots onto a grid paper to print thumbnail contact sheets efficiently.",
        "icon": "grid"
      }
    ],
    "faq": [
      {
        "question": "Will the printed dimensions match official 1\" or 2\" specs?",
        "answer": "Yes. The grid engine measures using standard PDF points (72 pt = 1 inch), rendering 1\" photos exactly at 25x35mm, and 2\" photos at 35x49mm. Ensure you print at \"Actual Size / 100% Scale\" in your printer settings."
      },
      {
        "question": "Can I combine 1\" and 2\" photos on a single sheet?",
        "answer": "Yes. We provide curated hybrid layout presets (e.g. \"4 copies of 1\" + 4 copies of 2\"\"), allowing you to maximize photo paper space."
      },
      {
        "question": "Does the template include border bleeds?",
        "answer": "Yes. The prepress layouts reserve a standard 4mm print-safe margin on the paper borders, preventing physical printer rollers from cropping the photos."
      }
    ]
  },
  "find-and-redact": {
    "title": "Trova e Oscura",
    "metaDescription": "Cerca e oscura testo in tutte le pagine di un PDF. Oscura in blocco informazioni sensibili come numeri di conto, nomi e altro.",
    "keywords": [
      "oscurare pdf",
      "trova e oscura",
      "oscuramento batch pdf",
      "rimuovere testo pdf",
      "censura pdf",
      "nascondere dati sensibili"
    ],
    "description": "\n      <p>Trova e Oscura ti consente di cercare testo, numeri o pattern specifici in tutte le pagine del tuo PDF e oscurare tutte le corrispondenze trovate in una sola volta. Perfetto per rimuovere informazioni riservate come numeri di conto, nomi, indirizzi o qualsiasi dato sensibile.</p>\n      <p>Visualizza in anteprima tutte le corrispondenze prima di applicare l'oscuramento e seleziona quali occorrenze oscurare. Supporta la ricerca con distinzione tra maiuscole e minuscole, la corrispondenza di parole intere e le espressioni regolari per il pattern matching avanzato.</p>\n      <p>Tutta l'elaborazione avviene localmente nel tuo browser, garantendo che i tuoi documenti rimangano privati e sicuri.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Carica il tuo PDF",
        "description": "Trascina e rilascia il tuo file PDF o fai clic per selezionarlo."
      },
      {
        "step": 2,
        "title": "Cerca il testo",
        "description": "Inserisci il testo, il numero o l'espressione regolare (regex) che desideri trovare e oscurare."
      },
      {
        "step": 3,
        "title": "Verifica e seleziona",
        "description": "Visualizza l'anteprima di tutte le corrispondenze e seleziona quali oscurare."
      },
      {
        "step": 4,
        "title": "Applica l'oscuramento",
        "description": "Personalizza l'aspetto dell'oscuramento e applicalo alle corrispondenze selezionate."
      }
    ],
    "useCases": [
      {
        "title": "Conformità alla privacy",
        "description": "Oscura le informazioni personali per essere conforme al GDPR, HIPAA o ad altre normative.",
        "icon": "shield"
      },
      {
        "title": "Documenti legali",
        "description": "Rimuovi i dati riservati dai documenti legali prima di condividerli.",
        "icon": "scale"
      },
      {
        "title": "Registri finanziari",
        "description": "Oscura numeri di conto, codici fiscali o dati finanziari dagli estratti conto.",
        "icon": "credit-card"
      }
    ],
    "faq": [
      {
        "question": "L'oscuramento è permanente?",
        "answer": "Sì, l'oscuramento rimuove in modo permanente il testo sottostante. Il contenuto originale non può essere recuperato. Conserva sempre una copia di backup del file originale."
      },
      {
        "question": "Posso oscurare immagini o testo scansionato?",
        "answer": "Questo strumento funziona con PDF basati su testo. Per i documenti scansionati, è necessario utilizzare l'oscuramento manuale basato sull'area."
      },
      {
        "question": "Posso personalizzare l'aspetto dell'oscuramento?",
        "answer": "Sì, puoi impostare il colore dell'oscuramento, aggiungere bordi e facoltativamente includere un testo di sostituzione come \"[CENSURATO]\" o \"[OSCURATO]\"."
      },
      {
        "question": "Come funziona la ricerca con espressioni regolari (regex)?",
        "answer": "Abilita \"Usa espressione regolare\" per cercare utilizzando pattern regex. Ad esempio, \\d{4}-\\d{4}-\\d{4}-\\d{4} per trovare i numeri di carta di credito."
      }
    ]
  }
};
