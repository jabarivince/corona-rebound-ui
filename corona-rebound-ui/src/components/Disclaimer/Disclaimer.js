import React from 'react'

export default function Disclaimer() {
  const text = `
    This website and the information contained herein is not intended to be a source
    of financial, investment or other professional advice. This website is for general
    information on matters of interest only, and the information is provided with the
    understanding that the authors are not engaged in rendering any investing, financial
    or other professional advice or services. Thus, information on this site should not
    be used as such. Before making any decsions or taking any actions, consult with a
    professional investment, financial or other competent advisor. While the authors
    of this site make every attempt to ensure the accuracy of information contained in
    this site, all information is provided with no guarantee of completeness, accuracy,
    or timeliness and authors are not responsible for any errors or omissions or any
    results obtained from the use of this information. In no event will the authors be
    liable to you or anyone for any decision made or action take in reliance of the
    information on this site.
  `

  return (
    <div style={{ padding: '2%', textAlign: 'center', fontSize: '10px' }}>
      <p>
        <i><strong>DISCLAIMER: </strong>{text}</i>
      </p>
    </div>
  )
}
