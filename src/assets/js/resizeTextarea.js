function resizeTextarea(textarea) {
  textarea.style.height = 0
  textarea.style.height = textarea.scrollHeight + 1 + "px"
  textarea.value.indexOf('\n') > -1 ? 
  	textarea.style.width = "100%" : 
  	textarea.cols = textarea.textLength*2
}
~function () {
  var textarea = document.querySelector('#new-post-input')
  textarea.addEventListener('input', function (e) { resizeTextarea(e.target) })
  resizeTextarea(textarea)
}()
