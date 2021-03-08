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
    }
 
    render() {
        //console.log('props in cardcontainer', this.props)
        return(
            <div>
            <Card 
            correctAnswers={this.props.correctAnswers}
            correctChoice={this.props.correctChoice}
            cardsThisSession={this.props.cardsThisSession}
            card={this.props.card}
            />
            <div>
            <p>Stats Render Here</p>
            <p>Correct: {this.props.correctAnswers}</p>
            <p>Total Questions: {this.props.cardsThisSession}</p>
            <button onClick={() => this.props.getNewCard()}>Gets Another Question</button>
            </div>
            </div>
        )
    }
}
/*  Once props are mapped connect will be used here  */
export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);