import React, {Component} from 'react';

import { connect } from 'react-redux';

import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import _ from 'lodash';

export class ShowPlatesForWeight extends Component {

    static navigationOptions = {
        title: 'Grab your plates'
    };

    render() {
        return <View style={styles.container}>
            <Text style="text">Selected Weight {_.round(this.props.weight)}</Text>
            {
                _.map(this.props.plates, (descriptor, index) => {
                    return (<Text key={index}>
                        {descriptor.plate}: {descriptor.value}
                    </Text>)
                })
            }
        </View>
    }
}

export default connect((state) => {
    return {
        plates: state.plates,
        weight: state.weight
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
    text: {
        
        height: 25,
        width: 190 
    }
});
