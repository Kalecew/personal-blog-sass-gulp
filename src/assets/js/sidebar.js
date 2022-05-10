const burger = document.querySelector('#burger')
const sidebar = document.querySelector('#sidebar')
const body = document.body
const toggleSidebar = () => {
	burger.classList.toggle('burger--active')
	sidebar.classList.toggle('sidebar--active')
}
const closeSidebar = e => {
	const $this = e.target
	if ($this.id !== "burger") {
		burger.classList.remove('burger--active')
		sidebar.classList.remove('sidebar--active')
	}	
}
burger.addEventListener('click', toggleSidebar)
body.addEventListener('click', closeSidebar)