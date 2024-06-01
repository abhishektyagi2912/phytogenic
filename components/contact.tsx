import Link from 'next/link'
import React from 'react'

function Contact() {
  return (
    <Link href="/Contact"style={{textDecoration:'none'}}>
      <button className="contact-button">Contact</button>
    </Link>
  )
}

export default Contact