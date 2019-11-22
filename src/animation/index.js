import React from "react"
import "./style.scss"
import Waves from "./parallaxWaves"
import Icons from "./icons"
import Wrapper from  "./animationWrapper"

let animationSettings = {
  speed: 0.4,
  frequency: 120,
  amplitude: 15,
  flowSpeed: 90,
}

let iconSettings={
  shrink: false,
  iconSize: 60,
  spacing: 60,
}
let waveSettings={
  lineHeight: 50,
}
export default ()=>
      <Wrapper>
        <Test/>
      </Wrapper>

function Test(props){
 // Loop the movement on X axis
 //x / animationSettings.frequency + time / flowSpeed 
let waveX =   (props.width)/animationSettings.frequency+props.time/animationSettings.flowSpeed     // the x coordinate (phase) of the sine wave
let y = Math.sin(waveX) * animationSettings.amplitude  
console.log(props.width)
  return<div style={{
    position:'absolute',
    width: '100%',
    top: y+'px'

  }}>
  <Icons {...props} settings={{...animationSettings, ...iconSettings,width:props.width}} /> 
<Waves {...props} settings={{...animationSettings, ...waveSettings,width:props.width}} />
</div>
}