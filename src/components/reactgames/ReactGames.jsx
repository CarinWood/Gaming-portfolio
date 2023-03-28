import { Button } from '../button/Button';
import Headline from '../headline/Headline';
import './react.css';
import { BsFillSuitHeartFill, BsFillSuitSpadeFill, BsSuitSpadeFill } from "react-icons/bs";
import Playcards from './playcards.png'



export const ReactGames = () => {
  return (
    <div className='react-page'>
        <Headline text={'react.js games'}/>
        <section className='bj'>
            <p className='game-title'>Black Jack</p>
            <img src={Playcards} alt="" />
            <a href="https://black-jack-carinwood.vercel.app/" target="_blank">
            <Button/>
            </a>
    
        </section>
    </div>
  )
}
