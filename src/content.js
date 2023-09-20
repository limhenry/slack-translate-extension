const translateLogo = `
  <svg xmlns="http://www.w3.org/2000/svg" width="122" height="16" fill="#757575">
    <path d="M79.16 5.59v1.63h3.92c-.12.93-.42 1.6-.89 2.07a4.01 4.01 0 01-3.03 1.2 4.3 4.3 0 01-4.3-4.36 4.3 4.3 0 017.26-3.19l1.15-1.16A5.7 5.7 0 0079.16.13a6.08 6.08 0 00-6.09 6c0 3.3 2.78 6 6.09 6 1.78 0 3.13-.59 4.19-1.69a5.4 5.4 0 001.41-3.83c0-.38-.02-.73-.08-1.02h-5.52zM89.67 4.25a3.81 3.81 0 013.88 3.88A3.82 3.82 0 0189.67 12a3.83 3.83 0 01-3.89-3.87 3.82 3.82 0 013.89-3.88zm0 6.22c1.17 0 2.18-.96 2.18-2.34 0-1.4-1.01-2.35-2.18-2.35-1.18 0-2.19.95-2.19 2.35 0 1.38 1.01 2.34 2.19 2.34zM108.72 5.12v-.67h1.61v6.98c0 2.86-1.68 4.03-3.68 4.03a3.67 3.67 0 01-3.43-2.29l1.48-.61c.26.63.91 1.37 1.95 1.37 1.28 0 2.07-.79 2.07-2.27v-.54h-.06c-.38.47-1.11.88-2.04.88-1.93 0-3.62-1.7-3.62-3.87 0-2.19 1.69-3.88 3.62-3.88.93 0 1.66.42 2.04.87h.06zm-1.95 5.35c1.16 0 2.07-.98 2.07-2.33 0-1.36-.91-2.36-2.07-2.36-1.17 0-2.07.98-2.07 2.35 0 1.35.9 2.34 2.07 2.34zM98.33 4.25a3.82 3.82 0 013.89 3.88A3.82 3.82 0 0198.33 12a3.82 3.82 0 01-3.88-3.87 3.81 3.81 0 013.88-3.88zm0 6.22c1.18 0 2.19-.96 2.19-2.34 0-1.4-1.01-2.35-2.19-2.35-1.17 0-2.18.95-2.18 2.35 0 1.38 1.01 2.34 2.18 2.34zM111.67.29h1.67V12h-1.67V.29zM118.51 10.47a2.2 2.2 0 001.91-1.07l1.32.88a3.88 3.88 0 01-3.23 1.72c-2.2 0-3.84-1.7-3.84-3.87 0-2.31 1.65-3.88 3.65-3.88 2.01 0 2.99 1.6 3.31 2.47l.18.44-5.18 2.14c.4.78 1.01 1.17 1.88 1.17zm-.13-4.76c-.87 0-2.03.67-2.03 2.3l3.5-1.45c-.19-.5-.78-.85-1.47-.85z"/>
    <path d="M1.21 4.13h1.08v1.53h1.18v.84H2.29v3.93q0 .38.16.57.16.19.54.19.19 0 .51-.07V12q-.42.12-.83.12-.72 0-1.09-.44-.37-.44-.37-1.25V6.5H.05v-.84h1.16V4.13zm6.59 1.5v1q-.24-.04-.53-.04-1.06 0-1.45.91V12H4.74V5.66h1.05l.02.73q.54-.85 1.51-.85.32 0 .48.09zM13.62 12h-1.14q-.09-.19-.15-.67-.76.79-1.81.79-.93 0-1.54-.53-.6-.53-.6-1.35 0-.99.75-1.53.76-.55 2.13-.55h1.05v-.5q0-.57-.34-.9-.34-.34-1-.34-.58 0-.97.29-.4.29-.4.71H8.51q0-.48.34-.92.34-.44.91-.7.58-.26 1.27-.26 1.1 0 1.72.55.62.55.64 1.51v2.92q0 .87.23 1.39V12zm-2.94-.83q.51 0 .97-.26.46-.26.66-.69v-1.3h-.85q-1.99 0-1.99 1.17 0 .51.34.8.34.28.87.28zm4.41-5.51h1.03l.03.8q.73-.92 1.9-.92 2.01 0 2.03 2.27V12H19V7.8q-.01-.68-.32-1.01-.3-.33-.96-.33-.52 0-.92.28-.4.29-.62.74V12h-1.09V5.66zm10.32 4.66q0-.44-.34-.68-.33-.25-1.15-.42-.82-.18-1.31-.43-.48-.24-.71-.58-.23-.34-.23-.81 0-.78.65-1.32.67-.54 1.69-.54 1.08 0 1.75.56.67.56.67 1.42h-1.09q0-.44-.38-.76-.37-.33-.95-.33-.59 0-.92.26-.34.26-.34.68 0 .39.31.59.31.2 1.12.38.82.18 1.32.43.5.25.74.61.25.35.25.86 0 .85-.68 1.37-.68.51-1.76.51-.76 0-1.35-.27-.59-.27-.92-.75-.33-.49-.33-1.05h1.09q.02.54.43.87.41.31 1.08.31.61 0 .98-.24.38-.26.38-.67zM29.08 3v9H28V3h1.08zm6.79 9h-1.14q-.1-.19-.15-.67-.76.79-1.81.79-.94 0-1.54-.53-.6-.53-.6-1.35 0-.99.75-1.53.76-.55 2.12-.55h1.06v-.5q0-.57-.34-.9-.34-.34-1-.34-.58 0-.98.29-.39.29-.39.71h-1.09q0-.48.34-.92.34-.44.91-.7.58-.26 1.27-.26 1.1 0 1.72.55.62.55.64 1.51v2.92q0 .87.23 1.39V12zm-2.94-.83q.51 0 .97-.26.45-.26.66-.69v-1.3h-.85q-1.99 0-1.99 1.17 0 .51.34.8.34.28.87.28zm4.8-7.04h1.08v1.53H40v.84h-1.19v3.93q0 .38.16.57.16.19.54.19.19 0 .52-.07V12q-.43.12-.84.12-.72 0-1.09-.44-.37-.44-.37-1.25V6.5h-1.16v-.84h1.16V4.13zm6.16 7.99q-1.29 0-2.1-.85-.8-.85-.8-2.26v-.2q0-.95.35-1.68.37-.75 1.01-1.17.65-.42 1.41-.42 1.23 0 1.92.82.69.81.69 2.33v.45h-4.3q.02.94.55 1.52.52.57 1.33.57.58 0 .97-.23.4-.24.7-.62l.66.51q-.79 1.23-2.39 1.23zm-.13-5.69q-.66 0-1.1.48-.45.48-.55 1.34h3.17v-.08q-.05-.83-.44-1.28-.4-.46-1.08-.46zm3.6 2.43v-.08q0-1.46.69-2.35.69-.89 1.81-.89 1.11 0 1.76.76V3h1.09v9h-1l-.05-.68q-.65.8-1.81.8-1.11 0-1.8-.91-.69-.9-.69-2.35zm1.08.04q0 1.08.44 1.69.45.61 1.24.61 1.03 0 1.5-.93V7.36q-.49-.9-1.49-.9-.8 0-1.25.62-.44.61-.44 1.82zm14.28-.09v.09q0 1.45-.66 2.34-.67.88-1.8.88-1.2 0-1.85-.85l-.06.73h-.99V3h1.08v3.36q.66-.82 1.81-.82 1.16 0 1.81.88.66.87.66 2.39zm-1.08-.03q0-1.11-.43-1.71-.42-.61-1.23-.61-1.07 0-1.54 1v2.74q.5 1 1.55 1 .78 0 1.22-.61.43-.6.43-1.81zm2.88-3.12l1.58 4.75 1.48-4.75h1.16l-2.55 7.32q-.59 1.58-1.88 1.58l-.21-.02-.4-.07v-.88l.29.02q.55 0 .86-.22.31-.22.51-.82l.24-.64-2.27-6.27h1.19z" />
  </svg>
`
let translateConfig = {}

