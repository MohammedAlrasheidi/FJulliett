document.addEventListener('DOMContentLoaded', function() {
    const inputText = document.getElementById('inputText');
    const generateBtn = document.getElementById('generateBtn');
    const outputList = document.getElementById('outputList');

    generateBtn.addEventListener('click', function() {
        const text = inputText.value.toUpperCase();
        const phonetic = generatePhonetic(text);
        displayPhonetic(phonetic);
    });

    function generatePhonetic(text) {
        // Define NATO phonetic alphabet
        const natoAlphabet = {
            'A': 'Alpha',
            'B': 'Bravo',
            'C': 'Charlie',
            'D': 'Delta',
            'E': 'Echo',
            'F': 'Foxtrot',
            'G': 'Golf',
            'H': 'Hotel',
            'I': 'India',
            'J': 'Juliett',
            'K': 'Kilo',
            'L': 'Lima',
            'M': 'Mike',
            'N': 'November',
            'O': 'Oscar',
            'P': 'Papa',
            'Q': 'Quebec',
            'R': 'Romeo',
            'S': 'Sierra',
            'T': 'Tango',
            'U': 'Uniform',
            'V': 'Victor',
            'W': 'Whiskey',
            'X': 'X-ray',
            'Y': 'Yankee',
            'Z': 'Zulu'
        };

        // Generate phonetic for each character in the text
        const phoneticArray = [];
        for (let char of text) {
            if (natoAlphabet[char]) {
                phoneticArray.push(natoAlphabet[char]);
            } else {
                phoneticArray.push(char);
            }
        }
        return phoneticArray;
    }

    function displayPhonetic(phonetic) {
        // Clear previous output
        outputList.innerHTML = '';

        // Display phonetic in the output list
        phonetic.forEach(function(item) {
            const li = document.createElement('li');
            li.textContent = item;
            outputList.appendChild(li);
        });
    }
});