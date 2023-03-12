import './App.css'

export const SunOrMoon = (props) => {
    const h = parseInt(props.h)
    const ampm = props.ampm
    if (
      (
        (h < 6 || h === 12) && ampm === "AM"
      ) 
      || (h > 5 && h < 12 && ampm === "PM")
    ) {
      return <span>🌙</span>;
    }
    return (
        <span>☀️</span>
    )
}
