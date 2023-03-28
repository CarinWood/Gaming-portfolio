import Headline from '../headline/Headline'
import './unitygames.css'
import { Button } from '../button/Button'
import Dodge from './dodge.png';

const Unitygames = () => {
  return (
    <div className='unityy-container'>
        <Headline text={"Unity Games"}/>

              
        <section className='dodgegame'>
                <p className='game-title'>Dodge Game</p>
                <img className="dodger-image" src={Dodge} alt='' />
                <a href="https://play.unity.com/u/Lady_Cazz" target="_blank">
                    <Button/>
                </a>
        </section>



    </div>
  )
}

export default Unitygames