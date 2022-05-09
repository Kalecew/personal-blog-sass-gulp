const burger = document.querySelector('#burger')
const sidebar = document.querySelector('#sidebar')
const toggleSidebar = () => {
	burger.classList.toggle('burger--active')
	sidebar.classList.toggle('sidebar--active')
}
burger.addEventListener('click', toggleSidebar);