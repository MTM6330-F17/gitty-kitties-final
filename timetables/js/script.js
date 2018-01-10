var _body = document.getElementById('body')
var _gallery = document.getElementById('gallery')
var _close = document.getElementById('close')
var _modal = document.getElementById('modal')

_gallery.addEventListener('click', function(e){
  console.log(e)
  if(e.target && e.target.className == "intro") {
    var url = e.target.getAttribute("data-src")

    _body.classList.add('no-scroll')
    _modal.innerHTML = '<img src="' + url +'">';
  }
})

function closeEventHandler(e){
  if((e.target && e.target.classList.contains('close')) || (e.keyCode === 27 && _body.classList.contains("no-scroll"))) {
    _body.classList.remove('no-scroll')
  }
}
_close.addEventListener('click', closeEventHandler)
window.addEventListener('keyup', closeEventHandler)