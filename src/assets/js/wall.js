const posts = [
	{
		link: "",
		img: "",
		video: "",
		title: "",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
		date: "2020-06-21",
		category: "",
	},
	{
		link: {src: "article.html", title: "читать"},
		img: "assets/images/files/posts/preview1.jpg",
		video: "",
		title: "Как писать код быстро и безболезненно?",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
		date: "2020-06-21",
		category: {link: "create-sites.html", title: "создание сайтов"},
	},
	{
		link: {src: "article.html", title: "оставить комментарий"},
		img: "",
		video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
		title: "Купил новый ноутбук за 150 000 руб",	
		text: "",
		date: "2020-06-21",
		category: {link: "video-promotion.html", title: "продвижение видео"},
	},
	{
		link: {src: "article.html", title: "читать"},
		img: "assets/images/files/posts/preview2.jpg",
		video: "",
		title: "Как я сходил на FrontEnd Conf 2021",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
		date: "2020-06-21",
		category: {link: "internet-marketing.html", title: "интернет маркетинг"},
	},
]


const postsList = document.querySelector('#posts')
const renderPost = post => {
	const renderImg = ({link, img}) => {
		if (img !== "") {
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
		if (video !== "") {
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
		if (title !== "") {
			return `
				<h3 class="post__title">
					<a class="link-wrap" href="${link.src}">${title}</a>
				</h3>
			`				
		}
		return ``	
	}
	const renderText = ({text}) => {
		if (text !== "") {
			return `
				<p class="post__text">${text}</p> 
			`				
		}
		return ``	
	}
	const renderCategory = ({category}) => {
		if (category !== "") {
			return `
				<div class="post__category">
					<a class="link-wrap" href="${category.link}">${category.title}</a>
				</div>
			`				
		}
		return ``	
	}
	const renderDate = ({date}) => {
		if (date !== "") {
			const formattedDate = new Date(date).toLocaleDateString()
			return `
				<time class="post__date" datetime="${date}">${formattedDate}</time>
			`				
		}
		return ``	
	}
	const renderLink = ({link}) => {
		if (link !== "") {
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

const loadPosts = () => {
	posts.forEach(post=>{
		postsList.innerHTML += renderPost(post)
	})
	
}
loadPosts()
