//=============================================================//
//===================== Shows Functions =======================//
//=============================================================//

// function that gets the show data from the api using the bandSiteApiShows instance and the method getShows()

async function reciveShows() {
    const shows = await bandSiteApiShows.getShows()

    // this function also calls the create shows function and supplies it with the show data
    createshows(shows)
}

reciveShows()


// creates the responsive subheading for the mobile and desktop versions of the site

function responsiveSubheading() {

    const topContainer = document.createElement('div')
    topContainer.classList.add('shows__top__container')
    const showsPlacement = document.querySelector('.shows')
    showsPlacement.appendChild(topContainer)

    const responsiveContainer = document.createElement('div')
    responsiveContainer.classList.add('shows__responsive')

    topContainer.appendChild(responsiveContainer)

    const responsiveDate = document.createElement('p')
    responsiveDate.classList.add('shows__tablet__subheading')
    responsiveDate.innerText = 'DATE'
    responsiveContainer.appendChild(responsiveDate)

    const responsiveVenue = document.createElement('p')
    responsiveVenue.classList.add('shows__tablet__subheading')
    responsiveVenue.innerText = 'VENUE'
    responsiveContainer.appendChild(responsiveVenue)

    const responsiveLocation = document.createElement('p')
    responsiveLocation.classList.add('shows__tablet__subheading')
    responsiveLocation.innerText = 'LOCATION'
    responsiveContainer.appendChild(responsiveLocation)

    const div = document.createElement('div')
    div.classList.add('shows__div')
    responsiveContainer.appendChild(div)
}

responsiveSubheading()


// creates the shows section for the site

function createshows(shows) {
    shows.forEach((show) => {

        const showsPlacement = document.querySelector('.shows__top__container')

        const showsContainer = document.createElement('div')
        showsContainer.classList.add('shows__container')
        showsPlacement.appendChild(showsContainer)

        const date = document.createElement('p')
        date.classList.add('shows__subheading')
        date.innerText = 'DATE'
        showsContainer.appendChild(date)

        const showDate = document.createElement('p')
        showDate.classList.add('shows__content')
        showDate.innerText = show.date
        showsContainer.appendChild(showDate)

        const venue = document.createElement('p')
        venue.classList.add('shows__subheading')
        venue.innerText = 'VENUE'
        showsContainer.appendChild(venue)
        
        const showVenue = document.createElement('p')
        showVenue.classList.add('shows__content')
        showVenue.innerText = show.venue
        showsContainer.appendChild(showVenue)
                
        const location = document.createElement('p')
        location.classList.add('shows__subheading')
        location.innerText = 'LOCATION'
        showsContainer.appendChild(location)

        const showLocation = document.createElement('p')
        showLocation.classList.add('shows__content')
        showLocation.innerText = show.location
        showsContainer.appendChild(showLocation)

        const button = document.createElement('button')
        button.classList.add('shows__button')
        button.innerText = 'BUY TICKETS'
        showsContainer.appendChild(button)
    });
}






