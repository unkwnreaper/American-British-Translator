'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const {text, locale} = req.body;
      if (text === '') {
        res.json({ error: 'No text to translate' });
        return;
      }
      else if (!text || !locale) {
        res.json({ error: 'Required field(s) missing' });
        return;
      }
      switch(locale) {
        case 'american-to-british':
          res.json({text: text, translation: translator.americanToBritish(text)});
          break;
        case 'british-to-american':
          res.json({text: text, translation: translator.britishToAmerican(text)});
          break;
        default:
          res.json({ error: 'Invalid value for locale field' });
          return;
      }

    });
};
