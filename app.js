const comments = [
    {
        image: 'assets/commenter1.jpeg',
        name: 'Matthew Paul',
        content: 'Perfect, very good job! Thank you for the amazing design and work. Really impressed with the high quality and quick turnaround time. Highly recommend.'
    },
    {
        image: 'assets/Pogba.jpg',
        name: 'Paul Pogba',
        content: 'Just perfect! I use it for the last two year (and Mbappe too)! Just perfect!'
    },
    {
        image: 'assets/Zinchenko.jpg',
        name: 'Alex Zinchenko',
        content: 'I really like it, very good!'
    }
]

// add nav links
const commentNav = document.querySelector('.comment__nav')
const circleHtmlCode = '<div class="circle"></div>'
const activeCircle = '<div class="circle circle--active"></div>'
for (let i = 0; i < comments.length; i++) {
    if (i === 0) {
        commentNav.innerHTML += activeCircle
        continue
    }
    commentNav.innerHTML += circleHtmlCode
}


const circles = document.querySelectorAll('.circle')
const image = document.querySelector('.comment__preview__image img')
const title = document.querySelector('.comment__title')
const content = document.querySelector('.comment__content')

circles.forEach((circle, index) => {
    circle.addEventListener('click', (e) => {
        image.src = comments[index].image
        title.innerText = comments[index].name
        content.innerText = comments[index].content

        circles.forEach(circle => circle.classList.remove('circle--active'))
        circles[index].classList.add('circle--active')
    })
})