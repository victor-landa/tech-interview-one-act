'use client'

import React, { useEffect, useState } from 'react'
import { HoverEffect } from '@/components/ui/card-hover-effect'

interface Dog {
  id: string
  attributes: {
    name: string
    description: string
    hypoallergenic: boolean
  }
}

function App() {
  const [results, setResults] = useState<Dog[]>([])

  const getData = async () => {
    const data = await fetch('https://dogapi.dog/api/v2/breeds')
    const results = await data.json()
    setResults(results.data)
    console.log('results', results)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div className='max-w-6xl mx-auto'>
        <HoverEffect items={results} />
      </div>
      {/* <div>
        <div className='max-w-6xl mx-auto pt-10'>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-3 text-sm'>
            {results.map((dog) => (
              <div
                className='border p-3 bg-gray-200 text-black space-y-4 rounded-lg'
                key={dog.id}
              >
                <p className='font-bold text-lg'>
                  Name: {dog.attributes.name} 🐶
                </p>
                <p className='line-clamp-4	'>
                  <span>Description:</span> {dog.attributes.description}
                </p>
                <p>
                  Is hypoallergenic:{' '}
                  {dog.attributes.hypoallergenic ? 'True' : 'False ✅'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </>
  )
}

export default App
