import { loadAccountInfo } from './load-account-info.js'
import { loadHistory } from './load-history.js'
import { loadLoyaltyCard } from './load-loyalty-card.js'
import { loadStatus } from './load-status.js'
import { loadSuccessModal } from './load-success-modal.js'

const content = document.querySelector('.content')

export async function populatePage({
  id,
  name,
  clientSince,
  appointmentHistory,
  loyaltyCard
}) {
  content.classList.add('active')
  content.classList.remove('hidden')

  await loadAccountInfo({ name, clientSince })
  
  loadHistory({
    appointmentHistory,
    totalCuts: loyaltyCard.totalCuts
  })

  loadLoyaltyCard({
    id,
    totalCuts: loyaltyCard.totalCuts,
    cutsNeeded: loyaltyCard.cutsNeeded,
  })

  loadStatus({
    totalCuts: loyaltyCard.totalCuts,
    cutsNeeded: loyaltyCard.cutsNeeded,
    cutsRemaining: loyaltyCard.cutsRemaining
  })

  loadSuccessModal({
    totalCuts: loyaltyCard.totalCuts,
    cutsNeeded: loyaltyCard.cutsNeeded,
  })
}
