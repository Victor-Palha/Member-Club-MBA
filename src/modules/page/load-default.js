import { apiConfig } from '../../services/api.config.js'
import { populatePage } from './populate-page.js'

document.addEventListener('DOMContentLoaded', async () => {
  // loads default member
  const defaultMember = "124-537-835-230"
  const response = await fetch(`${apiConfig.baseUrl}/clients/${defaultMember}`)
  const member = await response.json()

  populatePage(member)
})
