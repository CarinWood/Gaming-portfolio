import { useState } from 'react'
import Headline from '../headline/Headline'
import './phasergames.css'


const Phasergames = () => {

const [shroomAnimate, setShroomAnimate] = useState(false)




 




  return (
    <div className='phaser-container'>
   
            <Headline text={"Games made with phaser.js"}/>
          
            <section className='flappy'>
                    <p className='game-title'>Flappy Bird</p>
            </section>
            <img src="/mariomush.png" alt="" />
    </div>
  )
}

export default Phasergames