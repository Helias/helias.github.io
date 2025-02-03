import Talk from './Talk';

export default function Events(): JSX.Element {
  return (
    <div id="events" className="pt-16 pb-20 bg-[url('/events/events.jpg')] bg-fixed">
      <div className="w-full">
        <div className="mt-5 ml-[20vw]">
          <h2 className="text-6xl text-white underline underline-offset-15 drop-shadow-[2px_2px_2px_rgba(0,0,0,1)]">
            Events
          </h2>
          <div className="grid grid-cols-3 mt-20">
            <Talk
              image="events/Audio Processing - ffmpeg.png"
              prefix="🇮🇹 Speaker:"
              title="Audio Processing - ffmpeg"
              slides="https://docs.google.com/presentation/d/1ceUX4WljWVmqa5pcHsuDjD03nMMKC5E8tGjCu5bIEtg/edit?usp=sharing"
              github="https://github.com/audio-processing-unict/scripts-esercitazione"
            />

            <Talk
              image="events/Audio Processing.png"
              prefix="🇮🇹 Speaker:"
              title="Audio Processing - Segnali Audio e Rumori"
              slides="https://docs.google.com/presentation/d/1rl3Pxpoemba_9ixFcoITlq17xBu3NQIa3TLxu0n2vmc/edit?usp=sharing"
              github="https://github.com/audio-processing-unict/scripts-esercitazione"
            />

            <Talk
              image="events/DevFest 2022 - Tasti rapidi e dove trovarli.png"
              prefix="🇮🇹 Speaker:"
              title="DevFest 2022 - Tasti rapidi e dove trovarli"
              slides="https://docs.google.com/presentation/d/14W9YF5uAKUQrbkn23tKyzEz0NVTZ66V2mIre3_11qog/edit?usp=sharing"
              event="https://www.facebook.com/gdgcatania/posts/pfbid0ezzEnr7uTxRx7ouaGPB56sNqxWeYsQ7yDUfKVtBUfnUJhmc8va2L4gqN3i92fVHnl"
            />

            <Talk
              image="events/gdg-panel.png"
              prefix="🇮🇹 Panel:"
              title="Best practices and quality code - GDG Catania DevFest 2022"
              event="https://www.facebook.com/gdgcatania/posts/pfbid0PdqH75Uwy82XysZfVr7sWCA7uesqv2c9RbGm4QRrfynKjiDodshdzrcsuYpHVMznl"
            />

            <Talk
              image="events/opendatasicilia.png"
              prefix="🇮🇹 Speaker:"
              title="Raduno OpenDataSicilia 2022 - Manipolare ed affinare dati pubblici"
              slides="https://docs.google.com/presentation/d/1pk2VfGVBbdDXMH6BDaF4F578hsN9lpsOHZZAamxvT-A/edit?usp=sharing"
              event="https://ods2022.opendatasicilia.it/"
              video="https://www.youtube.com/watch?v=aUnRy4Rin8Q&t=24675s"
              website="https://ods2022.opendatasicilia.it/"
            />

            <Talk
              image="events/synthetic-direction.png"
              prefix="🇬🇧 Speaker:"
              title="Is synthetic voice detection research going into the right direction?"
              slides="https://docs.google.com/presentation/d/1QAsu23wY42qw67ZuxogfAD5IqkigHKVR_bV4v1gsm6A/edit?usp=sharing"
              event="https://sites.google.com/view/mediaforensics2022/"
              // video=""
              website="https://unict-dmi.github.io/saturday-morning-snippets/programma/storia-sistemi-operativi/"
            />

            <Talk
              image="events/history-SO.png"
              prefix="🇮🇹 Speaker:"
              title="Saturday Morning Snippets - History of Operating Systems"
              slides="https://docs.google.com/presentation/d/16m6V5c3kBHu0tSLtHvF0VzINA_pRE8iInUaq9nr7ORg/edit?usp=sharing"
              event="https://unict-dmi.github.io/saturday-morning-snippets/"
              video="https://www.youtube.com/watch?v=lKz4mJjNQxI"
              website="https://unict-dmi.github.io/saturday-morning-snippets/programma/storia-sistemi-operativi/"
            />

            <Talk
              image="events/report-generazioney.jpeg"
              prefix="🇮🇹 Speaker:"
              title="GenerazioneY Report - Sicily Social Network Report"
              slides="https://docs.google.com/presentation/d/1UCCJ6_Z-gR0qe9m7zBhhtR6MUClM9bdZWbtL_6lc2j8/edit?usp=sharing"
              event="https://www.facebook.com/valentina.sapuppo.75/posts/pfbid02TPvcXpRpLDB3e3yrcJusd4r244kdeTaCP46kwsZHsESgeitK4KwCsnC1chxeGteXl?__cft__%5B0%5D=AZWoD4LAv6Aqi2uOuml6A9kVLidzOPNsZr2bsDuKZAFEnQYYW4nfz2m0X-ptxdatAzECYyhKg8EIziSNxR0S5VrAkuvBBDdoxiXUdvblHTV2L622IOMVPdlYIHf8XerBtyflT9of-gOe-m6jP9L1iniXNyi01WT65NlbuPJrI50Ou5lOZqyTllyCO8f4A3G5JdA&__tn__=%252CO%252CP-R"
              website="https://helias.github.io/GY-SocialPresentation/"
              github="https://github.com/Helias/GY-SocialPresentation"
            />

            <Talk
              image="events/linuxday.jpg"
              prefix="🇮🇹 Speaker:"
              title="Linux Day - Debian-based distros"
              slides="https://docs.google.com/presentation/d/1f9P4tJfr2dluD6VxyrUDO8Ut3N6f0SRQGN87SR6y-bc/edit"
              event="https://www.catania.linux.it/2019/11/22/evento_linuxday2019_reloaded.html"
            />

            <Talk
              image="events/devfest18-dec.jpg"
              prefix="🇮🇹 Speaker:"
              title="Telegram Bot Talk and Workshop at the Google DevFest 2018"
              slides="https://prezi.com/view/AluIOuBoblmABtfK7nDG/"
              event="https://discover.events.com/it/sicilia/catania/e/business/gdg-devfest-catania-2018-citta-scienza-281148439"
            />

            <Talk
              image="events/devfest-med-nov-2017.jpg"
              prefix="🇮🇹 Speaker:"
              title="Telegram Bot Talk at the Google DevFest 2017"
              slides="https://prezi.com/view/AluIOuBoblmABtfK7nDG/"
              video="https://www.youtube.com/watch?v=3ZGBiTUDDgU&t=7811s"
              event="https://web.facebook.com/events/511846149196052/?post_id=522179188162748&view=permalink&_rdc=1&_rdr#"
            />

            <Talk
              image="events/gdg-io-may-2017.jpg"
              prefix="🇮🇹 Speaker:"
              title="Telegram Bot Workshop - Google I/O Extended at the GDG in Catania"
              slides="https://prezi.com/view/AluIOuBoblmABtfK7nDG/"
              video="https://www.youtube.com/watch?v=_T_bvtKm3a8"
              interview="https://www.radiostartmeup.it/49-bot-perche-non-potrai-piu-farne-meno/"
              event="https://web.facebook.com/gdgcatania/posts/pfbid0RTL6trZEmwLJYXqesWbcxdbKWCvUjtUqXMyL8j6fE8A4JajvDzTZsuu2tyFxTZGfl?_rdc=1&_rdr#"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
