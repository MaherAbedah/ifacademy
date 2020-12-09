import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class Video extends Component {
  state = {
    playing: true,
  }

  handleEnded = () => {
    console.log('onEnded')
    this.setState({ playing: true })
  }
    render () {
      const {playing} = this.state
        return (
        <div >
            <ReactPlayer
            className='react-player fixed-bottom'
            url= 'video/Kokkola-IFA.mp4'
            width='100%'
            height='50%'
            playing = {playing}
            controls = {true}
            loop = {true}
            muted = {true}
            />
        </div>
        )
    }
}

export default Video;