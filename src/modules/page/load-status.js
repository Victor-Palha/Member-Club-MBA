const statusText = document.querySelector('.status-text')
const progressContainer = document.querySelector('.progress-bar-container')
const progress = document.getElementById('progress')

export function loadStatus({
  totalCuts,
  cutsNeeded,
  cutsRemaining
}) {
  // Remove the status text if it already exists
  if (progressContainer.querySelector('p')) {
    const label = progressContainer.querySelector('p')
    label.remove()
  }

  const remaining = document.createElement('span')
  remaining.classList.add('title-md')
  remaining.innerText = `${cutsRemaining}`
  statusText.innerHTML = ' corte restantes'
  statusText.prepend(remaining)
  
  // Get the width of the progress container
  const progressWidth = progressContainer.offsetWidth
  // Calculate the width of each cut
  const unitWidth = progressWidth / cutsNeeded

  // Calculate the current width based on used items
  const currentWidth = unitWidth * totalCuts

  progress.style.width = `${currentWidth}px`

  const label = document.createElement('p')
  label.classList.add('text-xs', 'gray-500')

  label.innerHTML = `${totalCuts} de ${cutsNeeded}`

  progressContainer.appendChild(label)
}
