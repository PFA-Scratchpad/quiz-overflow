import React from 'react';
import { connect } from 'react-redux';
import CardContainer from './CardContainer';
const MainContainer = (props) => {
    return (
        <div>
            <p>MainContainer Render</p>
        <CardContainer />
        </div>
    )
}

export default MainContainer;