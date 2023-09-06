import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import image from '../images/icons8-cross-50.png'

import Cart from './Cart';
export default function Header() {
    
      let [cardVis, setCardVis] = useState(false);
  return (
    <header>   
    {
        
      !cardVis ?
      <FontAwesomeIcon icon={faShoppingCart} className="fa-icon" onClick={() =>   setCardVis(!cardVis)}
        style={{ color: "#004080", zIndex: '4' ,marginRight:'1.3em' }} />
      :
      <img className='fa-icon' src={image} alt="" style={{width:'1.6em' , zIndex:'6',marginRight:'1.3em', color:'#004080' }} onClick={() => setCardVis(!cardVis)} />
    //  <i className="fa-solid fa-xmark"></i>
  //    <FontAwesomeIcon icon="fa-solid fa-xmark" style={{color: "#ffffff",}} /> 
   // <FontAwesomeIcon icon={faXmarkCircle} className='fa-icon' style={{ color: "#fff", zIndex: '7' }}  onClick={() => setCardVis(!cardVis)}   />
    }
    <h1 className='heading'>Supplement Store</h1>

  {
      cardVis ? <Cart /> : null
    }
    </header>

  )
}
