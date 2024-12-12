const body = document.querySelector('body')

export function loadSuccessModal({
  totalCuts,
  cutsNeeded,
}) {
  if (cutsNeeded - totalCuts === 0) {
    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.classList.add('active')

    const modalContent = document.createElement('div')
    modalContent.classList.add('modal-content')
    
    const closeButton = document.createElement('span')
    closeButton.classList.add('close')
    closeButton.innerHTML = '&times'
    
    const modalMessage = document.createElement('p')
    modalMessage.classList.add('modal-message')
    modalMessage.innerHTML = "Woooohooo Parabéns! <br /> Você ganhou um corte grátis!"
    

    modalContent.appendChild(closeButton)
    modalContent.appendChild(modalMessage)
    modal.appendChild(modalContent)

    body.appendChild(modal)

    closeButton.addEventListener('click', () => {
      if (modal.classList.contains('active')) {
        modal.classList.remove('active')
      }
    })
  }
}