const sgtTranslateMessage = (e) => {
  const sourceText = encodeURIComponent(e.target.dataset.translateMessage)
  const fromLang = translateConfig.translateFrom
  const toLang = translateConfig.translateTo
  const baseUrl = 'https://translate.googleapis.com/translate_a/single'
  const url = `${baseUrl}?client=gtx&sl=${fromLang}&tl=${toLang}&dt=t&q=${sourceText}`
  fetch(url).then((response) => {
    response.json()
      .then(data => {
        const translatedText = data[0].map(e => e[0]).join(' ')
        const formattedTranslatedText = translatedText.replace('♣ ♣', '♣').replace(/♣{1,}/g, '\n').replace(/^\n/, '').replace(/\n$/, '')
        e.target.textContent = formattedTranslatedText
        e.target.dataset.translateDone = true
        const translateAttribution = document.createElement('a')
        translateAttribution.className = '___sgt-translate-attribution'
        translateAttribution.href = 'https://translate.google.com/'
        translateAttribution.target = '_blank'
        translateAttribution.rel = 'noopener noreferrer'
        translateAttribution.innerHTML = translateLogo
        e.target.appendChild(translateAttribution)
        e.target.dataset.translateMessage = ''
      })
    })
}

const init = (eleName) => {
  console.log('INIT eleName: ' + eleName)
  const view = document.querySelector(eleName)
  console.log(' view: ' + view)
  if (!view) return setTimeout(() => init(eleName), 3000)
  const observer = new MutationObserver(() => {
    const messages = [
      ...view.querySelectorAll('.p-rich_text_block'),
      ...view.querySelectorAll('.c-message_kit__attachments')
    ]
    console.log(' messages found: ' + messages.length)
    messages.forEach((message) => {
      if (message.dataset.translate) return
      message.dataset.translate = true
      const messageEle = message.cloneNode(true)
      const preTexts = messageEle.querySelectorAll('.c-message_attachment_with_pretext')
      preTexts.forEach((e) => e.remove())
      const cMsgs = messageEle.querySelectorAll('.c-message_attachment')
      cMsgs.forEach((e) => e.textContent.match(/^[\d]+ previous repl(y|ies)$/) && e.remove())
      const edited = messageEle.querySelector('.c-message__edited_label')
      edited && edited.remove()
      if (!messageEle.textContent) return
      try {
        const match = translateConfig.translateRegex.match(new RegExp('^/(.*?)/([gimy]*)$'))
        const regex = new RegExp(match[1], match[2])
        if (!regex.test(messageEle.textContent)) return
      } catch (e) {}
      const translateButton = document.createElement('div')
      translateButton.className = '___sgt-translate-button'
      const translateMessage = messageEle.innerHTML.replace(/(<([^>]+)>)/ig, '♣').replace(/♣{1,}/g, '♣').replace('♣ ♣', '♣')
      translateButton.dataset.translateMessage = translateMessage
      translateButton.addEventListener('click', (e) => {
        sgtTranslateMessage(e)
      }, {
        once: true
      })
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
  init('.p-workspace__primary_view_body')
  init('.p-view_contents--secondary')
  init('.c-virtual_list__scroll_container')
})
