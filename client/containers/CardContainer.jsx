import React, { Component } from 'react';
import { connect } from 'react-redux';

class CardContainer extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <p>CardContainer Render</p>
        )
    }
}
/*  Once props are mapped connect will be used here  */
export default CardContainer;