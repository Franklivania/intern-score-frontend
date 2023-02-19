import React, { useEffect, useState } from 'react'
import './Data.css'

const Data = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch("https://sheetlabs.com/1313/chibuzofrontend" , {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        
    },
    })
    .then(response => {
    if (response.status === 200) {
        return response.json();
    } else {
        throw new Error('Something went wrong');
    }
    })
    .then(data => console.log(data))
    .catch((error) => {
        console.error(error);
    });
  }, [])

  if (!data) {
    return <div>Loading Data...</div>
  }

  return (
    <div className='data'>
      {data}
    </div>
  )
}

export default Data
