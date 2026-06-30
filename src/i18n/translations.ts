export const LANGUAGES = ['en', 'it', 'nl'] as const;

export type Language = (typeof LANGUAGES)[number];

export const LANGUAGE_LABELS: Record<Language, string> = {
  en: 'English',
  it: 'Italiano',
  nl: 'Nederlands',
};

export const LANGUAGE_FLAGS: Record<Language, string> = {
  en: '🇬🇧',
  it: '🇮🇹',
  nl: '🇳🇱',
};

type Dictionary = Record<string, string>;

// English is the source language. Content-specific keys (project/talk titles)
// are keyed by their English string and fall back to the key itself, so only
// the it/nl dictionaries need to provide their translations.
const en: Dictionary = {
  'nav.home': 'Home',
  'nav.about': 'About',
  'nav.projects': 'Skills & Projects',
  'nav.opensource': 'Opensource',
  'nav.teachings': 'Teachings',
  'nav.publications': 'Publications',
  'nav.events': 'Events',

  'home.iam': 'I am',
  'home.typed.1': 'an open-source developer',
  'home.typed.2': 'a tech enthusiast',
  'home.typed.3': 'a web developer',
  'home.typed.4': 'a software engineer',
  'home.typed.5': 'a full-stack developer',

  'about.title': 'About',
  'about.p1': "I'm a software engineer who started programming for fun at the age of 12.",
  'about.p2':
    'I have several years of working experience mostly using web technologies like TypeScript/JavaScript, Angular, NGRX, Redux, React, Next.js, Tailwindcss, Node.js, Python, Bootstrap, HTML, CSS/SCSS, C++, PHP, and Laravel (go to Skills & Projects for a full list).',
  'about.p3.before': 'In my spare time, I manage two opensource communities that I have founded ',
  'about.p3.and': ' and ',
  'about.p4': 'I am really passionate about opensource and Linux.',
  'about.resume': 'Full Resume',
  'about.resumeIndustry': 'Industry Resume',

  'projects.title': 'Skills & Projects',
  'projects.intro':
    'I am full-stack developer with a strong focus on front-end development, primarily using Angular. My expertise lies in creating dynamic and responsive web applications, leveraging TypeScript and modern front-end frameworks. Beyond Angular, I have experience with various front-end and back-end technologies. I have also developed several Telegram bots, showcasing my ability to create software solutions that enhance user experience. I contribute on platforms such as Stack Overflow, always looking to share knowledge and refine my skills.',
  'projects.skillsNote':
    'The following skills are linked to their size based on the quality and quantity of the projects listed below (note that the order is randomized with each visit).',
  'projects.allSkills': 'All skills & technologies:',
  'projects.filter.all': 'All',
  'projects.filter.work': '👔 Work',
  'projects.filter.opensource': '🤝 Opensource',
  'projects.filterPlaceholder': 'Filter by technology',

  'opensource.title': 'Opensource',
  'opensource.intro1':
    "I am deeply passionate about open-source. I've always been involved in various open-source communities, and I have founded two of my own: ",
  'opensource.intro2': ' and ',
  'opensource.azerothcore.desc':
    'AzerothCore is an open-source game server application and framework designed for hosting massively multiplayer online role-playing games (MMORPGs). It is based on the popular MMORPG World of Warcraft (WoW) and seeks to recreate the gameplay experience of the original game from patch 3.3.5a.',
  'opensource.unictdevs.desc':
    'UNICT Devs is an open-source community created by students of the Department of Mathematics and Computer Science (DMI) at the University of Catania.It develops and maintains Telegram bots, web apps, and automation tools to enhance university communication, resource sharing, and student services.',

  'teachings.title': 'Teachings',
  'teachings.program': 'program',
  'teachings.link.github': 'GitHub Organization',
  'teachings.link.slides': 'Slides',
  'teachings.link.projects': 'Students Projects',
  'teachings.link.telegram': 'Telegram',
  'teachings.desc':
    'The course covers topics such as UNIX Shell usage, version control with Git and GitHub workflows, open-source community engagement, Python programming, unit testing, code quality principles (ex. SOLID), and Continuous Integration/Continuous Deployment (CI/CD) tools.',

  'publications.title': 'Publications',
  'article.article': 'article',
  'article.cite': 'cite',
  'article.event': 'event',
  'article.github': 'github',
  'article.website': 'website',

  'events.title': 'Events',
  'events.filter.video': 'Video',
  'events.filter.github': 'Github',
  'talk.slides': 'slides',
  'talk.video': 'video',
  'talk.interview': 'interview',
  'talk.event': 'event',
  'talk.github': 'github',
  'talk.website': 'website',

  'footer.copyleft': 'Copyleft - All Rights Reversed',

  'pagination.prev': 'Prev',
  'pagination.next': 'Next',
};

