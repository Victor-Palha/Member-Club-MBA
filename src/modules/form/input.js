const searchText = document.getElementById('search')
const submitButton = document.getElementById('submit-button')

searchText.addEventListener('input', event => {
  const hasCharactersRegex = /\D+/g
  searchText.value = searchText.value.replace(hasCharactersRegex, '')

  if (searchText.value > 0 ) {
    submitButton.classList.remove('blocked')
    submitButton.classList.add('active')

    // add - in between numbers
    // like this 123-456-789-023
    if (searchText.value.length > 3) {
      searchText.value = searchText.value.slice(0, 3) + '-' + searchText.value.slice(3)
    }

    if (searchText.value.length > 7) {
      searchText.value = searchText.value.slice(0, 7) + '-' + searchText.value.slice(7)
    }

    if (searchText.value.length > 11) {
      searchText.value = searchText.value.slice(0, 11) + '-' + searchText.value.slice(11)
    }

    // dont allow more than 15 characters
    if (searchText.value.length > 15) {
      searchText.value = searchText.value.slice(0, 15)
    }

    return 
  } else {
    submitButton.classList.add('blocked')
    submitButton.classList.remove('active')
  }

  searchText.classList.remove('error')
})
