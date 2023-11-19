import { useEffect, useState } from 'react'

export function useFetch(url, page) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [info, setInfo] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        setData(response.results)
        setInfo(response.info)
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }, [page])

  return { data, loading, error, info }
}
