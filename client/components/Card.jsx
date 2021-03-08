import React from 'react';

const Card = (props) => (
/*  Render a div with a ptag containing card.question 
        -- Render a labeltag and an inputtag  */
        <div>
<form onSubmit={(e) => {
     e.preventDefault()
     e.persist()
     /*           ***              TESTING CONSOLE LOGS     ***             */
    //  console.log('if it is the correct answer', e.target[0].attributes.iscorrect.value)
    //  console.log('if 1st choice is checked', e.target[0].checked)
    //  console.log(e.target)
     for (let i = 0; i < 4; i++){
         if(e.target[i].checked){
           if(e.target[i].attributes.iscorrect.value === 'true') {
               props.correctChoice(1)
               console.log('correct')
            }
           else console.log('wrong');
         } 
     };
 }}>
    <div>
    <label>Question text here.</label><br></br>
    <br></br>
  <input type="radio" name="quiz1" value="choice1" iscorrect='true'/> choice1<br></br>
  <br></br>
  <input type="radio" name="quiz1" value="choice2" iscorrect='false'/> choice2<br></br>
  <br></br>
  <input type="radio" name="quiz1" value="choice3" iscorrect='false'/> choice3<br></br>
  <br></br>
  <input type="radio" name="quiz1" value="choice4" iscorrect='false'/> choice4<br></br>
  </div>
  <input type='submit' value='submit'/>
</form>

</div> 
)

export default Card;

