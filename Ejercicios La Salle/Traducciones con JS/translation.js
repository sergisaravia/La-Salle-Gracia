// translation.js

function translatePage(lang) {
    var translations = {};
  
    if (lang === 'en') {
      translations = {
        'titulo': 'Hello World',
        'parrafo': 'This is a sample paragraph.'
      };
    } else if (lang === 'es') {
      translations = {
        'titulo': 'Hola Mundo',
        'parrafo': 'Este es un párrafo de ejemplo.'
      };
    }
  
    applyTranslations(translations);
  }
  
  function applyTranslations(translations) {
    Object.keys(translations).forEach(function (key) {
      var element = document.getElementById(key) || document.querySelector('.' + key);
      if (element) {
        element.innerHTML = translations[key];
      }
    });
  }
  