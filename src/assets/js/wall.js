const posts = [
	{
		link: null,
		img: null,
		video: null,
		title: null,
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
		date: "2020-06-21",
		category: null,
	},
	{
		link: {src: "article.html", title: "читать"},
		img: "assets/images/files/posts/preview1.jpg",
		video: null,
		title: "Как писать код быстро и безболезненно?",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
		date: "2020-06-21",
		category: {link: "create-sites.html", title: "создание сайтов"},
	},
	{
		link: {src: "article.html", title: "оставить комментарий"},
		img: null,
		video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
		title: "Купил новый ноутбук за 150 000 руб",	
		text: null,
		date: "2020-06-21",
		category: {link: "video-promotion.html", title: "продвижение видео"},
	},
	{
		link: {src: "article.html", title: "читать"},
		img: "assets/images/files/posts/preview2.jpg",
		video: null,
		title: "Как я сходил на FrontEnd Conf 2021",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
		date: "2020-06-21",
		category: {link: "internet-marketing.html", title: "интернет маркетинг"},
	},
	{
		link: null,
		img: null,
		video: null,
		title: null,
		text: "Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
		date: "2020-06-21",
		category: null,
	},
	{
		link: null,
		img: null,
		video: null,
		title: null,
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
		date: "2020-06-21",
		category: null,
	},
	{
		link: null,
		img: null,
		video: null,
		title: null,
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. ",
		date: "2020-06-21",
		category: null,
	},
	{
		link: null,
		img: null,
		video: null,
		title: null,
		text: "Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
		date: "2020-06-21",
		category: null,
	},
	{
		link: null,
		img: null,
		video: null,
		title: null,
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
		date: "2020-06-21",
		category: null,
	},
	{
		link: null,
		img: null,
		video: null,
		title: null,
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. ",
		date: "2020-06-21",
		category: null,
	},
	{
		link: null,
		img: null,
		video: null,
		title: null,
		text: "Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
		date: "2020-06-21",
		category: null,
	},
	{
		link: null,
		img: null,
		video: null,
		title: null,
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
		date: "2020-06-21",
		category: null,
	},
	{
		link: null,
		img: null,
		video: null,
		title: null,
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. ",
		date: "2020-06-21",
		category: null,
	},
	{
		link: null,
		img: null,
		video: null,
		title: null,
		text: "Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
		date: "2020-06-21",
		category: null,
	},
	{
		link: null,
		img: null,
		video: null,
		title: null,
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
		date: "2020-06-21",
		category: null,
	},
	{
		link: null,
		img: null,
		video: null,
		title: null,
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. ",
		date: "2020-06-21",
		category: null,
	},
]


const filterPosts = () => {
	const path = window.location.pathname.substring(1)
	if (path == "index.html") return posts
	else {
		return posts.filter(post => post.category !== null && post.category.link === path)
	}
}
let currentPage = 1
const postsCount = 4
const allPostsCount = filterPosts().length
// console.log(allPostsCount)
const pagesCount = Math.ceil(allPostsCount / postsCount)








