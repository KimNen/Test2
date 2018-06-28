import React from 'react'
import Link from "next/link";

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/about'><a>About</a></Link></li>
        <li><Link href='/store'><a>Store</a></Link></li>
      </ul>
    </nav>
  </header>
)
export default Header
