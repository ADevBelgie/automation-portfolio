'use strict';

// Public profile, contact, and briefing links.
// Set portraitUrl to './portrait.jpg' (or a stable hosted image URL) to show a headshot.
// Set email to show a direct email button alongside LinkedIn.
var CONFIG = {
  linkedinUrl: 'https://www.linkedin.com/in/arthur-devresse/',
  githubUrl: 'https://github.com/ADevBelgie',
  alreadyPastUsUrl: 'https://already-past-us.vercel.app/',
  portraitUrl: './portrait.jpg',
  email: ''
};

var SUPPORTED_LANGS = ['nl', 'fr', 'en'];

var TRANSLATIONS = {
  en: {
    _title: 'Arthur Devresse — Practical AI & Workflow Automation',
    _description:
      'Real examples of business automation, data-to-invoice tools, and quiet background workflows built in days or weeks.',

    skip_link: 'Skip to content',
    topbar_contact: 'Contact',
    pdf_btn: 'PDF',
    lang_group_aria: 'Language',
    pdf_btn_aria: 'Save or print as A4 PDF',
    pdf_btn_title: 'Open Print dialog to save as A4 PDF',
    theme_to_dark: 'Switch to dark theme',
    theme_to_light: 'Switch to light theme',

    author_role: 'Freelance automation developer · Belgium',
    hero_title: 'Custom automation used to take months. Not anymore.',
    hero_lead:
      'With modern AI engineering tools, one experienced builder can deliver in days or weeks what used to need an agency. I turn messy spreadsheets, repetitive checking, and inbox overload into quiet background tools.',
    hero_contact_cta: 'Have a task in mind? Jump to contact',

    fact1_val: '6–7 weeks',
    fact1_label: 'From blank screen to live apps at My Mobility Budget Butler (MMBB)',
    fact2_val: '1 weekend',
    fact2_label: 'To research, design, and ship a live interactive web briefing',
    fact3_val: 'Under €0.50 / 1,000',
    fact3_label: 'AI cost for automated receipt checks at MMBB, with hard budget caps',

    ideas_num: '01 · What I can automate for you',
    ideas_title: 'Have a recurring task like one of these?',
    ideas_sub: 'Pick one repetitive weekly or monthly task. That is usually the best place to start.',

    flow_caption: 'Example · Turning messy data into ready-to-send invoices',
    flow1_tag: '1. Raw input',
    flow1_text: 'Messy Excel exports, time logs, or multi-rule pricing tables',
    flow2_tag: '2. Quiet check',
    flow2_text: 'Applies your rules, flags missing lines, calculates exact totals',
    flow3_tag: '3. Ready to send',
    flow3_text: 'Clean PDF invoices & summary waiting for your 1-click sign-off',

    idea1_title: 'Complex data to invoices & reports',
    idea1_body:
      'Turn multi-rule spreadsheets into checked PDF invoices, quotes, or client reports.',
    idea2_title: 'PDFs & forms to clean systems',
    idea2_body:
      'Rename and file incoming PDFs, and move key numbers straight into Excel or your CRM.',
    idea3_title: 'Cross-checking & matching',
    idea3_body:
      'Match payments against open invoices, or check submitted forms against contracts and rules.',
    idea4_title: 'Inbox triage & draft replies',
    idea4_body:
      'Sort shared inboxes, pull out attachments, and prepare NL/FR/EN draft replies from your guidelines.',
    idea5_title: 'Quiet daily watchdogs',
    idea5_body:
      'Check websites, regulations, prices, or deadlines each morning and alert you only when something changes.',
    idea6_title: 'Clean web dashboards',
    idea6_body:
      'Turn scattered tables or recurring updates into a simple, readable webpage for your team.',

    proof_num: '02 · Proven in practice',
    proof_title: 'What I have already built and shipped',
    proof_sub: 'Real systems running in production, plus public web projects you can inspect right away.',

    mmbb_sublabel: 'My Mobility Budget Butler (MMBB) · Belgian Mobility Budget',
    mmbb_badge: 'Live in production',

    mmbb1_eyebrow: 'Expense & rule checking',
    mmbb1_title: 'Automatic receipt & distance checks',
    mmbb1_body:
      'Reads uploaded expense PDFs and photos, checks company and legal rules (even measuring real walking distances via Google Maps), auto-approves clear claims, and routes only rejections or edge cases to staff.',

    mmbb2_eyebrow: 'Paperwork & CRM entry',
    mmbb2_title: 'Document sorting & extraction',
    mmbb2_body:
      'Recognizes incoming contracts and payment proofs, renames and files the PDFs cleanly, pulls out key figures (who paid whom, how much, when), and updates the CRM automatically.',

    mmbb3_eyebrow: 'Complex rule comparison',
    mmbb3_title: 'Annual renewal cross-checks',
    mmbb3_body:
      'Compares new annual submissions against past contracts, payment dates, and legal ceilings. Exact matches are approved automatically; mismatches go to staff with a clear explanation.',

    mmbb4_eyebrow: 'Inbox & support co-pilot · 6 weeks',
    mmbb4_title: 'Internal assistant “Nestor” (NL / FR / EN)',
    mmbb4_body:
      "Combines company manuals with a customer's file and email history to answer tricky team questions and prepare draft replies in Dutch, French, and English.",

    mmbb5_eyebrow: 'Compliance monitoring · 7 weeks',
    mmbb5_title: 'Daily Belgian-law watchdog',
    mmbb5_body:
      'Checks 6 official Belgian legal and government websites every morning at 06:00. Stays completely silent on quiet days; the moment a relevant law or rule changes, it explains which business rules are affected and drafts the required updates.',

    public_eyebrow: 'Public web briefing · Built in 1 weekend (Nov 2026)',
    public_title: 'Already Past Us: live example of build speed',
    public_cta: 'Open live site',
    public_body:
      'An interactive, cited research briefing with 8 custom charts on where AI outperforms humans and where it still falls short (roughly 4 in 5 real freelance jobs on its own). Built and shipped over one weekend.',

    archive_label: 'Earlier “State of AI” editions (public series):',
    archive_dec: 'Dec 2025',
    archive_apr1: 'Apr 2026',
    archive_apr2: 'Apr 2026 (Essay)',
    archive_jul: 'Jul 2026',

    guard1_title: 'Routine automated, exceptions reviewed',
    guard1_body:
      'At MMBB, clear claims are approved automatically while every rejection or edge case goes to a staff member. Draft emails stay drafts until someone sends them.',
    guard2_title: 'Cents per case, not big bills',
    guard2_body:
      'At MMBB, automated receipt checks cost under €0.50 per 1,000 tickets, and full AI support answers run around €0.01 each. Hard spending limits prevent surprises.',
    guard3_title: 'Tested on past files first',
    guard3_body:
      'Before anything goes live, we run it read-only on past files and compare its results against yours. Nothing touches live data until the answers match.',

    sec3_num: '03 · Available for projects',
    sec3_title: 'Send me a short description of the task',
    cta_intro:
      "I take on freelance automation projects, big or small. Tell me about a repetitive task you do each week or month, and I'll tell you honestly if it's worth automating.",
    step1_text:
      "Send me 3 short sentences on LinkedIn about a task you'd rather stop doing by hand.",
    step2_text:
      'You get an honest yes/no on whether automation saves real time, or if a simpler fix works better.',
    step3_text:
      'We test a small, safe first version on real examples before turning anything on.',
    linkedin_cta: 'Message me on LinkedIn',
    github_link: 'GitHub (ADevBelgie)',
    apu_link: 'already-past-us.vercel.app',
    footer_note: 'Freelance in Belgium · Practical automation.'
  },

  nl: {
    _title: 'Arthur Devresse — Praktische AI & Procesautomatisering',
    _description:
      'Concrete voorbeelden van bedrijfsautomatisering, factuurtools en stille achtergrondprocessen, gebouwd in dagen of weken.',

    skip_link: 'Ga naar inhoud',
    topbar_contact: 'Contact',
    pdf_btn: 'PDF',
    lang_group_aria: 'Taal',
    pdf_btn_aria: 'Opslaan of afdrukken als A4-pdf',
    pdf_btn_title: 'Open afdrukvenster om op te slaan als A4-pdf',
    theme_to_dark: 'Schakel naar donker thema',
    theme_to_light: 'Schakel naar licht thema',

    author_role: 'Freelance automatisering & AI · België',
    hero_title: 'Automatisering op maat duurde vroeger maanden. Vandaag niet meer.',
    hero_lead:
      'Met moderne AI-ontwikkeltools kan één ervaren ontwikkelaar vandaag in dagen of weken opleveren wat vroeger een heel bureau vroeg. Ik zet rommelige Excels, tijdrovende controles en volle mailboxen om in stille tools op de achtergrond.',
    hero_contact_cta: 'Een taak in gedachten? Ga naar contact',

    fact1_val: '6–7 weken',
    fact1_label: 'Van wit blad tot live apps bij My Mobility Budget Butler (MMBB)',
    fact2_val: '1 weekend',
    fact2_label: 'Voor onderzoek, ontwerp en lancering van een interactief webrapport',
    fact3_val: 'Minder dan €0,50 / 1.000',
    fact3_label: 'AI-kost voor automatische onkostencontroles bij MMBB, met vaste budgetlimieten',

    ideas_num: '01 · Wat ik voor u kan automatiseren',
    ideas_title: 'Herkent u een van deze terugkerende taken?',
    ideas_sub:
      'Kies één terugkerende wekelijkse of maandelijkse taak. Dat is meestal het beste startpunt.',

    flow_caption: 'Voorbeeld · Complexe data omzetten naar verzendklare facturen',
    flow1_tag: '1. Ruwe data',
    flow1_text: 'Verspreide Excel-exports, urenlijsten of complexe tariefregels',
    flow2_tag: '2. Automatische controle',
    flow2_text: 'Past uw regels toe, signaleert ontbrekende gegevens, berekent totalen',
    flow3_tag: '3. Verzendklaar',
    flow3_text: 'Strakke pdf-facturen en samenvatting, klaar voor uw goedkeuring',

    idea1_title: 'Complexe data naar facturen & rapporten',
    idea1_body:
      'Zet complexe Excels met rekenregels om in nagekeken pdf-facturen, offertes of rapporten.',
    idea2_title: 'Pdf’s & formulieren naar uw systeem',
    idea2_body:
      'Hernoem en klasseer inkomende pdf’s automatisch en zet de kerngegevens direct in Excel of CRM.',
    idea3_title: 'Kruiscontroles & afstemming',
    idea3_body:
      'Koppel betalingen aan facturen, of toets binnengekomen dossiers aan contracten en regels.',
    idea4_title: 'Inbox-rust & conceptantwoorden',
    idea4_body:
      'Sorteer gedeelde mailboxen, haal bijlagen eruit en zet NL/FR/EN-conceptantwoorden klaar.',
    idea5_title: 'Stille dagelijkse controles',
    idea5_body:
      'Volg elke ochtend websites, wetgeving, prijzen of deadlines op en ontvang enkel een melding wanneer iets verandert.',
    idea6_title: 'Heldere webpagina’s & dashboards',
    idea6_body:
      'Maak van versnipperde tabellen of vaste updates een duidelijke webpagina voor uw team.',

    proof_num: '02 · Bewezen in de praktijk',
    proof_title: 'Wat ik al gebouwd en live gezet heb',
    proof_sub:
      'Echte systemen in productie, plus publieke webprojecten die u meteen kunt bekijken.',

    mmbb_sublabel: 'My Mobility Budget Butler (MMBB) · Belgisch Mobiliteitsbudget',
    mmbb_badge: 'Live in productie',

    mmbb1_eyebrow: 'Onkosten & regelcontrole',
    mmbb1_title: 'Automatische controle van onkosten & afstanden',
    mmbb1_body:
      'Leest ingediende pdf’s en foto’s van onkosten uit, toetst ze aan bedrijfsregels en wetgeving (en berekent zelfs echte wandelafstanden via Google Maps), keurt duidelijke dossiers automatisch goed en stuurt enkel twijfelgevallen of weigeringen naar medewerkers.',

    mmbb2_eyebrow: 'Documenten & CRM-invoer',
    mmbb2_title: 'Automatisch sorteren & uitlezen van pdf’s',
    mmbb2_body:
      'Herkent inkomende contracten en betalingsbewijzen, geeft pdf’s automatisch de juiste naam en map, haalt kerngegevens eruit (wie betaalde aan wie, hoeveel, wanneer) en werkt het CRM zelf bij.',

    mmbb3_eyebrow: 'Complexe historiek vergelijken',
    mmbb3_title: 'Jaarlijkse hernieuwingscontroles',
    mmbb3_body:
      'Vergelijkt nieuwe jaarlijkse aanvragen met eerdere contracten, betaaldata en wettelijke plafonds. Exacte overeenkomsten worden meteen goedgekeurd; afwijkingen gaan met een heldere uitleg naar het team.',

    mmbb4_eyebrow: 'Inbox- & support-copiloot · 6 weken',
    mmbb4_title: 'Interne assistent “Nestor” (NL / FR / EN)',
    mmbb4_body:
      'Combineert bedrijfshandleidingen met het dossier en de mailhistoriek van de klant om complexe vragen te beantwoorden en conceptantwoorden klaar te zetten in het Nederlands, Frans en Engels.',

    mmbb5_eyebrow: 'Wetgeving opvolgen · 7 weken',
    mmbb5_title: 'Dagelijkse monitor voor Belgische wetgeving',
    mmbb5_body:
      'Controleert elke ochtend om 06:00 zes officiële Belgische juridische en overheidsbronnen. Blijft volledig stil op rustige dagen; zodra een relevante regel verandert, toont de tool welke bedrijfsregels geraakt zijn en zet de nodige updates klaar.',

    public_eyebrow: 'Publiek webrapport · Gebouwd in 1 weekend (nov 2026)',
    public_title: 'Already Past Us: live voorbeeld van bouwsnelheid',
    public_cta: 'Bekijk de live site',
    public_body:
      'Een interactief onderzoeksrapport met bronvermelding en 8 zelfgebouwde grafieken over waar AI mensen voorbijsteekt en waar het nog tekortschiet (op eigen houtje faalt het nog bij zo’n 4 op 5 echte freelance-opdrachten). Gebouwd en live gezet in één weekend.',

    archive_label: 'Eerdere “State of AI”-edities (publieke reeks):',
    archive_dec: 'Dec 2025',
    archive_apr1: 'Apr 2026',
    archive_apr2: 'Apr 2026 (Essay)',
    archive_jul: 'Jul 2026',

    guard1_title: 'Routine automatisch, uitzonderingen nagekeken',
    guard1_body:
      'Bij MMBB worden duidelijke aanvragen automatisch goedgekeurd, terwijl elke weigering of uitzondering naar een medewerker gaat. Conceptmails vertrekken nooit vanzelf.',
    guard2_title: 'Centen per dossier, geen grote rekeningen',
    guard2_body:
      'Bij MMBB kosten automatische onkostencontroles minder dan €0,50 per 1.000 dossiers, en uitgebreide AI-antwoorden ongeveer €0,01 per vraag. Harde budgetlimieten voorkomen verrassingen.',
    guard3_title: 'Eerst getest op bestaande bestanden',
    guard3_body:
      'Voor iets live gaat, draaien we het in leesmodus op eerdere bestanden en vergelijken we het resultaat met dat van u. Pas als alles klopt, gaat het aan.',

    sec3_num: '03 · Beschikbaar voor projecten',
    sec3_title: 'Beschrijf kort om welke taak het gaat',
    cta_intro:
      'Ik neem freelance automatiseringsprojecten aan, groot of klein. Vertel me over een terugkerende taak uit uw week of maand, dan zeg ik eerlijk of automatiseren loont.',
    step1_text:
      'Stuur me 3 korte zinnen op LinkedIn over een taak die u liever niet meer met de hand doet.',
    step2_text:
      'U krijgt een eerlijk antwoord of automatisering echt tijd wint, of dat iets eenvoudigers beter werkt.',
    step3_text:
      'We testen eerst een kleine, veilige versie op echte voorbeelden voor iets live gaat.',
    linkedin_cta: 'Stuur een bericht op LinkedIn',
    github_link: 'GitHub (ADevBelgie)',
    apu_link: 'already-past-us.vercel.app',
    footer_note: 'Freelance in België · Praktische automatisering.'
  },

  fr: {
    _title: 'Arthur Devresse — Automatisation & IA pratique',
    _description:
      'Exemples concrets d’automatisation, d’outils données-vers-factures et de processus en arrière-plan construits en quelques jours ou semaines.',

    skip_link: 'Aller au contenu',
    topbar_contact: 'Contact',
    pdf_btn: 'PDF',
    lang_group_aria: 'Langue',
    pdf_btn_aria: 'Enregistrer ou imprimer en PDF A4',
    pdf_btn_title: 'Ouvrir l’impression pour enregistrer en PDF A4',
    theme_to_dark: 'Passer en thème sombre',
    theme_to_light: 'Passer en thème clair',

    author_role: 'Développeur freelance en automatisation · Belgique',
    hero_title: 'L’automatisation sur mesure prenait des mois. Plus aujourd’hui.',
    hero_lead:
      'Avec les outils de développement IA actuels, un développeur expérimenté peut livrer en quelques jours ou semaines ce qui demandait autrefois une agence. Je transforme vos fichiers Excel complexes, contrôles répétitifs et boîtes mail saturées en outils discrets en arrière-plan.',
    hero_contact_cta: 'Une tâche en tête\u00A0? Aller au contact',

    fact1_val: '6 à 7 semaines',
    fact1_label: 'D’une page blanche à des apps en production chez My Mobility Budget Butler (MMBB)',
    fact2_val: '1 week-end',
    fact2_label: 'Pour concevoir et publier un rapport web interactif avec 8 graphiques',
    fact3_val: 'Moins de 0,50\u00A0€ / 1\u00A0000',
    fact3_label: 'Coût IA pour le contrôle automatique de reçus chez MMBB, avec plafonds stricts',

    ideas_num: '01 · Ce que je peux automatiser pour vous',
    ideas_title: 'Une de ces tâches revient-elle souvent chez vous\u00A0?',
    ideas_sub:
      'Choisissez une tâche hebdomadaire ou mensuelle répétitive. C’est souvent le meilleur point de départ.',

    flow_caption: 'Exemple · Transformer des données complexes en factures prêtes à envoyer',
    flow1_tag: '1. Données brutes',
    flow1_text: 'Exports Excel complexes, feuilles d’heures ou grilles tarifaires',
    flow2_tag: '2. Contrôle automatique',
    flow2_text: 'Applique vos règles, repère les lignes manquantes, calcule les totaux',
    flow3_tag: '3. Prêt à envoyer',
    flow3_text: 'Factures PDF propres et récapitulatif prêts pour votre validation',

    idea1_title: 'Données complexes vers factures et rapports',
    idea1_body:
      'Transformez vos tableurs à règles multiples en factures PDF vérifiées, devis ou rapports clients.',
    idea2_title: 'PDF et formulaires vers vos outils',
    idea2_body:
      'Renommez et classez les PDF entrants, puis injectez les chiffres clés dans Excel ou votre CRM.',
    idea3_title: 'Recoupements et contrôles',
    idea3_body:
      'Rapprochez paiements et factures, ou vérifiez les dossiers reçus par rapport à vos contrats et règles.',
    idea4_title: 'Boîte mail allégée et brouillons',
    idea4_body:
      'Triez les boîtes partagées, extrayez les pièces jointes et préparez des réponses NL/FR/EN selon vos règles.',
    idea5_title: 'Veille quotidienne silencieuse',
    idea5_body:
      'Surveillez sites web, lois, tarifs ou échéances chaque matin et ne recevez une alerte qu’en cas de changement.',
    idea6_title: 'Tableaux de bord web clairs',
    idea6_body:
      'Transformez des tableaux dispersés ou suivis réguliers en une page web simple et lisible pour votre équipe.',

    proof_num: '02 · Prouvé sur le terrain',
    proof_title: 'Ce que j’ai déjà conçu et mis en production',
    proof_sub:
      'Des systèmes réels en exploitation, ainsi que des projets web publics à consulter directement.',

    mmbb_sublabel: 'My Mobility Budget Butler (MMBB) · Budget mobilité belge',
    mmbb_badge: 'En production',

    mmbb1_eyebrow: 'Frais & contrôle de règles',
    mmbb1_title: 'Vérification automatique des reçus et distances',
    mmbb1_body:
      'Lit les PDF et photos de frais, vérifie les règles internes et légales (y compris les distances à pied réelles via Google Maps), approuve automatiquement les demandes conformes et ne transmet que les refus ou cas limites à l’équipe.',

    mmbb2_eyebrow: 'Documents & saisie CRM',
    mmbb2_title: 'Tri et extraction de documents',
    mmbb2_body:
      'Reconnaît les contrats et preuves de paiement reçus, renomme et classe proprement les PDF, extrait les données clés (payeur, bénéficiaire, montant, date) et met le CRM à jour automatiquement.',

    mmbb3_eyebrow: 'Comparaison d’historique complexe',
    mmbb3_title: 'Contrôle des renouvellements annuels',
    mmbb3_body:
      'Compare les nouvelles déclarations aux anciens contrats, dates de paiement et plafonds légaux. Les dossiers conformes sont validés automatiquement\u00A0; les écarts partent vers l’équipe avec une explication claire.',

    mmbb4_eyebrow: 'Copilote mail & support · 6 semaines',
    mmbb4_title: 'Assistant interne «\u00A0Nestor\u00A0» (NL / FR / EN)',
    mmbb4_body:
      'Croise les guides internes avec le dossier et l’historique d’e-mails du client pour répondre aux questions complexes et préparer des projets de réponse en néerlandais, français et anglais.',

    mmbb5_eyebrow: 'Veille réglementaire · 7 semaines',
    mmbb5_title: 'Veille quotidienne sur la loi belge',
    mmbb5_body:
      'Surveille chaque matin à 06h00 six sources juridiques et publiques belges. Totalement silencieux les jours calmes\u00A0; dès qu’une règle évolue, l’outil indique les règles internes impactées et prépare les mises à jour.',

    public_eyebrow: 'Rapport web public · Réalisé en 1 week-end (nov. 2026)',
    public_title: 'Already Past Us\u00A0: exemple concret de vitesse de réalisation',
    public_cta: 'Voir le site',
    public_body:
      'Un rapport interactif sourcé avec 8 graphiques sur mesure, montrant où l’IA dépasse les humains et où elle échoue encore (environ 4 missions freelance sur 5 en autonomie). Conçu et mis en ligne en un week-end.',

    archive_label: 'Éditions précédentes «\u00A0State of AI\u00A0» (série publique)\u00A0:',
    archive_dec: 'Déc. 2025',
    archive_apr1: 'Avr. 2026',
    archive_apr2: 'Avr. 2026 (Essai)',
    archive_jul: 'Juil. 2026',

    guard1_title: 'Routine automatisée, exceptions vérifiées',
    guard1_body:
      'Chez MMBB, les dossiers simples sont approuvés seuls tandis que chaque refus ou cas particulier passe par un collaborateur. Les brouillons d’e-mails ne partent jamais sans validation.',
    guard2_title: 'Quelques centimes par dossier',
    guard2_body:
      'Chez MMBB, le contrôle automatique de reçus coûte moins de 0,50\u00A0€ pour 1\u00A0000 dossiers, et une réponse IA complète environ 0,01\u00A0€. Des plafonds stricts évitent toute mauvaise surprise.',
    guard3_title: 'Testé d’abord sur vos anciens fichiers',
    guard3_body:
      'Avant toute mise en ligne, l’outil tourne en lecture seule sur vos dossiers passés pour comparer ses résultats aux vôtres. Rien ne touche vos données réelles tant que tout ne concorde pas.',

    sec3_num: '03 · Disponible pour vos projets',
    sec3_title: 'Décrivez brièvement la tâche concernée',
    cta_intro:
      'Je réalise des projets d’automatisation en freelance, petits ou grands. Parlez-moi d’une tâche répétitive de votre semaine ou de votre mois, et je vous dirai honnêtement si cela vaut la peine de l’automatiser.',
    step1_text:
      'Envoyez-moi 3 courtes phrases sur LinkedIn au sujet d’une tâche que vous préférez ne plus faire à la main.',
    step2_text:
      'Vous recevez un avis franc\u00A0: si l’automatisation fait vraiment gagner du temps, ou si une solution plus simple suffit.',
    step3_text:
      'Nous testons d’abord une petite version sûre sur vos vrais exemples avant d’activer quoi que ce soit.',
    linkedin_cta: 'M’écrire sur LinkedIn',
    github_link: 'GitHub (ADevBelgie)',
    apu_link: 'already-past-us.vercel.app',
    footer_note: 'Freelance en Belgique · Automatisation pratique.'
  }
};

