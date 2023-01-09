const $token = document.querySelector('#token')
const $amountDeposited = document.querySelector('#amountDeposited')
const $form = document.querySelector('#form')
const $output = document.querySelector('#output')

const SECONDS_IN_DAY = 86400
const STABLE_TOKEN_DAYS = 18250
const ETH_TOKEN_DAYS = 12 // STABLE_TOKEN_DAYS / 1500
const SNX_TOKEN_DAYS = 7300 // STABLE_TOKEN_DAYS / 2.50

function getTokenDays (token) {
  if (token === 'ETH') {
    return ETH_TOKEN_DAYS
  } else if (token === 'SNX') {
    return SNX_TOKEN_DAYS
  }

  return STABLE_TOKEN_DAYS
}

function calcNumDaysNeeded (token, amount) {
  return getTokenDays(token) / amount
}

// example calculate token balance
// function calcRate(token, amount) {
//  const rate = STABLE_TOKEN_DAYS/getTokenDays(token)
//  return rate * amount
// }
// const totalBalance = 1520.83334 + calcRate(11)

function calculate () {
  try {
    $output.innerText = ''
    const token = $token.value
    const amount = Number($amountDeposited.value)

    const days = calcNumDaysNeeded(token, amount)
    $output.innerText = `${days.toFixed(2)} ${days === 1 ? 'day' : 'days'}`
  } catch (err) {
    console.error(err)
    alert(err.message)
  }
}

$form.addEventListener('submit', (event) => {
  event.preventDefault()
  calculate()
})

calculate()
