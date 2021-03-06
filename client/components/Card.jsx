import React from 'react';

const Card = (props) => (
/*  Render a div with a ptag containing card.question 
        -- Render a labeltag and an inputtag  */
        <div>
<form onSubmit={props.handleQuizAnswer}>
    <div>
    <label>Question text here.</label><br></br>
    <br></br>
  <input type="radio" name="quiz1" value="choice1" /> choice1<br></br>
  <br></br>
  <input type="radio" name="quiz1" value="choice2" /> choice2<br></br>
  <br></br>
  <input type="radio" name="quiz1" value="choice3" /> choice3<br></br>
  <br></br>
  <input type="radio" name="quiz1" value="choice4" /> choice4<br></br>
  </div>
  <input type='submit' value='submit'/>
</form>

</div> 
)

export default Card;