const it: Dictionary = {
  'nav.home': 'Home',
  'nav.about': 'Chi sono',
  'nav.projects': 'Competenze e Progetti',
  'nav.opensource': 'Opensource',
  'nav.teachings': 'Insegnamenti',
  'nav.publications': 'Pubblicazioni',
  'nav.events': 'Eventi',

  'home.iam': 'Sono',
  'home.typed.1': 'uno sviluppatore open-source',
  'home.typed.2': 'un appassionato di tecnologia',
  'home.typed.3': 'uno sviluppatore web',
  'home.typed.4': 'un ingegnere del software',
  'home.typed.5': 'uno sviluppatore full-stack',

  'about.title': 'Chi sono',
  'about.p1':
    "Sono un ingegnere del software che ha iniziato a programmare per divertimento all'età di 12 anni.",
  'about.p2':
    "Ho diversi anni di esperienza lavorativa, principalmente con tecnologie web come TypeScript/JavaScript, Angular, NGRX, Redux, React, Next.js, Tailwindcss, Node.js, Python, Bootstrap, HTML, CSS/SCSS, C++, PHP e Laravel (vai a Competenze e Progetti per l'elenco completo).",
  'about.p3.before': 'Nel tempo libero gestisco due community opensource che ho fondato: ',
  'about.p3.and': ' e ',
  'about.p4': 'Sono davvero appassionato di opensource e Linux.',
  'about.resume': 'Curriculum completo',
  'about.resumeIndustry': 'Curriculum aziendale',

  'projects.title': 'Competenze e Progetti',
  'projects.intro':
    "Sono uno sviluppatore full-stack con una forte attenzione allo sviluppo front-end, principalmente con Angular. La mia specializzazione è la creazione di applicazioni web dinamiche e responsive, sfruttando TypeScript e i moderni framework front-end. Oltre ad Angular, ho esperienza con diverse tecnologie front-end e back-end. Ho inoltre sviluppato diversi bot Telegram, dimostrando la mia capacità di creare soluzioni software che migliorano l'esperienza utente. Contribuisco su piattaforme come Stack Overflow, sempre con l'obiettivo di condividere conoscenza e affinare le mie competenze.",
  'projects.skillsNote':
    "Le seguenti competenze hanno una dimensione proporzionale alla qualità e alla quantità dei progetti elencati di seguito (nota che l'ordine è casuale a ogni visita).",
  'projects.allSkills': 'Tutte le competenze e tecnologie:',
  'projects.filter.all': 'Tutti',
  'projects.filter.work': '👔 Lavoro',
  'projects.filter.opensource': '🤝 Opensource',
  'projects.filterPlaceholder': 'Filtra per tecnologia',

  'opensource.title': 'Opensource',
  'opensource.intro1':
    'Sono profondamente appassionato di open-source. Sono sempre stato coinvolto in varie community open-source e ne ho fondate due mie: ',
  'opensource.intro2': ' e ',
  'opensource.azerothcore.desc':
    "AzerothCore è un'applicazione e framework open-source per server di gioco progettata per ospitare giochi di ruolo online multigiocatore di massa (MMORPG). È basata sul popolare MMORPG World of Warcraft (WoW) e mira a ricreare l'esperienza di gioco originale dalla patch 3.3.5a.",
  'opensource.unictdevs.desc':
    "UNICT Devs è una community open-source creata dagli studenti del Dipartimento di Matematica e Informatica (DMI) dell'Università di Catania. Sviluppa e mantiene bot Telegram, applicazioni web e strumenti di automazione per migliorare la comunicazione universitaria, la condivisione delle risorse e i servizi agli studenti.",

  'teachings.title': 'Insegnamenti',
  'teachings.program': 'programma',
  'teachings.link.github': 'Organizzazione GitHub',
  'teachings.link.slides': 'Slide',
  'teachings.link.projects': 'Progetti degli studenti',
  'teachings.link.telegram': 'Telegram',
  'teachings.desc':
    "Il corso affronta argomenti come l'uso della shell UNIX, il controllo di versione con Git e i workflow di GitHub, la partecipazione alle community open-source, la programmazione in Python, gli unit test, i principi di qualità del codice (es. SOLID) e gli strumenti di Continuous Integration/Continuous Deployment (CI/CD).",

  'publications.title': 'Pubblicazioni',
  'article.article': 'articolo',
  'article.cite': 'cita',
  'article.event': 'evento',
  'article.github': 'github',
  'article.website': 'sito web',

  'events.title': 'Eventi',
  'events.filter.video': 'Video',
  'events.filter.github': 'Github',
  'talk.slides': 'slide',
  'talk.video': 'video',
  'talk.interview': 'intervista',
  'talk.event': 'evento',
  'talk.github': 'github',
  'talk.website': 'sito web',

  'footer.copyleft': 'Copyleft - Tutti i diritti rovesciati',

  'pagination.prev': 'Prec',
  'pagination.next': 'Succ',

  // Prefixes (the flag denotes the original talk language and is kept as-is)
  '👔 Work:': '👔 Lavoro:',
  '🤝 Opensource:': '🤝 Opensource:',
  '🇮🇹 Speaker:': '🇮🇹 Relatore:',
  '🇬🇧 Speaker:': '🇬🇧 Relatore:',
  '🇮🇹 Panel:': '🇮🇹 Panel:',

  // Project titles
  'Developed a software management application': "Sviluppata un'applicazione gestionale software",
  'Developed and mantained the FedEx rating application':
    "Sviluppata e mantenuta l'applicazione di tariffazione di FedEx",
  'Developed a web application for InfrontFinance (ex VWD)':
    "Sviluppata un'applicazione web per InfrontFinance (ex VWD)",
  'Provided services as freelancer in Fiverr': 'Servizi forniti come freelance su Fiverr',
  'Software Management for NewTecna & ItaliaHotspot':
    'Gestionale software per NewTecna e ItaliaHotspot',
  'Software management developed for Codice a Barre Italia & GirasoleEventi':
    'Gestionale software sviluppato per Codice a Barre Italia e GirasoleEventi',
  'Software management developed for PerdichizziGioiellerie':
    'Gestionale software sviluppato per PerdichizziGioiellerie',
  'BarcodeDatabase, website for Codice a Barre Italia':
    'BarcodeDatabase, sito web per Codice a Barre Italia',
  'Consultant for ItaliaHotspot, developing a web interface, RadiusServer interface and OpenWRT OS':
    "Consulente per ItaliaHotspot, sviluppo di un'interfaccia web, interfaccia RadiusServer e sistema operativo OpenWRT",
  'Consultant for Insolaria, developing a web application':
    "Consulente per Insolaria, sviluppo di un'applicazione web",
  'Keira3 web application': 'Applicazione web Keira3',
  'AzerothCore, complete open source and modular solution for MMO':
    'AzerothCore, soluzione open source completa e modulare per MMO',
  'Pyhthon Catania website': 'Sito web di Python Catania',
  'My personal website (this website!)': 'Il mio sito web personale (questo sito!)',
  'Git-catalogue, a web application to catalog git repositories':
    "Git-catalogue, un'applicazione web per catalogare repository git",
  'Car Model Recognition, computer vision application to recognize car models':
    'Car Model Recognition, applicazione di computer vision per riconoscere i modelli di auto',
  'Audio feature extractor for synthetic audio detection':
    'Estrattore di caratteristiche audio per il rilevamento di audio sintetico',
  'Web application for visualizing audio dataset features.':
    'Applicazione web per visualizzare le caratteristiche dei dataset audio.',
  'Server-status, web application': 'Server-status, applicazione web',
  'Arena-stats, web application': 'Arena-stats, applicazione web',
  'Acore API, RESTful APIs for Azerothcore written in NestJS':
    'Acore API, API RESTful per Azerothcore scritte in NestJS',
  'Telegram automated db backup, tool to backup the database automatically through Telegram':
    'Backup automatico del database su Telegram, strumento per eseguire automaticamente il backup del database tramite Telegram',
  'Telegram DMI Bot, a Telegram bot for the University of Catania Department of Mathematician and C.S.':
    "Telegram DMI Bot, un bot Telegram per il Dipartimento di Matematica e Informatica dell'Università di Catania",
  'ERSU Bot, telegram bot for the University of Catania':
    "ERSU Bot, bot Telegram per l'Università di Catania",
  'Spotted DMI Bot, a Telegram bot for the University of Catania Department of Mathematician and C.S.':
    "Spotted DMI Bot, un bot Telegram per il Dipartimento di Matematica e Informatica dell'Università di Catania",
  'MedBot, a Telegram bot for the University of Catania Department of Medicine':
    "MedBot, un bot Telegram per il Dipartimento di Medicina dell'Università di Catania",
  'UNICT Telegram Hub, web application to show all the Telegram channels/bots made by UNICT Devs':
    'UNICT Telegram Hub, applicazione web per mostrare tutti i canali/bot Telegram realizzati da UNICT Devs',
  'UNICT Telegram Channels Bot, a Telegram bot behind all the University of Catania Telegram channels':
    "UNICT Telegram Channels Bot, un bot Telegram dietro tutti i canali Telegram dell'Università di Catania",
  'Albo UNICT Bot, Telegram bot that displays all the research calls from the University of Catania':
    "Albo UNICT Bot, bot Telegram che mostra tutti i bandi di ricerca dell'Università di Catania",
  'UNICT-Elezioni, a web application that displays all student elections at the University of Catania':
    "UNICT-Elezioni, un'applicazione web che mostra tutte le elezioni studentesche dell'Università di Catania",
  'OPIS Manager, web app to show all the statistics of the University of Catania':
    "OPIS Manager, web app per mostrare tutte le statistiche dell'Università di Catania",
  'Robot sensors output 3D viewer': "Visualizzatore 3D dell'output dei sensori del robot",
  'py-robot-controller, API to control a robot through a web interface and websockets':
    "py-robot-controller, API per controllare un robot tramite un'interfaccia web e websocket",
  'wowgaming - AoWoW, database search engine': 'wowgaming - AoWoW, motore di ricerca del database',
  'World of Warcraft player map': 'Mappa dei giocatori di World of Warcraft',
  'World of Warcraft statistics web tool': 'Strumento web di statistiche per World of Warcraft',
  'Slavery Valley, World of Warcraft custom battleground':
    'Slavery Valley, campo di battaglia personalizzato per World of Warcraft',
  'Twin Peaks, retroporting of World of Warcraft battleground from Cataclysm to WOTLK':
    'Twin Peaks, retroporting di un campo di battaglia di World of Warcraft da Cataclysm a WOTLK',
  'Battle for Gilneas, retroporting of World of Warcraft battleground from Cataclysm to WOTLK':
    'Battle for Gilneas, retroporting di un campo di battaglia di World of Warcraft da Cataclysm a WOTLK',
  "Tol' Viron, retropoting of World of Warcraft arena battleground from Pandaria to WOTLK":
    "Tol' Viron, retroporting di un'arena di World of Warcraft da Pandaria a WOTLK",
  "Tiger's Peak, retropoting of World of Warcraft arena battleground from Pandaria to WOTLK":
    "Tiger's Peak, retroporting di un'arena di World of Warcraft da Pandaria a WOTLK",
  'World of Warcraft 3v3soloQ mod implementation':
    'Implementazione della mod 3v3soloQ per World of Warcraft',
  'World of Warcraft Arena Replay mod implementation':
    'Implementazione della mod Arena Replay per World of Warcraft',
  'Speech-Gender-Recognition-Bot, for recognizing gender male/female from audio':
    "Speech-Gender-Recognition-Bot, per riconoscere il genere maschile/femminile dall'audio",
  'BG Queue Abuser Viewer, single page application to view battleground queue abusers':
    'BG Queue Abuser Viewer, single page application per visualizzare chi abusa delle code dei campi di battaglia',
  'Amazon Defense, game built with PhaserJS during a GDG Global Game Jam':
    'Amazon Defense, gioco realizzato con PhaserJS durante un GDG Global Game Jam',
  'Sicily social network activities report - web application':
    'Report delle attività sui social network in Sicilia - applicazione web',
  'PNG reindexer Bot, a Telegram bot to reindex PNG palette images':
    'PNG reindexer Bot, un bot Telegram per reindicizzare le immagini PNG con palette',
  'QR-Scanner-Bot, a Telegram bot to scan easily any QR code':
    'QR-Scanner-Bot, un bot Telegram per scansionare facilmente qualsiasi codice QR',
  'EPUB-to-PDF, a Telegram bot that converts EPUB files to PDF':
    'EPUB-to-PDF, un bot Telegram che converte i file EPUB in PDF',
  'ImageEditor, editor written in Processing that allows to modify colors channels and apply filters':
    'ImageEditor, editor scritto in Processing che permette di modificare i canali di colore e applicare filtri',
  'Android Face Detection app': 'App Android di rilevamento dei volti',
  'Multi-agent 3D scene simulator with JavaScript preset scripts, built with MEAN.js':
    'Simulatore di scene 3D multi-agente con script preimpostati in JavaScript, realizzato con MEAN.js',

  // Talk titles (descriptive ones; proper event names are left untranslated)
  'Best practices and quality code - GDG Catania DevFest 2022':
    'Best practice e codice di qualità - GDG Catania DevFest 2022',
  'Is synthetic voice detection research going into the right direction?':
    'La ricerca sul rilevamento della voce sintetica sta andando nella direzione giusta?',
  'Saturday Morning Snippets - History of Operating Systems':
    'Saturday Morning Snippets - Storia dei sistemi operativi',
  'GenerazioneY Report - Sicily Social Network Report':
    'GenerazioneY Report - Report sui social network in Sicilia',
  'Linux Day - Debian-based distros': 'Linux Day - Distribuzioni basate su Debian',
  'Telegram Bot Talk and Workshop at the Google DevFest 2018':
    'Talk e workshop sui bot Telegram al Google DevFest 2018',
  'Telegram Bot Talk at the Google DevFest 2017':
    'Talk sui bot Telegram al Google DevFest 2017',
  'Telegram Bot Workshop - Google I/O Extended at the GDG in Catania':
    'Workshop sui bot Telegram - Google I/O Extended al GDG di Catania',
};

