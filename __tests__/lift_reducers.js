import 'react-native';
import React from 'react';

import {
    showPlatesForWeight,
    sortPlates
} from '../shared/reducers/lift_reducer';

describe('sortPlates', () => {
    it('Should take a list of numeric keyed plates and return them sorted', function () {
        const sorted = sortPlates({
            5: 4,
            35: 2,
            45: 2,
            2.5: 4,
            1: 2
        });

        expect(sorted).toEqual([
            { plate: '45', value: 2},
            { plate: '35', value: 2},
            { plate: '5', value: 4},
            { plate: '2.5', value: 4},
            { plate: '1', value: 2}
        ])
    });
});

describe('showPlatesForWeight', () => {

    it('Should properly calculate 55 lbs of weight', function () {
        expect(showPlatesForWeight(55)).toEqual({
            5: 2
        });
    });

    it('Should properly calculate 65 lbs of weight', function () {
        expect(showPlatesForWeight(65)).toEqual({
            10: 2
        });
    });

    it('Should properly calculate 85 lbs of weight', function () {
        expect(showPlatesForWeight(85)).toEqual({
            10: 4
        });
    });

    it('Should properly calculate 85 lbs of weight', function () {
        expect(showPlatesForWeight(135)).toEqual({
            45: 2
        });
    });

    it('Should properly calculate 185 lbs of weight', function () {
        expect(showPlatesForWeight(185)).toEqual({
            45: 2,
            25: 2
        });
    });

    it('Should properly calculate 315 lbs of weight', function () {
        expect(showPlatesForWeight(315)).toEqual({
            45: 6,
        });
    });

    it('Should properly calculate 325 lbs of weight', function () {
        expect(showPlatesForWeight(325)).toEqual({
            45: 6,
            5: 2
        });
    });

    it('Should properly calculate 395 lbs of weight', function () {
        expect(showPlatesForWeight(395)).toEqual({
            45: 6,
            35: 2,
            5: 2
        });
    });

    it('Should properly calculate 50 lbs of weight', function () {
        expect(showPlatesForWeight(50)).toEqual({
            1: 4,
            .5: 2
        });
    });

    it('Should properly calculate 49.5 lbs of weight', function () {
        expect(showPlatesForWeight(49.5)).toEqual({
            1: 4
        });
    });

    it('Should properly calculate 400 lbs of weight', function () {
        expect(showPlatesForWeight(400)).toEqual({
            45: 6,
            35: 2,
            5: 2,
            1: 4,
            .5: 2
        });
    });

    it('Should properly calculate 316 lbs of weight', function () {
        expect(showPlatesForWeight(316.627)).toEqual({
            45: 6,
            .5: 2
        });
    });
});

