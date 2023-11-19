/* eslint-disable react/prop-types */

export const Paginacion = ({ prev, next, page, setPage }) => {
  const handlePrevious = () => {
    setPage(page - 1)
  }

  const handleNext = () => {
    setPage(page + 1)
  }

  return (
    <>
      <div className='flex justify-center mb-5 p-5 gap-4'>
        {prev ? (
          <div
            className='bg-blue-800 text-white text-center text-md font-bold cursor-pointer 
                rounded-md px-5 py-3 mx-3 
                shadow-lg shadow-slate-500 hover:bg-blue-500 hover:text-slate-800'
            onClick={handlePrevious}
          >
            {' '}
            Anterior{' '}
          </div>
        ) : null}

        {next ? (
          <div
            className='bg-blue-800 text-white text-center text-md font-bold cursor-pointer 
            rounded-md px-5 py-3 mx-3 
            shadow-lg shadow-slate-500 hover:bg-blue-500 hover:text-slate-800'
            onClick={handleNext}
          >
            Siguiente
          </div>
        ) : null}
      </div>
    </>
  )
}
