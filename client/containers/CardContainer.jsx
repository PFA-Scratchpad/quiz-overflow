import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card';

class CardContainer extends Component {
    constructor(props){
        super(props);
        //this.handleQuizAnswer = this.props.handleQuizAnswer.bind(this);
    }
 handleQuizAnswer(e){
     e.preventDefault()
     e.persist()
     console.log(e)
 }
    render() {
        return(
            <div>
            <Card handleQuizAnswer= {this.handleQuizAnswer}/>
            <div>
            <p>Stats Render Here</p>
            <button>Gets Another Question</button>
            </div>
            </div>
        )
    }
}
/*  Once props are mapped connect will be used here  */
export default CardContainer;