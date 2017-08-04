import React from 'react';
import TestUtils from 'react-dom/test-utils';
import expect from 'expect';

import Timer from 'Timer';

describe('Timer', () => {
    it('should exist', () => {
        expect(Timer).toExist();
    })

    describe('handleStatusChange', () => {
        it('should count on when start', (done) => {
            var timer = TestUtils.renderIntoDocument(<Timer/>);
            
            timer.handleStatusChange('started');            
            expect(timer.state.seconds).toBe(0);

            setTimeout(()=> {                
                expect(timer.state.seconds).toBe(1);
                done();
            }, 1001)            
        })

        it ('should set status to paused when pause', (done) => {
            var timer = TestUtils.renderIntoDocument(<Timer/>);

            timer.state.seconds = 9;
            timer.handleStatusChange('started');
            timer.handleStatusChange('paused');
            expect(timer.state.seconds).toBe(9);

            setTimeout(()=> {                
                expect(timer.state.seconds).toBe(9);
                done();
            }, 1001)            
        })

        it ('should set status to stopped when clear', (done) => {
            var timer = TestUtils.renderIntoDocument(<Timer/>);

            timer.state.seconds = 9;
            timer.handleStatusChange('started');
            timer.handleStatusChange('stopped');
            expect(timer.state.seconds).toBe(0);

            setTimeout(()=> {                
                expect(timer.state.seconds).toBe(0);
                done();
            }, 1001) 
        })        
    })
})