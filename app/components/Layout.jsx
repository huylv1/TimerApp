import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Navigation from 'Navigation';
import Clock from 'Clock';
import Countdown from 'Countdown';
import Timer from 'Timer';

const Layout = () => (
    <div>
        <Navigation/>
        <div className="grid-x grid-padding-x small-up-2 medium-up-2 large-up-2 large-offset-4">
            <div className="cell text-center">                                                
                    <Switch>
                        <Route exact path="/" component={Timer}/>
                        <Route exact path="/countdown" component={Countdown}/>
                    </Switch>                
            </div>            
        </div>        
    </div>
);

module.exports = Layout;