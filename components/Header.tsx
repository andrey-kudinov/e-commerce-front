import Link from 'next/link'

import { Nav } from './Nav'

export const Header = () => (
  <header>
    <div className='bar'>
      <Link href='/'>Pansy Cosmetics </Link>
    </div>
    <div className='sub-bar'>
      <p>search</p>
    </div>
    <Nav />
  </header>
)
