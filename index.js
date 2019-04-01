function fetchBooks() {
<<<<<<< HEAD
  fetch('https://anapioficeandfire.com/api/characters')
=======
  fetch('https://anapioficeandfire.com/api/books')
>>>>>>> edbd43f41f07dda75d753544d35821e8e1e5b142
  .then(resp => resp.json())
  .then(json => renderBooks(json));
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
