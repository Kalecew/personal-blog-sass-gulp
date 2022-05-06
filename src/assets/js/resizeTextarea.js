const resizeTextarea = (textarea) => {
  textarea.style.height = 0
  textarea.style.height = textarea.scrollHeight + 1 + "px"
  textarea.value.indexOf('\n') > -1 ? 
  	textarea.style.width = "100%" : 
  	textarea.cols = textarea.textLength*2
}
var textarea = document.querySelectorAll('[data-textarea]')
textarea.forEach(function(item) {
  item.addEventListener('input', (e) => { resizeTextarea(e.target) })
  resizeTextarea(item)
})  
