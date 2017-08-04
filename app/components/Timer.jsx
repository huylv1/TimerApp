import React from 'react';

import Clock from 'Clock';
import Controls from 'Controls';

class Timer extends React.Component {
    state = {
        timerStatus : "stopped",
        seconds : 0
    }

    handleStatusChange = (newStatus) => {
        this.setState({
            timerStatus : newStatus
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.timerStatus !== prevState.timerStatus) {
            switch (this.state.timerStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({seconds : 0});
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = undefined;
    }

    startTimer = () => {
        this.timer = setInterval(() => {
            var seconds = this.state.seconds;
            this.setState({
                seconds : seconds + 1
            })
        }, 1000);
    }

    render() {        
        var {seconds, timerStatus} = this.state;
        return (
            <div>
                <h1 className="page-title">Timer</h1>
                <Clock totalSeconds = {seconds}/>
                <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
            </div>
        )
    }
}

module.exports = Timer;