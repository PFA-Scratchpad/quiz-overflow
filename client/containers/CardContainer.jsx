import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card';
import { correctChoice, getNewCard, updateHighScore, getHighScore, newHighScore } from '../actions/actions';

const mapStateToProps = state => ({
    card: state.quiz.card,
    cardsThisSession: state.quiz.cardsThisSession,
    correctAnswers: state.quiz.correctAnswers,
    currentScore: state.quiz.currentScore,
    highScore: state.quiz.highScore,
});

const mapDispatchToProps = {
    getNewCard, 
    correctChoice,
    getHighScore, 
    updateHighScore,
    newHighScore,
}

class CardContainer extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount () {
        this.props.getHighScore();
        }

    render() {
        console.log('props in cardcontainer', this.props)
        return(
            <div id="card">
            <Card 
            getNewCard={this.props.getNewCard}
            currentScore={this.props.currentScore}
            newHighScore={this.props.newHighScore}
            highScore={this.props.highScore}
            updateHighScore={this.props.updateHighScore}
            correctAnswers={this.props.correctAnswers}
            correctChoice={this.props.correctChoice}
            cardsThisSession={this.props.cardsThisSession}
            card={this.props.card}
            />
            <div>
            <p>High Score: {this.props.highScore}</p>
            <p>Current Score: {this.props.currentScore}</p>
            <a onClick={() => this.props.getNewCard()}>Next Question</a>
            </div>
            </div>
        )
    }
}



/*  Once props are mapped connect will be used here  */
export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);