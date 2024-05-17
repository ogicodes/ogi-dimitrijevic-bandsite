//=============================================================//
//=================== Comments Functions ======================//
//=============================================================//


// created an array of objects that holds all of the existing comments 

let comments = [
    {
        'name':'Victor Pinto',
        'date':'11/02/2023',
        'comment':'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.'
    },
    {
        'name':'Christina Cabrera',
        'date':'10/28/2023',
        'comment':'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.'
    },    
    {
        'name':'Isaac Tadesse',
        'date':'10/20/2023',
        'comment':`I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.`
    },
]


// created a forEach loop that parses over the above array and for every object in the array it creates all of the dom elements needed for the section
// then it fills the text nodes of the comments with the name, date and comment 
// loads this onto the page when called


function createAttachComments(comments) {
    comments.forEach((comment) => {

        const commentsContainer = document.createElement('div')
        commentsContainer.classList.add('comments__container')
        const containerPlacement = document.querySelector('.comments');
        containerPlacement.appendChild(commentsContainer);

        const imageContainer = document.createElement('div')
        imageContainer.classList.add('comments__iContainer')
        commentsContainer.appendChild(imageContainer);

        const commentsImg = document.createElement('img')
        commentsImg.classList.add('comments__image')
        imageContainer.appendChild(commentsImg);

        const commentContainer = document.createElement('div')
        commentContainer.classList.add('comments__cContainer')
        commentsContainer.appendChild(commentContainer);

        const nameContainer = document.createElement('div')
        nameContainer.classList.add('comments__nameContainer')
        commentContainer.appendChild(nameContainer);

        const name = document.createElement('p')
        name.classList.add('comments__name')
        nameContainer.appendChild(name);
        name.innerText = comment.name

        const date = document.createElement('p')
        date.classList.add('comments__date')
        nameContainer.appendChild(date);
        date.innerText = comment.date

        const commentDiv = document.createElement('div')
        commentDiv.classList.add('comments__commentDiv')
        commentContainer.appendChild(commentDiv);

        const commentEl = document.createElement('p')
        commentEl.classList.add('comments__comment')
        commentDiv.appendChild(commentEl);
        commentEl.innerText = comment.comment
    })
} 

createAttachComments(comments)


// create function that on submit takes user input from the name & comment fields and creates text nodes
// add these text nodes to the comment section 
// load this on submit of the form 

function addnewComment(comment) {
    const commentsContainer = document.createElement('div')
    commentsContainer.classList.add('comments__container')
    const containerPlacement = document.querySelector('.comments__form-section');
    containerPlacement.insertAdjacentElement('afterend', commentsContainer)

    const imageContainer = document.createElement('div')
    imageContainer.classList.add('comments__iContainer')
    commentsContainer.appendChild(imageContainer);

    const commentsImg = document.createElement('img')
    commentsImg.classList.add('comments__image')
    imageContainer.appendChild(commentsImg);

    const commentContainer = document.createElement('div')
    commentContainer.classList.add('comments__cContainer')
    commentsContainer.appendChild(commentContainer);

    const nameContainer = document.createElement('div')
    nameContainer.classList.add('comments__nameContainer')
    commentContainer.appendChild(nameContainer);

    const name = document.createElement('p')
    name.classList.add('comments__name')
    nameContainer.appendChild(name);
    name.innerText = comment.name

    const date = document.createElement('p')
    date.classList.add('comments__date')
    nameContainer.appendChild(date);
    date.innerText = comment.date

    const commentDiv = document.createElement('div')
    commentDiv.classList.add('comments__commentDiv')
    commentContainer.appendChild(commentDiv);

    const commentEl = document.createElement('p')
    commentEl.classList.add('comments__comment')
    commentDiv.appendChild(commentEl);
    commentEl.innerText = comment.comment
}

const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const name = e.target.name.value
    const comment = e.target.comment.value
    const newComment = {name: name, date: Date(), comment: comment}
    comments.unshift(newComment)
    addnewComment(comments[0])      
})