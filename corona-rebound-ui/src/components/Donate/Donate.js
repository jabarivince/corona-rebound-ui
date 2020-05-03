import React from 'react'

export default function DonateButton() {
  const URL = "https://www.paypal.com/cgi-bin/webscr"
  const paypalImg = "https://www.paypal.com/en_US/i/scr/pixel.gif"
  const title = "PayPal - The safer, easier way to pay online!"
  const alt = "Donate with PayPal button"

  return (
    <form target="_blank" action={URL} method="post" style={{
      display: 'inline',
    }}>
      <input type="hidden" name="cmd" value="_donations" />
      <input type="hidden" name="business" value="B6P579WKQGS9N" />
      <input type="hidden" name="currency_code" value="USD" />
      <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" title={title} alt={alt} />
      <img alt="" border="0" src={paypalImg} width="1" height="1" />
    </form>
  )
}
