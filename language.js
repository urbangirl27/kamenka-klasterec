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

      contactEyebrow: 'Get in touch',
      contactTitle: 'Plan your stay',
      contactLead: "[Ivan's note — how quickly they respond, best way to reach them.]",
      contactEmailLead: 'Or email us directly at',
      contactOr: 'or',
      nameLabel: 'Name',
      emailLabel: 'Email',
      datesLabel: 'Dates you are interested in',
      messageLabel: 'Message',
      sendButton: 'Send enquiry'
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

      contactEyebrow: 'Ozvěte se nám',
      contactTitle: 'Naplánujte si pobyt',
      contactLead: '[Ivanův text — jak rychle odpovídá a jaký je nejlepší způsob kontaktu.]',
      contactEmailLead: 'Nebo nám napište přímo na',
      contactOr: 'nebo',
      nameLabel: 'Jméno',
      emailLabel: 'E-mail',
      datesLabel: 'Termín, o který máte zájem',
      messageLabel: 'Zpráva',
      sendButton: 'Odeslat poptávku'
    }
  };

  const pageTitles = {
    home: { en: 'Kamenka Klasterec | A quiet retreat', cz: 'Kamenka Klasterec | Klidné útočiště' },
    about: { en: 'About Us | Kamenka Klasterec', cz: 'O nás | Kamenka Klasterec' },
    location: { en: 'Location | Kamenka Klasterec', cz: 'Poloha | Kamenka Klasterec' },
    contact: { en: 'Contact | Kamenka Klasterec', cz: 'Kontakt | Kamenka Klasterec' }
  };

  const lang = localStorage.getItem('kamenkaLanguage') || 'en';
  let currentLanguage = lang === 'cz' ? 'cz' : 'en';

  function setText(key) {
    document.querySelectorAll('[data-i18n="' + key + '"]').forEach((el) => {
      el.textContent = translations[currentLanguage][key];
    });
  }

  function renderEmailLine() {
    const el = document.querySelector('[data-i18n-email-line]');
    if (!el) return;
    const t = translations[currentLanguage];
    el.innerHTML = '';
    const lead = document.createTextNode(t.contactEmailLead + ' ');
    const first = document.createElement('a');
    first.href = 'mailto:kamenka.klasterec@gmail.com';
    first.textContent = 'kamenka.klasterec@gmail.com';
    const middle = document.createTextNode(' ' + t.contactOr + ' ');
    const second = document.createElement('a');
    second.href = 'mailto:ivanekolaru@gmail.com';
    second.textContent = 'ivanekolaru@gmail.com';
    el.append(lead, first, middle, second);
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

  function setLanguage(code) {
    currentLanguage = code === 'cz' ? 'cz' : 'en';
    localStorage.setItem('kamenkaLanguage', currentLanguage);
    document.documentElement.lang = currentLanguage === 'cz' ? 'cs' : 'en';

    document.querySelectorAll('[data-i18n]').forEach((el) => setText(el.dataset.i18n));
    renderEmailLine();
    updateImages();
    updatePageTitle();
    updateSwitcher();
  }

  document.addEventListener('DOMContentLoaded', () => {
    addSwitcher();
    setLanguage(currentLanguage);
  });
})();
