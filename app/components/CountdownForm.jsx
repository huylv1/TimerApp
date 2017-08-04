import React from 'react';

class CountdownForm extends React.Component {
    onSubmit = (e) => {
        e.preventDefault();
        var strSeconds = this.refs.seconds.value;
        if (strSeconds.match(/^[0-9]*$/)) {
            this.props.onSetCountdown(parseInt(strSeconds, 10));
        }
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className="countdown-form" ref="form">
                <input type="text" ref="seconds" placeholder="enter time in seconds"/>
                <button className="button expanded">Submit</button>
            </form>
        )
    }
}

module.exports = CountdownForm;