import React from 'react'

export const Footer = () => {
  return (
    <div className='p-10 bg-blue-950 flex justify-center'>
        <div className='flex flex-col justify-center gap-2 text-white'>
          <h1 className='text-xl font-bold'>Creado con mucho ❤ por Gabriel Agüero</h1>
          <h3 className='text-lg font-light text-center'>👩‍💻 Programador Front end</h3>
          <span className='mx-auto mt-2'>
            <a href="https://github.com/Gabriel-Aguero/the-rick-and-morty-api" target='_blank'><img src="../../public/social_media_logo.png" alt="" width={'40'} /></a>
          </span>
        </div>
    </div>
  )
}
