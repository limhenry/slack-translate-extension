const languages = {
  "Afrikaans": "af",
  "Albanian": "sq",
  "Amharic": "am",
  "Arabic": "ar",
  "Armenian": "hy",
  "Azerbaijani": "az",
  "Basque": "eu",
  "Belarusian": "be",
  "Bengali": "bn",
  "Bosnian": "bs",
  "Bulgarian": "bg",
  "Catalan": "ca",
  "Cebuano": "ceb",
  "Chinese (Simplified)": "zh-CN",
  "Chinese (Traditional)": "zh-TW",
  "Corsican": "co",
  "Croatian": "hr",
  "Czech": "cs",
  "Danish": "da",
  "Dutch": "nl",
  "English": "en",
  "Esperanto": "eo",
  "Estonian": "et",
  "Finnish": "fi",
  "French": "fr",
  "Frisian": "fy",
  "Galician": "gl",
  "Georgian": "ka",
  "German": "de",
  "Greek": "el",
  "Gujarati": "gu",
  "Haitian Creole": "ht",
  "Hausa": "ha",
  "Hawaiian": "haw",
  "Hebrew": "he",
  "Hindi": "hi",
  "Hmong": "hmn",
  "Hungarian": "hu",
  "Icelandic": "is",
  "Igbo": "ig",
  "Indonesian": "id",
  "Irish": "ga",
  "Italian": "it",
  "Japanese": "ja",
  "Javanese": "jv",
  "Kannada": "kn",
  "Kazakh": "kk",
  "Khmer": "km",
  "Kinyarwanda": "rw",
  "Korean": "ko",
  "Kurdish": "ku",
  "Kyrgyz": "ky",
  "Lao": "lo",
  "Latin": "la",
  "Latvian": "lv",
  "Lithuanian": "lt",
  "Luxembourgish": "lb",
  "Macedonian": "mk",
  "Malagasy": "mg",
  "Malay": "ms",
  "Malayalam": "ml",
  "Maltese": "mt",
  "Maori": "mi",
  "Marathi": "mr",
  "Mongolian": "mn",
  "Myanmar (Burmese)": "my",
  "Nepali": "ne",
  "Norwegian": "no",
  "Nyanja (Chichewa)": "ny",
  "Odia (Oriya)": "or",
  "Pashto": "ps",
  "Persian": "fa",
  "Polish": "pl",
  "Portuguese": "pt",
  "Punjabi": "pa",
  "Romanian": "ro",
  "Russian": "ru",
  "Samoan": "sm",
  "Scots Gaelic": "gd",
  "Serbian": "sr",
  "Sesotho": "st",
  "Shona": "sn",
  "Sindhi": "sd",
  "Sinhala (Sinhalese)": "si",
  "Slovak": "sk",
  "Slovenian": "sl",
  "Somali": "so",
  "Spanish": "es",
  "Sundanese": "su",
  "Swahili": "sw",
  "Swedish": "sv",
  "Tagalog (Filipino)": "tl",
  "Tajik": "tg",
  "Tamil": "ta",
  "Tatar": "tt",
  "Telugu": "te",
  "Thai": "th",
  "Turkish": "tr",
  "Turkmen": "tk",
  "Ukrainian": "uk",
  "Urdu": "ur",
  "Uyghur": "ug",
  "Uzbek": "uz",
  "Vietnamese": "vi",
  "Welsh": "cy",
  "Xhosa": "xh",
  "Yiddish": "yi",
  "Yoruba": "yo",
  "Zulu": "zu"
}

const generateLanguageDropdown = (ele, pre) => {
  const df = document.createDocumentFragment()
  Object.keys(languages).forEach((key) => {
    const option = document.createElement('option')
    option.value = languages[key]
    option.id = `${pre}${languages[key]}`
    option.textContent = key
    df.appendChild(option)
  })
  ele.appendChild(df)
}

const selectLanguageDropdown = (lang, pre) => {
  document.querySelector(`#${pre}${lang}`).selected = true
}

const translateFrom = document.querySelector('#translate-from-dropdown')
const translateTo = document.querySelector('#translate-to-dropdown')
const translateLabel = document.querySelector('#translate-label')
const translateRegex = document.querySelector('#translate-regex')
const translateReset = document.querySelector('#translate-reset')
const regexCard = document.querySelector('#show-regex-card')

generateLanguageDropdown(translateFrom, 'from-')
generateLanguageDropdown(translateTo, 'to-')

translateFrom.addEventListener('change', (e) => {
  chrome.storage.sync.set({
    translateFrom: e.target.value
  })
})

translateTo.addEventListener('change', (e) => {
  chrome.storage.sync.set({
    translateTo: e.target.value
  })
})

translateLabel.addEventListener('blur', (e) => {
  chrome.storage.sync.set({
    translateLabel: e.target.value
  })
})

translateRegex.addEventListener('blur', (e) => {
  try {
    const match = e.target.value.match(new RegExp('^/(.*?)/([gimy]*)$'))
    new RegExp(match[1], match[2])
    e.target.removeAttribute('error')
    chrome.storage.sync.set({
      translateRegex: e.target.value
    })
  } catch (err) {
    e.target.setAttribute('error', '')
    chrome.storage.sync.set({
      translateRegex: ''
    })
  }
})

translateReset.addEventListener('click', () => {
  chrome.storage.sync.set({
    translateFrom: 'auto',
    translateTo: 'en',
    translateLabel: 'View Translation',
    translateRegex: ''
  }, () => {
    window.location.reload()
  })
})

regexCard.addEventListener('click', (e) => {
  document.querySelector('.regex-card').removeAttribute('hidden')
  e.target.remove()
})

chrome.storage.sync.get({
  translateFrom: 'auto',
  translateTo: 'en',
  translateLabel: 'View Translation',
  translateRegex: ''
}, (e) => {
  document.querySelector(`#from-${e.translateFrom}`).selected = true
  document.querySelector(`#to-${e.translateTo}`).selected = true
  translateLabel.value = e.translateLabel
  translateRegex.value = e.translateRegex
})

