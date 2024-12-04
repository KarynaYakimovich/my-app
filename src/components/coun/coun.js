import { useState } from 'react';
import "./coun.css";

const Coun = (props) => {

const [likes, setLikes] = useState(0)

function plus () {

    if (likes < 10 ) {
       setLikes(
        likes => likes + 1
    )
    }
 
}

function minus () {
    if (likes > 0 ) {
        setLikes(
            likes => likes - 1
        ) 
    }
}
    return (
        <div className='main'>
        <button className='button' onClick={minus} aria-label='decrement'>
          −
        </button>
        <div className='scrin'>
          <div className='scrin_wr'
          >{likes}</div>
        </div>
        <button className='button' onClick={plus} aria-label='increment'>
          +
        </button>
      </div>

    )

}

export default Coun;