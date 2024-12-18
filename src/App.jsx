import { useState } from 'react'
import Layout from "./Components/Layout.jsx"
import CoffeeForm from "./Components/CoffeeForm.jsx"
import Stats from "./Components/Stats.jsx"
import History from "./Components/History.jsx"
import Hero from "./Components/Hero.jsx"
import {useAuth} from "./context/AuthContext"


function App() {
  const {globalUser, isLoading, globalData} = useAuth()
  const isAuthenticated = globalUser;
  const isData = globalData && !!Object.keys(globalData || {}).length

  const authenticatedContent = (
    <>
      <Stats />
      <History />
    </>
  )

  return (
    <Layout>
      <Hero />
      <CoffeeForm isAuthenticated={isAuthenticated} />
      {(isAuthenticated && isLoading) && (
        <p>Loading data...</p>
      )}
      {(isAuthenticated && isData) && authenticatedContent}
    </Layout>
  )
}

export default App
