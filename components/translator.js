const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

    britishToAmerican(text) {
        var responseText = text;
        var nothingToTranslate = true;

        // Time
        var timeRegex = /[0-2]?[0-9].[0-5][0-9]/g;
        if (timeRegex.test(responseText)) {
            var times  = responseText.match(timeRegex);
            for (let i = 0; i < times.length; i++)
                responseText = responseText.replace(new RegExp(times[i]), `<span class="highlight">${times[i].replace('.', ':')}</span>`);
            nothingToTranslate = false;
        }

        // American only
        for (let [key, val] of Object.entries(americanOnly)) {
            if (this.checkContains(responseText,val)) {
                var toReplace  = responseText.match(new RegExp(`${val} | ${val} | ${val}[^a-z]`, 'gi'));
                if (toReplace) {
                    toReplace.forEach((item, index, arr) => arr[index] = item.trim());
                    for (let i = 0; i < toReplace.length; i++) {
                        var replacement = /^[A-Z]/.test(toReplace[i]) ? key[0].toUpperCase() + key.slice(1) : key;
                        responseText = responseText.replace(new RegExp(val, 'i'), `<span class="highlight">${replacement}</span>`);
                    }
                    nothingToTranslate = false;
                }
            }
        }

        // American to British spelling
        for (let [key, val] of Object.entries(americanToBritishSpelling)) {
            if (this.checkContains(responseText,val)) {
                var toReplace  = responseText.match(new RegExp(`${val} | ${val} | ${val}[^a-z]`, 'gi'));
                if (toReplace) {
                    toReplace.forEach((item, index, arr) => arr[index] = item.trim());
                    for (let i = 0; i < toReplace.length; i++) {
                        var replacement = /^[A-Z]/.test(toReplace[i]) ? key[0].toUpperCase() + key.slice(1) : key;
                        responseText = responseText.replace(new RegExp(val, 'i'), `<span class="highlight">${replacement}</span>`);
                    }
                    nothingToTranslate = false;
                }
            }
        }

        // American to British titles
        for (let [key, val] of Object.entries(americanToBritishTitles)) {
            if (this.checkContains(responseText,val)) {
                var toReplace  = responseText.match(new RegExp(`${val} | ${val} | ${val}[^a-z]`, 'gi'));
                if (toReplace) {
                    toReplace.forEach((item, index, arr) => arr[index] = item.trim());
                    for (let i = 0; i < toReplace.length; i++) {
                        var replacement = /^[A-Z]/.test(toReplace[i]) ? key[0].toUpperCase() + key.slice(1) : key;
                        responseText = responseText.replace(new RegExp(val, 'i'), `<span class="highlight">${replacement}</span>`);
                    }
                    nothingToTranslate = false;
                }
            }
        }

        // British only
         for (let [key, val] of Object.entries(britishOnly)) {
            if (this.checkContains(responseText,key)) {
                var toReplace  = responseText.match(new RegExp(`${key} | ${key} | ${key}[^a-z]`, 'gi'));
                if (toReplace) {
                    toReplace.forEach((item, index, arr) => arr[index] = item.trim());
                    for (let i = 0; i < toReplace.length; i++) {
                        var replacement = /^[A-Z]/.test(toReplace[i]) ? val[0].toUpperCase() + val.slice(1) : val;
                        responseText = responseText.replace(new RegExp(key, 'i'), `<span class="highlight">${replacement}</span>`);
                    }
                    nothingToTranslate = false;
                }
            }
        }

        if (nothingToTranslate) return "Everything looks good to me!";
        else return responseText;

    }

    americanToBritish(text) {
        var responseText = text;
        var nothingToTranslate = true;

        // Time
        var timeRegex = /[0-2]?[0-9]:[0-5][0-9]/g;
        if (timeRegex.test(responseText)) {
            var times  = responseText.match(timeRegex);
            for (let i = 0; i < times.length; i++)
                responseText = responseText.replace(new RegExp(times[i]), `<span class="highlight">${times[i].replace(':', '.')}</span>`);
            nothingToTranslate = false;
        }

        // American only
        for (let [key, val] of Object.entries(americanOnly)) {
            if (this.checkContains(responseText,key)) {
                var toReplace  = responseText.match(new RegExp(`${key} | ${key} | ${key}[^a-z]`, 'gi'));
                if (toReplace) {
                    toReplace.forEach((item, index, arr) => arr[index] = item.trim());
                    for (let i = 0; i < toReplace.length; i++) {
                        var replacement = /^[A-Z]/.test(toReplace[i]) ? val[0].toUpperCase() + val.slice(1) : val;
                        responseText = responseText.replace(new RegExp(key, 'i'), `<span class="highlight">${replacement}</span>`);
                    }
                    nothingToTranslate = false;
                }
            }
        }

        // American to British spelling
        for (let [key, val] of Object.entries(americanToBritishSpelling)) {
            if (this.checkContains(responseText,key)) {
                var toReplace  = responseText.match(new RegExp(`${key} | ${key} | ${key}[^a-z]`, 'gi'));
                if (toReplace) {
                    toReplace.forEach((item, index, arr) => arr[index] = item.trim());
                    for (let i = 0; i < toReplace.length; i++) {
                        var replacement = /^[A-Z]/.test(toReplace[i]) ? val[0].toUpperCase() + val.slice(1) : val;
                        responseText = responseText.replace(new RegExp(key, 'i'), `<span class="highlight">${replacement}</span>`);
                    }
                    nothingToTranslate = false;
                }
            }
        }

        // American to British titles
        for (let [key, val] of Object.entries(americanToBritishTitles)) {
            if (this.checkContains(responseText,key)) {
                var toReplace  = responseText.match(new RegExp(`${key} | ${key} | ${key}[^a-z]`, 'gi'));
                if (toReplace) {
                    toReplace.forEach((item, index, arr) => arr[index] = item.trim());
                    for (let i = 0; i < toReplace.length; i++) {
                        var replacement = /^[A-Z]/.test(toReplace[i]) ? val[0].toUpperCase() + val.slice(1) : val;
                        responseText = responseText.replace(new RegExp(key, 'i'), `<span class="highlight">${replacement}</span>`);
                    }
                    nothingToTranslate = false;
                }
            }
        }

        // British only
         for (let [key, val] of Object.entries(britishOnly)) {
            if (this.checkContains(responseText,val)) {
                var toReplace  = responseText.match(new RegExp(`${val} | ${val} | ${val}[^a-z]`, 'gi'));
                if (toReplace) {
                    toReplace.forEach((item, index, arr) => arr[index] = item.trim());
                    for (let i = 0; i < toReplace.length; i++) {
                        var replacement = /^[A-Z]/.test(toReplace[i]) ? key[0].toUpperCase() + key.slice(1) : key;
                        responseText = responseText.replace(new RegExp(val, 'i'), `<span class="highlight">${replacement}</span>`);
                    }
                    nothingToTranslate = false;
                }
            }
        }

        if (nothingToTranslate) return "Everything looks good to me!";
        else return responseText;

    }

    checkContains(text, key) {
        return text.toLowerCase().includes(key.toLowerCase());
    }

}

module.exports = Translator;