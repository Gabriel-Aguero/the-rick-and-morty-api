/* eslint-disable func-style */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
export function Cards({ data }) {
  return (
    <div className='grid grid-cols-2 p-2 md:grid-cols-4 gap-6'>
      {data?.map((item) => (
        <div
          className='border-gray-300 bg-gray-200
            shadow-xl divide-y-2 divide-slate-500
            shadow-slate-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'
          key={item.id}
        >
          <h4
            className='text-lg text-white
             p-2 font-bold bg-blue-600'
          >
            {item.name}
          </h4>

          <img alt='Ricky and Morty' className='' src={item.image} width={'400'} />

          <div className='flex flex-col text-left p-3 items-start gap-2'>
            <h4 className='text-xl font-semibold text-slate-700'>
              Specie: {item.species}
            </h4>
            <h4 className='text-xl font-semibold text-slate-500'>
              Status: {item.status}
            </h4>
            <h4 className='text-xl font-semibold text-slate-700'>
              Location: {item.location.name}
            </h4>
          </div>
        </div>
      ))}
    </div>
  )
}
