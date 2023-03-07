import './App.css'
import moment from 'moment/moment'
import gsap from 'gsap'
import { Block } from './Block'

function App() {
  const ease = "back"
  gsap.from(".today",{y: -screen.height, duration: 2, delay: 0,ease: ease})
  gsap.from(".b1",{x: -screen.width, duration: 2, delay: .5,ease: ease})
  gsap.from(".b2",{x: screen.width, duration: 2, delay: .75,ease: ease})
  return (
    <div className="App">
      <div className="today">
        Today is {moment().format('LL')}
      </div>
      <Block className="b1" ordinal="first" dayoftheweek="saturday" />
      <Block className="b2" ordinal="second" dayoftheweek="sunday" />
    </div>
  )
}

export default App
