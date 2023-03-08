import './App.css'

export const SunOrMoon = (props) => {
    const h = props.h
    const ampm = props.ampm
    if ((h < 6 && ampm === "AM") || (h > 6 && ampm === "PM")) {
        return <span>🌙</span>
    }
    return (
        <span>☀️</span>
    )
}
