/**
 * Czech tool content for SEO
 * Obsahuje podrobné popisy, návody, příklady použití a časté otázky pro všechny nástroje
 * Requirements: 4.2-4.5 - Tool page content (description, how-to, use cases, FAQ)
 */

import { ToolContent } from '@/types/tool';

/**
 * Czech tool content map
 * Each tool has: title, metaDescription, keywords, description, howToUse, useCases, faq
 */
export const toolContentCs: Record<string, ToolContent> = {
  "pdf-multi-tool": {
    "title": "Víceúčelový nástroj PDF",
    "metaDescription": "Komplexní editor PDF: spojujte, rozdělujte, uspořádávejte, odstraňujte, otáčejte a extrahujte stránky v jednom výkonném nástroji.",
    "keywords": [
      "víceúčelový nástroj pdf",
      "editor pdf",
      "spojit pdf",
      "rozdělit pdf",
      "uspořádat pdf",
      "vše v jednom pdf"
    ],
    "description": "\n      <p>Víceúčelový nástroj PDF je komplexním řešením pro veškerou práci se stránkami PDF. Tento výkonný nástroj typu vše v jednom spojuje řadu operací s PDF do jediného přehledného rozhraní a šetří vám čas i námahu.</p>\n      <p>Ať potřebujete spojit více dokumentů, rozdělit velký PDF na menší soubory, změnit pořadí stránek, odstranit nežádoucí obsah, otočit stránky nebo extrahovat konkrétní části, tento nástroj zvládne vše bez přepínání mezi různými aplikacemi.</p>\n      <p>Veškeré zpracování probíhá přímo ve vašem prohlížeči, takže vaše dokumenty zůstávají soukromé a v bezpečí. Žádné soubory se nenahrávají na server.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte PDF",
        "description": "Přetáhněte soubor PDF do oblasti pro nahrání, nebo klikněte a vyberte soubory ze svého zařízení."
      },
      {
        "step": 2,
        "title": "Zvolte operaci",
        "description": "Vyberte jednu z dostupných operací: spojení, rozdělení, uspořádání, odstranění stránek, otočení, přidání prázdných stránek nebo extrakce stránek."
      },
      {
        "step": 3,
        "title": "Nastavte možnosti",
        "description": "Upravte nastavení pro zvolenou operaci, například rozsahy stránek, úhly otočení nebo pořadí spojení."
      },
      {
        "step": 4,
        "title": "Zpracujte a stáhněte",
        "description": "Klikněte na tlačítko pro zpracování a po dokončení operace si stáhněte upravený PDF."
      }
    ],
    "useCases": [
      {
        "title": "Příprava dokumentů",
        "description": "Připravte dokumenty k odevzdání odstraněním nepotřebných stránek, změnou pořadí obsahu a spojením více souborů.",
        "icon": "file-check"
      },
      {
        "title": "Sestavení zpráv",
        "description": "Spojte více částí zprávy, přidejte titulní strany a uspořádejte kapitoly do jednoho profesionálního dokumentu.",
        "icon": "book-open"
      },
      {
        "title": "Správa archivu",
        "description": "Rozdělte velké archivní soubory na zvládnutelné části, extrahujte relevantní stránky a znovu uspořádejte historické dokumenty.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Kolik souborů PDF mohu zpracovat najednou?",
        "answer": "Současně můžete nahrát a zpracovat až 10 souborů PDF o celkové velikosti nejvýše 500 MB."
      },
      {
        "question": "Zachovají se záložky?",
        "answer": "Ano, při spojování PDF nástroj zachovává existující záložky a volitelně je může sloučit do jednotné struktury záložek."
      },
      {
        "question": "Je nějaký limit počtu stránek?",
        "answer": "Pevný limit stránek neexistuje. Nástroj zvládne dokumenty o stovkách stránek, ale zpracování velmi velkých souborů může trvat déle."
      }
    ]
  },
  "merge-pdf": {
    "title": "Spojit soubory do PDF",
    "metaDescription": "Spojte více souborů PDF, obrázků (JPG/PNG), dokumentů Office (Word/Excel/PPT) a textu do jednoho dokumentu PDF. Bezplatný online nástroj s řazením přetažením.",
    "keywords": [
      "spojit pdf",
      "sloučit soubory",
      "sloučit pdf",
      "spojení pdf",
      "obrázky do pdf",
      "spojit word do pdf",
      "slučování pdf",
      "zřetězit pdf"
    ],
    "description": "\n      <p>Nástroj Spojit soubory vám umožní rychle a snadno sloučit více dokumentů PDF, obrázků (JPG, PNG, WebP, BMP), dokumentů Office (Word, Excel, PowerPoint) a prostého textu do jednoho uceleného souboru PDF. Ať už slučujete zprávy v různých formátech, spojujete naskenované účtenky nebo sestavujete prezentace, s tímto nástrojem to půjde hladce.</p>\n      <p>Stačí nahrát soubory, seřadit je přetažením do požadovaného pořadí a spojit je do jednoho dokumentu. Soubory, které nejsou PDF, se průběžně automaticky převedou na stránky PDF ve vysoké kvalitě a volitelně lze z názvu každého zdrojového souboru vytvořit záložky.</p>\n      <p>Veškeré převody i spojování probíhají lokálně v izolovaném prostředí vašeho prohlížeče, což zaručuje úplné soukromí citlivých dokumentů bez nahrávání na vzdálené servery.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte soubory",
        "description": "Přetáhněte do oblasti pro nahrání soubory PDF, obrázky (JPG/PNG), dokumenty Office (Word/Excel/PPT) nebo textové soubory."
      },
      {
        "step": 2,
        "title": "Seřaďte pořadí",
        "description": "Přetažením karet souborů je seřaďte do požadovaného pořadí. U obrázků se zobrazují živé miniatury."
      },
      {
        "step": 3,
        "title": "Spojte a stáhněte",
        "description": "Kliknutím na tlačítko Spojit automaticky převedete a sloučíte všechny soubory do jednoho PDF a poté si výsledek stáhnete."
      }
    ],
    "useCases": [
      {
        "title": "Archivace různých typů médií",
        "description": "Spojte smlouvy, fotografie dokladů, účtenky k fakturám a poznámky do kompletní archivní složky.",
        "icon": "briefcase"
      },
      {
        "title": "Konsolidace firemních zpráv",
        "description": "Sloučte analýzy z Wordu, finanční tabulky z Excelu a snímky prezentací z PowerPointu do jedné zprávy.",
        "icon": "file-text"
      },
      {
        "title": "Sestavení portfolia",
        "description": "Spojte více grafických návrhů (JPG/PNG) a textových popisů do vyladěného profesionálního portfolia.",
        "icon": "image"
      }
    ],
    "faq": [
      {
        "question": "Jaké formáty souborů mohu spojit?",
        "answer": "Můžete spojit standardní soubory PDF, obrázky (JPG, PNG, WebP, BMP, SVG), dokumenty Office (Word .docx/.doc, Excel .xlsx/.xls, PowerPoint .pptx/.ppt) a textové soubory (.txt, .md)."
      },
      {
        "question": "Kolik souborů mohu spojit najednou?",
        "answer": "Najednou můžete spojit až 100 souborů o celkové velikosti až 500 MB."
      },
      {
        "question": "Zachovají si soubory, které nejsou PDF, svou vizuální kvalitu?",
        "answer": "Ano! Obrázky a dokumenty se vykreslují ve vysokém rozlišení a přizpůsobují se standardním stránkám bez ztrátové komprese."
      },
      {
        "question": "Mohu spojit PDF chráněné heslem?",
        "answer": "PDF chráněné heslem je nutné nejprve dešifrovat. Před spojením odstraňte heslo pomocí našeho nástroje Dešifrovat PDF."
      }
    ]
  },
  "rotate-custom": {
    "title": "Otočit o vlastní úhel",
    "metaDescription": "Otočte stránky PDF o libovolný úhel. Přesné vlastní otočení pro vyrovnání naskenovaných dokumentů.",
    "keywords": [
      "otočit pdf o vlastní úhel",
      "vyrovnat pdf",
      "narovnat sken pdf",
      "vlastní otočení pdf"
    ],
    "description": "\n      <p>Nástroj Otočit o vlastní úhel vám dává přesnou kontrolu nad orientací stránek PDF. Na rozdíl od běžných nástrojů pro otáčení, které podporují pouze kroky po 90 stupních, umožňuje otočit stránky o libovolný konkrétní úhel.</p>\n      <p>Ideální pro vyrovnání naskenovaných dokumentů, které byly do skeneru vloženy mírně nakřivo, nebo pro úpravu diagramů a grafů do správné orientace. Opravit můžete jednotlivé stránky nebo použít stejné otočení na celý dokument.</p>\n      <p>Veškeré zpracování probíhá lokálně ve vašem prohlížeči, takže vaše dokumenty zůstanou soukromé a vy dosáhnete dokonalého zarovnání.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte PDF",
        "description": "Nahrajte soubor PDF se stránkami, které potřebujete otočit."
      },
      {
        "step": 2,
        "title": "Nastavte úhel otočení",
        "description": "Zadejte přesný úhel otočení pro každou stránku, nebo nastavte společný úhel pro všechny stránky."
      },
      {
        "step": 3,
        "title": "Zkontrolujte náhled a dolaďte",
        "description": "Pomocí náhledu v reálném čase ověřte, že jsou stránky dokonale zarovnané."
      },
      {
        "step": 4,
        "title": "Použijte a stáhněte",
        "description": "Kliknutím na Otočit použijete změny a stáhnete vyrovnaný PDF."
      }
    ],
    "useCases": [
      {
        "title": "Naskenované dokumenty",
        "description": "Vyrovnejte naskenované stránky, které byly do skeneru vloženy šikmo.",
        "icon": "scan"
      },
      {
        "title": "Technické výkresy",
        "description": "Přesně upravte orientaci technických diagramů a plánů.",
        "icon": "ruler"
      },
      {
        "title": "Kreativní rozvržení",
        "description": "Vytvořte jedinečná rozvržení otočením stránek o konkrétní umělecké úhly.",
        "icon": "pen-tool"
      }
    ],
    "faq": [
      {
        "question": "Mohu otáčet o desetinné hodnoty, např. o 45,5 stupně?",
        "answer": "Nástroj zatím podporuje pouze celé stupně, ale na podpoře desetinné přesnosti pracujeme."
      },
      {
        "question": "Ovlivní to obsah stránky?",
        "answer": "Obsah se vizuálně otočí. Velikost stránky se automaticky upraví tak, aby se do ní otočený obsah vešel."
      },
      {
        "question": "Mohu otočit jen jednu stránku?",
        "answer": "Ano, vlastní úhel otočení můžete nastavit pro kteroukoli jednotlivou stránku a ostatní ponechat beze změny."
      }
    ]
  },
  "grid-combine": {
    "title": "Spojit PDF do mřížky",
    "metaDescription": "Spojte více souborů PDF na jednotlivé stránky ve flexibilním rozvržení mřížky. Umístěte 2, 4, 6, 9 i více PDF na stránku s okraji a mezerami.",
    "keywords": [
      "spojit do mřížky",
      "spojit pdf do mřížky",
      "koláž pdf",
      "více pdf na jednu stránku",
      "pdf n-up",
      "sloučit pdf do mřížky"
    ],
    "description": "\n      <p>Nástroj Spojit do mřížky nabízí jedinečný způsob, jak umístit více samostatných souborů PDF na jednotlivé stránky. Na rozdíl od běžného nástroje „Spojit PDF“, který stránky jednoduše řadí za sebe, nebo nástroje „N-Up“, který přeskupuje stránky jediného dokumentu, Spojit do mřížky vezme více vstupních souborů a uspořádá je vedle sebe v přizpůsobitelném rozvržení mřížky.</p>\n      <p>Můžete si vybrat z různých konfigurací mřížky, například 2x1, 2x2, 3x3 atd. To je ideální pro porovnání více dokumentů, tvorbu podkladů z různých zdrojů nebo tisk kompaktních verzí několika souborů.</p>\n      <p>Výstup si přizpůsobte nastavením velikosti stránky, orientace, okrajů, mezer a ohraničení. Veškeré zpracování probíhá lokálně ve vašem prohlížeči pro maximální soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte soubory PDF",
        "description": "Nahrajte dva nebo více souborů PDF, které chcete spojit. Můžete je seřadit v požadovaném pořadí."
      },
      {
        "step": 2,
        "title": "Zvolte rozvržení mřížky",
        "description": "Vyberte požadované rozvržení mřížky (např. 2x2 pro 4 soubory na stránku, 3x3 pro 9 souborů na stránku)."
      },
      {
        "step": 3,
        "title": "Přizpůsobte vzhled",
        "description": "Upravte nastavení, jako je velikost stránky (A4, Letter), orientace, mezery mezi položkami a ohraničení."
      },
      {
        "step": 4,
        "title": "Spojte a stáhněte",
        "description": "Kliknutím na „Spojit PDF“ vytvoříte nový dokument s rozvržením mřížky a stáhnete výsledek."
      }
    ],
    "useCases": [
      {
        "title": "Vizuální porovnání",
        "description": "Umístěte různé verze návrhu nebo dokumentu vedle sebe na jednu stránku pro snadné porovnání.",
        "icon": "layout-grid"
      },
      {
        "title": "Tisk podkladů",
        "description": "Spojte více krátkých dokumentů nebo snímků na jeden list papíru a ušetřete na tisku.",
        "icon": "printer"
      },
      {
        "title": "Tvorba portfolia",
        "description": "Představte více projektových souborů v čistém a uspořádaném přehledu v mřížce.",
        "icon": "image"
      }
    ],
    "faq": [
      {
        "question": "Čím se to liší od N-Up?",
        "answer": "N-Up bere stránky z JEDNOHO PDF a umisťuje je na list. Spojit do mřížky bere VÍCE RŮZNÝCH souborů PDF a umisťuje je na list."
      },
      {
        "question": "Kolik souborů mohu spojit?",
        "answer": "V závislosti na paměti prohlížeče můžete spojit až 100 souborů, přičemž rozvržení jako 4x4 pojme až 16 souborů na stránku."
      },
      {
        "question": "Mohu přidat ohraničení?",
        "answer": "Ano, kolem každého souboru PDF můžete přidat ohraničení a přizpůsobit jeho barvu."
      }
    ]
  },
  "split-pdf": {
    "title": "Rozdělit PDF",
    "metaDescription": "Rozdělte soubory PDF na více dokumentů. Extrahujte konkrétní stránky nebo dělte podle rozsahů stránek.",
    "keywords": [
      "rozdělit pdf",
      "rozdělení pdf",
      "oddělit pdf",
      "extrahovat stránky",
      "rozdělovač pdf"
    ],
    "description": "\n      <p>Nástroj Rozdělit PDF vám umožní rozdělit jeden dokument PDF na více menších souborů. Ideální pro extrakci konkrétních kapitol, oddělení spojených dokumentů nebo vytvoření samostatných souborů z vícestránkového PDF.</p>\n      <p>Můžete dělit podle konkrétních rozsahů stránek, extrahovat jednotlivé stránky nebo rozdělit dokument v pravidelných intervalech. Nástroj nabízí vizuální náhled stránek, takže snadno vyberete přesně to, co potřebujete.</p>\n      <p>Veškeré zpracování probíhá lokálně ve vašem prohlížeči, takže vaše dokumenty zůstávají soukromé a v bezpečí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte PDF",
        "description": "Přetáhněte soubor PDF, nebo klikněte a vyberte soubor, který chcete rozdělit."
      },
      {
        "step": 2,
        "title": "Zvolte způsob rozdělení",
        "description": "Vyberte, jak rozdělit: podle rozsahů stránek, extrakcí konkrétních stránek nebo v pravidelných intervalech."
      },
      {
        "step": 3,
        "title": "Zadejte rozsahy stránek",
        "description": "Zadejte čísla nebo rozsahy stránek, které chcete extrahovat (např. 1-5, 8, 10-15)."
      },
      {
        "step": 4,
        "title": "Rozdělte a stáhněte",
        "description": "Kliknutím na Rozdělit vytvoříte nové soubory PDF a stáhnete je jednotlivě nebo jako archiv ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Extrakce kapitol",
        "description": "Rozdělte knihu nebo příručku na jednotlivé kapitoly pro snazší čtení či distribuci.",
        "icon": "book"
      },
      {
        "title": "Oddělení hromadných skenů",
        "description": "Rozdělte dávkově naskenovaný dokument na samostatné soubory pro každý původní dokument.",
        "icon": "copy"
      },
      {
        "title": "Tvorba podkladů",
        "description": "Extrahujte konkrétní snímky nebo stránky z prezentace a vytvořte cílené podklady.",
        "icon": "presentation"
      }
    ],
    "faq": [
      {
        "question": "Mohu rozdělit PDF na jednotlivé stránky?",
        "answer": "Ano, zvolením možnosti „Rozdělit každou stránku“ rozdělíte PDF na samostatné jednostránkové soubory."
      },
      {
        "question": "Co se při rozdělení stane se záložkami?",
        "answer": "Záložky, které spadají do rozsahu extrahovaných stránek, se ve výsledných souborech PDF zachovají."
      },
      {
        "question": "Mohu rozdělit PDF chráněné heslem?",
        "answer": "Před rozdělením je nutné PDF nejprve dešifrovat pomocí našeho nástroje Dešifrovat PDF."
      }
    ]
  },
  "compress-pdf": {
    "title": "Komprimovat PDF",
    "metaDescription": "Zmenšete velikost souboru PDF při zachování kvality. Bezplatný online kompresor PDF pro menší soubory.",
    "keywords": [
      "komprimovat pdf",
      "zmenšit velikost pdf",
      "kompresor pdf",
      "zmenšit pdf",
      "optimalizovat pdf"
    ],
    "description": "\n      <p>Nástroj Komprimovat PDF zmenší velikost vašich dokumentů PDF při zachování přijatelné kvality. To je zásadní pro přílohy e-mailů, nahrávání na web nebo úsporu úložného prostoru.</p>\n      <p>Nástroj nabízí několik úrovní komprese, abyste našli rovnováhu mezi zmenšením souboru a zachováním kvality. Můžete zvolit silnou kompresi pro maximální zmenšení, nebo mírnou kompresi pro zachování vyšší kvality.</p>\n      <p>Veškerá komprese probíhá ve vašem prohlížeči, takže vaše dokumenty nikdy neopustí vaše zařízení.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte PDF",
        "description": "Přetáhněte soubor PDF, nebo klikněte a vyberte dokument, který chcete komprimovat."
      },
      {
        "step": 2,
        "title": "Zvolte úroveň komprese",
        "description": "Vyberte preferovanou úroveň komprese: Nízká (nejlepší kvalita), Střední (vyvážená) nebo Vysoká (nejmenší velikost)."
      },
      {
        "step": 3,
        "title": "Komprimujte a stáhněte",
        "description": "Kliknutím na Komprimovat zmenšíte velikost souboru a poté si stáhnete optimalizovaný PDF."
      }
    ],
    "useCases": [
      {
        "title": "Přílohy e-mailů",
        "description": "Zmenšete PDF tak, aby splňoval limity pro přílohy e-mailů a byl rychleji doručen.",
        "icon": "mail"
      },
      {
        "title": "Publikování na webu",
        "description": "Optimalizujte PDF ke stažení z webu a zrychlete načítání stránek i uživatelský komfort.",
        "icon": "globe"
      },
      {
        "title": "Optimalizace úložiště",
        "description": "Komprimujte archivované dokumenty a ušetřete místo na disku, aniž byste ztratili přístup k jejich obsahu.",
        "icon": "hard-drive"
      }
    ],
    "faq": [
      {
        "question": "O kolik mohu velikost souboru zmenšit?",
        "answer": "Výsledky komprese se liší podle obsahu PDF. PDF s mnoha obrázky lze často zmenšit o 50–80 %, u čistě textových PDF bývá zmenšení menší."
      },
      {
        "question": "Ovlivní komprese kvalitu textu?",
        "answer": "Text zůstává ostrý a čitelný na všech úrovních komprese. Komprese ovlivňuje pouze obrázky a grafiku."
      },
      {
        "question": "Mohu komprimovat více PDF najednou?",
        "answer": "Ano, současně můžete nahrát a komprimovat až 10 souborů PDF."
      }
    ]
  },
  "edit-pdf": {
    "title": "Upravit PDF",
    "metaDescription": "Upravujte text a obrázky v PDF přímo online. Klikněte do odstavce a upravujte jej na místě s živým přeformátováním, nahrazujte obrázky a hledejte a nahrazujte text v celém dokumentu.",
    "keywords": [
      "upravit pdf",
      "editor pdf",
      "upravit text v pdf",
      "přímá úprava pdf",
      "úprava pdf na místě",
      "změnit text v pdf"
    ],
    "description": "\n      <p>Nástroj Upravit PDF nabízí vysoce věrnou úpravu textu a obrázků přímo na místě, kterou pohání engine PDFium ve WebAssembly. Klikněte přímo do existujícího odstavce a upravujte text stejně jako v textovém editoru, s automatickým zalamováním řádků a přeformátováním.</p>\n      <p>Rozvržení dolaďte pomocí panelu vlastností (velikost písma, barva, výška řádku, zarovnání), nahrazujte nebo převracejte obrázky, případně hromadně vyhledávejte a nahrazujte text v celém dokumentu. Pokud potřebujete kreslení od ruky, razítka nebo podpisy formulářů, můžete kdykoli přepnout do režimu Klasické anotace.</p>\n      <p>Všechny úpravy probíhají výhradně přímo ve vašem prohlížeči, což zaručuje 100% soukromí a bezpečnost vašich souborů.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte PDF",
        "description": "Přetáhněte soubor PDF, nebo klikněte a vyberte dokument, který chcete upravit."
      },
      {
        "step": 2,
        "title": "Klikněte a upravujte text přímo",
        "description": "Kliknutím nebo dvojklikem na libovolný odstavec či nadpis zahájíte úpravy s živým přeformátováním."
      },
      {
        "step": 3,
        "title": "Formátujte a upravujte obrázky",
        "description": "Upravte typografii v panelu vlastností, nebo klikněte pravým tlačítkem na obrázek a nahraďte či převraťte jej."
      },
      {
        "step": 4,
        "title": "Uložte a stáhněte",
        "description": "Kliknutím na Uložit změny v pravém horním panelu nástrojů exportujete aktualizovaný PDF."
      }
    ],
    "useCases": [
      {
        "title": "Oprava překlepů",
        "description": "Opravte překlepy, jména, data nebo ceny přímo v původním dokumentu bez otevírání zdrojových souborů.",
        "icon": "edit-3"
      },
      {
        "title": "Globální hledání a nahrazení",
        "description": "Vyhledejte klíčová slova na všech stránkách a plynule je nahraďte přímo na místě.",
        "icon": "search"
      },
      {
        "title": "Aktualizace grafiky a log",
        "description": "Vyměňte zastaralá loga, diagramy nebo podpisy za nově nahrané obrázky.",
        "icon": "image"
      }
    ],
    "faq": [
      {
        "question": "Mohu přímo upravovat existující text v PDF?",
        "answer": "Ano! Editor umožňuje přímou úpravu obsahu. Stačí kliknout na libovolný existující textový blok nebo odstavec a psát, mazat a přeformátovat s živým přeformátováním."
      },
      {
        "question": "Mohu stále přidávat anotace, razítka a podpisy?",
        "answer": "Ano! Přepínačem režimu v záhlaví můžete kdykoli přejít do režimu Klasické anotace pro razítka, kreslení od ruky a formuláře."
      },
      {
        "question": "Zůstávají mé soubory soukromé a v bezpečí?",
        "answer": "Rozhodně. Veškeré dekódování PDF, seskupování textu, zalamování i úpravy datových proudů probíhají výhradně lokálně ve vašem prohlížeči prostřednictvím WebAssembly."
      }
    ]
  },
  "jpg-to-pdf": {
    "title": "JPG do PDF",
    "metaDescription": "Převeďte obrázky JPG do PDF. Spojte více souborů JPG do jednoho dokumentu PDF.",
    "keywords": [
      "jpg do pdf",
      "jpeg do pdf",
      "převést jpg",
      "obrázek do pdf",
      "fotka do pdf"
    ],
    "description": "\n      <p>Nástroj JPG do PDF rychle a snadno převede vaše obrázky JPEG do dokumentů PDF. Ať máte jedinou fotografii, nebo více obrázků, tento nástroj vytvoří profesionálně vypadající soubory PDF.</p>\n      <p>Více souborů JPG můžete spojit do jednoho PDF, seřadit je v libovolném pořadí a přizpůsobit velikost i orientaci stránky. Převod zachovává kvalitu obrázků a vytváří kompaktní soubory PDF vhodné ke sdílení.</p>\n      <p>Veškerý převod probíhá ve vašem prohlížeči, takže vaše fotografie zůstávají soukromé.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte obrázky JPG",
        "description": "Přetáhněte soubory JPG, nebo klikněte a vyberte obrázky ze svého zařízení."
      },
      {
        "step": 2,
        "title": "Seřaďte a nastavte",
        "description": "Změňte pořadí obrázků přetažením a zvolte velikost a orientaci stránky."
      },
      {
        "step": 3,
        "title": "Převeďte a stáhněte",
        "description": "Kliknutím na Převést vytvoříte PDF a stáhnete výsledek."
      }
    ],
    "useCases": [
      {
        "title": "Fotoalba",
        "description": "Vytvořte z fotek z dovolené nebo akcí fotoalba ve formátu PDF pro snadné sdílení.",
        "icon": "image"
      },
      {
        "title": "Skenování dokumentů",
        "description": "Převeďte fotografie dokumentů pořízené fotoaparátem telefonu na plnohodnotné soubory PDF.",
        "icon": "camera"
      },
      {
        "title": "Tvorba portfolia",
        "description": "Sestavte fotografickou práci nebo ukázky návrhů do profesionálního portfolia ve formátu PDF.",
        "icon": "folder"
      }
    ],
    "faq": [
      {
        "question": "Kolik obrázků mohu převést?",
        "answer": "Do jednoho dokumentu PDF můžete převést až 100 obrázků JPG."
      },
      {
        "question": "Zachová se kvalita obrázků?",
        "answer": "Ano, obrázky se vkládají v původní kvalitě. Volitelně je můžete komprimovat a zmenšit tak velikost souboru."
      },
      {
        "question": "Mohu pro různé obrázky nastavit různé velikosti stránky?",
        "answer": "Nástroj používá pro všechny stránky jednotnou velikost. Každý obrázek se přizpůsobí zvolené velikosti stránky při zachování poměru stran."
      }
    ]
  },
  "sign-pdf": {
    "title": "Podepsat PDF",
    "metaDescription": "Přidejte do dokumentů PDF elektronický podpis. Podpis nakreslete, napište nebo nahrajte.",
    "keywords": [
      "podepsat pdf",
      "elektronický podpis",
      "e-podpis",
      "podpis pdf",
      "digitální podpis"
    ],
    "description": "\n      <p>Nástroj Podepsat PDF vám umožní rychle a bezpečně přidat elektronický podpis do dokumentů PDF. Vytvořte podpis nakreslením, napsáním nebo nahráním obrázku a poté jej umístěte kamkoli do dokumentu.</p>\n      <p>Do jednoho dokumentu můžete přidat více podpisů, přesně měnit jejich velikost a umístění a uložit si podpis pro budoucí použití. Nástroj je ideální pro smlouvy, dohody, formuláře a jakékoli dokumenty vyžadující váš podpis.</p>\n      <p>Veškeré podepisování probíhá lokálně ve vašem prohlížeči, takže vaše dokumenty i podpis zůstávají soukromé.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte PDF",
        "description": "Přetáhněte soubor PDF, nebo klikněte a vyberte dokument, který potřebujete podepsat."
      },
      {
        "step": 2,
        "title": "Vytvořte podpis",
        "description": "Nakreslete podpis myší nebo dotykem, napište své jméno a vygenerujte z něj podpis, nebo nahrajte obrázek podpisu. Můžete také naskenovat fotografii podpisu napsaného na papíře."
      },
      {
        "step": 3,
        "title": "Umístěte a upravte",
        "description": "Kliknutím do dokumentu umístěte podpis, poté jej přetažením přesuňte a podle potřeby změňte jeho velikost."
      },
      {
        "step": 4,
        "title": "Uložte a stáhněte",
        "description": "Kliknutím na Uložit použijete podpis a stáhnete podepsaný PDF."
      }
    ],
    "useCases": [
      {
        "title": "Podepisování smluv",
        "description": "Podepisujte smlouvy a dohody elektronicky bez tisku a skenování.",
        "icon": "file-signature"
      },
      {
        "title": "Vyplňování formulářů",
        "description": "Přidejte svůj podpis do přihlášek, souhlasů a úředních dokumentů.",
        "icon": "clipboard"
      },
      {
        "title": "Schvalovací postupy",
        "description": "Podepisujte dokumenty v rámci procesů kontroly a schvalování.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "Je elektronický podpis právně závazný?",
        "answer": "Elektronické podpisy jsou ve většině zemí právně uznávané. Některé dokumenty však mohou vyžadovat konkrétní typy digitálních podpisů. Ověřte si místní předpisy."
      },
      {
        "question": "Mohu si podpis uložit pro budoucí použití?",
        "answer": "Ano, podpis si můžete uložit do místního úložiště prohlížeče a mít k němu rychlý přístup při podepisování dalších dokumentů."
      },
      {
        "question": "Mohu do jednoho dokumentu přidat více podpisů?",
        "answer": "Ano, můžete přidat libovolný počet podpisů a každý z nich nezávisle umístit na kteroukoli stránku."
      }
    ]
  },
  "crop-pdf": {
    "title": "Oříznout PDF",
    "metaDescription": "Ořízněte stránky PDF a odstraňte okraje a nežádoucí oblasti. Přesně ořezávejte dokumenty PDF.",
    "keywords": [
      "oříznout pdf",
      "ořezat pdf",
      "odstranit okraje pdf",
      "změnit velikost stránek pdf",
      "ořezávač pdf"
    ],
    "description": "\n      <p>Nástroj Oříznout PDF vám umožní oříznout okraje a odstranit nežádoucí oblasti ze stránek PDF. Hodí se k odstranění přebytečného prázdného místa, zaměření na konkrétní část obsahu nebo sjednocení rozměrů stránek.</p>\n      <p>Všechny stránky můžete oříznout jednotně, nebo každou stránku upravit zvlášť. Vizuální rozhraní přesně ukazuje, co zůstane zachováno, takže snadno dosáhnete přesných výsledků.</p>\n      <p>Veškeré ořezávání probíhá lokálně ve vašem prohlížeči, takže vaše dokumenty zůstávají soukromé.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte PDF",
        "description": "Přetáhněte soubor PDF, nebo klikněte a vyberte dokument, který chcete oříznout."
      },
      {
        "step": 2,
        "title": "Určete oblast oříznutí",
        "description": "Přetažením úchytů ořezu vymezte oblast, kterou chcete zachovat, nebo zadejte přesné rozměry."
      },
      {
        "step": 3,
        "title": "Použijte na stránky",
        "description": "Zvolte, zda oříznutí použít na všechny stránky, nebo vyberte konkrétní stránky k oříznutí."
      },
      {
        "step": 4,
        "title": "Ořízněte a stáhněte",
        "description": "Kliknutím na Oříznout použijete změny a stáhnete oříznutý PDF."
      }
    ],
    "useCases": [
      {
        "title": "Odstranění okrajů",
        "description": "Ořízněte nadměrné okraje naskenovaných dokumentů nebo PDF s širokým lemováním.",
        "icon": "maximize-2"
      },
      {
        "title": "Zaměření na obsah",
        "description": "Ořízněte stránku tak, aby vynikla konkrétní část obsahu, a odstraňte záhlaví, zápatí nebo postranní panely.",
        "icon": "target"
      },
      {
        "title": "Sjednocení stránek",
        "description": "Oříznutím na jednotné rozměry získáte stránky stejné velikosti.",
        "icon": "square"
      }
    ],
    "faq": [
      {
        "question": "Odstraní oříznutí obsah trvale?",
        "answer": "Ano, oříznutí odstraní obsah mimo oblast ořezu. Nezapomeňte si ponechat zálohu původního souboru."
      },
      {
        "question": "Mohu různé stránky oříznout různě?",
        "answer": "Ano, na jednotlivé stránky nebo skupiny stránek můžete použít různá nastavení oříznutí."
      },
      {
        "question": "Ovlivní oříznutí kvalitu textu?",
        "answer": "Ne, oříznutí odstraní pouze oblasti mimo hranici ořezu. Zbývající obsah si zachová původní kvalitu."
      }
    ]
  },
  "extract-pages": {
    "title": "Extrahovat stránky",
    "metaDescription": "Extrahujte konkrétní stránky ze souborů PDF. Vyberte jednotlivé stránky a uložte je jako nové dokumenty.",
    "keywords": [
      "extrahovat stránky z pdf",
      "uložit stránky pdf",
      "kopírovat stránky pdf",
      "extrakce stránek pdf"
    ],
    "description": "\n      <p>Nástroj Extrahovat stránky vám umožní vybrat konkrétní stránky z dokumentu PDF a uložit je jako nové soubory. Ideální pro vyjmutí relevantních částí, tvorbu výňatků nebo oddělení spojených dokumentů.</p>\n      <p>Můžete extrahovat jednotlivé stránky, rozsahy stránek nebo více stránek, které na sebe nenavazují. Vizuální náhled stránek usnadňuje rozpoznání a výběr přesně těch stránek, které potřebujete.</p>\n      <p>Veškerá extrakce probíhá lokálně ve vašem prohlížeči, takže vaše dokumenty zůstávají soukromé.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte PDF",
        "description": "Přetáhněte soubor PDF, nebo klikněte a vyberte dokument, ze kterého chcete extrahovat stránky."
      },
      {
        "step": 2,
        "title": "Vyberte stránky",
        "description": "Klikněte na miniatury stránek a vyberte je, nebo zadejte čísla a rozsahy stránek do vstupního pole."
      },
      {
        "step": 3,
        "title": "Extrahujte a stáhněte",
        "description": "Kliknutím na Extrahovat vytvoříte nový PDF s vybranými stránkami a stáhnete jej."
      }
    ],
    "useCases": [
      {
        "title": "Tvorba výňatků",
        "description": "Extrahujte relevantní stránky ze zpráv nebo knih a vytvořte cílené referenční dokumenty.",
        "icon": "file-minus"
      },
      {
        "title": "Sdílení konkrétního obsahu",
        "description": "Vyjměte konkrétní stránky a sdílejte je, aniž byste museli posílat celý dokument.",
        "icon": "share-2"
      },
      {
        "title": "Archivace důležitých stránek",
        "description": "Extrahujte a uložte klíčové stránky z dokumentů pro dlouhodobou archivaci.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Mohu extrahovat stránky, které na sebe nenavazují?",
        "answer": "Ano, můžete vybrat libovolnou kombinaci stránek, ať jdou po sobě, nebo jsou rozptýlené v celém dokumentu."
      },
      {
        "question": "Zachovají se záložky?",
        "answer": "Záložky odkazující na extrahované stránky se v novém dokumentu zachovají."
      },
      {
        "question": "Mohu extrahovat stránky z více PDF?",
        "answer": "Tento nástroj pracuje vždy s jedním PDF. Ke spojení stránek z více PDF použijte nástroj Spojit PDF."
      }
    ]
  },
  "organize-pdf": {
    "title": "Uspořádat PDF",
    "metaDescription": "Měňte pořadí stránek PDF, duplikujte je a odstraňujte. Uspořádejte dokumenty přetažením.",
    "keywords": [
      "uspořádat pdf",
      "změnit pořadí stránek pdf",
      "přeskupit pdf",
      "organizér stránek pdf"
    ],
    "description": "\n      <p>Nástroj Uspořádat PDF nabízí intuitivní rozhraní s přetahováním pro změnu uspořádání stránek v dokumentech PDF. Snadno změňte pořadí stránek, duplikujte důležité části nebo odstraňte nežádoucí stránky.</p>\n      <p>Vizuální miniatury stránek usnadňují rozpoznání obsahu a uspořádání stránek přesně podle vašich potřeb. Ideální pro restrukturalizaci dokumentů, vytvoření vlastního pořadí stránek nebo úklid naskenovaných souborů.</p>\n      <p>Veškeré úpravy probíhají lokálně ve vašem prohlížeči, takže vaše dokumenty zůstávají soukromé.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte PDF",
        "description": "Přetáhněte soubor PDF, nebo klikněte a vyberte dokument, který chcete uspořádat."
      },
      {
        "step": 2,
        "title": "Změňte uspořádání stránek",
        "description": "Přetažením miniatur stránek změňte jejich pořadí. Podle potřeby použijte u každé stránky tlačítka pro duplikování nebo odstranění."
      },
      {
        "step": 3,
        "title": "Uložte a stáhněte",
        "description": "Kliknutím na Uložit použijete změny a stáhnete přeuspořádaný PDF."
      }
    ],
    "useCases": [
      {
        "title": "Oprava pořadí stránek",
        "description": "Opravte pořadí stránek, které byly nesprávně naskenovány nebo spojeny.",
        "icon": "arrow-up-down"
      },
      {
        "title": "Vlastní pořadí",
        "description": "Seřaďte stránky v konkrétním sledu pro prezentace nebo zprávy.",
        "icon": "list"
      },
      {
        "title": "Odstranění nežádoucích stránek",
        "description": "Odstraňte z dokumentů prázdné stránky, duplicity nebo nerelevantní obsah.",
        "icon": "trash-2"
      }
    ],
    "faq": [
      {
        "question": "Mohu stránky duplikovat?",
        "answer": "Ano, kteroukoli stránku můžete duplikovat a kopii umístit kamkoli do dokumentu."
      },
      {
        "question": "Je k dispozici funkce Zpět?",
        "answer": "Ano, změny můžete vracet zpět i opakovat. Kdykoli se také můžete vrátit k původnímu pořadí."
      },
      {
        "question": "Mohu uspořádat více PDF současně?",
        "answer": "Tento nástroj pracuje vždy s jedním PDF. Chcete-li spojit a uspořádat více PDF, nejprve je spojte pomocí nástroje Spojit PDF."
      }
    ]
  },
  "delete-pages": {
    "title": "Odstranit stránky",
    "metaDescription": "Odstraňte nežádoucí stránky ze souborů PDF. Snadno vyberte a odstraňte konkrétní stránky.",
    "keywords": [
      "odstranit stránky z pdf",
      "smazat stránky pdf",
      "odstraňovač stránek pdf",
      "vymazat stránky z pdf"
    ],
    "description": "\n      <p>Nástroj Odstranit stránky vám umožní rychle a snadno odstranit nežádoucí stránky z dokumentů PDF. Ať potřebujete odstranit prázdné stránky, zastaralý obsah nebo citlivé informace, s tímto nástrojem je to jednoduché.</p>\n      <p>Vizuální miniatury stránek vám pomohou přesně určit, které stránky odstranit. Můžete odstranit jednotlivé stránky nebo více stránek najednou.</p>\n      <p>Veškeré zpracování probíhá lokálně ve vašem prohlížeči, takže vaše dokumenty zůstávají soukromé.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte PDF",
        "description": "Přetáhněte soubor PDF, nebo klikněte a vyberte dokument, ze kterého chcete odstranit stránky."
      },
      {
        "step": 2,
        "title": "Vyberte stránky k odstranění",
        "description": "Kliknutím na miniatury stránek je označte k odstranění, nebo zadejte čísla stránek do vstupního pole."
      },
      {
        "step": 3,
        "title": "Odstraňte a stáhněte",
        "description": "Kliknutím na Odstranit odeberete vybrané stránky a stáhnete aktualizovaný PDF."
      }
    ],
    "useCases": [
      {
        "title": "Odstranění prázdných stránek",
        "description": "Vyčistěte dokumenty odstraněním omylem vložených prázdných stránek.",
        "icon": "file-x"
      },
      {
        "title": "Odstranění citlivého obsahu",
        "description": "Před sdílením dokumentů odstraňte stránky s důvěrnými informacemi.",
        "icon": "shield"
      },
      {
        "title": "Zeštíhlení dokumentů",
        "description": "Odstraňte zastaralé nebo nerelevantní stránky a vytvořte cílenější dokumenty.",
        "icon": "filter"
      }
    ],
    "faq": [
      {
        "question": "Mohu odstraněné stránky obnovit?",
        "answer": "Odstranění je ve výstupním souboru trvalé. Pokud byste stránky mohli později potřebovat, ponechte si zálohu původního dokumentu."
      },
      {
        "question": "Mohu odstranit více stránek najednou?",
        "answer": "Ano, můžete vybrat a odstranit více stránek současně."
      },
      {
        "question": "Ovlivní odstranění stránek záložky?",
        "answer": "Záložky odkazující na odstraněné stránky budou odebrány. Záložky na zbývající stránky se zachovají."
      }
    ]
  },
  "bookmark": {
    "title": "Upravit záložky",
    "metaDescription": "Přidávejte, upravujte a spravujte záložky v PDF. Vytvořte navigační strukturu svých dokumentů.",
    "keywords": [
      "záložky pdf",
      "upravit záložky",
      "přidat záložky",
      "navigace v pdf",
      "obsah dokumentu"
    ],
    "description": "\n      <p>Nástroj Upravit záložky vám umožní vytvářet, upravovat a uspořádávat záložky v dokumentech PDF. Záložky umožňují rychlý přechod na konkrétní části, takže se v dlouhých dokumentech snáze orientujete.</p>\n      <p>Můžete přidávat nové záložky, upravovat stávající, měnit hierarchii záložek nebo je importovat z externích zdrojů. Tento nástroj je nezbytný pro tvorbu profesionálních a snadno procházených dokumentů.</p>\n      <p>Veškeré úpravy probíhají lokálně ve vašem prohlížeči, takže vaše dokumenty zůstávají soukromé.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte PDF",
        "description": "Přetáhněte soubor PDF, nebo klikněte a vyberte dokument, který chcete upravit."
      },
      {
        "step": 2,
        "title": "Spravujte záložky",
        "description": "Přidávejte nové záložky, upravujte stávající, nebo přetažením změňte hierarchii."
      },
      {
        "step": 3,
        "title": "Uložte a stáhněte",
        "description": "Kliknutím na Uložit použijete změny a stáhnete PDF s aktualizovanými záložkami."
      }
    ],
    "useCases": [
      {
        "title": "Vytvoření navigace",
        "description": "Přidejte do dlouhých dokumentů záložky, aby čtenáři rychle našli konkrétní části.",
        "icon": "navigation"
      },
      {
        "title": "Uspořádání kapitol",
        "description": "Vytvořte hierarchickou strukturu záložek, která odpovídá členění dokumentu do kapitol.",
        "icon": "book-open"
      },
      {
        "title": "Lepší přístupnost",
        "description": "Přidejte záložky, aby byly dokumenty přístupnější a uživatelsky přívětivější.",
        "icon": "accessibility"
      }
    ],
    "faq": [
      {
        "question": "Mohu vytvářet vnořené záložky?",
        "answer": "Ano, můžete vytvořit hierarchickou strukturu s nadřazenými a podřazenými záložkami."
      },
      {
        "question": "Mohu importovat záložky ze souboru?",
        "answer": "Ano, struktury záložek můžete importovat ze souborů JSON nebo textových souborů."
      },
      {
        "question": "Budou záložky fungovat ve všech čtečkách PDF?",
        "answer": "Ano, záložky jsou standardní funkcí PDF, kterou podporují všechny hlavní čtečky PDF."
      }
    ]
  },
  "table-of-contents": {
    "title": "Obsah",
    "metaDescription": "Vygenerujte obsah pro svůj PDF. Vytvořte ze záložek klikatelnou navigaci.",
    "keywords": [
      "obsah pdf",
      "generátor obsahu",
      "rejstřík pdf",
      "navigace v dokumentu"
    ],
    "description": "\n      <p>Nástroj Obsah vygeneruje pro vaše dokumenty PDF stránku s obsahem, ve které se lze proklikat. Obsah lze vytvořit z existujících záložek nebo z vlastních položek a poskytne čtenářům přehled i rychlou navigaci.</p>\n      <p>Vzhled si přizpůsobte pomocí různých stylů, písem a rozvržení. Vygenerovaný obsah obsahuje klikatelné odkazy, které vedou přímo na příslušné stránky.</p>\n      <p>Veškeré zpracování probíhá lokálně ve vašem prohlížeči, takže vaše dokumenty zůstávají soukromé.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte PDF",
        "description": "Přetáhněte soubor PDF, nebo klikněte a vyberte dokument."
      },
      {
        "step": 2,
        "title": "Nastavte obsah",
        "description": "Zvolte, zda obsah vygenerovat ze záložek, nebo vytvořit vlastní položky. Vyberte styl a umístění."
      },
      {
        "step": 3,
        "title": "Vygenerujte a stáhněte",
        "description": "Kliknutím na Vygenerovat vytvoříte obsah a stáhnete aktualizovaný PDF."
      }
    ],
    "useCases": [
      {
        "title": "Akademické práce",
        "description": "Přidejte profesionální obsah do diplomových a disertačních prací i výzkumných článků.",
        "icon": "graduation-cap"
      },
      {
        "title": "Firemní zprávy",
        "description": "Vytvářejte přehledné zprávy s jasným seznamem oddílů pro zainteresované strany.",
        "icon": "bar-chart"
      },
      {
        "title": "Uživatelské příručky",
        "description": "Generujte podrobné obsahy pro technickou dokumentaci a uživatelské příručky.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "Mohu přizpůsobit vzhled obsahu?",
        "answer": "Ano, pro obsah si můžete vybrat z různých stylů, písem a rozvržení."
      },
      {
        "question": "Kam se obsah vloží?",
        "answer": "Ve výchozím nastavení se obsah vloží na začátek dokumentu, ale můžete zvolit i jiné umístění."
      },
      {
        "question": "Jsou položky obsahu klikatelné?",
        "answer": "Ano, každá položka je klikatelný odkaz, který vás přenese na příslušnou stránku."
      }
    ]
  },
  "page-numbers": {
    "title": "Čísla stránek",
    "metaDescription": "Přidejte do dokumentů PDF čísla stránek. Přizpůsobte umístění, formát i počáteční číslo.",
    "keywords": [
      "přidat čísla stránek",
      "čísla stránek pdf",
      "očíslovat stránky pdf",
      "stránkování pdf"
    ],
    "description": "\n      <p>Nástroj Čísla stránek přidá do vašich dokumentů PDF přizpůsobitelné číslování stránek. Vyberte si z různých formátů, umístění a stylů, které odpovídají vzhledu vašeho dokumentu.</p>\n      <p>Můžete nastavit počáteční číslo, vynechat určité stránky a použít různé formáty číslování (1, 2, 3 nebo i, ii, iii). Ideální pro tvorbu profesionálních dokumentů se správným stránkováním.</p>\n      <p>Veškeré zpracování probíhá lokálně ve vašem prohlížeči, takže vaše dokumenty zůstávají soukromé.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte PDF",
        "description": "Přetáhněte soubor PDF, nebo klikněte a vyberte dokument."
      },
      {
        "step": 2,
        "title": "Nastavte číslování",
        "description": "Zvolte umístění, formát, počáteční číslo a stránky, které se mají očíslovat."
      },
      {
        "step": 3,
        "title": "Použijte a stáhněte",
        "description": "Kliknutím na Použít přidáte čísla stránek a stáhnete aktualizovaný PDF."
      }
    ],
    "useCases": [
      {
        "title": "Profesionální dokumenty",
        "description": "Přidejte čísla stránek do zpráv, nabídek a obchodních dokumentů.",
        "icon": "file-text"
      },
      {
        "title": "Akademické práce",
        "description": "Očíslujte stránky podle požadavků na formátování akademických prací.",
        "icon": "graduation-cap"
      },
      {
        "title": "Právní dokumenty",
        "description": "Přidejte správné stránkování do smluv a soudních podání.",
        "icon": "scale"
      }
    ],
    "faq": [
      {
        "question": "Mohu vynechat první stránku?",
        "answer": "Ano, můžete určit, které stránky se mají očíslovat a které vynechat, například titulní stránky nebo obálky."
      },
      {
        "question": "Jaké formáty čísel jsou k dispozici?",
        "answer": "Můžete použít arabské číslice (1, 2, 3), římské číslice (i, ii, iii nebo I, II, III) nebo písmena (a, b, c)."
      },
      {
        "question": "Mohu přidat formát „Stránka X z Y“?",
        "answer": "Ano, do formátu číslování můžete zahrnout celkový počet stránek."
      }
    ]
  },
  "add-watermark": {
    "title": "Přidat vodoznak",
    "metaDescription": "Přidejte do souborů PDF textový nebo obrázkový vodoznak. Chraňte své dokumenty a opatřete je značkou.",
    "keywords": [
      "přidat vodoznak",
      "vodoznak pdf",
      "razítko do pdf",
      "logo do pdf",
      "ochrana pdf"
    ],
    "description": "\n      <p>Nástroj Přidat vodoznak vám umožní umístit do dokumentů PDF textový nebo obrázkový vodoznak. Vodoznaky mohou označovat stav dokumentu (Koncept, Důvěrné), nést vaši značku nebo odrazovat od neoprávněného kopírování.</p>\n      <p>Přizpůsobte umístění, velikost, průhlednost, otočení a barvu vodoznaku. Použijte jej na všechny stránky nebo vyberte konkrétní stránky. Nástroj podporuje textové i obrázkové vodoznaky.</p>\n      <p>Veškeré zpracování probíhá lokálně ve vašem prohlížeči, takže vaše dokumenty zůstávají soukromé.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte PDF",
        "description": "Přetáhněte soubor PDF, nebo klikněte a vyberte dokument."
      },
      {
        "step": 2,
        "title": "Vytvořte vodoznak",
        "description": "Zadejte text nebo nahrajte obrázek pro vodoznak. Upravte umístění, velikost, průhlednost a otočení."
      },
      {
        "step": 3,
        "title": "Použijte a stáhněte",
        "description": "Kliknutím na Použít přidáte vodoznak a stáhnete aktualizovaný PDF."
      }
    ],
    "useCases": [
      {
        "title": "Ochrana dokumentů",
        "description": "Přidejte vodoznak „Důvěrné“ nebo „Koncept“ pro označení stavu dokumentu.",
        "icon": "shield"
      },
      {
        "title": "Firemní značka",
        "description": "Přidejte do oficiálních dokumentů firemní logo nebo název.",
        "icon": "award"
      },
      {
        "title": "Upozornění na autorská práva",
        "description": "Přidejte informace o autorských právech a chraňte duševní vlastnictví.",
        "icon": "copyright"
      }
    ],
    "faq": [
      {
        "question": "Mohu jako vodoznak použít obrázek?",
        "answer": "Ano, jako vodoznak můžete nahrát obrázky PNG, JPG nebo SVG."
      },
      {
        "question": "Mohu vodoznak nastavit jako poloprůhledný?",
        "answer": "Ano, průhlednost můžete nastavit od zcela průhledného po zcela neprůhledný."
      },
      {
        "question": "Mohu na různé stránky použít různé vodoznaky?",
        "answer": "Nástroj použije stejný vodoznak na vybrané stránky. Pro různé vodoznaky zpracujte dokument vícekrát."
      }
    ]
  },
  "header-footer": {
    "title": "Záhlaví a zápatí",
    "metaDescription": "Přidejte do PDF dokumentů záhlaví a zápatí. Vložte čísla stránek, data a vlastní text.",
    "keywords": [
      "záhlaví pdf",
      "zápatí pdf",
      "přidat záhlaví a zápatí",
      "hlavičkový papír pdf"
    ],
    "description": "\n      <p>Nástroj Záhlaví a zápatí přidá do vašich PDF dokumentů přizpůsobitelné záhlaví a zápatí. Do záhlaví nebo zápatí můžete vložit čísla stránek, data, názvy dokumentů nebo libovolný vlastní text.</p>\n      <p>Obsah lze umístit vlevo, na střed nebo vpravo. V případě potřeby můžete použít odlišný obsah pro liché a sudé stránky. Ideální pro tvorbu profesionálních dokumentů s jednotným formátováním.</p>\n      <p>Veškeré zpracování probíhá lokálně ve vašem prohlížeči, takže vaše dokumenty zůstávají v soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte PDF",
        "description": "Přetáhněte PDF soubor sem nebo klikněte a vyberte dokument."
      },
      {
        "step": 2,
        "title": "Nastavte záhlaví a zápatí",
        "description": "Zadejte text pro oblast záhlaví a zápatí. Přidejte čísla stránek, data nebo vlastní text."
      },
      {
        "step": 3,
        "title": "Použijte a stáhněte",
        "description": "Klikněte na Použít pro přidání záhlaví a zápatí a stáhněte upravené PDF."
      }
    ],
    "useCases": [
      {
        "title": "Firemní dokumenty",
        "description": "Přidejte do profesionálních dokumentů název společnosti a čísla stránek.",
        "icon": "briefcase"
      },
      {
        "title": "Právní dokumenty",
        "description": "Vložte do právních podání spisové značky, data a odkazy na stránky.",
        "icon": "scale"
      },
      {
        "title": "Akademické práce",
        "description": "Přidejte průběžné záhlaví s názvem práce a jménem autora.",
        "icon": "graduation-cap"
      }
    ],
    "faq": [
      {
        "question": "Mohu mít na lichých a sudých stránkách odlišné záhlaví?",
        "answer": "Ano, pro liché a sudé stránky můžete nastavit odlišný obsah."
      },
      {
        "question": "Mohu vložit aktuální datum?",
        "answer": "Ano, můžete vložit dynamická pole s datem, která zobrazují aktuální datum."
      },
      {
        "question": "Mohu na některých stránkách záhlaví či zápatí vynechat?",
        "answer": "Ano, můžete určit, které stránky mají mít záhlaví a zápatí a které se mají vynechat."
      }
    ]
  },
  "invert-colors": {
    "title": "Invertovat barvy",
    "metaDescription": "Invertujte barvy PDF pro čtení v tmavém režimu. Převeďte dokumenty do negativních barev.",
    "keywords": [
      "invertovat barvy pdf",
      "tmavý režim pdf",
      "negativ pdf",
      "obrátit barvy"
    ],
    "description": "\n      <p>Nástroj Invertovat barvy obrátí barvy ve vašich PDF dokumentech a vytvoří efekt negativu. To se hodí zejména pro tvorbu verzí dokumentů v tmavém režimu, které se lépe čtou při slabém osvětlení.</p>\n      <p>Nástroj může invertovat všechny barvy, nebo vybrané prvky, například obrázky, zachovat. Ideální pro snížení namáhání očí při nočním čtení dokumentů.</p>\n      <p>Veškeré zpracování probíhá lokálně ve vašem prohlížeči, takže vaše dokumenty zůstávají v soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte PDF",
        "description": "Přetáhněte PDF soubor sem nebo klikněte a vyberte dokument."
      },
      {
        "step": 2,
        "title": "Nastavte možnosti",
        "description": "Zvolte, zda invertovat veškerý obsah, nebo zachovat obrázky."
      },
      {
        "step": 3,
        "title": "Invertujte a stáhněte",
        "description": "Klikněte na Invertovat pro zpracování dokumentu a stáhněte výsledek."
      }
    ],
    "useCases": [
      {
        "title": "Noční čtení",
        "description": "Vytvořte verze dokumentů v tmavém režimu pro pohodlné čtení v noci.",
        "icon": "moon"
      },
      {
        "title": "Méně namáhané oči",
        "description": "Invertujte světlé dokumenty a snižte únavu očí při dlouhém čtení.",
        "icon": "eye"
      },
      {
        "title": "Úspora při tisku",
        "description": "Invertujte dokumenty a snižte spotřebu inkoustu při tisku konceptů.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Budou invertovány i obrázky?",
        "answer": "Ve výchozím nastavení ano. Můžete však zvolit zachování původních obrázků a invertovat jen text a pozadí."
      },
      {
        "question": "Mohu invertovat jen vybrané stránky?",
        "answer": "Ano, můžete vybrat, které stránky se mají invertovat."
      },
      {
        "question": "Lze inverzi vrátit zpět?",
        "answer": "Opětovnou inverzí dokumentu získáte přibližně původní barvy."
      }
    ]
  },
  "background-color": {
    "title": "Barva pozadí",
    "metaDescription": "Změňte barvu pozadí PDF. Přidejte stránkám dokumentu barevné pozadí.",
    "keywords": [
      "barva pozadí pdf",
      "změnit pozadí pdf",
      "barevné pdf",
      "barva stránky pdf"
    ],
    "description": "\n      <p>Nástroj Barva pozadí umožňuje změnit nebo přidat barvu pozadí stránek PDF. Může zlepšit čitelnost, oživit vzhled dokumentu nebo jej sladit s firemní identitou.</p>\n      <p>Zvolte libovolnou barvu pozadí a použijte ji na všechny nebo jen vybrané stránky. Nástroj zachová veškerý stávající obsah a pouze přidá vrstvu pozadí.</p>\n      <p>Veškeré zpracování probíhá lokálně ve vašem prohlížeči, takže vaše dokumenty zůstávají v soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte PDF",
        "description": "Přetáhněte PDF soubor sem nebo klikněte a vyberte dokument."
      },
      {
        "step": 2,
        "title": "Zvolte barvu",
        "description": "Vyberte barvu pozadí pomocí výběru barvy nebo zadejte hex kód."
      },
      {
        "step": 3,
        "title": "Použijte a stáhněte",
        "description": "Klikněte na Použít pro přidání pozadí a stáhněte upravené PDF."
      }
    ],
    "useCases": [
      {
        "title": "Lepší čitelnost",
        "description": "Přidejte světle krémové nebo sépiové pozadí pro menší namáhání očí.",
        "icon": "eye"
      },
      {
        "title": "Firemní dokumenty",
        "description": "Použijte firemní barvy jako pozadí marketingových materiálů.",
        "icon": "palette"
      },
      {
        "title": "Zvýraznění oddílů",
        "description": "Odlište jednotlivé oddíly dokumentu různými barvami pozadí.",
        "icon": "layers"
      }
    ],
    "faq": [
      {
        "question": "Překryje pozadí stávající obsah?",
        "answer": "Ne, pozadí se přidá za stávající obsah a veškerý text i obrázky zůstanou zachovány."
      },
      {
        "question": "Mohu pro různé stránky použít různé barvy?",
        "answer": "Pro různé barvy na různých stránkách je potřeba dokument zpracovat vícekrát."
      },
      {
        "question": "Mohu odstranit stávající pozadí?",
        "answer": "Tento nástroj pozadí přidává. K odstranění pozadí může být potřeba použít nástroj Upravit PDF."
      }
    ]
  },
  "text-color": {
    "title": "Změnit barvu textu",
    "metaDescription": "Změňte barvu textu v PDF dokumentech. Upravte barvu veškerého textového obsahu.",
    "keywords": [
      "změnit barvu textu pdf",
      "barva textu pdf",
      "upravit barvu textu",
      "přebarvit text pdf"
    ],
    "description": "\n      <p>Nástroj Změnit barvu textu umožňuje upravit barvu textu ve vašich PDF dokumentech. Hodí se ke zlepšení kontrastu, sladění s firemní identitou nebo k vytvoření barevných variant dokumentů.</p>\n      <p>Vyberte novou barvu a použijte ji na veškerý text v dokumentu. Nástroj zpracuje textové prvky a zachová obrázky i ostatní obsah.</p>\n      <p>Veškeré zpracování probíhá lokálně ve vašem prohlížeči, takže vaše dokumenty zůstávají v soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte PDF",
        "description": "Přetáhněte PDF soubor sem nebo klikněte a vyberte dokument."
      },
      {
        "step": 2,
        "title": "Zvolte barvu",
        "description": "Vyberte novou barvu textu pomocí výběru barvy nebo zadejte hex kód."
      },
      {
        "step": 3,
        "title": "Použijte a stáhněte",
        "description": "Klikněte na Použít pro změnu barvy textu a stáhněte upravené PDF."
      }
    ],
    "useCases": [
      {
        "title": "Lepší kontrast",
        "description": "Změňte barvu textu pro lepší čitelnost na daném pozadí.",
        "icon": "contrast"
      },
      {
        "title": "Jednotná firemní identita",
        "description": "Upravte barvy textu podle firemního manuálu.",
        "icon": "palette"
      },
      {
        "title": "Přístupnost",
        "description": "Upravte barvy textu tak, aby splňovaly požadavky přístupnosti na kontrast.",
        "icon": "accessibility"
      }
    ],
    "faq": [
      {
        "question": "Změní se veškerý text?",
        "answer": "Ano, nástroj změní barvu všech textových prvků v dokumentu."
      },
      {
        "question": "Mohu změnit jen konkrétní text?",
        "answer": "Tento nástroj mění veškerý text. Pro výběrové změny použijte nástroj Upravit PDF."
      },
      {
        "question": "Zachová se formátování textu (tučné, kurzíva)?",
        "answer": "Ano, formátování textu zůstane zachováno; změní se pouze barva."
      }
    ]
  },
  "add-stamps": {
    "title": "Přidat razítka",
    "metaDescription": "Přidejte do PDF dokumentů razítka. Použijte přednastavená nebo vlastní razítka pro schválení, kontrolu a další.",
    "keywords": [
      "razítka pdf",
      "přidat razítko",
      "razítko schváleno",
      "razítko do pdf"
    ],
    "description": "\n      <p>Nástroj Přidat razítka umožňuje umístit do PDF dokumentů obrázky razítek. Použijte přednastavená razítka jako „Schváleno“, „Zamítnuto“, „Koncept“, nebo nahrajte vlastní obrázky razítek.</p>\n      <p>Razítka můžete umístit kamkoli na stránku, změnit jejich velikost a použít je na jednu nebo více stránek. Ideální pro pracovní postupy s dokumenty, schvalování a označování stavu.</p>\n      <p>Veškeré zpracování probíhá lokálně ve vašem prohlížeči, takže vaše dokumenty zůstávají v soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte PDF",
        "description": "Přetáhněte PDF soubor sem nebo klikněte a vyberte dokument."
      },
      {
        "step": 2,
        "title": "Vyberte razítko",
        "description": "Zvolte přednastavené razítko nebo nahrajte vlastní obrázek razítka."
      },
      {
        "step": 3,
        "title": "Umístěte a použijte",
        "description": "Kliknutím razítko umístěte, upravte jeho polohu a velikost a poté stáhněte."
      }
    ],
    "useCases": [
      {
        "title": "Schvalování dokumentů",
        "description": "Přidávejte razítka „Schváleno“ nebo „Zamítnuto“ k dokumentům v procesu kontroly.",
        "icon": "check-circle"
      },
      {
        "title": "Označení stavu",
        "description": "Označte dokumenty jako „Koncept“, „Finální“ nebo „Důvěrné“.",
        "icon": "tag"
      },
      {
        "title": "Kontrola kvality",
        "description": "Přidejte razítka kontroly kvality jako potvrzení dokončené inspekce nebo revize.",
        "icon": "clipboard-check"
      }
    ],
    "faq": [
      {
        "question": "Jaká přednastavená razítka jsou k dispozici?",
        "answer": "K dispozici jsou mimo jiné razítka Schváleno, Zamítnuto, Koncept, Finální, Důvěrné a Kopie."
      },
      {
        "question": "Mohu nahrát vlastní razítka?",
        "answer": "Ano, jako vlastní razítka můžete nahrát obrázky PNG nebo JPG."
      },
      {
        "question": "Mohu do jednoho dokumentu přidat více razítek?",
        "answer": "Ano, můžete přidat více razítek a každé umístit samostatně."
      }
    ]
  },
  "remove-annotations": {
    "title": "Odstranit anotace",
    "metaDescription": "Odstraňte anotace ze souborů PDF. Smažte komentáře, zvýraznění a značky.",
    "keywords": [
      "odstranit anotace pdf",
      "smazat komentáře",
      "odstranit zvýraznění",
      "vyčistit pdf"
    ],
    "description": "\n      <p>Nástroj Odstranit anotace odebere z vašich PDF dokumentů komentáře, zvýraznění, rychlé poznámky a další anotace. Vznikne tak čistá verze dokumentu bez značek.</p>\n      <p>Můžete odstranit všechny anotace, nebo jen vybrané typy. Ideální pro tvorbu finálních verzí revidovaných dokumentů nebo odstranění citlivých komentářů.</p>\n      <p>Veškeré zpracování probíhá lokálně ve vašem prohlížeči, takže vaše dokumenty zůstávají v soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte PDF",
        "description": "Přetáhněte PDF soubor sem nebo klikněte a vyberte dokument."
      },
      {
        "step": 2,
        "title": "Vyberte typy anotací",
        "description": "Zvolte, které typy anotací chcete odstranit: komentáře, zvýraznění, odkazy atd."
      },
      {
        "step": 3,
        "title": "Odstraňte a stáhněte",
        "description": "Klikněte na Odstranit pro odebrání anotací a stáhněte vyčištěné PDF."
      }
    ],
    "useCases": [
      {
        "title": "Finalizace dokumentů",
        "description": "Před zveřejněním finálních dokumentů odstraňte komentáře a značky z revize.",
        "icon": "file-check"
      },
      {
        "title": "Ochrana soukromí",
        "description": "Před sdílením odstraňte komentáře, které mohou obsahovat citlivé informace.",
        "icon": "shield"
      },
      {
        "title": "Čisté kopie k distribuci",
        "description": "Vytvořte z anotovaných dokumentů čisté kopie k distribuci.",
        "icon": "copy"
      }
    ],
    "faq": [
      {
        "question": "Jaké typy anotací lze odstranit?",
        "answer": "Odstranit lze komentáře, zvýraznění, podtržení, přeškrtnutí, rychlé poznámky, razítka i odkazy."
      },
      {
        "question": "Mohu některé anotace ponechat?",
        "answer": "Ano, můžete zvolit, které typy anotací odstranit a které ponechat."
      },
      {
        "question": "Lze to vrátit zpět?",
        "answer": "Ne, odstranění anotací je trvalé. V případě potřeby si ponechte zálohu originálu."
      }
    ]
  },
  "form-filler": {
    "title": "Vyplnit formulář",
    "metaDescription": "Vyplňujte PDF formuláře online. Vyplňte interaktivní PDF formuláře bez tisku.",
    "keywords": [
      "vyplnit pdf formulář",
      "vyplňování pdf formulářů",
      "vyplnit formulář online",
      "interaktivní pdf"
    ],
    "description": "\n      <p>Nástroj Vyplnit formulář umožňuje vyplňovat interaktivní PDF formuláře přímo ve vašem prohlížeči. Vyplňte textová pole, zaškrtněte políčka, vyberte možnosti a přidejte podpisy bez nutnosti dokument tisknout.</p>\n      <p>Nástroj podporuje standardní PDF formuláře i formuláře XFA. Vyplněná data můžete uložit a formulář sloučit do jedné vrstvy (zploštit), aby jej už nebylo možné upravovat.</p>\n      <p>Veškeré zpracování probíhá lokálně ve vašem prohlížeči, takže data z formulářů zůstávají v soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte PDF formulář",
        "description": "Přetáhněte PDF formulář sem nebo klikněte a vyberte soubor."
      },
      {
        "step": 2,
        "title": "Vyplňte formulář",
        "description": "Klikněte do polí formuláře a zadejte text, zaškrtněte políčka nebo vyberte možnosti."
      },
      {
        "step": 3,
        "title": "Uložte a stáhněte",
        "description": "Klikněte na Uložit pro uložení zadaných údajů a stáhněte vyplněný formulář."
      }
    ],
    "useCases": [
      {
        "title": "Žádosti a přihlášky",
        "description": "Vyplňte žádosti o zaměstnání, žádosti o povolení a registrační formuláře.",
        "icon": "clipboard"
      },
      {
        "title": "Daňové formuláře",
        "description": "Vyplňte daňová přiznání a finanční formuláře elektronicky.",
        "icon": "file-text"
      },
      {
        "title": "Smlouvy",
        "description": "Před podpisem doplňte do smluvních formulářů své údaje.",
        "icon": "file-signature"
      }
    ],
    "faq": [
      {
        "question": "Mohu si uložit rozpracovaný formulář?",
        "answer": "Ano, částečně vyplněné formuláře můžete uložit a pokračovat později."
      },
      {
        "question": "Co je zploštění formuláře?",
        "answer": "Zploštění (sloučení vrstev) převede pole formuláře na statický obsah, takže jej už nelze dále upravovat."
      },
      {
        "question": "Jsou podporovány formuláře XFA?",
        "answer": "Ano, nástroj podporuje standardní formuláře AcroForm i formuláře XFA."
      }
    ]
  },
  "form-creator": {
    "title": "Vytvořit formulář",
    "metaDescription": "Vytvářejte vyplnitelné PDF formuláře. Přidejte do dokumentů textová pole, zaškrtávací políčka a rozbalovací seznamy.",
    "keywords": [
      "vytvořit pdf formulář",
      "tvorba pdf formulářů",
      "vyplnitelné pdf",
      "přidat pole formuláře"
    ],
    "description": "\n      <p>Nástroj Vytvořit formulář promění statické PDF dokumenty v interaktivní vyplnitelné formuláře. Přidejte textová pole, zaškrtávací políčka, přepínače, rozbalovací seznamy a další prvky a vytvořte profesionální formuláře.</p>\n      <p>Přetáhněte prvky formuláře do dokumentu, nastavte vlastnosti polí a vytvořte formuláře, které lze vyplnit elektronicky. Ideální pro tvorbu přihlášek, dotazníků a formulářů pro sběr dat.</p>\n      <p>Veškeré zpracování probíhá lokálně ve vašem prohlížeči, takže vaše dokumenty zůstávají v soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte PDF",
        "description": "Přetáhněte PDF soubor sem nebo klikněte a vyberte dokument, který chcete převést na formulář."
      },
      {
        "step": 2,
        "title": "Přidejte pole formuláře",
        "description": "Vyberte typ pole na panelu nástrojů a kliknutím jej umístěte do dokumentu."
      },
      {
        "step": 3,
        "title": "Nastavte a uložte",
        "description": "Nastavte vlastnosti polí, poté uložte a stáhněte vyplnitelný PDF formulář."
      }
    ],
    "useCases": [
      {
        "title": "Žádosti a přihlášky",
        "description": "Vytvořte vyplnitelné žádosti o zaměstnání, členské přihlášky a registrace.",
        "icon": "user-plus"
      },
      {
        "title": "Dotazníky",
        "description": "Sestavte interaktivní ankety a dotazníky pro sběr dat.",
        "icon": "clipboard-list"
      },
      {
        "title": "Objednávkové formuláře",
        "description": "Vytvořte objednávkové formuláře s poli pro množství a zaškrtávacími políčky.",
        "icon": "shopping-cart"
      }
    ],
    "faq": [
      {
        "question": "Jaké typy polí mohu přidat?",
        "answer": "Textová pole, zaškrtávací políčka, přepínače, rozbalovací seznamy, výběr data a pole pro podpis."
      },
      {
        "question": "Mohu nastavit pole jako povinná?",
        "answer": "Ano, pole můžete označit jako povinná a přidat pravidla pro ověření."
      },
      {
        "question": "Mohu přidat výpočty?",
        "answer": "K číselným polím lze přidat základní výpočty, jako je součet a průměr."
      }
    ]
  },
  "remove-blank-pages": {
    "title": "Odstranit prázdné stránky",
    "metaDescription": "Automaticky rozpoznejte a odstraňte prázdné stránky z PDF dokumentů.",
    "keywords": [
      "odstranit prázdné stránky",
      "smazat prázdné stránky",
      "vyčistit pdf",
      "odstranění prázdných stránek pdf"
    ],
    "description": "\n      <p>Nástroj Odstranit prázdné stránky automaticky rozpozná a odstraní prázdné stránky z vašich PDF dokumentů. Hodí se k vyčištění naskenovaných dokumentů, odstranění oddělovacích stránek nebo omylem vložených prázdných stránek.</p>\n      <p>Nástroj využívá inteligentní detekci, která rozpozná skutečně prázdné stránky a zachová stránky s minimálním obsahem. Citlivost můžete upravit nastavením prahu, který určuje, co se považuje za „prázdné“.</p>\n      <p>Veškeré zpracování probíhá lokálně ve vašem prohlížeči, takže vaše dokumenty zůstávají v soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte PDF",
        "description": "Přetáhněte PDF soubor sem nebo klikněte a vyberte dokument."
      },
      {
        "step": 2,
        "title": "Upravte práh",
        "description": "V případě potřeby nastavte práh pro detekci prázdných stránek (výchozí hodnota vyhovuje většině dokumentů)."
      },
      {
        "step": 3,
        "title": "Odstraňte a stáhněte",
        "description": "Klikněte na Odstranit pro smazání prázdných stránek a stáhněte vyčištěné PDF."
      }
    ],
    "useCases": [
      {
        "title": "Čištění naskenovaných dokumentů",
        "description": "Odstraňte prázdné stránky z dávkově naskenovaných dokumentů.",
        "icon": "scan"
      },
      {
        "title": "Odstranění oddělovačů",
        "description": "Smažte prázdné oddělovací stránky ze spojených dokumentů.",
        "icon": "minus"
      },
      {
        "title": "Menší velikost souboru",
        "description": "Odstraňte zbytečné prázdné stránky a zmenšete velikost dokumentu.",
        "icon": "minimize-2"
      }
    ],
    "faq": [
      {
        "question": "Jak funguje detekce prázdných stránek?",
        "answer": "Nástroj analyzuje obsah stránek a za prázdné považuje stránky s minimálním nebo žádným viditelným obsahem."
      },
      {
        "question": "Mohu si zobrazit náhled stránek, které budou odstraněny?",
        "answer": "Ano, rozpoznané prázdné stránky jsou před odstraněním zvýrazněny ke kontrole."
      },
      {
        "question": "Co když stránka obsahuje jen záhlaví nebo zápatí?",
        "answer": "Úpravou prahu můžete určit, zda se stránky s minimálním obsahem mají považovat za prázdné."
      }
    ]
  },
  "image-to-pdf": {
    "title": "Obrázek do PDF",
    "metaDescription": "Převeďte libovolný obrázek do PDF. Podpora formátů JPG, PNG, WebP, BMP, TIFF, SVG a HEIC.",
    "keywords": [
      "obrázek do pdf",
      "převést obrázek",
      "fotka do pdf",
      "převod obrázku na pdf"
    ],
    "description": "\n      <p>Nástroj Obrázek do PDF převede obrázky libovolného formátu na PDF dokumenty. Díky podpoře formátů JPG, PNG, WebP, BMP, TIFF, SVG a HEIC jde o univerzální převodník obrázků.</p>\n      <p>Spojte více obrázků do jednoho PDF, seřaďte je v libovolném pořadí a přizpůsobte velikost a orientaci stránky. Ideální pro tvorbu fotoalb, archivů dokumentů nebo portfolií.</p>\n      <p>Veškerý převod probíhá ve vašem prohlížeči, takže vaše obrázky zůstávají v soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte obrázky",
        "description": "Přetáhněte sem obrázky v libovolném podporovaném formátu nebo klikněte a vyberte soubory."
      },
      {
        "step": 2,
        "title": "Seřaďte a nastavte",
        "description": "Změňte pořadí obrázků a zvolte velikost a orientaci stránky."
      },
      {
        "step": 3,
        "title": "Převeďte a stáhněte",
        "description": "Klikněte na Převést pro vytvoření PDF a stáhněte výsledek."
      }
    ],
    "useCases": [
      {
        "title": "Sbírky fotografií",
        "description": "Spojte fotografie z různých zdrojů do jednoho PDF alba.",
        "icon": "images"
      },
      {
        "title": "Dokumenty z různých formátů",
        "description": "Převeďte obrázky v různých formátech do jednotného PDF.",
        "icon": "file-stack"
      },
      {
        "title": "Tvorba archivů",
        "description": "Vytvořte ze sbírek obrázků PDF archivy pro dlouhodobé uložení.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Jaké formáty obrázků jsou podporovány?",
        "answer": "Podporovány jsou formáty JPG, JPEG, PNG, WebP, BMP, TIFF, TIF, SVG, HEIC a HEIF."
      },
      {
        "question": "Mohu kombinovat různé formáty obrázků?",
        "answer": "Ano, obrázky v různých formátech můžete spojit do jednoho PDF."
      },
      {
        "question": "Zůstane zachována kvalita obrázků?",
        "answer": "Ano, obrázky se vloží v původní kvalitě, pokud nezvolíte jejich komprimaci."
      }
    ]
  },
  "png-to-pdf": {
    "title": "PNG do PDF",
    "metaDescription": "Převeďte obrázky PNG do PDF. Zachovejte průhlednost a spojte více souborů PNG.",
    "keywords": [
      "png do pdf",
      "převést png",
      "převodník png",
      "průhledný obrázek do pdf"
    ],
    "description": "\n      <p>Nástroj PNG do PDF převede vaše obrázky PNG na PDF dokumenty se zachováním průhlednosti. Ideální pro grafiku, loga, snímky obrazovky a obrázky s průhledným pozadím.</p>\n      <p>Spojte více souborů PNG do jednoho PDF, seřaďte je v libovolném pořadí a přizpůsobte nastavení stránky. Převod zachová vysokou kvalitu původních obrázků.</p>\n      <p>Veškerý převod probíhá ve vašem prohlížeči, takže vaše obrázky zůstávají v soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte soubory PNG",
        "description": "Přetáhněte obrázky PNG sem nebo klikněte a vyberte soubory."
      },
      {
        "step": 2,
        "title": "Seřaďte a nastavte",
        "description": "Změňte pořadí obrázků a zvolte velikost stránky."
      },
      {
        "step": 3,
        "title": "Převeďte a stáhněte",
        "description": "Klikněte na Převést pro vytvoření PDF a stáhněte jej."
      }
    ],
    "useCases": [
      {
        "title": "Grafické portfolio",
        "description": "Sestavte z grafiky a návrhů ve formátu PNG profesionální portfolio.",
        "icon": "palette"
      },
      {
        "title": "Dokumentace ze snímků obrazovky",
        "description": "Převeďte snímky obrazovky na dokumentaci v PDF.",
        "icon": "monitor"
      },
      {
        "title": "Sbírky log",
        "description": "Vytvořte PDF katalogy log a prvků firemní identity.",
        "icon": "award"
      }
    ],
    "faq": [
      {
        "question": "Zůstane zachována průhlednost?",
        "answer": "Průhlednost PNG zůstane ve výsledném PDF zachována."
      },
      {
        "question": "A co animované PNG?",
        "answer": "Animované PNG se převedou jako statické obrázky z prvního snímku."
      },
      {
        "question": "Mohu nastavit barvu pozadí?",
        "answer": "Ano, pro průhledné oblasti můžete zvolit barvu pozadí."
      }
    ]
  },
  "webp-to-pdf": {
    "title": "WebP do PDF",
    "metaDescription": "Převeďte obrázky WebP do PDF. Převod moderního formátu obrázků se zachováním kvality.",
    "keywords": [
      "webp do pdf",
      "převést webp",
      "převodník webp",
      "webový obrázek do pdf"
    ],
    "description": "\n      <p>Nástroj WebP do PDF převede moderní obrázky WebP na PDF dokumenty. WebP je oblíbený webový formát obrázků a tento nástroj usnadňuje jejich převod pro tisk nebo archivaci.</p>\n      <p>Spojte více souborů WebP do jednoho PDF s přizpůsobitelným nastavením stránky. Převod zachová kvalitu obrázků a vytvoří kompaktní soubory PDF.</p>\n      <p>Veškerý převod probíhá ve vašem prohlížeči, takže vaše obrázky zůstávají v soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte soubory WebP",
        "description": "Přetáhněte obrázky WebP sem nebo klikněte a vyberte soubory."
      },
      {
        "step": 2,
        "title": "Nastavte možnosti",
        "description": "Seřaďte obrázky a zvolte velikost a orientaci stránky."
      },
      {
        "step": 3,
        "title": "Převeďte a stáhněte",
        "description": "Klikněte na Převést pro vytvoření PDF."
      }
    ],
    "useCases": [
      {
        "title": "Archivace webového obsahu",
        "description": "Převeďte webové obrázky do PDF pro archivaci offline.",
        "icon": "globe"
      },
      {
        "title": "Příprava k tisku",
        "description": "Převeďte obrázky WebP do PDF pro účely tisku.",
        "icon": "printer"
      },
      {
        "title": "Sjednocení formátu",
        "description": "Převeďte moderní WebP do univerzálně kompatibilního PDF.",
        "icon": "file-check"
      }
    ],
    "faq": [
      {
        "question": "Co je formát WebP?",
        "answer": "WebP je moderní formát obrázků vyvinutý společností Google, který nabízí vynikající kompresi webových obrázků."
      },
      {
        "question": "Zůstane zachována kvalita?",
        "answer": "Ano, převod zachová původní kvalitu obrázků."
      },
      {
        "question": "Mohu převést animované WebP?",
        "answer": "Animované soubory WebP se převedou jako statické obrázky."
      }
    ]
  },
  "svg-to-pdf": {
    "title": "SVG do PDF",
    "metaDescription": "Převeďte vektorovou grafiku SVG do PDF. Zachovejte škálovatelnost a kvalitu.",
    "keywords": [
      "svg do pdf",
      "převést svg",
      "vektor do pdf",
      "vektorová grafika do pdf"
    ],
    "description": "\n      <p>Nástroj SVG do PDF převede škálovatelnou vektorovou grafiku na PDF dokumenty se zachováním vektorové kvality. Soubory SVG zůstávají ostré v jakékoli velikosti a tato kvalita se zachová i ve výsledném PDF.</p>\n      <p>Ideální pro převod log, ikon, ilustrací a technických výkresů. Výsledné PDF si zachová škálovatelnost původní vektorové grafiky.</p>\n      <p>Veškerý převod probíhá ve vašem prohlížeči, takže vaše soubory zůstávají v soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte soubory SVG",
        "description": "Přetáhněte soubory SVG sem nebo klikněte a vyberte je."
      },
      {
        "step": 2,
        "title": "Upravte nastavení",
        "description": "Zvolte velikost stránky a možnosti uspořádání."
      },
      {
        "step": 3,
        "title": "Převeďte a stáhněte",
        "description": "Klikněte na Převést pro vytvoření vektorového PDF."
      }
    ],
    "useCases": [
      {
        "title": "Převod log",
        "description": "Převeďte loga SVG do PDF pro tiskové materiály.",
        "icon": "award"
      },
      {
        "title": "Technické výkresy",
        "description": "Převeďte exporty z CAD a technické ilustrace do PDF.",
        "icon": "ruler"
      },
      {
        "title": "Sbírky ikon",
        "description": "Vytvořte PDF katalogy sad ikon a grafiky.",
        "icon": "grid"
      }
    ],
    "faq": [
      {
        "question": "Zůstane zachována vektorová kvalita?",
        "answer": "Ano, vektorová kvalita SVG zůstane ve výsledném PDF plně zachována."
      },
      {
        "question": "Mohu převést složité soubory SVG?",
        "answer": "Ano, podporovány jsou i složité soubory SVG s přechody, filtry a efekty."
      },
      {
        "question": "A co vložená písma?",
        "answer": "Písma vložená do souborů SVG zůstanou v PDF zachována."
      }
    ]
  },
  "bmp-to-pdf": {
    "title": "BMP do PDF",
    "metaDescription": "Převeďte bitmapové obrázky BMP do PDF. Podpora staršího formátu se zachováním kvality.",
    "keywords": [
      "bmp do pdf",
      "převést bmp",
      "bitmapa do pdf",
      "převodník bmp"
    ],
    "description": "\n      <p>Nástroj BMP do PDF převede bitmapové obrázky na PDF dokumenty. BMP je starší formát obrázků běžně používaný v prostředí Windows a tento nástroj usnadňuje převod těchto souborů do moderního formátu PDF.</p>\n      <p>Spojte více souborů BMP do jednoho PDF s přizpůsobitelným nastavením. Převod zkomprimuje obvykle velké soubory BMP a zachová kvalitu obrázků.</p>\n      <p>Veškerý převod probíhá ve vašem prohlížeči, takže vaše obrázky zůstávají v soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte soubory BMP",
        "description": "Přetáhněte obrázky BMP sem nebo klikněte a vyberte soubory."
      },
      {
        "step": 2,
        "title": "Nastavte možnosti",
        "description": "Seřaďte obrázky a zvolte nastavení stránky."
      },
      {
        "step": 3,
        "title": "Převeďte a stáhněte",
        "description": "Klikněte na Převést pro vytvoření PDF."
      }
    ],
    "useCases": [
      {
        "title": "Převod starších souborů",
        "description": "Převeďte staré soubory BMP do moderního formátu PDF.",
        "icon": "history"
      },
      {
        "title": "Snímky obrazovky z Windows",
        "description": "Převeďte bitmapové snímky obrazovky z Windows do PDF.",
        "icon": "monitor"
      },
      {
        "title": "Modernizace archivu",
        "description": "Převeďte starší archivy obrázků do formátu PDF.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Zmenší se velikost souboru?",
        "answer": "Ano, soubory BMP se při převodu do PDF obvykle výrazně zkomprimují."
      },
      {
        "question": "Zůstane zachována kvalita?",
        "answer": "Ano, kvalita obrázků zůstane při převodu zachována."
      },
      {
        "question": "Jaké barevné hloubky BMP jsou podporovány?",
        "answer": "Podporovány jsou všechny standardní barevné hloubky BMP včetně 24bitové a 32bitové."
      }
    ]
  },
  "psd-to-pdf": {
    "title": "PSD do PDF",
    "metaDescription": "Převeďte soubory Adobe Photoshop (PSD) do formátu PDF. Podporuje více souborů a zachovává kvalitu obrázků.",
    "keywords": [
      "psd do pdf",
      "převést psd",
      "photoshop do pdf",
      "převodník psd",
      "adobe psd do pdf"
    ],
    "description": "\n      <p>Nástroj PSD do PDF převede soubory Adobe Photoshop (PSD) na PDF dokumenty. Umožňuje zobrazit a sdílet návrhy v PSD bez nutnosti mít nainstalovaný Photoshop.</p>\n      <p>Můžete převést více souborů PSD najednou a spojit je do jednoho PDF dokumentu. Nástroj zpracuje každý soubor PSD a vykreslí viditelné vrstvy do vysoce kvalitních stránek PDF.</p>\n      <p>Veškerý převod probíhá lokálně ve vašem prohlížeči, takže vaše návrhy zůstávají v soukromí a v bezpečí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte soubory PSD",
        "description": "Přetáhněte soubory PSD nebo PSB sem, nebo klikněte a vyberte je ze svého zařízení."
      },
      {
        "step": 2,
        "title": "Seřaďte soubory",
        "description": "Přetažením miniatur souborů je seřaďte v požadovaném pořadí."
      },
      {
        "step": 3,
        "title": "Převeďte a stáhněte",
        "description": "Klikněte na Převést pro vykreslení souborů PSD a stáhněte PDF dokument."
      }
    ],
    "useCases": [
      {
        "title": "Sdílení návrhů",
        "description": "Sdílejte návrhy z Photoshopu s klienty nebo kolegy, kteří Photoshop nemají.",
        "icon": "share-2"
      },
      {
        "title": "Tvorba portfolia",
        "description": "Sestavte své grafické práce do profesionálního PDF portfolia.",
        "icon": "layout"
      },
      {
        "title": "Příprava k tisku",
        "description": "Převeďte návrhy do PDF pro účely tisku.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Musím mít nainstalovaný Photoshop?",
        "answer": "Ne, tento nástroj funguje zcela ve vašem prohlížeči a Adobe Photoshop nevyžaduje."
      },
      {
        "question": "Zůstanou vrstvy zachovány?",
        "answer": "Nástroj vykreslí viditelný stav PSD (složený obraz). Jednotlivé vrstvy jsou v PDF sloučeny."
      },
      {
        "question": "Jaká je maximální velikost souboru?",
        "answer": "Můžete nahrát soubory o velikosti až 100 MB. Zpracování velkých souborů PSD může chvíli trvat."
      }
    ]
  },
  "heic-to-pdf": {
    "title": "HEIC do PDF",
    "metaDescription": "Převeďte fotky HEIC z iPhonu do PDF. Snadný převod obrazového formátu Apple.",
    "keywords": [
      "heic do pdf",
      "převést heic",
      "fotka z iphonu do pdf",
      "obrázek apple do pdf"
    ],
    "description": "\n      <p>Nástroj HEIC do PDF převede fotografie ve formátu High Efficiency Image Format od Applu na PDF dokumenty. HEIC je výchozí formát fotografií na iPhonech a iPadech a tento nástroj usnadňuje jejich sdílení.</p>\n      <p>Spojte více fotografií HEIC do jednoho PDF – ideální pro tvorbu fotoalb nebo archivů dokumentů z fotek z iPhonu.</p>\n      <p>Veškerý převod probíhá ve vašem prohlížeči, takže vaše fotografie zůstávají v soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte soubory HEIC",
        "description": "Přetáhněte fotografie HEIC sem nebo klikněte a vyberte soubory."
      },
      {
        "step": 2,
        "title": "Seřaďte fotografie",
        "description": "Změňte pořadí fotografií a zvolte nastavení stránky."
      },
      {
        "step": 3,
        "title": "Převeďte a stáhněte",
        "description": "Klikněte na Převést pro vytvoření PDF."
      }
    ],
    "useCases": [
      {
        "title": "Fotoalba z iPhonu",
        "description": "Vytvořte z fotek z iPhonu PDF alba ke sdílení.",
        "icon": "smartphone"
      },
      {
        "title": "Skenování dokumentů",
        "description": "Převeďte dokumenty naskenované iPhonem do formátu PDF.",
        "icon": "scan"
      },
      {
        "title": "Sdílení napříč platformami",
        "description": "Převeďte HEIC do PDF pro univerzální kompatibilitu.",
        "icon": "share-2"
      }
    ],
    "faq": [
      {
        "question": "Co je formát HEIC?",
        "answer": "HEIC (High Efficiency Image Container) je obrazový formát společnosti Apple, který nabízí lepší kompresi než JPEG."
      },
      {
        "question": "Jsou podporovány Live Photos?",
        "answer": "Live Photos se převedou jako statické obrázky z klíčového snímku."
      },
      {
        "question": "Zůstanou zachována data EXIF?",
        "answer": "Metadata fotografií lze při převodu volitelně zachovat nebo odstranit."
      }
    ]
  },
  "tiff-to-pdf": {
    "title": "TIFF do PDF",
    "metaDescription": "Převeďte obrázky TIFF do PDF. Podpora vícestránkových souborů TIFF a vysoce kvalitní převod.",
    "keywords": [
      "tiff do pdf",
      "převést tiff",
      "tif do pdf",
      "vícestránkový tiff"
    ],
    "description": "\n      <p>Nástroj TIFF do PDF převede obrázky TIFF, včetně vícestránkových souborů TIFF, na PDF dokumenty. Formát TIFF se běžně používá pro vysoce kvalitní skeny a profesionální grafiku.</p>\n      <p>Vícestránkové soubory TIFF se automaticky převedou na vícestránková PDF. Převod zachová vysokou kvalitu původních obrázků.</p>\n      <p>Veškerý převod probíhá ve vašem prohlížeči, takže vaše soubory zůstávají v soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte soubory TIFF",
        "description": "Přetáhněte soubory TIFF sem nebo klikněte a vyberte je."
      },
      {
        "step": 2,
        "title": "Nastavte možnosti",
        "description": "Zvolte nastavení stránky a možnosti komprese."
      },
      {
        "step": 3,
        "title": "Převeďte a stáhněte",
        "description": "Klikněte na Převést pro vytvoření PDF."
      }
    ],
    "useCases": [
      {
        "title": "Naskenované dokumenty",
        "description": "Převeďte vysoce kvalitní skeny z TIFF do PDF.",
        "icon": "scan"
      },
      {
        "title": "Profesionální grafika",
        "description": "Převeďte profesionální grafiku TIFF k distribuci.",
        "icon": "image"
      },
      {
        "title": "Převod archivů",
        "description": "Převeďte archivy TIFF do dostupnějšího formátu PDF.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Jsou podporovány vícestránkové soubory TIFF?",
        "answer": "Ano, vícestránkové soubory TIFF se automaticky převedou na vícestránková PDF."
      },
      {
        "question": "Zůstane zachována kvalita?",
        "answer": "Ano, kvalita TIFF zůstane ve výsledném PDF plně zachována."
      },
      {
        "question": "Jaká komprese se používá?",
        "answer": "Můžete si vybrat mezi bezeztrátovou a ztrátovou kompresí."
      }
    ]
  },
  "txt-to-pdf": {
    "title": "Text do PDF",
    "metaDescription": "Převeďte prosté textové soubory do PDF. Přizpůsobte si písmo, okraje a rozvržení stránky.",
    "keywords": [
      "txt do pdf",
      "text do pdf",
      "převést textový soubor",
      "prostý text do pdf"
    ],
    "description": "\n      <p>Nástroj Text do PDF převádí prosté textové soubory na formátované dokumenty PDF. Přizpůsobte si písmo, velikost, okraje a rozvržení stránky a vytvořte z obyčejného textu profesionálně vypadající dokumenty.</p>\n      <p>Ideální pro převod souborů se zdrojovým kódem, logů, poznámek nebo jakéhokoli prostého textu do formátu PDF, který snadno nasdílíte.</p>\n      <p>Celý převod probíhá ve vašem prohlížeči, takže vaše soubory zůstávají v soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrát textový soubor",
        "description": "Přetáhněte sem soubor .txt nebo jej vyberte kliknutím."
      },
      {
        "step": 2,
        "title": "Přizpůsobit formátování",
        "description": "Zvolte písmo, velikost, okraje a nastavení stránky."
      },
      {
        "step": 3,
        "title": "Převést a stáhnout",
        "description": "Kliknutím na Převést vytvoříte formátovaný PDF."
      }
    ],
    "useCases": [
      {
        "title": "Dokumentace kódu",
        "description": "Převádějte soubory se zdrojovým kódem do PDF pro účely dokumentace.",
        "icon": "code"
      },
      {
        "title": "Archivace logů",
        "description": "Převádějte soubory logů do PDF pro archivaci.",
        "icon": "file-text"
      },
      {
        "title": "Převod poznámek",
        "description": "Převádějte poznámky v prostém textu na formátované dokumenty PDF.",
        "icon": "sticky-note"
      }
    ],
    "faq": [
      {
        "question": "Jaká písma jsou k dispozici?",
        "answer": "K dispozici je několik písem včetně neproporcionálních písem vhodných pro kód."
      },
      {
        "question": "Zalamují se řádky automaticky?",
        "answer": "Ano, dlouhé řádky se automaticky zalomí tak, aby se vešly na stránku."
      },
      {
        "question": "Mohu zachovat formátování?",
        "answer": "Mezery a odsazení z původního textu zůstanou zachovány."
      }
    ]
  },
  "json-to-pdf": {
    "title": "JSON do PDF",
    "metaDescription": "Převeďte soubory JSON do formátovaného PDF. Zvýrazňování syntaxe a strukturovaný výstup.",
    "keywords": [
      "json do pdf",
      "převést json",
      "prohlížeč json",
      "formátování json"
    ],
    "description": "\n      <p>Nástroj JSON do PDF převádí datové soubory JSON na formátované a čitelné dokumenty PDF. Výstup obsahuje zvýraznění syntaxe a správné odsazení pro snadné čtení.</p>\n      <p>Ideální pro dokumentaci odpovědí API, konfiguračních souborů nebo jakýchkoli dat JSON, která potřebujete sdílet nebo archivovat v čitelné podobě.</p>\n      <p>Celý převod probíhá ve vašem prohlížeči, takže vaše data zůstávají v soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrát soubor JSON",
        "description": "Přetáhněte sem soubor .json nebo jej vyberte kliknutím."
      },
      {
        "step": 2,
        "title": "Nastavit zobrazení",
        "description": "Zvolte možnosti formátování a zvýrazňování syntaxe."
      },
      {
        "step": 3,
        "title": "Převést a stáhnout",
        "description": "Kliknutím na Převést vytvoříte formátovaný PDF."
      }
    ],
    "useCases": [
      {
        "title": "Dokumentace API",
        "description": "Převádějte odpovědi API do PDF pro účely dokumentace.",
        "icon": "code"
      },
      {
        "title": "Archivace konfigurací",
        "description": "Archivujte konfigurační soubory v čitelném formátu PDF.",
        "icon": "settings"
      },
      {
        "title": "Datové reporty",
        "description": "Vytvářejte reporty PDF z exportovaných dat JSON.",
        "icon": "bar-chart"
      }
    ],
    "faq": [
      {
        "question": "Je součástí zvýrazňování syntaxe?",
        "answer": "Ano, syntaxe JSON je barevně zvýrazněna podle klíčů, hodnot a typů."
      },
      {
        "question": "Jak se pracuje s vnořenými daty?",
        "answer": "Vnořené objekty a pole jsou správně odsazeny pro lepší čitelnost."
      },
      {
        "question": "Co velké soubory JSON?",
        "answer": "Velké soubory se automaticky rozdělí na více stránek."
      }
    ]
  },
  "word-to-pdf": {
    "title": "Word do PDF",
    "metaDescription": "Převeďte dokumenty Word (DOCX) do PDF. Formátování a rozvržení převedených dokumentů zůstane zachováno.",
    "keywords": [
      "word do pdf",
      "docx do pdf",
      "převést word",
      "převodník word",
      "microsoft word do pdf"
    ],
    "description": "\n      <p>Nástroj Word do PDF převádí dokumenty Microsoft Word do formátu PDF a zachovává původní formátování, rozvržení i strukturu obsahu.</p>\n      <p>Nahrajte soubory DOCX a získejte kvalitní výstup PDF vhodný ke sdílení, tisku nebo archivaci. Převod zachovává formátování textu, styly odstavců i základní strukturu dokumentu.</p>\n      <p>Celý převod probíhá lokálně ve vašem prohlížeči, takže vaše dokumenty zůstávají v soukromí a v bezpečí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrát dokument Word",
        "description": "Přetáhněte sem soubor .docx nebo jej kliknutím vyberte ze svého zařízení."
      },
      {
        "step": 2,
        "title": "Počkat na zpracování",
        "description": "Nástroj načte dokument a připraví jej k převodu."
      },
      {
        "step": 3,
        "title": "Stáhnout PDF",
        "description": "Kliknutím na Stáhnout uložíte převedený dokument PDF."
      }
    ],
    "useCases": [
      {
        "title": "Sdílení dokumentů",
        "description": "Převádějte dokumenty Word do PDF pro univerzální sdílení a prohlížení.",
        "icon": "share-2"
      },
      {
        "title": "Příprava k tisku",
        "description": "Vytvářejte z dokumentů Word soubory PDF připravené k tisku.",
        "icon": "printer"
      },
      {
        "title": "Archivace dokumentů",
        "description": "Archivujte dokumenty Word ve stabilním formátu PDF pro dlouhodobé uložení.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Je podporován formát .doc?",
        "answer": "V současnosti je podporován pouze formát .docx. Soubory .doc nejprve převeďte na .docx pomocí aplikace Microsoft Word nebo LibreOffice."
      },
      {
        "question": "Zůstanou obrázky zachovány?",
        "answer": "Textový obsah a základní formátování zůstanou zachovány. Složitá rozvržení s mnoha obrázky mohou být vykreslena zjednodušeně."
      },
      {
        "question": "Je převod bezpečný?",
        "answer": "Ano, veškeré zpracování probíhá ve vašem prohlížeči. Vaše dokumenty nikdy neopustí vaše zařízení."
      }
    ]
  },
  "excel-to-pdf": {
    "title": "Excel do PDF",
    "metaDescription": "Převeďte tabulky Excel (XLSX) do PDF. Tabulky a data v převedených dokumentech zůstanou zachovány.",
    "keywords": [
      "excel do pdf",
      "xlsx do pdf",
      "převést excel",
      "tabulka do pdf",
      "microsoft excel do pdf"
    ],
    "description": "\n      <p>Nástroj Excel do PDF převádí tabulky Microsoft Excel do formátu PDF a zachovává strukturu tabulek i uspořádání dat.</p>\n      <p>Nahrajte soubory XLSX a získejte čistý výstup PDF se správně formátovanými tabulkami. Každý list sešitu se v PDF stane samostatným oddílem.</p>\n      <p>Celý převod probíhá lokálně ve vašem prohlížeči, takže vaše data zůstávají v soukromí a v bezpečí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrát soubor Excel",
        "description": "Přetáhněte sem soubor .xlsx nebo jej kliknutím vyberte ze svého zařízení."
      },
      {
        "step": 2,
        "title": "Počkat na zpracování",
        "description": "Nástroj načte tabulku a převede všechny listy."
      },
      {
        "step": 3,
        "title": "Stáhnout PDF",
        "description": "Kliknutím na Stáhnout uložíte převedený dokument PDF."
      }
    ],
    "useCases": [
      {
        "title": "Sdílení reportů",
        "description": "Převádějte reporty z Excelu do PDF pro distribuci zúčastněným stranám.",
        "icon": "file-text"
      },
      {
        "title": "Archivace dat",
        "description": "Archivujte data z tabulek ve stabilním formátu PDF.",
        "icon": "archive"
      },
      {
        "title": "Příprava k tisku",
        "description": "Vytvářejte z listů Excelu soubory PDF připravené k tisku.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Je podporováno více listů?",
        "answer": "Ano, všechny listy sešitu se převedou a zahrnou do PDF."
      },
      {
        "question": "Je podporován formát .xls?",
        "answer": "V současnosti je podporován pouze formát .xlsx. Soubory .xls nejprve uložte jako .xlsx."
      },
      {
        "question": "Zůstanou vzorce zachovány?",
        "answer": "PDF zobrazuje vypočtené hodnoty. Vzorce nelze ve formátu PDF spouštět."
      }
    ]
  },
  "pptx-to-pdf": {
    "title": "PowerPoint do PDF",
    "metaDescription": "Převeďte prezentace PowerPoint (PPTX) do PDF. Snímky a obsah zůstanou zachovány pro snadné sdílení.",
    "keywords": [
      "powerpoint do pdf",
      "pptx do pdf",
      "převést pptx",
      "prezentace do pdf",
      "snímky do pdf"
    ],
    "description": "\n      <p>Nástroj PowerPoint do PDF převádí prezentace Microsoft PowerPoint do formátu PDF a zachovává obsah i text snímků pro snadné sdílení a prohlížení.</p>\n      <p>Každý snímek se stane jednou stránkou PDF, takže průběh prezentace zůstane zachován. Ideální pro sdílení prezentací s lidmi, kteří nemají nainstalovaný PowerPoint.</p>\n      <p>Celý převod probíhá lokálně ve vašem prohlížeči, takže vaše prezentace zůstávají v soukromí a v bezpečí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrát soubor PowerPoint",
        "description": "Přetáhněte sem soubor .pptx nebo jej kliknutím vyberte ze svého zařízení."
      },
      {
        "step": 2,
        "title": "Počkat na zpracování",
        "description": "Nástroj extrahuje obsah snímků a vytvoří PDF."
      },
      {
        "step": 3,
        "title": "Stáhnout PDF",
        "description": "Kliknutím na Stáhnout uložíte převedený dokument PDF."
      }
    ],
    "useCases": [
      {
        "title": "Sdílení prezentací",
        "description": "Sdílejte prezentace s kýmkoli, aniž by potřeboval PowerPoint.",
        "icon": "share-2"
      },
      {
        "title": "Tvorba podkladů",
        "description": "Vytvářejte ze snímků prezentace podklady pro posluchače v PDF.",
        "icon": "file-text"
      },
      {
        "title": "Archivace prezentací",
        "description": "Archivujte prezentace ve stabilním formátu PDF.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Zůstanou animace zachovány?",
        "answer": "PDF je statický formát, takže animace a přechody se nezachovají. Každý snímek se stane statickou stránkou."
      },
      {
        "question": "Je podporován formát .ppt?",
        "answer": "V současnosti je podporován pouze formát .pptx. Soubory .ppt nejprve převeďte na .pptx."
      },
      {
        "question": "Jsou zahrnuty poznámky řečníka?",
        "answer": "V současnosti nejsou poznámky řečníka ve výstupním PDF zahrnuty."
      }
    ]
  },
  "xps-to-pdf": {
    "title": "XPS do PDF",
    "metaDescription": "Převeďte dokumenty XPS do formátu PDF. Věrný převod se zachováním rozvržení a grafiky.",
    "keywords": [
      "xps do pdf",
      "převést xps",
      "převodník xps",
      "microsoft xps do pdf",
      "oxps do pdf"
    ],
    "description": "\n      <p>Nástroj XPS do PDF převádí dokumenty Microsoft XPS (XML Paper Specification) do formátu PDF a zachovává původní rozvržení, text i vektorovou grafiku.</p>\n      <p>XPS je formát dokumentů s pevným rozvržením podobný PDF. Tento nástroj zajišťuje věrný převod díky nativnímu zpracování XPS, takže vaše dokumenty budou přesně reprodukovány.</p>\n      <p>Celý převod probíhá lokálně ve vašem prohlížeči, takže vaše dokumenty zůstávají v soukromí a v bezpečí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrát soubor XPS",
        "description": "Přetáhněte sem soubor .xps nebo jej kliknutím vyberte ze svého zařízení."
      },
      {
        "step": 2,
        "title": "Počkat na zpracování",
        "description": "Nástroj načte a převede dokument XPS."
      },
      {
        "step": 3,
        "title": "Stáhnout PDF",
        "description": "Kliknutím na Stáhnout uložíte převedený dokument PDF."
      }
    ],
    "useCases": [
      {
        "title": "Převod formátu",
        "description": "Převádějte dokumenty XPS do šířeji podporovaného formátu PDF.",
        "icon": "file"
      },
      {
        "title": "Sdílení dokumentů",
        "description": "Sdílejte dokumenty XPS s uživateli, kteří nemají prohlížeč XPS.",
        "icon": "share-2"
      },
      {
        "title": "Migrace archivů",
        "description": "Převeďte archivy XPS do formátu PDF pro lepší kompatibilitu.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Co je formát XPS?",
        "answer": "XPS (XML Paper Specification) je formát dokumentů s pevným rozvržením od společnosti Microsoft, podobný PDF. Běžně se používá pro tisk ve Windows."
      },
      {
        "question": "Je převod bezztrátový?",
        "answer": "Ano, převod věrně zachovává text, grafiku i rozvržení."
      },
      {
        "question": "Jsou podporovány vícestránkové soubory XPS?",
        "answer": "Ano, všechny stránky dokumentu XPS se převedou do PDF."
      }
    ]
  },
  "rtf-to-pdf": {
    "title": "RTF do PDF",
    "metaDescription": "Převeďte soubory RTF (Rich Text Format) do PDF. Formátování textu ve vašich dokumentech zůstane zachováno.",
    "keywords": [
      "rtf do pdf",
      "převést rtf",
      "rich text do pdf",
      "převodník rtf"
    ],
    "description": "\n      <p>Nástroj RTF do PDF převádí soubory Rich Text Format na dokumenty PDF. RTF je široce podporovaný textový formát, který obsahuje základní formátování, jako jsou písma, barvy a styly.</p>\n      <p>Nahrajte soubory RTF a získejte čistý výstup PDF se zachovaným textovým obsahem i základním formátováním. Ideální pro převod starších dokumentů do moderního formátu PDF.</p>\n      <p>Celý převod probíhá lokálně ve vašem prohlížeči, takže vaše dokumenty zůstávají v soukromí a v bezpečí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrát soubor RTF",
        "description": "Přetáhněte sem soubor .rtf nebo jej kliknutím vyberte ze svého zařízení."
      },
      {
        "step": 2,
        "title": "Počkat na zpracování",
        "description": "Nástroj načte a převede obsah RTF."
      },
      {
        "step": 3,
        "title": "Stáhnout PDF",
        "description": "Kliknutím na Stáhnout uložíte převedený dokument PDF."
      }
    ],
    "useCases": [
      {
        "title": "Převod starších dokumentů",
        "description": "Převádějte staré dokumenty RTF do moderního formátu PDF.",
        "icon": "history"
      },
      {
        "title": "Sdílení dokumentů",
        "description": "Sdílejte dokumenty RTF v univerzálně zobrazitelném formátu PDF.",
        "icon": "share-2"
      },
      {
        "title": "Archivace dokumentů",
        "description": "Archivujte soubory RTF ve stabilním formátu PDF pro dlouhodobé uložení.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Jaké formátování zůstane zachováno?",
        "answer": "Převádí se základní formátování textu včetně písem, odstavců a stylů. Složitější funkce RTF mohou být zjednodušeny."
      },
      {
        "question": "Mohu převést více souborů RTF?",
        "answer": "V současnosti se převádí vždy jeden soubor. Pro spojení více převedených souborů použijte nástroj Spojit PDF."
      },
      {
        "question": "Jsou podporovány vložené obrázky?",
        "answer": "Hlavní důraz je kladen na textový obsah. Vložené objekty se nemusí vykreslit."
      }
    ]
  },
  "epub-to-pdf": {
    "title": "EPUB do PDF",
    "metaDescription": "Převeďte e-knihy EPUB do PDF. Formátování, obrázky i struktura kapitol zůstanou zachovány.",
    "keywords": [
      "epub do pdf",
      "převést epub",
      "e-kniha do pdf",
      "převodník epub"
    ],
    "description": "\n      <p>Nástroj EPUB do PDF převádí soubory elektronických knih na kvalitní dokumenty PDF. EPUB je nejrozšířenější formát e-knih, který používá většina čteček a digitálních knihoven.</p>\n      <p>Tento nástroj zachovává formátování textu, obrázky i strukturu kapitol vašich e-knih. Ideální pro tisk, archivaci nebo sdílení e-knih v univerzálně zobrazitelném formátu.</p>\n      <p>Celý převod probíhá lokálně ve vašem prohlížeči pomocí pokročilé technologie vykreslování, takže vaše knihy zůstávají v soukromí a převod je rychlý.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrát soubor EPUB",
        "description": "Přetáhněte sem soubor .epub nebo jej kliknutím vyberte ze svého zařízení."
      },
      {
        "step": 2,
        "title": "Počkat na převod",
        "description": "Nástroj vykreslí a převede všechny stránky vaší e-knihy."
      },
      {
        "step": 3,
        "title": "Stáhnout PDF",
        "description": "Kliknutím na Stáhnout uložíte převedený dokument PDF."
      }
    ],
    "useCases": [
      {
        "title": "Tisk e-knih",
        "description": "Převádějte e-knihy do PDF pro fyzický tisk.",
        "icon": "printer"
      },
      {
        "title": "Archivace knih",
        "description": "Ukládejte e-knihy v dlouhodobě stabilním formátu PDF.",
        "icon": "archive"
      },
      {
        "title": "Sdílení dokumentů",
        "description": "Sdílejte e-knihy s kýmkoli, i bez čtečky e-knih.",
        "icon": "share-2"
      }
    ],
    "faq": [
      {
        "question": "Zůstane formátování zachováno?",
        "answer": "Ano! Tento nástroj používá nativní vykreslování EPUB a věrně zachovává formátování textu, obrázky i rozvržení."
      },
      {
        "question": "Jsou podporovány soubory EPUB chráněné DRM?",
        "answer": "Ne, e-knihy chráněné DRM nelze převést. Podporovány jsou pouze soubory EPUB bez DRM."
      },
      {
        "question": "Jak se určuje velikost stránky?",
        "answer": "Obsah EPUB se pro optimální čitelnost vykresluje na standardní velikost stránky A4."
      }
    ]
  },
  "mobi-to-pdf": {
    "title": "MOBI do PDF",
    "metaDescription": "Převeďte e-knihy MOBI do PDF. Podpora formátu Kindle s kvalitním vykreslením.",
    "keywords": [
      "mobi do pdf",
      "převést mobi",
      "kindle do pdf",
      "azw do pdf",
      "převodník mobi"
    ],
    "description": "\n      <p>Nástroj MOBI do PDF převádí soubory e-knih Amazon Kindle na kvalitní dokumenty PDF. Formát MOBI (včetně AZW a AZW3) je proprietární formát e-knih společnosti Amazon používaný ve čtečkách Kindle.</p>\n      <p>Tento nástroj zachovává formátování textu, obrázky i strukturu vašich knih pro Kindle. Ideální pro tisk, archivaci nebo čtení na zařízeních, která formát MOBI nepodporují.</p>\n      <p>Celý převod probíhá lokálně ve vašem prohlížeči pomocí pokročilé technologie vykreslování, takže vaše knihy zůstávají v soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrát soubor MOBI",
        "description": "Přetáhněte sem soubor .mobi, .azw nebo .azw3, případně jej kliknutím vyberte ze svého zařízení."
      },
      {
        "step": 2,
        "title": "Počkat na převod",
        "description": "Nástroj vykreslí a převede všechny stránky vaší e-knihy."
      },
      {
        "step": 3,
        "title": "Stáhnout PDF",
        "description": "Kliknutím na Stáhnout uložíte převedený dokument PDF."
      }
    ],
    "useCases": [
      {
        "title": "Tisk knih pro Kindle",
        "description": "Převádějte e-knihy pro Kindle do PDF pro fyzický tisk.",
        "icon": "printer"
      },
      {
        "title": "Archivace knih",
        "description": "Ukládejte knihy pro Kindle v univerzálním formátu PDF.",
        "icon": "archive"
      },
      {
        "title": "Čtení na různých zařízeních",
        "description": "Čtěte knihy pro Kindle i na zařízeních, která podporují pouze PDF.",
        "icon": "tablet-smartphone"
      }
    ],
    "faq": [
      {
        "question": "Které formáty MOBI jsou podporovány?",
        "answer": "Tento nástroj podporuje soubory .mobi, .azw a .azw3 (verze bez DRM)."
      },
      {
        "question": "Jsou podporovány knihy pro Kindle chráněné DRM?",
        "answer": "Ne, e-knihy chráněné DRM nelze převést. Podporovány jsou pouze soubory bez DRM."
      },
      {
        "question": "Zůstane formátování zachováno?",
        "answer": "Ano! Nástroj používá nativní vykreslování MOBI a zachovává text, obrázky i rozvržení."
      }
    ]
  },
  "djvu-to-pdf": {
    "title": "DJVU do PDF",
    "metaDescription": "Převeďte dokumenty DJVU do PDF. Kvalitní vykreslení naskenovaných dokumentů a knih.",
    "keywords": [
      "djvu do pdf",
      "převést djvu",
      "převodník djvu",
      "djvu pdf",
      "djv do pdf"
    ],
    "description": "\n      <p>Nástroj DJVU do PDF převádí dokumenty DjVu na kvalitní dokumenty PDF. DjVu je souborový formát určený především k ukládání naskenovaných dokumentů, zejména těch, které kombinují text, perokresby a fotografie.</p>\n      <p>Tento nástroj vykreslí každou stránku souboru DJVU ve zvoleném rozlišení DPI (bodů na palec) a spojí je do prohledávatelného dokumentu PDF. Ideální pro převod naskenovaných knih, technických příruček a archivních dokumentů.</p>\n      <p>Celý převod probíhá lokálně ve vašem prohlížeči, takže vaše dokumenty zůstávají v soukromí a v bezpečí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrát soubor DJVU",
        "description": "Přetáhněte sem soubor .djvu nebo .djv, případně jej kliknutím vyberte ze svého zařízení."
      },
      {
        "step": 2,
        "title": "Nastavit možnosti",
        "description": "Zvolte výstupní DPI (72, 150 nebo 300) a kvalitu obrázků pro PDF."
      },
      {
        "step": 3,
        "title": "Převést a stáhnout",
        "description": "Klikněte na Převést do PDF a stáhněte převedený dokument."
      }
    ],
    "useCases": [
      {
        "title": "Archivace dokumentů",
        "description": "Převádějte archivy DJVU do univerzálního formátu PDF.",
        "icon": "archive"
      },
      {
        "title": "Sdílení naskenovaných knih",
        "description": "Sdílejte naskenované knihy ve formátu PDF pro širší kompatibilitu.",
        "icon": "share-2"
      },
      {
        "title": "Tisk dokumentů",
        "description": "Převádějte DJVU do kvalitního PDF pro tisk.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Co je formát DJVU?",
        "answer": "DjVu je souborový formát určený k ukládání naskenovaných dokumentů, zejména těch s textem, kresbami a obrázky. U naskenovaného obsahu nabízí lepší kompresi než PDF."
      },
      {
        "question": "Jaké DPI mám zvolit?",
        "answer": "72 DPI se hodí pro prohlížení na webu, 150 DPI pro běžné dokumenty a 300 DPI pro kvalitní tisk."
      },
      {
        "question": "Bude text prohledávatelný?",
        "answer": "Text bude vykreslen jako obrázky. Pokud potřebujete prohledávatelný text, použijte po převodu náš nástroj OCR PDF."
      }
    ]
  },
  "fb2-to-pdf": {
    "title": "FB2 do PDF",
    "metaDescription": "Převeďte e-knihy FictionBook (FB2) do PDF. Podpora více souborů najednou a kvalitní vykreslení.",
    "keywords": [
      "fb2 do pdf",
      "převést fb2",
      "fictionbook do pdf",
      "převodník fb2",
      "fb2.zip do pdf"
    ],
    "description": "\n      <p>Nástroj FB2 do PDF převádí soubory e-knih FictionBook (FB2) na kvalitní dokumenty PDF. FB2 je oblíbený formát e-knih založený na XML, rozšířený zejména v Rusku a ve východní Evropě.</p>\n      <p>Tento nástroj podporuje soubory .fb2 i .fb2.zip a dokáže zpracovat více souborů najednou. Zachovává formátování textu, obrázky i strukturu kapitol vašich e-knih.</p>\n      <p>Celý převod probíhá lokálně ve vašem prohlížeči pomocí pokročilé technologie vykreslování, takže vaše knihy zůstávají v soukromí a převod je rychlý.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrát soubory FB2",
        "description": "Přetáhněte sem jeden nebo více souborů .fb2 nebo .fb2.zip, případně je kliknutím vyberte ze svého zařízení."
      },
      {
        "step": 2,
        "title": "Zvolit kvalitu",
        "description": "Zvolte kvalitu výstupu: Nízká (72 DPI), Střední (150 DPI) nebo Vysoká (300 DPI)."
      },
      {
        "step": 3,
        "title": "Převést a stáhnout",
        "description": "Klikněte na Převést do PDF a stáhněte převedené dokumenty."
      }
    ],
    "useCases": [
      {
        "title": "Tisk e-knih",
        "description": "Převádějte e-knihy FB2 do PDF pro fyzický tisk.",
        "icon": "printer"
      },
      {
        "title": "Dávkový převod",
        "description": "Převeďte více souborů FB2 do PDF najednou.",
        "icon": "layers"
      },
      {
        "title": "Univerzální formát",
        "description": "Sdílejte e-knihy ve formátu PDF, který funguje na jakémkoli zařízení.",
        "icon": "share-2"
      }
    ],
    "faq": [
      {
        "question": "Mohu převést více souborů FB2 najednou?",
        "answer": "Ano! Tento nástroj podporuje dávkový převod až 20 souborů FB2 současně."
      },
      {
        "question": "Jsou podporovány soubory .fb2.zip?",
        "answer": "Ano, nástroj automaticky rozbalí a převede soubory FB2 z archivů .fb2.zip."
      },
      {
        "question": "Zůstane formátování zachováno?",
        "answer": "Ano! Nástroj používá nativní vykreslování FB2 a věrně zachovává formátování textu, obrázky i strukturu kapitol."
      }
    ]
  },
  "pdf-to-jpg": {
    "title": "PDF do JPG",
    "metaDescription": "Převeďte stránky PDF na obrázky JPG. Kvalitní export s nastavitelným rozlišením.",
    "keywords": [
      "pdf do jpg",
      "pdf do jpeg",
      "převést pdf na obrázek",
      "extrahovat obrázky z pdf"
    ],
    "description": "\n      <p>Nástroj PDF do JPG převádí stránky dokumentů PDF na kvalitní obrázky JPG. Převeďte všechny stránky nebo jen vybrané, s nastavitelným rozlišením a kvalitou.</p>\n      <p>Ideální pro získání obrázků z PDF, tvorbu miniatur nebo převod dokumentů pro použití na webu.</p>\n      <p>Celý převod probíhá ve vašem prohlížeči, takže vaše dokumenty zůstávají v soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrát PDF",
        "description": "Přetáhněte sem soubor PDF nebo jej vyberte kliknutím."
      },
      {
        "step": 2,
        "title": "Vybrat stránky a kvalitu",
        "description": "Zvolte, které stránky chcete převést, a nastavte kvalitu a DPI."
      },
      {
        "step": 3,
        "title": "Převést a stáhnout",
        "description": "Kliknutím na Převést vytvoříte obrázky a stáhnete je jako ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Publikování na webu",
        "description": "Převádějte stránky PDF na obrázky pro použití na webu.",
        "icon": "globe"
      },
      {
        "title": "Sociální sítě",
        "description": "Exportujte stránky jako obrázky pro sdílení na sociálních sítích.",
        "icon": "share-2"
      },
      {
        "title": "Prezentace",
        "description": "Převádějte snímky v PDF na obrázky pro prezentace.",
        "icon": "presentation"
      }
    ],
    "faq": [
      {
        "question": "Jaká nastavení kvality jsou k dispozici?",
        "answer": "DPI můžete nastavit od 72 do 300 a kvalitu JPEG od 1 do 100."
      },
      {
        "question": "Mohu převést jen vybrané stránky?",
        "answer": "Ano, k převodu můžete vybrat jednotlivé stránky nebo rozsahy stránek."
      },
      {
        "question": "Jak se zpracuje více stránek?",
        "answer": "Každá stránka se uloží jako samostatný soubor JPG a stáhnete je jako archiv ZIP."
      }
    ]
  },
  "pdf-to-png": {
    "title": "PDF do PNG",
    "metaDescription": "Převeďte stránky PDF na obrázky PNG. Bezztrátová kvalita s podporou průhlednosti.",
    "keywords": [
      "pdf do png",
      "převést pdf na png",
      "export obrázků z pdf",
      "bezztrátový převod pdf"
    ],
    "description": "\n      <p>Nástroj PDF do PNG převádí stránky dokumentů PDF na kvalitní obrázky PNG s bezztrátovou kompresí. Formát PNG dokonale zachovává kvalitu obrazu a podporuje průhlednost.</p>\n      <p>Ideální pro export grafiky, diagramů nebo jakéhokoli obsahu, u kterého záleží na zachování kvality.</p>\n      <p>Celý převod probíhá ve vašem prohlížeči, takže vaše dokumenty zůstávají v soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrát PDF",
        "description": "Přetáhněte sem soubor PDF nebo jej vyberte kliknutím."
      },
      {
        "step": 2,
        "title": "Nastavit možnosti",
        "description": "Vyberte stránky a nastavte rozlišení (DPI)."
      },
      {
        "step": 3,
        "title": "Převést a stáhnout",
        "description": "Kliknutím na Převést vytvoříte obrázky PNG."
      }
    ],
    "useCases": [
      {
        "title": "Export grafiky",
        "description": "Exportujte diagramy a grafiku v dokonalé kvalitě.",
        "icon": "image"
      },
      {
        "title": "Grafické podklady",
        "description": "Převádějte návrhy v PDF do PNG pro editační software.",
        "icon": "palette"
      },
      {
        "title": "Dokumentace",
        "description": "Vytvářejte kvalitní obrázky pro technickou dokumentaci.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "Proč zvolit PNG místo JPG?",
        "answer": "PNG nabízí bezztrátovou kompresi a podporu průhlednosti, což je ideální pro grafiku a text."
      },
      {
        "question": "Je podporováno průhledné pozadí?",
        "answer": "Ano, průhlednost stránek PDF se ve výstupu PNG zachová."
      },
      {
        "question": "Jaké DPI mám použít?",
        "answer": "Pro zobrazení na obrazovce použijte 150 DPI, pro tisk 300 DPI."
      }
    ]
  },
  "pdf-to-webp": {
    "title": "PDF do WebP",
    "metaDescription": "Převeďte stránky PDF na obrázky WebP. Moderní formát s vynikající kompresí.",
    "keywords": [
      "pdf do webp",
      "převést pdf na webp",
      "moderní formát obrázků",
      "obrázky optimalizované pro web"
    ],
    "description": "\n      <p>Nástroj PDF do WebP převádí stránky dokumentů PDF na obrázky WebP – moderní formát od společnosti Google, který nabízí vynikající kompresi při vysoké kvalitě.</p>\n      <p>Obrázky WebP jsou menší než JPG nebo PNG při srovnatelné kvalitě, a proto jsou ideální pro použití na webu.</p>\n      <p>Celý převod probíhá ve vašem prohlížeči, takže vaše dokumenty zůstávají v soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrát PDF",
        "description": "Přetáhněte sem soubor PDF nebo jej vyberte kliknutím."
      },
      {
        "step": 2,
        "title": "Nastavit kvalitu",
        "description": "Vyberte stránky a nastavte kvalitu a kompresi."
      },
      {
        "step": 3,
        "title": "Převést a stáhnout",
        "description": "Kliknutím na Převést vytvoříte obrázky WebP."
      }
    ],
    "useCases": [
      {
        "title": "Optimalizace pro web",
        "description": "Vytvářejte z obsahu PDF obrázky optimalizované pro web.",
        "icon": "globe"
      },
      {
        "title": "Úspora přenosu dat",
        "description": "Zmenšete velikost obrázků pro rychlejší načítání.",
        "icon": "zap"
      },
      {
        "title": "Moderní weby",
        "description": "Používejte moderní formáty obrázků v současných webových projektech.",
        "icon": "layout"
      }
    ],
    "faq": [
      {
        "question": "Co je formát WebP?",
        "answer": "WebP je moderní formát obrázků od společnosti Google, který nabízí vynikající kompresi."
      },
      {
        "question": "Je WebP široce podporován?",
        "answer": "Ano, formát WebP podporují všechny moderní prohlížeče."
      },
      {
        "question": "O kolik menší jsou soubory WebP?",
        "answer": "Soubory WebP jsou obvykle o 25–35 % menší než odpovídající soubory JPG."
      }
    ]
  },
  "pdf-to-bmp": {
    "title": "PDF do BMP",
    "metaDescription": "Převeďte stránky PDF na bitmapové obrázky BMP. Nekomprimovaný formát pro maximální kompatibilitu.",
    "keywords": [
      "pdf do bmp",
      "převést pdf na bitmapu",
      "nekomprimované obrázky",
      "starší formát"
    ],
    "description": "\n      <p>Nástroj PDF do BMP převádí stránky dokumentů PDF na bitmapové obrázky BMP. BMP je nekomprimovaný formát, který zajišťuje maximální kompatibilitu se staršími systémy a aplikacemi.</p>\n      <p>Soubory BMP jsou sice větší než komprimované formáty, nabízejí však dokonalou kvalitu a univerzální kompatibilitu.</p>\n      <p>Celý převod probíhá ve vašem prohlížeči, takže vaše dokumenty zůstávají v soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrát PDF",
        "description": "Přetáhněte sem soubor PDF nebo jej vyberte kliknutím."
      },
      {
        "step": 2,
        "title": "Vybrat stránky",
        "description": "Zvolte, které stránky chcete převést, a nastavte DPI."
      },
      {
        "step": 3,
        "title": "Převést a stáhnout",
        "description": "Kliknutím na Převést vytvoříte obrázky BMP."
      }
    ],
    "useCases": [
      {
        "title": "Starší systémy",
        "description": "Vytvářejte obrázky kompatibilní se starším softwarem.",
        "icon": "history"
      },
      {
        "title": "Aplikace pro Windows",
        "description": "Generujte soubory BMP pro aplikace určené pro Windows.",
        "icon": "monitor"
      },
      {
        "title": "Nekomprimované archivy",
        "description": "Vytvářejte z PDF archivy nekomprimovaných obrázků.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Proč použít formát BMP?",
        "answer": "BMP nabízí nekomprimovanou kvalitu a maximální kompatibilitu se staršími systémy."
      },
      {
        "question": "Jsou soubory BMP větší?",
        "answer": "Ano, soubory BMP jsou nekomprimované a výrazně větší než JPG nebo PNG."
      },
      {
        "question": "Jaké barevné hloubky jsou podporovány?",
        "answer": "Podporována je 24bitová a 32bitová barevná hloubka."
      }
    ]
  },
  "pdf-to-tiff": {
    "title": "PDF do TIFF",
    "metaDescription": "Převeďte PDF na obrázky TIFF. Profesionální kvalita s podporou více stránek.",
    "keywords": [
      "pdf do tiff",
      "převést pdf na tiff",
      "profesionální obrázky",
      "vícestránkový tiff"
    ],
    "description": "\n      <p>Nástroj PDF do TIFF převádí dokumenty PDF na kvalitní obrázky TIFF. TIFF je díky bezztrátové kompresi preferovaným formátem pro profesionální tisk a archivaci.</p>\n      <p>Vytvořte jednostránkové soubory TIFF nebo spojte všechny stránky do jednoho vícestránkového souboru TIFF. Ideální pro profesionální a archivní účely.</p>\n      <p>Celý převod probíhá ve vašem prohlížeči, takže vaše dokumenty zůstávají v soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrát PDF",
        "description": "Přetáhněte sem soubor PDF nebo jej vyberte kliknutím."
      },
      {
        "step": 2,
        "title": "Nastavit výstup",
        "description": "Zvolte jednostránkový nebo vícestránkový TIFF a nastavte DPI."
      },
      {
        "step": 3,
        "title": "Převést a stáhnout",
        "description": "Kliknutím na Převést vytvoříte obrázky TIFF."
      }
    ],
    "useCases": [
      {
        "title": "Profesionální tisk",
        "description": "Vytvářejte z dokumentů PDF soubory TIFF připravené k tisku.",
        "icon": "printer"
      },
      {
        "title": "Archivace dokumentů",
        "description": "Archivujte dokumenty v kvalitním formátu TIFF.",
        "icon": "archive"
      },
      {
        "title": "Publikování",
        "description": "Převádějte PDF do TIFF pro publikační pracovní postupy.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "Mohu vytvořit vícestránkový TIFF?",
        "answer": "Ano, všechny stránky PDF můžete spojit do jednoho vícestránkového souboru TIFF."
      },
      {
        "question": "Jaké možnosti komprese jsou k dispozici?",
        "answer": "K dispozici je komprese LZW, ZIP nebo žádná komprese."
      },
      {
        "question": "Jaké DPI mám použít pro tisk?",
        "answer": "Pro profesionální tisk použijte 300 DPI nebo více."
      }
    ]
  },
  "pdf-to-cbz": {
    "title": "PDF do CBZ",
    "metaDescription": "Převeďte dokumenty PDF na komiksové archivy ZIP (.cbz) ve vysokém rozlišení. Vestavěná metadata Calibre OPF, ComicInfo XML a komentář ZIP pro bezchybnou katalogizaci v různých čtečkách.",
    "keywords": [
      "pdf do cbz",
      "pdf na komiks",
      "vytvoření cbz",
      "komiksový archiv calibre",
      "metadata comicinfo"
    ],
    "description": "\n      <p>Nástroj PDF do CBZ je navržen pro milovníky komiksů a archiváře digitálních e-knih. Vykreslí každou stránku vašich svazků PDF do věrné rastrové grafiky a zabalí je do standardního komiksového archivu ZIP (.cbz).</p>\n      <p>Aby odpadlo zdlouhavé ruční doplňování údajů v systémech jako Calibre, Komga, Kavita nebo CDisplayEx, nástroj automaticky vygeneruje a vloží do archivu soubory <strong>ComicInfo.xml</strong> i <strong>metadata.opf</strong> a zároveň zapíše standardizovaná data <strong>ComicBookInfo JSON</strong> přímo do komentáře souboru ZIP.</p>\n      <p>K dispozici jsou posuvníky pro nastavení kvality komprese obrázků, měřítka stránek, přepínač čtení zprava doleva (režim manga) a převod do černobílých odstínů šedi.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrát komiks v PDF",
        "description": "Přetáhněte sem soubor PDF s komiksem, artbookem nebo mangou."
      },
      {
        "step": 2,
        "title": "Zadat metadata komiksu",
        "description": "Vyplňte pole Série, Svazek, Název, Autor a Vydavatel a případně zapněte optimalizaci rozvržení nebo odstíny šedi."
      },
      {
        "step": 3,
        "title": "Vytvořit a stáhnout",
        "description": "Kliknutím na Převést vytvoříte soubor .cbz s bohatými metadaty, okamžitě připravený pro Calibre."
      }
    ],
    "useCases": [
      {
        "title": "Balení starších komiksů",
        "description": "Převeďte naskenované knihy v PDF na kompaktní komiksové soubory CBZ odpovídající standardu, které správci komiksových knihoven snadno načtou.",
        "icon": "book"
      },
      {
        "title": "Snadná integrace s Calibre",
        "description": "Díky vestavěnému schématu metadata.opf dokáže Calibre načíst a zařadit autory i čísla svazků bez ručního vyhledávání.",
        "icon": "database"
      },
      {
        "title": "Vylepšení pro displeje E-Ink",
        "description": "Při vytváření převeďte barevné kanály grafiky do kontrastních odstínů šedi, čímž zlepšíte překreslování a čitelnost na displejích E-Ink a ušetříte místo v úložišti.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "Co je soubor .cbz?",
        "answer": "Soubor CBZ je specializovaný archivní formát pro komiksové série. Interně jde o balíček ZIP obsahující postupně očíslované obrázky stránek spolu se strukturovanými soubory metadat XML."
      },
      {
        "question": "Jak jsou metadata kompatibilní?",
        "answer": "V jednom kroku vytvoříme a vložíme ComicInfo.xml, metadata.opf i komentář souboru ZIP. To zaručuje plnou kompatibilitu napříč různými ekosystémy pro komiksy a e-knihy."
      },
      {
        "question": "Proč použít režim odstínů šedi?",
        "answer": "Pokud čtete na černobílé čtečce E-Ink (například Kindle nebo Kobo), vytvoření souboru přímo v odstínech šedi omezí artefakty a „duchy“, zajistí lepší kontrast a zmenší výslednou velikost souboru CBZ."
      }
    ]
  },
  "pdf-to-svg": {
    "title": "PDF do SVG",
    "metaDescription": "Převeďte stránky PDF do vektorové grafiky SVG. Dokonalá škálovatelnost v libovolné velikosti a export jednotlivých stránek.",
    "keywords": [
      "pdf do svg",
      "převést pdf na svg",
      "vektorová grafika",
      "škálovatelné pdf",
      "převodník svg"
    ],
    "description": "\n      <p>Nástroj PDF do SVG převede každou stránku vašeho PDF dokumentu na škálovatelnou vektorovou grafiku (SVG). SVG je vektorový formát, který si zachovává dokonalou kvalitu při jakémkoli přiblížení či velikosti tisku.</p>\n      <p>Na rozdíl od rastrových formátů (JPG, PNG) se grafika SVG při změně velikosti nikdy nerozpixeluje. Je proto ideální pro loga, diagramy, technické výkresy a jakýkoli obsah, který je potřeba zobrazovat v různých velikostech.</p>\n      <p>Prohlédněte si náhled každé převedené stránky a stáhněte je jednotlivě nebo jako soubor ZIP. Veškeré zpracování probíhá přímo ve vašem prohlížeči, takže vaše dokumenty zůstávají zcela soukromé.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte PDF",
        "description": "Přetáhněte soubor PDF sem nebo klikněte a vyberte jej."
      },
      {
        "step": 2,
        "title": "Nastavte možnosti",
        "description": "Nastavte kvalitu rozlišení a případně zadejte rozsah stránek."
      },
      {
        "step": 3,
        "title": "Náhled a převod",
        "description": "Klikněte na Převést. Náhled jednotlivých stránek zobrazíte kliknutím na miniatury."
      },
      {
        "step": 4,
        "title": "Stáhnout",
        "description": "Stáhněte jednotlivé soubory SVG nebo všechny stránky jako archiv ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Loga a grafika",
        "description": "Extrahujte loga a vektorovou grafiku z PDF pro použití v grafických programech.",
        "icon": "pen-tool"
      },
      {
        "title": "Technické diagramy",
        "description": "Převeďte technické výkresy a diagramy do škálovatelného formátu SVG.",
        "icon": "ruler"
      },
      {
        "title": "Vývoj webu",
        "description": "Vytvořte z obsahu PDF soubory SVG připravené pro responzivní weby.",
        "icon": "globe"
      },
      {
        "title": "Tisk v libovolné velikosti",
        "description": "Vytvořte vektorovou grafiku, která se dokonale vytiskne v jakékoli velikosti.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Co je formát SVG?",
        "answer": "SVG (Scalable Vector Graphics) je vektorový obrazový formát, jehož velikost lze libovolně měnit bez ztráty kvality. Často se používá pro loga, ikony a webovou grafiku."
      },
      {
        "question": "Bude SVG skutečně vektorové?",
        "answer": "SVG obsahuje vykreslení stránky PDF ve vysokém rozlišení. U PDF s vektorovým obsahem získáte ostrý výstup v jakémkoli měřítku."
      },
      {
        "question": "Mohu si výsledek před stažením prohlédnout?",
        "answer": "Ano! Kliknutím na libovolnou miniaturu zobrazíte náhled SVG v plné velikosti. Stáhnout můžete jednotlivé stránky nebo všechny najednou."
      },
      {
        "question": "Jaké rozlišení mám zvolit?",
        "answer": "Vyšší rozlišení (216 nebo 288 DPI) vytváří větší a detailnější soubory SVG. Pro rychlejší zpracování a menší soubory použijte nižší nastavení."
      }
    ]
  },
  "pdf-to-greyscale": {
    "title": "PDF do odstínů šedi",
    "metaDescription": "Převeďte barevné PDF do odstínů šedi. Zmenšete velikost souboru a připravte dokument pro černobílý tisk.",
    "keywords": [
      "pdf do odstínů šedi",
      "pdf ve stupních šedi",
      "černobílé pdf",
      "odstranit barvy"
    ],
    "description": "\n      <p>Nástroj PDF do odstínů šedi převede barevné PDF dokumenty do odstínů šedi (černobíle). Tím se zmenší velikost souboru a dokumenty se připraví pro černobílý tisk.</p>\n      <p>Převod zachovává čitelnost textu i detaily obrázků a odstraňuje pouze informace o barvách. Ideální pro tisk konceptů nebo vytvoření verzí šetrných k tiskárně.</p>\n      <p>Veškerý převod probíhá ve vašem prohlížeči, takže vaše dokumenty zůstávají soukromé.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte PDF",
        "description": "Přetáhněte barevný soubor PDF sem nebo klikněte a vyberte jej."
      },
      {
        "step": 2,
        "title": "Náhled převodu",
        "description": "Prohlédněte si, jak bude verze v odstínech šedi vypadat."
      },
      {
        "step": 3,
        "title": "Převést a stáhnout",
        "description": "Kliknutím na Převést vytvoříte PDF v odstínech šedi."
      }
    ],
    "useCases": [
      {
        "title": "Úspora při tisku",
        "description": "Převeďte dokument do odstínů šedi a ušetřete na nákladech za barevný tisk.",
        "icon": "printer"
      },
      {
        "title": "Koncepty dokumentů",
        "description": "Vytvořte černobílé koncepty ke kontrole.",
        "icon": "file-text"
      },
      {
        "title": "Zmenšení velikosti souboru",
        "description": "Zmenšete velikost PDF odstraněním informací o barvách.",
        "icon": "minimize-2"
      }
    ],
    "faq": [
      {
        "question": "Zůstane text čitelný?",
        "answer": "Ano, čitelnost textu se při převodu do odstínů šedi zachová."
      },
      {
        "question": "O kolik bude soubor menší?",
        "answer": "Zmenšení velikosti se liší, ale u dokumentů s množstvím barev může dosáhnout 20–50 %."
      },
      {
        "question": "Mohu převést jen vybrané stránky?",
        "answer": "Ano, můžete vybrat, které stránky se mají převést do odstínů šedi."
      }
    ]
  },
  "pdf-to-json": {
    "title": "PDF do JSON",
    "metaDescription": "Extrahujte obsah PDF do formátu JSON. Získejte strukturovaná data z PDF dokumentů.",
    "keywords": [
      "pdf do json",
      "extrahovat data z pdf",
      "parser pdf",
      "strukturovaná data z pdf"
    ],
    "description": "\n      <p>Nástroj PDF do JSON extrahuje obsah PDF dokumentů do strukturovaného formátu JSON. Získejte text, metadata, informace o stránkách a strukturu dokumentu pro programové zpracování.</p>\n      <p>Ideální pro extrakci dat, analýzu dokumentů nebo integraci obsahu PDF do aplikací a pracovních postupů.</p>\n      <p>Veškerá extrakce probíhá ve vašem prohlížeči, takže vaše dokumenty zůstávají soukromé.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte PDF",
        "description": "Přetáhněte soubor PDF sem nebo klikněte a vyberte jej."
      },
      {
        "step": 2,
        "title": "Vyberte data k extrakci",
        "description": "Zvolte, jaký obsah chcete extrahovat: text, metadata, strukturu."
      },
      {
        "step": 3,
        "title": "Extrahovat a stáhnout",
        "description": "Kliknutím na Extrahovat vygenerujete JSON a stáhnete jej."
      }
    ],
    "useCases": [
      {
        "title": "Extrakce dat",
        "description": "Extrahujte strukturovaná data z PDF dokumentů.",
        "icon": "database"
      },
      {
        "title": "Analýza dokumentů",
        "description": "Analyzujte strukturu a obsah PDF programově.",
        "icon": "search"
      },
      {
        "title": "Integrace",
        "description": "Importujte obsah PDF do aplikací prostřednictvím JSON.",
        "icon": "plug"
      }
    ],
    "faq": [
      {
        "question": "Jaká data se extrahují?",
        "answer": "Textový obsah, metadata, rozměry stránek, písma a struktura dokumentu."
      },
      {
        "question": "Je formát JSON zdokumentovaný?",
        "answer": "Ano, schéma JSON je konzistentní a dobře zdokumentované."
      },
      {
        "question": "Mohu extrahovat data z naskenovaných PDF?",
        "answer": "Naskenovaná PDF je nejprve potřeba zpracovat pomocí OCR. Před extrakcí použijte náš nástroj OCR PDF."
      }
    ]
  },
  "pdf-to-pptx": {
    "title": "PDF do PowerPointu",
    "metaDescription": "Převeďte PDF na prezentaci PowerPoint. Z každé stránky se stane snímek ve vysoké kvalitě.",
    "keywords": [
      "pdf do pptx",
      "pdf do powerpointu",
      "převést pdf na snímky",
      "pdf prezentace"
    ],
    "description": "\n      <p>Nástroj PDF do PowerPointu převede vaše PDF dokumenty na upravitelné prezentace PowerPoint (PPTX). Každá stránka PDF se změní na snímek ve vysoké kvalitě s dokonale zachovaným vizuálním rozvržením.</p>\n      <p>Nástroj je ideální pro převod zpráv, podkladů nebo jakéhokoli obsahu PDF do formy prezentace. Můžete zvolit kvalitu obrázků (DPI) a najít rovnováhu mezi velikostí souboru a vizuální ostrostí.</p>\n      <p>Veškerý převod probíhá přímo ve vašem prohlížeči, takže vaše dokumenty zůstávají soukromé a v bezpečí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte PDF",
        "description": "Přetáhněte soubor PDF sem nebo klikněte a vyberte jej ze svého zařízení."
      },
      {
        "step": 2,
        "title": "Zvolte nastavení kvality",
        "description": "Vyberte kvalitu obrázků (DPI) pro snímky. Vyšší DPI znamená lepší kvalitu, ale větší soubor."
      },
      {
        "step": 3,
        "title": "Převést a stáhnout",
        "description": "Kliknutím na Převést vytvoříte prezentaci PowerPoint a stáhnete soubor PPTX."
      }
    ],
    "useCases": [
      {
        "title": "Tvorba prezentací",
        "description": "Převeďte zprávy nebo dokumenty PDF na snímky prezentace pro porady.",
        "icon": "presentation"
      },
      {
        "title": "Školicí materiály",
        "description": "Proměňte školicí dokumenty PDF v interaktivní prezentace PowerPoint.",
        "icon": "book-open"
      },
      {
        "title": "Opětovné využití obsahu",
        "description": "Převeďte stávající obsah PDF do upravitelných snímků pro další úpravy.",
        "icon": "refresh-cw"
      }
    ],
    "faq": [
      {
        "question": "Budou snímky upravitelné?",
        "answer": "Každý snímek obsahuje obrázek stránky PDF ve vysoké kvalitě. V PowerPointu do něj můžete přidat text, tvary a anotace."
      },
      {
        "question": "Jaké DPI mám zvolit?",
        "answer": "Pro prezentace promítané na obrazovce použijte 150 DPI. Pro tisk nebo pokud potřebujete nejvyšší kvalitu použijte 300 DPI."
      },
      {
        "question": "Mohu převést vícestránková PDF?",
        "answer": "Ano, z každé stránky PDF se v prezentaci PowerPoint stane samostatný snímek."
      }
    ]
  },
  "pdf-to-excel": {
    "title": "PDF do Excelu",
    "metaDescription": "Převeďte PDF na tabulku Excel. Extrahujte tabulky do formátu XLSX.",
    "keywords": [
      "pdf do excelu",
      "pdf do xlsx",
      "převést tabulky z pdf",
      "extrahovat tabulky"
    ],
    "description": "\n      <p>Nástroj PDF do Excelu převede vaše PDF dokumenty na upravitelné tabulky Microsoft Excel (XLSX). Automaticky rozpozná tabulky v PDF a extrahuje je do samostatných listů.</p>\n      <p>Nástroj je ideální pro analýzu finančních výkazů, faktur nebo jakýchkoli dat uvedených v tabulkách. Tabulky z každé stránky jsou uspořádány do listů pro snadnou práci s daty.</p>\n      <p>Veškerý převod probíhá přímo ve vašem prohlížeči, takže vaše data zůstávají soukromá a v bezpečí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte PDF",
        "description": "Přetáhněte soubor PDF sem nebo klikněte a vyberte jej."
      },
      {
        "step": 2,
        "title": "Zpracovat",
        "description": "Nástroj automaticky rozpozná a extrahuje tabulky."
      },
      {
        "step": 3,
        "title": "Stáhnout Excel",
        "description": "Stáhněte soubor Excel s extrahovanými tabulkami."
      }
    ],
    "useCases": [
      {
        "title": "Finanční analýza",
        "description": "Převeďte bankovní výpisy nebo faktury do Excelu k analýze.",
        "icon": "trending-up"
      },
      {
        "title": "Extrakce dat",
        "description": "Získejte datové tabulky z odborných článků nebo zpráv.",
        "icon": "database"
      },
      {
        "title": "Správa zásob",
        "description": "Převeďte inventární seznamy z PDF do tabulky.",
        "icon": "clipboard"
      }
    ],
    "faq": [
      {
        "question": "Jak se zpracovávají tabulky?",
        "answer": "Tabulky rozpoznané na každé stránce se extrahují do odpovídajících listů v souboru Excel."
      },
      {
        "question": "Co když v PDF nejsou žádné tabulky?",
        "answer": "Vytvoří se informační list s upozorněním, že nebyly nalezeny žádné tabulky."
      },
      {
        "question": "Zachová se formátování?",
        "answer": "Data zůstanou zachována, ale složité vizuální formátování může být pro potřeby tabulky zjednodušeno."
      }
    ]
  },
  "ocr-pdf": {
    "title": "OCR PDF",
    "metaDescription": "Zpřístupněte naskenovaná PDF pro vyhledávání pomocí OCR. Extrahujte text z obrázků a naskenovaných dokumentů.",
    "keywords": [
      "ocr pdf",
      "prohledávatelné pdf",
      "rozpoznávání textu",
      "sken na text"
    ],
    "description": "\n      <p>Nástroj OCR PDF využívá optické rozpoznávání znaků k extrakci textu z naskenovaných dokumentů a obrázků v PDF. Převeďte PDF tvořená obrázky na dokumenty s prohledávatelným a označitelným textem.</p>\n      <p>Podpora mnoha jazyků zajišťuje přesné rozpoznání textu bez ohledu na jazyk dokumentu. Původní rozvržení zůstane zachováno a přidá se prohledávatelná textová vrstva.</p>\n      <p>Veškeré zpracování OCR probíhá ve vašem prohlížeči, takže vaše dokumenty zůstávají soukromé.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte naskenované PDF",
        "description": "Přetáhněte naskenované PDF sem nebo klikněte a vyberte jej."
      },
      {
        "step": 2,
        "title": "Vyberte jazyk",
        "description": "Zvolte jazyk dokumentu pro přesné rozpoznání."
      },
      {
        "step": 3,
        "title": "Zpracovat a stáhnout",
        "description": "Kliknutím na Zpracovat spustíte OCR a stáhnete prohledávatelné PDF."
      }
    ],
    "useCases": [
      {
        "title": "Digitalizace archivů",
        "description": "Zpřístupněte archivy naskenovaných dokumentů pro vyhledávání.",
        "icon": "archive"
      },
      {
        "title": "Vyhledávání v dokumentech",
        "description": "Umožněte fulltextové vyhledávání v naskenovaných dokumentech.",
        "icon": "search"
      },
      {
        "title": "Extrakce textu",
        "description": "Extrahujte text z naskenovaných dokumentů k dalším úpravám.",
        "icon": "type"
      }
    ],
    "faq": [
      {
        "question": "Jaké jazyky jsou podporovány?",
        "answer": "Podporováno je více než 100 jazyků včetně angličtiny, čínštiny, japonštiny, korejštiny a dalších."
      },
      {
        "question": "Zachová se původní rozvržení?",
        "answer": "Ano, původní vizuální rozvržení zůstane zachováno a přidá se prohledávatelná textová vrstva."
      },
      {
        "question": "Jak přesné je OCR?",
        "answer": "Přesnost závisí na kvalitě skenu, ale u čitelných dokumentů obvykle přesahuje 95 %."
      }
    ]
  },
  "alternate-merge": {
    "title": "Střídavé spojení",
    "metaDescription": "Spojte PDF střídáním stránek. Zkombinujte skeny přední a zadní strany do jednoho dokumentu.",
    "keywords": [
      "střídavé spojení pdf",
      "prokládání stránek pdf",
      "spojit skeny",
      "spojit přední a zadní strany"
    ],
    "description": "\n      <p>Nástroj Střídavé spojení kombinuje dvě PDF tak, že jejich stránky střídavě prokládá. Je ideální pro spojení samostatně naskenovaných předních a zadních stran do jediného dokumentu.</p>\n      <p>Nahrajte dvě PDF a nástroj je spojí tak, že bude střídavě brát jednu stránku z každého. Pořadí jednoho dokumentu můžete také obrátit pro skenování od konce.</p>\n      <p>Veškeré zpracování probíhá ve vašem prohlížeči, takže vaše dokumenty zůstávají soukromé.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte dvě PDF",
        "description": "Nahrajte PDF s předními stranami a PDF se zadními stranami."
      },
      {
        "step": 2,
        "title": "Nastavte pořadí",
        "description": "Zvolte, zda se má druhý dokument obrátit pro skeny pořízené od konce."
      },
      {
        "step": 3,
        "title": "Spojit a stáhnout",
        "description": "Kliknutím na Spojit prokládáte stránky a stáhnete výsledek."
      }
    ],
    "useCases": [
      {
        "title": "Oboustranné skenování",
        "description": "Spojte samostatně naskenované přední a zadní strany.",
        "icon": "copy"
      },
      {
        "title": "Sestavení dokumentu",
        "description": "Prokládejte stránky ze dvou souvisejících dokumentů.",
        "icon": "layers"
      },
      {
        "title": "Skenování knih",
        "description": "Spojte skeny lichých a sudých stránek do kompletních knih.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "Co když mají dokumenty různý počet stránek?",
        "answer": "Přebývající stránky z delšího dokumentu se připojí na konec."
      },
      {
        "question": "Mohu obrátit pořadí stránek?",
        "answer": "Ano, před spojením můžete obrátit kterýkoli z dokumentů."
      },
      {
        "question": "Liší se to od běžného spojení?",
        "answer": "Ano, běžné spojení připojuje dokumenty za sebe, zatímco střídavé spojení prokládá jejich stránky."
      }
    ]
  },
  "add-attachments": {
    "title": "Přidat přílohy",
    "metaDescription": "Vložte soubory do PDF dokumentů. Připojte k PDF soubory libovolného typu.",
    "keywords": [
      "přílohy pdf",
      "vložit soubory do pdf",
      "připojit k pdf",
      "pdf portfolio"
    ],
    "description": "\n      <p>Nástroj Přidat přílohy vloží do vašich PDF dokumentů soubory libovolného typu. Připojte tabulky, obrázky, zdrojové soubory nebo jiné dokumenty a vytvořte ucelené PDF balíčky.</p>\n      <p>Přílohy jsou vloženy přímo do PDF a příjemci je mohou extrahovat v jakékoli čtečce PDF. Ideální pro společnou distribuci souvisejících souborů.</p>\n      <p>Veškeré zpracování probíhá ve vašem prohlížeči, takže vaše soubory zůstávají soukromé.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte PDF",
        "description": "Přetáhněte soubor PDF sem nebo klikněte a vyberte jej."
      },
      {
        "step": 2,
        "title": "Přidejte přílohy",
        "description": "Vyberte soubory, které chcete k PDF připojit."
      },
      {
        "step": 3,
        "title": "Uložit a stáhnout",
        "description": "Kliknutím na Uložit vložíte přílohy a stáhnete výsledek."
      }
    ],
    "useCases": [
      {
        "title": "Projektové balíčky",
        "description": "Spojte soubory projektu s dokumentací v PDF.",
        "icon": "package"
      },
      {
        "title": "Distribuce zpráv",
        "description": "Připojte ke zprávám v PDF zdrojové datové soubory.",
        "icon": "paperclip"
      },
      {
        "title": "Smluvní balíčky",
        "description": "Přiložte ke smlouvám podpůrné dokumenty.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "Jaké typy souborů lze připojit?",
        "answer": "K PDF lze připojit soubory libovolného typu."
      },
      {
        "question": "Existuje omezení velikosti?",
        "answer": "Celková velikost PDF včetně příloh by neměla přesáhnout 500 MB."
      },
      {
        "question": "Mohou příjemci přílohy extrahovat?",
        "answer": "Ano, vložené přílohy lze extrahovat v jakékoli čtečce PDF."
      }
    ]
  },
  "extract-attachments": {
    "title": "Extrahovat přílohy",
    "metaDescription": "Extrahujte vložené soubory z PDF. Stáhněte všechny přílohy z PDF dokumentů.",
    "keywords": [
      "extrahovat přílohy",
      "přílohy pdf",
      "stáhnout vložené soubory",
      "extrakce z pdf"
    ],
    "description": "\n      <p>Nástroj Extrahovat přílohy získá všechny vložené soubory z PDF dokumentů. Stáhněte přílohy jednotlivě nebo jako archiv ZIP obsahující všechny soubory.</p>\n      <p>Ideální pro přístup ke zdrojovým souborům, datům nebo doplňkovým materiálům vloženým do PDF balíčků.</p>\n      <p>Veškerá extrakce probíhá ve vašem prohlížeči, takže vaše dokumenty zůstávají soukromé.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte PDF",
        "description": "Přetáhněte soubor PDF sem nebo klikněte a vyberte jej."
      },
      {
        "step": 2,
        "title": "Zobrazte přílohy",
        "description": "Prohlédněte si seznam všech souborů vložených do PDF."
      },
      {
        "step": 3,
        "title": "Extrahovat a stáhnout",
        "description": "Stáhněte jednotlivé soubory nebo všechny jako ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Přístup ke zdrojovým souborům",
        "description": "Extrahujte původní datové soubory ze zpráv v PDF.",
        "icon": "download"
      },
      {
        "title": "Obnovení příloh",
        "description": "Získejte vložené soubory z PDF balíčků.",
        "icon": "folder-open"
      },
      {
        "title": "Dávková extrakce",
        "description": "Extrahujte přílohy z více PDF najednou.",
        "icon": "layers"
      }
    ],
    "faq": [
      {
        "question": "Co když PDF neobsahuje žádné přílohy?",
        "answer": "Nástroj vás upozorní, pokud nenajde žádné vložené soubory."
      },
      {
        "question": "Jsou podporovány všechny typy příloh?",
        "answer": "Ano, extrahovat lze vložené soubory všech typů."
      },
      {
        "question": "Mohu extrahovat přílohy z více PDF?",
        "answer": "Ano, můžete zpracovat více PDF a stáhnout všechny přílohy."
      }
    ]
  },
  "extract-images": {
    "title": "Extrahovat obrázky z PDF",
    "metaDescription": "Extrahujte všechny vložené obrázky ze souborů PDF. Stáhněte je jednotlivě nebo jako archiv ZIP. Malé obrázky se automaticky odfiltrují.",
    "keywords": [
      "extrahovat obrázky z pdf",
      "extrakce obrázků z pdf",
      "získat obrázky z pdf",
      "stáhnout obrázky z pdf",
      "pdf na obrázky"
    ],
    "description": "\n      <p>Nástroj Extrahovat obrázky z PDF získá všechny obrázky vložené do vašich PDF dokumentů. Stáhněte obrázky ve vysoké kvalitě jednotlivě nebo v praktickém archivu ZIP.</p>\n      <p>Nástroj automaticky odfiltruje malé obrázky, jako jsou ikony a dekorace, podle nastavitelných limitů velikosti. Zpracujte více PDF najednou a extrahujte obrázky efektivně v dávce.</p>\n      <p>Veškerá extrakce probíhá ve vašem prohlížeči, takže vaše dokumenty zůstávají soukromé a v bezpečí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte PDF",
        "description": "Přetáhněte jeden nebo více souborů PDF sem nebo klikněte a vyberte je ze svého zařízení."
      },
      {
        "step": 2,
        "title": "Nastavte filtr",
        "description": "Upravte minimální šířku, výšku a velikost souboru, abyste odfiltrovali nežádoucí malé obrázky."
      },
      {
        "step": 3,
        "title": "Extrahovat obrázky",
        "description": "Kliknutím na Extrahovat vyhledáte všechny obrázky vložené do vašich PDF."
      },
      {
        "step": 4,
        "title": "Stáhnout",
        "description": "Stáhněte jednotlivé obrázky nebo všechny obrázky jako archiv ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Obnovení fotografií",
        "description": "Extrahujte fotografie a obrázky vložené do PDF dokumentů k dalšímu použití nebo archivaci.",
        "icon": "image"
      },
      {
        "title": "Sběr podkladů",
        "description": "Získejte veškerou grafiku a obrázky ze zpráv, prezentací nebo brožur v PDF.",
        "icon": "folder"
      },
      {
        "title": "Opětovné využití obsahu",
        "description": "Extrahujte obrázky z PDF pro použití v jiných dokumentech, na webu nebo v prezentacích.",
        "icon": "refresh-cw"
      }
    ],
    "faq": [
      {
        "question": "V jakých formátech se obrázky extrahují?",
        "answer": "Obrázky se pokud možno extrahují v původním formátu (JPEG, PNG atd.), surová obrazová data se převádějí do PNG."
      },
      {
        "question": "Proč některé obrázky chybí?",
        "answer": "Malé obrázky pod limitem velikosti jsou odfiltrovány. Chcete-li extrahovat i menší obrázky, upravte nastavení filtru."
      },
      {
        "question": "Mohu extrahovat obrázky z naskenovaných PDF?",
        "answer": "Naskenovaná PDF obvykle obsahují sken jako jeden velký obrázek na stránku. Pro převod stránku po stránce použijte raději nástroj PDF na obrázek."
      }
    ]
  },
  "edit-attachments": {
    "title": "Upravit přílohy",
    "metaDescription": "Spravujte přílohy PDF. Zobrazte, přejmenujte a odstraňte vložené soubory.",
    "keywords": [
      "upravit přílohy pdf",
      "správa souborů v pdf",
      "odstranit přílohy",
      "přejmenovat přílohy"
    ],
    "description": "\n      <p>Nástroj Upravit přílohy umožňuje spravovat soubory vložené do PDF dokumentů. Zobrazte všechny přílohy, přejmenujte je nebo z PDF odstraňte nežádoucí soubory.</p>\n      <p>Ideální pro vyčištění PDF balíčků nebo aktualizaci informací o přílohách před distribucí.</p>\n      <p>Veškeré úpravy probíhají ve vašem prohlížeči, takže vaše dokumenty zůstávají soukromé.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte PDF",
        "description": "Přetáhněte soubor PDF sem nebo klikněte a vyberte jej."
      },
      {
        "step": 2,
        "title": "Spravujte přílohy",
        "description": "Zobrazte, přejmenujte nebo odstraňte vložené soubory."
      },
      {
        "step": 3,
        "title": "Uložit a stáhnout",
        "description": "Kliknutím na Uložit použijete změny a stáhnete výsledek."
      }
    ],
    "useCases": [
      {
        "title": "Vyčištění PDF",
        "description": "Odstraňte nepotřebné přílohy z PDF balíčků.",
        "icon": "trash-2"
      },
      {
        "title": "Přejmenování souborů",
        "description": "Upravte názvy příloh, aby byly srozumitelnější.",
        "icon": "edit"
      },
      {
        "title": "Kontrola obsahu",
        "description": "Zkontrolujte vložené soubory před distribucí.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "Mohu zde přidávat nové přílohy?",
        "answer": "K vložení nových souborů použijte nástroj Přidat přílohy."
      },
      {
        "question": "Je odstranění trvalé?",
        "answer": "Ano, odstraněné přílohy nelze z výstupního souboru obnovit."
      },
      {
        "question": "Mohu si přílohy prohlédnout?",
        "answer": "Uvidíte názvy a velikosti souborů; obsah zobrazíte pomocí nástroje Extrahovat přílohy."
      }
    ]
  },
  "divide-pages": {
    "title": "Rozdělit stránky",
    "metaDescription": "Rozdělte stránky PDF na více částí. Dělte stránky vodorovně nebo svisle.",
    "keywords": [
      "rozdělit stránky pdf",
      "rozdělit stránku",
      "rozříznout stránku pdf",
      "části stránky"
    ],
    "description": "\n      <p>Nástroj Rozdělit stránky rozdělí jednotlivé stránky PDF na více částí. Rozřízněte stránky vodorovně, svisle nebo do mřížky a vytvořte z jedné stránky několik.</p>\n      <p>Ideální pro rozdělení naskenovaných dokumentů s více položkami na stránce nebo pro rozdělení velkoformátových stránek na standardní velikosti.</p>\n      <p>Veškeré zpracování probíhá ve vašem prohlížeči, takže vaše dokumenty zůstávají soukromé.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte PDF",
        "description": "Přetáhněte soubor PDF sem nebo klikněte a vyberte jej."
      },
      {
        "step": 2,
        "title": "Nastavte rozdělení",
        "description": "Zvolte vodorovné, svislé nebo mřížkové rozdělení a nastavte počet částí."
      },
      {
        "step": 3,
        "title": "Rozdělit a stáhnout",
        "description": "Kliknutím na Rozdělit rozdělíte stránky a stáhnete výsledek."
      }
    ],
    "useCases": [
      {
        "title": "Rozdělení skenů",
        "description": "Rozdělte naskenované stránky obsahující více dokumentů.",
        "icon": "scissors"
      },
      {
        "title": "Změna velikosti stránek",
        "description": "Rozdělte velké stránky na standardní formáty papíru.",
        "icon": "maximize-2"
      },
      {
        "title": "Tvorba kartiček",
        "description": "Rozdělte stránky na části velikosti kartiček pro tisk.",
        "icon": "grid"
      }
    ],
    "faq": [
      {
        "question": "Mohu stránku rozdělit na nestejné části?",
        "answer": "V současnosti jsou části vždy stejně velké. Pro vlastní výřezy použijte nástroj Oříznout PDF."
      },
      {
        "question": "Co se stane s obsahem na dělicích čarách?",
        "answer": "Obsah se na dělicí čáře rozdělí; dbejte na to, aby důležitý obsah neležel na hranicích."
      },
      {
        "question": "Mohu rozdělit jen vybrané stránky?",
        "answer": "Ano, můžete vybrat, které stránky se mají rozdělit."
      }
    ]
  },
  "add-blank-page": {
    "title": "Přidat prázdnou stránku",
    "metaDescription": "Vložte do PDF dokumentů prázdné stránky. Přidejte prázdné stránky na libovolné místo.",
    "keywords": [
      "přidat prázdnou stránku",
      "vložit stránku",
      "prázdná stránka",
      "vložení stránky do pdf"
    ],
    "description": "\n      <p>Nástroj Přidat prázdnou stránku vloží do vašich PDF dokumentů prázdné stránky na libovolné místo. Přidejte stránky před, za nebo mezi stávající stránky s nastavitelnou velikostí stránky.</p>\n      <p>Ideální pro přidání místa na poznámky, vytvoření oddělovačů kapitol nebo přípravu dokumentů k tisku.</p>\n      <p>Veškeré zpracování probíhá ve vašem prohlížeči, takže vaše dokumenty zůstávají soukromé.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte PDF",
        "description": "Přetáhněte soubor PDF sem nebo klikněte a vyberte jej."
      },
      {
        "step": 2,
        "title": "Zvolte umístění",
        "description": "Vyberte, kam a kolik prázdných stránek chcete vložit."
      },
      {
        "step": 3,
        "title": "Přidat a stáhnout",
        "description": "Kliknutím na Přidat vložíte stránky a stáhnete výsledek."
      }
    ],
    "useCases": [
      {
        "title": "Místo na poznámky",
        "description": "Přidejte prázdné stránky pro ručně psané poznámky.",
        "icon": "edit-3"
      },
      {
        "title": "Oddělovače kapitol",
        "description": "Vložte prázdné stránky mezi jednotlivé části dokumentu.",
        "icon": "minus"
      },
      {
        "title": "Příprava k tisku",
        "description": "Přidejte stránky pro správné zarovnání při oboustranném tisku.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Mohu zvolit velikost stránky?",
        "answer": "Ano, prázdné stránky mohou odpovídat stávajícím stránkám nebo mít vlastní rozměry."
      },
      {
        "question": "Mohu přidat více prázdných stránek?",
        "answer": "Ano, najednou můžete přidat libovolný počet prázdných stránek."
      },
      {
        "question": "Mohu přidat barevné stránky?",
        "answer": "Po přidání prázdných stránek jim můžete nastavit barvu pomocí nástroje Barva pozadí."
      }
    ]
  },
  "reverse-pages": {
    "title": "Obrátit pořadí stránek",
    "metaDescription": "Obraťte pořadí stránek PDF. Seřaďte stránky dokumentu od poslední po první.",
    "keywords": [
      "obrátit pdf",
      "obrátit pořadí stránek",
      "otočit pořadí stránek",
      "obrácený dokument"
    ],
    "description": "\n      <p>Nástroj Obrátit pořadí stránek převrátí pořadí stránek ve vašem PDF dokumentu – poslední stránka bude první a první poslední. Hodí se pro dokumenty naskenované v opačném pořadí nebo pro specifické požadavky na tisk.</p>\n      <p>Nástroj zpracuje celý dokument nebo vybrané rozsahy stránek a zachová veškerý obsah i formátování.</p>\n      <p>Veškeré zpracování probíhá ve vašem prohlížeči, takže vaše dokumenty zůstávají soukromé.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte PDF",
        "description": "Přetáhněte soubor PDF sem nebo klikněte a vyberte jej."
      },
      {
        "step": 2,
        "title": "Vyberte stránky",
        "description": "Zvolte, zda obrátit všechny stránky, nebo jen určitý rozsah."
      },
      {
        "step": 3,
        "title": "Obrátit a stáhnout",
        "description": "Kliknutím na Obrátit převrátíte pořadí stránek a stáhnete výsledek."
      }
    ],
    "useCases": [
      {
        "title": "Oprava pořadí skenů",
        "description": "Opravte dokumenty naskenované v opačném pořadí.",
        "icon": "refresh-cw"
      },
      {
        "title": "Příprava k tisku",
        "description": "Obraťte pořadí stránek podle specifických požadavků na tisk.",
        "icon": "printer"
      },
      {
        "title": "Změna pořadí dokumentu",
        "description": "Rychle obraťte pořadí dokumentu ke kontrole.",
        "icon": "arrow-up-down"
      }
    ],
    "faq": [
      {
        "question": "Aktualizují se záložky?",
        "answer": "Ano, záložky se aktualizují tak, aby odkazovaly na správné stránky v obráceném pořadí."
      },
      {
        "question": "Mohu obrátit pořadí jen některých stránek?",
        "answer": "Ano, můžete vybrat rozsah stránek, jehož pořadí se obrátí."
      },
      {
        "question": "Je to totéž jako otočení?",
        "answer": "Ne, obrácení mění pořadí stránek, kdežto otočení mění orientaci stránek."
      }
    ]
  },
  "rotate-pdf": {
    "title": "Otočit PDF",
    "metaDescription": "Otočte stránky PDF. Otočte stránky o 90, 180 nebo 270 stupňů.",
    "keywords": [
      "otočit pdf",
      "otočit stránky pdf",
      "otočení pdf",
      "opravit orientaci"
    ],
    "description": "\n      <p>Nástroj Otočit PDF otočí stránky vašeho dokumentu o 90, 180 nebo 270 stupňů. Opravte nesprávně orientované skeny, otočte stránky na šířku nebo upravte orientaci stránek pro prohlížení.</p>\n      <p>Otočte všechny stránky stejně nebo vyberte konkrétní stránky a otočte je jednotlivě. Nástroj zachová veškerý obsah i formátování.</p>\n      <p>Veškeré zpracování probíhá ve vašem prohlížeči, takže vaše dokumenty zůstávají soukromé.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte PDF",
        "description": "Přetáhněte soubor PDF sem nebo klikněte a vyberte jej."
      },
      {
        "step": 2,
        "title": "Zvolte otočení",
        "description": "Vyberte úhel otočení a stránky, které chcete otočit."
      },
      {
        "step": 3,
        "title": "Otočit a stáhnout",
        "description": "Kliknutím na Otočit použijete změny a stáhnete výsledek."
      }
    ],
    "useCases": [
      {
        "title": "Oprava skenů",
        "description": "Opravte orientaci naskenovaných dokumentů.",
        "icon": "rotate-cw"
      },
      {
        "title": "Stránky na šířku",
        "description": "Otočte stránky na šířku pro správné zobrazení.",
        "icon": "monitor"
      },
      {
        "title": "Smíšená orientace",
        "description": "Sjednoťte orientaci stránek v dokumentech se smíšenou orientací.",
        "icon": "layout"
      }
    ],
    "faq": [
      {
        "question": "Mohu různé stránky otočit různě?",
        "answer": "Ano, na různé stránky můžete použít různé otočení."
      },
      {
        "question": "Ovlivní otočení kvalitu tisku?",
        "answer": "Ne, otočení zachovává plnou kvalitu obsahu."
      },
      {
        "question": "Mohu otočit o vlastní úhel?",
        "answer": "Otočení je omezeno na násobky 90 stupňů (90, 180, 270)."
      }
    ]
  },
  "overlay-pdf": {
    "title": "Překrýt PDF",
    "metaDescription": "Překryjte nebo podložte stránky jednoho PDF stránkami jiného PDF. Ideální pro razítka, hlavičkové papíry a skládání rozvržení.",
    "keywords": [
      "překrýt pdf",
      "podložit pdf",
      "razítko do pdf",
      "vodoznak pdf",
      "spojit vrstvy"
    ],
    "description": "\n      <p>Nástroj Překrýt PDF umožňuje vložit stránky jednoho PDF dokumentu nad nebo pod jiný PDF dokument. Je ideální pro použití hlavičkového papíru, přidání mřížky do pozadí, orazítkování vodoznakem nebo sloučení návrhů rozvržení.</p>\n      <p>Podporuje režim Překrytí (vrstva je nahoře) i režim Podložení (vrstva je dole). Zadejte vlastní rozsahy cílových stránek nebo nechte kratší překryvný dokument opakovat, aby automaticky pokryl celý základní soubor.</p>\n      <p>Veškeré zpracování probíhá výhradně lokálně ve vašem webovém prohlížeči, což zaručuje naprosté zabezpečení a soukromí dat.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte hlavní PDF",
        "description": "Přetáhněte sem svůj hlavní základní PDF dokument."
      },
      {
        "step": 2,
        "title": "Nahrajte PDF vrstvy",
        "description": "Vložte dokument pro překrytí/podložení, který bude sloužit jako vrstva."
      },
      {
        "step": 3,
        "title": "Nastavte vrstvení",
        "description": "Zvolte režim překrytí nebo podložení, zadejte rozsahy stránek a zapněte opakování stránek."
      },
      {
        "step": 4,
        "title": "Sestavit a stáhnout",
        "description": "Kliknutím na Sestavit zpracujete a stáhnete výsledné vrstvené PDF."
      }
    ],
    "useCases": [
      {
        "title": "Firemní hlavičkové papíry",
        "description": "Umístěte obsah faktur na standardní šablony firemního hlavičkového papíru.",
        "icon": "file-text"
      },
      {
        "title": "Vodoznaky a pečeti",
        "description": "Překryjte dokumenty bezpečnostními razítky, pečetěmi s podpisem nebo pozadím.",
        "icon": "shield"
      },
      {
        "title": "Výkresy a plány",
        "description": "Vložte pod textové bloky návrhy architektury nebo mřížky rozvržení.",
        "icon": "layout"
      }
    ],
    "faq": [
      {
        "question": "Jaký je rozdíl mezi překrytím a podložením?",
        "answer": "Překrytí umístí druhou vrstvu nad váš hlavní obsah. Podložení ji umístí úplně dospod, kde slouží jako šablona pozadí."
      },
      {
        "question": "Mohu překryvnou vrstvu opakovat?",
        "answer": "Ano, pokud je PDF vrstvy kratší než základní dokument, zapnutím Opakování se bude cyklicky opakovat (např. stránka 1, 2, 1, 2), aby pokrylo všechny základní stránky."
      },
      {
        "question": "Je podporován rozsah stránek?",
        "answer": "Ano, konkrétní stránky můžete určit pomocí zápisu rozsahu, například \"1-5\", \"odd\", \"even\", nebo seznamu oddělenému čárkami."
      }
    ]
  },
  "timestamp-pdf": {
    "title": "Časové razítko PDF",
    "metaDescription": "Přidejte do PDF dokumentů důvěryhodná časová razítka RFC 3161. Prokažte existenci dokumentu v určitém okamžiku bez nutnosti certifikátů.",
    "keywords": [
      "časové razítko pdf",
      "rfc 3161",
      "tsa server",
      "důvěryhodné časové razítko",
      "důkaz existence dokumentu"
    ],
    "description": "\n      <p>Nástroj Časové razítko PDF přidá do vašich PDF dokumentů důvěryhodná časová razítka podle standardu RFC 3161 prostřednictvím externích autorit časových razítek (TSA). Poskytuje právně závazný matematický důkaz, že dokument existoval v určitém, nezměněném stavu v přesném okamžiku.</p>\n      <p>Vyberte si z celosvětově důvěryhodných serverů TSA, jako jsou DigiCert, Sectigo, SSL.com, FreeTSA nebo MeSign. K zabezpečení dokumentů proti budoucí manipulaci nepotřebujete žádný osobní podpisový certifikát.</p>\n      <p>Hash se počítá bezpečně a lokálně ještě před komunikací se serverem, takže obsah dokumentu zůstává 100% důvěrný.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte PDF dokument",
        "description": "Vyberte soubor PDF, kterému chcete přidat časové razítko."
      },
      {
        "step": 2,
        "title": "Vyberte server TSA",
        "description": "Zvolte ze seznamu důvěryhodnou globální autoritu časových razítek."
      },
      {
        "step": 3,
        "title": "Použít časové razítko",
        "description": "Kliknutím na Opatřit razítkem získáte zabezpečenou odpověď od TSA a vložíte token do dokumentu."
      }
    ],
    "useCases": [
      {
        "title": "Duševní vlastnictví",
        "description": "Získejte jasný důkaz priority patentů, návrhů a nápadů ještě před jejich zveřejněním.",
        "icon": "lightbulb"
      },
      {
        "title": "Finanční audit",
        "description": "Zajistěte ověřený záznam archivů účetních knih a rozvah chráněný proti manipulaci.",
        "icon": "activity"
      },
      {
        "title": "Právní smlouvy",
        "description": "Zajistěte smlouvy důvěryhodným časovým důkazem a předejděte sporům o antedatování.",
        "icon": "file-check"
      }
    ],
    "faq": [
      {
        "question": "Co je důvěryhodné časové razítko (RFC 3161)?",
        "answer": "Časové razítko RFC 3161 je kryptograficky podepsaný token vydaný uznávanou nezávislou autoritou (TSA), který propojuje hash dokumentu s konkrétním ověřeným zdrojem času."
      },
      {
        "question": "Potřebuji digitální certifikát?",
        "answer": "Ne, kryptografický podpis poskytuje přímo důvěryhodný server TSA, takže je celý proces pro vlastníky dokumentů velmi snadný."
      },
      {
        "question": "Vidí TSA obsah mého dokumentu?",
        "answer": "Nikdy. Nástroj odesílá na server TSA pouze zabezpečený hash SHA-256 vašeho dokumentu, takže samotný dokument zůstává zcela soukromý."
      }
    ]
  },
  "add-page-labels": {
    "title": "Přidat popisky stránek",
    "metaDescription": "Přidejte do katalogu PDF vlastní popisky stránek. Podporuje římské číslice, předpony i složité nesouvislé rozsahy.",
    "keywords": [
      "popisky stránek pdf",
      "římské číslice pdf",
      "předpona číslování stránek pdf",
      "popisky stránek nesouvislý rozsah",
      "indexování pdf"
    ],
    "description": "\n      <p>Nástroj Přidat popisky stránek umožňuje vložit vlastní metadata popisků stránek (/PageLabels) do kořenového slovníku Catalog vašeho PDF. Tím si přizpůsobíte popisky zobrazované v navigačním postranním panelu profesionálních čteček PDF i v poli pro přechod na číslo stránky (např. římské číslice pro úvodní část, desítkové číslování pro hlavní text nebo vlastní předpony jako A-0, A-1 pro technické podkapitoly).</p>\n      <p>Můžete bez problémů kombinovat více vlastních pravidel. Klíčové je, že jsme vytvořili vysoce optimalizovaný <strong>algoritmus pro dělení nesouvislých rozsahů</strong>: i když nadefinujete složité střídavé vzory (např. liché stránky styl A, sudé stránky styl B), nástroj elegantně rozdělí a poskládá hranice rozsahů tak, aby se popisky zobrazovaly v souladu se standardem a formát nepronikl na stránky, na které se pravidla nevztahují.</p>\n      <p>Veškeré operace probíhají výhradně v izolovaném prostředí vašeho prohlížeče, takže je zajištěno naprosté soukromí dat.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte dokument PDF",
        "description": "Vyberte cílový dokument PDF, kterému chcete přidat popisky."
      },
      {
        "step": 2,
        "title": "Nastavte pravidla popisků",
        "description": "Přidejte jedno nebo více pravidel s rozsahem stránek (např. „1-5“, „odd“ nebo seznam oddělený čárkami), předponou, stylem a počáteční hodnotou číslování."
      },
      {
        "step": 3,
        "title": "Náhled a stažení",
        "description": "Zkontrolujte živý náhled seznamu popisků stránek níže a poté vytvořte a stáhněte upravený dokument PDF."
      }
    ],
    "useCases": [
      {
        "title": "Formátování diplomové práce",
        "description": "Nastavte malé římské číslice (i, ii, iii) pro úvodní část a pro hlavní kapitoly přejděte na arabské číslování.",
        "icon": "book"
      },
      {
        "title": "Předpony technických výkresů",
        "description": "Připojte k popiskům stránek zkratky subsystémů (např. „A-1“, „M-5“) jako předpony, aby týmy mohly stránky vyhledat a najít během několika sekund.",
        "icon": "layout"
      },
      {
        "title": "Vlastní střídavá rozvržení",
        "description": "Použijte velmi specifické indexování rozsahů stránek pro liché/sudé sekvence nebo nesouvislé oddíly s maximální volností.",
        "icon": "shuffle"
      }
    ],
    "faq": [
      {
        "question": "Jaký je rozdíl mezi popisky stránek a čísly stránek?",
        "answer": "Běžná čísla stránek jsou viditelné textové bloky vykreslené přímo na ploše stránky (jsou vidět i při tisku). Popisky stránek jsou naopak strukturální metadata vložená do katalogu PDF. Určují, co se zobrazuje pod miniaturami a v poli pro vyhledání stránky v aplikacích jako Adobe Acrobat nebo Apple Preview."
      },
      {
        "question": "Co se stane, když nechám rozsah stránek prázdný?",
        "answer": "Pokud rozsah stránek ponecháte prázdný, pravidlo se použije globálně na všechny stránky dokumentu."
      },
      {
        "question": "Jak se řeší překrývající se pravidla?",
        "answer": "Pravidla se vyhodnocují postupně v pořadí, v jakém jsou uvedena. Pokud se rozsah stránek pozdějšího pravidla překrývá s dřívějším, má přednost pozdější pravidlo a přepíše popisek dané stránky."
      }
    ]
  },
  "n-up-pdf": {
    "title": "N-Up PDF",
    "metaDescription": "Tiskněte více stránek PDF na jeden list. Vytvořte rozvržení 2 na list, 4 na list nebo vlastní.",
    "keywords": [
      "n-up pdf",
      "více stránek na list",
      "tisk 2 stránky na list",
      "vyřazení stránek pdf"
    ],
    "description": "\n      <p>N-Up PDF uspořádá více stránek na jeden list a vytvoří rozvržení 2, 4, 6 nebo 9 stránek na list, případně vlastní mřížku. Ideální pro úsporu papíru při tisku nebo pro tvorbu podkladů k prezentacím.</p>\n      <p>Vyberte si z přednastavených rozvržení nebo vytvořte vlastní uspořádání. Nástroj automaticky změní velikost stránek a umístí je pro optimální výsledek.</p>\n      <p>Veškeré zpracování probíhá přímo ve vašem prohlížeči, takže vaše dokumenty zůstávají v soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte PDF",
        "description": "Přetáhněte soubor PDF sem nebo klikněte a vyberte ho."
      },
      {
        "step": 2,
        "title": "Zvolte rozvržení",
        "description": "Vyberte 2, 4, 6 nebo 9 stránek na list, nebo vlastní mřížku."
      },
      {
        "step": 3,
        "title": "Vytvořte a stáhněte",
        "description": "Kliknutím na Vytvořit vygenerujete N-up PDF a stáhnete ho."
      }
    ],
    "useCases": [
      {
        "title": "Úspora papíru",
        "description": "Tiskněte více stránek na jeden list a snižte spotřebu papíru.",
        "icon": "leaf"
      },
      {
        "title": "Tvorba podkladů",
        "description": "Vytvořte kompaktní podklady ze snímků prezentace.",
        "icon": "file-text"
      },
      {
        "title": "Revize dokumentů",
        "description": "Tiskněte dokumenty ve zmenšené velikosti ke kontrole.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "Jaká rozvržení jsou k dispozici?",
        "answer": "K dispozici jsou rozvržení 2, 4, 6 a 9 stránek na list a vlastní mřížka."
      },
      {
        "question": "Mohu mezi stránky přidat okraje?",
        "answer": "Ano, mezi stránky můžete přidat ohraničení a mezery."
      },
      {
        "question": "Zachová se pořadí stránek?",
        "answer": "Ano, stránky jsou uspořádány v pořadí čtení (zleva doprava, shora dolů)."
      }
    ]
  },
  "combine-single-page": {
    "title": "Spojit do jedné stránky",
    "metaDescription": "Spojte stránky PDF do jedné souvislé stránky. Vytvořte posouvatelné jednostránkové dokumenty.",
    "keywords": [
      "spojit stránky",
      "jednostránkové pdf",
      "sešít stránky pdf",
      "souvislé posouvání"
    ],
    "description": "\n      <p>Nástroj Spojit do jedné stránky sešije všechny stránky PDF do jedné souvislé stránky. Vytvořte posouvatelné dokumenty ideální pro zobrazení na webu nebo plynulé čtení.</p>\n      <p>Stránky se spojují svisle s nastavitelnými mezerami. Výsledkem je jedna dlouhá stránka obsahující veškerý obsah.</p>\n      <p>Veškeré zpracování probíhá přímo ve vašem prohlížeči, takže vaše dokumenty zůstávají v soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte PDF",
        "description": "Přetáhněte soubor PDF sem nebo klikněte a vyberte ho."
      },
      {
        "step": 2,
        "title": "Nastavte mezery",
        "description": "Zvolte velikost mezery mezi spojenými stránkami."
      },
      {
        "step": 3,
        "title": "Spojte a stáhněte",
        "description": "Kliknutím na Spojit vytvoříte jednostránkové PDF."
      }
    ],
    "useCases": [
      {
        "title": "Webové dokumenty",
        "description": "Vytvořte posouvatelná PDF pro vložení na web.",
        "icon": "globe"
      },
      {
        "title": "Plynulé čtení",
        "description": "Převeďte stránkované dokumenty na souvislé posouvání.",
        "icon": "scroll"
      },
      {
        "title": "Dlouhé texty",
        "description": "Spojte stránky pro plynulé čtení dlouhého obsahu.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "Je počet stránek omezen?",
        "answer": "Velmi dlouhé dokumenty může omezovat paměť prohlížeče."
      },
      {
        "question": "Mohu mezi stránky přidat oddělovače?",
        "answer": "Ano, mezi původní stránky můžete přidat mezery nebo čáry."
      },
      {
        "question": "Hodí se výsledek pro tisk?",
        "answer": "Výsledek je nejvhodnější pro zobrazení na obrazovce; pro tisková rozvržení použijte N-Up."
      }
    ]
  },
  "view-metadata": {
    "title": "Zobrazit metadata",
    "metaDescription": "Zobrazte vlastnosti dokumentu PDF. Prohlédněte si autora, název, data a další metadata.",
    "keywords": [
      "metadata pdf",
      "vlastnosti dokumentu",
      "informace o pdf",
      "zobrazit podrobnosti pdf"
    ],
    "description": "\n      <p>Nástroj Zobrazit metadata zobrazí všechny vlastnosti dokumentu a metadata vašich souborů PDF. Uvidíte autora, název, předmět, klíčová slova, datum vytvoření, datum úpravy a další.</p>\n      <p>Užitečné pro audit dokumentů, kontrolu informací o souboru nebo ověření pravosti dokumentu.</p>\n      <p>Veškeré zobrazení probíhá přímo ve vašem prohlížeči, takže vaše dokumenty zůstávají v soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte PDF",
        "description": "Přetáhněte soubor PDF sem nebo klikněte a vyberte ho."
      },
      {
        "step": 2,
        "title": "Zobrazte vlastnosti",
        "description": "Prohlédněte si všechna metadata v přehledném uspořádání."
      },
      {
        "step": 3,
        "title": "V případě potřeby exportujte",
        "description": "Volitelně exportujte metadata jako JSON."
      }
    ],
    "useCases": [
      {
        "title": "Audit dokumentů",
        "description": "Zkontrolujte vlastnosti dokumentů z hlediska souladu s předpisy.",
        "icon": "clipboard-check"
      },
      {
        "title": "Ověření pravosti",
        "description": "Zkontrolujte data vytvoření a informace o autorovi.",
        "icon": "shield"
      },
      {
        "title": "Informace o souboru",
        "description": "Získejte podrobné informace o souborech PDF.",
        "icon": "info"
      }
    ],
    "faq": [
      {
        "question": "Jaká metadata se zobrazují?",
        "answer": "Název, autor, předmět, klíčová slova, aplikace, ve které byl dokument vytvořen, producent, data a verze PDF."
      },
      {
        "question": "Mohu zde metadata upravit?",
        "answer": "K úpravě vlastností dokumentu použijte nástroj Upravit metadata."
      },
      {
        "question": "Zobrazují se i metadata XMP?",
        "answer": "Ano, zobrazují se standardní metadata i metadata XMP."
      }
    ]
  },
  "edit-metadata": {
    "title": "Upravit metadata",
    "metaDescription": "Upravte vlastnosti dokumentu PDF. Změňte název, autora, předmět a klíčová slova.",
    "keywords": [
      "upravit metadata pdf",
      "změnit vlastnosti pdf",
      "autor pdf",
      "informace o dokumentu"
    ],
    "description": "\n      <p>Nástroj Upravit metadata umožňuje měnit vlastnosti dokumentu ve vašich souborech PDF. Změňte název, autora, předmět, klíčová slova a další pole metadat.</p>\n      <p>Ideální pro opravu informací o dokumentu, doplnění správného autorství nebo přípravu souborů k distribuci.</p>\n      <p>Veškeré úpravy probíhají přímo ve vašem prohlížeči, takže vaše dokumenty zůstávají v soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte PDF",
        "description": "Přetáhněte soubor PDF sem nebo klikněte a vyberte ho."
      },
      {
        "step": 2,
        "title": "Upravte vlastnosti",
        "description": "Změňte název, autora, předmět, klíčová slova a další pole."
      },
      {
        "step": 3,
        "title": "Uložte a stáhněte",
        "description": "Kliknutím na Uložit použijete změny a stáhnete soubor."
      }
    ],
    "useCases": [
      {
        "title": "Doplnění autorství",
        "description": "Nastavte správné informace o autorovi a tvůrci.",
        "icon": "user"
      },
      {
        "title": "Optimalizace pro vyhledávače (SEO)",
        "description": "Přidejte klíčová slova a popisy pro lepší vyhledatelnost.",
        "icon": "search"
      },
      {
        "title": "Příprava dokumentů",
        "description": "Před sdílením připravte dokumenty se správnými metadaty.",
        "icon": "file-check"
      }
    ],
    "faq": [
      {
        "question": "Která pole mohu upravit?",
        "answer": "Pole název, autor, předmět, klíčová slova, tvůrce a producent."
      },
      {
        "question": "Mohu vymazat všechna metadata?",
        "answer": "K odstranění všech vlastností dokumentu použijte nástroj Odstranit metadata."
      },
      {
        "question": "Lze upravit data?",
        "answer": "Datum vytvoření a datum úpravy se aktualizují automaticky."
      }
    ]
  },
  "pdf-to-zip": {
    "title": "PDF do ZIP",
    "metaDescription": "Zabalte více souborů PDF do archivu ZIP. Komprimujte a seskupte soubory PDF.",
    "keywords": [
      "pdf do zip",
      "komprimovat pdf soubory",
      "zabalit pdf",
      "archivovat pdf"
    ],
    "description": "\n      <p>Nástroj PDF do ZIP zabalí více souborů PDF do jednoho archivu ZIP. Komprimujte a seskupte své soubory PDF pro snadnější sdílení, ukládání nebo zálohování.</p>\n      <p>Nástroj vytvoří komprimovaný archiv se všemi vašimi soubory PDF, čímž sníží celkovou velikost a zjednoduší správu souborů.</p>\n      <p>Veškeré zpracování probíhá přímo ve vašem prohlížeči, takže vaše soubory zůstávají v soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte soubory PDF",
        "description": "Přetáhněte sem více souborů PDF nebo klikněte a vyberte je."
      },
      {
        "step": 2,
        "title": "Nastavte archiv",
        "description": "Volitelně nastavte název archivu a úroveň komprese."
      },
      {
        "step": 3,
        "title": "Vytvořte a stáhněte",
        "description": "Kliknutím na Vytvořit vygenerujete archiv ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Sdílení souborů",
        "description": "Seskupte více souborů PDF pro snadnější sdílení.",
        "icon": "share-2"
      },
      {
        "title": "Vytváření záloh",
        "description": "Vytvořte komprimované zálohy sbírek PDF.",
        "icon": "archive"
      },
      {
        "title": "Přílohy e-mailů",
        "description": "Spojte soubory PDF do jedné přílohy e-mailu.",
        "icon": "mail"
      }
    ],
    "faq": [
      {
        "question": "Jak velká komprese se použije?",
        "answer": "Komprese ZIP obvykle sníží celkovou velikost o 10–30 %."
      },
      {
        "question": "Je počet souborů omezen?",
        "answer": "Do jednoho archivu můžete zahrnout až 100 souborů PDF."
      },
      {
        "question": "Mohu nastavit heslo?",
        "answer": "Vytváření archivů ZIP chráněných heslem zatím není podporováno."
      }
    ]
  },
  "compare-pdfs": {
    "title": "Porovnat PDF",
    "metaDescription": "Porovnejte dva dokumenty PDF. Zvýrazněte rozdíly mezi verzemi.",
    "keywords": [
      "porovnat pdf",
      "rozdíly pdf",
      "porovnání dokumentů",
      "porovnání verzí"
    ],
    "description": "\n      <p>Nástroj Porovnat PDF analyzuje dva dokumenty PDF a zvýrazní rozdíly mezi nimi. Ideální pro kontrolu revizí dokumentů, změn ve smlouvách nebo ověření úprav.</p>\n      <p>Zobrazte dokumenty vedle sebe nebo v režimu překrytí se zvýrazněnými rozdíly. Nástroj rozpozná změny textu, přidaný i odstraněný obsah.</p>\n      <p>Veškeré porovnávání probíhá přímo ve vašem prohlížeči, takže vaše dokumenty zůstávají v soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte dva soubory PDF",
        "description": "Nahrajte původní a upravený dokument PDF."
      },
      {
        "step": 2,
        "title": "Porovnejte dokumenty",
        "description": "Prohlédněte si zvýrazněné rozdíly v režimu vedle sebe nebo v režimu překrytí."
      },
      {
        "step": 3,
        "title": "Exportujte výsledky",
        "description": "Stáhněte si zprávu o porovnání nebo PDF s anotacemi."
      }
    ],
    "useCases": [
      {
        "title": "Kontrola smluv",
        "description": "Porovnejte verze smluv a zjistěte změny.",
        "icon": "file-text"
      },
      {
        "title": "Revize dokumentů",
        "description": "Zkontrolujte úpravy mezi verzemi dokumentu.",
        "icon": "git-compare"
      },
      {
        "title": "Kontrola kvality",
        "description": "Ověřte, že byly provedeny pouze zamýšlené změny.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "Jaké typy rozdílů se rozpoznávají?",
        "answer": "Přidaný, odstraněný a upravený text a změny formátování."
      },
      {
        "question": "Mohu porovnávat naskenované dokumenty?",
        "answer": "Pro porovnání textu je třeba naskenované dokumenty nejprve zpracovat pomocí OCR."
      },
      {
        "question": "Je k dispozici vizuální porovnání?",
        "answer": "Ano, režim překrytí zobrazuje vizuální rozdíly mezi stránkami."
      }
    ]
  },
  "posterize-pdf": {
    "title": "PDF na plakát",
    "metaDescription": "Rozdělte velké stránky PDF na tisknutelné dílce. Vytvořte plakáty ze stránek PDF.",
    "keywords": [
      "pdf na plakát",
      "rozdělit pdf na dílce",
      "velkoformátový tisk",
      "plakát z pdf"
    ],
    "description": "\n      <p>Nástroj PDF na plakát rozdělí velké stránky PDF na menší dílce, které lze vytisknout na běžný papír a sestavit z nich plakát. Ideální pro tisk velkých diagramů, map nebo uměleckých děl.</p>\n      <p>Nastavte velikost mřížky a překryv pro snadné sestavení. Nástroj automaticky vypočítá rozměry dílců podle cílové výstupní velikosti.</p>\n      <p>Veškeré zpracování probíhá přímo ve vašem prohlížeči, takže vaše dokumenty zůstávají v soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte PDF",
        "description": "Přetáhněte velkoformátové PDF sem nebo klikněte a vyberte ho."
      },
      {
        "step": 2,
        "title": "Nastavte dílce",
        "description": "Nastavte velikost mřížky, překryv a výstupní formát papíru."
      },
      {
        "step": 3,
        "title": "Vytvořte a stáhněte",
        "description": "Kliknutím na Vytvořit vygenerujete tisknutelné dílce."
      }
    ],
    "useCases": [
      {
        "title": "Tisk plakátů",
        "description": "Tiskněte velké plakáty na běžný papír.",
        "icon": "maximize-2"
      },
      {
        "title": "Tisk map",
        "description": "Tiskněte velké mapy po částech a poté je sestavte.",
        "icon": "map"
      },
      {
        "title": "Reprodukce uměleckých děl",
        "description": "Vytvořte velkoformátové tisky z uměleckých děl ve formátu PDF.",
        "icon": "image"
      }
    ],
    "faq": [
      {
        "question": "Jaký překryv mám použít?",
        "answer": "Pro snadné zarovnání při sestavování doporučujeme překryv 10–20 mm."
      },
      {
        "question": "Mohu přidat ořezové značky?",
        "answer": "Ano, můžete přidat ořezové značky, které usnadní stříhání a zarovnání."
      },
      {
        "question": "Jaké formáty papíru jsou podporovány?",
        "answer": "Podporovány jsou formáty A4, Letter, A3 a vlastní velikosti."
      }
    ]
  },
  "fix-page-size": {
    "title": "Sjednotit velikost stránek",
    "metaDescription": "Sjednoťte velikost stránek PDF. Převeďte všechny stránky na jednotné rozměry.",
    "keywords": [
      "sjednotit velikost stránek",
      "standardizovat pdf",
      "jednotné stránky",
      "změnit velikost stránek pdf"
    ],
    "description": "\n      <p>Nástroj Sjednotit velikost stránek převede všechny stránky vašeho PDF na jednotné rozměry. Převeďte dokumenty se smíšenými velikostmi stránek na konzistentní formát pro profesionální prezentaci nebo tisk.</p>\n      <p>Vyberte si ze standardních velikostí (A4, Letter atd.) nebo nastavte vlastní rozměry. Obsah se zmenší či zvětší nebo umístí tak, aby odpovídal nové velikosti stránky.</p>\n      <p>Veškeré zpracování probíhá přímo ve vašem prohlížeči, takže vaše dokumenty zůstávají v soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte PDF",
        "description": "Přetáhněte soubor PDF sem nebo klikněte a vyberte ho."
      },
      {
        "step": 2,
        "title": "Vyberte cílovou velikost",
        "description": "Zvolte standardní velikost nebo zadejte vlastní rozměry."
      },
      {
        "step": 3,
        "title": "Použijte a stáhněte",
        "description": "Kliknutím na Použít sjednotíte stránky a stáhnete soubor."
      }
    ],
    "useCases": [
      {
        "title": "Příprava k tisku",
        "description": "Sjednoťte stránky pro konzistentní tisk.",
        "icon": "printer"
      },
      {
        "title": "Úprava dokumentů",
        "description": "Opravte dokumenty s nejednotnou velikostí stránek.",
        "icon": "file-check"
      },
      {
        "title": "Profesionální dokumenty",
        "description": "Vytvořte jednotné dokumenty k distribuci.",
        "icon": "briefcase"
      }
    ],
    "faq": [
      {
        "question": "Jak se naloží s obsahem?",
        "answer": "Obsah se přizpůsobí nové velikosti stránky nebo se na ní vycentruje."
      },
      {
        "question": "Mohu zachovat poměr stran?",
        "answer": "Ano, obsah lze proporcionálně zmenšit či zvětšit tak, aby se vešel."
      },
      {
        "question": "Jaké standardní velikosti jsou k dispozici?",
        "answer": "A4, A3, Letter, Legal a další běžné velikosti."
      }
    ]
  },
  "linearize-pdf": {
    "title": "Linearizovat PDF",
    "metaDescription": "Optimalizujte PDF pro rychlé zobrazení na webu. Umožněte postupné načítání.",
    "keywords": [
      "linearizovat pdf",
      "rychlé zobrazení na webu",
      "optimalizovat pdf",
      "postupné načítání pdf"
    ],
    "description": "\n      <p>Nástroj Linearizovat PDF optimalizuje vaše dokumenty pro rychlé zobrazení na webu. Linearizované PDF se může začít zobrazovat ještě před stažením celého souboru, což zlepšuje uživatelský komfort.</p>\n      <p>Tato optimalizace, známá také jako „Rychlé zobrazení na webu“ (Fast Web View), přeuspořádá strukturu PDF tak, aby se ve webových prohlížečích načítalo postupně.</p>\n      <p>Veškeré zpracování probíhá přímo ve vašem prohlížeči, takže vaše dokumenty zůstávají v soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte PDF",
        "description": "Přetáhněte soubor PDF sem nebo klikněte a vyberte ho."
      },
      {
        "step": 2,
        "title": "Linearizujte",
        "description": "Kliknutím na Linearizovat optimalizujete soubor pro zobrazení na webu."
      },
      {
        "step": 3,
        "title": "Stáhněte",
        "description": "Stáhněte si optimalizované PDF."
      }
    ],
    "useCases": [
      {
        "title": "Publikování na webu",
        "description": "Optimalizujte PDF ke stažení z webových stránek.",
        "icon": "globe"
      },
      {
        "title": "Přílohy e-mailů",
        "description": "Vytvořte PDF, která se příjemcům otevřou rychleji.",
        "icon": "mail"
      },
      {
        "title": "Online dokumenty",
        "description": "Zlepšete zobrazení dokumentů online.",
        "icon": "cloud"
      }
    ],
    "faq": [
      {
        "question": "Co je linearizace?",
        "answer": "Linearizace přeuspořádá data PDF tak, aby se soubor mohl načítat postupně."
      },
      {
        "question": "Zmenší se velikost souboru?",
        "answer": "Linearizace může kvůli přidané struktuře velikost souboru mírně zvětšit."
      },
      {
        "question": "Je výsledek kompatibilní se všemi prohlížeči PDF?",
        "answer": "Ano, linearizovaná PDF fungují ve všech čtečkách PDF."
      }
    ]
  },
  "page-dimensions": {
    "title": "Rozměry stránek",
    "metaDescription": "Analyzujte velikosti stránek PDF. Zobrazte rozměry všech stránek ve vašem dokumentu.",
    "keywords": [
      "velikost stránky pdf",
      "rozměry stránek",
      "rozměry pdf",
      "velikost dokumentu"
    ],
    "description": "\n      <p>Nástroj Rozměry stránek analyzuje a zobrazí velikost každé stránky ve vašem dokumentu PDF. Zobrazte rozměry v různých jednotkách (palce, mm, body) a najděte stránky s nestandardní velikostí.</p>\n      <p>Užitečné při přípravě k tisku, analýze dokumentů nebo hledání nejednotných velikostí stránek.</p>\n      <p>Veškerá analýza probíhá přímo ve vašem prohlížeči, takže vaše dokumenty zůstávají v soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte PDF",
        "description": "Přetáhněte soubor PDF sem nebo klikněte a vyberte ho."
      },
      {
        "step": 2,
        "title": "Zobrazte rozměry",
        "description": "Prohlédněte si velikosti všech stránek."
      },
      {
        "step": 3,
        "title": "Exportujte přehled",
        "description": "Volitelně exportujte rozměry jako JSON."
      }
    ],
    "useCases": [
      {
        "title": "Plánování tisku",
        "description": "Zkontrolujte velikosti stránek před tiskem.",
        "icon": "printer"
      },
      {
        "title": "Analýza dokumentů",
        "description": "Najděte stránky s neobvyklými rozměry.",
        "icon": "search"
      },
      {
        "title": "Kontrola kvality",
        "description": "Ověřte, že velikosti stránek odpovídají specifikacím.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "Jaké jednotky jsou k dispozici?",
        "answer": "Palce, milimetry, centimetry a body."
      },
      {
        "question": "Zobrazuje se orientace?",
        "answer": "Ano, je uvedena orientace na výšku nebo na šířku."
      },
      {
        "question": "Mohu nejednotné velikosti opravit?",
        "answer": "K sjednocení rozměrů použijte nástroj Sjednotit velikost stránek."
      }
    ]
  },
  "remove-restrictions": {
    "title": "Odebrat omezení",
    "metaDescription": "Odeberte omezení z PDF. Odemkněte oprávnění k tisku, kopírování a úpravám.",
    "keywords": [
      "odebrat omezení pdf",
      "odemknout pdf",
      "oprávnění pdf",
      "zrušit omezení pdf"
    ],
    "description": "\n      <p>Nástroj Odebrat omezení odemkne PDF, která mají nastavená omezení oprávnění bránící tisku, kopírování nebo úpravám. Odstraní omezení dané heslem vlastníka a zachová obsah dokumentu.</p>\n      <p>Poznámka: Tento nástroj nedokáže odstranit uživatelské heslo, které brání otevření dokumentu. Pro soubory chráněné heslem použijte Dešifrovat PDF.</p>\n      <p>Veškeré zpracování probíhá přímo ve vašem prohlížeči, takže vaše dokumenty zůstávají v soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte omezené PDF",
        "description": "Přetáhněte omezené PDF sem nebo klikněte a vyberte ho."
      },
      {
        "step": 2,
        "title": "Odeberte omezení",
        "description": "Kliknutím na Odebrat dokument odemknete."
      },
      {
        "step": 3,
        "title": "Stáhněte",
        "description": "Stáhněte si PDF bez omezení."
      }
    ],
    "useCases": [
      {
        "title": "Povolení tisku",
        "description": "Odemkněte PDF, která brání tisku.",
        "icon": "printer"
      },
      {
        "title": "Povolení kopírování",
        "description": "Povolte výběr a kopírování textu.",
        "icon": "copy"
      },
      {
        "title": "Povolení úprav",
        "description": "Odstraňte omezení úprav dokumentu.",
        "icon": "edit"
      }
    ],
    "faq": [
      {
        "question": "Je to legální?",
        "answer": "Odebírání omezení z dokumentů, které vlastníte nebo k nimž máte práva, je obecně legální."
      },
      {
        "question": "Lze odstranit heslo pro otevření?",
        "answer": "Ne, pro dokumenty chráněné heslem použijte Dešifrovat PDF."
      },
      {
        "question": "Bude ovlivněn obsah?",
        "answer": "Ne, odstraní se pouze omezení; obsah zůstane beze změny."
      }
    ]
  },
  "repair-pdf": {
    "title": "Opravit PDF",
    "metaDescription": "Opravte poškozené soubory PDF. Obnovte a opravte poškozené dokumenty.",
    "keywords": [
      "opravit pdf",
      "oprava pdf",
      "obnovit pdf",
      "poškozené pdf"
    ],
    "description": "\n      <p>Nástroj Opravit PDF se pokusí opravit poškozené soubory PDF. Analyzuje strukturu dokumentu a znovu ji sestaví tak, aby obnovil co nejvíce obsahu.</p>\n      <p>Užitečné pro obnovu souborů, které nejdou otevřít, zobrazují chyby nebo kvůli poškození postrádají část obsahu.</p>\n      <p>Veškerá oprava probíhá přímo ve vašem prohlížeči, takže vaše dokumenty zůstávají v soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte poškozené PDF",
        "description": "Přetáhněte poškozené PDF sem nebo klikněte a vyberte ho."
      },
      {
        "step": 2,
        "title": "Opravte dokument",
        "description": "Kliknutím na Opravit zahájíte pokus o obnovu."
      },
      {
        "step": 3,
        "title": "Stáhněte",
        "description": "Pokud byla oprava úspěšná, stáhněte si opravené PDF."
      }
    ],
    "useCases": [
      {
        "title": "Obnova souborů",
        "description": "Obnovte PDF, která nejdou správně otevřít.",
        "icon": "refresh-cw"
      },
      {
        "title": "Oprava chyb",
        "description": "Opravte soubory, které zobrazují chybová hlášení.",
        "icon": "wrench"
      },
      {
        "title": "Obnova obsahu",
        "description": "Obnovte obsah z částečně poškozených souborů.",
        "icon": "file-check"
      }
    ],
    "faq": [
      {
        "question": "Lze opravit všechna PDF?",
        "answer": "Úspěch závisí na typu a rozsahu poškození."
      },
      {
        "question": "Obnoví se veškerý obsah?",
        "answer": "Nástroj obnoví co nejvíce obsahu; u vážně poškozených souborů může dojít ke ztrátám."
      },
      {
        "question": "Mám si ponechat originál?",
        "answer": "Ano, původní soubor si vždy ponechte jako zálohu."
      }
    ]
  },
  "encrypt-pdf": {
    "title": "Šifrovat PDF",
    "metaDescription": "Chraňte soubory PDF heslem. Přidejte šifrování a nastavte oprávnění.",
    "keywords": [
      "šifrovat pdf",
      "zaheslovat pdf",
      "zabezpečit pdf",
      "šifrování pdf"
    ],
    "description": "\n      <p>Nástroj Šifrovat PDF přidá do vašich dokumentů PDF ochranu heslem a šifrování. Nastavte uživatelské heslo, které brání otevření, a heslo vlastníka, které řídí oprávnění, jako je tisk a kopírování.</p>\n      <p>Vyberte si z různých úrovní šifrování (128bitové nebo 256bitové AES) podle svých bezpečnostních potřeb.</p>\n      <p>Veškeré šifrování probíhá přímo ve vašem prohlížeči, takže vaše hesla i dokumenty zůstávají v soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte PDF",
        "description": "Přetáhněte soubor PDF sem nebo klikněte a vyberte ho."
      },
      {
        "step": 2,
        "title": "Nastavte hesla",
        "description": "Zadejte uživatelské heslo a/nebo heslo vlastníka. Nastavte oprávnění."
      },
      {
        "step": 3,
        "title": "Zašifrujte a stáhněte",
        "description": "Kliknutím na Šifrovat zabezpečíte PDF a stáhnete ho."
      }
    ],
    "useCases": [
      {
        "title": "Důvěrné dokumenty",
        "description": "Chraňte citlivé firemní dokumenty.",
        "icon": "lock"
      },
      {
        "title": "Osobní soubory",
        "description": "Zabezpečte osobní dokumenty, například daňová přiznání.",
        "icon": "shield"
      },
      {
        "title": "Řízená distribuce",
        "description": "Omezte, co mohou příjemci s dokumenty dělat.",
        "icon": "key"
      }
    ],
    "faq": [
      {
        "question": "Jaký je rozdíl mezi uživatelským heslem a heslem vlastníka?",
        "answer": "Uživatelské heslo brání otevření dokumentu; heslo vlastníka řídí oprávnění."
      },
      {
        "question": "Jaké šifrování se používá?",
        "answer": "K dispozici je šifrování AES se 128bitovým nebo 256bitovým klíčem."
      },
      {
        "question": "Mohu nastavit oprávnění bez uživatelského hesla?",
        "answer": "Ano, k řízení oprávnění můžete nastavit pouze heslo vlastníka."
      }
    ]
  },
  "sanitize-pdf": {
    "title": "Vyčistit PDF",
    "metaDescription": "Odstraňte z PDF skrytá data. Vyčistěte metadata, skripty a citlivé informace.",
    "keywords": [
      "vyčistit pdf",
      "sanitizace pdf",
      "odstranit skrytá data",
      "soukromí pdf"
    ],
    "description": "\n      <p>Nástroj Vyčistit PDF odstraní z vašich dokumentů skrytá data a potenciálně citlivé informace. Odstraňte metadata, vložené skripty, přílohy, komentáře a další skrytý obsah.</p>\n      <p>Nezbytné při přípravě dokumentů ke zveřejnění nebo tam, kde záleží na soukromí.</p>\n      <p>Veškeré čištění probíhá přímo ve vašem prohlížeči, takže vaše dokumenty zůstávají v soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte PDF",
        "description": "Přetáhněte soubor PDF sem nebo klikněte a vyberte ho."
      },
      {
        "step": 2,
        "title": "Vyberte, co odstranit",
        "description": "Zvolte, které typy skrytých dat chcete odstranit."
      },
      {
        "step": 3,
        "title": "Vyčistěte a stáhněte",
        "description": "Kliknutím na Vyčistit PDF vyčistíte a stáhnete."
      }
    ],
    "useCases": [
      {
        "title": "Zveřejnění",
        "description": "Připravte dokumenty ke zveřejnění.",
        "icon": "globe"
      },
      {
        "title": "Ochrana soukromí",
        "description": "Před sdílením odstraňte osobní údaje.",
        "icon": "shield"
      },
      {
        "title": "Soulad s bezpečnostními požadavky",
        "description": "Splňte bezpečnostní požadavky na nakládání s dokumenty.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "Jaká skrytá data se odstraňují?",
        "answer": "Metadata, skripty, přílohy, komentáře, data formulářů a skryté vrstvy."
      },
      {
        "question": "Bude ovlivněn viditelný obsah?",
        "answer": "Ne, odstraní se pouze skrytá data; viditelný obsah zůstane zachován."
      },
      {
        "question": "Lze to vrátit zpět?",
        "answer": "Ne, odstraněná data nelze obnovit. Ponechte si zálohu originálu."
      }
    ]
  },
  "find-and-redact": {
    "title": "Najít a začernit",
    "metaDescription": "Vyhledejte a začerněte text na všech stránkách PDF. Hromadně začerněte citlivé informace, jako jsou čísla účtů, jména a další.",
    "keywords": [
      "začernit pdf",
      "najít a začernit",
      "hromadné začernění",
      "odstranit text",
      "anonymizace pdf",
      "skrýt citlivá data"
    ],
    "description": "\n      <p>Nástroj Najít a začernit umožňuje vyhledat konkrétní text, čísla nebo vzory na všech stránkách vašeho PDF a začernit všechny nalezené výskyty najednou. Ideální pro odstranění citlivých informací, jako jsou čísla účtů, jména, adresy nebo jakékoli důvěrné údaje.</p>\n      <p>Před začerněním si prohlédněte náhled všech shod a vyberte, které výskyty chcete začernit. Podporuje vyhledávání s rozlišováním velkých a malých písmen, hledání celých slov a regulární výrazy pro pokročilé vyhledávání podle vzorů.</p>\n      <p>Veškeré zpracování probíhá přímo ve vašem prohlížeči, takže vaše dokumenty zůstávají v soukromí a v bezpečí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte PDF",
        "description": "Přetáhněte soubor PDF sem nebo klikněte a vyberte ho."
      },
      {
        "step": 2,
        "title": "Vyhledejte text",
        "description": "Zadejte text, číslo nebo regulární výraz, který chcete najít a začernit."
      },
      {
        "step": 3,
        "title": "Zkontrolujte a vyberte",
        "description": "Prohlédněte si náhled všech shod a vyberte, které chcete začernit."
      },
      {
        "step": 4,
        "title": "Použijte začernění",
        "description": "Přizpůsobte vzhled začernění a použijte ho na vybrané shody."
      }
    ],
    "useCases": [
      {
        "title": "Ochrana osobních údajů",
        "description": "Začerněte osobní údaje kvůli souladu s GDPR, HIPAA nebo jinými předpisy.",
        "icon": "shield"
      },
      {
        "title": "Právní dokumenty",
        "description": "Před sdílením odstraňte z právních dokumentů důvěrné údaje.",
        "icon": "scale"
      },
      {
        "title": "Finanční záznamy",
        "description": "Začerněte ve výpisech čísla účtů, rodná čísla nebo finanční údaje.",
        "icon": "credit-card"
      }
    ],
    "faq": [
      {
        "question": "Je začernění trvalé?",
        "answer": "Ano, začernění trvale odstraní text pod ním. Původní obsah nelze obnovit. Vždy si ponechte zálohu původního souboru."
      },
      {
        "question": "Mohu začernit obrázky nebo naskenovaný text?",
        "answer": "Tento nástroj pracuje s textovými PDF. U naskenovaných dokumentů je třeba použít ruční začernění vybraných oblastí."
      },
      {
        "question": "Mohu přizpůsobit vzhled začernění?",
        "answer": "Ano, můžete nastavit barvu začernění, přidat ohraničení a volitelně vložit náhradní text, například „[ZAČERNĚNO]“."
      },
      {
        "question": "Jak funguje vyhledávání pomocí regulárních výrazů?",
        "answer": "Zapněte možnost „Použít regulární výraz“ a vyhledávejte pomocí vzorů regex. Například \\d{4}-\\d{4}-\\d{4}-\\d{4} najde čísla platebních karet."
      }
    ]
  },
  "redact-pdf": {
    "title": "Začernit PDF",
    "metaDescription": "Vizuálně začerněte, rozpixelujte nebo rozmažte citlivé informace v souborech PDF. Nevratná fyzická rasterizace a důkladné vyčištění metadat pro ochranu soukromí.",
    "keywords": [
      "začernit pdf",
      "zakrýt text v pdf",
      "rozpixelovat pdf",
      "rozmazat pdf",
      "soukromí pdf",
      "odstranit citlivá data",
      "bezpečný editor pdf"
    ],
    "description": "\n      <p>Nástroj Začernit PDF nabízí vizuální interaktivní editor pro trvalé skrytí a ochranu citlivých dat ve vašich dokumentech PDF. Tažením označte jakoukoli důvěrnou oblast – například jména, adresy, čísla dokladů, podpisy, úřední razítka, finanční údaje nebo portréty – a použijte začernění, zabělení, mozaiku nebo rozmazání.</p>\n      <p>Na rozdíl od běžných editorů PDF, které přes existující text pouze položí povrchní černé obdélníky, provádí tento nástroj <strong>nevratnou fyzickou rasterizaci pixelů</strong>. Podkladové textové vrstvy, vektorová grafika i datové proudy OCR jsou zcela zničeny a nelze je obnovit kopírováním ani zpětnou analýzou.</p>\n      <p>Nástroj navíc provádí důkladné vymazání metadat a odstraní informace o autorovi, historii vytvoření i datové proudy XMP. Veškeré zpracování probíhá ze 100 % lokálně ve vašem prohlížeči bez jakéhokoli nahrávání na server.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte dokument PDF",
        "description": "Vyberte nebo přetáhněte soubor PDF, který chcete začernit."
      },
      {
        "step": 2,
        "title": "Označte citlivé oblasti",
        "description": "Klikněte a táhněte na libovolné stránce a nakreslete rámečky začernění kolem důvěrného obsahu."
      },
      {
        "step": 3,
        "title": "Zvolte styl začernění",
        "description": "Vyberte začernění, zabělení, mozaiku (s nastavitelnou velikostí pixelů) nebo rozmazání. Zapněte náhled v reálném čase a zkontrolujte výsledek."
      },
      {
        "step": 4,
        "title": "Exportujte zabezpečené PDF",
        "description": "Kliknutím na „Vytvořit zabezpečené PDF“ provedete nevratné sloučení vrstev a vymazání metadat a stáhnete zabezpečený dokument."
      }
    ],
    "useCases": [
      {
        "title": "Ochrana soukromí a soulad s předpisy",
        "description": "Bezpečně zakryjte osobní údaje (PII) a splňte požadavky GDPR, HIPAA nebo CCPA.",
        "icon": "shield"
      },
      {
        "title": "Důvěrné sdílení právních a firemních dokumentů",
        "description": "Před zveřejněním nebo externí distribucí zakryjte obchodní tajemství, podmínky narovnání, podpisy a razítka.",
        "icon": "file-text"
      },
      {
        "title": "Ochrana financí a identity",
        "description": "Skryjte ve výpisech a fakturách čísla bankovních účtů, daňová identifikační čísla, údaje platebních karet a čísla občanských průkazů.",
        "icon": "lock"
      }
    ],
    "faq": [
      {
        "question": "Může někdo obnovit začerněné informace zkopírováním textu nebo prozkoumáním vrstev?",
        "answer": "Ne. Začerněné oblasti projdou fyzickým vypálením pixelů a sloučením vrstev. Podkladový text, vektory a objekty jsou ze struktury souboru zcela odstraněny, takže obnova není možná."
      },
      {
        "question": "Jaký je rozdíl mezi začerněním, mozaikou a rozmazáním?",
        "answer": "Začernění vytvoří plnou černou masku (standard pro právní dokumenty); zabělení vytvoří čistou bílou masku; mozaika vytvoří rozpixelovanou mřížku; rozmazání vytvoří jemný efekt matného skla."
      },
      {
        "question": "Nahrávají se soubory na vaše servery?",
        "answer": "Ne. Veškeré vykreslování, začerňování, slučování vrstev i generování PDF probíhá výhradně v paměti vašeho prohlížeče. Vaše dokumenty nikdy neopustí vaše zařízení."
      },
      {
        "question": "Jaká metadata se odstraňují?",
        "answer": "Důkladně se vymažou název dokumentu, autor, předmět, klíčová slova, tvůrce, producent, datum vytvoření (CreationDate), datum úpravy (ModDate) a rozšířené datové proudy metadat XMP."
      }
    ]
  },
  "decrypt-pdf": {
    "title": "Dešifrovat PDF",
    "metaDescription": "Odstraňte heslo ze souborů PDF. Odemkněte dokumenty chráněné heslem.",
    "keywords": [
      "dešifrovat pdf",
      "odstranit heslo z pdf",
      "odemknout pdf",
      "odstranění hesla pdf"
    ],
    "description": "\n      <p>Nástroj Dešifrovat PDF odstraní ochranu heslem z dokumentů PDF. Zadejte aktuální heslo, odemkněte soubor a vytvořte nechráněnou kopii.</p>\n      <p>Tento nástroj vyžaduje, abyste aktuální heslo znali. Neznámá hesla nedokáže prolomit ani obejít.</p>\n      <p>Veškeré dešifrování probíhá přímo ve vašem prohlížeči, takže vaše hesla i dokumenty zůstávají v soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte chráněné PDF",
        "description": "Přetáhněte sem své PDF chráněné heslem."
      },
      {
        "step": 2,
        "title": "Zadejte heslo",
        "description": "Zadejte aktuální heslo dokumentu."
      },
      {
        "step": 3,
        "title": "Dešifrujte a stáhněte",
        "description": "Klikněte na Dešifrovat, odstraňte ochranu a stáhněte soubor."
      }
    ],
    "useCases": [
      {
        "title": "Odstranění starých hesel",
        "description": "Odemkněte dokumenty, u kterých už heslo není potřeba.",
        "icon": "unlock"
      },
      {
        "title": "Snazší přístup",
        "description": "Vytvořte nechráněné kopie pro snadnější sdílení.",
        "icon": "share-2"
      },
      {
        "title": "Archivace dokumentů",
        "description": "Odstraňte hesla před dlouhodobou archivací.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Dokáže prolomit neznámá hesla?",
        "answer": "Ne, k dešifrování musíte znát aktuální heslo."
      },
      {
        "question": "Upraví se původní soubor?",
        "answer": "Ne, vytvoří se nová nechráněná kopie."
      },
      {
        "question": "Co když jsem heslo zapomněl(a)?",
        "answer": "Zapomenutá hesla bohužel obnovit nedokážeme."
      }
    ]
  },
  "flatten-pdf": {
    "title": "Sloučit vrstvy PDF",
    "metaDescription": "Sloučte (zploštěte) formuláře a anotace v PDF. Zajistěte, aby obsah nebylo možné upravovat.",
    "keywords": [
      "sloučit vrstvy pdf",
      "zploštit formuláře pdf",
      "zploštit anotace",
      "needitovatelné pdf"
    ],
    "description": "\n      <p>Nástroj Sloučit vrstvy PDF převede interaktivní prvky, jako jsou pole formulářů a anotace, na statický obsah. Zploštělé PDF vypadá stejně, ale už jej nelze upravovat.</p>\n      <p>Ideální pro finalizaci vyplněných formulářů, zachování anotací nebo vytvoření needitovatelných verzí dokumentů.</p>\n      <p>Veškeré zpracování probíhá přímo ve vašem prohlížeči, takže vaše dokumenty zůstávají v soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte své PDF",
        "description": "Přetáhněte sem své PDF s formuláři nebo anotacemi."
      },
      {
        "step": 2,
        "title": "Vyberte, co sloučit",
        "description": "Zvolte, zda zploštit formuláře, anotace, nebo obojí."
      },
      {
        "step": 3,
        "title": "Slučte a stáhněte",
        "description": "Klikněte na Sloučit a vytvořte statické PDF."
      }
    ],
    "useCases": [
      {
        "title": "Finalizace formulářů",
        "description": "Uzamkněte vyplněná data formuláře, aby je nebylo možné měnit.",
        "icon": "lock"
      },
      {
        "title": "Zachování anotací",
        "description": "Udělejte z anotací trvalou součást dokumentu.",
        "icon": "check-circle"
      },
      {
        "title": "Archivace dokumentů",
        "description": "Vytvořte needitovatelné verze pro archivaci.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Lze sloučení vrátit zpět?",
        "answer": "Ne, sloučení je trvalé. Uschovejte si zálohu originálu."
      },
      {
        "question": "Změní se vzhled dokumentu?",
        "answer": "Ne, dokument vypadá stejně, jen už není interaktivní."
      },
      {
        "question": "Zmenší se velikost souboru?",
        "answer": "Někdy ano, protože se interaktivní prvky převedou na jednodušší obsah."
      }
    ]
  },
  "remove-metadata": {
    "title": "Odstranit metadata",
    "metaDescription": "Odstraňte metadata ze souborů PDF. Odeberte autora, data a vlastnosti dokumentu.",
    "keywords": [
      "odstranit metadata pdf",
      "smazat metadata",
      "soukromí pdf",
      "anonymní pdf"
    ],
    "description": "\n      <p>Nástroj Odstranit metadata odebere z vašich souborů PDF všechny vlastnosti dokumentu a metadata. Odstraňte jména autorů, data vytvoření, informace o softwaru a další identifikační údaje.</p>\n      <p>Nezbytné pro ochranu soukromí při sdílení dokumentů nebo tam, kde by metadata mohla prozradit citlivé informace.</p>\n      <p>Veškeré zpracování probíhá přímo ve vašem prohlížeči, takže vaše dokumenty zůstávají v soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte své PDF",
        "description": "Přetáhněte sem soubor PDF nebo jej vyberte kliknutím."
      },
      {
        "step": 2,
        "title": "Odstraňte metadata",
        "description": "Kliknutím na Odstranit odeberete všechna metadata."
      },
      {
        "step": 3,
        "title": "Stáhněte",
        "description": "Stáhněte PDF bez metadat."
      }
    ],
    "useCases": [
      {
        "title": "Ochrana soukromí",
        "description": "Před sdílením odstraňte osobní údaje.",
        "icon": "shield"
      },
      {
        "title": "Anonymní dokumenty",
        "description": "Vytvářejte dokumenty bez uvedení autora.",
        "icon": "user-x"
      },
      {
        "title": "Čistá distribuce",
        "description": "Distribuujte dokumenty bez interních metadat.",
        "icon": "send"
      }
    ],
    "faq": [
      {
        "question": "Která metadata se odstraní?",
        "answer": "Autor, název, předmět, klíčová slova, data a informace o aplikaci, ve které byl dokument vytvořen a vygenerován."
      },
      {
        "question": "Odstraňují se i metadata XMP?",
        "answer": "Ano, odstraní se standardní metadata i metadata XMP."
      },
      {
        "question": "Ovlivní to obsah dokumentu?",
        "answer": "Ne, odstraní se pouze metadata; obsah dokumentu zůstane beze změny."
      }
    ]
  },
  "change-permissions": {
    "title": "Změnit oprávnění",
    "metaDescription": "Upravte oprávnění PDF. Řiďte přístup k tisku, kopírování a úpravám.",
    "keywords": [
      "oprávnění pdf",
      "změnit přístup k pdf",
      "omezit pdf",
      "zabezpečení pdf"
    ],
    "description": "\n      <p>Nástroj Změnit oprávnění upraví řízení přístupu k vašim dokumentům PDF. Povolte nebo zakažte tisk, kopírování, úpravy a přidávání anotací.</p>\n      <p>Nastavte heslo vlastníka, kterým tato omezení vynutíte. Příjemci si dokument mohou prohlížet, ale akce, které s ním mohou provádět, budou omezené.</p>\n      <p>Veškeré zpracování probíhá přímo ve vašem prohlížeči, takže vaše dokumenty zůstávají v soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte své PDF",
        "description": "Přetáhněte sem soubor PDF nebo jej vyberte kliknutím."
      },
      {
        "step": 2,
        "title": "Nastavte oprávnění",
        "description": "Povolte nebo zakažte tisk, kopírování, úpravy a anotace."
      },
      {
        "step": 3,
        "title": "Použijte a stáhněte",
        "description": "Nastavte heslo vlastníka a stáhněte omezené PDF."
      }
    ],
    "useCases": [
      {
        "title": "Zabránění kopírování",
        "description": "Zakažte kopírování textu a chraňte tak obsah.",
        "icon": "copy"
      },
      {
        "title": "Řízení tisku",
        "description": "Omezte nebo povolte tisk dokumentu.",
        "icon": "printer"
      },
      {
        "title": "Omezení úprav",
        "description": "Zabraňte změnám v dokumentu.",
        "icon": "edit-3"
      }
    ],
    "faq": [
      {
        "question": "Potřebuji heslo?",
        "answer": "K vynucení oprávnění je nutné heslo vlastníka."
      },
      {
        "question": "Lze oprávnění odebrat?",
        "answer": "Ano, pomocí hesla vlastníka nebo nástrojem Odstranit omezení."
      },
      {
        "question": "Jsou kompatibilní všechny čtečky PDF?",
        "answer": "Většina čteček PDF oprávnění respektuje, některé je však vynucovat nemusí."
      }
    ]
  },
  "pdf-to-docx": {
    "title": "PDF do Wordu",
    "metaDescription": "Převeďte PDF na upravitelné dokumenty Word (DOCX). Zachovejte formátování a rozvržení.",
    "keywords": [
      "pdf do wordu",
      "převést pdf na docx",
      "pdf na doc",
      "upravitelné pdf"
    ],
    "description": "\n      <p>Nástroj PDF do Wordu převede vaše dokumenty PDF na upravitelné soubory Microsoft Word (DOCX). Zachová původní rozvržení, formátování, obrázky i tok textu.</p>\n      <p>Snadno upravujte obsah PDF ve Wordu bez přepisování. Ideální pro smlouvy, zprávy a životopisy.</p>\n      <p>Veškerý převod probíhá lokálně ve vašem prohlížeči díky technologii WebAssembly, takže vaše dokumenty nikdy neopustí vaše zařízení.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte své PDF",
        "description": "Přetáhněte sem soubor PDF nebo jej vyberte kliknutím."
      },
      {
        "step": 2,
        "title": "Převeďte",
        "description": "Počkejte na dokončení převodu."
      },
      {
        "step": 3,
        "title": "Stáhněte dokument Word",
        "description": "Stáhněte plně upravitelný soubor DOCX."
      }
    ],
    "useCases": [
      {
        "title": "Úpravy smluv",
        "description": "Převeďte smlouvy z PDF do Wordu a upravujte či revidujte je.",
        "icon": "file-text"
      },
      {
        "title": "Aktualizace životopisu",
        "description": "Aktualizujte starý životopis v PDF jeho převodem do Wordu.",
        "icon": "user"
      },
      {
        "title": "Opětovné využití obsahu",
        "description": "Extrahujte obsah ze zpráv v PDF pro jiné dokumenty.",
        "icon": "copy"
      }
    ],
    "faq": [
      {
        "question": "Zachová se formátování?",
        "answer": "Ano, nástroj se snaží co nejvěrněji zachovat rozvržení, písma i obrázky."
      },
      {
        "question": "Mohu převádět naskenovaná PDF?",
        "answer": "Naskenovaná PDF se ve Wordu převedou jako obrázky, pokud nejprve nepoužijete OCR."
      },
      {
        "question": "Je výstup kompatibilní s Wordem?",
        "answer": "Ano, výstupem je standardní soubor .docx kompatibilní s Microsoft Word i Google Docs."
      }
    ]
  },
  "pdf-to-markdown": {
    "title": "PDF do Markdownu",
    "metaDescription": "Převeďte PDF do formátu Markdown. Extrahujte text a zachovejte formátování, jako jsou nadpisy a seznamy.",
    "keywords": [
      "pdf do markdownu",
      "převést pdf na md",
      "extrakce textu z pdf",
      "převodník markdown",
      "pdf na text"
    ],
    "description": "\n      <p>Nástroj PDF do Markdownu převede vaše dokumenty PDF na čisté a dobře strukturované soubory Markdown. Inteligentně extrahuje textový obsah a snaží se zachovat formátování, jako jsou nadpisy, seznamy a odstavce.</p>\n      <p>Ideální pro převod dokumentů PDF do upravitelných formátů pro dokumentaci, poznámky nebo systémy pro správu obsahu, které podporují Markdown.</p>\n      <p>Veškerý převod probíhá lokálně ve vašem prohlížeči, takže vaše dokumenty zůstávají v soukromí a v bezpečí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte své PDF",
        "description": "Přetáhněte sem soubor PDF nebo jej vyberte kliknutím."
      },
      {
        "step": 2,
        "title": "Nastavte možnosti",
        "description": "Nastavte rozsah stránek, zvolte, zda zahrnout čísla stránek, a upravte nastavení zalomení řádků."
      },
      {
        "step": 3,
        "title": "Převeďte a stáhněte",
        "description": "Kliknutím na Převést vygenerujete soubor Markdown a stáhnete jej."
      }
    ],
    "useCases": [
      {
        "title": "Dokumentace",
        "description": "Převeďte příručky a návody v PDF do Markdownu pro dokumentaci se správou verzí.",
        "icon": "file-text"
      },
      {
        "title": "Psaní poznámek",
        "description": "Extrahujte obsah z článků a knih v PDF do svého systému poznámek.",
        "icon": "edit-3"
      },
      {
        "title": "Migrace obsahu",
        "description": "Přeneste obsah z PDF do platforem CMS, které podporují Markdown.",
        "icon": "copy"
      }
    ],
    "faq": [
      {
        "question": "Zachová se formátování?",
        "answer": "Nástroj se snaží rozpoznat nadpisy podle velikosti písma a také odrážkové a číslované seznamy. Složitá rozvržení mohou vyžadovat ruční úpravu."
      },
      {
        "question": "Mohu převést jen určité stránky?",
        "answer": "Ano, můžete zadat rozsah stránek, například „1-3, 5, 7“, a převést pouze tyto stránky."
      },
      {
        "question": "Funguje to s naskenovanými PDF?",
        "answer": "Naskenovaná PDF obsahují obrázky, nikoli text. Před převodem do Markdownu nejprve extrahujte text naším nástrojem OCR."
      }
    ]
  },
  "deskew-pdf": {
    "title": "Narovnat PDF",
    "metaDescription": "Automaticky narovnejte naskenované nebo nakloněné stránky PDF. Opravte zkosené dokumenty díky přesné detekci úhlu.",
    "keywords": [
      "narovnat pdf",
      "srovnat naklonění pdf",
      "opravit nakloněný sken",
      "automaticky otočit pdf",
      "opravit úhel pdf"
    ],
    "description": "\n      <p>Nástroj Narovnat PDF automaticky rozpozná a opraví nakloněné či zkosené stránky ve vašich dokumentech PDF pomocí pokročilé analýzy rozptylu projekčního profilu. To je zásadní u naskenovaných dokumentů, které byly do skeneru vloženy šikmo.</p>\n      <p>Nástroj analyzuje zarovnání textu a obsahu v různých úhlech, najde optimální otočení a poté provede opravu. Pro co nejlepší výsledky můžete upravit práh citlivosti (1–30) a nastavení DPI (72–300).</p>\n      <p>Veškeré zpracování probíhá lokálně ve vašem prohlížeči díky technologii WebAssembly, takže vaše dokumenty zůstávají v soukromí a v bezpečí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte své PDF",
        "description": "Přetáhněte sem naskenovaný soubor PDF nebo jej vyberte kliknutím."
      },
      {
        "step": 2,
        "title": "Upravte nastavení",
        "description": "V případě potřeby upravte citlivost prahu a DPI pro lepší detekci."
      },
      {
        "step": 3,
        "title": "Zpracujte a stáhněte",
        "description": "Kliknutím na Narovnat srovnáte stránky a stáhnete opravené PDF."
      }
    ],
    "useCases": [
      {
        "title": "Naskenované dokumenty",
        "description": "Opravte stránky, které byly z podavače dokumentů naskenovány šikmo.",
        "icon": "scan"
      },
      {
        "title": "Skeny z mobilu",
        "description": "Opravte nakloněné fotografie dokumentů pořízené chytrým telefonem.",
        "icon": "smartphone"
      },
      {
        "title": "Obnova archivů",
        "description": "Narovnejte staré naskenované archivy pro lepší čitelnost.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Jak přesná je detekce úhlu?",
        "answer": "Nástroj využívá analýzu rozptylu projekčního profilu a s vysokou přesností rozpozná naklonění až do ±10 stupňů. Stránky s náklonem menším než 0,3 stupně automaticky přeskočí."
      },
      {
        "question": "Ovlivní to kvalitu textu?",
        "answer": "Při otočení o násobky 90 stupňů ke ztrátě kvality nedochází. U ostatních úhlů nástroj zaokrouhlí na nejbližší celý stupeň a zachová dobrou kvalitu."
      },
      {
        "question": "Mohu narovnat jen určité stránky?",
        "answer": "Nástroj analyzuje všechny stránky, ale opraví pouze ty, u nichž zjištěné naklonění překračuje práh citlivosti. Stránky s minimálním nakloněním zůstanou beze změny."
      },
      {
        "question": "Co je práh citlivosti?",
        "answer": "Hodnoty 1–10 opravují pouze zřetelná naklonění, 11–20 rozpoznají střední naklonění a 21–30 zachytí i jemné úhly. Výchozí hodnota je 10 pro vyváženou detekci."
      },
      {
        "question": "Jak dlouho zpracování trvá?",
        "answer": "Doba zpracování závisí na velikosti souboru a DPI. 150 DPI (výchozí) nabízí dobrý poměr mezi rychlostí a přesností. Vyšší DPI je přesnější, ale pomalejší."
      }
    ]
  },
  "pdf-booklet": {
    "title": "Tvorba brožur z PDF",
    "metaDescription": "Vytvořte z PDF rozvržení brožury pro tisk. Uspořádejte stránky pro vazbu V1 (sešitou drátem) s několika možnostmi mřížky.",
    "keywords": [
      "brožura z pdf",
      "tvorba brožur",
      "tisk brožury",
      "vazba v1 sešitá",
      "vyřazení stránek"
    ],
    "description": "\n      <p>Nástroj Tvorba brožur z PDF uspořádá stránky vašeho PDF do rozvržení brožury připraveného k tisku a skládání. Ideální pro tvorbu letáků, zinů, brožur a publikací v sešité vazbě V1.</p>\n      <p>Vybírejte z různých režimů mřížky (1x2, 2x2, 2x4, 4x4), formátů papíru a orientací. Nástroj automaticky provede vyřazení stránek tak, aby po přeložení měly správné pořadí.</p>\n      <p>Veškeré zpracování probíhá lokálně ve vašem prohlížeči, takže vaše dokumenty zůstávají v soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte své PDF",
        "description": "Nahrajte dokument PDF, který chcete převést na brožuru."
      },
      {
        "step": 2,
        "title": "Zvolte rozvržení",
        "description": "Vyberte režim mřížky, formát papíru, orientaci a možnosti otočení."
      },
      {
        "step": 3,
        "title": "Vytvořte a stáhněte",
        "description": "Vygenerujte rozvržení brožury a stáhněte jej k tisku."
      }
    ],
    "useCases": [
      {
        "title": "Letáky",
        "description": "Vytvořte ze standardních dokumentů PDF letáky připravené ke skládání.",
        "icon": "book-open"
      },
      {
        "title": "Ziny",
        "description": "Vydávejte vlastní ziny se správným vyřazením stránek.",
        "icon": "book"
      },
      {
        "title": "Programy akcí",
        "description": "Vytvořte profesionální programové brožury pro akce.",
        "icon": "calendar"
      }
    ],
    "faq": [
      {
        "question": "Co je vazba V1 (sešitá drátem)?",
        "answer": "Vazba V1 je způsob vázání, při kterém se přeložené listy vloží do sebe a sešijí sponkami přes hřbet v místě přehybu."
      },
      {
        "question": "Jaký režim mřížky mám použít?",
        "answer": "Pro brožury je standardem 1x2. Pro tisk více stránek na list a úsporu papíru použijte 2x2 nebo větší."
      },
      {
        "question": "Mohu si rozvržení prohlédnout?",
        "answer": "Ano, nástroj před vygenerováním výsledné brožury zobrazí vizuální náhled."
      }
    ]
  },
  "rasterize-pdf": {
    "title": "Rastrovat PDF",
    "metaDescription": "Převeďte stránky PDF na vysoce kvalitní obrázky. Exportujte do PNG, JPEG nebo WebP s vlastním nastavením DPI.",
    "keywords": [
      "rastrovat pdf",
      "pdf na obrázek",
      "pdf na png",
      "pdf na jpeg",
      "převést stránky pdf"
    ],
    "description": "\n      <p>Nástroj Rastrovat PDF převede stránky vašeho PDF na vysoce kvalitní rastrové obrázky. Vybírejte z výstupních formátů PNG, JPEG nebo WebP s plnou kontrolou nad DPI a kvalitou.</p>\n      <p>Ideální pro tvorbu miniatur, grafiky pro sociální sítě nebo archivaci obsahu PDF ve formě obrázků. Podporuje výběr rozsahu stránek i dávkové zpracování.</p>\n      <p>Veškeré zpracování probíhá lokálně ve vašem prohlížeči, takže vaše dokumenty zůstávají v soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte své PDF",
        "description": "Přetáhněte sem soubor PDF nebo jej vyberte kliknutím."
      },
      {
        "step": 2,
        "title": "Nastavte výstup",
        "description": "Zvolte DPI, výstupní formát (PNG/JPEG/WebP), kvalitu a rozsah stránek."
      },
      {
        "step": 3,
        "title": "Převeďte a stáhněte",
        "description": "Zpracujte stránky a stáhněte obrázky jednotlivě nebo jako archiv ZIP."
      }
    ],
    "useCases": [
      {
        "title": "Sociální sítě",
        "description": "Převeďte snímky z PDF na obrázky pro příspěvky na sociálních sítích.",
        "icon": "share-2"
      },
      {
        "title": "Miniatury",
        "description": "Vygenerujte miniatury náhledů dokumentů PDF.",
        "icon": "image"
      },
      {
        "title": "Publikování na webu",
        "description": "Převeďte obsah PDF do obrazových formátů vhodných pro web.",
        "icon": "globe"
      }
    ],
    "faq": [
      {
        "question": "Jaké DPI mám použít?",
        "answer": "72 DPI pro obrazovku, 150 DPI pro běžné použití, 300 DPI pro tiskovou kvalitu."
      },
      {
        "question": "Který formát je nejlepší?",
        "answer": "PNG pro kvalitu a průhlednost, JPEG pro malou velikost, WebP pro moderní web."
      },
      {
        "question": "Mohu převést jen určité stránky?",
        "answer": "Ano, zadejte rozsahy stránek, například „1-5, 8, 10-15“, a převeďte pouze tyto stránky."
      }
    ]
  },
  "markdown-to-pdf": {
    "title": "Markdown do PDF",
    "metaDescription": "Převeďte soubory Markdown na krásně naformátované dokumenty PDF. Podpora GitHub Flavored Markdown a zvýrazňování syntaxe.",
    "keywords": [
      "markdown do pdf",
      "md do pdf",
      "převést markdown",
      "gfm do pdf",
      "převodník markdown"
    ],
    "description": "\n      <p>Nástroj Markdown do PDF převede vaše soubory Markdown na profesionálně stylované dokumenty PDF. Podporuje CommonMark i GitHub Flavored Markdown (GFM) včetně tabulek, seznamů úkolů a bloků kódu.</p>\n      <p>Vybírejte z několika motivů (světlý, tmavý, GitHub) a přizpůsobte si velikost stránky a okraje. Bloky kódu mají zvýrazněnou syntaxi pro lepší čitelnost.</p>\n      <p>Veškerý převod probíhá lokálně ve vašem prohlížeči, takže váš obsah zůstává v soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte soubor Markdown",
        "description": "Nahrajte soubor .md nebo .markdown."
      },
      {
        "step": 2,
        "title": "Zvolte motiv",
        "description": "Vyberte vizuální motiv a nastavte parametry stránky."
      },
      {
        "step": 3,
        "title": "Převeďte a stáhněte",
        "description": "Vygenerujte stylované PDF a stáhněte jej."
      }
    ],
    "useCases": [
      {
        "title": "Dokumentace",
        "description": "Převeďte soubory README a dokumentaci na PDF, které lze snadno sdílet.",
        "icon": "file-text"
      },
      {
        "title": "Export poznámek",
        "description": "Exportujte poznámky v Markdownu do PDF k tisku nebo sdílení.",
        "icon": "edit-3"
      },
      {
        "title": "Zprávy",
        "description": "Vytvářejte z Markdownu zprávy s profesionálním vzhledem.",
        "icon": "bar-chart"
      }
    ],
    "faq": [
      {
        "question": "Je podporován GitHub Flavored Markdown?",
        "answer": "Ano, podporovány jsou tabulky, seznamy úkolů, přeškrtnutí a další funkce GFM."
      },
      {
        "question": "Mohu si přizpůsobit vzhled?",
        "answer": "Vyberte si z přednastavených motivů nebo pro plnou kontrolu přidejte vlastní CSS."
      },
      {
        "question": "Jsou bloky kódu zvýrazněny?",
        "answer": "Ano, bloky kódu mají zvýrazněnou syntaxi pro běžné programovací jazyky."
      }
    ]
  },
  "email-to-pdf": {
    "title": "E-mail do PDF",
    "metaDescription": "Převeďte soubory e-mailů (.eml, .msg) na dokumenty PDF. Zachovejte formátování, vložené obrázky, klikací odkazy a vložte přílohy.",
    "keywords": [
      "e-mail do pdf",
      "eml do pdf",
      "msg do pdf",
      "převést e-mail",
      "převodník e-mailů",
      "uložit e-mail jako pdf",
      "outlook do pdf"
    ],
    "description": "\n      <p>Nástroj E-mail do PDF převede vaše soubory e-mailů (formáty .eml a .msg) na přehledně naformátované dokumenty PDF. Zachová informace z hlavičky e-mailu, obsah zprávy, vložené obrázky (s nahrazením odkazů CID), klikací odkazy a přílohy vloží přímo do PDF.</p>\n      <p>Přizpůsobte si možnosti výstupu včetně velikosti stránky (A4, Letter, Legal), formátu data s podporou časových pásem a toho, zda zahrnout pole Kopie/Skrytá kopie a informace o přílohách.</p>\n      <p>Veškerý převod probíhá lokálně ve vašem prohlížeči, takže vaše e-maily zůstávají v soukromí a v bezpečí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte soubor e-mailu",
        "description": "Nahrajte soubor e-mailu .eml nebo .msg."
      },
      {
        "step": 2,
        "title": "Nastavte možnosti",
        "description": "Nastavte velikost stránky, formát data, časové pásmo a zvolte, která pole zahrnout."
      },
      {
        "step": 3,
        "title": "Převeďte a stáhněte",
        "description": "Převeďte e-mail do PDF s vloženými přílohami a stáhněte výsledek."
      }
    ],
    "useCases": [
      {
        "title": "Právní záznamy",
        "description": "Archivujte důležité e-maily jako PDF s vloženými přílohami pro právní dokumentaci.",
        "icon": "scale"
      },
      {
        "title": "Firemní archivy",
        "description": "Převeďte obchodní korespondenci do PDF pro dlouhodobé uchovávání záznamů.",
        "icon": "briefcase"
      },
      {
        "title": "Zajištění důkazů",
        "description": "Uložte e-mailové důkazy včetně vložených obrázků a příloh v needitovatelném formátu PDF.",
        "icon": "shield"
      }
    ],
    "faq": [
      {
        "question": "Jaké formáty e-mailů jsou podporovány?",
        "answer": "Plně podporovány jsou soubory .eml (RFC 822) i .msg (Microsoft Outlook)."
      },
      {
        "question": "Jsou zahrnuty přílohy?",
        "answer": "Ano! Přílohy se vloží přímo do souboru PDF. Z PDF je můžete extrahovat pomocí kompatibilní čtečky PDF."
      },
      {
        "question": "Zobrazují se vložené obrázky?",
        "answer": "Ano, vložené obrázky odkazované pomocí CID (Content-ID) se automaticky převedou na datová URI ve formátu base64 a zobrazí se v PDF."
      },
      {
        "question": "Jsou odkazy klikací?",
        "answer": "Ano, všechny odkazy HTML (značky <a>) i adresy URL v e-mailech ve formátu prostého textu se v PDF převedou na klikací odkazy."
      },
      {
        "question": "Zachová se formátování e-mailu?",
        "answer": "Ano, e-maily ve formátu HTML si co nejvěrněji zachovají formátování včetně stylů, obrázků a odkazů."
      }
    ]
  },
  "cbz-to-pdf": {
    "title": "CBZ do PDF",
    "metaDescription": "Převeďte archivy komiksů (CBZ) do PDF. Zachovejte pořadí a kvalitu obrázků u digitálních komiksů.",
    "keywords": [
      "cbz do pdf",
      "komiks do pdf",
      "převést cbz",
      "převodník komiksů",
      "převodník cbz"
    ],
    "description": "\n      <p>Nástroj CBZ do PDF převede soubory Comic Book Archive na dokumenty PDF. Extrahuje všechny obrázky z archivu CBZ a sestaví z nich PDF se zachováním správného pořadí čtení.</p>\n      <p>Vybírejte z různých velikostí stránky včetně původních rozměrů obrázků nebo standardizovaných formátů komiksů. Ideální pro čtení komiksů na zařízeních, která podporují PDF, ale ne CBZ.</p>\n      <p>Veškerý převod probíhá lokálně ve vašem prohlížeči, takže vaše komiksy zůstávají v soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte soubor CBZ",
        "description": "Nahrajte archiv komiksu ve formátu .cbz."
      },
      {
        "step": 2,
        "title": "Vyberte možnosti",
        "description": "Zvolte velikost stránky a nastavení kvality obrázků."
      },
      {
        "step": 3,
        "title": "Převeďte a stáhněte",
        "description": "Převeďte komiks do PDF a stáhněte jej."
      }
    ],
    "useCases": [
      {
        "title": "Kompatibilita se čtečkami",
        "description": "Převeďte CBZ do PDF pro elektronické čtečky, které podporují pouze PDF.",
        "icon": "book"
      },
      {
        "title": "Archivy komiksů",
        "description": "Vytvořte archiv své sbírky digitálních komiksů v PDF.",
        "icon": "archive"
      },
      {
        "title": "Příprava k tisku",
        "description": "Převeďte digitální komiksy do PDF k tisku.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Co je formát CBZ?",
        "answer": "CBZ je archiv ZIP obsahující stránky komiksu jako obrázkové soubory, přejmenovaný na příponu .cbz."
      },
      {
        "question": "Zachová se kvalita obrázků?",
        "answer": "Ano, obrázky se do PDF vloží v původní kvalitě."
      },
      {
        "question": "Jsou podporovány vnořené složky?",
        "answer": "Ano, obrázky ze všech složek v archivu se extrahují a seřadí."
      }
    ]
  },
  "pdf-to-pdfa": {
    "title": "PDF do PDF/A",
    "metaDescription": "Převeďte PDF do archivního formátu PDF/A. Zajistěte dlouhodobé uchování dokumentů podle norem ISO.",
    "keywords": [
      "pdf do pdfa",
      "převodník pdfa",
      "archivovat pdf",
      "archivace pdf",
      "dlouhodobé uchování"
    ],
    "description": "\n      <p>Nástroj PDF do PDF/A převede vaše dokumenty PDF do formátu PDF/A, normy ISO pro dlouhodobou archivaci dokumentů. PDF/A zaručuje, že dokumenty bude možné zobrazit a reprodukovat i za desítky let.</p>\n      <p>Vyberte PDF/A-1b (základní shoda), PDF/A-2b (doporučeno, podporuje průhlednost) nebo PDF/A-3b (umožňuje vložené soubory). Nástroj podle potřeby vloží písma a sloučí průhlednost.</p>\n      <p>Veškerý převod probíhá lokálně ve vašem prohlížeči, takže vaše dokumenty zůstávají v soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte své PDF",
        "description": "Nahrajte PDF, které chcete převést do PDF/A."
      },
      {
        "step": 2,
        "title": "Vyberte úroveň PDF/A",
        "description": "Zvolte úroveň shody PDF/A-1b, PDF/A-2b nebo PDF/A-3b."
      },
      {
        "step": 3,
        "title": "Převeďte a stáhněte",
        "description": "Převeďte soubor do PDF/A a stáhněte archivní dokument."
      }
    ],
    "useCases": [
      {
        "title": "Právní archivy",
        "description": "Převeďte právní dokumenty do PDF/A pro dlouhodobé uložení přípustné u soudu.",
        "icon": "scale"
      },
      {
        "title": "Úřední záznamy",
        "description": "Splňte archivační požadavky státní správy pomocí PDF/A.",
        "icon": "building"
      },
      {
        "title": "Firemní archivy",
        "description": "Uchovejte důležité firemní dokumenty tak, aby byly dostupné i v budoucnu.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Jakou úroveň PDF/A mám použít?",
        "answer": "Pro většinu účelů doporučujeme PDF/A-2b. Úroveň 1b použijte pro maximální kompatibilitu, 3b pokud potřebujete vložené soubory."
      },
      {
        "question": "Čím se PDF/A liší?",
        "answer": "PDF/A vkládá písma, zakazuje šifrování a zajišťuje, že všechny prvky jsou soběstačné pro budoucí zobrazení."
      },
      {
        "question": "Mohu PDF/A převést zpět?",
        "answer": "Soubory PDF/A jsou standardní PDF a lze je normálně otevřít. Archivní funkce přidávají pravidla, nikoli omezení použití."
      }
    ]
  },
  "font-to-outline": {
    "title": "Písma na křivky",
    "metaDescription": "Odstraňte z dokumentů PDF závislost na písmech převodem stránek na vysoce kvalitní obrázky. Zajistí kompatibilitu na všech systémech.",
    "keywords": [
      "písma na křivky",
      "převést písma na křivky",
      "odstranit písma",
      "kompatibilita písem",
      "zploštit písma v pdf",
      "odstranění písem z pdf"
    ],
    "description": "\n      <p>Nástroj Písma na křivky odstraní z vašeho PDF veškeré závislosti na písmech tím, že každou stránku převede na vysoce kvalitní rastrový obsah. Váš dokument tak bude na jakémkoli systému vypadat naprosto stejně, i když původní písma nejsou nainstalována.</p>\n      <p>Nástroj vykreslí každou stránku ve zvoleném DPI (150–600), odstraní vložená písma a přitom zachová přesný vizuální vzhled. Volitelně můžete přidat neviditelnou textovou vrstvu, aby bylo možné v dokumentu dál vyhledávat.</p>\n      <p>To je zásadní při přípravě k tisku, pro kompatibilitu napříč platformami a k předejití problémům s licencemi písem při sdílení dokumentů. Veškeré zpracování probíhá lokálně ve vašem prohlížeči.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte své PDF",
        "description": "Nahrajte PDF obsahující písma, která chcete odstranit."
      },
      {
        "step": 2,
        "title": "Nastavte kvalitu",
        "description": "Zvolte DPI (300 doporučeno pro tisk, 150 pro obrazovku). V případě potřeby zapněte prohledávatelný text."
      },
      {
        "step": 3,
        "title": "Převeďte a stáhněte",
        "description": "Zpracujte soubor a stáhněte PDF nezávislé na písmech."
      }
    ],
    "useCases": [
      {
        "title": "Příprava k tisku",
        "description": "Odstraněním všech závislostí na písmech předejdete problémům s písmy v tiskárnách.",
        "icon": "printer"
      },
      {
        "title": "Sdílení napříč platformami",
        "description": "Sdílejte dokumenty, které vypadají na každém zařízení stejně bez ohledu na nainstalovaná písma.",
        "icon": "share-2"
      },
      {
        "title": "Licence písem",
        "description": "Odstraňte vložená písma a vyhněte se licenčním potížím při distribuci dokumentů.",
        "icon": "shield"
      }
    ],
    "faq": [
      {
        "question": "Jak to funguje?",
        "answer": "Nástroj vykreslí každou stránku ve vysokém rozlišení (zvoleném DPI) a z těchto obrázků znovu sestaví PDF. Odstraní tak veškeré závislosti na písmech a zachová vizuální vzhled."
      },
      {
        "question": "Mohu po převodu stále označovat text?",
        "answer": "Ve výchozím nastavení ne, text se stane součástí obrázku. Můžete však zapnout možnost „Zachovat prohledávatelný text“, která přidá neviditelnou textovou vrstvu pro vyhledávání a kopírování."
      },
      {
        "question": "Jaké DPI mám použít?",
        "answer": "Pro tiskovou kvalitu doporučujeme 300 DPI. 150 DPI stačí pro zobrazení na obrazovce a vytváří menší soubory. 600 DPI poskytuje nejvyšší kvalitu, ale vytváří velké soubory."
      },
      {
        "question": "Zvětší se velikost souboru?",
        "answer": "Velikost souboru závisí na DPI a obsahu. 150 DPI obvykle vytváří menší soubory, 300 DPI může velikost zvětšit a 600 DPI ji výrazně zvětší. Komprese se použije automaticky."
      },
      {
        "question": "Lze to vrátit zpět?",
        "answer": "Ne, data písem se trvale odstraní. Pokud potřebujete upravitelný text s původními písmy, uschovejte si zálohu originálu."
      },
      {
        "question": "Co vektorová grafika?",
        "answer": "Vektorová grafika (tvary, čáry) v původním PDF se spolu s textem převede na rastr. Vizuální kvalita se zachová ve zvoleném DPI."
      }
    ]
  },
  "extract-tables": {
    "title": "Extrahovat tabulky z PDF",
    "metaDescription": "Rozpoznejte a extrahujte tabulky z dokumentů PDF. Exportujte do formátů JSON, Markdown nebo CSV.",
    "keywords": [
      "extrahovat tabulky",
      "extrakce tabulek z pdf",
      "pdf do csv",
      "pdf do excelu",
      "rozpoznání tabulek"
    ],
    "description": "\n      <p>Nástroj Extrahovat tabulky z PDF rozpozná tabulková data ve vašich dokumentech PDF a exportuje je ve strukturovaných formátech. Zvolte JSON pro integraci dat, Markdown pro dokumentaci nebo CSV pro tabulkové procesory.</p>\n      <p>Nástroj využívá inteligentní detekční algoritmy, které rozpoznají strukturu tabulek i ve složitých dokumentech. Pro co nejlepší výsledky zadejte rozsah stránek a upravte parametry detekce.</p>\n      <p>Veškeré zpracování probíhá lokálně ve vašem prohlížeči, takže vaše dokumenty zůstávají v soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte své PDF",
        "description": "Nahrajte PDF obsahující tabulky, které chcete extrahovat."
      },
      {
        "step": 2,
        "title": "Nastavte detekci",
        "description": "Nastavte rozsah stránek a minimální počet sloupců a řádků."
      },
      {
        "step": 3,
        "title": "Exportujte a stáhněte",
        "description": "Zvolte výstupní formát (JSON/Markdown/CSV) a stáhněte soubor."
      }
    ],
    "useCases": [
      {
        "title": "Analýza dat",
        "description": "Extrahujte data z tabulek k analýze v tabulkových procesorech nebo databázích.",
        "icon": "bar-chart"
      },
      {
        "title": "Zpracování zpráv",
        "description": "Vytáhněte tabulky ze zpráv v PDF k dalšímu zpracování.",
        "icon": "file-text"
      },
      {
        "title": "Dokumentace",
        "description": "Převeďte tabulky z PDF do Markdownu pro technickou dokumentaci.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "Dokáže rozpoznat složité tabulky?",
        "answer": "Nástroj funguje nejlépe s jednoduchými mřížkovými tabulkami. Složitě sloučené buňky mohou vyžadovat ruční úpravu."
      },
      {
        "question": "Co když se nenajdou žádné tabulky?",
        "answer": "Zkuste upravit minimální počet sloupců a řádků nebo ověřte, zda PDF skutečně obsahuje tabulkové struktury."
      },
      {
        "question": "Mohu extrahovat jen z určitých stránek?",
        "answer": "Ano, zadáním rozsahu stránek omezíte extrakci jen na vybrané stránky."
      }
    ]
  },
  "ocg-manager": {
    "title": "Správce vrstev PDF (OCG)",
    "metaDescription": "Spravujte vrstvy PDF (Optional Content Groups). Zobrazujte, přepínejte, přidávejte, odstraňujte a přejmenovávejte vrstvy ve svých dokumentech PDF.",
    "keywords": [
      "vrstvy pdf",
      "správce ocg",
      "optional content groups",
      "viditelnost vrstev pdf",
      "správa vrstev pdf"
    ],
    "description": "\n      <p>Správce vrstev PDF vám umožní zobrazit a spravovat skupiny volitelného obsahu (Optional Content Groups, OCG) ve vašich dokumentech PDF. Vrstvy OCG se používají v technických výkresech, mapách a složitých dokumentech k rozdělení obsahu do přepínatelných vrstev.</p>\n      <p>Zobrazte všechny vrstvy v PDF, přepínejte jejich viditelnost, přidávejte nové vrstvy, odstraňujte nepotřebné nebo přejmenovávejte stávající. Tento nástroj je nezbytný pro práci s vrstvenými PDF, jako jsou architektonické plány, exporty z CAD a dokumenty připravené k tisku.</p>\n      <p>Veškeré zpracování probíhá lokálně ve vašem prohlížeči, takže vaše dokumenty zůstávají v soukromí a v bezpečí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrajte své PDF",
        "description": "Nahrajte soubor PDF, který obsahuje vrstvy (OCG), nebo takový, do kterého chcete vrstvy přidat."
      },
      {
        "step": 2,
        "title": "Zobrazte vrstvy",
        "description": "Nástroj automaticky vypíše všechny vrstvy nalezené v dokumentu i s jejich stavem viditelnosti."
      },
      {
        "step": 3,
        "title": "Spravujte vrstvy",
        "description": "Přepínejte viditelnost vrstev, přejmenovávejte je, přidávejte nové nebo odstraňujte nepotřebné."
      },
      {
        "step": 4,
        "title": "Uložte a stáhněte",
        "description": "Stáhněte upravené PDF s provedenými změnami vrstev."
      }
    ],
    "useCases": [
      {
        "title": "Technické výkresy",
        "description": "Spravujte vrstvy v exportech z CAD a zobrazujte či skrývejte kóty, poznámky nebo různé pohledy.",
        "icon": "ruler"
      },
      {
        "title": "Úpravy map",
        "description": "Přepínejte různé mapové vrstvy, jako je topografie, silnice a popisky, pro vlastní tisk map.",
        "icon": "map"
      },
      {
        "title": "Příprava k tisku",
        "description": "Připravte vrstvená PDF k tisku přepnutím vhodných vrstev pro různé verze.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Co jsou vrstvy PDF (OCG)?",
        "answer": "Skupiny volitelného obsahu (Optional Content Groups, OCG) jsou vrstvy v PDF, které lze zobrazit nebo skrýt. Běžně se používají ve výkresech CAD, mapách a složitých dokumentech."
      },
      {
        "question": "Proč moje PDF nezobrazuje žádné vrstvy?",
        "answer": "Ne všechna PDF obsahují vrstvy. Vrstvy se obvykle přidávají při vytváření PDF v grafickém softwaru nebo aplikacích CAD."
      },
      {
        "question": "Ovlivní změny vrstev původní obsah?",
        "answer": "Změny viditelnosti vrstev ovlivňují pouze to, co se zobrazí nebo vytiskne. Samotný obsah v dokumentu zůstává."
      }
    ]
  },
  "pdf-reader": {
    "title": "Čtečka PDF",
    "metaDescription": "Bezplatná online čtečka PDF. Prohlížejte, procházejte, přibližujte, otáčejte a tiskněte dokumenty PDF přímo v prohlížeči.",
    "keywords": [
      "čtečka pdf",
      "prohlížeč pdf",
      "zobrazit pdf online",
      "číst pdf",
      "prohlížení pdf v prohlížeči"
    ],
    "description": "\n      <p>Čtečka PDF je plnohodnotný prohlížeč PDF, který vám umožní číst a procházet dokumenty PDF přímo ve vašem prohlížeči. Není nutná instalace žádného softwaru – stačí nahrát PDF a začít číst.</p>\n      <p>Přecházejte mezi stránkami, přibližujte a oddalujte, otáčejte zobrazení a pro nerušené čtení použijte režim celé obrazovky. Dokumenty můžete také vytisknout nebo stáhnout pro přístup offline.</p>\n      <p>Veškeré zobrazování probíhá lokálně ve vašem prohlížeči. Vaše dokumenty se nikdy nenahrávají na žádný server, což zajišťuje naprosté soukromí.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Otevřete své PDF",
        "description": "Kliknutím nahrajte soubor PDF nebo jej přetáhněte sem a otevřete ho ve čtečce."
      },
      {
        "step": 2,
        "title": "Procházejte stránky",
        "description": "Pomocí ovládacích prvků přejděte na předchozí nebo další stránku, případně přejděte přímo na konkrétní číslo stránky."
      },
      {
        "step": 3,
        "title": "Upravte zobrazení",
        "description": "Přibližte či oddalte, otočte zobrazení nebo přepněte do režimu celé obrazovky pro pohodlné čtení."
      },
      {
        "step": 4,
        "title": "Vytiskněte nebo stáhněte",
        "description": "V případě potřeby dokument vytiskněte nebo jej stáhněte pro přístup offline."
      }
    ],
    "useCases": [
      {
        "title": "Kontrola dokumentů",
        "description": "Rychle si prohlédněte dokumenty PDF bez instalace jakéhokoli softwaru.",
        "icon": "book-open"
      },
      {
        "title": "Čtení na mobilu",
        "description": "Čtěte dokumenty PDF na jakémkoli zařízení s webovým prohlížečem.",
        "icon": "smartphone"
      },
      {
        "title": "Rychlý náhled",
        "description": "Prohlédněte si PDF dříve, než se rozhodnete je stáhnout nebo vytisknout.",
        "icon": "eye"
      }
    ],
    "faq": [
      {
        "question": "Je můj dokument v bezpečí?",
        "answer": "Ano, váš dokument se zpracovává výhradně ve vašem prohlížeči a nikdy se nenahrává na žádný server."
      },
      {
        "question": "Mohu do PDF přidávat anotace nebo jej upravovat?",
        "answer": "Tento nástroj slouží pouze k prohlížení. K úpravám použijte naše nástroje Podepsat PDF nebo Anotovat PDF."
      },
      {
        "question": "Funguje to na mobilních zařízeních?",
        "answer": "Ano, Čtečka PDF funguje na všech zařízeních s moderním webovým prohlížečem."
      }
    ]
  },
  "digital-sign-pdf": {
    "title": "Digitální podpis",
    "metaDescription": "Přidejte do PDF dokumentů digitální podpisy X.509. Podepisujte PDF pomocí certifikátů PFX, P12 nebo PEM s právní platností.",
    "keywords": [
      "digitální podpis pdf",
      "certifikát x509",
      "podepsat pdf pfx",
      "podepsat pdf p12",
      "podepsat pdf pem",
      "právně platný podpis pdf"
    ],
    "description": "\n      <p>Nástroj Digitální podpis umožňuje přidat do PDF dokumentů kryptografické digitální podpisy X.509. Na rozdíl od jednoduchých kreslených podpisů poskytují digitální podpisy právní platnost a ověření integrity dokumentu.</p>\n      <p>Nahrajte soubor certifikátu (ve formátu PFX, P12 nebo PEM), zadejte heslo a podepište PDF. Můžete přidat viditelný podpis s vlastním textem, obrázkem a umístěním, nebo neviditelný podpis, který slouží pouze k zajištění integrity dokumentu.</p>\n      <p>Celé podepisování probíhá přímo ve vašem prohlížeči. Váš certifikát ani dokumenty se nikdy nenahrávají na žádný server.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrát PDF",
        "description": "Nahrajte PDF dokument, který chcete digitálně podepsat."
      },
      {
        "step": 2,
        "title": "Načíst certifikát",
        "description": "Nahrajte soubor certifikátu X.509 (.pfx, .p12 nebo .pem) a zadejte heslo."
      },
      {
        "step": 3,
        "title": "Nastavit podpis",
        "description": "Volitelně doplňte důvod, místo a viditelný podpis s vlastním textem nebo obrázkem."
      },
      {
        "step": 4,
        "title": "Podepsat a stáhnout",
        "description": "Klikněte na Podepsat PDF, čímž použijete digitální podpis, a stáhněte podepsaný dokument."
      }
    ],
    "useCases": [
      {
        "title": "Právní dokumenty",
        "description": "Podepisujte smlouvy, dohody a právní dokumenty právně závaznými digitálními podpisy.",
        "icon": "scale"
      },
      {
        "title": "Firemní schvalování",
        "description": "Digitálně podepisujte faktury, objednávky a schvalovací dokumenty pro účely auditní stopy.",
        "icon": "briefcase"
      },
      {
        "title": "Integrita dokumentů",
        "description": "Zajistěte, aby dokumenty nebyly po podpisu pozměněny.",
        "icon": "shield-check"
      }
    ],
    "faq": [
      {
        "question": "Jaké formáty certifikátů jsou podporovány?",
        "answer": "Podporovány jsou formáty certifikátů PFX (.pfx), PKCS#12 (.p12) a PEM (.pem)."
      },
      {
        "question": "Je podpis právně platný?",
        "answer": "Ano, digitální podpisy X.509 jsou při použití platného certifikátu právně uznávány ve většině jurisdikcí."
      },
      {
        "question": "Mohu přidat viditelný podpis?",
        "answer": "Ano, můžete přidat viditelný podpis s vlastním textem, obrázkem, umístěním a stylem."
      }
    ]
  },
  "validate-signature": {
    "title": "Ověřit podpis",
    "metaDescription": "Ověřte digitální podpisy v PDF dokumentech. Zkontrolujte platnost certifikátu, informace o podepisující osobě a integritu dokumentu.",
    "keywords": [
      "ověřit podpis pdf",
      "ověření digitálního podpisu",
      "zkontrolovat certifikát pdf",
      "kontrola podpisu"
    ],
    "description": "\n      <p>Nástroj Ověřit podpis umožňuje ověřit digitální podpisy v PDF dokumentech. Zkontrolujte, zda jsou podpisy platné, zobrazte informace o certifikátu a potvrďte integritu dokumentu.</p>\n      <p>Nahrajte podepsané PDF a zobrazí se všechny podpisy, stav jejich platnosti, informace o podepisující osobě a také to, zda byl dokument po podpisu upraven.</p>\n      <p>Celé ověřování probíhá přímo ve vašem prohlížeči. Vaše dokumenty se nikdy nenahrávají na žádný server.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrát podepsané PDF",
        "description": "Nahrajte PDF dokument, který obsahuje digitální podpisy."
      },
      {
        "step": 2,
        "title": "Zobrazit výsledky",
        "description": "Prohlédněte si všechny podpisy nalezené v dokumentu včetně stavu jejich platnosti."
      },
      {
        "step": 3,
        "title": "Zkontrolovat podrobnosti",
        "description": "Zobrazte informace o certifikátu, údaje o podepisující osobě a časové razítko podpisu."
      },
      {
        "step": 4,
        "title": "Exportovat zprávu",
        "description": "Volitelně stáhněte zprávu s výsledky ověření ve formátu JSON."
      }
    ],
    "useCases": [
      {
        "title": "Ověření dokumentů",
        "description": "Ověřte, že podepsané dokumenty jsou pravé a nebyly pozměněny.",
        "icon": "shield-check"
      },
      {
        "title": "Audit souladu",
        "description": "Kontrolujte platnost podpisů pro účely dodržování předpisů a auditu.",
        "icon": "clipboard-check"
      },
      {
        "title": "Kontrola certifikátů",
        "description": "Zobrazte podrobnosti certifikátů a data jejich vypršení u podepsaných dokumentů.",
        "icon": "award"
      }
    ],
    "faq": [
      {
        "question": "Co znamená „platný“?",
        "answer": "Platný podpis znamená, že dokument nebyl od podpisu upraven a řetězec certifikátů je neporušený."
      },
      {
        "question": "Mohu ověřit více PDF najednou?",
        "answer": "Ano, můžete nahrát více PDF a ověřit všechny podpisy dávkově."
      },
      {
        "question": "Proč může být podpis neplatný?",
        "answer": "Podpis může být neplatný, pokud byl dokument upraven, platnost certifikátu vypršela nebo certifikát není důvěryhodný."
      }
    ]
  },
  "ai-pdf-reflower": {
    "title": "AI přeformátování rozvržení PDF",
    "metaDescription": "Přesázejte PDF dokumenty do responzivního rozvržení vhodného pro mobily. Podpora exportu do Markdown a EPUB pro pohodlnější čtení na malých obrazovkách.",
    "keywords": [
      "přeformátovat pdf",
      "responzivní pdf",
      "pdf do markdown",
      "export do epub",
      "čtečka pdf na mobilu"
    ],
    "description": "\n      <p>AI přeformátování rozvržení PDF je ideálním pomocníkem pro čtení PDF dokumentů na mobilních zařízeních. Klasická PDF mají pevné rozvržení, které na chytrých telefonech a tabletech často vyžaduje neustálé přibližování a vodorovné posouvání, takže je čtení zdlouhavé.</p>\n      <p>Tento nástroj inteligentně analyzuje tok textu, řádkování a fyzické souřadnice stránek PDF a rekonstruuje sémantické odstavce a hierarchii nadpisů. U vícesloupcových nebo dvousloupcových dokumentů inteligentně spojí sloupce do jednoho responzivního toku, takže se text čte plynule.</p>\n      <p>Navíc podporuje vykreslení matematických vzorců pomocí LaTeX/MathJax a nabízí několik motivů pro čtení (sépiový, tmavý, zelený šetrný k očím). Přeformátované rozvržení můžete jedním kliknutím exportovat jako Markdown nebo standardní e-knihu EPUB.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrát soubor PDF",
        "description": "Přetáhněte soubor PDF sem nebo klikněte a vyberte jej procházením."
      },
      {
        "step": 2,
        "title": "Vybrat motiv pro čtení",
        "description": "V 3D simulátoru mobilu vpravo zvolte preferovanou velikost písma a barvy motivu."
      },
      {
        "step": 3,
        "title": "Exportovat dokument",
        "description": "Až budete spokojeni, exportujte dokument jako Markdown nebo EPUB pomocí fyzického tahacího lanka."
      }
    ],
    "useCases": [
      {
        "title": "Čtení odborné literatury na mobilu",
        "description": "Čtěte odborné články a výzkumné zprávy na telefonu plynule a bez neustálého přibližování.",
        "icon": "smartphone"
      },
      {
        "title": "Převod na e-knihy",
        "description": "Převeďte textově náročná PDF do souborů EPUB a importujte je do Kindlu nebo jiných čteček e-knih.",
        "icon": "book"
      },
      {
        "title": "Archiv poznámek",
        "description": "Převeďte strukturovaný obsah PDF přímo do čistých souborů Markdown pro vaši osobní znalostní bázi.",
        "icon": "file-text"
      }
    ],
    "faq": [
      {
        "question": "Zvládá správně dvousloupcová PDF?",
        "answer": "Ano, nástroj rozpozná vodorovné souřadnice textových bloků a uspořádá levý a pravý sloupec za sebou, takže se řádky nepromíchají."
      },
      {
        "question": "Ztratí se obrázky a matematické vzorce?",
        "answer": "Matematické vzorce se převedou do syntaxe LaTeX/MathJax pro čisté vykreslení na webu a obrázky zůstanou zachovány na odpovídajících sémantických pozicích."
      },
      {
        "question": "Probíhá převod v cloudu?",
        "answer": "Ne, veškerá analýza rozvržení i sestavení formátu probíhá přímo ve vašem prohlížeči, což zaručuje naprosté soukromí vašich dokumentů."
      }
    ]
  },
  "citation-linker": {
    "title": "Propojení citací",
    "metaDescription": "Vyhledejte a aktivujte citační značky v PDF a převeďte je na klikatelné odkazy DOI nebo skoky na stránky.",
    "keywords": [
      "propojení citací",
      "hypertextový odkaz pdf",
      "párování doi",
      "pomocník pro akademické práce",
      "reference v pdf"
    ],
    "description": "\n      <p>Propojení citací je navrženo speciálně pro akademické výzkumníky. V mnoha odborných článcích ve formátu PDF jsou citační značky (např. [1], [2]) pouhým textem, takže čtenáři musí neustále přecházet k seznamu literatury na konci dokumentu a ztrácejí soustředění.</p>\n      <p>Tento nástroj načte text PDF přímo ve vašem prohlížeči, pomocí rozpoznávání vzorů spáruje citační značky s odpovídajícími položkami seznamu literatury a překryje je klikatelnými odkazovými anotacemi PDF s využitím vyhledání DOI nebo souřadnic pro skok na stránku.</p>\n      <p>Vytvoří také interaktivní mapu citačních vztahů, pomocí které můžete vizuálně procházet síť referencí v dokumentu.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrát akademické PDF",
        "description": "Nahrajte odborný článek nebo závěrečnou práci v PDF, která obsahuje seznam literatury."
      },
      {
        "step": 2,
        "title": "Zkontrolovat citace",
        "description": "Prohlédněte si dvojice citací v interaktivní mapě a v případě potřeby ručně upravte nebo doplňte odkazy DOI."
      },
      {
        "step": 3,
        "title": "Vložit odkazy",
        "description": "Kliknutím na tlačítko aktivace vložte do PDF hypertextové odkazy a stáhněte aktualizovaný dokument."
      }
    ],
    "useCases": [
      {
        "title": "Důkladné studium literatury",
        "description": "Klikněte na citační značku a okamžitě zobrazte podrobnosti reference nebo přejděte na externí stránku DOI.",
        "icon": "link"
      },
      {
        "title": "Příprava před publikací",
        "description": "Zajistěte, aby vaše akademické práce měly před finálním odevzdáním plně funkční navigaci pomocí hypertextových odkazů.",
        "icon": "award"
      },
      {
        "title": "Analýza mapy referencí",
        "description": "Pochopte hierarchii a souvislosti literatury díky interaktivní síťové mapě.",
        "icon": "git-network"
      }
    ],
    "faq": [
      {
        "question": "Co když reference nemá DOI?",
        "answer": "Pokud DOI nelze najít, nástroj použije interní akci „Přejít na stránku“, takže po kliknutí na značku skočíte přímo na stránku s referencí."
      },
      {
        "question": "Jaké formáty citací jsou podporovány?",
        "answer": "Podporovány jsou běžné číselné závorky (např. [1], [1-3]) i citace ve formátu autor–rok (např. Author et al., 202X)."
      },
      {
        "question": "Změní se vzhled mého PDF?",
        "answer": "Ne, nástroj vkládá nad text neviditelné odkazové anotace, takže původní rozvržení, písma i styl dokumentu zůstanou zachovány."
      }
    ]
  },
  "vector-extractor": {
    "title": "Extrakce vektorů z PDF",
    "metaDescription": "Převeďte PDF do věrného SVG a vybírejte, přebarvujte a exportujte vektorové grafy, loga a grafiku.",
    "keywords": [
      "extrahovat vektory z pdf",
      "pdf do svg",
      "vektorové grafy z pdf",
      "extrahovat logo",
      "vektorové kresby"
    ],
    "description": "\n      <p>Extrakce vektorů z PDF zpřístupní vektorové cesty a grafiku vložené v souborech PDF. Snadno z dokumentů vytáhnete vektorové grafy, diagramy nebo loga pro grafickou práci či tisk.</p>\n      <p>Nástroj využívá věrné vykreslování do SVG, které rozloží vektorové cesty PDF na čisté standardní stromy prvků SVG bez ztráty přesnosti.</p>\n      <p>Rozhraní zvýrazňuje prvky pod kurzorem efektem 3D rozložení vrstev v ose Z a nabízí panel s výběrem barvy, kde mohou designéři upravovat a extrahovat vektorové uzly.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrát PDF dokument",
        "description": "Nahrajte PDF obsahující vektorové prvky, diagramy, grafy nebo loga."
      },
      {
        "step": 2,
        "title": "Vybrat prvky",
        "description": "Najetím myší na vektorové plátno zvýrazněte prvky a kliknutím vyberte uzel."
      },
      {
        "step": 3,
        "title": "Upravit a exportovat",
        "description": "Upravte atributy cesty v panelu a pak stáhněte SVG nebo zkopírujte jeho zdrojový kód."
      }
    ],
    "useCases": [
      {
        "title": "Extrakce grafických podkladů",
        "description": "Rychle vytáhněte firemní loga, ikony a ilustrace z manuálů značky nebo brožur.",
        "icon": "bezier"
      },
      {
        "title": "Export vědeckých grafů",
        "description": "Extrahujte vektorové grafy z výzkumných článků pro tisk ve vysokém rozlišení nebo do prezentací.",
        "icon": "presentation"
      },
      {
        "title": "Přebarvení vektorových prvků",
        "description": "Před uložením pro webové projekty upravte barvy tahu a výplně extrahovaných prvků.",
        "icon": "crown"
      }
    ],
    "faq": [
      {
        "question": "Proč nemohu vybrat některé obrázky?",
        "answer": "PDF obsahují rastrové obrázky (např. fotografie nebo naskenované stránky) i vektorovou grafiku (např. tvary a křivky). Na cesty SVG lze rozložit pouze vektorové cesty."
      },
      {
        "question": "Obsahuje výstupní SVG styly?",
        "answer": "Ano, exportované SVG zachovává všechny původní vlastnosti včetně výplní, tahů, průhlednosti, přechodů a transformací souřadnic."
      },
      {
        "question": "Budou se velké soubory zpomalovat?",
        "answer": "Používáme akceleraci pomocí WebAssembly, ale vykreslení PDF s extrémně složitými výkresy CAD nebo tisíci vektorových cest může trvat několik sekund."
      }
    ]
  },
  "deep-sanitize": {
    "title": "Hloubkové čištění metadat",
    "metaDescription": "Důkladně odstraňte z PDF metadata o autorovi, záznamy o úpravách, skryté vrstvy a osiřelé objekty pro maximální soukromí.",
    "keywords": [
      "vyčištění pdf",
      "odstranit metadata",
      "anonymizovat pdf",
      "odstranit skrytý vodoznak",
      "zabezpečené pdf"
    ],
    "description": "\n      <p>Hloubkové čištění metadat je vaší nejlepší obranou proti únikům metadat a skrytému sledování. Pouhé zakrytí viditelného textu v PDF černými obdélníky k ochraně obchodního tajemství nestačí.</p>\n      <p>Tento nástroj prochází binární strukturu PDF a zcela vymaže informace o autorovi, software, ve kterém byl dokument vytvořen, záznamy o úpravách (metadata XMP), proprietární mezipaměti PieceInfo a skupiny volitelného obsahu OCG (často používané pro neviditelné vodoznaky).</p>\n      <p>Navíc kompletně přepíše tabulky křížových odkazů (xref) a zahodí všechny bloky přírůstkových aktualizací, takže odstraněná nebo upravená historická data nelze obnovit.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrát PDF",
        "description": "Vyberte soubor PDF, který obsahuje citlivá data nebo historii úprav."
      },
      {
        "step": 2,
        "title": "Spustit skener",
        "description": "Spusťte 3D skener, který v souboru vyhledá skrytá metadata a vrstvy."
      },
      {
        "step": 3,
        "title": "Hloubkově vyčistit",
        "description": "Kliknutím na vyčistit odstraňte sledovací prvky a stáhněte zcela čisté PDF."
      }
    ],
    "useCases": [
      {
        "title": "Sdílení smluv",
        "description": "Před sdílením obchodních smluv s třetími stranami odstraňte záznamy o přípravě, cesty k souborům a předchozí revize.",
        "icon": "file-signature"
      },
      {
        "title": "Anonymní publikování",
        "description": "Odstraňte neviditelné anotace a vodoznaky a publikujte dokumenty anonymně a bezpečně.",
        "icon": "eye-off"
      },
      {
        "title": "Optimalizace PDF",
        "description": "Odstraňte osiřelé objekty a nepotřebné datové proudy, aby se soubory na webu načítaly rychleji.",
        "icon": "zap"
      }
    ],
    "faq": [
      {
        "question": "Čím se to liší od běžného odstranění metadat?",
        "answer": "Běžné nástroje mažou pouze základní pole, jako je název nebo autor. Hloubkové čištění znovu sestaví celou tabulku xref PDF a odstraní PieceInfo, skryté vodoznaky i historické přírůstkové revize."
      },
      {
        "question": "Ovlivní to rozvržení nebo text dokumentu?",
        "answer": "Ne, odstraňují se pouze skryté popisné proudy a strukturální data. Viditelné rozvržení, text i grafika zůstanou beze změny."
      },
      {
        "question": "Odstraní se tím hesla PDF?",
        "answer": "Ne, pokud je PDF šifrované, musíte je před hloubkovým čištěním nejprve odemknout."
      }
    ]
  },
  "booklet-folding-simulator": {
    "title": "3D simulátor brožur a skládání",
    "metaDescription": "Vyřaďte vícestránková PDF na tiskové archy určené ke skládání, s 3D animací fyzického skládání a náhledem vazby V1.",
    "keywords": [
      "3D vyřazování",
      "simulátor skládání",
      "vazba V1 sešitá",
      "sazba brožury",
      "tiskový nátisk"
    ],
    "description": "\n      <p>3D simulátor brožur a skládání je pokročilý nástroj určený pro grafiky a profesionály z oblasti vydavatelství. Klasická sazba knih vyžaduje výpočet složitého rozmístění stránek a pořadí při vyřazování. Tento nástroj celý proces vizualizuje a automatizuje.</p>\n      <p>Vlastní algoritmus vyřazování mapuje sekvenční seznam stránek PDF na standardní rozvržení tiskových archů (například 4stránkový přeložený arch, 8stránková vazba V1 nebo skládání do harmoniky) a umisťuje stránky na líc a rub velkých fyzických archů.</p>\n      <p>V rozhraní využíváme čisté 3D maticové transformace CSS a fyzikální křivky pružina–hmota, které animují skládání archu vodorovně i svisle. Výsledkem je působivý náhled vazby, který věrně napodobuje skutečnost.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrát soubor PDF",
        "description": "Přetáhněte sem PDF dokument, který chcete připravit k tisku."
      },
      {
        "step": 2,
        "title": "Vybrat způsob skládání",
        "description": "Zvolte preferované schéma vyřazování (např. 4stránkový přeložený arch, 8stránková vazba V1, 4stránková harmonika)."
      },
      {
        "step": 3,
        "title": "Interaktivní 3D náhled",
        "description": "Posuvníkem sledujte skládání archu ve 3D a zkontrolujte výsledné rozmístění čísel stránek."
      },
      {
        "step": 4,
        "title": "Vytvořit vyřazené PDF",
        "description": "Kliknutím na vytvořit stáhněte PDF s přeskupenými a sloučenými tiskovými archy připravené pro oboustranný tisk."
      }
    ],
    "useCases": [
      {
        "title": "Prototypy brožur",
        "description": "Předem si zobrazte pořadí skládání trojlomů a letáků, abyste po tisku předešli stránkám vzhůru nohama.",
        "icon": "book-open"
      },
      {
        "title": "Knižní vazba V1",
        "description": "Automaticky vytvářejte vyřazené tiskové archy pro vícestránkové časopisy nebo brožury.",
        "icon": "layers"
      },
      {
        "title": "Vizuální pomůcka pro tiskárny",
        "description": "Pomozte klientům představit si, jak jsou stránky na tiskových arších fyzicky rozmístěny a složeny.",
        "icon": "printer"
      }
    ],
    "faq": [
      {
        "question": "Co je „vyřazování“?",
        "answer": "Vyřazování je základní krok předtiskové přípravy. Komerční tiskové stroje tisknou na velké archy, a proto se stránky rozmisťují mimo pořadí tak, aby se po vytištění, složení a svázání objevily ve správném sledu. Tento nástroj toto rozvržení vypočítá automaticky."
      },
      {
        "question": "Mění 3D náhled obsah mého PDF?",
        "answer": "Ne, původní obsah PDF se na 3D arch pouze vykresluje jako textura. Vytvořené PDF mění jen pořadí a umístění stránek; kvalita textu i grafiky zůstává zachována."
      },
      {
        "question": "Co když počet stránek mého PDF není násobkem 4 nebo 8?",
        "answer": "Optimalizátor automaticky přidá na konec prázdné stránky, aby byl splněn matematický požadavek na počet stránek zvoleného způsobu skládání."
      }
    ]
  },
  "pdf-to-slide": {
    "title": "PDF do snímků",
    "metaDescription": "Inteligentně analyzujte osnovu PDF, extrahujte vektorové grafy a sestavte z nich plně upravitelné prezentace PPTX.",
    "keywords": [
      "PDF do PPT",
      "převod pdf na snímky",
      "extrakce grafů",
      "akademická prezentace",
      "vytvořit PPTX z pdf"
    ],
    "description": "\n      <p>AI převod PDF do snímků vdechne statickým PDF dokumentům nový život a promění je v moderní, snadno přizpůsobitelné snímky PowerPoint (PPTX).</p>\n      <p>Nástroj využívá pokročilou extrakci osnovy rozvržení, která automaticky analyzuje úrovně nadpisů, řádky odstavců a tloušťku písma a vytvoří z nich logickou kostru prezentace. Dokáže také oddělit vektorové grafy a tabulky ve vysokém rozlišení, odstranit artefakty pozadí a vložit je jako samostatné upravitelné prvky.</p>\n      <p>Všechny výstupy PPTX jsou sestaveny ze standardních prvků Office Open XML, takže veškerý text zůstává plně upravitelný a vektory neztrácejí rozlišení. Rozhraní celý převod názorně vizualizuje plynulou animací přechodu karet ve stylu „hvězdného pole“.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrát akademické/firemní PDF",
        "description": "Nahrajte PDF dokument, který obsahuje strukturované oddíly a diagramy."
      },
      {
        "step": 2,
        "title": "Analyzovat osnovu snímků",
        "description": "Zkontrolujte extrahovanou strukturu snímků, upravte nadpisy nebo odstraňte nepotřebné bloky karet."
      },
      {
        "step": 3,
        "title": "Sestavit PPTX",
        "description": "Spusťte převod a získejte standardní upravitelný soubor prezentace."
      }
    ],
    "useCases": [
      {
        "title": "Prezentace výzkumných článků",
        "description": "Převeďte PDF článků z odborných časopisů, jejich textovou strukturu a vektorové diagramy na sadu snímků připravenou pro přednášku.",
        "icon": "graduation-cap"
      },
      {
        "title": "Shrnutí firemních zpráv",
        "description": "Okamžitě zhustěte rozsáhlé výroční zprávy do přehledných konceptů prezentací s odrážkami.",
        "icon": "presentation"
      },
      {
        "title": "Ukázky na více zařízeních",
        "description": "Už žádné ruční kopírování snímků obrazovky. Získejte čistou, plně upravitelnou kostru rozvržení během několika sekund.",
        "icon": "laptop"
      }
    ],
    "faq": [
      {
        "question": "Lze snímky upravovat v Microsoft Office?",
        "answer": "Ano. Soubory se generují nativně v paměti podle oficiální specifikace Office Open XML (OOXML). Texty, tabulky a zástupné symboly jsou plně interaktivní v aplikacích PowerPoint, Keynote i WPS."
      },
      {
        "question": "Jak se extrahují grafy?",
        "answer": "Engine prochází vektorové cesty a rastrové vrstvy v PDF, rozpozná ohraničené oblasti představující grafy a vyřízne je jako samostatné uzly SVG nebo obrázky s vysokým DPI."
      },
      {
        "question": "Funguje to i u naskenovaných dokumentů?",
        "answer": "U naskenovaných PDF bez skutečné textové vrstvy doporučujeme soubor nejprve zpracovat naším nástrojem OCR a teprve potom jej předat převodu do snímků."
      }
    ]
  },
  "form-logic-designer": {
    "title": "Návrhář logiky formulářů",
    "metaDescription": "Navrhujte dynamické chování na plátně s uzly ve stylu matného skla a vkládejte do PDF formulářů interaktivní logiku AcroJS.",
    "keywords": [
      "logika pdf formuláře",
      "vložení AcroJS",
      "uzlový diagram",
      "interaktivní PDF",
      "závislosti polí"
    ],
    "description": "\n      <p>Návrhář interaktivní logiky formulářů je průkopnický nástroj, který zaplňuje velkou mezeru ve schopnostech PDF: místo plochých, mrtvých formulářů vytváří aktivní a reagující pole.</p>\n      <p>Na vizuálním plátně se „zářícími uzly z matného skla“ (postaveném na React Flow) jsou pole formuláře znázorněna jako propojené moduly. Přetažením spojnic definujete vztahy: např. po zaškrtnutí zaškrtávacího políčka ➜ povolit textové pole ➜ automaticky vypočítat hodnoty a aktualizovat pole s celkovým součtem.</p>\n      <p>Po dokončení návrhu engine AcroJS zkompiluje logiku do oficiálního Acrobat JavaScriptu a vloží ji do slovníků '/AA' (Additional Actions) formuláře AcroForm. Interaktivní chování se pak spouští nativně v libovolné standardní čtečce PDF.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrát interaktivní PDF",
        "description": "Poskytněte soubor PDF, který již obsahuje aktivní pole formuláře (AcroForm)."
      },
      {
        "step": 2,
        "title": "Navrhnout logiku na plátně",
        "description": "Propojte pole jako uzly. Výstupní události (change, blur) navažte na cílové akce (zobrazit, skrýt, vypočítat, zakázat)."
      },
      {
        "step": 3,
        "title": "Zkompilovat a stáhnout",
        "description": "Vložte zkompilovanou logiku JavaScriptu do slovníku PDF a uložte výsledný chytrý dokument."
      }
    ],
    "useCases": [
      {
        "title": "Chytré kupní smlouvy",
        "description": "Dynamicky zobrazujte nebo skrývejte doplňková vstupní pole podle podmínek zvolených klientem.",
        "icon": "file-signature"
      },
      {
        "title": "Automatizované výkazy výdajů",
        "description": "Sčítejte více položek výdajů a dynamicky počítejte daně bez ručních výpočtů.",
        "icon": "calculator"
      },
      {
        "title": "Interaktivní dotazníky",
        "description": "Přeskakujte nerelevantní otázky podle předchozích odpovědí a zpříjemněte vyplňování na mobilu.",
        "icon": "form-input"
      }
    ],
    "faq": [
      {
        "question": "Potřebuji PDF s již existujícími poli?",
        "answer": "Ano. Tento nástroj slouží k navázání logických pravidel na existující pole. Pokud vaše PDF interaktivní pole nemá, nejprve pomocí našeho nástroje pro tvorbu formulářů přidejte vstupní pole a zaškrtávací políčka."
      },
      {
        "question": "Bude tato logika fungovat v jakékoli čtečce PDF?",
        "answer": "Funguje ve všech čtečkách PDF, které dodržují standardy Adobe PDF a podporují Acrobat JavaScript (např. Adobe Acrobat Reader, Foxit Reader a hlavní webové prohlížeče). Jednodušší mobilní čtečky mohou podporovat pouze základní akce."
      },
      {
        "question": "Ovlivní to tisk na papír?",
        "answer": "Vůbec ne. Vložené skripty běží pouze na obrazovce při vyplňování formuláře. Při tisku se staticky vytiskne aktuální stav polí bez jakékoli vizualizace uzlů."
      }
    ]
  },
  "eink-optimizer": {
    "title": "Optimalizace pro čtečky e-Ink",
    "metaDescription": "Optimalizujte PDF pro displeje e-Ink pomocí vyčištění pozadí, Otsuovy binarizace a morfologického ztučnění textu.",
    "keywords": [
      "optimalizace pro eink",
      "binarizace",
      "ztučnění textu",
      "čtení šetrné k očím",
      "otsuův práh"
    ],
    "description": "\n      <p>Optimalizace pro čtečky e-Ink je nezbytný nástroj vytvořený na míru pro nadšence do elektronických čteček Kindle, Onyx Boox, Kobo a dalších zařízení s e-papírem.</p>\n      <p>Mnoho naskenovaných e-knih v PDF trpí na displejích e-Ink slabým písmem, kalným šedým pozadím, šumem nebo stíny ze skenování. Tento nástroj analyzuje histogramy úrovní šedi a použije Otsuovu metodu prahování pro binarizaci, která oddělí text od pozadí a změní šedé pozadí na čistě bílé.</p>\n      <p>Navíc využívá morfologickou dilataci k ztučnění tenkých a vybledlých znaků, takže je písmo ostré a vysoce kontrastní. Posuvník kontrastu s tlumenou setrvačností umožňuje doladit kontrast podobný papíru v reálném čase.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrát naskenované PDF",
        "description": "Nahrajte e-knihy nebo naskenované dokumenty se slabým textem či šedým pozadím."
      },
      {
        "step": 2,
        "title": "Upravit posuvník kontrastu",
        "description": "Posunutím tlumeného posuvníku v reálném čase vyvažte odstranění pozadí a ztučnění znaků."
      },
      {
        "step": 3,
        "title": "Optimalizovat a stáhnout",
        "description": "Zpracujte celé PDF a vytvořte vysoce kontrastní dokument šetrný k očím, přizpůsobený pro e-Ink."
      }
    ],
    "useCases": [
      {
        "title": "Restaurování starých rukopisů",
        "description": "Ztučněte vybledlý text ve skenech historických knih nebo ručně psaných rukopisů, aby byl čitelný.",
        "icon": "scroll"
      },
      {
        "title": "Vyčištění zkouškových testů",
        "description": "Odstraňte stíny v pozadí z okopírovaných nebo vyfotografovaných testů a získejte čistý černý text na bílém papíře.",
        "icon": "file-text"
      },
      {
        "title": "Přizpůsobení zařízením s e-papírem",
        "description": "Převeďte barevná PDF do optimalizovaných odstínů šedi a předejděte rušivým artefaktům ditheringu na monochromatických displejích.",
        "icon": "tablet"
      }
    ],
    "faq": [
      {
        "question": "Jak funguje „ztučnění znaků“?",
        "answer": "Ve zpracování obrazu se tento postup nazývá dilatace. Pomocí strukturního prvku rozšíří okraje znaků o jeden pixel, čímž fyzicky zesílí slabé tahy a zlepší jejich čitelnost."
      },
      {
        "question": "Zvětší se tím velikost souboru?",
        "answer": "Právě naopak. Binarizací složitých barevných nebo šedotónových obrázků na jednoduché černobílé rozvržení dokáže standardní komprese (např. CCITT Group 4) výrazně zmenšit velikost souboru PDF."
      },
      {
        "question": "Podporuje to i PDF s nativním textem?",
        "answer": "Ano. Nativní vektorová PDF se na pozadí rastrují ve vysokém rozlišení, optimalizují a znovu sestaví, takže získáte jednotné vysoce kontrastní čtení."
      }
    ]
  },
  "cert-cryptor": {
    "title": "Šifrování a podpis certifikátem",
    "metaDescription": "Zabezpečte PDF asymetrickým šifrováním pomocí certifikátu s veřejným klíčem, doplněným 3D otiskem zlaté voskové pečeti a podpisem PKCS#7.",
    "keywords": [
      "šifrování certifikátem",
      "podpis s voskovou pečetí",
      "digitální podpis",
      "asymetrické šifrování",
      "podpis PKCS7"
    ],
    "description": "\n      <p>3D vosková pečeť a šifrování certifikátem poskytuje citlivým firemním souborům, diplomům nebo smlouvám zabezpečení vojenské úrovně a prémiový vzhled skutečné pečeti.</p>\n      <p>Po technické stránce nabízí asymetrické šifrování veřejným klíčem: importujte certifikát s veřejným klíčem příjemce (.cer/.crt) a uzamkněte jím datový proud PDF; dešifrovat jej může pouze držitel odpovídajícího soukromého klíče (.pfx). Vytváří také standardní digitální podpisy PKCS#7, které zajišťují integritu dokumentu a ochranu proti neoprávněným úpravám.</p>\n      <p>Vizuálně nabízíme 3D razítko se zlatou nebo červenou voskovou pečetí. Při podpisu krásně vykreslené razítko dosedne s uspokojivým mechanickým zvukem a zanechá na stránce 3D voskovou pečeť s realistickými výškovými rozdíly díky normálovým mapám a stékajícím voskem, obklopenou zářícími kryptografickými stopami.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrát PDF a certifikát",
        "description": "Přidejte PDF a importujte svůj podpisový certifikát (.pfx) nebo veřejný certifikát příjemce (.cer)."
      },
      {
        "step": 2,
        "title": "Umístit 3D razítko",
        "description": "Přetáhněte pečeť na požadované místo v náhledu dokumentu a zvolte styl vosku (např. zlatý, karmínový)."
      },
      {
        "step": 3,
        "title": "Otisknout a podepsat",
        "description": "Klikněte na spustit, sledujte obřad otisknutí 3D voskové pečeti a vytvořte digitální podpis s vzhledem skutečné pečeti."
      },
      {
        "step": 4,
        "title": "Stáhnout zabezpečené PDF",
        "description": "Uložte výsledný dokument, který je nyní kryptograficky uzamčen a opatřen pečetí."
      }
    ],
    "useCases": [
      {
        "title": "Diplomy a certifikáty",
        "description": "Opatřete digitální diplomy a ocenění hodnotnými 3D voskovými pečetěmi, podloženými skutečnými digitálními podpisy.",
        "icon": "award"
      },
      {
        "title": "Důvěrné smlouvy",
        "description": "Uzamkněte citlivé smlouvy veřejným certifikátem klienta, aby je mohla odemknout pouze jeho zabezpečená fyzická čipová karta.",
        "icon": "shield-alert"
      },
      {
        "title": "Oficiální tiskové zprávy",
        "description": "Digitálně podepisujte veřejná oznámení a zabraňte tak zlomyslným úpravám textu nebo podvrhům.",
        "icon": "stamp"
      }
    ],
    "faq": [
      {
        "question": "Je vosková pečeť jen obrázek, nebo skutečný podpis?",
        "answer": "Obojí. Systém vykreslí neuvěřitelně realistický 3D otisk vosku s hloubkou pomocí normálových map (vizuální vrstva) a do PDF zakóduje pravý kryptografický podpis PKCS#7 odolný proti neoprávněným úpravám (datová vrstva)."
      },
      {
        "question": "Co je „šifrování založené na certifikátu“?",
        "answer": "Jde o šifrování bez hesla. Soubor zašifrujete veřejným klíčem příjemce. Čtečka pak automaticky vyhledá jeho místní soukromý certifikát a soubor bez problémů dešifruje, což zajišťuje silné zabezpečení."
      },
      {
        "question": "Mohu si přizpůsobit vzhled razítka?",
        "answer": "Ano. Nabízíme několik motivů, například vodoznak PDFCraft nebo královský erb, a v panelu můžete upravit poloměr rozteklého vosku i hloubku otisku normálové mapy."
      }
    ]
  },
  "passport-id-composer": {
    "title": "Oboustranná kopie dokladů",
    "metaDescription": "Okamžitě umístěte přední i zadní stranu občanského průkazu nebo pasu na jednu stránku A4 s volitelným ochranným vodoznakem proti zneužití.",
    "keywords": [
      "kopie občanského průkazu",
      "kopie pasu na a4",
      "oboustranná kopie na a4",
      "tisk občanského průkazu",
      "ochranný vodoznak"
    ],
    "description": "\n      <p>Oboustranná kopie pasů a dokladů je mimořádně užitečný nástroj pro běžné firemní i osobní záležitosti.</p>\n      <p>Při zakládání bankovního účtu, nástupu do zaměstnání nebo podpisu smluv často potřebujeme kopii obou stran průkazu. Tento nástroj přijme obrázky nebo stránky PDF přední a zadní strany a přesně je rozmístí na jednu stránku A4 v rozlišení odpovídajícím standardnímu rozvržení.</p>\n      <p>Navíc můžete přidat vlastní průsvitný ochranný vodoznak (např. „POUZE PRO ÚČELY NÁSTUPU“), který zabrání neoprávněnému opětovnému použití dokumentu. Nechybí ani vizuální efekt zářícího laserového paprsku skeneru kopírky pro prémiový dojem.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrát soubory dokladu",
        "description": "Nahrajte fotografie nebo skeny přední a zadní strany průkazu či pasu (nejvýše 2 soubory)."
      },
      {
        "step": 2,
        "title": "Nastavit ochranný vodoznak",
        "description": "Zadejte vlastní překryvný text, který omezí neoprávněné kopírování dokumentu."
      },
      {
        "step": 3,
        "title": "Sestavit a stáhnout",
        "description": "Klikněte na spustit a vytvořte jednostránkové PDF A4 připravené k tisku."
      }
    ],
    "useCases": [
      {
        "title": "Podklady pro nástup zaměstnance",
        "description": "Rychle zarovnejte kopie dokladů zaměstnanců a opatřete je ochranným vodoznakem.",
        "icon": "user"
      },
      {
        "title": "Úřady a banky",
        "description": "Připravte standardizované výtisky dokladů splňující požadavky na fyzický archiv.",
        "icon": "landmark"
      },
      {
        "title": "Záložní kopie na cesty",
        "description": "Umístěte stránky pasu a údaje o vízech na jeden společný list A4.",
        "icon": "plane"
      }
    ],
    "faq": [
      {
        "question": "Zakryjí vodoznaky textové údaje na dokladu?",
        "answer": "Ne. Vodoznak se vykresluje s pečlivě vyladěnou průhledností 15 %, která brání padělání, aniž by zhoršila čitelnost textu nebo fotografie."
      },
      {
        "question": "Odpovídá velikost výsledného průkazu skutečnosti?",
        "answer": "Ano. Průkaz se vykreslí ve standardním fyzickém rozměru 85,6 mm × 54 mm, přesně v měřítku na stránce A4."
      },
      {
        "question": "Podporuje i řidičské průkazy?",
        "answer": "Ano, skvěle funguje se skeny jakýchkoli dokladů ve formátu karty."
      }
    ]
  },
  "annotation-exporter": {
    "title": "Export anotací",
    "metaDescription": "Extrahujte z PDF komentáře, poznámky, zvýraznění a podtržení a uspořádejte je do poznámkových bloků Markdown/JSON podle kapitol osnovy.",
    "keywords": [
      "export anotací",
      "extrahovat zvýraznění z pdf",
      "poznámky ze čtečky pdf",
      "poznámky v markdown podle osnovy",
      "pomocník pro shrnutí učiva"
    ],
    "description": "\n      <p>Chytrý export anotací je výkonný pracovní prostor, který naplno využije hodnotu vašich anotací v PDF.</p>\n      <p>Při rešerši literatury nebo čtení obsáhlých e-knih hojně používáme zvýraznění a rychlé poznámky. Tento nástroj deserializuje nízkoúrovňový slovník PDF <code>/Annots</code> a extrahuje všechna zvýraznění, poznámky, podtržení i ručně kreslené inkoustové značky.</p>\n      <p>Komentáře automaticky přiřadí k příslušným nadpisům osnovy a vytvoří strukturovaný poznámkový blok v Markdown nebo JSON s odkazy na stránky. Sledujte, jak vaše zvýraznění elegantně připlouvají do panelu poznámek z matného skla.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Importovat PDF s anotacemi",
        "description": "Nahrajte libovolnou esej nebo knihu v PDF, která obsahuje vaše podtržení, zvýraznění nebo komentáře."
      },
      {
        "step": 2,
        "title": "Nastavit filtry a formát",
        "description": "Vyberte typy anotací, které chcete extrahovat, a zvolte Markdown nebo JSON."
      },
      {
        "step": 3,
        "title": "Extrahovat poznámky",
        "description": "Klikněte na spustit, čímž se zpracují komentáře a sestaví se shrnutí podle osnovy."
      }
    ],
    "useCases": [
      {
        "title": "Syntéza vědecké literatury",
        "description": "Extrahujte poznámky z četby více článků do šablon Markdown a okamžitě sestavte rešerši literatury.",
        "icon": "graduation-cap"
      },
      {
        "title": "Sestavení studijního deníku",
        "description": "Shromážděte cenné postřehy a osobní poznámky z učebnic do databází Obsidian.",
        "icon": "book"
      },
      {
        "title": "Společná revize dokumentů",
        "description": "Shromážděte připomínky od různých členů týmu a vytvořte z nich seznamy úkolů.",
        "icon": "users"
      }
    ],
    "faq": [
      {
        "question": "Dokáže extrahovat ručně kreslené tahy z tabletu?",
        "answer": "Ano. Pokud jsou ručně kreslené značky uloženy jako standardní inkoustové anotace PDF, nástroj je dokáže přesně oddělit a uspořádat podle jejich umístění na stránkách."
      },
      {
        "question": "Proč jsou některá extrahovaná zvýraznění prázdná?",
        "answer": "Pokud je PDF neprohledávatelný obrazový sken bez textové vrstvy, zvýraznění obsahují pouze souřadnice. Nejprve na PDF spusťte OCR a teprve poté anotace extrahujte."
      },
      {
        "question": "Vedou odkazy v Markdown zpět do PDF?",
        "answer": "Exportovaný soubor uvádí přesná čísla stránek a původní nadpisy osnovy, takže dohledání v dokumentu je snadné."
      }
    ]
  },
  "batch-watermark-remover": {
    "title": "Dávkové odstranění vodoznaků",
    "metaDescription": "Fyzicky odstraňte řetězce vodoznaků a obrázky XObject z obsahového proudu PDF, aniž by se narušilo rozvržení.",
    "keywords": [
      "odstranit vodoznak",
      "mazání vodoznaku z pdf",
      "vyčištění obsahového proudu",
      "dávkové odstranění vodoznaků",
      "odstranit vodoznak koncept"
    ],
    "description": "\n      <p>Dávkové odstranění vodoznaků je špičkový nástroj pro čištění PDF, který dokumenty fyzicky očistí.</p>\n      <p>Běžné nástroje na odstranění vodoznaků obvykle jen překryjí vodoznak bílými bloky nebo naruší rozestupy v dokumentu. Tento nástroj využívá spolehlivou techniku <strong>čištění obsahového proudu</strong>.</p>\n      <p>Analyzuje nízkoúrovňové vykreslovací operátory každé stránky, identifikuje konkrétní příkazy s řetězci vodoznaků (např. „Důvěrné“, „KONCEPT“) nebo obrázkové objekty pozadí a fyzicky je odstraní nebo přepíše. Vodoznaky zcela zmizí a původní formátování i kvalita vektorů zůstanou zachovány.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrát soubor s vodoznakem",
        "description": "Poskytněte PDF dokument s komerčními logy nebo bezpečnostními štítky."
      },
      {
        "step": 2,
        "title": "Určit cílový vodoznak",
        "description": "Zadejte přesný řetězec k odstranění nebo zapněte čištění průsvitných obrázků XObject."
      },
      {
        "step": 3,
        "title": "Spustit fyzické vyčištění",
        "description": "Klikněte na spustit a operátory obsahu budou s vysokou přesností vyčištěny."
      }
    ],
    "useCases": [
      {
        "title": "Archivace firemních dokumentů",
        "description": "Odstraňte neaktuální vodoznaky „Důvěrné“ nebo „Koncept“ před zveřejněním dokumentů.",
        "icon": "archive"
      },
      {
        "title": "Odstranění rušivého pozadí",
        "description": "Odstraňte výrazné obrázky na pozadí, které čtenáře odvádějí od textu.",
        "icon": "eye"
      },
      {
        "title": "Opětovné použití dokumentů",
        "description": "Vyčistěte staré prvky značky v zápatí stránek a snadno použijte nové firemní šablony.",
        "icon": "copy"
      }
    ],
    "faq": [
      {
        "question": "Lze odstraněné vodoznaky obnovit?",
        "answer": "Ne. Na rozdíl od vizuálních masek přepisujeme binární proud stránky a operátory mažeme, takže nezůstanou žádné stopy."
      },
      {
        "question": "Podporuje složité přechody?",
        "answer": "Pokud je vodoznak uložen jako samostatný textový uzel nebo obrázek XObject, nástroj jej dokáže oddělit a fyzicky odstranit."
      },
      {
        "question": "Změní se běžný text stránky?",
        "answer": "Ne. Čisticí engine cílí pouze na operátory odpovídající zadanému vodoznaku; běžný text zůstane nedotčen."
      }
    ]
  },
  "smart-data-redactor": {
    "title": "Začernění citlivých údajů",
    "metaDescription": "Automaticky rozpoznejte telefonní čísla, e-maily a identifikační čísla, překryjte je neprůhlednými maskami a fyzicky vymažte text pod nimi.",
    "keywords": [
      "automatické začernění",
      "začernit osobní údaje v pdf",
      "odstranit e-mail z pdf",
      "skrýt telefonní čísla",
      "nástroj pro soulad s gdpr"
    ],
    "description": "\n      <p>Chytré začernění osobních údajů je automatizovaný nástroj, který zajišťuje spolehlivou ochranu soukromí v dokumentech.</p>\n      <p>Pouhé překrytí černými obdélníky v běžných editorech není bezpečné, protože text pod nimi lze stále zkopírovat. Tento nástroj využívá skutečné <strong>rozpoznávání vzorů pomocí NLP a fyzické čištění obsahového proudu</strong>.</p>\n      <p>Vyhledá v dokumentu e-maily, telefonní čísla, rodná čísla nebo vlastní klíčová slova, překryje dané souřadnice prémiovou matně černou maskou a trvale přepíše proud znaků řetězcem <code>[REDACTED]</code>, čímž zabrání únikům přes kopírování a vkládání.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrát cílové PDF",
        "description": "Poskytněte smlouvu nebo výpis obsahující citlivé údaje o zákaznících."
      },
      {
        "step": 2,
        "title": "Vybrat pravidla začernění",
        "description": "Zaškrtněte cílové vzory (e-mail, telefon, identifikační číslo) nebo zadejte vlastní citlivá slova."
      },
      {
        "step": 3,
        "title": "Automaticky začernit a stáhnout",
        "description": "Klikněte na spustit, čímž se překryjí bezpečné masky a vymažou textové proudy."
      }
    ],
    "useCases": [
      {
        "title": "Sdílení obchodních smluv",
        "description": "Bezpečně zveřejňujte firemní dokumenty se skrytými platy, telefonními čísly nebo e-maily.",
        "icon": "file-signature"
      },
      {
        "title": "Anonymizace databáze životopisů",
        "description": "Odstraňte jména uchazečů, kontaktní údaje nebo adresy v souladu s přísnými předpisy o ochraně soukromí.",
        "icon": "user-check"
      },
      {
        "title": "Distribuce finančních výkazů",
        "description": "Před zveřejněním zpráv skryjte konkrétní čísla účtů nebo jména akcionářů.",
        "icon": "pie-chart"
      }
    ],
    "faq": [
      {
        "question": "Opravdu nelze začerněné údaje zkopírovat?",
        "answer": "Ano. Přepisujeme obsahový proud stránky a znaky mažeme. Při kopírování ze začerněné oblasti získáte pouze řetězec „[REDACTED]“."
      },
      {
        "question": "Funguje to i u naskenovaných obrazových PDF?",
        "answer": "Tento nástroj pracuje s vektorovými textovými proudy. U naskenovaných obrázků nejprve použijte náš nástroj OCR nebo obsah ořízněte ručně."
      },
      {
        "question": "Uloží se do souboru červený zaměřovací HUD?",
        "answer": "Ne, jde pouze o efektní interaktivní efekt načítání v rozhraní. Výstupní PDF obsahuje standardní čisté černé obdélníky."
      }
    ]
  },
  "bookmarks-auto-generator": {
    "title": "Automatické vytvoření záložek",
    "metaDescription": "Analyzujte hierarchii rozvržení dokumentu a regulární výrazy (např. Kapitola) a vytvořte a vložte katalog záložek /Outline.",
    "keywords": [
      "vytvořit záložky pdf",
      "tvorba osnovy pdf",
      "vložit záložky do pdf",
      "osnova podle velikosti písma",
      "generátor stromu osnovy"
    ],
    "description": "\n      <p>Automatické vytvoření záložek vnese do dlouhých, nestrukturovaných PDF dokumentů naprostou přehlednost.</p>\n      <p>Procházet knihy nebo brožury bez navigační osnovy je utrpení. Tento nástroj analyzuje typografickou hierarchii (například velikost a tloušťku písma) spolu s pravidly regulárních výrazů (např. „Kapitola 1“, „Oddíl 1.1“) a automaticky z nich odvodí nadpisy.</p>\n      <p>Nadpisy pak sestaví a vloží přímo do slovníku PDF <code>/Outline</code>. Libovolný standardní prohlížeč pak zobrazí přehledně strukturovaný víceúrovňový navigační panel; nástroj nabízí i interaktivní 3D náhled stromu osnovy.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrát nestrukturované PDF",
        "description": "Nahrajte rozsáhlé brožury, odborné články nebo e-knihy bez postranního panelu s obsahem."
      },
      {
        "step": 2,
        "title": "Doladit pravidla nadpisů",
        "description": "Nastavte strategie s minimální prahovou velikostí písma a pravidly shody."
      },
      {
        "step": 3,
        "title": "Sestavit a vložit",
        "description": "Klikněte na spustit, čímž se vykreslí uzly osnovy a záložky se fyzicky zapíšou do souboru."
      }
    ],
    "useCases": [
      {
        "title": "Uspořádání technických příruček",
        "description": "Automaticky sestavte víceúrovňové kapitoly standardních příruček a ušetřete hodiny ručního rejstříkování.",
        "icon": "tool"
      },
      {
        "title": "Příprava závěrečné práce",
        "description": "Vložte přehledné vnořené záložky odpovídající přesným akademickým požadavkům na odevzdání.",
        "icon": "graduation-cap"
      },
      {
        "title": "Optimalizace navigace e-knih",
        "description": "Rozčleňte naskenované textové publikace do přehledných kapitol pro tablety a mobilní čtečky.",
        "icon": "tablet"
      }
    ],
    "faq": [
      {
        "question": "Dokáže rozpoznat vlastní formáty kapitol?",
        "answer": "Ano. V postranním panelu můžete přidat vlastní regulární výrazy (např. `^Part\\s+\\w+`) pro specifická rozvržení."
      },
      {
        "question": "Ovlivní to vzhled stránek?",
        "answer": "Ne. Nástroj přidá pouze interní strukturovaný katalog záložek. Text a vizuální prvky stránek zůstanou nedotčeny."
      },
      {
        "question": "Kolik úrovní záložek je podporováno?",
        "answer": "Nástroj podporuje hluboce vnořené struktury záložek, takže lze vytvořit členění na kapitoly, oddíly i pododdíly."
      }
    ]
  },
  "batch-barcode-injector": {
    "title": "Dávkové vložení čárových kódů",
    "metaDescription": "Vytvořte vlastní kódy QR/Code128 a přesně je vložte do velkého počtu stránek PDF pomocí zarovnávacích vodítek.",
    "keywords": [
      "vytvořit qr kód v pdf",
      "vložit čárový kód do pdf",
      "inventární štítek pdf",
      "umístění qr kódu podle souřadnic",
      "razítko s čárovým kódem"
    ],
    "description": "\n      <p>Přesné dávkové vkládání čárových kódů propojuje digitální evidenci majetku s fyzickým indexováním dokumentů.</p>\n      <p>Ve skladování, při kontrole smluv nebo v logistice často potřebujeme na faktury nebo karty zařízení umístit jedinečné čárové kódy. Tento nástroj to neuvěřitelně usnadňuje.</p>\n      <p>Vytvořte dobře čitelné QR kódy nebo čárové kódy Code128 a umístěte je v elegantním pracovním prostoru se zelenými laserovými vodítky. Při umístění zazní čisté pípnutí skeneru pro prémiovou odezvu.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrát dokument",
        "description": "Přetáhněte sem jedno- nebo vícestránková PDF se smlouvami či dodacími listy."
      },
      {
        "step": 2,
        "title": "Nastavit souřadnice kódu",
        "description": "Zvolte typ kódu a jeho hodnotu a přetažením rámečku určete souřadnice umístění."
      },
      {
        "step": 3,
        "title": "Vložit a stáhnout",
        "description": "Klikněte na spustit a vrstva s kódem se vykreslí na vybrané stránky."
      }
    ],
    "useCases": [
      {
        "title": "Ověřování pravosti smluv",
        "description": "Umístěte do záhlaví smluv jedinečný QR kód s údaji chránícími proti padělání.",
        "icon": "file-check"
      },
      {
        "title": "Označení dodacích listů",
        "description": "Umístěte čárové kódy Code128 na určená místa pro rychlé ověření skladovou čtečkou.",
        "icon": "truck"
      },
      {
        "title": "Evidenční karty majetku",
        "description": "Přidejte na evidenční listy fyzického vybavení inventární QR kódy s údaji o údržbě.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Jsou vytvořené čárové kódy dobře čitelné?",
        "answer": "Ano. Vkládáme bezeztrátové obrázky PNG ve vysokém rozlišení, které zůstanou ostré i při tisku ve velmi malých rozměrech."
      },
      {
        "question": "Mohu na každou stránku vložit jinou hodnotu?",
        "answer": "V současnosti dávkové zpracování vkládá stejný nastavený kód na všechny vybrané stránky. Import více hodnot z Excelu je plánován v některé z budoucích aktualizací."
      },
      {
        "question": "Co znamená souřadnice `pt`?",
        "answer": "`pt` (bod) je standardní fyzická jednotka PDF (72 pt = 1 palec). Stránka A4 má rozměr 595 × 842 pt."
      }
    ]
  },
  "signature-ink-optimizer": {
    "title": "Extrahovat podpis a razítko",
    "metaDescription": "Extrahujte ručně psané podpisy a červená firemní razítka z fotografií, odstraňte šum a stíny papíru a exportujte je jako průhledné PNG.",
    "keywords": [
      "extrahovat podpis",
      "podpis s průhledným pozadím",
      "vyčistit fotku razítka",
      "zostřit vlastnoruční podpis",
      "vytvořit razítko png"
    ],
    "description": "\n      <p>Optimalizátor inkoustu podpisů a razítek funguje jako profesionální čistič inkoustu s vysokou věrností.</p>\n      <p>Podpisy nebo firemní razítka vyfocené telefonem často trpí nažloutlým odstínem papíru, nerovnoměrnými stíny a pomačkanou stránkou. Pokud je vložíte přímo do PDF smlouvy, výsledek působí amatérsky.</p>\n      <p>Tento nástroj odděluje alfa kanál na základě jasu a barevného prostoru. Pozadí papíru zcela vybělí a zároveň zostří červenou barvu razítka (Chroma Ink) i černou barvu rukopisu. Výsledkem je kvalitní průhledné razítko ve formátu PNG se skutečnou texturou inkoustu.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrát fotku razítka",
        "description": "Nahrajte fotografii svého podpisu nebo razítka pořízenou telefonem."
      },
      {
        "step": 2,
        "title": "Upravit posuvníky čištění",
        "description": "Pomocí posuvníků kontrastu a jasu v reálném čase oddělte šum pozadí."
      },
      {
        "step": 3,
        "title": "Stáhnout čistý podpis",
        "description": "Exportujte průhledné PNG připravené k vložení do oficiálních dokumentů a smluv."
      }
    ],
    "useCases": [
      {
        "title": "Příprava profesionálního elektronického podpisu",
        "description": "Převeďte šedé fotografie podpisu na pěkné průhledné vrstvy pro podepisování smluv.",
        "icon": "file-signature"
      },
      {
        "title": "Vyčištění firemního razítka",
        "description": "Vyčistěte skeny fyzických razítek od šumu papírových vláken a připravte ostrá průhledná razítka.",
        "icon": "stamp"
      },
      {
        "title": "Extrakce kresby",
        "description": "Oddělte černé tahy z kreseb ve skicáku pro snadné kolorování ve Photoshopu.",
        "icon": "edit"
      }
    ],
    "faq": [
      {
        "question": "Čím se adaptivní extrakce alfa kanálu liší od běžného klíčování?",
        "answer": "Standardní chroma klíčování často způsobí, že detaily tahů podpisu vypadají kostrbatě a pixelovatě. Náš algoritmus odděluje pouze bílý či nažloutlý šum pozadí a vyhlazuje okraje inkoustu."
      },
      {
        "question": "Jaké formáty obrázků jsou podporovány?",
        "answer": "Podporujeme JPG, JPEG a PNG. Nejlepších výsledků dosáhnete, pokud podpis vyfotíte za jasného a rovnoměrného osvětlení."
      },
      {
        "question": "Změní se detaily rukopisu?",
        "answer": "Ne. Filtrování pixelů pracuje s původními souřadnicemi, zvyšuje kontrast a zároveň zachovává skutečnou texturu tahů."
      }
    ]
  },
  "dead-link-debugger": {
    "title": "Opravit nefunkční odkazy",
    "metaDescription": "Prohledejte všechny URL akce a anotace odkazů v PDF, zjistěte jejich dostupnost a vložte přesměrování.",
    "keywords": [
      "nefunkční odkazy v pdf",
      "upravit hypertextové odkazy v pdf",
      "kontrola odkazů v pdf",
      "přesměrovat odkaz v pdf",
      "změnit url v pdf"
    ],
    "description": "\n      <p>Ladicí nástroj nefunkčních odkazů je hloubkový editor struktury, který zaručuje kvalitu interaktivních odkazů v publikovaných souborech.</p>\n      <p>Nefunkční URL adresy (404/500) v příručkách, odborných studiích nebo návodech snižují důvěryhodnost značky. Tento nástroj vám umožní pohodlně spravovat všechny hypertextové odkazy.</p>\n      <p>Analyzuje nízkoúrovňové slovníky <code>/Link</code> na každé stránce, ověřuje je a zobrazuje stav odkazů v interaktivní tabulce (červeně nefunkční odkazy, oranžově přesměrování). Stačí zadat novou URL přesměrování a nástroj zapíše nový cíl přímo zpět do binárního datového proudu PDF.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrát cílový dokument",
        "description": "Nahrajte PDF příručku nebo katalog s odkazy, které chcete zkontrolovat."
      },
      {
        "step": 2,
        "title": "Prohledat a aktualizovat",
        "description": "Nechte nástroj extrahovat všechny URL. U nefunkčních položek zadejte nové URL přesměrování."
      },
      {
        "step": 3,
        "title": "Uložit přesměrování",
        "description": "Kliknutím na Spustit přepíšete akce /URI a stáhnete opravené PDF."
      }
    ],
    "useCases": [
      {
        "title": "Rychlá oprava odkazů v letácích",
        "description": "Okamžitě opravte chybné URL v publikovaných letácích bez nutnosti otevírat původní grafický editor.",
        "icon": "refresh-cw"
      },
      {
        "title": "Kontrola odkazů v bibliografii",
        "description": "Ověřte odkazy v odborné bibliografii ve zprávách a aktualizujte reference, aby zůstaly důvěryhodné.",
        "icon": "book"
      },
      {
        "title": "Aktualizace při změně firemní identity",
        "description": "Hromadně aktualizujte staré URL ve firemních PDF při změně doménového jména společnosti.",
        "icon": "globe"
      }
    ],
    "faq": [
      {
        "question": "Proč není dostupnost odkazů plně ověřována online?",
        "answer": "Webové prohlížeče uplatňují přísné zásady CORS, které blokují přímou kontrolu odkazů na jiné domény. Náš nástroj odkazy přehledně vypíše a umožní vám je ručně opravit."
      },
      {
        "question": "Změní se tím vzhled textu na stránce?",
        "answer": "Ne. Mění se pouze podkladová navigační akce `/URI`. Viditelný text odkazu zůstane beze změny."
      },
      {
        "question": "Podporuje úpravu interních záložek stránek?",
        "answer": "Tento nástroj pracuje s externími hypertextovými odkazy `/URI`. Pro interní navigaci v dokumentu použijte náš nástroj pro interaktivní obsah."
      }
    ]
  },
  "interactive-toc-generator": {
    "title": "Vytvořit interaktivní obsah",
    "metaDescription": "Vytvořte elegantní stránky obsahu, vložte je před samotný text a propojte je interními obousměrnými odkazy GoTo.",
    "keywords": [
      "vytvořit obsah pdf",
      "interaktivní obsah pdf",
      "obousměrný odkaz kotva",
      "vytvořit stránku obsahu pdf",
      "akce přejít na stránku"
    ],
    "description": "\n      <p>Tvůrce interaktivního obsahu přináší do rozsáhlých PDF revoluční zážitek z navigace.</p>\n      <p>Listovat stovkami stránek nestrukturovaného dokumentu a hledat požadovanou kapitolu je frustrující. Tento nástroj proto přináší <strong>obousměrné sestavení obsahu</strong>.</p>\n      <p>Prohledá nadpisy a vytvoří elegantní stránku obsahu inspirovanou origami, kterou vloží hned za titulní stranu. Kromě klikacích odkazů /GoTo pro každý řádek obsahu vloží do rohu každé cílové stránky kapitoly drobnou elegantní plovoucí kotvu „Obsah ↩“. Čtenáři tak mohou okamžitě přeskakovat tam a zpět a užívat si navigaci jako na webu.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrát PDF dokument",
        "description": "Nahrajte zprávu, e-knihu nebo nabídku, která potřebuje interaktivní obsah."
      },
      {
        "step": 2,
        "title": "Nastavit název a umístění obsahu",
        "description": "Upravte hlavní nadpis a zvolte stránku, na kterou se má obsah vložit."
      },
      {
        "step": 3,
        "title": "Propojit kotvy a uložit",
        "description": "Kliknutím na Spustit sestavíte stránky a zapíšete obousměrnou navigaci."
      }
    ],
    "useCases": [
      {
        "title": "Vylepšení výroční zprávy",
        "description": "Vložte za titulní stranu pěknou stránku obsahu, aby akcionáři mohli přecházet mezi finančními grafy.",
        "icon": "file-bar"
      },
      {
        "title": "Obsah závěrečné práce",
        "description": "Rychle sestavte standardní obsah v souladu s formálními požadavky univerzity.",
        "icon": "bookmark"
      },
      {
        "title": "Navigace v provozní příručce",
        "description": "Pomozte čtenářům příručky rychle přejít z listů pro řešení problémů zpět na hlavní obsah.",
        "icon": "check-circle"
      }
    ],
    "faq": [
      {
        "question": "Jak fungují obousměrné kotvy?",
        "answer": "Na stránce obsahu vytvoříme standardní anotace odkazů směřující na příslušné stránky a na všechny cílové stránky kapitol pak vložíme odkaz zpět na stránku obsahu."
      },
      {
        "question": "Naruší vložení stránky obsahu stávající čísla stránek?",
        "answer": "Ne. Při sestavení se počítá s posunem způsobeným nově vloženou stránkou obsahu, takže všechny cíle odkazů zůstanou správné."
      },
      {
        "question": "Je stránka obsahu použitelná i po vytištění?",
        "answer": "Ano. Vytvořený obsah uvádí přehledná čísla fyzických stránek pro čtenáře papírové verze a na obrazovce zároveň nabízí klikací odkazy."
      }
    ]
  },
  "global-invoice-parser": {
    "title": "Přeložit a převést fakturu",
    "metaDescription": "Extrahujte celkové částky z mezinárodních faktur, proveďte přepočet měn a vložte do stránky interaktivní kurzovní přehled s efektem matného skla.",
    "keywords": [
      "přeložit fakturu",
      "převod měny na faktuře",
      "kalkulačka kurzu pdf",
      "razítko v místní měně",
      "nástroj pro zahraniční faktury"
    ],
    "description": "\n      <p>Globální překladač faktur přináší maximální přehlednost mezinárodním finančním týmům i zahraničním nákupčím.</p>\n      <p>Zpracování faktur v různých měnách ($ , € , ¥) často znamená zdlouhavé ruční počítání. Tento nástroj umožňuje <strong>překlad popisků přímo v dokumentu a převod podle aktuálních kurzů</strong>.</p>\n      <p>Prohledá dokument a najde celkové částky, provede výpočty podle referenčních kurzů a na okraj stránky vloží elegantní poloprůhledný „kurzovní přehled“ s efektem matného skla. Čísla se zobrazí s působivým efektem rolujících číslic jako na výherním automatu, díky čemuž máte nad mezinárodní fakturací plnou kontrolu.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrát fakturu v PDF",
        "description": "Importujte jakoukoli fakturu vystavenou v cizí měně (např. USD, EUR, JPY)."
      },
      {
        "step": 2,
        "title": "Vybrat místní měnu",
        "description": "Zvolte svou místní měnu (např. CZK) a zadejte vlastní nebo aktuální směnný kurz."
      },
      {
        "step": 3,
        "title": "Vložit kurzovní přehled",
        "description": "Kliknutím na Spustit vložíte působivý kurzovní přehled připravený pro účetnictví."
      }
    ],
    "useCases": [
      {
        "title": "Proplácení zahraničních pracovních cest",
        "description": "Převeďte cestovní účty do místní měny a vložte do nich podrobnosti přepočtu pro snazší účetní zpracování.",
        "icon": "plane"
      },
      {
        "title": "Kontrola nákupů ze zahraničí",
        "description": "Přeložte sloupce faktury a zjistěte skutečnou cenu zboží z e-shopů.",
        "icon": "credit-card"
      },
      {
        "title": "Účetnictví mezinárodních firem",
        "description": "Vkládejte jednotné kurzovní přehledy do firemních faktur a zjednodušte si audit na konci roku.",
        "icon": "folder-open"
      }
    ],
    "faq": [
      {
        "question": "Jak nástroj rozpozná částky na faktuře?",
        "answer": "Prohledává textový obsah, hledá symboly měn a analyzuje významové nadpisy jako „Celkem“ nebo „K úhradě“, aby našel konečnou částku faktury."
      },
      {
        "question": "Načítají se směnné kurzy v reálném čase?",
        "answer": "Ano. Ve výchozím nastavení se základní kurzy načítají ze standardních finančních API. Pro interní audity můžete zadat i vlastní kurzy."
      },
      {
        "question": "Nezakryje vložený přehled důležité údaje faktury?",
        "answer": "Nástroj prohledá okraje stránky a najde optimální umístění. Přehled je navíc poloprůhledný, takže elegantně zapadne do rozvržení."
      }
    ]
  },
  "pdf-deskew-aligner": {
    "title": "Automaticky narovnat sken",
    "metaDescription": "Okamžitě rozpoznejte a automaticky opravte natočení a zarovnání stránek v PDF z fotek mobilem nebo ze skeneru.",
    "keywords": [
      "narovnat pdf",
      "zarovnání naskenované stránky",
      "automaticky otočit stránku pdf",
      "narovnat naskenovaný papír",
      "nástroj pro zarovnání dokumentu"
    ],
    "description": "\n      <p>Zarovnávač skenů PDF je nezbytný nástroj pro opravu nakřivo naskenovaných dokumentů a fotek z mobilu.</p>\n      <p>Dokumenty naskenované plochým skenerem nebo rychle vyfocené chytrým telefonem bývají často mírně pootočené. Nakloněné stránky působí velmi neprofesionálně, zhoršují čitelnost textu a při tisku mohou být oříznuté okraje.</p>\n      <p>Tento nástroj využívá spolehlivé <strong>algoritmy Radonovy transformace a Houghovy detekce čar</strong>, které prohledají přechody a řádky textu za méně než 20 ms. Přesně změří sklon s přesností na 0,01 stupně a provede otočení na úrovni pixelů v Canvasu, takže vaše účtenky, smlouvy a brožury budou opět dokonale geometricky zarovnané.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrát nakřivo naskenované PDF",
        "description": "Nahrajte jakékoli PDF s pootočenými nebo špatně zarovnanými naskenovanými dokumenty."
      },
      {
        "step": 2,
        "title": "Analyzovat a doladit",
        "description": "Nástroj automaticky rozpozná úhel sklonu a vykreslí pomocnou mřížku. V případě potřeby úhel upravte ručně."
      },
      {
        "step": 3,
        "title": "Narovnat a stáhnout",
        "description": "Kliknutím na Spustit stránky plynule otočíte s gyroskopickou animací a stáhnete zarovnané PDF."
      }
    ],
    "useCases": [
      {
        "title": "Archivace účtenek a smluv",
        "description": "Narovnejte rychlé skeny smluv pořízené mobilem v ruce, než je uložíte jako oficiální digitální archiv v PDF.",
        "icon": "file-text"
      },
      {
        "title": "Digitalizace odborných knih",
        "description": "Opravte skeny knih z mikrofilmů, u nichž řádky textu ujíždějí z vodorovných okrajů.",
        "icon": "book"
      },
      {
        "title": "Opravování domácích úkolů",
        "description": "Narovnejte fotky domácích úkolů pořízené telefony studentů a ulevte očím opravujících učitelů.",
        "icon": "edit-3"
      }
    ],
    "faq": [
      {
        "question": "Jak se rozpozná sklon dokumentu?",
        "answer": "Na řádcích textu provádíme rychlé Houghovy projekce. Protože tištěné dokumenty mají zřetelné vodorovné rozestupy, nalezení úhlu s maximálním rozptylem přesně určí natočení."
      },
      {
        "question": "Neoříznou se tím okraje stránky?",
        "answer": "Ne. Nástroj vypočítá hranice otočené stránky a Canvas automaticky rozšíří o odsazení, takže veškerý text u okrajů zůstane zachován bez oříznutí."
      },
      {
        "question": "Funguje to i u dokumentů plných diagramů?",
        "answer": "Ano. Pokud dokument obsahuje alespoň základní strukturu čar nebo běžné odstavce, naše algoritmy přesně určí hlavní úhel čtení."
      }
    ]
  },
  "pdf-two-column-reflower": {
    "title": "Převést dvousloupcový článek na jeden sloupec",
    "metaDescription": "Analyzujte strukturu dvousloupcových odborných článků IEEE/ACM v PDF a převeďte je na responzivní jednosloupcové rozvržení pro pohodlné čtení na mobilu a čtečce e-knih.",
    "keywords": [
      "dvousloupcové pdf na jeden sloupec",
      "přeformátovat odborný článek",
      "čtení článků na mobilu",
      "přeformátování pdf pro čtečku",
      "články vhodné pro mobil"
    ],
    "description": "\n      <p>Převodník dvousloupcových odborných článků řeší největší problém digitálního výzkumu: čtení článků na běžných mobilních displejích.</p>\n      <p>Dvousloupcová rozvržení (používaná IEEE, ACM, Nature a v řadě významných zpráv) jsou navržena pro papír A4. Jejich procházení na telefonu nebo čtečce Kindle vyžaduje neustálé přibližování, posouvání doprava, rolování dolů a zase zpět nahoru. Plynulé porozumění textu se tím zcela vytrácí.</p>\n      <p>Náš procesor využívá <strong>inteligentní přeformátování odstavců a detekci svislých dělicích mezer</strong>. Analyzuje souřadnice znaků, najde mezery mezi sloupci, rozdělí rozvržení a poskládá části pod sebe (nejprve levý sloupec, pak pravý). Grafy, vzorce i nadpisy se plynule přeskupí do jednosloupcového PDF, které lze pohodlně posouvat svisle.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrát dvousloupcové PDF",
        "description": "Nahrajte článek z časopisu IEEE/ACM nebo jiné vícesloupcové PDF."
      },
      {
        "step": 2,
        "title": "Zkontrolovat dělicí mezeru",
        "description": "Ověřte červená svislá vodítka rozdělení. Upravte okraje, aby se prvky nepřekrývaly."
      },
      {
        "step": 3,
        "title": "Přeformátovat a uložit",
        "description": "Kliknutím na Spustit převedete stránky do plynulého rozvržení a okamžitě je stáhnete."
      }
    ],
    "useCases": [
      {
        "title": "Import do čtečky e-knih",
        "description": "Převeďte husté dvousloupcové texty na pohodlné jednosloupcové dokumenty vhodné pro displeje Kindle a Onyx.",
        "icon": "tablet"
      },
      {
        "title": "Čtení na telefonu v metru",
        "description": "Čtěte odbornou literaturu pohodlně jednou rukou svislým posouváním během cesty.",
        "icon": "smartphone"
      },
      {
        "title": "Formátování archivních periodik",
        "description": "Převeďte staré noviny s úzkými sloupci do čitelného jednosloupcového formátu vhodného pro web.",
        "icon": "book-open"
      }
    ],
    "faq": [
      {
        "question": "Jak se zachází se širokými grafy a rovnicemi?",
        "answer": "Náš nástroj používá „detekci prvků přes více sloupců“. Pokud rovnice nebo diagram přesahuje běžnou šířku sloupce, oddělí se jako prvek na celou šířku a zachová si původní proporce bez oříznutí."
      },
      {
        "question": "Změní se tím rozlišení vektorového textu?",
        "answer": "Vůbec ne. Transformační matice textových objektů PDF přepisujeme na úrovni stromu objektů místo rastrování, takže text zůstává 100% vektorový a plně označitelný."
      },
      {
        "question": "Funguje to i u naskenovaných obrazových dokumentů?",
        "answer": "U PDF tvořených pouze obrázky důrazně doporučujeme nejprve použít náš nástroj OCR a teprve poté spustit přeformátování."
      }
    ]
  },
  "pdf-page-resizer-uniform": {
    "title": "Sjednotit velikost stránek PDF",
    "metaDescription": "Hromadně změňte velikost stránek PDF ve smíšených formátech A4, A3 a Letter a sjednoťte je na jednu cílovou velikost s proporcionálním vystředěním a okraji.",
    "keywords": [
      "sjednotit velikost stránek",
      "změnit velikost stránek pdf",
      "spojit pdf různých formátů",
      "normalizace mediabox",
      "hromadné škálování stránek"
    ],
    "description": "\n      <p>Převodník velikosti stránek PDF pro různé formáty je dokonalým nástrojem pro sjednocení nepřehledných a nesourodých firemních dokumentů.</p>\n      <p>Spojením faktur, smluv a doplňujících grafů často vznikne PDF obsahující obří stránky A3 s tabulkami, standardní smlouvy A4 a obálky ve formátu Letter. Listování takovým dokumentem je velmi rušivé a při tisku na kancelářské tiskárně často kvůli nesouladu velikostí dochází k zaseknutí papíru.</p>\n      <p>Tento nástroj přepisuje nízkoúrovňové rámce <code>/MediaBox</code> a <code>/CropBox</code> na každé stránce. Zjistí stávající šířky a výšky, proporcionálně přizpůsobí původní stránky cílové předvolbě (např. standardní A4) a přidá elegantní jednotné okraje, takže celý soubor působí mimořádně upraveně.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrát PDF s různými velikostmi stránek",
        "description": "Nahrajte spojený PDF dokument s nesourodými a nejednotnými velikostmi stránek."
      },
      {
        "step": 2,
        "title": "Vybrat cílovou předvolbu",
        "description": "Zvolte cílovou jednotnou velikost (např. A4, Letter, A3) a přepněte režim škálování."
      },
      {
        "step": 3,
        "title": "Zarovnat a stáhnout",
        "description": "Kliknutím na Spustit zahájíte 3D zarovnání stránek a stáhnete úhledně sjednocené PDF."
      }
    ],
    "useCases": [
      {
        "title": "Firemní nabídky do výběrových řízení",
        "description": "Před tiskem sjednoťte naskenované kvalifikační certifikáty a nabídkové listy A4.",
        "icon": "file-text"
      },
      {
        "title": "Začlenění finančních grafů",
        "description": "Zmenšete široké finanční přehledy cash flow ve formátu A3 na úhledné stránky A4 v souladu s tiskovými standardy.",
        "icon": "layout"
      },
      {
        "title": "Sjednocení okrajů knihy",
        "description": "Převeďte mírně odlišné naskenované stránky knihy na zcela jednotný rozměr pro pohodlné čtení.",
        "icon": "book"
      }
    ],
    "faq": [
      {
        "question": "Nezdeformuje se tím obsah?",
        "answer": "Nikdy. Podporujeme režim „Contain“ (proporcionální zmenšení s bílými pruhy) i „Cover“ (vystředěné oříznutí). Výchozí režim Contain zachovává poměr stran a zabraňuje zkreslení."
      },
      {
        "question": "Zůstanou stávající formuláře a anotace klikací?",
        "answer": "Ano. Algoritmus přenese měřítko na pole souřadnic anotací, takže rámečky odkazů, oblasti podpisů i vstupní pole budou po změně velikosti dokonale zarovnané."
      },
      {
        "question": "Je počet stránek, jejichž velikost mohu změnit, omezen?",
        "answer": "Ne. Všechny operace probíhají lokálně přímo ve vašem prohlížeči pomocí nativního JavaScriptu, takže i rozsáhlá PDF se stovkami stránek zpracujete během několika sekund."
      }
    ]
  },
  "handwriting-ink-contrast-booster": {
    "title": "Zvýraznit inkoust rukopisu",
    "metaDescription": "Extrahujte modré nebo černé ručně psané podpisy z fotografií, vybělte nažloutlou strukturu papíru a výrazně zvyšte kontrast inkoustu pro lepší čitelnost.",
    "keywords": [
      "zvýraznit ručně podepsanou smlouvu",
      "zvýšit kontrast inkoustu",
      "vybělit naskenovaný papír",
      "zostřit vybledlý podpis",
      "extrakce podpisu"
    ],
    "description": "\n      <p>Zesilovač kontrastu inkoustu rukopisu je záchranou při digitalizaci podepsaných smluv a historických rukopisných archivů.</p>\n      <p>Skeny ručně podepsaných dokumentů často působí matně kvůli šedému odlesku skla skeneru, nažloutlému odstínu papíru nebo vybledlému inkoustu. Při opětovném tisku nebo kopírování jsou podpisy rozmazané a nečitelné. Tradiční nástroje pro úpravu kontrastu ztmaví celé pozadí, a vzhled dokumentu tak ještě zhorší.</p>\n      <p>Tento nástroj využívá **adaptivní ekvalizaci histogramu s omezeným kontrastem (CLAHE) a separaci barev podle odstínu**. V bezpečném lokálním zpracování v Canvasu oddělí tahy rukopisu (černé i modré) od podkladu, zcela vybělí stíny a záhyby a vybledlému inkoustu dodá hluboký sytý kontrast, takže vaše dokumenty budou vypadat mimořádně ostře a čistě.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Importovat ručně podepsaný dokument",
        "description": "Nahrajte PDF s vybledlými podpisy, ručně psanými deníky nebo skicami."
      },
      {
        "step": 2,
        "title": "Nastavit filtr inkoustu",
        "description": "Zvolte barevný profil, který chcete oddělit (např. modrý inkoust, černý inkoust nebo oba), a upravte zostření."
      },
      {
        "step": 3,
        "title": "Zostřit a stáhnout",
        "description": "Kliknutím na Spustit projdete barvy efektem radarového skeneru a stáhnete vyčištěné PDF."
      }
    ],
    "useCases": [
      {
        "title": "Oprava podepsaných smluv",
        "description": "Opravte špatně naskenované smlouvy – zostřete podpisy a vybělte pozadí papíru do čistě bílé barvy A4.",
        "icon": "file-check"
      },
      {
        "title": "Archivace rukopisů",
        "description": "Digitalizujte psané zápisníky nebo deníky, získejte zřetelné černé tahy a odstraňte skvrny způsobené stářím.",
        "icon": "book"
      },
      {
        "title": "Obnova historických účetních knih",
        "description": "Obnovte slabé detaily inkoustu ve starých archivních účetních knihách a zachraňte cenné ručně psané záznamy.",
        "icon": "archive"
      }
    ],
    "faq": [
      {
        "question": "Čím se to liší od běžného převodu do stupňů šedi?",
        "answer": "Převod do stupňů šedi promění stíny papíru v šedé tóny. Náš adaptivní algoritmus odděluje jas pozadí a izoluje „spektrum inkoustu“ podpisu, takže pozadí vyčistí do absolutně bílé a okraje tahů ponechá ostré."
      },
      {
        "question": "Ztratí se textura tahů rukopisu?",
        "answer": "Ne. Algoritmus CLAHE pracuje na subpixelové úrovni a zachovává přirozený přítlak pera, slábnutí inkoustu i proměnlivou tloušťku čar."
      },
      {
        "question": "Mohu zachovat červená firemní razítka?",
        "answer": "Ano. Po zapnutí volby „Zachování barevného inkoustu“ nástroj vybělí pozadí papíru a ztmaví písmo, přičemž zachová jasné barvy červených razítek i podpisů modrým inkoustem."
      }
    ]
  },
  "pdf-spine-bookbinder": {
    "title": "Vypočítat šířku hřbetu knihy",
    "metaDescription": "Vypočítejte šířku hřbetu knihy podle počtu stránek a gramáže papíru a vytvořte tisknutelnou šablonu obálky s ryskami pro ohyb hřbetu.",
    "keywords": [
      "kalkulačka hřbetu knihy",
      "tloušťka hřbetu vazby",
      "vytvořit obálku knihy pdf",
      "rysky pro ohyb hřbetu",
      "předtisková příprava lepené vazby"
    ],
    "description": "\n      <p>Kalkulačka hřbetu knihy v PDF je záchranou v předtiskové přípravě pro grafiky, autory vydávající vlastním nákladem i obchodní týmy připravující nabídky.</p>\n      <p>Při sestavování tlustých katalogů, nabídek do výběrových řízení nebo výročních adresářů vyžaduje lepená vazba (V2) obálku s přesnými souřadnicemi hřbetu. Pokud se šířka hřbetu liší byť jen o 1 mm, svázaná obálka se zkroutí, posune nebo pomačká. Výpočet podle počtu stránek a gramáže papíru je složitý a náchylný k chybám.</p>\n      <p>Tento nástroj využívá <strong>fyzikálně modelovanou knihovnu převodu gramáže papíru na tloušťku</strong>. Stačí zadat počet stránek PDF a vybrat typ papíru (např. ofset 80 g/m², lesklý 100 g/m²). Nástroj vypočítá šířku hřbetu s přesností na mikrometry a vytvoří tiskově připravené PDF extra široké obálky včetně standardních předních a zadních klop a přesných rysek pro ohyb.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nastavit počet stránek a typ papíru",
        "description": "Zadejte počet stránek dokumentu a vyberte specifikaci cílového papíru."
      },
      {
        "step": 2,
        "title": "Zadat text na hřbet",
        "description": "Zadejte název knihy, údaje o autorovi a přizpůsobte pozadí hřbetu i obálky."
      },
      {
        "step": 3,
        "title": "3D náhled a export",
        "description": "Otáčejte obálkou knihy a prohlédněte si ji v interaktivním 3D náhledu. Exportujte vektorové PDF ve vysokém rozlišení."
      }
    ],
    "useCases": [
      {
        "title": "Rozsáhlé nabídky do výběrových řízení",
        "description": "Navrhněte profesionální obálky s přesně zarovnanými ryskami hřbetu pro objemné nabídky do tendrů.",
        "icon": "layers"
      },
      {
        "title": "Pevná vazba závěrečné práce",
        "description": "Určete přesnou šířku hřbetu pro univerzitní diplomové a disertační práce.",
        "icon": "award"
      },
      {
        "title": "Obálky románů vydávaných vlastním nákladem",
        "description": "Snadno vypočítejte šířku hřbetu knihy před odesláním souborů do služby tisku na objednávku (Print-on-Demand).",
        "icon": "book-open"
      }
    ],
    "faq": [
      {
        "question": "Jak přesný je výpočet tloušťky podle gramáže papíru?",
        "answer": "Velmi přesný. Naše fyzikální knihovna odpovídá průmyslovým průměrům (např. 70 g/m² = 0,09 mm, 80 g/m² = 0,10 mm, lesklý 150 g/m² = 0,125 mm). K dispozici je také přepínač „Oboustranný tisk“, který výpočet automaticky upraví na poloviční počet listů."
      },
      {
        "question": "Jsou exportované obálky připravené k přímému tisku?",
        "answer": "Ano. Soubory jsou dokonalá vektorová PDF se standardními soutiskovými značkami, barevnými škálami a vodítky hřbetu, plně kompatibilní s ofsetovými i digitálními komerčními tiskárnami."
      },
      {
        "question": "Mohu nahrát obrázek pozadí přesahující přes hřbet?",
        "answer": "Ano. Můžete nahrát vlastní rozvržení a náš nástroj grafiku automaticky obtočí a zarovná přes ohyby hřbetu."
      }
    ]
  },
  "pdf-signature-anchor-helper": {
    "title": "Průvodce umístěním podpisu",
    "metaDescription": "Automaticky vyhledejte pole pro podpis ve smlouvách a vložte interaktivní plovoucí vodítka a kotvy pro rychlé podepsání.",
    "keywords": [
      "najít místo podpisu v pdf",
      "vložit kotvu pro podpis",
      "pomocník pro podpis smlouvy",
      "průvodce podpisem kliknutím",
      "zabránit chybějícím podpisům"
    ],
    "description": "\n      <p>Nástroj pro vkládání průvodce podpisem do PDF zaručuje čisté a bezchybné podepisování vícestránkových smluv.</p>\n      <p>Při zasílání vícestránkových dohod o mlčenlivosti (NDA), finančních výkazů nebo nájemních smluv klienti často přehlédnou důležitá pole pro podpis, což vede k nekonečnému přeposílání e-mailů a zdržení obchodních transakcí.</p>\n      <p>Náš nástroj využívá <strong>sémantické mapování pomocí regulárních výrazů</strong>. Prohledá mapu znaků PDF a vyhledá výrazy jako <code>Signature:</code>, <code>签字：</code>, <code>Witness:</code> nebo <code>签署日期：</code>. Poté pomocí <code>pdf-lib</code> vloží standardní interaktivní anotace odkazů PDF. Po otevření v libovolné běžné čtečce klienti uvidí blikající šipky s neonovým okrajem, které je okamžitě navedou ke správným polím, takže podepsání zvládne každý.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Importovat obchodní smlouvu",
        "description": "Nahrajte PDF smlouvu nebo NDA, do které chcete doplnit místa pro podpis."
      },
      {
        "step": 2,
        "title": "Automaticky vyhledat pole pro podpis",
        "description": "Zkontrolujte automaticky nalezená pole pro podpis a v případě potřeby ručně přidejte vlastní místa pro podpis."
      },
      {
        "step": 3,
        "title": "Vložit kotvy a uložit",
        "description": "Kliknutím na Spustit zapíšete interaktivní vrstvy s ukazateli do struktury PDF."
      }
    ],
    "useCases": [
      {
        "title": "Firemní dohody o mlčenlivosti",
        "description": "Vložte vedle polí pro podpis zřetelná blikající vodítka, aby noví zaměstnanci nepřehlédli žádné ustanovení.",
        "icon": "file-text"
      },
      {
        "title": "Nájemní smlouvy na komerční prostory",
        "description": "Proveďte více spolupodepisujících vícestránkovými dokumenty o nemovitostech pomocí barevně odlišených štítků.",
        "icon": "users"
      },
      {
        "title": "Podpisy nákupních objednávek",
        "description": "Vložte interaktivní ukazatele do faktur a nákupních objednávek a urychlete schvalovací proces v účetnictví.",
        "icon": "briefcase"
      }
    ],
    "faq": [
      {
        "question": "Zobrazí se vodítka při tisku smlouvy?",
        "answer": "Ne. Kotvy se vkládají se standardním příznakem PDF `Printable` nastaveným na false. Na obrazovce počítače či tabletu se zobrazují krásně, ale při tisku jsou zcela neviditelné."
      },
      {
        "question": "Mohou klienti snadno přecházet mezi poli pro podpis?",
        "answer": "Ano. Vytváříme obousměrné interní kotvy. Klienti mohou kliknout na záložku „Průvodce podpisem“ a okamžitě přejít na další prázdné pole pro podpis."
      },
      {
        "question": "Funguje to i u naskenovaných obrazových dokumentů?",
        "answer": "Ano. Kromě vyhledávání v textu náš analyzátor prostorového rozvržení odhaduje podpisové řádky na naskenovaných listech podle vodorovných čar a ohraničujících rámečků."
      }
    ]
  },
  "pdf-lossless-slicer": {
    "title": "Bezeztrátový výřez z výkresu",
    "metaDescription": "Vyjměte na nízké úrovni část velkého PDF výkresu CAD, mapy nebo grafu se zachováním vektorového rozlišení a se zmenšením velikosti souboru.",
    "keywords": [
      "vektorové oříznutí pdf",
      "bezeztrátový výřez pdf",
      "oříznout výkres cad",
      "úprava matice cropbox",
      "vyjmout oblast mapy"
    ],
    "description": "\n      <p>Bezeztrátový nástroj pro výřezy z výkresů PDF je vysoce přesný „chirurgický“ nástroj určený pro architekty, inženýry a kartografy.</p>\n      <p>Při vyjímání konkrétní strojovny nebo jádra čipu z rozsáhlého inženýrského výkresu CAD nebo geografické mapy v PDF vedou běžné snímky obrazovky k pixelovatému a rozmazanému textu. Běžné nástroje pro oříznutí pouze překryjí list maskou, takže obří 100MB soubor zůstane stejně velký a skrytý obsah lze stále extrahovat.</p>\n      <p>Tento nástroj upravuje matice stránky <code>/MediaBox</code>, <code>/CropBox</code> a <code>/BleedBox</code> na úrovni stromu objektů. Fyzicky odstraní vektorové uzly mimo vybranou oblast, cílovou oblast ponechá 100% vektorově dokonalou (s možností neomezeného přiblížení) a zároveň odstraní nadbytečné cesty a obrázky mimo výřez, čímž zmenší velikost souboru až o 95 %!</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Importovat velký výkres",
        "description": "Nahrajte vektorový výkres CAD, mapu GIS nebo katalog ve vysokém rozlišení ve formátu PDF."
      },
      {
        "step": 2,
        "title": "Nakreslit výřez",
        "description": "Přetáhněte a změňte velikost zeleného laserového rámečku tak, aby ohraničil oblast, kterou chcete vyříznout."
      },
      {
        "step": 3,
        "title": "Spustit laserový ořez",
        "description": "Kliknutím na Spustit aktivujete nízkoúrovňový ořez objektů a stáhnete malé bezeztrátové PDF."
      }
    ],
    "useCases": [
      {
        "title": "Výřez z výkresu CAD",
        "description": "Vyřízněte detail „chladicího systému“ z obřího 100MB půdorysu a sdílejte jej se subdodavateli.",
        "icon": "crop"
      },
      {
        "title": "Výřez z mapy GIS",
        "description": "Vyjměte bezeztrátový vektorově ostrý výřez mapy města pro prezentační snímek bez ztráty rozlišení.",
        "icon": "map"
      },
      {
        "title": "Vyjmutí ilustrací z příruček",
        "description": "Bezeztrátově vyjměte obrázky z odborných knih a vložte je do kvalitních odborných článků.",
        "icon": "image"
      }
    ],
    "faq": [
      {
        "question": "Čím se to liší od běžného oříznutí?",
        "answer": "Běžné oříznutí pouze upraví viditelné hranice a skryté vektory v souboru zůstanou. Náš nástroj ořízne přesahující vektorové cesty a odstraní obrázky XObject mimo hranice, čímž zajistí úplné oddělení dat a maximální kompresi souboru."
      },
      {
        "question": "Zůstanou textové vrstvy prohledávatelné?",
        "answer": "Ano. Veškerý text uvnitř hranice výřezu zůstane plně vektorový, prohledávatelný a označitelný."
      },
      {
        "question": "Mohu výřezy exportovat do SVG?",
        "answer": "Výstupem je standardní vektorové PDF. Výsledný soubor můžete převést do škálovatelného vektorového formátu pro web pomocí našeho nástroje PDF do SVG."
      }
    ]
  },
  "pdf-scratchpad-canvas": {
    "title": "Plocha pro poznámky s mřížkou",
    "metaDescription": "Přidejte ke stránkám PDF kvalitní okraje pro poznámky se čtverečkovanou mřížkou, linkováním nebo v Cornellově stylu pro odvozování vzorců a přípravu na zkoušky.",
    "keywords": [
      "rozšířit okraje pdf",
      "přidat místo na poznámky",
      "cornellovy poznámky mřížka",
      "přidat prostor na koncept",
      "šablona poznámek pdf"
    ],
    "description": "\n      <p>Rozšíření okrajů PDF o plochu pro poznámky je nezbytným studijním pomocníkem pro studenty, výzkumníky a uchazeče o profesní zkoušky.</p>\n      <p>Při řešení cvičných testů, procházení prezentací nebo čtení odborných učebnic na tabletu jsou okraje stránek nesmírně úzké. Otevírání samostatné aplikace na poznámky vás nutí neustále přepínat obrazovky a narušuje soustředění. Přidání prázdných listů zase znemožňuje vidět zadání a výpočet vedle sebe.</p>\n      <p>Tento nástroj přepisuje šířku nebo výšku stránky v nízkoúrovňové struktuře PDF a rozšiřuje okraje <code>/MediaBox</code> o 200~250 pt vpravo nebo dole. Do nových okrajů pak vykreslí čistou čtverečkovanou mřížku, linkování jako v sešitu nebo Cornellovo rozvržení, takže máte vedle každého snímku či otázky vlastní plochu na koncept!</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Nahrát prezentaci z přednášky",
        "description": "Nahrajte učebnici, prezentaci nebo studijní materiály v PDF."
      },
      {
        "step": 2,
        "title": "Zvolit okraj a styl mřížky",
        "description": "Vyberte směr rozšíření okraje (např. vpravo pro tablety) a zvolte šablonu mřížky."
      },
      {
        "step": 3,
        "title": "Přidat plochu a stáhnout",
        "description": "Kliknutím na Spustit vytvoříte rozšířené stránky s pěknou mřížkou na koncept."
      }
    ],
    "useCases": [
      {
        "title": "Příprava na zkoušky z přírodních a technických oborů",
        "description": "Přidejte k zadání příkladů z matematiky a fyziky okraje s mřížkou a odvozujte řešení přímo vedle otázky.",
        "icon": "edit-3"
      },
      {
        "title": "Rozbor cizojazyčných textů",
        "description": "Přidejte k cizojazyčným textům linkované okraje pro rozbor slovní zásoby a překlad odstavců.",
        "icon": "book"
      },
      {
        "title": "Kontrola architektonických výkresů",
        "description": "Přidejte k výkresům prázdné okraje pro technické výpočty a připomínky klienta.",
        "icon": "columns"
      }
    ],
    "faq": [
      {
        "question": "Nezmenší se tím původní text PDF?",
        "answer": "Vůbec ne. Algoritmus rozšiřuje rozměr papíru směrem ven. Původní obsah si zachová rozvržení, písma i rozlišení; pouze roztáhneme volné místo na okrajích a vykreslíme na něm mřížku."
      },
      {
        "question": "Lze do plochy pro poznámky psát běžnými digitálními pery?",
        "answer": "Ano. Nové stránky PDF jsou vytvořeny nativně. Oblíbené aplikace pro psaní poznámek na tabletu, jako jsou Goodnotes, Notability, Xodo a Acrobat, mohou do nové mřížky přímo psát, zvýrazňovat i kreslit."
      },
      {
        "question": "Nejsou čáry mřížky tmavé a rušivé?",
        "answer": "Vybrali jsme tři jemné barvy šetrné k očím (jemnou modrošedou, teplou hnědou a zářivě zelenou). Čáry jsou tenké a nenápadné, slouží jako vodítka a neodvádějí pozornost od původního obsahu stránky."
      }
    ]
  },
  "photo-tiling-prepress": {
    "title": "Tisk fotografií na doklady",
    "metaDescription": "Ořízněte a rozmístěte pasové fotografie a fotografie na doklady na standardní fotopapír 5\" nebo 6\" a přidejte přesné ořezové značky pro snadné stříhání.",
    "keywords": [
      "rozložení fotek na doklady",
      "vytisknout pasovou fotku",
      "rozmístit fotky na fotopapír",
      "příprava fotek na doklady k tisku",
      "přidat ořezové značky"
    ],
    "description": "\n      <p>Nástroj pro předtiskové rozmístění fotografií je úsporný a vysoce přesný nástroj pro sestavení rozvržení, určený pro osobní doklady i fotoateliéry.</p>\n      <p>Při domácím tisku pasových fotografií, fotografií na občanský nebo řidičský průkaz často vzniknou nesprávné fyzické rozměry (fotky jsou příliš velké nebo malé), plýtvá se fotopapírem a zarovnání je nerovnoměrné. Návštěva profesionálního fotoateliéru kvůli rozvržení zase zabere čas.</p>\n      <p>Náš nástroj obsahuje <strong>přesný předtiskový maticový engine</strong>. Přijme portrétní fotografie nebo skeny průkazů, ořízne je na standardní rozměry (např. specifikace pasových fotografií 1\" nebo 2\"), vypočítá optimální počet kopií pro standardní fotopapír (např. listy 5\" nebo 6\") a přidá ostré tenké ořezové čáry pro snadné stříhání. Výsledkem je dokonalé PDF připravené k tisku.</p>\n    ",
    "howToUse": [
      {
        "step": 1,
        "title": "Importovat pasovou fotografii",
        "description": "Nahrajte portrétní fotografii z fotoaparátu nebo obrázky obou stran průkazu."
      },
      {
        "step": 2,
        "title": "Nastavit papír a rozvržení",
        "description": "Vyberte cílovou velikost papíru pro tisk (např. 6\") a zvolte rozvržení mřížky (např. 8 kopií fotografií 1\")."
      },
      {
        "step": 3,
        "title": "Rozmístit a exportovat",
        "description": "Zkontrolujte rozmístění fotografií v mřížce a exportujte PDF s vysokým DPI připravené k tisku."
      }
    ],
    "useCases": [
      {
        "title": "Pasové fotografie svépomocí",
        "description": "Rozmístěte své pasové portréty vyfocené mobilem na jeden fotopapír 6\" a vytiskněte 8 kopií za zlomek ceny ve fotoateliéru.",
        "icon": "user"
      },
      {
        "title": "Oboustranná kopie průkazu",
        "description": "Úhledně rozmístěte skeny přední a zadní strany občanského průkazu na standardní list Letter/A4 pro úřední podání.",
        "icon": "file-text"
      },
      {
        "title": "Hromadné náhledové archy fotografií",
        "description": "Rozmístěte více rodinných vzpomínek nebo návrhů do mřížky a efektivně vytiskněte náhledové kontaktní archy.",
        "icon": "grid"
      }
    ],
    "faq": [
      {
        "question": "Budou vytištěné rozměry odpovídat oficiálním specifikacím 1\" nebo 2\"?",
        "answer": "Ano. Engine mřížky měří ve standardních bodech PDF (72 pt = 1 palec), takže fotografie 1\" vykreslí přesně v rozměru 25 × 35 mm a fotografie 2\" v rozměru 35 × 49 mm. V nastavení tiskárny nezapomeňte zvolit tisk ve „Skutečné velikosti / měřítku 100 %“."
      },
      {
        "question": "Mohu na jeden list zkombinovat fotografie 1\" a 2\"?",
        "answer": "Ano. Nabízíme připravené předvolby kombinovaného rozvržení (např. „4 kopie 1\" + 4 kopie 2\"“), díky nimž maximálně využijete plochu fotopapíru."
      },
      {
        "question": "Obsahuje šablona bezpečné okraje?",
        "answer": "Ano. Předtisková rozvržení vyhrazují na okrajích papíru standardní 4mm bezpečný okraj pro tisk, takže válce tiskárny fotografie neoříznou."
      }
    ]
  },
};
