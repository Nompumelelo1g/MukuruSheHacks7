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