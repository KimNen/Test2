import React from 'react'
import Link from "next/link";
import { } from 'reactstrap'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link href='/'><a class="navbar-brand" href="#">AWESOME FOOD STORE</a></Link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <Link href='/'><a class="nav-link">Home</a></Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" href='/about'><a class="nav-link">About</a></Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" href='/store'><a class="nav-link">Store</a></Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)
export default Header
