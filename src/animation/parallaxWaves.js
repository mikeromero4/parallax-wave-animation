import Wave from "./sineWave"
import React from "react"


export default (props)=>{
    let {height,width,time}=props;
    let centerHeight= Math.max(height/4,60)
    let curves = [
      {
        frequency:props.settings.frequency/1.8,
        amplitude:props.settings.amplitude/3.5,
        yOffset:0,
        lineHeight: height-30,
        flowSpeed: -40,
      },
      {
        frequency:props.settings.frequency/1.3,
        amplitude:props.settings.amplitude/2,
        yOffset:-height*(10/100),
        lineHeight: height/2,
        flowSpeed: -70,
      },
      {
        amplitude:props.settings.amplitude/1.5,
        yOffset:-height*(15/100),
        lineHeight:centerHeight, 
      },
      {
        half:true,
        yOffset:50,
        lineHeight: height/10,
      },
    ]
  return curves.map((e,index)=> 
    <Wave  data={{time, width,...props.settings,...e,index}}/>
    )
  }