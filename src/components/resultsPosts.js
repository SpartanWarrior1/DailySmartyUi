import React, { Component } from 'react';

import { connect } from 'react-redux';

class ResultsPost extends Component {
    render() {
        return (
            <ul className="results-posts">
                <div className="results-posts__wrapper">
                    <div className="results-posts__posts">
                        RESULTS GO HERE
                    </div>
                </div>
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        state
    }
}

export default connect(mapStateToProps)(ResultsPost);