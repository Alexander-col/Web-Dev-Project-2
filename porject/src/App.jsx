import {useState} from 'react'
import './App.css'

function App() 
{
  const colors = ['#FF0000', '#00FF00', '#0000FF'] // red, green, blue
  const [colorIndex, setColorIndex] = useState(0)

  const changeColor = () => 
  {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length)//using it's lengh divisor to cycle 3 colors
  }

  return (
    <div className="container" style={{ backgroundColor: colors[colorIndex]}}>
      <button className="color-button" onClick={changeColor}>
        Change Background Color
      </button>
    </div>
  )//return is the change of the background
}

export default App
