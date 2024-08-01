import React from 'react'

const Navbar = () => {

    const links = [
        {
            id: 1,
            name: "Home"
        },
        {
            id: 2,
            name: "About"
        },
        {
            id: 3,
            name: "Services"
        },
        {
            id: 4,
            name: "Projects"
        },
        {
            id: 5,
            name: "Resume"
        }
    ]
  return (
    <nav className='flex items-center justify-center'>
      {/* Main div */}
      <div className='w-11/12 flex items-center justify-center'>
      </div>
    </nav>
  )
}

export default Navbar
