import React from 'react'

export const Slider = () => {
  return (
    <div className='hidden lg:inline-flex w-1/4 h-screen flex-col gap-2 justify-around p-10'>
      <h4 className='text-2xl font-extrabold text-blue-600'>Personajes</h4>
        {data?.map( (item) => ( 
          <ul key={item.id} className='text-md font-semibold text-slate-800'>
            <li className=''>{item.name}</li>
          </ul>
        ))}
    </div>
  )
}

// componente se crea con el fin de listar los personajes.