import './App.css'
import moment from 'moment/moment'

function fs() {
  let c = 0
  while (true) {
    let z = moment().add(c, 'days')
    // .calendar()
    if (z.format('dddd') === 'Saturday' && z.format('D') <= 7) {
      return <>
      <p>Next <b>First {z.format('dddd')}</b> in <span className='cd'>{c}</span> Day{c>1 ? 's' : ''}</p>
      <p><b>{z.format('LL')}</b></p>
      </>
    }
    c++
  }
}
function ss() {
  let c = 0
  while (true) {
    let z = moment().add(c, 'days')
    // .calendar()
    if (z.format('dddd') === 'Sunday' && z.format('D') >= 8 && z.format('D') <= 14) {
      return <>
      <p>Next <b>Second {z.format('dddd')}</b> in <span className='cd'>{c}</span> Day{c>1 ? 's' : ''}</p>
      <p><b>{z.format('LL')}</b></p>
      </>
    }
    c++
  }
}
function App() {
  return (
    <div className="App">
      <div className="today">
        Today is {moment().format('LL')}
      </div>
      <hr />
      <div className="fs">
        {fs()}
      </div>
      <hr />
      <div className="ss">
        {ss()}
      </div>
    </div>
  )
}

export default App
