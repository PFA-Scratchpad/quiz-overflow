import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../components/card';
class CardContainer extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>
            <Card />
            <div>
            <p>Stats Render Here</p>
            <button>Submit</button>
            </div>
            </div>
        )
    }
}
/*  Once props are mapped connect will be used here  */
export default CardContainer;