const loyaltyCard = document.getElementById('loyalty-card')
const header = loyaltyCard.querySelector('header')
const couponList = document.getElementsByClassName('coupon-list')[0]

export function loadLoyaltyCard({
  id,
  totalCuts,
  cutsNeeded
}) {
  // Remove the member-id if it already exists
  if (header.querySelector('.member-id')) {
    const memberId = header.querySelector('.member-id')
    memberId.remove()
  }

  // Remove the coupon-list if it already exists
  if (couponList.querySelector('.coupon')) {
    const coupons = couponList.querySelectorAll('.coupon')
    coupons.forEach(coupon => coupon.remove())
  }

  const memberId = document.createElement('p')
  memberId.classList.add('member-id', 'subtitle-sm')
  memberId.textContent = `ID: ${id}`

  header.appendChild(memberId)

  for (let i = 0; i < cutsNeeded; i++) {
    const coupon = document.createElement('li')
    coupon.classList.add('coupon')

    if (i < totalCuts) {
      coupon.innerHTML = '<img src="./src/assets/PinCheck.png" alt="Pin Check" />'
    }

    if (cutsNeeded - 1 === i & cutsNeeded - totalCuts > 0) {
      const lastCoupon = document.createElement('span')
      lastCoupon.classList.add('coupon-special')

      coupon.appendChild(lastCoupon)
    }

    couponList.appendChild(coupon)
  }
}
