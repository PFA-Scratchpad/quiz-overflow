import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card';
import { correctChoice, getNewCard } from '../actions/actions';

const mapStateToProps = state => ({
    card: state.quiz.card,
    cardsThisSession: state.quiz.cardsThisSession,
    correctAnswers: state.quiz.correctAnswers,
});

const mapDispatchToProps = {
    getNewCard, 
    correctChoice, 
}

class CardContainer extends Component {
    constructor(props){
        super(props);
        //this.handleQuizAnswer = this.handleQuizAnswer.bind(this);** Uncomment if used between here and render
    }
 
    render() {
        //handleQuizAnswer= {this.handleQuizAnswer} **this was a prop in cards**
        console.log('props in cardcontainer', this.props)
        return(
            <div>
            <Card 
            correctAnswers={this.props.correctAnswers}
            correctChoice={this.props.correctChoice}
            cardsThisSession={this.props.cardsThisSession}
            />
            <div>
            <p>Stats Render Here</p>
            <p>{this.props.correctAnswers}</p>
            <button>Gets Another Question</button>
            </div>
            </div>
        )
    }
}
/*  Once props are mapped connect will be used here  */
export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);