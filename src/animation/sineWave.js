import React from "react" //shame
export default({data}) => (
      <div 
        className={'curve curve--layer'+data.index} 
        style={{top:data.yOffset}}
      > 
      <svg
        width={data.width}
        
      >
        <path d={createPath(data)} />
      </svg>
    </div>
  )

function sineFromX(x,settings){
    return settings.amplitude
    + Math.sin(x / settings.frequency
    + settings.time / (settings.flowSpeed||20)) * settings.amplitude
}
function createPath(data) {
    let points = []
    for (let i = 0; i < data.width; i+=50) {
      let x= i - (data.skew||0)
      let y =  sineFromX(x,data)
      points.push([x,y])
    }
    points.push([data.width,sineFromX(data.width,data)])
    if (data.half || !data.lineHeight) {
      //draw one curved side and one flat side
      points = [[0, data.amplitude*2+data.lineHeight],[0, 0], ...points, [data.width, 0],[data.width, data.amplitude*2+data.lineHeight]]
    } 
    else {
      //draw 2 curved sides
      points = [
        ...points,
        ...points.map(e => [e[0] + (data.skew||0), e[1] + data.lineHeight]).reverse(),
      ]
    }
    let path = "M" + points.map(p =>`${p[0]},${p[1].toFixed(2)}`).join(" L")
    return path
  }