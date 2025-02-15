import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-purple-300 flex justify-between items-center px-7 h-10'>
        <div className=' logo font-bold  '>PassOP</div>
      <ul>
        <li className='flex gap-4'>
            <a className='hover:font-bold' href="">Home</a>
            <a className='hover:font-bold' href="">About</a>
            <a className='hover:font-bold' href="">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
