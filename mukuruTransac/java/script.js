// Translations for different languages
var translations = {
  en: {
    learnMore: "Learn More",
    calculate: "Calculate",
  },
  sh: {
    learnMore: "Tora Zvakakosha",
    calculate: "Kuwedzera",
  },
  zu: {
    learnMore: "Funda Okuningi",
    calculate: "Kuphatha",
  },
  // Add more languages and translations as needed
};

// Function to change button text based on language
function changeButtonLanguage(language) {
  var translation = translations[language];
  if (translation) {
    document.querySelector('.button[href="help.html"]').textContent =
      translation.learnMore;
    document.querySelector('.button[href="calculator.html"]').textContent =
      translation.calculate;
  }
}

// Get the language selector element
var languageSelect = document.getElementById("language-select");

// Add an event listener to the language selector
languageSelect.addEventListener("change", function () {
  var selectedLanguage = this.value;
  changeButtonLanguage(selectedLanguage);
});

// Initialize button text based on the initial language
changeButtonLanguage(languageSelect.value);




/////////////////////////////////////////////////////////////////////

// Function to speak text using the Web Speech API
function speakText(text) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  synth.speak(utterance);
}

// Get the buttons
const learnMoreButton = document.getElementById('learn-more');
const calculateButton = document.getElementById('calculate');

// Add click event listeners to the buttons
learnMoreButton.addEventListener('click', function() {
  const buttonText = this.textContent;
  speakText(buttonText);
});

calculateButton.addEventListener('click', function() {
  const buttonText = this.textContent;
  speakText(buttonText);
});
///////////////////////////////////////////////////////////////////////
 // You can create a list of countries and their ISO2 codes
        const countries = [
            { code: 'sa', name: 'South Africa' },
            { code: 'gb', name: 'United Kingdom' },
            // Add more countries as needed
        ];

        // Populate the country dropdowns dynamically
        const fromCountrySelect = document.getElementById('from-country');
        const toCountrySelect = document.getElementById('to-country');
        
        countries.forEach(country => {
            const option = document.createElement('option');
            option.value = country.code;
            option.textContent = country.name;
            fromCountrySelect.appendChild(option);
            
            const optionClone = option.cloneNode(true);
            toCountrySelect.appendChild(optionClone);
        });

        async function calculate() {
            const amount = parseFloat(document.getElementById('amount').value);
            const fromCountry = document.getElementById('from-country').value;
            const toCountry = document.getElementById('to-country').value;
            const fromCurrency = document.getElementById('from-currency').value;
            const toCurrency = document.getElementById('to-currency').value;

            const apiUrl = `https://api-uct.mukuru.com/taurus/v1/products/price-check?pay_in_country=${fromCountry}&pay_out_country=${toCountry}&pay_in_currency=${fromCurrency}&pay_out_currency=${toCurrency}&pay_in_amount=${amount}`;

            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                const payOutAmount = parseFloat(data.pay_out_amount);

                const resultElement = document.getElementById('result');
                resultElement.innerHTML = `Converted Amount: ${payOutAmount.toFixed(2)} ${toCurrency}`;
            } catch (error) {
                console.error('Error fetching data:', error);
                const resultElement = document.getElementById('result');
                resultElement.innerHTML = 'Error fetching data. Please try again later.';
            }
        }
        