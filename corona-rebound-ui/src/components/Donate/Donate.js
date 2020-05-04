import React from 'react'

export default function DonateButton() {
  return (
    <div style={{textAlign: 'center'}}>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" style={{
          display: 'inline',
        }}>
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="GR6SVQNXCT3FS" />
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
        <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>

      <br/>
      Help keep us alive! ❤️
    </div>
  )
}
