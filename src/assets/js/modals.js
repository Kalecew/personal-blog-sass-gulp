
const contactBtns = document.querySelectorAll('[data-show-modal]')
const overlays = document.querySelectorAll('[data-modal-overlay]')
const closeBtns = document.querySelectorAll('[data-modal-close]')
const showModal = (e) => {
	const data = e.target.dataset.showModal
	const modal = document.querySelector(`[data-modal=${data}]`)
	modal.classList.remove('hidden')
	document.body.classList.add('no-scroll')
}
const hideModal = (e) => {
	const data = e.target.dataset
	if ((data.modalOverlay !== undefined)  ||  (data.modalClose !== undefined)) {
		e.target.closest('[data-modal]').classList.add('hidden')	
		document.body.classList.remove('no-scroll')
	}
}
contactBtns.forEach((item) => {
	item.addEventListener('click', showModal)
})
overlays.forEach((item) => {
	item.addEventListener('click', hideModal)
})
closeBtns.forEach((item) => {
	item.addEventListener('click', hideModal)
})
