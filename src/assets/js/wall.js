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

let currentPage = 1
const postsCount = 4
const allPostsCount = posts.length
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




const renderPaginations = pagesCount => { 
	const renderPrev = () => {
		return `
			<li class="pagination__item">
				<button class="pagination__link" type="button" data-pagination="prev">&lt;</a>
			</li>
		`
	}
	const renderPages = () => {
		let result = ""
		for (var i = 1; i <= pagesCount; i++) {
			result += `
				<li class="pagination__item">
					<button class="pagination__link" type="button" data-pagination="${i}">${i}</a>
				</li>
			`
		}
		return result
	}
	const renderNext = () => {
		return `
			<li class="pagination__item">
				<button class="pagination__link" type="button" data-pagination="next">&gt;</a>
			</li>
		`
	}
	return renderPrev() + renderPages() + renderNext()
}
const changePagination = currentPage => {
	const paginations = document.querySelectorAll('[data-pagination]')
	paginations.forEach(elem => elem.classList.remove("pagination__link--active"))
	const currentPagination = document.querySelector(`[data-pagination="${currentPage}"]`)
	currentPagination.classList.add("pagination__link--active")
}
const loadPaginations = pagesCount => {
	const paginationsList = document.querySelector('#pagination')	
	paginationsList.innerHTML = renderPaginations(pagesCount)
	changePagination(1)
}





const loadPosts = () => {
	const postsList = document.querySelector('#posts')		
	postsList.innerHTML = ""
	for (var i = postsCount*(currentPage-1); i < postsCount*currentPage; i++) {
		if (i === allPostsCount) return false
		postsList.innerHTML += renderPost(posts[i])
	}	
}
const flipWall = e => {
	const data = e.target.dataset.pagination
	if(data === "prev" && currentPage != 1) {
		currentPage--
	} else if(data === "next" && currentPage != pagesCount) {
		console.log(currentPage)
		console.log(pagesCount)
		currentPage++
	} else if(parseInt(data)){		
		currentPage = data
	}

	changePagination(currentPage)
	loadPosts()
}

loadPaginations(pagesCount)
loadPosts()

document.querySelectorAll('[data-pagination]').forEach(elem => {
	elem.addEventListener('click', flipWall)
})