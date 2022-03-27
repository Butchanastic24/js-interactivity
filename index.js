const addMovie = (event) => {
    event.preventDefault()
    let inputField = document.querySelector('#movieInput')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    let movieList = document.querySelector('#movieList')
    let message = document.querySelector('#message')
    
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)

    movie.appendChild(movieTitle)
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    
    movieList.appendChild(movie)

    inputField.value = ' '
}

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked')
    let movieName = event.target.textContent
    
    if(event.target.classList.contains('checked')){
        message.textContent = movieName + " Watched!"
    }
    else{
        message.textContent = movieName + " added back!"
    }
    revealMessage()
}

const deleteMovie = (event) => {
    event.target.parentNode.remove()
    let removeX = event.target.parentNode
    removeX.removeChild(removeX.lastChild)
    let movieName = removeX.textContent
    
    message.textContent = movieName + ' Deleted!'
    revealMessage()
}

let movieForm = document.querySelector('#movieForm')
movieForm.addEventListener('submit', addMovie)

const hideMessage = () => {message.classList.add('hide')}
const revealMessage = () => {
    message.classList.remove('hide')
    setTimeout(hideMessage, 1600)
}