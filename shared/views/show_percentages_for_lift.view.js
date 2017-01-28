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

export default class ShowPercentagesForLiftView extends Component {
    onShow = (activePercentages) => {
        this.props.onUpdate({
            activePercentages
        })
    };

    render() {
        return (
            <View style={styles.container}>

                {
                    _.map(this.props.activePercentages, (x, i) => {
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
                    onPress={() => {this.onShow(this.props.deadLiftPercentages)}}
                    title="Deadlift"
                    color="#841584"
                    />
                <Button
                    style={styles.button}
                    onPress={() => {this.onShow(this.props.squatPercentages)}}
                    title="Squats"
                    color="#841584"
                    />
                <Button
                    style={styles.button}
                    onPress={() => {this.onShow(this.props.benchPercentages)}}
                    title="Bench"
                    color="#841584"
                    />
                <Button
                    style={styles.button}
                    onPress={this.props.onReset}
                    title="Reset"
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
