(() => {
  'use strict';

  const TRANSLATIONS = {
    en: {
      'nav.projects': 'Projects',
      'nav.skills': 'Skills',
      'nav.experience': 'Experience',
      'nav.education': 'Education',
      'nav.contact': 'Contact',
      'hero.status': 'Open to Junior Cybersecurity & Entry-Level IT / SWE Roles',
      'hero.subtitle': 'Computer Engineer · M.Sc. Candidate in Cybersecurity · Naples, Italy',
      'hero.lead':
        'B.Sc. in Computer Engineering and M.Sc. candidate in Cybersecurity at the University of Naples Federico II (all specialization coursework completed). Industry background in IT support, backups, database integrity, and Python automation, backed by end-to-end projects in Red/Blue Teaming, OT/ICS security, and Explainable AI.',
      'hero.ctaProjects': 'Explore Case Studies',
      'hero.card1Tag': 'RED & BLUE LAB',
      'hero.card1Val': '5 Custom Wazuh Rules + Snort & Pentbox',
      'hero.card1Sub': 'Enterprise IoT kill chain vs. Defense-in-Depth',
      'hero.card2Tag': 'OT/ICS GATEWAY',
      'hero.card2Val': '4 Edge Shields · 0 C++ SAST Vulns',
      'hero.card2Sub': 'Cortex-M7 TinyML + local Qwen 2.5 MITRE SOC',
      'hero.card3Tag': 'XAI FOR IOMT IDS',
      'hero.card3Val': '181,366 Test Biflows · ~550x Speedup',
      'hero.card3Sub': 'Zero-payload headers, 10/10 unit tests verified',
      'projects.eyebrow': 'CASE STUDIES',
      'projects.title': 'Selected Security Architectures',
      'projects.desc':
        'Click any schematic diagram to inspect the full topology, or explore the source code directly on GitHub.',
      'case.attackLabel': 'Offensive Kill Chain',
      'case.defenseLabel': 'Defense-in-Depth Stack',
      'case.viewRepo': 'View Repository',
      'case.zoomDiagram': 'Zoom Diagram',
      'case.expandChip': 'Expand',
      'case1.meta': 'University of Naples Federico II · Team Lab',
      'case1.title': 'Red & Blue Team Simulation in an Enterprise IoT Infrastructure',
      'case1.summary':
        'End-to-end Cyber Kill Chain executed against a flat SME LAN (192.168.137.0/24) exposing a containerized Tomcat runtime and physical IoT sensors, paired with layered perimeter, NIDS, deception, and Wazuh SIEM correlation.',
      'case1.attack':
        'Nmap recon, Tomcat Manager deployment (cmd.jsp / WAR), privileged Docker escape (chroot), offline John the Ripper cracking, Base64 reverse shell, ED25519 SSH persistence (:2222), and Layer-2 ARP spoofing/MitM.',
      'case1.defense':
        'iptables NAT/DROP perimeter, promiscuous Snort NIDS alerts, Pentbox honeypot with spoofed Raspberry Pi MAC OUI + honeytokens, hardened Portenta H7 HTTP rate protection (503/413, UDP syslog :514), and Wazuh Agent + FIM.',
      'case1.detailsTitle': 'Custom Wazuh Correlation Rules & Firmware Hardening',
      'case1.tblRule': 'Rule ID',
      'case1.tblSource': 'Telemetry Source',
      'case1.tblDesc': 'Detection Objective',
      'case1.r100002': 'Detects unauthorized INTRUSION ATTEMPT access against decoy HTTP service.',
      'case1.r100011': 'Triggers on physical server-room acoustic spikes and PIR motion alerts.',
      'case1.r100020': 'Correlates internal port scans and ARP MITM alerts targeting Portenta H7 & honeypot.',
      'case1.note':
        'Firmware hardening extracted hardcoded Wi-Fi/Wazuh IPs into a git-ignored template (arduino_secrets.h.example), enforced bounded 512-byte HTTP header buffers with Slowloris read timeout (HTTP 413), and added a non-blocking 5 s acoustic cooldown.',
      'case2.meta': 'University of Naples Federico II · Edge + AI-SOC',
      'case2.title': 'Multi-Layer OT/ICS Security & AI-Assisted SOC with Edge TinyML',
      'case2.summary':
        'Four-shield edge defense pipeline on Arduino Portenta H7 protecting a 10-sensor centrifugal pump telemetry bus over MQTT, coupled with an asynchronous local Ollama (Qwen 2.5) SOC grounded to MITRE ATT&CK for ICS.',
      'case2.shieldsLabel': '4-Shield Cortex-M7 Gateway',
      'case2.shields':
        '(1) Anti-DoS sliding rate limiter (4 pkt/s), (2) strict ArduinoJson sanitization & control-character filtering, (3) physical bounds & kinematic limits (|ΔP|, |ΔRPM|), (4) Edge Impulse TinyML multivariate spoofing detector.',
      'case2.socLabel': 'AI-SOC & Security Audits',
      'case2.soc':
        'STRIDE threat modeling & 4 Red Team evasion scripts (incl. indirect prompt injection). SAST verified: 0 C++ vulnerabilities on Flawfinder/Cppcheck; Bandit-hardened Python with <UNTRUSTED_TELEMETRY_DOSSIER> prompt isolation.',
      'case2.detailsTitle': 'STRIDE Scenarios & SAST Hardening Breakdown',
      'case2.tblScen': 'Scenario',
      'case2.tblTech': 'Threat Focus',
      'case2.tblMit': 'Mitigating Control',
      'case2.s1': 'Passive MQTT sniffing & packet replay flood',
      'case2.m1': 'Edge Shield 1 rate window + SIEM MITRE ICS T0814 triage',
      'case2.s2': 'Oversized frames, missing keys, type confusion, CR/LF injection',
      'case2.m2': 'Edge Shield 2 (>1536 B drop) & Shield 3 range validation',
      'case2.s3': 'Sub-threshold pressure ramp with contradictory current/heat',
      'case2.m3': 'Edge Shield 4 Edge Impulse TinyML multivariate anomaly gate',
      'case2.s4': 'LLM override strings hidden inside telemetry timestamp',
      'case2.m4': 'Edge char filter + <UNTRUSTED_TELEMETRY_DOSSIER> & queued worker',
      'case3.meta': 'DIETI UNINA · Benchmark & IEEE Study',
      'case3.title': 'Explainable AI (XAI) for Early Intrusion Detection in IoMT Networks',
      'case3.summary':
        'Reproducible PyTorch benchmark comparing CNN, Transformer, and lightweight hybrid models for early bidirectional-flow classification on encrypted healthcare networks using only the first 10 L3/L4 packet headers.',
      'case3.benchLabel': 'Early Detection Benchmark',
      'case3.bench':
        'Evaluated across 13 CICIoMT2024 classes (181,366 test biflows, zero payload): Lopez17CNN achieved 84.76% Macro-F1 at 1.03 ms CPU latency, while MedDefenderTransformer reduced parameter count by 55% (353K params, 2.10 ms).',
      'case3.auditLabel': 'Causal XAI Faithfulness Audit',
      'case3.audit':
        'Audited by-design Attention Rollout & MHAN against GradientSHAP across 957 flows (Spearman ρ, Cosine Similarity, Top-3 masking, and frozen MoRF/LeRF AUDC), achieving a ~550x explanation speedup.',
      'case3.detailsTitle': 'Certified Experimental Results (CICIoMT2024, N = 181,366)',
      'case3.tblModel': 'Architecture',
      'case3.tblParams': 'Params',
      'case3.tblLat': 'CPU Latency',
      'case3.tblXai': 'By-Design vs. SHAP (ρ / Cos)',
      'case3.note':
        'Validated with 10/10 automated unit tests (test_networks.py), safe checkpoint deserialization (weights_only=True), and frozen MoRF/LeRF occlusion curves confirming causal impact (-55.0 to -67.2 p.p. under Top-3 packet masking).',
      'skills.eyebrow': 'CAPABILITIES',
      'skills.title': 'Technical Toolbox',
      'skills.desc':
        'Hands-on security tooling across SOC monitoring, malware & binary analysis, AppSec, OT/ICS, and data pipelines.',
      'skills.fAll': 'All Domains',
      'skills.fBlue': 'Blue Team & SIEM',
      'skills.fAppsec': 'AppSec & Offensive',
      'skills.fSystems': 'Systems & Embedded',
      'skills.fLanguages': 'Languages',
      'skills.fAi': 'AI & Data',
      'skills.catBlue': 'Blue Team, SIEM & Hunting',
      'skills.catAppsec': 'AppSec, Offensive & Malware Analysis',
      'skills.catSystems': 'Systems, Networking & Embedded',
      'skills.catLang': 'Languages & Scripting',
      'skills.catAi': 'AI, Security Analytics & Operations',
      'exp.eyebrow': 'EXPERIENCE',
      'exp.title': 'Work & Teaching',
      'exp.job1Title': 'IT Support & Data Management',
      'exp.job1Date': 'Sep 2023 – Sep 2024',
      'exp.job1B1': 'Provided hardware/software user support, workstation setup, and system backups.',
      'exp.job1B2':
        'Managed and validated the e-commerce product catalog database via Argon ERP and Excel, ensuring data accuracy and integrity.',
      'exp.job1B3':
        'Developed Python automation scripts to streamline recurring catalog updates and eliminate manual data-entry bottlenecks.',
      'exp.job2Title': 'Private STEM & Humanities Tutor',
      'exp.job2Date': '2018 – Present',
      'exp.job2Org': 'Self-employed · Naples, Italy',
      'exp.job2B1':
        'Ongoing tutoring for high-school students (mathematics, physics, English, law, history), developing analytical rigor and clear technical communication.',
      'edu.eyebrow': 'EDUCATION & CERTIFICATIONS',
      'edu.title': 'Academic Background',
      'edu.mscTitle': 'M.Sc. in Computer Engineering (Cybersecurity Specialization)',
      'edu.mscStatus': 'In progress',
      'edu.unina': 'University of Naples Federico II, Italy',
      'edu.mscB1Lbl': 'Specialization coursework (completed):',
      'edu.mscB2Lbl': 'Cross-disciplinary coursework (AI & Cloud):',
      'edu.mscB2Val': 'Machine Learning, Text Mining, Network and Cloud Infrastructures, AI Ethics.',
      'edu.bscTitle': 'B.Sc. in Computer Engineering',
      'edu.bscStatus': 'Completed',
      'edu.bscB1Lbl': 'Relevant coursework:',
      'edu.bscB1Val': 'Software Engineering, Databases, Operating Systems.',
      'edu.langTitle': 'Languages & Certifications',
      'edu.langB1Lbl': 'Italian:',
      'edu.langB1Val': 'Native',
      'edu.langB2Lbl': 'English B2:',
      'edu.langB2Val':
        'Cambridge Certification (CLA Mezzocannone, University of Naples Federico II, 2025)',
      'contact.eyebrow': 'GET IN TOUCH',
      'contact.title': "Let's Connect",
      'contact.desc':
        'Available for Junior Cybersecurity (SOC / Security Analyst / Security Engineering) and entry-level IT / Software Engineering opportunities.',
      'contact.copyEmail': 'Copy Email',
      'contact.copied': 'Email Copied!'
    },
    it: {
      'nav.projects': 'Progetti',
      'nav.skills': 'Competenze',
      'nav.experience': 'Esperienza',
      'nav.education': 'Istruzione',
      'nav.contact': 'Contatti',
      'hero.status': 'Disponibile per ruoli Junior Cybersecurity & IT / SWE entry-level',
      'hero.subtitle': 'Ingegnere Informatico · Laureando Magistrale in Cybersecurity · Napoli, Italia',
      'hero.lead':
        'Ingegnere informatico triennale e laureando magistrale in Cybersecurity presso l’Università degli Studi di Napoli Federico II (esami di specializzazione completati). Esperienza aziendale in supporto IT, backup, integrità dati e automazione Python, affiancata da progetti completi su Red/Blue Teaming, sicurezza OT/ICS ed Explainable AI.',
      'hero.ctaProjects': 'Esplora i Progetti',
      'hero.card1Tag': 'LAB RED & BLUE TEAM',
      'hero.card1Val': '5 Regole Wazuh Custom + Snort & Pentbox',
      'hero.card1Sub': 'Cyber kill chain su IoT aziendale vs Defense-in-Depth',
      'hero.card2Tag': 'GATEWAY OT/ICS',
      'hero.card2Val': '4 Scudi Edge · 0 Vuln. SAST C++',
      'hero.card2Sub': 'TinyML su Cortex-M7 + AI-SOC locale Qwen 2.5 & MITRE ICS',
      'hero.card3Tag': 'XAI PER IDS IOMT',
      'hero.card3Val': '181.366 Biflussi di Test · Speedup ~550x',
      'hero.card3Sub': 'Solamente header L3/L4, 10/10 test unitari superati',
      'projects.eyebrow': 'CASI STUDIO',
      'projects.title': 'Architetture di Sicurezza Selezionate',
      'projects.desc':
        'Clicca su qualsiasi schema architetturale per ingrandire la topologia oppure esplora direttamente il codice su GitHub.',
      'case.attackLabel': 'Kill Chain Offensiva',
      'case.defenseLabel': 'Architettura Defense-in-Depth',
      'case.viewRepo': 'Apri Repository',
      'case.zoomDiagram': 'Ingrandisci Schema',
      'case.expandChip': 'Espandi',
      'case1.meta': 'Università Federico II · Laboratorio di Gruppo',
      'case1.title': 'Simulazione Red & Blue Team in Infrastruttura Aziendale IoT',
      'case1.summary':
        'Cyber Kill Chain end-to-end eseguita su una LAN aziendale piatta (192.168.137.0/24) con servizio Tomcat in container e nodo IoT fisico, contrastata da firewall perimetrale, NIDS, cyber deception e correlazione su Wazuh SIEM.',
      'case1.attack':
        'Ricognizione Nmap, deploy web shell (cmd.jsp / WAR su Tomcat), Docker container escape (chroot), cracking offline con John the Ripper, reverse shell Base64, persistenza SSH ED25519 (:2222) e ARP spoofing/MitM L2.',
      'case1.defense':
        'Perimetro iptables NAT/DROP, NIDS Snort in promiscuous mode, honeypot Pentbox con MAC spoofing Raspberry Pi + honeytoken, protezione rate HTTP su Portenta H7 (503/413, syslog UDP :514) e Wazuh Agent + FIM.',
      'case1.detailsTitle': 'Regole Custom Wazuh & Hardening Firmware',
      'case1.tblRule': 'ID Regola',
      'case1.tblSource': 'Sorgente Telemetria',
      'case1.tblDesc': 'Obiettivo di Rilevamento',
      'case1.r100002': 'Rileva accessi non autorizzati (INTRUSION ATTEMPT) verso il servizio esca Pentbox.',
      'case1.r100011': 'Segnala picchi acustici e intrusioni volumetriche PIR dalla sala server fisica.',
      'case1.r100020': 'Correla port scan interni e alert ARP MITM di Snort verso Portenta H7 e honeypot.',
      'case1.note':
        'L’hardening del firmware ha isolato credenziali Wi-Fi/IP Wazuh in arduino_secrets.h.example, limitato il buffer header HTTP a 512 byte con timeout anti-Slowloris (HTTP 413) e introdotto un cooldown non bloccante da 5 s.',
      'case2.meta': 'Università Federico II · Edge Security + AI-SOC',
      'case2.title': 'Sicurezza Multilivello OT/ICS & AI-Assisted SOC con Edge TinyML',
      'case2.summary':
        'Gateway di difesa a 4 scudi su Arduino Portenta H7 a protezione di una pompa industriale su bus MQTT (10 sensori), integrato con un SOC locale asincrono basato su Ollama (Qwen 2.5) ancorato alla matrice MITRE ATT&CK for ICS.',
      'case2.shieldsLabel': '4 Scudi Edge su Cortex-M7',
      'case2.shields':
        '(1) Rate limiter anti-DoS (4 pkt/s), (2) sanitizzazione rigorosa ArduinoJson e filtro caratteri di controllo, (3) limiti fisici e cinematici (|ΔP|, |ΔRPM|), (4) modello TinyML (Edge Impulse) contro spoofing semantico.',
      'case2.socLabel': 'AI-SOC & Audit SAST',
      'case2.soc':
        'Threat modeling STRIDE e 4 script offensivi Red Team (incl. prompt injection indiretta). Audit SAST: 0 vulnerabilità C++ su Flawfinder/Cppcheck; Python verificato con Bandit e isolamento <UNTRUSTED_TELEMETRY_DOSSIER>.',
      'case2.detailsTitle': 'Scenari STRIDE & Dettaglio Mitigazioni SAST',
      'case2.tblScen': 'Scenario',
      'case2.tblTech': 'Minaccia Simulata',
      'case2.tblMit': 'Controllo Mitigante',
      'case2.s1': 'Sniffing passivo MQTT e replay volumetrico (DoS)',
      'case2.m1': 'Scudo Edge 1 (rate limit) + triage SIEM su tecnica MITRE ICS T0814',
      'case2.s2': 'Frame sovradimensionati, chiavi mancanti, type confusion e log injection',
      'case2.m2': 'Scudo Edge 2 (drop >1536 B) & Scudo 3 (range fisici ammessi)',
      'case2.s3': 'Deriva graduale pressione incoerente con corrente e temperatura motore',
      'case2.m3': 'Scudo Edge 4 (TinyML multivariato Edge Impulse)',
      'case2.s4': 'Istruzioni malevole per l’LLM iniettate nel campo timestamp',
      'case2.m4': 'Filtro caratteri Edge + delimitazione <UNTRUSTED_TELEMETRY_DOSSIER> e coda asincrona',
      'case3.meta': 'DIETI UNINA · Benchmark & Studio IEEE',
      'case3.title': 'Explainable AI (XAI) per Intrusion Detection Precoce in Reti IoMT',
      'case3.summary':
        'Benchmark riproducibile in PyTorch tra architetture CNN, Transformer e ibride per classificazione precoce di biflussi in reti medicali cifrate, usando soltanto i primi 10 header L3/L4 senza ispezione del payload.',
      'case3.benchLabel': 'Benchmark Classificazione Precoce',
      'case3.bench':
        'Valutato su 13 classi CICIoMT2024 (181.366 biflussi di test, zero payload): Lopez17CNN raggiunge 84,76% Macro-F1 con latenza CPU di 1,03 ms; MedDefenderTransformer riduce i parametri del 55% (353K param., 2,10 ms).',
      'case3.auditLabel': 'Audit Causale XAI',
      'case3.audit':
        'Confronto tra meccanismi intrinseci (Attention Rollout & MHAN) e post-hoc (GradientSHAP) su 957 flussi (Spearman ρ, Cosine Similarity, Top-3 masking e curve causali MoRF/LeRF), con accelerazione di ~550x.',
      'case3.detailsTitle': 'Risultati Sperimentali Certificati (CICIoMT2024, N = 181.366)',
      'case3.tblModel': 'Architettura',
      'case3.tblParams': 'Parametri',
      'case3.tblLat': 'Latenza CPU',
      'case3.tblXai': 'Intrinseca vs SHAP (ρ / Cos)',
      'case3.note':
        'Verificato tramite 10/10 test unitari (test_networks.py), caricamento sicuro dei pesi (weights_only=True) e validazione MoRF/LeRF su modelli congelati (-55,0 / -67,2 p.p. oscurando i primi 3 pacchetti).',
      'skills.eyebrow': 'COMPETENZE',
      'skills.title': 'Stack Tecnico',
      'skills.desc':
        'Strumenti pratici su monitoraggio SOC, analisi malware e binari, AppSec, sicurezza OT/ICS e pipeline dati.',
      'skills.fAll': 'Tutti gli Ambiti',
      'skills.fBlue': 'Blue Team & SIEM',
      'skills.fAppsec': 'AppSec & Offensiva',
      'skills.fSystems': 'Sistemi & Embedded',
      'skills.fLanguages': 'Linguaggi',
      'skills.fAi': 'AI & Dati',
      'skills.catBlue': 'Blue Team, SIEM & Threat Hunting',
      'skills.catAppsec': 'AppSec, Sicurezza Offensiva & Malware Analysis',
      'skills.catSystems': 'Sistemi, Reti & Embedded',
      'skills.catLang': 'Linguaggi & Scripting',
      'skills.catAi': 'AI, Security Analytics & Operatività',
      'exp.eyebrow': 'ESPERIENZA',
      'exp.title': 'Lavoro & Insegnamento',
      'exp.job1Title': 'Supporto IT & gestione dati',
      'exp.job1Date': 'set 2023 – set 2024',
      'exp.job1B1': 'Gestito il supporto tecnico utenti (hardware/software), configurazione PC e procedure di backup.',
      'exp.job1B2':
        'Amministrato e validato il database articoli e-commerce tramite gestionale Argon ed Excel, garantendo qualità e integrità dei dati.',
      'exp.job1B3':
        'Sviluppato script di automazione in Python per velocizzare aggiornamenti massivi del catalogo e ridurre operazioni manuali ripetitive.',
      'exp.job2Title': 'Tutor privato — materie STEM e umanistiche',
      'exp.job2Date': '2018 – presente',
      'exp.job2Org': 'Attività autonoma · Napoli',
      'exp.job2B1':
        'Supporto didattico continuativo a studenti superiori (matematica, fisica, inglese, diritto, storia) su metodo analitico e chiarezza espositiva.',
      'edu.eyebrow': 'ISTRUZIONE & CERTIFICAZIONI',
      'edu.title': 'Formazione Accademica',
      'edu.mscTitle': 'Laurea magistrale in Ingegneria informatica (specializzazione in Cybersecurity)',
      'edu.mscStatus': 'In corso',
      'edu.unina': 'Università degli Studi di Napoli Federico II',
      'edu.mscB1Lbl': 'Esami di specializzazione (completati):',
      'edu.mscB2Lbl': 'Esami trasversali (AI & Cloud):',
      'edu.mscB2Val': 'Machine Learning, Text Mining, Network and Cloud Infrastructures, Etica dell’AI.',
      'edu.bscTitle': 'Laurea triennale in Ingegneria informatica',
      'edu.bscStatus': 'Conseguita',
      'edu.bscB1Lbl': 'Esami rilevanti:',
      'edu.bscB1Val': 'Ingegneria del Software, Basi di Dati, Sistemi Operativi.',
      'edu.langTitle': 'Lingue e certificazioni',
      'edu.langB1Lbl': 'Italiano:',
      'edu.langB1Val': 'Madrelingua',
      'edu.langB2Lbl': 'Inglese B2:',
      'edu.langB2Val':
        'Certificazione Cambridge (CLA Mezzocannone, Università degli Studi di Napoli Federico II, 2025)',
      'contact.eyebrow': 'CONTATTI',
      'contact.title': 'Mettiamoci in Contatto',
      'contact.desc':
        'Disponibile per opportunità junior in Cybersecurity (SOC / Security Analyst / Security Engineering) e ruoli IT / Software Engineering entry-level.',
      'contact.copyEmail': 'Copia Email',
      'contact.copied': 'Email Copiata!'
    }
  };

  let currentLang = 'en';

  function applyLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    currentLang = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (TRANSLATIONS[lang][key] !== undefined) {
        el.textContent = TRANSLATIONS[lang][key];
      }
    });

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      const active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    try {
      localStorage.setItem('portfolio-lang', lang);
    } catch {
      // Ignore storage errors in strict browser privacy modes
    }
  }

  // Language initialization (?lang=it or saved preference)
  const params = new URLSearchParams(window.location.search);
  const queryLang = params.get('lang');
  let savedLang = null;
  try {
    savedLang = localStorage.getItem('portfolio-lang');
  } catch {
    savedLang = null;
  }
  if (queryLang === 'it' || queryLang === 'en') {
    applyLanguage(queryLang);
  } else if (savedLang === 'it') {
    applyLanguage('it');
  }

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      applyLanguage(btn.getAttribute('data-lang'));
    });
  });

  // Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const primaryNav = document.getElementById('primaryNav');
  if (menuToggle && primaryNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = primaryNav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    primaryNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        primaryNav.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Skill filter pills
  const filterButtons = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');
  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-filter');
      filterButtons.forEach((b) => b.classList.toggle('is-active', b === btn));
      skillCards.forEach((card) => {
        const show = target === 'all' || card.getAttribute('data-category') === target;
        card.classList.toggle('is-hidden', !show);
      });
    });
  });

  // Diagram Lightbox Modal
  const lightbox = document.getElementById('diagramLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxRepoLink = document.getElementById('lightboxRepoLink');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxBackdrop = document.getElementById('lightboxBackdrop');
  let lastTrigger = null;

  function openLightbox(trigger) {
    if (!lightbox || !lightboxImg) return;
    lastTrigger = trigger;
    lightboxImg.src = trigger.getAttribute('data-src') || '';
    lightboxTitle.textContent = trigger.getAttribute('data-title') || 'Architecture Diagram';
    if (lightboxRepoLink) {
      lightboxRepoLink.href = trigger.getAttribute('data-repo') || 'https://github.com/giusepperuggiero-sec';
    }
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    if (lightboxClose) lightboxClose.focus();
  }

  function closeLightbox() {
    if (!lightbox || lightbox.hidden) return;
    lightbox.hidden = true;
    document.body.style.overflow = '';
    if (lastTrigger && typeof lastTrigger.focus === 'function') {
      lastTrigger.focus();
    }
  }

  document.querySelectorAll('.zoom-trigger').forEach((trigger) => {
    trigger.addEventListener('click', () => openLightbox(trigger));
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') closeLightbox();
  });

  // Copy email CTA
  const copyBtn = document.getElementById('copyEmailBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const email = copyBtn.getAttribute('data-email');
      const labelEl = copyBtn.querySelector('[data-i18n]');
      try {
        await navigator.clipboard.writeText(email);
        if (labelEl) {
          labelEl.textContent = TRANSLATIONS[currentLang]['contact.copied'];
          setTimeout(() => {
            labelEl.textContent = TRANSLATIONS[currentLang]['contact.copyEmail'];
          }, 2200);
        }
      } catch {
        window.location.href = `mailto:${email}`;
      }
    });
  }
})();
