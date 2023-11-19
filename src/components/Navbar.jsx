import React from 'react'

export const Navbar = () => {
  return (
    <nav className='flex items-center justify-between p-7 gap-5 bg-blue-950'>
      <img src="../../public/logo.png" alt="" width={'80'} />
      <h1 className='text-2xl text-center text-slate-100'>The Rick and Morty API</h1>
      <a href="https://github.com/Gabriel-Aguero/the-rick-and-morty-api" target='_blank'><img src="../../public/social_media_logo.png" alt="" width={'60'} /></a>
      
    </nav>
  )
}
