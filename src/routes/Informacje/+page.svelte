<title>O projekcie - Kanbun</title>

<style lang='scss'>
    @import '$styles';
    
    div {
        @include default-font;
    }

    .zdjecie-info {
        background-image: url("zrzut_ekranu.png");
        background-position: center;
        background-size: cover;
        height: 500px;
        width: 100%;
        border: 0;

        display: flex;
        flex-direction: column;
        justify-content: center;

        align-items: center;

        text-shadow: 2px 2px 25px rgb(0, 0, 0);
    }
    .info-text {
        backdrop-filter: blur(3px);
        text-align: center;
        width:100%
    }
    .content {
        padding: 15px 10%;
    }
</style>

<div class="zdjecie-info">
    <div class="info-text">
        <h1>Uporządkuj swoje życie - O projekcie "Kanbun"</h1>
        <h5>Stworzone 11 czerwca 2024</h5>
    </div>
</div>

<div class="content">
    <h1>Wprowadzenie</h1>
    <p>Kanbun to innowacyjna aplikacja internetowa, która umożliwia tworzenie tymczasowych tablic kanban. Aplikacja jest zaprojektowana tak, 
    aby jej zawartość znikała po restarcie karty przeglądarki, co sprawia, że jest idealnym narzędziem do szybkiego zarządzania zadaniami i 
    projektami bez długotrwałego przechowywania danych. Została stworzona w Svelte i wykorzystuje biblioteki m.in. svelte-dnd-action.</p>

    <h1>Główne Funkcje</h1>
    <p>Kanbun oferuje szereg funkcji, które ułatwiają zarządzanie zadaniami:</p>
    <ul>
        <li>Tworzenie i usuwanie zadań: Użytkownicy mogą szybko dodawać nowe zadania do tablicy oraz usuwać te, które są już niepotrzebne.</li>
        <li>Zmiana kolorów zadań: Każde zadanie może mieć przypisany kolor, co pomaga w łatwej identyfikacji i priorytetyzacji.</li>
        <li>Przeciąganie i upuszczanie (Drag and drop): Dzięki integracji z svelte-dnd-action, zadania mogą być łatwo przemieszczane między pozycjami na
            liście oraz między kategoriami.</li>
        <li>Zmiana położenia grup: Całe grupy zadań mogą być reorganizowane według potrzeb.</li>
    </ul>
    
    <h1>Użyte Technologie</h1>
    <p>Aplikacja Kanbun została stworzona przy użyciu nowoczesnych technologii:</p>
    <ul>
        <li>Svelte: Framework, który umożliwia tworzenie szybkich i wydajnych aplikacji internetowych.</li>
        <li>svelte-dnd-action: Biblioteka wspierająca funkcjonalność przeciągania i upuszczania zadań.</li>
        <li>SCSS: Rozszerzenie CSS, które ułatwia stylowanie aplikacji dzięki zaawansowanym funkcjom, takim jak zmienne i zagnieżdżenie.</li>
        <li>TypeScript: Nadtyp JavaScriptu, który zapewnia większą kontrolę nad typami danych i zwiększa niezawodność kodu.</li>
    </ul>
    
    <h1>Cel Projektu</h1>
    <p>Kanbun został stworzony jako projekt edukacyjny, mający na celu pokazanie moich umiejętności w tworzeniu aplikacji internetowych. Chciałem pokazać, że
        potrafię tworzyć interaktywne i intuicyjne aplikacje, które mogą być używane do zarządzania zadaniami i projektami.</p>

    <h1>Proces Tworzenia</h1>
    <p>Proces tworzenia aplikacji Kanbun był szybki i dynamiczny. Skupiałem się na implementacji kluczowych funkcji, takich jak drag and drop oraz edytowanie zadań.
        Pomimo szybkiego tempa pracy, udało mi się stworzyć funkcjonalny produkt, który spełnia swoje zadania.</p>

    <h1>Użyteczność</h1>
    <p>Kanbun jest idealnym narzędziem dla osób, które potrzebują szybkiego i tymczasowego rozwiązania do zarządzania zadaniami. Jest szczególnie przydatna w sytuacjach, gdzie
        projekt musi być rozwijany w szybkim tempie, a trwałe przechowywanie danych nie jest konieczne.</p>

    <h1>Interfejs Użytkownika</h1> 
    <p1>Interfejs użytkownika Kanbun został zaprojektowany tak, aby był prosty i intuicyjny. Skupiałem się na zapewnieniu łatwego dostępu do wszystkich funkcji aplikacji, bez zbędnych komplikacji.
        Główne elementy interfejsu to tablica kanban z zadaniami oraz prosty mechanizm przeciągania i upuszczania zadań.</p1>

    <h1>Przyszłe Plany</h1>
    <p>Obecnie nie planuję rozwijać Kanbun, ale rozważam możliwość przekształcenia go w pełnoprawną aplikację wieloplatformową przy użyciu narzędzi takich jak Tauri. Dzięki temu
        aplikacja mogłaby być dostępna na różnych systemach operacyjnych, co zwiększyłoby jej użyteczność.</p>

    <h1>Podsumowanie</h1>
    <p>Kanbun to praktyczna aplikacja internetowa, która pozwala na tymczasowe zarządzanie zadaniami za pomocą tablicy kanban. Stworzona w Svelte i wspierana przez
        svelte-dnd-action, aplikacja pokazuje moje umiejętności w tworzeniu nowoczesnych i funkcjonalnych narzędzi internetowych. Pomimo braku planów na dalszy rozwój,
        Kanbun stanowi solidny fundament do ewentualnych przyszłych projektów.</p>


</div>
