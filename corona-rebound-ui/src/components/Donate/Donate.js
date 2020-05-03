import React from 'react'

export default function DonateButton() {
  return (
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" style={{
      display: 'inline',
    }}>
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="H9BTTKATWVNB4" />
      <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
      <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
    </form>
  )
}
