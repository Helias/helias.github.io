export const LANGUAGES = ['en', 'it'] as const;

export type Language = (typeof LANGUAGES)[number];

export const LANGUAGE_LABELS: Record<Language, string> = {
  en: 'English',
  it: 'Italiano',
};

export const LANGUAGE_FLAGS: Record<Language, string> = {
  en: '🇬🇧',
  it: '🇮🇹',
};

type Dictionary = Record<string, string>;

// English is the source language. Content-specific keys (project/talk titles)
// are keyed by their English string and fall back to the key itself, so only
// the it dictionary needs to provide translations for them.
const en: Dictionary = {
  'nav.home': 'Home',
  'nav.about': 'About',
  'nav.skills': 'Skills',
  'nav.projects': 'Projects',
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
    'I have several years of working experience mostly using web technologies like TypeScript/JavaScript, Angular, NGRX, Redux, React, Next.js, Tailwindcss, Node.js, Python, Bootstrap, HTML, CSS/SCSS, C++, PHP, and Laravel (go to Skills for a full list).',
  'about.p3.before': 'In my spare time, I manage two opensource communities that I have founded ',
  'about.p3.and': ' and ',
  'about.p4': 'I am really passionate about opensource and Linux.',
  'about.resume': 'Full Resume',
  'about.resumeIndustry': 'Industry Resume',

  'skills.title': 'Skills',
  'projects.title': 'Projects',
  'skills.intro':
    'Full-stack developer focused on front-end, mainly Angular and TypeScript, with back-end work and plenty of Telegram bots along the way.',
  'skills.note': 'Icon size reflects how many projects use it, the order is random.',
  'skills.allSkills': 'All skills & technologies',
  'skills.group.frontend': 'Front-end',
  'skills.group.backend': 'Back-end & data',
  'skills.group.testing': 'Testing',
  'skills.group.devops': 'DevOps & tools',
  'skills.group.methodologies': 'Methodologies',
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

  'pagination.first': 'First',
  'pagination.prev': 'Prev',
  'pagination.next': 'Next',
  'pagination.last': 'Last',
};

const it: Dictionary = {
  'nav.home': 'Home',
  'nav.about': 'Chi sono',
  'nav.skills': 'Competenze',
  'nav.projects': 'Progetti',
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
    "Ho diversi anni di esperienza lavorativa, principalmente con tecnologie web come TypeScript/JavaScript, Angular, NGRX, Redux, React, Next.js, Tailwindcss, Node.js, Python, Bootstrap, HTML, CSS/SCSS, C++, PHP e Laravel (vai a Competenze per l'elenco completo).",
  'about.p3.before': 'Nel tempo libero gestisco due community opensource che ho fondato: ',
  'about.p3.and': ' e ',
  'about.p4': 'Sono davvero appassionato di opensource e Linux.',
  'about.resume': 'Curriculum completo',
  'about.resumeIndustry': 'Curriculum aziendale',

  'skills.title': 'Competenze',
  'projects.title': 'Progetti',
  'skills.intro':
    'Sviluppatore full-stack focalizzato sul front-end, principalmente Angular e TypeScript, con esperienza anche back-end e diversi bot Telegram.',
  'skills.note': "La dimensione dell'icona indica in quanti progetti è usata, l'ordine è casuale.",
  'skills.allSkills': 'Tutte le competenze e tecnologie',
  'skills.group.frontend': 'Front-end',
  'skills.group.backend': 'Back-end e dati',
  'skills.group.testing': 'Testing',
  'skills.group.devops': 'DevOps e strumenti',
  'skills.group.methodologies': 'Metodologie',
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

  'pagination.first': 'Prima',
  'pagination.prev': 'Prec',
  'pagination.next': 'Succ',
  'pagination.last': 'Ultima',

  // Prefixes (the flag denotes the original talk language and is kept as-is)
  '👔 Work:': '👔 Lavoro:',
  '🤝 Opensource:': '🤝 Opensource:',
  '🇮🇹 Speaker:': '🇮🇹 Relatore:',
  '🇬🇧 Speaker:': '🇬🇧 Relatore:',
  '🇮🇹 Panel:': '🇮🇹 Panel:',

  // Project titles
  'ai-notify, plays a sound when an AI coding agent finishes or needs attention while its terminal is unfocused':
    'ai-notify, riproduce un suono quando un agente di coding AI termina o richiede attenzione mentre il suo terminale non è attivo',
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


export const dictionaries: Record<Language, Dictionary> = { en, it };
