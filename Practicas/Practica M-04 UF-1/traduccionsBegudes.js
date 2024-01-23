// translationBegudes.js

function translatePage(lang) {
    var translations = {};
    if (lang === 'ca') {
      translations = {
        //header
        'menu-item1': 'PÃ gina principal',
        'menu-item2': 'PÃ gina anterior',
        'menu-item3': 'PÃ gina segÃ¼ent',
        'menu-item4': 'Contacte',

        //AigÃ¼es
        'aigues': 'aigÃ¼es',
        'aigua': 'Aigua',
        'info-aigua': 'Aigua provinent de Polcenigo, de mineralitzaciÃ³ dÃ¨bil.',
        'demanar': 'Demanar ara',
        'santanna': "Aigua Sant'anna",
        'info-santanna': "Aigua pura, d'excelÂ·lents propietats, nascuda en Vinadio.",
        'info-aquarius': "L'aquarius de sempre, perfecte pels esportistes.",
        'info-vichy': "AquÃ­ tenim un producte mÃ©s lo- cal, tant bona com la Sant'anna.",

        //Infusions
        'infusions': 'Infusions',
        'te-negre': 'TÃ© negre amb oli',
        'info-te-negre': "Aquesta deliciosa beguda ofe- reix sabors afrutats i florals.",
        'infusio-menta': 'InfusiÃ³ de menta',
        'info-infusio-menta': "Herbes originÃ ries de Pancalieri. Elegants i fresques.",
        'nestea-llimona': 'Nestea de llimona',
        'info-nestea-llimona': "El tÃ© negre de la marca Coca-cola, per refrescar el dia.",
        'nestea-pressec': 'Nestea de prÃ©ssec',
        'info-nestea-pressec': "El tÃ© negre de la marca Coca-cola ara amb prÃ©ssec.",

        //Begudes amb cafeÃ¯na
        'cafeina': 'Begudes amb cafeÃ¯na',
        'info-cocacola': "De Coca-cola, us presentem la coca-cola. En tenim de tot tipus.",
        'info-pepsi': "I per als que no els agrada la Coca-cola, tenim la Pepsi.",
        'capuccino': "CafÃ¨ capuccino",
        'info-capuccino': "El tradicional cafÃ¨ italiÃ  amb llet vaporitzada per crear l'espuma." ,
        'expresso': "CafÃ¨ expresso",
        'info-expresso': "El tradicional cafÃ¨ italiÃ  ex- presso, no americÃ , sinÃ² l'italiÃ .",

        //Alcohols
        'alcohol': 'Begudes amb alcohol',
        'cervesa': 'Cervesa Peroni',
        'info-cervesa': "Ã‰s una cervesa refrescant, tÃ­pica italiana.",
        'vi-blanc': 'Vi blanc',
        'info-vi-blanc': "Chardonnay de  VenÃ¨cia.Ã‰s un vi intens y suau.",
        'vi-negre': 'Vi negre',
        'info-vi-negre': "Anno Domini Batista. Ã‰s un vi amb notes vegetals.",
        'vi-espumos': 'Vi espumÃ³s',
        'info-vi-espumos': "Aurore franciacorta. La vinificaciÃ³ Ã©s en acer inoxidable.",
        
        //Footer
        'carrer': 'Carrer, 80',
        'poblacio': 'PoblaciÃ³ - 0000',
        'mes-informacio': 'MÃ©s informaciÃ³',
        'inici': 'Inci',
        'nosaltres': 'Nosaltres',
        'blog': 'Blog',
        'contacte': 'Contacte',
        'xarxes-socials': 'Xarxes socials',
        'copyright': 'Â©2024 Â· Todos los derechos reservados.',
        'politica-privacitat': 'PolÃ­tica de Privacitat',
        'politica-cookies': 'PolÃ­tica de Cookies',
        'avis-legal': 'AvÃ­s Legal',
        'Traduir a catalÃ ': 'Traduir a catalÃ ',
        'Traduir a catalÃ ': 'Traduir a castellÃ ',
        'Traduir a catalÃ ': 'Traduir a anglÃ¨s'
      };
    } else if (lang === 'es') {
      translations = {
        //header
        'menu-item1': 'PÃ¡gina principal',
        'menu-item2': 'PÃ¡gina anterior',
        'menu-item3': 'PÃ¡gina segÃ¼ent',
        'menu-item4': 'Contacto',

        //AigÃ¼es
        'aigues': 'Aguas',
        'aigua': 'Agua',
        'info-aigua': 'Agua proveniente de Polcenigo, de mineralizaciÃ³n dÃ©bil.',
        'demanar': 'Pedir ahora',
        'santanna': "Agua Sant'Anna",
        'info-santanna': "Agua pura, d'excelentes propiedades, nacida en Vinadio.",
        'info-aquarius': "El aquarius de siempre, perfecto para los esportistas.",
        'info-vichy': "AquÃ­ tenemos un producto mÃ¡s lo- cal, tan buena como la Sant'Anna.",

        //Infusions
        'infusions': 'Infusiones',
        'te-negre': 'TÃ© negro amb aceite',
        'info-te-negre': "Esta deliciosa bebida ofre- ce sabores afrutados y florals.",
        'infusio-menta': 'InfusiÃ³n de menta',
        'info-infusio-menta': "Hierbas originarias de Pancalieri. Elegantes i frescas.",
        'nestea-llimona': 'Nestea de limon',
        'info-nestea-llimona': "El tÃ© negro de la marca Coca-cola, para refrescar el dÃ­a.",
        'nestea-pressec': 'Nestea de melocotÃ³n',
        'info-nestea-pressec': "El tÃ© negro de la marca Coca-cola ahora con melocotÃ³n.",

        //Begudes amb cafeÃ¯na
        'cafeina': 'Begudes con cafeÃ­na',
        'info-cocacola': "De Coca-cola, us presentamos la coca-cola. Tenemos de todo tipo.",
        'info-pepsi': "Y para los que no les gusta la Coca-cola, tenemos la Pepsi.",
        'capuccino': "CafÃ¨ capuccino",
        'info-capuccino': "El tradicional cafÃ© italiano con leche vaporizada para crear l'escuma." ,
        'expresso': "CafÃ¨ expresso",
        'info-expresso': "El tradicional cafÃ© italiano ex- presso, no americano, sino el italiano.",

        //Alcohols
        'alcohol': 'Bebidas con alcohol',
        'cervesa': 'Cerveza Peroni',
        'info-cervesa': "Es una cerveza refrescante, tÃ­pica italiana.",
        'vi-blanc': 'Vi blanc',
        'info-vi-blanc': "Chardonnay de  Venecia.Ã‰s un vino intenso y suave.",
        'vi-negre': 'Vi negre',
        'info-vi-negre': "Anno Domini Batista. Es un vino con notas vegetales.",
        'vi-espumos': 'Vi espumÃ³s',
        'info-vi-espumos': "Aurore franciacorta. La vinificaciÃ³n es en acero inoxidable.",
        
        //Footer
        'carrer': 'Calle, 80',
        'poblacio': 'PoblaciÃ³n - 0000',
        'mes-informacio': 'MÃ¡s informaciÃ³n',
        'inici': 'Incio',
        'nosaltres': 'Nosotros',
        'blog': 'Blog',
        'contacte': 'Contacto',
        'xarxes-socials': 'Redes sociales',
        'copyright': 'Â©2024 Â· Todos los derechos reservados.',
        'politica-privacitat': 'PolÃ­tica de Privacidad',
        'politica-cookies': 'PolÃ­tica de Cookies',
        'avis-legal': 'Aviso Legal',
        'Traduir a catalÃ ': 'Traduir a catalÃ¡n',
        'Traduir a catalÃ ': 'Traduir a castellano',
        'Traduir a catalÃ ': 'Traduir a inglÃ©s'
      };
    } else if (lang === 'en') {
      translations = {
        //header
        'menu-item1': 'Main page',
        'menu-item2': 'Last page',
        'menu-item3': 'Next page',
        'menu-item4': 'Contact',

        //AigÃ¼es
        'aigues': 'Waters',
        'aigua': 'Water',
        'info-aigua': 'Water from Polcenigo, with weak mineralisation.',
        'demanar': 'Ask for it now',
        'santanna': 'Santanna water',
        'info-santanna': "Pure water, with excellent properties, born in Vinadio.",
        'info-aquarius': "The usual aquarius, perfect for athletes.",
        'info-vichy': "Here we have a product that is as good as Sant'Anna.",

        //Infusions
        'infusions': 'Infusions',
        'te-negre': 'Black tea with oil',
        'info-te-negre': "This delicious drink offers fruity and floral flavours.",
        'infusio-menta': 'InfusiÃ³ de menta',
        'info-infusio-menta': "Herbs from Pancalieri. Elegant and fresh.",
        'nestea-llimona': 'Nestea de llimona',
        'info-nestea-llimona': "The black tea of the Coca-Cola brand, to refresh the day.",
        'nestea-pressec': 'Nestea de llimona',
        'info-nestea-pressec': "El tÃ© negre de la marca Coca-cola ara amb prÃ©ssec.",

        //Begudes amb cafeÃ¯na
        'cafeina': 'Coffees',
        'info-cocacola': "From Coca-Cola, we present Coca-Cola. We have all kinds.",
        'info-pepsi': "And for those who don't like Coca-Cola, we have Pepsi.",
        'capuccino': "Capuccino coffee",
        'info-capuccino': "Traditional Italian coffee with steamed milk to create the foam.",
        'info-expresso': "The traditional Italian coffee ex- presso, not American, but Italian.",

        //Alcohols
        'alcohol': 'Alcohols',
        'cervesa': 'Peroni Beer',
        'info-cervesa': "It is a refreshing beer, typical Italian.",
        'vi-blanc': 'White wine',
        'info-vi-blanc': "Chardonnay from VenÃ¨cia, an intense and smooth wine.",
        'vi-negre': 'Vi negre',
        'info-vi-negre': "Anno Domini Batista. It is a wine with vegetal notes.",
        'vi-espumos': 'Sparkling wine',
        'info-vi-espumos': "Aurore Franciacorta Vinification is in stainless steel.",
        
        //Footer
        'carrer': 'Street, 80',
        'poblacio': 'City - 0000',
        'mes-informacio': 'More information',
        'inici': 'Home',
        'nosaltres': 'About us',
        'blog': 'Blog',
        'contacte': 'Contact',
        'xarxes-socials': 'Social networks',
        'copyright': 'Â©2024 Â· All right reserved.',
        'politica-privacitat': 'Privacy policy',
        'politica-cookies': 'Cookies policy',
        'avis-legal': 'legal warning',
        'Traduir a catalÃ ': 'Translate to Catalan',
        'Traduir a catalÃ ': 'Translate to Spanish',
        'Traduir a catalÃ ': 'Translate to English'
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