function isSupportedLang(lang) {
  return SUPPORTED_LANGS.indexOf(lang) !== -1;
}

function resolveInitialLanguage() {
  try {
    var params = new URLSearchParams(window.location.search);
    var queryLang = params.get('lang');
    if (isSupportedLang(queryLang)) {
      return queryLang;
    }
  } catch (e) {}

  try {
    var saved = localStorage.getItem('ap-lang');
    if (isSupportedLang(saved)) {
      return saved;
    }
  } catch (e) {}

  var browserLang = (navigator.language || '').toLowerCase();
  if (browserLang.indexOf('nl') === 0) {
    return 'nl';
  }
  if (browserLang.indexOf('fr') === 0) {
    return 'fr';
  }
  return 'en';
}

function isDarkActive() {
  var current = document.documentElement.getAttribute('data-theme');
  if (current === 'dark') {
    return true;
  }
  if (current === 'light') {
    return false;
  }
  return Boolean(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
}

function syncThemeUI(lang) {
  var dark = isDarkActive();
  var activeLang = isSupportedLang(lang) ? lang : document.documentElement.lang || 'en';
  var dict = TRANSLATIONS[activeLang] || TRANSLATIONS.en;

  var themeBtn = document.getElementById('theme-btn');
  if (themeBtn) {
    var label = dark ? dict.theme_to_light : dict.theme_to_dark;
    themeBtn.setAttribute('aria-label', label);
    themeBtn.setAttribute('title', label);
  }

  var color = dark ? '#15130f' : '#f6f1e7';
  var explicitTheme = document.documentElement.getAttribute('data-theme');
  if (explicitTheme === 'light' || explicitTheme === 'dark') {
    var metas = document.querySelectorAll('meta[name="theme-color"]');
    for (var i = 0; i < metas.length; i++) {
      metas[i].setAttribute('content', color);
    }
  }
}

function applyLanguage(lang, syncUrl) {
  var activeLang = isSupportedLang(lang) ? lang : 'en';
  var dict = TRANSLATIONS[activeLang];
  document.documentElement.lang = activeLang;
  document.title = dict._title;

  var metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', dict._description);
  }

  var nodes = document.querySelectorAll('[data-i18n]');
  for (var i = 0; i < nodes.length; i++) {
    var key = nodes[i].getAttribute('data-i18n');
    if (Object.prototype.hasOwnProperty.call(dict, key)) {
      nodes[i].textContent = dict[key];
    }
  }

  var ariaNodes = document.querySelectorAll('[data-i18n-aria]');
  for (var j = 0; j < ariaNodes.length; j++) {
    var ariaKey = ariaNodes[j].getAttribute('data-i18n-aria');
    if (Object.prototype.hasOwnProperty.call(dict, ariaKey)) {
      ariaNodes[j].setAttribute('aria-label', dict[ariaKey]);
    }
  }

  var titleNodes = document.querySelectorAll('[data-i18n-title]');
  for (var k = 0; k < titleNodes.length; k++) {
    var titleKey = titleNodes[k].getAttribute('data-i18n-title');
    if (Object.prototype.hasOwnProperty.call(dict, titleKey)) {
      titleNodes[k].setAttribute('title', dict[titleKey]);
    }
  }

  for (var m = 0; m < SUPPORTED_LANGS.length; m++) {
    var code = SUPPORTED_LANGS[m];
    var btn = document.getElementById('lang-' + code);
    if (btn) {
      var isCurrent = code === activeLang;
      btn.classList.toggle('is-active', isCurrent);
      btn.setAttribute('aria-pressed', isCurrent ? 'true' : 'false');
    }
  }

  syncThemeUI(activeLang);

  try {
    localStorage.setItem('ap-lang', activeLang);
  } catch (e) {}

  if (syncUrl) {
    try {
      var url = new URL(window.location.href);
      url.searchParams.set('lang', activeLang);
      window.history.replaceState(null, '', url.toString());
    } catch (e) {}
  }
}

