import React, { useEffect, useState } from 'react'
import './Data.css'

const Data = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const endpoint = "https://sheetlabs.com/1313/chibuzofrontend"
    const headers = {
        'Content-Type': 'application/json',
    };

    fetch(endpoint, { headers })
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.error(error));
  }, [])
    

  if (!data) {
    return <div>Loading Data...</div>
  }

  return (
    <div className='data'>
        <div className="wrapper">

        <table>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th >Full Name</th>
                    <th>Attendance 100</th>
                    <th>Power Ranking 3000</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr key={item.id}>
                        <td>{item.Rank}</td>
                        <div className="name">
                            <td>{item.FirstName}</td>
                            <td>{item.LastName}</td>
                        </div>
                        <td className='attendance'>{item.Attendance100}</td>
                        <td>{item.PowerRanking3000}</td>
                    </tr>
                ))}
            </tbody>
      </table>
    </div>
    </div>
  )
}

export default Data
