import React from "react"

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { time: 0 }
    this.element = React.createRef()
    this.animate = this.animate.bind(this)
  }
  componentDidMount() {
    this.animationFrameReference = requestAnimationFrame(this.animate)
  }
  componentWillUnmount() {
    cancelAnimationFrame(this.animationFrameReference)
  }
  animate(time) {
    this.setState({ time: time / 10 })
    this.animationFrameReference = requestAnimationFrame(this.animate)
  }
  render() {
    const { props,element:{current} } = this
    let width=0, height = 0
    if (current){
      height = current.offsetHeight
      width = current.offsetWidth
    }
    let settings1 = {
      width,
      height,
      time:this.state.time
    }
    let elements = React.Children.toArray(props.children)

    let elementsWithProps=elements.map(e=>React.cloneElement(e,{
      ...settings1
     }))

    return (
      <div className="animation">
        <div className = "j-elementSizeHook" 
            ref={this.element} 
            style={{ position: "relative", height: "100%" }}
        >
         {elementsWithProps}

        </div>
      </div>
    )
  }
}
