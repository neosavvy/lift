import 'react-native';
import React from 'react';

import { showPlatesForWeight } from '../shared/reducers/lift_reducer';

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

    it('Should properly calculate 400 lbs of weight', function () {
        expect(showPlatesForWeight(395)).toEqual({
            45: 6,
            35: 2,
            5: 2
        });
    });
});

