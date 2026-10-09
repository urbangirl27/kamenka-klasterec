/* Translation support for the two homepage section headings. Keep language.js unchanged. */
(function () {
  'use strict';
  function updateSectionHeadings() {
    var language = localStorage.getItem('kamenkaLanguage') === 'cz' ? 'cz' : 'en';
    document.querySelectorAll('[data-i18n="secondFloorTitle"], [data-i18n="atticTitle"]').forEach(function (heading) {
      heading.textContent = language === 'cz' ? heading.dataset.altCz : heading.dataset.altEn;
    });
  }
  document.addEventListener('DOMContentLoaded', updateSectionHeadings);
  document.addEventListener('click', function (event) {
    if (event.target.closest('[data-language]')) {
      updateSectionHeadings();
    }
  });
})();
