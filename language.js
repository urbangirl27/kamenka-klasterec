(function () {
'use strict';

const translations = {
  en: {
    navHome: 'Home',
    navAbout: 'About Us',
    navLocation: 'Location',
    navContact: 'Contact',
    switchEnglish: 'EN',
    switchCzech: 'CZ',

    homeEyebrow: 'A quiet retreat',
    homeTitle: 'Rest beneath the beams',
    homeLead: "[Ivan's introductory line about the property — what makes it special, and for whom.]",
    enquire: 'Enquire now',
    homeCharacterTitle: 'White walls, old beams',
    homeCharacterText: "[Ivan's description of the property's character — the brick, the beams, what the space feels like to walk into.]",
    placeholderCopy: "Placeholder — replace with Ivan's copy once received.",
    homeComfortTitle: 'Comfortable, well equipped, and everything you need',
    homeComfort1: 'We offer modern accommodation in a quiet building with flats across three storeys, making it an ideal choice for a group, for long-term stays, or for corporate travellers passing through.',
    homeComfort2: 'On the first floor, a separate apartment for three people includes a kitchen and a private bathroom with a shower and a toilet.',
    homeComfort3: 'The second floor and the attached attic hold three separate double rooms. The attic has its own private bathroom with a shower and a toilet. The second floor also has a spacious kitchen with a dining table, a television, and a private bathroom with a bathtub and a toilet, along with a utility room with a washing machine and dryer.',
    homeComfort4: 'The attic and second floor can be adapted to suit individual requirements, for up to ten people.',
    galleryTitle: 'A closer look',

    aboutEyebrow: 'Who we are',
    aboutTitle: 'The story behind the lodge',
    aboutHistoryTitle: 'A little history behind Kamenka',
    aboutText1: 'The original factory buildings of the second oldest porcelain factory in Bohemia, founded in 1794, once stood in the city centre along what is now Chomutovská Street, in the very place where Kamenka Street now runs. Factory walls first rose beside these historic streets at the end of the eighteenth century.',
    aboutText2: 'Our building served as a warehouse for the plaster moulds used in casting and shaping porcelain and ceramics, a key part of producing both decorative and everyday porcelain.',
    aboutText3: 'Production finally moved from this old centre in 1967, to a new and modern plant on the outskirts of Klášterec, towards Kadaň. The old porcelain factory complex in the centre was gradually demolished, and the last remains of its buildings and chimneys were removed by controlled demolition in 2001.',
    aboutText4: 'The site of the original factory is now largely occupied by Lidl and Tesco stores, behind which our building stands.',

    locationEyebrow: 'Getting here',
    locationTitle: 'Set within [region/area]',
    locationLead: "[Ivan's note on what is nearby — nature, towns, distance from key landmarks.]",
    nearbyTitle: 'What is nearby',
    nearbyText: "[Ivan's list or description of nearby attractions, walks, towns, transport.]",

    contactLead: 'Do you have a question or would you like to book a stay? Fill out the form below and we will get back to you within 24 hours.',
    contactDirect: 'You can also contact us directly by phone: +420 606 445 681 or email: kamenka.klasterec@gmail.com',
    nameLabel: 'Name',
    emailLabel: 'Email',
    datesLabel: 'Dates you are interested in',
    messageLabel: 'Message',
    privacyCheckbox: 'I have read and understood the',
    privacyPolicyLink: 'Privacy Policy',
    andWord: 'and',
    termsLink: 'Terms and Conditions',
    sendButton: 'Send enquiry',

    confirmationTitle: 'Good day',
    confirmationText1: 'Thank you for your interest in accommodation at Kamenka in Klášterec nad Ohří.',
    confirmationText2: 'We will send you a quote or booking confirmation as soon as possible, usually within 24 hours.',
    confirmationText3: 'For urgent questions, you can contact us by phone: +420 606 445 681.',
    confirmationSignoff: 'Best regards, Kamenka team',
    confirmationEmail: 'kamenka.klasterec@gmail.com',
    confirmationClose: 'Close',

    privTitle: 'PRIVACY POLICY',
    privUpdated: 'Last updated 20 September 2026',
    privIntro: "This Privacy Notice for Ivan Kolar (doing business as Kamenka Klasterec) ('we', 'us', or 'our'), describes how and why we might access, collect, store, use, and/or share ('process') your personal information when you use our services ('Services'), including when you:",
    privIntroA: 'Visit our website at <a href="https://kamenka-klasterec.com">kamenka-klasterec.com</a>, or any website of ours that links to this Privacy Notice',
    privIntroB: 'Use Kamenka Klasterec — self-catering accommodation in Klášterec nad Ohří, Czech Republic, offering short-term and long-term stays for individuals, groups, and corporate travellers, with furnished rooms and apartments including kitchens, bathrooms, and other facilities',
    privIntroC: 'Engage with us in other related ways, including any marketing or events',
    privQuestions: 'Questions or concerns? Reading this Privacy Notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:kamenka.klasterec@gmail.com">kamenka.klasterec@gmail.com</a>.',

    privH1: '1. WHAT INFORMATION DO WE COLLECT?',
    privC1: 'We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.',
    privC2: 'The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:',
    privC3: 'names',
    privC4: 'email addresses',
    privC5: 'dates of stay / booking dates',
    privC6: 'message / enquiry details',
    privC7: 'Sensitive Information. We do not process sensitive information.',
    privC8: 'All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.',

    privH2: '2. HOW DO WE PROCESS YOUR INFORMATION?',
    privU1: 'We process your personal information for a variety of reasons, depending on how you interact with our Services, including:',
    privU2: '<strong>To deliver and facilitate delivery of services to the user.</strong> We may process your information to provide you with the requested service. (Retention period: 2 years)',
    privU3: '<strong>To respond to user inquiries.</strong> We may process your information to respond to your inquiries and solve any potential issues. (Retention period: 1 year)',
    privU4: '<strong>To send administrative information to you.</strong> We may process your information to send you details about our products and services. (Retention period: 2 years)',
    privU5: '<strong>To protect our Services.</strong> We may process your information as part of our efforts to keep our Services safe and secure. (Retention period: 1 year)',
    privU6: "<strong>To save or protect an individual's vital interest.</strong> We may process your information when necessary to prevent harm.",

    privH3: '3. WHAT LEGAL BASES DO WE RELY ON?',
    privL1: 'The GDPR and UK GDPR require us to explain the valid legal bases we rely on to process your personal information. We may rely on the following:',
    privL2: '<strong>Consent.</strong> You can withdraw your consent at any time by contacting us.',
    privL3: '<strong>Performance of a Contract.</strong> To fulfil our contractual obligations to you, including providing our Services.',
    privL4: '<strong>Legitimate Interests.</strong> Including to diagnose problems and/or prevent fraudulent activities.',
    privL5: '<strong>Legal Obligations.</strong> To comply with our legal obligations, such as cooperating with a law enforcement body.',
    privL6: '<strong>Vital Interests.</strong> To protect your vital interests or those of a third party.',

    privH4: '4. WHEN AND WITH WHOM DO WE SHARE YOUR INFORMATION?',
    privS1: 'We may share your data with third-party vendors, service providers, contractors, or agents ("third parties") who perform services for us or on our behalf.',
    privS2: 'The third parties we may share personal information with are as follows:',
    privS3: '<strong>Functionality and Infrastructure Optimisation</strong> — Formspree and Termly.io',
    privS4: '<strong>Website Hosting</strong> — GitHub Pages and GitHub',
    privS5: '<strong>Business Transfers.</strong> We may share or transfer your information in connection with a merger, sale of company assets, financing, or acquisition.',

    privH5: '5. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?',
    privI1: 'Our servers are located in the United States. Your information may be transferred to, stored by, and processed in the United States and other countries.',
    privI2: 'If you are a resident in the EEA, UK, or Switzerland, we will take all necessary measures to protect your personal information in accordance with this Privacy Notice and applicable law.',
    privI3: "We rely on the European Commission's Standard Contractual Clauses for transfers of personal information to our third-party providers. Our Data Processing Agreements that include Standard Contractual Clauses are available here: N/A.",

    privH6: '6. HOW LONG DO WE KEEP YOUR INFORMATION?',
    privR1: 'We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law.',
    privR2: 'When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymise such information.',

    privH7: '7. HOW DO WE KEEP YOUR INFORMATION SAFE?',
    privSafe1: 'We have implemented appropriate and reasonable technical and organisational security measures. However, no electronic transmission over the Internet can be guaranteed to be 100% secure.',

    privH8: '8. DO WE COLLECT INFORMATION FROM MINORS?',
    privM1: 'We do not knowingly collect, solicit data from, or market to children under 18 years of age. If you become aware of any data we may have collected from children under 18, please contact us at <a href="mailto:kamenka.klasterec@gmail.com">kamenka.klasterec@gmail.com</a>.',

    privH9: '9. WHAT ARE YOUR PRIVACY RIGHTS?',
    privRt1: 'In some regions (like the EEA, UK, and Switzerland), you have certain rights under applicable data protection laws, including the right to request access, rectification, erasure, restriction of processing, data portability, and to object to processing.',
    privRt2: 'You can make such a request by contacting us at <a href="mailto:kamenka.klasterec@gmail.com">kamenka.klasterec@gmail.com</a> or via <a href="https://kamenka-klasterec.com/contact.html">our contact page</a>.',
    privRt3: "If you are located in the UK and are unhappy with how we have handled your personal information, you can complain to the Information Commissioner's Office at <a href=\"http://ico.org.uk/make-a-complaint\">ico.org.uk/make-a-complaint</a>.",
    privRt4: 'If you are located in the EEA or UK, you have the right to complain to your Member State data protection authority or the UK data protection authority.',
    privRt5: 'If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time by contacting us.',

    privH10: '10. CONTROLS FOR DO-NOT-TRACK FEATURES',
    privDnt1: 'We do not currently respond to Do-Not-Track (DNT) browser signals, as no uniform technology standard has been finalised.',

    privH11: '11. DO WE MAKE UPDATES TO THIS NOTICE?',
    privUpd1: 'We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Last updated" date at the top of this notice.',

    privH12: '12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?',
    privCt1: 'If you have questions or comments about this notice, you may email us at <a href="mailto:kamenka.klasterec@gmail.com">kamenka.klasterec@gmail.com</a>, or contact us by post at:',
    privCzechia: 'Czechia',

    privH13: '13. HOW CAN YOU REVIEW, UPDATE, OR DELETE YOUR DATA?',
    privReq1: 'To request to review, update, or delete your personal information, please visit: <a href="https://kamenka-klasterec.com/contact.html">https://kamenka-klasterec.com/contact.html</a>.'
  },

  cz: {
    navHome: 'Domů',
    navAbout: 'O nás',
    navLocation: 'Poloha',
    navContact: 'Kontakt',
    switchEnglish: 'EN',
    switchCzech: 'CZ',

    homeEyebrow: 'Klidné útočiště',
    homeTitle: 'Odpočiňte si pod trámy',
    homeLead: '[Ivanův úvodní text o ubytování — co je na něm výjimečné a pro koho je určeno.]',
    enquire: 'Nezávazná poptávka',
    homeCharacterTitle: 'Bílé stěny, staré trámy',
    homeCharacterText: '[Ivanův popis charakteru ubytování — cihly, trámy a atmosféra prostoru.]',
    placeholderCopy: 'Zástupný text — bude nahrazen Ivanovým textem po jeho obdržení.',
    homeComfortTitle: 'Pohodlné, dobře vybavené a se vším, co potřebujete',
    homeComfort1: 'Nabízíme moderní ubytování v klidné budově s apartmány rozmístěnými ve třech podlažích. Je ideální pro skupiny, delší pobyty i firemní cestující.',
    homeComfort2: 'V prvním patře se nachází samostatný apartmán pro tři osoby s kuchyní a vlastní koupelnou se sprchou a toaletou.',
    homeComfort3: 'Ve druhém patře a přilehlém podkroví jsou tři samostatné dvoulůžkové pokoje. Podkroví má vlastní koupelnu se sprchou a toaletou. Ve druhém patře je také prostorná kuchyň s jídelním stolem, televizí a vlastní koupelna s vanou a toaletou spolu s technickou místností s pračkou a sušičkou.',
    homeComfort4: 'Podkroví a druhé patro lze přizpůsobit individuálním potřebám až pro deset osob.',
    galleryTitle: 'Prohlédněte si více',

    aboutEyebrow: 'Kdo jsme',
    aboutTitle: 'Příběh tohoto domu',
    aboutHistoryTitle: 'Trocha historie Kamenky',
    aboutText1: 'Původní tovární budovy druhé nejstarší porcelánky v Čechách, založené v roce 1794, stály kdysi v centru města podél dnešní Chomutovské ulice, přímo v místech, kudy dnes vede Kamenka. Zdi továrny zde začaly růst na konci 18. století.',
    aboutText2: 'Naše budova sloužila jako sklad sádrových forem používaných k odlévání a tvarování porcelánu a keramiky, což byla důležitá součást výroby dekorativního i běžného porcelánu.',
    aboutText3: 'Výroba se z tohoto starého centra definitivně přestěhovala v roce 1967 do nového a moderního závodu na okraji Klášterce směrem na Kadaň. Starý komplex porcelánky v centru byl postupně demolován a poslední zbytky budov a komínů byly odstraněny řízeným odstřelem v roce 2001.',
    aboutText4: 'Na místě původní továrny dnes z velké části stojí prodejny Lidl a Tesco. Za nimi se nachází naše budova.',

    locationEyebrow: 'Jak se k nám dostanete',
    locationTitle: 'Nacházíme se v [region/oblasti]',
    locationLead: '[Ivanův text o okolí — příroda, města a vzdálenosti od důležitých míst.]',
    nearbyTitle: 'Co je v okolí',
    nearbyText: '[Ivanův seznam nebo popis zajímavostí, výletů, měst a dopravy v okolí.]',

    contactLead: 'Máte dotaz nebo si chcete rezervovat pobyt? Vyplňte formulář níže a my se Vám ozveme zpět nejpozději do 24 hodin.',
    contactDirect: 'Můžete nás také kontaktovat přímo na telefonu: +420 606 445 681 nebo e-mailem: kamenka.klasterec@gmail.com',
    nameLabel: 'Jméno',
    emailLabel: 'E-mail',
    datesLabel: 'Termín, o který máte zájem',
    messageLabel: 'Zpráva',
    privacyCheckbox: 'Přečetl/a jsem si',
    privacyPolicyLink: 'Zásady ochrany osobních údajů',
    andWord: 'a',
    termsLink: 'Obchodní podmínky',
    sendButton: 'Odeslat poptávku',

    confirmationTitle: 'Dobrý den',
    confirmationText1: 'Děkujeme za váš zájem o ubytování v Kamence v Klášterci nad Ohří.',
    confirmationText2: 'Cenovou nabídku nebo potvrzení rezervace vám zašleme co nejdříve, obvykle do 24 hodin.',
    confirmationText3: 'V případě urgentních dotazů nás můžete kontaktovat na telefonu: +420 606 445 681.',
    confirmationSignoff: 'S pozdravem, Kamenka tým',
    confirmationEmail: 'kamenka.klasterec@gmail.com',
    confirmationClose: 'Zavřít',

    privTitle: 'ZÁSADY OCHRANY OSOBNÍCH ÚDAJŮ',
    privUpdated: 'Naposledy aktualizováno 20. září 2026',
    privIntro: "Tyto Zásady ochrany osobních údajů společnosti Ivan Kolar (podnikající pod obchodním názvem Kamenka Klasterec) ('my', 'nás' nebo 'naše') popisují, jak a proč můžeme přistupovat k vašim osobním údajům, shromažďovat je, ukládat, používat a/nebo sdílet ('zpracovávat'), když využíváte naše služby ('Služby'), včetně situací, kdy:",
    privIntroA: 'Navštívíte naše webové stránky na adrese <a href="https://kamenka-klasterec.com">kamenka-klasterec.com</a>, nebo jakékoli jiné naše webové stránky, které na tyto Zásady odkazují',
    privIntroB: 'Využíváte Kamenka Klasterec — ubytování s vlastní kuchyní v Klášterci nad Ohří, nabízející krátkodobé i dlouhodobé pobyty pro jednotlivce, skupiny a firemní cestující, se zařízenými pokoji a apartmány včetně kuchyní a koupelen',
    privIntroC: 'Komunikujete s námi jiným souvisejícím způsobem, včetně marketingu nebo akcí',
    privQuestions: 'Máte otázky nebo připomínky? Přečtení těchto Zásad vám pomůže porozumět vašim právům. Pokud s našimi zásadami nesouhlasíte, nevyužívejte prosím naše Služby. Máte-li dotazy, kontaktujte nás na <a href="mailto:kamenka.klasterec@gmail.com">kamenka.klasterec@gmail.com</a>.',

    privH1: '1. JAKÉ ÚDAJE SHROMAŽĎUJEME?',
    privC1: 'Osobní údaje, které nám dobrovolně poskytnete, shromažďujeme, když projevíte zájem o informace o nás nebo našich Službách, nebo když nás kontaktujete.',
    privC2: 'Shromažďované osobní údaje mohou zahrnovat:',
    privC3: 'jméno',
    privC4: 'e-mailovou adresu',
    privC5: 'termín pobytu / rezervace',
    privC6: 'obsah zprávy / poptávky',
    privC7: 'Citlivé údaje. Citlivé údaje nezpracováváme.',
    privC8: 'Veškeré osobní údaje, které nám poskytnete, musí být pravdivé, úplné a přesné.',

    privH2: '2. JAK VAŠE ÚDAJE ZPRACOVÁVÁME?',
    privU1: 'Vaše osobní údaje zpracováváme z různých důvodů, včetně:',
    privU2: '<strong>Poskytnutí a zajištění dodání služby uživateli.</strong> Vaše údaje můžeme zpracovávat za účelem poskytnutí požadované služby. (Doba uchovávání: 2 roky)',
    privU3: '<strong>Vyřízení dotazů.</strong> Za účelem odpovědi na vaše dotazy. (Doba uchovávání: 1 rok)',
    privU4: '<strong>Zaslání administrativních informací.</strong> (Doba uchovávání: 2 roky)',
    privU5: '<strong>Ochrana našich Služeb.</strong> Včetně prevence podvodů. (Doba uchovávání: 1 rok)',
    privU6: '<strong>Ochrana životně důležitých zájmů.</strong> Je-li to nezbytné k předcházení újmě.',

    privH3: '3. O JAKÉ PRÁVNÍ ZÁKLADY SE OPÍRÁME?',
    privL1: 'GDPR a UK GDPR nám ukládají vysvětlit právní základy, o které se opíráme:',
    privL2: '<strong>Souhlas.</strong> Svůj souhlas můžete kdykoli odvolat.',
    privL3: '<strong>Plnění smlouvy.</strong> Ke splnění našich smluvních závazků, včetně poskytování Služeb.',
    privL4: '<strong>Oprávněné zájmy.</strong> Včetně diagnostiky problémů a prevence podvodných aktivit.',
    privL5: '<strong>Plnění zákonných povinností.</strong> Například spolupráce s orgány činnými v trestním řízení.',
    privL6: '<strong>Životně důležité zájmy.</strong> Ochrana vašich zájmů nebo zájmů třetí strany.',

    privH4: '4. KDY A S KÝM SDÍLÍME VAŠE ÚDAJE?',
    privS1: 'Vaše údaje můžeme sdílet s dodavateli, poskytovateli služeb nebo zástupci ("třetí strany"), kteří pro nás vykonávají služby.',
    privS2: 'Třetí strany, se kterými můžeme osobní údaje sdílet:',
    privS3: '<strong>Optimalizace funkčnosti a infrastruktury</strong> — Formspree a Termly.io',
    privS4: '<strong>Hosting webových stránek</strong> — GitHub Pages a GitHub',
    privS5: '<strong>Převod obchodní činnosti.</strong> V souvislosti s fúzí, prodejem majetku nebo akvizicí.',

    privH5: '5. JSOU VAŠE ÚDAJE PŘEDÁVÁNY DO ZAHRANIČÍ?',
    privI1: 'Naše servery se nacházejí ve Spojených státech amerických. Vaše údaje mohou být zpracovány tam i v dalších zemích.',
    privI2: 'Pokud máte bydliště v EHP, UK nebo Švýcarsku, přijmeme veškerá nezbytná opatření k ochraně vašich osobních údajů.',
    privI3: 'Opíráme se o standardní smluvní doložky Evropské komise. Naše smlouvy o zpracování údajů jsou k dispozici zde: N/A.',

    privH6: '6. JAK DLOUHO VAŠE ÚDAJE UCHOVÁVÁME?',
    privR1: 'Vaše osobní údaje uchováváme pouze po dobu nezbytnou pro účely uvedené v těchto Zásadách, pokud zákon nevyžaduje jinak.',
    privR2: 'Jakmile pomine náš oprávněný důvod ke zpracování, údaje smažeme nebo anonymizujeme.',

    privH7: '7. JAK CHRÁNÍME VAŠE ÚDAJE?',
    privSafe1: 'Zavedli jsme přiměřená technická a organizační bezpečnostní opatření. Žádný přenos dat přes internet však nelze zaručit jako 100% bezpečný.',

    privH8: '8. SHROMAŽĎUJEME ÚDAJE OD NEZLETILÝCH?',
    privM1: 'Vědomě neshromažďujeme údaje od dětí mladších 18 let. Pokud se dozvíte o takových údajích, kontaktujte nás na <a href="mailto:kamenka.klasterec@gmail.com">kamenka.klasterec@gmail.com</a>.',

    privH9: '9. JAKÁ MÁTE PRÁVA NA OCHRANU SOUKROMÍ?',
    privRt1: 'V některých regionech (EHP, UK, Švýcarsko) máte právo na přístup, opravu, výmaz, omezení zpracování, přenositelnost údajů a vznesení námitky.',
    privRt2: 'Žádost můžete podat na <a href="mailto:kamenka.klasterec@gmail.com">kamenka.klasterec@gmail.com</a> nebo přes <a href="https://kamenka-klasterec.com/contact.html">náš kontaktní formulář</a>.',
    privRt3: "Pokud se nacházíte ve Spojeném království, můžete si stěžovat u Information Commissioner's Office na <a href=\"http://ico.org.uk/make-a-complaint\">ico.org.uk/make-a-complaint</a>.",
    privRt4: 'V EHP nebo UK máte právo podat stížnost u úřadu pro ochranu osobních údajů ve vašem státě.',
    privRt5: 'Pokud se opíráme o váš souhlas, máte právo jej kdykoli odvolat.',

    privH10: '10. NASTAVENÍ FUNKCE „DO-NOT-TRACK“',
    privDnt1: 'Na signály „Do-Not-Track“ v současnosti nereagujeme, jelikož neexistuje jednotný standard.',

    privH11: '11. PROVÁDÍME AKTUALIZACE TĚCHTO ZÁSAD?',
    privUpd1: 'Tyto Zásady můžeme čas od času aktualizovat. Aktualizace bude vyznačena datem v horní části zásad.',

    privH12: '12. JAK NÁS MŮŽETE KONTAKTOVAT?',
    privCt1: 'Máte-li dotazy, napište nám na <a href="mailto:kamenka.klasterec@gmail.com">kamenka.klasterec@gmail.com</a>, nebo nás kontaktujte poštou na adrese:',
    privCzechia: 'Česká republika',

    privH13: '13. JAK MŮŽETE ZKONTROLOVAT, AKTUALIZOVAT NEBO SMAZAT ÚDAJE?',
    privReq1: 'Chcete-li požádat o kontrolu, aktualizaci nebo smazání údajů, navštivte: <a href="https://kamenka-klasterec.com/contact.html">https://kamenka-klasterec.com/contact.html</a>.'
  }
};

const pageTitles = {
  home: { en: 'Kamenka Klasterec | A quiet retreat', cz: 'Kamenka Klasterec | Klidné útočiště' },
  about: { en: 'About Us | Kamenka Klasterec', cz: 'O nás | Kamenka Klasterec' },
  location: { en: 'Location | Kamenka Klasterec', cz: 'Poloha | Kamenka Klasterec' },
  contact: { en: 'Contact | Kamenka Klasterec', cz: 'Kontakt | Kamenka Klasterec' },
  privacy: { en: 'Privacy Policy | Kamenka Klasterec', cz: 'Zásady ochrany osobních údajů | Kamenka Klasterec' }
};

const lang = localStorage.getItem('kamenkaLanguage') || 'en';
let currentLanguage = lang === 'cz' ? 'cz' : 'en';

function setText(key) {
  document.querySelectorAll('[data-i18n="' + key + '"]').forEach((el) => {
    el.innerHTML = translations[currentLanguage][key];
  });
}

function updateImages() {
  document.querySelectorAll('[data-alt-en][data-alt-cz]').forEach((img) => {
    img.alt = currentLanguage === 'cz' ? img.dataset.altCz : img.dataset.altEn;
  });
}

function updatePageTitle() {
  const page = document.body.dataset.page;
  if (page && pageTitles[page]) {
    document.title = pageTitles[page][currentLanguage];
  }
}

function updateSwitcher() {
  document.querySelectorAll('[data-language]').forEach((button) => {
    const active = button.dataset.language === currentLanguage;
    button.setAttribute('aria-current', active ? 'true' : 'false');
    button.style.fontWeight = active ? '700' : '400';
    button.style.textDecoration = active ? 'underline' : 'none';
  });
}

function addSwitcher() {
  const nav = document.querySelector('.main');
  if (!nav || document.getElementById('language-switcher')) return;

  const switcher = document.createElement('span');
  switcher.id = 'language-switcher';
  switcher.style.marginLeft = '1rem';
  switcher.style.whiteSpace = 'nowrap';

  ['en', 'cz'].forEach((code, index) => {
    const a = document.createElement('a');
    a.href = '#';
    a.dataset.language = code;
    a.textContent = code === 'en' ? translations.en.switchEnglish : translations.en.switchCzech;
    a.style.marginLeft = index === 0 ? '0' : '0.45rem';
    a.style.fontSize = '0.85rem';
    a.addEventListener('click', (event) => {
      event.preventDefault();
      setLanguage(code);
    });
    switcher.appendChild(a);
  });

  nav.appendChild(switcher);
}

function showConfirmation() {
  const modal = document.getElementById('confirmation-modal');
  const message = document.getElementById('confirmation-message');
  if (!modal || !message) return;

  const t = translations[currentLanguage];

  message.innerHTML = `
    <h2 style="margin-top:0;">${t.confirmationTitle}</h2>
    <p>${t.confirmationText1}</p>
    <p>${t.confirmationText2}</p>
    <p>${t.confirmationText3}</p>
    <p>${t.confirmationSignoff}<br>
    <a href="mailto:${t.confirmationEmail}">${t.confirmationEmail}</a></p>
  `;

  modal.style.display = 'flex';
}

function setupForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const button = form.querySelector('button[type="submit"]');
    button.disabled = true;

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        form.reset();
        showConfirmation();
      } else {
        alert(currentLanguage === 'cz'
          ? 'Odeslání formuláře se nezdařilo. Zkuste to prosím znovu.'
          : 'There was a problem sending the form. Please try again.');
      }
    } catch (error) {
      alert(currentLanguage === 'cz'
        ? 'Odeslání formuláře se nezdařilo. Zkuste to prosím znovu.'
        : 'There was a problem sending the form. Please try again.');
    } finally {
      button.disabled = false;
    }
  });

  const close = document.getElementById('confirmation-close');
  if (close) {
    close.addEventListener('click', () => {
      document.getElementById('confirmation-modal').style.display = 'none';
    });
  }
}

function setLanguage(code) {
  currentLanguage = code === 'cz' ? 'cz' : 'en';
  localStorage.setItem('kamenkaLanguage', currentLanguage);
  document.documentElement.lang = currentLanguage === 'cz' ? 'cs' : 'en';

  document.querySelectorAll('[data-i18n]').forEach((el) => setText(el.dataset.i18n));
  updateImages();
  updatePageTitle();
  updateSwitcher();
}

document.addEventListener('DOMContentLoaded', () => {
  addSwitcher();
  setLanguage(currentLanguage);
  setupForm();
});
})();
