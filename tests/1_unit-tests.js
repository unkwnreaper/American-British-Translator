const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

var translate = new Translator();

suite('Unit Tests', () => {

    suite('American to British', () => {

        test("Translate Mangoes are my favorite fruit. to British English", function(){
            assert.equal(translate.americanToBritish('Mangoes are my favorite fruit.'), `Mangoes are my <span class="highlight">favourite</span> fruit.`, 'should be correct spelling');
        });

        test("Translate I ate yogurt for breakfast. to British English", function(){
            assert.equal(translate.americanToBritish("I ate yogurt for breakfast."), `I ate <span class="highlight">yoghurt</span> for <span class="highlight">brekkie</span>.`, 'should be correct spelling');
        });

        test("Translate We had a party at my friend's condo. to British English", function(){
            assert.equal(translate.americanToBritish("We had a party at my friend's condo."), `We had a party at my friend's <span class="highlight">flat</span>.`, 'should be correct spelling');
        });

        test("Translate Can you toss this in the trashcan for me? to British English", function(){
            assert.equal(translate.americanToBritish("Can you toss this in the trashcan for me?"), `Can you toss this in the <span class="highlight">bin</span> for me?`, 'should be correct spelling');
        });

        test("Translate The parking lot was full. to British English", function(){
            assert.equal(translate.americanToBritish("The parking lot was full."), `The <span class="highlight">car park</span> was full.`, 'should be correct reply');
        });

        test("Translate Like a high tech Rube Goldberg machine. to British English", function(){
            assert.equal(translate.americanToBritish("Like a high tech Rube Goldberg machine."), `Like a high tech <span class="highlight">Heath Robinson device</span>.`, 'should be correct reply');
        });

        test("Translate To play hooky means to skip class or work. to British English", function(){
            assert.equal(translate.americanToBritish("To play hooky means to skip class or work."), `To <span class="highlight">bunk off</span> means to skip class or work.`, 'should be correct reply');
        });

        test("Translate To play hooky means to skip class or work. to British English", function(){
            assert.equal(translate.americanToBritish("To play hooky means to skip class or work."), `To <span class="highlight">bunk off</span> means to skip class or work.`, 'should be correct reply');
        });

        test("Translate No Mr. Bond, I expect you to die. to British English", function(){
            assert.equal(translate.americanToBritish("No Mr. Bond, I expect you to die."), `No <span class="highlight">Mr</span> Bond, I expect you to die.`, 'should be correct reply');
        });

        test("Translate Dr. Grosh will see you now. to British English", function(){
            assert.equal(translate.americanToBritish("Dr. Grosh will see you now."), `<span class="highlight">Dr</span> Grosh will see you now.`, 'should be correct reply');
        });

        test("Translate Lunch is at 12:15 today. to British English", function(){
            assert.equal(translate.americanToBritish("Lunch is at 12:15 today."), `Lunch is at <span class="highlight">12.15</span> today.`, 'should be correct reply');
        });

    });

    suite('British to American', () => {

        test("Translate We watched the footie match for a while. to American English", function(){
            assert.equal(translate.britishToAmerican("We watched the footie match for a while."), `We watched the <span class="highlight">soccer</span> match for a while.`, 'should be correct reply');
        });

        test("Translate Paracetamol takes up to an hour to work. to American English", function(){
            assert.equal(translate.britishToAmerican("Paracetamol takes up to an hour to work."), `<span class="highlight">Acetaminophen</span> takes up to an hour to work.`, 'should be correct reply');
        });

        test("Translate First, caramelise the onions. to American English", function(){
            assert.equal(translate.britishToAmerican("First, caramelise the onions."), `First, <span class="highlight">caramelize</span> the onions.`, 'should be correct reply');
        });

        test("Translate I spent the bank holiday at the funfair. to American English", function(){
            assert.equal(translate.britishToAmerican("I spent the bank holiday at the funfair."), `I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.`, 'should be correct reply');
        });

        test("Translate I had a bicky then went to the chippy. to American English", function(){
            assert.equal(translate.britishToAmerican("I had a bicky then went to the chippy."), `I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.`, 'should be correct reply');
        });

        test("Translate I've just got bits and bobs in my bum bag. to American English", function(){
            assert.equal(translate.britishToAmerican("I've just got bits and bobs in my bum bag."), `I've just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.`, 'should be correct reply');
        });

        test("Translate The car boot sale at Boxted Airfield was called off. to American English", function(){
            assert.equal(translate.britishToAmerican("The car boot sale at Boxted Airfield was called off."), `The <span class="highlight">swap meet</span> at Boxted Airfield was called off.`, 'should be correct reply');
        });

        test("Translate Have you met Mrs Kalyani? to American English", function(){
            assert.equal(translate.britishToAmerican("Have you met Mrs Kalyani?"), `Have you met <span class="highlight">Mrs.</span> Kalyani?`, 'should be correct reply');
        });

        test("Translate Prof Joyner of King's College, London. to American English", function(){
            assert.equal(translate.britishToAmerican("Prof Joyner of King's College, London."), `<span class="highlight">Prof.</span> Joyner of King's College, London.`, 'should be correct reply');
        });

        test("Translate Tea time is usually around 4 or 4.30. to American English", function(){
            assert.equal(translate.britishToAmerican("Tea time is usually around 4 or 4.30."), `Tea time is usually around 4 or <span class="highlight">4:30</span>.`, 'should be correct reply');
        });

    });

    suite('Highlight translation', () => {

        test("Highlight translation in Mangoes are my favorite fruit.", function(){
            assert.include(translate.americanToBritish("Mangoes are my favorite fruit."), `<span class="highlight">favourite</span>`, 'should highlight translation');
        });

        test("Highlight translation in I ate yogurt for breakfast.", function(){
            assert.include(translate.americanToBritish("I ate yogurt for breakfast."), `<span class="highlight">yoghurt</span>`, 'should highlight translation');
            assert.include(translate.americanToBritish("I ate yogurt for breakfast."), `<span class="highlight">brekkie</span>`, 'should highlight translation');
        });

        test("Highlight translation in We watched the footie match for a while.", function(){
            assert.include(translate.britishToAmerican("We watched the footie match for a while."), `<span class="highlight">soccer</span>`, 'should highlight translation');
        });

        test("Highlight translation in Paracetamol takes up to an hour to work.", function(){
            assert.include(translate.britishToAmerican("Paracetamol takes up to an hour to work."), `<span class="highlight">Acetaminophen</span>`, 'should highlight translation');
        });

    });
});
