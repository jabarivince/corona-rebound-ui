import React from 'react'

export default function Disclaimer() {
  const text = `
    We are not responsible for any financial decisions that you choose
    to make with the information provided by this website. This tool is to be used
    solely for educational purposes. See a certified financial advisor when seeking
    advice on making financial decisions.
  `

  return (
    <div style={{ padding: '2%' }}>
      <p>
        <i><strong>DISCLAIMER: </strong>{text}</i>
      </p>
    </div>
  )
}
