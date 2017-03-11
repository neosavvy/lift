import React, {Component} from 'react';

import { connect } from 'react-redux';

import {
    Image,
    StyleSheet,
    View,
    Text
} from 'react-native';

import _ from 'lodash';

export class ShowPlatesForWeight extends Component {

    static navigationOptions = {
        title: 'Grab your plates'
    };

    determineImageForPlate(plate) {
        console.log('CACHED: ', plate);
        const plateAsString = `${plate}`;
        switch(plateAsString){
            case "45":
                console.log('45');
                return <Image
                    style={styles.plateIcon}
                    source={require('../assets/icons/plate45.png')}/>;
            case "35":
                console.log('35');
                return <Image
                    style={styles.plateIcon}
                    source={require('../assets/icons/plate35.png')}/>;
            case "25":
                console.log('25');
                return <Image
                    style={styles.plateIcon}
                    source={require('../assets/icons/plate25.png')}/>;
            case "10":
                console.log('10');
                return <Image
                    style={styles.plateIcon}
                    source={require('../assets/icons/plate10.png')}/>;
            case "5":
                console.log('5');
                return <Image
                    style={styles.plateIcon}
                    source={require('../assets/icons/plate5.png')}/>;
            case "2.5":
                console.log('2.5');
                return <Image
                    style={styles.plateIcon}
                    source={require('../assets/icons/plate2.5.png')}/>;
            case "1":
                console.log('1');
                return <Image
                    style={styles.plateIcon}
                    source={require('../assets/icons/plate1.png')}/>;
            case ".5":
            case "0.5":
                console.log('found>>>0.5');
                return <Image
                    style={styles.plateIcon}
                    source={require('../assets/icons/plateHalf.png')}/>;
            case ".25":
            case "0.25":
                console.log('0.25');
                return <Image
                    style={styles.plateIcon}
                    source={require('../assets/icons/plateQuarter.png')}/>
            default:
                console.log('returning the default');
                return <Image
                    style={styles.plateIcon}
                    source={require('../assets/icons/dumbbell.png')}/>
        }
    }

    render() {
        return <View style={styles.container}>
            <Text
                style={styles.text}>
                {_.round(this.props.weight)} lbs.
            </Text>
            <Text
                style={styles.text}>
                {_.round(this.props.weightPercent)} %
            </Text>
            {
                _.map(this.props.plates, (descriptor, index) => {
                    return (
                        <View style={styles.row} key={index}>
                            <View style={styles.rowContainer}>
                                {this.determineImageForPlate(descriptor.plate)}
                                <Text style={styles.largeText}>
                                    x {descriptor.value}
                                </Text>
                            </View>
                        </View>
                    )
                })
            }
        </View>
    }
}

export default connect((state) => {
    return {
        plates: state.plates,
        weight: state.weight,
        weightPercent: state.weightPercent
    }
})(ShowPlatesForWeight);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    row: {
        width: 150,
        height: 100
    },
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50
    },
    text: {
        height: 50,
        fontSize: 38
    },
    largeText: {
        fontSize: 24
    },
    plateIcon: {
        width: 100,
        height: 100
    }
});
