/**
 * Polskie treści narzędzi do celów SEO
 * Zawiera szczegółowe opisy, instrukcje, zastosowania i często zadawane pytania dla wszystkich narzędzi
 * Requirements: 4.2-4.5 - Tool page content (description, how-to, use cases, FAQ)
 */

import { ToolContent } from '@/types/tool';

/**
 * Polska mapa treści narzędzi
 * Każde narzędzie ma tytuł, opis meta, słowa kluczowe, opis, instrukcję, zastosowania i FAQ
 */
export const toolContentPl: Record<string, ToolContent> = {
  // ==================== POPULAR TOOLS ====================
  'pdf-multi-tool': {
    title: "Narzędzie wielofunkcyjne PDF",
    metaDescription: "Wszechstronny edytor plików PDF: łącz, dziel, organizuj, usuwaj, obracaj i wyodrębniaj strony w jednym zaawansowanym narzędziu.",
    keywords: ["narzędzie wielofunkcyjne PDF", "edytor PDF", "połącz PDF", "podziel PDF", "uporządkuj PDF", "wszystko w jednym PDF"],
    description: "\n      <p>PDF Multi Tool to kompleksowe rozwiązanie do wszystkich zadań związanych z zarządzaniem stronami PDF. To zaawansowane i wszechstronne narzędzie łączy wiele operacji PDF w jeden, intuicyjny interfejs, oszczędzając czas i wysiłek.</p>\n      <p>Bez względu na to, czy chcesz scalić wiele dokumentów, podzielić duży plik PDF na mniejsze pliki, zreorganizować strony, usunąć niechcianą zawartość, obrócić strony czy wyodrębnić określone sekcje, to narzędzie poradzi sobie z tym wszystkim bez konieczności przełączania między różnymi aplikacjami.</p>\n      <p>Całe przetwarzanie odbywa się bezpośrednio w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne i bezpieczne. Żadne pliki nie są przesyłane na żaden serwer.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF do obszaru przesyłania lub kliknij, aby przeglądać i wybierać pliki z urządzenia." },
      { step: 2, title: "Wybierz operację", description: "Wybierz jedną z dostępnych operacji: scalanie, dzielenie, organizowanie, usuwanie stron, obracanie, dodawanie pustych stron lub wyodrębnianie stron." },
      { step: 3, title: "Skonfiguruj opcje", description: "Dostosuj ustawienia specyficzne dla wybranej operacji, takie jak zakresy stron, kąty obrotu lub kolejność scalania." },
      { step: 4, title: "Przetwarzaj i pobieraj", description: "Kliknij przycisk przetwarzania i pobierz zmodyfikowany plik PDF po zakończeniu operacji." },
    ],
    useCases: [
      { title: "Przygotowanie dokumentu", description: "Przygotuj dokumenty do przesłania, usuwając niepotrzebne strony, zmieniając kolejność treści i łącząc wiele plików.", icon: 'file-check' },
      { title: "Scalanie raportów", description: "Połącz wiele sekcji raportu, dodaj strony tytułowe i uporządkuj rozdziały w jeden profesjonalny dokument.", icon: 'book-open' },
      { title: "Zarządzanie archiwum", description: "Dziel duże pliki archiwalne na łatwe do zarządzania sekcje, wyodrębniaj odpowiednie strony i reorganizuj dokumenty historyczne.", icon: 'archive' },
    ],
    faq: [
      { question: "Ile plików PDF mogę przetwarzać jednocześnie?", answer: "Możesz jednocześnie przesyłać i przetwarzać do 10 plików PDF o łącznym maksymalnym rozmiarze 500MB." },
      { question: "Czy moje zakładki zostaną zachowane?", answer: "Tak, podczas łączenia plików PDF narzędzie zachowuje istniejące zakładki i opcjonalnie może połączyć je w ujednoliconą strukturę zakładek." },
      { question: "Czy istnieje limit stron?", answer: "Nie ma ścisłego limitu stron. Narzędzie radzi sobie z dokumentami liczącymi setki stron, chociaż przetwarzanie bardzo dużych plików może zająć więcej czasu." },
    ],
  },

  'merge-pdf': {
    title: "Połącz PDF",
    metaDescription: "Połącz wiele plików PDF w jeden dokument. Bezpłatne łączenie plików PDF online z możliwością zmiany kolejności metodą „przeciągnij i upuść”.",
    keywords: ["połącz PDF", "scal PDF", "łączenie PDF", "narzędzie do łączenia PDF", "połącz pliki PDF"],
    description: "\n      <p>Połącz PDF umożliwia szybkie i łatwe łączenie wielu dokumentów PDF w jeden plik. Niezależnie od tego, czy konsolidujesz raporty, łączysz zeskanowane dokumenty, czy tworzysz prezentację, dzięki temu narzędziu ten proces przebiega sprawnie.</p>\n      <p>Po prostu prześlij pliki, uporządkuj je w żądanej kolejności za pomocą metody „przeciągnij i upuść” i połącz je w jeden spójny dokument. Narzędzie zachowuje jakość oryginalnych plików i opcjonalnie może zachować zakładki z każdego dokumentu źródłowego.</p>\n      <p>Całe scalanie odbywa się lokalnie w przeglądarce, dzięki czemu wrażliwe dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij pliki PDF", description: "Przeciągnij i upuść wiele plików PDF do obszaru przesyłania lub kliknij, aby wybrać pliki z urządzenia." },
      { step: 2, title: "Ułóż kolejność", description: "Przeciągnij i upuść miniatury plików, aby ułożyć je w żądanej kolejności." },
      { step: 3, title: "Połącz i pobierz", description: "Kliknij przycisk Scal, aby połączyć wszystkie pliki, a następnie pobierz scalony plik PDF." },
    ],
    useCases: [
      { title: "Połącz raporty", description: "Połącz raporty miesięczne lub kwartalne w jeden dokument roczny, aby ułatwić dystrybucję i archiwizację.", icon: 'file-text' },
      { title: "Tworzenie portfolio", description: "Połącz wiele dokumentów projektowych, certyfikatów lub próbek prac w profesjonalne portfolio.", icon: 'briefcase' },
      { title: "Konsoliduj faktury", description: "Scal wiele faktur lub paragonów w jeden dokument dla celów księgowych i prowadzenia dokumentacji.", icon: 'receipt' },
    ],
    faq: [
      { question: "Ile plików PDF mogę scalić?", answer: "Jednocześnie można scalić do 100 plików PDF o łącznym rozmiarze do 500MB." },
      { question: "Czy scalony plik PDF zachowa oryginalną jakość?", answer: "Tak, proces łączenia pozwala zachować oryginalną jakość wszystkich dokumentów bez kompresji i utraty jakości." },
      { question: "Czy mogę scalić pliki PDF chronione hasłem?", answer: "Pliki PDF chronione hasłem należy najpierw odszyfrować. Skorzystaj z naszego narzędzia Odszyfruj plik PDF, aby usunąć hasło przed połączeniem." },
    ],
  },

  'rotate-custom': {
    title: "Obróć o dowolny kąt",
    metaDescription: "Obracaj strony PDF pod dowolnym kątem. Precyzyjny, niestandardowy obrót w celu prostowania zeskanowanych dokumentów.",
    keywords: ["obracanie PDF o dowolny kąt", "wyprostuj PDF", "prostowanie przechylonego PDF", "niestandardowy obrót PDF"],
    description: "\n      <p>Obrót o niestandardowy kąt zapewnia precyzyjną kontrolę nad orientacją strony PDF. W przeciwieństwie do standardowych narzędzi do obracania, które obsługują tylko przyrosty co 90 stopni, to narzędzie umożliwia obracanie stron o dowolny określony kąt.</p>\n      <p>Świetnie nadaje się do prostowania zeskanowanych dokumentów, które zostały lekko przechylone, lub dopasowywania diagramów i wykresów do ich właściwej orientacji. Możesz poprawić poszczególne strony lub zastosować ten sam obrót do całego dokumentu.</p>\n      <p>Całe przetwarzanie odbywa się lokalnie w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne, a jednocześnie są idealnie dopasowane.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij plik PDF", description: "Prześlij plik PDF zawierający strony, które chcesz obrócić." },
      { step: 2, title: "Ustaw kąt obrotu", description: "Wprowadź dokładny stopień obrotu każdej strony lub ustaw kąt wsadowy dla wszystkich stron." },
      { step: 3, title: "Wyświetl podgląd i dostosuj", description: "Skorzystaj z podglądu w czasie rzeczywistym, aby mieć pewność, że strony są idealnie wyrównane." },
      { step: 4, title: "Zastosuj i pobierz", description: "Kliknij Obróć, aby zastosować zmiany i pobrać wyprostowany plik PDF." },
    ],
    useCases: [
      { title: "Zeskanowane dokumenty", description: "Wyprostuj zeskanowane strony wprowadzone do skanera pod kątem.", icon: 'scan' },
      { title: "Rysunki techniczne", description: "Precyzyjnie dostosuj orientację schematów technicznych i planów.", icon: 'ruler' },
      { title: "Kreatywne układy", description: "Twórz unikalne układy, obracając strony pod określonym artystycznym kątem.", icon: 'pen-tool' },
    ],
    faq: [
      { question: "Czy mogę obracać o miejsca po przecinku, np. o 45.5 stopnia?", answer: "Obecnie narzędzie obsługuje stopnie całkowite, ale pracujemy nad umożliwieniem precyzji dziesiętnej." },
      { question: "Czy ma to wpływ na zawartość strony?", answer: "Treść jest wizualnie obrócona. Rozmiar strony jest automatycznie dostosowywany do obracanej zawartości." },
      { question: "Czy mogę obrócić tylko jedną stronę?", answer: "Tak, możesz ustawić niestandardowy kąt obrotu dla dowolnej strony, pozostawiając inne bez zmian." },
    ],
  },

  'grid-combine': {
    title: "Łączenie PDF w siatce",
    metaDescription: "Połącz wiele plików PDF na pojedynczych stronach za pomocą elastycznego układu siatki. Rozmieść 2, 4, 6, 9 lub więcej plików PDF na stronie z obramowaniem i odstępami.",
    keywords: ["łączenie PDF w siatce", "siatka PDF", "kolaż PDF", "wiele plików PDF na jednej stronie", "PDF N-up", "połącz pliki PDF w siatce"],
    description: "\n      <p>Narzędzie Grid Combine oferuje unikalny sposób łączenia wielu oddzielnych plików PDF na pojedynczych stronach. W przeciwieństwie do standardowego narzędzia „Połącz PDF”, które po prostu dołącza strony, lub narzędzia „N-Up”, które zmienia kolejność stron w jednym dokumencie, Grid Combine pobiera wiele plików wejściowych i układa je obok siebie w konfigurowalny układ siatki.</p>\n      <p>Możesz wybierać spośród różnych konfiguracji siatek, takich jak 2x1, 2x2, 3x3 itp. Jest to idealne rozwiązanie do porównywania wielu dokumentów, tworzenia materiałów informacyjnych z różnych źródeł lub drukowania kompaktowych wersji kilku plików.</p>\n      <p>Dostosuj wydruk, kontrolując rozmiar strony, orientację, marginesy, odstępy i obramowania. Całe przetwarzanie odbywa się lokalnie w Twojej przeglądarce, co zapewnia maksymalną prywatność.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij pliki PDF", description: "Prześlij dwa lub więcej plików PDF, które chcesz połączyć. Możesz ułożyć je w wybranej kolejności." },
      { step: 2, title: "Wybierz Układ siatki", description: "Wybierz żądany układ siatki (np. 2x2 dla 4 plików na stronę, 3x3 dla 9 plików na stronę)." },
      { step: 3, title: "Dostosuj wygląd", description: "Dostosuj ustawienia, takie jak rozmiar strony (A4, Letter), orientacja, odstępy między elementami i obramowania." },
      { step: 4, title: "Połącz i pobierz", description: "Kliknij „Połącz pliki PDF”, aby wygenerować nowy dokument układu siatki i pobrać wynik." },
    ],
    useCases: [
      { title: "Porównanie wizualne", description: "Umieść różne wersje projektu lub dokumentu obok siebie na jednej stronie, aby ułatwić porównanie.", icon: 'layout-grid' },
      { title: "Drukowanie ulotek", description: "Połącz wiele krótkich dokumentów lub slajdów na jednym arkuszu papieru, aby zaoszczędzić na kosztach drukowania.", icon: 'printer' },
      { title: "Tworzenie portfela", description: "Zaprezentuj wiele plików projektu w przejrzystym, zorganizowanym przeglądzie siatki.", icon: 'image' },
    ],
    faq: [
      { question: "Czym to się różni od N-Up?", answer: "N-Up pobiera strony z JEDNEGO pliku PDF i umieszcza je na arkuszu. Grid Combine pobiera WIELE RÓŻNYCH plików PDF i umieszcza je na arkuszu." },
      { question: "Ile plików mogę połączyć?", answer: "W zależności od pamięci przeglądarki możesz połączyć do 100 plików, ale układy takie jak 4x4 mieszczą do 16 plików na stronę." },
      { question: "Czy mogę dodać obramowania?", answer: "Tak, możesz dodać obramowanie wokół każdego pliku PDF i dostosować kolor obramowania." },
    ],
  },

  'split-pdf': {
    title: "Podziel PDF",
    metaDescription: "Podziel pliki PDF na wiele dokumentów. Wyodrębnij określone strony lub podziel według zakresów stron.",
    keywords: ["podziel PDF", "dzielenie PDF", "rozdziel PDF", "wyodrębnij strony", "narzędzie do dzielenia PDF"],
    description: "\n      <p>Podziel PDF umożliwia podzielenie pojedynczego dokumentu PDF na wiele mniejszych plików. Jest to idealne rozwiązanie do wyodrębniania określonych rozdziałów, oddzielania połączonych dokumentów lub tworzenia pojedynczych plików z wielostronicowego pliku PDF.</p>\n      <p>Możesz dzielić według określonych zakresów stron, wyodrębniać pojedyncze strony lub dzielić dokument w regularnych odstępach czasu. Narzędzie zapewnia wizualny podgląd stron, dzięki czemu z łatwością wybierzesz dokładnie to, czego potrzebujesz.</p>\n      <p>Całe przetwarzanie odbywa się lokalnie w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne i bezpieczne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby przeglądać i wybrać plik, który chcesz podzielić." },
      { step: 2, title: "Wybierz metodę podziału", description: "Wybierz sposób podziału: według zakresów stron, wyodrębnij określone strony lub podziel w regularnych odstępach czasu." },
      { step: 3, title: "Zdefiniuj zakresy stron", description: "Wprowadź numery stron lub zakresy, które chcesz wyodrębnić (np. 1-5, 8, 10-15)." },
      { step: 4, title: "Podziel i pobierz", description: "Kliknij opcję Podziel, aby utworzyć nowe pliki PDF i pobrać je pojedynczo lub jako archiwum ZIP." },
    ],
    useCases: [
      { title: "Wyodrębnij rozdziały", description: "Podziel książkę lub podręcznik na poszczególne rozdziały, aby ułatwić czytanie lub dystrybucję.", icon: 'book' },
      { title: "Oddzielne połączone skany", description: "Podziel zeskanowany dokument na osobne pliki dla każdego oryginalnego dokumentu.", icon: 'copy' },
      { title: "Twórz materiały informacyjne", description: "Wyodrębnij określone slajdy lub strony z prezentacji, aby utworzyć szczegółowe materiały informacyjne.", icon: 'presentation' },
    ],
    faq: [
      { question: "Czy mogę podzielić plik PDF na poszczególne strony?", answer: "Tak, możesz podzielić plik PDF na pojedyncze, jednostronicowe pliki, wybierając opcję „Podziel każdą stronę”." },
      { question: "Co dzieje się z zakładkami podczas dzielenia?", answer: "Zakładki mieszczące się w wyodrębnionym zakresie stron są zachowywane w wynikowych plikach PDF." },
      { question: "Czy mogę dzielić pliki PDF chronione hasłem?", answer: "Przed podziałem musisz najpierw odszyfrować plik PDF za pomocą naszego narzędzia Odszyfruj plik PDF." },
    ],
  },

  'compress-pdf': {
    title: "Kompresuj PDF",
    metaDescription: "Zmniejsz rozmiar pliku PDF, zachowując jakość. Darmowy kompresor plików PDF online dla mniejszych plików.",
    keywords: ["skompresuj pdf", "zmniejsz rozmiar pliku PDF", "kompresor PDF", "zmniejszyć pdf", "zoptymalizować pdf"],
    description: "\n      <p>Kompresja PDF zmniejsza rozmiar pliku dokumentów PDF przy zachowaniu akceptowalnej jakości. Jest to niezbędne w przypadku załączników do wiadomości e-mail, przesyłania do Internetu lub oszczędzania miejsca na dysku.</p>\n      <p>Narzędzie oferuje wiele poziomów kompresji, aby zachować równowagę pomiędzy zmniejszeniem rozmiaru pliku a zachowaniem jakości. Możesz wybrać agresywną kompresję, aby maksymalnie zmniejszyć rozmiar, lub lekką kompresję, aby zachować wyższą jakość.</p>\n      <p>Cała kompresja odbywa się w przeglądarce, dzięki czemu Twoje dokumenty nigdy nie opuszczą urządzenia.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać dokument, który chcesz skompresować." },
      { step: 2, title: "Wybierz poziom kompresji", description: "Wybierz preferowany poziom kompresji: Niski (najlepsza jakość), Średni (zrównoważony) lub Wysoki (najmniejszy rozmiar)." },
      { step: 3, title: "Skompresuj i pobierz", description: "Kliknij opcję Kompresuj, aby zmniejszyć rozmiar pliku, a następnie pobierz zoptymalizowany plik PDF." },
    ],
    useCases: [
      { title: "Załączniki do wiadomości e-mail", description: "Zmniejsz rozmiar pliku PDF, aby spełnić limity załączników do wiadomości e-mail i zapewnić szybszą dostawę.", icon: 'mail' },
      { title: "Publikowanie w Internecie", description: "Optymalizuj pliki PDF do pobrania w Internecie, aby skrócić czas ładowania stron i poprawić wygodę użytkownika.", icon: 'globe' },
      { title: "Optymalizacja przechowywania", description: "Kompresuj zarchiwizowane dokumenty, aby zaoszczędzić miejsce na dysku, zachowując jednocześnie dostępność.", icon: 'hard-drive' },
    ],
    faq: [
      { question: "Jak bardzo mogę zmniejszyć rozmiar pliku?", answer: "Wyniki kompresji różnią się w zależności od zawartości pliku PDF. Pliki PDF zawierające dużo obrazów można często zmniejszyć o 50–80%, podczas gdy pliki PDF zawierające wyłącznie tekst mogą zostać zmniejszone w mniejszym stopniu." },
      { question: "Czy kompresja wpłynie na jakość tekstu?", answer: "Tekst pozostaje ostry i czytelny na wszystkich poziomach kompresji. Kompresja wpływa wyłącznie na obrazy i grafikę." },
      { question: "Czy mogę skompresować wiele plików PDF jednocześnie?", answer: "Tak, możesz przesyłać i kompresować do 10 plików PDF jednocześnie." },
    ],
  },

  'edit-pdf': {
    title: "Edytuj PDF",
    metaDescription: "Edytuj pliki PDF online. Dodawaj tekst, obrazy, adnotacje, wyróżnienia i kształty do swoich dokumentów.",
    keywords: ["edytuj pdf", "edytor PDF", "adnotacja pdf", "dodaj tekst do pliku pdf", "znaczniki PDF"],
    description: "\n      <p>Edycja PDF zapewnia kompleksowy zestaw narzędzi do modyfikowania i dodawania adnotacji do dokumentów PDF. Dodawaj tekst, obrazy, kształty, wyróżnienia, komentarze i nie tylko, bez konieczności korzystania z drogiego oprogramowania komputerowego.</p>\n      <p>Intuicyjny interfejs edytora ułatwia oznaczanie dokumentów do przeglądu, dodawanie notatek do współpracy, zaciemnianie poufnych informacji lub wzbogacanie dokumentów o dodatkową treść.</p>\n      <p>Cała edycja odbywa się lokalnie w przeglądarce, co zapewnia całkowitą prywatność wrażliwych dokumentów.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać dokument, który chcesz edytować." },
      { step: 2, title: "Wybierz Narzędzie do edycji", description: "Wybierz z paska narzędzi: tekst, wyróżnienie, kształty, obrazy, komentarze lub narzędzia redakcyjne." },
      { step: 3, title: "Wprowadź zmiany", description: "Kliknij dokument, aby dodać adnotacje, przeciągnij, aby ustawić elementy, i użyj panelu właściwości, aby dostosować." },
      { step: 4, title: "Zapisz i pobierz", description: "Kliknij Zapisz, aby zastosować zmiany i pobrać edytowany plik PDF." },
    ],
    useCases: [
      { title: "Przegląd dokumentów", description: "Dodawaj komentarze, wyróżnienia i znaczniki do dokumentów na potrzeby procesów wspólnej recenzji.", icon: 'message-square' },
      { title: "Wypełnienie formularza", description: "Wypełniaj pola tekstowe, dodawaj podpisy i wypełniaj formularze PDF bez drukowania.", icon: 'edit-3' },
      { title: "Redakcja treści", description: "Przed udostępnieniem trwale usuń poufne informacje z dokumentów.", icon: 'eye-off' },
    ],
    faq: [
      { question: "Czy mogę edytować oryginalny tekst w pliku PDF?", answer: "Tak. Wybierz opcję Edytuj tekst na pasku narzędzi PDF, kliknij istniejący blok tekstu, wprowadź zamiennik i zastosuj go. Tekst jest trwale zastępowany w wyeksportowanym pliku PDF." },
      { question: "Czy moje zmiany są trwałe?", answer: "Adnotacje można spłaszczyć, aby uczynić je trwałymi, lub zachować je jako edytowalne warstwy, w zależności od preferencji." },
      { question: "Czy mogę cofnąć wprowadzone zmiany?", answer: "Tak, edytor obsługuje funkcję cofania/ponawiania. Możesz także w dowolnym momencie przywrócić oryginalny dokument przed zapisaniem." },
    ],
  },

  'jpg-to-pdf': {
    title: "JPG do PDF",
    metaDescription: "Konwertuj obrazy JPG na format PDF. Połącz wiele plików JPG w jeden dokument PDF.",
    keywords: ["jpg do pdf", "JPEG do PDF", "konwertuj jpg", "obraz do pdf", "zdjęcie do pdf"],
    description: "\n      <p>JPG to PDF szybko i łatwo konwertuje obrazy JPEG na dokumenty PDF. Niezależnie od tego, czy masz jedno zdjęcie, czy wiele obrazów, to narzędzie tworzy profesjonalnie wyglądające pliki PDF.</p>\n      <p>Możesz połączyć wiele plików JPG w jeden plik PDF, ułożyć je w dowolnej kolejności oraz dostosować rozmiar i orientację strony. Konwersja zachowuje jakość obrazu podczas tworzenia kompaktowych plików PDF, które można udostępniać.</p>\n      <p>Wszystkie konwersje odbywają się w Twojej przeglądarce, dzięki czemu Twoje zdjęcia pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij obrazy JPG", description: "Przeciągnij i upuść pliki JPG lub kliknij, aby wybrać obrazy z urządzenia." },
      { step: 2, title: "Uporządkuj i skonfiguruj", description: "Zmień kolejność obrazów, przeciągając, a następnie wybierz rozmiar strony i opcje orientacji." },
      { step: 3, title: "Konwertuj i pobierz", description: "Kliknij Konwertuj, aby utworzyć plik PDF i pobrać wynik." },
    ],
    useCases: [
      { title: "Albumy fotograficzne", description: "Twórz albumy ze zdjęciami w pliku PDF ze zdjęć z wakacji lub zdjęć z wydarzeń, aby łatwo je udostępniać.", icon: 'image' },
      { title: "Skanowanie dokumentów", description: "Konwertuj zdjęcia dokumentów z aparatu telefonicznego na odpowiednie pliki PDF.", icon: 'camera' },
      { title: "Tworzenie portfela", description: "Zbierz prace fotograficzne lub próbki projektów w profesjonalne portfolio PDF.", icon: 'folder' },
    ],
    faq: [
      { question: "Ile obrazów mogę przekonwertować?", answer: "Możesz przekonwertować maksymalnie 100 obrazów JPG na jeden dokument PDF." },
      { question: "Czy jakość obrazu zostanie zachowana?", answer: "Tak, obrazy są osadzone w oryginalnej jakości. Opcjonalnie możesz je skompresować, aby zmniejszyć rozmiar pliku." },
      { question: "Czy mogę ustawić różne rozmiary strony dla różnych obrazów?", answer: "Narzędzie stosuje jednolity rozmiar strony do wszystkich stron. Każdy obraz jest skalowany w celu dopasowania do wybranego rozmiaru strony przy zachowaniu proporcji." },
    ],
  },

  'sign-pdf': {
    title: "Podpisz PDF",
    metaDescription: "Dodawaj podpisy elektroniczne do dokumentów PDF. Narysuj, wpisz lub prześlij swój podpis.",
    keywords: ["podpisz PDF", "podpis elektroniczny", "podpis w PDF", "dodaj podpis do PDF", "podpis cyfrowy"],
    description: "<p>Sign PDF umożliwia szybkie i bezpieczne dodawanie podpisów elektronicznych do dokumentów PDF. Utwórz swój podpis, rysując, wpisując lub przesyłając obraz, a następnie umieść go w dowolnym miejscu dokumentu.</p>\n      <p>Możesz dodać wiele podpisów do jednego dokumentu, precyzyjnie zmienić ich rozmiar i położenie, a także zapisać swój podpis do wykorzystania w przyszłości. Narzędzie doskonale nadaje się do umów, porozumień, formularzy i wszelkich dokumentów wymagających Twojego podpisu.</p>\n      <p>Wszystkie podpisywanie odbywa się lokalnie w Twojej przeglądarce, dzięki czemu Twoje dokumenty i podpis pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać dokument, który chcesz podpisać." },
      { step: 2, title: "Utwórz swój podpis", description: "Narysuj swój podpis za pomocą myszy lub dotyku, wpisz swoje imię i nazwisko, aby wygenerować podpis, lub prześlij obraz podpisu." },
      { step: 3, title: "Umieść i dostosuj", description: "Kliknij dokument, aby umieścić swój podpis, a następnie przeciągnij go w odpowiednie miejsce i zmień jego rozmiar w razie potrzeby." },
      { step: 4, title: "Zapisz i pobierz", description: "Kliknij Zapisz, aby zastosować swój podpis i pobrać podpisany plik PDF." },
    ],
    useCases: [
      { title: "Podpisanie umowy", description: "Podpisuj umowy i porozumienia elektronicznie, bez drukowania i skanowania.", icon: 'file-signature' },
      { title: "Wypełnienie formularza", description: "Dodaj swój podpis do formularzy wniosków, formularzy zgód i dokumentów urzędowych.", icon: 'clipboard' },
      { title: "Procesy zatwierdzania", description: "Podpisuj dokumenty w ramach procesów przeglądu i zatwierdzania.", icon: 'check-circle' },
    ],
    faq: [
      { question: "Czy podpis elektroniczny jest prawnie wiążący?", answer: "Podpisy elektroniczne są prawnie uznawane w większości krajów. Jednak niektóre dokumenty mogą wymagać określonych typów podpisów cyfrowych. Sprawdź lokalne przepisy." },
      { question: "Czy mogę zapisać swój podpis do wykorzystania w przyszłości?", answer: "Tak, możesz zapisać swój podpis w lokalnej pamięci przeglądarki, aby mieć do niego szybki dostęp podczas podpisywania przyszłych dokumentów." },
      { question: "Czy mogę dodać wiele podpisów do jednego dokumentu?", answer: "Tak, możesz dodać dowolną liczbę podpisów, umieszczając każdy z nich niezależnie na dowolnej stronie." },
    ],
  },

  'crop-pdf': {
    title: "Przytnij plik PDF",
    metaDescription: "Przytnij strony PDF, aby usunąć marginesy i niechciane obszary. Precyzyjnie przycinaj dokumenty PDF.",
    keywords: ["przytnij pdf", "przyciąć pdf", "obciąć marginesy w pliku PDF", "zmienić rozmiar stron PDF", "narzędzie do przycinania plików PDF"],
    description: "<p>Przytnij plik PDF umożliwia przycięcie marginesów i usunięcie niepożądanych obszarów ze stron plików PDF. Jest to przydatne do usuwania nadmiaru białych znaków, skupiania się na określonych obszarach treści lub standaryzacji wymiarów strony.</p>\n      <p>Możesz przyciąć wszystkie strony równomiernie lub dostosować każdą stronę indywidualnie. Interfejs wizualny pokazuje dokładnie, co zostanie zachowane, co ułatwia osiągnięcie precyzyjnych wyników.</p>\n      <p>Wszystkie przycinanie odbywa się lokalnie w przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać dokument, który chcesz przyciąć." },
      { step: 2, title: "Zdefiniuj obszar uprawy", description: "Przeciągnij uchwyty przycinania, aby zdefiniować obszar, który chcesz zachować, lub wprowadź dokładne wymiary." },
      { step: 3, title: "Zastosuj do stron", description: "Wybierz opcję przycięcia do wszystkich stron lub wybierz określone strony do przycięcia." },
      { step: 4, title: "Przytnij i pobierz", description: "Kliknij Przytnij, aby zastosować zmiany i pobrać przycięty plik PDF." },
    ],
    useCases: [
      { title: "Usuń marginesy", description: "Przytnij nadmierne marginesy zeskanowanych dokumentów lub plików PDF z dużymi krawędziami.", icon: 'maximize-2' },
      { title: "Skup się na treści", description: "Przytnij, aby wyróżnić określone obszary treści, usuwając nagłówki, stopki lub paski boczne.", icon: 'target' },
      { title: "Standaryzuj strony", description: "Ustaw wszystkie strony tego samego rozmiaru, przycinając je do jednakowych wymiarów.", icon: 'square' },
    ],
    faq: [
      { question: "Czy przycinanie trwale usuwa zawartość?", answer: "Tak, przycinanie usuwa zawartość poza obszarem przycinania. Pamiętaj, aby zachować kopię zapasową oryginalnego pliku." },
      { question: "Czy mogę przycinać różne strony w inny sposób?", answer: "Tak, możesz zastosować różne ustawienia przycinania do poszczególnych stron lub grup stron." },
      { question: "Czy przycinanie wpłynie na jakość tekstu?", answer: "Nie, przycinanie usuwa jedynie obszary poza granicami przycięcia. Pozostała treść zachowuje swoją oryginalną jakość." },
    ],
  },

  'extract-pages': {
    title: "Wyodrębnij strony",
    metaDescription: "Wyodrębnij określone strony z plików PDF. Wybierz i zapisz poszczególne strony jako nowe dokumenty.",
    keywords: ["wyodrębnij strony pdf", "zapisz strony PDF", "skopiuj strony pdf", "ekstraktor stron pdf"],
    description: "<p>Wyodrębnij strony umożliwia wybranie i zapisanie określonych stron z dokumentu PDF jako nowych plików. Jest to idealne rozwiązanie do wyciągania odpowiednich sekcji, tworzenia fragmentów lub oddzielania połączonych dokumentów.</p>\n      <p>Możesz wyodrębnić pojedyncze strony, zakresy stron lub wiele stron nie sąsiadujących ze sobą. Wizualny podgląd strony ułatwia identyfikację i wybór dokładnie tych stron, których potrzebujesz.</p>\n      <p>Całe wyodrębnianie odbywa się lokalnie w przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać dokument, z którego chcesz wyodrębnić strony." },
      { step: 2, title: "Wybierz Strony", description: "Kliknij miniatury stron, aby je wybrać, lub wprowadź numery stron i zakresy w polu wejściowym." },
      { step: 3, title: "Wyodrębnij i pobierz", description: "Kliknij opcję Wyodrębnij, aby utworzyć nowy plik PDF z wybranymi stronami i pobrać go." },
    ],
    useCases: [
      { title: "Twórz fragmenty", description: "Wyodrębnij odpowiednie strony z raportów lub książek, aby utworzyć ukierunkowane dokumenty referencyjne.", icon: 'file-minus' },
      { title: "Udostępnij określoną treść", description: "Wyciągnij określone strony, aby je udostępnić bez wysyłania całego dokumentu.", icon: 'share-2' },
      { title: "Archiwizuj ważne strony", description: "Wyodrębniaj i zapisuj kluczowe strony z dokumentów w celu długoterminowej archiwizacji.", icon: 'archive' },
    ],
    faq: [
      { question: "Czy mogę wyodrębnić strony, które nie sąsiadują ze sobą?", answer: "Tak, możesz wybrać dowolną kombinację stron, zarówno następujących po sobie, jak i rozproszonych po całym dokumencie." },
      { question: "Czy zakładki zostaną zachowane?", answer: "Zakładki wskazujące wyodrębnione strony zostaną zachowane w nowym dokumencie." },
      { question: "Czy mogę wyodrębnić strony z wielu plików PDF?", answer: "To narzędzie działa z jednym plikiem PDF na raz. Aby połączyć strony z wielu plików PDF, użyj narzędzia Połącz PDF." },
    ],
  },

  'organize-pdf': {
    title: "Organizuj pliki PDF",
    metaDescription: "Zmieniaj kolejność, duplikuj i usuwaj strony PDF. Przeciągnij i upuść, aby uporządkować dokumenty.",
    keywords: ["uporządkuj PDF", "zmień kolejność stron PDF", "przeorganizuj PDF", "organizator stron PDF"],
    description: "<p>Organizuj PDF udostępnia intuicyjny interfejs typu „przeciągnij i upuść”, umożliwiający zmianę układu stron w dokumentach PDF. Zmieniaj kolejność stron, duplikuj ważne sekcje lub z łatwością usuwaj niechciane strony.</p>\n      <p>Wizualne miniatury stron ułatwiają identyfikację treści i porządkowanie stron dokładnie tak, jak ich potrzebujesz. Świetnie nadaje się do restrukturyzacji dokumentów, tworzenia niestandardowych kolejności stron lub czyszczenia zeskanowanych plików.</p>\n      <p>Cała organizacja odbywa się lokalnie w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać dokument, który chcesz uporządkować." },
      { step: 2, title: "Zmień układ stron", description: "Przeciągnij miniatury stron, aby zmienić ich kolejność. W razie potrzeby kliknij przyciski powielania lub usuwania na każdej stronie." },
      { step: 3, title: "Zapisz i pobierz", description: "Kliknij Zapisz, aby zastosować zmiany i pobrać przeorganizowany plik PDF." },
    ],
    useCases: [
      { title: "Napraw kolejność stron", description: "Popraw kolejność stron, które zostały nieprawidłowo zeskanowane lub połączone.", icon: 'arrow-up-down' },
      { title: "Ułóż własną kolejność", description: "Ułóż strony w określonej kolejności dla prezentacji lub raportów.", icon: 'list' },
      { title: "Usuń niechciane strony", description: "Usuń puste strony, duplikaty lub nieistotną treść z dokumentów.", icon: 'trash-2' },
    ],
    faq: [
      { question: "Czy mogę duplikować strony?", answer: "Tak, możesz powielić dowolną stronę i umieścić kopię w dowolnym miejscu dokumentu." },
      { question: "Czy istnieje funkcja cofania?", answer: "Tak, możesz cofać i ponawiać zmiany. W każdej chwili możesz także przywrócić pierwotną kolejność." },
      { question: "Czy mogę organizować wiele plików PDF razem?", answer: "To narzędzie działa z jednym plikiem PDF na raz. Aby połączyć i uporządkować wiele plików PDF, najpierw połącz je za pomocą narzędzia Połącz PDF." },
    ],
  },

  'delete-pages': {
    title: "Usuń strony",
    metaDescription: "Usuń niechciane strony z plików PDF. Z łatwością wybieraj i usuwaj określone strony.",
    keywords: ["usuń strony pdf", "usuń strony pdf", "narzędzie do usuwania stron pdf", "usuń strony z pdf"],
    description: "<p>Usuń strony umożliwia szybkie i łatwe usuwanie niechcianych stron z dokumentów PDF. Niezależnie od tego, czy chcesz usunąć puste strony, nieaktualną treść czy poufne informacje, dzięki temu narzędziu jest to proste.</p>\n      <p>Wizualne miniatury stron pomagają dokładnie określić, które strony należy usunąć. Możesz usunąć pojedyncze strony lub wiele stron jednocześnie.</p>\n      <p>Całe przetwarzanie odbywa się lokalnie w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać dokument, z którego chcesz usunąć strony." },
      { step: 2, title: "Wybierz Strony do usunięcia", description: "Kliknij miniatury stron, aby oznaczyć je do usunięcia, lub wprowadź numery stron w polu wejściowym." },
      { step: 3, title: "Usuń i pobierz", description: "Kliknij Usuń, aby usunąć wybrane strony i pobrać zaktualizowany plik PDF." },
    ],
    useCases: [
      { title: "Usuń puste strony", description: "Wyczyść dokumenty, usuwając przypadkowo dołączone puste strony.", icon: 'file-x' },
      { title: "Usuń treści wrażliwe", description: "Przed udostępnieniem dokumentów usuń strony zawierające poufne informacje.", icon: 'shield' },
      { title: "Usprawnij dokumenty", description: "Usuń nieaktualne lub nieistotne strony, aby utworzyć bardziej szczegółowe dokumenty.", icon: 'filter' },
    ],
    faq: [
      { question: "Czy mogę odzyskać usunięte strony?", answer: "Usunięcie jest trwałe w pliku wyjściowym. Zachowaj kopię zapasową oryginalnego dokumentu, jeśli strony będą Ci później potrzebne." },
      { question: "Czy mogę usunąć wiele stron jednocześnie?", answer: "Tak, możesz zaznaczyć i usunąć wiele stron jednocześnie." },
      { question: "Czy usunięcie stron wpłynie na zakładki?", answer: "Zakładki wskazujące usunięte strony zostaną usunięte. Zakładki do pozostałych stron zostają zachowane." },
    ],
  },


  // ==================== EDIT & ANNOTATE ====================
  'bookmark': {
    title: "Edytuj zakładki",
    metaDescription: "Dodawaj, edytuj i zarządzaj zakładkami PDF. Utwórz strukturę nawigacji dla swoich dokumentów.",
    keywords: ["zakładki pdf", "edytować zakładki", "dodaj zakładki", "nawigacja w pliku PDF", "spis treści"],
    description: "<p>Edytuj zakładki umożliwia tworzenie, modyfikowanie i porządkowanie zakładek w dokumentach PDF. Zakładki umożliwiają szybką nawigację do określonych sekcji, ułatwiając korzystanie z długich dokumentów.</p>\n      <p>Możesz dodawać nowe zakładki, edytować istniejące, reorganizować hierarchię zakładek lub importować zakładki ze źródeł zewnętrznych. To narzędzie jest niezbędne do tworzenia profesjonalnych dokumentów, po których można łatwo nawigować.</p>\n      <p>Cała edycja odbywa się lokalnie w przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać dokument, który chcesz edytować." },
      { step: 2, title: "Zarządzaj zakładkami", description: "Dodaj nowe zakładki, edytuj istniejące lub przeciągnij, aby zreorganizować hierarchię." },
      { step: 3, title: "Zapisz i pobierz", description: "Kliknij Zapisz, aby zastosować zmiany i pobrać plik PDF ze zaktualizowanymi zakładkami." },
    ],
    useCases: [
      { title: "Utwórz nawigację", description: "Dodawaj zakładki do długich dokumentów, aby ułatwić czytelnikom szybkie przechodzenie do określonych sekcji.", icon: 'navigation' },
      { title: "Organizuj rozdziały", description: "Utwórz hierarchiczną strukturę zakładek odzwierciedlającą organizację rozdziałów w dokumencie.", icon: 'book-open' },
      { title: "Popraw dostępność", description: "Dodaj zakładki, aby dokumenty były bardziej dostępne i przyjazne dla użytkownika.", icon: 'accessibility' },
    ],
    faq: [
      { question: "Czy mogę tworzyć zagnieżdżone zakładki?", answer: "Tak, możesz utworzyć strukturę hierarchiczną z zakładkami nadrzędnymi i podrzędnymi." },
      { question: "Czy mogę zaimportować zakładki z pliku?", answer: "Tak, możesz importować struktury zakładek z plików JSON lub tekstowych." },
      { question: "Czy zakładki będą działać we wszystkich czytnikach plików PDF?", answer: "Tak, zakładki to standardowa funkcja PDF obsługiwana przez wszystkie główne czytniki plików PDF." },
    ],
  },

  'table-of-contents': {
    title: "Spis treści",
    metaDescription: "Wygeneruj spis treści dla swojego pliku PDF. Utwórz klikalną nawigację z zakładek.",
    keywords: ["spis treści w pdf", "generator toc", "indeks PDF", "nawigacja po dokumencie"],
    description: "<p>Spis treści generuje stronę ze spisem treści, po której można się poruszać, dla dokumentów PDF. Spis treści można utworzyć na podstawie istniejących zakładek lub niestandardowych wpisów, zapewniając czytelnikom przegląd i szybką nawigację.</p>\n      <p>Dostosuj wygląd, korzystając z różnych stylów, czcionek i układów. Wygenerowany spis treści zawiera klikalne linki prowadzące bezpośrednio do stron, do których istnieją odniesienia.</p>\n      <p>Całe przetwarzanie odbywa się lokalnie w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać dokument." },
      { step: 2, title: "Skonfiguruj spis treści", description: "Wybierz generowanie z zakładek lub tworzenie niestandardowych wpisów. Wybierz opcje stylu i pozycjonowania." },
      { step: 3, title: "Wygeneruj i pobierz", description: "Kliknij opcję Generuj, aby utworzyć spis treści i pobrać zaktualizowany plik PDF." },
    ],
    useCases: [
      { title: "Artykuły akademickie", description: "Dodaj profesjonalny spis treści do prac dyplomowych, dysertacji i artykułów naukowych.", icon: 'graduation-cap' },
      { title: "Raporty biznesowe", description: "Twórz raporty, w których można nawigować, z przejrzystymi listami sekcji dla interesariuszy.", icon: 'bar-chart' },
      { title: "Podręczniki użytkownika", description: "Generuj kompleksowe spisy treści dla dokumentacji technicznej i podręczników użytkownika.", icon: 'book' },
    ],
    faq: [
      { question: "Czy mogę dostosować wygląd spisu treści?", answer: "Tak, możesz wybierać spośród różnych stylów, czcionek i układów spisu treści." },
      { question: "Gdzie jest wstawiony spis treści?", answer: "Domyślnie spis treści jest wstawiany na początku dokumentu, ale możesz wybrać inną lokalizację." },
      { question: "Czy wpisy spisu treści są klikalne?", answer: "Tak, każdy wpis jest klikalnym linkiem prowadzącym do odpowiedniej strony." },
    ],
  },

  'page-numbers': {
    title: "Numery stron",
    metaDescription: "Dodawaj numery stron do dokumentów PDF. Dostosuj pozycję, format i numer początkowy.",
    keywords: ["dodaj numery stron", "numery stron w pdf", "numerowanie stron pdf", "paginacja PDF"],
    description: "\n      <p>Numery stron dodają konfigurowalną numerację stron do dokumentów PDF. Wybieraj spośród różnych formatów, pozycji i stylów, aby dopasować je do projektu dokumentu.</p>\n      <p>Możesz ustawić numer początkowy, pominąć niektóre strony i użyć różnych formatów numeracji (1, 2, 3 lub i, ii, iii). Świetnie nadaje się do tworzenia profesjonalnych dokumentów z odpowiednią paginacją.</p>\n      <p>Całe przetwarzanie odbywa się lokalnie w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać dokument." },
      { step: 2, title: "Skonfiguruj numerację", description: "Wybierz pozycję, format, numer początkowy i strony do numerowania." },
      { step: 3, title: "Zastosuj i pobierz", description: "Kliknij Zastosuj, aby dodać numery stron i pobrać zaktualizowany plik PDF." },
    ],
    useCases: [
      { title: "Dokumenty zawodowe", description: "Dodawaj numery stron do raportów, ofert i dokumentów biznesowych.", icon: 'file-text' },
      { title: "Artykuły akademickie", description: "Numeruj strony zgodnie z wymogami formatowania akademickiego.", icon: 'graduation-cap' },
      { title: "Dokumenty prawne", description: "Dodaj odpowiednią paginację do umów i dokumentów prawnych.", icon: 'scale' },
    ],
    faq: [
      { question: "Czy mogę pominąć pierwszą stronę?", answer: "Tak, możesz określić, które strony numerować, a które pominąć, np. strony tytułowe lub strony tytułowe." },
      { question: "Jakie formaty liczb są dostępne?", answer: "Można używać cyfr arabskich (1, 2, 3), cyfr rzymskich (i, ii, iii lub I, II, III) lub liter (a, b, c)." },
      { question: "Czy mogę dodać format „Strona X z Y”?", answer: "Tak, w formacie numeracji możesz uwzględnić całkowitą liczbę stron." },
    ],
  },

  'add-watermark': {
    title: "Dodaj znak wodny",
    metaDescription: "Dodaj tekstowe lub graficzne znaki wodne do plików PDF. Chroń i oznakuj swoje dokumenty.",
    keywords: ["dodaj znak wodny", "znak wodny PDF", "pieczęć PDF", "oznacz PDF", "chroń PDF"],
    description: "\n      <p>Dodaj znak wodny umożliwia umieszczanie tekstowych lub graficznych znaków wodnych w dokumentach PDF. Znaki wodne mogą wskazywać status dokumentu (wersja robocza, poufne), dodawać branding lub zapobiegać nieautoryzowanemu kopiowaniu.</p>\n      <p>Dostosuj położenie, rozmiar, przezroczystość, obrót i kolor znaku wodnego. Zastosuj do wszystkich stron lub wybierz określone strony. Narzędzie obsługuje zarówno tekstowe, jak i graficzne znaki wodne.</p>\n      <p>Całe przetwarzanie odbywa się lokalnie w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać dokument." },
      { step: 2, title: "Utwórz znak wodny", description: "Wpisz tekst lub prześlij obraz znaku wodnego. Dostosuj położenie, rozmiar, krycie i obrót." },
      { step: 3, title: "Zastosuj i pobierz", description: "Kliknij Zastosuj, aby dodać znak wodny i pobrać zaktualizowany plik PDF." },
    ],
    useCases: [
      { title: "Ochrona dokumentów", description: "Dodaj znaki wodne „Poufne” lub „Wersja robocza”, aby wskazać status dokumentu.", icon: 'shield' },
      { title: "Dokumenty marki", description: "Dodawaj logo lub nazwy firmy do oficjalnych dokumentów.", icon: 'award' },
      { title: "Informacja o prawach autorskich", description: "Dodaj informacje o prawach autorskich, aby chronić własność intelektualną.", icon: 'copyright' },
    ],
    faq: [
      { question: "Czy mogę użyć obrazu jako znaku wodnego?", answer: "Tak, możesz przesyłać obrazy PNG, JPG lub SVG, aby używać ich jako znaków wodnych." },
      { question: "Czy mogę ustawić znak wodny jako półprzezroczysty?", answer: "Tak, możesz dostosować krycie od całkowicie przezroczystego do całkowicie nieprzezroczystego." },
      { question: "Czy mogę zastosować różne znaki wodne na różnych stronach?", answer: "Narzędzie stosuje ten sam znak wodny do wybranych stron. W przypadku różnych znaków wodnych przetwórz dokument kilka razy." },
    ],
  },

  'header-footer': {
    title: "Nagłówek i stopka",
    metaDescription: "Dodawaj nagłówki i stopki do dokumentów PDF. Dołącz numery stron, daty i niestandardowy tekst.",
    keywords: ["nagłówek PDF", "stopka pdf", "dodaj stopkę nagłówka", "papier firmowy w pliku PDF"],
    description: "\n      <p>Nagłówek i stopka dodaje dostosowywalne nagłówki i stopki do dokumentów PDF. Dołącz numery stron, daty, tytuły dokumentów lub dowolny niestandardowy tekst w obszarach nagłówka lub stopki.</p>\n      <p>Umieść treść po lewej stronie, pośrodku lub po prawej stronie nagłówka/stopki. W razie potrzeby użyj innej treści dla stron nieparzystych i parzystych. Świetnie nadaje się do tworzenia profesjonalnych dokumentów o spójnym formatowaniu.</p>\n      <p>Całe przetwarzanie odbywa się lokalnie w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać dokument." },
      { step: 2, title: "Skonfiguruj nagłówek/stopkę", description: "Wprowadź tekst w obszarach nagłówka i stopki. Dodaj numery stron, daty lub niestandardowy tekst." },
      { step: 3, title: "Zastosuj i pobierz", description: "Kliknij Zastosuj, aby dodać nagłówki/stopki i pobrać zaktualizowany plik PDF." },
    ],
    useCases: [
      { title: "Dokumenty biznesowe", description: "Dodaj nazwę firmy i numery stron do profesjonalnych dokumentów.", icon: 'briefcase' },
      { title: "Dokumenty prawne", description: "Dołącz numery spraw, daty i odniesienia do stron w zgłoszeniach prawnych.", icon: 'scale' },
      { title: "Artykuły akademickie", description: "Dodaj bieżące nagłówki z tytułem artykułu i nazwiskiem autora.", icon: 'graduation-cap' },
    ],
    faq: [
      { question: "Czy mogę mieć różne nagłówki na stronach nieparzystych i parzystych?", answer: "Tak, możesz skonfigurować inną zawartość dla stron nieparzystych i parzystych." },
      { question: "Czy mogę podać aktualną datę?", answer: "Tak, możesz wstawić dynamiczne pola daty, które pokazują aktualną datę." },
      { question: "Czy mogę pominąć nagłówek/stopkę na niektórych stronach?", answer: "Tak, możesz określić, które strony mają mieć nagłówki/stopki, a które pominąć." },
    ],
  },

  'invert-colors': {
    title: "Odwróć kolory",
    metaDescription: "Odwróć kolory PDF do czytania w trybie ciemnym. Konwertuj dokumenty na kolory negatywne.",
    keywords: ["odwróć kolory PDF", "pdf tryb ciemny", "negatywny pdf", "odwrócone kolory"],
    description: "\n      <p>Odwróć kolory tworzy negatyw obrazu w dokumentach PDF, tworząc negatywny efekt obrazu. Jest to szczególnie przydatne przy tworzeniu ciemnych wersji dokumentów, ułatwiających czytanie w warunkach słabego oświetlenia.</p>\n      <p>Narzędzie może odwrócić wszystkie kolory lub selektywnie zachować określone elementy, takie jak obrazy. Świetnie nadaje się, aby zmniejszyć zmęczenie oczu podczas czytania dokumentów w nocy.</p>\n      <p>Całe przetwarzanie odbywa się lokalnie w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać dokument." },
      { step: 2, title: "Skonfiguruj opcje", description: "Wybierz, czy chcesz odwrócić całą zawartość, czy zachować obrazy." },
      { step: 3, title: "Odwróć i pobierz", description: "Kliknij Odwróć, aby przetworzyć dokument i pobrać wynik." },
    ],
    useCases: [
      { title: "Nocne czytanie", description: "Twórz wersje dokumentów w trybie ciemnym, aby wygodnie czytać je w nocy.", icon: 'moon' },
      { title: "Zmniejsz zmęczenie oczu", description: "Odwróć jasne dokumenty, aby zmniejszyć zmęczenie oczu podczas dłuższego czytania.", icon: 'eye' },
      { title: "Drukuj oszczędności", description: "Odwracaj dokumenty, aby zmniejszyć zużycie atramentu podczas drukowania wersji roboczych.", icon: 'printer' },
    ],
    faq: [
      { question: "Czy obrazy również zostaną odwrócone?", answer: "Domyślnie tak. Możesz zachować oryginalne obrazy podczas odwracania tekstu i tła." },
      { question: "Czy mogę odwracać tylko określone strony?", answer: "Tak, możesz wybrać, które strony chcesz odwrócić." },
      { question: "Czy inwersja jest odwracalna?", answer: "Można ponownie odwrócić dokument, aby przywrócić mniej więcej oryginalne kolory." },
    ],
  },

  'background-color': {
    title: "Kolor tła",
    metaDescription: "Zmień kolor tła pliku PDF. Dodaj kolorowe tła do stron dokumentu.",
    keywords: ["kolor tła pdf", "zmień tło PDF", "kolorowy pdf", "kolor strony pdf"],
    description: "\n      <p>Kolor tła umożliwia zmianę lub dodanie kolorów tła do stron PDF. Może to poprawić czytelność, zwiększyć atrakcyjność wizualną lub spełnić wymagania dotyczące marki.</p>\n      <p>Wybierz dowolny kolor tła i zastosuj go do wszystkich lub wybranych stron. Narzędzie zachowuje całą istniejącą treść podczas dodawania warstwy tła.</p>\n      <p>Całe przetwarzanie odbywa się lokalnie w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać dokument." },
      { step: 2, title: "Wybierz Kolor", description: "Wybierz kolor tła za pomocą próbnika kolorów lub wprowadź kod szesnastkowy." },
      { step: 3, title: "Zastosuj i pobierz", description: "Kliknij Zastosuj, aby dodać tło i pobrać zaktualizowany plik PDF." },
    ],
    useCases: [
      { title: "Popraw czytelność", description: "Dodaj jasne tło w kolorze kremowym lub w sepii, aby zmniejszyć zmęczenie oczu.", icon: 'eye' },
      { title: "Dokumenty marki", description: "Używaj kolorów marki jako tła dla materiałów marketingowych.", icon: 'palette' },
      { title: "Zaznacz sekcje", description: "Użyj różnych kolorów tła, aby rozróżnić sekcje dokumentu.", icon: 'layers' },
    ],
    faq: [
      { question: "Czy tło zakryje istniejącą treść?", answer: "Nie, tło jest dodawane za istniejącą treścią, zachowując cały tekst i obrazy." },
      { question: "Czy mogę używać różnych kolorów dla różnych stron?", answer: "Konieczne byłoby wielokrotne przetwarzanie dokumentu w celu uzyskania różnych kolorów na różnych stronach." },
      { question: "Czy mogę usunąć istniejące tło?", answer: "To narzędzie dodaje tła. Aby usunąć tło, może być konieczne użycie narzędzia Edytuj plik PDF." },
    ],
  },

  'text-color': {
    title: "Zmień kolor tekstu",
    metaDescription: "Zmień kolor tekstu w dokumentach PDF. Zmodyfikuj kolor całej zawartości tekstowej.",
    keywords: ["zmień kolor tekstu PDF", "kolor tekstu PDF", "zmienić kolor tekstu", "pokoloruj ponownie tekst PDF"],
    description: "<p>Zmień kolor tekstu umożliwia zmianę koloru tekstu w dokumentach PDF. Jest to przydatne do poprawy kontrastu, dopasowywania marki lub tworzenia wizualnych odmian dokumentów.</p>\n      <p>Wybierz nowy kolor i zastosuj go do całego tekstu w dokumencie. Narzędzie przetwarza elementy tekstowe, zachowując obrazy i inną treść.</p>\n      <p>Całe przetwarzanie odbywa się lokalnie w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać dokument." },
      { step: 2, title: "Wybierz Kolor", description: "Wybierz nowy kolor tekstu za pomocą próbnika kolorów lub wprowadź kod szesnastkowy." },
      { step: 3, title: "Zastosuj i pobierz", description: "Kliknij Zastosuj, aby zmienić kolor tekstu i pobrać zaktualizowany plik PDF." },
    ],
    useCases: [
      { title: "Popraw kontrast", description: "Zmień kolor tekstu, aby poprawić czytelność na tle tła.", icon: 'contrast' },
      { title: "Spójność marki", description: "Zaktualizuj kolory tekstu, aby dopasować je do wytycznych marki.", icon: 'palette' },
      { title: "Dostępność", description: "Dostosuj kolory tekstu, aby spełnić wymagania dotyczące kontrastu dostępności.", icon: 'accessibility' },
    ],
    faq: [
      { question: "Czy cały tekst zostanie zmieniony?", answer: "Tak, narzędzie zmienia kolor wszystkich elementów tekstowych w dokumencie." },
      { question: "Czy mogę zmienić tylko określony tekst?", answer: "To narzędzie zmienia cały tekst. W przypadku selektywnych zmian użyj narzędzia Edytuj PDF." },
      { question: "Czy sformatowany tekst (pogrubienie, kursywa) zostanie zachowany?", answer: "Tak, formatowanie tekstu zostaje zachowane; zmienia się tylko kolor." },
    ],
  },

  'add-stamps': {
    title: "Dodaj znaczki",
    metaDescription: "Dodawaj pieczątki do dokumentów PDF. Używaj gotowych lub niestandardowych stempli do zatwierdzania, przeglądania i nie tylko.",
    keywords: ["pieczątki PDF", "dodaj pieczątkę", "pieczęć zatwierdzająca", "pieczęć PDF"],
    description: "\n      <p>Dodaj stemple umożliwia umieszczanie obrazów stempli w dokumentach PDF. Użyj gotowych stempli, takich jak „Zatwierdzony”, „Odrzucony”, „Wersja robocza” lub prześlij niestandardowe obrazy stempli.</p>\n      <p>Umieść znaczniki w dowolnym miejscu strony, zmień ich rozmiar i zastosuj na jednej lub wielu stronach. Świetnie nadaje się do obiegu dokumentów, zatwierdzeń i wskaźników stanu.</p>\n      <p>Całe przetwarzanie odbywa się lokalnie w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać dokument." },
      { step: 2, title: "Wybierz Pieczęć", description: "Wybierz gotowy znaczek lub prześlij niestandardowy obraz stempla." },
      { step: 3, title: "Pozycjonuj i aplikuj", description: "Kliknij, aby umieścić stempel, dostosuj położenie i rozmiar, a następnie pobierz." },
    ],
    useCases: [
      { title: "Zatwierdzenie dokumentu", description: "Dodaj stemple „Zatwierdzone” lub „Odrzucone” do dokumentów w przepływach pracy recenzji.", icon: 'check-circle' },
      { title: "Wskazanie stanu", description: "Oznacz dokumenty jako „Wersja robocza”, „Ostateczna” lub „Poufna”.", icon: 'tag' },
      { title: "Kontrola jakości", description: "Dodaj stemple kontroli jakości, aby wskazać zakończenie inspekcji lub przeglądu.", icon: 'clipboard-check' },
    ],
    faq: [
      { question: "Jakie gotowe stemple są dostępne?", answer: "Ustawienia wstępne obejmują Zatwierdzone, Odrzucone, Wersja robocza, Ostateczne, Poufne, Kopia i inne." },
      { question: "Czy mogę przesłać niestandardowe znaczki?", answer: "Tak, możesz przesłać obrazy PNG lub JPG, aby wykorzystać je jako niestandardowe stemple." },
      { question: "Czy mogę dodać wiele pieczątek do jednego dokumentu?", answer: "Tak, możesz dodać wiele pieczątek i ustawić każdy z nich niezależnie." },
    ],
  },

  'remove-annotations': {
    title: "Usuń adnotacje",
    metaDescription: "Usuń adnotacje z plików PDF. Usuń komentarze, wyróżnienia i znaczniki.",
    keywords: ["usuń adnotacje PDF", "usuń komentarze", "usuń podkreślenia", "czysty pdf"],
    description: "\n      <p>Usuń adnotacje usuwa komentarze, wyróżnienia, notatki i inne adnotacje z dokumentów PDF. Spowoduje to utworzenie czystej wersji dokumentu bez znaczników.</p>\n      <p>Możesz usunąć wszystkie adnotacje lub selektywnie usunąć określone typy. Świetnie nadaje się do tworzenia ostatecznych wersji recenzowanych dokumentów lub usuwania wrażliwych komentarzy.</p>\n      <p>Całe przetwarzanie odbywa się lokalnie w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać dokument." },
      { step: 2, title: "Wybierz Typy adnotacji", description: "Wybierz typy adnotacji do usunięcia: komentarze, wyróżnienia, linki itp." },
      { step: 3, title: "Usuń i pobierz", description: "Kliknij Usuń, aby usunąć adnotacje i pobrać czysty plik PDF." },
    ],
    useCases: [
      { title: "Sfinalizuj dokumenty", description: "Usuń komentarze i znaczniki do recenzji przed opublikowaniem dokumentów końcowych.", icon: 'file-check' },
      { title: "Ochrona prywatności", description: "Przed udostępnieniem usuń komentarze, które mogą zawierać poufne informacje.", icon: 'shield' },
      { title: "Czysta dystrybucja", description: "Twórz czyste kopie dokumentów z adnotacjami do dystrybucji.", icon: 'copy' },
    ],
    faq: [
      { question: "Jakie typy adnotacji można usunąć?", answer: "Komentarze, wyróżnienia, podkreślenia, przekreślenia, karteczki samoprzylepne, pieczątki i łącza można usunąć." },
      { question: "Czy mogę zachować niektóre adnotacje?", answer: "Tak, możesz wybrać, jakie typy adnotacji chcesz usunąć, a które zachować." },
      { question: "Czy jest to odwracalne?", answer: "Nie, usunięcie adnotacji jest trwałe. W razie potrzeby zachowaj kopię zapasową oryginału." },
    ],
  },

  'form-filler': {
    title: "Wypełnianie formularzy PDF",
    metaDescription: "Wypełniaj formularze PDF online. Wypełniaj interaktywne formularze PDF bez drukowania.",
    keywords: ["wypełnij formularz PDF", "wypełnianie formularzy PDF", "formularz PDF do wypełnienia", "interaktywny plik PDF"],
    description: "\n      <p>Form Filler umożliwia wypełnianie interaktywnych formularzy PDF bezpośrednio w przeglądarce. Wypełniaj pola tekstowe, zaznaczaj pola, wybieraj opcje i dodawaj podpisy bez drukowania dokumentu.</p>\n      <p>Narzędzie obsługuje standardowe formularze PDF i formularze XFA. Wypełnione dane można zapisać, a formularz spłaszczyć, aby zapobiec dalszej edycji.</p>\n      <p>Całe przetwarzanie odbywa się lokalnie w Twojej przeglądarce, dzięki czemu dane w formularzu pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój formularz PDF", description: "Przeciągnij i upuść formularz PDF lub kliknij, aby wybrać plik." },
      { step: 2, title: "Wypełnij formularz", description: "Kliknij pola formularza, aby wprowadzić tekst, pola wyboru lub wybrać opcje." },
      { step: 3, title: "Zapisz i pobierz", description: "Kliknij Zapisz, aby zachować swoje wpisy i pobrać wypełniony formularz." },
    ],
    useCases: [
      { title: "Formularze zgłoszeniowe", description: "Wypełnianie wniosków o pracę, wniosków o pozwolenia i formularzy rejestracyjnych.", icon: 'clipboard' },
      { title: "Formularze podatkowe", description: "Wypełniaj dokumenty podatkowe i formularze finansowe drogą elektroniczną.", icon: 'file-text' },
      { title: "Umowy", description: "Przed podpisaniem wypełnij formularze umowy, podając swoje dane.", icon: 'file-signature' },
    ],
    faq: [
      { question: "Czy mogę zapisać swoje postępy?", answer: "Tak, możesz zapisać częściowo wypełnione formularze i kontynuować później." },
      { question: "Co to jest spłaszczanie formy?", answer: "Spłaszczanie przekształca pola formularza w treść statyczną, uniemożliwiając dalszą edycję." },
      { question: "Czy obsługiwane są formularze XFA?", answer: "Tak, narzędzie obsługuje zarówno standardowe formularze AcroForm, jak i XFA." },
    ],
  },

  'form-creator': {
    title: "Kreator formularzy",
    metaDescription: "Twórz formularze PDF do wypełnienia. Dodawaj pola tekstowe, pola wyboru i listy rozwijane do dokumentów.",
    keywords: ["utwórz formularz PDF", "kreator formularzy pdf", "PDF do wypełnienia", "dodaj pola formularza"],
    description: "\n      <p>Kreator formularzy przekształca statyczne dokumenty PDF w interaktywne formularze do wypełnienia. Dodaj pola tekstowe, pola wyboru, przyciski opcji, menu rozwijane i nie tylko, aby tworzyć profesjonalne formularze.</p>\n      <p>Przeciągnij i upuść elementy formularza na dokument, skonfiguruj właściwości pól i utwórz formularze, które można wypełniać elektronicznie. Świetnie nadaje się do tworzenia aplikacji, ankiet i formularzy gromadzenia danych.</p>\n      <p>Całe przetwarzanie odbywa się lokalnie w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać dokument do przekształcenia w formularz." },
      { step: 2, title: "Dodaj pola formularza", description: "Wybierz typy pól z paska narzędzi i kliknij, aby umieścić je w dokumencie." },
      { step: 3, title: "Skonfiguruj i zapisz", description: "Ustaw właściwości pola, a następnie zapisz i pobierz formularz PDF do wypełnienia." },
    ],
    useCases: [
      { title: "Formularze zgłoszeniowe", description: "Twórz możliwe do wypełnienia podania o pracę, formularze członkowskie i rejestracje.", icon: 'user-plus' },
      { title: "Ankiety", description: "Twórz interaktywne ankiety i kwestionariusze do gromadzenia danych.", icon: 'clipboard-list' },
      { title: "Formularze zamówień", description: "Twórz formularze zamówień produktów z polami ilościowymi i polami wyboru.", icon: 'shopping-cart' },
    ],
    faq: [
      { question: "Jakie typy pól mogę dodać?", answer: "Pola tekstowe, pola wyboru, przyciski opcji, listy rozwijane, selektory dat i pola podpisów." },
      { question: "Czy mogę ustawić wymagane pola?", answer: "Tak, możesz oznaczyć pola jako wymagane i dodać reguły walidacji." },
      { question: "Czy mogę dodać obliczenia?", answer: "Podstawowe obliczenia, takie jak suma i średnia, można dodać do pól numerycznych." },
    ],
  },

  'remove-blank-pages': {
    title: "Usuń puste strony",
    metaDescription: "Automatycznie wykrywaj i usuwaj puste strony z dokumentów PDF.",
    keywords: ["usuń puste strony", "usuń puste strony", "czysty pdf", "PDF do usuwania pustych stron"],
    description: "<p>Usuń puste strony automatycznie wykrywa i usuwa puste strony z dokumentów PDF. Jest to przydatne do czyszczenia zeskanowanych dokumentów, usuwania stron rozdzielających lub eliminowania przypadkowo dołączonych pustych stron.</p>\n      <p>Narzędzie wykorzystuje automatyczne wykrywanie do identyfikowania naprawdę pustych stron, zachowując jednocześnie strony o minimalnej zawartości. Możesz dostosować próg czułości, aby kontrolować, co jest uznawane za „puste”.</p>\n      <p>Całe przetwarzanie odbywa się lokalnie w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać dokument." },
      { step: 2, title: "Dostosuj próg", description: "W razie potrzeby ustaw próg wykrywania pustego miejsca (domyślnie działa w przypadku większości dokumentów)." },
      { step: 3, title: "Usuń i pobierz", description: "Kliknij Usuń, aby usunąć puste strony i pobrać wyczyszczony plik PDF." },
    ],
    useCases: [
      { title: "Wyczyść zeskanowane dokumenty", description: "Usuń puste strony z dokumentów skanowanych wsadowo.", icon: 'scan' },
      { title: "Usuń separatory", description: "Usuń puste strony oddzielające ze scalonych dokumentów.", icon: 'minus' },
      { title: "Zmniejsz rozmiar pliku", description: "Usuń niepotrzebne puste strony, aby zmniejszyć rozmiar dokumentu.", icon: 'minimize-2' },
    ],
    faq: [
      { question: "Jak działa wykrywanie pustych miejsc?", answer: "Narzędzie analizuje zawartość strony i traktuje strony z minimalną widoczną treścią lub bez niej jako puste." },
      { question: "Czy mogę wyświetlić podgląd, które strony zostaną usunięte?", answer: "Tak, wykryte puste strony są podświetlane w celu sprawdzenia przed usunięciem." },
      { question: "Co się stanie, jeśli strona zawiera tylko nagłówek/stopkę?", answer: "Możesz dostosować próg, aby określić, czy strony z minimalną zawartością powinny być uważane za puste." },
    ],
  },
  // ==================== CONVERT TO PDF ====================
  'image-to-pdf': {
    title: "Obrazy do PDF",
    metaDescription: "Konwertuj dowolny obraz do formatu PDF. Obsługa formatów JPG, PNG, WebP, BMP, TIFF, SVG i HEIC.",
    keywords: ["obraz do pdf", "przekonwertuj obraz", "zdjęcie do pdf", "zdjęcie do pdf"],
    description: "\n      <p>Obraz na PDF konwertuje obrazy w dowolnym formacie na dokumenty PDF. Obsługa formatów JPG, PNG, WebP, BMP, TIFF, SVG i HEIC sprawia, że jest to uniwersalny konwerter obrazów.</p>\n      <p>Połącz wiele obrazów w jeden plik PDF, ułóż je w dowolnej kolejności i dostosuj rozmiar i orientację strony. Świetnie nadaje się do tworzenia albumów ze zdjęciami, archiwów dokumentów lub portfolio.</p>\n      <p>Wszystkie konwersje odbywają się w Twojej przeglądarce, dzięki czemu Twoje obrazy pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij obrazy", description: "Przeciągnij i upuść obrazy w dowolnym obsługiwanym formacie lub kliknij, aby wybrać pliki." },
      { step: 2, title: "Uporządkuj i skonfiguruj", description: "Zmień kolejność obrazów i wybierz rozmiar strony oraz opcje orientacji." },
      { step: 3, title: "Konwertuj i pobierz", description: "Kliknij Konwertuj, aby utworzyć plik PDF i pobrać wynik." },
    ],
    useCases: [
      { title: "Kolekcje zdjęć", description: "Łącz zdjęcia z różnych źródeł w jeden album PDF.", icon: 'images' },
      { title: "Dokumenty w formacie mieszanym", description: "Konwertuj obrazy z różnych formatów na ujednolicony plik PDF.", icon: 'file-stack' },
      { title: "Tworzenie archiwum", description: "Twórz archiwa PDF ze zbiorów obrazów w celu długoterminowego przechowywania.", icon: 'archive' },
    ],
    faq: [
      { question: "Jakie formaty obrazów są obsługiwane?", answer: "Obsługiwane są formaty JPG, JPEG, PNG, WebP, BMP, TIFF, TIF, SVG, HEIC i HEIF." },
      { question: "Czy mogę mieszać różne formaty obrazów?", answer: "Tak, możesz łączyć obrazy w różnych formatach w jeden plik PDF." },
      { question: "Czy jakość obrazu zostanie zachowana?", answer: "Tak, obrazy są osadzane w oryginalnej jakości, chyba że zdecydujesz się je skompresować." },
    ],
  },

  'png-to-pdf': {
    title: "PNG do PDF",
    metaDescription: "Konwertuj obrazy PNG na format PDF. Zachowaj przezroczystość i połącz wiele plików PNG.",
    keywords: ["png do pdf", "konwertuj png", "konwerter png", "przezroczysty obraz do pliku pdf"],
    description: "\n      <p>PNG to PDF konwertuje obrazy PNG na dokumenty PDF, zachowując jednocześnie przezroczystość. Świetnie nadaje się do grafiki, logo, zrzutów ekranu i obrazów z przezroczystym tłem.</p>\n      <p>Połącz wiele plików PNG w jeden plik PDF, ułóż je w dowolnej kolejności i dostosuj ustawienia strony. Konwersja pozwala zachować wysoką jakość oryginalnych obrazów.</p>\n      <p>Wszystkie konwersje odbywają się w Twojej przeglądarce, dzięki czemu Twoje obrazy pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij pliki PNG", description: "Przeciągnij i upuść obrazy PNG lub kliknij, aby wybrać pliki." },
      { step: 2, title: "Uporządkuj i skonfiguruj", description: "Zmień kolejność obrazów i wybierz opcje rozmiaru strony." },
      { step: 3, title: "Konwertuj i pobierz", description: "Kliknij Konwertuj, aby utworzyć plik PDF i pobrać." },
    ],
    useCases: [
      { title: "Portfolio graficzne", description: "Zbierz grafiki i projekty PNG w profesjonalne portfolio.", icon: 'palette' },
      { title: "Dokumentacja zrzutów ekranu", description: "Konwertuj zrzuty ekranu na dokumentację PDF.", icon: 'monitor' },
      { title: "Kolekcje logo", description: "Twórz katalogi PDF z logo i zasobami marki.", icon: 'award' },
    ],
    faq: [
      { question: "Czy zachowana jest przejrzystość?", answer: "Przezroczystość PNG jest zachowywana w pliku wyjściowym PDF." },
      { question: "A co z animacjami PNG?", answer: "Animowane pliki PNG są konwertowane na obrazy statyczne przy użyciu pierwszej klatki." },
      { question: "Czy mogę ustawić kolor tła?", answer: "Tak, możesz wybrać kolor tła dla obszarów przezroczystych." },
    ],
  },

  'webp-to-pdf': {
    title: "WebP do formatu PDF",
    metaDescription: "Konwertuj obrazy WebP na format PDF. Nowoczesna konwersja formatu obrazu z zachowaniem jakości.",
    keywords: ["WebP do PDF", "konwertuj WebP", "konwerter WebP", "obraz WebP do PDF"],
    description: "\n      <p>WebP to PDF konwertuje nowoczesne obrazy WebP na dokumenty PDF. WebP to popularny format obrazów internetowych, a to narzędzie ułatwia konwersję tych obrazów do druku lub archiwizacji.</p>\n      <p>Połącz wiele plików WebP w jeden plik PDF z możliwością dostosowania ustawień strony. Konwersja zachowuje jakość obrazu podczas tworzenia kompaktowych plików PDF.</p>\n      <p>Wszystkie konwersje odbywają się w Twojej przeglądarce, dzięki czemu Twoje obrazy pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij pliki WebP", description: "Przeciągnij i upuść obrazy WebP lub kliknij, aby wybrać pliki." },
      { step: 2, title: "Skonfiguruj opcje", description: "Ułóż obrazy i wybierz rozmiar i orientację strony." },
      { step: 3, title: "Konwertuj i pobierz", description: "Kliknij Konwertuj, aby utworzyć plik PDF." },
    ],
    useCases: [
      { title: "Archiwizacja treści internetowych", description: "Konwertuj obrazy internetowe na format PDF w celu archiwizacji w trybie offline.", icon: 'globe' },
      { title: "Przygotowanie do druku", description: "Konwertuj obrazy WebP na format PDF w celu drukowania.", icon: 'printer' },
      { title: "Standaryzacja formatu", description: "Konwertuj nowoczesny WebP na uniwersalnie kompatybilny plik PDF.", icon: 'file-check' },
    ],
    faq: [
      { question: "Co to jest format WebP?", answer: "WebP to nowoczesny format obrazu opracowany przez firmę Google, który zapewnia doskonałą kompresję obrazów internetowych." },
      { question: "Czy jakość jest zachowana?", answer: "Tak, konwersja zachowuje oryginalną jakość obrazu." },
      { question: "Czy mogę przekonwertować animowany WebP?", answer: "Animowane pliki WebP są konwertowane jako obrazy statyczne." },
    ],
  },

  'svg-to-pdf': {
    title: "SVG do PDF",
    metaDescription: "Konwertuj grafikę wektorową SVG na format PDF. Zachowaj skalowalność i jakość.",
    keywords: ["svg do pdf", "przekonwertuj svg", "wektor do pdf", "skalowalna grafika do formatu PDF"],
    description: "\n      <p>SVG do formatu PDF konwertuje skalowalną grafikę wektorową do dokumentów PDF, zachowując ich jakość wektorową. Pliki SVG pozostają ostre bez względu na rozmiar, a jakość ta zostaje zachowana w pliku PDF.</p>\n      <p>Świetnie nadaje się do konwersji logo, ikon, ilustracji i rysunków technicznych. Powstały plik PDF zachowuje skalowalność oryginalnej grafiki wektorowej.</p>\n      <p>Cała konwersja odbywa się w Twojej przeglądarce, dzięki czemu Twoje pliki pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij pliki SVG", description: "Przeciągnij i upuść pliki SVG lub kliknij, aby wybrać." },
      { step: 2, title: "Skonfiguruj ustawienia", description: "Wybierz rozmiar strony i opcje układu." },
      { step: 3, title: "Konwertuj i pobierz", description: "Kliknij Konwertuj, aby utworzyć wektorowy plik PDF." },
    ],
    useCases: [
      { title: "Konwersja logo", description: "Konwertuj logo SVG na format PDF na potrzeby materiałów drukowanych.", icon: 'award' },
      { title: "Rysunki techniczne", description: "Konwertuj eksporty CAD i ilustracje techniczne do formatu PDF.", icon: 'ruler' },
      { title: "Kolekcje ikon", description: "Twórz katalogi PDF z zestawami ikon i grafiką.", icon: 'grid' },
    ],
    faq: [
      { question: "Czy jakość wektorowa jest zachowana?", answer: "Tak, jakość wektorowa SVG jest w pełni zachowywana w pliku wyjściowym PDF." },
      { question: "Czy mogę konwertować złożone pliki SVG?", answer: "Tak, obsługiwane są złożone pliki SVG z gradientami, filtrami i efektami." },
      { question: "A co z osadzonymi czcionkami?", answer: "Czcionki osadzone w plikach SVG są zachowywane w pliku PDF." },
    ],
  },

  'bmp-to-pdf': {
    title: "BMP do PDF",
    metaDescription: "Konwertuj obrazy bitmapowe BMP na format PDF. Obsługa starszych formatów z zachowaniem jakości.",
    keywords: ["bmp do pdf", "przekonwertuj bmp", "bitmapa do pliku pdf", "konwerter bmp"],
    description: "\n      <p>BMP do PDF konwertuje obrazy bitmapowe na dokumenty PDF. BMP to starszy format obrazu powszechnie używany w środowiskach Windows, a to narzędzie ułatwia konwersję tych plików do nowoczesnego formatu PDF.</p>\n      <p>Połącz wiele plików BMP w jeden plik PDF z możliwością dostosowania ustawień. Konwersja kompresuje zazwyczaj duże pliki BMP przy zachowaniu jakości obrazu.</p>\n      <p>Wszystkie konwersje odbywają się w Twojej przeglądarce, dzięki czemu Twoje obrazy pozostają prywatne.</p>",
    howToUse: [
      { step: 1, title: "Prześlij pliki BMP", description: "Przeciągnij i upuść obrazy BMP lub kliknij, aby wybrać pliki." },
      { step: 2, title: "Skonfiguruj opcje", description: "Ułóż obrazy i wybierz ustawienia strony." },
      { step: 3, title: "Konwertuj i pobierz", description: "Kliknij Konwertuj, aby utworzyć plik PDF." },
    ],
    useCases: [
      { title: "Konwersja starszych plików", description: "Konwertuj stare pliki BMP na nowoczesny format PDF.", icon: 'history' },
      { title: "Zrzuty ekranu Windowsa", description: "Konwertuj zrzuty ekranu z bitmapami systemu Windows na format PDF.", icon: 'monitor' },
      { title: "Modernizacja Archiwum", description: "Zaktualizuj starsze archiwa obrazów do formatu PDF.", icon: 'archive' },
    ],
    faq: [
      { question: "Czy rozmiar pliku zostanie zmniejszony?", answer: "Tak, pliki BMP są zazwyczaj znacznie kompresowane podczas konwersji do formatu PDF." },
      { question: "Czy jakość jest zachowana?", answer: "Tak, jakość obrazu jest zachowywana podczas konwersji." },
      { question: "Jakie głębie kolorów BMP są obsługiwane?", answer: "Obsługiwane są wszystkie standardowe głębie kolorów BMP, w tym 24-bitowe i 32-bitowe." },
    ],
  },

  'psd-to-pdf': {
    title: "PSD do PDF",
    metaDescription: "Konwertuj pliki Adobe Photoshop (PSD) do formatu PDF. Obsługuje wiele plików i zachowuje jakość obrazu.",
    keywords: ["psd do pdf", "przekonwertuj psd", "photoshop do pdf", "konwerter PSD", "adobe psd do pdf"],
    description: "\n      <p>PSD na PDF konwertuje pliki programu Adobe Photoshop (PSD) na dokumenty PDF. To narzędzie umożliwia przeglądanie i udostępnianie projektów PSD bez konieczności instalowania programu Photoshop.</p>\n      <p>Możesz konwertować wiele plików PSD jednocześnie i łączyć je w jeden dokument PDF. Narzędzie przetwarza każdy plik PSD, renderując widoczne warstwy w wysokiej jakości strony PDF.</p>\n      <p>Wszystkie konwersje odbywają się lokalnie w Twojej przeglądarce, dzięki czemu Twoje projekty pozostają prywatne i bezpieczne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij pliki PSD", description: "Przeciągnij i upuść pliki PSD lub PSB lub kliknij, aby wybrać je ze swojego urządzenia." },
      { step: 2, title: "Ułóż kolejność", description: "Przeciągnij i upuść miniatury plików, aby ułożyć je w żądanej kolejności." },
      { step: 3, title: "Konwertuj i pobierz", description: "Kliknij Konwertuj, aby wyrenderować pliki PSD i pobrać dokument PDF." },
    ],
    useCases: [
      { title: "Udostępnij projekty", description: "Udostępniaj projekty programu Photoshop klientom i współpracownikom, którzy nie mają programu Photoshop.", icon: 'share-2' },
      { title: "Tworzenie portfela", description: "Utwórz swoje prace projektowe w profesjonalnym portfolio PDF.", icon: 'layout' },
      { title: "Przygotowanie do druku", description: "Konwertuj projekty do formatu PDF w celu drukowania.", icon: 'printer' },
    ],
    faq: [
      { question: "Czy muszę mieć zainstalowany Photoshop?", answer: "Nie, to narzędzie działa całkowicie w przeglądarce i nie wymaga programu Adobe Photoshop." },
      { question: "Czy warstwy są zachowane?", answer: "Narzędzie renderuje widoczny stan PSD (obraz złożony). Poszczególne warstwy w pliku PDF są spłaszczane." },
      { question: "Jaki jest maksymalny rozmiar pliku?", answer: "Możesz przesyłać pliki o rozmiarze do 100MB każdy. Przetworzenie dużych plików PSD może zająć chwilę." },
    ],
  },

  'heic-to-pdf': {
    title: "HEIC do pliku PDF",
    metaDescription: "Konwertuj zdjęcia HEIC iPhone'a na format PDF. Łatwa konwersja formatu obrazu Apple.",
    keywords: ["HEIC do PDF", "konwertuj HEIC", "zdjęcie z iPhone’a do PDF", "obraz Apple do PDF"],
    description: "\n      <p>HEIC do formatu PDF konwertuje zdjęcia w formacie Apple High Efficiency Image Format na dokumenty PDF. HEIC to domyślny format zdjęć na iPhone'ach i iPadach, a to narzędzie ułatwia udostępnianie tych zdjęć.</p>\n      <p>Połącz wiele zdjęć HEIC w jeden plik PDF, idealny do tworzenia albumów ze zdjęciami lub archiwów dokumentów ze zdjęć z iPhone'a.</p>\n      <p>Wszystkie konwersje odbywają się w Twojej przeglądarce, dzięki czemu Twoje zdjęcia pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij pliki HEIC", description: "Przeciągnij i upuść zdjęcia HEIC lub kliknij, aby wybrać pliki." },
      { step: 2, title: "Uporządkuj zdjęcia", description: "Zmień kolejność zdjęć i wybierz ustawienia strony." },
      { step: 3, title: "Konwertuj i pobierz", description: "Kliknij Konwertuj, aby utworzyć plik PDF." },
    ],
    useCases: [
      { title: "Albumy zdjęć na iPhone'a", description: "Twórz albumy PDF ze zdjęć iPhone'a w celu udostępniania.", icon: 'smartphone' },
      { title: "Skanowanie dokumentów", description: "Konwertuj skany dokumentów iPhone'a do formatu PDF.", icon: 'scan' },
      { title: "Udostępnianie międzyplatformowe", description: "Konwertuj HEIC na PDF, aby zapewnić uniwersalną kompatybilność.", icon: 'share-2' },
    ],
    faq: [
      { question: "Co to jest format HEIC?", answer: "HEIC (High Efficiency Image Container) to format obrazu firmy Apple o lepszej kompresji niż JPEG." },
      { question: "Czy zdjęcia na żywo są obsługiwane?", answer: "Zdjęcia na żywo są konwertowane na obrazy statyczne za pomocą klatki kluczowej." },
      { question: "Czy dane EXIF są zachowywane?", answer: "Metadane zdjęć można opcjonalnie zachować lub usunąć podczas konwersji." },
    ],
  },

  'tiff-to-pdf': {
    title: "TIFF do PDF",
    metaDescription: "Konwertuj obrazy TIFF na PDF. Obsługa wielostronicowych plików TIFF i konwersji wysokiej jakości.",
    keywords: ["tiff do pdf", "przekonwertuj tiff", "tif do pdf", "wielostronicowy tiff"],
    description: "\n      <p>TIFF na PDF konwertuje obrazy TIFF, w tym wielostronicowe pliki TIFF, na dokumenty PDF. TIFF jest powszechnie używany w przypadku wysokiej jakości skanów i profesjonalnej grafiki.</p>\n      <p>Wielostronicowe pliki TIFF są automatycznie konwertowane na wielostronicowe pliki PDF. Konwersja pozwala zachować wysoką jakość oryginalnych obrazów.</p>\n      <p>Cała konwersja odbywa się w Twojej przeglądarce, dzięki czemu Twoje pliki pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij pliki TIFF", description: "Przeciągnij i upuść pliki TIFF lub kliknij, aby wybrać." },
      { step: 2, title: "Skonfiguruj opcje", description: "Wybierz ustawienia strony i opcje kompresji." },
      { step: 3, title: "Konwertuj i pobierz", description: "Kliknij Konwertuj, aby utworzyć plik PDF." },
    ],
    useCases: [
      { title: "Zeskanowane dokumenty", description: "Konwertuj wysokiej jakości skany z formatu TIFF na PDF.", icon: 'scan' },
      { title: "Profesjonalna grafika", description: "Konwertuj profesjonalną grafikę TIFF do dystrybucji.", icon: 'image' },
      { title: "Konwersja archiwum", description: "Konwertuj archiwa TIFF na bardziej przystępny format PDF.", icon: 'archive' },
    ],
    faq: [
      { question: "Czy obsługiwane są wielostronicowe pliki TIFF?", answer: "Tak, wielostronicowe pliki TIFF są automatycznie konwertowane na wielostronicowe pliki PDF." },
      { question: "Czy jakość jest zachowana?", answer: "Tak, jakość TIFF jest w pełni zachowywana w pliku PDF." },
      { question: "Jaka kompresja jest stosowana?", answer: "Możesz wybierać pomiędzy opcjami kompresji bezstratnej i stratnej." },
    ],
  },

  'txt-to-pdf': {
    title: "Tekst do pliku PDF",
    metaDescription: "Konwertuj zwykłe pliki tekstowe na format PDF. Dostosuj czcionki, marginesy i układ strony.",
    keywords: ["txt do pdf", "tekst do pdf", "przekonwertować plik tekstowy", "zwykły tekst do pliku PDF"],
    description: "\n      <p>Text to PDF konwertuje zwykłe pliki tekstowe na sformatowane dokumenty PDF. Dostosuj czcionki, rozmiary, marginesy i układ strony, aby tworzyć profesjonalnie wyglądające dokumenty z prostego tekstu.</p>\n      <p>Świetnie nadaje się do konwertowania plików kodu, dzienników, notatek lub dowolnej treści w postaci zwykłego tekstu do udostępnianego formatu PDF.</p>\n      <p>Cała konwersja odbywa się w Twojej przeglądarce, dzięki czemu Twoje pliki pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij plik tekstowy", description: "Przeciągnij i upuść plik .txt lub kliknij, aby wybrać." },
      { step: 2, title: "Dostosuj formatowanie", description: "Wybierz czcionkę, rozmiar, marginesy i ustawienia strony." },
      { step: 3, title: "Konwertuj i pobierz", description: "Kliknij Konwertuj, aby utworzyć sformatowany plik PDF." },
    ],
    useCases: [
      { title: "Dokumentacja kodu", description: "Konwertuj pliki kodu źródłowego na format PDF w celu uzyskania dokumentacji.", icon: 'code' },
      { title: "Archiwa dzienników", description: "Konwertuj pliki dziennika do formatu PDF w celach archiwalnych.", icon: 'file-text' },
      { title: "Uwaga Konwersja", description: "Konwertuj notatki w postaci zwykłego tekstu na sformatowane dokumenty PDF.", icon: 'sticky-note' },
    ],
    faq: [
      { question: "Jakie czcionki są dostępne?", answer: "Dostępnych jest wiele czcionek, w tym czcionki o stałej szerokości dla kodu." },
      { question: "Czy zawijanie linii jest automatyczne?", answer: "Tak, długie linie są automatycznie zawijane w celu dopasowania do strony." },
      { question: "Czy mogę zachować formatowanie?", answer: "Zachowane są białe znaki i wcięcia z oryginalnego tekstu." },
    ],
  },

  'json-to-pdf': {
    title: "JSON do PDF",
    metaDescription: "Konwertuj pliki JSON na sformatowany plik PDF. Podświetlanie składni i uporządkowane wyjście.",
    keywords: ["json do pdf", "przekonwertuj jsona", "przeglądarka json", "formater json"],
    description: "\n      <p>JSON na PDF konwertuje pliki danych JSON na sformatowane, czytelne dokumenty PDF. Dane wyjściowe obejmują podświetlanie składni i odpowiednie wcięcia ułatwiające czytanie.</p>\n      <p>Świetnie nadaje się do dokumentowania odpowiedzi API, plików konfiguracyjnych lub wszelkich danych JSON, które należy udostępnić lub zarchiwizować w czytelnym formacie.</p>\n      <p>Wszystkie konwersje odbywają się w Twojej przeglądarce, dzięki czemu Twoje dane pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij plik JSON", description: "Przeciągnij i upuść plik .json lub kliknij, aby wybrać." },
      { step: 2, title: "Skonfiguruj wyświetlacz", description: "Wybierz opcje formatowania i podświetlanie składni." },
      { step: 3, title: "Konwertuj i pobierz", description: "Kliknij Konwertuj, aby utworzyć sformatowany plik PDF." },
    ],
    useCases: [
      { title: "Dokumentacja API", description: "Konwertuj odpowiedzi API na format PDF w celu uzyskania dokumentacji.", icon: 'code' },
      { title: "Archiwa konfiguracji", description: "Archiwizuj pliki konfiguracyjne w czytelnym formacie PDF.", icon: 'settings' },
      { title: "Raporty danych", description: "Twórz raporty PDF z eksportów danych JSON.", icon: 'bar-chart' },
    ],
    faq: [
      { question: "Czy podświetlanie składni jest uwzględnione?", answer: "Tak, składnia JSON jest wyróżniona kolorami kluczy, wartości i typów." },
      { question: "Jak obsługiwane są dane zagnieżdżone?", answer: "Zagnieżdżone obiekty i tablice są odpowiednio wcięte, aby zapewnić czytelność." },
      { question: "A co z dużymi plikami JSON?", answer: "Duże pliki są automatycznie dzielone na wiele stron." },
    ],
  },

  'word-to-pdf': {
    title: "Word do PDF",
    metaDescription: "Konwertuj dokumenty Word (DOCX) na format PDF. Zachowaj formatowanie i układ w przekonwertowanych dokumentach.",
    keywords: ["Word do PDF", "DOCX do PDF", "konwertuj Word", "konwerter Word", "Microsoft Word do PDF"],
    description: "\n      <p>Word na PDF konwertuje dokumenty Microsoft Word na format PDF, zachowując oryginalne formatowanie, układ i strukturę treści.</p>\n      <p>Prześlij pliki DOCX i uzyskaj wysokiej jakości plik PDF nadający się do udostępniania, drukowania lub archiwizowania. Konwersja zachowuje formatowanie tekstu, style akapitów i podstawową strukturę dokumentu.</p>\n      <p>Wszystkie konwersje odbywają się lokalnie w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne i bezpieczne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij dokument programu Word", description: "Przeciągnij i upuść plik .docx lub kliknij, aby wybrać z urządzenia." },
      { step: 2, title: "Poczekaj na przetworzenie", description: "Narzędzie załaduje dokument i przygotuje go do konwersji." },
      { step: 3, title: "Pobierz PDF", description: "Kliknij Pobierz, aby zapisać przekonwertowany dokument PDF." },
    ],
    useCases: [
      { title: "Udostępnianie dokumentów", description: "Konwertuj dokumenty programu Word na format PDF w celu uniwersalnego udostępniania i przeglądania.", icon: 'share-2' },
      { title: "Przygotowanie do druku", description: "Twórz gotowe do druku pliki PDF z dokumentów programu Word.", icon: 'printer' },
      { title: "Archiwum dokumentów", description: "Archiwizuj dokumenty programu Word w stabilnym formacie PDF w celu długotrwałego przechowywania.", icon: 'archive' },
    ],
    faq: [
      { question: "Czy obsługiwany jest format .doc?", answer: "Obecnie obsługiwany jest tylko format .docx. Najpierw przekonwertuj pliki .doc na .docx za pomocą programu Microsoft Word lub LibreOffice." },
      { question: "Czy obrazy są zachowane?", answer: "Treść tekstowa i podstawowe formatowanie zostają zachowane. Złożone układy z wieloma obrazami mogą mieć uproszczone renderowanie." },
      { question: "Czy konwersja jest bezpieczna?", answer: "Tak, całe przetwarzanie odbywa się w Twojej przeglądarce. Twoje dokumenty nigdy nie opuszczają Twojego urządzenia." },
    ],
  },

  'excel-to-pdf': {
    title: "Excel do PDF",
    metaDescription: "Konwertuj arkusze kalkulacyjne Excel (XLSX) na format PDF. Zachowaj tabele i dane w przekonwertowanych dokumentach.",
    keywords: ["Excela do pdf", "xlsx do pdf", "przekonwertować Excela", "arkusz kalkulacyjny do pliku pdf", "Microsoft Excel do pliku PDF"],
    description: "\n      <p>Excel do formatu PDF konwertuje arkusze kalkulacyjne programu Microsoft Excel do formatu PDF, zachowując jednocześnie strukturę tabeli i organizację danych.</p>\n      <p>Prześlij pliki XLSX i uzyskaj czysty plik PDF z odpowiednio sformatowanymi tabelami. Każdy arkusz w skoroszycie staje się oddzielną sekcją w pliku PDF.</p>\n      <p>Wszystkie konwersje odbywają się lokalnie w Twojej przeglądarce, dzięki czemu Twoje dane pozostają prywatne i bezpieczne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij plik Excel", description: "Przeciągnij i upuść plik .xlsx lub kliknij, aby wybrać z urządzenia." },
      { step: 2, title: "Poczekaj na przetworzenie", description: "Narzędzie załaduje arkusz kalkulacyjny i przekonwertuje wszystkie arkusze." },
      { step: 3, title: "Pobierz PDF", description: "Kliknij Pobierz, aby zapisać przekonwertowany dokument PDF." },
    ],
    useCases: [
      { title: "Udostępnianie raportów", description: "Konwertuj raporty Excel do formatu PDF w celu dystrybucji wśród interesariuszy.", icon: 'file-text' },
      { title: "Archiwizacja danych", description: "Archiwizuj dane arkusza kalkulacyjnego w stabilnym formacie PDF.", icon: 'archive' },
      { title: "Przygotowanie do druku", description: "Twórz gotowe do druku pliki PDF z arkuszy programu Excel.", icon: 'printer' },
    ],
    faq: [
      { question: "Czy obsługiwanych jest wiele arkuszy?", answer: "Tak, wszystkie arkusze w skoroszycie są konwertowane i dołączane do pliku PDF." },
      { question: "Czy obsługiwany jest format .xls?", answer: "Obecnie obsługiwany jest tylko format .xlsx. Proszę najpierw zapisać pliki .xls jako .xlsx." },
      { question: "Czy formuły są zachowane?", answer: "Plik PDF pokazuje obliczone wartości. Formuły nie są wykonywalne w pliku PDF." },
    ],
  },

  'pptx-to-pdf': {
    title: "PowerPoint do pliku PDF",
    metaDescription: "Konwertuj prezentacje programu PowerPoint (PPTX) do formatu PDF. Zachowaj slajdy i zawartość, aby ułatwić udostępnianie.",
    keywords: ["powerpoint do pdf", "pptx do pdf", "przekonwertuj pptx", "prezentacja do pdf", "slajdy do pdf"],
    description: "<p>PowerPoint do formatu PDF konwertuje prezentacje programu Microsoft PowerPoint do formatu PDF, zachowując zawartość slajdów i tekst w celu łatwego udostępniania i przeglądania.</p>\n      <p>Każdy slajd staje się stroną w pliku PDF, co pozwala zachować płynność prezentacji. Świetnie nadaje się do udostępniania prezentacji osobom, które nie mają zainstalowanego programu PowerPoint.</p>\n      <p>Cała konwersja odbywa się lokalnie w Twojej przeglądarce, dzięki czemu Twoje prezentacje pozostają prywatne i bezpieczne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij plik programu PowerPoint", description: "Przeciągnij i upuść plik .pptx lub kliknij, aby wybrać z urządzenia." },
      { step: 2, title: "Poczekaj na przetworzenie", description: "Narzędzie wyodrębni zawartość slajdu i utworzy plik PDF." },
      { step: 3, title: "Pobierz PDF", description: "Kliknij Pobierz, aby zapisać przekonwertowany dokument PDF." },
    ],
    useCases: [
      { title: "Udostępnianie prezentacji", description: "Udostępniaj prezentacje każdemu, bez konieczności korzystania z programu PowerPoint.", icon: 'share-2' },
      { title: "Tworzenie materiałów informacyjnych", description: "Twórz materiały informacyjne w pliku PDF ze slajdów prezentacji.", icon: 'file-text' },
      { title: "Prezentacje archiwalne", description: "Archiwizuj prezentacje w stabilnym formacie PDF.", icon: 'archive' },
    ],
    faq: [
      { question: "Czy animacje zostały zachowane?", answer: "PDF jest formatem statycznym, więc animacje i przejścia nie są zachowywane. Każdy slajd staje się stroną statyczną." },
      { question: "Czy obsługiwany jest format .ppt?", answer: "Obecnie obsługiwany jest tylko format .pptx. Najpierw przekonwertuj pliki .ppt na .pptx." },
      { question: "Czy notatki prelegenta są uwzględnione?", answer: "Obecnie notatki prelegenta nie są uwzględniane w wynikach PDF." },
    ],
  },

  'xps-to-pdf': {
    title: "XPS do formatu PDF",
    metaDescription: "Konwertuj dokumenty XPS do formatu PDF. Konwersja o wysokiej wierności, zachowująca układ i grafikę.",
    keywords: ["XPS do PDF", "konwertuj XPS", "konwerter XPS", "Microsoft XPS do PDF", "format XPS do PDF"],
    description: "\n      <p>XPS do formatu PDF konwertuje dokumenty Microsoft XPS (specyfikacja papieru XML) do formatu PDF, zachowując oryginalny układ, tekst i grafikę wektorową.</p>\n      <p>XPS to format stałego dokumentu podobny do formatu PDF. To narzędzie zapewnia konwersję o wysokiej wierności przy użyciu natywnego analizowania XPS, zapewniając dokładne odwzorowanie dokumentów.</p>\n      <p>Wszystkie konwersje odbywają się lokalnie w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne i bezpieczne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij plik XPS", description: "Przeciągnij i upuść plik .xps lub kliknij, aby wybrać z urządzenia." },
      { step: 2, title: "Poczekaj na przetworzenie", description: "Narzędzie przeanalizuje i przekonwertuje dokument XPS." },
      { step: 3, title: "Pobierz PDF", description: "Kliknij Pobierz, aby zapisać przekonwertowany dokument PDF." },
    ],
    useCases: [
      { title: "Konwersja formatu", description: "Konwertuj dokumenty XPS na szerzej obsługiwany format PDF.", icon: 'file' },
      { title: "Udostępnianie dokumentów", description: "Udostępniaj dokumenty XPS użytkownikom, którzy nie mają przeglądarek XPS.", icon: 'share-2' },
      { title: "Migracja archiwum", description: "Przeprowadź migrację archiwów XPS do formatu PDF, aby uzyskać lepszą kompatybilność.", icon: 'archive' },
    ],
    faq: [
      { question: "Co to jest format XPS?", answer: "XPS (Specyfikacja papieru XML) to format stałego dokumentu firmy Microsoft, podobny do formatu PDF. Jest powszechnie używany do drukowania w systemie Windows." },
      { question: "Czy konwersja jest bezstratna?", answer: "Tak, konwersja zachowuje tekst, grafikę i układ z wysoką wiernością." },
      { question: "Czy obsługiwane są wielostronicowe pliki XPS?", answer: "Tak, wszystkie strony dokumentu XPS są konwertowane do formatu PDF." },
    ],
  },

  'rtf-to-pdf': {
    title: "RTF do PDF",
    metaDescription: "Konwertuj pliki RTF (Rich Text Format) na format PDF. Zachowaj formatowanie tekstu w swoich dokumentach.",
    keywords: ["rtf do pdf", "przekonwertuj rtf", "tekst sformatowany do formatu PDF", "konwerter rtf"],
    description: "\n      <p>RTF na PDF konwertuje pliki w formacie Rich Text na dokumenty PDF. RTF to szeroko obsługiwany format tekstu, który obejmuje podstawowe formatowanie, takie jak czcionki, kolory i style.</p>\n      <p>Prześlij pliki RTF i uzyskaj czysty plik PDF, zachowując treść tekstową i podstawowe formatowanie. Świetnie nadaje się do konwersji starszych dokumentów na nowoczesny format PDF.</p>\n      <p>Wszystkie konwersje odbywają się lokalnie w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne i bezpieczne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij plik RTF", description: "Przeciągnij i upuść plik .rtf lub kliknij, aby wybrać z urządzenia." },
      { step: 2, title: "Poczekaj na przetworzenie", description: "Narzędzie przeanalizuje i skonwertuje zawartość RTF." },
      { step: 3, title: "Pobierz PDF", description: "Kliknij Pobierz, aby zapisać przekonwertowany dokument PDF." },
    ],
    useCases: [
      { title: "Konwersja starszej wersji", description: "Konwertuj stare dokumenty RTF na nowoczesny format PDF.", icon: 'history' },
      { title: "Udostępnianie dokumentów", description: "Udostępniaj dokumenty RTF w powszechnie dostępnym formacie PDF.", icon: 'share-2' },
      { title: "Dokumenty archiwalne", description: "Archiwizuj pliki RTF w stabilnym formacie PDF w celu długotrwałego przechowywania.", icon: 'archive' },
    ],
    faq: [
      { question: "Jakie formatowanie zostało zachowane?", answer: "Konwertowane jest podstawowe formatowanie tekstu, w tym czcionki, akapity i style. Złożone funkcje RTF można uprościć." },
      { question: "Czy mogę konwertować wiele plików RTF?", answer: "Obecnie konwertowany jest jeden plik na raz. Użyj opcji Połącz PDF, aby połączyć wiele przekonwertowanych plików." },
      { question: "Czy osadzone obrazy są obsługiwane?", answer: "Najważniejsza jest treść tekstowa. Obiekty osadzone nie mogą być renderowane." },
    ],
  },

  'epub-to-pdf': {
    title: "EPUB do PDF",
    metaDescription: "Konwertuj e-booki EPUB na format PDF. Zachowaj formatowanie, obrazy i strukturę rozdziałów.",
    keywords: ["epub do pdf", "przekonwertuj epub", "e-book do pdf", "konwerter epubów"],
    description: "\n      <p>EPUB to PDF konwertuje pliki książek elektronicznych na wysokiej jakości dokumenty PDF. EPUB to najpopularniejszy format e-booków, używany przez większość e-czytników i bibliotek cyfrowych.</p>\n      <p>To narzędzie zachowuje formatowanie tekstu, obrazy i strukturę rozdziałów w Twoich e-bookach. Świetnie nadaje się do drukowania, archiwizowania lub udostępniania e-booków w uniwersalnym formacie.</p>\n      <p>Wszystkie konwersje odbywają się lokalnie w Twojej przeglądarce przy użyciu zaawansowanej technologii renderowania, dzięki czemu Twoje książki pozostają prywatne, a konwersja przebiega szybko.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij plik EPUB", description: "Przeciągnij i upuść plik .epub lub kliknij, aby wybrać z urządzenia." },
      { step: 2, title: "Poczekaj na konwersję", description: "Narzędzie wyrenderuje i przekonwertuje wszystkie strony Twojego e-booka." },
      { step: 3, title: "Pobierz PDF", description: "Kliknij Pobierz, aby zapisać przekonwertowany dokument PDF." },
    ],
    useCases: [
      { title: "Drukuj e-booki", description: "Konwertuj e-booki na format PDF w celu wydruku.", icon: 'printer' },
      { title: "Archiwum książek", description: "Przechowuj e-booki w długoterminowo stabilnym formacie PDF.", icon: 'archive' },
      { title: "Udostępnij dokumenty", description: "Udostępniaj e-booki każdemu, nawet bez e-czytnika.", icon: 'share-2' },
    ],
    faq: [
      { question: "Czy formatowanie zostało zachowane?", answer: "Tak! To narzędzie wykorzystuje natywne renderowanie EPUB, zachowując formatowanie tekstu, obrazy i układ z wysoką wiernością." },
      { question: "Czy obsługiwane są pliki EPUB chronione systemem DRM?", answer: "Nie, e-booków chronionych systemem DRM nie można konwertować. Obsługiwane są tylko pliki EPUB wolne od DRM." },
      { question: "Jak określa się rozmiar strony?", answer: "Treść EPUB jest renderowana do standardowego rozmiaru strony A4, co zapewnia optymalną czytelność." },
    ],
  },

  'mobi-to-pdf': {
    title: "MOBI do PDF",
    metaDescription: "Konwertuj e-booki MOBI do formatu PDF. Obsługa formatu Kindle z renderowaniem wysokiej jakości.",
    keywords: ["mobi do pdf", "przekonwertuj mobi", "kindle do pdf", "azw do pdf", "konwerter mobi"],
    description: "\n      <p>MOBI to PDF konwertuje pliki e-booków Amazon Kindle na wysokiej jakości dokumenty PDF. Format MOBI (w tym AZW i AZW3) to zastrzeżony format e-booków firmy Amazon używany na urządzeniach Kindle.</p>\n      <p>To narzędzie zachowuje formatowanie tekstu, obrazy i strukturę książek Kindle. Świetnie nadaje się do drukowania, archiwizowania lub czytania na urządzeniach, które nie obsługują formatu MOBI.</p>\n      <p>Wszystkie konwersje odbywają się lokalnie w Twojej przeglądarce przy użyciu zaawansowanej technologii renderowania, dzięki czemu Twoje książki pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij plik MOBI", description: "Przeciągnij i upuść plik .mobi, .azw lub .azw3 lub kliknij, aby wybrać z urządzenia." },
      { step: 2, title: "Poczekaj na konwersję", description: "Narzędzie wyrenderuje i przekonwertuje wszystkie strony Twojego e-booka." },
      { step: 3, title: "Pobierz PDF", description: "Kliknij Pobierz, aby zapisać przekonwertowany dokument PDF." },
    ],
    useCases: [
      { title: "Drukuj książki Kindle", description: "Konwertuj e-booki Kindle na format PDF w celu wydruku.", icon: 'printer' },
      { title: "Archiwum książek", description: "Przechowuj książki Kindle w uniwersalnym formacie PDF.", icon: 'archive' },
      { title: "Odczyt na różnych urządzeniach", description: "Czytaj książki Kindle na urządzeniach obsługujących tylko pliki PDF.", icon: 'tablet-smartphone' },
    ],
    faq: [
      { question: "Jakie formaty MOBI są obsługiwane?", answer: "To narzędzie obsługuje pliki .mobi, .azw i .azw3 (wersje inne niż DRM)." },
      { question: "Czy obsługiwane są książki Kindle chronione systemem DRM?", answer: "Nie, e-booków chronionych systemem DRM nie można konwertować. Obsługiwane są tylko pliki bez DRM." },
      { question: "Czy moje formatowanie zostanie zachowane?", answer: "Tak! Narzędzie korzysta z natywnego renderowania MOBI, aby zachować tekst, obrazy i układ." },
    ],
  },

  'djvu-to-pdf': {
    title: "DJVU do pliku PDF",
    metaDescription: "Konwertuj pliki dokumentów DJVU na format PDF. Wysokiej jakości renderowanie zeskanowanych dokumentów i książek.",
    keywords: ["djvu do pdf", "przekonwertuj djvu", "konwerter djvu", "djvu pdf", "djv do pdf"],
    description: "<p>DJVU to PDF konwertuje pliki dokumentów DjVu na wysokiej jakości dokumenty PDF. DjVu to format pliku komputerowego przeznaczony głównie do przechowywania zeskanowanych dokumentów, szczególnie tych zawierających kombinację tekstu, rysunków i fotografii.</p>\n      <p>To narzędzie renderuje każdą stronę pliku DJVU z wybraną wartością DPI (w punktach na cal) i łączy je w dokument PDF z możliwością przeszukiwania. Świetnie nadaje się do konwersji zeskanowanych książek, instrukcji technicznych i dokumentów archiwalnych.</p>\n      <p>Wszystkie konwersje odbywają się lokalnie w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne i bezpieczne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij plik DJVU", description: "Przeciągnij i upuść plik .djvu lub .djv albo kliknij, aby wybrać z urządzenia." },
      { step: 2, title: "Skonfiguruj opcje", description: "Wybierz wyjściową rozdzielczość DPI (72, 150 lub 300) i jakość obrazu dla pliku PDF." },
      { step: 3, title: "Konwertuj i pobieraj", description: "Kliknij Konwertuj do formatu PDF i pobierz przekonwertowany dokument." },
    ],
    useCases: [
      { title: "Dokumenty archiwalne", description: "Konwertuj archiwa DJVU do uniwersalnego formatu PDF.", icon: 'archive' },
      { title: "Udostępnij zeskanowane książki", description: "Udostępniaj zeskanowane książki w pliku PDF, aby zwiększyć kompatybilność.", icon: 'share-2' },
      { title: "Drukuj dokumenty", description: "Konwertuj DJVU na wysokiej jakości plik PDF w celu drukowania.", icon: 'printer' },
    ],
    faq: [
      { question: "Co to jest format DJVU?", answer: "DjVu to format pliku przeznaczony do przechowywania zeskanowanych dokumentów, zwłaszcza zawierających tekst, rysunki i obrazy. Zapewnia lepszą kompresję zeskanowanych treści niż PDF." },
      { question: "Jakie DPI wybrać?", answer: "Rozdzielczość 72 DPI jest odpowiednia do przeglądania stron internetowych, 150 DPI do standardowych dokumentów i 300 DPI do drukowania wysokiej jakości." },
      { question: "Czy tekst będzie można przeszukiwać?", answer: "Tekst zostanie wyświetlony jako obrazy. Jeśli potrzebujesz tekstu, który można przeszukiwać, rozważ skorzystanie po konwersji z naszego narzędzia OCR PDF." },
    ],
  },

  'fb2-to-pdf': {
    title: "FB2 do pliku PDF",
    metaDescription: "Konwertuj e-booki FictionBook (FB2) do formatu PDF. Obsługuje wiele plików z renderowaniem wysokiej jakości.",
    keywords: ["fb2 do pdf", "przekonwertuj fb2", "fikcyjna książka do formatu pdf", "konwerter fb2", "fb2.zip do pliku pdf"],
    description: "<p>FB2 to PDF konwertuje pliki e-booków FictionBook (FB2) na wysokiej jakości dokumenty PDF. FB2 to popularny format e-booków oparty na formacie XML, szeroko stosowany w Rosji i Europie Wschodniej.</p>\n      <p>To narzędzie obsługuje zarówno pliki .fb2, jak i .fb2.zip i może przetwarzać wiele plików jednocześnie. Zachowuje formatowanie tekstu, obrazy i strukturę rozdziałów Twoich e-booków.</p>\n      <p>Wszystkie konwersje odbywają się lokalnie w Twojej przeglądarce przy użyciu zaawansowanej technologii renderowania, dzięki czemu Twoje książki pozostają prywatne, a konwersja przebiega szybko.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij pliki FB2", description: "Przeciągnij i upuść jeden lub więcej plików .fb2 lub .fb2.zip albo kliknij, aby wybrać z urządzenia." },
      { step: 2, title: "Wybierz Jakość", description: "Wybierz jakość wydruku: Niska (72 DPI), Średnia (150 DPI) lub Wysoka (300 DPI)." },
      { step: 3, title: "Konwertuj i pobieraj", description: "Kliknij opcję Konwertuj do formatu PDF i pobierz przekonwertowane dokumenty." },
    ],
    useCases: [
      { title: "Drukuj e-booki", description: "Konwertuj e-booki FB2 na format PDF w celu wydruku.", icon: 'printer' },
      { title: "Konwersja wsadowa", description: "Konwertuj wiele plików FB2 na format PDF jednocześnie.", icon: 'layers' },
      { title: "Uniwersalny format", description: "Udostępniaj e-booki w pliku PDF, który działa na każdym urządzeniu.", icon: 'share-2' },
    ],
    faq: [
      { question: "Czy mogę konwertować wiele plików FB2 na raz?", answer: "Tak! To narzędzie obsługuje konwersję wsadową do 20 plików FB2 jednocześnie." },
      { question: "Czy obsługiwane są pliki .fb2.zip?", answer: "Tak, narzędzie automatycznie wyodrębnia i konwertuje pliki FB2 z archiwów .fb2.zip." },
      { question: "Czy formatowanie zostało zachowane?", answer: "Tak! Narzędzie wykorzystuje natywny rendering FB2, zachowując formatowanie tekstu, obrazy i strukturę rozdziałów z wysoką wiernością." },
    ],
  },

  // ==================== CONVERT FROM PDF ====================

  'pdf-to-jpg': {
    title: "PDF do JPG",
    metaDescription: "Konwertuj strony PDF na obrazy JPG. Wysokiej jakości ekstrakcja z konfigurowalną rozdzielczością.",
    keywords: ["pdf do jpg", "pdf do jpega", "przekonwertuj plik PDF na obraz", "wyodrębnij obrazy PDF"],
    description: "\n      <p>PDF na JPG konwertuje strony dokumentów PDF na wysokiej jakości obrazy JPG. Wyodrębnij wszystkie strony lub wybierz określone strony do konwersji, korzystając z dostosowywalnych ustawień rozdzielczości i jakości.</p>\n      <p>Świetnie nadaje się do wyodrębniania obrazów z plików PDF, tworzenia miniatur lub konwertowania dokumentów do użytku w Internecie.</p>\n      <p>Wszystkie konwersje odbywają się w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać." },
      { step: 2, title: "Wybierz Strony i jakość", description: "Wybierz strony do konwersji i ustaw opcje jakości/DPI." },
      { step: 3, title: "Konwertuj i pobierz", description: "Kliknij Konwertuj, aby wyodrębnić obrazy i pobrać je w formacie ZIP." },
    ],
    useCases: [
      { title: "Publikowanie w Internecie", description: "Konwertuj strony PDF na obrazy do użytku w witrynie internetowej.", icon: 'globe' },
      { title: "Media społecznościowe", description: "Wyodrębnij strony jako obrazy do udostępniania w mediach społecznościowych.", icon: 'share-2' },
      { title: "Prezentacje", description: "Konwertuj slajdy PDF na obrazy do prezentacji.", icon: 'presentation' },
    ],
    faq: [
      { question: "Jakie ustawienia jakości są dostępne?", answer: "Możesz ustawić DPI od 72 do 300 i jakość JPEG od 1-100." },
      { question: "Czy mogę konwertować tylko określone strony?", answer: "Tak, możesz wybrać pojedyncze strony lub zakresy stron do konwersji." },
      { question: "Jak obsługiwanych jest wiele stron?", answer: "Każda strona staje się oddzielnym plikiem JPG, pobieranym jako archiwum ZIP." },
    ],
  },

  'pdf-to-png': {
    title: "PDF do PNG",
    metaDescription: "Konwertuj strony PDF na obrazy PNG. Bezstratna jakość z obsługą przezroczystości.",
    keywords: ["PDF do PNG", "przekonwertuj plik PDF na PNG", "ekstrakcja obrazu pdf", "bezstratna konwersja plików PDF"],
    description: "\n      <p>PDF do PNG konwertuje strony dokumentów PDF na wysokiej jakości obrazy PNG z bezstratną kompresją. Format PNG doskonale zachowuje jakość obrazu i obsługuje przezroczystość.</p>\n      <p>Świetnie nadaje się do wyodrębniania grafiki, diagramów lub dowolnej treści, w której zachowanie jakości ma kluczowe znaczenie.</p>\n      <p>Wszystkie konwersje odbywają się w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać." },
      { step: 2, title: "Skonfiguruj opcje", description: "Wybierz strony i ustaw opcje rozdzielczości (DPI)." },
      { step: 3, title: "Konwertuj i pobierz", description: "Kliknij Konwertuj, aby wyodrębnić obrazy PNG." },
    ],
    useCases: [
      { title: "Ekstrakcja grafiki", description: "Wyodrębniaj diagramy i grafiki o doskonałej jakości.", icon: 'image' },
      { title: "Zasoby projektowe", description: "Konwertuj projekty PDF na PNG na potrzeby oprogramowania do edycji.", icon: 'palette' },
      { title: "Dokumentacja", description: "Twórz wysokiej jakości obrazy do dokumentacji technicznej.", icon: 'file-text' },
    ],
    faq: [
      { question: "Dlaczego warto wybrać PNG zamiast JPG?", answer: "PNG oferuje bezstratną kompresję i obsługę przezroczystości, idealną dla grafiki i tekstu." },
      { question: "Czy obsługiwane jest przezroczyste tło?", answer: "Tak, strony PDF z przezroczystością są zachowywane w formacie PNG." },
      { question: "Jakiego DPI powinienem użyć?", answer: "Użyj rozdzielczości 150 DPI do oglądania na ekranie i 300 DPI do drukowania." },
    ],
  },

  'pdf-to-webp': {
    title: "PDF do WebP",
    metaDescription: "Konwertuj strony PDF na obrazy WebP. Nowoczesny format z doskonałą kompresją.",
    keywords: ["pdf do webp", "przekonwertuj pdf na webp", "nowoczesny format obrazu", "zoptymalizowane obrazy internetowe"],
    description: "\n      <p>PDF na WebP konwertuje strony dokumentów PDF na obrazy WebP, nowoczesny format obrazów Google, który zapewnia doskonałą kompresję i wysoką jakość.</p>\n      <p>Obrazy WebP są mniejsze niż JPG lub PNG, a jednocześnie zachowują porównywalną jakość, dzięki czemu idealnie nadają się do użytku w Internecie.</p>\n      <p>Wszystkie konwersje odbywają się w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać." },
      { step: 2, title: "Ustaw opcje jakości", description: "Wybierz strony i ustaw ustawienia jakości/kompresji." },
      { step: 3, title: "Konwertuj i pobierz", description: "Kliknij opcję Konwertuj, aby utworzyć obrazy WebP." },
    ],
    useCases: [
      { title: "Optymalizacja sieci", description: "Twórz obrazy zoptymalizowane pod kątem Internetu z zawartości PDF.", icon: 'globe' },
      { title: "Oszczędność przepustowości", description: "Zmniejsz rozmiar pliku obrazu, aby przyspieszyć ładowanie.", icon: 'zap' },
      { title: "Nowoczesne strony internetowe", description: "Używaj nowoczesnych formatów obrazów we współczesnych projektach internetowych.", icon: 'layout' },
    ],
    faq: [
      { question: "Co to jest format WebP?", answer: "WebP to nowoczesny format obrazu firmy Google oferujący doskonałą kompresję." },
      { question: "Czy WebP jest powszechnie obsługiwany?", answer: "Tak, wszystkie nowoczesne przeglądarki obsługują format WebP." },
      { question: "O ile mniejsze są pliki WebP?", answer: "Pliki WebP są zazwyczaj o 25–35% mniejsze niż równoważne pliki JPG." },
    ],
  },

  'pdf-to-bmp': {
    title: "PDF do BMP",
    metaDescription: "Konwertuj strony PDF na obrazy bitmapowe BMP. Nieskompresowany format o maksymalnej zgodności.",
    keywords: ["pdf do bmp", "przekonwertować plik PDF na mapę bitową", "nieskompresowane obrazy", "starszego formatu"],
    description: "<p>PDF do BMP konwertuje strony dokumentów PDF na obrazy bitmapowe BMP. BMP to nieskompresowany format o maksymalnej zgodności ze starszymi systemami i aplikacjami.</p>\n      <p>Chociaż pliki BMP są większe niż formaty skompresowane, oferują doskonałą jakość i uniwersalną kompatybilność.</p>\n      <p>Wszystkie konwersje odbywają się w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać." },
      { step: 2, title: "Wybierz Strony", description: "Wybierz strony do konwersji i ustaw DPI." },
      { step: 3, title: "Konwertuj i pobierz", description: "Kliknij Konwertuj, aby utworzyć obrazy BMP." },
    ],
    useCases: [
      { title: "Starsze systemy", description: "Twórz obrazy kompatybilne ze starszym oprogramowaniem.", icon: 'history' },
      { title: "Aplikacje Windowsowe", description: "Generuj pliki BMP dla aplikacji specyficznych dla systemu Windows.", icon: 'monitor' },
      { title: "Nieskompresowane archiwa", description: "Twórz nieskompresowane archiwa obrazów z plików PDF.", icon: 'archive' },
    ],
    faq: [
      { question: "Dlaczego warto używać formatu BMP?", answer: "BMP oferuje nieskompresowaną jakość i maksymalną kompatybilność ze starszymi systemami." },
      { question: "Czy pliki BMP są większe?", answer: "Tak, pliki BMP są nieskompresowane i znacznie większe niż JPG lub PNG." },
      { question: "Jakie głębie kolorów są obsługiwane?", answer: "Obsługiwane są 24-bitowe i 32-bitowe głębie kolorów." },
    ],
  },

  'pdf-to-tiff': {
    title: "PDF do TIFF",
    metaDescription: "Konwertuj obrazy PDF na obrazy TIFF. Profesjonalna jakość z obsługą wielu stron.",
    keywords: ["pdf do tiffa", "przekonwertować pdf na tiff", "profesjonalne obrazy", "wielostronicowy tiff"],
    description: "\n      <p>PDF do TIFF konwertuje dokumenty PDF na wysokiej jakości obrazy TIFF. TIFF to preferowany format do profesjonalnego drukowania i archiwizacji ze względu na bezstratną kompresję.</p>\n      <p>Utwórz jednostronicowe pliki TIFF lub połącz wszystkie strony w wielostronicowy plik TIFF. Świetnie nadaje się do celów zawodowych i archiwalnych.</p>\n      <p>Wszystkie konwersje odbywają się w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać." },
      { step: 2, title: "Skonfiguruj dane wyjściowe", description: "Wybierz jedno- lub wielostronicowy TIFF i ustaw DPI." },
      { step: 3, title: "Konwertuj i pobierz", description: "Kliknij Konwertuj, aby utworzyć obrazy TIFF." },
    ],
    useCases: [
      { title: "Profesjonalny druk", description: "Twórz gotowe do druku pliki TIFF z dokumentów PDF.", icon: 'printer' },
      { title: "Archiwizacja dokumentów", description: "Archiwizuj dokumenty w wysokiej jakości formacie TIFF.", icon: 'archive' },
      { title: "Publikowanie", description: "Konwertuj pliki PDF na TIFF na potrzeby procesów publikowania.", icon: 'book' },
    ],
    faq: [
      { question: "Czy mogę tworzyć wielostronicowe pliki TIFF?", answer: "Tak, możesz połączyć wszystkie strony PDF w jeden wielostronicowy plik TIFF." },
      { question: "Jakie opcje kompresji są dostępne?", answer: "Dostępne są opcje LZW, ZIP i brak opcji kompresji." },
      { question: "Jakiego DPI powinienem używać do drukowania?", answer: "Do profesjonalnego druku używaj rozdzielczości 300 DPI lub wyższej." },
    ],
  },

  'pdf-to-cbz': {
    title: "PDF do CBZ",
    metaDescription: "Konwertuj dokumenty PDF na archiwa ZIP komiksów w wysokiej rozdzielczości (.cbz). Wbudowane metadane Calibre OPF, ComicInfo XML i ZIP Comment ułatwiają katalogowanie w wielu czytnikach.",
    keywords: ["pdf do cbz", "pdf do komiksu", "opakowanie CBZ", "archiwum komiksów kalibru", "metadane komiksu"],
    description: "\n      <p>PDF do CBZ został opracowany specjalnie dla entuzjastów komiksów i archiwistów cyfrowych e-booków. Renderuje każdą stronę plików PDF jako wysokiej jakości grafikę rastrową i tworzy z nich standardowy pakiet Comic Book ZIP (.cbz).</p>\n      <p>Aby wyeliminować żmudne ręczne przygotowywanie plików w systemach takich jak Calibre, Komga, Kavita czy CDisplayEx, procesor automatycznie generuje i wstawia wewnętrznie pliki <strong>ComicInfo.xml</strong> i <strong>metadata.opf</strong>, jednocześnie zapisując standardowy ładunek <strong>ComicBookInfo JSON</strong> bezpośrednio do metadanych komentarzy w pliku ZIP.</p>\n      <p>Zawiera kompletne suwaki konfiguracyjne dotyczące jakości kompresji obrazu, skali wymiarów strony, przełączników czytania układu od prawej do lewej (tryb Manga) oraz filtrowania kolorów w czerni i bieli w skali szarości.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij komiks w pliku PDF", description: "Przeciągnij i upuść główny plik PDF komiksu, artbooka lub mangi." },
      { step: 2, title: "Wprowadź metadane komiksu", description: "Wypełnij pola Seria, Tom, Tytuł, Autor i Wydawca oraz przełącz optymalizację układu lub skali szarości." },
      { step: 3, title: "Utwórz i pobierz", description: "Kliknij Konwertuj, aby utworzyć i pobrać bogaty w metadane plik .cbz, który będzie natychmiast gotowy do użycia w Calibre." },
    ],
    useCases: [
      { title: "Konwersja PDF do CBZ", description: "Przekształcaj surowe zeskanowane książki PDF w kompaktowe, zgodne ze standardami pliki komiksów CBZ, które menedżerowie bibliotek komiksów mogą łatwo katalogować.", icon: 'book' },
      { title: "Integracja kalibru bez wysiłku", description: "Wbudowany schemat metadata.opf pozwala Calibre pobierać i klasyfikować twórców i problemy z wolumenami bez ręcznego wyszukiwania.", icon: 'database' },
      { title: "Ulepszenie ekranu E-Ink", description: "Wstępnie filtruj graficzne kanały kolorów do skali szarości o wysokim kontraście podczas tworzenia, zwiększając odświeżenie i wyrazistość obrazu na ekranach E-ink, jednocześnie oszczędzając miejsce na dysku.", icon: 'eye' },
    ],
    faq: [
      { question: "Co to jest plik .cbz?", answer: "Plik CBZ to wyspecjalizowany format kontenera archiwum dla serii komiksów. Jest wewnętrznie sformatowany jako pakiet ZIP zawierający kolejno ponumerowane obrazy stron wraz z plikami XML metadanych strukturalnych." },
      { question: "W jaki sposób metadane są kompatybilne?", answer: "Tworzymy i osadzamy pliki ComicInfo.xml, metadata.opf i komentarze do plików ZIP w jednym przebiegu. Gwarantuje to całkowitą zgodność w wielu ekosystemach komiksów i e-booków." },
      { question: "Dlaczego warto używać trybu skali szarości?", answer: "Jeśli czytasz na czytniku e-atramentu w skali szarości (takim jak Kindle lub Kobo), tworzenie bezpośrednio w skali szarości zmniejsza powstawanie artefaktów, zapewnia wyższy poziom kontrastu i zmniejsza ostateczny rozmiar pliku CBZ." },
    ],
  },


  'pdf-to-svg': {
    title: "PDF do SVG",
    metaDescription: "Konwertuj strony PDF na grafikę wektorową SVG. Doskonała skalowalność w dowolnym rozmiarze z indywidualnym eksportem stron.",
    keywords: ["pdf do svg", "przekonwertuj pdf na svg", "grafika wektorowa", "skalowalny plik PDF", "konwerter svg"],
    description: "\n      <p>PDF do SVG konwertuje każdą stronę dokumentu PDF na skalowalną grafikę wektorową (SVG). SVG to format wektorowy, który zachowuje doskonałą jakość przy każdym poziomie powiększenia i rozmiarze wydruku.</p>\n      <p>W przeciwieństwie do formatów rastrowych (JPG, PNG), grafika SVG nigdy nie ulega pikselowaniu podczas skalowania. Dzięki temu grafika idealnie nadaje się do logo, diagramów, rysunków technicznych i wszelkich treści, które muszą być wyświetlane w różnych rozmiarach.</p>\n      <p>Wyświetl podgląd każdej przekonwertowanej strony i pobierz ją pojedynczo lub jako plik ZIP. Całe przetwarzanie odbywa się lokalnie w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby przeglądać i wybierać." },
      { step: 2, title: "Skonfiguruj opcje", description: "Ustaw jakość rozdzielczości i opcjonalnie określ zakresy stron." },
      { step: 3, title: "Podgląd i konwersja", description: "Kliknij opcję Konwertuj na proces. Wyświetl podgląd każdej strony, klikając miniatury." },
      { step: 4, title: "Pobierz", description: "Pobierz pojedyncze pliki SVG lub wszystkie strony w postaci archiwum ZIP." },
    ],
    useCases: [
      { title: "Logo i grafika", description: "Wyodrębnij logo i grafikę wektorową z plików PDF do wykorzystania w oprogramowaniu do projektowania.", icon: 'pen-tool' },
      { title: "Schematy techniczne", description: "Konwertuj rysunki techniczne i diagramy do skalowalnego formatu SVG.", icon: 'ruler' },
      { title: "Rozwój sieci", description: "Twórz gotowe do umieszczenia w Internecie pliki SVG z zawartości PDF dla responsywnych witryn internetowych.", icon: 'globe' },
      { title: "Drukuj w dowolnym rozmiarze", description: "Generuj grafikę wektorową, która doskonale drukuje się w dowolnym rozmiarze.", icon: 'printer' },
    ],
    faq: [
      { question: "Co to jest format SVG?", answer: "SVG (Scalable Vector Graphics) to format obrazu wektorowego, który można skalować do dowolnego rozmiaru bez utraty jakości. Jest szeroko stosowany w logo, ikonach i grafice internetowej." },
      { question: "Czy SVG będzie naprawdę wektorowy?", answer: "Plik SVG zawiera renderowanie strony PDF w wysokiej rozdzielczości. W przypadku plików PDF zawierających zawartość wektorową otrzymasz wyraźny wydruk w dowolnej skali." },
      { question: "Czy mogę wyświetlić podgląd przed pobraniem?", answer: "Tak! Kliknij dowolną miniaturę, aby zobaczyć pełnowymiarowy podgląd pliku SVG. Możesz pobrać pojedyncze strony lub wszystkie na raz." },
      { question: "Jaką rozdzielczość wybrać?", answer: "Wyższa rozdzielczość (216 lub 288 DPI) pozwala uzyskać większe i bardziej szczegółowe obrazy SVG. Użyj niższych ustawień, aby przyspieszyć przetwarzanie i mniejsze pliki." },
    ],
  },

  'pdf-to-greyscale': {
    title: "PDF do skali szarości",
    metaDescription: "Konwertuj kolorowy plik PDF na skalę szarości. Zmniejsz rozmiar pliku i przygotuj się do drukowania czarno-białego.",
    keywords: ["pdf do skali szarości", "PDF w skali szarości", "czarno-biały pdf", "usuń kolory"],
    description: "\n      <p>PDF na skalę szarości konwertuje kolorowe dokumenty PDF na skalę szarości (czarno-biały). Zmniejsza to rozmiar pliku i przygotowuje dokumenty do druku czarno-białego.</p>\n      <p>Konwersja zachowuje przejrzystość tekstu i szczegóły obrazu, usuwając jednocześnie informacje o kolorze. Świetnie nadaje się do drukowania wersji roboczej lub tworzenia wersji do druku.</p>\n      <p>Wszystkie konwersje odbywają się w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść kolorowy plik PDF lub kliknij, aby wybrać." },
      { step: 2, title: "Podgląd konwersji", description: "Podgląd, jak będzie wyglądać wersja w skali szarości." },
      { step: 3, title: "Konwertuj i pobierz", description: "Kliknij opcję Konwertuj, aby utworzyć plik PDF w skali szarości." },
    ],
    useCases: [
      { title: "Drukuj oszczędności", description: "Konwertuj na skalę szarości, aby zaoszczędzić na kosztach drukowania w kolorze.", icon: 'printer' },
      { title: "Projekty dokumentów", description: "Twórz czarno-białe wersje robocze do recenzji.", icon: 'file-text' },
      { title: "Zmniejszenie rozmiaru pliku", description: "Zmniejsz rozmiar pliku PDF, usuwając informacje o kolorach.", icon: 'minimize-2' },
    ],
    faq: [
      { question: "Czy tekst pozostanie czytelny?", answer: "Tak, podczas konwersji w skali szarości zachowana jest przejrzystość tekstu." },
      { question: "O ile mniejszy będzie plik?", answer: "Redukcja rozmiaru pliku jest różna, ale w przypadku dokumentów zawierających dużo kolorów może wynosić 20–50%." },
      { question: "Czy mogę konwertować tylko określone strony?", answer: "Tak, możesz wybrać strony, które chcesz przekonwertować na skalę szarości." },
    ],
  },

  'pdf-to-json': {
    title: "PDF do JSON",
    metaDescription: "Wyodrębnij zawartość PDF do formatu JSON. Uzyskaj uporządkowane dane z dokumentów PDF.",
    keywords: ["PDF do JSON", "wyodrębnij dane z PDF", "parser PDF", "ustrukturyzowane dane PDF"],
    description: "\n      <p>PDF do JSON wyodrębnia treść z dokumentów PDF do strukturalnego formatu JSON. Wyodrębnij tekst, metadane, informacje o stronie i strukturę dokumentu do użytku programowego.</p>\n      <p>Świetnie nadaje się do ekstrakcji danych, analizy dokumentów lub integracji treści PDF z aplikacjami i przepływami pracy.</p>\n      <p>Całe wyodrębnianie odbywa się w przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać." },
      { step: 2, title: "Wybierz Dane do wyodrębnienia", description: "Wybierz treść do wyodrębnienia: tekst, metadane, strukturę." },
      { step: 3, title: "Wyodrębnij i pobierz", description: "Kliknij Wyodrębnij, aby wygenerować JSON i pobrać." },
    ],
    useCases: [
      { title: "Ekstrakcja danych", description: "Wyodrębnij uporządkowane dane z dokumentów PDF.", icon: 'database' },
      { title: "Analiza dokumentów", description: "Programowo analizuj strukturę i zawartość pliku PDF.", icon: 'search' },
      { title: "Integracja", description: "Importuj zawartość PDF do aplikacji za pośrednictwem JSON.", icon: 'plug' },
    ],
    faq: [
      { question: "Jakie dane są wyodrębniane?", answer: "Treść tekstowa, metadane, wymiary strony, czcionki i struktura dokumentu." },
      { question: "Czy format JSON jest udokumentowany?", answer: "Tak, schemat JSON jest spójny i dobrze udokumentowany." },
      { question: "Czy mogę wyodrębnić zeskanowane pliki PDF?", answer: "Zeskanowane pliki PDF wymagają najpierw OCR. Przed wyodrębnieniem skorzystaj z naszego narzędzia OCR PDF." },
    ],
  },

  'pdf-to-pptx': {
    title: "PDF do programu PowerPoint",
    metaDescription: "Konwertuj plik PDF na prezentację programu PowerPoint. Każda strona staje się wysokiej jakości slajdem.",
    keywords: ["pdf do pptx", "pdf do powerpointa", "konwertuj slajdy PDF", "prezentacja w pliku PDF"],
    description: "\n      <p>PDF to PowerPoint konwertuje dokumenty PDF na edytowalne prezentacje programu PowerPoint (PPTX). Każda strona pliku PDF jest przekształcana w wysokiej jakości slajd, doskonale zachowując układ wizualny.</p>\n      <p>To narzędzie idealnie nadaje się do konwertowania raportów, materiałów informacyjnych i dowolnej zawartości PDF do formatu prezentacji. Możesz wybrać jakość obrazu (DPI), aby zrównoważyć rozmiar pliku i klarowność obrazu.</p>\n      <p>Wszystkie konwersje odbywają się lokalnie w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne i bezpieczne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać go ze swojego urządzenia." },
      { step: 2, title: "Wybierz Ustawienia jakości", description: "Wybierz jakość obrazu (DPI) dla slajdów. Wyższe DPI oznacza lepszą jakość, ale większy rozmiar pliku." },
      { step: 3, title: "Konwertuj i pobierz", description: "Kliknij Konwertuj, aby utworzyć prezentację PowerPoint i pobrać plik PPTX." },
    ],
    useCases: [
      { title: "Tworzenie prezentacji", description: "Konwertuj raporty lub dokumenty PDF na slajdy prezentacji na spotkania.", icon: 'presentation' },
      { title: "Materiały szkoleniowe", description: "Przekształcaj dokumenty szkoleniowe w pliku PDF w interaktywne prezentacje programu PowerPoint.", icon: 'book-open' },
      { title: "Zmiana przeznaczenia treści", description: "Konwertuj istniejącą zawartość PDF na edytowalny format slajdu w celu dalszej personalizacji.", icon: 'refresh-cw' },
    ],
    faq: [
      { question: "Czy slajdy będą edytowalne?", answer: "Każdy slajd zawiera wysokiej jakości obraz strony PDF. W programie PowerPoint możesz dodawać tekst, kształty i adnotacje na górze." },
      { question: "Jakie DPI wybrać?", answer: "Do prezentacji wyświetlanych na ekranach używaj rozdzielczości 150 DPI. Użyj rozdzielczości 300 DPI do drukowania lub gdy potrzebujesz najwyższej jakości." },
      { question: "Czy mogę konwertować wielostronicowe pliki PDF?", answer: "Tak, każda strona pliku PDF staje się oddzielnym slajdem w prezentacji programu PowerPoint." },
    ],
  },

  'pdf-to-excel': {
    title: "PDF do Excela",
    metaDescription: "Konwertuj plik PDF na arkusz kalkulacyjny Excel. Wyodrębnij tabele do formatu XLSX.",
    keywords: ["pdf do Excela", "pdf do xlsx", "konwertuj tabele PDF", "wyodrębnij tabele"],
    description: "\n      <p>PDF to Excel konwertuje dokumenty PDF na edytowalne arkusze kalkulacyjne Microsoft Excel (XLSX). Narzędzie automatycznie wykrywa tabele w pliku PDF i wyodrębnia je w osobnych arkuszach.</p>\n      <p>To narzędzie idealnie nadaje się do analizy raportów finansowych, faktur lub wszelkich danych prezentowanych w tabelach. Tabele na każdej stronie są zorganizowane w arkusze, co ułatwia manipulację danymi.</p>\n      <p>Wszystkie konwersje odbywają się lokalnie w Twojej przeglądarce, dzięki czemu Twoje dane pozostają prywatne i bezpieczne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać." },
      { step: 2, title: "Proces", description: "Narzędzie automatycznie zidentyfikuje i wyodrębni tabele." },
      { step: 3, title: "Pobierz Excela", description: "Pobierz plik Excel z wyodrębnionymi tabelami." },
    ],
    useCases: [
      { title: "Analiza finansowa", description: "Konwertuj wyciągi bankowe lub faktury do programu Excel w celu analizy.", icon: 'trending-up' },
      { title: "Ekstrakcja danych", description: "Pobieraj tabele danych z artykułów naukowych lub raportów.", icon: 'database' },
      { title: "Zarządzanie zapasami", description: "Konwertuj listy inwentarza z pliku PDF na arkusz kalkulacyjny.", icon: 'clipboard' },
    ],
    faq: [
      { question: "Jak obsługiwane są tabele?", answer: "Tabele wykryte na każdej stronie są wyodrębniane do odpowiednich arkuszy w pliku Excel." },
      { question: "A co jeśli nie ma stołów?", answer: "Zostanie utworzony arkusz informacyjny wskazujący, że nie znaleziono żadnych tabel." },
      { question: "Czy formatowanie zostało zachowane?", answer: "Dane zostaną zachowane, ale złożone formatowanie wizualne można uprościć na potrzeby arkusza kalkulacyjnego." },
    ],
  },

  // ==================== ORGANIZE & MANAGE ====================
  'ocr-pdf': {
    title: "PDF-OCR",
    metaDescription: "Spraw, aby zeskanowane pliki PDF można było przeszukiwać za pomocą OCR. Wyodrębnij tekst z obrazów i zeskanowanych dokumentów.",
    keywords: ["ocr pdf", "przeszukiwalny plik PDF", "rozpoznawanie tekstu", "skanuj do tekstu"],
    description: "<p>OCR PDF wykorzystuje funkcję optycznego rozpoznawania znaków do wyodrębniania tekstu ze zeskanowanych dokumentów i obrazów w plikach PDF. Konwertuj pliki PDF zawierające obrazy na dokumenty tekstowe z możliwością wyszukiwania i wybierania.</p>\n      <p>Obsługa wielu języków zapewnia dokładne rozpoznawanie tekstu niezależnie od języka dokumentu. Oryginalny układ zostaje zachowany po dodaniu warstwy tekstowej z możliwością przeszukiwania.</p>\n      <p>Całe przetwarzanie OCR odbywa się w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij zeskanowany plik PDF", description: "Przeciągnij i upuść zeskanowany plik PDF lub kliknij, aby wybrać." },
      { step: 2, title: "Wybierz Język", description: "Wybierz język dokumentu w celu dokładnego rozpoznania." },
      { step: 3, title: "Przetwarzaj i pobieraj", description: "Kliknij opcję Przetwarzaj, aby uruchomić OCR i pobrać plik PDF z możliwością przeszukiwania." },
    ],
    useCases: [
      { title: "Digitalizacja archiwów", description: "Umożliwia przeszukiwanie archiwów zeskanowanych dokumentów.", icon: 'archive' },
      { title: "Wyszukiwanie dokumentów", description: "Włącz wyszukiwanie tekstu w zeskanowanych dokumentach.", icon: 'search' },
      { title: "Ekstrakcja tekstu", description: "Wyodrębnij tekst ze zeskanowanych dokumentów do edycji.", icon: 'type' },
    ],
    faq: [
      { question: "Jakie języki są obsługiwane?", answer: "Obsługiwanych jest ponad 100 języków, w tym angielski, chiński, japoński, koreański i inne." },
      { question: "Czy zostanie zachowany pierwotny układ?", answer: "Tak, oryginalny układ wizualny zostaje zachowany z dodaną warstwą tekstową z możliwością przeszukiwania." },
      { question: "Jak dokładny jest OCR?", answer: "Dokładność zależy od jakości skanowania, ale zazwyczaj przekracza 95% w przypadku wyraźnych dokumentów." },
    ],
  },

  'alternate-merge': {
    title: "Alternatywne połączenie",
    metaDescription: "Scal pliki PDF, zmieniając strony. Połącz skany przedniej i tylnej strony w jeden dokument.",
    keywords: ["alternatywne połączenie", "przeplataj pdf", "połączyć skany", "połączenie przodu i tyłu"],
    description: "\n      <p>Scalanie alternatywne łączy dwa pliki PDF, przeplatając ich strony naprzemiennie. Jest to idealne rozwiązanie do łączenia oddzielnie zeskanowanych stron przednich i tylnych w jeden dokument.</p>\n      <p>Prześlij dwa pliki PDF, a narzędzie połączy je, pobierając na przemian po jednej stronie z każdego pliku. Możesz także odwrócić kolejność jednego dokumentu w celu skanowania od tyłu do przodu.</p>\n      <p>Całe przetwarzanie odbywa się w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij dwa pliki PDF", description: "Prześlij pierwsze strony w pliku PDF i tylne strony w pliku PDF." },
      { step: 2, title: "Skonfiguruj kolejność", description: "Wybierz, czy odwrócić drugi dokument w przypadku skanowania od tyłu do przodu." },
      { step: 3, title: "Połącz i pobierz", description: "Kliknij opcję Scal, aby przeplatać strony i pobierać." },
    ],
    useCases: [
      { title: "Skanowanie dwustronne", description: "Połącz oddzielnie zeskanowane strony przednie i tylne.", icon: 'copy' },
      { title: "Montaż dokumentów", description: "Przeplataj strony z dwóch powiązanych dokumentów.", icon: 'layers' },
      { title: "Skanowanie książek", description: "Łącz skany stron nieparzystych i parzystych w kompletne książki.", icon: 'book' },
    ],
    faq: [
      { question: "Co się stanie, jeśli dokumenty mają różną liczbę stron?", answer: "Na końcu dołączone są dodatkowe strony z dłuższego dokumentu." },
      { question: "Czy mogę odwrócić kolejność stron?", answer: "Tak, możesz cofnąć którykolwiek dokument przed połączeniem." },
      { question: "Czy to różni się od zwykłego scalania?", answer: "Tak, zwykłe scalanie dołącza dokumenty; alternatywne scalanie przeplata strony." },
    ],
  },

  'add-attachments': {
    title: "Dodaj załączniki",
    metaDescription: "Osadzaj pliki w dokumentach PDF. Dołącz dowolny typ pliku do swoich plików PDF.",
    keywords: ["załączniki w pliku PDF", "osadzać pliki", "załącz do pdf", "portfolio w pliku PDF"],
    description: "\n      <p>Dodaj załączniki osadza pliki dowolnego typu w dokumentach PDF. Dołącz arkusze kalkulacyjne, obrazy, pliki źródłowe lub inne dokumenty, aby utworzyć kompleksowe pakiety PDF.</p>\n      <p>Załączniki są osadzone w pliku PDF i odbiorcy mogą je wyodrębnić za pomocą dowolnego czytnika plików PDF. Świetnie nadaje się do wspólnego rozpowszechniania powiązanych plików.</p>\n      <p>Całe przetwarzanie odbywa się w Twojej przeglądarce, dzięki czemu Twoje pliki pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać." },
      { step: 2, title: "Dodaj załączniki", description: "Wybierz pliki, które chcesz dołączyć do pliku PDF." },
      { step: 3, title: "Zapisz i pobierz", description: "Kliknij Zapisz, aby osadzić załączniki i pobrać." },
    ],
    useCases: [
      { title: "Pakiety projektów", description: "Połącz pliki projektu z dokumentacją PDF.", icon: 'package' },
      { title: "Dystrybucja raportów", description: "Dołącz pliki danych źródłowych, aby raportować pliki PDF.", icon: 'paperclip' },
      { title: "Pakiety kontraktowe", description: "Dołącz dokumenty potwierdzające do umów.", icon: 'file-text' },
    ],
    faq: [
      { question: "Jakie typy plików można dołączać?", answer: "Do pliku PDF można dołączyć dowolny typ pliku." },
      { question: "Czy istnieje limit rozmiaru?", answer: "Całkowity rozmiar pliku PDF wraz z załącznikami nie powinien przekraczać 500MB." },
      { question: "Czy odbiorcy mogą wyodrębniać załączniki?", answer: "Tak, każdy czytnik plików PDF może wyodrębniać osadzone załączniki." },
    ],
  },

  'extract-attachments': {
    title: "Wyodrębnij załączniki",
    metaDescription: "Wyodrębnij osadzone pliki z plików PDF. Pobierz wszystkie załączniki z dokumentów PDF.",
    keywords: ["wyodrębnij załączniki", "załączniki w pliku PDF", "pobierz osadzone pliki", "ekstrakcja PDF"],
    description: "\n      <p>Wyodrębnij załączniki pobiera wszystkie osadzone pliki z dokumentów PDF. Pobierz załączniki pojedynczo lub jako archiwum ZIP zawierające wszystkie pliki.</p>\n      <p>Świetnie nadaje się do uzyskiwania dostępu do plików źródłowych, danych lub materiałów dodatkowych osadzonych w pakietach PDF.</p>\n      <p>Całe wyodrębnianie odbywa się w przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać." },
      { step: 2, title: "Zobacz załączniki", description: "Zobacz listę wszystkich plików osadzonych w pliku PDF." },
      { step: 3, title: "Wyodrębnij i pobierz", description: "Pobierz pojedyncze pliki lub wszystkie w formacie ZIP." },
    ],
    useCases: [
      { title: "Uzyskaj dostęp do plików źródłowych", description: "Wyodrębnij oryginalne pliki danych z raportów PDF.", icon: 'download' },
      { title: "Odzyskaj załączniki", description: "Odzyskaj osadzone pliki z pakietów PDF.", icon: 'folder-open' },
      { title: "Ekstrakcja wsadowa", description: "Wyodrębnij załączniki z wielu plików PDF jednocześnie.", icon: 'layers' },
    ],
    faq: [
      { question: "A co jeśli nie ma załączników?", answer: "Narzędzie wskaże, czy nie znaleziono żadnych osadzonych plików." },
      { question: "Czy obsługiwane są wszystkie typy załączników?", answer: "Tak, można wyodrębnić wszystkie osadzone typy plików." },
      { question: "Czy mogę wyodrębnić zawartość z wielu plików PDF?", answer: "Tak, możesz przetwarzać wiele plików PDF i pobierać wszystkie załączniki." },
    ],
  },

  'extract-images': {
    title: "Wyodrębnij obrazy z pliku PDF",
    metaDescription: "Wyodrębnij wszystkie osadzone obrazy z plików PDF. Pobierz pojedynczo lub jako archiwum ZIP. Automatycznie filtruj małe obrazy.",
    keywords: ["wyodrębnij obrazy PDF", "ekstrakcja obrazu pdf", "pobierz obrazy z pliku pdf", "pobierz obrazy w pliku PDF", "pdf do obrazów"],
    description: "<p>Wyodrębnij obrazy z pliku PDF pobiera wszystkie osadzone obrazy z dokumentów PDF. Pobierz wysokiej jakości obrazy pojedynczo lub jako wygodne archiwum ZIP.</p>\n      <p>Narzędzie automatycznie odfiltrowuje małe obrazy, takie jak ikony i dekoracje, w oparciu o dostosowywalne progi rozmiaru. Przetwarzaj wiele plików PDF jednocześnie, aby efektywnie wyodrębniać pliki wsadowe.</p>\n      <p>Całe wyodrębnianie odbywa się w przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne i bezpieczne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swoje pliki PDF", description: "Przeciągnij i upuść jeden lub więcej plików PDF lub kliknij, aby wybrać z urządzenia." },
      { step: 2, title: "Ustaw opcje filtra", description: "Dostosuj minimalną szerokość, wysokość i rozmiar pliku, aby odfiltrować niechciane małe obrazy." },
      { step: 3, title: "Wyodrębnij obrazy", description: "Kliknij opcję Wyodrębnij, aby znaleźć wszystkie osadzone obrazy w plikach PDF." },
      { step: 4, title: "Pobierz", description: "Pobierz pojedyncze obrazy lub wszystkie obrazy jako archiwum ZIP." },
    ],
    useCases: [
      { title: "Odzyskiwanie zdjęć", description: "Wyodrębniaj zdjęcia i obrazy osadzone w dokumentach PDF w celu ponownego wykorzystania lub archiwizacji.", icon: 'image' },
      { title: "Kolekcja aktywów", description: "Zbierz całą grafikę i obrazy z raportów, prezentacji i broszur w pliku PDF.", icon: 'folder' },
      { title: "Zmiana przeznaczenia treści", description: "Wyodrębniaj obrazy z plików PDF i używaj ich w innych dokumentach, witrynach internetowych lub prezentacjach.", icon: 'refresh-cw' },
    ],
    faq: [
      { question: "Jakie formaty obrazów są wyodrębniane?", answer: "Obrazy są wyodrębniane w ich natywnym formacie (JPEG, PNG itp.), jeśli to możliwe, lub konwertowane do formatu PNG w celu uzyskania surowych danych obrazu." },
      { question: "Dlaczego brakuje niektórych obrazów?", answer: "Małe obrazy poniżej progu rozmiaru są odfiltrowywane. Dostosuj ustawienia filtra, aby wyodrębnić mniejsze obrazy." },
      { question: "Czy mogę wyodrębnić zeskanowane pliki PDF?", answer: "Zeskanowane pliki PDF zazwyczaj zawierają skan w postaci jednego dużego obrazu na stronie. Zamiast tego użyj narzędzia PDF do obrazu, aby dokonać konwersji strona po stronie." },
    ],
  },

  'edit-attachments': {
    title: "Edytuj załączniki",
    metaDescription: "Zarządzaj załącznikami PDF. Przeglądaj, zmieniaj nazwy i usuwaj osadzone pliki.",
    keywords: ["edytować załączniki", "zarządzać plikami PDF", "usuń załączniki", "zmień nazwy załączników"],
    description: "<p>Edytuj załączniki umożliwia zarządzanie plikami osadzonymi w dokumentach PDF. Wyświetl wszystkie załączniki, zmień ich nazwy lub usuń niechciane pliki z pliku PDF.</p>\n      <p>Świetnie nadaje się do czyszczenia pakietów PDF lub aktualizowania informacji o załącznikach przed dystrybucją.</p>\n      <p>Cała edycja odbywa się w przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać." },
      { step: 2, title: "Zarządzaj załącznikami", description: "Wyświetl, zmień nazwę lub usuń osadzone pliki." },
      { step: 3, title: "Zapisz i pobierz", description: "Kliknij Zapisz, aby zastosować zmiany i pobrać." },
    ],
    useCases: [
      { title: "Wyczyść pliki PDF", description: "Usuń niepotrzebne załączniki z pakietów PDF.", icon: 'trash-2' },
      { title: "Zmień nazwę plików", description: "Zaktualizuj nazwy załączników dla przejrzystości.", icon: 'edit' },
      { title: "Przejrzyj zawartość", description: "Kontroluj osadzone pliki przed dystrybucją.", icon: 'eye' },
    ],
    faq: [
      { question: "Czy mogę tutaj dodawać nowe załączniki?", answer: "Użyj narzędzia Dodaj załączniki, aby osadzić nowe pliki." },
      { question: "Czy usunięcie jest trwałe?", answer: "Tak, usuniętych załączników nie można odzyskać z pliku wyjściowego." },
      { question: "Czy mogę wyświetlić podgląd załączników?", answer: "Możesz zobaczyć nazwy i rozmiary plików; użyj opcji Wyodrębnij załączniki, aby wyświetlić zawartość." },
    ],
  },

  'divide-pages': {
    title: "Podziel strony",
    metaDescription: "Podziel strony PDF na wiele sekcji. Podziel strony poziomo lub pionowo.",
    keywords: ["podziel strony pdf", "podzielona strona", "wytnij stronę pdf", "sekcje strony"],
    description: "\n      <p>Podziel strony dzieli poszczególne strony pliku PDF na wiele sekcji. Wytnij strony poziomo, pionowo lub w siatkę, aby utworzyć wiele stron z jednej.</p>\n      <p>Świetnie nadaje się do dzielenia zeskanowanych dokumentów zawierających wiele elementów na stronie lub dzielenia stron wielkoformatowych na standardowe rozmiary.</p>\n      <p>Całe przetwarzanie odbywa się w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać." },
      { step: 2, title: "Ustaw podział", description: "Wybierz podział poziomy, pionowy lub siatkowy i ustaw liczbę przekrojów." },
      { step: 3, title: "Podziel i pobierz", description: "Kliknij opcję Podziel, aby podzielić strony i pobrać." },
    ],
    useCases: [
      { title: "Podzielone skany", description: "Podziel zeskanowane strony zawierające wiele dokumentów.", icon: 'scissors' },
      { title: "Zmień rozmiar stron", description: "Podziel duże strony na standardowe rozmiary papieru.", icon: 'maximize-2' },
      { title: "Twórz karty", description: "Podziel strony na sekcje wielkości karty w celu wydrukowania.", icon: 'grid' },
    ],
    faq: [
      { question: "Czy mogę podzielić na nierówne części?", answer: "Obecnie podziały są równe. Użyj opcji Przytnij plik PDF w przypadku sekcji niestandardowych." },
      { question: "Co dzieje się z treścią na liniach podziału?", answer: "Treść jest dzielona na linii podziału; upewnij się, że ważne treści nie przekraczają granic." },
      { question: "Czy mogę podzielić tylko określone strony?", answer: "Tak, możesz wybrać, które strony chcesz podzielić." },
    ],
  },

  'add-blank-page': {
    title: "Dodaj pustą stronę",
    metaDescription: "Wstaw puste strony do dokumentów PDF. Dodaj puste strony w dowolnej pozycji.",
    keywords: ["dodaj pustą stronę", "wstaw stronę", "pusta strona", "wstawienie strony pdf"],
    description: "\n      <p>Dodaj pustą stronę — wstawia puste strony do dokumentów PDF w dowolnym miejscu. Dodaj strony przed, po lub pomiędzy istniejącymi stronami, korzystając z dostosowywalnego rozmiaru strony.</p>\n      <p>Świetnie nadaje się do dodawania miejsca na notatki, tworzenia przegródek lub przygotowywania dokumentów do druku.</p>\n      <p>Całe przetwarzanie odbywa się w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać." },
      { step: 2, title: "Wybierz pozycję", description: "Wybierz, gdzie i ile wstawić puste strony." },
      { step: 3, title: "Dodaj i pobierz", description: "Kliknij Dodaj, aby wstawić strony i pobrać." },
    ],
    useCases: [
      { title: "Miejsce na notatki", description: "Dodaj puste strony na odręczne notatki.", icon: 'edit-3' },
      { title: "Dzielniki sekcji", description: "Wstaw puste strony pomiędzy sekcjami dokumentu.", icon: 'minus' },
      { title: "Przygotowanie do druku", description: "Dodaj strony w celu wyrównania druku dwustronnego.", icon: 'printer' },
    ],
    faq: [
      { question: "Czy mogę wybrać rozmiar strony?", answer: "Tak, puste strony mogą pasować do istniejących stron lub używać niestandardowych wymiarów." },
      { question: "Czy mogę dodać wiele pustych stron?", answer: "Tak, możesz dodać dowolną liczbę pustych stron na raz." },
      { question: "Czy mogę dodać kolorowe strony?", answer: "Użyj narzędzia Kolor tła po dodaniu pustych stron, aby dodać kolor." },
    ],
  },

  'reverse-pages': {
    title: "Odwróć kolejność stron",
    metaDescription: "Odwróć kolejność stron PDF. Przewracaj strony dokumentu od ostatniej do pierwszej.",
    keywords: ["odwrotny pdf", "odwróć kolejność stron", "odwróć strony", "odwrócony dokument"],
    description: "\n      <p>Odwróć strony odwraca kolejność stron w dokumencie PDF, umieszczając ostatnią stronę na początku, a pierwszą na końcu. Przydatne w przypadku dokumentów skanowanych w odwrotnej kolejności lub w przypadku określonych potrzeb drukowania.</p>\n      <p>Narzędzie przetwarza cały dokument lub wybrane zakresy stron, zachowując całą treść i formatowanie.</p>\n      <p>Całe przetwarzanie odbywa się w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać." },
      { step: 2, title: "Wybierz Strony", description: "Wybierz odwrócenie wszystkich stron lub określonego zakresu." },
      { step: 3, title: "Odwróć i pobierz", description: "Kliknij opcję Odwróć, aby zmienić kolejność stron i pobrać." },
    ],
    useCases: [
      { title: "Napraw kolejność skanowania", description: "Popraw dokumenty zeskanowane w odwrotnej kolejności.", icon: 'refresh-cw' },
      { title: "Przygotowanie do druku", description: "Odwróć strony dla określonych wymagań drukowania.", icon: 'printer' },
      { title: "Zmiana kolejności dokumentów", description: "Szybko zmieniaj kolejność dokumentów do przeglądu.", icon: 'arrow-up-down' },
    ],
    faq: [
      { question: "Czy zakładki są aktualizowane?", answer: "Tak, zakładki są aktualizowane, aby wskazywały właściwe odwrócone strony." },
      { question: "Czy mogę cofnąć tylko niektóre strony?", answer: "Tak, możesz wybrać zakres stron do odwrócenia." },
      { question: "Czy to działa tak samo jak obracanie?", answer: "Nie, cofanie zmienia kolejność stron; obracanie zmienia orientację strony." },
    ],
  },

  'rotate-pdf': {
    title: "Obróć plik PDF",
    metaDescription: "Obracaj strony PDF. Obróć strony o 90, 180 lub 270 stopni.",
    keywords: ["obróć pdf", "przewracaj strony pdf", "rotacja PDFów", "naprawić orientację"],
    description: "\n      <p>Obróć plik PDF odwraca strony dokumentu o 90, 180 lub 270 stopni. Napraw skany o nieprawidłowej orientacji, obróć strony poziomo lub dostosuj orientację strony do przeglądania.</p>\n      <p>Obracaj wszystkie strony równomiernie lub wybierz określone strony, które mają być obracane indywidualnie. Narzędzie zachowuje całą treść i formatowanie.</p>\n      <p>Całe przetwarzanie odbywa się w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać." },
      { step: 2, title: "Wybierz Obrót", description: "Wybierz kąt obrotu i strony do obrócenia." },
      { step: 3, title: "Obróć i pobierz", description: "Kliknij Obróć, aby zastosować zmiany i pobrać." },
    ],
    useCases: [
      { title: "Napraw skany", description: "Prawidłowa orientacja skanowanych dokumentów.", icon: 'rotate-cw' },
      { title: "Strony krajobrazowe", description: "Obróć strony poziome, aby zapewnić prawidłowe przeglądanie.", icon: 'monitor' },
      { title: "Orientacja mieszana", description: "Standaryzuj orientację strony w dokumentach mieszanych.", icon: 'layout' },
    ],
    faq: [
      { question: "Czy mogę inaczej obracać różne strony?", answer: "Tak, możesz zastosować różne obroty dla różnych stron." },
      { question: "Czy rotacja wpływa na jakość druku?", answer: "Nie, rotacja zachowuje całą jakość treści." },
      { question: "Czy mogę obracać o niestandardowe kąty?", answer: "Obrót jest ograniczony do przyrostów co 90 stopni (90, 180, 270)." },
    ],
  },

  'overlay-pdf': {
    title: "Nałóż PDF",
    metaDescription: "Nakładaj lub podkładaj strony z jednego pliku PDF na inny. Idealne do pieczątek, papieru firmowego i kompozycji układu.",
    keywords: ["nakładanie PDF", "podkład PDF", "stempel PDF", "znak wodny PDF", "łączenie warstw PDF"],
    description: "\n      <p>Nakładka PDF umożliwia nakładanie stron jednego dokumentu PDF na wierzch lub pod inny dokument PDF. Doskonale nadaje się do nanoszenia papieru firmowego, dodawania siatek tła, stemplowania znaków wodnych lub łączenia ze sobą projektów układów.</p>\n      <p>Obsługuje tryb nakładki (warstwa znajduje się na górze) i tryb podkładu (warstwa znajduje się pod spodem). Określ niestandardowe zakresy stron docelowych lub zapętlaj krótsze dokumenty nakładki, aby automatycznie pokryć cały plik podstawowy.</p>\n      <p>Całe przetwarzanie odbywa się całkowicie lokalnie w Twojej przeglądarce internetowej, co gwarantuje całkowite bezpieczeństwo i prywatność danych.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij główny plik PDF", description: "Przeciągnij i upuść główny podstawowy dokument PDF." },
      { step: 2, title: "Prześlij plik PDF z warstwą", description: "Podaj dokument nakładki/podkładu, który działa jako warstwa." },
      { step: 3, title: "Skonfiguruj warstwy", description: "Wybierz tryb nakładki lub podkładania, określ zakresy stron i włącz zapętlanie stron." },
      { step: 4, title: "Utwórz i pobierz", description: "Kliknij Utwórz, aby przetworzyć i pobrać warstwowy plik PDF." },
    ],
    useCases: [
      { title: "Papier firmowy", description: "Nałóż zawartość faktury na standardowe szablony papieru firmowego.", icon: 'file-text' },
      { title: "Znaki wodne i pieczęcie", description: "Nakładaj pieczątki zabezpieczające, pieczęcie podpisu lub tła na dokumenty.", icon: 'shield' },
      { title: "Rysowanie planów", description: "Połącz szkice architektur lub siatki układów pod blokami tekstu.", icon: 'layout' },
    ],
    faq: [
      { question: "Jaka jest różnica między nakładką a podkładem?", answer: "Nakładka umieszcza warstwę dodatkową na głównej treści. Underlay umieszcza go na samym dole, pełniąc rolę szablonu tła." },
      { question: "Czy mogę zapętlić warstwę nakładki?", answer: "Tak, jeśli warstwa PDF jest krótsza niż dokument bazowy, włączenie pętli spowoduje cykliczne przełączanie jej (np. strony 1, 2, 1, 2) w celu pokrycia wszystkich stron bazowych." },
      { question: "Czy obsługiwany jest zakres stron?", answer: "Tak, możesz wybierać określone strony, korzystając ze składni zakresu, takiej jak „1–5”, „nieparzysty”, „parzysty” lub list oddzielonych przecinkami." },
    ],
  },

  'timestamp-pdf': {
    title: "Dodaj znacznik czasu do PDF",
    metaDescription: "Dodaj zaufane znaczniki czasu RFC 3161 do dokumentów PDF. Udowodnij istnienie dokumentu w określonym momencie bez certyfikatów.",
    keywords: ["znacznik czasu pdf", "RFC 3161", "serwer ts", "zaufane oznaczenie czasu", "dowód istnienia"],
    description: "\n      <p>Znacznik czasu PDF dodaje zaufane znaczniki czasu zgodne ze standardem RFC 3161 do dokumentów PDF przy użyciu zewnętrznych organów znakowania czasem (TSA). Zapewnia prawnie wiążący dowód matematyczny na to, że dokument istniał w określonym, niezmiennym stanie w określonym momencie.</p>\n      <p>Wybierz spośród globalnych zaufanych serwerów TSA, takich jak DigiCert, Sectigo, SSL.com, FreeTSA lub MeSign. Żadne osobiste certyfikaty podpisu nie są wymagane, aby zabezpieczyć dokumenty przed przyszłymi manipulacjami.</p>\n      <p>Obsługuje w pełni bezpieczne lokalne hashowanie przed uzgadnianiem, gwarantując, że cała zawartość dokumentu pozostanie w 100% poufna.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij dokument PDF", description: "Wybierz docelowy plik PDF, dla którego chcesz oznaczyć znacznikiem czasu." },
      { step: 2, title: "Wybierz Serwer TSA", description: "Wybierz z listy zaufany, globalny urząd znakowania czasem." },
      { step: 3, title: "Zastosuj i sygnatura czasowa", description: "Kliknij opcję Znacznik czasu, aby pobrać bezpieczną odpowiedź od TSA i osadzić token." },
    ],
    useCases: [
      { title: "Własność intelektualna", description: "Ustal wyraźny dowód pierwszeństwa patentów, projektów i pomysłów przed publicznym udostępnieniem.", icon: 'lightbulb' },
      { title: "Audyt finansowy", description: "Zapewnij certyfikowane, odporne na manipulacje rejestrowanie archiwów ksiąg i raportów bilansowych.", icon: 'activity' },
      { title: "Umowy prawne", description: "Zablokuj umowy prawne zaufanym dowodem czasowym, aby uniknąć argumentów z datą wsteczną.", icon: 'file-check' },
    ],
    faq: [
      { question: "Co to jest zaufany znacznik czasu (RFC 3161)?", answer: "Znacznik czasu RFC 3161 to podpisany kryptograficznie token wydany przez uznany organ zewnętrzny (TSA), który łączy skrót dokumentu z określonym, zweryfikowanym źródłem zegara." },
      { question: "Czy potrzebuję certyfikatu cyfrowego?", answer: "Nie, podpis kryptograficzny jest dostarczany bezpośrednio przez zaufany serwer TSA, co sprawia, że proces ten nie wymaga wysiłku dla właścicieli dokumentów." },
      { question: "Czy TSA widzi zawartość mojego dokumentu?", answer: "Nigdy. Narzędzie wysyła jedynie bezpieczny skrót SHA-256 Twojego dokumentu do serwera TSA, zachowując całkowicie prywatny dokument." },
    ],
  },

  'add-page-labels': {
    title: "Dodaj etykiety stron",
    metaDescription: "Zastosuj niestandardowe etykiety stron do swojego katalogu PDF. Obsługuje cyfry rzymskie, przedrostki i złożone zakresy rozłączne.",
    keywords: ["etykiety stron PDF", "cyfry rzymskie PDF", "etykiety stron z prefiksami", "etykiety stron dla rozłącznych zakresów", "indeksowanie PDF"],
    description: "\n      <p>Dodaj etykiety stron umożliwia wstawienie niestandardowych metadanych etykiet stron (/PageLabels) do głównego słownika katalogu pliku PDF. Umożliwia to dostosowanie etykiet wyświetlanych na bocznych paskach nawigacji profesjonalnego czytnika plików PDF i panelach przeskoku numerów stron na górze (np. użycie cyfr rzymskich na początku, ciągów dziesiętnych w głównej części lub niestandardowych przedrostków, takich jak A-0, A-1 w podsekcjach technicznych).</p>\n      <p>Obsługuje płynne łączenie wielu reguł niestandardowych. Co najważniejsze, stworzyliśmy wydajny <strong>algorytm dzielenia zakresów</strong>: nawet jeśli zadeklarujesz złożone naprzemienne wzorce (np. styl stron nieparzystych A, strony parzyste B), narzędzie czytelnie przeanalizuje i ułoży granice, aby zapewnić prawidłowe wyświetlanie zgodne ze standardami bez przenoszenia formatów na strony bez przypisanych etykiet.</p>\n      <p>Wszystkie operacje są przetwarzane całkowicie w lokalnym środowisku przeglądarki, co zapewnia całkowitą prywatność danych.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij dokument PDF", description: "Podaj docelowy dokument PDF, który chcesz oznaczyć etykietą." },
      { step: 2, title: "Skonfiguruj reguły etykietowania", description: "Dodaj jedną lub więcej reguł określających zakresy stron (np. „1-5”, „nieparzyste” lub listy rozdzielane przecinkami), przedrostek, styl i kolejność początkową." },
      { step: 3, title: "Wyświetl podgląd i pobierz", description: "Przejrzyj poniższy podgląd listy etykiet stron na żywo, a następnie utwórz i pobierz zaktualizowany dokument PDF." },
    ],
    useCases: [
      { title: "Formatowanie pracy akademickiej", description: "Ustaw małe cyfry rzymskie (i, ii, iii) dla wprowadzenia i przejścia na dziesiętne dla głównych rozdziałów.", icon: 'book' },
      { title: "Przedrostki planów inżynieryjnych", description: "Dołącz skróty podsystemów (np. „A-1”, „M-5”) jako przedrostki etykiet stron, umożliwiając zespołom wyszukiwanie i lokalizowanie stron w ciągu kilku sekund.", icon: 'layout' },
      { title: "Niestandardowe układy naprzemienne", description: "Stosuj bardzo szczegółowe indeksowanie zakresów stron do sekwencji nieparzystych/parzystych lub nieciągłych sekcji z maksymalną swobodą.", icon: 'shuffle' },
    ],
    faq: [
      { question: "Czym są etykiety stron i numery stron?", answer: "Zwykłe numery stron to wizualne bloki tekstu renderowane bezpośrednio na papierowym płótnie (widoczne po wydrukowaniu). Etykiety stron to jednak metadane strukturalne wprowadzone do katalogu PDF. Kontrolują zawartość wyświetlaną pod miniaturami oraz w polu wyszukiwania strony w oprogramowaniu takim jak Adobe Acrobat lub Apple Preview." },
      { question: "Co się stanie, jeśli pozostawię zakres stron pusty?", answer: "Pozostawienie pustego zakresu stron powoduje, że reguła zostanie zastosowana globalnie do wszystkich stron dokumentu." },
      { question: "Jak obsługiwane są nakładające się reguły?", answer: "Reguły są oceniane sekwencyjnie w kolejności, w jakiej są wymienione. Jeśli zakres stron późniejszej reguły pokrywa się z wcześniejszą, późniejsza reguła ma pierwszeństwo i zastępuje etykietę tej strony." },
    ],
  },

  'n-up-pdf': {
    title: "N-up PDF",
    metaDescription: "Drukuj wiele stron PDF na arkuszu. Twórz układy 2-up, 4-up lub niestandardowe.",
    keywords: ["n-up pdf", "wiele stron na arkusz", "Drukowanie 2-up", "nakładanie strony"],
    description: "\n      <p>N-Up PDF układa wiele stron na pojedynczych arkuszach, tworząc układy 2 na arkuszu, 4 na arkuszu, 6 na arkuszu, 9 na arkuszu lub układy niestandardowe. Świetnie nadaje się do oszczędzania papieru podczas drukowania lub tworzenia materiałów informacyjnych.</p>\n      <p>Wybierz spośród gotowych układów lub utwórz niestandardowe aranżacje. Narzędzie automatycznie skaluje i pozycjonuje strony w celu uzyskania optymalnych wyników.</p>\n      <p>Całe przetwarzanie odbywa się w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać." },
      { step: 2, title: "Wybierz Układ", description: "Wybierz 2-up, 4-up, 6-up, 9-up lub niestandardową siatkę." },
      { step: 3, title: "Utwórz i pobierz", description: "Kliknij opcję Utwórz, aby wygenerować i pobrać plik PDF składający się z kilku stron." },
    ],
    useCases: [
      { title: "Oszczędzaj papier", description: "Drukuj wiele stron na arkuszu, aby zmniejszyć zużycie papieru.", icon: 'leaf' },
      { title: "Twórz materiały informacyjne", description: "Twórz kompaktowe materiały informacyjne na podstawie slajdów prezentacji.", icon: 'file-text' },
      { title: "Przejrzyj dokumenty", description: "Drukuj dokumenty w zmniejszonym rozmiarze do przeglądu.", icon: 'eye' },
    ],
    faq: [
      { question: "Jakie układy są dostępne?", answer: "Dostępne są układy 2 na 1, 4 na 1, 6 na 1, 9 na 1 oraz niestandardowe układy siatki." },
      { question: "Czy mogę dodać obramowania pomiędzy stronami?", answer: "Tak, możesz dodawać obramowania i rynny pomiędzy stronami." },
      { question: "Czy zachowana jest kolejność stron?", answer: "Tak, strony są ułożone w kolejności czytania (od lewej do prawej, od góry do dołu)." },
    ],
  },

  'combine-single-page': {
    title: "Połącz w jedną stronę",
    metaDescription: "Połącz strony PDF w jedną ciągłą stronę. Twórz przewijalne dokumenty jednostronicowe.",
    keywords: ["połączyć strony", "pojedyncza strona pdf", "zszyć strony", "ciągłe przewijanie"],
    description: "\n      <p>Połącz do pojedynczej strony scala wszystkie strony PDF w jedną ciągłą stronę. Twórz przewijalne dokumenty, idealne do przeglądania w Internecie lub ciągłego czytania.</p>\n      <p>Strony są łączone w pionie z możliwością dostosowania odstępów. Rezultatem jest pojedyncza długa strona zawierająca całą treść.</p>\n      <p>Całe przetwarzanie odbywa się w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać." },
      { step: 2, title: "Ustaw odstępy", description: "Wybierz odstęp pomiędzy zszytymi stronami." },
      { step: 3, title: "Połącz i pobierz", description: "Kliknij Połącz, aby utworzyć jednostronicowy plik PDF." },
    ],
    useCases: [
      { title: "Dokumenty internetowe", description: "Twórz przewijalne pliki PDF do umieszczania w Internecie.", icon: 'globe' },
      { title: "Ciągłe czytanie", description: "Konwertuj dokumenty podzielone na strony na przewijanie ciągłe.", icon: 'scroll' },
      { title: "Treść w dłuższej formie", description: "Łącz strony, aby sprawnie czytać długie formularze.", icon: 'file-text' },
    ],
    faq: [
      { question: "Czy istnieje limit stron?", answer: "Bardzo długie dokumenty mogą być ograniczone przez pamięć przeglądarki." },
      { question: "Czy mogę dodać separatory pomiędzy stronami?", answer: "Tak, możesz dodać odstępy lub linie pomiędzy stronami oryginału." },
      { question: "Czy to będzie działać w przypadku drukowania?", answer: "Wynik jest najlepszy do oglądania na ekranie; użyj opcji N-Up w przypadku układów wydruku." },
    ],
  },

  'view-metadata': {
    title: "Wyświetl metadane",
    metaDescription: "Wyświetl właściwości dokumentu PDF. Zobacz autora, tytuł, daty i inne metadane.",
    keywords: ["metadane PDF", "właściwości dokumentu", "informacje w pliku PDF", "zobacz szczegóły w pliku PDF"],
    description: "\n      <p>Wyświetl metadane wyświetla wszystkie właściwości dokumentu i metadane z plików PDF. Zobacz autora, tytuł, temat, słowa kluczowe, datę utworzenia, datę modyfikacji i inne informacje.</p>\n      <p>Przydatne do kontrolowania dokumentów, sprawdzania informacji o plikach lub weryfikowania autentyczności dokumentów.</p>\n      <p>Całe przeglądanie odbywa się w przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać." },
      { step: 2, title: "Zobacz właściwości", description: "Zobacz wszystkie metadane wyświetlane w zorganizowanym formacie." },
      { step: 3, title: "Eksportuj w razie potrzeby", description: "Opcjonalnie eksportuj metadane w formacie JSON." },
    ],
    useCases: [
      { title: "Audyt dokumentów", description: "Przejrzyj właściwości dokumentu pod kątem zgodności.", icon: 'clipboard-check' },
      { title: "Zweryfikuj autentyczność", description: "Sprawdź daty powstania i informacje o autorze.", icon: 'shield' },
      { title: "Informacje o pliku", description: "Uzyskaj szczegółowe informacje na temat plików PDF.", icon: 'info' },
    ],
    faq: [
      { question: "Jakie metadane są wyświetlane?", answer: "Tytuł, autor, temat, słowa kluczowe, twórca, producent, daty i wersja PDF." },
      { question: "Czy mogę tutaj edytować metadane?", answer: "Użyj narzędzia Edytuj metadane, aby zmodyfikować właściwości dokumentu." },
      { question: "Czy metadane XMP są uwzględnione?", answer: "Tak, wyświetlane są zarówno metadane standardowe, jak i XMP." },
    ],
  },

  'edit-metadata': {
    title: "Edytuj metadane",
    metaDescription: "Edytuj właściwości dokumentu PDF. Zmień tytuł, autora, temat i słowa kluczowe.",
    keywords: ["edytuj metadane PDF", "zmień właściwości pliku PDF", "autor PDF", "informacje o dokumencie"],
    description: "\n      <p>Edytuj metadane umożliwia modyfikowanie właściwości dokumentu w plikach PDF. Zmień tytuł, autora, temat, słowa kluczowe i inne pola metadanych.</p>\n      <p>Świetnie nadaje się do poprawiania informacji o dokumencie, dodawania odpowiednich informacji o źródłach lub przygotowywania plików do dystrybucji.</p>\n      <p>Cała edycja odbywa się w przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać." },
      { step: 2, title: "Edytuj właściwości", description: "Zmodyfikuj tytuł, autora, temat, słowa kluczowe i inne pola." },
      { step: 3, title: "Zapisz i pobierz", description: "Kliknij Zapisz, aby zastosować zmiany i pobrać." },
    ],
    useCases: [
      { title: "Dodaj atrybucję", description: "Ustaw odpowiednie informacje o autorze i twórcy.", icon: 'user' },
      { title: "Optymalizacja SEO", description: "Dodaj słowa kluczowe i opisy, aby ułatwić wyszukiwanie.", icon: 'search' },
      { title: "Przygotowanie dokumentu", description: "Przed udostępnieniem przygotuj dokumenty z odpowiednimi metadanymi.", icon: 'file-check' },
    ],
    faq: [
      { question: "Jakie pola mogę edytować?", answer: "Pola tytułu, autora, tematu, słów kluczowych, twórcy i producenta." },
      { question: "Czy mogę wyczyścić wszystkie metadane?", answer: "Użyj narzędzia Usuń metadane, aby usunąć wszystkie właściwości dokumentu." },
      { question: "Czy daty można edytować?", answer: "Daty utworzenia i modyfikacji są aktualizowane automatycznie." },
    ],
  },

  'pdf-to-zip': {
    title: "Pliki PDF do ZIP",
    metaDescription: "Spakuj wiele plików PDF do archiwum ZIP. Kompresuj i pakuj pliki PDF.",
    keywords: ["PDF do ZIP", "kompresuj pliki PDF", "pakiet plików PDF", "archiwizuj pliki PDF"],
    description: "\n      <p>PDF do ZIP pakuje wiele plików PDF w jedno archiwum ZIP. Kompresuj i pakuj pliki PDF, aby ułatwić udostępnianie, przechowywanie lub tworzenie kopii zapasowych.</p>\n      <p>Narzędzie tworzy skompresowane archiwum zawierające wszystkie pliki PDF, zmniejszając całkowity rozmiar i upraszczając zarządzanie plikami.</p>\n      <p>Całe przetwarzanie odbywa się w Twojej przeglądarce, dzięki czemu Twoje pliki pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij pliki PDF", description: "Przeciągnij i upuść wiele plików PDF lub kliknij, aby wybrać." },
      { step: 2, title: "Skonfiguruj archiwum", description: "Opcjonalnie ustaw nazwę archiwum i poziom kompresji." },
      { step: 3, title: "Utwórz i pobierz", description: "Kliknij Utwórz, aby wygenerować archiwum ZIP." },
    ],
    useCases: [
      { title: "Udostępnianie plików", description: "Połącz wiele plików PDF w celu łatwiejszego udostępniania.", icon: 'share-2' },
      { title: "Tworzenie kopii zapasowych", description: "Twórz skompresowane kopie zapasowe kolekcji PDF.", icon: 'archive' },
      { title: "Załączniki do e-maili", description: "Połącz pliki PDF w jeden załącznik do wiadomości e-mail.", icon: 'mail' },
    ],
    faq: [
      { question: "Jak duża jest kompresja?", answer: "Kompresja ZIP zazwyczaj zmniejsza całkowity rozmiar o 10–30%." },
      { question: "Czy istnieje limit plików?", answer: "W jednym archiwum możesz umieścić maksymalnie 100 plików PDF." },
      { question: "Czy mogę ustawić hasło?", answer: "Tworzenie plików ZIP chronionych hasłem nie jest obecnie obsługiwane." },
    ],
  },

  'compare-pdfs': {
    title: "Porównaj pliki PDF",
    metaDescription: "Porównaj dwa dokumenty PDF. Podkreśl różnice pomiędzy wersjami.",
    keywords: ["porównaj pliki PDF", "pdf różnica", "porównanie dokumentów", "porównanie wersji"],
    description: "\n      <p>Porównaj pliki PDF analizuje dwa dokumenty PDF i podkreśla różnice między nimi. Świetnie nadaje się do przeglądania wersji dokumentów, sprawdzania zmian w umowie lub weryfikowania zmian.</p>\n      <p>Wyświetlaj dokumenty obok siebie lub w trybie nakładki z wyróżnionymi różnicami. Narzędzie identyfikuje zmiany, uzupełnienia i usunięcia tekstu.</p>\n      <p>Całe porównywanie odbywa się w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij dwa pliki PDF", description: "Prześlij oryginalne i zmodyfikowane dokumenty PDF." },
      { step: 2, title: "Porównaj dokumenty", description: "Wyświetl różnice wyróżnione w trybie obok siebie lub w trybie nakładki." },
      { step: 3, title: "Eksportuj wyniki", description: "Pobierz raport porównawczy lub plik PDF z adnotacjami." },
    ],
    useCases: [
      { title: "Przegląd umowy", description: "Porównaj wersje umów, aby zidentyfikować zmiany.", icon: 'file-text' },
      { title: "Rewizja dokumentu", description: "Przeglądaj zmiany pomiędzy wersjami dokumentu.", icon: 'git-compare' },
      { title: "Zapewnienie jakości", description: "Sprawdź, czy wprowadzono wyłącznie zamierzone zmiany.", icon: 'check-circle' },
    ],
    faq: [
      { question: "Jakie rodzaje różnic są wykrywane?", answer: "Dodawanie, usuwanie, modyfikowanie i zmiany formatowania tekstu." },
      { question: "Czy mogę porównać zeskanowane dokumenty?", answer: "Zeskanowane dokumenty należy najpierw poddać procesowi OCR w celu porównania tekstu." },
      { question: "Czy dostępne jest porównanie wizualne?", answer: "Tak, tryb nakładki pokazuje różnice wizualne pomiędzy stronami." },
    ],
  },

  'posterize-pdf': {
    title: "Utwórz plakat z PDF",
    metaDescription: "Podziel duże strony PDF na kafelki, które można wydrukować. Twórz plakaty ze stron PDF.",
    keywords: ["posteryzuj pdf", "płytka pdf", "druk wielkoformatowy", "plakat w pliku PDF"],
    description: "<p>Posteryzacja pliku PDF dzieli duże strony pliku PDF na mniejsze kafelki, które można wydrukować na standardowym papierze i złożyć w plakaty. Świetnie nadaje się do drukowania dużych diagramów, map i dzieł sztuki.</p>\n      <p>Skonfiguruj rozmiar siatki i zakładkę, aby ułatwić montaż. Narzędzie automatycznie oblicza wymiary płytek dla docelowego rozmiaru wyjściowego.</p>\n      <p>Całe przetwarzanie odbywa się w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść wielkoformatowy plik PDF lub kliknij, aby wybrać." },
      { step: 2, title: "Skonfiguruj kafelki", description: "Ustaw rozmiar siatki, nakładkę i rozmiar papieru wyjściowego." },
      { step: 3, title: "Utwórz i pobierz", description: "Kliknij opcję Utwórz, aby wygenerować kafelki do wydrukowania." },
    ],
    useCases: [
      { title: "Drukowanie plakatów", description: "Drukuj duże plakaty na standardowym papierze.", icon: 'maximize-2' },
      { title: "Drukowanie mapy", description: "Drukuj duże mapy w sekcjach do montażu.", icon: 'map' },
      { title: "Reprodukcja dzieł sztuki", description: "Twórz duże wydruki z grafik w pliku PDF.", icon: 'image' },
    ],
    faq: [
      { question: "Jakie nakładanie się powinienem zastosować?", answer: "Zaleca się zachodzenie na siebie 10-20mm, aby ułatwić wyrównanie podczas montażu." },
      { question: "Czy mogę dodać znaczniki przycięcia?", answer: "Tak, można dodać znaczniki przycięcia, aby ułatwić cięcie i wyrównywanie." },
      { question: "Jakie rozmiary papieru są obsługiwane?", answer: "Obsługiwane są formaty A4, Letter, A3 i rozmiary niestandardowe." },
    ],
  },

  // ==================== OPTIMIZE & REPAIR ====================
  'fix-page-size': {
    title: "Napraw rozmiar strony",
    metaDescription: "Standaryzuj rozmiary stron PDF. Konwertuj wszystkie strony na jednolite wymiary.",
    keywords: ["napraw rozmiar strony", "standaryzacja plików PDF", "jednolite strony", "zmienić rozmiar stron PDF"],
    description: "\n      <p>Napraw rozmiar strony standaryzuje wszystkie strony pliku PDF w celu uzyskania jednolitych wymiarów. Konwertuj dokumenty o różnych rozmiarach na strony o jednakowych rozmiarach w celu profesjonalnej prezentacji lub drukowania.</p>\n      <p>Wybierz spośród standardowych rozmiarów (A4, Letter itp.) lub ustaw wymiary niestandardowe. Treść jest skalowana lub pozycjonowana tak, aby pasowała do nowego rozmiaru strony.</p>\n      <p>Całe przetwarzanie odbywa się w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać." },
      { step: 2, title: "Wybierz Rozmiar docelowy", description: "Wybierz rozmiar standardowy lub wprowadź wymiary niestandardowe." },
      { step: 3, title: "Zastosuj i pobierz", description: "Kliknij Zastosuj, aby ujednolicić strony i pobrać." },
    ],
    useCases: [
      { title: "Przygotowanie do druku", description: "Standaryzuj strony, aby zapewnić spójne drukowanie.", icon: 'printer' },
      { title: "Oczyszczanie dokumentów", description: "Napraw dokumenty o niespójnych rozmiarach stron.", icon: 'file-check' },
      { title: "Dokumenty zawodowe", description: "Twórz jednolite dokumenty do dystrybucji.", icon: 'briefcase' },
    ],
    faq: [
      { question: "Jak obsługiwana jest treść?", answer: "Treść jest skalowana w celu dopasowania do nowego rozmiaru strony lub wyśrodkowana." },
      { question: "Czy mogę zachować proporcje?", answer: "Tak, treść można skalować proporcjonalnie w celu dopasowania." },
      { question: "Jakie standardowe rozmiary są dostępne?", answer: "A4, A3, Letter, Legal i inne popularne rozmiary." },
    ],
  },

  'linearize-pdf': {
    title: "Linearyzacja PDF",
    metaDescription: "Zoptymalizuj plik PDF pod kątem szybkiego przeglądania Internetu. Włącz ładowanie progresywne.",
    keywords: ["linearyzuj pdf", "szybki podgląd sieci", "zoptymalizować pdf", "progresywny pdf"],
    description: "\n      <p>Linearize PDF optymalizuje dokumenty pod kątem szybkiego przeglądania w Internecie. Wyświetlanie linearyzowanych plików PDF może rozpocząć się przed pobraniem całego pliku, co poprawia wygodę użytkownika.</p>\n      <p>Ta optymalizacja, znana również jako „szybki podgląd sieci”, reorganizuje strukturę plików PDF w celu stopniowego ładowania w przeglądarkach internetowych.</p>\n      <p>Całe przetwarzanie odbywa się w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać." },
      { step: 2, title: "Linearyzacja", description: "Kliknij opcję Linearyzuj, aby zoptymalizować pod kątem przeglądania w Internecie." },
      { step: 3, title: "Pobierz", description: "Pobierz zoptymalizowany plik PDF." },
    ],
    useCases: [
      { title: "Publikowanie w Internecie", description: "Optymalizuj pliki PDF pod kątem pobierania z witryny internetowej.", icon: 'globe' },
      { title: "Załączniki do e-maili", description: "Twórz pliki PDF, które otwierają się szybciej dla odbiorców.", icon: 'mail' },
      { title: "Dokumenty internetowe", description: "Popraw jakość przeglądania dokumentów online.", icon: 'cloud' },
    ],
    faq: [
      { question: "Co to jest linearyzacja?", answer: "Linearyzacja reorganizuje dane PDF w celu stopniowego ładowania." },
      { question: "Czy zmniejsza rozmiar pliku?", answer: "Linearyzacja może nieznacznie zwiększyć rozmiar pliku ze względu na dodaną strukturę." },
      { question: "Czy jest kompatybilny ze wszystkimi przeglądarkami?", answer: "Tak, linearyzowane pliki PDF działają we wszystkich czytnikach plików PDF." },
    ],
  },

  'page-dimensions': {
    title: "Wymiary strony",
    metaDescription: "Analizuj rozmiary stron PDF. Wyświetl wymiary wszystkich stron w dokumencie.",
    keywords: ["rozmiar strony pdf", "wymiary strony", "pomiary w pliku PDF", "rozmiar dokumentu"],
    description: "\n      <p>Wymiary strony analizują i wyświetlają rozmiar każdej strony w dokumencie PDF. Przeglądaj wymiary w różnych jednostkach (cale, mm, punkty) i identyfikuj strony o niestandardowych rozmiarach.</p>\n      <p>Przydatne do przygotowywania druku, analizy dokumentów lub identyfikowania niespójnych rozmiarów stron.</p>\n      <p>Cała analiza odbywa się w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać." },
      { step: 2, title: "Zobacz Wymiary", description: "Zobacz rozmiary stron wyświetlane dla wszystkich stron." },
      { step: 3, title: "Eksportuj raport", description: "Opcjonalnie eksportuj wymiary jako JSON." },
    ],
    useCases: [
      { title: "Planowanie druku", description: "Przed drukowaniem sprawdź rozmiary stron.", icon: 'printer' },
      { title: "Analiza dokumentów", description: "Identyfikuj strony o nietypowych wymiarach.", icon: 'search' },
      { title: "Kontrola jakości", description: "Sprawdź, czy rozmiary stron odpowiadają specyfikacjom.", icon: 'check-circle' },
    ],
    faq: [
      { question: "Jakie jednostki są dostępne?", answer: "Cale, milimetry, centymetry i punkty." },
      { question: "Czy wskazuje orientację?", answer: "Tak, wskazana jest orientacja pionowa lub pozioma." },
      { question: "Czy mogę naprawić niespójne rozmiary?", answer: "Użyj narzędzia Napraw rozmiar strony, aby ujednolicić wymiary." },
    ],
  },

  'remove-restrictions': {
    title: "Usuń ograniczenia",
    metaDescription: "Usuń ograniczenia dotyczące plików PDF. Odblokuj uprawnienia do drukowania, kopiowania i edytowania.",
    keywords: ["usuń ograniczenia dotyczące plików PDF", "odblokuj pdf", "uprawnienia PDF", "nieograniczone pdf"],
    description: "\n      <p>Usuń ograniczenia odblokowuje pliki PDF z ograniczeniami uprawnień uniemożliwiającymi drukowanie, kopiowanie lub edycję. To narzędzie usuwa ograniczenia dotyczące hasła właściciela, zachowując jednocześnie treść dokumentu.</p>\n      <p>Uwaga: to narzędzie nie może usunąć haseł użytkowników uniemożliwiających otwarcie dokumentu. Użyj opcji Odszyfruj PDF w przypadku plików chronionych hasłem.</p>\n      <p>Całe przetwarzanie odbywa się w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij ograniczony plik PDF", description: "Przeciągnij i upuść ograniczony plik PDF lub kliknij, aby wybrać." },
      { step: 2, title: "Usuń ograniczenia", description: "Kliknij Usuń, aby odblokować dokument." },
      { step: 3, title: "Pobierz", description: "Pobierz nieograniczony plik PDF." },
    ],
    useCases: [
      { title: "Włącz drukowanie", description: "Odblokuj pliki PDF uniemożliwiające drukowanie.", icon: 'printer' },
      { title: "Włącz kopiowanie", description: "Zezwalaj na zaznaczanie i kopiowanie tekstu.", icon: 'copy' },
      { title: "Włącz edycję", description: "Usuń ograniczenia dotyczące edycji dokumentu.", icon: 'edit' },
    ],
    faq: [
      { question: "Czy to jest legalne?", answer: "Usuwanie ograniczeń z dokumentów, które posiadasz lub do których masz prawa, jest ogólnie zgodne z prawem." },
      { question: "Czy może usunąć otwarte hasła?", answer: "Nie, użyj opcji Odszyfruj PDF w przypadku dokumentów chronionych hasłem." },
      { question: "Czy będzie to miało wpływ na treść?", answer: "Nie, usuwane są jedynie ograniczenia; treść pozostaje niezmieniona." },
    ],
  },

  'repair-pdf': {
    title: "Napraw PDF",
    metaDescription: "Napraw uszkodzone pliki PDF. Odzyskaj i napraw uszkodzone dokumenty.",
    keywords: ["naprawa pdf", "popraw pdf", "odzyskać pdf", "uszkodzony plik PDF"],
    description: "\n      <p>Napraw PDF próbuje naprawić uszkodzone lub nieczytelne pliki PDF. Narzędzie analizuje strukturę dokumentu i przebudowuje ją tak, aby odzyskać jak najwięcej treści.</p>\n      <p>Przydatne do odzyskiwania plików, które nie otwierają się, wyświetlają błędy lub brakuje w nich treści z powodu uszkodzenia.</p>\n      <p>Wszystkie naprawy odbywają się w przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij uszkodzony plik PDF", description: "Przeciągnij i upuść uszkodzony plik PDF lub kliknij, aby wybrać." },
      { step: 2, title: "Dokument naprawy", description: "Kliknij Napraw, aby spróbować odzyskać." },
      { step: 3, title: "Pobierz", description: "Jeśli operacja się powiedzie, pobierz naprawiony plik PDF." },
    ],
    useCases: [
      { title: "Odzyskaj pliki", description: "Odzyskaj pliki PDF, które nie otwierają się poprawnie.", icon: 'refresh-cw' },
      { title: "Napraw błędy", description: "Napraw pliki wyświetlające komunikaty o błędach.", icon: 'wrench' },
      { title: "Przywróć zawartość", description: "Odzyskaj zawartość z częściowo uszkodzonych plików.", icon: 'file-check' },
    ],
    faq: [
      { question: "Czy wszystkie pliki PDF można naprawić?", answer: "Sukces zależy od rodzaju i zakresu korupcji." },
      { question: "Czy cała zawartość zostanie odzyskana?", answer: "Narzędzie odzyskuje tyle, ile to możliwe; poważnie uszkodzone pliki mogą zostać utracone." },
      { question: "Czy powinienem zachować oryginał?", answer: "Tak, zawsze przechowuj oryginalny plik jako kopię zapasową." },
    ],
  },

  // ==================== SECURE PDF ====================
  'encrypt-pdf': {
    title: "Szyfruj PDF",
    metaDescription: "Zabezpiecz hasłem pliki PDF. Dodaj szyfrowanie i ustaw uprawnienia.",
    keywords: ["szyfruj pdf", "chroń hasłem pdf", "bezpieczny plik PDF", "szyfrowanie PDFów"],
    description: "\n      <p>Zaszyfruj PDF zapewnia ochronę hasłem i szyfrowanie dokumentów PDF. Ustaw hasła użytkowników, aby uniemożliwić otwieranie, oraz hasła właściciela, aby kontrolować uprawnienia, takie jak drukowanie i kopiowanie.</p>\n      <p>Wybierz jeden z różnych poziomów szyfrowania (128-bitowy lub 256-bitowy AES) w zależności od różnych potrzeb bezpieczeństwa.</p>\n      <p>Całe szyfrowanie odbywa się w Twojej przeglądarce, dzięki czemu Twoje hasła i dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać." },
      { step: 2, title: "Ustaw hasła", description: "Wprowadź hasło użytkownika i/lub hasło właściciela. Skonfiguruj uprawnienia." },
      { step: 3, title: "Zaszyfruj i pobierz", description: "Kliknij Zaszyfruj, aby zabezpieczyć plik PDF i pobrać." },
    ],
    useCases: [
      { title: "Dokumenty poufne", description: "Chroń poufne dokumenty biznesowe.", icon: 'lock' },
      { title: "Pliki osobiste", description: "Zabezpiecz dokumenty osobiste, takie jak zeznania podatkowe.", icon: 'shield' },
      { title: "Kontrolowana dystrybucja", description: "Ogranicz to, co odbiorcy mogą zrobić z dokumentami.", icon: 'key' },
    ],
    faq: [
      { question: "Jaka jest różnica między hasłami użytkownika i właściciela?", answer: "Hasło użytkownika uniemożliwia otwarcie; hasło właściciela kontroluje uprawnienia." },
      { question: "Jakie szyfrowanie jest używane?", answer: "Dostępne są opcje szyfrowania 128-bitowego lub 256-bitowego AES." },
      { question: "Czy mogę ustawić uprawnienia bez hasła użytkownika?", answer: "Tak, możesz ustawić hasło właściciela tylko w celu kontrolowania uprawnień." },
    ],
  },

  'sanitize-pdf': {
    title: "Oczyść plik PDF",
    metaDescription: "Usuń ukryte dane z plików PDF. Wyczyść metadane, skrypty i poufne informacje.",
    keywords: ["oczyść PDF", "czysty PDF", "usuń ukryte dane", "prywatność PDF"],
    description: "<p>Oczyść PDF usuwa ukryte dane i potencjalnie wrażliwe informacje z dokumentów. Usuń metadane, osadzone skrypty, załączniki, komentarze i inną ukrytą zawartość.</p>\n      <p>Niezbędne przy przygotowywaniu dokumentów do publicznej dystrybucji lub gdy liczy się prywatność.</p>\n      <p>Całe oczyszczanie odbywa się w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać." },
      { step: 2, title: "Wybierz, co usunąć", description: "Wybierz typy ukrytych danych, które chcesz usunąć." },
      { step: 3, title: "Oczyść i pobierz", description: "Kliknij opcję Oczyść, aby wyczyścić plik PDF i pobrać." },
    ],
    useCases: [
      { title: "Publiczne wydanie", description: "Przygotuj dokumenty do publicznej dystrybucji.", icon: 'globe' },
      { title: "Ochrona prywatności", description: "Usuń dane osobowe przed udostępnieniem.", icon: 'shield' },
      { title: "Zgodność z bezpieczeństwem", description: "Spełniaj wymagania bezpieczeństwa dotyczące obsługi dokumentów.", icon: 'check-circle' },
    ],
    faq: [
      { question: "Jakie ukryte dane są usuwane?", answer: "Metadane, skrypty, załączniki, komentarze, dane formularzy i warstwy ukryte." },
      { question: "Czy będzie to miało wpływ na widoczną treść?", answer: "Nie, usuwane są tylko ukryte dane; pozostaje widoczna treść." },
      { question: "Czy jest to odwracalne?", answer: "Nie, usuniętych danych nie można odzyskać. Zachowaj kopię zapasową oryginału." },
    ],
  },

  'find-and-redact': {
    title: "Znajdź i zaciemnij",
    metaDescription: "Wyszukuj i redaguj tekst na wszystkich stronach pliku PDF. Zbiorcze zaciemnianie poufnych informacji, takich jak numery kont, nazwiska i inne.",
    keywords: ["ukryj dane w PDF", "znajdź i ukryj dane", "zbiorcze ukrywanie danych", "usuń tekst", "trwałe usuwanie danych z PDF", "ukryj wrażliwe dane"],
    description: "\n      <p>Znajdź i zaciemnij umożliwia wyszukiwanie określonego tekstu, liczb lub wzorców na wszystkich stronach pliku PDF i jednoczesne zaciemnianie wszystkich pasujących wystąpień. Świetnie nadaje się do usuwania poufnych informacji, takich jak numery kont, nazwiska, adresy lub wszelkie poufne dane.</p>\n      <p>Przed zastosowaniem zaciemniania przejrzyj podgląd wszystkich dopasowań i wybiórczo wybierz wystąpienia, które chcesz zaciemnić. Obsługuje wyszukiwanie z uwzględnieniem wielkości liter, dopasowywanie całych słów i wyrażenia regularne w celu zaawansowanego dopasowywania wzorców.</p>\n      <p>Całe przetwarzanie odbywa się w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne i bezpieczne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać." },
      { step: 2, title: "Wyszukaj tekst", description: "Wprowadź tekst, liczbę lub wzór wyrażenia regularnego, który chcesz znaleźć i zaciemnić." },
      { step: 3, title: "Przejrzyj i wybierz", description: "Wyświetl podgląd wszystkich dopasowań i wybierz, które chcesz zaciemnić." },
      { step: 4, title: "Zastosuj redakcję", description: "Dostosuj wygląd zaciemniania i zastosuj do wybranych dopasowań." },
    ],
    useCases: [
      { title: "Zgodność z przepisami dotyczącymi prywatności", description: "Redaguj dane osobowe, aby zachować zgodność z RODO, HIPAA lub innymi przepisami.", icon: 'shield' },
      { title: "Dokumenty prawne", description: "Przed udostępnieniem usuń poufne dane z dokumentów prawnych.", icon: 'scale' },
      { title: "Dokumentacja finansowa", description: "Redaguj numery kont, numery SSN lub dane finansowe z wyciągów.", icon: 'credit-card' },
    ],
    faq: [
      { question: "Czy redakcja jest trwała?", answer: "Tak, redakcja trwale usuwa tekst źródłowy. Oryginalnej zawartości nie można odzyskać. Zawsze twórz kopię zapasową oryginalnego pliku." },
      { question: "Czy mogę zaciemnić obrazy lub zeskanowany tekst?", answer: "To narzędzie działa z tekstowymi plikami PDF. W przypadku zeskanowanych dokumentów należy zastosować ręczną redakcję opartą na obszarze." },
      { question: "Czy mogę dostosować wygląd zaciemniania?", answer: "Tak, możesz ustawić kolor zaciemniania, dodać obramowania i opcjonalnie dołączyć tekst zastępczy, np. „[REDACTED]”." },
      { question: "Jak działa wyszukiwanie wyrażeń regularnych?", answer: "Włącz opcję „Użyj wyrażenia regularnego”, aby wyszukiwać przy użyciu wzorców wyrażeń regularnych. Na przykład \\d{4}-\\d{4}-\\d{4}-\\d{4}, aby znaleźć numery kart kredytowych." },
    ],
  },


  'decrypt-pdf': {
    title: "Odszyfruj plik PDF",
    metaDescription: "Usuń hasło z plików PDF. Odblokuj dokumenty chronione hasłem.",
    keywords: ["odszyfrować pdf", "usuń hasło do pdf", "odblokuj pdf", "PDF do usuwania haseł"],
    description: "\n      <p>Odszyfruj PDF usuwa ochronę hasłem z dokumentów PDF. Wprowadź aktualne hasło, aby odblokować plik i utworzyć niezabezpieczoną kopię.</p>\n      <p>To narzędzie wymaga znajomości bieżącego hasła. Nie może złamać ani ominąć nieznanych haseł.</p>\n      <p>Całe odszyfrowanie odbywa się w Twojej przeglądarce, dzięki czemu Twoje hasła i dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij chroniony plik PDF", description: "Przeciągnij i upuść plik PDF chroniony hasłem." },
      { step: 2, title: "Wprowadź hasło", description: "Wprowadź aktualne hasło dokumentu." },
      { step: 3, title: "Odszyfruj i pobierz", description: "Kliknij Odszyfruj, aby usunąć ochronę i pobrać." },
    ],
    useCases: [
      { title: "Usuń stare hasła", description: "Odblokuj dokumenty, gdy hasło nie jest już potrzebne.", icon: 'unlock' },
      { title: "Uprość dostęp", description: "Twórz niezabezpieczone kopie, aby ułatwić udostępnianie.", icon: 'share-2' },
      { title: "Dokumenty archiwalne", description: "Usuń hasła przed długoterminową archiwizacją.", icon: 'archive' },
    ],
    faq: [
      { question: "Czy może złamać nieznane hasła?", answer: "Nie, musisz znać aktualne hasło, aby je odszyfrować." },
      { question: "Czy oryginalny plik został zmodyfikowany?", answer: "Nie, tworzona jest nowa niezabezpieczona kopia." },
      { question: "Co jeśli zapomnę hasła?", answer: "Niestety nie możemy odzyskać zapomnianych haseł." },
    ],
  },

  'flatten-pdf': {
    title: "Spłaszcz plik PDF",
    metaDescription: "Spłaszcz formularze PDF i adnotacje. Spraw, aby treść nie była edytowalna.",
    keywords: ["spłaszczyć pdf", "spłaszczyć formy", "spłaszczyć adnotacje", "nieedytowalny plik pdf"],
    description: "\n      <p>Flatten PDF konwertuje elementy interaktywne, takie jak pola formularzy i adnotacje, na treść statyczną. Spłaszczony plik PDF wygląda tak samo, ale nie można go już edytować.</p>\n      <p>Świetnie nadaje się do finalizowania wypełnionych formularzy, zachowywania adnotacji lub tworzenia nieedytowalnych wersji dokumentów.</p>\n      <p>Całe przetwarzanie odbywa się w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF z formularzami lub adnotacjami." },
      { step: 2, title: "Wybierz, co spłaszczyć", description: "Wybierz spłaszczenie formularzy, adnotacji lub obu." },
      { step: 3, title: "Spłaszcz i pobierz", description: "Kliknij opcję Spłaszcz, aby utworzyć statyczny plik PDF." },
    ],
    useCases: [
      { title: "Sfinalizuj formularze", description: "Zablokuj wypełnione dane formularza, aby zapobiec zmianom.", icon: 'lock' },
      { title: "Zachowaj adnotacje", description: "Dodaj adnotacje na stałe do dokumentu.", icon: 'check-circle' },
      { title: "Dokumenty archiwalne", description: "Twórz wersje nieedytowalne do archiwizacji.", icon: 'archive' },
    ],
    faq: [
      { question: "Czy spłaszczenie jest odwracalne?", answer: "Nie, spłaszczenie jest trwałe. Zachowaj kopię zapasową oryginału." },
      { question: "Czy wygląd się zmieni?", answer: "Nie, dokument wygląda tak samo, ale nie jest już interaktywny." },
      { question: "Czy zmniejsza rozmiar pliku?", answer: "Czasami, gdy elementy interaktywne są konwertowane na prostszą treść." },
    ],
  },

  'remove-metadata': {
    title: "Usuń metadane",
    metaDescription: "Usuń metadane z plików PDF. Usuń autora, daty i właściwości dokumentu.",
    keywords: ["usuń metadane PDF", "usuń metadane", "Prywatność PDF", "anonimowy pdf"],
    description: "\n      <p>Usuń metadane usuwa wszystkie właściwości dokumentu i metadane z plików PDF. Usuń nazwiska autorów, daty utworzenia, informacje o oprogramowaniu i inne dane identyfikujące.</p>\n      <p>Niezbędne dla zachowania prywatności podczas udostępniania dokumentów lub gdy metadane mogą ujawnić poufne informacje.</p>\n      <p>Całe przetwarzanie odbywa się w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać." },
      { step: 2, title: "Usuń metadane", description: "Kliknij Usuń, aby usunąć wszystkie metadane." },
      { step: 3, title: "Pobierz", description: "Pobierz plik PDF pozbawiony metadanych." },
    ],
    useCases: [
      { title: "Ochrona prywatności", description: "Usuń dane osobowe przed udostępnieniem.", icon: 'shield' },
      { title: "Dokumenty anonimowe", description: "Twórz dokumenty bez podawania autora.", icon: 'user-x' },
      { title: "Czysta dystrybucja", description: "Rozpowszechniaj dokumenty bez wewnętrznych metadanych.", icon: 'send' },
    ],
    faq: [
      { question: "Jakie metadane są usuwane?", answer: "Autor, tytuł, temat, słowa kluczowe, daty, informacje o twórcy i producencie." },
      { question: "Czy metadane XMP zostały usunięte?", answer: "Tak, usuwane są zarówno metadane standardowe, jak i XMP." },
      { question: "Czy będzie to miało wpływ na treść?", answer: "Nie, usuwane są tylko metadane; treść dokumentu pozostaje niezmieniona." },
    ],
  },

  'change-permissions': {
    title: "Zmień uprawnienia",
    metaDescription: "Zmodyfikuj uprawnienia PDF. Kontroluj dostęp do drukowania, kopiowania i edytowania.",
    keywords: ["uprawnienia PDF", "zmień dostęp do plików PDF", "ogranicz pdf", "bezpieczeństwo PDF"],
    description: "\n      <p>Zmień uprawnienia modyfikuje kontrolę dostępu do dokumentów PDF. Włącz lub wyłącz uprawnienia do drukowania, kopiowania, edytowania i dodawania adnotacji.</p>\n      <p>Ustaw hasło właściciela, aby wymusić te ograniczenia. Odbiorcy mogą przeglądać dokument, ale mają ograniczone możliwości wykonywania czynności.</p>\n      <p>Całe przetwarzanie odbywa się w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać." },
      { step: 2, title: "Ustaw uprawnienia", description: "Włącz lub wyłącz drukowanie, kopiowanie, edycję i adnotacje." },
      { step: 3, title: "Zastosuj i pobierz", description: "Ustaw hasło właściciela i pobierz zastrzeżony plik PDF." },
    ],
    useCases: [
      { title: "Zapobiegaj kopiowaniu", description: "Wyłącz kopiowanie tekstu, aby chronić zawartość.", icon: 'copy' },
      { title: "Drukowanie kontrolne", description: "Ogranicz lub zezwól na drukowanie dokumentów.", icon: 'printer' },
      { title: "Ogranicz edycję", description: "Zapobiegaj zmianom w dokumencie.", icon: 'edit-3' },
    ],
    faq: [
      { question: "Czy potrzebuję hasła?", answer: "Aby wymusić uprawnienia, wymagane jest hasło właściciela." },
      { question: "Czy uprawnienia można usunąć?", answer: "Tak, za pomocą hasła właściciela lub za pomocą narzędzia Usuń ograniczenia." },
      { question: "Czy wszystkie czytniki plików PDF są kompatybilne?", answer: "Większość czytników plików PDF respektuje uprawnienia, ale niektóre mogą ich nie egzekwować." },
    ],
  },

  'pdf-to-docx': {
    title: "PDF do Worda",
    metaDescription: "Konwertuj pliki PDF na edytowalne dokumenty Word (DOCX). Zachowaj formatowanie i układ.",
    keywords: ["pdf do worda", "przekonwertować pdf na docx", "pdf do dok", "edytowalny plik PDF"],
    description: "\n      <p>PDF to Word konwertuje dokumenty PDF na edytowalne pliki Microsoft Word (DOCX). Narzędzie zachowuje oryginalny układ, formatowanie, obrazy i układ tekstu.</p>\n      <p>Łatwo edytuj zawartość PDF w programie Word bez ponownego wpisywania. Świetnie nadaje się do umów, raportów i życiorysów.</p>\n      <p>Cała konwersja odbywa się lokalnie w Twojej przeglądarce przy użyciu technologii WebAssembly, dzięki czemu Twoje dokumenty nigdy nie opuszczą Twojego urządzenia.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać." },
      { step: 2, title: "Konwertuj", description: "Poczekaj na zakończenie procesu konwersji." },
      { step: 3, title: "Pobierz dokument Worda", description: "Pobierz w pełni edytowalny plik DOCX." },
    ],
    useCases: [
      { title: "Edytuj umowy", description: "Konwertuj umowy PDF na Word w celu edycji i korekty.", icon: 'file-text' },
      { title: "Aktualizacja CV", description: "Aktualizuj stare CV w pliku PDF, konwertując je do formatu Word.", icon: 'user' },
      { title: "Zmiana przeznaczenia treści", description: "Wyodrębnij zawartość z raportów PDF dla innych dokumentów.", icon: 'copy' },
    ],
    faq: [
      { question: "Czy formatowanie zostało zachowane?", answer: "Tak, narzędzie ma na celu jak najdokładniejsze zachowanie układu, czcionek i obrazów." },
      { question: "Czy mogę konwertować zeskanowane pliki PDF?", answer: "Zeskanowane pliki PDF zostaną przekonwertowane jako obrazy w programie Word, chyba że najpierw użyjesz OCR." },
      { question: "Czy jest kompatybilny z Wordem?", answer: "Tak, dane wyjściowe to standardowy plik .docx zgodny z programami Microsoft Word i Dokumentami Google." },
    ],
  },

  'pdf-to-markdown': {
    title: "PDF do Markdown",
    metaDescription: "Konwertuj plik PDF na format Markdown. Wyodrębnij tekst i zachowaj formatowanie, takie jak nagłówki i listy.",
    keywords: ["PDF do Markdown", "konwertuj PDF na Markdown", "ekstrakcja tekstu z PDF", "konwerter Markdown", "PDF na tekst"],
    description: "\n      <p>PDF to Markdown konwertuje dokumenty PDF na czyste, dobrze zorganizowane pliki Markdown. Narzędzie w automatyczny sposób wyodrębnia treść tekstową i próbuje zachować formatowanie, takie jak nagłówki, listy i akapity.</p>\n      <p>Świetnie nadaje się do konwertowania dokumentów PDF do formatów edytowalnych na potrzeby dokumentacji, robienia notatek lub systemów zarządzania treścią obsługujących Markdown.</p>\n      <p>Wszystkie konwersje odbywają się lokalnie w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne i bezpieczne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać." },
      { step: 2, title: "Skonfiguruj opcje", description: "Ustaw zakres stron, wybierz numery stron i dostosuj ustawienia podziału wiersza." },
      { step: 3, title: "Konwertuj i pobierz", description: "Kliknij Konwertuj, aby wygenerować plik Markdown i pobrać." },
    ],
    useCases: [
      { title: "Dokumentacja", description: "Konwertuj podręczniki i przewodniki w pliku PDF do Markdown, aby uzyskać dokumentację kontrolowaną przez wersję.", icon: 'file-text' },
      { title: "Robienie notatek", description: "Wyodrębnij treść z artykułów i książek w pliku PDF do swojego systemu notatek.", icon: 'edit-3' },
      { title: "Migracja treści", description: "Przeprowadź migrację treści PDF na platformy CMS obsługujące Markdown.", icon: 'copy' },
    ],
    faq: [
      { question: "Czy formatowanie zostało zachowane?", answer: "Narzędzie próbuje wykryć nagłówki na podstawie rozmiaru czcionki i list punktorowych/numerowanych. Złożone układy mogą wymagać ręcznej regulacji." },
      { question: "Czy mogę konwertować określone strony?", answer: "Tak, możesz określić zakres stron, np. „1-3, 5, 7”, aby przekonwertować tylko te strony." },
      { question: "Czy to działa w przypadku zeskanowanych plików PDF?", answer: "Zeskanowane pliki PDF zawierają obrazy, a nie tekst. Najpierw użyj naszego narzędzia OCR, aby wyodrębnić tekst przed konwersją do Markdown." },
    ],
  },

  // ==================== NEW TOOLS ====================
  'deskew-pdf': {
    title: "Prostowanie pliku PDF",
    metaDescription: "Automatycznie prostuj zeskanowane lub przechylone strony PDF. Napraw przechylone dokumenty dzięki precyzyjnemu wykrywaniu kąta.",
    keywords: ["przechylony pdf", "wyprostuj pdf", "napraw przechylony skan", "automatyczne obracanie pdf", "poprawny kąt pdf"],
    description: "\n      <p>Deskew PDF automatycznie wykrywa i koryguje przechylone strony w dokumentach PDF, korzystając z zaawansowanej analizy wariancji profili projekcji. Jest to istotne w przypadku zeskanowanych dokumentów, które zostały wprowadzone do skanera pod kątem.</p>\n      <p>Narzędzie analizuje wyrównanie tekstu i treści pod różnymi kątami, aby znaleźć optymalny obrót, a następnie stosuje korekcję. Możesz dostosować próg czułości (1-30) i ustawienia DPI (72-300), aby uzyskać optymalne wyniki.</p>\n      <p>Całe przetwarzanie odbywa się lokalnie w Twojej przeglądarce przy użyciu technologii WebAssembly, dzięki czemu Twoje dokumenty pozostają prywatne i bezpieczne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść zeskanowany plik PDF lub kliknij, aby wybrać." },
      { step: 2, title: "Skonfiguruj ustawienia", description: "W razie potrzeby dostosuj czułość progową i DPI, aby zapewnić lepszą detekcję." },
      { step: 3, title: "Przetwarzaj i pobieraj", description: "Kliknij opcję Prostuj, aby wyprostować strony i pobrać poprawiony plik PDF." },
    ],
    useCases: [
      { title: "Zeskanowane dokumenty", description: "Napraw strony zeskanowane pod kątem z podajników dokumentów.", icon: 'scan' },
      { title: "Skany mobilne", description: "Popraw przechylone zdjęcia dokumentów zrobione smartfonami.", icon: 'smartphone' },
      { title: "Renowacja archiwum", description: "Wyprostuj stare zeskanowane archiwa, aby uzyskać lepszą czytelność.", icon: 'archive' },
    ],
    faq: [
      { question: "Jak dokładne jest wykrywanie kąta?", answer: "Narzędzie wykorzystuje analizę wariancji profilu projekcji do wykrywania kątów skosu do ±10 stopni z dużą dokładnością. Automatycznie pomija strony o kącie mniejszym niż 0.3 stopnia." },
      { question: "Czy będzie to miało wpływ na jakość tekstu?", answer: "W przypadku obrotów o wielokrotność 90 stopni nie następuje utrata jakości. W przypadku innych kątów narzędzie zaokrągla się z dokładnością do stopnia i utrzymuje dobrą jakość." },
      { question: "Czy mogę przechylić tylko określone strony?", answer: "Narzędzie analizuje wszystkie strony, ale koryguje tylko te, na których wykryto przechylenie powyżej progu czułości. Strony z minimalnym przechyleniem pozostają niezmienione." },
      { question: "Jaki jest próg czułości?", answer: "Wartości 1-10 korygują tylko oczywiste przechylenia, 11-20 wykrywają umiarkowane przechylenie, a 21-30 wychwytują subtelne kąty. Wartość domyślna to 10 dla wykrywania zrównoważonego." },
      { question: "Jak długo trwa przetwarzanie?", answer: "Czas przetwarzania zależy od rozmiaru pliku i DPI. 150 DPI (domyślnie) zapewnia dobrą równowagę pomiędzy szybkością i dokładnością. Wyższe DPI jest dokładniejsze, ale wolniejsze." },
    ],
  },

  'pdf-booklet': {
    title: "Kreator broszur PDF",
    metaDescription: "Twórz układy broszur z plików PDF do drukowania. Uporządkuj strony do oprawy zeszytowej za pomocą wielu opcji siatki.",
    keywords: ["książeczka w pliku PDF", "twórca broszur", "wydrukować broszurę", "ścieg siodłowy", "narzucenie"],
    description: "\n      <p>PDF Booklet Creator układa strony PDF w układy broszur gotowych do wydrukowania i złożenia. Świetnie nadaje się do tworzenia broszur, zinów i publikacji zszywanych zeszytowo.</p>\n      <p>Wybierz spośród różnych trybów siatki (1x2, 2x2, 2x4, 4x4), rozmiarów papieru i opcji orientacji. Narzędzie automatycznie obsługuje impozycję strony w celu zapewnienia właściwej kolejności składania.</p>\n      <p>Całe przetwarzanie odbywa się lokalnie w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Prześlij dokument PDF, który chcesz przekonwertować na broszurę." },
      { step: 2, title: "Wybierz Układ", description: "Wybierz tryb siatki, rozmiar papieru, orientację i opcje obrotu." },
      { step: 3, title: "Utwórz i pobierz", description: "Wygeneruj układ broszury i pobierz do druku." },
    ],
    useCases: [
      { title: "Broszury", description: "Twórz składane broszury ze standardowych dokumentów PDF.", icon: 'book-open' },
      { title: "Ziny", description: "Twórz samodzielnie publikowane ziny z odpowiednim rozmieszczeniem stron.", icon: 'book' },
      { title: "Programy wydarzeń", description: "Twórz profesjonalne broszury z programami wydarzeń.", icon: 'calendar' },
    ],
    faq: [
      { question: "Co to jest wiązanie siodłowe?", answer: "Zszywanie siodłowe to metoda oprawy, w której złożone arkusze są zagnieżdżane i zszywane w zagięciu." },
      { question: "Którego trybu siatki powinienem użyć?", answer: "Standardem w przypadku broszur jest format 1x2. W przypadku drukowania wielu stron w celu oszczędzania papieru należy używać formatu 2x2 lub większego." },
      { question: "Czy mogę wyświetlić podgląd układu?", answer: "Tak, narzędzie zapewnia podgląd wizualny przed wygenerowaniem ostatecznej broszury." },
    ],
  },

  'rasterize-pdf': {
    title: "Rasteryzuj plik PDF",
    metaDescription: "Konwertuj strony PDF na obrazy o wysokiej jakości. Eksportuj jako PNG, JPEG lub WebP z niestandardowymi ustawieniami DPI.",
    keywords: ["rasteryzuj pdf", "pdf do obrazu", "PDF do PNG", "pdf do jpega", "konwertuj strony PDF"],
    description: "\n      <p>Rasteryzacja PDF konwertuje strony PDF na wysokiej jakości obrazy rastrowe. Wybieraj spośród formatów wyjściowych PNG, JPEG lub WebP z pełną kontrolą nad ustawieniami DPI i jakości.</p>\n      <p>Świetnie nadaje się do tworzenia miniatur, grafik do mediów społecznościowych lub archiwizowania treści PDF w postaci obrazów. Obsługuje wybór zakresu stron i przetwarzanie wsadowe.</p>\n      <p>Całe przetwarzanie odbywa się lokalnie w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby wybrać." },
      { step: 2, title: "Skonfiguruj dane wyjściowe", description: "Wybierz DPI, format wyjściowy (PNG/JPEG/WebP), jakość i zakres stron." },
      { step: 3, title: "Konwertuj i pobierz", description: "Przetwarzaj strony i pobieraj obrazy pojedynczo lub jako archiwum ZIP." },
    ],
    useCases: [
      { title: "Media społecznościowe", description: "Konwertuj slajdy PDF na obrazy do publikowania w mediach społecznościowych.", icon: 'share-2' },
      { title: "Miniatury", description: "Generuj miniatury podglądu dokumentów PDF.", icon: 'image' },
      { title: "Publikowanie w Internecie", description: "Konwertuj zawartość PDF na formaty obrazów przyjazne dla Internetu.", icon: 'globe' },
    ],
    faq: [
      { question: "Jakiego DPI powinienem użyć?", answer: "72 DPI dla ekranu, 150 DPI do ogólnego użytku, 300 DPI dla jakości druku." },
      { question: "Który format jest najlepszy?", answer: "PNG dla jakości/przezroczystości, JPEG dla małych rozmiarów, WebP dla nowoczesnych zastosowań internetowych." },
      { question: "Czy mogę konwertować określone strony?", answer: "Tak, określ zakresy stron, np. „1-5, 8, 10-15”, aby przekonwertować tylko te strony." },
    ],
  },

  'markdown-to-pdf': {
    title: "Markdown do PDF",
    metaDescription: "Konwertuj pliki Markdown na pięknie sformatowane dokumenty PDF. Obsługa GitHub Flavored Markdown i podświetlania składni.",
    keywords: ["Markdown do PDF", "MD do PDF", "konwertuj Markdown", "GFM do PDF", "konwerter Markdown"],
    description: "<p>Markdown do PDF konwertuje pliki Markdown na profesjonalnie sformatowane dokumenty PDF. Obsługuje CommonMark i GitHub Flavored Markdown (GFM), w tym tabele, listy zadań i bloki kodu.</p>\n      <p>Wybierz jeden z wielu motywów (jasny, ciemny, GitHub) i dostosuj rozmiar strony oraz marginesy. Bloki kodu są podświetlane składnią dla lepszej czytelności.</p>\n      <p>Wszystkie konwersje odbywają się lokalnie w Twojej przeglądarce, dzięki czemu Twoje treści pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij plik Markdown", description: "Prześlij plik .md lub .markdown." },
      { step: 2, title: "Wybierz Motyw", description: "Wybierz motyw wizualny i skonfiguruj ustawienia strony." },
      { step: 3, title: "Konwertuj i pobierz", description: "Wygeneruj stylizowany plik PDF i pobierz." },
    ],
    useCases: [
      { title: "Dokumentacja", description: "Konwertuj pliki i dokumenty README na pliki PDF, które można udostępniać.", icon: 'file-text' },
      { title: "Eksport notatek", description: "Eksportuj notatki Markdown do pliku PDF w celu wydrukowania lub udostępnienia.", icon: 'edit-3' },
      { title: "Raporty", description: "Twórz raporty z Markdown z profesjonalną stylizacją.", icon: 'bar-chart' },
    ],
    faq: [
      { question: "Czy obsługiwany jest GitHub Flavored Markdown?", answer: "Tak, obsługiwane są tabele, listy zadań, przekreślenia i inne funkcje GFM." },
      { question: "Czy mogę dostosować stylizację?", answer: "Wybierz jeden z gotowych motywów lub dodaj niestandardowy CSS, aby uzyskać pełną kontrolę." },
      { question: "Czy bloki kodu są podświetlone?", answer: "Tak, bloki kodu obejmują podświetlanie składni dla popularnych języków." },
    ],
  },

  'email-to-pdf': {
    title: "E-mail do PDF",
    metaDescription: "Konwertuj pliki e-mail (.eml, .msg) na dokumenty PDF. Zachowaj formatowanie, obrazy wbudowane, klikalne linki i osadzaj załączniki.",
    keywords: ["e-mail do PDF", "EML do PDF", "wiadomość do PDF", "konwertuj e-mail", "konwerter poczty e-mail", "zapisz e-mail jako PDF", "Outlook do PDF"],
    description: "\n      <p>Email to PDF konwertuje pliki e-mail (w formatach .eml i .msg) na dobrze sformatowane dokumenty PDF. Narzędzie zachowuje informacje z nagłówka wiadomości e-mail, treść, obrazy wbudowane z możliwością zamiany identyfikatora CID, klikalne łącza i osadza załączniki bezpośrednio w pliku PDF.</p>\n      <p>Dostosuj opcje wyjściowe, w tym rozmiar strony (A4, Letter, Legal), formatowanie daty z obsługą strefy czasowej oraz możliwość dołączania pól CC/BCC i informacji o załącznikach.</p>\n      <p>Wszystkie konwersje odbywają się lokalnie w Twojej przeglądarce, dzięki czemu Twoje e-maile pozostają prywatne i bezpieczne.</p>",
    howToUse: [
      { step: 1, title: "Prześlij plik e-mail", description: "Prześlij plik e-mail .eml lub .msg." },
      { step: 2, title: "Skonfiguruj opcje", description: "Ustaw rozmiar strony, format daty, strefę czasową i wybierz pola, które chcesz uwzględnić." },
      { step: 3, title: "Konwertuj i pobierz", description: "Konwertuj do formatu PDF z osadzonymi załącznikami i pobierz wynik." },
    ],
    useCases: [
      { title: "Zapisy prawne", description: "Archiwizuj ważne e-maile w pliku PDF z osadzonymi załącznikami do dokumentacji prawnej.", icon: 'scale' },
      { title: "Archiwa biznesowe", description: "Konwertuj korespondencję biznesową do formatu PDF w celu długoterminowego przechowywania dokumentacji.", icon: 'briefcase' },
      { title: "Ochrona dowodów", description: "Zapisuj dowody w wiadomościach e-mail z wbudowanymi obrazami i załącznikami w nieedytowalnym formacie PDF.", icon: 'shield' },
    ],
    faq: [
      { question: "Jakie formaty e-maili są obsługiwane?", answer: "W pełni obsługiwane są zarówno pliki .eml (RFC 822), jak i .msg (Microsoft Outlook)." },
      { question: "Czy załączniki są uwzględnione?", answer: "Tak! Załączniki są osadzane bezpośrednio w pliku PDF. Można je wyodrębnić z pliku PDF za pomocą kompatybilnego czytnika plików PDF." },
      { question: "Czy wyświetlane są obrazy wbudowane?", answer: "Tak, obrazy wbudowane, do których odwołuje się CID (Content-ID), są automatycznie konwertowane na identyfikatory URI danych base64 i wyświetlane w pliku PDF." },
      { question: "Czy linki są klikalne?", answer: "Tak, wszystkie linki HTML (tagi <a>) i adresy URL w wiadomościach e-mail w postaci zwykłego tekstu są konwertowane na klikalne linki w pliku PDF." },
      { question: "Czy formatowanie wiadomości e-mail zostało zachowane?", answer: "Tak, wiadomości e-mail w formacie HTML zachowują możliwie najdokładniejsze formatowanie, w tym style, obrazy i łącza." },
    ],
  },

  'cbz-to-pdf': {
    title: "CBZ do pliku PDF",
    metaDescription: "Konwertuj archiwa komiksów (CBZ) do formatu PDF. Zachowaj porządek i jakość obrazów w komiksach cyfrowych.",
    keywords: ["cbz do pliku pdf", "komiks do pdf", "przekonwertuj cbz", "konwerter komiksów", "konwerter CBZ"],
    description: "\n      <p>CBZ to PDF konwertuje pliki Comic Book Archive na dokumenty PDF. Narzędzie wyodrębnia wszystkie obrazy z archiwum CBZ i tworzy z nich plik PDF, zachowując prawidłową kolejność czytania.</p>\n      <p>Wybierz spośród różnych opcji rozmiaru strony, w tym oryginalnych wymiarów obrazu lub standardowych rozmiarów komiksów. Świetnie nadaje się do czytania komiksów na urządzeniach obsługujących format PDF, ale nie obsługujący CBZ.</p>\n      <p>Wszystkie konwersje odbywają się lokalnie w Twojej przeglądarce, dzięki czemu Twoje komiksy pozostają prywatne.</p>",
    howToUse: [
      { step: 1, title: "Prześlij plik CBZ", description: "Prześlij plik archiwum komiksu .cbz." },
      { step: 2, title: "Wybierz Opcje", description: "Wybierz ustawienia rozmiaru strony i jakości obrazu." },
      { step: 3, title: "Konwertuj i pobierz", description: "Konwertuj do formatu PDF i pobierz swój komiks." },
    ],
    useCases: [
      { title: "Kompatybilność z czytnikiem e-booków", description: "Konwertuj CBZ na PDF dla e-czytników obsługujących tylko format PDF.", icon: 'book' },
      { title: "Archiwa komiksów", description: "Twórz archiwa PDF swojej cyfrowej kolekcji komiksów.", icon: 'archive' },
      { title: "Przygotowanie do druku", description: "Konwertuj cyfrowe komiksy na format PDF w celu drukowania.", icon: 'printer' },
    ],
    faq: [
      { question: "Co to jest format CBZ?", answer: "CBZ to archiwum ZIP zawierające strony komiksów w postaci plików graficznych, których nazwy zmieniono z rozszerzeniem .cbz." },
      { question: "Czy jakość obrazu jest zachowana?", answer: "Tak, obrazy są osadzane w pliku PDF w oryginalnej jakości." },
      { question: "Czy obsługiwane są foldery zagnieżdżone?", answer: "Tak, obrazy ze wszystkich folderów w archiwum są wyodrębniane i sortowane." },
    ],
  },

  'pdf-to-pdfa': {
    title: "PDF do PDF/A",
    metaDescription: "Konwertuj plik PDF na format archiwalny PDF/A. Zapewnij długoterminową ochronę dokumentów zgodnie ze standardami ISO.",
    keywords: ["PDF do PDF/A", "konwerter PDF/A", "archiwizacja PDF", "archiwum PDF", "długoterminowe przechowywanie PDF"],
    description: "\n      <p>PDF na PDF/A konwertuje dokumenty PDF do formatu PDF/A, standardu ISO dotyczącego długoterminowej archiwizacji dokumentów. PDF/A gwarantuje, że dokumenty będą widoczne i odtwarzalne przez dziesięciolecia.</p>\n      <p>Wybierz spośród PDF/A-1b (podstawowa zgodność), PDF/A-2b (zalecany, obsługuje przezroczystość) lub PDF/A-3b (umożliwia osadzanie plików). Narzędzie osadza czcionki i w razie potrzeby spłaszcza przezroczystość.</p>\n      <p>Wszystkie konwersje odbywają się lokalnie w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Prześlij plik PDF, który chcesz przekonwertować na format PDF/A." },
      { step: 2, title: "Wybierz Poziom PDF/A", description: "Wybierz poziom zgodności PDF/A-1b, PDF/A-2b lub PDF/A-3b." },
      { step: 3, title: "Konwertuj i pobierz", description: "Konwertuj do formatu PDF/A i pobierz dokument archiwalny." },
    ],
    useCases: [
      { title: "Archiwa prawne", description: "Konwertuj dokumenty prawne do formatu PDF/A w celu długoterminowego przechowywania dopuszczonego przez sąd.", icon: 'scale' },
      { title: "Dokumenty rządowe", description: "Przestrzegaj rządowych wymogów archiwalnych, korzystając z formatu PDF/A.", icon: 'building' },
      { title: "Archiwa biznesowe", description: "Zachowaj ważne dokumenty biznesowe, aby były dostępne w przyszłości.", icon: 'archive' },
    ],
    faq: [
      { question: "Którego poziomu PDF/A powinienem używać?", answer: "Do większości zastosowań zalecany jest format PDF/A-2b. Użyj 1b, aby uzyskać maksymalną kompatybilność lub 3b, jeśli potrzebujesz osadzonych plików." },
      { question: "Co wyróżnia PDF/A?", answer: "PDF/A osadza czcionki, wyłącza szyfrowanie i zapewnia, że wszystkie elementy są samodzielne do przeglądania w przyszłości." },
      { question: "Czy mogę dokonać ponownej konwersji z formatu PDF/A?", answer: "Pliki PDF/A są standardowymi plikami PDF i można je normalnie otwierać. Funkcje archiwalne dodają ograniczenia, a nie ograniczenia." },
    ],
  },

  'font-to-outline': {
    title: "Zamień czcionki na krzywe",
    metaDescription: "Usuń zależności czcionek z dokumentów PDF, konwertując strony na obrazy o wysokiej jakości. Zapewnia kompatybilność ze wszystkimi systemami.",
    keywords: ["zamiana czcionek na krzywe", "tekst na krzywe", "usuń czcionki", "kompatybilność czcionek", "spłaszcz czcionki PDF", "usuwanie czcionek PDF"],
    description: "\n      <p>Font to Outline usuwa wszystkie zależności czcionek z pliku PDF, konwertując każdą stronę na wysokiej jakości zawartość rastrową. Dzięki temu Twój dokument będzie wyglądał dokładnie tak samo w każdym systemie, nawet jeśli oryginalne czcionki nie są zainstalowane.</p>\n      <p>Narzędzie renderuje każdą stronę w wybranym DPI (150–600), usuwając osadzone czcionki, zachowując jednocześnie dokładny wygląd. Opcjonalnie możesz dodać niewidoczną warstwę tekstową, aby zachować możliwość wyszukiwania.</p>\n      <p>Jest to niezbędne do przygotowania druku, zapewnienia zgodności między platformami i uniknięcia problemów z licencjonowaniem czcionek podczas udostępniania dokumentów. Całe przetwarzanie odbywa się lokalnie w Twojej przeglądarce.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Prześlij plik PDF zawierający czcionki, które chcesz usunąć." },
      { step: 2, title: "Skonfiguruj jakość", description: "Wybierz DPI (zalecane 300 do druku, 150 do ekranu). W razie potrzeby włącz tekst z możliwością wyszukiwania." },
      { step: 3, title: "Konwertuj i pobierz", description: "Przetwórz plik i pobierz plik PDF niezależny od czcionki." },
    ],
    useCases: [
      { title: "Przygotowanie do druku", description: "Wyeliminuj problemy z czcionkami w drukarniach komercyjnych, usuwając wszystkie zależności czcionek.", icon: 'printer' },
      { title: "Udostępnianie międzyplatformowe", description: "Udostępniaj dokumenty, które wyglądają identycznie na każdym urządzeniu, niezależnie od zainstalowanych czcionek.", icon: 'share-2' },
      { title: "Licencjonowanie czcionek", description: "Usuń osadzone czcionki, aby uniknąć problemów licencyjnych podczas dystrybucji dokumentów.", icon: 'shield' },
    ],
    faq: [
      { question: "Jak to działa?", answer: "Narzędzie renderuje każdą stronę w wysokiej rozdzielczości (wybrane DPI) i odtwarza plik PDF z tych obrazów, usuwając wszystkie zależności czcionek, zachowując jednocześnie wygląd." },
      { question: "Czy nadal mogę zaznaczyć tekst po konwersji?", answer: "Domyślnie nie. Tekst staje się częścią obrazu. Możesz jednak włączyć opcję „Zachowaj tekst, który można przeszukiwać”, aby dodać niewidoczną warstwę tekstową na potrzeby wyszukiwania i kopiowania." },
      { question: "Jakiego DPI powinienem użyć?", answer: "Aby uzyskać wydruki o wysokiej jakości, zalecana jest rozdzielczość 300 DPI. Do oglądania na ekranie wystarcza rozdzielczość 150 DPI i powstają mniejsze pliki. 600 DPI zapewnia najwyższą jakość, ale tworzy duże pliki." },
      { question: "Czy rozmiar pliku wzrośnie?", answer: "Rozmiar pliku zależy od DPI i zawartości. 150 DPI zwykle tworzy mniejsze pliki, 300 DPI może zwiększyć rozmiar, 600 DPI znacznie zwiększa rozmiar. Kompresja jest stosowana automatycznie." },
      { question: "Czy jest to odwracalne?", answer: "Nie, dane czcionek zostaną trwale usunięte. Jeśli potrzebujesz edytowalnego tekstu z oryginalnymi czcionkami, zachowaj kopię zapasową oryginału." },
      { question: "A co z grafiką wektorową?", answer: "Grafika wektorowa (kształty, linie) w oryginalnym pliku PDF zostanie przekonwertowana na format rastrowy wraz z tekstem. Jakość wizualna jest zachowywana przy wybranym DPI." },
    ],
  },

  'extract-tables': {
    title: "Wyodrębnij tabele z pliku PDF",
    metaDescription: "Wykrywaj i wyodrębniaj tabele z dokumentów PDF. Eksportuj do formatów JSON, Markdown lub CSV.",
    keywords: ["wyodrębnij tabele", "ekstrakcja tabeli pdf", "pdf do CSV", "pdf do Excela", "wykrywanie tabeli"],
    description: "\n      <p>Wyodrębnij tabele z pliku PDF wykrywa dane tabelaryczne w dokumentach PDF i eksportuje je w uporządkowanych formatach. Wybierz JSON do integracji danych, Markdown do dokumentacji lub CSV do arkuszy kalkulacyjnych.</p>\n      <p>Narzędzie wykorzystuje automatyczne algorytmy wykrywania do identyfikacji struktur tabel nawet w złożonych dokumentach. Określ zakresy stron i dostosuj parametry wykrywania, aby uzyskać optymalne wyniki.</p>\n      <p>Całe przetwarzanie odbywa się lokalnie w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Prześlij plik PDF zawierający tabele, które chcesz wyodrębnić." },
      { step: 2, title: "Skonfiguruj wykrywanie", description: "Ustaw zakres stron i minimalne progi kolumn/wierszy." },
      { step: 3, title: "Eksportuj i pobieraj", description: "Wybierz format wyjściowy (JSON/Markdown/CSV) i pobierz." },
    ],
    useCases: [
      { title: "Analiza danych", description: "Wyodrębnij dane z tabeli do analizy w arkuszach kalkulacyjnych lub bazach danych.", icon: 'bar-chart' },
      { title: "Przetwarzanie raportu", description: "Pobieraj tabele z raportów PDF do dalszego przetwarzania.", icon: 'file-text' },
      { title: "Dokumentacja", description: "Konwertuj tabele PDF do Markdown w celu uzyskania dokumentacji technicznej.", icon: 'book' },
    ],
    faq: [
      { question: "Czy może wykryć złożone tabele?", answer: "Narzędzie najlepiej sprawdza się w przypadku prostych tabel siatkowych. Złożone, połączone komórki mogą wymagać ręcznej regulacji." },
      { question: "Co się stanie, jeśli nie zostaną znalezione żadne tabele?", answer: "Spróbuj dostosować minimalny próg kolumn/wierszy lub sprawdź, czy plik PDF zawiera rzeczywiste struktury tabel." },
      { question: "Czy mogę wyodrębnić dane z określonych stron?", answer: "Tak, określ zakres stron, aby ograniczyć wyodrębnianie do określonych stron." },
    ],
  },

  'ocg-manager': {
    title: "Menedżer warstw PDF (OCG)",
    metaDescription: "Zarządzaj warstwami PDF (opcjonalne grupy treści). Przeglądaj, przełączaj, dodawaj, usuwaj i zmieniaj nazwy warstw w dokumentach PDF.",
    keywords: ["warstwy PDF", "menedżer OCG", "opcjonalne grupy treści", "widoczność warstw PDF", "zarządzaj warstwami PDF"],
    description: "\n      <p>Menedżer warstw PDF umożliwia przeglądanie opcjonalnych grup treści (OCG) w dokumentach PDF i zarządzanie nimi. Warstwy OCG są używane w rysunkach technicznych, mapach i złożonych dokumentach w celu organizowania treści w przełączalne warstwy.</p>\n      <p>Wyświetl wszystkie warstwy w pliku PDF, przełącz ich widoczność, dodaj nowe warstwy, usuń niechciane lub zmień nazwę istniejących warstw. To narzędzie jest niezbędne do pracy z warstwowymi plikami PDF, takimi jak plany architektoniczne, eksporty CAD i dokumenty gotowe do druku.</p>\n      <p>Całe przetwarzanie odbywa się lokalnie w Twojej przeglądarce, dzięki czemu Twoje dokumenty pozostają prywatne i bezpieczne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij swój plik PDF", description: "Prześlij plik PDF zawierający warstwy (OCG) lub taki, do którego chcesz dodać warstwy." },
      { step: 2, title: "Wyświetl warstwy", description: "Narzędzie automatycznie wyświetla listę wszystkich warstw znajdujących się w dokumencie wraz z ich stanem widoczności." },
      { step: 3, title: "Zarządzaj warstwami", description: "Przełącz widoczność warstw, zmień nazwy warstw, dodaj nowe lub usuń niechciane warstwy." },
      { step: 4, title: "Zapisz i pobierz", description: "Pobierz zmodyfikowany plik PDF z zastosowanymi zmianami warstw." },
    ],
    useCases: [
      { title: "Rysunki techniczne", description: "Zarządzaj warstwami w eksporcie CAD, aby pokazywać/ukrywać wymiary, adnotacje lub różne widoki.", icon: 'ruler' },
      { title: "Edycja mapy", description: "Przełączaj różne warstwy mapy, takie jak topografia, drogi i etykiety, aby uzyskać niestandardowe wydruki map.", icon: 'map' },
      { title: "Przygotowanie do druku", description: "Przygotuj warstwowe pliki PDF do druku, przełączając odpowiednie warstwy dla różnych wersji.", icon: 'printer' },
    ],
    faq: [
      { question: "Co to są warstwy PDF (OCG)?", answer: "Opcjonalne grupy treści (OCG) to warstwy w pliku PDF, które można wyświetlać lub ukrywać. Są powszechnie stosowane w rysunkach CAD, mapach i złożonych dokumentach." },
      { question: "Dlaczego w moim pliku PDF nie widać warstw?", answer: "Nie wszystkie pliki PDF zawierają warstwy. Warstwy są zwykle dodawane podczas tworzenia pliku PDF z oprogramowania do projektowania lub aplikacji CAD." },
      { question: "Czy zmiany warstw będą miały wpływ na oryginalną zawartość?", answer: "Zmiany widoczności warstw wpływają tylko na to, co jest wyświetlane lub drukowane. Rzeczywista treść pozostaje w dokumencie." },
    ],
  },

  'pdf-reader': {
    title: "Czytnik PDF",
    metaDescription: "Bezpłatny internetowy czytnik plików PDF. Przeglądaj, nawiguj, powiększaj, obracaj i drukuj dokumenty PDF bezpośrednio w przeglądarce.",
    keywords: ["czytnik PDF", "przeglądarka plików PDF", "przeglądaj pdf online", "przeczytaj pdf", "przeglądarka plików PDF"],
    description: "\n      <p>Czytnik PDF to w pełni funkcjonalna przeglądarka plików PDF, która umożliwia czytanie dokumentów PDF i nawigowanie w nich bezpośrednio w przeglądarce. Nie jest wymagana instalacja oprogramowania — po prostu prześlij plik PDF i zacznij czytać.</p>\n      <p>Nawiguj między stronami, powiększaj i pomniejszaj, obracaj widok i korzystaj z trybu pełnoekranowego, aby czytać bez rozpraszania uwagi. Możesz także wydrukować dokumenty lub pobrać je w celu uzyskania dostępu offline.</p>\n      <p>Całe przeglądanie odbywa się lokalnie w Twojej przeglądarce. Twoje dokumenty nigdy nie są przesyłane na żaden serwer, co zapewnia całkowitą prywatność.</p>\n    ",
    howToUse: [
      { step: 1, title: "Otwórz swój plik PDF", description: "Kliknij, aby przesłać lub przeciągnij i upuść plik PDF, aby otworzyć go w czytniku." },
      { step: 2, title: "Nawiguj po stronach", description: "Użyj elementów sterujących strony, aby przejść do poprzedniej lub następnej strony albo przejść do określonego numeru strony." },
      { step: 3, title: "Dostosuj widok", description: "Powiększ lub pomniejsz, obróć widok lub przejdź do trybu pełnoekranowego, aby wygodnie czytać." },
      { step: 4, title: "Wydrukuj lub pobierz", description: "Wydrukuj dokument lub pobierz go, aby uzyskać dostęp w trybie offline, jeśli zajdzie taka potrzeba." },
    ],
    useCases: [
      { title: "Przegląd dokumentów", description: "Szybko przeglądaj dokumenty PDF bez instalowania żadnego oprogramowania.", icon: 'book-open' },
      { title: "Czytanie mobilne", description: "Czytaj dokumenty PDF na dowolnym urządzeniu z przeglądarką internetową.", icon: 'smartphone' },
      { title: "Szybki podgląd", description: "Przeglądaj pliki PDF przed podjęciem decyzji o ich pobraniu lub wydrukowaniu.", icon: 'eye' },
    ],
    faq: [
      { question: "Czy mój dokument jest bezpieczny?", answer: "Tak, Twój dokument jest przetwarzany całkowicie w Twojej przeglądarce i nigdy nie jest przesyłany na żaden serwer." },
      { question: "Czy mogę dodawać adnotacje lub edytować plik PDF?", answer: "To narzędzie służy wyłącznie do przeglądania. Do edycji użyj naszych narzędzi Podpisz PDF lub Adnotuj PDF." },
      { question: "Czy to działa na urządzeniach mobilnych?", answer: "Tak, Czytnik plików PDF działa na wszystkich urządzeniach wyposażonych w nowoczesną przeglądarkę internetową." },
    ],
  },

  'digital-sign-pdf': {
    title: "Podpis cyfrowy",
    metaDescription: "Dodaj podpisy cyfrowe X.509 do dokumentów PDF. Podpisuj pliki PDF certyfikatami PFX, P12 lub PEM, aby zachować ważność prawną.",
    keywords: ["podpis cyfrowy PDF", "certyfikat X.509", "podpis PFX w PDF", "podpis P12 w PDF", "podpis PEM w PDF", "podpisz PDF zgodnie z prawem"],
    description: "\n      <p>Podpis cyfrowy umożliwia dodawanie kryptograficznych podpisów cyfrowych X.509 do dokumentów PDF. W przeciwieństwie do podpisów prostych, podpisy cyfrowe zapewniają ważność prawną i weryfikację integralności dokumentu.</p>\n      <p>Prześlij plik certyfikatu (w formacie PFX, P12 lub PEM), wprowadź hasło i podpisz plik PDF. Możesz dodać widoczne podpisy z niestandardowym tekstem, obrazami i położeniem lub niewidoczne podpisy wyłącznie w celu zapewnienia integralności dokumentu.</p>\n      <p>Wszystkie podpisywanie odbywa się lokalnie w Twojej przeglądarce. Twój certyfikat i dokumenty nigdy nie są przesyłane na żaden serwer.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij plik PDF", description: "Prześlij dokument PDF, który chcesz podpisać cyfrowo." },
      { step: 2, title: "Załaduj certyfikat", description: "Prześlij plik certyfikatu X.509 (.pfx, .p12 lub .pem) i wprowadź hasło." },
      { step: 3, title: "Skonfiguruj podpis", description: "Opcjonalnie dodaj powód, lokalizację i widoczny podpis za pomocą niestandardowego tekstu lub obrazu." },
      { step: 4, title: "Podpisz i pobierz", description: "Kliknij opcję Podpisz PDF, aby zastosować podpis cyfrowy i pobrać podpisany dokument." },
    ],
    useCases: [
      { title: "Dokumenty prawne", description: "Podpisuj umowy, porozumienia i dokumenty prawne za pomocą prawnie wiążących podpisów cyfrowych.", icon: 'scale' },
      { title: "Zezwolenia biznesowe", description: "Podpisuj cyfrowo faktury, zamówienia i dokumenty zatwierdzające na potrzeby ścieżek audytu.", icon: 'briefcase' },
      { title: "Integralność dokumentu", description: "Upewnij się, że po podpisaniu dokumenty nie zostały naruszone.", icon: 'shield-check' },
    ],
    faq: [
      { question: "Jakie formaty certyfikatów są obsługiwane?", answer: "Obsługiwane są formaty certyfikatów PFX (.pfx), PKCS#12 (.p12) i PEM (.pem)." },
      { question: "Czy podpis jest ważny prawnie?", answer: "Tak, podpisy cyfrowe X.509 są prawnie uznawane w większości jurysdykcji, jeśli używa się ważnego certyfikatu." },
      { question: "Czy mogę dodać widoczny podpis?", answer: "Tak, możesz dodać widoczny podpis z niestandardowym tekstem, obrazem, pozycją i stylem." },
    ],
  },

  'validate-signature': {
    title: "Zweryfikuj podpis",
    metaDescription: "Weryfikuj podpisy cyfrowe w dokumentach PDF. Sprawdź ważność certyfikatu, dane osoby podpisującej i integralność dokumentu.",
    keywords: ["sprawdź podpis PDF", "zweryfikuj podpis cyfrowy", "sprawdź certyfikat pdf", "weryfikacja podpisu"],
    description: "\n      <p>Weryfikuj podpis umożliwia weryfikację podpisów cyfrowych w dokumentach PDF. Sprawdź, czy podpisy są ważne, wyświetl informacje o certyfikacie i potwierdź integralność dokumentu.</p>\n      <p>Prześlij podpisany plik PDF, aby zobaczyć wszystkie podpisy, ich status ważności, informacje o podpisującym oraz to, czy dokument został zmodyfikowany po podpisaniu.</p>\n      <p>Cała weryfikacja odbywa się lokalnie w Twojej przeglądarce. Twoje dokumenty nigdy nie są przesyłane na żaden serwer.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij podpisany plik PDF", description: "Prześlij dokument PDF zawierający podpisy cyfrowe." },
      { step: 2, title: "Zobacz wyniki", description: "Zobacz wszystkie podpisy znalezione w dokumencie wraz z ich statusem ważności." },
      { step: 3, title: "Sprawdź szczegóły", description: "Wyświetl informacje o certyfikacie, szczegóły osoby podpisującej i sygnaturę czasową podpisania." },
      { step: 4, title: "Eksportuj raport", description: "Opcjonalnie pobierz raport JSON z wynikami walidacji." },
    ],
    useCases: [
      { title: "Weryfikacja dokumentu", description: "Sprawdź, czy podpisane dokumenty są autentyczne i nie zostały naruszone.", icon: 'shield-check' },
      { title: "Audyt zgodności", description: "Sprawdź ważność podpisu dla celów zgodności i audytu.", icon: 'clipboard-check' },
      { title: "Przegląd certyfikatu", description: "Wyświetl szczegóły certyfikatu i daty ważności podpisanych dokumentów.", icon: 'award' },
    ],
    faq: [
      { question: "Co oznacza „ważny”?", answer: "Ważny podpis oznacza, że dokument nie został zmodyfikowany od czasu podpisania, a łańcuch certyfikatów jest zachowany w całości." },
      { question: "Czy mogę sprawdzić poprawność wielu plików PDF?", answer: "Tak, możesz przesłać wiele plików PDF i sprawdzić wszystkie podpisy zbiorczo." },
      { question: "Dlaczego podpis może być nieważny?", answer: "Podpisy mogą być nieprawidłowe, jeśli dokument został zmodyfikowany, certyfikat wygasł lub certyfikat nie jest zaufany." },
    ],
  },
  'ai-pdf-reflower': {
    title: "Dostosuj układ PDF z użyciem AI",
    metaDescription: "Ponownie składaj dokumenty PDF w responsywne układy przyjazne dla urządzeń mobilnych. Obsługa eksportu Markdown i EPUB w celu lepszego czytania na małym ekranie.",
    keywords: ["zmiana układu PDF", "responsywny PDF", "PDF do Markdown", "eksport EPUB", "mobilny czytnik PDF"],
    description: "\n      <p>Narzędzie AI do zmiany układu PDF ułatwia czytanie dokumentów PDF na urządzeniach mobilnych. Tradycyjne pliki PDF mają stały układ, który na smartfonach i tabletach często wymaga ciągłego powiększania oraz przewijania w poziomie.</p>\n      <p>Narzędzie analizuje przepływ tekstu, odstępy między wierszami i współrzędne stron PDF, aby odtworzyć semantyczne akapity oraz hierarchię nagłówków. W dokumentach wielokolumnowych łączy kolumny w jeden responsywny przepływ, zapewniając płynne czytanie.</p>\n      <p>Obsługuje także renderowanie formuł matematycznych w LaTeX/MathJax oraz motywy czytania (Sepia, Ciemny i Zielony chroniący oczy). Układ po zmianie można jednym kliknięciem wyeksportować jako Markdown lub standardowy e-book EPUB.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij plik PDF", description: "Przeciągnij i upuść plik PDF lub kliknij, aby go przeglądać i wybierać." },
      { step: 2, title: "Wybierz temat czytania", description: "Wybierz preferowany rozmiar czcionki i kolory motywu w mobilnym symulatorze 3D po prawej stronie." },
      { step: 3, title: "Eksportuj dokument", description: "Gdy wynik Ci odpowiada, użyj uchwytu do przeciągania, aby wyeksportować dokument jako Markdown lub EPUB." },
    ],
    useCases: [
      { title: "Mobilne czytanie literatury", description: "Sprawnie czytaj artykuły akademickie i raporty z badań na swoim telefonie, bez ciągłego powiększania i przewijania.", icon: 'smartphone' },
      { title: "Konwersja e-booków", description: "Konwertuj pliki PDF zawierające dużo tekstu na pliki EPUB i importuj je do Kindle lub innych czytników e-booków.", icon: 'book' },
      { title: "Archiwizacja notatek", description: "Bezpośrednio konwertuj ustrukturyzowaną zawartość PDF na czyste pliki Markdown, aby wzbogacić swoją osobistą bazę wiedzy.", icon: 'file-text' },
    ],
    faq: [
      { question: "Czy poprawnie obsługuje dwukolumnowe pliki PDF?", answer: "Tak, narzędzie wykrywa poziome współrzędne bloków tekstu i układa kolejno lewą oraz prawą kolumnę, zapobiegając przeplataniu wierszy." },
      { question: "Czy obrazy i formuły matematyczne zostaną utracone?", answer: "Formuły matematyczne są konwertowane do składni LaTeX/MathJax w celu zapewnienia czystego renderowania w Internecie, a obrazy są zachowywane w odpowiednich pozycjach semantycznych." },
      { question: "Czy konwersja odbywa się w chmurze?", answer: "Nie, cała analiza układu i pakowanie formatu są wykonywane lokalnie w Twojej przeglądarce, aby zagwarantować całkowitą prywatność Twoich dokumentów." },
    ],
  },
  'citation-linker': {
    title: "Łączenie cytowań",
    metaDescription: "Skanuj i aktywuj znaczniki cytatów w plikach PDF, konwertując je na klikalne łącza DOI lub elementy docelowe przeskoku strony.",
    keywords: ["łączenie cytowań", "hiperłącza PDF", "dopasowanie DOI", "narzędzie akademickie", "bibliografia PDF"],
    description: "\n      <p>Narzędzie do łączenia cytowań zostało stworzone z myślą o badaczach. W wielu dokumentach PDF znaczniki cytowań (np. [1], [2]) są zwykłym tekstem, przez co trzeba ciągle przewijać dokument do bibliografii.</p>\n      <p>Narzędzie lokalnie odczytuje tekst PDF, dopasowuje znaczniki cytowań do wpisów bibliograficznych i nakłada klikalne adnotacje linków, korzystając z wyszukiwania DOI lub współrzędnych przejścia do strony.</p>\n      <p>Generuje także interaktywną mapę powiązań cytowań, ułatwiającą wizualną nawigację po sieci referencji dokumentu.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij akademicki plik PDF", description: "Prześlij artykuł lub pracę dyplomową w pliku PDF zawierającą bibliografię/odniesienia." },
      { step: 2, title: "Przejrzyj cytaty", description: "Sprawdź pary cytatów na interaktywnej mapie i w razie potrzeby ręcznie edytuj lub dodaj linki DOI." },
      { step: 3, title: "Dodaj linki", description: "Kliknij przycisk aktywacji, aby nałożyć hiperłącza na plik PDF i pobrać zaktualizowany dokument." },
    ],
    useCases: [
      { title: "Głębokie czytanie literatury", description: "Kliknij znaczniki cytatów, aby natychmiast wyświetlić szczegóły referencji lub przejść do zewnętrznych stron DOI.", icon: 'link' },
      { title: "Przygotowanie przed publikacją", description: "Przed ostatecznym przesłaniem upewnij się, że Twoje pisemne prace akademickie mają w pełni aktywne nawigacje hiperłączami.", icon: 'award' },
      { title: "Analiza mapy referencyjnej", description: "Zrozum hierarchie literatury i połączenia za pomocą interaktywnej mapy topologii sieci.", icon: 'git-network' },
    ],
    faq: [
      { question: "A co jeśli referencja nie ma DOI?", answer: "Jeśli nie można znaleźć DOI, narzędzie powraca do wewnętrznej akcji „Przejdź do strony”, umożliwiając kliknięcie znacznika i przejście bezpośrednio do strony referencyjnej." },
      { question: "Jakie formaty cytatów są obsługiwane?", answer: "Obsługuje popularne nawiasy numeryczne (np. [1], [1-3]) i cytaty z roku autora (np. Author et al., 202X)." },
      { question: "Czy zmieni to wygląd mojego pliku PDF?", answer: "Nie, wstawia niewidoczne adnotacje linków na wierzch tekstu, zachowując oryginalny układ, czcionki i styl dokumentu." },
    ],
  },
  'vector-extractor': {
    title: "Ekstraktor wektorów PDF",
    metaDescription: "Konwertuj pliki PDF na format SVG o wysokiej jakości, umożliwiając wybieranie, ponowne kolorowanie i eksportowanie wykresów wektorowych, logo i grafiki.",
    keywords: ["wyodrębnij wektory z pliku pdf", "pdf do svg", "wykresy wektorowe w pliku PDF", "wyodrębnij logo", "rysunki wektorowe"],
    description: "\n      <p>Ekstraktor wektorów PDF odblokowuje ścieżki wektorowe i grafiki osadzone w plikach PDF. Z łatwością wyodrębniaj wykresy wektorowe, diagramy lub logo z dokumentów w celu projektowania lub drukowania.</p>\n      <p>Pod maską wykorzystuje wysokiej jakości renderowanie SVG do dekonstrukcji ścieżek wektorowych PDF na czyste, standardowe drzewa elementów SVG bez utraty precyzji.</p>\n      <p>Interfejs wyróżnia najechane elementy efektem eksplozji warstwy 3D w osi Z oraz panelem wyboru kolorów umożliwiającym projektantom dostosowywanie i wyodrębnianie węzłów wektorowych.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij dokument PDF", description: "Prześlij plik PDF zawierający zasoby wektorowe, diagramy, wykresy lub logo." },
      { step: 2, title: "Wybierz Elementy", description: "Najedź kursorem na obszar wektorowy, aby podświetlić elementy, a następnie kliknij, aby wybrać węzeł." },
      { step: 3, title: "Dostosuj i eksportuj", description: "Dostosuj atrybuty ścieżki w panelu, a następnie pobierz jako SVG lub skopiuj kod źródłowy SVG." },
    ],
    useCases: [
      { title: "Ekstrakcja zasobów projektowych", description: "Szybko wyodrębnij logo firmy, ikony i ilustracje z wytycznych lub broszur dotyczących marki.", icon: 'bezier' },
      { title: "Eksport wykresów naukowych", description: "Wyodrębniaj wykresy wektorowe z artykułów naukowych do wykorzystania w druku lub prezentacjach w wysokiej rozdzielczości.", icon: 'presentation' },
      { title: "Ponowne kolorowanie zasobów wektorowych", description: "Zmodyfikuj kolory obrysu i wypełnienia wyodrębnionych zasobów przed zapisaniem ich do projektów internetowych.", icon: 'crown' },
    ],
    faq: [
      { question: "Dlaczego nie mogę wybrać niektórych obrazów?", answer: "Pliki PDF zawierają zarówno obrazy rastrowe (takie jak zdjęcia lub zeskanowane strony), jak i grafiki wektorowe (takie jak kształty i krzywe). Na ścieżki SVG można dekonstruować wyłącznie ścieżki wektorowe." },
      { question: "Czy wyjściowy plik SVG zawiera style?", answer: "Tak, wyeksportowany plik SVG zachowuje wszystkie oryginalne właściwości, w tym wypełnienia, obrysy, krycie, gradienty i transformacje współrzędnych." },
      { question: "Czy przetwarzanie dużych plików długo potrwa?", answer: "Używamy akceleracji WebAssembly, ale renderowanie plików PDF z niezwykle złożonymi rysunkami CAD lub tysiącami ścieżek wektorowych może zająć kilka sekund." },
    ],
  },
  'deep-sanitize': {
    title: "Głębokie oczyszczanie metadanych",
    metaDescription: "Dokładnie wyczyść metadane autora, dzienniki modyfikacji, ukryte warstwy i osierocone obiekty z plików PDF, aby zapewnić maksymalną prywatność.",
    keywords: ["głębokie oczyszczanie PDF", "usuń metadane", "anonimizuj PDF", "usuń ukryty znak wodny", "bezpieczny plik PDF"],
    description: "\n      <p>Deep Metadata Sanitizer to najlepsza ochrona przed wyciekami metadanych i ukrytym śledzeniem. Samo narysowanie czarnych skrzynek na widocznym tekście w plikach PDF nie wystarczy, aby chronić tajemnicę handlową.</p>\n      <p>To narzędzie skanuje binarną strukturę pliku PDF, aby całkowicie usunąć informacje o autorze, oprogramowanie twórcy, dzienniki edycji (metadane XMP), zastrzeżone pamięci podręczne PieceInfo i opcjonalne grupy treści OCG (często używane w przypadku niewidocznych znaków wodnych).</p>\n      <p>Zapisuje także całkowicie od nowa tabele odniesień (xref), odrzucając wszystkie bloki aktualizacji przyrostowej, aby mieć pewność, że usuniętych lub zmodyfikowanych danych historycznych nie będzie można przywrócić.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij plik PDF", description: "Wybierz plik PDF zawierający wrażliwe dane lub historię modyfikacji." },
      { step: 2, title: "Uruchom skaner", description: "Uruchom skaner zabezpieczający 3D, aby sprawdzić plik pod kątem ukrytych metadanych i warstw." },
      { step: 3, title: "Głębokie oczyszczanie", description: "Kliknij opcję Oczyść, aby usunąć elementy śledzące i pobrać w pełni oczyszczony plik PDF." },
    ],
    useCases: [
      { title: "Udostępnianie kontraktu", description: "Usuń zapisy redakcyjne, ścieżki i poprzednie wersje przed udostępnieniem umów biznesowych stronom trzecim.", icon: 'file-signature' },
      { title: "Anonimowe publikacje", description: "Usuń niewidoczne adnotacje i znaki wodne, aby publikować dokumenty anonimowo i bezpiecznie.", icon: 'eye-off' },
      { title: "Optymalizacja PDF", description: "Usuń osierocone obiekty i niepotrzebne strumienie danych, aby przyspieszyć ładowanie plików w Internecie.", icon: 'zap' },
    ],
    faq: [
      { question: "Czym to się różni od standardowego usuwania metadanych?", answer: "Standardowe narzędzia usuwają tylko podstawowe pola, takie jak tytuł lub autor. Deep Sanitizer rekonstruuje całą tabelę odnośników PDF, usuwając PieceInfo, ukryte znaki wodne i historyczne wersje przyrostowe." },
      { question: "Czy będzie to miało wpływ na układ dokumentu lub tekst?", answer: "Nie, usuwa tylko ukryte strumienie opisów i dane strukturalne. Widoczny układ, teksty i grafika pozostają niezmienione." },
      { question: "Czy to usuwa hasła do plików PDF?", answer: "Nie, jeśli plik PDF jest zaszyfrowany, należy go najpierw odblokować przed wykonaniem głębokiej dezynfekcji." },
    ],
  },
  'booklet-folding-simulator': {
    title: "Symulator broszury i składania 3D",
    metaDescription: "Nakładaj wielostronicowe pliki PDF na składane arkusze wydruku, wyposażone w animacje składania 3D i podglądy zszywania siodłowego.",
    keywords: ["Impozycja 3D", "symulator składania", "ścieg siodłowy", "układ książki", "sprawdzanie druku"],
    description: "\n      <p>Symulator broszury i składania 3D to zaawansowane narzędzie przeznaczone dla projektantów druku i profesjonalistów z branży wydawniczej. Tradycyjny układ książki wymaga obliczenia skomplikowanych nakładek stron i nałożenia sekwencji paginacji. To narzędzie wizualizuje i automatyzuje cały proces.</p>\n      <p>Pod maską nasz niestandardowy algorytm impozycji mapuje sekwencyjną listę stron PDF na standardowe układy arkuszy wydruku (takie jak 4-stronicowe składanie na pół, 8-stronicowe zszywanie zeszytowe lub harmonijkowe), łącząc strony z przodu i z tyłu dużych arkuszy.</p>\n      <p>W interfejsie wykorzystujemy czyste transformacje CSS 3D Matrix i krzywe fizyki masy sprężyny, aby animować składanie arkuszy w poziomie i w pionie, dając realistyczny podgląd oprawy.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij plik PDF", description: "Przeciągnij i upuść dokument PDF, którego układ chcesz wydrukować." },
      { step: 2, title: "Wybierz opcję Układ składany", description: "Wybierz preferowany schemat impozycji (np. składanie na 4 strony, zszywanie zeszytowe na 8 stron, akordeon na 4 strony)." },
      { step: 3, title: "Interaktywny podgląd 3D", description: "Przeciągnij suwak, aby obejrzeć składanie arkusza w 3D i sprawdzić ostateczny układ numeracji stron." },
      { step: 4, title: "Wygeneruj narzucony plik PDF", description: "Kliknij przycisk Generuj, aby pobrać zmieniony i scalony arkusz w pliku PDF, gotowy do dwustronnego drukowania." },
    ],
    useCases: [
      { title: "Prototypowanie broszury", description: "Wstępnie wizualizuj sekwencję składania potrójnych części i broszur, aby zapobiec odwróceniu stron po wydrukowaniu.", icon: 'book-open' },
      { title: "Książka Zszywanie siodłowe", description: "Automatycznie generuj arkusze druku dla wielostronicowych magazynów lub broszur.", icon: 'layers' },
      { title: "Drukarnia Pomoce wizualne", description: "Pomóż klientom wizualizować, jak strony są rozmieszczone i składane na arkuszach wydruku.", icon: 'printer' },
    ],
    faq: [
      { question: "Co to jest „nakładanie”?", answer: "Impozycja to podstawowy etap druku przygotowawczego. Ponieważ prasy komercyjne drukują na dużych arkuszach, strony są ułożone w nieuporządkowanej kolejności, tak że po wydrukowaniu, złożeniu i oprawieniu strony pojawiają się we właściwej kolejności. To narzędzie automatycznie oblicza ten układ." },
      { question: "Czy podgląd 3D zmienia zawartość mojego pliku PDF?", answer: "Nie, oryginalna zawartość pliku PDF jest jedynie renderowana jako mapowanie tekstur na arkuszu 3D. Wygenerowany plik PDF dostosowuje jedynie kolejność i położenie stron; jakość tekstu i grafiki pozostaje zachowana w całości." },
      { question: "Co się stanie, jeśli liczba stron w moim pliku PDF nie będzie wielokrotnością 4 lub 8?", answer: "Optymalizator automatycznie dołącza na końcu puste strony, aby spełnić matematyczne wymagania dotyczące liczby stron wybranego układu składania." },
    ],
  },
  'pdf-to-slide': {
    title: "PDF do slajdu",
    metaDescription: "Automatycznie analizuj kontury plików PDF, wyodrębniaj wykresy wektorowe i rekonstruuj je do w pełni edytowalnych prezentacji PPTX.",
    keywords: ["PDF do PPT", "rekonstrukcja slajdów", "ekstrakcja wykresu", "prezentacja akademicka", "generator PPTX"],
    description: "\n      <p>Rekonstruktor PDF do slajdów przekształca statyczne dokumenty PDF w nowoczesne, łatwe do edycji slajdy programu PowerPoint (PPTX).</p>\n      <p>Narzędzie wykorzystuje zaawansowany moduł wyodrębniania konspektu układu, który automatycznie analizuje poziomy nagłówków dokumentu, linie akapitów i grubości czcionek w celu ustalenia logicznej struktury slajdów. Izoluje także wykresy wektorowe i tabele o wysokiej rozdzielczości, usuwając artefakty tła i osadzając je w przejrzysty sposób jako niezależne zasoby edytowalne.</p>\n      <p>Pliki PPTX powstają z użyciem standardowych elementów Office Open XML, co oznacza, że cały tekst pozostaje w pełni edytowalny, a wektory nie tracą rozdzielczości. Interfejs prezentuje płynną animację przejścia kart w stylu „gwiezdnego pola”, która wizualizuje rekonstrukcję.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij plik PDF akademicki/biznesowy", description: "Prześlij dokument PDF zawierający uporządkowane sekcje i diagramy." },
      { step: 2, title: "Analizuj kontury slajdów", description: "Sprawdź wyodrębnioną strukturę slajdów, dostosuj tytuły lub usuń niepotrzebne bloki kart." },
      { step: 3, title: "Zrekonstruuj do PPTX", description: "Uruchom silnik tworzenia, aby otrzymać standardowy, edytowalny plik prezentacji." },
    ],
    useCases: [
      { title: "Prezentacja artykułu badawczego", description: "Konwertuj pliki PDF czasopism akademickich, struktury tekstowe i diagramy wektorowe na slajdy gotowe do prezentacji.", icon: 'graduation-cap' },
      { title: "Podsumowanie raportu biznesowego", description: "Błyskawicznie przekształcaj ogromne roczne raporty korporacyjne w przejrzyste, wypunktowane wersje robocze prezentacji.", icon: 'presentation' },
      { title: "Demo na wielu urządzeniach", description: "Unikaj ręcznego kopiowania zrzutów ekranu. Uzyskaj czystą, w pełni edytowalną strukturę układu w ciągu kilku sekund.", icon: 'laptop' },
    ],
    faq: [
      { question: "Czy slajdy można edytować w pakiecie Microsoft Office?", answer: "Tak. Pliki są generowane natywnie w pamięci zgodnie z oficjalną specyfikacją Office Open XML (OOXML). Teksty, tabele i elementy zastępcze są w pełni interaktywne w programach PowerPoint, Keynote i WPS." },
      { question: "Jak wyodrębniane są wykresy?", answer: "Silnik skanuje ścieżki wektorowe i warstwy rastrowe w pliku PDF, wykrywa ograniczone obszary reprezentujące wykresy i wycina je jako samodzielne węzły SVG lub obrazy o wysokiej rozdzielczości." },
      { question: "Czy to działa na zeskanowanych dokumentach?", answer: "W przypadku zeskanowanych plików PDF pozbawionych rzeczywistych warstw tekstowych zalecamy uruchomienie naszego narzędzia OCR przed przesłaniem pliku do rekonstruktora slajdów." },
    ],
  },
  'form-logic-designer': {
    title: "Projektant logiki formularzy",
    metaDescription: "Projektuj dynamiczne zachowania na płótnie węzłów w stylu glassmorphism i wstawiaj interaktywną logikę AcroJS do formularzy PDF.",
    keywords: ["Logika formularza PDF", "Dodawanie AcroJS", "przepływ węzła", "interaktywny plik PDF", "zależności pól"],
    description: "\n      <p>Interaktywny projektant logiki formularzy to pionierskie narzędzie, które wypełnia ogromną lukę w możliwościach plików PDF: tworzy aktywne, responsywne pola zamiast płaskich, martwych formularzy.</p>\n      <p>Dzięki naszemu płótnu wizualnemu zawierającemu „świecące węzły szklanomorficzne” (zbudowanego na platformie React Flow) pola formularzy są reprezentowane jako połączone moduły. Możesz przeciągać linki, aby zdefiniować relacje: np. gdy pole wyboru jest zaznaczone ➜ włącz wprowadzanie tekstu ➜ automatycznie obliczaj wartości i aktualizuj pole sumy.</p>\n      <p>Po zaprojektowaniu silnik AcroJS tworzy logikę do oficjalnego kodu JavaScript programu Acrobat i wstawia ją do słowników „/AA” (akcje dodatkowe) formatu AcroForm. Interaktywne zachowania są następnie wykonywane natywnie w dowolnym standardowym czytniku plików PDF.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij interaktywny plik PDF", description: "Podaj plik PDF, który ma już aktywne pola formularza (AcroForm)." },
      { step: 2, title: "Zaplanuj logikę na płótnie", description: "Połącz pola jako węzły. Połącz zdarzenia wyjściowe (zmiana, rozmycie) z działaniami docelowymi (pokaż, ukryj, oblicz, wyłącz)." },
      { step: 3, title: "Utwórz i pobierz", description: "Dodaj utworzoną logikę JavaScript do słownika PDF i zapisz ostateczny automatyczny dokument." },
    ],
    useCases: [
      { title: "Automatyczne umowy sprzedaży", description: "Dynamicznie pokazuj lub ukrywaj dodatkowe pola wejściowe na podstawie terminów wybranych przez klienta.", icon: 'file-signature' },
      { title: "Automatyczne formularze wydatków", description: "Podsumuj wiele pozycji wydatków i dynamicznie obliczaj podatki, bez konieczności ręcznego obliczania.", icon: 'calculator' },
      { title: "Interaktywne kwestionariusze", description: "Pomijaj nieistotne pytania na podstawie poprzednich odpowiedzi, aby uprościć wypełnianie formularza na urządzeniu mobilnym.", icon: 'form-input' },
    ],
    faq: [
      { question: "Czy potrzebuję pliku PDF z wcześniej istniejącymi polami?", answer: "Tak. To narzędzie służy do wiązania reguł logicznych z istniejącymi polami. Jeśli Twój plik PDF nie zawiera pól interaktywnych, skorzystaj z naszego narzędzia Kreator formularzy, aby najpierw dodać dane wejściowe i pola wyboru." },
      { question: "Czy ta logika będzie działać na dowolnym czytniku plików PDF?", answer: "Działa na wszystkich czytnikach PDF zgodnych ze standardami Adobe PDF i obsługujących Acrobat JavaScript (takich jak Adobe Acrobat Reader, Foxit Reader i główne przeglądarki internetowe). Minimalistyczne czytniki mobilne mogą obsługiwać tylko podstawowe działania." },
      { question: "Czy ma to wpływ na drukowanie na papierze?", answer: "Wcale nie. Dodane skrypty działają na ekranie tylko podczas wypełniania formularza. Podczas drukowania bieżący stan pól jest drukowany statycznie, bez wizualizacji węzłów." },
    ],
  },
  'eink-optimizer': {
    title: "Optymalizator czytnika e-Ink",
    metaDescription: "Optymalizuj pliki PDF pod kątem ekranów e-Ink poprzez usuwanie tła, binaryzację Otsu i rozszerzanie tekstu morfologicznego.",
    keywords: ["optymalizacja PDF e-Ink", "binaryzacja", "pogrubienie tekstu", "czytanie przyjazne dla oczu", "próg Otsu"],
    description: "<p>Optymalizator PDF dla czytników e-Ink został stworzony dla użytkowników Kindle, Onyx Boox, Kobo i innych urządzeń z elektronicznym papierem.</p>\n      <p>Wiele zeskanowanych e-booków PDF ma wyblakłe litery, szare, zamglone tło, szum lub cienie skanowania widoczne na ekranach e-Ink. Narzędzie analizuje histogramy wartości szarości i stosuje binaryzację Otsu, aby oddzielić tekst od tła i zmienić szare tło w czystą biel.</p>\n      <p>Wykorzystuje również rozszerzanie morfologiczne, aby pogrubić i wzmocnić cienkie, wyblakłe znaki, zapewniając wyraźną typografię o wysokim kontraście. Suwak kontrastu z wygładzaniem suwaka pozwala precyzyjnie dostroić efekt przypominający papier w czasie rzeczywistym.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij zeskanowany plik PDF", description: "Przesyłaj e-booki lub zeskanowane dokumenty z jasnym tekstem lub szarym tłem." },
      { step: 2, title: "Dostosuj suwak kontrastu", description: "Przesuń wygładzony suwak, aby zrównoważyć usuwanie tła i pogrubianie znaków w czasie rzeczywistym." },
      { step: 3, title: "Zoptymalizuj i pobierz", description: "Przetwórz cały plik PDF, aby wygenerować przyjazny dla oka dokument o wysokim kontraście, dostosowany do technologii e-Ink." },
    ],
    useCases: [
      { title: "Czytelniejsze skany starych rękopisów", description: "Zagęszczaj wyblakły tekst na skanach książek historycznych lub odręcznych rękopisach, aby były czytelne.", icon: 'scroll' },
      { title: "Oczyszczanie arkuszy egzaminacyjnych", description: "Rozjaśniaj cienie tła z kserokopii lub zdjęć arkuszy egzaminacyjnych, przywracając wyraźny czarny tekst na białym papierze.", icon: 'file-text' },
      { title: "Dostosowanie do czytników e-papierowych", description: "Konwertuj kolorowe pliki PDF do zoptymalizowanej skali szarości, zapobiegając powstawaniu niepożądanych artefaktów na monochromatycznych ekranach.", icon: 'tablet' },
    ],
    faq: [
      { question: "Jak działa „pogrubienie znaków”?", answer: "W przetwarzaniu obrazu nazywa się to dylatacją. Wykorzystuje matrycę strukturalną do rozszerzania marginesów znaków o piksel, pogrubiając słabe kreski, aby uczynić je czytelnymi." },
      { question: "Czy ten proces zwiększy rozmiar pliku?", answer: "Wręcz odwrotnie. Binaryzując złożone obrazy kolorowe/w skali szarości do prostych układów czarno-białych, standardowa kompresja (taka jak CCITT Group 4) może znacznie zmniejszyć rozmiar pliku PDF." },
      { question: "Czy to obsługuje natywne pliki PDF z tekstem?", answer: "Tak. Natywne, wektorowe pliki PDF są rasteryzowane w tle w wysokiej rozdzielczości, optymalizowane i ponownie tworzone, co zapewnia ujednolicony odczyt o wysokim kontraście." },
    ],
  },
  'cert-cryptor': {
    title: "Szyfruj i podpisz PDF certyfikatem",
    metaDescription: "Zabezpiecz pliki PDF asymetrycznym szyfrowaniem certyfikatem klucza publicznego oraz podpisem PKCS#7, z wizualną pieczęcią woskową 3D.",
    keywords: ["szyfrowanie certyfikatu", "podpis pieczęcią woskową", "podpis cyfrowy", "szyfrowanie asymetryczne", "Podpis PKCS#7"],
    description: "\n      <p>Narzędzie do szyfrowania certyfikatem i podpisywania z wizualną pieczęcią woskową 3D łączy ochronę kryptograficzną z efektowną oprawą wizualną dla poufnych plików firmowych, dyplomów i umów.</p>\n      <p>Oferuje asymetryczne szyfrowanie kluczem publicznym: zaimportuj certyfikat klucza publicznego odbiorcy (.cer/.crt), aby zablokować strumień PDF; tylko posiadacz odpowiedniego klucza prywatnego (.pfx) może go odszyfrować. Generuje również standardowe podpisy cyfrowe PKCS#7, zapewniające integralność dokumentu i ochronę przed modyfikacją.</p>\n      <p>Wizualnie dodaje trójwymiarową złotą lub czerwoną pieczęć woskową. Podczas podpisywania wyrenderowana pieczęć opada z mechanicznym dźwiękiem, pozostawiając na stronie realistyczny ślad wosku z efektami głębi oraz świecącymi akcentami kryptograficznymi.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij plik PDF i certyfikat", description: "Dodaj plik PDF i zaimportuj certyfikat podpisywania (.pfx) lub certyfikat publiczny odbiorcy (.cer)." },
      { step: 2, title: "Umieść stempel 3D", description: "Przeciągnij pieczęć na podglądzie dokumentu, a następnie wybierz styl wosku (np. złoty, karmazynowy)." },
      { step: 3, title: "Naciśnij i podpisz", description: "Kliknij przycisk Wykonaj, aby obejrzeć animację odciśnięcia pieczęci woskowej 3D, podczas której generowany jest podpis cyfrowy o realistycznej jakości." },
      { step: 4, title: "Pobierz zabezpieczony plik PDF", description: "Zapisz dokument wyjściowy, teraz zabezpieczony kryptograficznie i ostemplowany." },
    ],
    useCases: [
      { title: "Dyplomy i certyfikaty", description: "Umieszczaj ozdobne pieczęcie 3D na cyfrowych dyplomach na cyfrowych dyplomach i nagrodach, poparte prawdziwymi podpisami cyfrowymi.", icon: 'award' },
      { title: "Poufne umowy", description: "Zablokuj poufne umowy certyfikatem publicznym, aby mógł je otworzyć wyłącznie posiadacz odpowiedniego klucza prywatnego.", icon: 'shield-alert' },
      { title: "Oficjalne komunikaty prasowe", description: "Podpisuj cyfrowo ogłoszenia publiczne, aby zapobiec złośliwym zmianom tekstu lub fałszowaniu.", icon: 'stamp' },
    ],
    faq: [
      { question: "Czy pieczęć woskowa to tylko obraz, czy prawdziwy podpis?", answer: "Obydwa. System renderuje niesamowicie realistyczny woskowy nadruk 3D z efektem głębi (warstwa wizualna) i koduje autentyczny, zabezpieczony przed manipulacją podpis kryptograficzny PKCS#7 wewnątrz pliku PDF (warstwa danych)." },
      { question: "Co to jest „szyfrowanie oparte na certyfikatach”?", answer: "Jest to technika szyfrowania bez hasła. Szyfrujesz plik przy użyciu klucza publicznego odbiorcy. Czytnik automatycznie wyszukuje lokalny prywatny certyfikat, aby sprawnie odszyfrować plik, zapewniając wysoki poziom bezpieczeństwa." },
      { question: "Czy mogę dostosować projekt znaczka?", answer: "Tak. Oferujemy wiele projektów, takich jak znak wodny PDFCraft lub herb królewski, a także możesz dostosować promień topnienia wosku i głębokość tłoczenia w panelu." },
    ],
  },
  'passport-id-composer': {
    title: "Układ dokumentów tożsamości — przód i tył",
    metaDescription: "Umieszczaj przednią i tylną stronę dowodów osobistych lub paszportów na jednej stronie A4 z opcjonalnymi znakami wodnymi zabezpieczającymi przed fałszerstwami.",
    keywords: ["układ dokumentów tożsamości", "układ paszportu", "dwustronna kopia dokumentu A4", "wydruk dowodu osobistego", "znak wodny zapobiegający fałszerstwom"],
    description: "\n      <p>Układ dokumentów paszportowych i tożsamości to praktyczne narzędzie do przygotowywania kopii dokumentów w sprawach firmowych i prywatnych.</p>\n      <p>Podczas ubiegania się o konto bankowe, dopełniania formalności pracowniczych czy podpisywania umów często potrzebujemy kopii obu stron dowodów osobistych. To narzędzie akceptuje obrazy z przodu/tyłu lub strony PDF i precyzyjnie układa je na jednej stronie A4 z zachowaniem właściwych wymiarów dokumentów.</p>\n      <p>Ponadto możesz dostosować nakładające się, półprzezroczyste znaki wodne zapobiegające fałszerstwom (np. „TYLKO DO CELÓW REKRUTACJI”), aby zapobiec nieupoważnionemu ponownemu użyciu dokumentów. Pojawia się także animacja skanowania 3D z laserem, która sygnalizuje zakończenie przetwarzania.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij pliki identyfikacyjne", description: "Prześlij zdjęcia/skany dowodu osobistego lub paszportu z przodu i z tyłu (do 2 plików)." },
      { step: 2, title: "Skonfiguruj bezpieczny znak wodny", description: "Wprowadź niestandardową nakładkę tekstową, aby ograniczyć nieautoryzowane kopiowanie dokumentów." },
      { step: 3, title: "Utwórz i pobierz", description: "Kliknij przycisk Wykonaj, aby wygenerować jednostronicowy plik PDF na stronie A4 gotowy do druku." },
    ],
    useCases: [
      { title: "Dokumenty dla działu HR", description: "Przygotuj kopie dokumentów pracowników i dodaj ochronne znaki wodne.", icon: 'user' },
      { title: "Usługi rządowe i bankowe", description: "Przygotuj standardowe wydruki identyfikacyjne, które spełniają wymagania dotyczące papierowego archiwum.", icon: 'landmark' },
      { title: "Dokumenty na czas podróży", description: "Ułóż strony paszportu i informacje o wizie na jednej stronie A4.", icon: 'plane' },
    ],
    faq: [
      { question: "Czy znaki wodne będą blokować szczegóły tekstu tożsamości?", answer: "Nie. Znak wodny jest renderowany ze starannie dobraną przezroczystością 15%, aby zapobiec fałszerstwom bez utraty czytelności pól tekstowych lub fotograficznych." },
      { question: "Czy wymiary ułożonego dokumentu są dokładne?", answer: "Tak. Renderuje dowód osobisty w standardowych wymiarach 85,6 mm × 54 mm, z zachowaniem właściwej skali na stronie A4." },
      { question: "Czy obsługuje prawa jazdy?", answer: "Tak, działa doskonale w przypadku wszelkich skanów tożsamości opartych na kartach." },
    ],
  },
  'annotation-exporter': {
    title: "Eksportuj adnotacje",
    metaDescription: "Wyodrębnij komentarze, notatki, wyróżnienia i podkreślenia w pliku PDF i uporządkuj je w notatnikach Markdown/JSON według nagłówków dokumentu.",
    keywords: ["eksportuj adnotacje", "wyodrębnij wyróżnienia z PDF", "notatki czytelnika PDF", "notatniki Markdown według konspektu", "pomocnik do przeglądu badań"],
    description: "\n      <p>Automatyczny eksporter adnotacji to zaawansowany obszar roboczy, który pozwala w pełni wykorzystać adnotacje w pliku PDF.</p>\n      <p>Podczas przeglądania literatury lub czytania obszernych e-booków często korzystamy z zakreśleń i notatek samoprzylepnych. To narzędzie odczytuje niskopoziomowy słownik <code>/Annots</code> PDF i wyodrębnia wszystkie wyróżnienia, notatki, podkreślenia i odręczne adnotacje atramentem.</p>\n      <p>Automatycznie dopasowuje komentarze do odpowiednich nagłówków konspektu, generując ustrukturyzowany notatnik Markdown lub JSON z kotwicami odwołań do stron. Zobacz, jak Twoje najważniejsze informacje są czytelnie uporządkowane w panelu notatnika.</p>\n    ",
    howToUse: [
      { step: 1, title: "Importuj plik PDF z adnotacjami", description: "Prześlij dowolny esej lub książkę w pliku PDF zawierającą podkreślenia, wyróżnienia lub komentarze." },
      { step: 2, title: "Skonfiguruj filtry i format", description: "Wybierz typy adnotacji, które chcesz wyodrębnić, i wybierz Markdown lub JSON." },
      { step: 3, title: "Wyodrębnij notatnik", description: "Kliknij przycisk Wykonaj, aby przeanalizować strumień komentarzy i utworzyć podsumowanie konspektu." },
    ],
    useCases: [
      { title: "Synteza literatury naukowej", description: "Wyodrębnij notatki z czytania z wielu artykułów do szablonów Markdown, aby szybko tworzyć spójne przeglądy literatury.", icon: 'graduation-cap' },
      { title: "Tworzenie dziennika do nauki", description: "Gromadź cenne spostrzeżenia i osobiste uwagi z podręczników w notatkach w Obsidianie.", icon: 'book' },
      { title: "Wspólny audyt dokumentów", description: "Zbieraj poprawki z recenzji od różnych członków zespołu i twórz listy zadań do wykonania.", icon: 'users' },
    ],
    faq: [
      { question: "Czy może wyodrębnić odręczne adnotacje typu Ink na tablecie?", answer: "Tak. Dopóki ręcznie rysowane znaczniki są przechowywane jako standardowe adnotacje PDF Ink, narzędzie może doskonale wyizolować i uporządkować pozycje na stronie." },
      { question: "Dlaczego niektóre wyróżnione fragmenty są puste?", answer: "Jeśli plik PDF jest skanem obrazu, którego nie można przeszukiwać i który nie zawiera tekstu, zapisane są jedynie współrzędne wyróżnień. Najpierw uruchom OCR na pliku PDF, a następnie wyodrębnij adnotacje." },
      { question: "Czy linki Markdown prowadzą z powrotem do pliku PDF?", answer: "Wyeksportowany plik zawiera dokładne numery stron i oryginalne nagłówki, co ułatwia powrót do źródła." },
    ],
  },
  'batch-watermark-remover': {
    title: "Usuń zbiorczo znaki wodne",
    metaDescription: "Trwale usuwaj ciągi znaków wodnych i obrazy XObject ze strumienia treści PDF bez zakłócania układu.",
    keywords: ["usuń znak wodny", "usuwanie znaku wodnego PDF", "czyszczenie strumienia treści", "zbiorcze usuwanie znaku wodnego", "usuń wersję roboczą znaku wodnego"],
    description: "\n      <p>Narzędzie do zbiorczego usuwania znaków wodnych to zaawansowany program do oczyszczania plików PDF, który trwale usuwa wskazane elementy z dokumentów.</p>\n      <p>Zwykłe narzędzia do usuwania znaków wodnych często jedynie nakładają białe bloki lub zniekształcają odstępy w dokumencie. To narzędzie wykorzystuje technikę <strong>oczyszczania strumienia treści</strong>.</p>\n      <p>Analizuje niskopoziomowe operatory renderowania każdej strony, rozpoznaje polecenia związane z tekstem znaku wodnego (np. „Poufne”, „WERSJA ROBOCZA”) albo obiekty obrazów tła i trwale je usuwa lub nadpisuje. Znaki wodne znikają całkowicie, przy zachowaniu oryginalnego formatowania i jakości wektorowej.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij plik ze znakiem wodnym", description: "Dostarcz dokument PDF zawierający logo handlowe lub etykiety zabezpieczające." },
      { step: 2, title: "Zdefiniuj docelowy znak wodny", description: "Wprowadź dokładny ciąg znaków do usunięcia lub włącz czyszczenie półprzezroczystego obrazu XObject." },
      { step: 3, title: "Uruchom trwałe oczyszczanie", description: "Kliknij przycisk Wykonaj, aby wyczyścić operatory treści z zachowaniem wysokiej wierności." },
    ],
    useCases: [
      { title: "Archiwizacja dokumentów firmowych", description: "Usuń wygasłe znaki wodne „Poufne” lub „Wersja robocza” przed udostępnieniem.", icon: 'archive' },
      { title: "Porządkowanie tła", description: "Usuń duże obrazy tła, które odwracają uwagę czytelników od skanowania tekstu.", icon: 'eye' },
      { title: "Ponowne wykorzystanie dokumentu", description: "Wyczyść stare elementy marki w stopce strony, aby łatwo zastosować nowe szablony korporacyjne.", icon: 'copy' },
    ],
    faq: [
      { question: "Czy można odzyskać usunięte znaki wodne?", answer: "Nie. W przeciwieństwie do masek wizualnych, przepisujemy strumień binarny strony, aby usunąć operatory, nie pozostawiając żadnych śladów." },
      { question: "Czy obsługuje złożone gradienty?", answer: "Jeśli znak wodny jest przechowywany jako oddzielny węzeł tekstowy lub obraz XObject, narzędzie może go wyizolować i trwale wyczyścić." },
      { question: "Czy zmodyfikuje normalny tekst strony?", answer: "Nie. Mechanizm czyszczenia obejmuje wyłącznie operatory pasujące do określonego podpisu znaku wodnego; zwykły tekst pozostaje niezmieniony." },
    ],
  },
  'smart-data-redactor': {
    title: "Redaguj dane wrażliwe",
    metaDescription: "Automatycznie wykrywaj numery telefonów, adresy e-mail i identyfikatory, nakładaj nieprzezroczyste maski i trwale usuwaj podstawowe strumienie tekstu.",
    keywords: ["automatyczna redakcja", "redagowanie danych wrażliwych w PDF", "usuń adres e-mail z PDF", "ukrywanie numerów telefonów", "narzędzie zgodne z RODO"],
    description: "\n      <p>Automatyczny redaktor danych wrażliwych pomaga bezpiecznie usuwać dane osobowe z dokumentów zgodnie z zasadami prywatności.</p>\n      <p>Samo nakładanie czarnych skrzynek w zwykłych edytorach jest niebezpieczne, ponieważ tekst znajdujący się pod nimi nadal może zostać skopiowany. To narzędzie implementuje prawdziwe <strong>wykrywanie wzorców NLP i trwałe oczyszczanie strumienia treści</strong>.</p>\n      <p>Skanuje dokument w poszukiwaniu e-maili, numerów telefonów, numerów SSN lub niestandardowych słów kluczowych, nakłada w odpowiednich miejscach nieprzezroczyste, czarne maski i trwale nadpisuje strumień znaków kodem <code>[REDACTED]</code>, blokując wycieki typu „kopiuj-wklej”.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij docelowy plik PDF", description: "Podaj umowę lub oświadczenie zawierające wrażliwe dane klienta." },
      { step: 2, title: "Wybierz reguły usuwania danych", description: "Wybierz wzorce docelowe (e-mail, telefon, identyfikator) lub zdefiniuj własne wrażliwe słowa." },
      { step: 3, title: "Redaguj i pobierz", description: "Kliknij przycisk Wykonaj, aby nałożyć bezpieczne maski i wyczyścić strumienie tekstu." },
    ],
    useCases: [
      { title: "Udostępnianie umów handlowych", description: "Bezpiecznie publikuj dokumenty biznesowe, ukrywając osobiste zarobki, numery telefonów i e-maile.", icon: 'file-signature' },
      { title: "Anonimizacja bazy CV", description: "Usuń nazwiska kandydatów, dane kontaktowe lub adresy, aby zachować zgodność z rygorystycznymi przepisami dotyczącymi prywatności.", icon: 'user-check' },
      { title: "Dystrybucja sprawozdań finansowych", description: "Przed publikacją raportów ukryj określone numery ksiąg rachunkowych lub nazwiska akcjonariuszy.", icon: 'pie-chart' },
    ],
    faq: [
      { question: "Czy zaciemnionych szczegółów naprawdę nie da się skopiować?", answer: "Tak. Przepisujemy strumień zawartości strony, aby usunąć znaki. Kopiowanie i wklejanie z zamaskowanego pola spowoduje wyodrębnienie jedynie ciągu „[REDACTED]”." },
      { question: "Czy to działa w przypadku zeskanowanych plików PDF?", answer: "To narzędzie jest przeznaczone do strumieni tekstu wektorowego. W przypadku zeskanowanych plików obrazów użyj najpierw naszego narzędzia OCR lub przytnij ręcznie." },
      { question: "Czy czerwony celownik HUD jest zapisany w pliku?", answer: "Nie, to tylko element interfejsu widoczny podczas przetwarzania. W wyjściowym pliku PDF wyświetlane są standardowe, czyste czarne prostokąty." },
    ],
  },
  'bookmarks-auto-generator': {
    title: "Automatyczne generowanie zakładek",
    metaDescription: "Analizuj hierarchię układu dokumentu i wzorce wyrażeń regularnych (np. rozdział), aby wygenerować i dodać katalogi zakładek /Outline.",
    keywords: ["wygeneruj zakładki", "kreator konspektu PDF", "dodaj zakładki do PDF", "katalog zakładek PDF", "generator drzewa konspektu"],
    description: "\n      <p>Automatyczny generator zakładek zapewnia czytelną nawigację po długich, nieustrukturyzowanych dokumentach PDF.</p>\n      <p>Skanowanie książek i broszur bez nawigacji konspektowej jest uciążliwe. To narzędzie analizuje hierarchie typograficzne (takie jak rozmiary i grubości czcionek) wraz z regułami wyrażeń regularnych (np. „Rozdział 1”, „Sekcja 1.1”), aby automatycznie wywnioskować nagłówki.</p>\n      <p>Następnie tworzy i wstawia te nagłówki bezpośrednio do słownika <code>/Outline</code> PDF. Każda standardowa przeglądarka wyświetli wówczas czytelny, wielopoziomowy panel nawigacji, wspierany przez interaktywny podgląd drzewa konspektu 3D.</p>\n    ",
    howToUse: [
      { step: 1, title: "Podaj nieustrukturyzowany plik PDF", description: "Przesyłaj duże broszury, artykuły akademickie lub e-booki pozbawione paska bocznego katalogu." },
      { step: 2, title: "Dostosuj zasady nagłówków", description: "Skonfiguruj strategie, określając minimalne progi rozmiaru czcionki i reguły dopasowania." },
      { step: 3, title: "Utwórz i dodaj", description: "Kliknij przycisk Wykonaj, aby wyrenderować węzły konspektu i zapisać zakładki konspektu." },
    ],
    useCases: [
      { title: "Organizacja podręczników technicznych", description: "Automatycznie twórz wielopoziomowe rozdziały dla standardowych wytycznych, oszczędzając godziny ręcznego indeksowania.", icon: 'tool' },
      { title: "Przygotowanie pracy dyplomowej", description: "Dodawaj czytelne, zagnieżdżone zakładki, które odpowiadają dokładnym standardom akademickim.", icon: 'graduation-cap' },
      { title: "Optymalizacja nawigacji e-booków", description: "Strukturuj zeskanowane publikacje tekstowe w rozdziały czytelne dla tabletów lub czytników mobilnych.", icon: 'tablet' },
    ],
    faq: [
      { question: "Czy może pasować do niestandardowych formatów rozdziałów?", answer: "Tak. Możesz dodać niestandardowe wzorce wyrażeń regularnych na panelu bocznym (np. `^Part\\s+\\w+`), aby dopasować do unikalnych układów." },
      { question: "Czy będzie to miało wpływ na wizualną prezentację strony?", answer: "Nie. Narzędzie dodaje jedynie wewnętrzny katalog zakładek. Tekst i zasoby wizualne stron pozostają nietknięte." },
      { question: "Ile poziomów zakładek jest obsługiwanych?", answer: "Narzędzie obsługuje głęboko zagnieżdżone struktury zakładek, umożliwiając tworzenie układów rozdziałów, sekcji i podsekcji." },
    ],
  },
  'batch-barcode-injector': {
    title: "Wsadowe dodawanie kodów kreskowych",
    metaDescription: "Generuj niestandardowe znaczniki QR/Code128 i precyzyjnie wstawiaj je na wybrane strony PDF z wytycznymi dopasowywania.",
    keywords: ["wygeneruj qr pdf", "narzędzie do dodawania kodów kreskowych", "znacznik aktywów pdf", "qr pozycjonowanie współrzędnych", "kody kreskowe na dokumentach"],
    description: "\n      <p>Precyzyjne narzędzie wsadowego dodawania kodów kreskowych łączy śledzenie zasobów cyfrowych z indeksowaniem papierowych dokumentów.</p>\n      <p>W magazynowaniu, przeglądzie umów lub logistyce często musimy umieszczać unikalne kody kreskowe na fakturach lub kartach urządzeń. Dzięki temu można szybko umieścić kody tam, gdzie są potrzebne.</p>\n      <p>Generuj bardzo czytelne kody QR lub kody kreskowe Code128 i użyj naszego czytelnego obszaru roboczego do wyrównywania z zielonymi prowadnicami, aby je ustawić. Po umieszczeniu kodu narzędzie odtwarza sygnał dźwiękowy potwierdzający poprawne skanowanie.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij dokument", description: "Przeciągnij i upuść jedno- lub wielostronicowe pliki PDF reprezentujące umowy lub listy wysyłkowe." },
      { step: 2, title: "Ustaw współrzędne kodu kreskowego", description: "Ustaw typ kodu, wartość i przeciągnij pole umieszczania, aby określić współrzędne." },
      { step: 3, title: "Dodaj kody i pobierz", description: "Kliknij przycisk Wykonaj, aby wyrenderować warstwę kodu na docelowych indeksach stron." },
    ],
    useCases: [
      { title: "Weryfikacja umów", description: "Zastosuj unikalny kod QR zawierający szczegółowe informacje dotyczące zapobiegania podrabianiu w nagłówku umów.", icon: 'file-check' },
      { title: "Kodowanie list wysyłkowych", description: "Umieść kody kreskowe Code128 w miejscach docelowych, aby szybko zweryfikować je skanerem magazynowym.", icon: 'truck' },
      { title: "Rejestracja majątku", description: "Dodaj dodatkowe kody QR wyświetlające specyfikacje konserwacji na arkuszach sprzętu.", icon: 'archive' },
    ],
    faq: [
      { question: "Czy wygenerowane kody kreskowe są łatwe do zeskanowania?", answer: "Tak. Osadzamy bezstratne reprezentacje PNG o wysokiej rozdzielczości, które pozostają ostre nawet po wydrukowaniu w bardzo małych wymiarach." },
      { question: "Czy mogę wstawić unikalne wartości na każdej stronie?", answer: "Obecnie uruchomienie wsadowe stosuje ten sam skonfigurowany kod na wszystkich wybranych stronach. W przyszłej aktualizacji planowany jest import wielowartościowego programu Excel." },
      { question: "Co reprezentuje współrzędna `pt`?", answer: "`pt` (punkt) to standardowa jednostka długości w PDF (72 pkt = 1 cal). Strony A4 są reprezentowane jako 595 × 842 pkt." },
    ],
  },
  'signature-ink-optimizer': {
    title: "Wyodrębnij podpis i pieczęć",
    metaDescription: "Wyodrębnij ze zdjęć odręczne podpisy i czerwone pieczątki firmowe, usuń szum cienia papieru i eksportuj przezroczyste pliki PNG.",
    keywords: ["wyodrębnij podpis", "przezroczyste tło podpisu", "oczyszczanie zdjęć pieczęci", "wyostrzyć odręczny podpis", "pieczęć PNG z przezroczystym tłem"],
    description: "\n      <p>Optymalizator atramentu Chroma Ink Optimizer do podpisów i pieczątek to profesjonalne narzędzie do oczyszczania atramentu.</p>\n      <p>Podpisy lub pieczęcie firmowe fotografowane telefonem często charakteryzują się żółtym odcieniem papieru, nierównymi cieniami i zmarszczkami stron. Wklejanie ich bezpośrednio do plików PDF z umową wygląda amatorsko.</p>\n      <p>To narzędzie oddziela kanał alfa na podstawie luminancji i przestrzeni kolorów. Całkowicie rozjaśnia tła papierowe, jednocześnie wyostrzając czerwień stemplową (Chroma Ink) i czerń pisma ręcznego. Rezultatem jest najwyższej jakości przezroczysty znaczek PNG z naturalną fakturą atramentu.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij zdjęcie podpisu lub pieczęci", description: "Prześlij zrobione telefonem zdjęcie swojego podpisu lub pieczęci." },
      { step: 2, title: "Wyreguluj suwaki czyszczenia", description: "Przesuwaj suwaki kontrastu i luminancji, aby izolować szum tła w czasie rzeczywistym." },
      { step: 3, title: "Pobierz czysty podpis", description: "Eksportuj jako przezroczysty plik PNG, gotowy do umieszczenia na oficjalnych dokumentach." },
    ],
    useCases: [
      { title: "Profesjonalne przygotowanie podpisu elektronicznego", description: "Konwertuj szare zdjęcia z podpisami na przezroczyste warstwy, aby podpisywać umowy.", icon: 'file-signature' },
      { title: "Dezynfekcja pieczęci firmowych", description: "Oczyść papierowe skany pieczęci, usuwając szum włókien papierowych i przygotowując wyraźne, przezroczyste pieczęcie.", icon: 'stamp' },
      { title: "Ekstrakcja rysowanych linii", description: "Izoluj czarne kreski ze szkicowników, aby ułatwić sobie pracę z kolorowaniem w programie Photoshop.", icon: 'edit' },
    ],
    faq: [
      { question: "Czym samoadaptacyjna ekstrakcja alfa różni się od normalnego kluczowania?", answer: "Standardowe kluczowanie kolorem często sprawia, że charakterystyczne detale obrysu wyglądają na blokowe i pikselowane. Nasz algorytm izoluje tylko biały/żółty szum tła i wygładza krawędzie atramentu." },
      { question: "Jakie formaty obrazów są obsługiwane?", answer: "Obsługujemy JPG, JPEG i PNG. Aby uzyskać najlepsze rezultaty, zrób zdjęcie podpisu lub pieczęci przy jasnym, równomiernym oświetleniu." },
      { question: "Czy szczegóły pisma ręcznego zostaną zmodyfikowane?", answer: "Nie. Filtrowanie pikseli działa na oryginalne współrzędne, wyostrzając kontrast przy jednoczesnym zachowaniu naturalnej faktury pisma." },
    ],
  },
  'dead-link-debugger': {
    title: "Napraw niedziałające łącza",
    metaDescription: "Sprawdzaj adresy URL i adnotacje linków w pliku PDF, wykrywaj niedziałające odnośniki i ustawiaj przekierowania.",
    keywords: ["martwy link pdf", "edytować hiperłącza PDF", "weryfikacja linku pdf", "link przekierowania pdf", "zaktualizuj adresy URL w pliku PDF"],
    description: "\n      <p>Narzędzie do naprawy niedziałających linków to zaawansowany edytor strukturalny, który poprawia jakość interakcji z linkami w publikowanych plikach.</p>\n      <p>Nieprawidłowe adresy URL (404/500) w podręcznikach, oficjalnych dokumentach lub przewodnikach osłabiają wiarygodność marki. Narzędzie ułatwia zarządzanie hiperłączami.</p>\n      <p>Analizuje niskopoziomowe słowniki <code>/Link</code> na każdej stronie, sprawdza je i wyświetla stan linków w interaktywnej siatce (czerwony dla niedziałających linków, pomarańczowy dla przekierowań). Wpisz zaktualizowany adres URL przekierowania, a narzędzie zapisze nowy cel bezpośrednio w strumieniu binarnym PDF.</p>\n    ",
    howToUse: [
      { step: 1, title: "Podaj dokument docelowy", description: "Prześlij podręcznik lub katalog w pliku PDF zawierający łącza do debugowania." },
      { step: 2, title: "Skanuj i aktualizuj", description: "Pozwól debugerowi wyodrębnić wszystkie adresy URL. Wprowadź nowe adresy URL przekierowań dla uszkodzonych elementów." },
      { step: 3, title: "Zapisz aktualizacje przekierowań", description: "Kliknij Wykonaj, aby przepisać akcje /URI i pobrać poprawiony plik PDF." },
    ],
    useCases: [
      { title: "Naprawa linków w ulotkach", description: "Natychmiast poprawiaj błędne adresy URL w opublikowanych ulotkach bez ponownego otwierania oryginalnych edytorów projektów.", icon: 'refresh-cw' },
      { title: "Weryfikacja linków bibliograficznych", description: "Weryfikuj linki do bibliografii akademickiej w raportach, aktualizując odniesienia, aby zachować autorytet.", icon: 'book' },
      { title: "Aktualizacja linków po zmianie domeny", description: "Zbiorcza aktualizacja starych adresów URL w korporacyjnych plikach PDF w przypadku zmiany nazw domen firmowych.", icon: 'globe' },
    ],
    faq: [
      { question: "Dlaczego dostępność linków nie jest w pełni sprawdzana online?", answer: "Przeglądarki internetowe wymuszają rygorystyczne zasady CORS, które blokują bezpośrednie sprawdzanie łączy z wielu źródeł. Nasze narzędzie wyświetla przejrzystą listę linków i pozwala na ich ręczne naprawienie." },
      { question: "Czy to zmieni wizualną reprezentację tekstu na stronie?", answer: "Nie. Zmienia jedynie podstawową akcję nawigacyjną `/URI`. Tekst linku wizualnego pozostaje niezmieniony." },
      { question: "Czy obsługuje modyfikowanie zakładek stron wewnętrznych?", answer: "To narzędzie obsługuje zewnętrzne hiperłącza `/URI`. Do nawigacji w układzie wewnętrznym użyj naszego interaktywnego narzędzia TOC." },
    ],
  },
  'interactive-toc-generator': {
    title: "Wygeneruj interaktywny spis treści",
    metaDescription: "Wygeneruj estetyczne strony spisu treści, wstaw je przed treścią i podłącz wewnętrzne dwukierunkowe kotwice GoTo.",
    keywords: ["wygeneruj spis treści", "interaktywny toc pdf", "dwukierunkowe łącze kotwiczące", "narzędzie do tworzenia stron indeksu PDF", "przejdź do akcji na stronie"],
    description: "\n      <p>Interaktywny kreator spisu treści wprowadza wygodną nawigację w obszernych plikach PDF.</p>\n      <p>Przewijanie setek stron nieustrukturyzowanych dokumentów w celu znalezienia docelowych rozdziałów jest frustrujące. To narzędzie wprowadza <strong>tworzenie dwukierunkowego spisu treści</strong>.</p>\n      <p>Skanuje nagłówki i generuje inspirowaną origami, profesjonalną stronę spisu treści wstawianą zaraz za okładką. Oprócz tworzenia klikalnych linków /GoTo dla każdego wiersza indeksu, wstawia małą, estetyczną kotwicę „TOC ↩” w rogu każdej strony docelowego rozdziału. Czytelnicy mogą błyskawicznie przeskakiwać w przód i w tył, korzystając z nawigacji podobnej do sieci.</p>\n    ",
    howToUse: [
      { step: 1, title: "Dostarcz dokument PDF", description: "Prześlij raport, e-book lub propozycję, która wymaga interaktywnego katalogu." },
      { step: 2, title: "Ustaw tytuł i indeks spisu treści", description: "Dostosuj tytuł główny i wybierz indeks strony, aby wstawić stronę spisu treści." },
      { step: 3, title: "Dodaj kotwice i zapisz", description: "Kliknij przycisk Wykonaj, aby utworzyć strony i zapisać nawigację z dwukierunkowymi linkami." },
    ],
    useCases: [
      { title: "Roczne raporty firmowe", description: "Wstaw czytelną stronę spisu treści po okładce, aby umożliwić akcjonariuszom przeskakiwanie między wykresami finansowymi.", icon: 'file-bar' },
      { title: "Indeksowanie prac", description: "Szybko twórz standardowe indeksy zgodne z zasadami formatowania akademickiego.", icon: 'bookmark' },
      { title: "Instrukcja obsługi nawigacji", description: "Pomóż czytelnikom podręczników szybko przejść z arkuszy rozwiązywania problemów z powrotem do głównego spisu treści.", icon: 'check-circle' },
    ],
    faq: [
      { question: "Jak działają kotwice dwukierunkowe?", answer: "Tworzymy standardowe adnotacje linków na stronie spisu treści kierujące do odpowiednich stron, a następnie osadzamy link powrotny do spisu treści na wszystkich stronach docelowych rozdziałów." },
      { question: "Czy wstawienie strony spisu treści spowoduje przerwanie istniejących numerów stron?", answer: "Nie. Generator uwzględnia przesunięcie nowo wstawionej strony spisu treści, aby wszystkie cele linków prowadziły do właściwych stron." },
      { question: "Czy strona spisu treści jest ważna po wydruku?", answer: "Tak. Wygenerowany spis treści zawiera czyste numery stron drukowanych, które pomagają czytelnikom wersji drukowanej, jednocześnie umożliwiając klikalne łącza na ekranie." },
    ],
  },
  'global-invoice-parser': {
    title: "Tłumaczenie i konwersja faktur",
    metaDescription: "Wyodrębniaj sumy walut z faktur międzynarodowych, przeprowadzaj obliczenia i stempluj interaktywne tabele kursów walut z półprzezroczystej karty.",
    keywords: ["przetłumaczyć fakturę", "przelicznik walut faktury", "kalkulator kursu walut pdf", "stempel w lokalnej walucie", "globalne narzędzie do fakturowania"],
    description: "\n      <p>Globalny tłumacz faktur ułatwia pracę międzynarodowym zespołom finansowym i globalnym nabywcom.</p>\n      <p>Obsługa faktur w wielu walutach ($, €, ¥) często wiąże się z żmudną ręczną arytmetyką. To narzędzie umożliwia <strong>tłumaczenie etykiet na miejscu i przeliczanie kursów wymiany w czasie rzeczywistym</strong>.</p>\n      <p>Skanuje dokument pod kątem łącznych cen, przeprowadza obliczenia w oparciu o dane referencyjne walut i umieszcza na marginesie strony estetyczną, półprzezroczystą tabelę kursów walut. Wyświetla czytelną animację zmieniających się wartości, zapewniając pełną kontrolę nad globalnymi rozliczeniami.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij fakturę PDF", description: "Importuj dowolną fakturę rozliczaną w walutach obcych (np. USD, EUR, JPY)." },
      { step: 2, title: "Wybierz walutę lokalną", description: "Wybierz walutę lokalną (np. CNY) i określ niestandardowy kurs wymiany lub kurs wymiany obowiązujący w czasie rzeczywistym." },
      { step: 3, title: "Zastosuj pieczęć księgową", description: "Kliknij przycisk Wykonaj, aby nałożyć estetyczną kartę kursów wymiany, gotową do rozliczenia." },
    ],
    useCases: [
      { title: "Zwrot kosztów zagranicznej podróży służbowej", description: "Przeliczaj rachunki podróżne na walutę lokalną i dodawaj informacje o przeliczeniu, ułatwiając pracę księgowości.", icon: 'plane' },
      { title: "Audyt zakupów transgranicznych", description: "Przetłumacz kolumny faktur i wyizoluj prawdziwy koszt towarów e-commerce.", icon: 'credit-card' },
      { title: "Międzynarodowa księgowość przedsiębiorstw", description: "Dodawaj spójne tabele przeliczeń na fakturach korporacyjnych, aby usprawnić audyty na koniec roku.", icon: 'folder-open' },
    ],
     faq: [
      { question: "Jak wykrywa kwoty faktur?", answer: "Skanuje strumienie znaków pod kątem symboli walut i analizuje nagłówki semantyczne, takie jak „Suma” lub „Należność”, aby zlokalizować końcową kwotę faktury." },
      { question: "Czy kursy walut są pobierane w czasie rzeczywistym?", answer: "Tak. Domyślnie pobiera stawki podstawowe ze standardowych finansowych interfejsów API. Możesz także określić niestandardowe stawki za audyty wewnętrzne." },
      { question: "Czy tabela kursów zasłoni ważne dane faktury?", answer: "Silnik skanuje margines strony, aby znaleźć optymalne położenie. Tabela kursów jest także półprzezroczysta, dzięki czemu dobrze współgra z układem dokumentu." },
    ],
  },
  'pdf-deskew-aligner': {
    title: "Automatyczne prostowanie skanów",
    metaDescription: "Natychmiast wykrywaj i automatycznie koryguj obroty i wyrównania stron na zdjęciach mobilnych lub zeskanowanych arkuszach PDF.",
    keywords: ["prostowanie PDF", "wyrównywanie zeskanowanych stron", "automatyczne obracanie strony PDF", "wyprostuj zeskanowany dokument", "narzędzie do wyrównywania dokumentów"],
    description: "\n      <p>Narzędzie do wyrównywania skanów PDF pomaga prostować przechylone dokumenty cyfrowe i zdjęcia wykonane telefonem.</p>\n      <p>Dokumenty skanowane na skanerze płaskim lub szybko sfotografowane smartfonem często są lekko obrócone. Przechylone strony wyglądają nieprofesjonalnie, utrudniają czytanie i mogą powodować obcinanie marginesów podczas drukowania.</p>\n      <p>Narzędzie wykorzystuje <strong>algorytmy transformacji Radona i wykrywania linii Hougha</strong> do analizy gradientów i wierszy tekstu w czasie poniżej 20 ms. Precyzyjnie mierzy przechylenie do 0.01 stopnia i obraca obraz strony na poziomie pikseli, przywracając akapitom, umowom i broszurom poprawne wyrównanie geometryczne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij przechylony plik PDF", description: "Prześlij dowolny arkusz PDF zawierający obrócone lub źle wyrównane zeskanowane dokumenty." },
      { step: 2, title: "Analizuj i poprawiaj", description: "Silnik automatycznie wykrywa kąt pochylenia i wyświetla prowadnice wyrównania. W razie potrzeby zmień kąt ręcznie." },
      { step: 3, title: "Wyprostuj i pobierz", description: "Kliknij Wykonaj, aby obrócić strony w płynnym przejściu i pobrać wyrównany plik PDF." },
    ],
    useCases: [
      { title: "Archiwizacja paragonów i umów", description: "Wyprostuj szybkie, ręczne skany umów zapisane na urządzeniu mobilnym, zanim zapiszesz je jako formalne cyfrowe archiwa PDF.", icon: 'file-text' },
      { title: "Digitalizacja książek akademickich", description: "Oczyść skany książek z mikrofilmów w miejscach, w których linie tekstu wychodzą poza poziome marginesy.", icon: 'book' },
      { title: "Ocena pracy domowej ucznia", description: "Popraw zdjęcia zadań domowych zrobione telefonami uczniów, ułatwiając nauczycielom ocenianie.", icon: 'edit-3' },
    ],
    faq: [
      { question: "Jak wykrywane jest przechylenie dokumentu?", answer: "Prowadzimy szybkie projekcje Hough Line na liniach tekstowych. Ponieważ wydruki formalne mają wyraźne wzory odstępów w poziomie, znalezienie kąta o maksymalnej wariancji izoluje obrót." },
      { question: "Czy ten proces przytnie krawędzie strony?", answer: "Nie. Silnik oblicza obróconą granicę i rozciąga płótno, korzystając z automatycznego dopełniania, dzięki czemu cały tekst na marginesach pozostaje zachowany w całości bez przycinania." },
      { question: "Czy obsługuje dokumenty wypełnione diagramami?", answer: "Tak, jeśli istnieje podstawowa struktura wierszy lub ogólnych akapitów, nasze algorytmy mogą dokładnie dopasować się do głównego kąta czytania." },
    ],
  },
  'pdf-two-column-reflower': {
    title: "Zmiana układu dokumentu dwukolumnowego",
    metaDescription: "Analizuj układ dwukolumnowych dokumentów PDF IEEE/ACM i przekształcaj go w responsywny układ jednokolumnowy do wygodnego czytania na urządzeniach mobilnych i czytnikach e-booków.",
    keywords: ["PDF dwukolumnowy na jednokolumnowy", "zmiana układu artykułu akademickiego", "czytaj artykuły na smartfonie", "zmiana układu PDF dla czytnika", "dokumenty przyjazne dla urządzeń mobilnych"],
    description: "\n      <p>Narzędzie do zmiany układu dokumentu dwukolumnowego rozwiązuje jeden z głównych problemów badań cyfrowych: czytanie artykułów na ekranach telefonów.</p>\n      <p>Układy dwukolumnowe (stosowane przez IEEE, ACM, Nature i w wielu raportach) są przeznaczone dla papieru A4. Na telefonach i urządzeniach Kindle wymagają ciągłego powiększania, przesuwania w bok i przewijania, co utrudnia czytanie ze zrozumieniem.</p>\n      <p>Procesor stosuje <strong>automatyczne przeformatowanie akapitów i wykrywanie pionowej granicy podziału</strong>. Analizuje współrzędne znaków, wyznacza odstęp między kolumnami, dzieli układ i układa segmenty pionowo (najpierw lewą, potem prawą kolumnę). Wykresy, formuły i nagłówki są płynnie rozmieszczane w jednokolumnowym PDF przewijanym w pionie.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij dwukolumnowy plik PDF", description: "Dostarcz raport dziennika IEEE/ACM lub wielokolumnowy arkusz PDF." },
      { step: 2, title: "Sprawdź odstęp między kolumnami", description: "Sprawdź czerwone prowadnice pionowego podziału. Dostosuj marginesy, aby zapobiec nakładaniu się elementów." },
      { step: 3, title: "Przeformatuj i zapisz", description: "Kliknij przycisk Wykonaj, aby przekształcić strony w płynny układ i natychmiast je pobrać." },
    ],
    useCases: [
      { title: "Czytanie artykułów na czytniku", description: "Konwertuj gęste, dwukolumnowe eseje na wygodne jednokolumnowe dokumenty pasujące do ekranów Kindle i Onyx.", icon: 'tablet' },
      { title: "Czytanie na telefonie w drodze", description: "Czytaj literaturę naukową wygodnie, wykonując pionowe gesty przesuwania jedną ręką podczas transportu.", icon: 'smartphone' },
      { title: "Archiwalne czasopisma", description: "Zmodernizuj stare gazety wąsko-kolumnowe do czytelnych, jednokolumnowych formatów internetowych.", icon: 'book-open' },
    ],
    faq: [
      { question: "Jak obsługiwane są szerokie wykresy i równania?", answer: "Nasz silnik stosuje „wykrywanie elementów rozpiętości”. Gdy równanie lub diagram przekracza normalną szerokość kolumny, jest izolowany jako element o pełnej szerokości, zachowując oryginalne proporcje bez przycinania." },
      { question: "Czy to zmieni rozdzielczość tekstu wektorowego?", answer: "Wcale nie. Przepisujemy macierze transformacji obiektów tekstowych PDF na poziomie drzewa obiektów zamiast rasteryzacji, co oznacza, że ​​tekst pozostaje w 100% wektorowy i w pełni wybieralny." },
      { question: "Czy to działa w przypadku zeskanowanych dokumentów obrazowych?", answer: "W przypadku plików PDF opartych na płaskich obrazach zdecydowanie zalecamy uruchomienie naszego narzędzia OCR przed zmianą układu." },
    ],
  },
  'pdf-page-resizer-uniform': {
    title: "Jednolity rozmiar strony PDF",
    metaDescription: "Zbiorowa zmiana rozmiaru i normalizacja arkuszy PDF w mieszanych formatach A4, A3 i Letter w celu uzyskania jednolitego rozmiaru docelowego z proporcjonalnym centrowaniem i dopełnieniem marginesów.",
    keywords: ["jednolity rozmiar strony", "zmień rozmiar stron PDF", "normalizacja różnych formatów PDF", "normalizacja MediaBox", "zbiorcza zmiana rozmiaru stron"],
    description: "\n      <p>Narzędzie do zmiany rozmiaru plików PDF w wielu formatach to praktyczne narzędzie do porządkowania niespójnych dokumentów firmowych.</p>\n      <p>Łączenie faktur, umów i wykresów dodatkowych często skutkuje powstaniem pliku PDF zawierającego ogromne strony księgi formatu A3, standardowe umowy na stronie A4 i koperty w formacie Letter. Przeglądanie ich bardzo rozprasza, a wysyłanie ich do drukarek biurowych często powoduje błędy związane z zacięciem z powodu niedopasowania rozmiaru.</p>\n      <p>To narzędzie przepisuje niskopoziomowe siatki <code>/MediaBox</code> i <code>/CropBox</code> na każdej stronie. Odwzorowuje istniejące szerokości i wysokości, skaluje oryginalne strony proporcjonalnie, aby dopasować je do docelowych ustawień wstępnych (np. standardowego formatu A4) i wprowadza estetyczne, spójne marginesy otaczające, dzięki czemu cały plik wygląda niesamowicie dopracowany.</p>\n    ",
    howToUse: [
      { step: 1, title: "Udostępnij plik PDF o różnych rozmiarach", description: "Prześlij scalony dokument PDF zawierający niedopasowane i nieuporządkowane rozmiary stron." },
      { step: 2, title: "Wybierz ustawienie docelowe", description: "Wybierz docelowy jednolity rozmiar (np. A4, Letter, A3) i przełącz tryby skali." },
      { step: 3, title: "Wyrównaj i pobierz", description: "Kliknij przycisk Wykonaj, aby ujednolicić rozmiary stron i pobrać gotowy plik PDF." },
    ],
    useCases: [
      { title: "Firmowe oferty przetargowe", description: "Standaryzuj zeskanowane certyfikaty kwalifikacji i arkusze ofertowe na stronie A4 przed wydrukiem.", icon: 'file-text' },
      { title: "Integracja wykresów finansowych", description: "Skaluj szerokie przepływy pieniężne na stronie A3 na schludne strony A4, zachowując standardy drukowania.", icon: 'layout' },
      { title: "Ujednolicanie marginesów książki", description: "Ujednolić rozmiary skanowanych stron książki dla wygodnego czytania.", icon: 'book' },
    ],
    faq: [
      { question: "Czy to wypaczy moją treść?", answer: "Nigdy. Obsługujemy zarówno opcję „Zawiera” (skalowanie proporcjonalne z białymi paskami), jak i „Okładka” (przycinanie wyśrodkowane). Domyślny tryb Zawiera zachowuje proporcje, zapobiegając zniekształceniom." },
      { question: "Czy istniejące formularze i adnotacje będą nadal klikalne?", answer: "Tak. Algorytm odwzorowuje współczynniki skalowania na tablice współrzędnych adnotacji, granice pól formularzy i inne elementy interaktywne, aby idealnie dopasować się po zmianie rozmiaru." },
      { question: "Czy istnieje ograniczenie liczby stron, które mogę zmienić?", answer: "Nie. Ponieważ wszystkie operacje są uruchamiane lokalnie w lokalnym środowisku przeglądarki przy użyciu natywnego JavaScriptu, możesz przetwarzać obszerne pliki PDF zawierające setki stron w ciągu kilku sekund." },
    ],
  },
  'handwriting-ink-contrast-booster': {
    title: "Popraw czytelność pisma odręcznego",
    metaDescription: "Wyodrębniaj ze zdjęć niebieskie lub czarne odręczne podpisy, rozjaśniaj żółty odcień papieru i radykalnie zwiększaj kontrast atramentu dla lepszej czytelności.",
    keywords: ["popraw kontrast pisma ręcznego", "zwiększenie kontrastu atramentu", "rozjaśnij zeskanowany papier", "wyostrz wyblakły podpis", "ekstrakcja podpisu"],
    description: "\n      <p>Narzędzie do poprawy kontrastu pisma ręcznego pomaga digitalizować podpisane umowy i archiwa historycznych rękopisów.</p>\n      <p>Skany ręcznie podpisanych dokumentów często wyglądają na matowe przez odbicia na szybie skanera, żółty odcień papieru lub wyblakły atrament. Ponowne drukowanie lub kserowanie tych plików powoduje rozmycie i nieczytelność podpisów. Tradycyjne narzędzia kontrastowe przyciemniają całe tło, pogarszając układ.</p>\n      <p>Narzędzie wykorzystuje **adaptacyjną korekcję histogramu z ograniczonym kontrastem (CLAHE) i separację kolorów opartą na odcieniu**. W bezpiecznym, lokalnym procesie Canvas izoluje ślady pisma ręcznego (czarne i niebieskie) od tła papieru, całkowicie rozjaśnia cienie i nadaje wyblakłemu atramentowi wyraźny, mocny kontrast, dzięki czemu dokumenty są wyraźne i czytelne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Importuj dokument podpisany ręcznie", description: "Prześlij plik PDF zawierający wyblakłe podpisy, odręczne pamiętniki lub szkice." },
      { step: 2, title: "Skonfiguruj filtr atramentu", description: "Wybierz profil kolorów do wyizolowania (np. atrament niebieski, atrament czarny lub oba) i dostosuj wyostrzanie." },
      { step: 3, title: "Wyostrz i pobierz", description: "Kliknij opcję Wykonaj, aby prześledzić kolory za pomocą analizy kolorów i pobrać oczyszczony plik PDF." },
    ],
    useCases: [
      { title: "Naprawa podpisanych umów", description: "Napraw źle zeskanowane umowy, wyostrzając podpisy i rozjaśniając tło papieru do czystej bieli A4.", icon: 'file-check' },
      { title: "Archiwizacja rękopisów", description: "Digitalizuj odręczne dzienniki lub pamiętniki, wyodrębniając wyraźne czarne linie i usuwając plamy związane z wiekiem.", icon: 'book' },
      { title: "Rekonstrukcja księgi historycznej", description: "Przywróć szczegóły wyblakłego atramentu na starych księgach archiwalnych, ratując cenne, odręczne zapiski.", icon: 'archive' },
    ],
    faq: [
      { question: "Czym to się różni od normalnej konwersji na skalę szarości?", answer: "Skala szarości konwertuje cienie papieru na wartości szarości. Nasz algorytm adaptacyjny oddziela luminancję tła i izoluje charakterystyczne „widma atramentu”, oczyszczając tło do czystej bieli, pozostawiając ostre krawędzie obrysu." },
      { question: "Czy stracę teksturę obrysu pisma ręcznego?", answer: "Nie. Algorytm CLAHE działa na poziomie subpikseli, zachowując naturalny charakter pisma, blaknięcie atramentu i dynamiczną grubość linii." },
      { question: "Czy mogę zachować czerwone stemple firmowe?", answer: "Tak. Włączając opcję „Chroma Ink Preservation”, narzędzie rozjaśnia tło papieru i przyciemnia pismo, zachowując jednocześnie jasne kolory czerwonych pieczęci i podpisów z niebieskim tuszem." },
    ],
  },
  'pdf-spine-bookbinder': {
    title: "Oblicz szerokość grzbietu książki",
    metaDescription: "Oblicz szerokość grzbietu książki na podstawie liczby stron i gramatury papieru, a następnie wygeneruj szablon okładki do wydrukowania z liniami zagięcia grzbietu.",
    keywords: ["kalkulator grzbietu książki", "grubość grzbietu oprawy", "wygeneruj okładkę książki PDF", "znaczniki zgięć grzbietu", "przygotowanie do oprawy klejonej"],
    description: "<p>Narzędzie do obliczania grzbietu książki pomaga w przygotowaniu do druku projektantom, autorom samodzielnie wydającym publikacje i zespołom przygotowującym oferty przetargowe.</p>\n      <p>Przy tworzeniu grubych katalogów, ofert przetargowych lub roczników oprawa klejona wymaga okładki z dokładnie wyliczoną szerokością grzbietu. Jeśli szerokość grzbietu różni się choćby o 1 mm, oprawiona okładka może się wypaczyć, przesunąć lub pognieść. Obliczanie jej na podstawie liczby stron i gramatury papieru bywa złożone i podatne na błędy.</p>\n      <p>Narzędzie korzysta z <strong>modelowanej biblioteki zależności GSM od grubości papieru</strong>. Wprowadź liczbę stron PDF i wybierz rodzaj papieru (np. offset 80 GSM, błyszczący 100 GSM). Silnik oblicza szerokość grzbietu z dokładnością do mikrometrów i tworzy gotowy do druku, bardzo szeroki PDF okładki ze standardowymi skrzydełkami z przodu i z tyłu oraz precyzyjnymi liniami zagięcia.</p>\n    ",
    howToUse: [
      { step: 1, title: "Ustaw liczbę stron i rodzaj papieru", description: "Wprowadź liczbę stron dokumentu i wybierz docelowe parametry papieru." },
      { step: 2, title: "Wprowadź tekst grzbietu", description: "Wprowadź tytuły książek, dane autora i dostosuj tło grzbietu/okładki." },
      { step: 3, title: "Podgląd i eksport 3D", description: "Obróć i obejrzyj okładkę książki w interaktywnym podglądzie 3D. Eksportuj wektorowy plik PDF w wysokiej rozdzielczości." },
    ],
    useCases: [
      { title: "Grube propozycje ofertowe", description: "Projektuj profesjonalne okładki z precyzyjnymi zagięciami grzbietu dla grubych ofert przetargowych.", icon: 'layers' },
      { title: "Oprawa dyplomowa w twardej oprawie", description: "Zaplanuj idealne szerokości układu grzbietu dla prac magisterskich/doktorskich na uniwersytecie.", icon: 'award' },
      { title: "Okładki powieści wydawane samodzielnie", description: "Z łatwością oblicz szerokość grzbietu książki przed przesłaniem plików do usług wydawniczych Print-on-Demand.", icon: 'book-open' },
    ],
    faq: [
      { question: "Jak dokładne są obliczenia grubości papieru GSM?", answer: "Bardzo dokładne. Nasz model opiera się na typowych wartościach branżowych (np. 70 GSM = 0,09 mm, 80 GSM = 0,10 mm, 150 GSM błyszczący = 0,125 mm). Udostępniamy także przełącznik „Drukowanie dwustronne”, który automatycznie dzieli obliczenia na pół." },
      { question: "Czy wyeksportowane okładki są gotowe do bezpośredniego druku?", answer: "Tak. Pliki to w pełni wektorowe pliki PDF, zawierające standardowe znaki rejestracyjne, kolorowe paski i linie pomocnicze grzbietu, w pełni zgodne z komercyjnymi prasami offsetowymi i cyfrowymi." },
      { question: "Czy mogę przesłać obraz tła rozciągający się wzdłuż grzbietu?", answer: "Tak. Możesz przesyłać niestandardowe układy, a narzędzie automatycznie zawinie i wyrówna grafikę w obrębie fałd grzbietu." },
    ],
  },
  'pdf-signature-anchor-helper': {
    title: "Pomocnik rozmieszczania podpisów",
    metaDescription: "Automatycznie lokalizuj pola podpisu w umowach i wstawiaj interaktywne prowadnice i kotwice w celu szybkiego podpisywania.",
    keywords: ["znajdź pola podpisu w PDF", "dodaj kotwicę podpisu", "pomocnik podpisywania umów", "przewodnik kliknij, aby podpisać", "zapobiegaj pominięciu podpisów"],
    description: "\n      <p>Przewodnik po polach podpisu PDF ułatwia sprawne podpisywanie umów wielostronicowych.</p>\n      <p>Podczas wysyłania wielostronicowych umów NDA, sprawozdań finansowych lub umów najmu komercyjnego klienci często pomijają krytyczne pola do podpisania, co prowadzi do niekończącej się wymiany e-maili i opóźnień w transakcjach biznesowych.</p>\n      <p>Nasze narzędzie wykorzystuje <strong>dopasowywanie wzorców wyrażeń regularnych</strong>. Skanuje mapę znaków PDF w celu zlokalizowania terminów takich jak <code>Signature:</code>, <code>签字：</code>, <code>Witness:</code> lub <code>签署日期：</code>. Następnie wykorzystuje <code>pdf-lib</code> do wstawiania standardowych interaktywnych adnotacji linków PDF. Po otwarciu w dowolnym standardowym czytniku klienci widzą migające strzałki z neonowymi obramowaniami, które natychmiast kierują ich do właściwych pól, dzięki czemu podpisywanie jest niezawodne.</p>\n    ",
    howToUse: [
      { step: 1, title: "Zaimportuj umowę biznesową", description: "Prześlij umowę PDF lub NDA wymagającą wskazania miejsc podpisu." },
      { step: 2, title: "Automatyczne skanowanie miejsc na podpisy", description: "Sprawdź automatycznie zlokalizowane pola do podpisywania i w razie potrzeby ręcznie dodaj niestandardowe punkty podpisu." },
      { step: 3, title: "Dodaj kotwice i zapisz", description: "Kliknij przycisk Wykonaj, aby zapisać interaktywne warstwy wskaźnikowe w strukturze pliku PDF." },
    ],
    useCases: [
      { title: "Korporacyjne umowy NDA", description: "Wstaw wyraźne, migające instrukcje obok pól podpisu, aby zapobiec pominięciu podpisów podczas wdrażania pracowników.", icon: 'file-text' },
      { title: "Umowy najmu komercyjnego", description: "Prowadź wielu współsygnatariuszy przez wielostronicowe dokumenty dotyczące nieruchomości za pomocą zakładek w niestandardowych kolorach.", icon: 'users' },
      { title: "Podpisy zamówień publicznych", description: "Nakładaj interaktywne wskaźniki na faktury i zamówienia, aby przyspieszyć proces zatwierdzania dokumentów księgowych.", icon: 'briefcase' },
    ],
    faq: [
      { question: "Czy te wytyczne pojawią się po wydrukowaniu umowy?", answer: "Nie. Do kotwic dodaje się standardową flagę PDF `Printable` ustawioną na wartość fałszywą. Wyświetlają się na ekranach komputerów i tabletów, ale po wydrukowaniu pozostają całkowicie niewidoczne." },
      { question: "Czy klienci mogą łatwo przełączać się między polami podpisu?", answer: "Tak. Łączymy kotwice wewnętrzne w obu kierunkach. Klienci mogą kliknąć zakładkę „Przewodnik po podpisach”, aby natychmiast automatycznie przejść do następnego pustego miejsca na podpis." },
      { question: "Czy to działa w przypadku zeskanowanych dokumentów obrazowych?", answer: "Tak. Oprócz wyszukiwania strumieni tekstu nasz parser układu przestrzennego szacuje linie podpisu na podstawie linii poziomych i ramek ograniczających na zeskanowanych arkuszach." },
    ],
  },
  'pdf-lossless-slicer': {
    title: "Bezstratne wycinanie fragmentów rysunku",
    metaDescription: "Wyodrębnij częściowy obszar dużych rysunków CAD, map lub wykresów bezpośrednio ze struktury PDF, zachowując pełną rozdzielczość wektorową i zmniejszając rozmiar pliku.",
    keywords: ["przycinanie wektorów PDF", "bezstratne wycinanie PDF", "przycinanie rysunków CAD", "edycja ramek kadrowania", "wyodrębnij fragment mapy"],
    description: "\n      <p>Narzędzie do bezstratnego wycinania fragmentów rysunków PDF jest przeznaczone dla architektów, inżynierów i osób pracujących z mapami.</p>\n      <p>Przy wyodrębnianiu fragmentu dużego projektu CAD lub mapy PDF zwykłe zrzuty ekranu dają rozpikselowany, rozmyty tekst. Standardowe narzędzia kadrowania często jedynie maskują arkusz, więc plik o wielkości 100MB nadal pozostaje duży i zawiera ukryte dane.</p>\n      <p>Narzędzie edytuje ramki strony <code>/MediaBox</code>, <code>/CropBox</code> i <code>/BleedBox</code> na poziomie drzewa obiektów. Odcina elementy wektorowe poza wybranym regionem, zachowując obszar docelowy w 100% jako wektor (umożliwiając nieograniczone powiększanie), a jednocześnie usuwa zbędne ścieżki i obrazy poza ekranem, aby zmniejszyć rozmiar pliku o 95%!</p>\n    ",
    howToUse: [
      { step: 1, title: "Zaimportuj duży plan", description: "Prześlij bogatą w wektory mapę CAD, mapę GIS lub katalog PDF w wysokiej rozdzielczości." },
      { step: 2, title: "Wyznacz obszar przycięcia", description: "Przeciągnij i przeskaluj zielone pole przycięcia, aby wybrać region lokalny, który chcesz wyciąć." },
      { step: 3, title: "Uruchom przycinanie laserowe", description: "Kliknij przycisk Wykonaj, aby uruchomić nasz moduł wycinania obiektów i pobrać mały, bezstratny plik PDF." },
    ],
    useCases: [
      { title: "Izolacja planu CAD", description: "Wytnij szczegół „układu chłodzenia” z ogromnego planu piętra o wielkości 100MB i udostępnij go podwykonawcom.", icon: 'crop' },
      { title: "Wycinanie map GIS", description: "Wyodrębnij bezstratny, wyraźny wektorowo blok mapy ulic miasta do slajdu prezentacji bez utraty rozdzielczości.", icon: 'map' },
      { title: "Ręczne śledzenie ilustracji", description: "Bezstratnie wyodrębniaj dane naukowe z książek i osadzaj je w artykułach akademickich.", icon: 'image' },
    ],
    faq: [
      { question: "Czym to się różni od standardowego przycinania?", answer: "Standardowe kadrowanie jedynie dostosowuje granice wizualne; ukryte wektory pozostają w pliku. Nasz fragmentator przycina nakładające się ścieżki wektorowe i usuwa wykraczające poza dopuszczalne obrazy XObject, zapewniając pełną izolację danych i maksymalną kompresję plików." },
      { question: "Czy warstwy tekstowe będą nadal możliwe do przeszukiwania?", answer: "Tak. Wszelkie znaki tekstowe mieszczące się wewnątrz przeciętej granicy zachowują jakość wektorową, można je przeszukiwać i wybierać." },
      { question: "Czy mogę eksportować wycięte fragmenty do SVG?", answer: "Wynikiem jest ustandaryzowany wektorowy plik PDF. Możesz przekazać powstały plik do naszego narzędzia PDF do SVG, aby przekonwertować go na format grafiki wektorowej skalowalny w Internecie." },
    ],
  },
  'pdf-scratchpad-canvas': {
    title: "Marginesy do notatek w kratkę",
    metaDescription: "Dodaj do stron PDF wysokiej jakości marginesy do notatek w kratkę, w linie lub w układzie Cornella, aby rozwiązywać zadania i przygotowywać notatki do egzaminu.",
    keywords: ["rozszerz margines PDF", "dodaj margines do notatek", "notatki Cornell w PDF", "dodaj miejsce na notatki", "szablon notatek PDF"],
    description: "\n      <p>Narzędzie rozszerzające marginesy PDF jest pomocne dla studentów, badaczy i osób przygotowujących się do egzaminów zawodowych.</p>\n      <p>Podczas rozwiązywania testów, przeglądania slajdów lub czytania podręczników na tablecie marginesy stron bywają bardzo wąskie. Korzystanie z osobnej aplikacji do notatek wymusza ciągłe przełączanie ekranów, a dodawanie pustych arkuszy nie pozwala oglądać zadania i obliczeń obok siebie.</p>\n      <p>Narzędzie przepisuje szerokość lub wysokość strony w niskopoziomowej strukturze PDF, rozszerzając <code>/MediaBox</code> o 200~250 punktów z prawej strony lub na dole. Następnie dodaje w nowych marginesach linie w kratkę, linie w zeszycie albo układ Cornella, tworząc dodatkowe miejsce na notatki przy każdym slajdzie lub pytaniu.</p>\n    ",
    howToUse: [
      { step: 1, title: "Prześlij slajdy z wykładów", description: "Udostępnij podręcznik, slajdy lub dokumenty do nauki w pliku PDF." },
      { step: 2, title: "Wybierz styl marginesów i siatki", description: "Wybierz kierunek poszerzania marginesów (np. prawa strona w przypadku tabletów) i wybierz szablon siatki." },
      { step: 3, title: "Dodaj marginesy i pobierz", description: "Kliknij przycisk Wykonaj, aby wygenerować rozszerzone strony z czytelnymi siatkami do notatek." },
    ],
    useCases: [
      { title: "Przygotowanie do egzaminu STEM", description: "Dodaj margines w kratkę obok pytań egzaminacyjnych z matematyki i fizyki, rozwiązując wyprowadzenia tuż obok pytania.", icon: 'edit-3' },
      { title: "Analiza czytania językowego", description: "Dodawaj marginesy na notatki w linie obok esejów w języku obcym, aby umożliwić analizę słownictwa i tłumaczenie akapitów.", icon: 'book' },
      { title: "Audyt projektu architektonicznego", description: "Dodaj puste marginesy z boku planów do obliczeń inżynierskich i komentarzy do recenzji klientów.", icon: 'columns' },
    ],
    faq: [
      { question: "Czy to zniekształci mój oryginalny tekst PDF?", answer: "Wcale nie. Algorytm rozszerza wymiar papieru na zewnątrz. Oryginalna treść zachowuje swój układ, czcionki i rozdzielczość; po prostu rozciągamy białą przestrzeń na granicach i rysujemy na nich siatki." },
      { question: "Czy można pisać w notatniku zwykłym długopisem?", answer: "Tak. Nowe strony PDF są tworzone natywnie. Popularne aplikacje do robienia notatek na tabletach, takie jak Goodnotes, Notability, Xodo i Acrobat, umożliwiają pisanie, wyróżnianie i bazgranie bezpośrednio w nowej przestrzeni siatki." },
      { question: "Czy linie siatki są ciemne i rozpraszają uwagę?", answer: "Wybraliśmy trzy subtelne, przyjazne dla oka kolory (miękki niebieskoszary, ciepły brąz i świecąca zieleń). Linie są cienkie i delikatne, służą jako wskazówki, nie odrywając Cię od oryginalnej zawartości strony." },
    ],
  },
  'photo-tiling-prepress': {
    title: "Układ zdjęć dokumentowych do druku",
    metaDescription: "Przycinaj i układaj zdjęcia paszportowe oraz do dokumentów na standardowym papierze fotograficznym 5″ lub 6″, dodając precyzyjne znaczniki cięcia dla łatwego przycinania.",
    keywords: ["układ zdjęć do dokumentów", "wydrukuj zdjęcie paszportowe", "układ zdjęć na papierze fotograficznym", "przygotowanie do druku zdjęcia do dokumentu", "znaczniki cięcia"],
    description: "\n      <p>Narzędzie do układania zdjęć przed drukiem to ekonomiczny i precyzyjny sposób przygotowania zdjęć do dokumentów dla użytkowników domowych i studiów fotograficznych.</p>\n      <p>Domowe drukowanie zdjęć paszportowych, zdjęć do dokumentów tożsamości lub praw jazdy często prowadzi do nieprawidłowych wymiarów, marnowania papieru fotograficznego i nierównego rozmieszczenia. Zlecanie przygotowania układu drukarni jest czasochłonne.</p>\n      <p>Narzędzie wykorzystuje <strong>precyzyjny układ przygotowania do druku</strong>. Przyjmuje zdjęcia portretowe lub skany dokumentów tożsamości, przycina je do standardowych wymiarów (np. zdjęć paszportowych 1″ lub 2″), oblicza optymalną liczbę zdjęć na standardowym papierze fotograficznym (np. arkuszu 5″ lub 6″) i dodaje wyraźne znaczniki cięcia, tworząc gotowy do wydruku plik PDF.</p>\n    ",
    howToUse: [
      { step: 1, title: "Importuj zdjęcie paszportowe", description: "Prześlij zdjęcie portretowe z aparatu lub dwustronne obrazy z dowodu osobistego." },
      { step: 2, title: "Skonfiguruj papier i układ", description: "Wybierz docelowy rozmiar papieru do druku (np. 6\") i wybierz układ siatki (np. 8 kopii zdjęć 1\")." },
      { step: 3, title: "Układanie zdjęć i eksport", description: "Sprawdź kafelki zdjęć w naszej siatce i wyeksportuj plik PDF do wydrukowania w wysokiej rozdzielczości." },
    ],
    useCases: [
      { title: "Zdjęcia paszportowe samoobsługowe", description: "Ułóż portrety paszportowe wykonane mobilnie na pojedynczej siatce papieru fotograficznego o przekątnej 6 cali i wydrukuj 8 kopii za ułamek standardowych kosztów studia.", icon: 'user' },
      { title: "Dwustronna kopia dowodu osobistego", description: "Na potrzeby oficjalnych zgłoszeń sformatuj starannie skany przedniej i tylnej strony krajowych dowodów osobistych na standardowych arkuszach Letter/A4.", icon: 'file-text' },
      { title: "Arkusze miniatur zdjęć wsadowych", description: "Ułóż wiele rodzinnych wspomnień lub zaprojektuj migawki na arkuszu, aby efektywnie drukować miniatury stykówek.", icon: 'grid' },
    ],
    faq: [
      { question: "Czy wydrukowane wymiary będą zgodne z oficjalnymi specyfikacjami 1” lub 2”?", answer: "Tak. Silnik siatki mierzy przy użyciu standardowych punktów PDF (72 pkt = 1 cal), renderując zdjęcia 1-calowe dokładnie w formacie 25x35 mm i zdjęcia 2-calowe w formacie 35x49 mm. Upewnij się, że drukujesz z ustawieniem „Rzeczywisty rozmiar / 100% skali” w ustawieniach drukarki." },
      { question: "Czy mogę połączyć zdjęcia 1\" i 2\" na jednym arkuszu?", answer: "Tak. Zapewniamy wybrane gotowe ustawienia układu hybrydowego (np. „4 kopie 1” + 4 kopie 2”), które pozwalają zmaksymalizować przestrzeń na papierze fotograficznym." },
      { question: "Czy szablon uwzględnia spady graniczne?", answer: "Tak. Układy przygotowawcze rezerwują standardowy margines bezpieczny do druku 4 mm na brzegach papieru, zapobiegając przycinaniu zdjęć przez mechanizm drukarki." },
    ],
  },
};
