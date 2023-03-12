import './App.css'
import moment from 'moment/moment'
import gsap from 'gsap'
import { Block } from './Block'
import { SunOrMoon } from './SunOrMoon'
import { useEffect } from 'react'
import { CurrentTime } from './CurrentTime'


function App() {
  useEffect(() => {
    const ease = "back"
    gsap.from(".today",{x: -screen.width, duration: 2, delay: 0,ease: ease})
    gsap.from(".block",{x: screen.width, duration: 2, delay: 0,ease: ease})
  })
  return (
    <div className="App">
      <div className='today'>
        <CurrentTime format='LLLL' />&nbsp;
        <SunOrMoon h={moment().format('h')} ampm={moment().format('A')} />
      </div>
      <hr />
      <Block ordinal="first" dayoftheweek="saturday" />
      <Block ordinal="second" dayoftheweek="sunday" />
    </div>
  )
}

export default App
