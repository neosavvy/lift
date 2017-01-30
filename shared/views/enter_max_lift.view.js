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

class EnterMaxLiftView extends Component {

    static navigationOptions = {
        title: 'Enter Your Max Lifts',
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Max Bench Press (in lbs)"
                    onChangeText={(maxBench) => this.props.updateMax({maxBench})}
                    />
                <TextInput
                    style={styles.textInput}
                    placeholder="Max Squat (in lbs)"
                    onChangeText={(maxSquat) => this.props.updateMax({maxSquat})}
                    />
                <TextInput
                    style={styles.textInput}
                    placeholder="Max Dead Lift (in lbs)"
                    onChangeText={(maxDeadLift) => this.props.updateMax({maxDeadLift})}
                    />
                <Button
                    style={styles.button}
                    onPress={() => {
                        this.props.calculatePercentages();
                        navigate('ShowPercentagesForLiftView');
                    }}
                    title="Calculate Lift Percentages"
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
            maxBench: state.maxBench,
            maxDeadlift: state.maxDeadlift,
            maxSquat: state.maxSquat
        }
    }, mapDispatchToProps)
    (EnterMaxLiftView);

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
        width: 225,
        height: 45
    },
    text: {
        height: 25,
        width: 190
    }
});
