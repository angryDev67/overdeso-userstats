import { useEffect, useState } from 'react'
import './App.css'
import ProfileCard from './ProfileCard'

const API_URL = 'https://api.overdeso.com/v1'

function App() {
  const [userData, setUserData] = useState()

  useEffect(() => {
    const getUserData = async () => {
      const response = await fetch(`${API_URL}`, {
        method: 'POST',
        body: JSON.stringify([
          {
            method: 'account.get',
            params: { account: 'brootle' },
          },
        ]),
      })
      const json = await response.json()
      // small hack to get the data and error from response
      const [error, data] = json[0]
      console.log(data)

      if (error) {
        console.error(error)
        return
      }

      setUserData(data)
    }
    getUserData()
  }, [])

  return (
    <div className="App">
      <ProfileCard userData={userData} />
    </div>
  )
}

export default App
