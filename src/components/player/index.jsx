'use client'
import { Player } from '@lottiefiles/react-lottie-player';

const PlayerAnimation = ({ link, controls = true }) => {
  return (
    <Player
       autoplay
       controls={controls}
       loop
       mode="normal"
       src={link}>
    </Player>
  )
}

export default PlayerAnimation
