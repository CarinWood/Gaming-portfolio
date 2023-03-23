import { Button } from '../button/Button';
import Headline from '../headline/Headline';
import './react.css';
import { BsFillSuitHeartFill, BsFillSuitSpadeFill, BsSuitSpadeFill } from "react-icons/bs";

export const ReactGames = () => {
  return (
    <div className='react-page'>
        <Headline text={'games with react.js'}/>

        <section className='bj'>
            <p className='game-title'>Black Jack</p>
            <div className='card'>
                <p className='letter'>K</p>
                <BsFillSuitHeartFill className="heart"/>
            </div>
            <div className='card2'>
                <div className='box'>
                <p className='letter2'>A</p>
                <BsSuitSpadeFill className="spade"/>
                </div>
                <BsFillSuitSpadeFill className='big'/>
                <div className='box2'>
                <p className='letter2'>A</p>
                <BsSuitSpadeFill className="spade"/>
                </div>
               
                
          
            </div>
            <Button/>
        </section>
    </div>
  )
}
