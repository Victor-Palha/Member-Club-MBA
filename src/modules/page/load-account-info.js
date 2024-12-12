const account = document.getElementById('account')

export async function loadAccountInfo({
  name,
  clientSince
}) {
  // Remove the account-info section if it already exists
  if (document.getElementById('account-info')) {
    const accountInfo = document.getElementById('account-info')
    accountInfo.remove()
  }

  // Remove the avatar url if it already exists
  if (document.querySelector('.avatar img')) {
    const avatarImage = document.querySelector('.avatar img')
    avatarImage.remove()
  }

  const accountInfo = document.createElement('section')
  accountInfo.id = 'account-info'
  accountInfo.classList.add('account-info')

  const avatar = document.createElement('div')
  avatar.classList.add('avatar')

  const avatarContainer = document.createElement('div')
  avatarContainer.classList.add('avatar-container')

  const avatarImage = document.createElement('img')
  const result = await fetch('https://avatar.iran.liara.run/public')
  const avatarUrl = result.url

  avatarImage.src = avatarUrl ?? 'https://avatar.iran.liara.run/public'
  avatarImage.alt = name + "'s avatar"

  const info = document.createElement('div')

  const title = document.createElement('h2')
  title.classList.add('title-sm')
  title.textContent = name

  const text = document.createElement('p')
  text.classList.add('text-xs')
  text.textContent = 'Cliente desde '

  const date = document.createElement('span')
  date.textContent = clientSince

  text.appendChild(date)
  info.appendChild(title)
  info.appendChild(text)

  avatar.appendChild(avatarContainer)
  avatarContainer.appendChild(avatarImage)

  accountInfo.appendChild(avatar)
  accountInfo.appendChild(info)

  account.prepend(accountInfo)
}