function toggleTheme() {
  var next = isDarkActive() ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  try {
    localStorage.setItem('ap-theme', next);
  } catch (e) {}
  syncThemeUI();
}

function wireConfigLinks() {
  var linkedinBtn = document.getElementById('linkedin-cta');
  if (linkedinBtn) {
    linkedinBtn.setAttribute('href', CONFIG.linkedinUrl);
  }
  var printLinkedin = document.getElementById('print-linkedin-url');
  if (printLinkedin) {
    printLinkedin.textContent = CONFIG.linkedinUrl;
  }
  var githubLink = document.getElementById('github-link');
  if (githubLink) {
    githubLink.setAttribute('href', CONFIG.githubUrl);
  }
  var apuLink = document.getElementById('already-past-us-link');
  if (apuLink) {
    apuLink.setAttribute('href', CONFIG.alreadyPastUsUrl);
  }
  var apuSecondary = document.getElementById('apu-secondary-link');
  if (apuSecondary) {
    apuSecondary.setAttribute('href', CONFIG.alreadyPastUsUrl);
  }

  var portrait = document.getElementById('author-portrait');
  if (portrait) {
    if (CONFIG.portraitUrl) {
      portrait.addEventListener('load', function () {
        portrait.hidden = false;
      });
      portrait.addEventListener('error', function () {
        portrait.hidden = true;
      });
      if (portrait.getAttribute('src') !== CONFIG.portraitUrl) {
        portrait.setAttribute('src', CONFIG.portraitUrl);
      }
    } else {
      portrait.hidden = true;
    }
  }

  var emailCta = document.getElementById('email-cta');
  var printEmailItem = document.getElementById('print-email-item');
  var printEmailVal = document.getElementById('print-email-val');
  if (emailCta && CONFIG.email) {
    emailCta.setAttribute('href', 'mailto:' + CONFIG.email);
    emailCta.textContent = CONFIG.email;
    emailCta.hidden = false;
    if (printEmailItem && printEmailVal) {
      printEmailVal.textContent = CONFIG.email;
      printEmailItem.hidden = false;
    }
  }
}

function syncScrollTopbar() {
  var topbar = document.querySelector('.topbar');
  if (topbar) {
    topbar.classList.toggle('is-scrolled', window.scrollY > 80);
  }
}

function init() {
  wireConfigLinks();
  applyLanguage(resolveInitialLanguage(), false);
  syncScrollTopbar();
  window.addEventListener('scroll', syncScrollTopbar, { passive: true });

  for (var i = 0; i < SUPPORTED_LANGS.length; i++) {
    (function (code) {
      var btn = document.getElementById('lang-' + code);
      if (btn) {
        btn.addEventListener('click', function () {
          applyLanguage(code, true);
        });
      }
    })(SUPPORTED_LANGS[i]);
  }

  var pdfBtn = document.getElementById('pdf-btn');
  if (pdfBtn) {
    pdfBtn.addEventListener('click', function () {
      window.print();
    });
  }

  var themeBtn = document.getElementById('theme-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
