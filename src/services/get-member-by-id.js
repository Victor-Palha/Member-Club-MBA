import { apiConfig } from './api.config.js'

export async function getMemberById({ id }) {
  const response = await fetch(`${apiConfig.baseUrl}/clients/${id}`)

  const member = await response.json()

  if (!member) {
    throw new Error('Member not found.')
  }

  return member
}