const renderPost = post => {
	const renderImg = ({link, img}) => {
		if (img !== null) {
			return `
				<header class="post__header">
					<div class="post__img-wrap">
						<a class="link-wrap" href="${link.src}">
							<img class="post__img" src="${img}">
						</a>	
					</div>							
				</header>
			`				
		}
		return ``	
	}
	const renderVideo = ({video}) => {
		if (video !== null) {
			return `
				<header class="post__header">
					<div class="post__video-wrap">
						<video class="post__video" src="${video}" controls></video>
					</div>		
				</header>
			`				
		}
		return ``	
	}
	const renderTitle = ({link, title}) => {
		if (title !== null) {
			return `
				<h3 class="post__title">
					<a class="link-wrap" href="${link.src}">${title}</a>
				</h3>
			`				
		}
		return ``	
	}
	const renderText = ({text}) => {
		if (text !== null) {
			return `
				<p class="post__text">${text}</p> 
			`				
		}
		return ``	
	}
	const renderCategory = ({category}) => {
		if (category !== null) {
			return `
				<div class="post__category">
					<a class="link-wrap" href="${category.link}">${category.title}</a>
				</div>
			`				
		}
		return ``	
	}
	const renderDate = ({date}) => {
		if (date !== null) {
			const formattedDate = new Date(date).toLocaleDateString()
			return `
				<time class="post__date" datetime="${date}">${formattedDate}</time>
			`				
		}
		return ``	
	}
	const renderLink = ({link}) => {
		if (link !== null) {
			return `
				<a class="post__link" href="${link.src}">${link.title}</a>
			`				
		}
		return ``	
	}
	return `
		<li class="posts__item">
			<div class="posts__card post">
				` + renderImg(post) + `	
				<div class="post__container">
					` + renderVideo(post) + `	
					<div class="post__content">	
						` + renderTitle(post) + renderText(post) + `
					</div>							
					<footer class="post__footer">
						`+ renderDate(post) + renderCategory(post) + renderLink(post) + `						
					</footer>	
				</div>						
			</div>
		</li>
	`
}




const renderPaginations = currentPage => { 
	const renderPrev = () => {
		const disabled = currentPage == 1 ? "disabled" : ""
		return `
			<li class="pagination__item">
				<button class="pagination__link" data-pagination="prev" ${disabled} type="button">&lt;</button>
			</li>
		`
	}
	const renderPages = () => {
		const start = currentPage == 1 ? 1 : currentPage == pagesCount ? currentPage - 2 : currentPage - 1
		let result = ""
		let j = 1
		for (var i = start; i <= pagesCount; i++) {
			result += `
				<li class="pagination__item">
					<button class="pagination__link" data-pagination="${i}" type="button">${i}</button>
				</li>
			`
			if (j === 3) break 
			else j++
		}
		return result
	}
	const renderNext = () => {
		const disabled = currentPage == pagesCount ? "disabled" : ""
		return `
			<li class="pagination__item">
				<button class="pagination__link" data-pagination="next" ${disabled} type="button">&gt;</button>
			</li>
		`
	}		
	return (
		renderPrev() +
		renderPages() +
		renderNext()
	)
}
const loadPaginations = currentPage => {
	const paginationsList = document.querySelector('#pagination-list')	
	paginationsList.innerHTML = renderPaginations(currentPage)
	document.querySelectorAll('[data-pagination]').forEach(elem => {
		elem.addEventListener('click', flipWall)
	})
}
const changePagination = currentPage => {
	if (pagesCount === 1) {
		const paginationBlock = document.querySelector('#pagination')
		paginationBlock.remove()
		return false
	}
	loadPaginations(currentPage)
	const paginations = document.querySelectorAll('[data-pagination]')
	paginations.forEach(elem => elem.classList.remove("pagination__link--active"))
	const currentPagination = document.querySelector(`[data-pagination="${currentPage}"]`)
	currentPagination.classList.add("pagination__link--active")
}
const loadPosts = () => {
	const postsList = document.querySelector('#posts')		
	postsList.innerHTML = ""
	for (var i = postsCount*(currentPage-1); i < postsCount*currentPage; i++) {
		if (i === allPostsCount) return false
		postsList.innerHTML += renderPost(filterPosts()[i])
	}	
}
const scrollTop = () => {
	const top = document.querySelector("#top")
	top.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
}
const flipWall = e => {
	const data = e.target.dataset.pagination
	if(data === "prev" && currentPage != 1) {
		currentPage--
	} else if(data === "next" && currentPage != pagesCount) {
		currentPage++
	} else if(parseInt(data)){		
		currentPage = data
	}
	changePagination(currentPage)
	loadPosts()
	scrollTop()
}
const wall = document.querySelector('#wall')
if (wall !== null) {
	changePagination(1)
	loadPosts()
}




