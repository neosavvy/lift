import React, {Component} from 'react';
import {
    Text,
    TextInput,
    StyleSheet,
    View,
    Button
    } from 'react-native';

import _ from 'lodash';

import { PERCENTAGES } from '../constants/application.constants';

export default class EnterMaxLiftView extends Component {
    constructor(props) {
        super(props);
    }

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
            } = this.props;

        const benchPercentages = this.computePercentagesOf(maxBench);
        const squatPercentages = this.computePercentagesOf(maxSquat);
        const deadLiftPercentages = this.computePercentagesOf(maxDeadLift);

        this.props.onUpdate({
            benchPercentages,
            squatPercentages,
            deadLiftPercentages,
            isComputed: true
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Max Bench Press (in lbs)"
                    onChangeText={(maxBench) => this.props.onUpdate({maxBench})}
                    />
                <TextInput
                    style={styles.textInput}
                    placeholder="Max Squat (in lbs)"
                    onChangeText={(maxSquat) => this.props.onUpdate({maxSquat})}
                    />
                <TextInput
                    style={styles.textInput}
                    placeholder="Max Dead Lift (in lbs)"
                    onChangeText={(maxDeadLift) => this.props.onUpdate({maxDeadLift})}
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
