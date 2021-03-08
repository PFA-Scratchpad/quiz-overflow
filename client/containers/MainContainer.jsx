import React, { Component } from 'react';
import CardContainer from './CardContainer';

class MainContainer extends Component {
    constructor(props) {
        super(props);
    }
    render(){ 
    return (
        <div>
            <p>MainContainer Render</p>
        <CardContainer />
        </div>
        )
    };
};

export default MainContainer;