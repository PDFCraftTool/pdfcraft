/**
 * Deutsche Tool-Inhalte für SEO
 * Enthält detaillierte Beschreibungen, Anleitungen, Anwendungsfälle und FAQs für alle Tools
 */

import { ToolContent } from '@/types/tool';
import { toolContentEn } from './en';

/**
 * Deutsche Tool-Inhalts-Map
 * Jedes Tool enthält: title, metaDescription, keywords, description, howToUse, useCases, faq
 */
export const toolContentDe: Record<string, ToolContent> = {
  "pdf-multi-tool": {
    "title": "PDF Multi-Tool",
    "metaDescription": "All-in-One PDF-Editor: PDF zusammenfügen, teilen, organisieren, Seiten löschen, drehen und extrahieren in einem Tool.",
    "keywords": [
      "pdf multi tool",
      "pdf editor deutsch",
      "pdf zusammenfügen",
      "pdf teilen",
      "pdf organisieren",
      "alles in einem pdf"
    ],
    "description": "\n      <p>Das PDF Multi-Tool ist Ihre Komplettlösung für alle Aufgaben der PDF-Seitenverwaltung. Dieses leistungsstarke All-in-One-Tool kombiniert mehrere PDF-Operationen in einer intuitiven Benutzeroberfläche und spart Ihnen Zeit und Mühe.</p>\n      <p>Ob Sie mehrere Dokumente zusammenfügen, ein großes PDF in kleinere Dateien aufteilen, Seiten neu organisieren, unerwünschte Inhalte löschen, Seiten drehen oder bestimmte Abschnitte extrahieren müssen – dieses Tool erledigt alles, ohne dass Sie zwischen verschiedenen Anwendungen wechseln müssen.</p>\n      <p>Die gesamte Verarbeitung findet direkt in Ihrem Browser statt, was die Privatsphäre und Sicherheit Ihrer Dokumente gewährleistet. Es werden keine Dateien auf einen Server hochgeladen.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Ziehen Sie Ihre PDF-Datei per Drag & Drop in den Upload-Bereich oder klicken Sie, um Dateien von Ihrem Gerät auszuwählen."
      },
      {
        "step": 2,
        "title": "Operation wählen",
        "description": "Wählen Sie aus den verfügbaren Operationen: Zusammenfügen, Teilen, Organisieren, Seiten löschen, Drehen oder Extrahieren."
      },
      {
        "step": 3,
        "title": "Optionen konfigurieren",
        "description": "Passen Sie die spezifischen Einstellungen an, wie z. B. Seitenbereiche, Drehwinkel oder die Reihenfolge beim Zusammenfügen."
      },
      {
        "step": 4,
        "title": "Verarbeiten und Herunterladen",
        "description": "Klicken Sie auf die Schaltfläche zum Verarbeiten und laden Sie Ihre modifizierte PDF-Datei herunter."
      }
    ],
    "useCases": [
      {
        "title": "Dokumentenvorbereitung",
        "description": "Bereiten Sie Unterlagen für die Einreichung vor, indem Sie unnötige Seiten entfernen und mehrere Dateien kombinieren.",
        "icon": "file-check"
      },
      {
        "title": "Berichtserstellung",
        "description": "Fügen Sie verschiedene Berichtsabschnitte zusammen und organisieren Sie Kapitel zu einem professionellen Gesamtdokument.",
        "icon": "book-open"
      },
      {
        "title": "Archivverwaltung",
        "description": "Teilen Sie große Archivdateien in handliche Abschnitte auf und extrahieren Sie relevante Seiten.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Wie viele PDFs kann ich gleichzeitig verarbeiten?",
        "answer": "Sie können bis zu 10 PDF-Dateien gleichzeitig hochladen und verarbeiten, mit einer maximalen Gesamtgröße von 500 MB."
      },
      {
        "question": "Bleiben meine Lesezeichen erhalten?",
        "answer": "Ja, beim Zusammenfügen von PDFs bleiben vorhandene Lesezeichen erhalten und können optional in einer einheitlichen Struktur kombiniert werden."
      },
      {
        "question": "Gibt es ein Seitenlimit?",
        "answer": "Es gibt kein striktes Seitenlimit. Das Tool kann Dokumente mit hunderten von Seiten verarbeiten, wobei sehr große Dateien etwas länger dauern können."
      }
    ]
  },
  "merge-pdf": {
    "title": "PDF zusammenfügen",
    "metaDescription": "Kombinieren Sie mehrere PDF-Dateien zu einem Dokument. Kostenloser Online-PDF-Merger mit Drag-and-Drop-Sortierung.",
    "keywords": [
      "pdf zusammenfügen",
      "pdf kombinieren",
      "pdf verbinden",
      "pdf merger deutsch"
    ],
    "description": "\n      <p>Mit \"PDF zusammenfügen\" können Sie mehrere PDF-Dokumente schnell und einfach zu einer einzigen Datei kombinieren. Ob Sie Berichte konsolidieren, gescannte Dokumente verbinden oder eine Präsentation zusammenstellen – dieses Tool macht den Prozess nahtlos.</p>\n      <p>Laden Sie einfach Ihre Dateien hoch, ordnen Sie sie per Drag & Drop in der gewünschten Reihenfolge an und fügen Sie sie zusammen. Das Tool bewahrt die Qualität Ihrer Originaldateien.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Dateien hochladen",
        "description": "Ziehen Sie mehrere PDF-Dateien in den Bereich oder wählen Sie sie manuell aus."
      },
      {
        "step": 2,
        "title": "Reihenfolge anordnen",
        "description": "Verschieben Sie die Miniaturansichten, um die gewünschte Abfolge festzulegen."
      },
      {
        "step": 3,
        "title": "Zusammenfügen",
        "description": "Klicken Sie auf \"Zusammenfügen\" und laden Sie das fertige Dokument herunter."
      }
    ],
    "useCases": [
      {
        "title": "Berichte kombinieren",
        "description": "Fügen Sie Monats- oder Quartalsberichte zu einem Jahresdokument zusammen.",
        "icon": "file-text"
      },
      {
        "title": "Portfolios erstellen",
        "description": "Kombinieren Sie Arbeitsproben, Zertifikate und Anschreiben zu einem professionellen Portfolio.",
        "icon": "briefcase"
      },
      {
        "title": "Rechnungen bündeln",
        "description": "Fassen Sie mehrere Belege oder Rechnungen für die Buchhaltung in einer Datei zusammen.",
        "icon": "receipt"
      }
    ],
    "faq": [
      {
        "question": "Wie viele PDFs kann ich verbinden?",
        "answer": "Sie können bis zu 100 PDF-Dateien auf einmal mit einer Gesamtgröße von bis zu 500 MB zusammenfügen."
      },
      {
        "question": "Bleibt die Qualität erhalten?",
        "answer": "Ja, der Prozess erfolgt ohne Qualitätsverlust oder zusätzliche Kompression."
      },
      {
        "question": "Kann ich passwortgeschützte PDFs zusammenfügen?",
        "answer": "Diese müssen zuerst entschlüsselt werden. Nutzen Sie dafür unser Tool \"PDF entschlüsseln\"."
      }
    ]
  },
  "rotate-custom": {
    "title": "Eigener Drehwinkel",
    "metaDescription": "PDF-Seiten um jeden beliebigen Winkel drehen. Präzise Ausrichtung für schief gescannte Dokumente.",
    "keywords": [
      "pdf drehen winkel",
      "pdf begradigen",
      "pdf schief gescannt",
      "pdf rotation"
    ],
    "description": "\n      <p>Dieses Tool gibt Ihnen präzise Kontrolle über die Ausrichtung Ihrer PDF-Seiten. Im Gegensatz zu Standard-Tools, die nur 90-Grad-Schritte unterstützen, können Sie hier jeden spezifischen Winkel eingeben.</p>\n      <p>Ideal zum Begradigen von Dokumenten, die schräg eingezogen wurden, oder zum Anpassen von technischen Zeichnungen.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Laden Sie die PDF-Datei hoch, deren Seiten gedreht werden müssen."
      },
      {
        "step": 2,
        "title": "Winkel einstellen",
        "description": "Geben Sie den exakten Grad für die Drehung ein."
      },
      {
        "step": 3,
        "title": "Vorschau und Download",
        "description": "Prüfen Sie die Ausrichtung in der Echtzeit-Vorschau und speichern Sie das Ergebnis."
      }
    ],
    "useCases": [
      {
        "title": "Gescannte Dokumente",
        "description": "Begradigen Sie Seiten, die schräg durch den Scanner gelaufen sind.",
        "icon": "scan"
      },
      {
        "title": "Technische Zeichnungen",
        "description": "Passen Sie die Ausrichtung von Plänen präzise an.",
        "icon": "ruler"
      },
      {
        "title": "Kreative Layouts",
        "description": "Erstellen Sie künstlerische Layouts durch individuelle Drehung.",
        "icon": "pen-tool"
      }
    ],
    "faq": [
      {
        "question": "Sind Dezimalzahlen möglich?",
        "answer": "Aktuell unterstützen wir ganzzahlige Gradangaben, arbeiten aber an einer Unterstützung für Dezimalstellen."
      },
      {
        "question": "Wird der Inhalt abgeschnitten?",
        "answer": "Nein, die Seitengröße wird automatisch angepasst, damit der gedrehte Inhalt vollständig sichtbar bleibt."
      },
      {
        "question": "Kann ich nur eine einzelne Seite drehen?",
        "answer": "Ja, Sie können für jede Seite einen individuellen Winkel festlegen."
      }
    ]
  },
  "grid-combine": {
    "title": "Rasterkombination PDF",
    "metaDescription": "Kombinieren Sie mehrere PDF-Dateien auf einzelnen Seiten mit einem flexiblen Rasterlayout. Ordnen Sie 2, 4, 6, 9 oder mehr PDFs pro Seite mit Rändern und Abständen an.",
    "keywords": [
      "raster kombinieren",
      "pdf raster zusammenführen",
      "pdf collage",
      "mehrere pdfs eine seite",
      "pdf n-up",
      "pdf raster"
    ],
    "description": "\n      <p>Das Rasterkombinations-Tool bietet eine einzigartige Möglichkeit, mehrere separate PDF-Dateien auf einzelnen Seiten zusammenzuführen. Im Gegensatz zum Standard-Tool \"PDF zusammenführen\", das einfach Seiten anhängt, oder dem \"N-Up\"-Tool, das Seiten aus einem einzelnen Dokument neu anordnet, nimmt Rasterkombination mehrere Eingabedateien und ordnet sie nebeneinander in einem anpassbaren Rasterlayout an.</p>\n      <p>Sie können aus verschiedenen Rasterkonfigurationen wie 2x1, 2x2, 3x3 usw. wählen. Dies ist perfekt für den Vergleich mehrerer Dokumente, das Erstellen von Handzetteln aus verschiedenen Quellen oder das Drucken kompakter Versionen mehrerer Dateien.</p>\n      <p>Passen Sie die Ausgabe an, indem Sie Seitengröße, Ausrichtung, Ränder, Abstände und Rahmen steuern. Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser für maximale Privatsphäre.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF-Dateien hochladen",
        "description": "Laden Sie zwei oder mehr PDF-Dateien hoch, die Sie kombinieren möchten. Sie können sie in der gewünschten Reihenfolge neu anordnen."
      },
      {
        "step": 2,
        "title": "Rasterlayout wählen",
        "description": "Wählen Sie Ihr gewünschtes Rasterlayout (z.B. 2x2 für 4 Dateien pro Seite, 3x3 für 9 Dateien pro Seite)."
      },
      {
        "step": 3,
        "title": "Aussehen anpassen",
        "description": "Passen Sie Einstellungen wie Seitengröße (A4, Letter), Ausrichtung, Abstand zwischen Elementen und Ränder an."
      },
      {
        "step": 4,
        "title": "Kombinieren und herunterladen",
        "description": "Klicken Sie auf \"PDFs kombinieren\", um Ihr neues Rasterlayout-Dokument zu generieren und das Ergebnis herunterzuladen."
      }
    ],
    "useCases": [
      {
        "title": "Visueller Vergleich",
        "description": "Platzieren Sie verschiedene Versionen eines Designs oder Dokuments nebeneinander auf einer einzelnen Seite für einen einfachen Vergleich.",
        "icon": "layout-grid"
      },
      {
        "title": "Handzettel drucken",
        "description": "Kombinieren Sie mehrere kurze Dokumente oder Folien auf einem Blatt Papier, um Druckkosten zu sparen.",
        "icon": "printer"
      },
      {
        "title": "Portfolio-Erstellung",
        "description": "Präsentieren Sie mehrere Projektdateien in einer sauberen, organisierten Rasterübersicht.",
        "icon": "image"
      }
    ],
    "faq": [
      {
        "question": "Wie unterscheidet sich das von N-Up?",
        "answer": "N-Up nimmt Seiten aus EINEM PDF und setzt sie auf ein Blatt. Rasterkombination nimmt MEHRERE VERSCHIEDENE PDF-Dateien und setzt sie auf ein Blatt."
      },
      {
        "question": "Wie viele Dateien kann ich kombinieren?",
        "answer": "Sie können je nach Browserspeicher bis zu 100 Dateien kombinieren, aber Layouts wie 4x4 bieten Platz für bis zu 16 Dateien pro Seite."
      },
      {
        "question": "Kann ich Ränder hinzufügen?",
        "answer": "Ja, Sie können Ränder um jede PDF-Datei hinzufügen und die Rahmenfarbe anpassen."
      }
    ]
  },
  "split-pdf": {
    "title": "PDF teilen",
    "metaDescription": "PDF-Dateien in mehrere Dokumente aufteilen. Extrahieren Sie einzelne Seiten oder teilen Sie nach Bereichen.",
    "keywords": [
      "pdf teilen",
      "pdf trennen",
      "pdf seiten extrahieren",
      "pdf splitter deutsch"
    ],
    "description": "\n      <p>Mit \"PDF teilen\" können Sie ein einzelnes PDF in mehrere kleinere Dateien aufteilen. Perfekt, um Kapitel zu extrahieren oder kombinierte Dokumente wieder zu trennen.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Wählen Sie das PDF aus, das Sie aufteilen möchten."
      },
      {
        "step": 2,
        "title": "Methode wählen",
        "description": "Wählen Sie zwischen Seitenbereichen, Einzel-Extraktion oder Aufteilung in festen Intervallen."
      },
      {
        "step": 3,
        "title": "Teilen und Speichern",
        "description": "Klicken Sie auf \"Teilen\" und laden Sie die Ergebnisse (ggf. als ZIP) herunter."
      }
    ],
    "useCases": [
      {
        "title": "Kapitel extrahieren",
        "description": "Teilen Sie ein Buch in einzelne Kapitel auf.",
        "icon": "book"
      },
      {
        "title": "Sammelscans trennen",
        "description": "Trennen Sie einen Stapelscan in die ursprünglichen Einzeldokumente.",
        "icon": "copy"
      },
      {
        "title": "Handouts erstellen",
        "description": "Extrahieren Sie nur die relevanten Folien einer Präsentation.",
        "icon": "presentation"
      }
    ],
    "faq": [
      {
        "question": "Kann ich das PDF in jede einzelne Seite zerlegen?",
        "answer": "Ja, wählen Sie die Option \"Jede Seite einzeln speichern\"."
      },
      {
        "question": "Bleiben Lesezeichen erhalten?",
        "answer": "Lesezeichen, die auf die extrahierten Seiten verweisen, bleiben in der neuen Datei bestehen."
      },
      {
        "question": "Wie erhalte ich die Dateien?",
        "answer": "Bei mehreren Dateien werden diese bequem in einem ZIP-Archiv zusammengefasst."
      }
    ]
  },
  "compress-pdf": {
    "title": "PDF komprimieren",
    "metaDescription": "PDF-Dateigröße reduzieren bei gleichbleibender Qualität. Online-PDF-Kompressor für kleinere Dateien.",
    "keywords": [
      "pdf komprimieren",
      "pdf verkleinern",
      "pdf größe reduzieren",
      "pdf optimieren"
    ],
    "description": "\n      <p>Dieses Tool reduziert die Dateigröße Ihrer PDFs, ideal für E-Mail-Anhänge oder Web-Uploads. Sie können zwischen verschiedenen Kompressionsstufen wählen.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Wählen Sie die Datei aus, die verkleinert werden soll."
      },
      {
        "step": 2,
        "title": "Stufe wählen",
        "description": "Wählen Sie: Niedrig (Beste Qualität), Mittel (Ausbalanciert) oder Hoch (Kleinste Datei)."
      },
      {
        "step": 3,
        "title": "Komprimieren",
        "description": "Starten Sie den Vorgang und laden Sie die optimierte PDF herunter."
      }
    ],
    "useCases": [
      {
        "title": "E-Mail-Anhänge",
        "description": "Unterschreiten Sie Größenlimits von Mail-Anbietern.",
        "icon": "mail"
      },
      {
        "title": "Web-Veröffentlichung",
        "description": "Schnellere Ladezeiten für Dokumente auf Ihrer Website.",
        "icon": "globe"
      },
      {
        "title": "Speicherplatz sparen",
        "description": "Archivieren Sie Dokumente platzsparend auf Ihrer Festplatte.",
        "icon": "hard-drive"
      }
    ],
    "faq": [
      {
        "question": "Wie stark wird die Datei verkleinert?",
        "answer": "Das hängt vom Inhalt ab. Bilder können oft um 50-80% verkleinert werden, reiner Text weniger."
      },
      {
        "question": "Leidet die Textqualität?",
        "answer": "Nein, Text bleibt scharf. Die Kompression wirkt sich primär auf Bilder und Grafiken aus."
      },
      {
        "question": "Ist die Nutzung sicher?",
        "answer": "Ja, die Kompression erfolgt lokal in Ihrem Browser; Ihre Daten verlassen Ihr Gerät nicht."
      }
    ]
  },
  "edit-pdf": {
    "title": "PDF bearbeiten",
    "metaDescription": "PDF-Dateien online bearbeiten. Text, Bilder, Anmerkungen und Formen hinzufügen.",
    "keywords": [
      "pdf bearbeiten",
      "pdf editor online",
      "pdf beschriften",
      "text in pdf einfügen"
    ],
    "description": "\n      <p>Unser PDF-Editor bietet Ihnen Werkzeuge zum Ändern und Kommentieren Ihrer Dokumente – ganz ohne teure Software. Fügen Sie Text, Bilder, Formen und Markierungen hinzu.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Wählen Sie das zu bearbeitende Dokument aus."
      },
      {
        "step": 2,
        "title": "Werkzeug wählen",
        "description": "Nutzen Sie die Toolbar für Text, Highlights, Formen oder Bilder."
      },
      {
        "step": 3,
        "title": "Änderungen vornehmen",
        "description": "Platzieren und gestalten Sie die Elemente direkt auf dem PDF."
      },
      {
        "step": 4,
        "title": "Speichern",
        "description": "Laden Sie die bearbeitete Version herunter."
      }
    ],
    "useCases": [
      {
        "title": "Dokumentenprüfung",
        "description": "Kommentieren und markieren Sie Entwürfe im Team.",
        "icon": "message-square"
      },
      {
        "title": "Formulare ausfüllen",
        "description": "Beschriften Sie PDFs und fügen Sie Unterschriften hinzu.",
        "icon": "edit-3"
      },
      {
        "title": "Schwärzen",
        "description": "Überdecken Sie sensible Informationen vor der Weitergabe.",
        "icon": "eye-off"
      }
    ],
    "faq": [
      {
        "question": "Kann ich den Originaltext löschen?",
        "answer": "Dieses Tool dient primär dem Hinzufügen von Inhalten. Zum direkten Löschen von Originaltext ist oft das Quelldokument (z.B. Word) nötig."
      },
      {
        "question": "Sind die Änderungen dauerhaft?",
        "answer": "Ja, nach dem Speichern werden die Anmerkungen fest in die PDF-Ebenen integriert."
      },
      {
        "question": "Gibt es eine Rückgängig-Funktion?",
        "answer": "Ja, während der Bearbeitung können Sie Schritte jederzeit rückgängig machen."
      }
    ]
  },
  "jpg-to-pdf": {
    "title": "JPG in PDF",
    "metaDescription": "Konvertieren Sie JPG-Bilder in PDF. Mehrere JPG-Dateien zu einem PDF-Dokument zusammenfassen.",
    "keywords": [
      "jpg in pdf",
      "jpeg in pdf",
      "bilder in pdf umwandeln",
      "foto zu pdf"
    ],
    "description": "\n      <p>Wandeln Sie Ihre JPEG-Bilder schnell in PDF-Dokumente um. Sie können einzelne Fotos oder ganze Bildserien konvertieren und die Seitenreihenfolge anpassen.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Bilder hochladen",
        "description": "Wählen Sie eine oder mehrere JPG-Dateien aus."
      },
      {
        "step": 2,
        "title": "Anordnen",
        "description": "Bringen Sie die Bilder per Drag & Drop in die richtige Reihenfolge."
      },
      {
        "step": 3,
        "title": "Konvertieren",
        "description": "Erstellen Sie das PDF und laden Sie es herunter."
      }
    ],
    "useCases": [
      {
        "title": "Fotoalben",
        "description": "Erstellen Sie ein PDF-Album aus Urlaubs- oder Eventfotos.",
        "icon": "image"
      },
      {
        "title": "Belege digitalisieren",
        "description": "Wandeln Sie Handyfotos von Quittungen in saubere PDFs um.",
        "icon": "camera"
      },
      {
        "title": "Portfolio",
        "description": "Fassen Sie Design-Arbeiten in einem kompakten Dokument zusammen.",
        "icon": "folder"
      }
    ],
    "faq": [
      {
        "question": "Wie viele Bilder sind möglich?",
        "answer": "Sie können bis zu 100 Bilder in ein einzelnes PDF umwandeln."
      },
      {
        "question": "Bleibt die Bildqualität hoch?",
        "answer": "Ja, die Bilder werden in ihrer Originalqualität eingebettet."
      },
      {
        "question": "Kann ich die Seitengröße wählen?",
        "answer": "Ja, Sie können zwischen Originalgröße, A4 oder US-Letter wählen."
      }
    ]
  },
  "sign-pdf": {
    "title": "PDF unterschreiben",
    "metaDescription": "Elektronische Unterschriften zu PDF-Dokumenten hinzufügen. Zeichnen, tippen oder Signatur hochladen.",
    "keywords": [
      "pdf unterschreiben",
      "elektronische signatur",
      "e-signatur",
      "pdf signieren online"
    ],
    "description": "\n      <p>Fügen Sie Ihre Unterschrift sicher und schnell zu PDFs hinzu. Zeichnen Sie Ihre Signatur mit der Maus/Touchpad, tippen Sie sie ein oder laden Sie ein Bild Ihrer Unterschrift hoch.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Wählen Sie das zu unterzeichnende Dokument."
      },
      {
        "step": 2,
        "title": "Signatur erstellen",
        "description": "Zeichnen, tippen oder laden Sie Ihre Unterschrift hoch. Sie können auch ein Foto einer auf Papier geschriebenen Unterschrift scannen."
      },
      {
        "step": 3,
        "title": "Platzieren",
        "description": "Klicken Sie an die Stelle im PDF, an der die Signatur erscheinen soll."
      }
    ],
    "useCases": [
      {
        "title": "Verträge signieren",
        "description": "Unterschreiben Sie Verträge ohne lästiges Drucken und Scannen.",
        "icon": "file-signature"
      },
      {
        "title": "Formulare",
        "description": "Bestätigen Sie Anträge oder Einverständniserklärungen digital.",
        "icon": "clipboard"
      },
      {
        "title": "Freigabeprozesse",
        "description": "Geben Sie Dokumente im beruflichen Umfeld schnell frei.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "Ist die Signatur rechtsgültig?",
        "answer": "In den meisten Ländern sind elektronische Signaturen für Standardverträge rechtlich bindend. Für notarielle Dokumente gelten Sonderregeln."
      },
      {
        "question": "Wird meine Signatur gespeichert?",
        "answer": "Sie können sie optional lokal im Browser speichern, um sie beim nächsten Mal direkt wiederzuverwenden."
      },
      {
        "question": "Kann ich mehrere Stellen signieren?",
        "answer": "Ja, Sie können die Signatur beliebig oft auf verschiedenen Seiten platzieren."
      }
    ]
  },
  "crop-pdf": {
    "title": "PDF zuschneiden",
    "metaDescription": "PDF-Seiten zuschneiden, um Ränder zu entfernen. PDF-Dokumente präzise trimmen.",
    "keywords": [
      "pdf zuschneiden",
      "pdf ränder entfernen",
      "pdf trimmen",
      "pdf format anpassen"
    ],
    "description": "\n      <p>Entfernen Sie weiße Ränder oder unerwünschte Bereiche von Ihren PDF-Seiten. Ideal, um den Fokus auf den wesentlichen Inhalt zu legen oder Seitenformate zu vereinheitlichen.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Wählen Sie das PDF aus, das Sie zuschneiden möchten."
      },
      {
        "step": 2,
        "title": "Bereich wählen",
        "description": "Ziehen Sie den Rahmen auf die gewünschte Größe."
      },
      {
        "step": 3,
        "title": "Anwenden",
        "description": "Wählen Sie aus, ob alle Seiten oder nur bestimmte Seiten beschnitten werden sollen."
      }
    ],
    "useCases": [
      {
        "title": "Ränder entfernen",
        "description": "Trimmen Sie überflüssigen Platz bei Scans.",
        "icon": "maximize-2"
      },
      {
        "title": "Inhalt fokussieren",
        "description": "Entfernen Sie Kopf- oder Fußzeilen für eine bessere Lesbarkeit.",
        "icon": "target"
      },
      {
        "title": "Format-Korrektur",
        "description": "Bringen Sie alle Seiten auf eine einheitliche Größe.",
        "icon": "square"
      }
    ],
    "faq": [
      {
        "question": "Geht der Inhalt verloren?",
        "answer": "Ja, alles außerhalb des gewählten Rahmens wird entfernt. Behalten Sie das Original als Backup."
      },
      {
        "question": "Kann ich jede Seite anders zuschneiden?",
        "answer": "Ja, Sie können für jede Seite oder Seitengruppen individuelle Schnittmasken festlegen."
      },
      {
        "question": "Bleibt die Textqualität gleich?",
        "answer": "Ja, da nur der Sichtbereich geändert wird, bleibt die Qualität der Vektoren und Bilder unberührt."
      }
    ]
  },
  "extract-pages": {
    "title": "Seiten extrahieren",
    "metaDescription": "Bestimmte Seiten aus einer PDF extrahieren und als neues Dokument speichern.",
    "keywords": [
      "pdf seiten extrahieren",
      "seiten aus pdf speichern",
      "pdf teilauszug"
    ],
    "description": "\n      <p>Wählen Sie gezielt Seiten aus einem großen Dokument aus und erstellen Sie daraus eine neue, kompakte Datei. Ideal für Auszüge aus Büchern oder Berichten.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Wählen Sie das Quelldokument aus."
      },
      {
        "step": 2,
        "title": "Seiten wählen",
        "description": "Klicken Sie auf die Miniaturansichten der Seiten, die Sie behalten möchten."
      },
      {
        "step": 3,
        "title": "Extrahieren",
        "description": "Klicken Sie auf \"Extrahieren\" und laden Sie das neue PDF herunter."
      }
    ],
    "useCases": [
      {
        "title": "Auszüge erstellen",
        "description": "Speichern Sie nur relevante Kapitel eines Handbuchs.",
        "icon": "file-minus"
      },
      {
        "title": "Gezielte Weitergabe",
        "description": "Teilen Sie nur die Seiten, die für den Empfänger wichtig sind.",
        "icon": "share-2"
      },
      {
        "title": "Archivierung",
        "description": "Sichern Sie nur die wichtigsten Seiten eines langen Dokuments.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Kann ich nicht-aufeinanderfolgende Seiten wählen?",
        "answer": "Ja, Sie können beliebige Seiten im Dokument anklicken, egal an welcher Stelle sie stehen."
      },
      {
        "question": "Bleiben Links in der Datei aktiv?",
        "answer": "Ja, interne und externe Links auf den extrahierten Seiten bleiben funktionsfähig."
      },
      {
        "question": "Wird das Original verändert?",
        "answer": "Nein, es wird eine neue Datei erstellt; Ihr Original bleibt unberührt."
      }
    ]
  },
  "organize-pdf": {
    "title": "PDF organisieren",
    "metaDescription": "Seitenreihenfolge ändern, Seiten duplizieren oder löschen. PDF-Dokumente einfach neu strukturieren.",
    "keywords": [
      "pdf organisieren",
      "pdf seiten sortieren",
      "pdf reihenfolge ändern"
    ],
    "description": "\n      <p>Strukturieren Sie Ihre PDF-Dokumente völlig neu. Mit einer einfachen Drag-and-Drop-Oberfläche können Sie Seiten verschieben, löschen oder wichtige Abschnitte duplizieren.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Wählen Sie die Datei aus, die Sie neu ordnen möchten."
      },
      {
        "step": 2,
        "title": "Sortieren",
        "description": "Verschieben Sie die Seiten per Maus. Nutzen Sie die Buttons zum Löschen oder Kopieren."
      },
      {
        "step": 3,
        "title": "Speichern",
        "description": "Laden Sie das organisierte Dokument herunter."
      }
    ],
    "useCases": [
      {
        "title": "Scan-Fehler korrigieren",
        "description": "Bringen Sie falsch herum eingescannte Seiten in die richtige Reihenfolge.",
        "icon": "arrow-up-down"
      },
      {
        "title": "Eigene Struktur",
        "description": "Erstellen Sie eine individuelle Abfolge für Präsentationen.",
        "icon": "list"
      },
      {
        "title": "Bereinigen",
        "description": "Entfernen Sie Leerseiten oder doppelte Inhalte sofort.",
        "icon": "trash-2"
      }
    ],
    "faq": [
      {
        "question": "Kann ich Seiten duplizieren?",
        "answer": "Ja, jede Seite kann mit einem Klick kopiert und an eine andere Stelle verschoben werden."
      },
      {
        "question": "Gibt es eine Vorschau?",
        "answer": "Ja, Sie sehen große Vorschaubilder aller Seiten, was das Sortieren erleichtert."
      },
      {
        "question": "Bleibt die Dateigröße gleich?",
        "answer": "Meistens ja, außer Sie fügen viele Duplikate hinzu oder löschen viele Seiten."
      }
    ]
  },
  "delete-pages": {
    "title": "Seiten löschen",
    "metaDescription": "Unerwünschte Seiten aus PDF-Dateien entfernen. Einfaches Auswählen und Löschen.",
    "keywords": [
      "pdf seiten löschen",
      "pdf seiten entfernen",
      "seiten aus pdf ausschneiden"
    ],
    "description": "\n      <p>Entfernen Sie schnell und unkompliziert nicht benötigte Seiten aus Ihren PDFs. Ob Leerseiten, veraltete Inhalte oder sensible Daten – mit diesem Tool bereinigen Sie Ihre Dokumente in Sekunden.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Wählen Sie das Dokument aus, das bereinigt werden soll."
      },
      {
        "step": 2,
        "title": "Seiten wählen",
        "description": "Markieren Sie die Seiten, die entfernt werden sollen."
      },
      {
        "step": 3,
        "title": "Löschen und Speichern",
        "description": "Bestätigen Sie das Löschen und laden Sie die gekürzte PDF herunter."
      }
    ],
    "useCases": [
      {
        "title": "Leerseiten entfernen",
        "description": "Bereinigen Sie Dokumente von versehentlich mitgescannten Leerseiten.",
        "icon": "file-x"
      },
      {
        "title": "Datenschutz",
        "description": "Löschen Sie Seiten mit vertraulichen Infos, bevor Sie den Rest teilen.",
        "icon": "shield"
      },
      {
        "title": "Veraltete Inhalte",
        "description": "Entfernen Sie nicht mehr aktuelle Abschnitte aus Handbüchern.",
        "icon": "filter"
      }
    ],
    "faq": [
      {
        "question": "Ist das Löschen endgültig?",
        "answer": "In der heruntergeladenen Datei ja. Ihr lokales Original auf dem PC bleibt jedoch unverändert."
      },
      {
        "question": "Kann ich mehrere Seiten gleichzeitig löschen?",
        "answer": "Ja, Sie können beliebig viele Seiten markieren und in einem Schritt entfernen."
      },
      {
        "question": "Was passiert mit dem Inhaltsverzeichnis?",
        "answer": "Die Seitenzahlen im Dokument bleiben meist gleich, aber Links zu gelöschten Seiten funktionieren nicht mehr."
      }
    ]
  },
  "ocr-pdf": {
    "title": "PDF mit OCR erkennen",
    "metaDescription": "Gescannte PDFs durchsuchbar machen. Text aus Bildern und Scans extrahieren.",
    "keywords": [
      "pdf ocr",
      "texterkennung pdf",
      "pdf durchsuchbar machen",
      "scan in text"
    ],
    "description": "\n      <p>Verwandeln Sie statische Scans in intelligente Dokumente. Unsere OCR-Technologie erkennt Text in Bildern und fügt eine unsichtbare, durchsuchbare Textebene hinzu.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Scan hochladen",
        "description": "Wählen Sie ein bildbasiertes PDF aus."
      },
      {
        "step": 2,
        "title": "Sprache wählen",
        "description": "Wählen Sie die Sprache des Dokuments für optimale Ergebnisse."
      },
      {
        "step": 3,
        "title": "OCR starten",
        "description": "Laden Sie das nun durchsuchbare und kopierbare PDF herunter."
      }
    ],
    "useCases": [
      {
        "title": "Archive digitalisieren",
        "description": "Machen Sie alte Papierarchive per Volltextsuche findbar.",
        "icon": "archive"
      },
      {
        "title": "Text kopieren",
        "description": "Kopieren Sie Text aus Dokumenten, die nur als Bild vorliegen.",
        "icon": "type"
      },
      {
        "title": "Barrierefreiheit",
        "description": "Machen Sie Scans für Screenreader lesbar.",
        "icon": "accessibility"
      }
    ],
    "faq": [
      {
        "question": "Welche Sprachen werden unterstützt?",
        "answer": "Über 100 Sprachen, darunter Deutsch, Englisch, Französisch und Spanisch."
      },
      {
        "question": "Wie gut ist die Erkennung?",
        "answer": "Bei sauberen Scans liegt die Genauigkeit oft über 98%."
      },
      {
        "question": "Bleibt das Aussehen gleich?",
        "answer": "Ja, das visuelle Erscheinungsbild bleibt exakt identisch."
      }
    ]
  },
  "pdf-to-docx": {
    "title": "PDF in Word",
    "metaDescription": "PDF in editierbare Word-Dokumente (DOCX) umwandeln. Layout und Formatierung bleiben erhalten.",
    "keywords": [
      "pdf in word",
      "pdf zu docx",
      "pdf umwandeln word",
      "pdf editierbar machen"
    ],
    "description": "\n      <p>Konvertieren Sie PDF-Dokumente in vollständig editierbare Microsoft Word-Dateien. Layouts, Schriftarten und Bilder werden so originalgetreu wie möglich übernommen.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF wählen",
        "description": "Laden Sie das Dokument hoch."
      },
      {
        "step": 2,
        "title": "Konvertierung",
        "description": "Warten Sie kurz, während die Struktur analysiert wird."
      },
      {
        "step": 3,
        "title": "Word-Datei laden",
        "description": "Bearbeiten Sie den Text nun direkt in Word oder Google Docs."
      }
    ],
    "useCases": [
      {
        "title": "Verträge anpassen",
        "description": "PDF-Verträge in Word ändern und neu verhandeln.",
        "icon": "file-text"
      },
      {
        "title": "Lebenslauf aktualisieren",
        "description": "Bringen Sie alte PDF-Lebensläufe ohne Tipparbeit auf den neuesten Stand.",
        "icon": "user"
      },
      {
        "title": "Datenübernahme",
        "description": "Übernehmen Sie komplexe Texte in Ihre eigene Textverarbeitung.",
        "icon": "copy"
      }
    ],
    "faq": [
      {
        "question": "Wird die Formatierung übernommen?",
        "answer": "Wir geben unser Bestes, Spalten, Tabellen und Bilder exakt zu platzieren."
      },
      {
        "question": "Funktioniert das bei Scans?",
        "answer": "Für Scans empfehlen wir zuerst unser OCR-Tool für bessere Textergebnisse."
      },
      {
        "question": "Ist das Ergebnis mit Google Docs kompatibel?",
        "answer": "Ja, die erstellte DOCX-Datei lässt sich problemlos dort öffnen."
      }
    ]
  },
  "bookmark": {
    "title": "Lesezeichen bearbeiten",
    "metaDescription": "PDF-Lesezeichen hinzufügen, bearbeiten und verwalten. Erstellen Sie eine Navigationsstruktur für Ihre Dokumente.",
    "keywords": [
      "pdf lesezeichen",
      "lesezeichen bearbeiten",
      "pdf navigation",
      "inhaltsverzeichnis erstellen"
    ],
    "description": "\n      <p>Mit \"Lesezeichen bearbeiten\" können Sie Lesezeichen in Ihren PDF-Dokumenten erstellen, ändern und organisieren. Lesezeichen ermöglichen eine schnelle Navigation zu bestimmten Abschnitten, was die Nutzung langer Dokumente erheblich erleichtert.</p>\n      <p>Sie können neue Lesezeichen hinzufügen, die Hierarchie neu organisieren oder Lesezeichen aus externen Quellen importieren. Dieses Tool ist unerlässlich für die Erstellung professioneller, navigierbarer Dokumente.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Wählen Sie die PDF-Datei aus, deren Lesezeichen Sie verwalten möchten."
      },
      {
        "step": 2,
        "title": "Lesezeichen verwalten",
        "description": "Fügen Sie neue Punkte hinzu, benennen Sie bestehende um oder ziehen Sie diese per Drag & Drop in eine hierarchische Ordnung."
      },
      {
        "step": 3,
        "title": "Speichern und Download",
        "description": "Übernehmen Sie die Änderungen und laden Sie das PDF mit der neuen Navigationsstruktur herunter."
      }
    ],
    "useCases": [
      {
        "title": "Navigation erstellen",
        "description": "Helfen Sie Lesern, sich in langen Dokumenten schnell zurechtzufinden.",
        "icon": "navigation"
      },
      {
        "title": "Kapitel organisieren",
        "description": "Spiegeln Sie die Kapitelstruktur Ihres Dokuments in den Lesezeichen wider.",
        "icon": "book-open"
      },
      {
        "title": "Barrierefreiheit verbessern",
        "description": "Machen Sie Dokumente benutzerfreundlicher und zugänglicher.",
        "icon": "accessibility"
      }
    ],
    "faq": [
      {
        "question": "Kann ich verschachtelte Lesezeichen erstellen?",
        "answer": "Ja, Sie können eine Baumstruktur mit Haupt- und Unterlesezeichen erstellen."
      },
      {
        "question": "Werden die Lesezeichen überall angezeigt?",
        "answer": "Ja, Lesezeichen sind ein PDF-Standard und werden von allen gängigen Readern und Browsern unterstützt."
      },
      {
        "question": "Kann ich Lesezeichen importieren?",
        "answer": "Ja, das Tool unterstützt den Import von Strukturen aus JSON- oder Textdateien."
      }
    ]
  },
  "table-of-contents": {
    "title": "Inhaltsverzeichnis erstellen",
    "metaDescription": "Generieren Sie ein Inhaltsverzeichnis für Ihr PDF. Erstellen Sie anklickbare Navigation aus Lesezeichen.",
    "keywords": [
      "pdf inhaltsverzeichnis",
      "toc generator",
      "pdf index",
      "dokumentennavigation"
    ],
    "description": "\n      <p>Dieses Tool generiert eine navigierbare Inhaltsverzeichnisseite für Ihre PDF-Dokumente. Das Verzeichnis kann aus vorhandenen Lesezeichen oder benutzerdefinierten Einträgen erstellt werden.</p>\n      <p>Passen Sie das Erscheinungsbild mit verschiedenen Stilen und Layouts an. Das generierte Verzeichnis enthält anklickbare Links, die direkt zu den entsprechenden Seiten springen.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Wählen Sie das Dokument aus, für das ein Inhaltsverzeichnis benötigt wird."
      },
      {
        "step": 2,
        "title": "TOC konfigurieren",
        "description": "Wählen Sie Stil, Schriftart und Position. Entscheiden Sie, ob Lesezeichen als Basis dienen sollen."
      },
      {
        "step": 3,
        "title": "Generieren",
        "description": "Erstellen Sie das Inhaltsverzeichnis und laden Sie die aktualisierte PDF herunter."
      }
    ],
    "useCases": [
      {
        "title": "Akademische Arbeiten",
        "description": "Fügen Sie Abschlussarbeiten oder Forschungsberichten ein professionelles Verzeichnis hinzu.",
        "icon": "graduation-cap"
      },
      {
        "title": "Geschäftsberichte",
        "description": "Erstellen Sie übersichtliche Berichte für Stakeholder mit klarer Sektionsauflistung.",
        "icon": "bar-chart"
      },
      {
        "title": "Benutzerhandbücher",
        "description": "Generieren Sie umfassende Indizes für technische Dokumentationen.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "Ist das Verzeichnis interaktiv?",
        "answer": "Ja, jeder Eintrag ist ein Link, der den Leser direkt zur Zielseite führt."
      },
      {
        "question": "Wo wird das Verzeichnis eingefügt?",
        "answer": "Standardmäßig am Anfang des Dokuments, Sie können den Ort aber individuell festlegen."
      },
      {
        "question": "Kann ich das Design anpassen?",
        "answer": "Ja, es stehen verschiedene Layout-Vorlagen zur Verfügung."
      }
    ]
  },
  "page-numbers": {
    "title": "Seitenzahlen hinzufügen",
    "metaDescription": "Seitenzahlen zu PDF-Dokumenten hinzufügen. Position, Format und Startnummer individuell anpassen.",
    "keywords": [
      "pdf seitenzahlen",
      "pdf paginierung",
      "seiten nummerieren",
      "pdf bearbeiten"
    ],
    "description": "\n      <p>Fügen Sie Ihren PDFs professionelle Seitenzahlen hinzu. Wählen Sie aus verschiedenen Formaten, Positionen und Stilen, um das Layout Ihres Dokuments zu perfektionieren.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Laden Sie das Dokument hoch, das nummeriert werden soll."
      },
      {
        "step": 2,
        "title": "Formatierung wählen",
        "description": "Bestimmen Sie Position (z.B. unten rechts), Startnummer und das Zahlenformat."
      },
      {
        "step": 3,
        "title": "Anwenden",
        "description": "Fügen Sie die Paginierung hinzu und laden Sie das Ergebnis herunter."
      }
    ],
    "useCases": [
      {
        "title": "Professionelle Berichte",
        "description": "Stellen Sie sicher, dass Ihre Business-Dokumente eine korrekte Paginierung haben.",
        "icon": "file-text"
      },
      {
        "title": "Rechtliche Dokumente",
        "description": "Fügen Sie Verträgen für eine bessere Referenzierung Seitenzahlen hinzu.",
        "icon": "scale"
      },
      {
        "title": "Skripte und Manuskripte",
        "description": "Organisieren Sie Ihre Entwürfe durch eine durchgehende Nummerierung.",
        "icon": "graduation-cap"
      }
    ],
    "faq": [
      {
        "question": "Kann ich die erste Seite auslassen?",
        "answer": "Ja, Sie können festlegen, dass die Nummerierung erst ab einer bestimmten Seite (z.B. nach dem Deckblatt) beginnt."
      },
      {
        "question": "Welche Formate gibt es?",
        "answer": "Arabische Zahlen (1, 2, 3), römische Zahlen (i, ii, iii) oder das Format \"Seite X von Y\"."
      },
      {
        "question": "Kann ich die Schriftart ändern?",
        "answer": "Ja, Sie können Schriftgröße und Typ an Ihr Dokument anpassen."
      }
    ]
  },
  "add-watermark": {
    "title": "Wasserzeichen hinzufügen",
    "metaDescription": "Text- oder Bild-Wasserzeichen zu PDFs hinzufügen. Schützen und branden Sie Ihre Dokumente.",
    "keywords": [
      "pdf wasserzeichen",
      "pdf schützen",
      "pdf stempeln",
      "branding pdf"
    ],
    "description": "\n      <p>Schützen Sie Ihr geistiges Eigentum, indem Sie Text- oder Bild-Wasserzeichen auf Ihre PDFs setzen. Ideal für Statusanzeigen wie \"Entwurf\" oder zur Kennzeichnung mit Ihrem Firmenlogo.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Wählen Sie das zu schützende Dokument aus."
      },
      {
        "step": 2,
        "title": "Wasserzeichen erstellen",
        "description": "Geben Sie Text ein oder laden Sie ein Logo hoch. Passen Sie Transparenz und Winkel an."
      },
      {
        "step": 3,
        "title": "Platzieren und Speichern",
        "description": "Wenden Sie das Wasserzeichen auf alle oder ausgewählte Seiten an."
      }
    ],
    "useCases": [
      {
        "title": "Urheberschutz",
        "description": "Versehen Sie Bilder oder Dokumente mit einem Copyright-Vermerk.",
        "icon": "copyright"
      },
      {
        "title": "Status-Kennzeichnung",
        "description": "Markieren Sie Dokumente deutlich als \"KOPIE\", \"ENTWURF\" oder \"VERTRAULICH\".",
        "icon": "shield"
      },
      {
        "title": "Corporate Identity",
        "description": "Integrieren Sie Ihr Firmenlogo dezent im Hintergrund Ihrer Unterlagen.",
        "icon": "award"
      }
    ],
    "faq": [
      {
        "question": "Kann ich die Transparenz einstellen?",
        "answer": "Ja, Sie können das Wasserzeichen fast unsichtbar oder deckend einstellen."
      },
      {
        "question": "Werden alle Seiten markiert?",
        "answer": "Sie können wählen: Alle Seiten, nur die erste Seite oder ein benutzerdefinierter Bereich."
      },
      {
        "question": "Kann ich Bilder (PNG/JPG) nutzen?",
        "answer": "Ja, sowohl Text als auch Bilddateien (inkl. Transparenz) werden unterstützt."
      }
    ]
  },
  "header-footer": {
    "title": "Kopf- & Fußzeile",
    "metaDescription": "Kopf- und Fußzeilen zu PDF hinzufügen. Seitenzahlen, Daten und eigenen Text einfügen.",
    "keywords": [
      "pdf kopfzeile",
      "pdf fußzeile",
      "pdf beschriften",
      "briefpapier pdf"
    ],
    "description": "\n      <p>Erstellen Sie ein einheitliches Layout für Ihre PDFs, indem Sie Kopf- und Fußzeilen hinzufügen. Fügen Sie dynamische Felder wie das aktuelle Datum, den Dateinamen oder Seitenzahlen ein.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Wählen Sie Ihr Dokument aus."
      },
      {
        "step": 2,
        "title": "Inhalt definieren",
        "description": "Geben Sie Text für die linke, mittlere oder rechte Position in Kopf/Fußzeile ein."
      },
      {
        "step": 3,
        "title": "Layout anpassen",
        "description": "Wählen Sie Abstände zum Rand und Schriftstile aus."
      }
    ],
    "useCases": [
      {
        "title": "Geschäftskorrespondenz",
        "description": "Fügen Sie Firmennamen und Kontaktdaten zu jedem PDF hinzu.",
        "icon": "briefcase"
      },
      {
        "title": "Juristische Schriftsätze",
        "description": "Fügen Sie Aktenzeichen und Seitenzahlen standardisiert ein.",
        "icon": "scale"
      },
      {
        "title": "Dokumentation",
        "description": "Kennzeichnen Sie Versionen und Daten in der Kopfzeile.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "Sind unterschiedliche Kopfzeilen möglich?",
        "answer": "Ja, Sie können für gerade und ungerade Seiten verschiedene Inhalte festlegen."
      },
      {
        "question": "Kann ich Variablen nutzen?",
        "answer": "Ja, Felder wie [Datum] oder [Dateiname] werden automatisch ausgefüllt."
      },
      {
        "question": "Überdeckt das den Inhalt?",
        "answer": "Sie können die Ränder des Dokuments anpassen, um Platz für die Zeilen zu schaffen."
      }
    ]
  },
  "invert-colors": {
    "title": "Farben invertieren",
    "metaDescription": "PDF-Farben für den Dark Mode invertieren. Dokumente in Negativ-Farben umwandeln.",
    "keywords": [
      "pdf farben invertieren",
      "pdf dark mode",
      "pdf negativ",
      "augen schonen pdf"
    ],
    "description": "\n      <p>Invertieren Sie die Farben Ihrer PDF-Dokumente, um einen Negativ-Effekt zu erzielen. Dies ist besonders nützlich für das Lesen in dunkler Umgebung (Dark Mode), um die Augen zu schonen.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Laden Sie das PDF hoch, das Sie farblich umkehren möchten."
      },
      {
        "step": 2,
        "title": "Optionen wählen",
        "description": "Entscheiden Sie, ob auch Bilder invertiert werden sollen oder nur Text/Hintergrund."
      },
      {
        "step": 3,
        "title": "Invertieren",
        "description": "Laden Sie die augenschonende Version Ihres PDFs herunter."
      }
    ],
    "useCases": [
      {
        "title": "Nachtmodus",
        "description": "Angenehmeres Lesen von hellen Dokumenten bei Nacht.",
        "icon": "moon"
      },
      {
        "title": "Barrierefreiheit",
        "description": "Hilfe für Nutzer mit Sehschwäche durch höheren Kontrast.",
        "icon": "eye"
      },
      {
        "title": "Tinte sparen",
        "description": "Invertieren Sie dunkle Dokumente mit viel schwarzem Hintergrund vor dem Drucken.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Sieht das Dokument dann aus wie ein Negativ-Foto?",
        "answer": "Ja, weißer Hintergrund wird schwarz und schwarzer Text wird weiß."
      },
      {
        "question": "Bleiben Bilder normal?",
        "answer": "Sie können wählen, ob Bilder von der Invertierung ausgeschlossen werden sollen."
      },
      {
        "question": "Ist das umkehrbar?",
        "answer": "Ja, Sie können das resultierende PDF einfach erneut invertieren, um die Originalfarben fast exakt wiederherzustellen."
      }
    ]
  },
  "background-color": {
    "title": "Hintergrundfarbe ändern",
    "metaDescription": "PDF-Hintergrundfarbe ändern. Fügen Sie farbige Hintergründe zu Ihren Dokumentseiten hinzu.",
    "keywords": [
      "pdf hintergrundfarbe",
      "pdf farbe ändern",
      "farbiges pdf",
      "seitenfarbe anpassen"
    ],
    "description": "\n      <p>Mit diesem Tool können Sie die Hintergrundfarbe Ihrer PDF-Seiten ändern oder eine neue hinzufügen. Dies kann die Lesbarkeit verbessern, das Dokument optisch aufwerten oder es an Ihr Branding anpassen.</p>\n      <p>Wählen Sie eine beliebige Farbe aus und wenden Sie diese auf das gesamte Dokument oder nur auf bestimmte Seiten an. Alle vorhandenen Inhalte bleiben dabei im Vordergrund erhalten.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Wählen Sie das Dokument aus, dessen Hintergrund Sie einfärben möchten."
      },
      {
        "step": 2,
        "title": "Farbe wählen",
        "description": "Nutzen Sie den Farbwähler oder geben Sie einen Hex-Code ein."
      },
      {
        "step": 3,
        "title": "Anwenden",
        "description": "Speichern Sie das PDF mit dem neuen Hintergrund-Layer."
      }
    ],
    "useCases": [
      {
        "title": "Lesbarkeit verbessern",
        "description": "Nutzen Sie ein sanftes Beige oder Sepia, um die Augen bei langem Lesen zu entlasten.",
        "icon": "eye"
      },
      {
        "title": "Markendesign",
        "description": "Passen Sie Präsentationsunterlagen an Ihre Firmenfarben an.",
        "icon": "palette"
      },
      {
        "title": "Bereiche markieren",
        "description": "Verwenden Sie unterschiedliche Farben, um Kapitel optisch zu trennen.",
        "icon": "layers"
      }
    ],
    "faq": [
      {
        "question": "Wird der Text überdeckt?",
        "answer": "Nein, die Farbe wird als unterste Ebene hinzugefügt, sodass Text und Bilder sichtbar bleiben."
      },
      {
        "question": "Kann ich verschiedene Farben pro Seite nutzen?",
        "answer": "Ja, Sie können das Tool für einzelne Seiten oder Bereiche separat anwenden."
      },
      {
        "question": "Kann ich vorhandene Farben entfernen?",
        "answer": "Dieses Tool fügt Farben hinzu. Zum Entfernen komplexer Hintergründe nutzen Sie bitte den PDF-Editor."
      }
    ]
  },
  "text-color": {
    "title": "Textfarbe ändern",
    "metaDescription": "Ändern Sie die Textfarbe in PDF-Dokumenten. Modifizieren Sie die Farbe aller Textinhalte zentral.",
    "keywords": [
      "pdf textfarbe ändern",
      "text umfärben pdf",
      "kontrast verbessern pdf"
    ],
    "description": "\n      <p>Passen Sie die Farbe aller Textelemente in Ihrem PDF an. Dies ist ideal, um den Kontrast zu erhöhen, ein Dokument für den Druck vorzubereiten oder die Optik an Corporate-Design-Vorgaben anzupassen.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Laden Sie das PDF-Dokument hoch."
      },
      {
        "step": 2,
        "title": "Farbe festlegen",
        "description": "Wählen Sie die neue Farbe für alle enthaltenen Texte aus."
      },
      {
        "step": 3,
        "title": "Konvertieren",
        "description": "Das Tool färbt alle Schriften um und stellt das PDF zum Download bereit."
      }
    ],
    "useCases": [
      {
        "title": "Kontrast optimieren",
        "description": "Ändern Sie hellen Text in Schwarz, um die Lesbarkeit zu garantieren.",
        "icon": "contrast"
      },
      {
        "title": "Einheitliches Branding",
        "description": "Färben Sie Texte in Ihre spezifische Markenfarbe um.",
        "icon": "palette"
      },
      {
        "title": "Barrierefreiheit",
        "description": "Passen Sie Farben an, um Web-Standards für Kontraste zu erfüllen.",
        "icon": "accessibility"
      }
    ],
    "faq": [
      {
        "question": "Wird wirklich jeder Text geändert?",
        "answer": "Ja, das Tool erkennt Textelemente und wendet die neue Farbe global an."
      },
      {
        "question": "Bleiben Fettdruck und Kursivschrift erhalten?",
        "answer": "Ja, alle Formatierungen bleiben bestehen, nur der Farbwert wird geändert."
      },
      {
        "question": "Gilt das auch für Bilder?",
        "answer": "Nein, Text in Bildern (Rastergrafiken) kann auf diese Weise nicht umgefärbt werden."
      }
    ]
  },
  "add-stamps": {
    "title": "Stempel hinzufügen",
    "metaDescription": "Stempel zu PDF-Dokumenten hinzufügen. Nutzen Sie Vorlagen für Genehmigungen, Entwürfe und mehr.",
    "keywords": [
      "pdf stempel",
      "genehmigt stempel pdf",
      "pdf abstempeln",
      "digitaler stempel"
    ],
    "description": "\n      <p>Versehen Sie Ihre PDFs mit digitalen Stempeln. Nutzen Sie klassische Bürostempel wie \"GENEHMIGT\", \"ABGELEHNT\" oder \"ENTWURF\", oder laden Sie Ihr eigenes Stempelbild hoch.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Wählen Sie das zu stempelnde Dokument."
      },
      {
        "step": 2,
        "title": "Stempel wählen",
        "description": "Wählen Sie eine Vorlage oder laden Sie ein eigenes PNG/JPG hoch."
      },
      {
        "step": 3,
        "title": "Platzieren",
        "description": "Klicken Sie auf die gewünschte Stelle, passen Sie die Größe an und speichern Sie."
      }
    ],
    "useCases": [
      {
        "title": "Freigabeprozesse",
        "description": "Markieren Sie Rechnungen oder Verträge als \"Geprüft\" oder \"Bezahlt\".",
        "icon": "check-circle"
      },
      {
        "title": "Status-Updates",
        "description": "Kennzeichnen Sie Dokumente als \"Final\" oder \"Veraltet\".",
        "icon": "tag"
      },
      {
        "title": "Qualitätskontrolle",
        "description": "Fügen Sie Prüfsiegel oder Inspektionsstempel hinzu.",
        "icon": "clipboard-check"
      }
    ],
    "faq": [
      {
        "question": "Welche Vorlagen gibt es?",
        "answer": "Genehmigt, Abgelehnt, Entwurf, Vertraulich, Kopie und viele mehr."
      },
      {
        "question": "Kann ich eigene Logos nutzen?",
        "answer": "Ja, Sie können jedes Bild als individuellen Stempel hochladen."
      },
      {
        "question": "Kann ich mehrere Stempel nutzen?",
        "answer": "Ja, Sie können so viele Stempel wie nötig auf verschiedenen Seiten platzieren."
      }
    ]
  },
  "remove-annotations": {
    "title": "Anmerkungen entfernen",
    "metaDescription": "Anmerkungen aus PDF-Dateien löschen. Bereinigen Sie Kommentare, Highlights und Markups.",
    "keywords": [
      "pdf anmerkungen löschen",
      "kommentare entfernen pdf",
      "pdf bereinigen",
      "markups entfernen"
    ],
    "description": "\n      <p>Entfernen Sie alle Kommentare, Markierungen und Notizen aus Ihrem PDF. So erstellen Sie eine saubere Version des Dokuments für die finale Veröffentlichung oder Weitergabe.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Laden Sie das kommentierte Dokument hoch."
      },
      {
        "step": 2,
        "title": "Typen wählen",
        "description": "Wählen Sie aus, ob nur Kommentare, Highlights oder alle Markups gelöscht werden sollen."
      },
      {
        "step": 3,
        "title": "Bereinigen",
        "description": "Laden Sie das \"saubere\" PDF ohne Korrekturspuren herunter."
      }
    ],
    "useCases": [
      {
        "title": "Finalisierung",
        "description": "Entfernen Sie interne Korrekturhinweise vor dem Versand an Kunden.",
        "icon": "file-check"
      },
      {
        "title": "Datenschutz",
        "description": "Löschen Sie potenziell sensible Kommentare aus dem Review-Prozess.",
        "icon": "shield"
      },
      {
        "title": "Saubere Kopie",
        "description": "Erstellen Sie eine Druckversion ohne störende Hervorhebungen.",
        "icon": "copy"
      }
    ],
    "faq": [
      {
        "question": "Welche Elemente werden gelöscht?",
        "answer": "Highlights, Unterstreichungen, Haftnotizen, Stempel und Freihandzeichnungen."
      },
      {
        "question": "Bleibt der Text erhalten?",
        "answer": "Ja, nur die darüberliegenden Anmerkungen werden entfernt; der eigentliche Inhalt bleibt unberührt."
      },
      {
        "question": "Ist das rückgängig zu machen?",
        "answer": "Nach dem Download nicht mehr. Behalten Sie für den Fall der Fälle Ihr Original."
      }
    ]
  },
  "form-filler": {
    "title": "Formular-Ausfüller",
    "metaDescription": "PDF-Formulare online ausfüllen. Bearbeiten Sie interaktive Formulare direkt im Browser.",
    "keywords": [
      "pdf formular ausfüllen",
      "pdf form filler",
      "interaktives pdf bearbeiten"
    ],
    "description": "\n      <p>Füllen Sie interaktive PDF-Formulare direkt im Browser aus. Geben Sie Text ein, setzen Sie Häkchen in Checkboxen und wählen Sie Optionen aus Dropdown-Menüs – ganz ohne Drucken.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Formular hochladen",
        "description": "Wählen Sie die PDF-Formulardatei aus."
      },
      {
        "step": 2,
        "title": "Ausfüllen",
        "description": "Klicken Sie in die Felder und geben Sie Ihre Daten ein."
      },
      {
        "step": 3,
        "title": "Speichern",
        "description": "Laden Sie das fertig ausgefüllte Formular herunter."
      }
    ],
    "useCases": [
      {
        "title": "Anträge & Behörden",
        "description": "Füllen Sie Anmeldeformulare oder Anträge digital aus.",
        "icon": "clipboard"
      },
      {
        "title": "Steuerformulare",
        "description": "Bearbeiten Sie Finanzdokumente bequem am Rechner.",
        "icon": "file-text"
      },
      {
        "title": "Vertragsdaten",
        "description": "Ergänzen Sie Ihre persönlichen Daten in Vertragsentwürfen.",
        "icon": "file-signature"
      }
    ],
    "faq": [
      {
        "question": "Kann ich den Fortschritt speichern?",
        "answer": "Ja, Sie können das teilweise ausgefüllte Formular speichern und später weiterbearbeiten."
      },
      {
        "question": "Was ist \"Flattening\"?",
        "answer": "Dabei werden die Felder in statischen Text umgewandelt, damit sie nach dem Versand nicht mehr geändert werden können."
      },
      {
        "question": "Werden XFA-Formulare unterstützt?",
        "answer": "Ja, das Tool unterstützt sowohl Standard-AcroForms als auch XFA-Formate."
      }
    ]
  },
  "form-creator": {
    "title": "Formular-Ersteller",
    "metaDescription": "Erstellen Sie ausfüllbare PDF-Formulare. Fügen Sie Textfelder, Checkboxen und Dropdowns hinzu.",
    "keywords": [
      "pdf formular erstellen",
      "ausfüllbares pdf machen",
      "pdf formfelder hinzufügen"
    ],
    "description": "\n      <p>Verwandeln Sie statische PDFs in interaktive Formulare. Fügen Sie Textfelder, Checkboxen, Radio-Buttons und Dropdowns hinzu, um professionelle Datenerfassung zu ermöglichen.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Laden Sie das Dokument hoch, das als Basis für Ihr Formular dient."
      },
      {
        "step": 2,
        "title": "Felder hinzufügen",
        "description": "Wählen Sie Feldtypen aus der Toolbar und platzieren Sie diese per Klick."
      },
      {
        "step": 3,
        "title": "Konfigurieren",
        "description": "Legen Sie Eigenschaften wie Pflichtfelder fest und speichern Sie das Ergebnis."
      }
    ],
    "useCases": [
      {
        "title": "Bewerbungsbögen",
        "description": "Erstellen Sie strukturierte Formulare für Job-Interessenten.",
        "icon": "user-plus"
      },
      {
        "title": "Umfragen",
        "description": "Bauen Sie interaktive Fragebögen zur Datenerhebung auf.",
        "icon": "clipboard-list"
      },
      {
        "title": "Bestellformulare",
        "description": "Erstellen Sie Dokumente mit Mengenfeldern und Auswahloptionen.",
        "icon": "shopping-cart"
      }
    ],
    "faq": [
      {
        "question": "Welche Feldtypen gibt es?",
        "answer": "Textzeilen, Checkboxen, Auswahlknöpfe, Listen, Datumsfelder und Signaturfelder."
      },
      {
        "question": "Sind Berechnungen möglich?",
        "answer": "Ja, einfache Summen- oder Durchschnittsberechnungen können für Zahlenfelder konfiguriert werden."
      },
      {
        "question": "Können Felder Pflichtfelder sein?",
        "answer": "Ja, Sie können festlegen, dass bestimmte Felder ausgefüllt werden müssen."
      }
    ]
  },
  "remove-blank-pages": {
    "title": "Leerseiten entfernen",
    "metaDescription": "Erkennen und löschen Sie automatisch leere Seiten aus Ihren PDF-Dokumenten.",
    "keywords": [
      "pdf leerseiten löschen",
      "leere seiten entfernen pdf",
      "pdf bereinigen"
    ],
    "description": "\n      <p>Dieses intelligente Tool erkennt und entfernt automatisch leere Seiten aus Ihren Dokumenten. Ideal zum Bereinigen von Scans oder zum Entfernen von Trennblättern nach dem Zusammenfügen.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Wählen Sie das zu bereinigende Dokument."
      },
      {
        "step": 2,
        "title": "Empfindlichkeit wählen",
        "description": "Stellen Sie ein, ab wann eine Seite als \"leer\" gilt (z.B. trotz kleiner Scan-Punkte)."
      },
      {
        "step": 3,
        "title": "Entfernen",
        "description": "Laden Sie das kompakte PDF ohne unnötige Leerseiten herunter."
      }
    ],
    "useCases": [
      {
        "title": "Scan-Optimierung",
        "description": "Entfernen Sie Rückseiten von Dokumenten, die nur einseitig bedruckt waren.",
        "icon": "scan"
      },
      {
        "title": "Dateigröße reduzieren",
        "description": "Sparen Sie Platz, indem Sie nutzlose Seiten löschen.",
        "icon": "minimize-2"
      },
      {
        "title": "Trennseiten löschen",
        "description": "Entfernen Sie Platzhalterseiten aus zusammengefügten Stapeln.",
        "icon": "minus"
      }
    ],
    "faq": [
      {
        "question": "Wie funktioniert die Erkennung?",
        "answer": "Das Tool analysiert den Inhalt der Seite. Seiten mit fast keinem sichtbaren Inhalt werden als leer markiert."
      },
      {
        "question": "Was ist mit Schmutzpartikeln auf dem Scan?",
        "answer": "Sie können den Schwellenwert anpassen, sodass auch Seiten mit minimalen \"Rausch-Punkten\" als leer erkannt werden."
      },
      {
        "question": "Sehe ich vorher, was gelöscht wird?",
        "answer": "Ja, die erkannten Seiten werden in einer Vorschau markiert, bevor Sie das Löschen bestätigen."
      }
    ]
  },
  "image-to-pdf": {
    "title": "Bild in PDF",
    "metaDescription": "Konvertieren Sie beliebige Bilder in PDF. Unterstützung für JPG, PNG, WebP, BMP, TIFF, SVG und HEIC.",
    "keywords": [
      "bild in pdf",
      "foto zu pdf umwandeln",
      "bilder kombinieren pdf",
      "grafik zu pdf"
    ],
    "description": "\n      <p>Wandeln Sie Bilder jeglicher Formate in professionelle PDF-Dokumente um. Mit Unterstützung für JPG, PNG, WebP, BMP, TIFF, SVG und HEIC ist dies Ihr universeller Bildkonverter.</p>\n      <p>Kombinieren Sie mehrere Bilder zu einer einzigen PDF-Datei, ordnen Sie diese nach Belieben an und passen Sie Seitengröße sowie Ausrichtung individuell an.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Bilder hochladen",
        "description": "Ziehen Sie Bilder in den Upload-Bereich oder wählen Sie Dateien von Ihrem Gerät."
      },
      {
        "step": 2,
        "title": "Anordnen & Konfigurieren",
        "description": "Sortieren Sie die Bilder und legen Sie das Seitenformat (z. B. A4 oder Originalgröße) fest."
      },
      {
        "step": 3,
        "title": "Konvertieren",
        "description": "Erstellen Sie Ihr PDF und laden Sie das Ergebnis sofort herunter."
      }
    ],
    "useCases": [
      {
        "title": "Fotosammlungen",
        "description": "Fassen Sie Urlaubsfotos oder Event-Bilder in einem Album-PDF zusammen.",
        "icon": "images"
      },
      {
        "title": "Dokumenten-Archiv",
        "description": "Digitalisieren Sie Papierunterlagen, indem Sie Bild-Scans in PDF archivieren.",
        "icon": "archive"
      },
      {
        "title": "Portfolios",
        "description": "Erstellen Sie eine professionelle Mappe aus Ihren Design-Entwürfen.",
        "icon": "file-stack"
      }
    ],
    "faq": [
      {
        "question": "Welche Formate werden unterstützt?",
        "answer": "JPG, PNG, WebP, BMP, TIFF, SVG und das Apple-Format HEIC."
      },
      {
        "question": "Bleibt die Bildqualität erhalten?",
        "answer": "Ja, Bilder werden standardmäßig in ihrer Originalauflösung eingebettet."
      },
      {
        "question": "Kann ich die Reihenfolge ändern?",
        "answer": "Ja, Sie können die Bilder per Drag & Drop sortieren, bevor Sie das PDF generieren."
      }
    ]
  },
  "png-to-pdf": {
    "title": "PNG in PDF",
    "metaDescription": "Konvertieren Sie PNG-Bilder in PDF. Erhalten Sie Transparenzen und kombinieren Sie mehrere PNGs.",
    "keywords": [
      "png in pdf",
      "png umwandeln",
      "transparente bilder pdf",
      "screenshot zu pdf"
    ],
    "description": "\n      <p>Konvertieren Sie PNG-Dateien in PDF, während Transparenzen erhalten bleiben. Ideal für Grafiken, Logos und Screenshots, die einen transparenten Hintergrund besitzen.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PNGs hochladen",
        "description": "Wählen Sie Ihre PNG-Dateien aus."
      },
      {
        "step": 2,
        "title": "Layout wählen",
        "description": "Bestimmen Sie die Seitengröße und die Bildanordnung."
      },
      {
        "step": 3,
        "title": "Herunterladen",
        "description": "Laden Sie das fertige PDF-Dokument herunter."
      }
    ],
    "useCases": [
      {
        "title": "Grafik-Portfolios",
        "description": "Präsentieren Sie Logos und UI-Designs in einem sauberen Dokument.",
        "icon": "palette"
      },
      {
        "title": "Software-Dokumentation",
        "description": "Fassen Sie Programm-Screenshots zu einer Anleitung zusammen.",
        "icon": "monitor"
      },
      {
        "title": "Logo-Kataloge",
        "description": "Erstellen Sie eine Übersicht Ihrer Marken-Assets.",
        "icon": "award"
      }
    ],
    "faq": [
      {
        "question": "Bleibt die Transparenz erhalten?",
        "answer": "Ja, transparente Bereiche im PNG werden im PDF korrekt dargestellt."
      },
      {
        "question": "Was passiert mit animierten PNGs?",
        "answer": "Diese werden als statisches Bild (das erste Frame) konvertiert."
      },
      {
        "question": "Kann ich die Hintergrundfarbe wählen?",
        "answer": "Ja, Sie können für transparente Bereiche eine Hintergrundfarbe im PDF festlegen."
      }
    ]
  },
  "webp-to-pdf": {
    "title": "WebP in PDF",
    "metaDescription": "WebP-Bilder in PDF konvertieren. Modernes Bildformat einfach für Druck und Archivierung umwandeln.",
    "keywords": [
      "webp in pdf",
      "google bildformat konvertieren",
      "webp zu pdf deutsch"
    ],
    "description": "\n      <p>Wandeln Sie moderne WebP-Bilder in das universell kompatible PDF-Format um. Ideal, um Bilder direkt aus dem Web für den Druck oder die Langzeitarchivierung vorzubereiten.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "WebP hochladen",
        "description": "Wählen Sie WebP-Dateien aus Ihrem Ordner aus."
      },
      {
        "step": 2,
        "title": "Optionen anpassen",
        "description": "Wählen Sie Hoch- oder Querformat für Ihre PDF-Seiten."
      },
      {
        "step": 3,
        "title": "Speichern",
        "description": "Generieren Sie das PDF aus Ihren WebP-Grafiken."
      }
    ],
    "useCases": [
      {
        "title": "Web-Inhalte archivieren",
        "description": "Speichern Sie Bilder von Webseiten dauerhaft im PDF-Format.",
        "icon": "globe"
      },
      {
        "title": "Druckvorbereitung",
        "description": "Machen Sie moderne Web-Bilder für Standarddrucker verfügbar.",
        "icon": "printer"
      },
      {
        "title": "Format-Standardisierung",
        "description": "Konvertieren Sie WebP in das plattformübergreifende PDF-Format.",
        "icon": "file-check"
      }
    ],
    "faq": [
      {
        "question": "Was ist WebP?",
        "answer": "Ein von Google entwickeltes Format für hohe Kompression im Web."
      },
      {
        "question": "Ist die Konvertierung verlustfrei?",
        "answer": "Ja, die Bildqualität des WebP-Originals bleibt im PDF erhalten."
      },
      {
        "question": "Funktioniert es mit animierten WebPs?",
        "answer": "Diese werden als Standbilder konvertiert."
      }
    ]
  },
  "svg-to-pdf": {
    "title": "SVG in PDF",
    "metaDescription": "SVG-Vektorgrafiken in PDF konvertieren. Erhalten Sie Skalierbarkeit und verlustfreie Qualität.",
    "keywords": [
      "svg in pdf",
      "vektorgrafik zu pdf",
      "skalierbares pdf",
      "logo konvertieren"
    ],
    "description": "\n      <p>Wandeln Sie skalierbare Vektorgrafiken (SVG) in PDF um, ohne an Schärfe zu verlieren. Da PDF ebenfalls Vektoren unterstützt, bleibt Ihr Design bei jeder Vergrößerung gestochen scharf.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "SVG hochladen",
        "description": "Wählen Sie Ihre SVG-Vektordateien aus."
      },
      {
        "step": 2,
        "title": "Seiteneinstellungen",
        "description": "Wählen Sie ein passendes Format für Ihre Grafiken."
      },
      {
        "step": 3,
        "title": "Konvertieren",
        "description": "Laden Sie das Vektor-PDF herunter."
      }
    ],
    "useCases": [
      {
        "title": "Logo-Druck",
        "description": "Bereiten Sie Vektor-Logos für den professionellen Druck vor.",
        "icon": "award"
      },
      {
        "title": "Technische Pläne",
        "description": "Wandeln Sie CAD-Exporte oder Diagramme in PDF um.",
        "icon": "ruler"
      },
      {
        "title": "Illustrationen",
        "description": "Erstellen Sie hochauflösende Dokumente aus Vektor-Kunstwerken.",
        "icon": "grid"
      }
    ],
    "faq": [
      {
        "question": "Bleibt die Vektorqualität erhalten?",
        "answer": "Ja, das PDF behält die mathematischen Pfade bei, sodass der Inhalt unendlich skalierbar bleibt."
      },
      {
        "question": "Werden Schriften korrekt eingebettet?",
        "answer": "In der Regel ja. Für beste Ergebnisse sollten Schriften im SVG in Pfade umgewandelt sein."
      },
      {
        "question": "Unterstützt das Tool komplexe Filter?",
        "answer": "Die meisten Standard-SVG-Filter und Gradienten werden unterstützt."
      }
    ]
  },
  "heic-to-pdf": {
    "title": "HEIC in PDF",
    "metaDescription": "iPhone HEIC-Fotos in PDF konvertieren. Apple-Bildformate einfach für Windows und Android nutzbar machen.",
    "keywords": [
      "heic in pdf",
      "iphone foto konvertieren",
      "apple bild zu pdf",
      "heic zu pdf deutsch"
    ],
    "description": "\n      <p>Konvertieren Sie HEIC-Fotos von Ihrem iPhone oder iPad direkt in PDF. HEIC bietet zwar eine gute Kompression, ist aber nicht überall lesbar – PDF hingegen schon.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "HEIC hochladen",
        "description": "Wählen Sie Ihre Apple-Fotos aus."
      },
      {
        "step": 2,
        "title": "Sortieren",
        "description": "Bringen Sie Ihre Fotos in die gewünschte Reihenfolge."
      },
      {
        "step": 3,
        "title": "Download",
        "description": "Laden Sie das universelle PDF-Dokument herunter."
      }
    ],
    "useCases": [
      {
        "title": "Mobile Fotoalben",
        "description": "Erstellen Sie PDFs aus Ihren Handyfotos zum Teilen mit Nicht-Apple-Nutzern.",
        "icon": "smartphone"
      },
      {
        "title": "Scans vom iPhone",
        "description": "Wandeln Sie mit der Kamera aufgenommene Dokumente in saubere PDFs um.",
        "icon": "scan"
      },
      {
        "title": "Kompatibilität",
        "description": "Machen Sie HEIC-Bilder für Windows-PCs und Android-Geräte nutzbar.",
        "icon": "share-2"
      }
    ],
    "faq": [
      {
        "question": "Was ist HEIC?",
        "answer": "Das Standard-Bildformat von Apple für effiziente Speicherung."
      },
      {
        "question": "Werden Live-Photos unterstützt?",
        "answer": "Das Tool konvertiert das Hauptbild des Live-Photos in das PDF."
      },
      {
        "question": "Bleiben Metadaten (Exif) erhalten?",
        "answer": "Sie können wählen, ob Aufnahmeort und Datum im Dokument verbleiben sollen."
      }
    ]
  },
  "txt-to-pdf": {
    "title": "Text in PDF",
    "metaDescription": "Konvertieren Sie Textdateien (TXT) in formatiertes PDF. Passen Sie Schriftart und Layout an.",
    "keywords": [
      "txt in pdf",
      "textdatei umwandeln",
      "quellcode zu pdf",
      "notizen zu pdf"
    ],
    "description": "\n      <p>Wandeln Sie einfache Textdateien (.txt) in formatierte PDF-Dokumente um. Passen Sie Schriftarten, Ränder und das Seitenlayout an, um aus simplen Notizen professionelle Dokumente zu machen.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Textdatei hochladen",
        "description": "Wählen Sie Ihre .txt-Datei aus."
      },
      {
        "step": 2,
        "title": "Formatierung",
        "description": "Wählen Sie Schriftart (z. B. Monospace für Code) und Seitenränder."
      },
      {
        "step": 3,
        "title": "Speichern",
        "description": "Laden Sie das formatierte PDF-Dokument herunter."
      }
    ],
    "useCases": [
      {
        "title": "Code-Dokumentation",
        "description": "Wandeln Sie Programmiercode in lesbare PDF-Dateien um.",
        "icon": "code"
      },
      {
        "title": "Logfile-Archivierung",
        "description": "Speichern Sie Server-Logs in einem festen Dokumentenformat.",
        "icon": "file-text"
      },
      {
        "title": "Manuskripte",
        "description": "Machen Sie aus einfachen Textentwürfen druckfertige PDFs.",
        "icon": "sticky-note"
      }
    ],
    "faq": [
      {
        "question": "Werden Sonderzeichen unterstützt?",
        "answer": "Ja, das Tool unterstützt UTF-8 Kodierung für internationale Schriftzeichen."
      },
      {
        "question": "Gibt es einen automatischen Zeilenumbruch?",
        "answer": "Ja, zu lange Zeilen werden automatisch an die Seitenbreite angepasst."
      },
      {
        "question": "Kann ich die Schriftgröße ändern?",
        "answer": "Ja, Sie können die Größe für optimale Lesbarkeit einstellen."
      }
    ]
  },
  "json-to-pdf": {
    "title": "JSON in PDF",
    "metaDescription": "Konvertieren Sie JSON-Dateien in formatiertes PDF. Mit Syntax-Highlighting und strukturierter Ausgabe.",
    "keywords": [
      "json in pdf",
      "json visualisieren",
      "api daten zu pdf",
      "json formatieren"
    ],
    "description": "\n      <p>Verwandeln Sie JSON-Daten in ein lesbares, schön formatiertes PDF. Das Tool bietet automatisches Syntax-Highlighting und Einrückungen, um komplexe Datenstrukturen visuell aufzubereiten.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "JSON hochladen",
        "description": "Wählen Sie Ihre .json-Datei aus."
      },
      {
        "step": 2,
        "title": "Stil wählen",
        "description": "Konfigurieren Sie das Farbschema für das Syntax-Highlighting."
      },
      {
        "step": 3,
        "title": "Generieren",
        "description": "Laden Sie das strukturierte Daten-PDF herunter."
      }
    ],
    "useCases": [
      {
        "title": "API-Dokumentation",
        "description": "Präsentieren Sie Beispiel-Responses in einem sauberen Dokument.",
        "icon": "code"
      },
      {
        "title": "Konfigurations-Backups",
        "description": "Archivieren Sie Einstellungen in einem menschenlesbaren Format.",
        "icon": "settings"
      },
      {
        "title": "Daten-Berichte",
        "description": "Erstellen Sie Berichte aus JSON-Datenexporten.",
        "icon": "bar-chart"
      }
    ],
    "faq": [
      {
        "question": "Ist der Code farbig markiert?",
        "answer": "Ja, Schlüssel, Werte und Datentypen werden zur besseren Übersicht farblich hervorgehoben."
      },
      {
        "question": "Wie werden große Dateien gehandhabt?",
        "answer": "Lange JSON-Strukturen werden automatisch auf mehrere Seiten verteilt."
      },
      {
        "question": "Brauche ich Programmierkenntnisse?",
        "answer": "Nein, laden Sie einfach die Datei hoch und das Tool übernimmt das Layout."
      }
    ]
  },
  "pdf-to-jpg": {
    "title": "PDF in JPG",
    "metaDescription": "Konvertieren Sie PDF-Seiten in JPG-Bilder. Hochwertige Extraktion mit einstellbarer Auflösung.",
    "keywords": [
      "pdf in jpg",
      "pdf zu jpeg",
      "pdf als bild speichern",
      "seiten extrahieren"
    ],
    "description": "\n      <p>Wandeln Sie Ihre PDF-Seiten in hochwertige JPG-Bilder um. Sie können entweder alle Seiten konvertieren oder gezielt einzelne Seiten auswählen. Dabei lassen sich Auflösung (DPI) und Bildqualität individuell anpassen.</p>\n      <p>Ideal zum Erstellen von Vorschaubildern, zum Teilen von Dokumenten in sozialen Netzwerken oder zur Verwendung in Bildbearbeitungsprogrammen.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Wählen Sie die PDF-Datei aus, die Sie umwandeln möchten."
      },
      {
        "step": 2,
        "title": "Qualität wählen",
        "description": "Stellen Sie die gewünschte Auflösung (DPI) und den Kompressionsgrad ein."
      },
      {
        "step": 3,
        "title": "Konvertieren",
        "description": "Laden Sie die Bilder einzeln oder gesammelt als ZIP-Archiv herunter."
      }
    ],
    "useCases": [
      {
        "title": "Web-Veröffentlichung",
        "description": "Erstellen Sie Bildversionen von PDF-Seiten für Ihre Website.",
        "icon": "globe"
      },
      {
        "title": "Social Media",
        "description": "Teilen Sie Dokumentinhalte als einfache Bilder auf Instagram oder LinkedIn.",
        "icon": "share-2"
      },
      {
        "title": "Präsentationen",
        "description": "Fügen Sie PDF-Folien als Bilder in PowerPoint oder Keynote ein.",
        "icon": "presentation"
      }
    ],
    "faq": [
      {
        "question": "Welche Auflösung wird unterstützt?",
        "answer": "Sie können zwischen 72 DPI (Web) und 300 DPI (Druckqualität) wählen."
      },
      {
        "question": "Kann ich nur bestimmte Seiten wählen?",
        "answer": "Ja, Sie können einzelne Seiten oder Seitenbereiche für die Konvertierung festlegen."
      },
      {
        "question": "Wie erhalte ich die Dateien?",
        "answer": "Bei mehreren Seiten erstellt das Tool automatisch einen praktischen ZIP-Ordner."
      }
    ]
  },
  "pdf-to-png": {
    "title": "PDF in PNG",
    "metaDescription": "Konvertieren Sie PDF-Seiten in PNG-Bilder. Verlustfreie Qualität mit Unterstützung für Transparenz.",
    "keywords": [
      "pdf in png",
      "pdf zu bild verlustfrei",
      "grafik extraktion pdf",
      "transparenz pdf"
    ],
    "description": "\n      <p>Konvertieren Sie PDF-Dokumente in das verlustfreie PNG-Format. Im Gegensatz zu JPG bietet PNG eine perfekte Bildqualität ohne Artefakte und unterstützt transparente Hintergründe.</p>\n      <p>Besonders geeignet für PDFs, die Diagramme, Logos oder Texte enthalten, die gestochen scharf bleiben müssen.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Laden Sie Ihr Dokument hoch."
      },
      {
        "step": 2,
        "title": "Optionen konfigurieren",
        "description": "Wählen Sie die Seiten und die gewünschte Pixeldichte aus."
      },
      {
        "step": 3,
        "title": "PNGs speichern",
        "description": "Extrahieren Sie die Seiten als hochwertige PNG-Dateien."
      }
    ],
    "useCases": [
      {
        "title": "Grafik-Extraktion",
        "description": "Speichern Sie Vektorgrafiken aus PDFs als saubere Rasterbilder.",
        "icon": "image"
      },
      {
        "title": "Design-Assets",
        "description": "Wandeln Sie PDF-Entwürfe in PNGs für Grafiksoftware um.",
        "icon": "palette"
      },
      {
        "title": "Technische Doku",
        "description": "Erstellen Sie scharfe Abbildungen für Handbücher und Anleitungen.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "Warum PNG statt JPG?",
        "answer": "PNG ist verlustfrei und eignet sich besser für Texte und Grafiken mit harten Kanten."
      },
      {
        "question": "Bleibt die Transparenz erhalten?",
        "answer": "Ja, sofern das PDF transparente Ebenen hat, werden diese im PNG übernommen."
      },
      {
        "question": "Welchen DPI-Wert soll ich nutzen?",
        "answer": "150 DPI für den Bildschirm, 300 DPI für eine sehr hohe Detailschärfe."
      }
    ]
  },
  "pdf-to-webp": {
    "title": "PDF in WebP",
    "metaDescription": "Konvertieren Sie PDF-Seiten in WebP-Bilder. Modernes Format mit exzellenter Kompression für das Web.",
    "keywords": [
      "pdf in webp",
      "modernes bildformat",
      "web optimierte bilder",
      "pdf konverter"
    ],
    "description": "\n      <p>Wandeln Sie PDF-Seiten in das moderne WebP-Format von Google um. WebP bietet eine deutlich bessere Kompression als JPG oder PNG bei vergleichbarer Qualität.</p>\n      <p>Dies ist die beste Wahl, wenn Sie PDF-Inhalte schnell ladend auf einer modernen Website anzeigen möchten.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Wählen Sie das PDF-Dokument aus."
      },
      {
        "step": 2,
        "title": "Kompression wählen",
        "description": "Stellen Sie die Balance zwischen Dateigröße und Qualität ein."
      },
      {
        "step": 3,
        "title": "Download",
        "description": "Laden Sie die web-optimierten WebP-Bilder herunter."
      }
    ],
    "useCases": [
      {
        "title": "Web-Optimierung",
        "description": "Reduzieren Sie die Ladezeiten Ihrer Website durch WebP-Bilder.",
        "icon": "globe"
      },
      {
        "title": "Bandbreite sparen",
        "description": "Ideal für mobile Anwendungen mit begrenztem Datenvolumen.",
        "icon": "zap"
      },
      {
        "title": "Modernes Web-Design",
        "description": "Nutzen Sie zukunftssichere Bildformate für Ihre Projekte.",
        "icon": "layout"
      }
    ],
    "faq": [
      {
        "question": "Ist WebP mit allen Browsern kompatibel?",
        "answer": "Ja, alle modernen Browser wie Chrome, Firefox, Edge und Safari unterstützen WebP."
      },
      {
        "question": "Wie viel kleiner sind die Dateien?",
        "answer": "WebP-Dateien sind oft 25-35 % kleiner als vergleichbare JPG-Dateien."
      },
      {
        "question": "Gibt es Qualitätsverluste?",
        "answer": "WebP bietet sowohl verlustbehaftete als auch verlustfreie Kompression an."
      }
    ]
  },
  "pdf-to-bmp": {
    "title": "PDF in BMP",
    "metaDescription": "PDF-Seiten in BMP-Bitmap-Bilder konvertieren. Unkomprimiertes Format für maximale Kompatibilität.",
    "keywords": [
      "pdf in bmp",
      "bitmap konverter",
      "unkomprimierte bilder",
      "legacy format"
    ],
    "description": "\n      <p>Wandeln Sie PDF-Seiten in das klassische BMP-Format (Windows Bitmap) um. BMP ist ein unkomprimiertes Format, das eine universelle Kompatibilität mit älteren Systemen und speziellen Windows-Anwendungen garantiert.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Wählen Sie Ihre Datei aus."
      },
      {
        "step": 2,
        "title": "Seiten wählen",
        "description": "Bestimmen Sie, welche Seiten als Bitmap gespeichert werden sollen."
      },
      {
        "step": 3,
        "title": "BMP erstellen",
        "description": "Konvertieren und laden Sie die Bitmap-Bilder herunter."
      }
    ],
    "useCases": [
      {
        "title": "Altsysteme",
        "description": "Erstellen Sie Bilder für Software, die keine modernen Formate unterstützt.",
        "icon": "history"
      },
      {
        "title": "Windows-Anwendungen",
        "description": "Generieren Sie kompatible Dateien für spezifische Windows-Tools.",
        "icon": "monitor"
      },
      {
        "title": "Verlustfreie Archivierung",
        "description": "Speichern Sie Bilder völlig ohne Kompressionsartefakte.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Warum sollte ich heute noch BMP nutzen?",
        "answer": "Hauptsächlich für die Kompatibilität mit Legacy-Software oder industriellen Anwendungen."
      },
      {
        "question": "Sind BMP-Dateien sehr groß?",
        "answer": "Ja, da sie nicht komprimiert sind, sind sie deutlich größer als JPG oder PNG."
      },
      {
        "question": "Welche Farbtiefe wird unterstützt?",
        "answer": "Das Tool unterstützt Standard-Bitmaps mit 24-Bit und 32-Bit."
      }
    ]
  },
  "pdf-to-tiff": {
    "title": "PDF in TIFF",
    "metaDescription": "PDF in TIFF-Bilder konvertieren. Professionelle Qualität mit Unterstützung für mehrseitige TIFF-Dateien.",
    "keywords": [
      "pdf in tiff",
      "profidruck tiff",
      "mehrseitiges tiff",
      "archivierung"
    ],
    "description": "\n      <p>Konvertieren Sie PDFs in das hochwertige TIFF-Format. TIFF ist der Standard im professionellen Druck und in der Langzeitarchivierung, da es eine extrem hohe Farbtiefe und verlustfreie Kompression (LZW/ZIP) unterstützt.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Laden Sie das Dokument hoch."
      },
      {
        "step": 2,
        "title": "Format wählen",
        "description": "Wählen Sie zwischen einzelnen TIFFs pro Seite oder einem einzelnen, mehrseitigen TIFF."
      },
      {
        "step": 3,
        "title": "Download",
        "description": "Laden Sie die professionellen Bilddateien herunter."
      }
    ],
    "useCases": [
      {
        "title": "Professioneller Druck",
        "description": "Erstellen Sie druckfähige TIFF-Dateien für Verlage und Druckereien.",
        "icon": "printer"
      },
      {
        "title": "Dokumenten-Archivierung",
        "description": "Sichern Sie Dokumente in einem stabilen, hochwertigen Archivformat.",
        "icon": "archive"
      },
      {
        "title": "Publikationen",
        "description": "Wandeln Sie PDFs für die Weiterverarbeitung in Satzprogrammen um.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "Unterstützt das Tool mehrseitige TIFFs?",
        "answer": "Ja, Sie können das gesamte PDF in eine einzige, mehrseitige TIFF-Datei umwandeln."
      },
      {
        "question": "Welche Kompression wird genutzt?",
        "answer": "Sie können zwischen LZW, ZIP oder völlig unkomprimierter Ausgabe wählen."
      },
      {
        "question": "Welcher DPI-Wert ist für den Druck nötig?",
        "answer": "Für professionelle Ergebnisse empfehlen wir mindestens 300 DPI."
      }
    ]
  },
  "pdf-to-greyscale": {
    "title": "PDF in Graustufen",
    "metaDescription": "Farb-PDFs in Schwarz-Weiß (Graustufen) konvertieren. Dateigröße reduzieren und Druckkosten sparen.",
    "keywords": [
      "pdf graustufen",
      "pdf schwarz weiß machen",
      "tinte sparen pdf",
      "farbe entfernen"
    ],
    "description": "\n      <p>Wandeln Sie ein farbiges PDF in eine Graustufen-Version (Schwarz-Weiß) um. Dies ist ideal, um die Dateigröße zu reduzieren und Dokumente optimal für den Schwarz-Weiß-Druck vorzubereiten.</p>\n      <p>Texte bleiben gestochen scharf und Bilder behalten ihre Details, während alle Farbinformationen entfernt werden.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Wählen Sie das farbige Dokument aus."
      },
      {
        "step": 2,
        "title": "Vorschau prüfen",
        "description": "Sehen Sie sich an, wie die Graustufen-Konvertierung wirkt."
      },
      {
        "step": 3,
        "title": "Download",
        "description": "Laden Sie das optimierte Schwarz-Weiß-PDF herunter."
      }
    ],
    "useCases": [
      {
        "title": "Druckkosten sparen",
        "description": "Vermeiden Sie teuren Farbdruck bei Entwürfen oder Skripten.",
        "icon": "printer"
      },
      {
        "title": "Dateigröße verringern",
        "description": "Reduzieren Sie die Dateigröße durch das Entfernen von Farbkanälen.",
        "icon": "minimize-2"
      },
      {
        "title": "Professionelle Ästhetik",
        "description": "Geben Sie Dokumenten einen klassischen Schwarz-Weiß-Look.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "Bleibt der Text lesbar?",
        "answer": "Absolut. Das Tool optimiert die Kontraste, damit Texte weiterhin perfekt lesbar sind."
      },
      {
        "question": "Wie viel Speicherplatz spare ich?",
        "answer": "Bei bildreichen Dokumenten kann die Größe oft um 20-50 % sinken."
      },
      {
        "question": "Kann ich nur bestimmte Seiten entfärben?",
        "answer": "Ja, Sie können gezielt auswählen, welche Seiten konvertiert werden sollen."
      }
    ]
  },
  "pdf-to-json": {
    "title": "PDF in JSON",
    "metaDescription": "Extrahiert PDF-Inhalte in das JSON-Format. Erhalten Sie strukturierte Daten für Ihre Anwendungen.",
    "keywords": [
      "pdf in json",
      "datenextraktion pdf",
      "pdf parser",
      "strukturierte daten"
    ],
    "description": "\n      <p>Extrahieren Sie Text, Metadaten und die Struktur Ihres PDF-Dokuments in das maschinenlesbare JSON-Format. Dies ist das perfekte Tool für Entwickler und Datenanalysten.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Wählen Sie die PDF-Quelldatei aus."
      },
      {
        "step": 2,
        "title": "Daten wählen",
        "description": "Bestimmen Sie, welche Informationen (Text, Layout, Metadaten) extrahiert werden sollen."
      },
      {
        "step": 3,
        "title": "JSON exportieren",
        "description": "Laden Sie die fertige JSON-Datei für Ihre Programmierung herunter."
      }
    ],
    "useCases": [
      {
        "title": "Datenanalyse",
        "description": "Werten Sie Textinhalte aus PDFs automatisiert aus.",
        "icon": "database"
      },
      {
        "title": "System-Integration",
        "description": "Importieren Sie PDF-Inhalte direkt in Ihre Datenbank oder App.",
        "icon": "plug"
      },
      {
        "title": "Metadaten-Audit",
        "description": "Analysieren Sie die technischen Details einer großen Anzahl von PDFs.",
        "icon": "search"
      }
    ],
    "faq": [
      {
        "question": "Was genau wird im JSON gespeichert?",
        "answer": "Textinhalte, Positionsdaten, Schriftarten, Seitendimensionen und Metadaten."
      },
      {
        "question": "Funktioniert das bei Scans?",
        "answer": "Nur wenn diese zuvor mit unserem OCR-Tool durchsuchbar gemacht wurden."
      },
      {
        "question": "Ist das Format dokumentiert?",
        "answer": "Ja, wir nutzen ein standardisiertes Schema für eine einfache Weiterverarbeitung."
      }
    ]
  },
  "alternate-merge": {
    "title": "Wechselweise zusammenfügen",
    "metaDescription": "PDFs durch abwechselnde Seiten zusammenfügen. Kombinieren Sie Vorder- und Rückseiten-Scans in einem Dokument.",
    "keywords": [
      "alternate merge",
      "pdf verschachteln",
      "vorderseite rückseite kombinieren",
      "scans zusammenfügen"
    ],
    "description": "\n      <p>Mit \"Wechselweise zusammenfügen\" kombinieren Sie zwei PDF-Dateien, indem die Seiten abwechselnd (interleaved) hintereinandergelegt werden. Dies ist die perfekte Lösung, wenn Sie Vorder- und Rückseiten separat gescannt haben.</p>\n      <p>Laden Sie einfach die Datei mit den Vorderseiten und die Datei mit den Rückseiten hoch. Das Tool fügt diese automatisch zu einem logischen Gesamtdokument zusammen. Sie können die Reihenfolge einer Datei auch umkehren, falls diese rückwärts gescannt wurde.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Zwei PDFs hochladen",
        "description": "Wählen Sie die PDF mit den ungeraden Seiten (Vorderseiten) und die mit den geraden Seiten (Rückseiten)."
      },
      {
        "step": 2,
        "title": "Reihenfolge konfigurieren",
        "description": "Wählen Sie bei Bedarf \"Reihenfolge umkehren\" für das zweite Dokument (oft bei Back-to-Front-Scans nötig)."
      },
      {
        "step": 3,
        "title": "Zusammenfügen",
        "description": "Klicken Sie auf \"Merge\", um die Seiten zu verschachteln und das Ergebnis zu laden."
      }
    ],
    "useCases": [
      {
        "title": "Duplex-Scannen",
        "description": "Kombinieren Sie Scans von Geräten, die nicht automatisch beidseitig scannen.",
        "icon": "copy"
      },
      {
        "title": "Dokumentenmontage",
        "description": "Verschachteln Sie Seiten aus zwei zusammengehörigen Berichten.",
        "icon": "layers"
      },
      {
        "title": "Buch-Scans",
        "description": "Fügen Sie Scans von linken und rechten Buchseiten zu einem flüssigen Dokument zusammen.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "Was passiert bei unterschiedlicher Seitenanzahl?",
        "answer": "Überschüssige Seiten des längeren Dokuments werden einfach am Ende angehängt."
      },
      {
        "question": "Kann ich die Seitenreihenfolge umkehren?",
        "answer": "Ja, das Tool bietet eine Option, um eine der Dateien vor dem Mischen umzukehren."
      },
      {
        "question": "Ist das besser als normales Zusammenfügen?",
        "answer": "Ja, beim normalen Mischen werden Dateien nur angehängt; hier werden sie wie ein Kartenspiel gemischt."
      }
    ]
  },
  "add-attachments": {
    "title": "Anhänge hinzufügen",
    "metaDescription": "Dateien in PDF-Dokumente einbetten. Fügen Sie beliebige Dateitypen als Anhang zu Ihren PDFs hinzu.",
    "keywords": [
      "pdf anhänge",
      "dateien in pdf einbetten",
      "pdf portfolio",
      "datei an pdf hängen"
    ],
    "description": "\n      <p>Betten Sie beliebige Dateien direkt in Ihre PDF-Dokumente ein. Ob Tabellen, Bilder oder Quellcode – erstellen Sie umfassende PDF-Pakete, in denen alle relevanten Daten enthalten sind.</p>\n      <p>Die Anhänge werden Teil der PDF-Datei und können vom Empfänger mit jedem gängigen PDF-Reader wieder extrahiert werden.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Wählen Sie das Haupt-PDF-Dokument aus."
      },
      {
        "step": 2,
        "title": "Dateien hinzufügen",
        "description": "Wählen Sie die Dateien aus, die Sie im PDF einbetten möchten."
      },
      {
        "step": 3,
        "title": "Speichern",
        "description": "Laden Sie das PDF mit den integrierten Anhängen herunter."
      }
    ],
    "useCases": [
      {
        "title": "Projektpakete",
        "description": "Bündeln Sie Designdateien oder Kalkulationen direkt in der Dokumentation.",
        "icon": "package"
      },
      {
        "title": "Berichtsverteilung",
        "description": "Fügen Sie Rohdaten als Excel-Datei an einen PDF-Bericht an.",
        "icon": "paperclip"
      },
      {
        "title": "Vertragsunterlagen",
        "description": "Hängen Sie unterstützende Dokumente direkt an den Hauptvertrag.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "Welche Dateitypen werden unterstützt?",
        "answer": "Sie können jeden beliebigen Dateityp in ein PDF einbetten."
      },
      {
        "question": "Gibt es eine Größenbeschränkung?",
        "answer": "Die Gesamtgröße des PDFs inkl. Anhängen sollte 500 MB nicht überschreiten."
      },
      {
        "question": "Können Empfänger die Dateien sehen?",
        "answer": "Ja, moderne PDF-Reader zeigen Anhänge in einer speziellen Seitenleiste an."
      }
    ]
  },
  "extract-attachments": {
    "title": "Anhänge extrahieren",
    "metaDescription": "Eingebettete Dateien aus PDFs extrahieren. Laden Sie alle Anhänge aus einem PDF-Dokument herunter.",
    "keywords": [
      "anhänge extrahieren",
      "pdf dateien extrahieren",
      "eingebettete dateien laden"
    ],
    "description": "\n      <p>Holen Sie alle eingebetteten Dateien aus einem PDF-Dokument heraus. Sie können Anhänge einzeln oder alle zusammen als praktisches ZIP-Archiv herunterladen.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Wählen Sie das PDF aus, das Anhänge enthält."
      },
      {
        "step": 2,
        "title": "Anhänge anzeigen",
        "description": "Sehen Sie eine Liste aller im PDF versteckten Dateien."
      },
      {
        "step": 3,
        "title": "Herunterladen",
        "description": "Speichern Sie die Dateien einzeln oder als komplettes Paket."
      }
    ],
    "useCases": [
      {
        "title": "Quellcode abrufen",
        "description": "Extrahierten Sie Originaldaten aus wissenschaftlichen PDF-Berichten.",
        "icon": "download"
      },
      {
        "title": "Pakete entpacken",
        "description": "Greifen Sie auf Dokumente zu, die Ihnen als PDF-Portfolio geschickt wurden.",
        "icon": "folder-open"
      },
      {
        "title": "Batch-Extraktion",
        "description": "Holen Sie Anhänge aus mehreren PDFs gleichzeitig heraus.",
        "icon": "layers"
      }
    ],
    "faq": [
      {
        "question": "Was, wenn keine Anhänge vorhanden sind?",
        "answer": "Das Tool zeigt Ihnen sofort an, ob das Dokument eingebettete Dateien enthält oder nicht."
      },
      {
        "question": "Wird das PDF dabei beschädigt?",
        "answer": "Nein, die Anhänge werden kopiert; das Original-PDF bleibt unverändert."
      },
      {
        "question": "Werden alle Formate unterstützt?",
        "answer": "Ja, das Tool extrahiert jeden Dateityp, der im PDF gespeichert wurde."
      }
    ]
  },
  "divide-pages": {
    "title": "Seiten unterteilen",
    "metaDescription": "PDF-Seiten in mehrere Abschnitte aufteilen. Unterteilen Sie Seiten horizontal oder vertikal.",
    "keywords": [
      "pdf seiten teilen",
      "seite schneiden",
      "pdf sektionieren",
      "rasterteilung"
    ],
    "description": "\n      <p>Dieses Tool schneidet einzelne PDF-Seiten in mehrere Teile. Sie können Seiten horizontal, vertikal oder in einem Raster unterteilen, um aus einer Seite mehrere neue Seiten zu machen.</p>\n      <p>Besonders nützlich für Scans, bei denen mehrere Dokumente (z. B. Quittungen) auf einer Seite liegen, oder um großformatige Pläne handlich zu machen.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Laden Sie das PDF-Dokument hoch."
      },
      {
        "step": 2,
        "title": "Teilung festlegen",
        "description": "Wählen Sie zwischen horizontaler/vertikaler Teilung oder einem Gitter (z. B. 2x2)."
      },
      {
        "step": 3,
        "title": "Schneiden",
        "description": "Laden Sie das PDF mit den nun unterteilten Einzelseiten herunter."
      }
    ],
    "useCases": [
      {
        "title": "Scans trennen",
        "description": "Teilen Sie eine Seite mit mehreren eingescannten Belegen in Einzelbilder.",
        "icon": "scissors"
      },
      {
        "title": "Großformate anpassen",
        "description": "Schneiden Sie ein A3-Dokument in zwei A4-Seiten.",
        "icon": "maximize-2"
      },
      {
        "title": "Karten erstellen",
        "description": "Unterteilen Sie Seiten in visitenkartengroße Abschnitte.",
        "icon": "grid"
      }
    ],
    "faq": [
      {
        "question": "Sind die Schnitte präzise?",
        "answer": "Ja, das Tool teilt die Seite exakt nach Ihren Vorgaben auf."
      },
      {
        "question": "Was passiert mit Text auf der Schnittlinie?",
        "answer": "Inhalte direkt auf der Linie werden getrennt; achten Sie auf ausreichende Abstände."
      },
      {
        "question": "Kann ich nur bestimmte Seiten teilen?",
        "answer": "Ja, Sie können die Teilung auf das gesamte Dokument oder Seitenauswahlen anwenden."
      }
    ]
  },
  "n-up-pdf": {
    "title": "N-Up (Mehrere Seiten pro Blatt)",
    "metaDescription": "Drucken Sie mehrere PDF-Seiten auf ein einzelnes Blatt. Erstellen Sie 2-Up, 4-Up oder individuelle Layouts.",
    "keywords": [
      "n-up pdf",
      "mehrere seiten pro blatt",
      "pdf impositon",
      "handout erstellen"
    ],
    "description": "\n      <p>N-Up PDF ordnet mehrere Seiten Ihres Dokuments auf einem einzigen Blatt an (z. B. 2, 4, 6 oder 9 Seiten pro Blatt). Dies spart Papier beim Drucken und ist ideal für Handouts.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Wählen Sie das zu druckende Dokument."
      },
      {
        "step": 2,
        "title": "Layout wählen",
        "description": "Entscheiden Sie sich für ein Raster (z. B. 2x2 für 4 Seiten pro Blatt)."
      },
      {
        "step": 3,
        "title": "Generieren",
        "description": "Laden Sie das optimierte Layout herunter."
      }
    ],
    "useCases": [
      {
        "title": "Papier sparen",
        "description": "Reduzieren Sie den Papierverbrauch beim Korrekturlesen.",
        "icon": "leaf"
      },
      {
        "title": "Präsentations-Handouts",
        "description": "Erstellen Sie kompakte Übersichten Ihrer Folien.",
        "icon": "file-text"
      },
      {
        "title": "Broschüren-Vorbereitung",
        "description": "Ordnen Sie Seiten für spezielle Druckformate an.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "Bleibt die Reihenfolge erhalten?",
        "answer": "Ja, die Seiten werden standardmäßig von links nach rechts und oben nach unten angeordnet."
      },
      {
        "question": "Kann ich Ränder hinzufügen?",
        "answer": "Ja, Sie können Abstände zwischen den einzelnen Kacheln festlegen."
      },
      {
        "question": "Wird die Qualität schlechter?",
        "answer": "Nein, die Seiten werden lediglich verkleinert, die Details bleiben scharf."
      }
    ]
  },
  "reverse-pages": {
    "title": "Seitenreihenfolge umkehren",
    "metaDescription": "Kehren Sie die Reihenfolge der PDF-Seiten um. Spiegeln Sie das Dokument von hinten nach vorne.",
    "keywords": [
      "pdf umkehren",
      "seiten spiegeln",
      "rückwärts sortieren",
      "scan korrigieren"
    ],
    "description": "\n      <p>Dieses Tool dreht die gesamte Seitenreihenfolge Ihres PDFs um. Die letzte Seite wird zur ersten, die vorletzte zur zweiten usw. Ideal für Dokumente, die falsch herum eingescannt wurden.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Wählen Sie die Datei aus."
      },
      {
        "step": 2,
        "title": "Bereich wählen",
        "description": "Wählen Sie das gesamte Dokument oder nur einen Teilbereich zum Umkehren."
      },
      {
        "step": 3,
        "title": "Umkehren",
        "description": "Speichern Sie das PDF mit der neuen Sortierung."
      }
    ],
    "useCases": [
      {
        "title": "Scan-Fehler beheben",
        "description": "Korrigieren Sie Stapel-Scans, die in der falschen Reihenfolge eingelesen wurden.",
        "icon": "refresh-cw"
      },
      {
        "title": "Druckvorbereitung",
        "description": "Bereiten Sie Dokumente für Drucker vor, die Seiten in umgekehrter Folge ausgeben.",
        "icon": "printer"
      },
      {
        "title": "Prüfprozesse",
        "description": "Betrachten Sie Dokumente schnell aus einer anderen Perspektive.",
        "icon": "arrow-up-down"
      }
    ],
    "faq": [
      {
        "question": "Werden Lesezeichen angepasst?",
        "answer": "Ja, die interne Verlinkung der Lesezeichen wird automatisch auf die neuen Seitenpositionen aktualisiert."
      },
      {
        "question": "Ist das das Gleiche wie Drehen?",
        "answer": "Nein, Drehen ändert die Ausrichtung der Seite, Umkehren ändert die Position im Dokument."
      },
      {
        "question": "Kann ich nur das Ende umdrehen?",
        "answer": "Ja, Sie können einen spezifischen Seitenbereich (z. B. Seite 10-20) definieren."
      }
    ]
  },
  "compare-pdfs": {
    "title": "PDFs vergleichen",
    "metaDescription": "Vergleichen Sie zwei PDF-Dokumente. Lassen Sie sich Unterschiede zwischen Versionen farblich hervorheben.",
    "keywords": [
      "pdf vergleichen",
      "dokumenten-diff",
      "versionskontrolle pdf",
      "änderungen finden"
    ],
    "description": "\n      <p>Analysieren Sie zwei Versionen eines Dokuments auf einen Blick. Das Tool markiert Textänderungen, Hinzufügungen und Löschungen farblich, sodass Sie Revisionen sofort prüfen können.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Zwei PDFs hochladen",
        "description": "Laden Sie das Original und die bearbeitete Version hoch."
      },
      {
        "step": 2,
        "title": "Vergleich starten",
        "description": "Das Tool analysiert beide Dateien auf Text- und Layout-Differenzen."
      },
      {
        "step": 3,
        "title": "Ergebnisse prüfen",
        "description": "Betrachten Sie die Highlights direkt im Browser oder laden Sie einen Bericht herunter."
      }
    ],
    "useCases": [
      {
        "title": "Vertragsprüfung",
        "description": "Finden Sie versteckte Änderungen in neuen Vertragsentwürfen.",
        "icon": "file-text"
      },
      {
        "title": "Lektorat",
        "description": "Kontrollieren Sie, ob alle Korrekturwünsche korrekt umgesetzt wurden.",
        "icon": "git-compare"
      },
      {
        "title": "Qualitätssicherung",
        "description": "Stellen Sie sicher, dass beim Konvertieren keine Inhalte verloren gingen.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "Was wird erkannt?",
        "answer": "Textänderungen, gelöschte Abschnitte und oft auch verschobene Bilder."
      },
      {
        "question": "Geht das auch bei Scans?",
        "answer": "Dafür müssen die Scans zuerst per OCR lesbar gemacht werden."
      },
      {
        "question": "Wie werden Unterschiede gezeigt?",
        "answer": "Meist durch farbige Unterlegungen (Rot für gelöscht, Grün für neu)."
      }
    ]
  },
  "fix-page-size": {
    "title": "Seitengröße vereinheitlichen",
    "metaDescription": "Standardisieren Sie PDF-Seitengrößen. Konvertieren Sie alle Seiten in ein einheitliches Format.",
    "keywords": [
      "pdf seitengröße anpassen",
      "pdf vereinheitlichen",
      "seitenformat korrigieren",
      "pdf auf a4"
    ],
    "description": "\n      <p>Bringen Sie alle Seiten Ihres PDFs auf ein einheitliches Format. Dieses Tool konvertiert Dokumente mit gemischten Seitengrößen in ein konsistentes Format für eine professionelle Präsentation oder den Druck.</p>\n      <p>Wählen Sie aus Standardgrößen wie A4 oder US-Letter oder definieren Sie eigene Maße. Der Inhalt wird dabei passgenau skaliert oder zentriert.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Wählen Sie das PDF mit unterschiedlichen Formaten aus."
      },
      {
        "step": 2,
        "title": "Zielformat wählen",
        "description": "Wählen Sie A4, Letter oder geben Sie eigene Maße in mm/Zoll ein."
      },
      {
        "step": 3,
        "title": "Anwenden",
        "description": "Laden Sie das PDF mit den nun einheitlichen Seitenmaßen herunter."
      }
    ],
    "useCases": [
      {
        "title": "Druckvorbereitung",
        "description": "Stellen Sie sicher, dass alle Seiten ohne Skalierungsfehler gedruckt werden.",
        "icon": "printer"
      },
      {
        "title": "Dokumenten-Cleanup",
        "description": "Korrigieren Sie unschöne Format-Mixe nach dem Zusammenfügen verschiedener Dateien.",
        "icon": "file-check"
      },
      {
        "title": "Professionelle Dossiers",
        "description": "Erstellen Sie einheitliche Unterlagen für Kunden oder Behörden.",
        "icon": "briefcase"
      }
    ],
    "faq": [
      {
        "question": "Wird der Inhalt verzerrt?",
        "answer": "Nein, Sie können wählen, ob der Inhalt proportional skaliert oder lediglich zentriert werden soll."
      },
      {
        "question": "Kann ich das Seitenverhältnis beibehalten?",
        "answer": "Ja, das Tool bietet Optionen zur intelligenten Anpassung ohne Verzerrung."
      },
      {
        "question": "Welche Größen sind verfügbar?",
        "answer": "Alle gängigen ISO-Formate (A0-A5), US-Formate und benutzerdefinierte Maße."
      }
    ]
  },
  "linearize-pdf": {
    "title": "PDF für Web optimieren",
    "metaDescription": "PDF für schnelle Web-Anzeige optimieren. Aktivieren Sie das progressive Laden (Fast Web View).",
    "keywords": [
      "pdf linearisieren",
      "fast web view",
      "pdf optimieren web",
      "schnelles laden pdf"
    ],
    "description": "\n      <p>Linearisieren Sie Ihre Dokumente für eine blitzschnelle Anzeige im Web. Linearisierte PDFs (auch \"Fast Web View\" genannt) können bereits im Browser angezeigt werden, bevor die gesamte Datei heruntergeladen ist.</p>\n      <p>Dies verbessert die Benutzererfahrung bei großen Dokumenten erheblich, da die erste Seite sofort erscheint.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Laden Sie das Dokument hoch, das online veröffentlicht werden soll."
      },
      {
        "step": 2,
        "title": "Optimieren",
        "description": "Klicken Sie auf \"Linearisieren\", um die interne Struktur neu zu ordnen."
      },
      {
        "step": 3,
        "title": "Speichern",
        "description": "Laden Sie das web-optimierte PDF herunter."
      }
    ],
    "useCases": [
      {
        "title": "Online-Publikationen",
        "description": "Optimieren Sie E-Books oder Kataloge für Ihre Website.",
        "icon": "globe"
      },
      {
        "title": "E-Mail-Anhänge",
        "description": "Sorgen Sie dafür, dass Empfänger Dokumente ohne Verzögerung öffnen können.",
        "icon": "mail"
      },
      {
        "title": "Cloud-Dokumente",
        "description": "Bessere Performance für Dokumente, die direkt aus der Cloud gelesen werden.",
        "icon": "cloud"
      }
    ],
    "faq": [
      {
        "question": "Was ist Linearisierung?",
        "answer": "Es ist eine spezielle Art der PDF-Strukturierung, die das \"Streamen\" des Inhalts ermöglicht."
      },
      {
        "question": "Wird die Datei dadurch kleiner?",
        "answer": "Nicht zwingend, manchmal wird sie minimal größer, lädt aber gefühlt deutlich schneller."
      },
      {
        "question": "Ist das Format kompatibel?",
        "answer": "Ja, linearisierte PDFs funktionieren in jedem Standard-PDF-Reader."
      }
    ]
  },
  "repair-pdf": {
    "title": "PDF reparieren",
    "metaDescription": "Beschädigte PDF-Dateien reparieren. Stellen Sie Inhalte aus defekten Dokumenten wieder her.",
    "keywords": [
      "pdf reparieren",
      "defektes pdf retten",
      "pdf wiederherstellen",
      "corrupted pdf fix"
    ],
    "description": "\n      <p>Versuchen Sie, beschädigte oder korrupte PDF-Dateien zu retten. Dieses Tool analysiert die Dokumentenstruktur und baut diese neu auf, um so viele Inhalte wie möglich wiederherzustellen.</p>\n      <p>Nützlich bei Dateien, die sich nicht öffnen lassen, Fehlermeldungen anzeigen oder beim Download beschädigt wurden.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Defektes PDF hochladen",
        "description": "Wählen Sie die Datei aus, die Fehlermeldungen verursacht."
      },
      {
        "step": 2,
        "title": "Reparatur starten",
        "description": "Das Tool versucht, die Cross-Reference-Table und die Objektstruktur zu fixen."
      },
      {
        "step": 3,
        "title": "Ergebnis prüfen",
        "description": "Laden Sie die reparierte Version herunter und prüfen Sie den Inhalt."
      }
    ],
    "useCases": [
      {
        "title": "Dateirettung",
        "description": "Stellen Sie wichtige Daten aus PDFs wieder her, die nicht mehr aufgehen.",
        "icon": "refresh-cw"
      },
      {
        "title": "Fehlerbehebung",
        "description": "Fixen Sie Dateien, die in manchen Viewern falsch angezeigt werden.",
        "icon": "wrench"
      },
      {
        "title": "Datenwiederherstellung",
        "description": "Rettungsversuch für unvollständige Downloads oder Übertragungsfehler.",
        "icon": "file-check"
      }
    ],
    "faq": [
      {
        "question": "Klappt die Reparatur immer?",
        "answer": "Der Erfolg hängt vom Grad der Beschädigung ab. Bei schwerem Datenverlust ist eine Rettung leider nicht immer möglich."
      },
      {
        "question": "Bleiben alle Bilder erhalten?",
        "answer": "Das Tool versucht alles zu retten, bei defekten Objekten kann es jedoch zu Verlusten kommen."
      },
      {
        "question": "Ist mein Original sicher?",
        "answer": "Ja, Sie arbeiten an einer Kopie; Ihr lokales Original bleibt unverändert."
      }
    ]
  },
  "encrypt-pdf": {
    "title": "PDF verschlüsseln",
    "metaDescription": "PDF mit Passwort schützen. Fügen Sie Verschlüsselung hinzu und legen Sie Berechtigungen fest.",
    "keywords": [
      "pdf passwort schutz",
      "pdf verschlüsseln",
      "pdf sichern",
      "dokumentenschutz"
    ],
    "description": "\n      <p>Schützen Sie Ihre vertraulichen Dokumente mit einer starken Verschlüsselung. Legen Sie ein Benutzer-Passwort zum Öffnen und ein Inhaber-Passwort zum Schutz der Berechtigungen fest.</p>\n      <p>Wählen Sie zwischen 128-Bit oder 256-Bit AES-Verschlüsselung für höchste Sicherheitsstandards.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Wählen Sie die zu schützende Datei aus."
      },
      {
        "step": 2,
        "title": "Passwörter setzen",
        "description": "Geben Sie ein starkes Passwort ein und legen Sie fest, was erlaubt ist (z. B. Drucken)."
      },
      {
        "step": 3,
        "title": "Sichern",
        "description": "Laden Sie das verschlüsselte PDF herunter."
      }
    ],
    "useCases": [
      {
        "title": "Vertrauliche Daten",
        "description": "Schützen Sie Finanzberichte oder persönliche Unterlagen.",
        "icon": "lock"
      },
      {
        "title": "Sicherer Versand",
        "description": "Versenden Sie Verträge geschützt per E-Mail.",
        "icon": "shield"
      },
      {
        "title": "Nutzungskontrolle",
        "description": "Verhindern Sie, dass Unbefugte Ihre Inhalte kopieren oder drucken.",
        "icon": "key"
      }
    ],
    "faq": [
      {
        "question": "Was ist der Unterschied bei den Passwörtern?",
        "answer": "Das Benutzer-Passwort ist zum Lesen; das Inhaber-Passwort schützt die Rechte-Einstellungen."
      },
      {
        "question": "Wie sicher ist die Verschlüsselung?",
        "answer": "Wir nutzen AES-Verschlüsselung, die als Industriestandard gilt und extrem sicher ist."
      },
      {
        "question": "Kann ich das Passwort später ändern?",
        "answer": "Ja, mit dem Inhaber-Passwort können Sie den Schutz jederzeit anpassen oder entfernen."
      }
    ]
  },
  "decrypt-pdf": {
    "title": "PDF entsperren",
    "metaDescription": "Passwort aus PDF-Dateien entfernen. Entsperren Sie geschützte Dokumente dauerhaft.",
    "keywords": [
      "pdf passwort entfernen",
      "pdf entsperren",
      "pdf schutz aufheben",
      "pdf decrypt"
    ],
    "description": "\n      <p>Entfernen Sie den Passwortschutz dauerhaft aus Ihren PDFs. Sobald Sie das korrekte Passwort einmal eingegeben haben, erstellt das Tool eine ungeschützte Kopie für den einfachen Zugriff.</p>\n      <p>Hinweis: Sie müssen das aktuelle Passwort kennen. Dieses Tool dient nicht zum Knacken fremder Passwörter.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Geschütztes PDF wählen",
        "description": "Laden Sie die passwortgeschützte Datei hoch."
      },
      {
        "step": 2,
        "title": "Passwort eingeben",
        "description": "Geben Sie das gültige Passwort ein, um die Datei zu autorisieren."
      },
      {
        "step": 3,
        "title": "Entsperren",
        "description": "Laden Sie die nun völlig freie PDF-Version herunter."
      }
    ],
    "useCases": [
      {
        "title": "Schutz entfernen",
        "description": "Machen Sie Dokumente für den internen Gebrauch leichter zugänglich.",
        "icon": "unlock"
      },
      {
        "title": "Archivierung",
        "description": "Entfernen Sie Passwörter vor der Langzeitarchivierung, um Zugriffsprobleme zu vermeiden.",
        "icon": "archive"
      },
      {
        "title": "Workflow-Vereinfachung",
        "description": "Erstellen Sie offene Kopien für Team-Mitglieder.",
        "icon": "share-2"
      }
    ],
    "faq": [
      {
        "question": "Kann das Tool unbekannte Passwörter knacken?",
        "answer": "Nein, aus Sicherheitsgründen müssen Sie das Passwort besitzen, um es entfernen zu können."
      },
      {
        "question": "Wird das Original geändert?",
        "answer": "Nein, es wird eine neue, ungeschützte Datei generiert."
      },
      {
        "question": "Gehen Daten verloren?",
        "answer": "Nein, der Inhalt bleibt exakt gleich, lediglich die Sicherheitsabfrage fällt weg."
      }
    ]
  },
  "edit-metadata": {
    "title": "Metadaten bearbeiten",
    "metaDescription": "Dokumenteigenschaften von PDFs ändern. Bearbeiten Sie Titel, Autor, Betreff und Keywords.",
    "keywords": [
      "pdf metadaten ändern",
      "pdf autor ändern",
      "pdf titel bearbeiten",
      "dokumenten-info"
    ],
    "description": "\n      <p>Passen Sie die versteckten Informationen Ihres PDFs an. Ändern oder löschen Sie Titel, Autor, Thema und Schlagworte, um die Datei professionell zu präsentieren oder Ihre Privatsphäre zu schützen.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Wählen Sie Ihr Dokument aus."
      },
      {
        "step": 2,
        "title": "Felder ausfüllen",
        "description": "Geben Sie neue Informationen für Titel, Autor und andere Felder ein."
      },
      {
        "step": 3,
        "title": "Speichern",
        "description": "Laden Sie das PDF mit den aktualisierten Metadaten herunter."
      }
    ],
    "useCases": [
      {
        "title": "SEO-Optimierung",
        "description": "Hinterlegen Sie Keywords und Beschreibungen direkt in der PDF-Datei.",
        "icon": "search"
      },
      {
        "title": "Professionelle Kennzeichnung",
        "description": "Setzen Sie den korrekten Firmennamen als Autor.",
        "icon": "user"
      },
      {
        "title": "Vorbereitung zur Veröffentlichung",
        "description": "Sorgen Sie für saubere Dokumenteigenschaften vor dem Upload.",
        "icon": "file-check"
      }
    ],
    "faq": [
      {
        "question": "Welche Felder sind änderbar?",
        "answer": "Titel, Autor, Betreff, Stichwörter, Ersteller und Produzent."
      },
      {
        "question": "Kann ich alle Daten löschen?",
        "answer": "Ja, Sie können die Felder auch leer lassen, um alle Informationen zu entfernen."
      },
      {
        "question": "Werden auch XMP-Daten geändert?",
        "answer": "Ja, das Tool aktualisiert sowohl Standard- als auch XMP-Metadaten."
      }
    ]
  },
  "pdf-to-pptx": {
    "title": "PDF in PowerPoint",
    "metaDescription": "PDF in PowerPoint (PPTX) Präsentation konvertieren. Jede Seite wird zu einer hochwertigen Folie.",
    "keywords": [
      "pdf in pptx",
      "pdf zu powerpoint",
      "pdf folien konvertieren",
      "pdf präsentation"
    ],
    "description": "\n      <p>PDF in PowerPoint konvertiert Ihre PDF-Dokumente in bearbeitbare PowerPoint-Präsentationen (PPTX). Jede PDF-Seite wird in eine hochwertige Folie umgewandelt, wobei das visuelle Layout fast perfekt erhalten bleibt.</p>\n      <p>Dieses Tool ist ideal für die Umwandlung von Berichten, Handouts oder anderen PDF-Inhalten in ein Präsentationsformat.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Ziehen Sie Ihre PDF-Datei hierher oder klicken Sie zum Auswählen."
      },
      {
        "step": 2,
        "title": "Qualität wählen",
        "description": "Wählen Sie die Bildqualität (DPI) für die Folien."
      },
      {
        "step": 3,
        "title": "Konvertieren",
        "description": "Klicken Sie auf Konvertieren, um Ihre PowerPoint-Präsentation zu erstellen."
      }
    ],
    "useCases": [
      {
        "title": "Präsentationserstellung",
        "description": "Wandeln Sie PDF-Berichte in Folien für Meetings um.",
        "icon": "presentation"
      },
      {
        "title": "Schulungsmaterial",
        "description": "Machen Sie aus PDF-Schulungsunterlagen interaktive PowerPoint-Präsentationen.",
        "icon": "book-open"
      },
      {
        "title": "Inhalte wiederverwenden",
        "description": "Nutzen Sie bestehende PDF-Inhalte als Basis für neue Präsentationen.",
        "icon": "refresh-cw"
      }
    ],
    "faq": [
      {
        "question": "Sind die Folien bearbeitbar?",
        "answer": "Jede Folie enthält ein Bild der PDF-Seite. Sie können Text und Elemente darüberlegen."
      },
      {
        "question": "Welche DPI sollte ich wählen?",
        "answer": "Nutzen Sie 150 DPI für Bildschirme und 300 DPI für den Druck."
      },
      {
        "question": "Gehen mehrseitige PDFs?",
        "answer": "Ja, jede Seite des PDFs wird zu einer separaten Folie."
      }
    ]
  },
  "pdf-to-excel": {
    "title": "PDF in Excel",
    "metaDescription": "PDF in Excel-Tabelle konvertieren. Tabellen in XLSX-Format extrahieren.",
    "keywords": [
      "pdf in excel",
      "pdf zu xlsx",
      "tabellen extrahieren",
      "pdf daten"
    ],
    "description": "\n      <p>PDF in Excel konvertiert Ihre PDF-Dokumente in bearbeitbare Microsoft Excel-Tabellen (XLSX). Das Tool erkennt automatisch Tabellen in Ihrem PDF und extrahiert sie in separate Arbeitsblätter.</p>\n      <p>Ideal für die Analyse von Finanzberichten, Rechnungen oder anderen tabellarischen Daten.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Laden Sie Ihre PDF-Datei hoch."
      },
      {
        "step": 2,
        "title": "Verarbeiten",
        "description": "Das Tool identifiziert und extrahiert Tabellen automatisch."
      },
      {
        "step": 3,
        "title": "Excel herunterladen",
        "description": "Laden Sie die Excel-Datei mit den extrahierten Daten herunter."
      }
    ],
    "useCases": [
      {
        "title": "Finanzanalyse",
        "description": "Konvertieren Sie Kontoauszüge oder Rechnungen für die Analyse.",
        "icon": "trending-up"
      },
      {
        "title": "Datenextraktion",
        "description": "Holen Sie Daten aus Forschungsberichten in Excel.",
        "icon": "database"
      },
      {
        "title": "Inventarlisten",
        "description": "Wandeln Sie Bestandslisten von PDF in Tabellen um.",
        "icon": "clipboard"
      }
    ],
    "faq": [
      {
        "question": "Wie werden Tabellen behandelt?",
        "answer": "Erkannte Tabellen werden auf entsprechende Arbeitsblätter in der Excel-Datei verteilt."
      },
      {
        "question": "Was wenn keine Tabellen da sind?",
        "answer": "Ein Infoblatt wird erstellt, falls keine Tabellen gefunden werden."
      },
      {
        "question": "Bleibt die Formatierung erhalten?",
        "answer": "Die Daten bleiben erhalten, aber komplexe Formatierungen werden für die Tabelle vereinfacht."
      }
    ]
  },
  "email-to-pdf": {
    "title": "E-Mail zu PDF",
    "metaDescription": "Konvertieren Sie E-Mail-Dateien (.eml, .msg) in PDF-Dokumente. Formatierung, Inline-Bilder, anklickbare Links und eingebettete Anhänge bleiben erhalten.",
    "keywords": [
      "email zu pdf",
      "eml zu pdf",
      "msg zu pdf",
      "email konvertieren",
      "email konverter",
      "email als pdf speichern",
      "outlook zu pdf"
    ],
    "description": "\n      <p>E-Mail zu PDF konvertiert Ihre E-Mail-Dateien (.eml und .msg Formate) in gut formatierte PDF-Dokumente. Das Tool bewahrt die E-Mail-Header-Informationen, den Nachrichtentext, Inline-Bilder mit CID-Ersetzung, anklickbare Links und bettet Anhänge direkt in das PDF ein.</p>\n      <p>Passen Sie die Ausgabeoptionen an, einschließlich Seitengröße (A4, Letter, Legal), Datumsformatierung mit Zeitzonenunterstützung und ob CC/BCC-Felder und Anhangsinformationen einbezogen werden sollen.</p>\n      <p>Die gesamte Konvertierung erfolgt lokal in Ihrem Browser, sodass Ihre E-Mails privat und sicher bleiben.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "E-Mail-Datei hochladen",
        "description": "Laden Sie Ihre .eml oder .msg E-Mail-Datei hoch."
      },
      {
        "step": 2,
        "title": "Optionen konfigurieren",
        "description": "Legen Sie Seitengröße, Datumsformat, Zeitzone fest und wählen Sie, welche Felder einbezogen werden sollen."
      },
      {
        "step": 3,
        "title": "Konvertieren und Herunterladen",
        "description": "Konvertieren Sie in PDF mit eingebetteten Anhängen und laden Sie das Ergebnis herunter."
      }
    ],
    "useCases": [
      {
        "title": "Rechtliche Aufzeichnungen",
        "description": "Archivieren Sie wichtige E-Mails als PDF mit eingebetteten Anhängen für rechtliche Dokumentation.",
        "icon": "scale"
      },
      {
        "title": "Geschäftsarchive",
        "description": "Konvertieren Sie Geschäftskorrespondenz in PDF für langfristige Aufbewahrung.",
        "icon": "briefcase"
      },
      {
        "title": "Beweissicherung",
        "description": "Speichern Sie E-Mail-Beweise mit Inline-Bildern und Anhängen in einem nicht bearbeitbaren PDF-Format.",
        "icon": "shield"
      }
    ],
    "faq": [
      {
        "question": "Welche E-Mail-Formate werden unterstützt?",
        "answer": "Sowohl .eml (RFC 822) als auch .msg (Microsoft Outlook) Dateien werden vollständig unterstützt."
      },
      {
        "question": "Sind Anhänge enthalten?",
        "answer": "Ja! Anhänge werden direkt in die PDF-Datei eingebettet. Sie können sie mit einem kompatiblen PDF-Reader aus dem PDF extrahieren."
      },
      {
        "question": "Werden Inline-Bilder angezeigt?",
        "answer": "Ja, Inline-Bilder, die über CID (Content-ID) referenziert werden, werden automatisch in base64-Daten-URIs konvertiert und im PDF angezeigt."
      },
      {
        "question": "Sind Links anklickbar?",
        "answer": "Ja, alle HTML-Links (<a>-Tags) und URLs in Klartext-E-Mails werden in anklickbare Links im PDF konvertiert."
      },
      {
        "question": "Bleibt die E-Mail-Formatierung erhalten?",
        "answer": "Ja, HTML-E-Mails behalten ihre Formatierung so weit wie möglich bei, einschließlich Stile, Bilder und Links."
      }
    ]
  },
  "djvu-to-pdf": {
    "title": "DJVU zu PDF",
    "metaDescription": "Konvertieren Sie DJVU-Dokumentdateien in PDF. Hochwertiges Rendering für gescannte Dokumente und Bücher.",
    "keywords": [
      "djvu zu pdf",
      "djvu konvertieren",
      "djvu konverter",
      "djvu pdf",
      "djv zu pdf"
    ],
    "description": "\n      <p>DJVU zu PDF konvertiert DjVu-Dokumentdateien in hochwertige PDF-Dokumente. DjVu ist ein Computerdateiformat, das hauptsächlich zum Speichern gescannter Dokumente entwickelt wurde, insbesondere solcher, die eine Kombination aus Text, Strichzeichnungen und Fotografien enthalten.</p>\n      <p>Dieses Tool rendert jede Seite Ihrer DJVU-Datei in Ihrer gewählten DPI (Punkte pro Zoll) und kombiniert sie zu einem durchsuchbaren PDF-Dokument. Perfekt zum Konvertieren gescannter Bücher, technischer Handbücher und Archivdokumente.</p>\n      <p>Die gesamte Konvertierung erfolgt lokal in Ihrem Browser, sodass Ihre Dokumente privat und sicher bleiben.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "DJVU-Datei hochladen",
        "description": "Ziehen Sie Ihre .djvu- oder .djv-Datei per Drag & Drop oder klicken Sie, um von Ihrem Gerät auszuwählen."
      },
      {
        "step": 2,
        "title": "Optionen konfigurieren",
        "description": "Wählen Sie Ausgabe-DPI (72, 150 oder 300) und Bildqualität für das PDF."
      },
      {
        "step": 3,
        "title": "Konvertieren und Herunterladen",
        "description": "Klicken Sie auf In PDF konvertieren und laden Sie Ihr konvertiertes Dokument herunter."
      }
    ],
    "useCases": [
      {
        "title": "Archivdokumente",
        "description": "Konvertieren Sie DJVU-Archive in universelles PDF-Format.",
        "icon": "archive"
      },
      {
        "title": "Gescannte Bücher teilen",
        "description": "Teilen Sie gescannte Bücher im PDF-Format für breitere Kompatibilität.",
        "icon": "share-2"
      },
      {
        "title": "Dokumente drucken",
        "description": "Konvertieren Sie DJVU in hochwertiges PDF zum Drucken.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Was ist das DJVU-Format?",
        "answer": "DjVu ist ein Dateiformat, das zum Speichern gescannter Dokumente entwickelt wurde, insbesondere solcher mit Text, Zeichnungen und Bildern. Es bietet eine bessere Kompression als PDF für gescannte Inhalte."
      },
      {
        "question": "Welche DPI soll ich wählen?",
        "answer": "72 DPI eignet sich für die Webansicht, 150 DPI für Standarddokumente und 300 DPI für hochwertigen Druck."
      },
      {
        "question": "Wird der Text durchsuchbar sein?",
        "answer": "Der Text wird als Bilder gerendert. Wenn Sie durchsuchbaren Text benötigen, sollten Sie unser OCR-PDF-Tool nach der Konvertierung verwenden."
      }
    ]
  },
  "fb2-to-pdf": {
    "title": "FB2 zu PDF",
    "metaDescription": "Konvertieren Sie FictionBook (FB2) E-Books in PDF. Unterstützt mehrere Dateien mit hochwertigem Rendering.",
    "keywords": [
      "fb2 zu pdf",
      "fb2 konvertieren",
      "fictionbook zu pdf",
      "fb2 konverter",
      "fb2.zip zu pdf"
    ],
    "description": "\n      <p>FB2 zu PDF konvertiert FictionBook (FB2) E-Book-Dateien in hochwertige PDF-Dokumente. FB2 ist ein beliebtes XML-basiertes E-Book-Format, das in Russland und Osteuropa weit verbreitet ist.</p>\n      <p>Dieses Tool unterstützt sowohl .fb2- als auch .fb2.zip-Dateien und kann mehrere Dateien gleichzeitig verarbeiten. Es bewahrt die Textformatierung, Bilder und die Kapitelstruktur Ihrer E-Books.</p>\n      <p>Die gesamte Konvertierung erfolgt lokal in Ihrem Browser mit fortschrittlicher Rendering-Technologie, sodass Ihre Bücher privat bleiben und die Konvertierung schnell ist.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "FB2-Dateien hochladen",
        "description": "Ziehen Sie eine oder mehrere .fb2- oder .fb2.zip-Dateien per Drag & Drop oder klicken Sie, um von Ihrem Gerät auszuwählen."
      },
      {
        "step": 2,
        "title": "Qualität auswählen",
        "description": "Wählen Sie Ausgabequalität: Niedrig (72 DPI), Mittel (150 DPI) oder Hoch (300 DPI)."
      },
      {
        "step": 3,
        "title": "Konvertieren und Herunterladen",
        "description": "Klicken Sie auf In PDF konvertieren und laden Sie Ihr(e) konvertierte(s) Dokument(e) herunter."
      }
    ],
    "useCases": [
      {
        "title": "E-Books drucken",
        "description": "Konvertieren Sie FB2-E-Books in PDF für physischen Druck.",
        "icon": "printer"
      },
      {
        "title": "Stapelkonvertierung",
        "description": "Konvertieren Sie mehrere FB2-Dateien gleichzeitig in PDF.",
        "icon": "layers"
      },
      {
        "title": "Universelles Format",
        "description": "Teilen Sie E-Books im PDF-Format, das auf jedem Gerät funktioniert.",
        "icon": "share-2"
      }
    ],
    "faq": [
      {
        "question": "Kann ich mehrere FB2-Dateien gleichzeitig konvertieren?",
        "answer": "Ja! Dieses Tool unterstützt die Stapelkonvertierung von bis zu 20 FB2-Dateien gleichzeitig."
      },
      {
        "question": "Werden .fb2.zip-Dateien unterstützt?",
        "answer": "Ja, das Tool extrahiert und konvertiert automatisch FB2-Dateien aus .fb2.zip-Archiven."
      },
      {
        "question": "Bleibt die Formatierung erhalten?",
        "answer": "Ja! Das Tool verwendet natives FB2-Rendering und bewahrt Textformatierung, Bilder und Kapitelstruktur mit hoher Wiedergabetreue."
      }
    ]
  },
  "cbz-to-pdf": {
    "title": "CBZ zu PDF",
    "metaDescription": "Konvertieren Sie Comic-Archive (CBZ) in PDF. Bewahren Sie Bildreihenfolge und Qualität für digitale Comics.",
    "keywords": [
      "cbz zu pdf",
      "comic zu pdf",
      "cbz konvertieren",
      "comic konverter",
      "cbz konverter"
    ],
    "description": "\n      <p>CBZ zu PDF konvertiert Comic-Archivdateien in PDF-Dokumente. Das Tool extrahiert alle Bilder aus dem CBZ-Archiv und kompiliert sie in ein PDF, wobei die korrekte Lesereihenfolge beibehalten wird.</p>\n      <p>Wählen Sie aus verschiedenen Seitengrößenoptionen, einschließlich Originalbildabmessungen oder standardisierten Comic-Größen. Perfekt zum Lesen von Comics auf Geräten, die PDF, aber nicht CBZ unterstützen.</p>\n      <p>Die gesamte Konvertierung erfolgt lokal in Ihrem Browser, sodass Ihre Comics privat bleiben.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "CBZ-Datei hochladen",
        "description": "Laden Sie Ihre .cbz Comic-Archivdatei hoch."
      },
      {
        "step": 2,
        "title": "Optionen wählen",
        "description": "Wählen Sie Seitengröße und Bildqualitätseinstellungen."
      },
      {
        "step": 3,
        "title": "Konvertieren und Herunterladen",
        "description": "Konvertieren Sie in PDF und laden Sie Ihren Comic herunter."
      }
    ],
    "useCases": [
      {
        "title": "E-Reader-Kompatibilität",
        "description": "Konvertieren Sie CBZ in PDF für E-Reader, die nur PDF unterstützen.",
        "icon": "book"
      },
      {
        "title": "Comic-Archive",
        "description": "Erstellen Sie PDF-Archive Ihrer digitalen Comic-Sammlung.",
        "icon": "archive"
      },
      {
        "title": "Druckvorbereitung",
        "description": "Konvertieren Sie digitale Comics in PDF zum Drucken.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Was ist das CBZ-Format?",
        "answer": "CBZ ist ein ZIP-Archiv mit Comic-Seiten als Bilddateien, umbenannt mit .cbz-Erweiterung."
      },
      {
        "question": "Bleibt die Bildqualität erhalten?",
        "answer": "Ja, Bilder werden in ihrer Originalqualität in das PDF eingebettet."
      },
      {
        "question": "Werden verschachtelte Ordner unterstützt?",
        "answer": "Ja, Bilder aus allen Ordnern im Archiv werden extrahiert und sortiert."
      }
    ]
  },
  "pdf-booklet": {
    "title": "PDF-Broschüren-Ersteller",
    "metaDescription": "Erstellen Sie Broschürenlayouts aus PDF zum Drucken. Ordnen Sie Seiten für Rückstich-Bindung mit mehreren Rasteroptionen an.",
    "keywords": [
      "pdf broschüre",
      "broschüren ersteller",
      "broschüre drucken",
      "rückstich",
      "ausschießen"
    ],
    "description": "\n      <p>Der PDF-Broschüren-Ersteller ordnet Ihre PDF-Seiten in druckfertige Broschürenlayouts an. Perfekt zum Erstellen von Broschüren, Zines, Heften und rückstichgebundenen Publikationen.</p>\n      <p>Wählen Sie aus verschiedenen Rastermodi (1x2, 2x2, 2x4, 4x4), Papiergrößen und Ausrichtungsoptionen. Das Tool verarbeitet automatisch das Seitenausschießen für die richtige Falzreihenfolge.</p>\n      <p>Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser, sodass Ihre Dokumente privat bleiben.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Laden Sie das PDF-Dokument hoch, das Sie in eine Broschüre umwandeln möchten."
      },
      {
        "step": 2,
        "title": "Layout wählen",
        "description": "Wählen Sie Rastermodus, Papiergröße, Ausrichtung und Rotationsoptionen."
      },
      {
        "step": 3,
        "title": "Erstellen und Herunterladen",
        "description": "Generieren Sie das Broschürenlayout und laden Sie es zum Drucken herunter."
      }
    ],
    "useCases": [
      {
        "title": "Broschüren",
        "description": "Erstellen Sie faltfertige Broschüren aus Standard-PDF-Dokumenten.",
        "icon": "book-open"
      },
      {
        "title": "Zines",
        "description": "Produzieren Sie selbstverlegte Zines mit korrektem Seitenausschießen.",
        "icon": "book"
      },
      {
        "title": "Veranstaltungsprogramme",
        "description": "Erstellen Sie professionelle Programmhefte für Veranstaltungen.",
        "icon": "calendar"
      }
    ],
    "faq": [
      {
        "question": "Was ist Rückstich-Bindung?",
        "answer": "Rückstich ist eine Bindemethode, bei der gefaltete Bögen ineinander gelegt und durch die Falz geheftet werden."
      },
      {
        "question": "Welchen Rastermodus sollte ich verwenden?",
        "answer": "1x2 ist Standard für Broschüren. Verwenden Sie 2x2 oder größer für Mehrfachdruck, um Papier zu sparen."
      },
      {
        "question": "Kann ich das Layout vorab ansehen?",
        "answer": "Ja, das Tool bietet eine visuelle Vorschau vor der Generierung der finalen Broschüre."
      }
    ]
  },
  "rasterize-pdf": {
    "title": "PDF rastern",
    "metaDescription": "Konvertieren Sie PDF-Seiten in hochwertige Bilder. Exportieren Sie als PNG, JPEG oder WebP mit benutzerdefinierten DPI-Einstellungen.",
    "keywords": [
      "pdf rastern",
      "pdf zu bild",
      "pdf zu png",
      "pdf zu jpeg",
      "pdf seiten konvertieren"
    ],
    "description": "\n      <p>PDF rastern konvertiert Ihre PDF-Seiten in hochwertige Rasterbilder. Wählen Sie aus PNG-, JPEG- oder WebP-Ausgabeformaten mit voller Kontrolle über DPI- und Qualitätseinstellungen.</p>\n      <p>Perfekt zum Erstellen von Miniaturansichten, Social-Media-Grafiken oder zum Archivieren von PDF-Inhalten als Bilder. Unterstützt Seitenbereichsauswahl und Stapelverarbeitung.</p>\n      <p>Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser, sodass Ihre Dokumente privat bleiben.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Ziehen Sie Ihre PDF-Datei per Drag & Drop oder klicken Sie zum Auswählen."
      },
      {
        "step": 2,
        "title": "Ausgabe konfigurieren",
        "description": "Wählen Sie DPI, Ausgabeformat (PNG/JPEG/WebP), Qualität und Seitenbereich."
      },
      {
        "step": 3,
        "title": "Konvertieren und Herunterladen",
        "description": "Verarbeiten Sie Seiten und laden Sie Bilder einzeln oder als ZIP-Archiv herunter."
      }
    ],
    "useCases": [
      {
        "title": "Social Media",
        "description": "Konvertieren Sie PDF-Folien in Bilder für Social-Media-Posts.",
        "icon": "share-2"
      },
      {
        "title": "Miniaturansichten",
        "description": "Generieren Sie Vorschau-Miniaturansichten für PDF-Dokumente.",
        "icon": "image"
      },
      {
        "title": "Web-Publishing",
        "description": "Konvertieren Sie PDF-Inhalte in webfreundliche Bildformate.",
        "icon": "globe"
      }
    ],
    "faq": [
      {
        "question": "Welche DPI sollte ich verwenden?",
        "answer": "72 DPI für Bildschirm, 150 DPI für allgemeine Nutzung, 300 DPI für Druckqualität."
      },
      {
        "question": "Welches Format ist am besten?",
        "answer": "PNG für Qualität/Transparenz, JPEG für kleine Größe, WebP für moderne Webnutzung."
      },
      {
        "question": "Kann ich bestimmte Seiten konvertieren?",
        "answer": "Ja, geben Sie Seitenbereiche wie \"1-5, 8, 10-15\" an, um nur diese Seiten zu konvertieren."
      }
    ]
  },
  "markdown-to-pdf": {
    "title": "Markdown zu PDF",
    "metaDescription": "Konvertieren Sie Markdown-Dateien in schön formatierte PDF-Dokumente. Unterstützung für GitHub Flavored Markdown und Syntax-Highlighting.",
    "keywords": [
      "markdown zu pdf",
      "md zu pdf",
      "markdown konvertieren",
      "gfm zu pdf",
      "markdown konverter"
    ],
    "description": "\n      <p>Markdown zu PDF konvertiert Ihre Markdown-Dateien in professionell gestaltete PDF-Dokumente. Unterstützung für CommonMark und GitHub Flavored Markdown (GFM) einschließlich Tabellen, Aufgabenlisten und Codeblöcken.</p>\n      <p>Wählen Sie aus mehreren Themes (hell, dunkel, GitHub) und passen Sie Seitengröße und Ränder an. Codeblöcke werden mit Syntax-Highlighting für bessere Lesbarkeit versehen.</p>\n      <p>Die gesamte Konvertierung erfolgt lokal in Ihrem Browser, sodass Ihre Inhalte privat bleiben.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Markdown-Datei hochladen",
        "description": "Laden Sie Ihre .md oder .markdown Datei hoch."
      },
      {
        "step": 2,
        "title": "Theme wählen",
        "description": "Wählen Sie ein visuelles Theme und konfigurieren Sie Seiteneinstellungen."
      },
      {
        "step": 3,
        "title": "Konvertieren und Herunterladen",
        "description": "Generieren Sie das gestaltete PDF und laden Sie es herunter."
      }
    ],
    "useCases": [
      {
        "title": "Dokumentation",
        "description": "Konvertieren Sie README-Dateien und Docs in teilbare PDFs.",
        "icon": "file-text"
      },
      {
        "title": "Notizen-Export",
        "description": "Exportieren Sie Markdown-Notizen als PDF zum Drucken oder Teilen.",
        "icon": "edit-3"
      },
      {
        "title": "Berichte",
        "description": "Erstellen Sie Berichte aus Markdown mit professionellem Styling.",
        "icon": "bar-chart"
      }
    ],
    "faq": [
      {
        "question": "Wird GitHub Flavored Markdown unterstützt?",
        "answer": "Ja, Tabellen, Aufgabenlisten, Durchstreichungen und andere GFM-Funktionen werden unterstützt."
      },
      {
        "question": "Kann ich das Styling anpassen?",
        "answer": "Wählen Sie aus voreingestellten Themes oder fügen Sie benutzerdefiniertes CSS für volle Kontrolle hinzu."
      },
      {
        "question": "Werden Codeblöcke hervorgehoben?",
        "answer": "Ja, Codeblöcke enthalten Syntax-Highlighting für gängige Sprachen."
      }
    ]
  },
  "font-to-outline": {
    "title": "Schrift zu Kontur",
    "metaDescription": "Entfernen Sie Schriftabhängigkeiten aus PDF-Dokumenten durch Konvertierung in hochwertige Bilder. Gewährleistet Kompatibilität auf allen Systemen.",
    "keywords": [
      "schrift zu kontur",
      "kontur schriften",
      "schriften entfernen",
      "schrift kompatibilität",
      "pdf schriften glätten",
      "pdf schrift entfernung"
    ],
    "description": "\n      <p>Schrift zu Kontur entfernt alle Schriftabhängigkeiten aus Ihrem PDF, indem jede Seite in hochwertige gerasterte Inhalte konvertiert wird. Dies stellt sicher, dass Ihr Dokument auf jedem System genau gleich aussieht, auch wenn die Originalschriften nicht installiert sind.</p>\n      <p>Das Tool rendert jede Seite mit Ihrer gewählten DPI (150-600), entfernt eingebettete Schriften und bewahrt dabei das exakte visuelle Erscheinungsbild. Optional können Sie eine unsichtbare Textebene hinzufügen, um die Durchsuchbarkeit zu erhalten.</p>\n      <p>Dies ist wichtig für Druckvorbereitung, plattformübergreifende Kompatibilität und zur Vermeidung von Schriftlizenzproblemen beim Teilen von Dokumenten. Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Laden Sie das PDF mit Schriften hoch, die Sie entfernen möchten."
      },
      {
        "step": 2,
        "title": "Qualität konfigurieren",
        "description": "Wählen Sie DPI (300 empfohlen für Druck, 150 für Bildschirm). Aktivieren Sie bei Bedarf durchsuchbaren Text."
      },
      {
        "step": 3,
        "title": "Konvertieren und Herunterladen",
        "description": "Verarbeiten Sie die Datei und laden Sie das schriftunabhängige PDF herunter."
      }
    ],
    "useCases": [
      {
        "title": "Druckvorbereitung",
        "description": "Beseitigen Sie Schriftprobleme bei kommerziellen Druckereien durch Entfernung aller Schriftabhängigkeiten.",
        "icon": "printer"
      },
      {
        "title": "Plattformübergreifendes Teilen",
        "description": "Teilen Sie Dokumente, die auf jedem Gerät identisch aussehen, unabhängig von installierten Schriften.",
        "icon": "share-2"
      },
      {
        "title": "Schriftlizenzierung",
        "description": "Entfernen Sie eingebettete Schriften, um Lizenzbedenken beim Verteilen von Dokumenten zu vermeiden.",
        "icon": "shield"
      }
    ],
    "faq": [
      {
        "question": "Wie funktioniert das?",
        "answer": "Das Tool rendert jede Seite in hoher Auflösung (Ihre gewählte DPI) und erstellt das PDF aus diesen Bildern neu, entfernt alle Schriftabhängigkeiten und bewahrt dabei das visuelle Erscheinungsbild."
      },
      {
        "question": "Kann ich nach der Konvertierung noch Text auswählen?",
        "answer": "Standardmäßig nein. Text wird Teil des Bildes. Sie können jedoch \"Durchsuchbaren Text bewahren\" aktivieren, um eine unsichtbare Textebene für Such- und Kopierfunktionen hinzuzufügen."
      },
      {
        "question": "Welche DPI sollte ich verwenden?",
        "answer": "300 DPI wird für Druckqualität empfohlen. 150 DPI ist für Bildschirmansicht ausreichend und erzeugt kleinere Dateien. 600 DPI für höchste Qualität, erzeugt aber große Dateien."
      },
      {
        "question": "Wird die Dateigröße zunehmen?",
        "answer": "Die Dateigröße hängt von DPI und Inhalt ab. 150 DPI erzeugt normalerweise kleinere Dateien, 300 DPI kann die Größe erhöhen, 600 DPI erhöht die Größe erheblich. Kompression wird automatisch angewendet."
      },
      {
        "question": "Ist dies umkehrbar?",
        "answer": "Nein, Schriftdaten werden dauerhaft entfernt. Bewahren Sie ein Backup des Originals auf, wenn Sie bearbeitbaren Text mit den Originalschriften benötigen."
      },
      {
        "question": "Was ist mit Vektorgrafiken?",
        "answer": "Vektorgrafiken (Formen, Linien) im Original-PDF werden zusammen mit Text in Raster konvertiert. Die visuelle Qualität wird bei Ihrer gewählten DPI bewahrt."
      }
    ]
  },
  "extract-tables": {
    "title": "Tabellen aus PDF extrahieren",
    "metaDescription": "Erkennen und extrahieren Sie Tabellen aus PDF-Dokumenten. Exportieren Sie in JSON-, Markdown- oder CSV-Formate.",
    "keywords": [
      "tabellen extrahieren",
      "pdf tabellen extraktion",
      "pdf zu csv",
      "pdf zu excel",
      "tabellen erkennung"
    ],
    "description": "\n      <p>Tabellen aus PDF extrahieren erkennt tabellarische Daten in Ihren PDF-Dokumenten und exportiert sie in strukturierten Formaten. Wählen Sie JSON für Datenintegration, Markdown für Dokumentation oder CSV für Tabellenkalkulationen.</p>\n      <p>Das Tool verwendet intelligente Erkennungsalgorithmen, um Tabellenstrukturen auch in komplexen Dokumenten zu identifizieren. Geben Sie Seitenbereiche an und passen Sie Erkennungsparameter für optimale Ergebnisse an.</p>\n      <p>Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser, sodass Ihre Dokumente privat bleiben.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Laden Sie das PDF mit Tabellen hoch, die Sie extrahieren möchten."
      },
      {
        "step": 2,
        "title": "Erkennung konfigurieren",
        "description": "Legen Sie Seitenbereich und Mindest-Spalten-/Zeilenschwellenwerte fest."
      },
      {
        "step": 3,
        "title": "Exportieren und Herunterladen",
        "description": "Wählen Sie Ausgabeformat (JSON/Markdown/CSV) und laden Sie herunter."
      }
    ],
    "useCases": [
      {
        "title": "Datenanalyse",
        "description": "Extrahieren Sie Tabellendaten zur Analyse in Tabellenkalkulationen oder Datenbanken.",
        "icon": "bar-chart"
      },
      {
        "title": "Berichtsverarbeitung",
        "description": "Ziehen Sie Tabellen aus PDF-Berichten zur weiteren Verarbeitung.",
        "icon": "file-text"
      },
      {
        "title": "Dokumentation",
        "description": "Konvertieren Sie PDF-Tabellen in Markdown für technische Dokumentation.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "Können komplexe Tabellen erkannt werden?",
        "answer": "Das Tool funktioniert am besten mit einfachen Rastertabellen. Komplexe verbundene Zellen erfordern möglicherweise manuelle Anpassung."
      },
      {
        "question": "Was wenn keine Tabellen gefunden werden?",
        "answer": "Versuchen Sie, den Mindest-Spalten-/Zeilenschwellenwert anzupassen oder prüfen Sie, ob das PDF tatsächliche Tabellenstrukturen enthält."
      },
      {
        "question": "Kann ich von bestimmten Seiten extrahieren?",
        "answer": "Ja, geben Sie einen Seitenbereich an, um die Extraktion auf bestimmte Seiten zu beschränken."
      }
    ]
  },
  "deskew-pdf": {
    "title": "PDF begradigen",
    "metaDescription": "Begradigen Sie automatisch gescannte oder geneigte PDF-Seiten. Korrigieren Sie schiefe Dokumente mit präziser Winkelerkennung.",
    "keywords": [
      "pdf begradigen",
      "pdf gerade machen",
      "geneigten scan korrigieren",
      "pdf automatisch drehen",
      "pdf winkel korrigieren"
    ],
    "description": "\n      <p>PDF begradigen erkennt und korrigiert automatisch geneigte oder schiefe Seiten in Ihren PDF-Dokumenten mithilfe einer erweiterten Varianzanalyse des Projektionsprofils. Dies ist wichtig für gescannte Dokumente, die in einem Winkel in den Scanner eingelegt wurden.</p>\n      <p>Das Tool analysiert die Text- und Inhaltsausrichtung in verschiedenen Winkeln, um die optimale Rotation zu finden, und wendet dann die Korrektur an. Sie können den Empfindlichkeitsschwellenwert (1-30) und die DPI-Einstellungen (72-300) für optimale Ergebnisse anpassen.</p>\n      <p>Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser mit WebAssembly-Technologie, sodass Ihre Dokumente privat und sicher bleiben.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Ziehen Sie Ihre gescannte PDF-Datei per Drag & Drop oder klicken Sie, um auszuwählen."
      },
      {
        "step": 2,
        "title": "Einstellungen konfigurieren",
        "description": "Passen Sie bei Bedarf den Empfindlichkeitsschwellenwert und DPI für eine bessere Erkennung an."
      },
      {
        "step": 3,
        "title": "Verarbeiten und Herunterladen",
        "description": "Klicken Sie auf Begradigen, um Seiten zu begradigen und das korrigierte PDF herunterzuladen."
      }
    ],
    "useCases": [
      {
        "title": "Gescannte Dokumente",
        "description": "Korrigieren Sie Seiten, die in einem Winkel von Dokumenteneinzügen gescannt wurden.",
        "icon": "scan"
      },
      {
        "title": "Mobile Scans",
        "description": "Korrigieren Sie geneigte Fotos von Dokumenten, die mit Smartphones aufgenommen wurden.",
        "icon": "smartphone"
      },
      {
        "title": "Archivwiederherstellung",
        "description": "Begradigen Sie alte gescannte Archive für bessere Lesbarkeit.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Wie genau ist die Winkelerkennung?",
        "answer": "Das Tool verwendet Varianzanalyse des Projektionsprofils, um Schräglagenwinkel von bis zu ±10 Grad mit hoher Genauigkeit zu erkennen. Es überspringt automatisch Seiten mit Winkeln unter 0,3 Grad."
      },
      {
        "question": "Wird die Textqualität beeinträchtigt?",
        "answer": "Bei Rotationen in Vielfachen von 90 Grad tritt kein Qualitätsverlust auf. Bei anderen Winkeln rundet das Tool auf den nächsten Grad und behält eine gute Qualität bei."
      },
      {
        "question": "Kann ich nur bestimmte Seiten begradigen?",
        "answer": "Das Tool analysiert alle Seiten, korrigiert aber nur solche mit erkannten Schräglagen über dem Empfindlichkeitsschwellenwert. Seiten mit minimaler Schräglage bleiben unverändert."
      },
      {
        "question": "Was ist der Empfindlichkeitsschwellenwert?",
        "answer": "Werte 1-10 korrigieren nur offensichtliche Neigungen, 11-20 erkennen moderate Schräglagen und 21-30 erfassen subtile Winkel. Der Standardwert ist 10 für ausgewogene Erkennung."
      },
      {
        "question": "Wie lange dauert die Verarbeitung?",
        "answer": "Die Verarbeitungszeit hängt von der Dateigröße und DPI ab. 150 DPI (Standard) bietet ein gutes Gleichgewicht zwischen Geschwindigkeit und Genauigkeit. Höhere DPI ist genauer, aber langsamer."
      }
    ]
  },
  "pdf-to-pdfa": {
    "title": "PDF zu PDF/A",
    "metaDescription": "Konvertieren Sie PDF in das PDF/A-Archivformat. Gewährleisten Sie langfristige Dokumentenerhaltung mit ISO-Standards.",
    "keywords": [
      "pdf zu pdfa",
      "pdfa konverter",
      "pdf archivieren",
      "pdf archivierung",
      "langfristige erhaltung"
    ],
    "description": "\n      <p>PDF zu PDF/A konvertiert Ihre PDF-Dokumente in das PDF/A-Format, den ISO-Standard für langfristige Dokumentenarchivierung. PDF/A stellt sicher, dass Dokumente jahrzehntelang sichtbar und reproduzierbar bleiben.</p>\n      <p>Wählen Sie zwischen PDF/A-1b (grundlegende Konformität), PDF/A-2b (empfohlen, unterstützt Transparenz) oder PDF/A-3b (ermöglicht eingebettete Dateien). Das Tool bettet Schriftarten ein und glättet Transparenz nach Bedarf.</p>\n      <p>Die gesamte Konvertierung erfolgt lokal in Ihrem Browser, sodass Ihre Dokumente privat bleiben.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Laden Sie das PDF hoch, das Sie in PDF/A konvertieren möchten."
      },
      {
        "step": 2,
        "title": "PDF/A-Level auswählen",
        "description": "Wählen Sie das Konformitätsniveau PDF/A-1b, PDF/A-2b oder PDF/A-3b."
      },
      {
        "step": 3,
        "title": "Konvertieren und Herunterladen",
        "description": "Konvertieren Sie in PDF/A und laden Sie das Archivdokument herunter."
      }
    ],
    "useCases": [
      {
        "title": "Rechtsarchive",
        "description": "Konvertieren Sie Rechtsdokumente in PDF/A für gerichtlich zulässige langfristige Speicherung.",
        "icon": "scale"
      },
      {
        "title": "Regierungsaufzeichnungen",
        "description": "Erfüllen Sie Regierungsarchivanforderungen mit PDF/A.",
        "icon": "building"
      },
      {
        "title": "Geschäftsarchive",
        "description": "Bewahren Sie wichtige Geschäftsdokumente für zukünftige Zugänglichkeit auf.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Welches PDF/A-Level soll ich verwenden?",
        "answer": "PDF/A-2b wird für die meisten Anwendungen empfohlen. Verwenden Sie 1b für maximale Kompatibilität oder 3b, wenn Sie eingebettete Dateien benötigen."
      },
      {
        "question": "Was macht PDF/A anders?",
        "answer": "PDF/A bettet Schriftarten ein, deaktiviert Verschlüsselung und stellt sicher, dass alle Elemente für zukünftige Betrachtung eigenständig sind."
      },
      {
        "question": "Kann ich von PDF/A zurückkonvertieren?",
        "answer": "PDF/A-Dateien sind Standard-PDFs und können normal geöffnet werden. Die Archivfunktionen fügen Einschränkungen hinzu, keine Limitierungen."
      }
    ]
  },
  "digital-sign-pdf": {
    "title": "Digitale Signatur",
    "metaDescription": "Fügen Sie X.509 digitale Signaturen zu PDF-Dokumenten hinzu. Signieren Sie PDFs mit PFX-, P12- oder PEM-Zertifikaten für rechtliche Gültigkeit.",
    "keywords": [
      "digitale signatur pdf",
      "x509 zertifikat",
      "pfx signatur",
      "p12 signatur",
      "pem signatur",
      "elektronische signatur"
    ],
    "description": "<p>Das Tool für digitale Signaturen ermöglicht es Ihnen, kryptografische X.509 digitale Signaturen zu PDF-Dokumenten hinzuzufügen.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Laden Sie das PDF-Dokument hoch, das Sie digital signieren möchten."
      },
      {
        "step": 2,
        "title": "Zertifikat laden",
        "description": "Laden Sie Ihre X.509-Zertifikatsdatei (.pfx, .p12 oder .pem) hoch und geben Sie das Passwort ein."
      },
      {
        "step": 3,
        "title": "Signieren und Herunterladen",
        "description": "Klicken Sie auf PDF signieren, um die digitale Signatur anzuwenden und laden Sie das signierte Dokument herunter."
      }
    ],
    "useCases": [
      {
        "title": "Rechtsdokumente",
        "description": "Signieren Sie Verträge und Rechtsdokumente mit rechtlich bindenden digitalen Signaturen.",
        "icon": "scale"
      },
      {
        "title": "Geschäftsgenehmigungen",
        "description": "Signieren Sie Rechnungen und Genehmigungsdokumente digital für Prüfpfade.",
        "icon": "briefcase"
      },
      {
        "title": "Dokumentenintegrität",
        "description": "Stellen Sie sicher, dass Dokumente nach der Signierung nicht verändert wurden.",
        "icon": "shield-check"
      }
    ],
    "faq": [
      {
        "question": "Welche Zertifikatsformate werden unterstützt?",
        "answer": "PFX (.pfx), PKCS#12 (.p12) und PEM (.pem) Zertifikatsformate werden unterstützt."
      },
      {
        "question": "Ist die Signatur rechtlich gültig?",
        "answer": "Ja, X.509 digitale Signaturen mit einem gültigen Zertifikat sind in den meisten Rechtsordnungen rechtlich anerkannt."
      },
      {
        "question": "Kann ich eine sichtbare Signatur hinzufügen?",
        "answer": "Ja, Sie können eine sichtbare Signatur mit benutzerdefiniertem Text, Bild, Position und Stil hinzufügen."
      }
    ]
  },
  "validate-signature": {
    "title": "Signatur Validieren",
    "metaDescription": "Überprüfen Sie digitale Signaturen in PDF-Dokumenten. Prüfen Sie Zertifikatsgültigkeit, Unterzeichnerinformationen und Dokumentenintegrität.",
    "keywords": [
      "pdf signatur validieren",
      "digitale signatur überprüfen",
      "pdf zertifikat prüfen",
      "signaturverifizierung"
    ],
    "description": "<p>Das Tool Signatur Validieren ermöglicht es Ihnen, digitale Signaturen in PDF-Dokumenten zu überprüfen.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Signiertes PDF hochladen",
        "description": "Laden Sie ein PDF-Dokument hoch, das digitale Signaturen enthält."
      },
      {
        "step": 2,
        "title": "Ergebnisse anzeigen",
        "description": "Sehen Sie alle im Dokument gefundenen Signaturen mit ihrem Gültigkeitsstatus."
      },
      {
        "step": 3,
        "title": "Bericht exportieren",
        "description": "Laden Sie optional einen JSON-Bericht der Validierungsergebnisse herunter."
      }
    ],
    "useCases": [
      {
        "title": "Dokumentenverifizierung",
        "description": "Überprüfen Sie, dass signierte Dokumente authentisch sind und nicht verändert wurden.",
        "icon": "shield-check"
      },
      {
        "title": "Compliance-Audit",
        "description": "Prüfen Sie die Signaturgültigkeit für Compliance- und Auditzwecke.",
        "icon": "clipboard-check"
      },
      {
        "title": "Zertifikatsüberprüfung",
        "description": "Sehen Sie Zertifikatsdetails und Ablaufdaten von signierten Dokumenten.",
        "icon": "award"
      }
    ],
    "faq": [
      {
        "question": "Was bedeutet \"gültig\"?",
        "answer": "Eine gültige Signatur bedeutet, dass das Dokument seit der Signierung nicht geändert wurde und die Zertifikatskette intakt ist."
      },
      {
        "question": "Kann ich mehrere PDFs validieren?",
        "answer": "Ja, Sie können mehrere PDFs hochladen und alle Signaturen im Stapel validieren."
      },
      {
        "question": "Warum könnte eine Signatur ungültig sein?",
        "answer": "Signaturen können ungültig sein, wenn das Dokument geändert wurde, das Zertifikat abgelaufen ist oder das Zertifikat nicht vertrauenswürdig ist."
      }
    ]
  },
  "form-logic-designer": {
    "title": "Formularlogik designen",
    "metaDescription": "Entwerfen Sie dynamische Verhaltensweisen über eine Milchglas-Knotenleinwand und injizieren Sie interaktive AcroJS-Logik in PDF-Formulare.",
    "keywords": [
      "PDF Formularlogik",
      "AcroJS Injektion",
      "Knotenfluss",
      "interaktives PDF",
      "Feldabhängigkeiten"
    ],
    "description": "\n        <p>Der Interaktive Formularlogik-Designer ist ein zukunftsweisendes Tool, das eine große Lücke in den PDF-Funktionen schließt: Die Erstellung aktiver, reaktionsfähiger Felder anstelle von flachen, statischen Formularen.</p>\n        <p>Über unsere visuelle Leinwand mit \"leuchtenden Milchglasknoten\" (basierend auf React Flow) werden Formularfelder als verbundene Module dargestellt. Sie können Verbindungen ziehen, um Beziehungen zu definieren: z. B. wenn ein Kontrollkästchen aktiviert ist ➜ Texteingabe aktivieren ➜ Werte automatisch berechnen und ein Gesamtfeld aktualisieren.</p>\n        <p>Nach dem Entwurf kompiliert die AcroJS-Engine die Logik in offizielles Acrobat JavaScript und injiziert es in die '/AA'-Wörterbücher (Zusätzliche Aktionen) des AcroForm. Die interaktiven Verhaltensweisen werden nativ in jedem Standard-PDF-Reader ausgeführt.</p>\n      ",
    "howToUse": [
      {
        "step": 1,
        "title": "Interaktives PDF hochladen",
        "description": "Stellen Sie eine PDF-Datei bereit, die bereits aktive Formularfelder (AcroForm) enthält."
      },
      {
        "step": 2,
        "title": "Logik auf Leinwand entwerfen",
        "description": "Verbinden Sie Felder als Knoten. Verknüpfen Sie Ausgangsereignisse (Änderung, Fokusverlust) mit Zielaktionen (Anzeigen, Ausblenden, Berechnen, Deaktivieren)."
      },
      {
        "step": 3,
        "title": "Kompilieren und injizieren",
        "description": "Injizieren Sie die kompilierte JavaScript-Logik in das PDF-Wörterbuch und speichern Sie das fertige intelligente Dokument."
      }
    ],
    "useCases": [
      {
        "title": "Intelligente Geschäftsverträge",
        "description": "Zusätzliche Eingabefelder basierend auf den vom Kunden ausgewählten Bedingungen dynamisch anzeigen oder ausblenden.",
        "icon": "file-signature"
      },
      {
        "title": "Automatisierte Spesenformulare",
        "description": "Mehrere Spesenzeilen addieren und Steuern dynamisch ohne manuelle Berechnung ermitteln.",
        "icon": "calculator"
      },
      {
        "title": "Interaktive Fragebögen",
        "description": "Irrelevante Fragen basierend auf vorherigen Antworten überspringen, um ein saubereres Ausfüllen auf Mobilgeräten zu ermöglichen.",
        "icon": "form-input"
      }
    ],
    "faq": [
      {
        "question": "Benötige ich ein PDF mit bereits vorhandenen Feldern?",
        "answer": "Ja. Dieses Tool dient dazu, Logikregeln an bestehende Felder zu binden. Wenn Ihre PDF-Datei keine interaktiven Felder hat, verwenden Sie zuerst unser Tool Formularersteller, um Eingabefelder und Kontrollkästchen hinzuzufügen."
      },
      {
        "question": "Funktioniert diese Logik auf jedem PDF-Reader?",
        "answer": "Sie läuft auf allen PDF-Readern, die den Adobe-PDF-Standards entsprechen und Acrobat JavaScript unterstützen (wie Adobe Acrobat Reader, Foxit Reader und gängige Webbrowser). Minimalistische mobile Reader unterstützen möglicherweise nur grundlegende Aktionen."
      },
      {
        "question": "Beeinflusst dies den Papierdruck?",
        "answer": "Überhaupt nicht. Die injizierten Skripte werden nur auf dem Bildschirm während des Ausfüllens des Formulars ausgeführt. Beim Drucken wird der aktuelle Zustand der Felder statisch ohne Knotendarstellung gedruckt."
      }
    ]
  },
  "global-invoice-parser": {
    "title": "Rechnungsübersetzung & Umrechnung",
    "metaDescription": "Währungssummen aus multinationalen Rechnungen extrahieren, Berechnungen durchführen und interaktive Wechselkursbelege im Milchglas-Design aufbringen.",
    "keywords": [
      "Rechnung übersetzen",
      "Rechnungswährungskonverter",
      "Wechselkursrechner PDF",
      "lokale Währung stempeln",
      "globales Rechnungstool"
    ],
    "description": "\n        <p>Der Globale Rechnungsübersetzer bietet maximale Klarheit für internationale Finanzteams und globale Einkäufer.</p>\n        <p>Die Bearbeitung von Rechnungen in mehreren Währungen ($, €, ¥) erfordert oft mühsame manuelle Berechnungen. Dieses Tool ermöglicht die <strong>direkte Übersetzung von Bezeichnungen und die Umrechnung von Wechselkursen in Echtzeit</strong>.</p>\n        <p>Es scannt das Dokument nach Preissummen, führt Berechnungen basierend auf Währungsbenchmarks durch und stempelt einen eleganten, halbtransparenten Wechselkursbeleg im Milchglas-Design auf den Seitenrand. Es wird mit einem großartigen visuellen Effekt einer sich drehenden Slot-Machine dargestellt, was absolute Kontrolle in die globale Abrechnung bringt.</p>\n      ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF-Rechnung hochladen",
        "description": "Importieren Sie eine in Fremdwährung ausgestellte Rechnung (z. B. USD, EUR, JPY)."
      },
      {
        "step": 2,
        "title": "Lokale Währung auswählen",
        "description": "Wählen Sie Ihre lokale Währung (z. B. EUR) und geben Sie einen benutzerdefinierten Kurs oder den Echtzeit-Wechselkurs an."
      },
      {
        "step": 3,
        "title": "Belegstempel aufbringen",
        "description": "Klicken Sie auf Ausführen, um den für die Buchhaltung vorbereiteten Wechselkursbeleg über das Dokument zu legen."
      }
    ],
    "useCases": [
      {
        "title": "Spesenabrechnung bei Auslandsgeschäftsreisen",
        "description": "Reisekostenrechnungen in die lokale Währung umrechnen und Wechselkursdetails aufstempeln, um Buchhaltungsabläufe zu erleichtern.",
        "icon": "plane"
      },
      {
        "title": "Prüfung grenzüberschreitender Einkäufe",
        "description": "Rechnungsspalten übersetzen und die tatsächlichen Kosten von E-Commerce-Waren ermitteln.",
        "icon": "credit-card"
      },
      {
        "title": "Internationale Geschäftsbuchhaltung",
        "description": "Konsistente Umrechnungsbelege auf Unternehmensrechnungen stempeln, um Jahresabschlussprüfungen zu rationalisieren.",
        "icon": "folder-open"
      }
    ],
    "faq": [
      {
        "question": "Wie werden Rechnungsbeträge erkannt?",
        "answer": "Der Zeichensatz wird nach Währungssymbolen gescannt und semantische Überschriften wie \"Gesamtsumme\" oder \"Fällig\" werden analysiert, um die endgültige Rechnungssumme zu lokalisieren."
      },
      {
        "question": "Werden Wechselkurse in Echtzeit abgerufen?",
        "answer": "Ja. Standardmäßig werden die Basiskurse von Standard-Finanz-APIs abgerufen. Sie können auch benutzerdefinierte Kurse für interne Audits angeben."
      },
      {
        "question": "Verdeckt der gestempelte Beleg wichtige Rechnungsdetails?",
        "answer": "Die Engine scannt den Seitenrand, um die optimale Positionierung zu finden. Der Stempel ist halbtransparent und fügt sich elegant in Ihre Layouts ein."
      }
    ]
  },
  "pdf-to-cbz": {
    "title": "PDF in CBZ umwandeln",
    "metaDescription": "Konvertieren Sie PDF-Dateien in das CBZ-Comic-Format. Bildreihenfolge und Qualität bleiben erhalten.",
    "keywords": [
      "pdf in cbz",
      "comic konverter",
      "cbz datei"
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
    "title": "PDF überlagern",
    "metaDescription": "Legen Sie zwei PDF-Seiten übereinander. Ideal für Stempel, Briefpapier und Wasserzeichen.",
    "keywords": [
      "pdf überlagern",
      "pdf overlay",
      "stempel aufbringen"
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
    "title": "PDF-Zeitstempel",
    "metaDescription": "Fügen Sie PDF-Dokumenten einen sicheren RFC 3161-Zeitstempel hinzu. Weisen Sie das Erstellungsdatum nach.",
    "keywords": [
      "pdf zeitstempel",
      "rfc 3161",
      "digitaler zeitstempel"
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
    "title": "Seitenbeschriftungen hinzufügen",
    "metaDescription": "Legen Sie benutzerdefinierte Seitenbeschriftungen fest (z. B. I, II für Vorwort). Verbessert die Navigation.",
    "keywords": [
      "seitenbeschriftung",
      "pdf logische seiten",
      "seiten nummerieren"
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
    "title": "AI PDF-Textfluss-Anpassung",
    "metaDescription": "Strukturieren Sie PDF-Dokumente für mobile Bildschirme um. Unterstützung für Markdown- und EPUB-Export.",
    "keywords": [
      "pdf textfluss",
      "mobiles pdf",
      "pdf in markdown",
      "epub export"
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
    "title": "Zitierungs-Verlinker",
    "metaDescription": "Erkennen und aktivieren Sie Zitate in PDFs. Verknüpfen Sie diese mit anklickbaren DOIs oder internen Sprungmarken.",
    "keywords": [
      "zitate verlinken",
      "doi verknüpfung",
      "pdf hyperlink",
      "wissenschaftliches pdf"
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
    "title": "PDF-Vektorenextraktor",
    "metaDescription": "Konvertieren Sie PDFs in verlustfreie SVGs. Wählen Sie Vektorgrafiken und Logos aus und exportieren Sie diese.",
    "keywords": [
      "vektoren extrahieren",
      "pdf in svg",
      "logo extrahieren",
      "konstruktionszeichnung"
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
    "title": "Tiefenbereinigung von Metadaten",
    "metaDescription": "Löschen Sie versteckte Metadaten, Bearbeitungsverlauf, Ebenen und verwaiste Objekte aus PDFs zum Schutz der Privatsphäre.",
    "keywords": [
      "pdf bereinigen",
      "metadaten loeschen",
      "datenschutz pdf",
      "spuren verwischen"
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
    "title": "3D-Broschüren-Faltsimulator",
    "metaDescription": "Simulieren Sie das Falzen und Heften von Druckbögen in einer interaktiven 3D-Ansicht basierend auf Ihrem PDF.",
    "keywords": [
      "falzsimulation",
      "ausschießen pdf",
      "broschuerendruck",
      "3d heftung"
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
    "title": "PDF in Präsentation",
    "metaDescription": "Analysieren Sie PDFs und extrahieren Sie Gliederungen und Vektorgrafiken in eine bearbeitbare PPTX-Präsentation.",
    "keywords": [
      "pdf in ppt",
      "praesentation erstellen",
      "pptx konverter",
      "diagramme extrahieren"
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
    "title": "e-Ink Reader-Optimierer",
    "metaDescription": "Optimieren Sie PDFs für e-Ink-Displays durch Hintergrundentfernung, Otsu-Binarisierung und Textverdickung.",
    "keywords": [
      "e-ink optimieren",
      "binarisierung",
      "text fetten",
      "lesbarkeit e-reader"
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
    "title": "Zertifikat verschlüsseln",
    "metaDescription": "Verschlüsseln Sie PDFs mit Empfängerzertifikaten und bringen Sie ein plastisches 3D-Wachssiegel sowie PKCS#7-Signaturen auf.",
    "keywords": [
      "zertifikat verschluesseln",
      "wachssiegel",
      "digitale signatur",
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
    "title": "Ausweis-Kopierer",
    "metaDescription": "Kombinieren Sie die Vorder- und Rückseite von Ausweisen oder Pässen auf einer A4-Seite mit Wasserzeichen.",
    "keywords": [
      "ausweis kopieren",
      "ausweiskopie a4",
      "pass kopieren",
      "wasserzeichen"
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
    "title": "Anmerkungen exportieren",
    "metaDescription": "Exportieren Sie Hervorhebungen, Notizen und Kommentare aus Ihren PDFs in ein strukturiertes Markdown-Dokument.",
    "keywords": [
      "anmerkungen exportieren",
      "pdf highlights",
      "lesenotizen",
      "markdown export"
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
    "title": "Wasserzeichen entfernen",
    "metaDescription": "Analysieren Sie PDF-Inhaltsströme und löschen Sie Text- und Bild-Wasserzeichen (XObjects) rückstandslos.",
    "keywords": [
      "wasserzeichen entfernen",
      "pdf bereinigen",
      "hintergrundlogo loeschen"
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
    "title": "Daten schwärzen",
    "metaDescription": "Erkennen Sie E-Mails, Telefonnummern und Ausweisdaten in PDFs und schwärzen Sie diese physisch und unumkehrbar.",
    "keywords": [
      "pdf schwaerzen",
      "datenschutz pdf",
      "zensieren",
      "anonymisieren"
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
    "title": "Lesezeichen generieren",
    "metaDescription": "Analysieren Sie Schriftgrößen und Hierarchien, um automatisch eine verschachtelte Lesezeichen-Gliederung zu erstellen.",
    "keywords": [
      "lesezeichen erstellen",
      "pdf gliederung",
      "inhaltsverzeichnis pdf"
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
    "title": "Barcodes einfügen",
    "metaDescription": "Fügen Sie ausgewählten Seiten Ihres PDFs an bestimmten Koordinaten Barcodes (Code 128) oder QR-Codes hinzu.",
    "keywords": [
      "barcodes einfuegen",
      "qr code pdf",
      "rechnungsdokumente",
      "code 128"
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
    "title": "Unterschriften extrahieren",
    "metaDescription": "Extrahieren Sie Unterschriften und Stempel aus Scans und entfernen Sie Hintergrundgeräusche für transparente PNGs.",
    "keywords": [
      "unterschrift freistellen",
      "stempel digitalisieren",
      "transparentes png"
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
    "title": "Links reparieren",
    "metaDescription": "Scannen Sie PDF-Dokumente auf ungültige Links (/URI) und korrigieren oder leiten Sie diese direkt um.",
    "keywords": [
      "links reparieren pdf",
      "tote links checken",
      "url aendern pdf"
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
    "title": "Interaktives Inhaltsverzeichnis",
    "metaDescription": "Fügen Sie ein anklickbares Inhaltsverzeichnis ein, das mit Zielseiten verknüpft ist, inklusive Zurück-Schaltflächen (↩).",
    "keywords": [
      "inhaltsverzeichnis erstellen",
      "toc generator",
      "pdf navigation"
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
    "title": "PDF-Scans geraderichten",
    "metaDescription": "Erkennen Sie Neigungswinkel in gescannten PDFs automatisch und richten Sie schiefe Seiten exakt horizontal aus.",
    "keywords": [
      "pdf gerade richten",
      "deskew scan",
      "seite ausrichten",
      "schiefe scans"
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
    "title": "Zweispaltiges Layout anpassen",
    "metaDescription": "Teilen Sie zweispaltige PDF-Layouts wie wissenschaftliche Artikel verlustfrei in einen einspaltigen Lesefluss auf.",
    "keywords": [
      "zweispaltig pdf",
      "einspaltig anpassen",
      "cropbox split",
      "artikel reflow"
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
    "title": "PDF-Seitengrößen vereinheitlichen",
    "metaDescription": "Skalieren Sie PDF-Seiten mit unterschiedlichen Formaten automatisch auf ein einheitliches Zielformat (z. B. A4).",
    "keywords": [
      "seitengroesse anpassen",
      "pdf auf a4 skalieren",
      "einheitliche seiten"
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
    "title": "Handschriften-Kontrast verstärken",
    "metaDescription": "Entfernen Sie Schatten und Flecken aus Dokumenten und verstärken Sie blaue/schwarze Tinte sowie rote Stempel.",
    "keywords": [
      "handschrift verstaerken",
      "unterschrift klarer machen",
      "scans aufbereiten"
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
    "title": "Buchrücken-Breite berechnen",
    "metaDescription": "Berechnen Sie die Rückenbreite basierend auf Seitenanzahl und Grammatur und erstellen Sie ein Cover-Layout mit Falzlinien.",
    "keywords": [
      "buchruecken breite berechnen",
      "bindung planen",
      "cover layout pdf"
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
    "title": "Signatur-Positionierungsführung",
    "metaDescription": "Bringen Sie Hinweismarkierungen und Navigationselemente an den Stellen auf, an denen Unterschriften benötigt werden.",
    "keywords": [
      "signatur markierung",
      "unterschrift platzieren",
      "vertragsunterzeichnung"
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
    "title": "Großformat verlustfrei zuschneiden",
    "metaDescription": "Zuschneiden von großformatigen Plänen und Vektorgrafiken ohne Qualitätsverlust durch präzise CropBox-Modifikation.",
    "keywords": [
      "verlustfrei zuschneiden",
      "plan zuschneiden",
      "cropbox aendern",
      "vektor crop"
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
    "title": "Notizblock-Raster anheften",
    "metaDescription": "Erweitern Sie PDF-Seiten um einen Notizbereich am Rand mit Raster- oder Linienmuster für eigene Mitschriften.",
    "keywords": [
      "notizrand hinzufuegen",
      "rasterpapier pdf",
      "pdf verlaengern"
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
    "title": "Passbild-Druckbogen erstellen",
    "metaDescription": "Ordnen Sie Passfotos automatisch auf Fotopapier (5\" oder 6\") an, inklusive Schnittmarken für den Druck.",
    "keywords": [
      "passbild bogen",
      "fotodruck vorbereiten",
      "schnittmarken",
      "foto layout"
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
  "bmp-to-pdf": {
    "title": "BMP in PDF",
    "metaDescription": "Konvertieren Sie BMP-Bitmap-Bilder in PDF. Unterstützung für Legacy-Formate unter Erhaltung der Qualität.",
    "keywords": [
      "bmp in pdf",
      "bmp konvertieren",
      "bitmap in pdf",
      "bmp-konverter",
      "bmp zu pdf"
    ],
    "description": "\n      <p>Mit „BMP in PDF“ können Sie Bitmap-Bilder in PDF-Dokumente konvertieren. BMP ist ein älteres Bildformat, das häufig in Windows-Umgebungen verwendet wird. Dieses Tool macht es einfach, diese Dateien in das moderne PDF-Format zu konvertieren.</p>\n      <p>Kombinieren Sie mehrere BMP-Dateien zu einer einzigen PDF-Datei mit anpassbaren Einstellungen. Bei der Konvertierung werden die typischerweise großen BMP-Dateien komprimiert, während die Bildqualität erhalten bleibt.</p>\n      <p>Die gesamte Konvertierung findet in Ihrem Browser statt, sodass Ihre Bilder privat bleiben.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "BMP-Dateien hochladen",
        "description": "Ziehen Sie Ihre BMP-Bilder per Drag-and-Drop in den Bereich oder klicken Sie, um Dateien auszuwählen."
      },
      {
        "step": 2,
        "title": "Optionen konfigurieren",
        "description": "Ordnen Sie die Bilder an und wählen Sie die Seiteneinstellungen aus."
      },
      {
        "step": 3,
        "title": "Konvertieren und herunterladen",
        "description": "Klicken Sie auf „Konvertieren“, um Ihre PDF-Datei zu erstellen."
      }
    ],
    "useCases": [
      {
        "title": "Konvertierung von Legacy-Dateien",
        "description": "Konvertieren Sie alte BMP-Dateien in das moderne PDF-Format.",
        "icon": "history"
      },
      {
        "title": "Windows-Screenshots",
        "description": "Konvertieren Sie Windows-Bitmap-Screenshots in PDF.",
        "icon": "monitor"
      },
      {
        "title": "Archivmodernisierung",
        "description": "Aktualisieren Sie ältere Bildarchive in das PDF-Format.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Wird die Dateigröße reduziert?",
        "answer": "Ja, BMP-Dateien werden bei der Konvertierung in PDF in der Regel erheblich komprimiert."
      },
      {
        "question": "Bleibt die Qualität erhalten?",
        "answer": "Ja, die Bildqualität bleibt während der Konvertierung erhalten."
      },
      {
        "question": "Welche BMP-Farbtiefen werden unterstützt?",
        "answer": "Es werden alle Standard-BMP-Farbtiefen unterstützt, einschließlich 24-Bit und 32-Bit."
      }
    ]
  },
  "psd-to-pdf": {
    "title": "PSD in PDF",
    "metaDescription": "Konvertieren Sie Adobe Photoshop-Dateien (PSD) in das PDF-Format. Unterstützt mehrere Dateien und bewahrt die Bildqualität.",
    "keywords": [
      "psd in pdf",
      "psd konvertieren",
      "photoshop in pdf",
      "psd-konverter",
      "adobe psd in pdf",
      "psd zu pdf"
    ],
    "description": "\n      <p>„PSD in PDF“ konvertiert Adobe Photoshop-Dateien (PSD) in PDF-Dokumente. Mit diesem Tool können Sie PSD-Designs anzeigen und teilen, ohne dass Photoshop installiert sein muss.</p>\n      <p>Sie können mehrere PSD-Dateien gleichzeitig konvertieren und in einem einzigen PDF-Dokument zusammenfassen. Das Tool verarbeitet jede PSD-Datei und rendert die sichtbaren Ebenen in qualitativ hochwertige PDF-Seiten.</p>\n      <p>Die gesamte Konvertierung erfolgt lokal in Ihrem Browser, wodurch sichergestellt wird, dass Ihre Designs privat und geschützt bleiben.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PSD-Dateien hochladen",
        "description": "Ziehen Sie Ihre PSD- oder PSB-Dateien per Drag-and-Drop oder klicken Sie, um sie von Ihrem Gerät auszuwählen."
      },
      {
        "step": 2,
        "title": "Reihenfolge anordnen",
        "description": "Ziehen Sie die Miniaturansichten der Dateien per Drag-and-Drop, um sie in der gewünschten Reihenfolge anzuordnen."
      },
      {
        "step": 3,
        "title": "Konvertieren und herunterladen",
        "description": "Klicken Sie auf „Konvertieren“, um die PSDs zu rendern und Ihr PDF-Dokument herunterzuladen."
      }
    ],
    "useCases": [
      {
        "title": "Designs teilen",
        "description": "Teilen Sie Photoshop-Designs mit Kunden oder Kollegen, die kein Photoshop haben.",
        "icon": "share-2"
      },
      {
        "title": "Portfolio-Erstellung",
        "description": "Stellen Sie Ihre Designarbeiten in einem professionellen PDF-Portfolio zusammen.",
        "icon": "layout"
      },
      {
        "title": "Druckvorbereitung",
        "description": "Konvertieren Sie Designs für den Druck in PDF.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Muss Photoshop installiert sein?",
        "answer": "Nein, dieses Tool läuft vollständig in Ihrem Browser, ohne dass Adobe Photoshop erforderlich ist."
      },
      {
        "question": "Bleiben die Ebenen erhalten?",
        "answer": "Das Tool rendert den sichtbaren Zustand der PSD-Datei (zusammengesetztes Bild). Die einzelnen Ebenen werden im PDF auf eine Ebene reduziert (flachgelegt)."
      },
      {
        "question": "Wie hoch ist die maximale Dateigröße?",
        "answer": "Sie können Dateien mit einer Größe von jeweils bis zu 100 MB hochladen. Die Verarbeitung großer PSD-Dateien kann einen Moment dauern."
      }
    ]
  },
  "tiff-to-pdf": {
    "title": "TIFF in PDF",
    "metaDescription": "Konvertieren Sie TIFF-Bilder in PDF. Unterstützung für mehrseitige TIFF-Dateien und qualitativ hochwertige Konvertierung.",
    "keywords": [
      "tiff in pdf",
      "tiff konvertieren",
      "tif in pdf",
      "mehrseitiges tiff",
      "tiff zu pdf"
    ],
    "description": "\n      <p>„TIFF in PDF“ konvertiert TIFF-Bilder, einschließlich mehrseitiger TIFF-Dateien, in PDF-Dokumente. TIFF wird häufig für qualitativ hochwertige Scans und professionelle Grafiken verwendet.</p>\n      <p>Mehrseitige TIFF-Dateien werden automatisch in mehrseitige PDFs konvertiert. Die Konvertierung bewahrt die hohe Qualität Ihrer Originalbilder.</p>\n      <p>Die gesamte Konvertierung findet in Ihrem Browser statt, sodass Ihre Dateien privat bleiben.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "TIFF-Dateien hochladen",
        "description": "Ziehen Sie Ihre TIFF-Dateien per Drag-and-Drop in den Bereich oder klicken Sie, um sie auszuwählen."
      },
      {
        "step": 2,
        "title": "Optionen konfigurieren",
        "description": "Wählen Sie die Seiteneinstellungen und Komprimierungsoptionen aus."
      },
      {
        "step": 3,
        "title": "Konvertieren und herunterladen",
        "description": "Klicken Sie auf „Konvertieren“, um Ihre PDF-Datei zu erstellen."
      }
    ],
    "useCases": [
      {
        "title": "Gescannte Dokumente",
        "description": "Konvertieren Sie qualitativ hochwertige Scans von TIFF in PDF.",
        "icon": "scan"
      },
      {
        "title": "Professionelle Grafiken",
        "description": "Konvertieren Sie professionelle TIFF-Grafiken zur Verteilung.",
        "icon": "image"
      },
      {
        "title": "Archivkonvertierung",
        "description": "Konvertieren Sie TIFF-Archive in das besser zugängliche PDF-Format.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Werden mehrseitige TIFFs unterstützt?",
        "answer": "Ja, mehrseitige TIFF-Dateien werden automatisch in mehrseitige PDFs konvertiert."
      },
      {
        "question": "Bleibt die Qualität erhalten?",
        "answer": "Ja, die TIFF-Qualität bleibt in der PDF-Ausgabe vollständig erhalten."
      },
      {
        "question": "Welche Komprimierung wird verwendet?",
        "answer": "Sie können zwischen verlustfreier und verlustbehafteter Komprimierung wählen."
      }
    ]
  },
  "word-to-pdf": {
    "title": "Word in PDF",
    "metaDescription": "Konvertieren Sie Word-Dokumente (DOCX) in PDF. Bewahren Sie Formatierung und Layout in Ihren konvertierten Dokumenten.",
    "keywords": [
      "word in pdf",
      "docx in pdf",
      "word konvertieren",
      "word-konverter",
      "microsoft word in pdf",
      "word zu pdf"
    ],
    "description": "\n      <p>„Word in PDF“ konvertiert Microsoft Word-Dokumente in das PDF-Format und behält dabei die ursprüngliche Formatierung, das Layout und die Inhaltsstruktur bei.</p>\n      <p>Laden Sie Ihre DOCX-Dateien hoch und erhalten Sie eine hochwertige PDF-Ausgabe, die sich zum Teilen, Drucken oder Archivieren eignet. Die Konvertierung behält Textformatierungen, Absatzstile und die grundlegende Dokumentenstruktur bei.</p>\n      <p>Die gesamte Konvertierung findet lokal in Ihrem Browser statt, wodurch sichergestellt wird, dass Ihre Dokumente privat und sicher bleiben.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Word-Dokument hochladen",
        "description": "Ziehen Sie Ihre .docx-Datei per Drag-and-Drop in den Bereich oder klicken Sie, um sie von Ihrem Gerät auszuwählen."
      },
      {
        "step": 2,
        "title": "Auf Verarbeitung warten",
        "description": "Das Tool lädt das Dokument und bereitet es für die Konvertierung vor."
      },
      {
        "step": 3,
        "title": "PDF herunterladen",
        "description": "Klicken Sie auf „Herunterladen“, um Ihr konvertiertes PDF-Dokument zu speichern."
      }
    ],
    "useCases": [
      {
        "title": "Dokumentenfreigabe",
        "description": "Konvertieren Sie Word-Dokumente in PDF für universelles Teilen und Anzeigen.",
        "icon": "share-2"
      },
      {
        "title": "Druckvorbereitung",
        "description": "Erstellen Sie druckfertige PDFs aus Word-Dokumenten.",
        "icon": "printer"
      },
      {
        "title": "Dokumentenarchivierung",
        "description": "Archivieren Sie Word-Dokumente im stabilen PDF-Format zur langfristigen Aufbewahrung.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Wird das .doc-Format unterstützt?",
        "answer": "Derzeit wird nur das .docx-Format unterstützt. Bitte konvertieren Sie .doc-Dateien zuerst mit Microsoft Word oder LibreOffice in .docx."
      },
      {
        "question": "Bleiben Bilder erhalten?",
        "answer": "Textinhalte und grundlegende Formatierungen bleiben erhalten. Komplexe Layouts mit vielen Bildern werden unter Umständen vereinfacht gerendert."
      },
      {
        "question": "Ist die Konvertierung sicher?",
        "answer": "Ja, die gesamte Verarbeitung findet in Ihrem Browser statt. Ihre Dokumente verlassen niemals Ihr Gerät."
      }
    ]
  },
  "excel-to-pdf": {
    "title": "Excel in PDF",
    "metaDescription": "Konvertieren Sie Excel-Tabellen (XLSX) in PDF. Bewahren Sie Tabellen und Daten in Ihren konvertierten Dokumenten.",
    "keywords": [
      "excel in pdf",
      "xlsx in pdf",
      "excel konvertieren",
      "tabelle in pdf",
      "microsoft excel in pdf",
      "excel zu pdf"
    ],
    "description": "\n      <p>„Excel in PDF“ konvertiert Microsoft Excel-Tabellen in das PDF-Format und behält dabei die Tabellenstruktur und die Datenorganisation bei.</p>\n      <p>Laden Sie Ihre XLSX-Dateien hoch und erhalten Sie eine übersichtliche PDF-Ausgabe mit ordnungsgemäß formatierten Tabellen. Jedes Arbeitsblatt in Ihrer Arbeitsmappe wird zu einem separaten Abschnitt im PDF.</p>\n      <p>Die gesamte Konvertierung erfolgt lokal in Ihrem Browser, sodass Ihre Daten privat und sicher bleiben.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Excel-Datei hochladen",
        "description": "Ziehen Sie Ihre .xlsx-Datei per Drag-and-Drop in den Bereich oder klicken Sie, um sie von Ihrem Gerät auszuwählen."
      },
      {
        "step": 2,
        "title": "Auf Verarbeitung warten",
        "description": "Das Tool lädt die Tabelle und konvertiert alle Arbeitsblätter."
      },
      {
        "step": 3,
        "title": "PDF herunterladen",
        "description": "Klicken Sie auf „Herunterladen“, um Ihr konvertiertes PDF-Dokument zu speichern."
      }
    ],
    "useCases": [
      {
        "title": "Berichtsfreigabe",
        "description": "Konvertieren Sie Excel-Berichte in PDF zur Verteilung an Stakeholder.",
        "icon": "file-text"
      },
      {
        "title": "Datenarchivierung",
        "description": "Archivieren Sie Tabellendaten im stabilen PDF-Format.",
        "icon": "archive"
      },
      {
        "title": "Druckvorbereitung",
        "description": "Erstellen Sie druckfertige PDFs aus Excel-Arbeitsblättern.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Werden mehrere Arbeitsblätter unterstützt?",
        "answer": "Ja, alle Arbeitsblätter in der Arbeitsmappe werden konvertiert und in das PDF aufgenommen."
      },
      {
        "question": "Wird das .xls-Format unterstützt?",
        "answer": "Derzeit wird nur das .docx- bzw. .xlsx-Format unterstützt. Bitte speichern Sie .xls-Dateien zuerst als .xlsx ab."
      },
      {
        "question": "Bleiben Formeln erhalten?",
        "answer": "Das PDF zeigt die berechneten Werte an. Formeln können im PDF-Format nicht ausgeführt werden."
      }
    ]
  },
  "pptx-to-pdf": {
    "title": "PowerPoint in PDF",
    "metaDescription": "Konvertieren Sie PowerPoint-Präsentationen (PPTX) in PDF. Bewahren Sie Folien und Inhalte für ein einfaches Teilen.",
    "keywords": [
      "powerpoint in pdf",
      "pptx in pdf",
      "pptx konvertieren",
      "präsentation in pdf",
      "folien in pdf",
      "powerpoint zu pdf"
    ],
    "description": "\n      <p>„PowerPoint in PDF“ konvertiert Microsoft PowerPoint-Präsentationen in das PDF-Format. Dabei bleiben Folieninhalte und Text erhalten, was ein einfaches Teilen und Ansehen ermöglicht.</p>\n      <p>Jede Folie wird zu einer Seite im PDF, sodass der Ablauf der Präsentation gewahrt bleibt. Perfekt, um Präsentationen mit Personen zu teilen, die kein PowerPoint installiert haben.</p>\n      <p>Die gesamte Konvertierung erfolgt lokal in Ihrem Browser, wodurch gewährleistet ist, dass Ihre Präsentationen privat und geschützt bleiben.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PowerPoint-Datei hochladen",
        "description": "Ziehen Sie Ihre .pptx-Datei per Drag-and-Drop in den Bereich oder klicken Sie, um sie von Ihrem Gerät auszuwählen."
      },
      {
        "step": 2,
        "title": "Auf Verarbeitung warten",
        "description": "Das Tool extrahiert die Folieninhalte und erstellt das PDF."
      },
      {
        "step": 3,
        "title": "PDF herunterladen",
        "description": "Klicken Sie auf „Herunterladen“, um Ihr konvertiertes PDF-Dokument zu speichern."
      }
    ],
    "useCases": [
      {
        "title": "Präsentationen teilen",
        "description": "Teilen Sie Präsentationen mit beliebigen Personen, ohne dass PowerPoint erforderlich ist.",
        "icon": "share-2"
      },
      {
        "title": "Handout-Erstellung",
        "description": "Erstellen Sie PDF-Handouts aus Ihren Präsentationsfolien.",
        "icon": "file-text"
      },
      {
        "title": "Präsentationen archivieren",
        "description": "Archivieren Sie Präsentationen im stabilen PDF-Format.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Bleiben Animationen erhalten?",
        "answer": "PDF is ein statisches Format, daher bleiben Animationen und Übergänge nicht erhalten. Jede Folie wird zu einer statischen Seite."
      },
      {
        "question": "Wird das .ppt-Format unterstützt?",
        "answer": "Derzeit wird nur das .pptx-Format unterstützt. Bitte konvertieren Sie .ppt-Dateien zuerst in .pptx."
      },
      {
        "question": "Sind Vortragsnotizen enthalten?",
        "answer": "Derzeit sind die Notizen des Referenten nicht in der PDF-Ausgabe enthalten."
      }
    ]
  },
  "xps-to-pdf": {
    "title": "XPS in PDF",
    "metaDescription": "Konvertieren Sie XPS-Dokumente in das PDF-Format. Hochpräzise Konvertierung unter Beibehaltung von Layout und Grafiken.",
    "keywords": [
      "xps in pdf",
      "xps konvertieren",
      "xps-konverter",
      "microsoft xps in pdf",
      "oxps in pdf",
      "xps zu pdf"
    ],
    "description": "\n      <p>„XPS in PDF“ konvertiert Microsoft XPS-Dokumente (XML Paper Specification) in das PDF-Format, wobei das ursprüngliche Layout, der Text und die Vektorgrafiken exakt erhalten bleiben.</p>\n      <p>XPS ist ein festes Dokumentenformat ähnlich wie PDF. Dieses Tool bietet eine hochpräzise Konvertierung durch natives XPS-Parsing und sorgt so für eine exakte Wiedergabe Ihrer Dokumente.</p>\n      <p>Die gesamte Konvertierung erfolgt lokal in Ihrem Browser, wodurch sichergestellt wird, dass Ihre Dokumente privat und geschützt bleiben.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "XPS-Datei hochladen",
        "description": "Ziehen Sie Ihre .xps-Datei per Drag-and-Drop in den Bereich oder klicken Sie, um sie von Ihrem Gerät auszuwählen."
      },
      {
        "step": 2,
        "title": "Auf Verarbeitung warten",
        "description": "Das Tool analysiert und konvertiert das XPS-Dokument."
      },
      {
        "step": 3,
        "title": "PDF herunterladen",
        "description": "Klicken Sie auf „Herunterladen“, um Ihr konvertiertes PDF-Dokument zu speichern."
      }
    ],
    "useCases": [
      {
        "title": "Formatkonvertierung",
        "description": "Konvertieren Sie XPS-Dokumente in das weitaus verbreitetere PDF-Format.",
        "icon": "file"
      },
      {
        "title": "Dokumentenfreigabe",
        "description": "Teilen Sie XPS-Dokumente mit Benutzern, die keine XPS-Viewer installiert haben.",
        "icon": "share-2"
      },
      {
        "title": "Archivmigration",
        "description": "Migrieren Sie XPS-Archive für eine bessere Kompatibilität in das PDF-Format.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Was ist das XPS-Format?",
        "answer": "XPS (XML Paper Specification) ist das von Microsoft entwickelte feste Dokumentenformat, ähnlich wie PDF. Es wird häufig für Druckaufträge unter Windows verwendet."
      },
      {
        "question": "Ist die Konvertierung verlustfrei?",
        "answer": "Ja, die Konvertierung bewahrt Text, Grafiken und Layout mit sehr hoher Wiedergabetreue."
      },
      {
        "question": "Werden mehrseitige XPS-Dateien unterstützt?",
        "answer": "Ja, alle Seiten des XPS-Dokuments werden in das PDF konvertiert."
      }
    ]
  },
  "rtf-to-pdf": {
    "title": "RTF in PDF",
    "metaDescription": "Konvertieren Sie RTF-Dateien (Rich Text Format) in PDF. Bewahren Sie die Textformatierung in Ihren Dokumenten.",
    "keywords": [
      "rtf in pdf",
      "rtf konvertieren",
      "rich text in pdf",
      "rtf-konverter",
      "rtf zu pdf"
    ],
    "description": "\n      <p>„RTF in PDF“ konvertiert Rich-Text-Format-Dateien (RTF) in PDF-Dokumente. RTF ist ein weit verbreitetes Textformat, das grundlegende Formatierungen wie Schriftarten, Farben und Stile unterstützt.</p>\n      <p>Laden Sie Ihre RTF-Dateien hoch und erhalten Sie eine saubere PDF-Ausgabe, während Textinhalte und grundlegende Formatierungen beibehalten werden. Perfekt, um ältere Dokumente in ein modernes PDF-Format zu überführen.</p>\n      <p>Die gesamte Konvertierung findet lokal in Ihrem Browser statt, wodurch sichergestellt wird, dass Ihre Dokumente privat und sicher bleiben.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "RTF-Datei hochladen",
        "description": "Ziehen Sie Ihre .rtf-Datei per Drag-and-Drop in den Bereich oder klicken Sie, um sie von Ihrem Gerät auszuwählen."
      },
      {
        "step": 2,
        "title": "Auf Verarbeitung warten",
        "description": "Das Tool analysiert und konvertiert den RTF-Inhalt."
      },
      {
        "step": 3,
        "title": "PDF herunterladen",
        "description": "Klicken Sie auf „Herunterladen“, um Ihr konvertiertes PDF-Dokument zu speichern."
      }
    ],
    "useCases": [
      {
        "title": "Konvertierung älterer Dokumente",
        "description": "Konvertieren Sie alte RTF-Dokumente in das moderne PDF-Format.",
        "icon": "history"
      },
      {
        "title": "Dokumentenfreigabe",
        "description": "Teilen Sie RTF-Dokumente im universell anzeigbaren PDF-Format.",
        "icon": "share-2"
      },
      {
        "title": "Dokumentenarchivierung",
        "description": "Archivieren Sie RTF-Dateien im stabilen PDF-Format zur langfristigen Aufbewahrung.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Welche Formatierung bleibt erhalten?",
        "answer": "Grundlegende Textformatierungen wie Schriftarten, Absätze und Stile werden konvertiert. Komplexe RTF-Funktionen werden unter Umständen vereinfacht."
      },
      {
        "question": "Kann ich mehrere RTF-Dateien konvertieren?",
        "answer": "Derzeit wird jeweils nur eine Datei konvertiert. Verwenden Sie „PDF zusammenfügen“, um mehrere konvertierte Dateien zu kombinieren."
      },
      {
        "question": "Werden eingebettete Bilder unterstützt?",
        "answer": "Der Textinhalt steht im Vordergrund. Eingebettete Objekte werden möglicherweise nicht gerendert."
      }
    ]
  },
  "epub-to-pdf": {
    "title": "EPUB in PDF",
    "metaDescription": "Konvertieren Sie EPUB-E-Books in PDF. Bewahren Sie Formatierung, Bilder und Kapitelstruktur.",
    "keywords": [
      "epub in pdf",
      "epub konvertieren",
      "ebook in pdf",
      "epub-konverter",
      "epub zu pdf"
    ],
    "description": "\n      <p>„EPUB in PDF“ konvertiert elektronische Buchdateien (E-Books) in hochwertige PDF-Dokumente. EPUB ist das beliebteste E-Book-Format, das von den meisten E-Readern und digitalen Bibliotheken verwendet wird.</p>\n      <p>Dieses Tool bewahrt die Textformatierung, Bilder und die Kapitelstruktur Ihrer E-Books. Perfekt zum Drucken, Archivieren oder Teilen von E-Books in einem universell anzeigbaren Format.</p>\n      <p>Die gesamte Konvertierung erfolgt lokal in Ihrem Browser mithilfe fortschrittlicher Rendering-Technologie. Dies stellt sicher, dass Ihre Bücher privat bleiben und die Konvertierung schnell verläuft.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "EPUB-Datei hochladen",
        "description": "Ziehen Sie Ihre .epub-Datei per Drag-and-Drop in den Bereich oder klicken Sie, um sie von Ihrem Gerät auszuwählen."
      },
      {
        "step": 2,
        "title": "Auf Konvertierung warten",
        "description": "Das Tool rendert und konvertiert alle Seiten Ihres E-Books."
      },
      {
        "step": 3,
        "title": "PDF herunterladen",
        "description": "Klicken Sie auf „Herunterladen“, um Ihr konvertiertes PDF-Dokument zu speichern."
      }
    ],
    "useCases": [
      {
        "title": "E-Books drucken",
        "description": "Konvertieren Sie E-Books in PDF für den physischen Druck.",
        "icon": "printer"
      },
      {
        "title": "Bücher archivieren",
        "description": "Speichern Sie E-Books in einem langfristig stabilen PDF-Format.",
        "icon": "archive"
      },
      {
        "title": "Dokumente teilen",
        "description": "Teilen Sie E-Books mit jedem, auch ohne E-Reader.",
        "icon": "share-2"
      }
    ],
    "faq": [
      {
        "question": "Bleibt die Formatierung erhalten?",
        "answer": "Ja! Dieses Tool verwendet ein natives EPUB-Rendering, das die Textformatierung, Bilder und das Layout mit hoher Wiedergabetreue beibehält."
      },
      {
        "question": "Werden DRM-geschützte EPUBs unterstützt?",
        "answer": "Nein, DRM-geschützte E-Books können nicht konvertiert werden. Es werden nur DRM-freie EPUB-Dateien unterstützt."
      },
      {
        "question": "Wie wird die Seitengröße bestimmt?",
        "answer": "EPUB-Inhalte werden zur optimalen Lesbarkeit auf die Standard-A4-Seitengröße gerendert."
      }
    ]
  },
  "mobi-to-pdf": {
    "title": "MOBI in PDF",
    "metaDescription": "Konvertieren Sie MOBI-E-Books in PDF. Unterstützung für das Kindle-Format mit qualitativ hochwertigem Rendering.",
    "keywords": [
      "mobi in pdf",
      "mobi konvertieren",
      "kindle in pdf",
      "azw in pdf",
      "mobi-konverter",
      "mobi zu pdf"
    ],
    "description": "\n      <p>„MOBI in PDF“ konvertiert Amazon Kindle-E-Book-Dateien in hochwertige PDF-Dokumente. Das MOBI-Format (einschließlich AZW und AZW3) ist das proprietäre E-Book-Format von Amazon, das auf Kindle-Geräten verwendet wird.</p>\n      <p>Dieses Tool bewahrt die Textformatierung, Bilder und Struktur Ihrer Kindle-Bücher. Perfekt zum Drucken, Archivieren oder Lesen auf Geräten, die das MOBI-Format nicht unterstützen.</p>\n      <p>Die gesamte Konvertierung erfolgt lokal in Ihrem Browser mithilfe fortschrittlicher Rendering-Technologie, sodass Ihre Bücher privat bleiben.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "MOBI-Datei hochladen",
        "description": "Ziehen Sie Ihre .mobi-, .azw- oder .azw3-Datei per Drag-and-Drop in den Bereich oder klicken Sie, um sie von Ihrem Gerät auszuwählen."
      },
      {
        "step": 2,
        "title": "Auf Konvertierung warten",
        "description": "Das Tool rendert und konvertiert alle Seiten Ihres E-Books."
      },
      {
        "step": 3,
        "title": "PDF herunterladen",
        "description": "Klicken Sie auf „Herunterladen“, um Ihr konvertiertes PDF-Dokument zu speichern."
      }
    ],
    "useCases": [
      {
        "title": "Kindle-Bücher drucken",
        "description": "Konvertieren Sie Kindle-E-Books in PDF für den physischen Druck.",
        "icon": "printer"
      },
      {
        "title": "Bücher archivieren",
        "description": "Speichern Sie Kindle-Bücher im universellen PDF-Format.",
        "icon": "archive"
      },
      {
        "title": "Geräteübergreifendes Lesen",
        "description": "Lesen Sie Kindle-Bücher auf Geräten, die nur PDF unterstützen.",
        "icon": "tablet-smartphone"
      }
    ],
    "faq": [
      {
        "question": "Welche MOBI-Formate werden unterstützt?",
        "answer": "Dieses Tool unterstützt .mobi-, .azw- und .azw3-Dateien (jeweils ohne DRM-Schutz)."
      },
      {
        "question": "Werden DRM-geschützte Kindle-Bücher unterstützt?",
        "answer": "Nein, DRM-geschützte E-Books können nicht konvertiert werden. Es werden nur DRM-freie Dateien unterstützt."
      },
      {
        "question": "Bleibt meine Formatierung erhalten?",
        "answer": "Ja! Das Tool verwendet ein natives MOBI-Rendering, um Text, Bilder und das Layout beizubehalten."
      }
    ]
  },
  "pdf-to-svg": {
    "title": "PDF in SVG",
    "metaDescription": "Konvertieren Sie PDF-Seiten in SVG-Vektorgrafiken. Perfekte Skalierbarkeit bei jeder Größe mit separatem Export einzelner Seiten.",
    "keywords": [
      "pdf in svg",
      "pdf in svg konvertieren",
      "vektorgrafiken",
      "skalierbares pdf",
      "svg-konverter",
      "pdf zu svg"
    ],
    "description": "\n      <p>„PDF in SVG“ konvertiert jede Seite Ihres PDF-Dokuments in eine skalierbare Vektorgrafik (SVG). SVG ist ein Vektorformat, das bei jeder Zoomstufe und Druckgröße eine perfekte Qualität beibehält.</p>\n      <p>Im Gegensatz zu Rasterformaten (JPG, PNG) werden SVG-Grafiken beim Skalieren niemals pixelig. Dies macht sie ideal für Logos, Diagramme, technische Zeichnungen und alle Inhalte, die in unterschiedlichen Größen angezeigt werden müssen.</p>\n      <p>Zeigen Sie eine Vorschau jeder konvertierten Seite an und laden Sie sie einzeln oder als ZIP-Datei herunter. Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser, wodurch die vollständige Vertraulichkeit Ihrer Dokumente gewährleistet ist.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF-Datei hochladen",
        "description": "Ziehen Sie Ihre PDF-Datei per Drag-and-Drop in den Bereich oder klicken Sie, um danach zu suchen und sie auszuwählen."
      },
      {
        "step": 2,
        "title": "Optionen konfigurieren",
        "description": "Legen Sie die Auflösungsqualität fest und geben Sie optional Seitenbereiche an."
      },
      {
        "step": 3,
        "title": "Vorschau und Konvertierung",
        "description": "Klicken Sie auf „Konvertieren“, um den Vorgang zu starten. Zeigen Sie eine Vorschau jeder Seite an, indem Sie auf die Miniaturansichten klicken."
      },
      {
        "step": 4,
        "title": "Herunterladen",
        "description": "Laden Sie einzelne SVG-Dateien oder alle Seiten als ZIP-Archiv herunter."
      }
    ],
    "useCases": [
      {
        "title": "Logos und Grafiken",
        "description": "Extrahieren Sie Logos und Vektorgrafiken aus PDFs zur Verwendung in Design-Software.",
        "icon": "pen-tool"
      },
      {
        "title": "Technische Diagramme",
        "description": "Konvertieren Sie technische Zeichnungen und Diagramme in das skalierbare SVG-Format.",
        "icon": "ruler"
      },
      {
        "title": "Webentwicklung",
        "description": "Erstellen Sie webfähige SVG-Dateien aus PDF-Inhalten für responsive Websites.",
        "icon": "globe"
      },
      {
        "title": "Drucken in jeder Größe",
        "description": "Erzeugen Sie Vektorgrafiken, die in jeder Größe perfekt gedruckt werden können.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Was ist das SVG-Format?",
        "answer": "SVG (Scalable Vector Graphics) ist ein Bildformat für Vektorgrafiken, das ohne Qualitätsverlust in jede beliebige Größe skaliert werden kann. Es wird häufig für Logos, Symbole und Webgrafiken verwendet."
      },
      {
        "question": "Wird die SVG-Datei wirklich Vektordaten enthalten?",
        "answer": "Die SVG-Datei enthält ein hochauflösendes Rendering der PDF-Seite. Bei PDFs mit echten Vektorinhalten erhalten Sie bei jedem Maßstab eine gestochen scharfe Ausgabe."
      },
      {
        "question": "Kann ich vor dem Herunterladen eine Vorschau anzeigen?",
        "answer": "Ja! Klicken Sie auf eine beliebige Miniaturansicht, um eine Vorschau der SVG-Datei in voller Größe anzuzeigen. Sie können einzelne Seiten oder alle auf einmal herunterladen."
      },
      {
        "question": "Welche Auflösung soll ich wählen?",
        "answer": "Eine höhere Auflösung (216 oder 288 DPI) erzeugt größere, detailliertere SVG-Dateien. Verwenden Sie niedrigere Einstellungen für eine schnellere Verarbeitung und kleinere Dateien."
      }
    ]
  },
  "extract-images": {
    "title": "Bilder aus PDF extrahieren",
    "metaDescription": "Extrahieren Sie alle eingebetteten Bilder aus PDF-Dateien. Laden Sie sie einzeln oder als ZIP-Archiv herunter. Filtern Sie kleine Bilder automatisch heraus.",
    "keywords": [
      "pdf-bilder extrahieren",
      "pdf-bildextraktion",
      "bilder aus pdf exportieren",
      "pdf-bilder herunterladen",
      "pdf in bilder"
    ],
    "description": "\n      <p>„Bilder aus PDF extrahieren“ ruft alle in Ihren PDF-Dokumenten eingebetteten Bilder ab. Laden Sie qualitativ hochwertige Bilder einzeln oder als praktisches ZIP-Archiv herunter.</p>\n      <p>Das Tool filtert kleine Bilder wie Symbole und Dekorationen basierend auf anpassbaren Schwellenwerten für die Bildgröße automatisch heraus. Verarbeiten Sie mehrere PDFs gleichzeitig für eine effiziente Batch-Extraktion.</p>\n      <p>Die gesamte Extraktion findet in Ihrem Browser statt, wodurch sichergestellt wird, dass Ihre Dokumente privat und sicher bleiben.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDFs hochladen",
        "description": "Ziehen eine oder mehrere PDF-Dateien per Drag-and-Drop in den Bereich oder klicken Sie, um sie von Ihrem Gerät auszuwählen."
      },
      {
        "step": 2,
        "title": "Filteroptionen festlegen",
        "description": "Passen Sie die Mindestbreite, -höhe und -dateigröße an, um unerwünschte kleine Bilder herauszufiltern."
      },
      {
        "step": 3,
        "title": "Bilder extrahieren",
        "description": "Klicken Sie auf „Extrahieren“, um alle eingebetteten Bilder in Ihren PDFs zu finden."
      },
      {
        "step": 4,
        "title": "Herunterladen",
        "description": "Laden Sie einzelne Bilder oder alle Bilder als ZIP-Archiv herunter."
      }
    ],
    "useCases": [
      {
        "title": "Fotowiederherstellung",
        "description": "Extrahieren Sie in PDF-Dokumenten eingebettete Fotos und Bilder zur Wiederverwendung oder Archivierung.",
        "icon": "image"
      },
      {
        "title": "Asset-Sammlung",
        "description": "Sammeln Sie alle Grafiken und Bilder aus PDF-Berichten, Präsentationen oder Broschüren.",
        "icon": "folder"
      },
      {
        "title": "Wiederverwendung von Inhalten",
        "description": "Extrahieren Sie Bilder aus PDFs, um sie in anderen Dokumenten, Websites oder Präsentationen zu verwenden.",
        "icon": "refresh-cw"
      }
    ],
    "faq": [
      {
        "question": "Welche Bildformate werden extrahiert?",
        "answer": "Bilder werden nach Möglichkeit in ihrem nativen Format (JPEG, PNG usw.) extrahiert oder für rohe Bilddaten in das PNG-Format konvertiert."
      },
      {
        "question": "Warum fehlen einige Bilder?",
        "answer": "Kleine Bilder, die unter dem Größenschwellenwert liegen, werden herausgefiltert. Passen Sie die Filtereinstellungen an, um auch kleinere Bilder zu extrahieren."
      },
      {
        "question": "Kann ich Bilder aus gescannten PDFs extrahieren?",
        "answer": "Gescannte PDFs enthalten in der Regel den Scan als ein einziges großes Bild pro Seite. Verwenden Sie stattdessen das Tool „PDF in Bild“ für eine seitenweise Konvertierung."
      }
    ]
  },
  "edit-attachments": {
    "title": "Anhänge bearbeiten",
    "metaDescription": "Verwalten Sie PDF-Anhänge. Anzeigen, Umbenennen und Entfernen von eingebetteten Dateien.",
    "keywords": [
      "anhänge bearbeiten",
      "pdf-dateien verwalten",
      "anhänge entfernen",
      "anhänge umbenennen"
    ],
    "description": "\n      <p>Mit „Anhänge bearbeiten“ können Sie eingebettete Dateien in PDF-Dokumenten verwalten. Sehen Sie sich alle Anhänge an, benennen Sie sie um oder entfernen Sie unerwünschte Dateien aus der PDF-Datei.</p>\n      <p>Perfekt zum Bereinigen von PDF-Paketen oder zum Aktualisieren von Anhangsinformationen vor dem Versenden.</p>\n      <p>Die gesamte Bearbeitung findet in Ihrem Browser statt, sodass Ihre Dokumente privat bleiben.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Ziehen Sie Ihre PDF-Datei per Drag-and-Drop in den Bereich oder klicken Sie, um sie auszuwählen."
      },
      {
        "step": 2,
        "title": "Anhänge verwalten",
        "description": "Sehen Sie sich eingebettete Dateien an, benennen Sie sie um oder löschen Sie sie."
      },
      {
        "step": 3,
        "title": "Speichern und Herunterladen",
        "description": "Klicken Sie auf „Speichern“, um die Änderungen zu übernehmen und das Dokument herunterzuladen."
      }
    ],
    "useCases": [
      {
        "title": "PDFs bereinigen",
        "description": "Entfernen Sie unnötige Anhänge aus PDF-Paketen.",
        "icon": "trash-2"
      },
      {
        "title": "Dateien umbenennen",
        "description": "Aktualisieren Sie die Namen von Anhängen, um die Übersichtlichkeit zu verbessern.",
        "icon": "edit"
      },
      {
        "title": "Inhalte überprüfen",
        "description": "Überprüfen Sie eingebettete Dateien vor dem Versenden.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "Kann ich hier neue Anhänge hinzufügen?",
        "answer": "Verwenden Sie das Tool „Anhänge hinzufügen“, um neue Dateien einzubetten."
      },
      {
        "question": "Ist das Entfernen dauerhaft?",
        "answer": "Ja, entfernte Anhänge können nicht aus der Ausgabedatei wiederhergestellt werden."
      },
      {
        "question": "Kann ich Anhänge in der Vorschau anzeigen?",
        "answer": "Sie können Dateinamen und -größen sehen; verwenden Sie „Anhänge extrahieren“, um die Inhalte anzuzeigen."
      }
    ]
  },
  "add-blank-page": {
    "title": "Leere Seite hinzufügen",
    "metaDescription": "Fügen Sie leere Seiten in PDF-Dokumente ein. Fügen Sie leere Seiten an einer beliebigen Position hinzu.",
    "keywords": [
      "leere seite hinzufügen",
      "seite einfügen",
      "leere seite",
      "pdf-seiteneinfügung"
    ],
    "description": "\n      <p>„Leere Seite hinzufügen“ fügt leere Seiten an einer beliebigen Position in Ihre PDF-Dokumente ein. Fügen Sie Seiten vor, nach oder zwischen vorhandenen Seiten mit anpassbarer Seitengröße hinzu.</p>\n      <p>Perfekt, um Platz für Notizen zu schaffen, Abschnittstrennungen einzufügen oder Dokumente für den Druck vorzubereiten.</p>\n      <p>Die gesamte Verarbeitung erfolgt in Ihrem Browser, wodurch sichergestellt wird, dass Ihre Dokumente privat bleiben.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Ziehen Sie Ihre PDF-Datei per Drag-and-Drop in den Bereich oder klicken Sie, um sie auszuwählen."
      },
      {
        "step": 2,
        "title": "Position wählen",
        "description": "Wählen Sie aus, wo leere Seiten eingefügt werden sollen und wie viele."
      },
      {
        "step": 3,
        "title": "Hinzufügen und Herunterladen",
        "description": "Klicken Sie auf „Hinzufügen“, um die Seiten einzufügen, und laden Sie die Datei herunter."
      }
    ],
    "useCases": [
      {
        "title": "Platz für Notizen",
        "description": "Fügen Sie leere Seiten für handschriftliche Notizen hinzu.",
        "icon": "edit-3"
      },
      {
        "title": "Abschnittstrennungen",
        "description": "Fügen Sie leere Seiten zwischen Dokumentenabschnitten ein.",
        "icon": "minus"
      },
      {
        "title": "Druckvorbereitung",
        "description": "Fügen Sie Seiten hinzu, um das Dokument für den Duplexdruck auszurichten.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Kann ich die Seitengröße wählen?",
        "answer": "Ja, leere Seiten können an die vorhandenen Seiten angepasst werden oder benutzerdefinierte Abmessungen erhalten."
      },
      {
        "question": "Kann ich mehrere leere Seiten hinzufügen?",
        "answer": "Ja, Sie können beliebig viele leere Seiten auf einmal hinzufügen."
      },
      {
        "question": "Kann ich farbige Seiten hinzufügen?",
        "answer": "Verwenden Sie nach dem Hinzufügen leerer Seiten das Tool „Hintergrundfarbe“, um Farbe hinzuzufügen."
      }
    ]
  },
  "rotate-pdf": {
    "title": "PDF drehen",
    "metaDescription": "Drehen Sie PDF-Seiten. Drehen Sie Seiten um 90, 180 oder 270 Grad.",
    "keywords": [
      "pdf drehen",
      "pdf-seiten drehen",
      "pdf-rotation",
      "ausrichtung korrigieren"
    ],
    "description": "\n      <p>„PDF drehen“ dreht die Seiten in Ihrem Dokument um 90, 180 oder 270 Grad. Korrigieren Sie falsch ausgerichtete Scans, drehen Sie Querformatseiten oder passen Sie die Seitenausrichtung für die Anzeige an.</p>\n      <p>Drehen Sie alle Seiten einheitlich oder wählen Sie bestimmte Seiten aus, um sie einzeln zu drehen. Das Tool bewahrt den gesamten Inhalt und alle Formatierungen.</p>\n      <p>Die gesamte Verarbeitung erfolgt in Ihrem Browser, wodurch sichergestellt wird, dass Ihre Dokumente privat bleiben.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Ziehen Sie Ihre PDF-Datei per Drag-and-Drop in den Bereich oder klicken Sie, um sie auszuwählen."
      },
      {
        "step": 2,
        "title": "Rotation wählen",
        "description": "Wählen Sie den Drehwinkel und die zu drehenden Seiten aus."
      },
      {
        "step": 3,
        "title": "Drehen und Herunterladen",
        "description": "Klicken Sie auf „Drehen“, um die Änderungen zu übernehmen und das Dokument herunterzuladen."
      }
    ],
    "useCases": [
      {
        "title": "Scans korrigieren",
        "description": "Korrigieren Sie die Ausrichtung von gescannten Dokumenten.",
        "icon": "rotate-cw"
      },
      {
        "title": "Querformatseiten",
        "description": "Drehen Sie Querformatseiten für eine korrekte Anzeige.",
        "icon": "monitor"
      },
      {
        "title": "Gemischte Ausrichtung",
        "description": "Standardisieren Sie die Seitenausrichtung in Dokumenten mit gemischten Ausrichtungen.",
        "icon": "layout"
      }
    ],
    "faq": [
      {
        "question": "Kann ich verschiedene Seiten unterschiedlich drehen?",
        "answer": "Ja, Sie können unterschiedliche Drehungen auf verschiedene Seiten anwenden."
      },
      {
        "question": "Beeinflusst das Drehen die Druckqualität?",
        "answer": "Nein, beim Drehen bleibt die Qualität aller Inhalte erhalten."
      },
      {
        "question": "Kann ich um benutzerdefinierte Winkel drehen?",
        "answer": "Die Drehung ist auf 90-Grad-Schritte (90, 180, 270) beschränkt."
      }
    ]
  },
  "combine-single-page": {
    "title": "Zu einer Einzelseite zusammenfügen",
    "metaDescription": "Verbinden Sie PDF-Seiten zu einer einzigen, kontinuierlichen Seite. Erstellen Sie scrollbare Einzelseiten-Dokumente.",
    "keywords": [
      "Seiten zusammenfügen",
      "Einzelseiten-PDF",
      "Seiten verbinden",
      "kontinuierliches Scrollen"
    ],
    "description": "\n      <p>„Zu einer Einzelseite zusammenfügen“ verbindet alle PDF-Seiten zu einer einzigen, kontinuierlichen Seite. Erstellen Sie scrollbare Dokumente, die sich perfekt für die Web-Anzeige oder das kontinuierliche Lesen eignen.</p>\n      <p>Die Seiten werden vertikal mit anpassbarem Abstand zusammengefügt. Das Ergebnis ist eine einzige, lange Seite, die den gesamten Inhalt enthält.</p>\n      <p>Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser, wodurch die Vertraulichkeit Ihrer Dokumente gewährleistet bleibt.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Ziehen Sie Ihre PDF-Datei per Drag-and-Drop hierher oder klicken Sie, um sie auszuwählen."
      },
      {
        "step": 2,
        "title": "Abstand festlegen",
        "description": "Wählen Sie den Abstand zwischen den zusammenzufügenden Seiten."
      },
      {
        "step": 3,
        "title": "Zusammenfügen und herunterladen",
        "description": "Klicken Sie auf „Zusammenfügen“, um die einseitige PDF zu erstellen."
      }
    ],
    "useCases": [
      {
        "title": "Web-Dokumente",
        "description": "Erstellen Sie scrollbare PDFs zur Einbettung in Websites.",
        "icon": "globe"
      },
      {
        "title": "Kontinuierliches Lesen",
        "description": "Konvertieren Sie paginierte Dokumente in ein kontinuierliches Scrollformat.",
        "icon": "scroll"
      },
      {
        "title": "Langformatige Inhalte",
        "description": "Verbinden Sie Seiten für ein nahtloses Lesen von langen Inhalten.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "Gibt es ein Seitenlimit?",
        "answer": "Sehr lange Dokumente können durch den Arbeitsspeicher des Browsers begrenzt sein."
      },
      {
        "question": "Kann ich Trennlinien zwischen den Seiten hinzufügen?",
        "answer": "Ja, Sie können Abstände oder Linien zwischen den Originalseiten hinzufügen."
      },
      {
        "question": "Ist dies für den Druck geeignet?",
        "answer": "Das Ergebnis ist optimal für die Bildschirmanzeige; verwenden Sie für Drucklayouts die N-Up-Funktion (Mehrseitendruck)."
      }
    ]
  },
  "view-metadata": {
    "title": "Metadaten anzeigen",
    "metaDescription": "Zeigen Sie die PDF-Dokumenteigenschaften an. Sehen Sie Autor, Titel, Daten und andere Metadaten.",
    "keywords": [
      "PDF-Metadaten",
      "Dokumenteigenschaften",
      "PDF-Informationen",
      "PDF-Details anzeigen"
    ],
    "description": "\n      <p>„Metadaten anzeigen“ stellt alle Dokumenteigenschaften und Metadaten Ihrer PDF-Dateien dar. Sehen Sie Autor, Titel, Thema, Schlüsselwörter, Erstellungsdatum, Änderungsdatum und mehr.</p>\n      <p>Nützlich für die Überprüfung von Dokumenten, das Überprüfen von Dateiinformationen oder das Verifizieren der Echtheit von Dokumenten.</p>\n      <p>Die gesamte Anzeige erfolgt in Ihrem Browser, sodass Ihre Dokumente privat bleiben.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Ziehen Sie Ihre PDF-Datei per Drag-and-Drop hierher oder klicken Sie, um sie auszuwählen."
      },
      {
        "step": 2,
        "title": "Eigenschaften anzeigen",
        "description": "Sehen Sie alle Metadaten in einem übersichtlichen Format dargestellt."
      },
      {
        "step": 3,
        "title": "Bei Bedarf exportieren",
        "description": "Exportieren Sie Metadaten optional als JSON."
      }
    ],
    "useCases": [
      {
        "title": "Dokumentenprüfung",
        "description": "Überprüfen Sie Dokumenteigenschaften auf Compliance (Richtlinienkonformität).",
        "icon": "clipboard-check"
      },
      {
        "title": "Echtheit verifizieren",
        "description": "Überprüfen Sie Erstellungsdaten und Autoreninformationen.",
        "icon": "shield"
      },
      {
        "title": "Dateiinformationen",
        "description": "Erhalten Sie detaillierte Informationen über PDF-Dateien.",
        "icon": "info"
      }
    ],
    "faq": [
      {
        "question": "Welche Metadaten werden angezeigt?",
        "answer": "Titel, Autor, Thema, Schlüsselwörter, Ersteller, PDF-Erstellungsprogramm, Daten und PDF-Version."
      },
      {
        "question": "Kann ich Metadaten hier bearbeiten?",
        "answer": "Verwenden Sie das Werkzeug „Metadaten bearbeiten“, um Dokumenteigenschaften zu ändern."
      },
      {
        "question": "Sind XMP-Metadaten enthalten?",
        "answer": "Ja, es werden sowohl Standard- als auch XMP-Metadaten angezeigt."
      }
    ]
  },
  "pdf-to-zip": {
    "title": "PDFs in ZIP packen",
    "metaDescription": "Packen Sie mehrere PDFs in ein ZIP-Archiv. PDF-Dateien komprimieren und bündeln.",
    "keywords": [
      "PDF in ZIP",
      "PDFs komprimieren",
      "PDFs bündeln",
      "PDFs archivieren"
    ],
    "description": "\n      <p>„PDFs in ZIP“ packt mehrere PDF-Dateien in ein einziges ZIP-Archiv. Komprimieren und bündeln Sie Ihre PDFs für eine einfachere Weitergabe, Speicherung oder Sicherung.</p>\n      <p>Das Tool erstellt ein komprimiertes Archiv, das alle Ihre PDF-Dateien enthält, was die Gesamtgröße reduziert und die Dateiverwaltung vereinfacht.</p>\n      <p>Die gesamte Verarbeitung erfolgt in Ihrem Browser, wodurch Ihre Dateien privat bleiben.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDFs hochladen",
        "description": "Ziehen mehrere PDF-Dateien per Drag-and-Drop hierher oder klicken Sie, um sie auszuwählen."
      },
      {
        "step": 2,
        "title": "Archiv konfigurieren",
        "description": "Legen Sie optional den Archivnamen und die Komprimierungsstufe fest."
      },
      {
        "step": 3,
        "title": "Erstellen und herunterladen",
        "description": "Klicken Sie auf „Erstellen“, um das ZIP-Archiv zu generieren."
      }
    ],
    "useCases": [
      {
        "title": "Dateifreigabe",
        "description": "Bündeln Sie mehrere PDFs für eine einfachere Freigabe.",
        "icon": "share-2"
      },
      {
        "title": "Backup-Erstellung",
        "description": "Erstellen Sie komprimierte Backups von PDF-Sammlungen.",
        "icon": "archive"
      },
      {
        "title": "E-Mail-Anhänge",
        "description": "Kombinieren Sie PDFs zu einem einzigen Anhang für E-Mails.",
        "icon": "mail"
      }
    ],
    "faq": [
      {
        "question": "Wie stark wird komprimiert?",
        "answer": "Die ZIP-Komprimierung reduziert die Gesamtgröße in der Regel um 10–30 %."
      },
      {
        "question": "Gibt es ein Dateilimit?",
        "answer": "Sie können bis zu 100 PDFs in ein einziges Archiv aufnehmen."
      },
      {
        "question": "Kann ich ein Passwort festlegen?",
        "answer": "Das Erstellen von passwortgeschützten ZIP-Dateien wird derzeit nicht unterstützt."
      }
    ]
  },
  "posterize-pdf": {
    "title": "PDF als Poster aufteilen",
    "metaDescription": "Teilen Sie große PDF-Seiten in druckbare Kacheln auf. Erstellen Sie Poster aus PDF-Seiten.",
    "keywords": [
      "PDF kacheln",
      "PDF als Poster",
      "Großformatdruck",
      "PDF-Kachelung"
    ],
    "description": "\n      <p>„PDF als Poster aufteilen“ unterteilt große PDF-Seiten in kleinere Kacheln, die auf Standardpapier gedruckt und zu Postern zusammengesetzt werden können. Perfekt für den Druck von großen Diagrammen, Karten oder Kunstwerken.</p>\n      <p>Konfigurieren Sie die Rastergröße und die Überlappung für eine einfache Montage. Das Tool berechnet automatisch die Kachelabmessungen für Ihre Ziel-Ausgabegröße.</p>\n      <p>Die gesamte Verarbeitung erfolgt in Ihrem Browser, wodurch Ihre Dokumente privat bleiben.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Ziehen Sie Ihr Großformat-PDF per Drag-and-Drop hierher oder klicken Sie, um es auszuwählen."
      },
      {
        "step": 2,
        "title": "Kacheln konfigurieren",
        "description": "Stellen Sie Rastergröße, Überlappung und Ausgabepapierformat ein."
      },
      {
        "step": 3,
        "title": "Erstellen und herunterladen",
        "description": "Klicken Sie auf „Erstellen“, um druckbare Kacheln zu generieren."
      }
    ],
    "useCases": [
      {
        "title": "Posterdruck",
        "description": "Drucken Sie große Poster auf Standardpapier.",
        "icon": "maximize-2"
      },
      {
        "title": "Kartendruck",
        "description": "Drucken Sie große Karten in Abschnitten für die spätere Montage.",
        "icon": "map"
      },
      {
        "title": "Reproduktion von Kunstwerken",
        "description": "Erstellen Sie Großdrucke aus PDF-Kunstwerken.",
        "icon": "image"
      }
    ],
    "faq": [
      {
        "question": "Welche Überlappung sollte ich verwenden?",
        "answer": "Eine Überlappung von 10–20 mm wird empfohlen, um die Ausrichtung beim Zusammenfügen zu erleichtern."
      },
      {
        "question": "Kann ich Schnittmarken hinzufügen?",
        "answer": "Ja, Schnittmarken können hinzugefügt werden, um das Schneiden und Ausrichten zu erleichtern."
      },
      {
        "question": "Welche Papierformate werden unterstützt?",
        "answer": "Unterstützt werden A4, Letter, A3 und benutzerdefinierte Formate."
      }
    ]
  },
  "page-dimensions": {
    "title": "Seitenabmessungen",
    "metaDescription": "Analysieren Sie PDF-Seitengrößen. Zeigen Sie die Abmessungen aller Seiten in Ihrem Dokument an.",
    "keywords": [
      "PDF-Seitengröße",
      "Seitenabmessungen",
      "PDF-Maße",
      "Dokumentgröße"
    ],
    "description": "\n      <p>„Seitenabmessungen“ analysiert und zeigt die Größe jeder einzelnen Seite in Ihrem PDF-Dokument an. Zeigen Sie Abmessungen in verschiedenen Einheiten (Zoll, mm, Punkte) an und identifizieren Sie Seiten mit Nicht-Standardgrößen.</p>\n      <p>Nützlich für die Druckvorbereitung, Dokumentenanalyse oder das Aufspüren uneinheitlicher Seitenformate.</p>\n      <p>Die gesamte Analyse erfolgt in Ihrem Browser, sodass Ihre Dokumente privat bleiben.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Ziehen Sie Ihre PDF-Datei per Drag-and-Drop hierher oder klicken Sie, um sie auszuwählen."
      },
      {
        "step": 2,
        "title": "Abmessungen anzeigen",
        "description": "Sehen Sie die Seitenformate für alle Seiten angezeigt."
      },
      {
        "step": 3,
        "title": "Bericht exportieren",
        "description": "Exportieren Sie die Abmessungen optional als JSON."
      }
    ],
    "useCases": [
      {
        "title": "Druckplanung",
        "description": "Überprüfen Sie die Seitenformate vor dem Drucken.",
        "icon": "printer"
      },
      {
        "title": "Dokumentenanalyse",
        "description": "Identifizieren Sie Seiten mit ungewöhnlichen Abmessungen.",
        "icon": "search"
      },
      {
        "title": "Qualitätskontrolle",
        "description": "Stellen Sie sicher, dass die Seitenformate den Spezifikationen entsprechen.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "Welche Einheiten sind verfügbar?",
        "answer": "Zoll, Millimeter, Zentimeter und Punkte."
      },
      {
        "question": "Wird die Ausrichtung angezeigt?",
        "answer": "Ja, Hoch- oder Querformat wird angegeben."
      },
      {
        "question": "Kann ich uneinheitliche Größen korrigieren?",
        "answer": "Verwenden Sie das Werkzeug „Seitenformat anpassen“, um die Abmessungen zu vereinheitlichen."
      }
    ]
  },
  "remove-restrictions": {
    "title": "Einschränkungen aufheben",
    "metaDescription": "Heben Sie PDF-Einschränkungen auf. Schalten Sie Druck-, Kopier- und Bearbeitungsberechtigungen frei.",
    "keywords": [
      "PDF-Einschränkungen aufheben",
      "PDF entsperren",
      "PDF-Berechtigungen",
      "PDF-Sperre aufheben"
    ],
    "description": "\n      <p>„Einschränkungen aufheben“ entsperrt PDFs, die über Berechtigungseinschränkungen verfügen, die das Drucken, Kopieren oder Bearbeiten verhindern. Dieses Tool entfernt die Einschränkungen durch das Berechtigungspasswort (Besitzerpasswort), während der Dokumenteninhalt erhalten bleibt.</p>\n      <p>Hinweis: Dieses Tool kann keine Benutzerpasswörter (Öffnen-Passwörter) entfernen, die das Öffnen des Dokuments verhindern. Verwenden Sie für passwortgeschützte Dateien „PDF entschlüsseln“.</p>\n      <p>Die gesamte Verarbeitung erfolgt in Ihrem Browser, wodurch Ihre Dokumente privat bleiben.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Eingeschränktes PDF hochladen",
        "description": "Ziehen Sie Ihr eingeschränktes PDF per Drag-and-Drop hierher oder klicken Sie, um es auszuwählen."
      },
      {
        "step": 2,
        "title": "Einschränkungen aufheben",
        "description": "Klicken Sie auf „Aufheben“, um das Dokument freizugeben."
      },
      {
        "step": 3,
        "title": "Herunterladen",
        "description": "Laden Sie das uneingeschränkte PDF herunter."
      }
    ],
    "useCases": [
      {
        "title": "Drucken aktivieren",
        "description": "Geben Sie PDFs frei, bei denen das Drucken gesperrt ist.",
        "icon": "printer"
      },
      {
        "title": "Kopieren aktivieren",
        "description": "Erlauben Sie die Textauswahl und das Kopieren.",
        "icon": "copy"
      },
      {
        "title": "Bearbeitung aktivieren",
        "description": "Entfernen Sie Einschränkungen bei der Dokumentbearbeitung.",
        "icon": "edit"
      }
    ],
    "faq": [
      {
        "question": "Ist das legal?",
        "answer": "Das Entfernen von Einschränkungen aus Dokumenten, die Sie besitzen oder für die Sie Rechte besitzen, ist im Allgemeinen legal."
      },
      {
        "question": "Kann es das Kennwort zum Öffnen entfernen?",
        "answer": "Nein, verwenden Sie „PDF entschlüsseln“ für Dokumente mit einem Öffnen-Passwort."
      },
      {
        "question": "Wird der Inhalt beeinträchtigt?",
        "answer": "Nein, es werden nur die Einschränkungen entfernt; der Inhalt bleibt unverändert."
      }
    ]
  },
  "sanitize-pdf": {
    "title": "PDF bereinigen",
    "metaDescription": "Entfernen Sie versteckte Daten aus PDFs. Bereinigen Sie Metadaten, Skripte und sensible Informationen.",
    "keywords": [
      "PDF bereinigen",
      "PDF säubern",
      "versteckte Daten entfernen",
      "PDF-Datenschutz"
    ],
    "description": "\n      <p>„PDF bereinigen“ entfernt versteckte Daten und potenziell sensible Informationen aus Ihren Dokumenten. Bereinigen Sie Metadaten, eingebettete Skripte, Anhänge, Kommentare und andere versteckte Inhalte.</p>\n      <p>Unerlässlich für die Vorbereitung von Dokumenten zur öffentlichen Weitergabe oder wenn Datenschutz eine Rolle spielt.</p>\n      <p>Die gesamte Bereinigung erfolgt in Ihrem Browser, sodass Ihre Dokumente privat bleiben.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Ziehen Sie Ihre PDF-Datei per Drag-and-Drop hierher oder klicken Sie, um sie auszuwählen."
      },
      {
        "step": 2,
        "title": "Auswählen, was entfernt werden soll",
        "description": "Wählen Sie aus, welche Arten von versteckten Daten entfernt werden sollen."
      },
      {
        "step": 3,
        "title": "Bereinigen und herunterladen",
        "description": "Klicken Sie auf „Bereinigen“, um das PDF zu säubern und herunterzuladen."
      }
    ],
    "useCases": [
      {
        "title": "Öffentliche Freigabe",
        "description": "Bereiten Sie Dokumente für die öffentliche Weitergabe vor.",
        "icon": "globe"
      },
      {
        "title": "Datenschutz",
        "description": "Entfernen Sie persönliche Daten vor der Weitergabe.",
        "icon": "shield"
      },
      {
        "title": "Sicherheits-Compliance",
        "description": "Erfüllen Sie Sicherheitsanforderungen bei der Handhabung von Dokumenten.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "Welche versteckten Daten werden entfernt?",
        "answer": "Metadaten, Skripte, Anhänge, Kommentare, Formulardaten und ausgeblendete Ebenen."
      },
      {
        "question": "Wird der sichtbare Inhalt beeinträchtigt?",
        "answer": "Nein, es werden nur die versteckten Daten entfernt; der sichtbare Inhalt bleibt erhalten."
      },
      {
        "question": "Ist dies umkehrbar?",
        "answer": "Nein, entfernte Daten können nicht wiederhergestellt werden. Behalten Sie eine Sicherungskopie des Originals."
      }
    ]
  },
  "find-and-redact": {
    "title": "Suchen und schwärzen",
    "metaDescription": "Suchen und schwärzen Sie Text über alle Seiten einer PDF hinweg. Schwärzen Sie sensible Informationen wie Kontonummern, Namen und mehr im Stapelverfahren.",
    "keywords": [
      "PDF schwärzen",
      "suchen und schwärzen",
      "Stapelweise schwärzen",
      "Text entfernen",
      "PDF-Zensur",
      "sensible Daten verbergen"
    ],
    "description": "\n      <p>Mit „Suchen und schwärzen“ können Sie nach bestimmtem Text, Nummern oder Mustern auf allen Seiten Ihrer PDF suchen und alle übereinstimmenden Vorkommen auf einmal schwärzen. Perfekt zum Entfernen sensibler Informationen wie Kontonummern, Namen, Adressen oder anderen vertraulichen Daten.</p>\n      <p>Überprüfen Sie alle Übereinstimmungen in der Vorschau, bevor Sie die Schwärzungen anwenden, und wählen Sie gezielt aus, welche Vorkommen geschwärzt werden sollen. Unterstützt die Suche mit Beachtung der Groß-/Kleinschreibung, Ganzwortsuche und reguläre Ausdrücke (Regex) für erweiterte Mustersuchen.</p>\n      <p>Die gesamte Verarbeitung erfolgt in Ihrem Browser, wodurch Ihre Dokumente privat und sicher bleiben.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Ziehen Sie Ihre PDF-Datei per Drag-and-Drop hierher oder klicken Sie, um sie auszuwählen."
      },
      {
        "step": 2,
        "title": "Nach Text suchen",
        "description": "Geben Sie den Text, die Nummer oder das Regex-Muster ein, das Sie suchen und schwärzen möchten."
      },
      {
        "step": 3,
        "title": "Prüfen und auswählen",
        "description": "Prüfen Sie alle Übereinstimmungen in der Vorschau und wählen Sie die zu schwärzenden Vorkommen aus."
      },
      {
        "step": 4,
        "title": "Schwärzung anwenden",
        "description": "Passen Sie das Erscheinungsbild der Schwärzung an und wenden Sie sie auf die ausgewählten Übereinstimmungen an."
      }
    ],
    "useCases": [
      {
        "title": "Datenschutz-Compliance",
        "description": "Schwärzen Sie personenbezogene Daten zur Einhaltung der DSGVO (GDPR), HIPAA oder anderer Vorschriften.",
        "icon": "shield"
      },
      {
        "title": "Rechtsdokumente",
        "description": "Entfernen Sie vertrauliche Daten aus juristischen Dokumenten, bevor Sie diese teilen.",
        "icon": "scale"
      },
      {
        "title": "Finanzunterlagen",
        "description": "Schwärzen Sie Kontonummern, Sozialversicherungsnummern oder Finanzdaten auf Abrechnungen.",
        "icon": "credit-card"
      }
    ],
    "faq": [
      {
        "question": "Ist die Schwärzung dauerhaft?",
        "answer": "Ja, die Schwärzung löscht den darunter liegenden Text unwiderruflich. Der ursprüngliche Inhalt kann nicht wiederhergestellt werden. Behalten Sie immer eine Sicherungskopie der Originaldatei."
      },
      {
        "question": "Kann ich Bilder oder gescannten Text schwärzen?",
        "answer": "Dieses Werkzeug ist für textbasierte PDFs konzipiert. Für gescannte Dokumente müssen Sie die manuelle, bereichsbasierte Schwärzung verwenden."
      },
      {
        "question": "Kann ich das Erscheinungsbild der Schwärzung anpassen?",
        "answer": "Ja, Sie können die Schwärzungsfarbe festlegen, Rahmen hinzufügen und optional einen Platzhaltertext wie „[GESCHWÄRZT]“ einfügen."
      },
      {
        "question": "Wie funktioniert die Suche mit regulären Ausdrücken?",
        "answer": "Aktivieren Sie „Regulären Ausdruck verwenden“, um mit Regex-Mustern zu suchen. Beispielsweise sucht \\d{4}-\\d{4}-\\d{4}-\\d{4} nach Kreditkartennummern."
      }
    ]
  },
  "flatten-pdf": {
    "title": "PDF reduzieren",
    "metaDescription": "Reduzieren Sie PDF-Formulare und -Kommentare. Machen Sie Inhalte uneditierbar.",
    "keywords": [
      "PDF reduzieren",
      "Formulare reduzieren",
      "Kommentare reduzieren",
      "nicht editierbares PDF"
    ],
    "description": "\n      <p>„PDF reduzieren“ konvertiert interaktive Elemente wie Formularfelder und Kommentare in statische Inhalte. Das reduzierte PDF sieht optisch identisch aus, kann jedoch nicht mehr ausgefüllt oder bearbeitet werden.</p>\n      <p>Perfekt zum Finalisieren ausgefüllter Formulare, zum dauerhaften Verankern von Kommentaren oder zum Erstellen nicht editierbarer Dokumentversionen.</p>\n      <p>Die gesamte Verarbeitung erfolgt in Ihrem Browser, wodurch Ihre Dokumente privat bleiben.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Ziehen Sie Ihr PDF mit Formularen oder Kommentaren per Drag-and-Drop hierher."
      },
      {
        "step": 2,
        "title": "Auswählen, was reduziert werden soll",
        "description": "Wählen Sie aus, ob Formulare, Kommentare oder beides reduziert werden sollen."
      },
      {
        "step": 3,
        "title": "Reduzieren und herunterladen",
        "description": "Klicken Sie auf „Reduzieren“, um das statische PDF zu erstellen."
      }
    ],
    "useCases": [
      {
        "title": "Formulare finalisieren",
        "description": "Sperren Sie ausgefüllte Formulardaten, um Änderungen zu verhindern.",
        "icon": "lock"
      },
      {
        "title": "Kommentare verankern",
        "description": "Machen Sie Kommentare im Dokument dauerhaft (statisch).",
        "icon": "check-circle"
      },
      {
        "title": "Dokumente archivieren",
        "description": "Erstellen Sie nicht editierbare Versionen zur Archivierung.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Ist das Reduzieren umkehrbar?",
        "answer": "Nein, das Reduzieren ist dauerhaft. Behalten Sie eine Sicherungskopie des Originals."
      },
      {
        "question": "Ändert sich das Erscheinungsbild?",
        "answer": "Nein, das Dokument sieht genauso aus, ist aber nicht mehr interaktiv."
      },
      {
        "question": "Reduziert es die Dateigröße?",
        "answer": "Manchmal, da interaktive Elemente in einfachere statische Inhalte umgewandelt werden."
      }
    ]
  },
  "remove-metadata": {
    "title": "Metadaten entfernen",
    "metaDescription": "Metadaten aus PDF-Dateien entfernen. Löschen Sie Autor, Daten und Dokumenteigenschaften.",
    "keywords": [
      "PDF-Metadaten entfernen",
      "Metadaten bereinigen",
      "PDF-Datenschutz",
      "anonymes PDF"
    ],
    "description": "\n      <p>„Metadaten entfernen“ bereinigt alle Dokumenteigenschaften und Metadaten aus Ihren PDF-Dateien. Entfernen Sie Autorennamen, Erstellungsdaten, Software-Informationen und andere identifizierende Daten.</p>\n      <p>Unerlässlich für den Datenschutz beim Teilen von Dokumenten oder wenn Metadaten sensible Informationen offenlegen könnten.</p>\n      <p>Die gesamte Verarbeitung erfolgt in Ihrem Browser, wodurch Ihre Dokumente privat bleiben.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Ziehen Sie Ihre PDF-Datei per Drag-and-Drop hierher oder klicken Sie, um sie auszuwählen."
      },
      {
        "step": 2,
        "title": "Metadaten entfernen",
        "description": "Klicken Sie auf „Entfernen“, um alle Metadaten zu bereinigen."
      },
      {
        "step": 3,
        "title": "Herunterladen",
        "description": "Laden Sie das metadatenfreie PDF herunter."
      }
    ],
    "useCases": [
      {
        "title": "Datenschutz",
        "description": "Entfernen Sie persönliche Daten vor dem Teilen.",
        "icon": "shield"
      },
      {
        "title": "Anonyme Dokumente",
        "description": "Erstellen Sie Dokumente ohne Angabe des Autors.",
        "icon": "user-x"
      },
      {
        "title": "Bereinigte Verteilung",
        "description": "Verteilen Sie Dokumente ohne interne Metadaten.",
        "icon": "send"
      }
    ],
    "faq": [
      {
        "question": "Welche Metadaten werden entfernt?",
        "answer": "Autor, Titel, Thema, Schlüsselwörter, Datumsangaben, Ersteller- und Herstellerinformationen."
      },
      {
        "question": "Werden XMP-Metadaten entfernt?",
        "answer": "Ja, es werden sowohl Standard- als auch XMP-Metadaten bereinigt."
      },
      {
        "question": "Wird der Inhalt beeinträchtigt?",
        "answer": "Nein, es werden nur Metadaten entfernt; der Dokumenteninhalt bleibt unverändert."
      }
    ]
  },
  "change-permissions": {
    "title": "Berechtigungen ändern",
    "metaDescription": "Ändern Sie PDF-Berechtigungen. Steuern Sie den Zugriff auf Drucken, Kopieren und Bearbeiten.",
    "keywords": [
      "PDF-Berechtigungen",
      "PDF-Zugriff ändern",
      "PDF einschränken",
      "PDF-Sicherheit"
    ],
    "description": "\n      <p>„Berechtigungen ändern“ modifiziert die Zugriffskontrollen für Ihre PDF-Dokumente. Aktivieren oder deaktivieren Sie Berechtigungen für Drucken, Kopieren, Bearbeiten und Kommentieren.</p>\n      <p>Legen Sie ein Besitzerpasswort (Berechtigungspasswort) fest, um diese Einschränkungen durchzusetzen. Empfänger können das Dokument anzeigen, sind jedoch in ihren Aktionen eingeschränkt.</p>\n      <p>Die gesamte Verarbeitung erfolgt in Ihrem Browser, wodurch Ihre Dokumente privat bleiben.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Ziehen Sie Ihre PDF-Datei per Drag-and-Drop hierher oder klicken Sie, um sie auszuwählen."
      },
      {
        "step": 2,
        "title": "Berechtigungen festlegen",
        "description": "Aktivieren oder deaktivieren Sie Drucken, Kopieren, Bearbeiten und Kommentieren."
      },
      {
        "step": 3,
        "title": "Anwenden und herunterladen",
        "description": "Legen Sie das Besitzerpasswort fest und laden Sie das eingeschränkte PDF herunter."
      }
    ],
    "useCases": [
      {
        "title": "Kopieren verhindern",
        "description": "Deaktivieren Sie das Kopieren von Text, um Ihre Inhalte zu schützen.",
        "icon": "copy"
      },
      {
        "title": "Drucken kontrollieren",
        "description": "Einschränken oder Erlauben des Dokumentendrucks.",
        "icon": "printer"
      },
      {
        "title": "Bearbeitung einschränken",
        "description": "Verhindern Sie Änderungen am Dokument.",
        "icon": "edit-3"
      }
    ],
    "faq": [
      {
        "question": "Benötige ich ein Passwort?",
        "answer": "Ein Besitzerpasswort ist erforderlich, um die Berechtigungen durchzusetzen."
      },
      {
        "question": "Können Berechtigungen wieder entfernt werden?",
        "answer": "Ja, mit dem Besitzerpasswort oder über das Werkzeug „Einschränkungen aufheben“."
      },
      {
        "question": "Sind all PDF-Reader kompatibel?",
        "answer": "Die meisten PDF-Reader respektieren Berechtigungen, aber einige setzen sie möglicherweise nicht durch."
      }
    ]
  },
  "pdf-to-markdown": {
    "title": "PDF in Markdown",
    "metaDescription": "Konvertieren Sie PDF in das Markdown-Format. Extrahieren Sie Text und erhalten Sie Formatierungen wie Überschriften und Listen.",
    "keywords": [
      "PDF in Markdown",
      "PDF in MD konvertieren",
      "PDF-Textextraktion",
      "Markdown-Konverter",
      "PDF in Text"
    ],
    "description": "\n      <p>„PDF in Markdown“ konvertiert Ihre PDF-Dokumente in saubere, gut strukturierte Markdown-Dateien. Das Tool extrahiert intelligent Textinhalte und versucht, Formatierungen wie Überschriften, Listen und Absätze beizubehalten.</p>\n      <p>Perfekt für die Konvertierung von PDF-Dokumenten in editierbare Formate für Dokumentationen, Notizen oder Content-Management-Systeme, die Markdown unterstützen.</p>\n      <p>Die gesamte Konvertierung erfolgt lokal in Ihrem Browser, wodurch Ihre Dokumente privat und sicher bleiben.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Ziehen Sie Ihre PDF-Datei per Drag-and-Drop hierher oder klicken Sie, um sie auszuwählen."
      },
      {
        "step": 2,
        "title": "Optionen konfigurieren",
        "description": "Legen den Seitenbereich fest, wählen Sie aus, ob Seitenzahlen einbezogen werden sollen, und passen Sie die Zeilenumbruch-Einstellungen an."
      },
      {
        "step": 3,
        "title": "Konvertieren und herunterladen",
        "description": "Klicken Sie auf „Konvertieren“, um Ihre Markdown-Datei zu generieren und herunterzuladen."
      }
    ],
    "useCases": [
      {
        "title": "Dokumentation",
        "description": "Konvertieren Sie PDF-Handbücher und -Anleitungen in Markdown für eine versionierte Dokumentation.",
        "icon": "file-text"
      },
      {
        "title": "Notizerstellung",
        "description": "Extrahieren Sie Inhalte aus PDF-Artikeln und -Büchern für Ihr Notizensystem.",
        "icon": "edit-3"
      },
      {
        "title": "Inhaltsmigration",
        "description": "Migrieren Sie PDF-Inhalte auf CMS-Plattformen, die Markdown unterstützen.",
        "icon": "copy"
      }
    ],
    "faq": [
      {
        "question": "Bleibt die Formatierung erhalten?",
        "answer": "Das Tool versucht, Überschriften anhand der Schriftgröße sowie Aufzählungen/nummerierte Listen zu erkennen. Komplexe Layouts erfordern möglicherweise manuelle Anpassungen."
      },
      {
        "question": "Kann ich bestimmte Seiten konvertieren?",
        "answer": "Ja, Sie können einen Seitenbereich wie „1-3, 5, 7“ angeben, um nur diese Seiten zu konvertieren."
      },
      {
        "question": "Funktioniert es mit gescannten PDFs?",
        "answer": "Gescannte PDFs enthalten Bilder und keinen Text. Verwenden Sie zuerst unser OCR-Werkzeug, um den Text zu extrahieren, bevor Sie ihn in Markdown konvertieren."
      }
    ]
  },
  "ocg-manager": {
    "title": "PDF-Ebenen-Manager (OCG)",
    "metaDescription": "Verwalten Sie PDF-Ebenen (Optional Content Groups). Anzeigen, Ein-/Ausblenden, Hinzufügen, Löschen und Umbenennen von Ebenen in Ihren PDF-Dokumenten.",
    "keywords": [
      "PDF-Ebenen",
      "OCG-Manager",
      "Optional Content Groups",
      "Sichtbarkeit von PDF-Ebenen",
      "PDF-Ebenen verwalten"
    ],
    "description": "\n      <p>Der „PDF-Ebenen-Manager“ ermöglicht Ihnen das Anzeigen und Verwalten von Optional Content Groups (OCG) in Ihren PDF-Dokumenten. OCG-Ebenen werden in technischen Zeichnungen, Karten und komplexen Dokumenten verwendet, um Inhalte in ein- und ausblendbare Ebenen zu organisieren.</p>\n      <p>Zeigen Sie alle Ebenen in Ihrer PDF an, schalten Sie deren Sichtbarkeit um, fügen Sie neue Ebenen hinzu, löschen Sie unerwünschte oder benennen Sie vorhandene Ebenen um. Dieses Werkzeug ist unverzichtbar für die Arbeit mit geschichteten PDFs wie Bauplänen, CAD-Exporten und druckfertigen Dokumenten.</p>\n      <p>Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser, wodurch Ihre Dokumente privat und sicher bleiben.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF hochladen",
        "description": "Laden Sie eine PDF-Datei hoch, die Ebenen (OCGs) enthält oder der Sie Ebenen hinzufügen möchten."
      },
      {
        "step": 2,
        "title": "Ebenen anzeigen",
        "description": "Das Werkzeug listet automatisch alle im Dokument gefundenen Ebenen mit ihrem Sichtbarkeitsstatus auf."
      },
      {
        "step": 3,
        "title": "Ebenen verwalten",
        "description": "Schalten Sie die Sichtbarkeit von Ebenen um, benennen Sie Ebenen um, fügen Sie neue hinzu oder löschen Sie unerwünschte Ebenen."
      },
      {
        "step": 4,
        "title": "Speichern und herunterladen",
        "description": "Laden Sie Ihr geändertes PDF mit den angewendeten Ebenenänderungen herunter."
      }
    ],
    "useCases": [
      {
        "title": "Technische Zeichnungen",
        "description": "Verwalten Sie Ebenen in CAD-Exporten, um Bemaßungen, Anmerkungen oder verschiedene Ansichten ein- oder auszublenden.",
        "icon": "ruler"
      },
      {
        "title": "Kartenbearbeitung",
        "description": "Schalten Sie verschiedene Kartenebenen wie Topografie, Straßen und Beschriftungen für benutzerdefinierte Kartendrucke um.",
        "icon": "map"
      },
      {
        "title": "Druckvorbereitung",
        "description": "Bereiten Sie geschichtete PDFs für den Druck vor, indem Sie die entsprechenden Ebenen für verschiedene Versionen ein- oder ausblenden.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Was sind PDF-Ebenen (OCG)?",
        "answer": "Optional Content Groups (OCG) sind Ebenen in einem PDF, die ein- oder ausgeblendet werden können. Sie werden häufig in CAD-Zeichnungen, Karten und komplexen Dokumenten verwendet."
      },
      {
        "question": "Warum zeigt mein PDF keine Ebenen an?",
        "answer": "Nicht alle PDFs enthalten Ebenen. Ebenen werden normalerweise während der PDF-Erstellung aus Design-Software oder CAD-Anwendungen hinzugefügt."
      },
      {
        "question": "Wirken sich Ebenenänderungen auf den ursprünglichen Inhalt aus?",
        "answer": "Änderungen der Ebenensichtbarkeit wirken sich nur darauf aus, was angezeigt oder gedruckt wird. Der tatsächliche Inhalt verbleibt im Dokument."
      }
    ]
  },
  "pdf-reader": {
    "title": "PDF-Reader",
    "metaDescription": "Kostenloser Online-PDF-Reader. Zeigen Sie PDF-Dokumente an, navigieren Sie darin, zoomen, rotieren und drucken Sie diese direkt in Ihrem Browser.",
    "keywords": [
      "PDF-Reader",
      "PDF-Viewer",
      "PDF online ansehen",
      "PDF lesen",
      "PDF-Browser-Viewer"
    ],
    "description": "\n      <p>PDF-Reader ist ein voll funktionsfähiger PDF-Viewer, mit dem Sie PDF-Dokumente direkt in Ihrem Browser lesen und darin navigieren können. Keine Softwareinstallation erforderlich – laden Sie einfach Ihr PDF hoch und beginnen Sie zu lesen.</p>\n      <p>Navigieren Sie zwischen den Seiten, zoomen Sie hinein und heraus, drehen Sie die Ansicht und nutzen Sie den Vollbildmodus für ablenkungsfreies Lesen. Sie können Dokumente auch drucken oder für den Offline-Zugriff herunterladen.</p>\n      <p>Die gesamte Anzeige erfolgt lokal in Ihrem Browser. Ihre Dokumente werden niemals auf einen Server hochgeladen, was absolute Vertraulichkeit garantiert.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "PDF öffnen",
        "description": "Klicken Sie zum Hochladen oder ziehen Sie eine PDF-Datei per Drag-and-Drop, um sie im Reader zu öffnen."
      },
      {
        "step": 2,
        "title": "Seiten navigieren",
        "description": "Verwenden Sie die Seitensteuerung, um zur vorherigen oder nächsten Seite zu gelangen oder zu einer bestimmten Seitennummer zu springen."
      },
      {
        "step": 3,
        "title": "Ansicht anpassen",
        "description": "Zoomen Sie hinein oder heraus, drehen Sie die Ansicht oder wechseln Sie in den Vollbildmodus für ein angenehmes Lesen."
      },
      {
        "step": 4,
        "title": "Drucken oder Herunterladen",
        "description": "Drucken Sie das Dokument aus oder laden Sie es bei Bedarf für den Offline-Zugriff herunter."
      }
    ],
    "useCases": [
      {
        "title": "Dokumentenprüfung",
        "description": "Überprüfen Sie PDF-Dokumente schnell, ohne Software installieren zu müssen.",
        "icon": "book-open"
      },
      {
        "title": "Mobiles Lesen",
        "description": "Lesen Sie PDF-Dokumente auf jedem Gerät mit einem Webbrowser.",
        "icon": "smartphone"
      },
      {
        "title": "Schnellvorschau",
        "description": "Zeigen Sie eine Vorschau von PDFs an, bevor Sie sich entscheiden, sie herunterzuladen oder zu drucken.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "Ist mein Dokument sicher?",
        "answer": "Ja, Ihr Dokument wird vollständig in Ihrem Browser verarbeitet und niemals auf einen Server hochgeladen."
      },
      {
        "question": "Kann ich das PDF kommentieren oder bearbeiten?",
        "answer": "Dieses Tool dient nur zur Anzeige. Verwenden Sie unsere Werkzeuge „PDF unterschreiben“ oder „PDF kommentieren“ zur Bearbeitung."
      },
      {
        "question": "Funktioniert es auf Mobilgeräten?",
        "answer": "Ja, der PDF-Reader funktioniert auf allen Geräten mit einem modernen Webbrowser."
      }
    ]
  }
};
