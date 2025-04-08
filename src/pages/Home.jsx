import React, { useState, useEffect } from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Webd from '../components/contents/Webd'

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 300) // 300ms 후 로딩 완료

    return () => clearTimeout(timer)
  }, [])

  return (
    <Main
      title="송재호 포트폴리오"
      description="환영합니다."
    >
      <div className={`home__content fadeInEffect ${isLoaded ? 'isLoaded' : ''}`}>
        <Today />
        <Webd />
      </div>
    </Main>
  )
}

export default Home