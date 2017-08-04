import React from 'react';
import expect from 'expect';
import TestUtils from 'react-dom/test-utils';

import Countdown from 'Countdown';

describe('Countdown', () => {
    it('should exist', () => {
        expect(Countdown).toExist();
    })

    describe('handleSetCountdown', () => {
        it('should set state to started when countdown', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>)
            countdown.handleSetCountdown(10);
            
            expect(countdown.state.seconds).toBe(10);
            expect(countdown.state.status).toBe('started');

            setTimeout(() => {
                expect(countdown.state.seconds).toBe(9);
                done();
            }, 1001)
        })

        it('it should never set count less than zero', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(1);

            setTimeout(() => {
                expect(countdown.state.seconds).toBe(0);
                done();
            }, 3001)
        })
    })
})