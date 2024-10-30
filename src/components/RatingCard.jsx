import React, { useState } from 'react';
import StarImg from '../assets/img/icon-star.svg'

const RatingCard = ({ setShowResult, num, setNum }) => {
    const [ratings, setRatings] = useState([1, 2, 3, 4, 5])
    return (
        <div className='rating_card'>
            <div className='star_icon_bg'>
                <img src={StarImg} alt="star-icon" />
            </div>
            <h2>Hello</h2>
            <p>
                Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Suscipit aspernatur sed facere maxime ipsum sunt possimus, saepe omnis nulla? Explicabo vel neque mollitia.</p>
            <div className='rating_card_btns'>

                {
                    ratings.map((currNum, index) => {
                        return (

                            <button key={currNum} onClick={() => {
                                if (currNum === num) {
                                    setNum(nul)
                                } else {

                                    setNum(currNum)
                                }

                            }} className={`rating_btn ${num === currNum ? 'selected' : ''} `}>{currNum}</button>
                        );

                    })

                }

            </div>
            <button disabled={num === null} className='rating_submit_btn' onClick={() => setShowResult(true)}>Submit</button>
        </div>
    )
}

export default RatingCard
