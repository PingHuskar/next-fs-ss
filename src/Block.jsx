import './App.css'
import moment from 'moment/moment'

function ordinalafter(ordinal) {
    switch (ordinal.toLowerCase()) {
      case "first": return 1
      case "second": return 8
      case "third": return 15
      case "forth": return 22
    }
  }
  function ordinalbefore(ordinal) {
    switch (ordinal.toLowerCase()) {
      case "first": return 7
      case "second": return 14
      case "third": return 21
      case "forth": return 28
    }
  }

export const Block = (props) => {
    let c = 0
    while (true) {
        let z = moment().add(c, 'days')
        if (z.format('dddd').toLowerCase() === props.dayoftheweek && z.format('D') >= ordinalafter(props.ordinal) && z.format('D') <= ordinalbefore(props.ordinal)) {
          return <>
          <div className='block' >
            { c === 0 ? 
            <p>Today is <b className={z.format('dddd').toLowerCase() + ' firstcap today'}>{props.ordinal} {z.format('dddd')}</b></p>
            : 
            <p>Next <u className='firstcap'>{props.ordinal} {z.format('dddd')}</u> in <span className='cd'>{c}</span> Day{c > 1 ? 's' : ''}</p>
          }
            { c > 0 ? <p><b>(</b>{z.format('LL')}<b>)</b></p> : ''}
          </div>
          <hr />
          </> 
        }
        c++
      }
}
