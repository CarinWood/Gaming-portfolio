import { useState } from 'react'
import { Button } from '../button/Button'
import Headline from '../headline/Headline'
import './phasergames.css'
import Pipe from './pipe.png'
import Bird from './bird.png'


const Phasergames = () => {

const [shroomAnimate, setShroomAnimate] = useState(false)




 




  return (
    <div className='phaser-container'>
   
   <Headline text={"Phaser.js games"}/>
          
            <section className='flappy'>
                    <p className='game-title'>Flappy Bird</p>
                    <img src={Pipe} alt='green pipe' />
                    <a href="https://carinwood-flappy-bird-game.netlify.app/" target="_blank">
                        <Button/>
                    </a>
            </section>

            <section className='birdgame'>
                    <p className='game-title'>The Bird Game</p>
                    <img id="birdgame-image"src={Bird} alt='green pipe' />
                    <a href="https://carinwood-the-bird-game.netlify.app/" target="_blank">
                        <Button/>
                    </a>
            </section>
            
 
          
    </div>
  )
}

export default Phasergames