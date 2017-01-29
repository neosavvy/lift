import React, {Component} from 'react';
import {
    Text,
    TextInput,
    StyleSheet,
    View,
    Button
    } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ActionCreators } from '../actions/action_creators';

import _ from 'lodash';

class ShowPercentagesForLiftView extends Component {

    render() {
        return (
            <View style={styles.container}>

                {
                    _.map(this.props.benchPercentages, (x, i) => {
                        return (
                            <Text
                                key={i}
                                style={styles.text}>
                                {x.percentageOfMax}: {_.round(x.value)}
                            </Text>
                        )
                    })
                }

                <Button
                    style={styles.button}
                    onPress={() => {}}
                    title="Deadlift"
                    color="#841584"
                    />
                <Button
                    style={styles.button}
                    onPress={() => {}}
                    title="Squats"
                    color="#841584"
                    />
                <Button
                    style={styles.button}
                    onPress={() => {}}
                    title="Bench"
                    color="#841584"
                    />
                <Button
                    style={styles.button}
                    onPress={() => {}}
                    title="Reset"
                    color="#841584"
                    />
            </View>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state)=> {
    return {
        benchPercentages: state.benchPercentages,
        squatPercentages: state.squatPercentages,
        deadLiftPercentages: state.deadLiftPercentages
    }
}, mapDispatchToProps)
(ShowPercentagesForLiftView);

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
        width: 225,
        height: 45
    },
    text: {
        height: 25,
        width: 190
    }
});
