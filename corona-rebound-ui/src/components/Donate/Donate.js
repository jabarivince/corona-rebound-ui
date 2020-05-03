import React from 'react'

export default function DonateButton() {
  return (
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" style={{
      display: 'inline',
    }}>
      <input type="hidden" name="cmd" value="_donations" />
      <input type="hidden" name="business" value="B6P579WKQGS9N" />
      <input type="hidden" name="currency_code" value="USD" />
      <input type="hidden" name="amount" value="1" />
      <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
      <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
    </form>
  )
}
