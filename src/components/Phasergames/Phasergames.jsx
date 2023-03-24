import { useState } from 'react'
import { Button } from '../button/Button'
import Headline from '../headline/Headline'
import './phasergames.css'
import Pipe from './pipe.png'


const Phasergames = () => {

const [shroomAnimate, setShroomAnimate] = useState(false)




 




  return (
    <div className='phaser-container'>
   
            <Headline text={"phaser.js games"}/>
          
            <section className='flappy'>
                    <p className='game-title'>Flappy Bird</p>
                    <img src={Pipe} alt='green pipe' />
            </section>
            <img className="pipe" src="/mariomush.png" alt="" />
 
            <a href="https://carinwood-flappy-bird-game.netlify.app/" target="_blank">
            <Button/>
            </a>
    </div>
  )
}

export default Phasergames