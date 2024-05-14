//=============================================================//
//================== HTML ELEMENT CREATION ====================//
//=============================================================//


// on load instructions
document.body.onload = addHeading();
document.body.onload = addCommentSection();
document.body.onload = addImageContainer();
document.body.onload = addCommentImage()
document.body.onload = addCommentContainer()
document.body.onload = addNameContainer()
document.body.onload = addName()
document.body.onload = addDate()
document.body.onload = addCommentDiv()
document.body.onload = addcomment()


// function that creates heading, adds text to it & adds a css class to it

function addHeading() {
    //creates heading and the content
    const commentsHeading = document.createElement('h2')
    const headingContent = document.createTextNode('Join the Conversation')

    //appends the content to the heading
    commentsHeading.appendChild(headingContent)
    commentsHeading.classList.add('comments__heading')

    //appends heading to the comments section
    const placement = document.querySelector('.comments');
    placement.appendChild(commentsHeading);
    
};

//=======================================================================

function addCommentSection() {
    //creates comments div and ads a list as a child
    const commentsContainer = document.createElement('div')

    //adds class to div
    commentsContainer.classList.add('comments__container')

    //appends div to the comments section
    const placement = document.querySelector('.comments');
    placement.appendChild(commentsContainer);
}

//=======================================================================

function addImageContainer() {
    //creates image div 
    const imageContainer = document.createElement('div')

    //adds class to div
    imageContainer.classList.add('comments__iContainer')

    //appends div to the comments section
    const placement = document.querySelector('.comments__container');
    placement.appendChild(imageContainer);
}

function addCommentImage() {
    //creates img 
    const commentsImg = document.createElement('img')

    //adds class to img
    commentsImg.classList.add('comments__image')

    //appends img to its parent div
    const placement = document.querySelector('.comments__iContainer');
    placement.appendChild(commentsImg);
}

//=========================================================================

function addCommentContainer() {
    //creates comment div 
    const commentContainer = document.createElement('div')

    //adds class to div
    commentContainer.classList.add('comments__cContainer')

    //appends div to the comments section
    const placement = document.querySelector('.comments__container');
    placement.appendChild(commentContainer);
}

//=========================================================================

function addNameContainer() {
    //creates name div 
    const nameContainer = document.createElement('div')

    //adds class to div
    nameContainer.classList.add('comments__nameContainer')

    //appends div to the comment container
    const placement = document.querySelector('.comments__cContainer');
    placement.appendChild(nameContainer);
}

function addName() {
    //creates name element 
    const name = document.createElement('p')

    //adds class to element
    name.classList.add('comments__name')

    //appends element to the name container
    const placement = document.querySelector('.comments__nameContainer');
    placement.appendChild(name);
}

function addDate() {
    //creates date element 
    const date = document.createElement('p')

    //adds class to element
    date.classList.add('comments__date')

    //appends element to the name container
    const placement = document.querySelector('.comments__nameContainer');
    placement.appendChild(date);
}

//=============================================================================

function addCommentDiv() {
    //creates comment div
    const commentDiv = document.createElement('div')

    //adds class to div
    commentDiv.classList.add('comments__commentDiv')
    //appends div to the comment container
    const placement = document.querySelector('.comments__cContainer');
    placement.appendChild(commentDiv);
}

function addcomment() {
    //creates date element 
    const comment = document.createElement('p')

    //adds class to element
    comment.classList.add('comments__comment')

    //appends element to the name container
    const placement = document.querySelector('.comments__commentDiv');
    placement.appendChild(comment);
}


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



