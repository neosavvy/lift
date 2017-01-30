import React, {Component} from 'react';

import { connect } from 'react-redux';

import {
    View,
    Text
} from 'react-native';

import _ from 'lodash';

export class ShowPlatesForWeight extends Component {
    render() {
        return <View>
            <Text>This is ShowPlatesView</Text>
            {
                _.map(_.keys(this.props.plates), (plateKey, index) => {
                    return (<Text key={index}>
                        {plateKey}: {this.props.plates[plateKey]}
                    </Text>)
                })
            }

        </View>
    }
}

export default connect((state) => {
    return {
        plates: state.plates
    }
})(ShowPlatesForWeight);