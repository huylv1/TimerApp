import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-dom/test-utils';

import $ from 'jQuery';
import Controls from 'Controls';

describe("Controls", () => {
    it('should exist', () => {
        expect(Controls).toExist();
    })

    it('should render Pause when started', () => {        
        var spy = expect.createSpy();
        var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='started' onStatusChange={spy}/>);
        var $el = $(ReactDOM.findDOMNode(controls));
        var $button = $el.find('button:contains("Pause")');
        expect($button.length).toBe(1);
    })

    it('should render Start when paused', () => {
        var spy = expect.createSpy();
        var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='paused' onStatusChange={spy}/>);
        var $el = $(ReactDOM.findDOMNode(controls));

        var $button = $el.find('button:contains("Start")');
        expect($button.length).toBe(1);
    })
});