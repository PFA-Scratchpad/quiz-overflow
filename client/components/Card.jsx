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
    <label>{props.card.question}</label><br></br>
    <br></br>
  <input type="radio" name="quiz" value="choice1" iscorrect={`${props.card.choices[0].isCorrect}`}/> {props.card.choices[0].text}<br></br>
  <br></br>
  <input type="radio" name="quiz" value="choice2" iscorrect={`${props.card.choices[1].isCorrect}`}/> {props.card.choices[1].text}<br></br>
  <br></br>
  <input type="radio" name="quiz" value="choice3" iscorrect={`${props.card.choices[2].isCorrect}`}/> {props.card.choices[2].text}<br></br>
  <br></br>
  <input type="radio" name="quiz" value="choice4" iscorrect={`${props.card.choices[3].isCorrect}`}/> {props.card.choices[3].text}<br></br>
  </div><br></br>
  <input type='submit' value='submit'/>
</form>

</div> 
)

export default Card;

