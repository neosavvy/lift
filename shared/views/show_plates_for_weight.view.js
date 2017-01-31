import React, {Component} from 'react';

import { connect } from 'react-redux';

import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import _ from 'lodash';

export class ShowPlatesForWeight extends Component {
    render() {
        return <View style={styles.container}>
            <Text>This is ShowPlatesView</Text>
            {
                _.map(_.sortBy(_.keys(this.props.plates)), (plateKey, index) => {
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    button: {
        width: 85,
        height: 45
    },
    textInput: {
        textAlign: 'center',
        backgroundColor: 'blue',
        height: 45
    },
    text: {
        height: 25,
        width: 190
    }
});
