import Headline from '../headline/Headline'
import './udemygames.css'
import { Button } from '../button/Button'

const Udemygames = () => {
  return (
    <div className='unityy-container'>
        <Headline text={"Unity Games"}/>

              
        <section className='flappy'>
                <p className='game-title'>Dodge Game</p>
                <img src={""} alt='Dodge Game' />
                <a href="https://play.unity.com/u/Lady_Cazz" target="_blank">
                    <Button/>
                </a>
        </section>



    </div>
  )
}

export default Udemygames