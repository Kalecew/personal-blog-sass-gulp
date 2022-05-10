
const showModalBtns = document.querySelectorAll('[data-show-modal]')
const overlays = document.querySelectorAll('[data-modal-overlay]')
const closeBtns = document.querySelectorAll('[data-modal-close]')
const stopVideo = modal => {
	if (video = modal.querySelector('video')) {
		video.pause()
	} else if (video = modal.querySelector('iframe')) {
		video.src = video.src;
	}	
}
const showModal = e => {
	const data = e.currentTarget.dataset.showModal
	const modal = document.querySelector(`[data-modal=${data}]`)
	modal.classList.remove('hidden')
	const content = modal.querySelector('[data-modal-content]')
	setTimeout(()=>content.classList.remove('modal__content--hidden'), 1)
	document.body.classList.add('no-scroll')
}
const hideModal = e => {
	const data = e.target.dataset
	if ((data.modalOverlay !== undefined)  ||  (data.modalClose !== undefined)) {
		const modal = e.target.closest('[data-modal]')			
		const content = modal.querySelector('[data-modal-content]')
		content.classList.add('modal__content--hidden')
		setTimeout(()=>{
			modal.classList.add('hidden')
			document.body.classList.remove('no-scroll')
		}, 200)		
		stopVideo(e.target)	
	}
}
showModalBtns.forEach(item => {
	item.addEventListener('click', showModal)
})
overlays.forEach(item => {
	item.addEventListener('click', hideModal)
})
closeBtns.forEach(item => {
	item.addEventListener('click', hideModal)
})
