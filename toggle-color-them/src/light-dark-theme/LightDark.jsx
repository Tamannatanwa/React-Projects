import React, { useState } from 'react'

const LightDark = () => {
    const [theme, setTheme] = useState(false)
    const handleTheme = ()=>{
        setTheme(!theme)
        if(theme){
            document.body.style.backgroundColor = 'white'
            document.body.style.color = 'black'
        }else{
            document.body.style.backgroundColor = 'black'
            document.body.style.color = 'white'
        }
    }
  return (
    <div className='light-dark-node'>
      <div className='container'>
      <p>Hello World !</p>
      <button onClick={handleTheme}>Light Dark Theme</button>
      </div>
    </div>
  )
}

export default LightDark
