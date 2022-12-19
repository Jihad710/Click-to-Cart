import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <header className='header'>

      <img src='https://media-exp1.licdn.com/dms/image/C4E22AQFgp3RKOiqsPg/feedshare-shrink_2048_1536/0/1669923794718?e=1672876800&v=beta&t=Y-YCe27UPMeTnFO6MLwVDWfeQIy_7-Uf_LGhTreWIpE' alt= ""/>

      <nav>
        <ul>
        <div>
      <li>
        <Link To="/">Home</Link>
      </li>

      <li>
        <Link To="/about">About</Link>
      </li>
      
      <li>
        <Link To="/products">Products</Link>
      </li>
      
        </div>
        <div>

        </div>
        </ul>
      </nav>

    </header>
  )
}

export default Header