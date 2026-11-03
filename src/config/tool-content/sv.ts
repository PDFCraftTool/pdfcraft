/**
 * Swedish tool content for SEO
 * Innehåller detaljerade beskrivningar, instruktioner, användningsområden och vanliga frågor för alla verktyg
 * Requirements: 4.2-4.5 - Tool page content (description, how-to, use cases, FAQ)
 */

import { ToolContent } from '@/types/tool';

/**
 * Swedish tool content map
 */
export const toolContentSv: Record<string, ToolContent> = {
  "pdf-multi-tool": {
    "title": "PDF multiverktyg",
    "metaDescription": "Allt-i-ett PDF-redigerare: slå samman, dela, organisera, ta bort, rotera och extrahera sidor i ett kraftfullt verktyg.",
    "keywords": [
      "pdf multiverktyg",
      "pdf-redigerare",
      "slå samman pdf",
      "dela pdf",
      "organisera pdf",
      "allt i en pdf"
    ],
    "description": "<p> PDF Multi Tool är din heltäckande lösning för alla PDF-sidorhanteringsuppgifter. Detta kraftfulla allt-i-ett-verktyg kombinerar flera PDF-operationer till ett enda, intuitivt gränssnitt, vilket sparar tid och ansträngning.</p>\n      <p>Oavsett om du behöver slå samman flera dokument, dela upp en stor PDF i mindre filer, organisera om sidor, ta bort oönskat innehåll, rotera sidor eller extrahera specifika avsnitt, hanterar det här verktyget allt utan att växla mellan olika applikationer.</p>\n      <p>All bearbetning sker direkt i din webbläsare, vilket säkerställer att dina dokument förblir privata och säkra. Inga filer laddas upp till någon server.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil till uppladdningsområdet eller klicka för att bläddra och välja filer från din enhet."
      },
      {
        "step": 2,
        "title": "Välj din verksamhet",
        "description": "Välj bland de tillgängliga åtgärderna: slå samman, dela, organisera, ta bort sidor, rotera, lägg till tomma sidor eller extrahera sidor."
      },
      {
        "step": 3,
        "title": "Konfigurera alternativ",
        "description": "Justera inställningar som är specifika för din valda operation, såsom sidintervall, rotationsvinklar eller sammanfogningsordning."
      },
      {
        "step": 4,
        "title": "Bearbeta och ladda ner",
        "description": "Klicka på processknappen och ladda ner din modifierade PDF när operationen är klar."
      }
    ],
    "useCases": [
      {
        "title": "Dokumentförberedelse",
        "description": "Förbered dokument för inlämning genom att ta bort onödiga sidor, ändra ordning på innehåll och kombinera flera filer.",
        "icon": "file-check"
      },
      {
        "title": "Rapportförsamling",
        "description": "Kombinera flera rapportavsnitt, lägg till försättsblad och organisera kapitel i ett enda professionellt dokument.",
        "icon": "book-open"
      },
      {
        "title": "Arkivhantering",
        "description": "Dela upp stora arkivfiler i hanterbara sektioner, extrahera relevanta sidor och omorganisera historiska dokument.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Hur många PDF-filer kan jag bearbeta samtidigt?",
        "answer": "Du kan ladda upp och bearbeta upp till 10 PDF-filer samtidigt, med en sammanlagd maximal storlek på 500 MB."
      },
      {
        "question": "Kommer mina bokmärken att bevaras?",
        "answer": "Ja, när du slår samman PDF-filer bevarar verktyget befintliga bokmärken och kan valfritt kombinera dem till en enhetlig bokmärkesstruktur."
      },
      {
        "question": "Finns det en sidgräns?",
        "answer": "Det finns ingen strikt sidgräns. Verktyget kan hantera dokument med hundratals sidor, även om mycket stora filer kan ta längre tid att bearbeta."
      }
    ]
  },
  "merge-pdf": {
    "title": "Sammanfoga filer och PDF",
    "metaDescription": "Kombinera flera PDF-filer, bilder (JPG/PNG), Office-dokument (Word/Excel/PPT) och text till ett enhetligt PDF-dokument. Gratis onlineverktyg med dra-och-släpp-omordning.",
    "keywords": [
      "slå samman pdf",
      "kombinera filer",
      "kombinera pdf",
      "gå med pdf",
      "bilder till pdf",
      "slå samman word till pdf",
      "pdf sammanslagning",
      "sammanfoga pdf"
    ],
    "description": "Med <p>Combine Files kan du snabbt och enkelt slå samman flera PDF-dokument, bilder (JPG, PNG, WebP, BMP), Office-dokument (Word, Excel, PowerPoint) och vanlig text till en enda sammanhängande PDF-fil. Oavsett om du konsoliderar rapporter i flera format, kombinerar skannade kvitton eller sammanställer presentationer, gör detta verktyg processen sömlös.</p>\n      <p> Ladda bara upp dina filer, ordna dem i önskad ordning genom att dra och släppa och slå samman dem till ett dokument. Icke-PDF-filer konverteras automatiskt till högkvalitativa PDF-sidor i farten, och bokmärken kan valfritt underhållas från varje källfils namn.</p>\n      <p>Alla konverteringar och sammanslagningar sker lokalt i din webbläsares sandlåda, vilket säkerställer fullständig integritet för dina känsliga dokument utan att ladda upp till fjärrservrar.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp filer",
        "description": "Dra och släpp PDF-filer, bilder (JPG/PNG), Office-dokument (Word/Excel/PPT) eller textfiler till uppladdningsområdet."
      },
      {
        "step": 2,
        "title": "Ordna ordning",
        "description": "Dra och släpp filkorten för att ordna dem i önskad ordning. Liveminiatyrer förhandsgranskas för bilder."
      },
      {
        "step": 3,
        "title": "Sammanfoga och ladda ner",
        "description": "Klicka på knappen Sammanfoga för att automatiskt konvertera och kombinera alla filer till en enda PDF, ladda sedan ner ditt resultat."
      }
    ],
    "useCases": [
      {
        "title": "Arkivering med blandad media",
        "description": "Kombinera kontrakt, identifieringsfoton, fakturakvitton och anteckningar till ett komplett arkivunderlag.",
        "icon": "briefcase"
      },
      {
        "title": "Konsolidera affärsrapporter",
        "description": "Sammanfoga Word-analyser, Excel-ekonomitabeller och PowerPoint-presentationsbilder till en rapportlek.",
        "icon": "file-text"
      },
      {
        "title": "Sätt ihop portföljer",
        "description": "Kombinera flera designgrafik (JPG/PNG) och textbeskrivningar till en snygg professionell portfölj.",
        "icon": "image"
      }
    ],
    "faq": [
      {
        "question": "Vilka filformat kan jag kombinera?",
        "answer": "Du kan kombinera standard PDF-filer, bilder (JPG, PNG, WebP, BMP, SVG), Office-dokument (Word .docx/.doc, Excel .xlsx/.xls, PowerPoint .pptx/.ppt) och textfiler (.txt, .md)."
      },
      {
        "question": "Hur många filer kan jag slå ihop samtidigt?",
        "answer": "Du kan slå samman upp till 100 filer samtidigt, med en total sammanlagd storlek på upp till 500 MB."
      },
      {
        "question": "Kommer icke-PDF-filer att behålla sin visuella kvalitet?",
        "answer": "Ja! Bilder och dokument renderas med hög upplösning och anpassas till standardsidor utan förlustkompression."
      },
      {
        "question": "Kan jag slå samman lösenordsskyddade PDF-filer?",
        "answer": "Lösenordsskyddade PDF-filer måste dekrypteras först. Använd vårt Dekryptera PDF-verktyg för att ta bort lösenordet innan du slår samman."
      }
    ]
  },
  "rotate-custom": {
    "title": "Rotera med valfri vinkel",
    "metaDescription": "Rotera PDF-sidor i valfri vinkel. Exakt anpassad rotation för att räta ut skannade dokument.",
    "keywords": [
      "rotera pdf anpassad vinkel",
      "räta ut pdf",
      "ladda ner pdf",
      "pdf anpassad rotation"
    ],
    "description": "<p>Rotate by Custom Degrees ger dig exakt kontroll över din PDF-sideorientering. Till skillnad från vanliga rotationsverktyg som bara stöder 90-graderssteg, låter det här verktyget dig rotera sidor med vilken specifik vinkel som helst.</p>\n      <p>Perfekt för att räta ut skannade dokument som matades något snett, eller för att justera diagram och diagram till rätt riktning. Du kan korrigera enskilda sidor eller använda samma rotation på hela dokumentet.</p>\n      <p>All bearbetning sker lokalt i din webbläsare, vilket säkerställer att dina dokument förblir privata samtidigt som du uppnår perfekt anpassning.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp PDF",
        "description": "Ladda upp PDF-filen som innehåller sidor du behöver rotera."
      },
      {
        "step": 2,
        "title": "Ställ in rotationsvinkel",
        "description": "Ange den exakta rotationsgraden för varje sida, eller ställ in en batchvinkel för alla sidor."
      },
      {
        "step": 3,
        "title": "Förhandsgranska och justera",
        "description": "Använd förhandsgranskningen i realtid för att säkerställa att sidorna är perfekt anpassade."
      },
      {
        "step": 4,
        "title": "Ansök och ladda ner",
        "description": "Klicka på Rotera för att tillämpa ändringarna och ladda ner din uträtade PDF."
      }
    ],
    "useCases": [
      {
        "title": "Skannade dokument",
        "description": "Räta ut skannade sidor som matades in i skannern i en vinkel.",
        "icon": "scan"
      },
      {
        "title": "Tekniska ritningar",
        "description": "Justera orienteringen av tekniska diagram och planer med precision.",
        "icon": "ruler"
      },
      {
        "title": "Kreativa layouter",
        "description": "Skapa unika layouter genom att rotera sidor till specifika konstnärliga vinklar.",
        "icon": "pen-tool"
      }
    ],
    "faq": [
      {
        "question": "Kan jag rotera med decimaler, t.ex. 45,5 grader?",
        "answer": "För närvarande stöder verktyget heltalsgrader, men vi arbetar med att möjliggöra decimalprecision."
      },
      {
        "question": "Påverkar detta sidans innehåll?",
        "answer": "Innehållet roteras visuellt. Sidstorleken justeras automatiskt för att passa det roterade innehållet."
      },
      {
        "question": "Kan jag rotera bara en sida?",
        "answer": "Ja, du kan ställa in en anpassad rotationsvinkel för varje enskild sida medan andra lämnas oförändrade."
      }
    ]
  },
  "grid-combine": {
    "title": "Kombinera PDF i rutnät",
    "metaDescription": "Kombinera flera PDF-filer på enstaka sidor med en flexibel rutnätslayout. Ordna 2, 4, 6, 9 eller fler PDF-filer per sida med ramar och mellanrum.",
    "keywords": [
      "rutnät kombinera",
      "slå samman pdf-rutnät",
      "pdf collage",
      "flera pdf-filer på en sida",
      "pdf n-upp",
      "kombinera pdf-rutnät"
    ],
    "description": "<p>Grid Combine-verktyget erbjuder ett unikt sätt att slå samman flera separata PDF-filer på enstaka sidor. Till skillnad från standardverktyget \"Sammanfoga PDF\" som helt enkelt lägger till sidor, eller verktyget \"N-Up\" som ordnar om sidor från ett enda dokument, tar Grid Combine flera inmatningsfiler och arrangerar dem sida vid sida i en anpassningsbar rutnätslayout.</p>\n      <p>Du kan välja mellan olika rutnätskonfigurationer som 2x1, 2x2, 3x3, etc. Detta är perfekt för att jämföra flera dokument, skapa åhörarkopior från olika källor eller skriva ut kompakta versioner av flera filer.</p>\n      <p>Anpassa utskriften med kontroll över sidstorlek, orientering, marginaler, avstånd och kanter. All bearbetning sker lokalt i din webbläsare för maximal sekretess.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp PDF-filer",
        "description": "Ladda upp två eller flera PDF-filer som du vill kombinera. Du kan ordna om dem i önskad ordning."
      },
      {
        "step": 2,
        "title": "Välj Grid Layout",
        "description": "Välj önskad rutnätslayout (t.ex. 2x2 för 4 filer per sida, 3x3 för 9 filer per sida)."
      },
      {
        "step": 3,
        "title": "Anpassa utseende",
        "description": "Justera inställningar som sidstorlek (A4, Letter), orientering, avstånd mellan objekt och kanter."
      },
      {
        "step": 4,
        "title": "Kombinera och ladda ner",
        "description": "Klicka på \"Sammanfoga PDF-filer\" för att skapa ditt nya rutnätslayoutdokument och ladda ner resultatet."
      }
    ],
    "useCases": [
      {
        "title": "Visuell jämförelse",
        "description": "Placera olika versioner av en design eller ett dokument sida vid sida på en enda sida för enkel jämförelse.",
        "icon": "layout-grid"
      },
      {
        "title": "Skriva ut åhörarkopior",
        "description": "Kombinera flera korta dokument eller diabilder på ett enda pappersark för att spara utskriftskostnader.",
        "icon": "printer"
      },
      {
        "title": "Skapande av portfölj",
        "description": "Visa upp flera projektfiler i en ren, organiserad rutnätsöversikt.",
        "icon": "image"
      }
    ],
    "faq": [
      {
        "question": "Hur skiljer sig detta från N-Up?",
        "answer": "N-Up tar sidor från EN PDF och lägger dem på ett ark. Grid Combine tar FLERA OLIKA PDF-filer och lägger dem på ett ark."
      },
      {
        "question": "Hur många filer kan jag kombinera?",
        "answer": "Du kan kombinera upp till 100 filer beroende på ditt webbläsarminne, men layouter som 4x4 rymmer upp till 16 filer per sida."
      },
      {
        "question": "Kan jag lägga till ramar?",
        "answer": "Ja, du kan lägga till ramar runt varje PDF-fil och anpassa kantfärgen."
      }
    ]
  },
  "split-pdf": {
    "title": "Dela PDF",
    "metaDescription": "Dela upp PDF-filer i flera dokument. Extrahera specifika sidor eller dela med sidintervall.",
    "keywords": [
      "dela pdf",
      "dela pdf",
      "separat pdf",
      "extrahera sidor",
      "pdf splitter"
    ],
    "description": "<p>Split PDF låter dig dela upp ett enda PDF-dokument i flera mindre filer. Detta är perfekt för att extrahera specifika kapitel, separera kombinerade dokument eller skapa enskilda filer från en flersidig PDF.</p>\n      <p>Du kan dela upp efter specifika sidintervall, extrahera enskilda sidor eller dela upp dokumentet med jämna mellanrum. Verktyget ger en visuell förhandsvisning av dina sidor, vilket gör det enkelt att välja exakt vad du behöver.</p>\n      <p>All bearbetning sker lokalt i din webbläsare, vilket säkerställer att dina dokument förblir privata och säkra.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att bläddra och välj den fil du vill dela."
      },
      {
        "step": 2,
        "title": "Välj Splitmetod",
        "description": "Välj hur du vill dela: efter sidintervall, extrahera specifika sidor eller dela med jämna mellanrum."
      },
      {
        "step": 3,
        "title": "Definiera sidintervall",
        "description": "Ange sidnumren eller intervallen som du vill extrahera (t.ex. 1-5, 8, 10-15)."
      },
      {
        "step": 4,
        "title": "Dela och ladda ner",
        "description": "Klicka på Dela för att skapa dina nya PDF-filer och ladda ner dem individuellt eller som ett ZIP-arkiv."
      }
    ],
    "useCases": [
      {
        "title": "Extrahera kapitel",
        "description": "Dela upp en bok eller manual i enskilda kapitel för enklare läsning eller distribution.",
        "icon": "book"
      },
      {
        "title": "Separata kombinerade skanningar",
        "description": "Dela upp ett batchskannat dokument i enskilda filer för varje originaldokument.",
        "icon": "copy"
      },
      {
        "title": "Skapa åhörarkopior",
        "description": "Extrahera specifika bilder eller sidor från en presentation för att skapa fokuserade åhörarkopior.",
        "icon": "presentation"
      }
    ],
    "faq": [
      {
        "question": "Kan jag dela upp en PDF i enskilda sidor?",
        "answer": "Ja, du kan dela upp en PDF i enskilda ensidiga filer genom att välja alternativet \"Dela upp varje sida\"."
      },
      {
        "question": "Vad händer med bokmärken vid delning?",
        "answer": "Bokmärken som faller inom det extraherade sidintervallet bevaras i de resulterande PDF-filerna."
      },
      {
        "question": "Kan jag dela lösenordsskyddade PDF-filer?",
        "answer": "Du måste först dekryptera PDF-filen med vårt Dekryptera PDF-verktyg innan du delar upp den."
      }
    ]
  },
  "compress-pdf": {
    "title": "Komprimera PDF",
    "metaDescription": "Minska PDF-filstorleken samtidigt som kvaliteten bibehålls. Gratis online PDF-kompressor för mindre filer.",
    "keywords": [
      "komprimera pdf",
      "minska pdf-storleken",
      "pdf-kompressor",
      "krympa pdf",
      "optimera pdf"
    ],
    "description": "<p>Komprimera PDF minskar filstorleken på dina PDF-dokument med bibehållen acceptabel kvalitet. Detta är viktigt för e-postbilagor, webbuppladdningar eller för att spara lagringsutrymme.</p>\n      <p>Verktyget erbjuder flera komprimeringsnivåer för att balansera mellan filstorleksminskning och kvalitetsbevarande. Du kan välja aggressiv komprimering för maximal storleksminskning eller lätt komprimering för att bibehålla högre kvalitet.</p>\n      <p>All komprimering sker i din webbläsare, vilket säkerställer att dina dokument aldrig lämnar din enhet.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja det dokument du vill komprimera."
      },
      {
        "step": 2,
        "title": "Välj Kompressionsnivå",
        "description": "Välj önskad komprimeringsnivå: Låg (bästa kvalitet), Medium (balanserad) eller Hög (minst storlek)."
      },
      {
        "step": 3,
        "title": "Komprimera och ladda ner",
        "description": "Klicka på Komprimera för att minska filstorleken och ladda sedan ner din optimerade PDF."
      }
    ],
    "useCases": [
      {
        "title": "E-postbilagor",
        "description": "Minska PDF-storleken för att möta gränserna för e-postbilagor och säkerställa snabbare leverans.",
        "icon": "mail"
      },
      {
        "title": "Webbpublicering",
        "description": "Optimera PDF-filer för webbnedladdning för att förbättra sidladdningstider och användarupplevelse.",
        "icon": "globe"
      },
      {
        "title": "Lagringsoptimering",
        "description": "Komprimera arkiverade dokument för att spara diskutrymme samtidigt som tillgängligheten bibehålls.",
        "icon": "hard-drive"
      }
    ],
    "faq": [
      {
        "question": "Hur mycket kan jag minska filstorleken?",
        "answer": "Komprimeringsresultaten varierar beroende på PDF-innehållet. Bildtunga PDF-filer kan ofta reduceras med 50-80 %, medan PDF-filer endast med text kan se mindre minskningar."
      },
      {
        "question": "Kommer komprimering att påverka textkvaliteten?",
        "answer": "Texten förblir skarp och läsbar på alla komprimeringsnivåer. Endast bilder och grafik påverkas av komprimering."
      },
      {
        "question": "Kan jag komprimera flera PDF-filer samtidigt?",
        "answer": "Ja, du kan ladda upp och komprimera upp till 10 PDF-filer samtidigt."
      }
    ]
  },
  "edit-pdf": {
    "title": "Redigera PDF",
    "metaDescription": "Redigera PDF-text och bilder direkt online. Klicka på stycken för att redigera på plats med live-omflöde, ersätta bilder och hitta och ersätta över dokument.",
    "keywords": [
      "redigera pdf",
      "pdf-redigerare",
      "redigera pdf-text",
      "direkt redigering av pdf",
      "pdf-redigerare på plats",
      "ändra pdf-text"
    ],
    "description": "<p>Edit PDF tillhandahåller högfientlig text- och bildredigering på plats som drivs av WebAssembly PDFium-motorn. Klicka direkt in i befintliga stycken för att redigera text precis som en ordbehandlare, med automatisk radomslutning och omflöde.</p>\n      <p>Finjustera din layout med hjälp av egenskapsinspektörsdockan (teckenstorlek, färg, linjehöjd, justering), ersätt eller vänd bilder eller gruppsök och ersätt text över hela dokumentet. Byt till klassiskt anteckningsläge när som helst om du behöver frihandsteckning, stämplar eller formulärsignaturer.</p>\n      <p>Alla redigeringar körs strikt på klientsidan i din webbläsare, vilket garanterar 100 % integritet och säkerhet för dina filer.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja det dokument du vill redigera."
      },
      {
        "step": 2,
        "title": "Klicka för att redigera text direkt",
        "description": "Klicka eller dubbelklicka på valfritt stycke eller rubrik för att börja redigera med live-omflöde."
      },
      {
        "step": 3,
        "title": "Formatera och ändra bilder",
        "description": "Justera typografin via inspektörsdockan eller högerklicka på bilder för att ersätta eller vända dem."
      },
      {
        "step": 4,
        "title": "Spara och ladda ner",
        "description": "Klicka på Spara ändringar i det övre högra verktygsfältet för att exportera den uppdaterade PDF-filen."
      }
    ],
    "useCases": [
      {
        "title": "Åtgärda typografiska fel",
        "description": "Korrigera stavfel, namn, datum eller priser direkt på originaldokumentet utan att öppna källfiler.",
        "icon": "edit-3"
      },
      {
        "title": "Globalt hitta och ersätt",
        "description": "Sök nyckelord på alla sidor och ersätt dem sömlöst på plats.",
        "icon": "search"
      },
      {
        "title": "Uppdatera grafik och logotyper",
        "description": "Byt ut föråldrade logotyper, diagram eller signaturer med nyligen uppladdade bilder.",
        "icon": "image"
      }
    ],
    "faq": [
      {
        "question": "Kan jag redigera befintlig text direkt i PDF-filen?",
        "answer": "Ja! Redaktören har direkt innehållsredigering. Klicka bara på ett befintligt textblock eller stycke för att skriva, ta bort och formatera om med live-omflöde."
      },
      {
        "question": "Kan jag fortfarande lägga till kommentarer, stämplar och signaturer?",
        "answer": "Ja! Använd lägesomkopplaren i rubriken när som helst för att växla till klassiskt anteckningsläge för stämplar, frihandsteckningar och formulär."
      },
      {
        "question": "Hålls mina filer privata och säkra?",
        "answer": "Absolut. All PDF-avkodning, textklustring, omlindning och strömskarvning körs helt i din lokala webbläsare via WebAssembly."
      }
    ]
  },
  "jpg-to-pdf": {
    "title": "JPG till PDF",
    "metaDescription": "Konvertera JPG-bilder till PDF. Kombinera flera JPG-filer till ett enda PDF-dokument.",
    "keywords": [
      "jpg till pdf",
      "jpeg till pdf",
      "konvertera jpg",
      "bild till pdf",
      "foto till pdf"
    ],
    "description": "<p>JPG till PDF konverterar dina JPEG-bilder till PDF-dokument snabbt och enkelt. Oavsett om du har ett enda foto eller flera bilder skapar det här verktyget professionella PDF-filer.</p>\n      <p>Du kan kombinera flera JPG-filer till en enda PDF, ordna dem i valfri ordning och anpassa sidstorlek och orientering. Konverteringen bevarar bildkvaliteten samtidigt som du skapar kompakta, delbara PDF-filer.</p>\n      <p>All konvertering sker i din webbläsare, vilket säkerställer att dina foton förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp JPG-bilder",
        "description": "Dra och släpp dina JPG-filer eller klicka för att välja bilder från din enhet."
      },
      {
        "step": 2,
        "title": "Ordna och konfigurera",
        "description": "Ändra ordning på bilder genom att dra och välj alternativ för sidstorlek och orientering."
      },
      {
        "step": 3,
        "title": "Konvertera och ladda ner",
        "description": "Klicka på Konvertera för att skapa din PDF och ladda ner resultatet."
      }
    ],
    "useCases": [
      {
        "title": "Fotoalbum",
        "description": "Skapa PDF-fotoalbum från semesterbilder eller evenemangsfoton för enkel delning.",
        "icon": "image"
      },
      {
        "title": "Dokumentskanning",
        "description": "Konvertera telefonkamerafoton av dokument till korrekta PDF-filer.",
        "icon": "camera"
      },
      {
        "title": "Skapande av portfölj",
        "description": "Sammanställ fotoarbete eller designprover till en professionell PDF-portfölj.",
        "icon": "folder"
      }
    ],
    "faq": [
      {
        "question": "Hur många bilder kan jag konvertera?",
        "answer": "Du kan konvertera upp till 100 JPG-bilder till ett enda PDF-dokument."
      },
      {
        "question": "Kommer bildkvaliteten att bibehållas?",
        "answer": "Ja, bilder är inbäddade i originalkvalitet. Du kan valfritt komprimera dem för att minska filstorleken."
      },
      {
        "question": "Kan jag ställa in olika sidstorlekar för olika bilder?",
        "answer": "Verktyget tillämpar en enhetlig sidstorlek på alla sidor. Varje bild skalas för att passa den valda sidstorleken med bibehållen bildförhållande."
      }
    ]
  },
  "sign-pdf": {
    "title": "Fyll i och signera",
    "metaDescription": "Lägg till elektroniska signaturer till PDF-dokument. Rita, skriv eller ladda upp din signatur.",
    "keywords": [
      "tecken pdf",
      "elektronisk signatur",
      "e-signatur",
      "pdf-signatur",
      "digital signatur"
    ],
    "description": "<p>Sign PDF låter dig lägga till elektroniska signaturer till dina PDF-dokument snabbt och säkert. Skapa din signatur genom att rita, skriva eller ladda upp en bild och placera den sedan var som helst i dokumentet.</p>\n      <p>Du kan lägga till flera signaturer till ett enda dokument, ändra storlek på och placera dem exakt och spara din signatur för framtida bruk. Verktyget är perfekt för kontrakt, avtal, formulär och alla dokument som kräver din underskrift.</p>\n      <p>All signering sker lokalt i din webbläsare, vilket säkerställer att dina dokument och signatur förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja det dokument du behöver signera."
      },
      {
        "step": 2,
        "title": "Skapa din signatur",
        "description": "Rita din signatur med musen eller tryck, skriv ditt namn för att skapa en signatur eller ladda upp en signaturbild. Du kan också skanna ett foto av en signatur skriven på papper."
      },
      {
        "step": 3,
        "title": "Placera och justera",
        "description": "Klicka på dokumentet för att placera din signatur, dra sedan för att placera och ändra storlek efter behov."
      },
      {
        "step": 4,
        "title": "Spara och ladda ner",
        "description": "Klicka på Spara för att tillämpa din signatur och ladda ner den signerade PDF-filen."
      }
    ],
    "useCases": [
      {
        "title": "Kontraktsundertecknande",
        "description": "Skriv kontrakt och avtal elektroniskt utan utskrift och scanning.",
        "icon": "file-signature"
      },
      {
        "title": "Ifyllande av formulär",
        "description": "Lägg till din signatur på ansökningsformulär, samtyckesformulär och officiella dokument.",
        "icon": "clipboard"
      },
      {
        "title": "Arbetsflöden för godkännande",
        "description": "Logga av på dokument som en del av gransknings- och godkännandeprocesser.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "Är en elektronisk signatur juridiskt bindande?",
        "answer": "Elektroniska signaturer är juridiskt erkända i de flesta länder. Vissa dokument kan dock kräva specifika typer av digitala signaturer. Kontrollera dina lokala bestämmelser."
      },
      {
        "question": "Kan jag spara min signatur för framtida bruk?",
        "answer": "Ja, du kan spara din signatur i din webbläsares lokala lagring för snabb åtkomst när du signerar framtida dokument."
      },
      {
        "question": "Kan jag lägga till flera signaturer i ett dokument?",
        "answer": "Ja, du kan lägga till så många signaturer som behövs och placera var och en oberoende på vilken sida som helst."
      }
    ]
  },
  "crop-pdf": {
    "title": "Beskär PDF",
    "metaDescription": "Beskär PDF-sidor för att ta bort marginaler och oönskade områden. Trimma PDF-dokument exakt.",
    "keywords": [
      "beskära pdf",
      "trimma pdf",
      "skär pdf-marginaler",
      "ändra storlek på pdf-sidor",
      "pdf cropper"
    ],
    "description": "<p>Crop PDF låter dig trimma marginaler och ta bort oönskade områden från dina PDF-sidor. Detta är användbart för att ta bort överflödigt blanksteg, fokusera på specifika innehållsområden eller standardisera siddimensioner.</p>\n      <p>Du kan beskära alla sidor enhetligt eller justera varje sida individuellt. Det visuella gränssnittet visar exakt vad som kommer att behållas, vilket gör det enkelt att uppnå exakta resultat.</p>\n      <p>All beskärning sker lokalt i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja det dokument du vill beskära."
      },
      {
        "step": 2,
        "title": "Definiera gröda",
        "description": "Dra beskärningshandtagen för att definiera området du vill behålla, eller ange exakta mått."
      },
      {
        "step": 3,
        "title": "Ansök till sidor",
        "description": "Välj att tillämpa beskärningen på alla sidor eller välj specifika sidor att beskära."
      },
      {
        "step": 4,
        "title": "Beskär och ladda ner",
        "description": "Klicka på Beskär för att tillämpa ändringarna och ladda ner din beskurna PDF."
      }
    ],
    "useCases": [
      {
        "title": "Ta bort marginaler",
        "description": "Trimma för stora marginaler från skannade dokument eller PDF-filer med stora kanter.",
        "icon": "maximize-2"
      },
      {
        "title": "Fokusera innehåll",
        "description": "Beskär för att markera specifika innehållsområden, ta bort sidhuvuden, sidfötter eller sidofält.",
        "icon": "target"
      },
      {
        "title": "Standardisera sidor",
        "description": "Gör alla sidor i samma storlek genom att beskära till enhetliga mått.",
        "icon": "square"
      }
    ],
    "faq": [
      {
        "question": "Tar beskärning bort innehåll permanent?",
        "answer": "Ja, beskärning tar bort innehållet utanför beskärningsområdet. Se till att ha en säkerhetskopia av din ursprungliga fil."
      },
      {
        "question": "Kan jag beskära olika sidor på olika sätt?",
        "answer": "Ja, du kan använda olika beskärningsinställningar på enskilda sidor eller grupper av sidor."
      },
      {
        "question": "Kommer beskärning att påverka textkvaliteten?",
        "answer": "Nej, beskärning tar bara bort områden utanför grödans gräns. Det återstående innehållet behåller sin ursprungliga kvalitet."
      }
    ]
  },
  "extract-pages": {
    "title": "Extrahera sidor",
    "metaDescription": "Extrahera specifika sidor från PDF-filer. Välj och spara enskilda sidor som nya dokument.",
    "keywords": [
      "extrahera pdf-sidor",
      "spara pdf-sidor",
      "kopiera pdf-sidor",
      "Utdragare av pdf-sidor"
    ],
    "description": "<p>Extract Pages låter dig välja och spara specifika sidor från ett PDF-dokument som nya filer. Detta är perfekt för att ta ut relevanta avsnitt, skapa utdrag eller separera kombinerade dokument.</p>\n      <p>Du kan extrahera enskilda sidor, sidintervall eller flera icke på varandra följande sidor. Den visuella förhandsgranskningen av sidan gör det enkelt att identifiera och välja exakt de sidor du behöver.</p>\n      <p>All extrahering sker lokalt i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja det dokument som du vill extrahera sidor från."
      },
      {
        "step": 2,
        "title": "Välj Sidor",
        "description": "Klicka på sidminiatyrer för att välja dem, eller ange sidnummer och intervall i inmatningsfältet."
      },
      {
        "step": 3,
        "title": "Extrahera och ladda ner",
        "description": "Klicka på Extrahera för att skapa en ny PDF med dina valda sidor och ladda ner den."
      }
    ],
    "useCases": [
      {
        "title": "Skapa utdrag",
        "description": "Extrahera relevanta sidor från rapporter eller böcker för att skapa fokuserade referensdokument.",
        "icon": "file-minus"
      },
      {
        "title": "Dela specifikt innehåll",
        "description": "Dra ut specifika sidor att dela utan att skicka hela dokumentet.",
        "icon": "share-2"
      },
      {
        "title": "Arkivera viktiga sidor",
        "description": "Extrahera och spara nyckelsidor från dokument för långtidsarkivering.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Kan jag extrahera icke-konsekutiva sidor?",
        "answer": "Ja, du kan välja vilken kombination av sidor som helst, oavsett om de är på varandra följande eller spridda över hela dokumentet."
      },
      {
        "question": "Kommer bokmärken att bevaras?",
        "answer": "Bokmärken som pekar på extraherade sidor bevaras i det nya dokumentet."
      },
      {
        "question": "Kan jag extrahera sidor från flera PDF-filer?",
        "answer": "Det här verktyget fungerar med en PDF i taget. Använd verktyget Sammanfoga PDF för att kombinera sidor från flera PDF-filer."
      }
    ]
  },
  "organize-pdf": {
    "title": "Ordna sidor",
    "metaDescription": "Ordna om, duplicera och ta bort PDF-sidor. Dra och släpp för att omorganisera dina dokument.",
    "keywords": [
      "organisera pdf",
      "ordna om pdf-sidor",
      "ordna om pdf",
      "Organisator för pdf-sidor"
    ],
    "description": "<p>Organize PDF ger ett intuitivt dra-och-släpp-gränssnitt för att ordna om sidor i dina PDF-dokument. Ordna om sidor, duplicera viktiga avsnitt eller ta bort oönskade sidor med lätthet.</p>\n      <p>De visuella sidminiatyrerna gör det enkelt att identifiera innehåll och ordna sidor precis som du behöver dem. Perfekt för att strukturera om dokument, skapa anpassade sidbeställningar eller rensa skannade filer.</p>\n      <p>All organisation sker lokalt i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja det dokument du vill organisera."
      },
      {
        "step": 2,
        "title": "Ordna om sidorna",
        "description": "Dra sidminiatyrer för att ordna om dem. Klicka på duplicera- eller ta bort-knapparna på varje sida efter behov."
      },
      {
        "step": 3,
        "title": "Spara och ladda ner",
        "description": "Klicka på Spara för att tillämpa dina ändringar och ladda ner den omorganiserade PDF-filen."
      }
    ],
    "useCases": [
      {
        "title": "Fixa sidordning",
        "description": "Korrigera ordningen på sidor som har skannats eller kombinerats felaktigt.",
        "icon": "arrow-up-down"
      },
      {
        "title": "Skapa anpassad beställning",
        "description": "Ordna sidor i en specifik sekvens för presentationer eller rapporter.",
        "icon": "list"
      },
      {
        "title": "Ta bort oönskade sidor",
        "description": "Ta bort tomma sidor, dubbletter eller irrelevant innehåll från dokument.",
        "icon": "trash-2"
      }
    ],
    "faq": [
      {
        "question": "Kan jag duplicera sidor?",
        "answer": "Ja, du kan duplicera vilken sida som helst och placera kopian var som helst i dokumentet."
      },
      {
        "question": "Finns det en ångra-funktion?",
        "answer": "Ja, du kan ångra och göra om ändringar. Du kan också återställa till den ursprungliga beställningen när som helst."
      },
      {
        "question": "Kan jag organisera flera PDF-filer tillsammans?",
        "answer": "Det här verktyget fungerar med en PDF i taget. För att kombinera och organisera flera PDF-filer, slå först samman dem med hjälp av verktyget Sammanfoga PDF."
      }
    ]
  },
  "delete-pages": {
    "title": "Ta bort sidor",
    "metaDescription": "Ta bort oönskade sidor från PDF-filer. Välj och ta bort specifika sidor enkelt.",
    "keywords": [
      "ta bort pdf-sidor",
      "ta bort pdf-sidor",
      "Borttagning av pdf-sidor",
      "ta bort sidor från pdf"
    ],
    "description": "<p>Delete Pages låter dig ta bort oönskade sidor från dina PDF-dokument snabbt och enkelt. Oavsett om du behöver ta bort tomma sidor, inaktuellt innehåll eller känslig information, gör det här verktyget det enkelt.</p>\n      <p>Visuella sidminiatyrer hjälper dig att identifiera exakt vilka sidor du ska ta bort. Du kan ta bort enskilda sidor eller flera sidor samtidigt.</p>\n      <p>All bearbetning sker lokalt i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja det dokument som du vill ta bort sidor från."
      },
      {
        "step": 2,
        "title": "Välj Sidor att ta bort",
        "description": "Klicka på sidminiatyrer för att markera dem för radering, eller ange sidnummer i inmatningsfältet."
      },
      {
        "step": 3,
        "title": "Ta bort och ladda ner",
        "description": "Klicka på Ta bort för att ta bort de markerade sidorna och ladda ner din uppdaterade PDF."
      }
    ],
    "useCases": [
      {
        "title": "Ta bort tomma sidor",
        "description": "Rensa upp dokument genom att ta bort oavsiktligt inkluderade tomma sidor.",
        "icon": "file-x"
      },
      {
        "title": "Ta bort känsligt innehåll",
        "description": "Ta bort sidor som innehåller konfidentiell information innan du delar dokument.",
        "icon": "shield"
      },
      {
        "title": "Effektivisera dokument",
        "description": "Ta bort inaktuella eller irrelevanta sidor för att skapa mer fokuserade dokument.",
        "icon": "filter"
      }
    ],
    "faq": [
      {
        "question": "Kan jag återställa raderade sidor?",
        "answer": "Borttagningen är permanent i utdatafilen. Spara en säkerhetskopia av ditt originaldokument om du kan behöva sidorna senare."
      },
      {
        "question": "Kan jag ta bort flera sidor samtidigt?",
        "answer": "Ja, du kan välja och ta bort flera sidor samtidigt."
      },
      {
        "question": "Kommer radering av sidor att påverka bokmärken?",
        "answer": "Bokmärken som pekar på raderade sidor kommer att tas bort. Bokmärken till återstående sidor bevaras."
      }
    ]
  },
  "bookmark": {
    "title": "Redigera bokmärken",
    "metaDescription": "Lägg till, redigera och hantera PDF-bokmärken. Skapa navigeringsstruktur för dina dokument.",
    "keywords": [
      "pdf-bokmärken",
      "redigera bokmärken",
      "lägga till bokmärken",
      "pdf-navigering",
      "innehållsförteckning"
    ],
    "description": "<p>Edit Bookmarks låter dig skapa, ändra och organisera bokmärken i dina PDF-dokument. Bokmärken ger snabb navigering till specifika avsnitt, vilket gör långa dokument lättare att använda.</p>\n      <p>Du kan lägga till nya bokmärken, redigera befintliga, omorganisera bokmärkeshierarkin eller importera bokmärken från externa källor. Det här verktyget är viktigt för att skapa professionella, navigerbara dokument.</p>\n      <p>All redigering sker lokalt i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja det dokument du vill redigera."
      },
      {
        "step": 2,
        "title": "Hantera bokmärken",
        "description": "Lägg till nya bokmärken, redigera befintliga eller dra för att omorganisera hierarkin."
      },
      {
        "step": 3,
        "title": "Spara och ladda ner",
        "description": "Klicka på Spara för att tillämpa dina ändringar och ladda ner PDF-filen med uppdaterade bokmärken."
      }
    ],
    "useCases": [
      {
        "title": "Skapa navigering",
        "description": "Lägg till bokmärken i långa dokument för att hjälpa läsarna att snabbt navigera till specifika avsnitt.",
        "icon": "navigation"
      },
      {
        "title": "Ordna kapitel",
        "description": "Skapa en hierarkisk bokmärkesstruktur som speglar ditt dokuments kapitelorganisation.",
        "icon": "book-open"
      },
      {
        "title": "Förbättra tillgängligheten",
        "description": "Lägg till bokmärken för att göra dokument mer tillgängliga och användarvänliga.",
        "icon": "accessibility"
      }
    ],
    "faq": [
      {
        "question": "Kan jag skapa kapslade bokmärken?",
        "answer": "Ja, du kan skapa en hierarkisk struktur med överordnade och underordnade bokmärken."
      },
      {
        "question": "Kan jag importera bokmärken från en fil?",
        "answer": "Ja, du kan importera bokmärkesstrukturer från JSON eller textfiler."
      },
      {
        "question": "Fungerar bokmärken i alla PDF-läsare?",
        "answer": "Ja, bokmärken är en standardfunktion för PDF som stöds av alla större PDF-läsare."
      }
    ]
  },
  "table-of-contents": {
    "title": "Innehållsförteckning",
    "metaDescription": "Skapa en innehållsförteckning för din PDF. Skapa klickbar navigering från bokmärken.",
    "keywords": [
      "Pdf innehållsförteckning",
      "toc-generator",
      "pdf index",
      "dokumentnavigering"
    ],
    "description": "<p>Innehållsförteckning genererar en navigerbar innehållsförteckningssida för dina PDF-dokument. Innehållsförteckningen kan skapas från befintliga bokmärken eller anpassade poster, vilket ger läsarna en översikt och snabb navigering.</p>\n      <p>Anpassa utseendet med olika stilar, typsnitt och layouter. Den genererade innehållsförteckningen innehåller klickbara länkar som hoppar direkt till de refererade sidorna.</p>\n      <p>All bearbetning sker lokalt i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja dokumentet."
      },
      {
        "step": 2,
        "title": "Konfigurera innehållsförteckning",
        "description": "Välj att skapa från bokmärken eller skapa anpassade poster. Välj stil och positioneringsalternativ."
      },
      {
        "step": 3,
        "title": "Generera och ladda ner",
        "description": "Klicka på Generera för att skapa innehållsförteckningen och ladda ner din uppdaterade PDF."
      }
    ],
    "useCases": [
      {
        "title": "Akademiska uppsatser",
        "description": "Lägg till en professionell innehållsförteckning till avhandlingar, avhandlingar och forskningsartiklar.",
        "icon": "graduation-cap"
      },
      {
        "title": "Affärsrapporter",
        "description": "Skapa navigerbara rapporter med tydliga sektionslistor för intressenter.",
        "icon": "bar-chart"
      },
      {
        "title": "Användarmanualer",
        "description": "Generera omfattande innehållsförteckningar för teknisk dokumentation och användarguider.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "Kan jag anpassa innehållsförteckningens utseende?",
        "answer": "Ja, du kan välja mellan olika stilar, typsnitt och layouter för din innehållsförteckning."
      },
      {
        "question": "Var är innehållsförteckningen infogat?",
        "answer": "Som standard infogas innehållsförteckningen i början av dokumentet, men du kan välja en annan plats."
      },
      {
        "question": "Är TOC-posterna klickbara?",
        "answer": "Ja, varje post är en klickbar länk som navigerar till motsvarande sida."
      }
    ]
  },
  "page-numbers": {
    "title": "Sidnummer",
    "metaDescription": "Lägg till sidnummer i PDF-dokument. Anpassa position, format och startnummer.",
    "keywords": [
      "lägga till sidnummer",
      "pdf sidnummer",
      "antal pdf-sidor",
      "pdf paginering"
    ],
    "description": "<p>Page Numbers lägger till anpassningsbar sidnumrering till dina PDF-dokument. Välj mellan olika format, positioner och stilar för att matcha ditt dokuments design.</p>\n      <p>Du kan ställa in startnumret, hoppa över vissa sidor och använda olika numreringsformat (1, 2, 3 eller i, ii, iii). Perfekt för att skapa professionella dokument med korrekt paginering.</p>\n      <p>All bearbetning sker lokalt i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja dokumentet."
      },
      {
        "step": 2,
        "title": "Konfigurera numrering",
        "description": "Välj position, format, startnummer och vilka sidor som ska numreras."
      },
      {
        "step": 3,
        "title": "Ansök och ladda ner",
        "description": "Klicka på Använd för att lägga till sidnummer och ladda ner din uppdaterade PDF."
      }
    ],
    "useCases": [
      {
        "title": "Professionella dokument",
        "description": "Lägg till sidnummer i rapporter, förslag och affärsdokument.",
        "icon": "file-text"
      },
      {
        "title": "Akademiska uppsatser",
        "description": "Antal sidor enligt akademiska formateringskrav.",
        "icon": "graduation-cap"
      },
      {
        "title": "Juridiska dokument",
        "description": "Lägg till korrekt sidnumrering i kontrakt och juridiska ansökningar.",
        "icon": "scale"
      }
    ],
    "faq": [
      {
        "question": "Kan jag hoppa över första sidan?",
        "answer": "Ja, du kan ange vilka sidor som ska numreras och vilka som ska hoppa över, till exempel titelsidor eller försättsblad."
      },
      {
        "question": "Vilka talformat finns tillgängliga?",
        "answer": "Du kan använda arabiska siffror (1, 2, 3), romerska siffror (i, ii, iii eller I, II, III) eller bokstäver (a, b, c)."
      },
      {
        "question": "Kan jag lägga till \"Page X of Y\"-format?",
        "answer": "Ja, du kan inkludera det totala antalet sidor i ditt numreringsformat."
      }
    ]
  },
  "add-watermark": {
    "title": "Lägg till vattenstämpel",
    "metaDescription": "Lägg till text- eller bildvattenstämplar i PDF-filer. Skydda och märk dina dokument.",
    "keywords": [
      "lägg till vattenstämpel",
      "pdf vattenstämpel",
      "stämpel pdf",
      "varumärke pdf",
      "skydda pdf"
    ],
    "description": "<p>Add Watermark låter dig placera text- eller bildvattenstämplar på dina PDF-dokument. Vattenstämplar kan indikera dokumentstatus (utkast, konfidentiellt), lägga till varumärke eller förhindra obehörig kopiering.</p>\n      <p>Anpassa vattenstämpelns position, storlek, opacitet, rotation och färg. Använd på alla sidor eller välj specifika sidor. Verktyget stöder både textvattenstämplar och bildvattenstämplar.</p>\n      <p>All bearbetning sker lokalt i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja dokumentet."
      },
      {
        "step": 2,
        "title": "Skapa vattenstämpel",
        "description": "Skriv in text eller ladda upp en bild för din vattenstämpel. Justera position, storlek, opacitet och rotation."
      },
      {
        "step": 3,
        "title": "Ansök och ladda ner",
        "description": "Klicka på Använd för att lägga till vattenstämpeln och ladda ner din uppdaterade PDF."
      }
    ],
    "useCases": [
      {
        "title": "Dokumentskydd",
        "description": "Lägg till \"Konfidentiell\" eller \"Utkast\" vattenstämplar för att indikera dokumentstatus.",
        "icon": "shield"
      },
      {
        "title": "Varumärkesdokument",
        "description": "Lägg till företagslogotyper eller namn i officiella dokument.",
        "icon": "award"
      },
      {
        "title": "Upphovsrättsmeddelande",
        "description": "Lägg till upphovsrättsinformation för att skydda immateriella rättigheter.",
        "icon": "copyright"
      }
    ],
    "faq": [
      {
        "question": "Kan jag använda en bild som vattenstämpel?",
        "answer": "Ja, du kan ladda upp PNG-, JPG- eller SVG-bilder för att använda som vattenstämplar."
      },
      {
        "question": "Kan jag göra vattenstämpeln halvtransparent?",
        "answer": "Ja, du kan justera opaciteten från helt transparent till helt ogenomskinlig."
      },
      {
        "question": "Kan jag använda olika vattenstämplar på olika sidor?",
        "answer": "Verktyget tillämpar samma vattenstämpel på valda sidor. För olika vattenstämplar, bearbeta dokumentet flera gånger."
      }
    ]
  },
  "header-footer": {
    "title": "Sidhuvud och sidfot",
    "metaDescription": "Lägg till sidhuvuden och sidfötter i PDF-dokument. Inkludera sidnummer, datum och anpassad text.",
    "keywords": [
      "pdf-huvud",
      "pdf sidfot",
      "lägg till sidhuvud",
      "pdf brevpapper"
    ],
    "description": "<p>Header & Footer lägger till anpassningsbara sidhuvuden och sidfötter till dina PDF-dokument. Inkludera sidnummer, datum, dokumenttitlar eller annan anpassad text i sidhuvudet eller sidfotsområdena.</p>\n      <p>Placera innehåll till vänster, mitten eller höger om sidhuvudet/sidfoten. Använd olika innehåll för udda och jämna sidor om det behövs. Perfekt för att skapa professionella dokument med konsekvent formatering.</p>\n      <p>All bearbetning sker lokalt i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja dokumentet."
      },
      {
        "step": 2,
        "title": "Konfigurera sidhuvud/sidfot",
        "description": "Ange text för sidhuvuds- och sidfotsområdena. Lägg till sidnummer, datum eller anpassad text."
      },
      {
        "step": 3,
        "title": "Ansök och ladda ner",
        "description": "Klicka på Använd för att lägga till sidhuvuden/sidfötter och ladda ner din uppdaterade PDF."
      }
    ],
    "useCases": [
      {
        "title": "Affärsdokument",
        "description": "Lägg till företagsnamn och sidnummer i professionella dokument.",
        "icon": "briefcase"
      },
      {
        "title": "Juridiska dokument",
        "description": "Inkludera ärendenummer, datum och sidhänvisningar i juridiska ansökningar.",
        "icon": "scale"
      },
      {
        "title": "Akademiska uppsatser",
        "description": "Lägg till löpande rubriker med papperstitel och författarens namn.",
        "icon": "graduation-cap"
      }
    ],
    "faq": [
      {
        "question": "Kan jag ha olika rubriker på udda och jämna sidor?",
        "answer": "Ja, du kan konfigurera olika innehåll för udda och jämna sidor."
      },
      {
        "question": "Kan jag inkludera det aktuella datumet?",
        "answer": "Ja, du kan infoga dynamiska datumfält som visar aktuellt datum."
      },
      {
        "question": "Kan jag hoppa över sidhuvudet/sidfoten på vissa sidor?",
        "answer": "Ja, du kan ange vilka sidor som ska ha sidhuvuden/sidfötter och vilka som ska hoppas över."
      }
    ]
  },
  "invert-colors": {
    "title": "Invertera färger",
    "metaDescription": "Invertera PDF-färger för läsning i mörkt läge. Konvertera dokument till negativa färger.",
    "keywords": [
      "invertera pdf-färger",
      "pdf mörkt läge",
      "negativ pdf",
      "omvända färger"
    ],
    "description": "<p>Invertera färger vänder färgerna i dina PDF-dokument, vilket skapar en negativ bildeffekt. Detta är särskilt användbart för att skapa mörka versioner av dokument för enklare läsning i svagt ljus.</p>\n      <p>Verktyget kan invertera alla färger eller selektivt bevara vissa element som bilder. Perfekt för att minska belastningen på ögonen när du läser dokument på natten.</p>\n      <p>All bearbetning sker lokalt i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja dokumentet."
      },
      {
        "step": 2,
        "title": "Konfigurera alternativ",
        "description": "Välj om du vill invertera allt innehåll eller bevara bilder."
      },
      {
        "step": 3,
        "title": "Invertera och ladda ner",
        "description": "Klicka på Invertera för att bearbeta dokumentet och ladda ner resultatet."
      }
    ],
    "useCases": [
      {
        "title": "Nattläsning",
        "description": "Skapa mörka versioner av dokument för bekväm läsning på natten.",
        "icon": "moon"
      },
      {
        "title": "Minska ögonbelastningen",
        "description": "Invertera ljusa dokument för att minska ögontröttheten under långvarig läsning.",
        "icon": "eye"
      },
      {
        "title": "Skriv ut besparingar",
        "description": "Invertera dokument för att minska bläckanvändningen vid utskrift av utkast.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Kommer bilder också att inverteras?",
        "answer": "Som standard, ja. Du kan välja att bevara originalbilderna samtidigt som du inverterar text och bakgrunder."
      },
      {
        "question": "Kan jag invertera endast specifika sidor?",
        "answer": "Ja, du kan välja vilka sidor som ska inverteras."
      },
      {
        "question": "Är inversionen reversibel?",
        "answer": "Du kan invertera dokumentet igen för att återgå till ungefär de ursprungliga färgerna."
      }
    ]
  },
  "background-color": {
    "title": "Bakgrundsfärg",
    "metaDescription": "Ändra PDF-bakgrundsfärg. Lägg till färgade bakgrunder till dokumentsidor.",
    "keywords": [
      "pdf bakgrundsfärg",
      "ändra pdf-bakgrund",
      "färgad pdf",
      "Färg på pdf-sidan"
    ],
    "description": "<p>Bakgrundsfärg låter dig ändra eller lägga till bakgrundsfärger på dina PDF-sidor. Detta kan förbättra läsbarheten, lägga till visuellt intresse eller matcha dina varumärkeskrav.</p>\n      <p>Välj valfri färg för bakgrunden och använd den på alla sidor eller valda sidor. Verktyget bevarar allt befintligt innehåll samtidigt som bakgrundslagret läggs till.</p>\n      <p>All bearbetning sker lokalt i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja dokumentet."
      },
      {
        "step": 2,
        "title": "Välj Färg",
        "description": "Välj en bakgrundsfärg med hjälp av färgväljaren eller ange en hexadecimal kod."
      },
      {
        "step": 3,
        "title": "Ansök och ladda ner",
        "description": "Klicka på Använd för att lägga till bakgrunden och ladda ner din uppdaterade PDF."
      }
    ],
    "useCases": [
      {
        "title": "Förbättra läsbarheten",
        "description": "Lägg till en ljus kräm- eller sepiabakgrund för att minska påfrestningen på ögonen.",
        "icon": "eye"
      },
      {
        "title": "Varumärkesdokument",
        "description": "Använd varumärkesfärger som bakgrund för marknadsföringsmaterial.",
        "icon": "palette"
      },
      {
        "title": "Markera avsnitt",
        "description": "Använd olika bakgrundsfärger för att skilja dokumentsektioner åt.",
        "icon": "layers"
      }
    ],
    "faq": [
      {
        "question": "Kommer bakgrunden att täcka befintligt innehåll?",
        "answer": "Nej, bakgrunden läggs till bakom befintligt innehåll, vilket bevarar all text och bilder."
      },
      {
        "question": "Kan jag använda olika färger för olika sidor?",
        "answer": "Du skulle behöva bearbeta dokumentet flera gånger för olika färger på olika sidor."
      },
      {
        "question": "Kan jag ta bort en befintlig bakgrund?",
        "answer": "Det här verktyget lägger till bakgrunder. För att ta bort bakgrunder kan du behöva använda verktyget Redigera PDF."
      }
    ]
  },
  "text-color": {
    "title": "Ändra textfärg",
    "metaDescription": "Ändra textfärg i PDF-dokument. Ändra färgen på allt textinnehåll.",
    "keywords": [
      "ändra pdf-textfärg",
      "pdf text färg",
      "ändra textfärg",
      "färga om pdf-text"
    ],
    "description": "<p>Ändra textfärg låter dig ändra färgen på text i dina PDF-dokument. Detta är användbart för att förbättra kontrasten, matcha varumärken eller skapa visuella varianter av dokument.</p>\n      <p>Välj en ny färg och använd den på all text i dokumentet. Verktyget bearbetar textelement samtidigt som bilder och annat innehåll bevaras.</p>\n      <p>All bearbetning sker lokalt i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja dokumentet."
      },
      {
        "step": 2,
        "title": "Välj Färg",
        "description": "Välj en ny textfärg med hjälp av färgväljaren eller ange en hexadecimal kod."
      },
      {
        "step": 3,
        "title": "Ansök och ladda ner",
        "description": "Klicka på Använd för att ändra textfärgen och ladda ner din uppdaterade PDF."
      }
    ],
    "useCases": [
      {
        "title": "Förbättra kontrasten",
        "description": "Ändra textfärg för att förbättra läsbarheten mot bakgrunden.",
        "icon": "contrast"
      },
      {
        "title": "Varumärkeskonsistens",
        "description": "Uppdatera textfärger så att de matchar varumärkets riktlinjer.",
        "icon": "palette"
      },
      {
        "title": "Tillgänglighet",
        "description": "Justera textfärgerna för att möta kraven på tillgänglighetskontrast.",
        "icon": "accessibility"
      }
    ],
    "faq": [
      {
        "question": "Kommer all text att ändras?",
        "answer": "Ja, verktyget ändrar färgen på alla textelement i dokumentet."
      },
      {
        "question": "Kan jag bara ändra specifik text?",
        "answer": "Detta verktyg ändrar all text. Använd verktyget Redigera PDF för selektiva ändringar."
      },
      {
        "question": "Kommer formaterad text (fet, kursiv) att bevaras?",
        "answer": "Ja, textformateringen bevaras; endast färgen ändras."
      }
    ]
  },
  "add-stamps": {
    "title": "Lägg till stämplar",
    "metaDescription": "Lägg till stämplar till PDF-dokument. Använd förinställda eller anpassade stämplar för godkännande, granskning och mer.",
    "keywords": [
      "pdf-stämplar",
      "lägg till stämpel",
      "godkännandestämpel",
      "pdf gummistämpel"
    ],
    "description": "<p>Add Stamps låter dig placera stämpelbilder på dina PDF-dokument. Använd förinställda stämplar som \"Godkänd\", \"Avvisad\", \"Utkast\" eller ladda upp anpassade stämpelbilder.</p>\n      <p>Placera stämplar var som helst på sidan, ändra storlek på dem och applicera på enstaka eller flera sidor. Perfekt för dokumentarbetsflöden, godkännanden och statusindikatorer.</p>\n      <p>All bearbetning sker lokalt i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja dokumentet."
      },
      {
        "step": 2,
        "title": "Välj Stämpel",
        "description": "Välj en förinställd stämpel eller ladda upp en anpassad stämpelbild."
      },
      {
        "step": 3,
        "title": "Positionera och ansök",
        "description": "Klicka för att placera stämpeln, justera position och storlek och ladda sedan ner."
      }
    ],
    "useCases": [
      {
        "title": "Dokumentgodkännande",
        "description": "Lägg till \"Godkänd\" eller \"Avvisad\"-stämplar till dokument i granskningsarbetsflöden.",
        "icon": "check-circle"
      },
      {
        "title": "Statusindikering",
        "description": "Markera dokument som \"Utkast\", \"Slutligt\" eller \"Konfidentiellt\".",
        "icon": "tag"
      },
      {
        "title": "Kvalitetskontroll",
        "description": "Lägg till QC-stämplar för att indikera att inspektion eller granskning är klar.",
        "icon": "clipboard-check"
      }
    ],
    "faq": [
      {
        "question": "Vilka förinställda stämplar finns tillgängliga?",
        "answer": "Förinställningar inkluderar Godkänd, Avvisad, Utkast, Slutlig, Konfidentiell, Kopiera och mer."
      },
      {
        "question": "Kan jag ladda upp anpassade stämplar?",
        "answer": "Ja, du kan ladda upp PNG- eller JPG-bilder för att använda som anpassade stämplar."
      },
      {
        "question": "Kan jag lägga till flera stämplar till ett dokument?",
        "answer": "Ja, du kan lägga till flera stämplar och placera var och en oberoende av varandra."
      }
    ]
  },
  "remove-annotations": {
    "title": "Ta bort kommentarer",
    "metaDescription": "Ta bort kommentarer från PDF-filer. Ta bort kommentarer, markeringar och markeringar.",
    "keywords": [
      "ta bort pdf-kommentarer",
      "ta bort kommentarer",
      "ta bort höjdpunkter",
      "ren pdf"
    ],
    "description": "<p>Ta bort kommentarer tar bort kommentarer, markeringar, anteckningar och andra kommentarer från dina PDF-dokument. Detta skapar en ren version av dokumentet utan uppmärkning.</p>\n      <p>Du kan ta bort alla kommentarer eller selektivt ta bort specifika typer. Perfekt för att skapa slutliga versioner av granskade dokument eller ta bort känsliga kommentarer.</p>\n      <p>All bearbetning sker lokalt i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja dokumentet."
      },
      {
        "step": 2,
        "title": "Välj Anteckningstyper",
        "description": "Välj vilka typer av kommentarer som ska tas bort: kommentarer, höjdpunkter, länkar, etc."
      },
      {
        "step": 3,
        "title": "Ta bort och ladda ner",
        "description": "Klicka på Ta bort för att ta bort anteckningar och ladda ner den rena PDF-filen."
      }
    ],
    "useCases": [
      {
        "title": "Slutföra dokument",
        "description": "Ta bort recensionskommentarer och markeringar innan du publicerar slutdokument.",
        "icon": "file-check"
      },
      {
        "title": "Integritetsskydd",
        "description": "Ta bort kommentarer som kan innehålla känslig information innan du delar.",
        "icon": "shield"
      },
      {
        "title": "Ren distribution",
        "description": "Skapa rena kopior av kommenterade dokument för distribution.",
        "icon": "copy"
      }
    ],
    "faq": [
      {
        "question": "Vilka typer av kommentarer kan tas bort?",
        "answer": "Kommentarer, markeringar, understrykningar, genomstrykning, klisterlappar, stämplar och länkar kan alla tas bort."
      },
      {
        "question": "Kan jag behålla några anteckningar?",
        "answer": "Ja, du kan välja vilka typer av kommentarer som ska tas bort och vilka som ska behållas."
      },
      {
        "question": "Är detta reversibelt?",
        "answer": "Nej, borttagning av anteckningar är permanent. Spara en säkerhetskopia av originalet om det behövs."
      }
    ]
  },
  "form-filler": {
    "title": "Fyll i formulär",
    "metaDescription": "Fyll i PDF-formulär online. Fyll i interaktiva PDF-formulär utan utskrift.",
    "keywords": [
      "fyll i pdf-formulär",
      "Fyllare i pdf-formulär",
      "komplett pdf-formulär",
      "interaktiv pdf"
    ],
    "description": "<p>Form Filler låter dig fylla i interaktiva PDF-formulär direkt i din webbläsare. Fyll i textfält, kryssrutor, välj alternativ och lägg till signaturer utan att skriva ut dokumentet.</p>\n      <p>Verktyget stöder standard PDF-formulär och XFA-formulär. Dina ifyllda data kan sparas och formuläret kan plattas till för att förhindra ytterligare redigering.</p>\n      <p>All bearbetning sker lokalt i din webbläsare, vilket säkerställer att dina formulärdata förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp ditt PDF-formulär",
        "description": "Dra och släpp ditt PDF-formulär eller klicka för att välja filen."
      },
      {
        "step": 2,
        "title": "Fyll i formuläret",
        "description": "Klicka på formulärfält för att ange text, kryssrutor eller välja alternativ."
      },
      {
        "step": 3,
        "title": "Spara och ladda ner",
        "description": "Klicka på Spara för att spara dina bidrag och ladda ner det ifyllda formuläret."
      }
    ],
    "useCases": [
      {
        "title": "Ansökningsformulär",
        "description": "Fyll i jobbansökningar, tillståndsansökningar och registreringsformulär.",
        "icon": "clipboard"
      },
      {
        "title": "Skatteformulär",
        "description": "Fyll i skattehandlingar och finansiella blanketter elektroniskt.",
        "icon": "file-text"
      },
      {
        "title": "Kontrakt",
        "description": "Fyll i avtalsformulär med dina uppgifter innan du skriver under.",
        "icon": "file-signature"
      }
    ],
    "faq": [
      {
        "question": "Kan jag spara mina framsteg?",
        "answer": "Ja, du kan spara delvis ifyllda formulär och fortsätta senare."
      },
      {
        "question": "Vad är formutjämning?",
        "answer": "Flattening konverterar formulärfält till statiskt innehåll, vilket förhindrar ytterligare redigering."
      },
      {
        "question": "Stöds XFA-formulär?",
        "answer": "Ja, verktyget stöder både vanliga AcroForms och XFA-formulär."
      }
    ]
  },
  "form-creator": {
    "title": "Förbered formulär",
    "metaDescription": "Skapa ifyllbara PDF-formulär. Lägg till textfält, kryssrutor och rullgardinsmenyer i dokument.",
    "keywords": [
      "skapa pdf-formulär",
      "Skapare av pdf-formulär",
      "fyllbar pdf",
      "lägga till formulärfält"
    ],
    "description": "<p>Form Creator omvandlar statiska PDF-dokument till interaktiva ifyllbara formulär. Lägg till textfält, kryssrutor, alternativknappar, rullgardinsmenyer och mer för att skapa professionella formulär.</p>\n      <p>Dra och släpp formulärelement till ditt dokument, konfigurera fältegenskaper och skapa formulär som kan fyllas i elektroniskt. Perfekt för att skapa applikationer, undersökningar och datainsamlingsformulär.</p>\n      <p>All bearbetning sker lokalt i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja dokumentet som ska konverteras till ett formulär."
      },
      {
        "step": 2,
        "title": "Lägg till formulärfält",
        "description": "Välj fälttyper i verktygsfältet och klicka för att placera dem i dokumentet."
      },
      {
        "step": 3,
        "title": "Konfigurera och spara",
        "description": "Ställ in fältegenskaper, spara och ladda ner ditt ifyllbara PDF-formulär."
      }
    ],
    "useCases": [
      {
        "title": "Ansökningsformulär",
        "description": "Skapa ifyllbara jobbansökningar, medlemsformulär och registreringar.",
        "icon": "user-plus"
      },
      {
        "title": "Undersökningar",
        "description": "Bygg interaktiva undersökningar och frågeformulär för datainsamling.",
        "icon": "clipboard-list"
      },
      {
        "title": "Beställningsformulär",
        "description": "Skapa produktorderformulär med kvantitetsfält och kryssrutor.",
        "icon": "shopping-cart"
      }
    ],
    "faq": [
      {
        "question": "Vilka fälttyper kan jag lägga till?",
        "answer": "Textfält, kryssrutor, alternativknappar, rullgardinsmenyer, datumväljare och signaturfält."
      },
      {
        "question": "Kan jag göra fält obligatoriska?",
        "answer": "Ja, du kan markera fält som krävs och lägga till valideringsregler."
      },
      {
        "question": "Kan jag lägga till beräkningar?",
        "answer": "Grundläggande beräkningar som summa och medelvärde kan läggas till i numeriska fält."
      }
    ]
  },
  "remove-blank-pages": {
    "title": "Ta bort tomma sidor",
    "metaDescription": "Upptäck och ta bort tomma sidor automatiskt från PDF-dokument.",
    "keywords": [
      "ta bort tomma sidor",
      "radera tomma sidor",
      "ren pdf",
      "Borttagning av tomma sidor för pdf"
    ],
    "description": "<p>Remove Blank Pages upptäcker och tar automatiskt bort tomma sidor från dina PDF-dokument. Detta är användbart för att rensa upp skannade dokument, ta bort separationssidor eller eliminera oavsiktligt inkluderade tomma sidor.</p>\n      <p>Verktyget använder intelligent detektering för att identifiera verkligt tomma sidor samtidigt som sidor med minimalt innehåll bevaras. Du kan justera känslighetströskeln för att styra vad som räknas som \"tomt\".</p>\n      <p>All bearbetning sker lokalt i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja dokumentet."
      },
      {
        "step": 2,
        "title": "Justera tröskeln",
        "description": "Ställ in tröskelvärdet för tomdetektering om det behövs (standard fungerar för de flesta dokument)."
      },
      {
        "step": 3,
        "title": "Ta bort och ladda ner",
        "description": "Klicka på Ta bort för att ta bort tomma sidor och ladda ner den rensade PDF-filen."
      }
    ],
    "useCases": [
      {
        "title": "Rengör skannade dokument",
        "description": "Ta bort tomma sidor från batch-skannade dokument.",
        "icon": "scan"
      },
      {
        "title": "Ta bort separatorer",
        "description": "Ta bort tomma separationssidor från sammanslagna dokument.",
        "icon": "minus"
      },
      {
        "title": "Minska filstorlek",
        "description": "Ta bort onödiga tomma sidor för att minska dokumentstorleken.",
        "icon": "minimize-2"
      }
    ],
    "faq": [
      {
        "question": "Hur fungerar blankdetektion?",
        "answer": "Verktyget analyserar sidinnehåll och betraktar sidor med minimalt eller inget synligt innehåll som tomma."
      },
      {
        "question": "Kan jag förhandsgranska vilka sidor som kommer att tas bort?",
        "answer": "Ja, upptäckta tomma sidor är markerade för granskning innan de tas bort."
      },
      {
        "question": "Vad händer om en sida bara har en sidhuvud/sidfot?",
        "answer": "Du kan justera tröskeln för att avgöra om sidor med minimalt innehåll ska anses vara tomma."
      }
    ]
  },
  "image-to-pdf": {
    "title": "Bild till PDF",
    "metaDescription": "Konvertera vilken bild som helst till PDF. Stöd för formaten JPG, PNG, WebP, BMP, TIFF, SVG och HEIC.",
    "keywords": [
      "bild till pdf",
      "konvertera bilden",
      "foto till pdf",
      "bild till pdf"
    ],
    "description": "<p>Bild till PDF konverterar bilder i alla format till PDF-dokument. Stöd för formaten JPG, PNG, WebP, BMP, TIFF, SVG och HEIC gör detta till den universella bildkonverteraren.</p>\n      <p>Kombinera flera bilder till en enda PDF, ordna dem i valfri ordning och anpassa sidstorlek och orientering. Perfekt för att skapa fotoalbum, dokumentarkiv eller portföljer.</p>\n      <p>All konvertering sker i din webbläsare, vilket säkerställer att dina bilder förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp bilder",
        "description": "Dra och släpp bilder av valfritt format som stöds eller klicka för att välja filer."
      },
      {
        "step": 2,
        "title": "Ordna och konfigurera",
        "description": "Ändra ordning på bilder och välj alternativ för sidstorlek och orientering."
      },
      {
        "step": 3,
        "title": "Konvertera och ladda ner",
        "description": "Klicka på Konvertera för att skapa din PDF och ladda ner resultatet."
      }
    ],
    "useCases": [
      {
        "title": "Fotosamlingar",
        "description": "Kombinera foton från olika källor till ett enda PDF-album.",
        "icon": "images"
      },
      {
        "title": "Dokument i blandat format",
        "description": "Konvertera bilder från olika format till en enhetlig PDF.",
        "icon": "file-stack"
      },
      {
        "title": "Skapande av arkiv",
        "description": "Skapa PDF-arkiv från bildsamlingar för långtidslagring.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Vilka bildformat stöds?",
        "answer": "Formaten JPG, JPEG, PNG, WebP, BMP, TIFF, TIF, SVG, HEIC och HEIF stöds."
      },
      {
        "question": "Kan jag blanda olika bildformat?",
        "answer": "Ja, du kan kombinera bilder av olika format till en enda PDF."
      },
      {
        "question": "Kommer bildkvaliteten att bevaras?",
        "answer": "Ja, bilder är inbäddade i sin ursprungliga kvalitet om du inte väljer att komprimera dem."
      }
    ]
  },
  "png-to-pdf": {
    "title": "PNG till PDF",
    "metaDescription": "Konvertera PNG-bilder till PDF. Bevara transparens och kombinera flera PNG-filer.",
    "keywords": [
      "png till pdf",
      "konvertera png",
      "png-omvandlare",
      "transparent bild till pdf"
    ],
    "description": "<p>PNG till PDF konverterar dina PNG-bilder till PDF-dokument samtidigt som transparensen bevaras. Perfekt för grafik, logotyper, skärmdumpar och bilder med transparent bakgrund.</p>\n      <p>Kombinera flera PNG-filer till en enda PDF, ordna dem i valfri ordning och anpassa sidinställningarna. Konverteringen bibehåller den höga kvaliteten på dina originalbilder.</p>\n      <p>All konvertering sker i din webbläsare, vilket säkerställer att dina bilder förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp PNG-filer",
        "description": "Dra och släpp dina PNG-bilder eller klicka för att välja filer."
      },
      {
        "step": 2,
        "title": "Ordna och konfigurera",
        "description": "Ändra ordning på bilder och välj alternativ för sidstorlek."
      },
      {
        "step": 3,
        "title": "Konvertera och ladda ner",
        "description": "Klicka på Konvertera för att skapa din PDF och ladda ner."
      }
    ],
    "useCases": [
      {
        "title": "Grafikportfölj",
        "description": "Kompilera PNG-grafik och design till en professionell portfölj.",
        "icon": "palette"
      },
      {
        "title": "Skärmdumpdokumentation",
        "description": "Konvertera skärmdumpar till PDF-dokumentation.",
        "icon": "monitor"
      },
      {
        "title": "Logotypsamlingar",
        "description": "Skapa PDF-kataloger med logotyper och varumärkestillgångar.",
        "icon": "award"
      }
    ],
    "faq": [
      {
        "question": "Bevaras transparensen?",
        "answer": "PNG-transparens bevaras i PDF-utdata."
      },
      {
        "question": "Hur är det med PNG-animationer?",
        "answer": "Animerade PNG-filer konverteras som statiska bilder med den första bildrutan."
      },
      {
        "question": "Kan jag ställa in en bakgrundsfärg?",
        "answer": "Ja, du kan välja en bakgrundsfärg för genomskinliga områden."
      }
    ]
  },
  "webp-to-pdf": {
    "title": "WebP till PDF",
    "metaDescription": "Konvertera WebP-bilder till PDF. Modern bildformatkonvertering med kvalitetsbevarande.",
    "keywords": [
      "webp till pdf",
      "konvertera webbp",
      "webp-omvandlare",
      "Webbbild till pdf"
    ],
    "description": "<p>WebP till PDF konverterar moderna WebP-bilder till PDF-dokument. WebP är ett populärt webbbildsformat, och det här verktyget gör det enkelt att konvertera dessa bilder för utskrift eller arkivering.</p>\n      <p>Kombinera flera WebP-filer till en enda PDF med anpassningsbara sidinställningar. Konverteringen bevarar bildkvaliteten samtidigt som du skapar kompakta PDF-filer.</p>\n      <p>All konvertering sker i din webbläsare, vilket säkerställer att dina bilder förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp WebP-filer",
        "description": "Dra och släpp dina WebP-bilder eller klicka för att välja filer."
      },
      {
        "step": 2,
        "title": "Konfigurera alternativ",
        "description": "Ordna bilder och välj sidstorlek och orientering."
      },
      {
        "step": 3,
        "title": "Konvertera och ladda ner",
        "description": "Klicka på Konvertera för att skapa din PDF."
      }
    ],
    "useCases": [
      {
        "title": "Arkivering av webbinnehåll",
        "description": "Konvertera webbbilder till PDF för offlinearkivering.",
        "icon": "globe"
      },
      {
        "title": "Utskriftsförberedelse",
        "description": "Konvertera WebP-bilder till PDF för utskriftsändamål.",
        "icon": "printer"
      },
      {
        "title": "Formatstandardisering",
        "description": "Konvertera modern WebP till universellt kompatibel PDF.",
        "icon": "file-check"
      }
    ],
    "faq": [
      {
        "question": "Vad är WebP-format?",
        "answer": "WebP är ett modernt bildformat utvecklat av Google som ger överlägsen komprimering för webbbilder."
      },
      {
        "question": "Är kvaliteten bevarad?",
        "answer": "Ja, konverteringen bevarar den ursprungliga bildkvaliteten."
      },
      {
        "question": "Kan jag konvertera animerad WebP?",
        "answer": "Animerade WebP-filer konverteras som statiska bilder."
      }
    ]
  },
  "svg-to-pdf": {
    "title": "SVG till PDF",
    "metaDescription": "Konvertera SVG vektorgrafik till PDF. Bevara skalbarhet och kvalitet.",
    "keywords": [
      "svg till pdf",
      "konvertera svg",
      "vektor till pdf",
      "Skalbar grafik till pdf"
    ],
    "description": "<p>SVG till PDF konverterar skalbar vektorgrafik till PDF-dokument samtidigt som deras vektorkvalitet bevaras. SVG-filer förblir skarpa i alla storlekar, och denna kvalitet bibehålls i PDF-utdata.</p>\n      <p>Perfekt för att konvertera logotyper, ikoner, illustrationer och tekniska ritningar. Den resulterande PDF-filen bibehåller skalbarheten hos den ursprungliga vektorgrafiken.</p>\n      <p>All konvertering sker i din webbläsare, vilket säkerställer att dina filer förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp SVG-filer",
        "description": "Dra och släpp dina SVG-filer eller klicka för att välja."
      },
      {
        "step": 2,
        "title": "Konfigurera inställningar",
        "description": "Välj sidstorlek och arrangemang."
      },
      {
        "step": 3,
        "title": "Konvertera och ladda ner",
        "description": "Klicka på Konvertera för att skapa din vektor-PDF."
      }
    ],
    "useCases": [
      {
        "title": "Logotypkonvertering",
        "description": "Konvertera SVG-logotyper till PDF för tryckt material.",
        "icon": "award"
      },
      {
        "title": "Tekniska ritningar",
        "description": "Konvertera CAD-exporter och tekniska illustrationer till PDF.",
        "icon": "ruler"
      },
      {
        "title": "Ikon samlingar",
        "description": "Skapa PDF-kataloger med ikonuppsättningar och grafik.",
        "icon": "grid"
      }
    ],
    "faq": [
      {
        "question": "Bevaras vektorkvaliteten?",
        "answer": "Ja, SVG-vektorkvaliteten är helt bevarad i PDF-utdata."
      },
      {
        "question": "Kan jag konvertera komplexa SVG?",
        "answer": "Ja, komplexa SVG:er med gradienter, filter och effekter stöds."
      },
      {
        "question": "Hur är det med inbäddade typsnitt?",
        "answer": "Inbäddade teckensnitt i SVG-filer bevaras i PDF:en."
      }
    ]
  },
  "bmp-to-pdf": {
    "title": "BMP till PDF",
    "metaDescription": "Konvertera BMP bitmappsbilder till PDF. Stöd för äldre format med kvalitetsbevarande.",
    "keywords": [
      "bmp till pdf",
      "konvertera bmp",
      "bitmapp till pdf",
      "bmp-omvandlare"
    ],
    "description": "<p>BMP till PDF konverterar bitmappsbilder till PDF-dokument. BMP är ett äldre bildformat som ofta används i Windows-miljöer, och det här verktyget gör det enkelt att konvertera dessa filer till modernt PDF-format.</p>\n      <p>Kombinera flera BMP-filer till en enda PDF med anpassningsbara inställningar. Konverteringen komprimerar de typiskt stora BMP-filerna med bibehållen bildkvalitet.</p>\n      <p>All konvertering sker i din webbläsare, vilket säkerställer att dina bilder förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp BMP-filer",
        "description": "Dra och släpp dina BMP-bilder eller klicka för att välja filer."
      },
      {
        "step": 2,
        "title": "Konfigurera alternativ",
        "description": "Ordna bilder och välj sidinställningar."
      },
      {
        "step": 3,
        "title": "Konvertera och ladda ner",
        "description": "Klicka på Konvertera för att skapa din PDF."
      }
    ],
    "useCases": [
      {
        "title": "Äldre filkonvertering",
        "description": "Konvertera gamla BMP-filer till moderna PDF-format.",
        "icon": "history"
      },
      {
        "title": "Windows skärmdumpar",
        "description": "Konvertera Windows bitmappsskärmdumpar till PDF.",
        "icon": "monitor"
      },
      {
        "title": "Arkivmodernisering",
        "description": "Uppdatera äldre bildarkiv till PDF-format.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Kommer filstorleken att minskas?",
        "answer": "Ja, BMP-filer komprimeras vanligtvis avsevärt när de konverteras till PDF."
      },
      {
        "question": "Är kvaliteten bevarad?",
        "answer": "Ja, bildkvaliteten bibehålls under konverteringen."
      },
      {
        "question": "Vilka BMP-färgdjup stöds?",
        "answer": "Alla standard BMP-färgdjup stöds, inklusive 24-bitars och 32-bitars."
      }
    ]
  },
  "psd-to-pdf": {
    "title": "PSD till PDF",
    "metaDescription": "Konvertera Adobe Photoshop (PSD)-filer till PDF-format. Stöder flera filer och bevarar bildkvaliteten.",
    "keywords": [
      "psd till pdf",
      "konvertera psd",
      "photoshop till pdf",
      "psd-omvandlare",
      "adobe psd till pdf"
    ],
    "description": "<p>PSD till PDF konverterar Adobe Photoshop-filer (PSD) till PDF-dokument. Detta verktyg låter dig visa och dela PSD-designer utan att behöva installera Photoshop.</p>\n      <p>Du kan konvertera flera PSD-filer samtidigt och kombinera dem till ett enda PDF-dokument. Verktyget bearbetar varje PSD-fil och gör de synliga lagren till högkvalitativa PDF-sidor.</p>\n      <p>All konvertering sker lokalt i din webbläsare, vilket säkerställer att dina designs förblir privata och säkra.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp PSD-filer",
        "description": "Dra och släpp dina PSD- eller PSB-filer eller klicka för att välja dem från din enhet."
      },
      {
        "step": 2,
        "title": "Ordna ordning",
        "description": "Dra och släpp filminiatyrerna för att ordna dem i önskad ordning."
      },
      {
        "step": 3,
        "title": "Konvertera och ladda ner",
        "description": "Klicka på Konvertera för att rendera PSD:erna och ladda ner ditt PDF-dokument."
      }
    ],
    "useCases": [
      {
        "title": "Dela design",
        "description": "Dela Photoshop-designer med kunder eller kollegor som inte har Photoshop.",
        "icon": "share-2"
      },
      {
        "title": "Skapande av portfölj",
        "description": "Sammanställ ditt designarbete till en professionell PDF-portfölj.",
        "icon": "layout"
      },
      {
        "title": "Utskriftsförberedelse",
        "description": "Konvertera mönster till PDF för utskriftsändamål.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Behöver jag installera Photoshop?",
        "answer": "Nej, det här verktyget fungerar helt i din webbläsare utan att kräva Adobe Photoshop."
      },
      {
        "question": "Är lager bevarade?",
        "answer": "Verktyget återger det synliga tillståndet för PSD:n (sammansatt bild). Enskilda lager är tillplattade i PDF:en."
      },
      {
        "question": "Vad är den maximala filstorleken?",
        "answer": "Du kan ladda upp filer på upp till 100 MB vardera. Stora PSD-filer kan ta en stund att bearbeta."
      }
    ]
  },
  "heic-to-pdf": {
    "title": "HEIC till PDF",
    "metaDescription": "Konvertera iPhone HEIC-bilder till PDF. Konvertering av Apples bildformat på ett enkelt sätt.",
    "keywords": [
      "heic till pdf",
      "konvertera heic",
      "iPhone foto till pdf",
      "Apple-bild till pdf"
    ],
    "description": "<p>HEIC till PDF konverterar Apples högeffektiva bildformatfoton till PDF-dokument. HEIC är standardfotoformatet på iPhones och iPads, och det här verktyget gör det enkelt att dela dessa foton.</p>\n      <p>Kombinera flera HEIC-foton till en enda PDF, perfekt för att skapa fotoalbum eller dokumentarkiv från dina iPhone-foton.</p>\n      <p>All konvertering sker i din webbläsare, vilket säkerställer att dina foton förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp HEIC-filer",
        "description": "Dra och släpp dina HEIC-foton eller klicka för att välja filer."
      },
      {
        "step": 2,
        "title": "Ordna foton",
        "description": "Ändra ordning på foton och välj sidinställningar."
      },
      {
        "step": 3,
        "title": "Konvertera och ladda ner",
        "description": "Klicka på Konvertera för att skapa din PDF."
      }
    ],
    "useCases": [
      {
        "title": "iPhone fotoalbum",
        "description": "Skapa PDF-album från iPhone-foton för delning.",
        "icon": "smartphone"
      },
      {
        "title": "Dokumentskanning",
        "description": "Konvertera iPhone-dokumentskanningar till PDF-format.",
        "icon": "scan"
      },
      {
        "title": "Deling över plattformar",
        "description": "Konvertera HEIC till PDF för universell kompatibilitet.",
        "icon": "share-2"
      }
    ],
    "faq": [
      {
        "question": "Vad är HEIC-format?",
        "answer": "HEIC (High Efficiency Image Container) är Apples bildformat som ger bättre komprimering än JPEG."
      },
      {
        "question": "Stöds Live Photos?",
        "answer": "Live Photos konverteras som statiska bilder med hjälp av nyckelramen."
      },
      {
        "question": "Bevaras EXIF-data?",
        "answer": "Fotometadata kan valfritt bevaras eller tas bort under konverteringen."
      }
    ]
  },
  "tiff-to-pdf": {
    "title": "TIFF till PDF",
    "metaDescription": "Konvertera TIFF-bilder till PDF. Stöd för flersidiga TIFF-filer och högkvalitativ konvertering.",
    "keywords": [
      "tiff till pdf",
      "konvertera tiff",
      "tif till pdf",
      "flersidig tiff"
    ],
    "description": "<p>TIFF till PDF konverterar TIFF-bilder, inklusive flersidiga TIFF-filer, till PDF-dokument. TIFF används ofta för högkvalitativa skanningar och professionell grafik.</p>\n      <p>Flersidiga TIFF-filer konverteras automatiskt till flersidiga PDF-filer. Konverteringen bevarar den höga kvaliteten på dina originalbilder.</p>\n      <p>All konvertering sker i din webbläsare, vilket säkerställer att dina filer förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp TIFF-filer",
        "description": "Dra och släpp dina TIFF-filer eller klicka för att välja."
      },
      {
        "step": 2,
        "title": "Konfigurera alternativ",
        "description": "Välj sidinställningar och komprimeringsalternativ."
      },
      {
        "step": 3,
        "title": "Konvertera och ladda ner",
        "description": "Klicka på Konvertera för att skapa din PDF."
      }
    ],
    "useCases": [
      {
        "title": "Skannade dokument",
        "description": "Konvertera högkvalitativa skanningar från TIFF till PDF.",
        "icon": "scan"
      },
      {
        "title": "Professionell grafik",
        "description": "Konvertera professionell TIFF-grafik för distribution.",
        "icon": "image"
      },
      {
        "title": "Arkivkonvertering",
        "description": "Konvertera TIFF-arkiv till mer tillgängligt PDF-format.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Stöds flersidiga TIFF-filer?",
        "answer": "Ja, flersidiga TIFF-filer konverteras automatiskt till flersidiga PDF-filer."
      },
      {
        "question": "Är kvaliteten bevarad?",
        "answer": "Ja, TIFF-kvaliteten är helt bevarad i PDF-utdata."
      },
      {
        "question": "Vilken komprimering används?",
        "answer": "Du kan välja mellan förlustfria och förlustfria komprimeringsalternativ."
      }
    ]
  },
  "txt-to-pdf": {
    "title": "Text till PDF",
    "metaDescription": "Konvertera vanliga textfiler till PDF. Anpassa teckensnitt, marginaler och sidlayout.",
    "keywords": [
      "txt till pdf",
      "text till pdf",
      "konvertera textfil",
      "vanlig text till pdf"
    ],
    "description": "<p>Text till PDF konverterar vanliga textfiler till formaterade PDF-dokument. Anpassa teckensnitt, storlekar, marginaler och sidlayout för att skapa professionella dokument från enkel text.</p>\n      <p>Perfekt för att konvertera kodfiler, loggar, anteckningar eller annat vanlig textinnehåll till delbart PDF-format.</p>\n      <p>All konvertering sker i din webbläsare, vilket säkerställer att dina filer förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp textfil",
        "description": "Dra och släpp din .txt-fil eller klicka för att välja."
      },
      {
        "step": 2,
        "title": "Anpassa formatering",
        "description": "Välj teckensnitt, storlek, marginaler och sidinställningar."
      },
      {
        "step": 3,
        "title": "Konvertera och ladda ner",
        "description": "Klicka på Konvertera för att skapa din formaterade PDF."
      }
    ],
    "useCases": [
      {
        "title": "Koddokumentation",
        "description": "Konvertera källkodsfiler till PDF för dokumentation.",
        "icon": "code"
      },
      {
        "title": "Loggarkiv",
        "description": "Konvertera loggfiler till PDF för arkiveringsändamål.",
        "icon": "file-text"
      },
      {
        "title": "Obs Konvertering",
        "description": "Konvertera anteckningar i vanlig text till formaterade PDF-dokument.",
        "icon": "sticky-note"
      }
    ],
    "faq": [
      {
        "question": "Vilka teckensnitt finns tillgängliga?",
        "answer": "Flera teckensnitt är tillgängliga inklusive monospace-teckensnitt för kod."
      },
      {
        "question": "Är radlindning automatisk?",
        "answer": "Ja, långa rader slås automatiskt in för att passa sidan."
      },
      {
        "question": "Kan jag behålla formateringen?",
        "answer": "Mellanslag och indrag från originaltexten bevaras."
      }
    ]
  },
  "json-to-pdf": {
    "title": "JSON till PDF",
    "metaDescription": "Konvertera JSON-filer till formaterad PDF. Syntaxmarkering och strukturerad utdata.",
    "keywords": [
      "json till pdf",
      "konvertera json",
      "json viewer",
      "json formatterare"
    ],
    "description": "<p>JSON till PDF konverterar JSON-datafiler till formaterade, läsbara PDF-dokument. Utdata inkluderar syntaxmarkering och korrekt indrag för enkel läsning.</p>\n      <p>Perfekt för att dokumentera API-svar, konfigurationsfiler eller JSON-data som behöver delas eller arkiveras i ett läsbart format.</p>\n      <p>All konvertering sker i din webbläsare, vilket säkerställer att din data förblir privat.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp JSON-fil",
        "description": "Dra och släpp din .json-fil eller klicka för att välja."
      },
      {
        "step": 2,
        "title": "Konfigurera display",
        "description": "Välj formateringsalternativ och syntaxmarkering."
      },
      {
        "step": 3,
        "title": "Konvertera och ladda ner",
        "description": "Klicka på Konvertera för att skapa din formaterade PDF."
      }
    ],
    "useCases": [
      {
        "title": "API dokumentation",
        "description": "Konvertera API-svar till PDF för dokumentation.",
        "icon": "code"
      },
      {
        "title": "Konfigurationsarkiv",
        "description": "Arkivera konfigurationsfiler i läsbart PDF-format.",
        "icon": "settings"
      },
      {
        "title": "Datarapporter",
        "description": "Skapa PDF-rapporter från JSON-dataexport.",
        "icon": "bar-chart"
      }
    ],
    "faq": [
      {
        "question": "Ingår syntaxmarkering?",
        "answer": "Ja, JSON-syntax är markerad med färger för nycklar, värden och typer."
      },
      {
        "question": "Hur hanteras kapslade data?",
        "answer": "Kapslade objekt och arrayer är korrekt indragna för läsbarhet."
      },
      {
        "question": "Hur är det med stora JSON-filer?",
        "answer": "Stora filer pagineras automatiskt över flera sidor."
      }
    ]
  },
  "word-to-pdf": {
    "title": "Word till PDF",
    "metaDescription": "Konvertera Word-dokument (DOCX) till PDF. Bevara formatering och layout i dina konverterade dokument.",
    "keywords": [
      "ord till pdf",
      "docx till pdf",
      "konvertera ord",
      "ordkonverterare",
      "Microsoft word till pdf"
    ],
    "description": "<p>Word till PDF konverterar Microsoft Word-dokument till PDF-format samtidigt som den ursprungliga formateringen, layouten och innehållsstrukturen bevaras.</p>\n      <p>Ladda upp dina DOCX-filer och få högkvalitativ PDF-utdata som lämpar sig för delning, utskrift eller arkivering. Konverteringen bibehåller textformatering, styckestilar och grundläggande dokumentstruktur.</p>\n      <p>All konvertering sker lokalt i din webbläsare, vilket säkerställer att dina dokument förblir privata och säkra.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp Word-dokument",
        "description": "Dra och släpp din .docx-fil eller klicka för att välja från din enhet."
      },
      {
        "step": 2,
        "title": "Vänta på bearbetning",
        "description": "Verktyget laddar dokumentet och förbereder det för konvertering."
      },
      {
        "step": 3,
        "title": "Hämta PDF",
        "description": "Klicka på Hämta för att spara ditt konverterade PDF-dokument."
      }
    ],
    "useCases": [
      {
        "title": "Dokumentdelning",
        "description": "Konvertera Word-dokument till PDF för universell delning och visning.",
        "icon": "share-2"
      },
      {
        "title": "Utskriftsförberedelse",
        "description": "Skapa utskriftsklara PDF-filer från Word-dokument.",
        "icon": "printer"
      },
      {
        "title": "Dokumentarkiv",
        "description": "Arkivera Word-dokument i stabilt PDF-format för långtidslagring.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Stöds .doc-format?",
        "answer": "För närvarande stöds endast .docx-format. Konvertera .doc-filer till .docx först med Microsoft Word eller LibreOffice."
      },
      {
        "question": "Finns bilderna bevarade?",
        "answer": "Textinnehåll och grundläggande formatering bevaras. Komplexa layouter med många bilder kan ha förenklat renderingen."
      },
      {
        "question": "Är konverteringen säker?",
        "answer": "Ja, all bearbetning sker i din webbläsare. Dina dokument lämnar aldrig din enhet."
      }
    ]
  },
  "excel-to-pdf": {
    "title": "Excel till PDF",
    "metaDescription": "Konvertera Excel-kalkylblad (XLSX) till PDF. Bevara tabeller och data i dina konverterade dokument.",
    "keywords": [
      "excel till pdf",
      "xlsx till pdf",
      "konvertera excel",
      "kalkylblad till pdf",
      "Microsoft excel till pdf"
    ],
    "description": "<p>Excel till PDF konverterar Microsoft Excel-kalkylblad till PDF-format samtidigt som tabellstrukturen och dataorganisationen bevaras.</p>\n      <p>Ladda upp dina XLSX-filer och få ren PDF-utdata med korrekt formaterade tabeller. Varje ark i din arbetsbok blir ett separat avsnitt i PDF.</p>\n      <p>All konvertering sker lokalt i din webbläsare, vilket säkerställer att din data förblir privat och säker.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp Excel-fil",
        "description": "Dra och släpp din .xlsx-fil eller klicka för att välja från din enhet."
      },
      {
        "step": 2,
        "title": "Vänta på bearbetning",
        "description": "Verktyget laddar kalkylarket och konverterar alla ark."
      },
      {
        "step": 3,
        "title": "Hämta PDF",
        "description": "Klicka på Hämta för att spara ditt konverterade PDF-dokument."
      }
    ],
    "useCases": [
      {
        "title": "Rapportdelning",
        "description": "Konvertera Excel-rapporter till PDF för distribution till intressenter.",
        "icon": "file-text"
      },
      {
        "title": "Dataarkivering",
        "description": "Arkivera kalkylbladsdata i stabilt PDF-format.",
        "icon": "archive"
      },
      {
        "title": "Utskriftsförberedelse",
        "description": "Skapa utskriftsklara PDF-filer från Excel-kalkylblad.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Stöds flera ark?",
        "answer": "Ja, alla ark i arbetsboken konverteras och ingår i PDF:en."
      },
      {
        "question": "Stöds .xls-formatet?",
        "answer": "För närvarande stöds endast .xlsx-format. Spara .xls-filer som .xlsx först."
      },
      {
        "question": "Bevaras formler?",
        "answer": "PDF-filen visar beräknade värden. Formler är inte körbara i PDF-format."
      }
    ]
  },
  "pptx-to-pdf": {
    "title": "PowerPoint till PDF",
    "metaDescription": "Konvertera PowerPoint-presentationer (PPTX) till PDF. Bevara bilder och innehåll för enkel delning.",
    "keywords": [
      "powerpoint till pdf",
      "pptx till pdf",
      "konvertera pptx",
      "Presentation till pdf",
      "bilder till pdf"
    ],
    "description": "<p>PowerPoint till PDF konverterar Microsoft PowerPoint-presentationer till PDF-format, vilket bevarar bildinnehåll och text för enkel delning och visning.</p>\n      <p>Evarje bild blir en sida i PDF-filen och upprätthåller presentationsflödet. Perfekt för att dela presentationer med personer som inte har PowerPoint installerat.</p>\n      <p>All konvertering sker lokalt i din webbläsare, vilket säkerställer att dina presentationer förblir privata och säkra.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp PowerPoint-fil",
        "description": "Dra och släpp din .pptx-fil eller klicka för att välja från din enhet."
      },
      {
        "step": 2,
        "title": "Vänta på bearbetning",
        "description": "Verktyget extraherar bildinnehåll och skapar PDF-filen."
      },
      {
        "step": 3,
        "title": "Hämta PDF",
        "description": "Klicka på Hämta för att spara ditt konverterade PDF-dokument."
      }
    ],
    "useCases": [
      {
        "title": "Presentationsdelning",
        "description": "Dela presentationer med vem som helst utan att behöva PowerPoint.",
        "icon": "share-2"
      },
      {
        "title": "Skapande av handout",
        "description": "Skapa PDF-handouts från dina presentationsbilder.",
        "icon": "file-text"
      },
      {
        "title": "Arkivpresentationer",
        "description": "Arkivera presentationer i stabilt PDF-format.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Är animationer bevarade?",
        "answer": "PDF är ett statiskt format, så animationer och övergångar bevaras inte. Varje bild blir en statisk sida."
      },
      {
        "question": "Stöds .ppt-format?",
        "answer": "För närvarande stöds endast .pptx-format. Konvertera .ppt-filer till .pptx först."
      },
      {
        "question": "Ingår talaranteckningar?",
        "answer": "För närvarande ingår inte talaranteckningar i PDF-utdata."
      }
    ]
  },
  "xps-to-pdf": {
    "title": "XPS till PDF",
    "metaDescription": "Konvertera XPS-dokument till PDF-format. High-fidelity-konvertering som bevarar layout och grafik.",
    "keywords": [
      "xps till pdf",
      "konvertera xps",
      "xps omvandlare",
      "Microsoft xps till pdf",
      "oxps till pdf"
    ],
    "description": "<p>XPS till PDF konverterar Microsoft XPS (XML Paper Specification)-dokument till PDF-format samtidigt som den ursprungliga layouten, texten och vektorgrafikerna bevaras.</p>\n      <p>XPS är ett format med fasta dokument som liknar PDF. Det här verktyget tillhandahåller högfientlig konvertering med inbyggd XPS-analys, vilket säkerställer korrekt återgivning av dina dokument.</p>\n      <p>All konvertering sker lokalt i din webbläsare, vilket säkerställer att dina dokument förblir privata och säkra.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp XPS-fil",
        "description": "Dra och släpp din .xps-fil eller klicka för att välja från din enhet."
      },
      {
        "step": 2,
        "title": "Vänta på bearbetning",
        "description": "Verktyget kommer att analysera och konvertera XPS-dokumentet."
      },
      {
        "step": 3,
        "title": "Hämta PDF",
        "description": "Klicka på Hämta för att spara ditt konverterade PDF-dokument."
      }
    ],
    "useCases": [
      {
        "title": "Formatkonvertering",
        "description": "Konvertera XPS-dokument till PDF-format som stöds mer.",
        "icon": "file"
      },
      {
        "title": "Dokumentdelning",
        "description": "Dela XPS-dokument med användare som inte har XPS-visningsprogram.",
        "icon": "share-2"
      },
      {
        "title": "Arkiv migration",
        "description": "Migrera XPS-arkiv till PDF-format för bättre kompatibilitet.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Vad är XPS-format?",
        "answer": "XPS (XML Paper Specification) är Microsofts format för fasta dokument, liknande PDF. Det används ofta för Windows-utskrift."
      },
      {
        "question": "Är konverteringen förlustfri?",
        "answer": "Ja, konverteringen bevarar text, grafik och layout med hög kvalitet."
      },
      {
        "question": "Stöds flersidiga XPS-filer?",
        "answer": "Ja, alla sidor i XPS-dokumentet konverteras till PDF."
      }
    ]
  },
  "rtf-to-pdf": {
    "title": "RTF till PDF",
    "metaDescription": "Konvertera RTF-filer (Rich Text Format) till PDF. Bevara textformateringen i dina dokument.",
    "keywords": [
      "rtf till pdf",
      "konvertera rtf",
      "rik text till pdf",
      "rtf-omvandlare"
    ],
    "description": "<p>RTF till PDF konverterar Rich Text Format-filer till PDF-dokument. RTF är ett textformat som stöds brett och inkluderar grundläggande formatering som typsnitt, färger och stilar.</p>\n      <p>Ladda upp dina RTF-filer och få ren PDF-utdata samtidigt som textinnehåll och grundläggande formatering bevaras. Perfekt för att konvertera äldre dokument till modernt PDF-format.</p>\n      <p>All konvertering sker lokalt i din webbläsare, vilket säkerställer att dina dokument förblir privata och säkra.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp RTF-fil",
        "description": "Dra och släpp din .rtf-fil eller klicka för att välja från din enhet."
      },
      {
        "step": 2,
        "title": "Vänta på bearbetning",
        "description": "Verktyget kommer att analysera och konvertera RTF-innehållet."
      },
      {
        "step": 3,
        "title": "Hämta PDF",
        "description": "Klicka på Hämta för att spara ditt konverterade PDF-dokument."
      }
    ],
    "useCases": [
      {
        "title": "Äldre konvertering",
        "description": "Konvertera gamla RTF-dokument till moderna PDF-format.",
        "icon": "history"
      },
      {
        "title": "Dokumentdelning",
        "description": "Dela RTF-dokument i universellt visningsbart PDF-format.",
        "icon": "share-2"
      },
      {
        "title": "Arkiv dokument",
        "description": "Arkivera RTF-filer i stabilt PDF-format för långtidslagring.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Vilken formatering finns bevarad?",
        "answer": "Grundläggande textformatering inklusive teckensnitt, stycken och stilar konverteras. Komplexa RTF-funktioner kan förenklas."
      },
      {
        "question": "Kan jag konvertera flera RTF-filer?",
        "answer": "För närvarande konverteras en fil åt gången. Använd Merge PDF för att kombinera flera konverterade filer."
      },
      {
        "question": "Stöds inbäddade bilder?",
        "answer": "Textinnehållet är det primära fokus. Inbäddade objekt får inte renderas."
      }
    ]
  },
  "epub-to-pdf": {
    "title": "EPUB till PDF",
    "metaDescription": "Konvertera EPUB e-böcker till PDF. Bevara formatering, bilder och kapitelstruktur.",
    "keywords": [
      "epub till pdf",
      "konvertera epub",
      "e-bok till pdf",
      "epub-omvandlare"
    ],
    "description": "<p>EPUB till PDF konverterar elektroniska bokfiler till högkvalitativa PDF-dokument. EPUB är det populäraste e-boksformatet som används av de flesta e-läsare och digitala bibliotek.</p>\n      <p>Det här verktyget bevarar textformatering, bilder och kapitelstrukturen i dina e-böcker. Perfekt för att skriva ut, arkivera eller dela e-böcker i ett universellt visningsformat.</p>\n      <p>All konvertering sker lokalt i din webbläsare med hjälp av avancerad renderingsteknik, vilket säkerställer att dina böcker förblir privata och att konverteringen går snabbt.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp EPUB-fil",
        "description": "Dra och släpp din .epub-fil eller klicka för att välja från din enhet."
      },
      {
        "step": 2,
        "title": "Vänta på konvertering",
        "description": "Verktyget renderar och konverterar alla sidor i din e-bok."
      },
      {
        "step": 3,
        "title": "Hämta PDF",
        "description": "Klicka på Hämta för att spara ditt konverterade PDF-dokument."
      }
    ],
    "useCases": [
      {
        "title": "Skriv ut e-böcker",
        "description": "Konvertera e-böcker till PDF för fysisk utskrift.",
        "icon": "printer"
      },
      {
        "title": "Arkiv böcker",
        "description": "Lagra e-böcker i långsiktigt stabilt PDF-format.",
        "icon": "archive"
      },
      {
        "title": "Dela dokument",
        "description": "Dela e-böcker med vem som helst, även utan e-läsare.",
        "icon": "share-2"
      }
    ],
    "faq": [
      {
        "question": "Är formateringen bevarad?",
        "answer": "Ja! Det här verktyget använder inbyggd EPUB-rendering, bevarar textformatering, bilder och layout med hög kvalitet."
      },
      {
        "question": "Stöds DRM-skyddade EPUB:er?",
        "answer": "Nej, DRM-skyddade e-böcker kan inte konverteras. Endast DRM-fria EPUB-filer stöds."
      },
      {
        "question": "Hur bestäms sidstorleken?",
        "answer": "EPUB-innehåll renderas till standard A4-storlek för optimal läsbarhet."
      }
    ]
  },
  "mobi-to-pdf": {
    "title": "MOBI till PDF",
    "metaDescription": "Konvertera MOBI e-böcker till PDF. Stöd för Kindle-format med högkvalitativ rendering.",
    "keywords": [
      "mobi till pdf",
      "konvertera mobi",
      "Kindle till pdf",
      "azw till pdf",
      "mobi omvandlare"
    ],
    "description": "<p>MOBI till PDF konverterar Amazon Kindle e-boksfiler till högkvalitativa PDF-dokument. MOBI-format (inklusive AZW och AZW3) är Amazons egenutvecklade e-boksformat som används på Kindle-enheter.</p>\n      <p>Det här verktyget bevarar textformatering, bilder och strukturen i dina Kindle-böcker. Perfekt för utskrift, arkivering eller läsning på enheter som inte stöder MOBI-format.</p>\n      <p>All konvertering sker lokalt i din webbläsare med hjälp av avancerad renderingsteknik, vilket säkerställer att dina böcker förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp MOBI-fil",
        "description": "Dra och släpp din .mobi-, .azw- eller .azw3-fil eller klicka för att välja från din enhet."
      },
      {
        "step": 2,
        "title": "Vänta på konvertering",
        "description": "Verktyget renderar och konverterar alla sidor i din e-bok."
      },
      {
        "step": 3,
        "title": "Hämta PDF",
        "description": "Klicka på Hämta för att spara ditt konverterade PDF-dokument."
      }
    ],
    "useCases": [
      {
        "title": "Skriv ut Kindle-böcker",
        "description": "Konvertera Kindle e-böcker till PDF för fysisk utskrift.",
        "icon": "printer"
      },
      {
        "title": "Arkiv böcker",
        "description": "Lagra Kindle-böcker i universellt PDF-format.",
        "icon": "archive"
      },
      {
        "title": "Avläsning över flera enheter",
        "description": "Läs Kindle-böcker på enheter som bara stöder PDF.",
        "icon": "tablet-smartphone"
      }
    ],
    "faq": [
      {
        "question": "Vilka MOBI-format stöds?",
        "answer": "Det här verktyget stöder .mobi-, .azw- och .azw3-filer (icke-DRM-versioner)."
      },
      {
        "question": "Stöds DRM-skyddade Kindle-böcker?",
        "answer": "Nej, DRM-skyddade e-böcker kan inte konverteras. Endast DRM-fria filer stöds."
      },
      {
        "question": "Kommer min formatering att bevaras?",
        "answer": "Ja! Verktyget använder inbyggd MOBI-rendering för att bevara text, bilder och layout."
      }
    ]
  },
  "djvu-to-pdf": {
    "title": "DJVU till PDF",
    "metaDescription": "Konvertera DJVU-dokumentfiler till PDF. Högkvalitativ återgivning för skannade dokument och böcker.",
    "keywords": [
      "djvu till pdf",
      "konvertera djvu",
      "djvu-omvandlare",
      "djvu pdf",
      "djv till pdf"
    ],
    "description": "<p>DJVU till PDF konverterar DjVu-dokumentfiler till högkvalitativa PDF-dokument. DjVu är ett datorfilformat som främst är utformat för att lagra skannade dokument, särskilt de som innehåller en kombination av text, linjeteckningar och fotografier.</p>\n      <p>Det här verktyget återger varje sida i din DJVU-fil med din valda DPI (dots per inch) och kombinerar dem till ett sökbart PDF-dokument. Perfekt för att konvertera skannade böcker, tekniska manualer och arkivdokument.</p>\n      <p>All konvertering sker lokalt i din webbläsare, vilket säkerställer att dina dokument förblir privata och säkra.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp DJVU-fil",
        "description": "Dra och släpp din .djvu- eller .djv-fil eller klicka för att välja från din enhet."
      },
      {
        "step": 2,
        "title": "Konfigurera alternativ",
        "description": "Välj output DPI (72, 150 eller 300) och bildkvalitet för PDF:en."
      },
      {
        "step": 3,
        "title": "Konvertera och ladda ner",
        "description": "Klicka på Konvertera till PDF och ladda ner ditt konverterade dokument."
      }
    ],
    "useCases": [
      {
        "title": "Arkiv dokument",
        "description": "Konvertera DJVU-arkiv till universellt PDF-format.",
        "icon": "archive"
      },
      {
        "title": "Dela skannade böcker",
        "description": "Dela skannade böcker i PDF-format för bredare kompatibilitet.",
        "icon": "share-2"
      },
      {
        "title": "Skriv ut dokument",
        "description": "Konvertera DJVU till högkvalitativ PDF för utskrift.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Vad är DJVU-format?",
        "answer": "DjVu är ett filformat utformat för att lagra skannade dokument, särskilt de med text, ritningar och bilder. Det erbjuder bättre komprimering än PDF för skannat innehåll."
      },
      {
        "question": "Vilken DPI ska jag välja?",
        "answer": "72 DPI är lämplig för webbvisning, 150 DPI för standarddokument och 300 DPI för högkvalitativa utskrifter."
      },
      {
        "question": "Kommer texten att vara sökbar?",
        "answer": "Texten renderas som bilder. Om du behöver sökbar text, överväg att använda vårt OCR PDF-verktyg efter konvertering."
      }
    ]
  },
  "fb2-to-pdf": {
    "title": "FB2 till PDF",
    "metaDescription": "Konvertera FictionBook (FB2) e-böcker till PDF. Stöder flera filer med högkvalitativ rendering.",
    "keywords": [
      "fb2 till pdf",
      "konvertera fb2",
      "skönlitteratur till pdf",
      "fb2-omvandlare",
      "fb2.zip till pdf"
    ],
    "description": "<p>FB2 till PDF konverterar FictionBook (FB2) e-boksfiler till högkvalitativa PDF-dokument. FB2 är ett populärt XML-baserat e-boksformat som ofta används i Ryssland och Östeuropa.</p>\n      <p>Det här verktyget stöder både .fb2- och .fb2.zip-filer och kan bearbeta flera filer samtidigt. Den bevarar textformatering, bilder och kapitelstrukturen i dina e-böcker.</p>\n      <p>All konvertering sker lokalt i din webbläsare med hjälp av avancerad renderingsteknik, vilket säkerställer att dina böcker förblir privata och att konverteringen går snabbt.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp FB2-filer",
        "description": "Dra och släpp en eller flera .fb2- eller .fb2.zip-filer, eller klicka för att välja från din enhet."
      },
      {
        "step": 2,
        "title": "Välj Kvalitet",
        "description": "Välj utskriftskvalitet: Låg (72 DPI), Medium (150 DPI) eller Hög (300 DPI)."
      },
      {
        "step": 3,
        "title": "Konvertera och ladda ner",
        "description": "Klicka på Konvertera till PDF och ladda ner dina konverterade dokument."
      }
    ],
    "useCases": [
      {
        "title": "Skriv ut e-böcker",
        "description": "Konvertera FB2 e-böcker till PDF för fysisk utskrift.",
        "icon": "printer"
      },
      {
        "title": "Batchkonvertering",
        "description": "Konvertera flera FB2-filer till PDF samtidigt.",
        "icon": "layers"
      },
      {
        "title": "Universellt format",
        "description": "Dela e-böcker i PDF-format som fungerar på alla enheter.",
        "icon": "share-2"
      }
    ],
    "faq": [
      {
        "question": "Kan jag konvertera flera FB2-filer samtidigt?",
        "answer": "Ja! Detta verktyg stöder batchkonvertering av upp till 20 FB2-filer samtidigt."
      },
      {
        "question": "Stöds .fb2.zip-filer?",
        "answer": "Ja, verktyget extraherar och konverterar FB2-filer automatiskt från .fb2.zip-arkiv."
      },
      {
        "question": "Är formateringen bevarad?",
        "answer": "Ja! Verktyget använder inbyggd FB2-rendering, bevarar textformatering, bilder och kapitelstruktur med hög tillförlitlighet."
      }
    ]
  },
  "pdf-to-jpg": {
    "title": "PDF till JPG",
    "metaDescription": "Konvertera PDF-sidor till JPG-bilder. Högkvalitativ extraktion med anpassningsbar upplösning.",
    "keywords": [
      "pdf till jpg",
      "pdf till jpeg",
      "konvertera pdf till bild",
      "extrahera pdf-bilder"
    ],
    "description": "<p>PDF till JPG konverterar PDF-dokumentsidor till högkvalitativa JPG-bilder. Extrahera alla sidor eller välj specifika sidor att konvertera, med anpassningsbar upplösning och kvalitetsinställningar.</p>\n      <p>Perfekt för att extrahera bilder från PDF-filer, skapa miniatyrer eller konvertera dokument för webbanvändning.</p>\n      <p>All konvertering sker i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja."
      },
      {
        "step": 2,
        "title": "Välj Sidor och kvalitet",
        "description": "Välj vilka sidor som ska konverteras och ställ in alternativ för kvalitet/DPI."
      },
      {
        "step": 3,
        "title": "Konvertera och ladda ner",
        "description": "Klicka på Konvertera för att extrahera bilder och ladda ner som ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Webbpublicering",
        "description": "Konvertera PDF-sidor till bilder för webbplatsanvändning.",
        "icon": "globe"
      },
      {
        "title": "Sociala medier",
        "description": "Extrahera sidor som bilder för delning i sociala medier.",
        "icon": "share-2"
      },
      {
        "title": "Presentationer",
        "description": "Konvertera PDF-bilder till bilder för presentationer.",
        "icon": "presentation"
      }
    ],
    "faq": [
      {
        "question": "Vilka kvalitetsinställningar finns tillgängliga?",
        "answer": "Du kan ställa in DPI från 72 till 300 och JPEG-kvalitet från 1-100."
      },
      {
        "question": "Kan jag bara konvertera specifika sidor?",
        "answer": "Ja, du kan välja enskilda sidor eller sidintervall att konvertera."
      },
      {
        "question": "Hur hanteras flera sidor?",
        "answer": "Varje sida blir en separat JPG-fil, laddad ned som ett ZIP-arkiv."
      }
    ]
  },
  "pdf-to-png": {
    "title": "PDF till PNG",
    "metaDescription": "Konvertera PDF-sidor till PNG-bilder. Förlustfri kvalitet med transparensstöd.",
    "keywords": [
      "pdf till png",
      "konvertera pdf till png",
      "Utvinning av pdf-bilder",
      "förlustfri pdf-konvertering"
    ],
    "description": "<p>PDF till PNG konverterar PDF-dokumentsidor till högkvalitativa PNG-bilder med förlustfri komprimering. PNG-format bevarar bildkvaliteten perfekt och stöder transparens.</p>\n      <p>Perfekt för att extrahera grafik, diagram eller annat innehåll där kvalitetsbevarande är avgörande.</p>\n      <p>All konvertering sker i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja."
      },
      {
        "step": 2,
        "title": "Konfigurera alternativ",
        "description": "Välj sidor och ställ in upplösningsalternativ (DPI)."
      },
      {
        "step": 3,
        "title": "Konvertera och ladda ner",
        "description": "Klicka på Konvertera för att extrahera PNG-bilder."
      }
    ],
    "useCases": [
      {
        "title": "Grafikextraktion",
        "description": "Extrahera diagram och grafik med perfekt kvalitet.",
        "icon": "image"
      },
      {
        "title": "Designtillgångar",
        "description": "Konvertera PDF-designer till PNG för redigeringsprogram.",
        "icon": "palette"
      },
      {
        "title": "Dokumentation",
        "description": "Skapa bilder av hög kvalitet för teknisk dokumentation.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "Varför välja PNG framför JPG?",
        "answer": "PNG erbjuder förlustfri komprimering och transparensstöd, perfekt för grafik och text."
      },
      {
        "question": "Stöds transparenta bakgrunder?",
        "answer": "Ja, PDF-sidor med transparens bevaras i PNG-utdata."
      },
      {
        "question": "Vilken DPI ska jag använda?",
        "answer": "Använd 150 DPI för skärmvisning, 300 DPI för utskrift."
      }
    ]
  },
  "pdf-to-webp": {
    "title": "PDF till WebP",
    "metaDescription": "Konvertera PDF-sidor till WebP-bilder. Modernt format med utmärkt komprimering.",
    "keywords": [
      "pdf till webp",
      "konvertera pdf till webp",
      "modernt bildformat",
      "webboptimerade bilder"
    ],
    "description": "<p>PDF till WebP konverterar PDF-dokumentsidor till WebP-bilder, Googles moderna bildformat som erbjuder utmärkt komprimering med hög kvalitet.</p>\n      <p>WebP images are smaller than JPG or PNG while maintaining comparable quality, making them ideal for web use.</p>\n      <p>All konvertering sker i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja."
      },
      {
        "step": 2,
        "title": "Ställ in kvalitetsalternativ",
        "description": "Välj sidor och ställ in inställningar för kvalitet/komprimering."
      },
      {
        "step": 3,
        "title": "Konvertera och ladda ner",
        "description": "Klicka på Konvertera för att skapa WebP-bilder."
      }
    ],
    "useCases": [
      {
        "title": "Webboptimering",
        "description": "Skapa webboptimerade bilder från PDF-innehåll.",
        "icon": "globe"
      },
      {
        "title": "Bandbreddsbesparingar",
        "description": "Minska bildfilstorlekarna för snabbare inläsning.",
        "icon": "zap"
      },
      {
        "title": "Moderna hemsidor",
        "description": "Använd moderna bildformat för samtida webbprojekt.",
        "icon": "layout"
      }
    ],
    "faq": [
      {
        "question": "Vad är WebP-format?",
        "answer": "WebP är ett modernt bildformat från Google som erbjuder överlägsen komprimering."
      },
      {
        "question": "Stöds WebP brett?",
        "answer": "Ja, alla moderna webbläsare stöder WebP-format."
      },
      {
        "question": "Hur mycket mindre är WebP-filer?",
        "answer": "WebP-filer är vanligtvis 25-35 % mindre än motsvarande JPG-filer."
      }
    ]
  },
  "pdf-to-bmp": {
    "title": "PDF till BMP",
    "metaDescription": "Konvertera PDF-sidor till BMP-bitmappsbilder. Okomprimerat format för maximal kompatibilitet.",
    "keywords": [
      "pdf till bmp",
      "konvertera pdf till bitmapp",
      "okomprimerade bilder",
      "äldre format"
    ],
    "description": "<p>PDF till BMP konverterar PDF-dokumentsidor till BMP-bitmappsbilder. BMP är ett okomprimerat format som säkerställer maximal kompatibilitet med äldre system och applikationer.</p>\n      <p>Medan BMP-filer är större än komprimerade format erbjuder de perfekt kvalitet och universell kompatibilitet.</p>\n      <p>All konvertering sker i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja."
      },
      {
        "step": 2,
        "title": "Välj Sidor",
        "description": "Välj vilka sidor som ska konverteras och ställ in DPI."
      },
      {
        "step": 3,
        "title": "Konvertera och ladda ner",
        "description": "Klicka på Konvertera för att skapa BMP-bilder."
      }
    ],
    "useCases": [
      {
        "title": "Äldre system",
        "description": "Skapa bilder som är kompatibla med äldre programvara.",
        "icon": "history"
      },
      {
        "title": "Windows-applikationer",
        "description": "Generera BMP-filer för Windows-specifika applikationer.",
        "icon": "monitor"
      },
      {
        "title": "Okomprimerade arkiv",
        "description": "Skapa okomprimerade bildarkiv från PDF-filer.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Varför använda BMP-format?",
        "answer": "BMP erbjuder okomprimerad kvalitet och maximal kompatibilitet med äldre system."
      },
      {
        "question": "Är BMP-filer större?",
        "answer": "Ja, BMP-filer är okomprimerade och betydligt större än JPG eller PNG."
      },
      {
        "question": "Vilka färgdjup stöds?",
        "answer": "24-bitars och 32-bitars färgdjup stöds."
      }
    ]
  },
  "pdf-to-tiff": {
    "title": "PDF till TIFF",
    "metaDescription": "Konvertera PDF till TIFF-bilder. Professionell kvalitet med flersidigt stöd.",
    "keywords": [
      "pdf till tiff",
      "konvertera pdf till tiff",
      "professionella bilder",
      "flersidig tiff"
    ],
    "description": "<p>PDF till TIFF konverterar PDF-dokument till TIFF-bilder av hög kvalitet. TIFF är det föredragna formatet för professionell utskrift och arkivering på grund av dess förlustfria komprimering.</p>\n      <p>Skapa ensidiga TIFF-filer eller kombinera alla sidor till en flersidig TIFF-fil. Perfekt för professionella och arkiveringsändamål.</p>\n      <p>All konvertering sker i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja."
      },
      {
        "step": 2,
        "title": "Konfigurera utgång",
        "description": "Välj enkel- eller flersidig TIFF och ställ in DPI."
      },
      {
        "step": 3,
        "title": "Konvertera och ladda ner",
        "description": "Klicka på Konvertera för att skapa TIFF-bilder."
      }
    ],
    "useCases": [
      {
        "title": "Professionellt tryck",
        "description": "Skapa utskriftsklara TIFF-filer från PDF-dokument.",
        "icon": "printer"
      },
      {
        "title": "Arkivering av dokument",
        "description": "Arkivera dokument i högkvalitativt TIFF-format.",
        "icon": "archive"
      },
      {
        "title": "Publicering",
        "description": "Konvertera PDF-filer till TIFF för publicering av arbetsflöden.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "Kan jag skapa flersidiga TIFF?",
        "answer": "Ja, du kan kombinera alla PDF-sidor till en enda flersidig TIFF."
      },
      {
        "question": "Vilka komprimeringsalternativ finns tillgängliga?",
        "answer": "LZW, ZIP och inga komprimeringsalternativ är tillgängliga."
      },
      {
        "question": "Vilken DPI ska jag använda för utskrift?",
        "answer": "Använd 300 DPI eller högre för professionella utskrifter."
      }
    ]
  },
  "pdf-to-cbz": {
    "title": "PDF till CBZ",
    "metaDescription": "Konvertera PDF-dokument till högupplösta Comic Book ZIP-arkiv (.cbz). Inbyggd Caliber OPF, ComicInfo XML och ZIP Comment-metadata för perfekt katalogisering av flera läsare.",
    "keywords": [
      "pdf till cbz",
      "pdf till serie",
      "cbz förpackning",
      "kaliber seriearkiv",
      "comicinfo metadata"
    ],
    "description": "<p>PDF till CBZ är specialkonstruerad för serieentusiaster och digitala e-boksarkivarier. Den återger varje sida i dina PDF-volymer till rastrerad grafik och kompilerar dem till ett standard Comic Book ZIP (.cbz)-paket.</p>\n      <p>För att eliminera frustrerande manuell skrapning i system som Calibre, Komga, Kavita eller CDisplayEx, genererar och injicerar processorn automatiskt både <strong>ComicInfo.xml</strong>- och <strong>metadata.opf</strong>-filer internt, samtidigt som den skriver en standardiserad </strong>-kommentar direkt i ZIPTAG-kommentaren i ZIPTAG-kommentaren. metadata.</p>\n      <p> Innehåller fullständiga konfigurationsreglage för bildkomprimeringskvalitet, siddimensionsskala, höger-till-vänster läsväxlingar för layout (Manga-läge) och svart-vit gråskalefärgfiltrering.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp komisk PDF",
        "description": "Dra och släpp din primära serie-, konstbok eller manga PDF-fil."
      },
      {
        "step": 2,
        "title": "Mata in komisk metadata",
        "description": "Fyll i fälten Serier, Volym, Titel, Författare och Publisher och växla mellan layout eller gråskaleoptimering."
      },
      {
        "step": 3,
        "title": "Kompilera och ladda ner",
        "description": "Klicka på Konvertera för att kompilera och hämta din metadatarika .cbz-fil direkt redo för Calibre."
      }
    ],
    "useCases": [
      {
        "title": "Retrograd Comic Packaging",
        "description": "Förvandla råskannade PDF-böcker till kompakta, standardkompatibla CBZ-seriefiler som enkelt kan skrapas av chefer för seriebibliotek.",
        "icon": "book"
      },
      {
        "title": "Zero-Effort Caliber Integration",
        "description": "Det inbyggda metadata.opf-schemat tillåter Caliber att hämta och klassificera skapare och volymproblem utan manuell uppslagning.",
        "icon": "database"
      },
      {
        "title": "E-Ink skärmförbättring",
        "description": "Förfiltrera grafiska färgkanaler till gråskala med hög kontrast vid kompilering, vilket ökar visuell uppdatering och klarhet på E-bläckskärmar samtidigt som du sparar lagringsutrymme.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "Vad är en .cbz-fil?",
        "answer": "En CBZ-fil är ett specialiserat arkivbehållarformat för serietidningsserier. Det är internt formaterat som ett ZIP-paket som innehåller sekventiellt numrerade sidbilder tillsammans med strukturella XML-filer med metadata."
      },
      {
        "question": "Hur är metadata kompatibel?",
        "answer": "Vi kompilerar och bäddar in ComicInfo.xml, metadata.opf och ZIP-filkommentarer i ett pass. Detta garanterar absolut överensstämmelse över flera ekosystem för serier och e-böcker."
      },
      {
        "question": "Varför använda gråskaleläget?",
        "answer": "Om du läser på en E-bläckläsare i gråskala (som Kindle eller Kobo), minskar kompilering direkt i gråskala artefaktspökbilder, ger överlägsna kontrastnivåer och krymper den slutliga CBZ-filstorleken."
      }
    ]
  },
  "pdf-to-svg": {
    "title": "PDF till SVG",
    "metaDescription": "Konvertera PDF-sidor till SVG-vektorgrafik. Perfekt skalbarhet i alla storlekar med individuell sidexport.",
    "keywords": [
      "pdf till svg",
      "konvertera pdf till svg",
      "vektorgrafik",
      "skalbar pdf",
      "svg omvandlare"
    ],
    "description": "<p>PDF till SVG konverterar varje sida i ditt PDF-dokument till en skalbar vektorgrafik (SVG). SVG är ett vektorformat som bibehåller perfekt kvalitet på alla zoomnivåer eller utskriftsstorlekar.</p>\n      <p>Till skillnad från rasterformat (JPG, PNG) blir SVG-grafik aldrig pixlad när den skalas. Detta gör dem idealiska för logotyper, diagram, tekniska ritningar och allt innehåll som behöver visas i olika storlekar.</p>\n      <p>Förhandsgranska varje konverterad sida och ladda ner dem individuellt eller som en ZIP-fil. All bearbetning sker lokalt i din webbläsare, vilket säkerställer fullständig integritet för dina dokument.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att bläddra och välja."
      },
      {
        "step": 2,
        "title": "Konfigurera alternativ",
        "description": "Ställ in upplösningskvaliteten och ange eventuellt sidintervall."
      },
      {
        "step": 3,
        "title": "Förhandsgranska och konvertera",
        "description": "Klicka på Konvertera till process. Förhandsgranska varje sida genom att klicka på miniatyrer."
      },
      {
        "step": 4,
        "title": "Hämta",
        "description": "Hämta enskilda SVG-filer eller alla sidor som ett ZIP-arkiv."
      }
    ],
    "useCases": [
      {
        "title": "Logotyper och grafik",
        "description": "Extrahera logotyper och vektorgrafik från PDF-filer för användning i designprogramvara.",
        "icon": "pen-tool"
      },
      {
        "title": "Tekniska diagram",
        "description": "Konvertera tekniska ritningar och diagram till skalbart SVG-format.",
        "icon": "ruler"
      },
      {
        "title": "Webbutveckling",
        "description": "Skapa webbförberedda SVG-filer från PDF-innehåll för responsiva webbplatser.",
        "icon": "globe"
      },
      {
        "title": "Skriv ut i valfri storlek",
        "description": "Skapa vektorgrafik som skrivs ut perfekt i alla storlekar.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Vad är SVG-format?",
        "answer": "SVG (Scalable Vector Graphics) är ett vektorbildformat som kan skalas till valfri storlek utan att förlora kvalitet. Det används ofta för logotyper, ikoner och webbgrafik."
      },
      {
        "question": "Kommer SVG verkligen vara vektor?",
        "answer": "SVG innehåller en högupplöst rendering av PDF-sidan. För PDF-filer med vektorinnehåll får du skarpa utdata i vilken skala som helst."
      },
      {
        "question": "Kan jag förhandsgranska innan jag laddar ner?",
        "answer": "Ja! Klicka på en miniatyrbild för att se en förhandsvisning av SVG i full storlek. Du kan ladda ner enskilda sidor eller alla samtidigt."
      },
      {
        "question": "Vilken upplösning ska jag välja?",
        "answer": "Högre upplösning (216 eller 288 DPI) ger större, mer detaljerade SVG:er. Använd lägre inställningar för snabbare bearbetning och mindre filer."
      }
    ]
  },
  "pdf-to-greyscale": {
    "title": "PDF till gråskala",
    "metaDescription": "Konvertera färg PDF till gråskala. Minska filstorlek och förbered dig för svartvit utskrift.",
    "keywords": [
      "pdf till gråskala",
      "gråskala pdf",
      "svart och vit pdf",
      "ta bort färger"
    ],
    "description": "<p>PDF till gråskala konverterar PDF-dokument i färg till gråskala (svartvitt). Detta minskar filstorleken och förbereder dokument för svartvit utskrift.</p>\n      <p>Konverteringen bevarar textens klarhet och bilddetaljer samtidigt som färginformation tas bort. Perfekt för att skriva ut utkast eller skapa utskriftsvänliga versioner.</p>\n      <p>All konvertering sker i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-färgfil eller klicka för att välja."
      },
      {
        "step": 2,
        "title": "Förhandsgranska konvertering",
        "description": "Förhandsgranska hur gråskaleversionen kommer att se ut."
      },
      {
        "step": 3,
        "title": "Konvertera och ladda ner",
        "description": "Klicka på Konvertera för att skapa PDF-filen i gråskala."
      }
    ],
    "useCases": [
      {
        "title": "Skriv ut besparingar",
        "description": "Konvertera till gråskala för att spara på kostnader för färgutskrift.",
        "icon": "printer"
      },
      {
        "title": "Utkast till dokument",
        "description": "Skapa svartvita utkast för granskning.",
        "icon": "file-text"
      },
      {
        "title": "Filstorleksminskning",
        "description": "Minska PDF-storleken genom att ta bort färginformation.",
        "icon": "minimize-2"
      }
    ],
    "faq": [
      {
        "question": "Kommer texten att förbli läsbar?",
        "answer": "Ja, textens tydlighet bevaras under gråskalekonvertering."
      },
      {
        "question": "Hur mycket mindre blir filen?",
        "answer": "Filstorleksminskningen varierar men kan vara 20-50 % för färgtunga dokument."
      },
      {
        "question": "Kan jag bara konvertera specifika sidor?",
        "answer": "Ja, du kan välja vilka sidor som ska konverteras till gråskala."
      }
    ]
  },
  "pdf-to-json": {
    "title": "PDF till JSON",
    "metaDescription": "Extrahera PDF-innehåll till JSON-format. Få strukturerad data från PDF-dokument.",
    "keywords": [
      "pdf till json",
      "extrahera pdf-data",
      "pdf-tolkare",
      "strukturerad pdf-data"
    ],
    "description": "<p>PDF till JSON extraherar innehåll från PDF-dokument till ett strukturerat JSON-format. Extrahera text, metadata, sidinformation och dokumentstruktur för programmatisk användning.</p>\n      <p>Perfekt för dataextraktion, dokumentanalys eller integrering av PDF-innehåll i applikationer och arbetsflöden.</p>\n      <p>All extrahering sker i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja."
      },
      {
        "step": 2,
        "title": "Välj Data att extrahera",
        "description": "Välj vilket innehåll som ska extraheras: text, metadata, struktur."
      },
      {
        "step": 3,
        "title": "Extrahera och ladda ner",
        "description": "Klicka på Extrahera för att generera JSON och ladda ner."
      }
    ],
    "useCases": [
      {
        "title": "Dataextraktion",
        "description": "Extrahera strukturerad data från PDF-dokument.",
        "icon": "database"
      },
      {
        "title": "Dokumentanalys",
        "description": "Analysera PDF-struktur och innehåll programmatiskt.",
        "icon": "search"
      },
      {
        "title": "Integration",
        "description": "Importera PDF-innehåll till applikationer via JSON.",
        "icon": "plug"
      }
    ],
    "faq": [
      {
        "question": "Vilken data extraheras?",
        "answer": "Textinnehåll, metadata, siddimensioner, teckensnitt och dokumentstruktur."
      },
      {
        "question": "Är JSON-formatet dokumenterat?",
        "answer": "Ja, JSON-schemat är konsekvent och väldokumenterat."
      },
      {
        "question": "Kan jag extrahera från skannade PDF-filer?",
        "answer": "Skannade PDF-filer kräver OCR först. Använd vårt OCR PDF-verktyg innan extrahering."
      }
    ]
  },
  "pdf-to-pptx": {
    "title": "PDF till PowerPoint",
    "metaDescription": "Konvertera PDF till PowerPoint-presentation. Varje sida blir en bild av hög kvalitet.",
    "keywords": [
      "pdf till pptx",
      "Pdf till powerpoint",
      "konvertera pdf-bilder",
      "Presentation pdf"
    ],
    "description": "<p>PDF till PowerPoint konverterar dina PDF-dokument till redigerbara PowerPoint-presentationer (PPTX). Varje PDF-sida omvandlas till en högkvalitativ bild, vilket bevarar den visuella layouten perfekt.</p>\n      <p>Det här verktyget är idealiskt för att konvertera rapporter, åhörarkopior eller annat PDF-innehåll till presentationsformat. Du kan välja bildkvalitet (DPI) för att balansera mellan filstorlek och visuell klarhet.</p>\n      <p>All konvertering sker lokalt i din webbläsare, vilket säkerställer att dina dokument förblir privata och säkra.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja den från din enhet."
      },
      {
        "step": 2,
        "title": "Välj Kvalitetsinställningar",
        "description": "Välj bildkvalitet (DPI) för bilderna. Högre DPI betyder bättre kvalitet men större filstorlek."
      },
      {
        "step": 3,
        "title": "Konvertera och ladda ner",
        "description": "Klicka på Konvertera för att skapa din PowerPoint-presentation och ladda ner PPTX-filen."
      }
    ],
    "useCases": [
      {
        "title": "Skapande av presentationer",
        "description": "Konvertera PDF-rapporter eller dokument till presentationsbilder för möten.",
        "icon": "presentation"
      },
      {
        "title": "Utbildningsmaterial",
        "description": "Förvandla PDF-utbildningsdokument till interaktiva PowerPoint-presentationer.",
        "icon": "book-open"
      },
      {
        "title": "Återanvändning av innehåll",
        "description": "Konvertera befintligt PDF-innehåll till redigerbart bildformat för ytterligare anpassning.",
        "icon": "refresh-cw"
      }
    ],
    "faq": [
      {
        "question": "Kommer bilderna att kunna redigeras?",
        "answer": "Varje bild innehåller en högkvalitativ bild av PDF-sidan. Du kan lägga till text, former och kommentarer ovanpå i PowerPoint."
      },
      {
        "question": "Vilken DPI ska jag välja?",
        "answer": "Använd 150 DPI för presentationer som visas på skärmar. Använd 300 DPI för utskrift eller när du behöver högsta kvalitet."
      },
      {
        "question": "Kan jag konvertera flersidiga PDF-filer?",
        "answer": "Ja, varje sida i din PDF blir en separat bild i PowerPoint-presentationen."
      }
    ]
  },
  "pdf-to-excel": {
    "title": "PDF till Excel",
    "metaDescription": "Konvertera PDF till Excel-kalkylblad. Extrahera tabeller till XLSX-format.",
    "keywords": [
      "pdf till excel",
      "pdf till xlsx",
      "konvertera pdf-tabeller",
      "extrahera tabeller"
    ],
    "description": "<p>PDF till Excel konverterar dina PDF-dokument till redigerbara Microsoft Excel-kalkylblad (XLSX). Verktyget upptäcker automatiskt tabeller i din PDF och extraherar dem till separata ark.</p>\n      <p>Detta verktyg är idealiskt för att analysera finansiella rapporter, fakturor eller data som presenteras i tabeller. Varje sidas tabeller är organiserade i ark för enkel datamanipulering.</p>\n      <p>All konvertering sker lokalt i din webbläsare, vilket säkerställer att din data förblir privat och säker.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja."
      },
      {
        "step": 2,
        "title": "Behandla",
        "description": "Verktyget kommer automatiskt att identifiera och extrahera tabeller."
      },
      {
        "step": 3,
        "title": "Hämta Excel",
        "description": "Hämta din Excel-fil med extraherade tabeller."
      }
    ],
    "useCases": [
      {
        "title": "Finansiell analys",
        "description": "Konvertera kontoutdrag eller fakturor till Excel för analys.",
        "icon": "trending-up"
      },
      {
        "title": "Dataextraktion",
        "description": "Dra datatabeller från forskningsartiklar eller rapporter.",
        "icon": "database"
      },
      {
        "title": "Lagerhantering",
        "description": "Konvertera inventarier från PDF till kalkylblad.",
        "icon": "clipboard"
      }
    ],
    "faq": [
      {
        "question": "Hur hanteras tabeller?",
        "answer": "Tabeller som upptäcks på varje sida extraheras till motsvarande ark i Excel-filen."
      },
      {
        "question": "Vad händer om det inte finns några bord?",
        "answer": "Ett informationsblad kommer att skapas som visar att inga tabeller hittades."
      },
      {
        "question": "Bevaras formateringen?",
        "answer": "Data bevaras, men komplex visuell formatering kan förenklas för användning av kalkylblad."
      }
    ]
  },
  "ocr-pdf": {
    "title": "Identifiera text (OCR)",
    "metaDescription": "Gör skannade PDF-filer sökbara med OCR. Extrahera text från bilder och skannade dokument.",
    "keywords": [
      "ocr pdf",
      "sökbar pdf",
      "textigenkänning",
      "skanna till text"
    ],
    "description": "<p>OCR PDF använder optisk teckenigenkänning för att extrahera text från skannade dokument och bilder i PDF-filer. Konvertera bildbaserade PDF-filer till sökbara, valbara textdokument.</p>\n      <p>Stöd för flera språk säkerställer korrekt textigenkänning oavsett dokumentets språk. Den ursprungliga layouten bevaras samtidigt som ett sökbart textlager läggs till.</p>\n      <p>All OCR-behandling sker i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp skannad PDF",
        "description": "Dra och släpp din skannade PDF eller klicka för att välja."
      },
      {
        "step": 2,
        "title": "Välj Språk",
        "description": "Välj dokumentspråk för korrekt igenkänning."
      },
      {
        "step": 3,
        "title": "Bearbeta och ladda ner",
        "description": "Klicka på Process för att köra OCR och ladda ner den sökbara PDF-filen."
      }
    ],
    "useCases": [
      {
        "title": "Digitalisera arkiv",
        "description": "Gör skannade dokumentarkiv sökbara.",
        "icon": "archive"
      },
      {
        "title": "Dokumentsökning",
        "description": "Aktivera textsökning i skannade dokument.",
        "icon": "search"
      },
      {
        "title": "Textextraktion",
        "description": "Extrahera text från skannade dokument för redigering.",
        "icon": "type"
      }
    ],
    "faq": [
      {
        "question": "Vilka språk stöds?",
        "answer": "Över 100 språk stöds inklusive engelska, kinesiska, japanska, koreanska och mer."
      },
      {
        "question": "Kommer den ursprungliga layouten att bevaras?",
        "answer": "Ja, den ursprungliga visuella layouten bevaras med ett sökbart textlager lagt till."
      },
      {
        "question": "Hur exakt är OCR?",
        "answer": "Noggrannheten beror på skanningskvaliteten men överstiger vanligtvis 95 % för tydliga dokument."
      }
    ]
  },
  "alternate-merge": {
    "title": "Varva och sammanfoga sidor",
    "metaDescription": "Sammanfoga PDF-filer genom att växla sidor. Kombinera fram- och bakskanning till ett dokument.",
    "keywords": [
      "alternativ sammanslagning",
      "interfoliera pdf",
      "kombinera skanningar",
      "främre baksida sammanfoga"
    ],
    "description": "<p>Alternate Merge kombinerar två PDF-filer genom att interfoliera deras sidor omväxlande. Detta är perfekt för att kombinera separat skannade fram- och baksidor till ett enda dokument.</p>\n      <p>Ladda upp två PDF-filer och verktyget slår samman dem genom att ta en sida från varje växelvis. Du kan också vända om ordningen för ett dokument för bak-till-fram-skanning.</p>\n      <p>All bearbetning sker i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp två PDF-filer",
        "description": "Ladda upp förstasidorna PDF och baksidorna PDF."
      },
      {
        "step": 2,
        "title": "Konfigurera beställning",
        "description": "Välj om du vill vända det andra dokumentet för skanning bakifrån till framsidan."
      },
      {
        "step": 3,
        "title": "Sammanfoga och ladda ner",
        "description": "Klicka på Sammanfoga för att interfoliera sidor och ladda ner."
      }
    ],
    "useCases": [
      {
        "title": "Duplexskanning",
        "description": "Kombinera separat skannade fram- och baksidor.",
        "icon": "copy"
      },
      {
        "title": "Dokumentmontering",
        "description": "Interfoliera sidor från två relaterade dokument.",
        "icon": "layers"
      },
      {
        "title": "Bokskanning",
        "description": "Kombinera skanningar på udda och jämna sidor till kompletta böcker.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "Vad händer om dokument har olika sidantal?",
        "answer": "Extra sidor från det längre dokumentet läggs till i slutet."
      },
      {
        "question": "Kan jag vända sidordningen?",
        "answer": "Ja, du kan vända båda dokumenten innan du slår samman."
      },
      {
        "question": "Skiljer sig detta från vanlig sammanslagning?",
        "answer": "Ja, vanlig sammanfogning lägger till dokument; alternativa sammanfogade interfolieringssidor."
      }
    ]
  },
  "add-attachments": {
    "title": "Bifoga filer",
    "metaDescription": "Bädda in filer i PDF-dokument. Bifoga valfri filtyp till dina PDF-filer.",
    "keywords": [
      "pdf bilagor",
      "bädda in filer",
      "bifoga till pdf",
      "pdf-portfölj"
    ],
    "description": "<p>Add Attachments bäddar in alla typer av filer i dina PDF-dokument. Bifoga kalkylblad, bilder, källfiler eller andra dokument för att skapa omfattande PDF-paket.</p>\n      <p>Bilagor är inbäddade i PDF:en och kan extraheras av mottagarna med vilken PDF-läsare som helst. Perfekt för att distribuera relaterade filer tillsammans.</p>\n      <p>All bearbetning sker i din webbläsare, vilket säkerställer att dina filer förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja."
      },
      {
        "step": 2,
        "title": "Lägg till bilagor",
        "description": "Välj filer att bifoga till PDF-filen."
      },
      {
        "step": 3,
        "title": "Spara och ladda ner",
        "description": "Klicka på Spara för att bädda in bilagor och ladda ner."
      }
    ],
    "useCases": [
      {
        "title": "Projektpaket",
        "description": "Bunta projektfiler med PDF-dokumentation.",
        "icon": "package"
      },
      {
        "title": "Rapportfördelning",
        "description": "Bifoga källdatafiler för att rapportera PDF-filer.",
        "icon": "paperclip"
      },
      {
        "title": "Kontraktspaket",
        "description": "Inkludera stöddokument med kontrakt.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "Vilka filtyper kan bifogas?",
        "answer": "Alla filtyper kan bifogas till en PDF."
      },
      {
        "question": "Finns det en storleksgräns?",
        "answer": "Den totala PDF-storleken inklusive bilagor bör inte överstiga 500 MB."
      },
      {
        "question": "Kan mottagare extrahera bilagor?",
        "answer": "Ja, alla PDF-läsare kan extrahera inbäddade bilagor."
      }
    ]
  },
  "extract-attachments": {
    "title": "Extrahera bifogade filer",
    "metaDescription": "Extrahera inbäddade filer från PDF-filer. Hämta alla bilagor från PDF-dokument.",
    "keywords": [
      "extrahera bilagor",
      "pdf bilagor",
      "ladda ner inbäddade filer",
      "pdf-extraktion"
    ],
    "description": "<p>Extrahera bilagor hämtar alla inbäddade filer från PDF-dokument. Hämta bilagor individuellt eller som ett ZIP-arkiv som innehåller alla filer.</p>\n      <p>Perfekt för åtkomst till källfiler, data eller tilläggsmaterial inbäddat i PDF-paket.</p>\n      <p>All extrahering sker i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja."
      },
      {
        "step": 2,
        "title": "Visa bilagor",
        "description": "Se en lista över alla inbäddade filer i PDF:en."
      },
      {
        "step": 3,
        "title": "Extrahera och ladda ner",
        "description": "Hämta enskilda filer eller alla som ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Få åtkomst till källfiler",
        "description": "Extrahera originaldatafiler från PDF-rapporter.",
        "icon": "download"
      },
      {
        "title": "Återställ bilagor",
        "description": "Hämta inbäddade filer från PDF-paket.",
        "icon": "folder-open"
      },
      {
        "title": "Batchextraktion",
        "description": "Extrahera bilagor från flera PDF-filer samtidigt.",
        "icon": "layers"
      }
    ],
    "faq": [
      {
        "question": "Vad händer om det inte finns några bilagor?",
        "answer": "Verktyget kommer att indikera om inga inbäddade filer hittas."
      },
      {
        "question": "Stöds alla typer av bilagor?",
        "answer": "Ja, alla inbäddade filtyper kan extraheras."
      },
      {
        "question": "Kan jag extrahera från flera PDF-filer?",
        "answer": "Ja, du kan bearbeta flera PDF-filer och ladda ner alla bilagor."
      }
    ]
  },
  "extract-images": {
    "title": "Extrahera bilder ur PDF",
    "metaDescription": "Extrahera alla inbäddade bilder från PDF-filer. Hämta individuellt eller som ett ZIP-arkiv. Filtrera små bilder automatiskt.",
    "keywords": [
      "extrahera pdf-bilder",
      "Utvinning av pdf-bilder",
      "hämta bilder från pdf",
      "ladda ner pdf-bilder",
      "pdf till bilder"
    ],
    "description": "<p>Extrahera bilder från PDF hämtar alla inbäddade bilder från dina PDF-dokument. Hämta högkvalitativa bilder individuellt eller som ett bekvämt ZIP-arkiv.</p>\n      <p>Verktyget filtrerar automatiskt bort små bilder som ikoner och dekorationer baserat på anpassningsbara storlekströsklar. Bearbeta flera PDF-filer samtidigt för effektiv batchextraktion.</p>\n      <p>All extrahering sker i din webbläsare, vilket säkerställer att dina dokument förblir privata och säkra.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp dina PDF-filer",
        "description": "Dra och släpp en eller flera PDF-filer eller klicka för att välja från din enhet."
      },
      {
        "step": 2,
        "title": "Ställ in filteralternativ",
        "description": "Justera minsta bredd, höjd och filstorlek för att filtrera bort oönskade små bilder."
      },
      {
        "step": 3,
        "title": "Extrahera bilder",
        "description": "Klicka på Extrahera för att hitta alla inbäddade bilder i dina PDF-filer."
      },
      {
        "step": 4,
        "title": "Hämta",
        "description": "Hämta enskilda bilder eller alla bilder som ett ZIP-arkiv."
      }
    ],
    "useCases": [
      {
        "title": "Fotoåterställning",
        "description": "Extrahera foton och bilder inbäddade i PDF-dokument för återanvändning eller arkivering.",
        "icon": "image"
      },
      {
        "title": "Insamling av tillgångar",
        "description": "Samla all grafik och bilder från PDF-rapporter, presentationer eller broschyrer.",
        "icon": "folder"
      },
      {
        "title": "Återanvändning av innehåll",
        "description": "Extrahera bilder från PDF-filer för att använda i andra dokument, webbplatser eller presentationer.",
        "icon": "refresh-cw"
      }
    ],
    "faq": [
      {
        "question": "Vilka bildformat extraheras?",
        "answer": "Bilder extraheras i sitt ursprungliga format (JPEG, PNG, etc.) när det är möjligt, eller konverteras till PNG för rå bilddata."
      },
      {
        "question": "Varför saknas några bilder?",
        "answer": "Små bilder under storleksgränsen filtreras bort. Justera filterinställningarna för att extrahera mindre bilder."
      },
      {
        "question": "Kan jag extrahera från skannade PDF-filer?",
        "answer": "Skannade PDF-filer innehåller vanligtvis skanningen som en stor bild per sida. Använd verktyget PDF till bild istället för sida-för-sida-konvertering."
      }
    ]
  },
  "edit-attachments": {
    "title": "Redigera bifogade filer",
    "metaDescription": "Hantera PDF-bilagor. Visa, byt namn på och ta bort inbäddade filer.",
    "keywords": [
      "redigera bilagor",
      "hantera pdf-filer",
      "ta bort bilagor",
      "byta namn på bilagor"
    ],
    "description": "<p>Edit bilagor låter dig hantera inbäddade filer i PDF-dokument. Visa alla bilagor, byt namn på dem eller ta bort oönskade filer från PDF.</p>\n      <p>Perfekt för att rensa upp PDF-paket eller uppdatera bilagainformation innan distribution.</p>\n      <p>All redigering sker i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja."
      },
      {
        "step": 2,
        "title": "Hantera bilagor",
        "description": "Visa, byt namn på eller ta bort inbäddade filer."
      },
      {
        "step": 3,
        "title": "Spara och ladda ner",
        "description": "Klicka på Spara för att tillämpa ändringar och ladda ner."
      }
    ],
    "useCases": [
      {
        "title": "Rensa upp PDF-filer",
        "description": "Ta bort onödiga bilagor från PDF-paket.",
        "icon": "trash-2"
      },
      {
        "title": "Byt namn på filer",
        "description": "Uppdatera bilagornas namn för tydlighetens skull.",
        "icon": "edit"
      },
      {
        "title": "Granska innehållet",
        "description": "Granska inbäddade filer före distribution.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "Kan jag lägga till nya bilagor här?",
        "answer": "Använd verktyget Lägg till bilagor för att bädda in nya filer."
      },
      {
        "question": "Är borttagning permanent?",
        "answer": "Ja, borttagna bilagor kan inte återställas från utdatafilen."
      },
      {
        "question": "Kan jag förhandsgranska bilagor?",
        "answer": "Du kan se filnamn och storlekar; använd Extrahera bilagor för att se innehållet."
      }
    ]
  },
  "divide-pages": {
    "title": "Dela sidor",
    "metaDescription": "Dela upp PDF-sidor i flera avsnitt. Dela sidorna horisontellt eller vertikalt.",
    "keywords": [
      "dela pdf-sidor",
      "delad sida",
      "klippa pdf-sida",
      "sidavsnitt"
    ],
    "description": "<p>Divide Pages delar upp enskilda PDF-sidor i flera avsnitt. Klipp sidor horisontellt, vertikalt eller i ett rutnät för att skapa flera sidor från en.</p>\n      <p>Perfekt för att dela upp skannade dokument med flera objekt per sida, eller dela upp sidor i storformat i standardstorlekar.</p>\n      <p>All bearbetning sker i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja."
      },
      {
        "step": 2,
        "title": "Ställ in division",
        "description": "Välj horisontell, vertikal eller rutnätsindelning och ställ in antalet sektioner."
      },
      {
        "step": 3,
        "title": "Dela och ladda ner",
        "description": "Klicka på Dela för att dela sidor och ladda ner."
      }
    ],
    "useCases": [
      {
        "title": "Dela skanningar",
        "description": "Dela skannade sidor som innehåller flera dokument.",
        "icon": "scissors"
      },
      {
        "title": "Ändra storlek på sidor",
        "description": "Dela upp stora sidor i standardpappersstorlekar.",
        "icon": "maximize-2"
      },
      {
        "title": "Skapa kort",
        "description": "Dela upp sidorna i kortstorlekar för utskrift.",
        "icon": "grid"
      }
    ],
    "faq": [
      {
        "question": "Kan jag dela upp i ojämlika delar?",
        "answer": "För närvarande är divisionerna lika. Använd Beskär PDF för anpassade avsnitt."
      },
      {
        "question": "Vad händer med innehåll vid indelningsrader?",
        "answer": "Innehållet delas vid delningslinjen; se till att viktigt innehåll inte är på gränsen."
      },
      {
        "question": "Kan jag bara dela upp specifika sidor?",
        "answer": "Ja, du kan välja vilka sidor som ska delas upp."
      }
    ]
  },
  "add-blank-page": {
    "title": "Infoga tom sida",
    "metaDescription": "Infoga tomma sidor i PDF-dokument. Lägg till tomma sidor på valfri plats.",
    "keywords": [
      "lägg till tom sida",
      "infoga sida",
      "tom sida",
      "PDF-sida infogning"
    ],
    "description": "<p>Lägg till tom sida infogar tomma sidor i dina PDF-dokument var som helst. Lägg till sidor före, efter eller mellan befintliga sidor med anpassningsbar sidstorlek.</p>\n      <p>Perfekt för att lägga till utrymme för anteckningar, skapa sektionsavdelare eller förbereda dokument för utskrift.</p>\n      <p>All bearbetning sker i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja."
      },
      {
        "step": 2,
        "title": "Välj Position",
        "description": "Välj var du vill infoga tomma sidor och hur många."
      },
      {
        "step": 3,
        "title": "Lägg till och ladda ner",
        "description": "Klicka på Lägg till för att infoga sidor och ladda ner."
      }
    ],
    "useCases": [
      {
        "title": "Notera Mellanslag",
        "description": "Lägg till tomma sidor för handskrivna anteckningar.",
        "icon": "edit-3"
      },
      {
        "title": "Sektionsavdelare",
        "description": "Infoga tomma sidor mellan dokumentsektioner.",
        "icon": "minus"
      },
      {
        "title": "Utskriftsförberedelse",
        "description": "Lägg till sidor för justering av dubbelsidig utskrift.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Kan jag välja sidstorlek?",
        "answer": "Ja, tomma sidor kan matcha befintliga sidor eller använda anpassade mått."
      },
      {
        "question": "Kan jag lägga till flera tomma sidor?",
        "answer": "Ja, du kan lägga till valfritt antal tomma sidor samtidigt."
      },
      {
        "question": "Kan jag lägga till färgade sidor?",
        "answer": "Använd verktyget Bakgrundsfärg när du har lagt till tomma sidor för att lägga till färg."
      }
    ]
  },
  "reverse-pages": {
    "title": "Omvänd sidordning",
    "metaDescription": "Omvänd PDF-sidordning. Vänd dokumentsidorna från sista till första.",
    "keywords": [
      "omvänd pdf",
      "bläddringsordning",
      "invertera sidor",
      "omvänd dokument"
    ],
    "description": "<p>Reverse Pages vänder ordningen på sidorna i ditt PDF-dokument, och placerar den sista sidan först och den första sidan sist. Användbar för dokument som skannas i omvänd ordning eller för specifika utskriftsbehov.</p>\n      <p>Verktyget bearbetar hela dokumentet eller valda sidintervall och bibehåller allt innehåll och formatering.</p>\n      <p>All bearbetning sker i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja."
      },
      {
        "step": 2,
        "title": "Välj Sidor",
        "description": "Välj att vända alla sidor eller ett specifikt intervall."
      },
      {
        "step": 3,
        "title": "Omvänd och ladda ner",
        "description": "Klicka på Omvänd för att vända sidordningen och ladda ner."
      }
    ],
    "useCases": [
      {
        "title": "Fixa skanningsorder",
        "description": "Korrigera dokument som skannats i omvänd ordning.",
        "icon": "refresh-cw"
      },
      {
        "title": "Utskriftsförberedelse",
        "description": "Omvända sidor för specifika utskriftskrav.",
        "icon": "printer"
      },
      {
        "title": "Omordning av dokument",
        "description": "Vänd snabbt dokumentorder för granskning.",
        "icon": "arrow-up-down"
      }
    ],
    "faq": [
      {
        "question": "Är bokmärken uppdaterade?",
        "answer": "Ja, bokmärken uppdateras för att peka på de korrekta omvända sidorna."
      },
      {
        "question": "Kan jag vända bara vissa sidor?",
        "answer": "Ja, du kan välja ett sidintervall att vända om."
      },
      {
        "question": "Är detta samma sak som att rotera?",
        "answer": "Nej, vändning ändrar sidordning; rotering ändrar sidorientering."
      }
    ]
  },
  "rotate-pdf": {
    "title": "Rotera PDF",
    "metaDescription": "Rotera PDF-sidor. Vänd sidorna 90, 180 eller 270 grader.",
    "keywords": [
      "rotera pdf",
      "vända pdf-sidor",
      "pdf-rotation",
      "fixa orientering"
    ],
    "description": "<p>Rotera PDF vänder sidor i ditt dokument 90, 180 eller 270 grader. Åtgärda felaktigt orienterade skanningar, rotera liggande sidor eller justera sidorienteringen för visning.</p>\n      <p>Rotera alla sidor enhetligt eller välj specifika sidor att rotera individuellt. Verktyget bevarar allt innehåll och formatering.</p>\n      <p>All bearbetning sker i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja."
      },
      {
        "step": 2,
        "title": "Välj Rotation",
        "description": "Välj rotationsvinkel och vilka sidor som ska roteras."
      },
      {
        "step": 3,
        "title": "Rotera och ladda ner",
        "description": "Klicka på Rotera för att tillämpa ändringar och ladda ner."
      }
    ],
    "useCases": [
      {
        "title": "Fixa skanningar",
        "description": "Korrekt orientering av skannade dokument.",
        "icon": "rotate-cw"
      },
      {
        "title": "Landskapssidor",
        "description": "Rotera liggande sidor för korrekt visning.",
        "icon": "monitor"
      },
      {
        "title": "Blandad orientering",
        "description": "Standardisera sidorienteringen i blandade dokument.",
        "icon": "layout"
      }
    ],
    "faq": [
      {
        "question": "Kan jag rotera olika sidor olika?",
        "answer": "Ja, du kan använda olika rotationer på olika sidor."
      },
      {
        "question": "Påverkar rotation utskriftskvaliteten?",
        "answer": "Nej, rotation bevarar all innehållskvalitet."
      },
      {
        "question": "Kan jag rotera med anpassade vinklar?",
        "answer": "Rotationen är begränsad till 90-graderssteg (90, 180, 270)."
      }
    ]
  },
  "overlay-pdf": {
    "title": "Överlagra PDF",
    "metaDescription": "Överlägg eller underlägg sidor från en PDF till en annan. Perfekt för frimärken, brevhuvuden och layoutkomposition.",
    "keywords": [
      "överlägg pdf",
      "underlägg pdf",
      "stämpel pdf",
      "vattenstämpel pdf",
      "kombinera lager"
    ],
    "description": "<p>Overlay PDF låter dig lägga sidor i ett PDF-dokument ovanpå eller under ett annat PDF-dokument. Den är perfekt för att applicera brevhuvuden, lägga till bakgrundsrutnät, stämpla vattenstämplar eller smälta samman layoututkast.</p>\n      <p> Stöder både överläggsläge (lager går överst) och underläggsläge (lager går under). Ange anpassade målsidaintervall eller loopa kortare överlagringsdokument för att täcka hela basfilen automatiskt.</p>\n      <p>All bearbetning utförs helt och hållet i din webbläsare lokalt, vilket garanterar total säkerhet och datasekretess.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp huvud-PDF",
        "description": "Dra och släpp ditt primära PDF-basdokument."
      },
      {
        "step": 2,
        "title": "Ladda upp PDF-lager",
        "description": "Ange överläggs-/underläggsdokumentet som fungerar som lagret."
      },
      {
        "step": 3,
        "title": "Konfigurera skiktning",
        "description": "Välj överläggs- eller underläggsläge, ange sidintervall och aktivera sidslinga."
      },
      {
        "step": 4,
        "title": "Kompilera och ladda ner",
        "description": "Klicka på Kompilera för att bearbeta och ladda ned den skiktade resultat-PDF-filen."
      }
    ],
    "useCases": [
      {
        "title": "Företagsbrevpapper",
        "description": "Lägg fakturainnehållet i lager ovanpå standardmallar för företagets brevpapper.",
        "icon": "file-text"
      },
      {
        "title": "Vattenstämplar och sigill",
        "description": "Lägg över säkerhetsstämplar, signaturförseglingar eller bakgrunder över dokument.",
        "icon": "shield"
      },
      {
        "title": "Rita ritningar",
        "description": "Kombinera utkast till arkitekturer eller layoutrutnät under textblock.",
        "icon": "layout"
      }
    ],
    "faq": [
      {
        "question": "Vad är skillnaden mellan Overlay och Underlay?",
        "answer": "Överlagring placerar det sekundära lagret ovanpå ditt huvudinnehåll. Underlag placerar det längst ner och fungerar som en bakgrundsmall."
      },
      {
        "question": "Kan jag loopa överläggslagret?",
        "answer": "Ja, om lager-PDF-filen är kortare än basdokumentet, aktiveras Loop för att växla den (t.ex. sida 1, 2, 1, 2) för att täcka alla bassidor."
      },
      {
        "question": "Stöds sidintervallet?",
        "answer": "Ja, du kan rikta in dig på specifika sidor med hjälp av intervallsyntax som \"1-5\", \"udda\", \"jämn\" eller kommaseparerade listor."
      }
    ]
  },
  "timestamp-pdf": {
    "title": "Tidsstämpla PDF",
    "metaDescription": "Lägg till RFC 3161 betrodda tidsstämplar till PDF-dokument. Bevisa dokument existens vid en specifik tidpunkt utan certifikat.",
    "keywords": [
      "tidsstämpel pdf",
      "rfc 3161",
      "tsa server",
      "pålitlig tidsstämpling",
      "bevis på existens"
    ],
    "description": "<p>Timestamp PDF lägger till RFC 3161-kompatibla betrodda tidsstämplar till dina PDF-dokument med hjälp av externa tidsstämplingsmyndigheter (TSA). Det ger juridiskt bindande matematiska bevis för att ett dokument existerade i ett specifikt, oförändrat tillstånd vid ett exakt ögonblick i tiden.</p>\n      <p>Välj från globala betrodda TSA-servrar som DigiCert, Sectigo, SSL.com, FreeTSA eller MeSign. Inga personliga signeringscertifikat krävs för att säkra dina dokument mot framtida manipulering.</p>\n      <p> Stöder helt säker lokal hashning före handskakning, vilket garanterar att absolut dokumentinnehåll förblir 100 % konfidentiellt.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp PDF-dokument",
        "description": "Välj mål-PDF-filen som du vill tidsstämpla."
      },
      {
        "step": 2,
        "title": "Välj TSA Server",
        "description": "Välj en pålitlig global tidsstämplingsmyndighet från listan."
      },
      {
        "step": 3,
        "title": "Ansök och tidsstämpel",
        "description": "Klicka på Tidsstämpel för att hämta säkert svar från TSA och bädda in token."
      }
    ],
    "useCases": [
      {
        "title": "Immateriella rättigheter",
        "description": "Upprätta tydliga prioriterade bevis för patent, utkast och idéer innan offentliggörandet.",
        "icon": "lightbulb"
      },
      {
        "title": "Finansiell revision",
        "description": "Tillhandahålla certifierad manipuleringssäker loggning av reskontraarkiv och balansrapporter.",
        "icon": "activity"
      },
      {
        "title": "Juridiska kontrakt",
        "description": "Lås juridiska avtal med ett pålitligt tidsbevis för att undvika bakåtdateringsargument.",
        "icon": "file-check"
      }
    ],
    "faq": [
      {
        "question": "Vad är en betrodd tidsstämpel (RFC 3161)?",
        "answer": "En RFC 3161-tidsstämpel är en kryptografiskt signerad token utfärdad av en erkänd tredjepartsmyndighet (TSA) som länkar en dokumenthash till en specifik, verifierad klockkälla."
      },
      {
        "question": "Behöver jag ett digitalt certifikat?",
        "answer": "Nej, den kryptografiska signaturen tillhandahålls direkt av den betrodda TSA-servern, vilket gör processen enkel för dokumentägare."
      },
      {
        "question": "Ser TSA mitt dokumentinnehåll?",
        "answer": "Aldrig. Verktyget skickar bara en säker SHA-256-hash av ditt dokument till TSA-servern, vilket håller ditt faktiska dokument helt privat."
      }
    ]
  },
  "add-page-labels": {
    "title": "Sidnumrering och etiketter",
    "metaDescription": "Använd anpassade sidetiketter på din PDF-katalog. Stöder romerska siffror, prefix och komplexa disjunkta intervall.",
    "keywords": [
      "Etiketter för pdf-sidor",
      "Romerska siffror pdf",
      "Etiketter med pdf-prefix",
      "sidetiketter för osammanhängande intervall",
      "pdf indexering"
    ],
    "description": "<p>Lägg till sidetiketter låter dig injicera anpassad sidetikettsmetadata (/PageLabels) i din PDF:s rotkatalogordbok. Detta anpassar etiketterna som visas i navigeringssidofälten för professionella PDF-läsare och hopppaneler för översta sidnummer (t.ex. använder romerska siffror för framsidan, decimalsekvenser för huvuddelen eller anpassade prefix som A-0, A-1 för tekniska underavsnitt).</p>\n      <p> Stöder att kombinera flera anpassade regler sömlöst. Det avgörande är att vi har byggt en mycket optimerad <strong> algoritm för uppdelning av osammanhängande intervall</strong>: även om du deklarerar komplexa alternerande mönster (t.ex. udda sidor stil A, jämna sidor stil B), kommer verktyget elegant att dissekera och komponera gränser för att säkerställa korrekt standardkompatibla sidformat som visas utan att </p> läcker ut.\n      <p>Alla operationer bearbetas helt i din lokala webbläsarsandlåda, vilket säkerställer absolut datasekretess.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp PDF-dokument",
        "description": "Ange mål-PDF-dokumentet som du vill märka."
      },
      {
        "step": 2,
        "title": "Konfigurera märkningsregler",
        "description": "Lägg till en eller flera regler som anger sidintervall (t.ex. \"1-5\", \"udda\" eller kommaseparerade listor), prefix, stil och startsekvens."
      },
      {
        "step": 3,
        "title": "Förhandsgranska och ladda ner",
        "description": "Granska förhandsgranskningen av live sidetikettlistan nedan, kompilera och ladda ner ditt uppdaterade PDF-dokument."
      }
    ],
    "useCases": [
      {
        "title": "Formatering av akademisk avhandling",
        "description": "Ställ in gemener romerska siffror (i, ii, iii) för inledande framsida och övergång till decimal för huvudkapitel.",
        "icon": "book"
      },
      {
        "title": "Engineering Blueprint-prefix",
        "description": "Bifoga undersystemförkortningar (t.ex. \"A-1\", \"M-5\") som sidetikettsprefix, så att team kan söka och lokalisera sidor på några sekunder.",
        "icon": "layout"
      },
      {
        "title": "Anpassade alternerande layouter",
        "description": "Tillämpa mycket specifik sidintervallsindexering på udda/jämna sekvenser eller icke sammanhängande avsnitt med maximal frihet.",
        "icon": "shuffle"
      }
    ],
    "faq": [
      {
        "question": "Vad är sidetiketter kontra sidnummer?",
        "answer": "Vanliga sidnummer är visuella textblock som återges direkt på pappersduken (synliga vid utskrift). Sidetiketter är emellertid strukturella metadata som injiceras i PDF-katalogen. De styr vad som visas under miniatyrer och i sidsökningsrutan i programvara som Adobe Acrobat eller Apple Preview."
      },
      {
        "question": "Vad händer om jag lämnar sidintervallet tomt?",
        "answer": "Att lämna sidintervallet tomt gör att regeln tillämpas globalt på alla sidor i dokumentet."
      },
      {
        "question": "Hur hanteras överlappande regler?",
        "answer": "Regler utvärderas sekventiellt i den ordning de listas. Om ett sidintervall för en senare regel överlappar en tidigare, har den senare regeln prioritet och åsidosätter etiketten för den sidan."
      }
    ]
  },
  "n-up-pdf": {
    "title": "Flera sidor per ark (N-Up)",
    "metaDescription": "Skriv ut flera PDF-sidor per ark. Skapa 2-up, 4-up eller anpassade layouter.",
    "keywords": [
      "n-upp pdf",
      "flera sidor per ark",
      "2-up utskrift",
      "sidpåläggning"
    ],
    "description": "<p>N-Up PDF ordnar flera sidor på enstaka ark och skapar 2-upp, 4-upp, 6-upp, 9-up eller anpassade layouter. Perfekt för att spara papper när du skriver ut eller skapar åhörarkopior.</p>\n      <p>Välj bland förinställda layouter eller skapa anpassade arrangemang. Verktyget skalar och positionerar automatiskt sidor för optimala resultat.</p>\n      <p>All bearbetning sker i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja."
      },
      {
        "step": 2,
        "title": "Välj Layout",
        "description": "Välj 2-upp, 4-up, 6-up, 9-up eller anpassat rutnät."
      },
      {
        "step": 3,
        "title": "Skapa och ladda ner",
        "description": "Klicka på Skapa för att generera n-up PDF-filen och ladda ner."
      }
    ],
    "useCases": [
      {
        "title": "Spara papper",
        "description": "Skriv ut flera sidor per ark för att minska pappersanvändningen.",
        "icon": "leaf"
      },
      {
        "title": "Skapa åhörarkopior",
        "description": "Gör kompakta åhörarkopior från presentationsbilder.",
        "icon": "file-text"
      },
      {
        "title": "Granska dokument",
        "description": "Skriv ut dokument i förminskad storlek för granskning.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "Vilka layouter finns tillgängliga?",
        "answer": "2-up, 4-up, 6-up, 9-up och anpassade rutnätslayouter är tillgängliga."
      },
      {
        "question": "Kan jag lägga till kanter mellan sidor?",
        "answer": "Ja, du kan lägga till kanter och rännor mellan sidorna."
      },
      {
        "question": "Bevaras sidordningen?",
        "answer": "Ja, sidorna är ordnade i läsordning (vänster till höger, uppifrån och ner)."
      }
    ]
  },
  "combine-single-page": {
    "title": "Kombinera till en sida",
    "metaDescription": "Sammanfoga PDF-sidor till en sammanhängande sida. Skapa rullningsbara ensidiga dokument.",
    "keywords": [
      "kombinera sidor",
      "en sida pdf",
      "sy sidor",
      "kontinuerlig rullning"
    ],
    "description": "<p>Combine to Single Page sammanfogar alla PDF-sidor till en sammanhängande sida. Skapa rullningsbara dokument perfekta för webbvisning eller kontinuerlig läsning.</p>\n      <p> Sidor sammanfogas vertikalt med anpassningsbart avstånd. Resultatet är en enda lång sida som innehåller allt innehåll.</p>\n      <p>All bearbetning sker i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja."
      },
      {
        "step": 2,
        "title": "Ställ in avstånd",
        "description": "Välj mellanrummet mellan sammanfogade sidor."
      },
      {
        "step": 3,
        "title": "Kombinera och ladda ner",
        "description": "Klicka på Kombinera för att skapa en ensidig PDF."
      }
    ],
    "useCases": [
      {
        "title": "Webbdokument",
        "description": "Skapa rullningsbara PDF-filer för webbinbäddning.",
        "icon": "globe"
      },
      {
        "title": "Kontinuerlig läsning",
        "description": "Konvertera sidnumrerade dokument till kontinuerlig rullning.",
        "icon": "scroll"
      },
      {
        "title": "Långformigt innehåll",
        "description": "Kombinera sidor för sömlös långformsläsning.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "Finns det en sidgräns?",
        "answer": "Mycket långa dokument kan begränsas av webbläsarens minne."
      },
      {
        "question": "Kan jag lägga till avgränsare mellan sidor?",
        "answer": "Ja, du kan lägga till mellanrum eller rader mellan originalsidorna."
      },
      {
        "question": "Kommer detta att fungera för utskrift?",
        "answer": "Resultatet är bäst för skärmvisning; använd N-Up för utskriftslayouter."
      }
    ]
  },
  "view-metadata": {
    "title": "Visa metadata",
    "metaDescription": "Visa PDF-dokumentegenskaper. Se författare, titel, datum och annan metadata.",
    "keywords": [
      "pdf metadata",
      "dokumentegenskaper",
      "pdf info",
      "se pdf-detaljer"
    ],
    "description": "<p>View Metadata visar alla dokumentegenskaper och metadata från dina PDF-filer. Se författare, titel, ämne, nyckelord, skapandedatum, ändringsdatum och mer.</p>\n      <p>Användbart för att granska dokument, kontrollera filinformation eller verifiera dokumentets äkthet.</p>\n      <p>All visning sker i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja."
      },
      {
        "step": 2,
        "title": "Visa egenskaper",
        "description": "Se alla metadata som visas i ett organiserat format."
      },
      {
        "step": 3,
        "title": "Exportera om det behövs",
        "description": "Exportera eventuellt metadata som JSON."
      }
    ],
    "useCases": [
      {
        "title": "Dokumentrevision",
        "description": "Granska dokumentegenskaper för efterlevnad.",
        "icon": "clipboard-check"
      },
      {
        "title": "Verifiera äktheten",
        "description": "Kontrollera skapandedatum och författareinformation.",
        "icon": "shield"
      },
      {
        "title": "Filinformation",
        "description": "Få detaljerad information om PDF-filer.",
        "icon": "info"
      }
    ],
    "faq": [
      {
        "question": "Vilken metadata visas?",
        "answer": "Titel, författare, ämne, nyckelord, skapare, producent, datum och PDF-version."
      },
      {
        "question": "Kan jag redigera metadata här?",
        "answer": "Använd verktyget Redigera metadata för att ändra dokumentegenskaper."
      },
      {
        "question": "Ingår XMP-metadata?",
        "answer": "Ja, både standard- och XMP-metadata visas."
      }
    ]
  },
  "edit-metadata": {
    "title": "Redigera metadata",
    "metaDescription": "Redigera PDF-dokumentegenskaper. Ändra titel, författare, ämne, nyckelord, skapelsedatum och ändringsdatum.",
    "keywords": [
      "redigera pdf-metadata",
      "ändra pdf-egenskaper",
      "pdf författare",
      "dokumentinformation",
      "Datum för att skapa pdf",
      "ändringsdatum för pdf"
    ],
    "description": "<p>Edit Metadata låter dig ändra dokumentegenskaper i dina PDF-filer. Ändra titel, författare, ämne, nyckelord, skapare, producent och dokumentdatum.</p>\n      <p>Du kan ställa in anpassade datum för skapande och ändring, perfekt för att korrigera dokumentinformation, lägga till korrekt attribution eller förbereda filer för distribution.</p>\n      <p>All redigering sker i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja."
      },
      {
        "step": 2,
        "title": "Redigera egenskaper och datum",
        "description": "Ändra titel, författare, ämne, nyckelord, skapelsedatum, ändringsdatum och andra fält."
      },
      {
        "step": 3,
        "title": "Spara och ladda ner",
        "description": "Klicka på Spara för att tillämpa ändringar och ladda ner den uppdaterade PDF-filen."
      }
    ],
    "useCases": [
      {
        "title": "Lägg till attribution",
        "description": "Ange korrekt information om författare och skapare.",
        "icon": "user"
      },
      {
        "title": "SEO-optimering",
        "description": "Lägg till nyckelord och beskrivningar för sökbarhet.",
        "icon": "search"
      },
      {
        "title": "Korrekt dokumentdatum",
        "description": "Fixa skapande eller ändringsdatum för korrekta uppgifter.",
        "icon": "calendar"
      },
      {
        "title": "Dokumentförberedelse",
        "description": "Förbered dokument med korrekt metadata innan du delar.",
        "icon": "file-check"
      }
    ],
    "faq": [
      {
        "question": "Vilka fält kan jag redigera?",
        "answer": "Titel, författare, ämne, nyckelord, skapare, producent, skapandedatum och ändringsdatum."
      },
      {
        "question": "Kan jag rensa all metadata?",
        "answer": "Använd verktyget Ta bort metadata för att ta bort alla dokumentegenskaper."
      },
      {
        "question": "Går det att redigera datum?",
        "answer": "Ja! Du kan ställa in anpassade datum för skapande och ändring med hjälp av datumväljarfälten. Om du lämnar ändringsdatumet tomt kommer det att automatiskt uppdateras till aktuell tid när du sparar."
      }
    ]
  },
  "pdf-to-zip": {
    "title": "PDF till ZIP",
    "metaDescription": "Paketera flera PDF-filer i ett ZIP-arkiv. Komprimera och bunta PDF-filer.",
    "keywords": [
      "pdf till zip",
      "komprimera pdf-filer",
      "paketera pdf-filer",
      "arkiv pdf"
    ],
    "description": "<p>PDF till ZIP paketerar flera PDF-filer till ett enda ZIP-arkiv. Komprimera och bunta ihop dina PDF-filer för enklare delning, lagring eller säkerhetskopiering.</p>\n      <p>Verktyget skapar ett komprimerat arkiv som innehåller alla dina PDF-filer, vilket minskar den totala storleken och förenklar filhanteringen.</p>\n      <p>All bearbetning sker i din webbläsare, vilket säkerställer att dina filer förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp PDF-filer",
        "description": "Dra och släpp flera PDF-filer eller klicka för att välja."
      },
      {
        "step": 2,
        "title": "Konfigurera arkiv",
        "description": "Valfritt ställ in arkivnamn och komprimeringsnivå."
      },
      {
        "step": 3,
        "title": "Skapa och ladda ner",
        "description": "Klicka på Skapa för att skapa ZIP-arkivet."
      }
    ],
    "useCases": [
      {
        "title": "Fildelning",
        "description": "Bunta flera PDF-filer för enklare delning.",
        "icon": "share-2"
      },
      {
        "title": "Skapa säkerhetskopiering",
        "description": "Skapa komprimerade säkerhetskopior av PDF-samlingar.",
        "icon": "archive"
      },
      {
        "title": "E-postbilagor",
        "description": "Sammanfoga PDF-filer till en bilaga för e-post.",
        "icon": "mail"
      }
    ],
    "faq": [
      {
        "question": "Hur mycket kompression appliceras?",
        "answer": "ZIP-komprimering minskar vanligtvis den totala storleken med 10-30 %."
      },
      {
        "question": "Finns det en filgräns?",
        "answer": "Du kan inkludera upp till 100 PDF-filer i ett enda arkiv."
      },
      {
        "question": "Kan jag ställa in ett lösenord?",
        "answer": "Lösenordsskyddat ZIP-skapande stöds för närvarande inte."
      }
    ]
  },
  "compare-pdfs": {
    "title": "Jämför PDF-filer",
    "metaDescription": "Jämför två PDF-dokument. Markera skillnader mellan versioner.",
    "keywords": [
      "jämför pdf-filer",
      "pdf diff",
      "jämförelse av dokument",
      "versionsjämförelse"
    ],
    "description": "<p>Jämför PDF-filer analyserar två PDF-dokument och belyser skillnaderna mellan dem. Perfekt för att granska dokumentrevisioner, kontrollera kontraktsändringar eller verifiera redigeringar.</p>\n      <p>Visa dokument sida vid sida eller i överlagringsläge med skillnader markerade. Verktyget identifierar textändringar, tillägg och raderingar.</p>\n      <p>All jämförelse sker i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp två PDF-filer",
        "description": "Ladda upp de ursprungliga och ändrade PDF-dokumenten."
      },
      {
        "step": 2,
        "title": "Jämför dokument",
        "description": "Visa skillnader markerade i sida-vid-sida eller överlagringsläge."
      },
      {
        "step": 3,
        "title": "Exportera resultat",
        "description": "Hämta en jämförelserapport eller kommenterad PDF."
      }
    ],
    "useCases": [
      {
        "title": "Kontraktsgranskning",
        "description": "Jämför kontraktsversioner för att identifiera ändringar.",
        "icon": "file-text"
      },
      {
        "title": "Dokumentrevision",
        "description": "Granska redigeringar mellan dokumentversioner.",
        "icon": "git-compare"
      },
      {
        "title": "Kvalitetssäkring",
        "description": "Kontrollera att endast avsedda ändringar gjordes.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "Vilka typer av skillnader upptäcks?",
        "answer": "Texttillägg, raderingar, ändringar och formateringsändringar."
      },
      {
        "question": "Kan jag jämföra skannade dokument?",
        "answer": "Skannade dokument bör OCR-bearbetas först för textjämförelse."
      },
      {
        "question": "Finns visuell jämförelse tillgänglig?",
        "answer": "Ja, överlagringsläget visar visuella skillnader mellan sidor."
      }
    ]
  },
  "posterize-pdf": {
    "title": "Skapa poster av PDF",
    "metaDescription": "Dela upp stora PDF-sidor i utskrivbara brickor. Skapa affischer från PDF-sidor.",
    "keywords": [
      "posterisera pdf",
      "kakel pdf",
      "storformatsutskrift",
      "pdf affisch"
    ],
    "description": "<p>Posterize PDF delar upp stora PDF-sidor i mindre brickor som kan skrivas ut på vanligt papper och sättas ihop till affischer. Perfekt för att skriva ut stora diagram, kartor eller konstverk.</p>\n      <p>Konfigurera rutnätets storlek och överlappning för enkel montering. Verktyget beräknar automatiskt brickdimensioner för din målstorlek.</p>\n      <p>All bearbetning sker i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil i stort format eller klicka för att välja."
      },
      {
        "step": 2,
        "title": "Konfigurera brickor",
        "description": "Ställ in rutnätsstorlek, överlappning och utmatningspappersstorlek."
      },
      {
        "step": 3,
        "title": "Skapa och ladda ner",
        "description": "Klicka på Skapa för att skapa utskrivbara brickor."
      }
    ],
    "useCases": [
      {
        "title": "Affischtryck",
        "description": "Skriv ut stora affischer på vanligt papper.",
        "icon": "maximize-2"
      },
      {
        "title": "Kartutskrift",
        "description": "Skriv ut stora kartor i sektioner för montering.",
        "icon": "map"
      },
      {
        "title": "Konstverk Reproduktion",
        "description": "Skapa stora utskrifter från PDF-konstverk.",
        "icon": "image"
      }
    ],
    "faq": [
      {
        "question": "Vilken överlappning ska jag använda?",
        "answer": "En 10-20 mm överlappning rekommenderas för enkel inriktning under montering."
      },
      {
        "question": "Kan jag lägga till skärmärken?",
        "answer": "Ja, skärmärken kan läggas till för att hjälpa till med skärning och justering."
      },
      {
        "question": "Vilka pappersstorlekar stöds?",
        "answer": "A4, Letter, A3 och anpassade storlekar stöds."
      }
    ]
  },
  "fix-page-size": {
    "title": "Korrigera sidstorlek",
    "metaDescription": "Standardisera PDF-sidstorlekar. Konvertera alla sidor till enhetliga mått.",
    "keywords": [
      "fixa sidstorlek",
      "standardisera pdf",
      "enhetliga sidor",
      "ändra storlek på pdf-sidor"
    ],
    "description": "<p>Fix Page Size standardiserar alla sidor i din PDF till enhetliga dimensioner. Konvertera dokument i blandade storlekar till konsekventa sidstorlekar för professionell presentation eller utskrift.</p>\n      <p>Välj bland standardstorlekar (A4, Letter, etc.) eller ställ in anpassade mått. Innehållet skalas eller placeras för att passa den nya sidstorleken.</p>\n      <p>All bearbetning sker i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja."
      },
      {
        "step": 2,
        "title": "Välj Målstorlek",
        "description": "Välj en standardstorlek eller ange anpassade mått."
      },
      {
        "step": 3,
        "title": "Ansök och ladda ner",
        "description": "Klicka på Använd för att standardisera sidor och ladda ner."
      }
    ],
    "useCases": [
      {
        "title": "Utskriftsförberedelse",
        "description": "Standardisera sidor för konsekvent utskrift.",
        "icon": "printer"
      },
      {
        "title": "Dokumentrensning",
        "description": "Åtgärda dokument med inkonsekventa sidstorlekar.",
        "icon": "file-check"
      },
      {
        "title": "Professionella dokument",
        "description": "Skapa enhetliga dokument för distribution.",
        "icon": "briefcase"
      }
    ],
    "faq": [
      {
        "question": "Hur hanteras innehåll?",
        "answer": "Innehållet skalas för att passa eller centreras på den nya sidstorleken."
      },
      {
        "question": "Kan jag behålla bildförhållandet?",
        "answer": "Ja, innehåll kan skalas proportionellt för att passa."
      },
      {
        "question": "Vilka standardstorlekar finns tillgängliga?",
        "answer": "A4, A3, Letter, Legal och andra vanliga storlekar."
      }
    ]
  },
  "linearize-pdf": {
    "title": "Linjärisera PDF (snabb webbvisning)",
    "metaDescription": "Optimera PDF för snabb webbvisning. Aktivera progressiv laddning.",
    "keywords": [
      "linjärisera pdf",
      "snabb webbvy",
      "optimera pdf",
      "progressiv pdf"
    ],
    "description": "<p>Linearize PDF optimerar dina dokument för snabb webbvisning. Linjäriserade PDF-filer kan börja visas innan hela filen har laddats ner, vilket förbättrar användarupplevelsen.</p>\n      <p>Även känd som \"Snabb webbvy\", denna optimering omorganiserar PDF-strukturen för progressiv inläsning i webbläsare.</p>\n      <p>All bearbetning sker i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja."
      },
      {
        "step": 2,
        "title": "Linjärisera",
        "description": "Klicka på Linjärisera för att optimera för webbvisning."
      },
      {
        "step": 3,
        "title": "Hämta",
        "description": "Hämta din optimerade PDF."
      }
    ],
    "useCases": [
      {
        "title": "Webbpublicering",
        "description": "Optimera PDF-filer för nedladdning av webbplatser.",
        "icon": "globe"
      },
      {
        "title": "E-postbilagor",
        "description": "Skapa PDF-filer som öppnas snabbare för mottagarna.",
        "icon": "mail"
      },
      {
        "title": "Onlinedokument",
        "description": "Förbättra visningsupplevelsen för onlinedokument.",
        "icon": "cloud"
      }
    ],
    "faq": [
      {
        "question": "Vad är linearisering?",
        "answer": "Linearisering omorganiserar PDF-data för progressiv laddning."
      },
      {
        "question": "Minskar det filstorleken?",
        "answer": "Linjärisering kan öka filstorleken något på grund av extra struktur."
      },
      {
        "question": "Är det kompatibelt med alla tittare?",
        "answer": "Ja, linjäriserade PDF-filer fungerar i alla PDF-läsare."
      }
    ]
  },
  "page-dimensions": {
    "title": "Sidmått och dimensioner",
    "metaDescription": "Analysera PDF-sidstorlekar. Visa mått på alla sidor i ditt dokument.",
    "keywords": [
      "pdf sidstorlek",
      "sidmått",
      "pdf-mått",
      "dokumentstorlek"
    ],
    "description": "<p>Page Dimensions analyserar och visar storleken på varje sida i ditt PDF-dokument. Visa mått i olika enheter (tum, mm, punkter) och identifiera sidor med icke-standardstorlekar.</p>\n      <p>Användbar för utskriftsförberedelse, dokumentanalys eller identifiering av inkonsekventa sidstorlekar.</p>\n      <p>All analys sker i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja."
      },
      {
        "step": 2,
        "title": "Visa mått",
        "description": "Se sidstorlekar som visas för alla sidor."
      },
      {
        "step": 3,
        "title": "Exportera rapport",
        "description": "Exportera eventuellt dimensioner som JSON."
      }
    ],
    "useCases": [
      {
        "title": "Skriv ut planering",
        "description": "Kontrollera sidstorlekarna innan du skriver ut.",
        "icon": "printer"
      },
      {
        "title": "Dokumentanalys",
        "description": "Identifiera sidor med ovanliga dimensioner.",
        "icon": "search"
      },
      {
        "title": "Kvalitetskontroll",
        "description": "Kontrollera att sidstorlekarna uppfyller specifikationerna.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "Vilka enheter finns tillgängliga?",
        "answer": "Tum, millimeter, centimeter och punkter."
      },
      {
        "question": "Visar den orientering?",
        "answer": "Ja, stående eller liggande orientering anges."
      },
      {
        "question": "Kan jag fixa inkonsekventa storlekar?",
        "answer": "Använd verktyget Fixa sidstorlek för att standardisera dimensioner."
      }
    ]
  },
  "remove-restrictions": {
    "title": "Ta bort begränsningar",
    "metaDescription": "Ta bort PDF-begränsningar. Lås upp utskrifts-, kopierings- och redigeringsbehörigheter.",
    "keywords": [
      "ta bort pdf-begränsningar",
      "låsa upp pdf",
      "pdf behörigheter",
      "obegränsa pdf"
    ],
    "description": "<p>Ta bort begränsningar låser upp PDF-filer som har behörighetsbegränsningar som förhindrar utskrift, kopiering eller redigering. Detta verktyg tar bort begränsningar för ägarlösenord samtidigt som dokumentinnehållet bevaras.</p>\n      <p>Obs! Det här verktyget kan inte ta bort användarlösenord som förhindrar att dokumentet öppnas. Använd Dekryptera PDF för lösenordsskyddade filer.</p>\n      <p>All bearbetning sker i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp begränsad PDF",
        "description": "Dra och släpp din begränsade PDF eller klicka för att välja."
      },
      {
        "step": 2,
        "title": "Ta bort begränsningar",
        "description": "Klicka på Ta bort för att låsa upp dokumentet."
      },
      {
        "step": 3,
        "title": "Hämta",
        "description": "Hämta den obegränsade PDF-filen."
      }
    ],
    "useCases": [
      {
        "title": "Aktivera utskrift",
        "description": "Lås upp PDF-filer som förhindrar utskrift.",
        "icon": "printer"
      },
      {
        "title": "Aktivera kopiering",
        "description": "Tillåt textval och kopiering.",
        "icon": "copy"
      },
      {
        "title": "Aktivera redigering",
        "description": "Ta bort restriktioner för dokumentredigering.",
        "icon": "edit"
      }
    ],
    "faq": [
      {
        "question": "Är detta lagligt?",
        "answer": "Att ta bort begränsningar från dokument som du äger eller har rättigheter till är generellt sett lagligt."
      },
      {
        "question": "Kan det ta bort öppna lösenord?",
        "answer": "Nej, använd Dekryptera PDF för lösenordsskyddade dokument."
      },
      {
        "question": "Kommer innehållet att påverkas?",
        "answer": "Nej, endast restriktioner tas bort; innehållet förblir oförändrat."
      }
    ]
  },
  "repair-pdf": {
    "title": "Reparera PDF",
    "metaDescription": "Åtgärda skadade PDF-filer. Återställ och reparera skadade dokument.",
    "keywords": [
      "reparation pdf",
      "fixa pdf",
      "återställa pdf",
      "skadad pdf"
    ],
    "description": "<p>Reparera PDF försöker fixa skadade eller skadade PDF-filer. Verktyget analyserar dokumentstrukturen och bygger om den för att återställa så mycket innehåll som möjligt.</p>\n      <p>Användbart för att återställa filer som inte öppnas, visar fel eller saknar innehåll på grund av korruption.</p>\n      <p>All reparation sker i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp skadad PDF",
        "description": "Dra och släpp din skadade PDF eller klicka för att välja."
      },
      {
        "step": 2,
        "title": "Reparationsdokument",
        "description": "Klicka på Reparera för att försöka återställa."
      },
      {
        "step": 3,
        "title": "Hämta",
        "description": "Hämta den reparerade PDF-filen om det lyckas."
      }
    ],
    "useCases": [
      {
        "title": "Återställ filer",
        "description": "Återställ PDF-filer som inte öppnas ordentligt.",
        "icon": "refresh-cw"
      },
      {
        "title": "Åtgärda fel",
        "description": "Reparera filer som visar felmeddelanden.",
        "icon": "wrench"
      },
      {
        "title": "Återställ innehåll",
        "description": "Återställ innehåll från delvis skadade filer.",
        "icon": "file-check"
      }
    ],
    "faq": [
      {
        "question": "Kan alla PDF-filer repareras?",
        "answer": "Framgång beror på typen och omfattningen av korruption."
      },
      {
        "question": "Kommer allt innehåll att återställas?",
        "answer": "Verktyget återhämtar sig så mycket som möjligt; allvarligt skadade filer kan gå förlorade."
      },
      {
        "question": "Ska jag behålla originalet?",
        "answer": "Ja, behåll alltid originalfilen som säkerhetskopia."
      }
    ]
  },
  "encrypt-pdf": {
    "title": "Skydda PDF med lösenord",
    "metaDescription": "Lösenordsskydda PDF-filer. Lägg till kryptering och ange behörigheter.",
    "keywords": [
      "kryptera pdf",
      "lösenordsskydd pdf",
      "säker pdf",
      "pdf-kryptering"
    ],
    "description": "<p>Kryptera PDF lägger till lösenordsskydd och kryptering till dina PDF-dokument. Ställ in användarlösenord för att förhindra öppning och ägarlösenord för att kontrollera behörigheter som utskrift och kopiering.</p>\n      <p>Välj mellan olika krypteringsnivåer (128-bitars eller 256-bitars AES) för olika säkerhetsbehov.</p>\n      <p>All kryptering sker i din webbläsare, vilket säkerställer att dina lösenord och dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja."
      },
      {
        "step": 2,
        "title": "Ställ in lösenord",
        "description": "Ange användarlösenord och/eller ägarlösenord. Konfigurera behörigheter."
      },
      {
        "step": 3,
        "title": "Kryptera och ladda ner",
        "description": "Klicka på Kryptera för att säkra din PDF och ladda ner."
      }
    ],
    "useCases": [
      {
        "title": "Konfidentiella dokument",
        "description": "Skydda känsliga affärsdokument.",
        "icon": "lock"
      },
      {
        "title": "Personliga filer",
        "description": "Säkra personliga dokument som skattedeklarationer.",
        "icon": "shield"
      },
      {
        "title": "Kontrollerad distribution",
        "description": "Begränsa vad mottagare kan göra med dokument.",
        "icon": "key"
      }
    ],
    "faq": [
      {
        "question": "Vad är skillnaden mellan användar- och ägarlösenord?",
        "answer": "Användarlösenord förhindrar öppning; ägarlösenord styr behörigheter."
      },
      {
        "question": "Vilken kryptering används?",
        "answer": "128-bitars eller 256-bitars AES-krypteringsalternativ är tillgängliga."
      },
      {
        "question": "Kan jag ställa in behörigheter utan ett användarlösenord?",
        "answer": "Ja, du kan endast ange ett ägarlösenord för att kontrollera behörigheter."
      }
    ]
  },
  "sanitize-pdf": {
    "title": "Rensa dold information",
    "metaDescription": "Ta bort dolda data från PDF-filer. Rensa metadata, skript och känslig information.",
    "keywords": [
      "sanera pdf",
      "ren pdf",
      "ta bort dolda data",
      "pdf sekretess"
    ],
    "description": "<p>Sanitize PDF tar bort dolda data och potentiellt känslig information från dina dokument. Ta bort metadata, inbäddade skript, bilagor, kommentarer och annat dolt innehåll.</p>\n      <p>E viktigt för att förbereda dokument för offentlig distribution eller när integritet är ett problem.</p>\n      <p>All sanering sker i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja."
      },
      {
        "step": 2,
        "title": "Välj Vad som ska tas bort",
        "description": "Välj vilka typer av dolda data som ska tas bort."
      },
      {
        "step": 3,
        "title": "Rensa och ladda ner",
        "description": "Klicka på Sanitize för att rensa PDF-filen och ladda ner."
      }
    ],
    "useCases": [
      {
        "title": "Offentlig publicering",
        "description": "Förbered dokument för offentlig spridning.",
        "icon": "globe"
      },
      {
        "title": "Integritetsskydd",
        "description": "Ta bort personlig information innan du delar.",
        "icon": "shield"
      },
      {
        "title": "Säkerhetsefterlevnad",
        "description": "Uppfyll säkerhetskraven för dokumenthantering.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "Vilka dolda data tas bort?",
        "answer": "Metadata, skript, bilagor, kommentarer, formulärdata och dolda lager."
      },
      {
        "question": "Kommer synligt innehåll att påverkas?",
        "answer": "Nej, endast dolda data tas bort; synligt innehåll finns kvar."
      },
      {
        "question": "Är detta reversibelt?",
        "answer": "Nej, borttagen data kan inte återställas. Spara en säkerhetskopia av originalet."
      }
    ]
  },
  "find-and-redact": {
    "title": "Sök och censurera",
    "metaDescription": "Sök och redigera text på alla sidor i en PDF. Batchredigera känslig information som kontonummer, namn och mer.",
    "keywords": [
      "redigera pdf",
      "hitta och redigera",
      "batch redigera",
      "ta bort text",
      "pdf censur",
      "dölja känsliga uppgifter"
    ],
    "description": "<p>Find and Redact låter dig söka efter specifik text, siffror eller mönster på alla sidor i din PDF och redigera alla matchande förekomster på en gång. Perfekt för att ta bort känslig information som kontonummer, namn, adresser eller konfidentiell information.</p>\n      <p>Förhandsgranska alla matchningar innan du tillämpar redigeringar och välj selektivt vilka förekomster som ska redigeras. Stöder skiftlägeskänslig sökning, helordsmatchning och reguljära uttryck för avancerad mönstermatchning.</p>\n      <p>All bearbetning sker i din webbläsare, vilket säkerställer att dina dokument förblir privata och säkra.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja."
      },
      {
        "step": 2,
        "title": "Sök efter text",
        "description": "Ange texten, siffran eller regexmönster som du vill hitta och redigera."
      },
      {
        "step": 3,
        "title": "Granska och välj",
        "description": "Förhandsgranska alla matcher och välj vilka som ska redigeras."
      },
      {
        "step": 4,
        "title": "Använd redaktion",
        "description": "Anpassa redigeringsutseendet och tillämpa på valda matchningar."
      }
    ],
    "useCases": [
      {
        "title": "Integritetsefterlevnad",
        "description": "Redigera personlig information för att följa GDPR, HIPAA eller andra bestämmelser.",
        "icon": "shield"
      },
      {
        "title": "Juridiska dokument",
        "description": "Ta bort konfidentiell data från juridiska dokument innan du delar.",
        "icon": "scale"
      },
      {
        "title": "Ekonomiska register",
        "description": "Redigera kontonummer, SSN:er eller ekonomiska data från kontoutdrag.",
        "icon": "credit-card"
      }
    ],
    "faq": [
      {
        "question": "Är redigering permanent?",
        "answer": "Ja, redigering tar bort den underliggande texten permanent. Det ursprungliga innehållet kan inte återställas. Håll alltid en säkerhetskopia av originalfilen."
      },
      {
        "question": "Kan jag redigera bilder eller skannad text?",
        "answer": "Det här verktyget fungerar med textbaserade PDF-filer. För skannade dokument skulle du behöva använda manuell områdesbaserad redigering."
      },
      {
        "question": "Kan jag anpassa redigeringsutseendet?",
        "answer": "Ja, du kan ställa in redaktionsfärgen, lägga till ramar och eventuellt inkludera ersättningstext som \"[REDACTED]\"."
      },
      {
        "question": "Hur fungerar regex-sökning?",
        "answer": "Aktivera \"Använd reguljärt uttryck\" för att söka med regexmönster. Till exempel, \\d{4}-\\d{4}-\\d{4}-\\d{4} för att hitta kreditkortsnummer."
      }
    ]
  },
  "redact-pdf": {
    "title": "Censurera PDF",
    "metaDescription": "Visuellt mörklägga, mosaik eller sudda ut känslig information i PDF-filer. Oåterkallelig fysisk rasterisering och djup metadatasanering för integritetsskydd.",
    "keywords": [
      "redigera pdf",
      "blackout pdf",
      "mosaik pdf",
      "oskärpa pdf",
      "pdf sekretess",
      "ta bort känsliga uppgifter",
      "säker pdf-redigerare"
    ],
    "description": "<p>Redact PDF tillhandahåller en visuell, interaktiv redigerare för att permanent dölja och skydda känsliga data i dina PDF-dokument. Dra för att markera ett konfidentiellt område – som namn, adresser, ID-nummer, signaturer, officiella sigill, finansiella siffror eller porträtt – och tillämpa mörkläggnings-, whiteout-, mosaik- eller oskärpa effekter.</p>\n      <p>Till skillnad från vanliga PDF-redigerare som helt enkelt lägger ytliga svarta rektanglar ovanpå befintlig text, utför det här verktyget <strong>oåterkallelig fysisk pixlarastrering</strong>. De underliggande textlagren, vektorgrafik och OCR-strömmar är helt förstörda och kan inte återställas genom att kopiera och klistra in eller omvänd konstruktion.</p>\n      <p>Dessutom utför verktyget djup metadataspolning, vilket eliminerar författarinformation, skapelsehistorik och XMP-strömmar. All bearbetning körs till 100 % lokalt i din webbläsare utan serveruppladdningar.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp PDF-dokument",
        "description": "Välj eller dra och släpp PDF-filen du vill redigera."
      },
      {
        "step": 2,
        "title": "Markera känsliga områden",
        "description": "Klicka och dra på valfri sida för att rita redigeringsrutor runt konfidentiellt innehåll."
      },
      {
        "step": 3,
        "title": "Välj Redaktionsstil",
        "description": "Välj blackout, whiteout, mosaik (justerbar pixelstorlek) eller oskärpa. Växla förhandsvisning i realtid för att inspektera resultatet."
      },
      {
        "step": 4,
        "title": "Exportera säker PDF",
        "description": "Klicka på \"Generera säker PDF\" för att utföra oåterkallelig tillplattning, radering av metadata och ladda ner ditt säkra dokument."
      }
    ],
    "useCases": [
      {
        "title": "Sekretess och regelefterlevnad",
        "description": "Maskera på ett säkert sätt personligt identifierbar information (PII) för att uppfylla kraven i GDPR, HIPAA eller CCPA.",
        "icon": "shield"
      },
      {
        "title": "Konfidentiell juridisk och affärsdelning",
        "description": "Obskyra affärshemligheter, förlikningsvillkor, signaturer och stämplar före offentliggörande eller extern distribution.",
        "icon": "file-text"
      },
      {
        "title": "Finansiellt skydd och identitetsskydd",
        "description": "Dölj bankkontonummer, skatte-ID, kreditkortsuppgifter och ID-kortsnummer från kontoutdrag och fakturor.",
        "icon": "lock"
      }
    ],
    "faq": [
      {
        "question": "Kan vem som helst återställa redigerad information genom att kopiera text eller inspektera lager?",
        "answer": "Nej. De redigerade områdena genomgår en fysisk pixel-inbränning. Underliggande text, vektorer och objekt tas helt bort från filstrukturen, vilket gör återställning omöjlig."
      },
      {
        "question": "Vad är skillnaden mellan mörkläggning, mosaik och oskärpa?",
        "answer": "Blackout skapar en solid svart mask (standard för juridiska dokument); whiteout ger en ren vit mask; mosaik skapar ett pixlat rutnät; och oskärpa ger en mjuk frostat glaseffekt."
      },
      {
        "question": "Laddas filer upp till dina servrar?",
        "answer": "Nej. All rendering, redigering, utjämning och PDF-generering sker helt och hållet i webbläsarens minne. Dina dokument lämnar aldrig din enhet."
      },
      {
        "question": "Vilken metadata tas bort?",
        "answer": "Dokumenttitel, författare, ämne, nyckelord, skapare, producent, skapandedatum, ändringsdatum och utökade XMP-metadataströmmar raderas grundligt."
      }
    ]
  },
  "decrypt-pdf": {
    "title": "Ta bort lösenord från PDF",
    "metaDescription": "Ta bort lösenord från PDF-filer. Lås upp lösenordsskyddade dokument.",
    "keywords": [
      "dekryptera pdf",
      "ta bort pdf-lösenord",
      "låsa upp pdf",
      "Borttagning av pdf-lösenord"
    ],
    "description": "<p>Dekryptera PDF tar bort lösenordsskyddet från PDF-dokument. Ange det aktuella lösenordet för att låsa upp filen och skapa en oskyddad kopia.</p>\n      <p>Det här verktyget kräver att du känner till det aktuella lösenordet. Den kan inte knäcka eller kringgå okända lösenord.</p>\n      <p>All dekryptering sker i din webbläsare, vilket säkerställer att dina lösenord och dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp skyddad PDF",
        "description": "Dra och släpp din lösenordsskyddade PDF."
      },
      {
        "step": 2,
        "title": "Ange lösenord",
        "description": "Ange det aktuella dokumentlösenordet."
      },
      {
        "step": 3,
        "title": "Dekryptera och ladda ner",
        "description": "Klicka på Dekryptera för att ta bort skyddet och ladda ner."
      }
    ],
    "useCases": [
      {
        "title": "Ta bort gamla lösenord",
        "description": "Lås upp dokument när lösenordet inte längre behövs.",
        "icon": "unlock"
      },
      {
        "title": "Förenkla åtkomst",
        "description": "Skapa oskyddade kopior för enklare delning.",
        "icon": "share-2"
      },
      {
        "title": "Arkiv dokument",
        "description": "Ta bort lösenord innan långtidsarkivering.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Kan den knäcka okända lösenord?",
        "answer": "Nej, du måste känna till det aktuella lösenordet för att dekryptera."
      },
      {
        "question": "Är originalfilen modifierad?",
        "answer": "Nej, en ny oskyddad kopia skapas."
      },
      {
        "question": "Vad händer om jag har glömt lösenordet?",
        "answer": "Tyvärr kan vi inte återställa glömda lösenord."
      }
    ]
  },
  "flatten-pdf": {
    "title": "Platta till PDF",
    "metaDescription": "Platta ut PDF-formulär och kommentarer. Gör innehållet oredigerbart.",
    "keywords": [
      "platta till pdf",
      "platta former",
      "platta kommentarer",
      "ej redigerbar pdf"
    ],
    "description": "<p>Flatten PDF konverterar interaktiva element som formulärfält och kommentarer till statiskt innehåll. Den tillplattade PDF-filen ser likadan ut men kan inte längre redigeras.</p>\n      <p>Perfekt för att slutföra ifyllda formulär, bevara kommentarer eller skapa icke-redigerbara dokumentversioner.</p>\n      <p>All bearbetning sker i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF med formulär eller kommentarer."
      },
      {
        "step": 2,
        "title": "Välj Vad som ska plattas till",
        "description": "Välj att platta till formulär, kommentarer eller båda."
      },
      {
        "step": 3,
        "title": "Platta till och ladda ner",
        "description": "Klicka på Platta för att skapa den statiska PDF-filen."
      }
    ],
    "useCases": [
      {
        "title": "Slutför formulär",
        "description": "Lås ifyllda formulärdata för att förhindra ändringar.",
        "icon": "lock"
      },
      {
        "title": "Bevara anteckningar",
        "description": "Gör anteckningar permanenta i dokumentet.",
        "icon": "check-circle"
      },
      {
        "title": "Arkiv dokument",
        "description": "Skapa icke-redigerbara versioner för arkivering.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Är tillplattning reversibel?",
        "answer": "Nej, tillplattning är permanent. Spara en säkerhetskopia av originalet."
      },
      {
        "question": "Kommer utseendet att förändras?",
        "answer": "Nej, dokumentet ser likadant ut men är inte längre interaktivt."
      },
      {
        "question": "Minskar det filstorleken?",
        "answer": "Ibland konverteras interaktiva element till enklare innehåll."
      }
    ]
  },
  "remove-metadata": {
    "title": "Ta bort metadata",
    "metaDescription": "Ta bort metadata från PDF-filer. Ta bort författare, datum och dokumentegenskaper.",
    "keywords": [
      "ta bort pdf-metadata",
      "strippa metadata",
      "pdf sekretess",
      "anonym pdf"
    ],
    "description": "<p>Ta bort metadata tar bort alla dokumentegenskaper och metadata från dina PDF-filer. Ta bort författarnamn, skapandedatum, programvaruinformation och annan identifieringsdata.</p>\n      <p>E viktigt för integritet när du delar dokument eller när metadata kan avslöja känslig information.</p>\n      <p>All bearbetning sker i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja."
      },
      {
        "step": 2,
        "title": "Ta bort metadata",
        "description": "Klicka på Ta bort för att ta bort all metadata."
      },
      {
        "step": 3,
        "title": "Hämta",
        "description": "Hämta den metadatafria PDF-filen."
      }
    ],
    "useCases": [
      {
        "title": "Integritetsskydd",
        "description": "Ta bort personlig information innan du delar.",
        "icon": "shield"
      },
      {
        "title": "Anonyma dokument",
        "description": "Skapa dokument utan tillskrivning av författare.",
        "icon": "user-x"
      },
      {
        "title": "Ren distribution",
        "description": "Distribuera dokument utan interna metadata.",
        "icon": "send"
      }
    ],
    "faq": [
      {
        "question": "Vilken metadata tas bort?",
        "answer": "Information om författare, titel, ämne, nyckelord, datum, skapare och producent."
      },
      {
        "question": "Har XMP-metadata tagits bort?",
        "answer": "Ja, både standard- och XMP-metadata tas bort."
      },
      {
        "question": "Kommer innehållet att påverkas?",
        "answer": "Nej, endast metadata tas bort; dokumentinnehållet förblir oförändrat."
      }
    ]
  },
  "change-permissions": {
    "title": "Ändra behörigheter",
    "metaDescription": "Ändra PDF-behörigheter. Styr åtkomst till utskrift, kopiering och redigering.",
    "keywords": [
      "pdf behörigheter",
      "ändra pdf-åtkomst",
      "begränsa pdf",
      "pdf säkerhet"
    ],
    "description": "<p>Ändra behörigheter ändrar åtkomstkontrollerna på dina PDF-dokument. Aktivera eller inaktivera utskrifts-, kopierings-, redigerings- och anteckningsbehörigheter.</p>\n      <p>Ange ett ägarlösenord för att upprätthålla dessa begränsningar. Mottagarna kan se dokumentet men är begränsade i vilka åtgärder de kan utföra.</p>\n      <p>All bearbetning sker i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja."
      },
      {
        "step": 2,
        "title": "Ange behörigheter",
        "description": "Aktivera eller inaktivera utskrift, kopiering, redigering och anteckningar."
      },
      {
        "step": 3,
        "title": "Ansök och ladda ner",
        "description": "Ange ägarlösenord och ladda ner den begränsade PDF-filen."
      }
    ],
    "useCases": [
      {
        "title": "Förhindra kopiering",
        "description": "Inaktivera textkopiering för att skydda innehåll.",
        "icon": "copy"
      },
      {
        "title": "Kontrollutskrift",
        "description": "Begränsa eller tillåt utskrift av dokument.",
        "icon": "printer"
      },
      {
        "title": "Begränsa redigering",
        "description": "Förhindra ändringar i dokumentet.",
        "icon": "edit-3"
      }
    ],
    "faq": [
      {
        "question": "Behöver jag ett lösenord?",
        "answer": "Ett ägarlösenord krävs för att upprätthålla behörigheter."
      },
      {
        "question": "Kan behörigheter tas bort?",
        "answer": "Ja, med ägarlösenordet eller med verktyget Ta bort begränsningar."
      },
      {
        "question": "Är alla PDF-läsare kompatibla?",
        "answer": "De flesta PDF-läsare respekterar behörigheter, men vissa kanske inte tillämpar dem."
      }
    ]
  },
  "pdf-to-docx": {
    "title": "PDF till Word",
    "metaDescription": "Konvertera PDF till redigerbara Word-dokument (DOCX). Bevara formatering och layout.",
    "keywords": [
      "pdf till word",
      "konvertera pdf till docx",
      "pdf till doc",
      "redigerbar pdf"
    ],
    "description": "<p>PDF till Word konverterar dina PDF-dokument till redigerbara Microsoft Word-filer (DOCX). Verktyget bevarar den ursprungliga layouten, formateringen, bilderna och textflödet.</p>\n      <p>Eredigera enkelt ditt PDF-innehåll i Word utan att skriva om. Perfekt för kontrakt, rapporter och CV.</p>\n      <p>All konvertering sker lokalt i din webbläsare med hjälp av WebAssembly-teknik, vilket säkerställer att dina dokument aldrig lämnar din enhet.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja."
      },
      {
        "step": 2,
        "title": "Konvertera",
        "description": "Vänta tills konverteringsprocessen är klar."
      },
      {
        "step": 3,
        "title": "Hämta Word Doc",
        "description": "Hämta din helt redigerbara DOCX-fil."
      }
    ],
    "useCases": [
      {
        "title": "Redigera kontrakt",
        "description": "Konvertera PDF-kontrakt till Word för redigering och revision.",
        "icon": "file-text"
      },
      {
        "title": "Återuppta uppdateringar",
        "description": "Uppdatera gamla PDF-CV genom att konvertera dem till Word.",
        "icon": "user"
      },
      {
        "title": "Återanvändning av innehåll",
        "description": "Extrahera innehåll från PDF-rapporter för andra dokument.",
        "icon": "copy"
      }
    ],
    "faq": [
      {
        "question": "Bevaras formateringen?",
        "answer": "Ja, verktyget syftar till att bevara layout, typsnitt och bilder så nära som möjligt."
      },
      {
        "question": "Kan jag konvertera skannade PDF-filer?",
        "answer": "Skannade PDF-filer kommer att konverteras som bilder i Word om du inte använder OCR först."
      },
      {
        "question": "Är det kompatibelt med Word?",
        "answer": "Ja, utdata är en standard .docx-fil som är kompatibel med Microsoft Word och Google Docs."
      }
    ]
  },
  "pdf-to-markdown": {
    "title": "PDF till Markdown",
    "metaDescription": "Konvertera PDF till Markdown-format. Extrahera text och bevara formatering som rubriker och listor.",
    "keywords": [
      "pdf till markdown",
      "konvertera pdf till md",
      "Utdrag av pdf-text",
      "markdown-omvandlare",
      "pdf till text"
    ],
    "description": "<p>PDF till Markdown konverterar dina PDF-dokument till rena, välstrukturerade Markdown-filer. Verktyget extraherar på ett intelligent sätt textinnehåll och försöker bevara formatering som rubriker, listor och stycken.</p>\n      <p>Perfekt för att konvertera PDF-dokument till redigerbara format för dokumentation, anteckningar eller innehållshanteringssystem som stöder Markdown.</p>\n      <p>All konvertering sker lokalt i din webbläsare, vilket säkerställer att dina dokument förblir privata och säkra.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja."
      },
      {
        "step": 2,
        "title": "Konfigurera alternativ",
        "description": "Ställ in sidintervall, välj att inkludera sidnummer och justera radbrytningsinställningar."
      },
      {
        "step": 3,
        "title": "Konvertera och ladda ner",
        "description": "Klicka på Konvertera för att generera din Markdown-fil och ladda ner."
      }
    ],
    "useCases": [
      {
        "title": "Dokumentation",
        "description": "Konvertera PDF-manualer och guider till Markdown för versionskontrollerad dokumentation.",
        "icon": "file-text"
      },
      {
        "title": "Anteckningstagande",
        "description": "Extrahera innehåll från PDF-artiklar och böcker för ditt anteckningssystem.",
        "icon": "edit-3"
      },
      {
        "title": "Innehållsmigrering",
        "description": "Migrera PDF-innehåll till CMS-plattformar som stöder Markdown.",
        "icon": "copy"
      }
    ],
    "faq": [
      {
        "question": "Bevaras formateringen?",
        "answer": "Verktyget försöker upptäcka rubriker baserat på teckenstorlek och punktlistor/numrerade listor. Komplexa layouter kan kräva manuell justering."
      },
      {
        "question": "Kan jag konvertera specifika sidor?",
        "answer": "Ja, du kan ange ett sidintervall som \"1-3, 5, 7\" för att endast konvertera dessa sidor."
      },
      {
        "question": "Fungerar det med skannade PDF-filer?",
        "answer": "Skannade PDF-filer innehåller bilder, inte text. Använd vårt OCR-verktyg först för att extrahera text innan du konverterar till Markdown."
      }
    ]
  },
  "deskew-pdf": {
    "title": "Räta upp skev PDF",
    "metaDescription": "Räta automatiskt ut skannade eller lutade PDF-sidor. Åtgärda sneda dokument med precisionsvinkeldetektering.",
    "keywords": [
      "ladda ner pdf",
      "räta ut pdf",
      "fixa lutad skanning",
      "automatisk rotera pdf",
      "rätt pdf-vinkel"
    ],
    "description": "<p>Deskew PDF upptäcker och korrigerar automatiskt lutande eller sneda sidor i dina PDF-dokument med hjälp av avancerad projiceringsprofilvariansanalys. Detta är viktigt för skannade dokument som matades in i skannern i en vinkel.</p>\n      <p>Verktyget analyserar text- och innehållsjusteringen i olika vinklar för att hitta den optimala rotationen och tillämpar sedan korrigeringen. Du kan justera känslighetströskeln (1-30) och DPI-inställningarna (72-300) för optimala resultat.</p>\n      <p>All bearbetning sker lokalt i din webbläsare med hjälp av WebAssembly-teknik, vilket säkerställer att dina dokument förblir privata och säkra.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din skannade PDF-fil eller klicka för att välja."
      },
      {
        "step": 2,
        "title": "Konfigurera inställningar",
        "description": "Justera tröskelkänslighet och DPI om det behövs för bättre upptäckt."
      },
      {
        "step": 3,
        "title": "Bearbeta och ladda ner",
        "description": "Klicka på Deskew för att räta ut sidor och ladda ner den korrigerade PDF-filen."
      }
    ],
    "useCases": [
      {
        "title": "Skannade dokument",
        "description": "Fixa sidor som har skannats i vinkel från dokumentmatare.",
        "icon": "scan"
      },
      {
        "title": "Mobilskanningar",
        "description": "Korrigera lutade foton av dokument tagna med smartphones.",
        "icon": "smartphone"
      },
      {
        "title": "Arkiv restaurering",
        "description": "Rätta till gamla skannade arkiv för bättre läsbarhet.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Hur exakt är vinkeldetekteringen?",
        "answer": "Verktyget använder projektionsprofilvariansanalys för att detektera snedvinklar upp till ±10 grader med hög noggrannhet. Den hoppar automatiskt över sidor med vinklar mindre än 0,3 grader."
      },
      {
        "question": "Kommer textkvaliteten att påverkas?",
        "answer": "För rotationer vid multiplar av 90 grader sker ingen kvalitetsförlust. För övriga vinklar rundar verktyget till närmaste grad och håller god kvalitet."
      },
      {
        "question": "Kan jag sänka vissa sidor bara?",
        "answer": "Verktyget analyserar alla sidor men korrigerar bara de som har upptäckt skevhet över känslighetströskeln. Sidor med minimal skevhet lämnas oförändrade."
      },
      {
        "question": "Vad är känslighetströskeln?",
        "answer": "Värdena 1-10 korrigerar endast uppenbara lutningar, 11-20 upptäcker måttlig snedställning och 21-30 fångar subtila vinklar. Standard är 10 för balanserad detektering."
      },
      {
        "question": "Hur lång tid tar bearbetningen?",
        "answer": "Bearbetningstiden beror på filstorlek och DPI. 150 DPI (standard) ger bra balans mellan hastighet och noggrannhet. Högre DPI är mer exakt men långsammare."
      }
    ]
  },
  "pdf-booklet": {
    "title": "Skapa PDF-häfte",
    "metaDescription": "Skapa häfteslayouter från PDF för utskrift. Ordna sidor för sadelhäftning med flera rutnätsalternativ.",
    "keywords": [
      "pdf-häfte",
      "häftesskapare",
      "skriva ut häfte",
      "sadelhäft",
      "utskjutning"
    ],
    "description": "<p>PDF Booklet Creator arrangerar dina PDF-sidor i häfteslayouter redo för utskrift och vikning. Perfekt för att skapa broschyrer, zines, häften och sadelhäftade publikationer.</p>\n      <p>Välj bland olika rutnätslägen (1x2, 2x2, 2x4, 4x4), pappersstorlekar och orienteringsalternativ. Verktyget hanterar automatiskt sidutskjutning för korrekt vikningssekvens.</p>\n      <p>All bearbetning sker lokalt i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Ladda upp PDF-dokumentet som du vill konvertera till ett häfte."
      },
      {
        "step": 2,
        "title": "Välj Layout",
        "description": "Välj rutnätsläge, pappersstorlek, orientering och rotationsalternativ."
      },
      {
        "step": 3,
        "title": "Skapa och ladda ner",
        "description": "Skapa häfteslayouten och ladda ner för utskrift."
      }
    ],
    "useCases": [
      {
        "title": "Broschyrer",
        "description": "Skapa vikbara broschyrer från vanliga PDF-dokument.",
        "icon": "book-open"
      },
      {
        "title": "Zines",
        "description": "Producera självpublicerade zines med korrekt sidautskjutning.",
        "icon": "book"
      },
      {
        "title": "Evenemangsprogram",
        "description": "Skapa professionella programhäften för evenemang.",
        "icon": "calendar"
      }
    ],
    "faq": [
      {
        "question": "Vad är sadelhäftningsbindning?",
        "answer": "Sadelhäftning är en bindningsmetod där vikta ark kapslas och häftas genom vecket."
      },
      {
        "question": "Vilket rutnätsläge ska jag använda?",
        "answer": "1x2 är standard för häften. Använd 2x2 eller större för multi-up utskrift för att spara papper."
      },
      {
        "question": "Kan jag förhandsgranska layouten?",
        "answer": "Ja, verktyget ger en visuell förhandsvisning innan det slutliga häftet genereras."
      }
    ]
  },
  "rasterize-pdf": {
    "title": "Rastrera PDF",
    "metaDescription": "Konvertera PDF-sidor till bilder av hög kvalitet. Exportera som PNG, JPEG eller WebP med anpassade DPI-inställningar.",
    "keywords": [
      "rasterisera pdf",
      "pdf till bild",
      "pdf till png",
      "pdf till jpeg",
      "konvertera pdf-sidor"
    ],
    "description": "<p>Rasterize PDF konverterar dina PDF-sidor till högkvalitativa rasterbilder. Välj mellan PNG-, JPEG- eller WebP-utdataformat med full kontroll över DPI- och kvalitetsinställningar.</p>\n      <p>Perfekt för att skapa miniatyrer, grafik på sociala medier eller arkivera PDF-innehåll som bilder. Stöder val av sidintervall och batchbearbetning.</p>\n      <p>All bearbetning sker lokalt i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Dra och släpp din PDF-fil eller klicka för att välja."
      },
      {
        "step": 2,
        "title": "Konfigurera utgång",
        "description": "Välj DPI, utdataformat (PNG/JPEG/WebP), kvalitet och sidintervall."
      },
      {
        "step": 3,
        "title": "Konvertera och ladda ner",
        "description": "Bearbeta sidor och ladda ner bilder individuellt eller som ett ZIP-arkiv."
      }
    ],
    "useCases": [
      {
        "title": "Sociala medier",
        "description": "Konvertera PDF-bilder till bilder för sociala medier.",
        "icon": "share-2"
      },
      {
        "title": "Miniatyrer",
        "description": "Skapa förhandsgranskningsminiatyrer för PDF-dokument.",
        "icon": "image"
      },
      {
        "title": "Webbpublicering",
        "description": "Konvertera PDF-innehåll till webbvänliga bildformat.",
        "icon": "globe"
      }
    ],
    "faq": [
      {
        "question": "Vilken DPI ska jag använda?",
        "answer": "72 DPI för skärm, 150 DPI för allmänt bruk, 300 DPI för utskriftskvalitet."
      },
      {
        "question": "Vilket format är bäst?",
        "answer": "PNG för kvalitet/transparens, JPEG för liten storlek, WebP för modern webbanvändning."
      },
      {
        "question": "Kan jag konvertera specifika sidor?",
        "answer": "Ja, ange sidintervall som \"1-5, 8, 10-15\" för att endast konvertera dessa sidor."
      }
    ]
  },
  "markdown-to-pdf": {
    "title": "Markdown till PDF",
    "metaDescription": "Konvertera Markdown-filer till vackert formaterade PDF-dokument. Stöd för GitHub Flavored Markdown och syntaxmarkering.",
    "keywords": [
      "markdown till pdf",
      "md till pdf",
      "konvertera markdown",
      "gfm till pdf",
      "markdown-omvandlare"
    ],
    "description": "<p>Markdown till PDF konverterar dina Markdown-filer till professionellt formaterade PDF-dokument. Stöd för CommonMark och GitHub Flavored Markdown (GFM) inklusive tabeller, uppgiftslistor och kodblock.</p>\n      <p>Välj bland flera teman (ljus, mörk, GitHub) och anpassa sidstorlek och marginaler. Kodblock är syntaxmarkerade för bättre läsbarhet.</p>\n      <p>All konvertering sker lokalt i din webbläsare, vilket säkerställer att ditt innehåll förblir privat.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp Markdown-fil",
        "description": "Ladda upp din .md- eller .markdown-fil."
      },
      {
        "step": 2,
        "title": "Välj Tema",
        "description": "Välj ett visuellt tema och konfigurera sidinställningar."
      },
      {
        "step": 3,
        "title": "Konvertera och ladda ner",
        "description": "Skapa den formaterade PDF-filen och ladda ner."
      }
    ],
    "useCases": [
      {
        "title": "Dokumentation",
        "description": "Konvertera README-filer och dokument till delbara PDF-filer.",
        "icon": "file-text"
      },
      {
        "title": "Notes Export",
        "description": "Exportera Markdown-anteckningar till PDF för utskrift eller delning.",
        "icon": "edit-3"
      },
      {
        "title": "Rapporter",
        "description": "Skapa rapporter från Markdown med professionell styling.",
        "icon": "bar-chart"
      }
    ],
    "faq": [
      {
        "question": "Stöds GitHub Flavored Markdown?",
        "answer": "Ja, tabeller, uppgiftslistor, genomstruken och andra GFM-funktioner stöds."
      },
      {
        "question": "Kan jag anpassa stylingen?",
        "answer": "Välj bland förinställda teman eller lägg till anpassad CSS för full kontroll."
      },
      {
        "question": "Är kodblock markerade?",
        "answer": "Ja, kodblock inkluderar syntaxmarkering för vanliga språk."
      }
    ]
  },
  "email-to-pdf": {
    "title": "E-post till PDF",
    "metaDescription": "Konvertera e-postfiler (.eml, .msg) till PDF-dokument. Bevara formatering, infogade bilder, klickbara länkar och bädda in bilagor.",
    "keywords": [
      "e-post till pdf",
      "eml till pdf",
      "msg till pdf",
      "konvertera e-post",
      "e-postkonverterare",
      "spara e-post som pdf",
      "outlook till pdf"
    ],
    "description": "<p>Email till PDF konverterar dina e-postfiler (.eml- och .msg-format) till välformaterade PDF-dokument. Verktyget bevarar informationen om e-posthuvudet, brödtexten, inline-bilder med CID-ersättning, klickbara länkar och bäddar in bilagor direkt i PDF:en.</p>\n      <p>Anpassa utdataalternativ inklusive sidstorlek (A4, Letter, Legal), datumformatering med tidszonsstöd och om du ska inkludera CC/BCC-fält och bilagainformation.</p>\n      <p>All konvertering sker lokalt i din webbläsare, vilket säkerställer att dina e-postmeddelanden förblir privata och säkra.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp e-postfil",
        "description": "Ladda upp din .eml- eller .msg-e-postfil."
      },
      {
        "step": 2,
        "title": "Konfigurera alternativ",
        "description": "Ställ in sidstorlek, datumformat, tidszon och välj vilka fält som ska inkluderas."
      },
      {
        "step": 3,
        "title": "Konvertera och ladda ner",
        "description": "Konvertera till PDF med inbäddade bilagor och ladda ner resultatet."
      }
    ],
    "useCases": [
      {
        "title": "Juridiska register",
        "description": "Arkivera viktiga e-postmeddelanden som PDF med inbäddade bilagor för juridisk dokumentation.",
        "icon": "scale"
      },
      {
        "title": "Företagsarkiv",
        "description": "Konvertera affärskorrespondens till PDF för långsiktig journalföring.",
        "icon": "briefcase"
      },
      {
        "title": "Bevarande av bevis",
        "description": "Spara e-postbevis med infogade bilder och bilagor i ett icke-redigerbart PDF-format.",
        "icon": "shield"
      }
    ],
    "faq": [
      {
        "question": "Vilka e-postformat stöds?",
        "answer": "Både .eml (RFC 822) och .msg (Microsoft Outlook)-filer stöds fullt ut."
      },
      {
        "question": "Ingår bilagor?",
        "answer": "Ja! Bilagor bäddas in direkt i PDF-filen. Du kan extrahera dem från PDF-filen med en kompatibel PDF-läsare."
      },
      {
        "question": "Visas inline-bilder?",
        "answer": "Ja, inline-bilder som refereras via CID (Content-ID) konverteras automatiskt till base64-data-URI och visas i PDF-filen."
      },
      {
        "question": "Är länkar klickbara?",
        "answer": "Ja, alla HTML-länkar (<a>-taggar) och webbadresser i e-postmeddelanden med vanlig text konverteras till klickbara länkar i PDF:en."
      },
      {
        "question": "Är e-postformateringen bevarad?",
        "answer": "Ja, HTML-e-postmeddelanden behåller sin formatering så nära som möjligt, inklusive stilar, bilder och länkar."
      }
    ]
  },
  "cbz-to-pdf": {
    "title": "CBZ till PDF",
    "metaDescription": "Konvertera serietidningsarkiv (CBZ) till PDF. Bevara bildordning och kvalitet för digitala serier.",
    "keywords": [
      "cbz till pdf",
      "komisk till pdf",
      "konvertera cbz",
      "serietidningskonverterare",
      "cbz-omvandlare"
    ],
    "description": "<p>CBZ till PDF konverterar Comic Book Archive-filer till PDF-dokument. Verktyget extraherar alla bilder från CBZ-arkivet och sammanställer dem till en PDF-fil med bibehållen korrekt läsordning.</p>\n      <p>Välj bland olika sidstorleksalternativ inklusive originalbildsmått eller standardiserade serietidningsstorlekar. Perfekt för att läsa serier på enheter som stöder PDF men inte CBZ.</p>\n      <p>All konvertering sker lokalt i din webbläsare, vilket säkerställer att dina serier förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp CBZ-fil",
        "description": "Ladda upp din .cbz serietidningsarkivfil."
      },
      {
        "step": 2,
        "title": "Välj Alternativ",
        "description": "Välj inställningar för sidstorlek och bildkvalitet."
      },
      {
        "step": 3,
        "title": "Konvertera och ladda ner",
        "description": "Konvertera till PDF och ladda ner din serie."
      }
    ],
    "useCases": [
      {
        "title": "Kompatibilitet med e-läsare",
        "description": "Konvertera CBZ till PDF för e-läsare som bara stöder PDF.",
        "icon": "book"
      },
      {
        "title": "Seriearkiv",
        "description": "Skapa PDF-arkiv av din digitala seriesamling.",
        "icon": "archive"
      },
      {
        "title": "Utskriftsförberedelse",
        "description": "Konvertera digitala serier till PDF för utskrift.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Vad är CBZ-format?",
        "answer": "CBZ är ett ZIP-arkiv som innehåller serietidningssidor som bildfiler, omdöpt till .cbz-tillägget."
      },
      {
        "question": "Bevaras bildkvaliteten?",
        "answer": "Ja, bilder är inbäddade i sin ursprungliga kvalitet i PDF:en."
      },
      {
        "question": "Stöds kapslade mappar?",
        "answer": "Ja, bilder från alla mappar i arkivet extraheras och sorteras."
      }
    ]
  },
  "pdf-to-pdfa": {
    "title": "PDF till PDF/A",
    "metaDescription": "Konvertera PDF till PDF/A arkivformat. Säkerställa långsiktigt dokumentbevarande med ISO-standarder.",
    "keywords": [
      "pdf till pdfa",
      "pdf-konverterare",
      "arkiv pdf",
      "pdf-arkiv",
      "långsiktigt bevarande"
    ],
    "description": "<p>PDF till PDF/A konverterar dina PDF-dokument till PDF/A-format, ISO-standarden för långsiktig dokumentarkivering. PDF/A säkerställer att dokument kommer att vara synliga och reproducerbara i decennier.</p>\n      <p>Välj mellan PDF/A-1b (grundläggande överensstämmelse), PDF/A-2b (rekommenderas, stöder transparens) eller PDF/A-3b (tillåter inbäddade filer). Verktyget bäddar in typsnitt och förenklar transparensen efter behov.</p>\n      <p>All konvertering sker lokalt i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Ladda upp PDF-filen du vill konvertera till PDF/A."
      },
      {
        "step": 2,
        "title": "Välj PDF/A-nivå",
        "description": "Välj PDF/A-1b, PDF/A-2b eller PDF/A-3b överensstämmelsenivå."
      },
      {
        "step": 3,
        "title": "Konvertera och ladda ner",
        "description": "Konvertera till PDF/A och ladda ner arkivdokumentet."
      }
    ],
    "useCases": [
      {
        "title": "Juridiska arkiv",
        "description": "Konvertera juridiska dokument till PDF/A för långtidslagring.",
        "icon": "scale"
      },
      {
        "title": "Regeringens register",
        "description": "Följ myndigheternas arkiveringskrav med PDF/A.",
        "icon": "building"
      },
      {
        "title": "Företagsarkiv",
        "description": "Bevara viktiga affärsdokument för framtida tillgänglighet.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Vilken PDF/A-nivå ska jag använda?",
        "answer": "PDF/A-2b rekommenderas för de flesta användningsområden. Använd 1b för maximal kompatibilitet eller 3b om du behöver inbäddade filer."
      },
      {
        "question": "Vad gör PDF/A annorlunda?",
        "answer": "PDF/A bäddar in typsnitt, inaktiverar kryptering och säkerställer att alla element är fristående för framtida visning."
      },
      {
        "question": "Kan jag konvertera tillbaka från PDF/A?",
        "answer": "PDF/A-filer är standard-PDF-filer och kan öppnas normalt. Arkivfunktionerna lägger till begränsningar, inte begränsningar."
      }
    ]
  },
  "font-to-outline": {
    "title": "Konvertera teckensnitt till konturer",
    "metaDescription": "Ta bort teckensnittsberoende från PDF-dokument genom att konvertera sidor till bilder av hög kvalitet. Säkerställer kompatibilitet mellan alla system.",
    "keywords": [
      "teckensnitt att konturera",
      "konturteckensnitt",
      "ta bort teckensnitt",
      "teckensnittskompatibilitet",
      "platta pdf-teckensnitt",
      "Borttagning av pdf-teckensnitt"
    ],
    "description": "<p>Font to Outline tar bort alla teckensnittsberoende från din PDF genom att konvertera varje sida till rastrerat innehåll av hög kvalitet. Detta säkerställer att ditt dokument ser exakt likadant ut på alla system, även om de ursprungliga teckensnitten inte är installerade.</p>\n      <p>Verktyget återger varje sida med din valda DPI (150-600), tar bort inbäddade teckensnitt samtidigt som det exakta visuella utseendet bevaras. Alternativt kan du lägga till ett osynligt textlager för att bibehålla sökbarheten.</p>\n      <p>Detta är viktigt för utskriftsförberedelse, kompatibilitet över plattformar och för att undvika problem med teckensnittslicenser vid delning av dokument. All bearbetning sker lokalt i din webbläsare.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Ladda upp PDF-filen som innehåller teckensnitt som du vill ta bort."
      },
      {
        "step": 2,
        "title": "Konfigurera kvalitet",
        "description": "Välj DPI (300 rekommenderas för utskrift, 150 för skärm). Aktivera sökbar text om det behövs."
      },
      {
        "step": 3,
        "title": "Konvertera och ladda ner",
        "description": "Bearbeta filen och ladda ner den teckensnittsoberoende PDF-filen."
      }
    ],
    "useCases": [
      {
        "title": "Utskriftsförberedelse",
        "description": "Eliminera teckensnittsproblem hos kommersiella tryckerier genom att ta bort alla teckensnittsberoende.",
        "icon": "printer"
      },
      {
        "title": "Deling över plattformar",
        "description": "Dela dokument som ser identiska ut på alla enheter, oavsett installerade typsnitt.",
        "icon": "share-2"
      },
      {
        "title": "Font Licensing",
        "description": "Ta bort inbäddade teckensnitt för att undvika licensproblem vid distribution av dokument.",
        "icon": "shield"
      }
    ],
    "faq": [
      {
        "question": "Hur fungerar detta?",
        "answer": "Verktyget renderar varje sida med hög upplösning (din valda DPI) och återskapar PDF:en från dessa bilder, tar bort alla teckensnittsberoende samtidigt som det visuella utseendet bevaras."
      },
      {
        "question": "Kan jag fortfarande välja text efter konvertering?",
        "answer": "Som standard, nej. Text blir en del av bilden. Du kan dock aktivera \"Bevara sökbar text\" för att lägga till ett osynligt textlager för sök- och kopieringsfunktioner."
      },
      {
        "question": "Vilken DPI ska jag använda?",
        "answer": "300 DPI rekommenderas för utskriftskvalitet. 150 DPI räcker för skärmvisning och ger mindre filer. 600 DPI är för högsta kvalitet men skapar stora filer."
      },
      {
        "question": "Kommer filstorleken att öka?",
        "answer": "Filstorleken beror på DPI och innehåll. 150 DPI ger vanligtvis mindre filer, 300 DPI kan öka storleken, 600 DPI ökar storleken avsevärt. Komprimering tillämpas automatiskt."
      },
      {
        "question": "Är detta reversibelt?",
        "answer": "Nej, teckensnittsdata tas bort permanent. Spara en säkerhetskopia av originalet om du behöver redigerbar text med originaltypsnitten."
      },
      {
        "question": "Hur är det med vektorgrafik?",
        "answer": "Vektorgrafik (former, linjer) i den ursprungliga PDF-filen kommer att konverteras till raster tillsammans med text. Den visuella kvaliteten bevaras vid din valda DPI."
      }
    ]
  },
  "extract-tables": {
    "title": "Extrahera tabeller ur PDF",
    "metaDescription": "Upptäck och extrahera tabeller från PDF-dokument. Exportera till JSON-, Markdown- eller CSV-format.",
    "keywords": [
      "extrahera tabeller",
      "Utdrag av pdf-tabeller",
      "pdf till csv",
      "pdf till excel",
      "bordsdetektering"
    ],
    "description": "<p>Extrahera tabeller från PDF upptäcker tabelldata i dina PDF-dokument och exporterar dem i strukturerade format. Välj JSON för dataintegration, Markdown för dokumentation eller CSV för kalkylark.</p>\n      <p>Verktyget använder intelligenta detekteringsalgoritmer för att identifiera tabellstrukturer även i komplexa dokument. Ange sidintervall och justera detekteringsparametrar för optimala resultat.</p>\n      <p>All bearbetning sker lokalt i din webbläsare, vilket säkerställer att dina dokument förblir privata.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Ladda upp PDF-filen som innehåller tabeller du vill extrahera."
      },
      {
        "step": 2,
        "title": "Konfigurera detektion",
        "description": "Ställ in sidintervall och lägsta kolumn/radtröskelvärde."
      },
      {
        "step": 3,
        "title": "Exportera och ladda ner",
        "description": "Välj utdataformat (JSON/Markdown/CSV) och ladda ner."
      }
    ],
    "useCases": [
      {
        "title": "Dataanalys",
        "description": "Extrahera tabelldata för analys i kalkylblad eller databaser.",
        "icon": "bar-chart"
      },
      {
        "title": "Rapportbearbetning",
        "description": "Dra tabeller från PDF-rapporter för vidare bearbetning.",
        "icon": "file-text"
      },
      {
        "title": "Dokumentation",
        "description": "Konvertera PDF-tabeller till Markdown för teknisk dokumentation.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "Kan den upptäcka komplexa tabeller?",
        "answer": "Verktyget fungerar bäst med enkla rutnätstabeller. Komplexa sammanslagna celler kan kräva manuell justering."
      },
      {
        "question": "Vad händer om inga tabeller hittas?",
        "answer": "Försök att justera minimigränsen för kolumner/rader eller kontrollera om PDF-filen innehåller faktiska tabellstrukturer."
      },
      {
        "question": "Kan jag extrahera från specifika sidor?",
        "answer": "Ja, ange ett sidintervall för att begränsa extrahering till vissa sidor."
      }
    ]
  },
  "ocg-manager": {
    "title": "Hantera PDF-lager (OCG)",
    "metaDescription": "Hantera PDF-lager (valfria innehållsgrupper). Visa, växla, lägg till, ta bort och byt namn på lager i dina PDF-dokument.",
    "keywords": [
      "pdf-lager",
      "ocg manager",
      "valfria innehållsgrupper",
      "Synlighet för pdf-lager",
      "hantera pdf-lager"
    ],
    "description": "<p>PDF Layer Manager låter dig visa och hantera valfria innehållsgrupper (OCG) i dina PDF-dokument. OCG-lager används i tekniska ritningar, kartor och komplexa dokument för att organisera innehåll i växlingsbara lager.</p>\n      <p>Visa alla lager i din PDF, ändra deras synlighet, lägg till nya lager, ta bort oönskade eller byt namn på befintliga lager. Det här verktyget är viktigt för att arbeta med PDF-filer i lager som arkitektoniska planer, CAD-exporter och utskriftsklara dokument.</p>\n      <p>All bearbetning sker lokalt i din webbläsare, vilket säkerställer att dina dokument förblir privata och säkra.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp din PDF",
        "description": "Ladda upp en PDF-fil som innehåller lager (OCG) eller en du vill lägga till lager till."
      },
      {
        "step": 2,
        "title": "Visa lager",
        "description": "Verktyget listar automatiskt alla lager som finns i dokumentet med deras synlighetsstatus."
      },
      {
        "step": 3,
        "title": "Hantera lager",
        "description": "Växla lagersynlighet, byt namn på lager, lägg till nya eller ta bort oönskade lager."
      },
      {
        "step": 4,
        "title": "Spara och ladda ner",
        "description": "Hämta din modifierade PDF med lagerändringarna tillämpade."
      }
    ],
    "useCases": [
      {
        "title": "Tekniska ritningar",
        "description": "Hantera lager i CAD-exporter för att visa/dölja dimensioner, anteckningar eller olika vyer.",
        "icon": "ruler"
      },
      {
        "title": "Kartredigering",
        "description": "Växla olika kartlager som topografi, vägar och etiketter för anpassade kartutskrifter.",
        "icon": "map"
      },
      {
        "title": "Utskriftsförberedelse",
        "description": "Förbered PDF-filer i lager för utskrift genom att växla mellan lämpliga lager för olika versioner.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Vad är PDF-lager (OCG)?",
        "answer": "Valfria innehållsgrupper (OCG) är lager i en PDF som kan visas eller döljas. De används ofta i CAD-ritningar, kartor och komplexa dokument."
      },
      {
        "question": "Varför visar min PDF inga lager?",
        "answer": "Alla PDF-filer innehåller inte lager. Lager läggs vanligtvis till när PDF skapas från designprogramvara eller CAD-applikationer."
      },
      {
        "question": "Kommer lagerändringar att påverka det ursprungliga innehållet?",
        "answer": "Ändringar av lagersynlighet påverkar bara det som visas eller skrivs ut. Det faktiska innehållet finns kvar i dokumentet."
      }
    ]
  },
  "pdf-reader": {
    "title": "PDF-läsare",
    "metaDescription": "Gratis online PDF-läsare. Visa, navigera, zooma, rotera och skriv ut PDF-dokument direkt i din webbläsare.",
    "keywords": [
      "pdf-läsare",
      "pdf-visare",
      "se pdf online",
      "läsa pdf",
      "Pdf-webbläsare"
    ],
    "description": "<p>PDF Reader är en fullfjädrad PDF-läsare som låter dig läsa och navigera i PDF-dokument direkt i din webbläsare. Ingen mjukvaruinstallation krävs - ladda bara upp din PDF och börja läsa.</p>\n      <p>Navigera mellan sidor, zooma in och ut, rotera vyn och använd helskärmsläge för distraktionsfri läsning. Du kan också skriva ut dokument eller ladda ner dem för offlineåtkomst.</p>\n      <p>All visning sker lokalt i din webbläsare. Dina dokument laddas aldrig upp till någon server, vilket garanterar fullständig integritet.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Öppna din PDF",
        "description": "Klicka för att ladda upp eller dra och släpp en PDF-fil för att öppna den i läsaren."
      },
      {
        "step": 2,
        "title": "Navigera på sidor",
        "description": "Använd sidkontrollerna för att gå till föregående eller nästa sida, eller hoppa till ett specifikt sidnummer."
      },
      {
        "step": 3,
        "title": "Justera vy",
        "description": "Zooma in eller ut, rotera vyn eller gå in i helskärmsläge för bekväm läsning."
      },
      {
        "step": 4,
        "title": "Skriv ut eller ladda ner",
        "description": "Skriv ut dokumentet eller ladda ner det för offlineåtkomst vid behov."
      }
    ],
    "useCases": [
      {
        "title": "Dokumentgranskning",
        "description": "Granska PDF-dokument snabbt utan att installera någon programvara.",
        "icon": "book-open"
      },
      {
        "title": "Mobil läsning",
        "description": "Läs PDF-dokument på vilken enhet som helst med en webbläsare.",
        "icon": "smartphone"
      },
      {
        "title": "Snabb förhandsgranskning",
        "description": "Förhandsgranska PDF-filer innan du bestämmer dig för att ladda ner eller skriva ut dem.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "Är mitt dokument säkert?",
        "answer": "Ja, ditt dokument bearbetas helt i din webbläsare och laddas aldrig upp till någon server."
      },
      {
        "question": "Kan jag kommentera eller redigera PDF-filen?",
        "answer": "Detta verktyg är endast för visning. Använd våra Sign PDF eller Annotate PDF-verktyg för redigering."
      },
      {
        "question": "Fungerar det på mobila enheter?",
        "answer": "Ja, PDF-läsaren fungerar på alla enheter med en modern webbläsare."
      }
    ]
  },
  "digital-sign-pdf": {
    "title": "Digital signering",
    "metaDescription": "Lägg till digitala X.509-signaturer till PDF-dokument. Signera PDF-filer med PFX-, P12- eller PEM-certifikat för juridisk giltighet.",
    "keywords": [
      "digital signatur pdf",
      "x509-certifikat",
      "Pfx tecken pdf",
      "P12 tecken pdf",
      "Pem tecken pdf",
      "lagligt signera pdf"
    ],
    "description": "<p>Digital Signatur låter dig lägga till kryptografiska X.509 digitala signaturer till PDF-dokument. Till skillnad från enkla ritade signaturer ger digitala signaturer rättslig giltighet och verifiering av dokumentintegritet.</p>\n      <p>Ladda upp din certifikatfil (PFX-, P12- eller PEM-format), ange lösenordet och signera din PDF. Du kan lägga till synliga signaturer med anpassad text, bilder och positionering, eller osynliga signaturer endast för dokumentintegritet.</p>\n      <p>All signering sker lokalt i din webbläsare. Ditt certifikat och dina dokument laddas aldrig upp till någon server.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp PDF",
        "description": "Ladda upp PDF-dokumentet du vill signera digitalt."
      },
      {
        "step": 2,
        "title": "Ladda certifikat",
        "description": "Ladda upp din X.509-certifikatfil (.pfx, .p12 eller .pem) och ange lösenordet."
      },
      {
        "step": 3,
        "title": "Konfigurera signatur",
        "description": "Lägg eventuellt till orsak, plats och synlig signatur med anpassad text eller bild."
      },
      {
        "step": 4,
        "title": "Signera och ladda ner",
        "description": "Klicka på Signera PDF för att tillämpa den digitala signaturen och ladda ner det signerade dokumentet."
      }
    ],
    "useCases": [
      {
        "title": "Juridiska dokument",
        "description": "Underteckna kontrakt, avtal och juridiska dokument med juridiskt bindande digitala signaturer.",
        "icon": "scale"
      },
      {
        "title": "Företagsgodkännanden",
        "description": "Signera digitalt fakturor, inköpsorder och godkännandedokument för revisionsspår.",
        "icon": "briefcase"
      },
      {
        "title": "Dokumentintegritet",
        "description": "Se till att dokument inte har manipulerats efter undertecknandet.",
        "icon": "shield-check"
      }
    ],
    "faq": [
      {
        "question": "Vilka certifikatformat stöds?",
        "answer": "Certifikatformaten PFX (.pfx), PKCS#12 (.p12) och PEM (.pem) stöds."
      },
      {
        "question": "Är signaturen juridiskt giltig?",
        "answer": "Ja, X.509 digitala signaturer är juridiskt erkända i de flesta jurisdiktioner när ett giltigt certifikat används."
      },
      {
        "question": "Kan jag lägga till en synlig signatur?",
        "answer": "Ja, du kan lägga till en synlig signatur med anpassad text, bild, position och stil."
      }
    ]
  },
  "validate-signature": {
    "title": "Verifiera signatur",
    "metaDescription": "Verifiera digitala signaturer i PDF-dokument. Kontrollera certifikatets giltighet, undertecknarinformation och dokumentintegritet.",
    "keywords": [
      "validera pdf-signatur",
      "verifiera digital signatur",
      "kontrollera pdf-certifikat",
      "signaturverifiering"
    ],
    "description": "<p>Validate Signature låter dig verifiera digitala signaturer i PDF-dokument. Kontrollera om signaturerna är giltiga, visa certifikatinformation och bekräfta dokumentintegriteten.</p>\n      <p>Ladda upp en signerad PDF för att se alla signaturer, deras giltighetsstatus, undertecknarinformation och om dokumentet har ändrats efter signering.</p>\n      <p>All validering sker lokalt i din webbläsare. Dina dokument laddas aldrig upp till någon server.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp signerad PDF",
        "description": "Ladda upp ett PDF-dokument som innehåller digitala signaturer."
      },
      {
        "step": 2,
        "title": "Visa resultat",
        "description": "Se alla signaturer som finns i dokumentet med deras giltighetsstatus."
      },
      {
        "step": 3,
        "title": "Kontrollera Detaljer",
        "description": "Visa certifikatinformation, undertecknardetaljer och signeringstidsstämpel."
      },
      {
        "step": 4,
        "title": "Exportera rapport",
        "description": "Hämta eventuellt en JSON-rapport med valideringsresultaten."
      }
    ],
    "useCases": [
      {
        "title": "Dokumentverifiering",
        "description": "Kontrollera att undertecknade dokument är autentiska och inte har manipulerats.",
        "icon": "shield-check"
      },
      {
        "title": "Efterlevnadsrevision",
        "description": "Kontrollera signaturens giltighet för efterlevnad och revisionsändamål.",
        "icon": "clipboard-check"
      },
      {
        "title": "Certifikatgranskning",
        "description": "Visa certifikatdetaljer och utgångsdatum för undertecknade dokument.",
        "icon": "award"
      }
    ],
    "faq": [
      {
        "question": "Vad betyder \"giltig\"?",
        "answer": "En giltig signatur betyder att dokumentet inte har ändrats sedan undertecknandet och att certifikatkedjan är intakt."
      },
      {
        "question": "Kan jag validera flera PDF-filer?",
        "answer": "Ja, du kan ladda upp flera PDF-filer och validera alla signaturer i batch."
      },
      {
        "question": "Varför kan en signatur vara ogiltig?",
        "answer": "Signaturer kan vara ogiltiga om dokumentet har ändrats, certifikatet har upphört att gälla eller om certifikatet inte är pålitligt."
      }
    ]
  },
  "ai-pdf-reflower": {
    "title": "Anpassad layoutomflödning för PDF",
    "metaDescription": "Skriv om PDF-dokument till responsiva mobilvänliga layouter. Stöd Markdown och EPUB-export för förbättrad läsning på liten skärm.",
    "keywords": [
      "pdf reflow",
      "responsiv pdf",
      "pdf till markdown",
      "epub export",
      "mobil pdf-läsare"
    ],
    "description": "<p>AI PDF Layout Reflower är din ultimata följeslagare för att läsa PDF-dokument på mobila enheter. Traditionella PDF-filer använder en fast layout, vilket ofta kräver oändlig zoomning och horisontell rullning på smartphones eller surfplattor, vilket resulterar i en tråkig läsupplevelse.</p>\n      <p>Det här verktyget analyserar på ett intelligent sätt textflödet, radavstånd och fysiska koordinater för PDF-sidorna, och rekonstruerar de semantiska styckena och rubrikhierarkierna. För dokument med flera kolumner eller två kolumner slår den ihop kolumnflöden på ett intelligent sätt till ett enda responsivt flöde, vilket säkerställer smidig läsning.</p>\n      <p>Dessutom stöder den återgivning av matematiska formler till LaTeX/MathJax och erbjuder flera lästeman (Sepia, Dark, Eye-protecting Green). Du kan exportera den omformade layouten som Markdown eller en vanlig EPUB e-bok med ett enda klick.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp PDF-fil",
        "description": "Dra och släpp din PDF-fil eller klicka för att bläddra och markera den."
      },
      {
        "step": 2,
        "title": "Välj Lästema",
        "description": "Välj önskad teckenstorlek och temafärger i 3D-mobilsimulatorn till höger."
      },
      {
        "step": 3,
        "title": "Exportera dokument",
        "description": "När du är nöjd använder du den fysiska draglinan för att exportera dokumentet som Markdown eller EPUB."
      }
    ],
    "useCases": [
      {
        "title": "Mobil litteraturläsning",
        "description": "Läs akademiska uppsatser och forskningsrapporter på din telefon sömlöst utan konstant zoomning.",
        "icon": "smartphone"
      },
      {
        "title": "E-bokkonvertering",
        "description": "Konvertera texttunga PDF-filer till EPUB-filer och importera dem till Kindle eller andra e-boksläsare.",
        "icon": "book"
      },
      {
        "title": "Anteckningsarkiv",
        "description": "Konvertera strukturerat PDF-innehåll direkt till rena Markdown-filer för din personliga kunskapsbas.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "Hanterar den PDF-filer med dubbla kolumner korrekt?",
        "answer": "Ja, layouten återupptäcker de horisontella koordinaterna för textblock och strukturerar vänster och höger kolumner sekventiellt, vilket förhindrar linjeinterfoliering."
      },
      {
        "question": "Kommer bilder och matematiska formler att gå förlorade?",
        "answer": "Matematiska formler konverteras till LaTeX/MathJax-syntax för ren webbrendering och bilder bevaras i motsvarande semantiska positioner."
      },
      {
        "question": "Görs konverteringen i molnet?",
        "answer": "Nej, all layoutanalys och formatpaketering utförs lokalt i din webbläsare för att garantera absolut integritet för dina dokument."
      }
    ]
  },
  "citation-linker": {
    "title": "Källhänvisningslänkar",
    "metaDescription": "Skanna och aktivera citeringsmarkörer i PDF-filer, konvertera dem till klickbara DOI-länkar eller sidhoppsmål.",
    "keywords": [
      "citationslinker",
      "pdf hyperlänk",
      "doi-matchning",
      "akademisk medhjälpare",
      "pdf referenser"
    ],
    "description": "<p>Citation Linker är designad speciellt för akademiska forskare. I många PDF-dokument är citatmarkörer (t.ex. [1], [2]) vanlig text, vilket tvingar läsarna att bläddra fram och tillbaka till referenslistan i slutet av dokumentet, vilket avbryter deras fokus.</p>\n      <p>Det här verktyget läser PDF-text lokalt, använder mönsterigenkänning för att matcha citatmarkörer med motsvarande referensposter och lägger över klickbara PDF-länkkommentarer med hjälp av DOI-uppslagningar eller sidhoppningskoordinater.</p>\n      <p>Det genererar också en interaktiv karta över referensrelationer för att visuellt navigera i dokumentets referensnätverk.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp akademisk PDF",
        "description": "Ladda upp en PDF-uppsats eller avhandling som innehåller en bibliografi/referenssektion."
      },
      {
        "step": 2,
        "title": "Granska citat",
        "description": "Inspektera citatparen i den interaktiva kartan och redigera eller lägg till DOI-länkar manuellt om det behövs."
      },
      {
        "step": 3,
        "title": "Injicera länkar",
        "description": "Klicka på aktiveringsknappen för att lägga över hyperlänkar på PDF:en och ladda ner det uppdaterade dokumentet."
      }
    ],
    "useCases": [
      {
        "title": "Djup litteraturläsning",
        "description": "Klicka på citatmarkörer för att omedelbart se referensdetaljer eller navigera till externa DOI-sidor.",
        "icon": "link"
      },
      {
        "title": "Förberedelse för publicering",
        "description": "Se till att dina skrivna akademiska uppsatser har fullt aktiva hyperlänksnavigering innan slutlig inlämning.",
        "icon": "award"
      },
      {
        "title": "Referens kartanalys",
        "description": "Förstå litteraturhierarkier och kopplingar via den interaktiva nätverkstopologikartan.",
        "icon": "git-network"
      }
    ],
    "faq": [
      {
        "question": "Vad händer om en referens inte har någon DOI?",
        "answer": "Om en DOI inte kan hittas, faller verktyget tillbaka till en intern \"Gå till sida\"-åtgärd, så att du kan klicka på markören och hoppa direkt till referenssidan."
      },
      {
        "question": "Vilka citeringsformat stöds?",
        "answer": "Den stöder vanliga numeriska parenteser (t.ex. [1], [1-3]) och citat för författares år (t.ex. Author et al., 202X)."
      },
      {
        "question": "Kommer det att ändra utseendet på min PDF?",
        "answer": "Nej, det injicerar osynliga länkkommentarer ovanpå texten, vilket bevarar originallayouten, teckensnitten och stilen på ditt dokument."
      }
    ]
  },
  "vector-extractor": {
    "title": "Extrahera vektorer ur PDF",
    "metaDescription": "Konvertera PDF till högfientlig SVG, så att du kan välja, färga om och exportera vektordiagram, logotyper och grafik.",
    "keywords": [
      "extrahera vektorer från pdf",
      "pdf till svg",
      "Pdf vektor diagram",
      "extrahera logotyp",
      "vektor ritningar"
    ],
    "description": "<p>PDF Vector Extractor låser upp vektorbanor och konstverk inbäddade i PDF-filer. Extrahera enkelt vektordiagram, diagram eller logotyper från dokument för designarbete eller utskrift.</p>\n      <p>Under huven använder den högtrogen SVG-rendering för att dekonstruera PDF-vektorbanor till rena, standard SVG-elementträd utan förlust av precision.</p>\n      <p>Gränssnittet framhäver hovringselement med en Z-axel 3D-lagerexplosionseffekt, komplett med en färgväljarpanel för designers att justera och extrahera vektornoder.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp PDF-dokument",
        "description": "Ladda upp en PDF som innehåller vektortillgångar, diagram, diagram eller logotyper."
      },
      {
        "step": 2,
        "title": "Välj Element",
        "description": "Håll muspekaren över vektorduken för att markera element och klicka sedan för att välja en nod."
      },
      {
        "step": 3,
        "title": "Anpassa och exportera",
        "description": "Justera sökvägsattribut i panelen och ladda sedan ner som SVG eller kopiera SVG-källkoden."
      }
    ],
    "useCases": [
      {
        "title": "Design Asset Extraction",
        "description": "Extrahera snabbt företagslogotyper, ikoner och illustrationer från varumärkesriktlinjer eller broschyrer.",
        "icon": "bezier"
      },
      {
        "title": "Export av vetenskapliga diagram",
        "description": "Extrahera vektordiagram från forskningsrapporter för att använda i högupplösta utskrifter eller presentationer.",
        "icon": "presentation"
      },
      {
        "title": "Vektor Asset Recoloring",
        "description": "Ändra streck- och fyllningsfärgerna för extraherade tillgångar innan du sparar dem för webbprojekt.",
        "icon": "crown"
      }
    ],
    "faq": [
      {
        "question": "Varför kan jag inte välja vissa bilder?",
        "answer": "PDF-filer innehåller både rasterbilder (som foton eller skannade sidor) och vektorgrafik (som former och kurvor). Endast vektorvägar kan dekonstrueras till SVG-vägar."
      },
      {
        "question": "Innehåller SVG-utgången stilar?",
        "answer": "Ja, den exporterade SVG:en behåller alla ursprungliga egenskaper inklusive fyllningar, streck, opacitet, gradienter och koordinattransformationer."
      },
      {
        "question": "Kommer stora filer att släpa?",
        "answer": "Vi använder WebAssembly-acceleration, men PDF-filer med extremt komplexa CAD-ritningar eller tusentals vektorvägar kan ta några sekunder att rendera."
      }
    ]
  },
  "deep-sanitize": {
    "title": "Djuprensning av metadata",
    "metaDescription": "Torka noggrant författarmetadata, modifieringsloggar, dolda lager och föräldralösa objekt från PDF-filer för maximal sekretess.",
    "keywords": [
      "Sanering pdf",
      "tydlig metadata",
      "anonymisera pdf",
      "strippa dold vattenstämpel",
      "säker pdf"
    ],
    "description": "<p>Deep Metadata Sanitizer är ditt ultimata försvar mot metadataläckor och dold spårning. Att bara rita svarta rutor över synlig text i PDF-filer räcker inte för att skydda kommersiella hemligheter.</p>\n      <p>Det här verktyget skannar den binära PDF-strukturen för att helt radera författarinformation, skaparprogramvara, redigeringsloggar (XMP Metadata), proprietära PieceInfo-cacher och valfria OCG-innehållsgrupper (används ofta för osynliga vattenstämplar).</p>\n      <p>Den skriver också om korsreferenstabellerna (xref) helt och hållet och kasserar alla inkrementella uppdateringsblock för att säkerställa att raderade eller modifierade historiska data inte kan återställas.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp PDF",
        "description": "Välj PDF-filen som innehåller känsliga data eller ändringshistorik."
      },
      {
        "step": 2,
        "title": "Kör Scanner",
        "description": "Aktivera 3D-inneslutningsskannern för att kontrollera filen för dolda metadata och lager."
      },
      {
        "step": 3,
        "title": "Deep Sanitize",
        "description": "Klicka på sanera för att radera spårningselement och ladda ner den helt rena PDF-filen."
      }
    ],
    "useCases": [
      {
        "title": "Kontraktsdelning",
        "description": "Ta bort ritningsposter, sökvägar och tidigare revisioner innan du delar affärskontrakt med tredje part.",
        "icon": "file-signature"
      },
      {
        "title": "Anonymiserad publicering",
        "description": "Torka osynliga anteckningar och vattenstämplar för att publicera dokument anonymt och säkert.",
        "icon": "eye-off"
      },
      {
        "title": "PDF-optimering",
        "description": "Ta bort föräldralösa objekt och skräpdataströmmar för att få filer att laddas snabbare på webben.",
        "icon": "zap"
      }
    ],
    "faq": [
      {
        "question": "Hur skiljer sig detta från standardborttagning av metadata?",
        "answer": "Standardverktyg rensar bara grundläggande fält som titel eller författare. Deep Sanitizer rekonstruerar hela PDF-xref-tabellen, torkar PieceInfo, dolda vattenstämplar och historiska inkrementella revisioner."
      },
      {
        "question": "Kommer detta att påverka dokumentlayout eller text?",
        "answer": "Nej, det tar bara bort dolda beskrivningsströmmar och strukturdata. Den synliga layouten, texterna och grafiken förblir oförändrade."
      },
      {
        "question": "Tar detta bort PDF-lösenord?",
        "answer": "Nej, om en PDF-fil är krypterad måste du först låsa upp den innan du utför en djupsanering."
      }
    ]
  },
  "booklet-folding-simulator": {
    "title": "3D-häfte och vikningssimulator",
    "metaDescription": "Lägg flersidiga PDF-filer till vikbara utskriftsark, med fysiska 3D-vikningsanimationer och sadelhäftningsförhandsvisningar.",
    "keywords": [
      "3D-påläggning",
      "viksimulator",
      "sadelhäft",
      "boklayout",
      "tryckprovning"
    ],
    "description": "<p>3D Booklet & Folding Simulator är ett avancerat verktyg designat för trycksaksdesigners och förlagsproffs. Traditionell boklayout kräver beräkning av komplexa sidöverlägg och utskjutningspagineringssekvenser. Det här verktyget visualiserar och automatiserar hela processen.</p>\n      <p>Under huven mappar vår anpassade utskjutningsalgoritm en sekventiell PDF-sidlista till standardutskriftsarkslayouter (som 4-sidiga halvvikningar, 8-sidiga sadelstygn eller dragspelsveck), sammanfogar sidor på framsidan och baksidan av stora fysiska ark.</p>\n      <p>På fronten använder vi rena CSS 3D Matrix-transformeringar och fjädermassafysikkurvor för att animera arkvikning horisontellt och vertikalt, vilket ger en fysisk-liknande bindningsförhandsvisning med en hög WOW-faktor.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp PDF-fil",
        "description": "Dra och släpp PDF-dokumentet som du vill ha layout för utskrift."
      },
      {
        "step": 2,
        "title": "Välj Folding Layout",
        "description": "Välj önskat utskjutningsschema (t.ex. 4-sidig vikning, 8-sidig sadelhäft, 4-sidig dragspel)."
      },
      {
        "step": 3,
        "title": "Interaktiv 3D-förhandsvisning",
        "description": "Dra skjutreglaget för att se arket vikas i 3D och inspektera den sista sidnumreringslayouten."
      },
      {
        "step": 4,
        "title": "Generera pålagd PDF",
        "description": "Klicka på generera för att ladda ner den omarrangerade och sammanslagna fysiska PDF-filen, redo för dubbelsidig utskrift."
      }
    ],
    "useCases": [
      {
        "title": "Broschyr Prototyping",
        "description": "Förvisualisera vikningssekvensen av trippelvikningar och broschyrer för att förhindra upp och ner sidor efter utskrift.",
        "icon": "book-open"
      },
      {
        "title": "Boka sadelhäftning",
        "description": "Generera pålagda utskriftsark för flersidiga tidningar eller häften automatiskt.",
        "icon": "layers"
      },
      {
        "title": "Tryckeriet visuella hjälpmedel",
        "description": "Hjälp kunderna att visualisera hur sidor fysiskt distribueras och vikas på tryckta ark.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Vad är \"påläggning\"?",
        "answer": "Imposition är ett grundläggande steg i prepresstryck. Eftersom kommersiella pressar trycker på stora ark, ordnas sidorna ur ordning så att sidorna visas i rätt ordningsföljd när de väl är tryckta, vikta och bundna. Det här verktyget beräknar automatiskt den layouten."
      },
      {
        "question": "Ändrar 3D-förhandsgranskningen mitt PDF-innehåll?",
        "answer": "Nej, det ursprungliga PDF-innehållet återges bara som texturmappningar på 3D-arket. Den genererade PDF-filen justerar endast sidordning och placering; text och grafiska kvaliteter hålls intakta."
      },
      {
        "question": "Vad händer om mitt antal PDF-sidor inte är en multipel av 4 eller 8?",
        "answer": "Optimeraren lägger automatiskt till tomma sidor i slutet för att tillfredsställa de matematiska kraven på antalet sidor för den valda vikningslayouten."
      }
    ]
  },
  "pdf-to-slide": {
    "title": "PDF till presentationsbilder",
    "metaDescription": "Analysera PDF-konturer intelligent, extrahera vektordiagram och rekonstruera dem till fullt redigerbara PPTX-presentationer.",
    "keywords": [
      "PDF till PPT",
      "rutschkansrekonstruktion",
      "kartutvinning",
      "akademisk presentation",
      "PPTX-kompilator"
    ],
    "description": "<p>AI PDF-to-Slide Reconstructor blåser nytt liv i statiska PDF-dokument och omvandlar dem till moderna, mycket anpassningsbara PowerPoint-bilder (PPTX).</p>\n      <p>Verktyget använder en avancerad layoutextraktor som automatiskt analyserar dokumentrubriknivåer, styckerader och teckensnittsvikter för att skapa en logisk bildram. Den isolerar också vektordiagram och högupplösta tabeller, tar bort bakgrundsartefakter för att bädda in dem rent som oberoende redigerbara tillgångar.</p>\n      <p>Alla PPTX-utgångar är byggda med standard Office Open XML-element, vilket innebär att all text förblir fullt redigerbar och vektorer förlorar inte upplösning. Front-end visar en flytande \"starfield\"-kortövergångsanimation som visualiserar rekonstruktionen på ett engagerande sätt.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp Academic/Business PDF",
        "description": "Ladda upp ett PDF-dokument som innehåller strukturerade avsnitt och diagram."
      },
      {
        "step": 2,
        "title": "Analysera bildkonturer",
        "description": "Inspektera den extraherade bildstrukturen, justera titlar eller ta bort onödiga kortblock."
      },
      {
        "step": 3,
        "title": "Rekonstruera till PPTX",
        "description": "Starta kompileringsmotorn för att få en standard, redigerbar presentationsfil."
      }
    ],
    "useCases": [
      {
        "title": "Research Paper Presentation",
        "description": "Konvertera PDF-filer för akademiska tidskrifter, textstrukturer och vektordiagram till bildspel redo för samtal.",
        "icon": "graduation-cap"
      },
      {
        "title": "Sammanfattning av affärsrapport",
        "description": "Destillera massiva årliga företagsrapporter till rena presentationsutkast direkt.",
        "icon": "presentation"
      },
      {
        "title": "Demos för flera enheter",
        "description": "Undvik att kopiera skärmdumpar manuellt. Få en ren, fullt redigerbar layoutram på några sekunder.",
        "icon": "laptop"
      }
    ],
    "faq": [
      {
        "question": "Är bilderna redigerbara i Microsoft Office?",
        "answer": "Ja. Filerna genereras inbyggt i minnet enligt den officiella Office Open XML (OOXML)-specifikationen. Texter, tabeller och platshållare är helt interaktiva i PowerPoint, Keynote och WPS."
      },
      {
        "question": "Hur extraheras diagram?",
        "answer": "Motorn skannar vektorbanor och rasterlager i PDF-filen, upptäcker avgränsade områden som representerar grafer och klipper ut dem som fristående SVG-noder eller bilder med hög DPI."
      },
      {
        "question": "Fungerar detta på skannade dokument?",
        "answer": "För skannade PDF-filer som saknar faktiska textlager rekommenderar vi att du kör vårt OCR-verktyg först innan du skickar filen till Slide Reconstructor."
      }
    ]
  },
  "form-logic-designer": {
    "title": "Designer för formulärlogik",
    "metaDescription": "Designa dynamiska beteenden med hjälp av en glasmorfisk nodduk och injicera interaktiv AcroJS-logik i PDF-formulär.",
    "keywords": [
      "Pdf-formulär logik",
      "AcroJS injektion",
      "nodflöde",
      "interaktiv PDF",
      "fältberoenden"
    ],
    "description": "<p>Interactive Form Logic Designer är ett banbrytande verktyg som fyller en enorm lucka i PDF-kapacitet: skapa aktiva, lyhörda fält istället för platta, döda formulär.</p>\n      <p>Genom vår visuella duk med \"glödande glasmorfiska noder\" (byggda på React Flow), representeras formulärfält som anslutna moduler. Du kan dra länkar för att definiera relationer: t.ex. när en kryssruta är markerad ➜ aktivera en textinmatning ➜ beräkna värden automatiskt och uppdatera ett totalfält.</p>\n      <p>När den har utformats kompilerar AcroJS-motorn logiken i officiell Acrobat JavaScript och injicerar den i '/AA' (Additional Actions) ordböckerna i AcroForm. De interaktiva beteendena exekveras sedan inbyggt i vilken standard PDF-läsare som helst.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp interaktiv PDF",
        "description": "Ange en PDF-fil som redan har aktiva formulärfält (AcroForm)."
      },
      {
        "step": 2,
        "title": "Kartlägg logik i Canvas",
        "description": "Anslut fält som noder. Länka utdatahändelser (ändring, oskärpa) till målåtgärder (visa, dölj, beräkna, inaktivera)."
      },
      {
        "step": 3,
        "title": "Kompilera och ladda ner",
        "description": "Injicera den kompilerade JavaScript-logiken i PDF-ordboken och spara det slutliga smarta dokumentet."
      }
    ],
    "useCases": [
      {
        "title": "Smarta försäljningskontrakt",
        "description": "Visa eller dölj kompletterande inmatningsfält dynamiskt baserat på kundens valda termer.",
        "icon": "file-signature"
      },
      {
        "title": "Automatiserade utläggsformulär",
        "description": "Summera flera utgiftsrader och beräkna skatter dynamiskt utan manuell beräkning.",
        "icon": "calculator"
      },
      {
        "title": "Interaktiva frågesporter",
        "description": "Hoppa över irrelevanta frågor baserade på tidigare svar, vilket ger en renare mobilfyllningsupplevelse.",
        "icon": "form-input"
      }
    ],
    "faq": [
      {
        "question": "Behöver jag en PDF med redan existerande fält?",
        "answer": "Ja. Detta verktyg är utformat för att binda logiska regler till befintliga fält. Om din PDF inte har interaktiva fält, använd vårt verktyg Form Creator för att lägga till indata och kryssrutor först."
      },
      {
        "question": "Kommer denna logik att köras på vilken PDF-läsare som helst?",
        "answer": "Den körs på alla PDF-läsare som överensstämmer med Adobe PDF-standarder och stöder Acrobat JavaScript (som Adobe Acrobat Reader, Foxit Reader och större webbläsare). Minimalistiska mobilläsare kanske bara stöder grundläggande åtgärder."
      },
      {
        "question": "Påverkar detta pappersutskrifter?",
        "answer": "Inte alls. De injicerade skripten körs bara på skärmen när formuläret fylls i. Vid utskrift skrivs fältens aktuella tillstånd ut statiskt utan någon nodvisualisering."
      }
    ]
  },
  "eink-optimizer": {
    "title": "Optimering för e-boksläsare",
    "metaDescription": "Optimera PDF-filer för e-Ink-skärmar via bakgrundsrensning, Otsu-binarisering och morfologisk textvidgning.",
    "keywords": [
      "eink optimizer",
      "binarisering",
      "text i fetstil",
      "ögonvänlig läsning",
      "otsu tröskel"
    ],
    "description": "<p>e-Ink Reader Optimizer är ett måste-ha-verktyg skräddarsytt för e-läsare entusiaster som använder Kindle, Onyx Boox, Kobo eller andra e-pappersenheter.</p>\n      <p>Många skannade PDF-e-böcker lider av svaga bokstäver, leriga grå bakgrunder, brus eller skanningsskuggor när de visas på e-Ink-skärmar. Det här verktyget analyserar gråvärdeshistogram och tillämpar Otsus Binarization Thresholding för att separera text från bakgrunden och konvertera grå bakgrunder till ren vit.</p>\n      <p>Dessutom integrerar den morfologisk utvidgning för att djärva och förtjocka tunna, bleka tecken, vilket ger skarp typografi med hög kontrast. Det tröghetsdämpade kontrastreglaget låter dig finjustera den pappersliknande kontrasten i realtid.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp skannad PDF",
        "description": "Ladda upp e-böcker eller skannade dokument med svag text eller grå bakgrund."
      },
      {
        "step": 2,
        "title": "Justera skjutreglaget för kontrast",
        "description": "Dra det dämpade reglaget för att balansera borttagning av bakgrund och karaktärsfetning i realtid."
      },
      {
        "step": 3,
        "title": "Optimera och ladda ner",
        "description": "Bearbeta hela PDF-filen för att skapa ett ögonvänligt dokument med hög kontrast som är skräddarsytt för e-Ink."
      }
    ],
    "useCases": [
      {
        "title": "Restaurering av antika manuskript",
        "description": "Förtjocka blek text i skanningar av historiska böcker eller handskrivna manuskript för att göra dem läsbara.",
        "icon": "scroll"
      },
      {
        "title": "Rengöring av tentamen",
        "description": "Bleka bakgrundsskuggor från fotokopierade eller fotograferade tentor och returnerar ren svart text på vitt papper.",
        "icon": "file-text"
      },
      {
        "title": "Skräddarsydda e-pappersenheter",
        "description": "Konvertera färgade PDF-filer till optimerad gråskala, vilket förhindrar stökiga, vibrerande artefakter på monokroma skärmar.",
        "icon": "tablet"
      }
    ],
    "faq": [
      {
        "question": "Hur fungerar \"karaktärsfetningen\"?",
        "answer": "Inom bildbehandling kallas detta för dilatation. Den använder en strukturerande matris för att utöka teckenmarginalerna med en pixel, fysiskt tjockare svaga drag för att göra dem läsbara."
      },
      {
        "question": "Kommer denna process att svälla filstorleken?",
        "answer": "Tvärtom. Genom att binarisera komplexa färg-/gråskalebilder till enkla svartvita layouter kan standardkomprimering (som CCITT Group 4) minska PDF-filens storlek avsevärt."
      },
      {
        "question": "Stöder detta inbyggda PDF-filer?",
        "answer": "Ja. Inbyggda vektor-PDF-filer rastreras med höga upplösningar i bakgrunden, optimeras och kompileras tillbaka, vilket säkerställer enhetlig läsning med hög kontrast."
      }
    ]
  },
  "cert-cryptor": {
    "title": "Certifikatskryptering och signering",
    "metaDescription": "Säkra PDF-filer med asymmetrisk certifikatkryptering med offentlig nyckel, ihopparad med ett 3D-guld vaxförseglingsavtryck och PKCS#7-signatur.",
    "keywords": [
      "certifikatkryptering",
      "vaxsignatur",
      "digital signatur",
      "asymmetrisk krypta",
      "PKCS7 signatur"
    ],
    "description": "<p>3D Wax-Seal & Certificate Cryptor ger säkerhet av militär kvalitet och förstklassig fysisk estetik för känsliga företagsfiler, examina eller avtal.</p>\n      <p>Tekniskt sett erbjuder den asymmetrisk kryptering med publik nyckel: importera en mottagares certifikat för publika nyckel (.cer/.crt) för att låsa PDF-strömmen; endast innehavaren av den matchande privata nyckeln (.pfx) kan dekryptera den. Den genererar också digitala standardsignaturer PKCS#7 för att säkerställa dokumentmanipuleringssäker integritet.</p>\n      <p>Visuellt har vi en fysisk 3D-stämpel i guld eller rött vax. När du skriver under kommer en vackert återgiven stämpel ned med ett tillfredsställande mekaniskt ljud, vilket lämnar en 3D-vaxsigill med realistiska normalkartade höjdvariationer och vaxavrinning på sidan, omgiven av glödande kryptografiska spår.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp PDF och Cert",
        "description": "Lägg till din PDF och importera ditt signeringscertifikat (.pfx) eller mottagarens offentliga certifikat (.cer)."
      },
      {
        "step": 2,
        "title": "Placera 3D-stämpeln",
        "description": "Dra och lokalisera förseglingen på dokumentförhandsgranskningen och välj en vaxstil (t.ex. guld, röd)."
      },
      {
        "step": 3,
        "title": "Tryck och signera",
        "description": "Klicka på exekvera för att titta på 3D-vaxtätningsceremonin, som genererar en digital signatur av fysisk kvalitet."
      },
      {
        "step": 4,
        "title": "Hämta säkrad PDF",
        "description": "Spara utdatadokumentet, nu kryptografiskt låst och stämplat."
      }
    ],
    "useCases": [
      {
        "title": "Diplom och certifikat",
        "description": "Fäst högt värderade 3D-vaxmärken på digitala diplom och utmärkelser, uppbackade av äkta digitala signaturer.",
        "icon": "award"
      },
      {
        "title": "Konfidentiella avtal",
        "description": "Lås känsliga kontrakt med kundens offentliga certifikat så att endast deras säkra fysiska nyckelkort kan låsa upp det.",
        "icon": "shield-alert"
      },
      {
        "title": "Officiella pressmeddelanden",
        "description": "Signera offentliga meddelanden digitalt för att förhindra skadliga textredigeringar eller spoofing.",
        "icon": "stamp"
      }
    ],
    "faq": [
      {
        "question": "Är vaxtätningen bara en bild eller en riktig signatur?",
        "answer": "Både. Systemet återger ett otroligt realistiskt 3D-vaxavtryck med normalt kartlagt djup (visuellt lager) och kodar en autentisk, manipuleringssäker PKCS#7 kryptografisk signatur inuti PDF:en (datalager)."
      },
      {
        "question": "Vad är \"certifikatbaserad kryptering\"?",
        "answer": "Det är en lösenordslös krypteringsteknik. Du krypterar filen med mottagarens publika nyckel. Läsaren söker automatiskt efter sitt lokala privata certifikat för att dekryptera filen sömlöst, vilket säkerställer robust säkerhet."
      },
      {
        "question": "Kan jag anpassa stämpeldesignen?",
        "answer": "Ja. Vi tillhandahåller flera mönster som PDFCraft-vattenstämpeln eller en Royal Crest, och du kan justera vaxsmältningsradien och normalkartans indragningsdjup i panelen."
      }
    ]
  },
  "passport-id-composer": {
    "title": "Dubbelsidig ID-layout",
    "metaDescription": "Komponera omedelbart både fram- och baksidan av ID-kort eller pass på en enda A4-sida med valfria vattenstämplar mot förfalskning.",
    "keywords": [
      "ID-kortskompositör",
      "passpåläggande",
      "A4 dubbelsidig kopia",
      "ID-kortsutskrift",
      "vattenstämpel mot förfalskning"
    ],
    "description": "<p>Pass & ID Double-sided Composer är ett otroligt användbart produktivitetsverktyg för vanliga affärs- och personliga verksamheter.</p>\n      <p>När vi ansöker om bankkonton, onboarding eller undertecknar avtal behöver vi ofta kopior av båda sidor av ID-kort. Det här verktyget accepterar fram- och bakbilder eller PDF-sidor och arrangerar dem exakt på en enda A4-sida som överensstämmer med nationella standardupplösningar för layout.</p>\n      <p>Dessutom kan du anpassa överlappande genomskinliga vattenstämplar mot förfalskning (t.ex. \"ENDAST FÖR OMBOARDING\") för att förhindra återanvändning av otillåten dokument. Den har till och med en 3D-glöd lasersvep kopiator skannerdörr visuell effekt för att leverera premium feedback.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp ID-filer",
        "description": "Ladda upp fram- och bakfoton/skanningar av ditt ID eller pass (upp till 2 filer)."
      },
      {
        "step": 2,
        "title": "Konfigurera säker vattenstämpel",
        "description": "Mata in anpassad textöverlagring för att begränsa obehörig dokumentreplikering."
      },
      {
        "step": 3,
        "title": "Skriv och ladda ner",
        "description": "Klicka på exekvera för att skapa en ensidig utskriftsklar A4 PDF."
      }
    ],
    "useCases": [
      {
        "title": "HR onboarding inlämning",
        "description": "Justera snabbt medarbetar-ID-kopior och applicera skyddande vattenstämplar.",
        "icon": "user"
      },
      {
        "title": "Regering och banktjänst",
        "description": "Förbered standardiserade ID-utskrifter som uppfyller fysiska arkivkrav.",
        "icon": "landmark"
      },
      {
        "title": "Resesäkerhetskopior",
        "description": "Ordna passsidor och visumdetaljer på ett enhetligt A4-papper.",
        "icon": "plane"
      }
    ],
    "faq": [
      {
        "question": "Kommer vattenstämplar att blockera identitetstextdetaljer?",
        "answer": "Nej. Vattenstämpeln återges med en noggrant avstämd 15 % opacitet för att blockera förfalskning utan att offra läsbarheten av text- eller fotofält."
      },
      {
        "question": "Är storleken på det sammansatta kortet korrekt?",
        "answer": "Ja. Det återger ID-kortet med standardmåttet 85,6 mm × 54 mm perfekt skalat på A4-sidan."
      },
      {
        "question": "Har den stöd för körkort?",
        "answer": "Ja, det fungerar utmärkt för alla kortbaserade identitetsskanningar."
      }
    ]
  },
  "annotation-exporter": {
    "title": "Exportera kommentarer",
    "metaDescription": "Extrahera PDF-kommentarer, anteckningar, markeringar och understrykningar och strukturera dem i Markdown/JSON-anteckningsböcker i linje med konturkapitel.",
    "keywords": [
      "exportera kommentarer",
      "extrahera pdf-höjdpunkter",
      "Anteckningar för pdf-läsare",
      "markdown disposition anteckningsböcker",
      "studiesammanfattningshjälpare"
    ],
    "description": "<p>Den smarta annoteringsexportören är en kraftfull arbetsyta som låser upp fullt värde från dina PDF-anteckningar.</p>\n      <p>När vi genomför litteraturrecensioner eller läser omfattande e-böcker använder vi mycket högdagrar och klisterlappar. Det här verktyget avserialiserar PDF-ordboken <code>/Annots</code> på låg nivå och extraherar alla markeringar, anteckningar, understrykningar och handritade bläckmarkörer.</p>\n      <p>Den anpassar automatiskt kommentarerna med deras respektive konturrubriker, vilket skapar en strukturerad Markdown- eller JSON-anteckningsbok med sidreferensankare. Se dina höjdpunkter sväva vackert in i notebookpanelen i frostat glas.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Importera kommenterad PDF",
        "description": "Ladda upp en PDF-uppsats eller bok som innehåller dina understrykningar, höjdpunkter eller kommentarer."
      },
      {
        "step": 2,
        "title": "Konfigurera filter och format",
        "description": "Välj de anteckningstyper du vill extrahera och välj Markdown eller JSON."
      },
      {
        "step": 3,
        "title": "Extrahera anteckningsboken",
        "description": "Klicka på exekvera för att analysera kommentarströmmen och sammanställa din dispositionssammanfattning."
      }
    ],
    "useCases": [
      {
        "title": "Vetenskaplig litteratursyntes",
        "description": "Extrahera läsanteckningar över flera tidningar i Markdown-mallar för att komponera upplysta recensioner direkt.",
        "icon": "graduation-cap"
      },
      {
        "title": "Studietidskriftssammanställning",
        "description": "Samla vackra insikter och personliga kommentarer från läroböcker till Obsidian-databaser.",
        "icon": "book"
      },
      {
        "title": "Dokumentera kollaborativ revision",
        "description": "Samla recensionskorrigeringar från olika teammedlemmar och upprätta handlingslistor.",
        "icon": "users"
      }
    ],
    "faq": [
      {
        "question": "Kan den extrahera tabletthandritade bläckdrag?",
        "answer": "Ja. Så länge de handritade märkena lagras som vanliga PDF-bläckanteckningar, kan verktyget isolera och strukturera deras sidpositioner perfekt."
      },
      {
        "question": "Varför är vissa markerade utdrag tomma?",
        "answer": "Om PDF:en är en icke-sökbar bildskanning som saknar underliggande text, markerar endast butikskoordinater. Kör OCR på PDF-filen först och extrahera sedan kommentarer."
      },
      {
        "question": "Går Markdown-länkarna tillbaka till PDF-filen?",
        "answer": "Den exporterade filen listar exakta sidnummer och ursprungliga konturrubriker för att göra korsreferenserna sömlösa."
      }
    ]
  },
  "batch-watermark-remover": {
    "title": "Ta bort vattenstämplar i batch",
    "metaDescription": "Skrubba fysiskt vattenstämpelsträngar och XObject-bilder från PDF-innehållsströmmen utan att förstöra layouter.",
    "keywords": [
      "ta bort vattenstämpeln",
      "Pdf vattenstämpel raderare",
      "rensning av innehållsström",
      "batch rengöring av vattenstämpel",
      "ta bort vattenstämpel"
    ],
    "description": "<p> Batch Watermark Remover är ett toppmodernt PDF-desinfektionsmedel som rent fysiskt rengör dokument.</p>\n      <p>Generiska vattenstämpelborttagningsmedel brukar bara lägga över vita block eller förvränga dokumentavståndet. Det här verktyget använder en robust <strong>Content Stream Purge</strong>-teknik.</p>\n      <p>Det analyserar renderingsoperatorerna på låg nivå på varje sida, identifierar specifika vattenmärkessträngkommandon (t.ex. \"Konfidentiellt\", \"UTKAST\") eller bakgrundsbildobjekt och tar bort eller skriver över dem fysiskt. Vattenstämplarna försvinner helt, vilket bevarar den ursprungliga formateringen och vektorkvaliteten.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp vattenmärkt fil",
        "description": "Tillhandahåll PDF-dokumentet som visar kommersiella logotyper eller säkerhetsetiketter."
      },
      {
        "step": 2,
        "title": "Definiera målvattenstämpel",
        "description": "Mata in den exakta strängen för att radera, eller växla genomskinlig XObject-bildrensning."
      },
      {
        "step": 3,
        "title": "Kör fysisk rensning",
        "description": "Klicka på exekvera för att skrubba innehållsoperatörerna med hög tillförlitlighet."
      }
    ],
    "useCases": [
      {
        "title": "Arkivering av företagstillgångar",
        "description": "Ta bort utgångna \"Konfidentiella\" eller \"Utkast\" vattenstämplar för allmän spridning.",
        "icon": "archive"
      },
      {
        "title": "Rensa bakgrundsröran",
        "description": "Skrubba tunga bakgrundsbilder som distraherar läsarna från att skanna text.",
        "icon": "eye"
      },
      {
        "title": "Återanvändning av dokument",
        "description": "Rengör gamla varumärkeselement för sidfot för att enkelt tillämpa nya företagsmallar.",
        "icon": "copy"
      }
    ],
    "faq": [
      {
        "question": "Kan de rensade vattenstämplarna återställas?",
        "answer": "Nej. Till skillnad från visuella masker, skriver vi om den binära sidans ström för att radera operatorerna och lämnar inga spår."
      },
      {
        "question": "Stöder den komplexa gradienter?",
        "answer": "Om vattenstämpeln lagras som en separat textnod eller bild XObject, kan verktyget isolera och fysiskt torka det."
      },
      {
        "question": "Kommer det att ändra normal sidtext?",
        "answer": "Nej. Skrubbningsmotorn riktar sig endast mot operatörer som matchar den specificerade vattenstämpelsignaturen; vanlig text förblir orörd."
      }
    ]
  },
  "smart-data-redactor": {
    "title": "Censurering av känsliga data",
    "metaDescription": "Upptäck automatiskt telefonnummer, e-postmeddelanden och ID:n, överlägg ogenomskinliga masker och radera fysiskt underliggande textströmmar.",
    "keywords": [
      "automatisk redigering",
      "redigera integritet pdf",
      "radera e-post pdf",
      "mask telefonnummer",
      "gdpr-efterlevnadsverktyg"
    ],
    "description": "<p> Smart Privacy Data Redactor är ett automatiserat verktyg utformat för att säkerställa robust dokumentintegritetsefterlevnad.</p>\n      <p> Att helt enkelt lägga över svarta rutor i vanliga redigerare är osäkert eftersom den underliggande texten fortfarande kan kopieras. Det här verktyget implementerar äkta <strong>NLP-mönstermatchning och sanering av fysisk innehållsström</strong>.</p>\n      <p>Den skannar dokumentet efter e-post, telefonnummer, SSN:er eller anpassade sökord, placerar en mattsvart premiummask över koordinaterna och skriver över teckenströmmen permanent med <code>[REDACTED]</code>, vilket blockerar kopiera-klistra-läckor.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp mål-PDF",
        "description": "Ange kontraktet eller uttalandet som visar känsliga kunduppgifter."
      },
      {
        "step": 2,
        "title": "Välj redigeringsregler",
        "description": "Kontrollera målmönster (e-post, telefon, ID) eller definiera anpassade känsliga ord."
      },
      {
        "step": 3,
        "title": "Autoredigera och ladda ner",
        "description": "Klicka på kör för att lägga över säkra masker och torka textströmmarna."
      }
    ],
    "useCases": [
      {
        "title": "Dela kommersiella avtal",
        "description": "Publicera affärsdokument på ett säkert sätt genom att dölja personliga löner, telefonnummer eller e-postmeddelanden.",
        "icon": "file-signature"
      },
      {
        "title": "Återuppta anonymisering av databasen",
        "description": "Ta bort sökandes namn, kontaktuppgifter eller adresser för att följa strikta integritetsbestämmelser.",
        "icon": "user-check"
      },
      {
        "title": "Bokslutsfördelning",
        "description": "Dölj specifika reskontranummer eller aktieägarnamn innan du publicerar rapporter.",
        "icon": "pie-chart"
      }
    ],
    "faq": [
      {
        "question": "Är redigerade detaljer verkligen omöjliga att kopiera?",
        "answer": "Ja. Vi skriver om sidinnehållsströmmen för att radera tecknen. Genom att kopiera och klistra in från den redigerade rutan extraheras endast strängen \"[REDACTED]\"."
      },
      {
        "question": "Fungerar det för skannade PDF-bilder?",
        "answer": "Det här verktyget riktar sig till vektortextströmmar. För skannade bildfiler, använd först vårt OCR-verktyg eller beskär manuellt."
      },
      {
        "question": "Är det röda HUD-målomfånget sparat i filen?",
        "answer": "Nej, det är en underbar frontend interaktiv laddningseffekt. Utdata-PDF-filen visar vanliga rena svarta rektanglar."
      }
    ]
  },
  "bookmarks-auto-generator": {
    "title": "Generera bokmärken automatiskt",
    "metaDescription": "Analysera dokumentlayouthierarki och regexmönster (t.ex. kapitel) för att generera och injicera /Outline-bokmärkeskataloger.",
    "keywords": [
      "skapa bokmärken",
      "Pdf disposition byggare",
      "injicera bokmärken pdf",
      "teckenstorlekskatalog",
      "kontur trädbyggare"
    ],
    "description": "<p>Auto Bookmarks Generator ger långa, ostrukturerade PDF-dokument absolut klarhet.</p>\n      <p> Att skanna igenom böcker eller häften utan konturnavigering är smärtsamt. Det här verktyget analyserar typografiska hierarkier (som teckenstorlekar och vikter) tillsammans med regler för regex (som \"Kapitel 1\", \"Avsnitt 1.1\") för att automatiskt härleda rubriker.</p>\n      <p>Den kompilerar och injicerar sedan dessa rubriker direkt i PDF-ordboken <code>/Outline</code>. Alla standardvisare kommer sedan att visa en vackert strukturerad navigeringssidofält på flera nivåer, uppbackad av en interaktiv 3D-konturförhandsgranskning.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Tillhandahåll ostrukturerad PDF",
        "description": "Ladda upp stora broschyrer, akademiska uppsatser eller e-böcker som saknar en katalogsida."
      },
      {
        "step": 2,
        "title": "Ställ in rubrikreglerna",
        "description": "Konfigurera strategier som anger trösklar för lägsta teckenstorlek och matchningsregler."
      },
      {
        "step": 3,
        "title": "Bygg och injicera",
        "description": "Klicka på exekvera för att rendera konturnoderna och fysiskt skriva konturbokmärkena."
      }
    ],
    "useCases": [
      {
        "title": "Organisering av tekniska manualer",
        "description": "Automatiskt kompilera kapitel på flera nivåer för standardriktlinjer, vilket sparar timmar av manuell indexering.",
        "icon": "tool"
      },
      {
        "title": "Examensarbete",
        "description": "Injicera rena kapslade bokmärken som matchar exakta akademiska inlämningsstandarder.",
        "icon": "graduation-cap"
      },
      {
        "title": "Optimering av e-boknavigering",
        "description": "Strukturera skannade textpublikationer i läsbara kapitel för surfplattor eller mobilläsare.",
        "icon": "tablet"
      }
    ],
    "faq": [
      {
        "question": "Kan det matcha anpassade kapitelformat?",
        "answer": "Ja. Du kan lägga till anpassade regexmönster i sidofältspanelen (t.ex. `^Part\\s+\\w+`) för att rikta in sig på unika layouter."
      },
      {
        "question": "Kommer detta att påverka den visuella sidpresentationen?",
        "answer": "Nej. Verktyget lägger bara till en intern strukturell bokmärkeskatalog. Sidornas text och visuella tillgångar förblir orörda."
      },
      {
        "question": "Hur många bokmärkesnivåer stöds?",
        "answer": "Verktyget stöder djupt kapslade bokmärkesstrukturer, vilket tillåter kapitel-, avsnitts- och underavsnittslayouter."
      }
    ]
  },
  "batch-barcode-injector": {
    "title": "Infoga streckkoder i batch",
    "metaDescription": "Generera anpassade QR/Code128-taggar och injicera dem exakt i bulk-PDF-sidor med anpassade riktlinjer.",
    "keywords": [
      "generera qr pdf",
      "streckkodsinjektor",
      "tillgångstagg pdf",
      "qr-koordinatpositionering",
      "stämpla streckkoder"
    ],
    "description": "<p> Precisionsinjektorn för batchstreckkoder överbryggar spårning av digital tillgång med fysisk dokumentindexering.</p>\n      <p>Vid lagerhållning, kontraktsgranskning eller logistik behöver vi ofta stämpla unika streckkoder på fakturor eller enhetskort. Detta verktyg gör det otroligt enkelt.</p>\n      <p>Generera mycket läsbara QR-koder eller Code128-streckkoder och använd vår underbara arbetsyta med gröna laserguider för att placera dem. En ren skanningsljudsignal utlöses vid placering, vilket ger högklassig feedback.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp dokument",
        "description": "Dra och släpp en- eller flersidiga PDF-filer som representerar avtal eller fraktlistor."
      },
      {
        "step": 2,
        "title": "Placera streckkodskoordinater",
        "description": "Ställ in kodtyp, värde och dra placeringsrutan för att ange koordinater."
      },
      {
        "step": 3,
        "title": "Stämplar och ladda ner",
        "description": "Klicka på exekvera för att återge kodlagret till de riktade sidindexen."
      }
    ],
    "useCases": [
      {
        "title": "Spårning av kontraktsvalidering",
        "description": "Applicera en unik QR-kod som visar anti-förfalskning detaljer på rubriken av kontrakt.",
        "icon": "file-check"
      },
      {
        "title": "Kodning av fraktlistor",
        "description": "Placera Code128-streckkoder på målplatserna för snabb validering av lagerskanningspistoler.",
        "icon": "truck"
      },
      {
        "title": "Kortning av tillgångsregistrering",
        "description": "Lägg till QR-koder för lager som visar underhållsspecifikationer på ark med fysisk utrustning.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Är de genererade streckkoderna mycket skanningsbara?",
        "answer": "Ja. Vi bäddar in förlustfria högupplösta PNG-representationer som förblir skarpa även när de skrivs ut i mycket små dimensioner."
      },
      {
        "question": "Kan jag injicera unika värden på varje sida?",
        "answer": "För närvarande tillämpar batchkörningen samma konfigurerade kod på alla valda sidor. Multi-värderad excel-import planeras i en framtida uppdatering."
      },
      {
        "question": "Vad representerar `pt`-koordinaten?",
        "answer": "`pt` (Point) är den fysiska standardenheten för PDF (72 pt = 1 tum). A4-sidor representeras som 595 × 842 pt."
      }
    ]
  },
  "signature-ink-optimizer": {
    "title": "Extrahera signatur och stämpel",
    "metaDescription": "Extrahera handskrivna signaturer och röda företagsstämplar från foton, ta bort pappersskuggbrus och exportera transparenta PNG-filer.",
    "keywords": [
      "extrahera signatur",
      "transparent signatur bakgrund",
      "rent stämpelfoto",
      "skärpa handsignaturen",
      "png tätningstillverkare"
    ],
    "description": "<p> Signature & Stamp Chroma Ink Optimizer fungerar som en professionell bläckrenare med hög kvalitet.</p>\n      <p>Signaturer eller företagssigill som fångas på telefoner lider ofta av gul papperston, ojämna skuggor och rynkor på sidan. Att klistra in dem direkt på kontrakts-PDF-filer ser amatörmässigt ut.</p>\n      <p>Det här verktyget separerar alfakanalen baserat på luminans och färgrymd. Den bleker pappersbakgrunder fullständigt samtidigt som den skärper stämpelrött (Chroma Ink) och handstil svart. Resultatet är en premium, transparent PNG-stämpel med äkta bläckstrukturer.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp sigillfoto",
        "description": "Tillhandahåll ett telefonfångat foto av din signatur eller stämpel."
      },
      {
        "step": 2,
        "title": "Justera rengöringsreglagen",
        "description": "Flytta skjutreglagen för kontrast och luminans för att isolera bakgrundsbruset i realtid."
      },
      {
        "step": 3,
        "title": "Hämta ren signatur",
        "description": "Exportera som transparent PNG redo att stämplas på formella dokumentavtal."
      }
    ],
    "useCases": [
      {
        "title": "Professionell e-signaturförberedelse",
        "description": "Konvertera grå signaturfoton till vackra, transparenta lager för att underteckna avtal.",
        "icon": "file-signature"
      },
      {
        "title": "Företagssälsanering",
        "description": "Rengör fysiska stämpelskanningar genom att slänga pappersfiberljud, förbereda skarpa genomskinliga stämpelförseglingar.",
        "icon": "stamp"
      },
      {
        "title": "Dragen linjekonstextraktion",
        "description": "Isolera svarta streck från ritningsskissböcker för enkla arbetsflöden för färgläggning i Photoshop.",
        "icon": "edit"
      }
    ],
    "faq": [
      {
        "question": "Hur skiljer sig självanpassande alfaextraktion från normal nyckling?",
        "answer": "Standard chroma-keying får ofta signaturstrecksdetaljer att se blockiga och pixlade ut. Vår algoritm isolerar endast vitt/gult bakgrundsljud och jämnar ut bläckkanterna."
      },
      {
        "question": "Vilka bildformat stöds?",
        "answer": "Vi stöder JPG, JPEG och PNG. För bästa resultat, ta din signaturfoto under stark, jämn belysning."
      },
      {
        "question": "Kommer handstilsdetaljen att ändras?",
        "answer": "Nej. Pixelfiltreringen verkar på de ursprungliga koordinaterna och skärper kontrasten samtidigt som äkta streckstrukturer bibehålls."
      }
    ]
  },
  "dead-link-debugger": {
    "title": "Reparera brutna länkar",
    "metaDescription": "Skanna alla URL-åtgärder och länkkommentarer i PDF, upptäck nåbarhet och injicera omdirigeringar.",
    "keywords": [
      "dead link pdf",
      "edit pdf hyperlinks",
      "pdf link validation",
      "redirect link pdf",
      "update urls in pdf"
    ],
    "description": "<p>Dead Link Debugger är en djup strukturell redigerare som garanterar länkinteraktionskvalitet i publicerade filer.</p>\n      <p>Trassiga webbadresser (404/500) i manualer, whitepapers eller guider minskar varumärkesauktoriteten. Detta verktyg låter dig hantera hyperlänksdatabasen sömlöst.</p>\n      <p>Den analyserar <code>/Link</code>-ordböckerna på låg nivå på varje sida, undersöker dem och visar länkstatus i ett interaktivt rutnät (rött för döda länkar, orange för omdirigeringar). Skriv bara in den uppdaterade omdirigeringsadressen så skriver verktyget det nya målet direkt tillbaka till den binära PDF-strömmen.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Tillhandahåll måldokument",
        "description": "Ladda upp PDF-manualen eller katalogen som innehåller länkar för att felsöka."
      },
      {
        "step": 2,
        "title": "Skanna och uppdatera",
        "description": "Låt felsökaren extrahera alla URL-enheter. Mata in nya omdirigeringsadresser för trasiga objekt."
      },
      {
        "step": 3,
        "title": "Spara omdirigeringsuppdateringar",
        "description": "Klicka på exekvera för att skriva om /URI-åtgärder och ladda ner den korrigerade PDF-filen."
      }
    ],
    "useCases": [
      {
        "title": "Flyer trasiga länkar snabbkorrigering",
        "description": "Korrigera omedelbart felaktiga webbadresser på publicerade flygblad utan att öppna originaldesignredigerare igen.",
        "icon": "refresh-cw"
      },
      {
        "title": "Verifiering av bibliografilänkar",
        "description": "Verifiera länkar till akademisk bibliografi i rapporter, uppdatera referenser för att behålla auktoriteten.",
        "icon": "book"
      },
      {
        "title": "Uppdateringar om företagsrebranding",
        "description": "Batchuppdatera gamla webbadresser i företags-PDF-filer när företagets domännamn ändras.",
        "icon": "globe"
      }
    ],
    "faq": [
      {
        "question": "Varför kontrolleras inte länkens tillgänglighet fullständigt online?",
        "answer": "Webbläsare tillämpar strikta CORS-policyer som blockerar direkt kontroll av flera ursprungslänkar. Vårt verktyg listar länkarna tydligt och låter dig snabbfixa dem manuellt."
      },
      {
        "question": "Kommer detta att ändra den visuella textrepresentationen på sidan?",
        "answer": "Nej. Det ändrar bara den underliggande `/URI`-navigeringsåtgärden. Den visuella länktexten förblir oförändrad."
      },
      {
        "question": "Stöder den modifiering av interna bokmärken?",
        "answer": "Detta verktyg hanterar externa `/URI`-hyperlänkar. För intern layoutnavigering, använd vårt interaktiva TOC-verktyg."
      }
    ]
  },
  "interactive-toc-generator": {
    "title": "Skapa interaktiv innehållsförteckning",
    "metaDescription": "Skapa estetiska innehållsförteckningssidor, infoga dem förinnehåll och koppla in interna dubbelriktade GoTo-ankare.",
    "keywords": [
      "generate table of contents",
      "interactive toc pdf",
      "bidirectional anchor link",
      "pdf index page builder",
      "goto page action"
    ],
    "description": "<p>Interactive TOC Builder introducerar en revolutionerande navigeringsupplevelse till omfattande PDF-filer.</p>\n      <p>Att bläddra igenom hundratals sidor i ostrukturerade dokument för att hitta målkapitel är frustrerande. Det här verktyget introducerar <strong> Dubbelriktad TOC-kompilering</strong>.</p>\n      <p>Den skannar rubriker och genererar en origami-inspirerad, premium innehållsförteckningssida som infogas direkt efter omslaget. Förutom att skapa klickbara /GoTo-länkar för varje indexrad, injicerar den ett litet, elegant \"TOC ↩\" svävande ankare i hörnet av varje målkapitelsida. Läsare kan hoppa fram och tillbaka direkt och njuta av webbliknande navigering.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Tillhandahåll PDF-dokument",
        "description": "Ladda upp en rapport, e-bok eller förslag som behöver en interaktiv katalog."
      },
      {
        "step": 2,
        "title": "Ställ in TOC-titel & index",
        "description": "Anpassa huvudrubriken och välj sidindex för att infoga innehållsförteckningssidan."
      },
      {
        "step": 3,
        "title": "Väva ankare & spara",
        "description": "Klicka på kör för att kompilera sidorna och skriva navigeringen med dubbla länkar."
      }
    ],
    "useCases": [
      {
        "title": "Årlig företagsredovisning polering",
        "description": "Injicera en vacker indexsida efter försättsbladet så att aktieägarna kan hoppa mellan finansiella diagram.",
        "icon": "file-bar"
      },
      {
        "title": "Avhandlingsindexering",
        "description": "Snabb kompilering av standardindex anpassade till universitetets formateringsregler.",
        "icon": "bookmark"
      },
      {
        "title": "Bruksanvisning navigering",
        "description": "Hjälp handboksläsare att snabbt hoppa från felsökningsblad tillbaka till huvudinformationen.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "Hur fungerar de dubbelriktade ankarna?",
        "answer": "Vi skapar standardlänkkommentarer på innehållsförteckningssidan som riktar in sig på respektive sidor; sedan bäddar vi in ​​en länk tillbaka till TOC-sidan på alla målkapitelblad."
      },
      {
        "question": "Kommer att bryta befintliga sidnummer om du infogar TOC-sidan?",
        "answer": "Nej. Kompilatorn står för förskjutningen av den nyligen infogade TOC-sidan, och säkerställer att alla måldestinationer är anpassade."
      },
      {
        "question": "Är innehållsförteckningen giltig när den skrivs ut fysiskt?",
        "answer": "Ja. Den genererade innehållsförteckningen listar rena fysiska sidnummer för att vägleda pappersläsare samtidigt som det möjliggör klickbara länkar på skärmen."
      }
    ]
  },
  "global-invoice-parser": {
    "title": "Tolka och konvertera fakturor",
    "metaDescription": "Extrahera valutasummor från multinationella fakturor, kör beräkningar och stämpla interaktiva växlingsreskontra av frostat glas.",
    "keywords": [
      "translate invoice",
      "invoice currency converter",
      "exchange rate calculator pdf",
      "stamp local currency",
      "global invoice tool"
    ],
    "description": "<p>The Global Invoice Translator ger ultimat klarhet för internationella finansteam och globala köpare.</p>\n      <p>Hantering av fakturor i flera valutor ($ , € , ¥) involverar ofta tråkig manuell aritmetik. Det här verktyget möjliggör <strong>på plats etikettöversättning och realtidsväxelkurskonvertering</strong>.</p>\n      <p>Den skannar dokumentet efter prissummor, kör beräkningar baserade på valutariktmärken och stämplar fysiskt ett elegant halvtransparent frostat glas \"Valutakursreskontra\" i sidmarginalen. Den återges med en underbar rullande numerisk visuell effekt för spelautomater, vilket ger absolut kontroll över global fakturering.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp faktura PDF",
        "description": "Importera alla fakturor som faktureras i utländsk valuta (t.ex. USD, EUR, JPY)."
      },
      {
        "step": 2,
        "title": "Välj lokal valuta",
        "description": "Välj din lokala valuta (t.ex. CNY) och ange en anpassad eller realtidsväxelkurs."
      },
      {
        "step": 3,
        "title": "Applicera reskonstämpel",
        "description": "Klicka på exekvera för att lägga över den vackra växelkursreskontran redo för redovisning."
      }
    ],
    "useCases": [
      {
        "title": "Ersättning för utländska tjänsteresor",
        "description": "Konvertera reseräkningar till lokal valuta och stämpla omvandlingsdetaljer, vilket underlättar redovisningsarbetsflöden.",
        "icon": "plane"
      },
      {
        "title": "Granskning av gränsöverskridande shopping",
        "description": "Översätt fakturakolumner och isolera den verkliga kostnaden för e-handelsvaror.",
        "icon": "credit-card"
      },
      {
        "title": "Internationell affärsbokföring",
        "description": "Stämpla konsekventa konverteringsreskontra på företagsfakturor för att effektivisera årsrevisioner.",
        "icon": "folder-open"
      }
    ],
    "faq": [
      {
        "question": "Hur upptäcker den fakturabelopp?",
        "answer": "Den skannar teckenströmmar efter valutasymboler och analyserar semantiska rubriker som \"Totalt\" eller \"Förfallen\" för att hitta fakturans slutsumma."
      },
      {
        "question": "Hämtas växelkurserna i realtid?",
        "answer": "Ja. Som standard hämtar den baspriser från vanliga finansiella API:er. Du kan också ange anpassade priser för internrevisioner."
      },
      {
        "question": "Kommer den stämplade redovisningen att täcka viktiga fakturadetaljer?",
        "answer": "Motorn skannar sidmarginalen för att hitta optimal positionering. Huvudboken är också halvtransparent och passar elegant in i dina layouter."
      }
    ]
  },
  "pdf-deskew-aligner": {
    "title": "Automatisk upprätning av skannade sidor",
    "metaDescription": "Upptäck och korrigera sidrotationer och justeringar automatiskt på mobilfoto eller skannade PDF-ark direkt.",
    "keywords": [
      "pdf deskew",
      "scanned page alignment",
      "auto rotate pdf page",
      "straighten scanned paper",
      "document alignment tool"
    ],
    "description": "<p>PDF Scan Aligner är ett obligatoriskt verktyg för att sanera lutade digitala tillgångar och mobila ögonblicksbilder.</p>\n      <p>Dokument som skannas via fysiska flatbäddar eller fångas snabbt med smartphones har ofta subtila rotationer. Lutade sidor ser mycket oprofessionella ut, hindrar textens läsbarhet och gör att marginalerna klipps under utskrift.</p>\n      <p>Det här verktyget använder robusta <strong>Radon Transform- och Hough Line-detektionsalgoritmer</strong> för att skanna gradienter och textrader under 20ms. Den mäter exakt snedställning ner till 0,01 grader och utför canvas-rotation på pixelnivå, knäpper tillbaka dina kvitton, kontrakt och häften till skarp geometrisk justering.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Tillhandahåll skev PDF",
        "description": "Ladda upp alla PDF-ark som innehåller roterade eller dåligt justerade skannade dokument."
      },
      {
        "step": 2,
        "title": "Analysera och justera",
        "description": "Motorn känner automatiskt av sned vinkel och ritar inriktningsgaller. Justera vinkeln manuellt om det behövs."
      },
      {
        "step": 3,
        "title": "Räta ut och ladda ner",
        "description": "Klicka på exekvera för att svänga sidor genom en mjuk gyroskopövergång och ladda ner anpassad PDF."
      }
    ],
    "useCases": [
      {
        "title": "Kvitto & Kontraktsarkivering",
        "description": "Rätta till snabba handhållna mobila kontraktsskanningar innan du sparar dem som formella digitala PDF-arkiv.",
        "icon": "file-text"
      },
      {
        "title": "Akademisk bok Digitalisering",
        "description": "Rensa mikrofilmsbokskanningar där textrader glider ut från horisontella marginaler.",
        "icon": "book"
      },
      {
        "title": "Betygsättning av studentläxor",
        "description": "Korrigera ögonblicksbilder av läxor tagna av elevtelefoner, vilket gör att lärare som betygsätter betyg blir lugnare.",
        "icon": "edit-3"
      }
    ],
    "faq": [
      {
        "question": "Hur upptäcks dokumentskevhet?",
        "answer": "Vi kör höghastighetsprojektioner av Hough Line på textrader. Eftersom formella utskrifter har tydliga horisontella mellanrumsmönster, isoleras rotationen om du hittar vinkeln med den maximala variansen."
      },
      {
        "question": "Kommer denna process att beskära bort sidkanterna?",
        "answer": "Nej. Motorn beräknar den roterade gränsen och utökar duken med automatisk utfyllnad, vilket säkerställer att all marginaltext förblir intakt utan att beskäras."
      },
      {
        "question": "Stöder det dokument fyllda med diagram?",
        "answer": "Ja, så länge det finns en underliggande struktur av rader eller allmänna stycken, kan våra algoritmer låsa sig exakt till den huvudsakliga läsvinkeln."
      }
    ]
  },
  "pdf-two-column-reflower": {
    "title": "Omflödning av tvåspaltiga artiklar",
    "metaDescription": "Analysera IEEE/ACM-pappers-PDF-strukturer med dubbla kolumner och flöda om dem till responsiva enkolumnlayouter för smidig visning av mobil och e-läsare.",
    "keywords": [
      "two-column pdf to single",
      "reflow academic paper",
      "read papers on smartphone",
      "pdf reader reflow",
      "mobile friendly papers"
    ],
    "description": "<p>The Academic Two-Column Reflower löser den mest betydande smärtpunkten för digital forskning: att läsa uppsatser på vanliga mobilskärmar.</p>\n      <p> Layouter med dubbla kolumner (används av IEEE, ACM, Nature och större rapporter) är designade för A4-papper. Att navigera på telefonskärmar eller Kindle-enheter kräver konstant zoomning, dra åt höger, rullning nedåt och panorering uppåt. Det bryter läsförståelsen helt.</p>\n      <p>Vår processor implementerar ett <strong>smart styckeomflöde och vertikal partitionsbarriärscan</strong>. Den analyserar teckenkoordinater för att kartlägga dubbelkolumnrännor, delar upp layouten och väver segment vertikalt (vänster kolumn först, sedan höger). Grafer, formler och rubriker omarrangeras sömlöst till en enkolumn, flytbar vertikal rullnings-PDF.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp dubbelkolumn PDF",
        "description": "Tillhandahåll IEEE/ACM-journalrapporten eller PDF-ark med flera kolumner."
      },
      {
        "step": 2,
        "title": "Inspektera mellanväggsrännan",
        "description": "Verifiera de röda vertikala partitionsskivorna. Justera marginalerna för att förhindra överlappande element."
      },
      {
        "step": 3,
        "title": "Flöda om och spara",
        "description": "Klicka på kör för att kompilera sidorna till flytbara layouter och ladda ner direkt."
      }
    ],
    "useCases": [
      {
        "title": "Importera e-läsböcker",
        "description": "Konvertera täta dubbelkolumnuppsatser till bekväma dokument med en kolumn som matchar Kindle- och Onyx-skärmarna.",
        "icon": "tablet"
      },
      {
        "title": "Avläsning av tunnelbanetelefon",
        "description": "Läs forskningslitteratur bekvämt med enhands vertikala svepgester under transport.",
        "icon": "smartphone"
      },
      {
        "title": "Formatering av arkivjournal",
        "description": "Modernisera gamla tidningar med smal spalt till läsbara webbformat med en spalt.",
        "icon": "book-open"
      }
    ],
    "faq": [
      {
        "question": "Hur hanteras breda diagram och ekvationer?",
        "answer": "Vår motor tillämpar \"span element detection.\" När en ekvation eller ett diagram överskrider normala kolumnbredder, isoleras det som ett objekt med full bredd och bibehåller ursprungliga proportioner utan att klippa."
      },
      {
        "question": "Kommer detta att ändra vektortextupplösningen?",
        "answer": "Inte alls. Vi skriver om PDF-textobjekttransformeringsmatriser på objektträdsnivå istället för att rastrera, vilket innebär att texten förblir 100 % vektor och är fullt valbar."
      },
      {
        "question": "Fungerar detta på skannade bilddokument?",
        "answer": "För platta bildbaserade PDF-filer rekommenderar vi starkt att du kör vårt OCR-verktyg först innan du kör Reflow-processen."
      }
    ]
  },
  "pdf-page-resizer-uniform": {
    "title": "Enhetlig sidstorlek för PDF",
    "metaDescription": "Batch-ändra storlek och normalisera PDF-ark i blandade format A4, A3 och Letter till en enhetlig målstorlek med proportionell centrering och marginalutfyllnad.",
    "keywords": [
      "uniform page size",
      "ändra storlek på pdf-sidor",
      "merge diverse pdf",
      "mediabox normalize",
      "batch page scale"
    ],
    "description": "<p> Multi-Format PDF Resizer är den ultimata standardiseraren för röriga, felaktiga företagsdokument.</p>\n      <p>Kombinering av fakturor, kontrakt och tilläggsdiagram resulterar ofta i en PDF-fil som innehåller massiva A3-reskontrasidor, A4-standardavtal och kuvert i Letter-storlek. Att bläddra igenom dem är mycket distraherande och att skicka dem till fysiska kontorsskrivare orsakar ofta pappersstopp på grund av att storleken inte matchar.</p>\n      <p>Det här verktyget skriver om <code>/MediaBox</code>- och <code>/CropBox</code>-rutnäten på låg nivå på varje sida. Den kartlägger befintliga bredder och höjder, skalar originalsidor proportionellt för att matcha målförinställningar (t.ex. standard A4) och introducerar eleganta, konsekventa omgivande marginaler, vilket gör att hela filen ser otroligt polerad ut.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Tillhandahåll PDF i blandad storlek",
        "description": "Ladda upp ett sammanslaget PDF-dokument som innehåller omatchade, röriga sidstorlekar."
      },
      {
        "step": 2,
        "title": "Välj målförinställning",
        "description": "Välj enhetlig målstorlek (t.ex. A4, Letter, A3) och växla mellan skalningslägen."
      },
      {
        "step": 3,
        "title": "Rikta in och ladda ner",
        "description": "Klicka på exekvera för att utlösa 3D-arkjustering och ladda ner en vackert standardiserad PDF."
      }
    ],
    "useCases": [
      {
        "title": "RFP-förslag från företag",
        "description": "Standardisera skannade kvalifikationsbevis och A4-budblad innan fysisk utskrift.",
        "icon": "file-text"
      },
      {
        "title": "Finansiell diagramintegration",
        "description": "Skala breda finansiella A3-kassaflöden till snygga A4-sidor och bevara utskriftsstandarden.",
        "icon": "layout"
      },
      {
        "title": "Bokmarginalstandardisering",
        "description": "Tvinga lätt varierade skannade boksidor till en absolut enhetlig dimension för bekväm läsning.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "Kommer detta att förvränga mitt innehåll?",
        "answer": "Aldrig. Vi stödjer både \"Contain\" (proportionell skalning med vita staplar) och \"Cover\" (centrerad beskärning). Standardläget Innehåll bevarar bildförhållandet och förhindrar förvrängning."
      },
      {
        "question": "Kommer befintliga formulär och kommentarer att förbli klickbara?",
        "answer": "Ja. Algoritmen mappar skalningsfaktorerna till anteckningskoordinatmatriserna, skalningslänkrutor, teckengränser och ingångar för att justera perfekt efter storleksändring."
      },
      {
        "question": "Finns det en gräns för hur många sidor jag kan ändra storlek på?",
        "answer": "Nej. Eftersom alla åtgärder körs lokalt i din klientsandlåda med inbyggt JavaScript, kan du bearbeta omfattande PDF-filer som innehåller hundratals sidor på några sekunder."
      }
    ]
  },
  "handwriting-ink-contrast-booster": {
    "title": "Förbättra kontrast för handskrift",
    "metaDescription": "Extrahera blå eller svarta handskriftssignaturer från foton, bleka gula papperskorn och förbättra bläckkontrasten dramatiskt för läsbarhet.",
    "keywords": [
      "enhance handwritten contract",
      "ink contrast boost",
      "bleach scanned paper",
      "sharpen faded signature",
      "signature extraction"
    ],
    "description": "<p>The Handwriting Ink Contrast Booster är en räddare för att digitalisera undertecknade avtal och historiska manuskriptarkiv.</p>\n      <p> Skanningar av handsignerade dokument ser ofta tråkiga ut på grund av grå skannerglasreflektion, gul pappersfärg eller blekt bläck. Om du skriver ut eller kopierar dessa filer får du suddiga, oläsliga signaturer. Traditionella kontrastverktyg gör hela bakgrunden mörkare, vilket försämrar layouten.</p>\n      <p>Det här verktyget använder **Contrast Limited Adaptive Histogram Equalization (CLAHE) och nyansbaserad färgseparation**. I en säker lokal Canvas-process isolerar den handskriftsdrag (både svarta och blå) från bakgrundspergament, bleker skuggrynkor helt och ingjuter blekt bläck med djup, mättad kontrast, vilket gör att dina dokument ser otroligt skarpa och rena ut.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Importera handsignerat dokument",
        "description": "Tillhandahåll en PDF som innehåller bleka signaturer, handskrivna dagböcker eller skisser."
      },
      {
        "step": 2,
        "title": "Konfigurera bläckfilter",
        "description": "Välj den färgprofil som ska isoleras (t.ex. blått bläck, svart bläck eller båda) och justera skärpan."
      },
      {
        "step": 3,
        "title": "Skärpa och ladda ner",
        "description": "Klicka på exekvera för att spåra färger med en radarskannereffekt och ladda ner renad PDF."
      }
    ],
    "useCases": [
      {
        "title": "Utförda kontrakt Reparation",
        "description": "Reparera dåligt skannade avtal, skärpning av signaturer och blekpappersbakgrund till A4-rent vit.",
        "icon": "file-check"
      },
      {
        "title": "Handskrivna manuskriptarkiv",
        "description": "Digitalisera skrivna journaler eller dagböcker, extrahera tydliga svarta streck samtidigt som du raderar åldersrelaterade fläckar.",
        "icon": "book"
      },
      {
        "title": "Restaurering av historisk reskontra",
        "description": "Återställ detaljer med svagt bläck på åldrade arkivböcker och rädda värdefulla handskrivna koordinater.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Hur skiljer sig detta från normal gråskalekonvertering?",
        "answer": "Gråskala konverterar pappersskuggor till gråvärden. Vår adaptiva algoritm separerar bakgrundens luminans och isolerar signatur \"bläckspektrum\", och renar bakgrunden till absolut vit medan streckkanterna lämnas skarpa."
      },
      {
        "question": "Kommer jag att tappa textur för handskriftsstreck?",
        "answer": "Nej. CLAHE-algoritmen fungerar på subpixelnivå och bevarar naturligt pennslagstryck, bläckblekning och dynamiska linjevikter."
      },
      {
        "question": "Kan jag behålla röda företagsstämplar?",
        "answer": "Ja. Genom att aktivera \"Chroma Ink Preservation\" blekar boostern pappersbakgrunden och gör skrivandet mörkare, samtidigt som de ljusa färgerna hos röda tätningar och blå bläcksignaturer bibehålls."
      }
    ]
  },
  "pdf-spine-bookbinder": {
    "title": "Beräkna bokryggsbredd",
    "metaDescription": "Beräkna bokryggens bredd baserat på sidantal och pappers-GSM, och generera en utskrivbar omslagsmall med ryggvikningslinjer.",
    "keywords": [
      "book spine calculator",
      "binding spine thickness",
      "generate book cover pdf",
      "spine fold marks",
      "perfect binding prepress"
    ],
    "description": "<p>PDF Spine Bookbinder är en förtrycksräddare för designers, självpublicerande författare och kommersiella budteam.</p>\n      <p>När man sammanställer tjocka bokkataloger, budförslag eller årliga kataloger kräver perfekt bindning (limbindning) ett omslag med exakta ryggkoordinater. Om ryggradens bredd är mindre än 1 mm, kommer det bundna höljet att skeva, förskjutas eller skrynklas. Att beräkna antalet sidor mot pappersvikten är komplicerat och felbenäget.</p>\n      <p>Det här verktyget använder ett <strong>fysiskt modellerat GSM-papper-till-tjocklek-bibliotek</strong>. Ange helt enkelt ditt PDF-sidantal och välj pappersmaterial (t.ex. 80 GSM offset, 100 GSM glansigt). Motorn beräknar ryggradens bredd ner till mikrometer och sammanställer en tryckfärdig, extra bred omslags-PDF komplett med standardflikar fram/bak och exakta vikmarkeringar.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ställ in sidor & lagertyp",
        "description": "Mata in antalet dokumentsidor och välj specifikationer för målpapper."
      },
      {
        "step": 2,
        "title": "Mata in ryggradstext",
        "description": "Ange boktitlar, författardetaljer och anpassa rygg-/omslagsbakgrunder."
      },
      {
        "step": 3,
        "title": "3D-förhandsgranskning och export",
        "description": "Snurra och inspektera ditt bokomslag i en interaktiv 3D-pärm. Exportera högupplöst vektor PDF."
      }
    ],
    "useCases": [
      {
        "title": "Tjocka budförslag",
        "description": "Designa professionella omslagsark med exakta veckjusteringar för tjocka anbud.",
        "icon": "layers"
      },
      {
        "title": "Uppsats Inbunden bindning",
        "description": "Kartlägg perfekta ryggradslayoutbredder för universitetsmaster/doktorsavhandlingar.",
        "icon": "award"
      },
      {
        "title": "Självpublicerande romanomslag",
        "description": "Beräkna enkelt bokryggens bredd innan du skickar in filer till Print-on-Demand-publiceringstjänster.",
        "icon": "book-open"
      }
    ],
    "faq": [
      {
        "question": "Hur exakt är beräkningen av GSM-papperstjockleken?",
        "answer": "Mycket exakt. Vårt fysikbibliotek matchar branschgenomsnitt (t.ex. 70 GSM = 0,09 mm, 80 GSM = 0,10 mm, 150 GSM blank = 0,125 mm). Vi inkluderar även en \"Dubbelsidig utskrift\"-växel för att halvera beräkningar automatiskt."
      },
      {
        "question": "Är de exporterade omslagen redo för direktutskrift?",
        "answer": "Ja. Filerna är vektorperfekta PDF-filer med standardregistreringsmärken, färgstaplar och ryggguider, helt kompatibla med offset- och digitala kommersiella pressar."
      },
      {
        "question": "Kan jag ladda upp en bakgrundsbild som spänner över ryggraden?",
        "answer": "Ja. Du kan ladda upp anpassade layouter och vår kompositör lindar in och justerar grafiken över ryggvecken automatiskt."
      }
    ]
  },
  "pdf-signature-anchor-helper": {
    "title": "Positioneringsguide för signaturer",
    "metaDescription": "Lokalisera automatiskt signaturfält i kontrakt och injicera interaktiva svävande guider och ankare för snabb signering.",
    "keywords": [
      "locate signature pdf",
      "inject sign anchor",
      "contract signing helper",
      "click to sign guide",
      "prevent missing signatures"
    ],
    "description": "<p> PDF Signature Guide Injector garanterar rena, felfria signeringsarbetsflöden för flersidiga avtal.</p>\n      <p>När kunderna skickar flersidiga NDA-avtal, bokslut eller kommersiella leasingavtal missar de ofta kritiska signeringsrutor, vilket kräver oändliga fram och tillbaka e-postslingor och försenade affärstransaktioner.</p>\n      <p>Vårt verktyg använder <strong>naturlig regex semantisk mappning</strong>. Den skannar PDF-teckenkartan för att hitta termer som <code>Signatur:</code>, <code>签字：</code>, <code>Vitne:</code> eller <code>签署日期：</code>. Den använder sedan <code>pdf-lib</code> för att injicera interaktiva PDF-länkkommentarer av standardtyp. När de öppnas i en standardläsare ser kunderna blinkande, neonkantade pilar som omedelbart leder dem till rätt rutor, vilket gör signeringen idiotsäker.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Import affärsavtal",
        "description": "Ladda upp PDF-kontraktet eller NDA som behöver signaturkoordinater."
      },
      {
        "step": 2,
        "title": "Auto-scan signaturfack",
        "description": "Inspektera de automatiskt placerade signeringsrutorna och lägg till anpassade skyltpunkter manuellt om det behövs."
      },
      {
        "step": 3,
        "title": "Injicera ankare och spara",
        "description": "Klicka på exekvera för att skriva de interaktiva pekarlagren i PDF-strukturen."
      }
    ],
    "useCases": [
      {
        "title": "Företags NDA-avtal",
        "description": "Injicera tydliga, blinkande guider bredvid skyltblocken för att förhindra ombordanställda från att missa klausuler.",
        "icon": "file-text"
      },
      {
        "title": "Kommersiella hyresavtal",
        "description": "Guide flera medundertecknare genom flersidiga fastighetsdokument med specialfärgade flikar.",
        "icon": "users"
      },
      {
        "title": "Upphandling PO Signaturer",
        "description": "Lägg över interaktiva pekare på fakturor och inköpsorder för att påskynda redovisningsslingor.",
        "icon": "briefcase"
      }
    ],
    "faq": [
      {
        "question": "Kommer dessa guider att visas när jag skriver ut kontraktet?",
        "answer": "Nej. Ankarna injiceras med standard-PDF-flaggan \"Utskrivbar\" inställd på false. De visas vackert på dator/surfplatta men förblir helt osynliga när de skrivs ut."
      },
      {
        "question": "Kan klienter enkelt hoppa mellan signaturfält?",
        "answer": "Ja. Vi väver dubbelriktade interna ankare. Klienter kan klicka på bokmärket \"Sign Guide\" för att automatiskt hoppa till nästa tomma signaturfack direkt."
      },
      {
        "question": "Fungerar detta på skannade bilddokument?",
        "answer": "Ja. Förutom att leta upp textströmmar, uppskattar vår rumsliga layouttolkare signaturlinjer baserat på horisontella regler och begränsningsrutor på skannade ark."
      }
    ]
  },
  "pdf-lossless-slicer": {
    "title": "Förlustfri ritningsbeskärning",
    "metaDescription": "Extrahera en delregion av stora PDF-CAD-ritningar, kartor eller diagram på låg nivå, håll vektorupplösningen intakt samtidigt som filstorleken minskar.",
    "keywords": [
      "pdf vector crop",
      "lossless pdf slice",
      "cad drawing crop",
      "cropbox matrix edit",
      "extract map region"
    ],
    "description": "<p> PDF Lossless Drawing Slicer är ett högprecisions, kirurgiskt verktyg byggt för arkitekter, ingenjörer och kartdetaljer.</p>\n      <p>När man extraherar ett specifikt pumprum eller chipkärna från en massiv CAD-teknikritning eller geografisk karta PDF, resulterar traditionella skärmdumpar i pixlad, suddig text. Vanliga beskärningsverktyg placerar helt enkelt en mask över arket, vilket innebär att den enorma filen på 100 MB förblir enorm, och dolt innehåll kan fortfarande extraheras.</p>\n      <p>Det här verktyget redigerar sidmatriserna <code>/MediaBox</code>, <code>/CropBox</code> och <code>/BleedBox</code> på objektträdsnivån. Den isolerar fysiskt vektornoder utanför den valda regionen, och håller målområdet 100 % vektorperfekt (tillåter oändlig zoomförstoring) samtidigt som redundanta off-screen banor och bilder rensas bort för att krympa filstorleken med 95 %!</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Importera stor ritning",
        "description": "Ladda upp den vektorrika CAD-, GIS-kartan eller högupplösta PDF-katalogen."
      },
      {
        "step": 2,
        "title": "Rita skärlåda",
        "description": "Dra och skala den gröna laserlinjebeskärningsrutan för att rikta in dig på den lokala region du vill skära."
      },
      {
        "step": 3,
        "title": "Utlösa laserbeskärning",
        "description": "Klicka på exekvera för att utlösa vår objektskärare på låg nivå och ladda ner den lilla, förlustfria PDF-filen."
      }
    ],
    "useCases": [
      {
        "title": "CAD Blueprint Isolering",
        "description": "Skär ut en \"kylsystem\"-detalj från en massiv 100 MB planritning för att dela med underleverantörer.",
        "icon": "crop"
      },
      {
        "title": "GIS Kartklippning",
        "description": "Extrahera ett förlustfritt, vektorklart block av en stadsgatakarta för en presentationsbild utan upplösningsförlust.",
        "icon": "map"
      },
      {
        "title": "Manuell Illustration Spårning",
        "description": "Förlustfria isolera vetenskapliga bokfigurer för att bädda in i högkvalitativa akademiska uppsatser.",
        "icon": "image"
      }
    ],
    "faq": [
      {
        "question": "Hur skiljer sig detta från vanlig beskärning?",
        "answer": "Standardbeskärning justerar bara visuella gränser; de dolda vektorerna finns kvar i filen. Vår slicer trimmar överlappande vektorbanor och rensar XObject-bilder utanför gränserna, vilket säkerställer fullständig dataisolering och maximal filkomprimering."
      },
      {
        "question": "Kommer textlager att förbli sökbara?",
        "answer": "Ja. Alla texttecken som faller innanför den skivade gränsen förblir helt vektorrensade, sökbara och valbara."
      },
      {
        "question": "Kan jag exportera segmenterade regioner till SVG?",
        "answer": "Utdata är en standardiserad vektor-PDF. Du kan skicka den resulterande filen till vårt PDF-till-SVG-verktyg för att konvertera den till ett webbskalbart vektorgrafikformat."
      }
    ]
  },
  "pdf-scratchpad-canvas": {
    "title": "Skissblocksduk med rutnät",
    "metaDescription": "Sy ihop högkvalitativa rutnät, linjer eller Cornell-anteckningsmarginaler till PDF-sidor för formelavledningar och förberedelse av tentamensteckningar.",
    "keywords": [
      "pdf margin expand",
      "add scratchpad page",
      "cornell notes grid",
      "stitch draft space",
      "pdf notes template"
    ],
    "description": "<p> PDF Scratchpad Margin Extender är en viktig studieföljare som är skräddarsydd för studenter, forskare och professionella examenskandidater.</p>\n      <p>När man löser övningsprov, granskar bilder eller läser akademiska läroböcker på digitala surfplattor är sidmarginalerna otroligt snäva. Att öppna en separat anteckningsapp tvingar dig att växla mellan skärmar hela tiden, vilket bryter fokus. Genom att lägga till platta tomma ark förhindrar du att se problemet och din beräkning sida vid sida.</p>\n      <p>Det här verktyget skriver om sidbredd eller höjddimensioner i PDF-strukturen på låg nivå, och utökar <code>/MediaBox</code>-marginalerna med 200~250 pt till höger eller längst ned. Den lägger sedan över rena rutnätslinjer, college-styrda notebook-linjer eller Cornell-layouter i de nya marginalerna, vilket ger dig dedikerade, intilliggande utkaststavlor bredvid varje enskild bild eller fråga!</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Ladda upp föreläsningsbilder",
        "description": "Tillhandahåll PDF-läroboken, bilderna eller studieuppsatserna."
      },
      {
        "step": 2,
        "title": "Välj marginal & rutmönster",
        "description": "Välj marginalexpansionsriktning (t.ex. höger sida för surfplattor) och välj rutnätsmallen."
      },
      {
        "step": 3,
        "title": "Stitch canvas och ladda ner",
        "description": "Klicka på Kör för att skapa utökade sidor kompletta med vackra utkastsrutnät."
      }
    ],
    "useCases": [
      {
        "title": "STEM Exam Preparation",
        "description": "Sy rutnätsmarginaler bredvid matte- och fysikprovsfrågor, lös härledningar bredvid frågan.",
        "icon": "edit-3"
      },
      {
        "title": "Språkläsningsanalys",
        "description": "Lägg till marginaler för anteckningsboken bredvid främmande språkuppsatser för ordförrådsanalys och styckeöversättning.",
        "icon": "book"
      },
      {
        "title": "Revision av arkitekturritning",
        "description": "Lägg till tomma marginaler på sidan av ritningarna för tekniska beräkningar och kommentarer från kunder.",
        "icon": "columns"
      }
    ],
    "faq": [
      {
        "question": "Kommer detta att krossa min ursprungliga PDF-text?",
        "answer": "Inte alls. Algoritmen utökar pappersdimensionen utåt. Det ursprungliga innehållet behåller sin layout, typsnitt och upplösning; vi sträcker helt enkelt ut det vita utrymmet på gränserna och ritar rutnät på dem."
      },
      {
        "question": "Kan vanliga handskrivna pennor skriva i scratchpad?",
        "answer": "Ja. De nya PDF-sidorna kompileras inbyggt. Populära anteckningsapplikationer för surfplattor som Goodnotes, Notability, Xodo och Acrobat kan skriva, markera och klottra direkt i det nya rutnätsutrymmet."
      },
      {
        "question": "Är rutnätslinjer mörka och distraherande?",
        "answer": "Vi kurerade tre subtila, ögonvänliga färger (mjuk blågrå, varm brun och glödande grön). Linjerna är tunna och mjuka och fungerar som guider utan att distrahera dig från det ursprungliga sidinnehållet."
      }
    ]
  },
  "photo-tiling-prepress": {
    "title": "Layoutark för ID-foto inför tryck",
    "metaDescription": "Beskär och belägg pass/ID-foton på standard 5\" eller 6\" fotopapper och stämpla exakta fysiska skärmärken för tryck för enkel skärning.",
    "keywords": [
      "id photo tiling",
      "print passport photo",
      "tile photo standard paper",
      "id photo layout prepress",
      "stamp crop marks"
    ],
    "description": "<p> Verktyget Prepress Photo Tiling är en kostnadseffektiv layoutkompilator med hög precision byggd för personliga registreringskort och fotostudior.</p>\n      <p>Utskrift av passfoton, ID-foton eller körkort hemma resulterar ofta i felaktiga fysiska mått (ofta för stora eller för små), slöseri med fotopapper och ojämna justeringar. Att gå till professionella tryckerier för att få layouter gjorda är tidskrävande.</p>\n      <p>Vårt verktyg integrerar en <strong>precisionsmatrismotor</strong>. Den accepterar porträttfotografier eller skanningar av ID-kort, beskär dem till standardmått (t.ex. 1\" eller 2\" passspecifikationer), beräknar optimalt antal brickor för standardfotopapper (t.ex. 5\" eller 6\" ark) och injicerar skarpa mikropixelbeskärningslinjer för enkel fysisk skärning, vilket skapar en perfekt utskriftsbar PDF.</p>",
    "howToUse": [
      {
        "step": 1,
        "title": "Importera passfoto",
        "description": "Ladda upp kameraporträttsbilden eller dubbelsidiga ID-kortbilder."
      },
      {
        "step": 2,
        "title": "Konfigurera papper och layout",
        "description": "Välj önskad utskriftspappersstorlek (t.ex. 6\") och välj rutnätslayouter (t.ex. 8 kopior av 1\" foton)."
      },
      {
        "step": 3,
        "title": "Kakel och exportera",
        "description": "Inspektera fotorutor på vårt rutnät och exportera den utskrivbara PDF-filen med hög DPI."
      }
    ],
    "useCases": [
      {
        "title": "Självbetjäningspassfoton",
        "description": "Ordna dina passporträtt med mobilbilder på ett enda 6\" fotopappersrutnät och skriv ut 8 kopior för en bråkdel av standardkostnaden för studion.",
        "icon": "user"
      },
      {
        "title": "ID-kort dubbelsidig kopia",
        "description": "Formatera skanningar på fram- och baksidan av nationella ID-kort snyggt på vanliga Letter/A4-ark för officiella inlämningar.",
        "icon": "file-text"
      },
      {
        "title": "Batchfotominiatyrblad",
        "description": "Placera flera familjeminnen eller designa ögonblicksbilder på ett rutnät för att skriva ut kontaktark med miniatyrbilder effektivt.",
        "icon": "grid"
      }
    ],
    "faq": [
      {
        "question": "Kommer de tryckta måtten att matcha officiella 1\" eller 2\" specifikationer?",
        "answer": "Ja. Rutnätsmotorn mäter med standard PDF-punkter (72 pt = 1 tum), vilket återger 1\" foton exakt på 25x35 mm och 2\" foton vid 35x49 mm. Se till att du skriver ut med \"Faktisk storlek / 100 % skala\" i dina skrivarinställningar."
      },
      {
        "question": "Kan jag kombinera 1\" och 2\" foton på ett enda ark?",
        "answer": "Ja. Vi tillhandahåller förinställda hybridlayouter (t.ex. \"4 kopior av 1\" + 4 kopior av 2\"), så att du kan maximera fotopappersutrymmet."
      },
      {
        "question": "Innehåller mallen kantutfall?",
        "answer": "Ja. Prepress-layouterna reserverar en standardutskriftssäker marginal på 4 mm på papperskanterna, vilket förhindrar fysiska skrivarvalsar från att beskära fotona."
      }
    ]
  }
};
