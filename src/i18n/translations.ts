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
  'about.p1':
    "I'm a full-stack engineer based in the Netherlands, focused on Angular and TypeScript, with a PhD in Computer Science. I started programming for fun at the age of 12.",
  'about.p2':
    'I work as a freelancer at Royal BAM Group. Before that I spent four years at FedEx, where I went from senior developer to frontend team lead. I also teach Software Quality and Project Development at the University of Catania.',
  'about.p3.before': 'In my spare time, I manage two open-source communities that I founded: ',
  'about.p3.and': ' and ',
  'about.p4': "I'm really passionate about open source and Linux.",
  'about.p5':
    "I'm open to new freelance roles as an Angular frontend or full-stack developer, in the Amsterdam area or remote.",
  'about.resume': 'Full Resume',
  'about.resumeIndustry': 'Industry Resume',

  'about.tab.experience': 'Work Experience',
  'about.experience.present': 'Present',
  'about.tab.education': 'Education',
  'about.education.degrees': 'Degrees',
  'about.education.languages': 'Languages',
  'experience.bam.desc':
    'Helping digitalize construction processes, for a more sustainable future and against the housing shortage in the Netherlands, with TypeScript, Angular, NgRx, Nx, Node.js, NestJS, .NET and Tailwind. Keeping the project maintainable with Playwright E2E tests next to unit tests.',
  'experience.fedex-lead.desc':
    'Team lead of the MAGR team: led frontend development and the releases of this international web application, coordinated with other teams, and interviewed, hired and onboarded new developers.',
  'experience.unict.desc':
    'Teaching the Quality Development course (2021/2022 to 2025/2026) and Software Quality and Project Development (since 2026/2027).',
  'experience.fedex-senior.desc':
    'Cut the application size by 33% by removing unused and non-tree-shakable packages, reduced Google Maps costs and shared the approach with other teams, and kept Angular on the latest version. TypeScript, Angular, NgRx, Jasmine, Karma, Optimizely, Playwright, Cypress.',
  'experience.infront.desc':
    'Developed a FinTech platform, kept Angular up to date and removed the jQuery dependency in favor of Angular and native JavaScript. TypeScript, Angular, NgRx, Jasmine, Karma, SASS, Bootstrap.',
  'experience.fiverr.desc':
    'Delivered software projects for international clients, from requirements to delivery: web scraping tools in Python and Node.js, Telegram bots and automation scripts.',
  'experience.italiahotspot-2018.desc':
    "IT consultant and software developer for the client NewTecna: built custom management software with a secure Laravel REST API and an AngularJS single-page application, aligned with the client's business goals.",
  'experience.codiceabarre-2017.desc':
    'Developed a full-stack management system with a Laravel REST API and an AngularJS single-page application.',
  'experience.perdichizzi.desc':
    'Built a management system with a Laravel RESTful API and an AngularJS single-page application.',
  'experience.codiceabarre-2016.desc':
    'Built a demo e-commerce platform integrating WordPress, WooCommerce and the Telegram API, with a custom PHP, Bootstrap and jQuery frontend.',
  'experience.italiahotspot-2015.desc':
    'Full-stack developer working with PHP/Laravel and Angular/Bootstrap, and configuring OpenWRT/DD-WRT router firmware with FreeRADIUS servers.',
  'experience.insolaria.desc':
    'Developed a web portal for public administrations with a Laravel backend, an AngularJS frontend and WordPress API integration.',

  'skills.title': 'Skills',
  'projects.title': 'Projects',
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
    'UNICT Devs is an open-source community created by students of the Department of Mathematics and Computer Science (DMI) at the University of Catania. It develops and maintains Telegram bots, web apps, and automation tools to enhance university communication, resource sharing, and student services.',

  'teachings.title': 'Teachings',
  'teachings.program': 'program',
  'teachings.link.github': 'GitHub Organization',
  'teachings.link.slides': 'Slides',
  'teachings.link.projects': 'Students Projects',
  'teachings.link.telegram': 'Telegram',
  'teachings.sqpd.desc':
    'The course covers topics such as UNIX Shell usage, version control with Git and GitHub workflows, open-source community engagement, Python programming, unit and end-to-end testing with Playwright, containerization with Docker, code quality principles (ex. SOLID), Continuous Integration/Continuous Deployment (CI/CD) tools, and agentic coding with AI assistants.',
  'teachings.qd.desc':
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
    "Sono uno sviluppatore full-stack che vive nei Paesi Bassi, specializzato in Angular e TypeScript, con un dottorato in Informatica. Ho iniziato a programmare per divertimento all'età di 12 anni.",
  'about.p2':
    "Lavoro come freelance per Royal BAM Group. Prima ho passato quattro anni in FedEx, dove da sviluppatore senior sono diventato team lead del frontend. Insegno anche Software Quality and Project Development all'Università di Catania.",
  'about.p3.before': 'Nel tempo libero gestisco due community open-source che ho fondato: ',
  'about.p3.and': ' e ',
  'about.p4': 'Sono davvero appassionato di open source e Linux.',
  'about.p5':
    "Sono disponibile per nuovi incarichi da freelance come sviluppatore frontend Angular o full-stack, nell'area di Amsterdam o da remoto.",
  'about.resume': 'Curriculum completo',
  'about.resumeIndustry': 'Curriculum aziendale',

  'about.tab.experience': 'Esperienza lavorativa',
  'about.experience.present': 'Oggi',
  'about.tab.education': 'Formazione',
  'about.education.degrees': 'Titoli di studio',
  'about.education.languages': 'Lingue',
  'experience.bam.desc':
    'Contribuisco alla digitalizzazione dei processi edilizi, per un futuro più sostenibile e contro la carenza di alloggi nei Paesi Bassi, con TypeScript, Angular, NgRx, Nx, Node.js, NestJS, .NET e Tailwind. Mantengo il progetto manutenibile con test E2E in Playwright accanto agli unit test.',
  'experience.fedex-lead.desc':
    'Team lead del team MAGR: ho guidato lo sviluppo frontend e i rilasci di questa applicazione web internazionale, mi sono coordinato con gli altri team e ho svolto colloqui, assunto e inserito nuovi sviluppatori.',
  'experience.unict.desc':
    'Insegno il corso di Quality Development (dal 2021/2022 al 2025/2026) e Software Quality and Project Development (dal 2026/2027).',
  'experience.fedex-senior.desc':
    "Ho ridotto del 33% le dimensioni dell'applicazione rimuovendo i pacchetti inutilizzati e non tree-shakable, ho ridotto i costi di Google Maps e condiviso l'approccio con altri team, e ho mantenuto Angular all'ultima versione. TypeScript, Angular, NgRx, Jasmine, Karma, Optimizely, Playwright, Cypress.",
  'experience.infront.desc':
    'Ho sviluppato una piattaforma FinTech, mantenuto Angular aggiornato e rimosso la dipendenza da jQuery in favore di Angular e JavaScript nativo. TypeScript, Angular, NgRx, Jasmine, Karma, SASS, Bootstrap.',
  'experience.fiverr.desc':
    'Ho realizzato progetti software per clienti internazionali, dai requisiti alla consegna: strumenti di web scraping in Python e Node.js, bot Telegram e script di automazione.',
  'experience.italiahotspot-2018.desc':
    'Consulente IT e sviluppatore software per il cliente NewTecna: ho realizzato software gestionali su misura con una REST API sicura in Laravel e una single-page application in AngularJS, in linea con gli obiettivi di business del cliente.',
  'experience.codiceabarre-2017.desc':
    'Ho sviluppato un gestionale full-stack con una REST API in Laravel e una single-page application in AngularJS.',
  'experience.perdichizzi.desc':
    'Ho realizzato un gestionale con una RESTful API in Laravel e una single-page application in AngularJS.',
  'experience.codiceabarre-2016.desc':
    'Ho realizzato una piattaforma e-commerce dimostrativa integrando WordPress, WooCommerce e le API di Telegram, con un frontend personalizzato in PHP, Bootstrap e jQuery.',
  'experience.italiahotspot-2015.desc':
    'Ho lavorato come sviluppatore full-stack con PHP/Laravel e Angular/Bootstrap e ho configurato il firmware OpenWRT/DD-WRT dei router con server FreeRADIUS.',
  'experience.insolaria.desc':
    'Ho sviluppato un portale web per le pubbliche amministrazioni con backend Laravel, frontend AngularJS e integrazione delle API di WordPress.',

  'skills.title': 'Competenze',
  'projects.title': 'Progetti',
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
  'teachings.sqpd.desc':
    "Il corso affronta argomenti come l'uso della shell UNIX, il controllo di versione con Git e i workflow di GitHub, la partecipazione alle community open-source, la programmazione in Python, gli unit test e i test end-to-end con Playwright, la containerizzazione con Docker, i principi di qualità del codice (es. SOLID), gli strumenti di Continuous Integration/Continuous Deployment (CI/CD) e l'agentic coding con assistenti AI.",
  'teachings.qd.desc':
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
  'agent-toolkit, minimalistic skills and rules for AI coding agents':
    'agent-toolkit, skill e regole minimaliste per agenti di coding AI',
  'ai-py-skills, agent skills for Python projects, by Python Catania':
    'ai-py-skills, skill AI per progetti Python, da Python Catania',
  'Developed a software management application': "Sviluppata un'applicazione gestionale software",
  'Developed and maintained the FedEx rating application':
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
  'Python Catania website': 'Sito web di Python Catania',
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
  'Telegram DMI Bot, a Telegram bot for the University of Catania Department of Mathematics and Computer Science':
    "Telegram DMI Bot, un bot Telegram per il Dipartimento di Matematica e Informatica dell'Università di Catania",
  'ERSU Bot, telegram bot for the University of Catania':
    "ERSU Bot, bot Telegram per l'Università di Catania",
  'Spotted DMI Bot, a Telegram bot for the University of Catania Department of Mathematics and Computer Science':
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
  "Tol' Viron, retroporting of World of Warcraft arena battleground from Pandaria to WOTLK":
    "Tol' Viron, retroporting di un'arena di World of Warcraft da Pandaria a WOTLK",
  "Tiger's Peak, retroporting of World of Warcraft arena battleground from Pandaria to WOTLK":
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
  'QR-Scanner-Bot, a Telegram bot to easily scan any QR code':
    'QR-Scanner-Bot, un bot Telegram per scansionare facilmente qualsiasi codice QR',
  'EPUB-to-PDF, a Telegram bot that converts EPUB files to PDF':
    'EPUB-to-PDF, un bot Telegram che converte i file EPUB in PDF',
  'ImageEditor, editor written in Processing that lets you modify color channels and apply filters':
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

  // Work experience roles and institutions
  'Fullstack Developer (freelancer)': 'Sviluppatore fullstack (freelance)',
  'Software Developer (freelancer)': 'Sviluppatore software (freelance)',
  'Web Developer (part-time)': 'Sviluppatore web (part-time)',
  'Contract Professor': 'Professore a contratto',
  'University of Catania': 'Università di Catania',

  // Education
  'PhD in Computer Science': 'Dottorato di ricerca in Informatica',
  'Visiting PhD student': 'Dottorando in visita',
  'Nordita, Stockholm': 'Nordita, Stoccolma',
  'Machine learning for Barkhausen noise analysis':
    "Machine learning per l'analisi del rumore di Barkhausen",
  'MSc in Computer Science (Data Science)': 'Laurea magistrale in Informatica (Data Science)',
  'Grade: 110/110 cum laude': 'Voto: 110/110 e lode',
  'BSc in Computer Science': 'Laurea triennale in Informatica',
  'Grade: 106/110': 'Voto: 106/110',
  Italian: 'Italiano',
  English: 'Inglese',
  Dutch: 'Olandese',
  Spanish: 'Spagnolo',
  Native: 'Madrelingua',
  Fluent: 'Fluente',
  Basic: 'Base',
};


export const dictionaries: Record<Language, Dictionary> = { en, it };
