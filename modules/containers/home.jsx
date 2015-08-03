import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'redux/react'
import {create} from 'react-style'

import * as HomeActions from './../actions/home-actions'

import GeneratedImage from './../components/generated-image/generated-image'
import TV from './../components/three/tv'

function getImageStyle() {
  return create({
    position: 'absolute',
    left: 0,
    right: 0,
    maxHeight: innerHeight,
    pointerEvents: 'none'
  })
}

function getCanvasStyle() {
  return create({...getImageStyle()})
}

export default class Home extends Component {

  componentDidMount() {
    // addEventListener('resize', () => {
    //   this.forceUpdate()
    // })
  }

  render() {
    return (
      <div style={create({position: 'absolute', left: 0, right: 0})}>
        <TV width={innerWidth} height={innerHeight} src={'./img/lol.jpg'} />
        <img src="./img/crt.png" height={innerHeight} style={getImageStyle()} />
      </div>
    )
  }
}
