import { getMemberById } from '../../services/get-member-by-id.js'
import { populatePage } from '../page/populate-page.js'

const content = document.querySelector('.content')
const form = document.querySelector('.form')
const searchText = document.getElementById('search')

form.addEventListener('submit', async event => {
  event.preventDefault()

  try {
    const searchQuery = searchText.value.trim()

    if (!searchQuery) {
      searchText.classList.add('error')
      alert('Please, provide a search query.')
      return
    }

    content.classList.add('loading')

    const result = await getMemberById({ id: searchQuery })

    if (!result) {
      throw new Error('Member not found.')
    }

    await populatePage(result)

    searchText.value = ""
  } catch (error) {
    console.error(error)

    alert('Member was removed or does not exist.')
  }
})
