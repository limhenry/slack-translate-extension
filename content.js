const sgtTranslateMessage = (e) => {
  let sourceText = e.target.dataset.translateMessage
  sourceText = sourceText.replace(/\(edited\)/g, '')
  sourceText = encodeURIComponent(sourceText)
  const fromLang = 'th'
  const toLang = 'en'
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
  const primaryView = document.querySelector(eleName)
  if (!primaryView) return setTimeout(() => init(eleName), 3000)
  const observer = new MutationObserver(() => {
    const messages = primaryView.querySelectorAll('.p-rich_text_block')
    messages.forEach((message) => {
      if (message.dataset.translate) return
      message.dataset.translate = true
      if (!/[\u0e00-\u0e7f]/.test(message.textContent)) return
      const translateButton = document.createElement('div')
      translateButton.className = '___sgt-translate-button'
      translateButton.dataset.translateMessage = message.innerText
      translateButton.addEventListener('click', (e) => sgtTranslateMessage(e))
      translateButton.textContent = '翻譯年糕'
      message.appendChild(translateButton)
    })
  })
  const observerConfig = {
    childList: true,
    subtree: true
  }
  observer.observe(primaryView, observerConfig)
}

init('.p-workspace__primary_view')
init('.p-workspace__secondary_view')