let translateConfig = {}

const sgtTranslateMessage = (e) => {
  let sourceText = e.target.dataset.translateMessage
  sourceText = sourceText.replace(/\(edited\)/g, '')
  sourceText = encodeURIComponent(sourceText)
  const fromLang = translateConfig.translateFrom
  const toLang = translateConfig.translateTo
  const baseUrl = 'https://translate.googleapis.com/translate_a/single'
  const url = `${baseUrl}?client=gtx&sl=${fromLang}&tl=${toLang}&dt=t&q=${sourceText}`
  fetch(url).then((response) => {
    response.json()
      .then(data => {
        e.target.textContent = data[0].map(e => e[0]).join(' ')
        e.target.dataset.translateDone = true
      })
    })
}

const init = (eleName) => {
  const view = document.querySelector(eleName)
  if (!view) return setTimeout(() => init(eleName), 3000)
  const observer = new MutationObserver(() => {
    const messages = view.querySelectorAll('.p-rich_text_block')
    messages.forEach((message) => {
      if (message.dataset.translate) return
      message.dataset.translate = true
      if (!message.textContent) return
      try {
        const match = translateConfig.translateRegex.match(new RegExp('^/(.*?)/([gimy]*)$'))
        const regex = new RegExp(match[1], match[2])
        if (!regex.test(message.textContent)) return
      } catch (e) {}
      const translateButton = document.createElement('div')
      translateButton.className = '___sgt-translate-button'
      translateButton.dataset.translateMessage = message.innerText
      translateButton.addEventListener('click', (e) => sgtTranslateMessage(e))
      translateButton.textContent = translateConfig.translateLabel || 'View Translation'
      message.appendChild(translateButton)
    })
  })
  const observerConfig = {
    childList: true,
    subtree: true
  }
  observer.observe(view, observerConfig)
}

chrome.storage.sync.get({
  translateFrom: 'auto',
  translateTo: 'en',
  translateLabel: 'View Translation',
  translateRegex: false
}, (e) => {
  translateConfig = e
  init('.p-workspace__primary_view')
  init('.p-workspace__secondary_view')
})
