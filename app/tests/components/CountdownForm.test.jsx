import React from 'react';
import expect from 'expect';
import TestUtils from 'react-dom/test-utils';

import CountdownForm from 'CountdownForm';

describe('CountdownForm', () => {
    it('should exist', () => {
        expect(CountdownForm).toExist();
    })

    it('should call function onSetCountdown when valid seconds entered', () => {
        var spy = expect.createSpy();
        
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        countdownForm.refs.seconds.value = "109";        
        TestUtils.Simulate.submit(countdownForm.refs.form);

        expect(spy).toHaveBeenCalledWith(109);
    })

    it('should not call onSetCountdown when invalid seconds entered', () => {
        var spy = expect.createSpy();

        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);       
        countdownForm.refs.seconds.value = "109b";
        TestUtils.Simulate.submit(TestUtils.findRenderedDOMComponentWithClass(countdownForm, 'countdown-form'));
    
        expect(spy).toNotHaveBeenCalled();
    })
})