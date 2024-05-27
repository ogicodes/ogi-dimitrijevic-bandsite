//=============================================================//
//=================== Comments Functions ======================//
//=============================================================//

// created an array of objects that holds all of the existing comments 



async function reciveComments() {
    const comments = await bandSiteApiComments.getComments()

    createAttachComments(comments)
}

reciveComments()

async function postNewComment() {

}


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

// calling above function in order for default comments to be on site when it loads 

//createAttachComments(comments)


// created a function that takes one single comment from the comments list as a parameter and loads that onto the page

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





function formValidation() {
    
    // created form variable to be able to grab the form.
    const form = document.getElementById('form')

    // added an event listener to the form.
    form.addEventListener('submit', (e) => {
        e.preventDefault()
    
        // created variables that listen to see if there is a value added to the name and comment fields.
        let x = document.forms["form"]["name"].value;
        let y = document.forms["form"]["comment"].value;
    
        // if else block that checks to see if any fields are left empty.

        // if both are empty change color of borders to red and dont submit form.

        if (y == "" && x == "") {
            const name = document.getElementById('name')
            const comment = document.getElementById('comment')
    
            name.style.border = '1px solid #D22D2D'
            comment.style.border = '1px solid #D22D2D'
    
            return false;
        }

        // if name is empty change color of border to red and dont submit form.
        else if (x == "") {
          const name = document.getElementById('name')
          name.style.border = '1px solid #D22D2D'
          return false;
        }
    
        // if comment is empty change color of border to red and dont submit form.

        else if (y == "") {
            const comment = document.getElementById('comment')
            comment.style.border = '1px solid #D22D2D'
            return false;
        }
    
        // else the function will grab the data from both fields, 
        // create a new comment object, 
        // add that object to the array,
        // call the add new comment function on index zero of the array,
        // and reset the form.
        else {
            const name = e.target.name.value
            const comment = e.target.comment.value
            const newComment = {name: name, date: Date(), comment: comment}
            comments.unshift(newComment)
            addnewComment(comments[0])      
        
            form.reset()
        } 
    })
}

formValidation()


function formFieldReset() {
    const name = document.getElementById('name')
    const comment = document.getElementById('comment')

    name.addEventListener('click', () => {
        name.style.border = '1px solid #000000'
    })

    comment.addEventListener('click', () => {
        comment.style.border = '1px solid #000000'
    })
}

formFieldReset()

  