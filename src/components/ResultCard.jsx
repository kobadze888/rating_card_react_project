import React from 'react'
import resultImg from '../assets/img/Res_icon.svg'
const ResultCard = ({num}) => {
    return (
        <div className='result_card'>
            <img src={resultImg} />
            <p className='result_card_p'>You selected {num} out of 5</p>
            <h2>Hello</h2>
            <p>
                Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Suscipit aspernatur sed facere maxime ipsum sunt possimus,
                saepe omnis nulla? Explicabo vel neque mollitia.
            </p>

        </div>
    )
}

export default ResultCard
