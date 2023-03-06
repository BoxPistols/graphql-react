// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import "./App.css"
import { gql, useQuery } from "@apollo/client"

const ANIMALS = gql`
  query MyQuery {
    animals {
      name
      id
      thumb {
        fileName
        url
      }
    }
  }
`

function App() {
  console.log(useQuery(ANIMALS))

  const { data, loading, error } = useQuery(ANIMALS)

  if (loading) return "loading..."
  if (error) return "error..."

  return (
    <>
      {data.animals.map((animal) => (
        <div kay={animal.id}>
          <div className="card">
            <p>{animal.name}</p>
            <img src={animal.thumb.url} alt="" />
          </div>
        </div>
      ))}
    </>
  )
}

export default App
