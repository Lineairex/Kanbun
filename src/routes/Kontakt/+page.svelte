<title>Kontakt - Kanbun</title>

<style lang='scss'>
    @import '$styles';
    
    div {
        @include default-font;
    }

    .body {
        margin: 15px 10%;
    }

    .logo {
        height: 50px;
        display: flex;
        padding-right: 15px;
    }

    .serwis {
        display: flex;
        align-items: center;
        background-color: $red-light;
        border: 10px dotted $red-light;

        border-radius: 7px;

        width: fit-content;

        padding: 5px 15px;
        margin: 5px 20px;
    }

    .kontaktowe, .social, .donate {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }

    a {
        color: $bar-font-light;
        text-decoration: none;
        display: flex;
        align-items: center;
    }

    .twtx {
        align-content: center;
    }
</style>

<div class="body">
    <h1>Dane kontaktowe</h1>
    <div class="kontaktowe">
        <div class='serwis'>
            <img class="logo" src="/icons/mail.svg" alt="Email icon"/>
            kontakt@kanbun.com
        </div>
        
        <div class='serwis'>
            <img class="logo" src="/icons/phone.svg" alt="Phone icon"/>
            +48 123-456-789
        </div>
    </div>

    <h1>Serwisy społecznościowe</h1>
    <div class="social">
        <div class="serwis">
            <a href="https://facebook.com/Kanbun">
                <img class="logo" src="/logos/facebook.svg" alt="Facebook icon" />
                Facebook
            </a>
        </div>
        <div class="serwis">
            <a href="https://instagram.com/Kanbun">
                <img class="logo" src="/logos/instagram.svg" alt="Instagram icon" />
                Instagram
            </a>
        </div>
        <div class="serwis">
            <a href="https://discord.com/invite/Kanbun">
                <img class="logo" src="/logos/discord.svg" alt="Discord icon" />
                Discord
            </a>
        </div>
        <div class="serwis">
            <a href="https://twitter.com/Kanbun">
                <div class="twtx">
                    <img class="logo" src="/logos/twitter.svg" alt="Twitter icon" />
                </div>
                
                Twitter
            </a>
        </div>
    </div>

    <h1>Skoro tu jesteś...</h1>
    <p>Nasza strona internetowa działa na zasadzie darowizn i jest wolna od reklam. Twoja pomoc pozwala nam
        utrzymać wysoki standard bez dodatkowych kosztów dla użytkowników. Wspólnie tworzymy platformę, która
        jest dostępna dla każdego, bez ograniczeń. Każda donacja, nawet niewielka, ma znaczenie. Bierz udział w
        budowie lepszego internetu – bez reklam i zawsze dostępnego.</p>
    <h3>Możesz nas wspierać za pomocą:</h3>
    <div class="donate">
        <div class="serwis">
            <a href="https://patreon.com/Kanbun">
                <img class='logo' alt='Patreon logo' src='/logos/patreon-svgrepo-com.svg' />
                Patreona
            </a>
        </div>
        czy też
        <div class="serwis">
            <a href="https://ko-fi.com/Kanbun">
                <img class='logo' alt='Kofi logo' src='/logos/ko-fi.svg' />
                Ko-fi
            </a>
        </div>
    </div>
</div>