const nl: Dictionary = {
  'nav.home': 'Home',
  'nav.about': 'Over mij',
  'nav.projects': 'Vaardigheden & Projecten',
  'nav.opensource': 'Opensource',
  'nav.teachings': 'Onderwijs',
  'nav.publications': 'Publicaties',
  'nav.events': 'Evenementen',

  'home.iam': 'Ik ben',
  'home.typed.1': 'een opensource-ontwikkelaar',
  'home.typed.2': 'een techliefhebber',
  'home.typed.3': 'een webontwikkelaar',
  'home.typed.4': 'een software-engineer',
  'home.typed.5': 'een full-stack-ontwikkelaar',

  'about.title': 'Over mij',
  'about.p1':
    'Ik ben een software-engineer die op 12-jarige leeftijd voor de lol begon met programmeren.',
  'about.p2':
    'Ik heb meerdere jaren werkervaring, voornamelijk met webtechnologieën zoals TypeScript/JavaScript, Angular, NGRX, Redux, React, Next.js, Tailwindcss, Node.js, Python, Bootstrap, HTML, CSS/SCSS, C++, PHP en Laravel (ga naar Vaardigheden & Projecten voor de volledige lijst).',
  'about.p3.before': 'In mijn vrije tijd beheer ik twee opensource-communities die ik heb opgericht: ',
  'about.p3.and': ' en ',
  'about.p4': 'Ik ben echt gepassioneerd door opensource en Linux.',
  'about.resume': 'Volledig cv',
  'about.resumeIndustry': 'Industrie-cv',

  'projects.title': 'Vaardigheden & Projecten',
  'projects.intro':
    'Ik ben een full-stack-ontwikkelaar met een sterke focus op front-end-ontwikkeling, voornamelijk met Angular. Mijn expertise ligt in het bouwen van dynamische en responsieve webapplicaties met TypeScript en moderne front-end-frameworks. Naast Angular heb ik ervaring met diverse front-end- en back-end-technologieën. Ik heb ook verschillende Telegram-bots ontwikkeld, wat mijn vermogen toont om softwareoplossingen te maken die de gebruikerservaring verbeteren. Ik draag bij aan platforms zoals Stack Overflow, altijd op zoek om kennis te delen en mijn vaardigheden te verfijnen.',
  'projects.skillsNote':
    'De volgende vaardigheden hebben een grootte die gebaseerd is op de kwaliteit en kwantiteit van de hieronder vermelde projecten (de volgorde wordt bij elk bezoek willekeurig bepaald).',
  'projects.allSkills': 'Alle vaardigheden & technologieën:',
  'projects.filter.all': 'Alle',
  'projects.filter.work': '👔 Werk',
  'projects.filter.opensource': '🤝 Opensource',
  'projects.filterPlaceholder': 'Filter op technologie',

  'opensource.title': 'Opensource',
  'opensource.intro1':
    'Ik ben enorm gepassioneerd door opensource. Ik ben altijd betrokken geweest bij verschillende opensource-communities en heb er twee van mezelf opgericht: ',
  'opensource.intro2': ' en ',
  'opensource.azerothcore.desc':
    "AzerothCore is een opensource-gameserverapplicatie en -framework, ontworpen voor het hosten van massively multiplayer online rollenspellen (MMORPG's). Het is gebaseerd op het populaire MMORPG World of Warcraft (WoW) en probeert de speelervaring van het originele spel uit patch 3.3.5a na te bootsen.",
  'opensource.unictdevs.desc':
    'UNICT Devs is een opensource-community opgericht door studenten van de afdeling Wiskunde en Informatica (DMI) van de Universiteit van Catania. De community ontwikkelt en onderhoudt Telegram-bots, webapps en automatiseringstools om de universitaire communicatie, het delen van bronnen en de studentenservices te verbeteren.',

  'teachings.title': 'Onderwijs',
  'teachings.program': 'programma',
  'teachings.link.github': 'GitHub-organisatie',
  'teachings.link.slides': 'Slides',
  'teachings.link.projects': 'Studentenprojecten',
  'teachings.link.telegram': 'Telegram',
  'teachings.desc':
    'De cursus behandelt onderwerpen zoals het gebruik van de UNIX-shell, versiebeheer met Git en GitHub-workflows, betrokkenheid bij opensource-communities, programmeren in Python, unit testing, principes voor codekwaliteit (bijv. SOLID) en tools voor Continuous Integration/Continuous Deployment (CI/CD).',

  'publications.title': 'Publicaties',
  'article.article': 'artikel',
  'article.cite': 'citeren',
  'article.event': 'evenement',
  'article.github': 'github',
  'article.website': 'website',

  'events.title': 'Evenementen',
  'events.filter.video': 'Video',
  'events.filter.github': 'Github',
  'talk.slides': 'slides',
  'talk.video': 'video',
  'talk.interview': 'interview',
  'talk.event': 'evenement',
  'talk.github': 'github',
  'talk.website': 'website',

  'footer.copyleft': 'Copyleft - Alle rechten omgekeerd',

  'pagination.prev': 'Vorige',
  'pagination.next': 'Volgende',

  // Prefixes (the flag denotes the original talk language and is kept as-is)
  '👔 Work:': '👔 Werk:',
  '🤝 Opensource:': '🤝 Opensource:',
  '🇮🇹 Speaker:': '🇮🇹 Spreker:',
  '🇬🇧 Speaker:': '🇬🇧 Spreker:',
  '🇮🇹 Panel:': '🇮🇹 Panel:',

  // Project titles
  'Developed a software management application': 'Een softwarebeheerapplicatie ontwikkeld',
  'Developed and mantained the FedEx rating application':
    'De FedEx-tariefapplicatie ontwikkeld en onderhouden',
  'Developed a web application for InfrontFinance (ex VWD)':
    'Een webapplicatie ontwikkeld voor InfrontFinance (voorheen VWD)',
  'Provided services as freelancer in Fiverr': 'Diensten geleverd als freelancer op Fiverr',
  'Software Management for NewTecna & ItaliaHotspot':
    'Softwarebeheer voor NewTecna & ItaliaHotspot',
  'Software management developed for Codice a Barre Italia & GirasoleEventi':
    'Softwarebeheer ontwikkeld voor Codice a Barre Italia & GirasoleEventi',
  'Software management developed for PerdichizziGioiellerie':
    'Softwarebeheer ontwikkeld voor PerdichizziGioiellerie',
  'BarcodeDatabase, website for Codice a Barre Italia':
    'BarcodeDatabase, website voor Codice a Barre Italia',
  'Consultant for ItaliaHotspot, developing a web interface, RadiusServer interface and OpenWRT OS':
    'Consultant voor ItaliaHotspot, ontwikkeling van een webinterface, RadiusServer-interface en OpenWRT-besturingssysteem',
  'Consultant for Insolaria, developing a web application':
    'Consultant voor Insolaria, ontwikkeling van een webapplicatie',
  'Keira3 web application': 'Keira3-webapplicatie',
  'AzerothCore, complete open source and modular solution for MMO':
    'AzerothCore, complete opensource en modulaire oplossing voor MMO',
  'Pyhthon Catania website': 'Website van Python Catania',
  'My personal website (this website!)': 'Mijn persoonlijke website (deze website!)',
  'Git-catalogue, a web application to catalog git repositories':
    'Git-catalogue, een webapplicatie om git-repositories te catalogiseren',
  'Car Model Recognition, computer vision application to recognize car models':
    'Car Model Recognition, computervisietoepassing om automodellen te herkennen',
  'Audio feature extractor for synthetic audio detection':
    'Audiokenmerk-extractor voor de detectie van synthetische audio',
  'Web application for visualizing audio dataset features.':
    'Webapplicatie voor het visualiseren van kenmerken van audiodatasets.',
  'Server-status, web application': 'Server-status, webapplicatie',
  'Arena-stats, web application': 'Arena-stats, webapplicatie',
  'Acore API, RESTful APIs for Azerothcore written in NestJS':
    "Acore API, RESTful API's voor Azerothcore geschreven in NestJS",
  'Telegram automated db backup, tool to backup the database automatically through Telegram':
    'Geautomatiseerde db-back-up via Telegram, tool om de database automatisch via Telegram te back-uppen',
  'Telegram DMI Bot, a Telegram bot for the University of Catania Department of Mathematician and C.S.':
    'Telegram DMI Bot, een Telegram-bot voor de afdeling Wiskunde en Informatica van de Universiteit van Catania',
  'ERSU Bot, telegram bot for the University of Catania':
    'ERSU Bot, Telegram-bot voor de Universiteit van Catania',
  'Spotted DMI Bot, a Telegram bot for the University of Catania Department of Mathematician and C.S.':
    'Spotted DMI Bot, een Telegram-bot voor de afdeling Wiskunde en Informatica van de Universiteit van Catania',
  'MedBot, a Telegram bot for the University of Catania Department of Medicine':
    'MedBot, een Telegram-bot voor de afdeling Geneeskunde van de Universiteit van Catania',
  'UNICT Telegram Hub, web application to show all the Telegram channels/bots made by UNICT Devs':
    'UNICT Telegram Hub, webapplicatie om alle Telegram-kanalen/bots van UNICT Devs te tonen',
  'UNICT Telegram Channels Bot, a Telegram bot behind all the University of Catania Telegram channels':
    'UNICT Telegram Channels Bot, een Telegram-bot achter alle Telegram-kanalen van de Universiteit van Catania',
  'Albo UNICT Bot, Telegram bot that displays all the research calls from the University of Catania':
    'Albo UNICT Bot, Telegram-bot die alle onderzoeksoproepen van de Universiteit van Catania weergeeft',
  'UNICT-Elezioni, a web application that displays all student elections at the University of Catania':
    'UNICT-Elezioni, een webapplicatie die alle studentenverkiezingen aan de Universiteit van Catania weergeeft',
  'OPIS Manager, web app to show all the statistics of the University of Catania':
    'OPIS Manager, webapp om alle statistieken van de Universiteit van Catania te tonen',
  'Robot sensors output 3D viewer': '3D-viewer voor de sensoruitvoer van een robot',
  'py-robot-controller, API to control a robot through a web interface and websockets':
    'py-robot-controller, API om een robot te besturen via een webinterface en websockets',
  'wowgaming - AoWoW, database search engine': 'wowgaming - AoWoW, zoekmachine voor de database',
  'World of Warcraft player map': 'Spelerskaart voor World of Warcraft',
  'World of Warcraft statistics web tool': 'Webtool voor World of Warcraft-statistieken',
  'Slavery Valley, World of Warcraft custom battleground':
    'Slavery Valley, aangepast strijdveld voor World of Warcraft',
  'Twin Peaks, retroporting of World of Warcraft battleground from Cataclysm to WOTLK':
    'Twin Peaks, retroporting van een World of Warcraft-strijdveld van Cataclysm naar WOTLK',
  'Battle for Gilneas, retroporting of World of Warcraft battleground from Cataclysm to WOTLK':
    'Battle for Gilneas, retroporting van een World of Warcraft-strijdveld van Cataclysm naar WOTLK',
  "Tol' Viron, retropoting of World of Warcraft arena battleground from Pandaria to WOTLK":
    "Tol' Viron, retroporting van een World of Warcraft-arena van Pandaria naar WOTLK",
  "Tiger's Peak, retropoting of World of Warcraft arena battleground from Pandaria to WOTLK":
    "Tiger's Peak, retroporting van een World of Warcraft-arena van Pandaria naar WOTLK",
  'World of Warcraft 3v3soloQ mod implementation':
    'Implementatie van de 3v3soloQ-mod voor World of Warcraft',
  'World of Warcraft Arena Replay mod implementation':
    'Implementatie van de Arena Replay-mod voor World of Warcraft',
  'Speech-Gender-Recognition-Bot, for recognizing gender male/female from audio':
    'Speech-Gender-Recognition-Bot, om mannelijk/vrouwelijk geslacht uit audio te herkennen',
  'BG Queue Abuser Viewer, single page application to view battleground queue abusers':
    'BG Queue Abuser Viewer, single-page-applicatie om misbruikers van de strijdveldwachtrij te bekijken',
  'Amazon Defense, game built with PhaserJS during a GDG Global Game Jam':
    'Amazon Defense, game gebouwd met PhaserJS tijdens een GDG Global Game Jam',
  'Sicily social network activities report - web application':
    'Rapport over socialemedia-activiteiten in Sicilië - webapplicatie',
  'PNG reindexer Bot, a Telegram bot to reindex PNG palette images':
    'PNG reindexer Bot, een Telegram-bot om PNG-paletafbeeldingen opnieuw te indexeren',
  'QR-Scanner-Bot, a Telegram bot to scan easily any QR code':
    'QR-Scanner-Bot, een Telegram-bot om eenvoudig elke QR-code te scannen',
  'EPUB-to-PDF, a Telegram bot that converts EPUB files to PDF':
    'EPUB-to-PDF, een Telegram-bot die EPUB-bestanden naar PDF converteert',
  'ImageEditor, editor written in Processing that allows to modify colors channels and apply filters':
    'ImageEditor, editor geschreven in Processing waarmee je kleurkanalen kunt aanpassen en filters kunt toepassen',
  'Android Face Detection app': 'Android-app voor gezichtsdetectie',
  'Multi-agent 3D scene simulator with JavaScript preset scripts, built with MEAN.js':
    'Multi-agent 3D-scènesimulator met vooraf ingestelde JavaScript-scripts, gebouwd met MEAN.js',

  // Talk titles (descriptive ones; proper event names are left untranslated)
  'Best practices and quality code - GDG Catania DevFest 2022':
    'Best practices en codekwaliteit - GDG Catania DevFest 2022',
  'Is synthetic voice detection research going into the right direction?':
    'Gaat het onderzoek naar detectie van synthetische stemmen de juiste kant op?',
  'Saturday Morning Snippets - History of Operating Systems':
    'Saturday Morning Snippets - Geschiedenis van besturingssystemen',
  'GenerazioneY Report - Sicily Social Network Report':
    'GenerazioneY Report - Rapport over sociale netwerken in Sicilië',
  'Linux Day - Debian-based distros': 'Linux Day - Distributies gebaseerd op Debian',
  'Telegram Bot Talk and Workshop at the Google DevFest 2018':
    'Telegram-bot-talk en workshop op de Google DevFest 2018',
  'Telegram Bot Talk at the Google DevFest 2017':
    'Telegram-bot-talk op de Google DevFest 2017',
  'Telegram Bot Workshop - Google I/O Extended at the GDG in Catania':
    'Telegram-bot-workshop - Google I/O Extended bij de GDG in Catania',
};

export const dictionaries: Record<Language, Dictionary> = { en, it, nl };
