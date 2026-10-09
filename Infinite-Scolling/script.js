const container = document.querySelector('.container')

const limit = 6
let page = 1
let posts = []
let isFetching = false

async function getData(){
const response = await fetch(`https://dummyjson.com/posts?limit=${limit}&skip=${(page-1)*limit}`)
const jsonData = await response.json()
posts = [...posts , ...jsonData.posts]
isFetching = false
showData(posts)
}


function showData(posts) {
posts.slice((page-1)*limit).forEach((post) => {
    const postCard = document.createElement('div')
    postCard.classList.add('post-card')
    postCard.innerHTML = `<div class="post-card">
            <h1 class="id">${post.id}</h1>
            <div class="title">${post.title}</div>
            <div class="body">${post.body}</div>
        </div>`
        container.appendChild(postCard)
})
}


getData()

window.addEventListener('scroll' , () => {
    //scroll top - how much we have scroll from top
    // scroll height - total scrollable height
    // client height - area client sees at a time
    const { scrollHeight , scrollTop , clientHeight } = document.documentElement

    if(scrollTop + clientHeight >= (scrollHeight-100) && !isFetching) {
        ++page
        isFetching = true
        console.log('hitting bottom' , page)
        getData()
    }
})