/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import _ from 'lodash';
import React, {Component} from 'react';
import {
    AppRegistry,
    TextInput,
    Text,
    StyleSheet,
    Button,
    View
} from 'react-native';

const PERCENTAGES = [
    95,
    90,
    85,
    80,
    75,
    70,
    65,
    60,
    55,
    50,
    45,
    40,
    35,
    30,
    25,
    20,
    15,
    10,
    5
];

const initialState = {
    isComputed: false,
    maxBench: null,
    maxSquat: null,
    maxDeadLift: null,
    benchPercentages: [],
    squatPercentages: [],
    deadLiftPercentages: [],
    activePercentages: []
};

export default class LiftCalculator extends Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    onShow = (activePercentages) => {
        this.setState({
            activePercentages
        })
    };

    onReset = () => {
        this.setState(initialState)
    };

    computePercentagesOf(maxValue) {
        return _.reduce(PERCENTAGES, (acc, percentage) => {
            const computation = {
                percentageOfMax: percentage,
                value: (percentage / 100) * maxValue
            };
            return acc.concat(computation);
        }, [])
    }

    onCalculate = () => {
        const {
            maxBench,
            maxSquat,
            maxDeadLift
        } = this.state;

        const benchPercentages = this.computePercentagesOf(maxBench);
        const squatPercentages = this.computePercentagesOf(maxSquat);
        const deadLiftPercentages = this.computePercentagesOf(maxDeadLift);

        this.setState({
            benchPercentages,
            squatPercentages,
            deadLiftPercentages,
            isComputed: true
        });
    };

    render() {
        if(this.state.isComputed) {
            return (
                <View style={styles.container}>

                    {
                        _.map(this.state.activePercentages, (x) => {
                            return (
                                <Text style={styles.text}>
                                    {x.percentageOfMax}: {x.value}
                                </Text>
                            )
                        })
                    }

                    <Button
                        style={styles.button}
                        onPress={() => {this.onShow(this.state.deadLiftPercentages)}}
                        title="Deadlift"
                        color="#841584"
                    />
                    <Button
                        style={styles.button}
                        onPress={() => {this.onShow(this.state.squatPercentages)}}
                        title="Squats"
                        color="#841584"
                    />
                    <Button
                        style={styles.button}
                        onPress={() => {this.onShow(this.state.benchPercentages)}}
                        title="Bench"
                        color="#841584"
                    />
                    <Button
                        style={styles.button}
                        onPress={this.onReset}
                        title="Reset"
                        color="#841584"
                    />
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Max Bench Press (in lbs)"
                        onChangeText={(maxBench) => this.setState({maxBench})}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Max Squat (in lbs)"
                        onChangeText={(maxSquat) => this.setState({maxSquat})}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Max Dead Lift (in lbs)"
                        onChangeText={(maxDeadLift) => this.setState({maxDeadLift})}
                    />
                    <Button
                        style={styles.button}
                        onPress={this.onCalculate}
                        title="Calculate Lift Percentages"
                        color="#841584"
                    />
                </View>
            );
        }
    }
}

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

AppRegistry.registerComponent('LiftCalculator', () => LiftCalculator);
