import React from 'react';

const Card = (props) => (
    <div className='quesion'><p>Question text will go here</p></div>
    <div className='choices'>
    <form>
        <label >
            <input id='1' type='radio' name='choices'>Choice 1</input>
        </label>
        <label >
            <input id='2' type='radio' name='choices'>Choice 2</input>
        </label>
        <label >
            <input id='3' type='radio' name='choices'>Choice 3</input>
        </label>
        <label >
            <input id='4' type='radio' name='choices'>Choice 4</input>
        </label>
    </form>
    </div>
)

export default Card;