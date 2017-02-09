import React, {Component} from 'react';
import {
    Text,
    TextInput,
    StyleSheet,
    View,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
    Button,
    Image
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

    focusNextField = (nextField) => {
        this.refs[nextField].focus();
    };

    viewClicked = () => {
        Keyboard.dismiss();
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <TouchableWithoutFeedback
                onPress={this.viewClicked}
            >
                <View
                    style={styles.container}
                >
                    <Image
                        style={{width: 250, height: 250}}
                        source={require('../assets/icons/dumbbell.png')}
                    />
                    <Text>Max Bench Press (in lbs):</Text>
                    <TextInput
                        keyboardType = 'numeric'
                        style={styles.textInput}
                        onChangeText={(maxBench) => this.props.updateMax({maxBench})}
                    />
                    <Text>Max Squat (in lbs)</Text>
                    <TextInput
                        keyboardType = 'numeric'
                        style={styles.textInput}
                        onChangeText={(maxSquat) => this.props.updateMax({maxSquat})}
                    />
                    <Text>Max Dead Lift (in lbs)</Text>
                    <TextInput
                        keyboardType = 'numeric'
                        style={styles.textInput}
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
            </TouchableWithoutFeedback>
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
        height: 45,
    },
    textInput: {
        textAlign: 'center',
        // backgroundColor: 'blue',
        borderColor: 'gray',
        borderWidth: 1,
        height: 45
    },
    text: {
        height: 25,
        width: 190
    }
});
