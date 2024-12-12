const discountHistory = document.getElementById('discount-history')
const header = discountHistory.querySelector('header')
const couponHistory = document.getElementById('coupon-history')

export function loadHistory({
  appointmentHistory,
  totalCuts
}) {
  // Remove the discount-history section if it already exists
  if (header.querySelector('p')) {
    const count = header.querySelector('p')
    count.remove()
  }

  // Remove the coupon-history section if it already exists
  if (couponHistory.querySelector('li')) {
    const coupons = couponHistory.querySelectorAll('li')
    coupons.forEach(coupon => coupon.remove())
  }

  const count = document.createElement('p')
  count.classList.add('text-xs', 'gray-500')

  count.innerHTML = `${totalCuts} cortes realizados`
  header.appendChild(count)

  appointmentHistory.forEach(appointment => {
    const coupon = document.createElement('li')
    coupon.classList.add('coupon-info')

    const dateContainer = document.createElement('div')
    const check = document.createElement('div')

    const date = document.createElement('strong')
    date.classList.add('subtitle-sm', 'gray-600')
    date.innerHTML = appointment.date

    const time = document.createElement('span')
    time.classList.add('text-xs', 'gray-500')
    time.innerHTML = appointment.time

    const icon = document.createElement('span')
    icon.innerHTML = "Check icon"

    dateContainer.appendChild(date)
    dateContainer.appendChild(time)

    check.appendChild(icon)

    coupon.appendChild(dateContainer)
    coupon.appendChild(check)

    couponHistory.appendChild(coupon)
  })
}
