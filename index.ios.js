/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import _ from 'lodash';
import React, {Component} from 'react';
import { Provider } from 'react-redux'
import {
    createStore,
    applyMiddleware,
    combineReducers,
    compose } from 'redux';
import thunkMiddleware from 'react-thunk';
import createLogger from 'redux-logger';

import EnterMaxLiftView from './shared/views/enter_max_lift.view';
import ShowPercentagesForLiftView from './shared/views/show_percentages_for_lift.view';

import {
    AppRegistry,
    TextInput,
    Text,
    StyleSheet,
    Button,
    View
} from 'react-native';

import reducer from './shared/reducers/create_reducer';

const INITIAL = {
    isComputed: false,
    maxBench: null,
    maxSquat: null,
    maxDeadLift: null,
    benchPercentages: [],
    squatPercentages: [],
    deadLiftPercentages: [],
    activePercentages: []
};

const loggerMiddleware = createLogger(
    { predicate: (getState, action) => __DEV__ }
);

function configureStore(initialState) {
    const enhancer = compose(
        applyMiddleware(
            //thunkMiddleware,
            loggerMiddleware
        )
    );
    return createStore(reducer, initialState, enhancer);
}

const store = configureStore(INITIAL);

export default class LiftCalculator extends Component {

    constructor(props) {
        super(props);
        this.state = INITIAL
    }

    onUpdate = (updated) => {
        this.setState(updated);
    };

    onReset = () => {
        this.setState(INITIAL);
    };

    render() {
        if(this.state.isComputed) {
            return (
                <ShowPercentagesForLiftView
                    onUpdate={this.onUpdate}
                    onReset={this.onReset}
                    {...this.state}
                />
            )
        } else {
            return (
                <EnterMaxLiftView
                    onUpdate={this.onUpdate}
                    {...this.state}
                    />
            );
        }
    }
}

const App = () => (
    <Provider store={store}>
        <LiftCalculator/>
    </Provider>
);

AppRegistry.registerComponent('LiftCalculator', () => App);
