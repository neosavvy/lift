import React, {Component} from 'react';
import {
    Text,
    TextInput,
    StyleSheet,
    View,
    Button,
    TouchableHighlight
    } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ActionCreators } from '../actions/action_creators';

import _ from 'lodash';

class ShowPercentagesForLiftView extends Component {

    static navigationOptions = {
        title: 'Here is your breakdown',
    };

    onWeightSelected = (weight) => {
        console.log('weight selected: ', weight);
        this.props.selectWeight(weight);
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>

                {
                    _.map(this.props.activePercentages, (x, i) => {
                        return (
                            <TouchableHighlight
                                key={i}
                                onPress={() => {
                                    this.onWeightSelected(x)
                                    navigate('ShowPlatesForWeight')
                                }}
                            >
                                <Text
                                    style={styles.text}>
                                    {x.percentageOfMax}: {_.round(x.value)}
                                </Text>
                            </TouchableHighlight>
                        )
                    })
                }

                <Button
                    style={styles.button}
                    onPress={() => {
                        this.props.updateActive({
                            activePercentages: this.props.deadLiftPercentages
                        })
                    }}
                    title="Deadlift"
                    color="#841584"
                    />
                <Button
                    style={styles.button}
                    onPress={() => {
                        this.props.updateActive({
                            activePercentages: this.props.squatPercentages
                        })
                    }}
                    title="Squats"
                    color="#841584"
                    />
                <Button
                    style={styles.button}
                    onPress={() => {
                        this.props.updateActive({
                            activePercentages: this.props.benchPercentages
                        })
                    }}
                    title="Bench"
                    color="#841584"
                    />
                <Button
                    style={styles.button}
                    onPress={() => {
                        this.props.reset();
                        navigate('EnterMaxLift');
                    }}
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
        activePercentages: state.activePercentages,
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
    text: {
        height: 25
    }
});
