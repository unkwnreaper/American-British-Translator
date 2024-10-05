const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
    var testText = "Mangoes are my favorite fruit.";
    var locale = "american-to-british";

    test('Translation with text and locale fields: POST request to /api/translate', function (done) {
        chai
          .request(server)
          .keepOpen()
          .post('/api/translate')
          .send({text: testText, locale: locale})
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.deepEqual(res.body, {text: testText, translation: 'Mangoes are my <span class="highlight">favourite</span> fruit.'}, 'should respond with correct translation');
            done();
          });
      });

      test('Translation with text and invalid locale field: POST request to /api/translate', function (done) {
        chai
          .request(server)
          .keepOpen()
          .post('/api/translate')
          .send({text: testText, locale: 'local'})
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.deepEqual(res.body, { error: 'Invalid value for locale field' }, 'should respond with error');
            done();
          });
      });

      test('Translation with missing text field: POST request to /api/translate', function (done) {
        chai
          .request(server)
          .keepOpen()
          .post('/api/translate')
          .send({locale: locale})
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.deepEqual(res.body, { error: 'Required field(s) missing' }, 'should respond with error');
            done();
          });
      });

      test('Translation with missing locale field: POST request to /api/translate', function (done) {
        chai
          .request(server)
          .keepOpen()
          .post('/api/translate')
          .send({text: testText})
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.deepEqual(res.body, { error: 'Required field(s) missing' }, 'should respond with error');
            done();
          });
      });

      test('Translation with empty text: POST request to /api/translate', function (done) {
        chai
          .request(server)
          .keepOpen()
          .post('/api/translate')
          .send({text: '', locale: locale})
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.deepEqual(res.body, { error: 'No text to translate' }, 'should respond with error');
            done();
          });
      });

      test('Translation with text that needs no translation: POST request to /api/translate', function (done) {
        chai
          .request(server)
          .keepOpen()
          .post('/api/translate')
          .send({text: 'This is normal', locale: locale})
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.deepEqual(res.body, { text: 'This is normal', translation: 'Everything looks good to me!' }, 'should respond with correct message');
            done();
          });
      });

});
