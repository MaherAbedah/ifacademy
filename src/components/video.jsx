import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class Video extends Component {
    render () {
        return (
        <div >
            <ReactPlayer
            className='react-player fixed-bottom'
            url= 'video/Kokkola-IFA.mp4'
            width='100%'
            height='50%'
            playing = {true}
            controls = {true}
            />
        </div>
        )
    }
}

export default Video;