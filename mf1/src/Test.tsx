import React, { useEffect, useState } from "react"

const Test = () => {
  const [color, setColor] = useState('red')
  useEffect(() => {
    console.log("sheeh");
    
  }, [])
  return (
    <div onClick={() => setColor("green")} style={{background: color, width: "100%", height: "100%"}}>Test</div>
  )
}

export default Test