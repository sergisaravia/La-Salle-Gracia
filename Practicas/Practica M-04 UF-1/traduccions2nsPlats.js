// translationBegudes.js

function translatePage(lang) {
    var translations = {};
    if (lang === 'ca') {
      translations = {
        //header
        'menu-item1': 'Pàgina principal',
        'menu-item2': 'Pàgina anterior',
        'menu-item3': 'Pàgina segünt',
        'menu-item4': 'Contacte',

        //Tres primers plats
        'alberginia': 'Albergínies a la parmigiana',
        'info-alberginia': "Sense orígens establerts, aquest plat et transportarà al sud d'Itàlia",
        'demanar': 'Demanar ara',
        'info-saltimbocca': "Un plat de carn, típic italià original de l'Eterna Roma. Tan bons que salten a la boca sols.",
        'info-spezzatino': "Es tracta ni més ni menys que de la recepta tradicional de l'estofat de porc.",

        //Tres segons plats
        'info-pizza': "Segurament el plat més típic d'Itàlia: la pizza. La pizza de pernil i xampinyons és tan exquisita que és la opció número 1. La podeu acompanyar amb quasi qualsevol altre ingredient.",
        'mandonguilles': "Mandonguilles al forn amb sabroses patates",
        'info-mandonguilles': "Les mandonguilles son un plat clàssic del menjar casolà. Existeixen moltes variants, des del tipus de carn que es pot utilitzar per a preparar-les fins a la salsa amb la que s'acompanyen.",
        'peix-espasa': 'peix espasa',
        'peix-espasa': "Un plat lleuger, apte inclús per a persones que estan a dieta i per als amants del peix.",
        
        //Footer
        'restaurant': 'Restaurant',
        'carrer': 'Carrer, 80',
        'poblacio': 'Població - 0000',
        'mobil': "Mòbil",
        'mes-informacio': 'Més informació',
        'inici': 'Inci',
        'nosaltres': 'Nosaltres',
        'blog': 'Blog',
        'contacte': 'Contacte',
        'xarxes-socials': 'Xarxes socials',
        'copyright': '©2024 · Todos los derechos reservados.',
        'politica-privacitat': 'Política de Privacitat',
        'politica-cookies': 'Política de Cookies',
        'avis-legal': 'Avís Legal',
        'Tcatala': 'Traduir a català',
        'castella ': 'Traduir a castellà',
        'angles': 'Traduir a anglès'
      };
    } else if (lang === 'es') {
      translations = {
        //header
        'menu-item1': 'Página principal',
        'menu-item2': 'Página anterior',
        'menu-item3': 'Página seguiente',
        'menu-item4': 'Contacto',

        //Tres primers plats
        'alberginia': 'Berenjenas a la parmigiana',
        'info-alberginia': "Sin orígenes establecidos, este plato te transportará al sur de Italia",
        'demanar': 'Pedir ahora',
        'info-saltimbocca': "Un plato de carne, típico italiano original de la Eterna Roma. Tan buenos que saltan a la boca solos.",
        'info-spezzatino': "Se trata ni más ni menos que de la receta tradicional del estofado de cerdo.",

        //Tres segons plats
        'info-pizza': "Seguramente el plato más típico de Italia: la pizza. La pizza de jamón y champiñones. Seguramente el #1.",
        'mandonguilles': 'Albóndigas',
        'info-mandonguilles': "Las albóndigas al horno son un plato clásico de la comida casera.",
        'peix-espasa': 'pez-espada',
        'info-peix-espasa': "Un plat ligero, apto incluso para personas que están a dieta y para los amantes del pescados.",


        //Footer
        'restaurant': 'Restaurante',
        'carrer': 'Calle, 80',
        'poblacio': 'Población - 0000',
        'mes-informacio': 'Más información',
        'inici': 'Incio',
        'nosaltres': 'Nosotros',
        'blog': 'Blog',
        'contacte': 'Contacte',
        'xarxes-socials': 'Redes sociales',
        'copyright': '©2024 · Todos los derechos reservados.',
        'politica-privacitat': 'Política de Privacitat',
        'politica-cookies': 'Política de Cookies',
        'avis-legal': 'Aviso Legal',
        'catala': 'Traduir a catalán',
        'castella': 'Traducir a castellano',
        'angles': 'Traducir a inglés'
      };
    } else if (lang === 'en') {
      translations = {
        //header
        'menu-item1': 'Main page',
        'menu-item2': 'Last page',
        'menu-item3': 'Next page',
        'menu-item4': 'Contact',

        //Tres primers plats
        'alberginia': 'Eggplant parmigiana',
        'info-alberginia': "With no established origins, this dish will transport you to southern Italy",
        'demanar': 'Order now',
        'info-saltimbocca': "A meat dish, typical Italian from the Ethernal Rome. So good they pop in your mouth on their own.",
        'info-spezzatino': "It is nothing less than the traditional recipe for pork stew.",

        //Tres segons plats
        'info-pizza': "Probably the most typical dish in Italy: pizza of ham and mushroom pizza. Probably the #1 choice.",
        'mandonguilles': "Mandonguilla",
        'info-mandonguilles': "Baked meatballs",
        'peix-espasa': 'Swordfish',
        'info-peix-espasa': " A light dish, suitable even for people who are on a diet or its lovers.",

        //Footer
        'carrer': 'Carrer, 80',
        'poblacio': 'City - 0000',
        'mes-informacio': 'More information',
        'inici': 'Home',
        'nosaltres': 'About Us',
        'blog': 'Blog',
        'contacte': 'Contact',
        'xarxes-socials': 'Social Networks',
        'copyright': '©2024 · All right reserved.',
        'politica-privacitat': 'Privacy Policy',
        'politica-cookies': 'Cookies Policy',
        'avis-legal': 'Legal Warning',
        'catala': 'Translate into Catalan',
        'castella': 'Translate into Spanish',
        'angles': 'Translate into English'
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
