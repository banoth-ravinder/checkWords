const axios = require('axios');

let englishWords = [];

// singleton pattern 
module.exports = {
    async get(){
        if(englishWords.length === 0){
            await this.init()
        }
        return englishWords;
    },

    async init(){
        try {
            const response = await axios.get('https://raw.githubusercontent.com/jeremy-rifkin/Wordlist/master/master.txt');
            const result = response.data
            englishWords = result.split("\n").map(word => {
                return word.toLowerCase();
            })

          } catch (error) {
            console.error(error);
          }
    }
}