import React from 'react';
import createReactClass from 'create-react-class';

import CountdownForm from 'CountdownForm';
import Clock from 'Clock';
import Controls from 'Controls';

class Countdown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            seconds : 0,
            status : 'stopped'
        }
    }

    handleSetCountdown = (seconds) => {
        this.setState({
            seconds : seconds,
            status : 'started'
        })
    }
        
    handleStatusChange = (newStatus) => {
        this.setState({
            status : newStatus
        })
    }

    componentDidUpdate(prevProps, prevState) {        
        if (this.state.status !== prevState.status) {
            switch(this.state.status) {
                case 'started' :
                    this.startTimer();
                    break;
                case 'stopped' :
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

    startTimer() {
        this.timer = setInterval(()=>{
            var seconds = this.state.seconds - 1;            
            this.setState({
                seconds : seconds >= 0 ? seconds : 0
            })

            if (seconds === 0) {
                this.setState({
                    status : 'stopped'
                })
            }
        }, 1000);
    }

    render() {
        var {seconds, status} = this.state;

        var renderControls = () => {
            if (status  === 'stopped') {
                return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
            } else {
                return <Controls countdownStatus={status} onStatusChange={this.handleStatusChange}/>
            }            
        }

        return (
            <div>
                <h1 className="page-title">Countdown</h1>
                <Clock totalSeconds={seconds}/>
                {renderControls()}
            </div>
        )
    }
};

module.exports = Countdown;