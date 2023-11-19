/* eslint-disable no-unused-vars */
import { useFetch } from './components/useFetch'
import { Cards } from './components/Cards'
import { Paginacion } from './components/Paginacion'
import { useState } from 'react'
import {Navbar } from './components/Navbar'

function App() {
  const [page, setPage] = useState(1)

  const { data, loading, error, info } = useFetch(
    `https://rickandmortyapi.com/api/character?page=${page}`,
    page
  )

  return (
    <main>
      <Navbar />
        <Paginacion
          prev={info?.prev}
          next={info?.next}
          page={page}
          setPage={setPage}
        />
        {error && <li>{error}</li>}
        {loading && <li>Loading...</li>}  
        <Cards data={data} />               
        <Paginacion
          prev={info?.prev}
          next={info?.next}
          page={page}
          setPage={setPage}
        />
      
    </main>
  )
}

export default App
