import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, SetLoading] = useState(true)
  const [tours, SetTours] = useState([])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    SetTours(newTours)
  }

  const fetchTours = async () => {
    SetLoading(true)
    const response = await fetch(url)
    const tours = await response.json()
    SetLoading(false)
    SetTours(tours)
  }
  useEffect(() => {
    fetchTours()
  }, [])

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <div className="underline"></div>
          <button onClick={() => fetchTours()} className="btn">
            Refresh
          </button>
        </div>
      </main>
    )
  }
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default App
