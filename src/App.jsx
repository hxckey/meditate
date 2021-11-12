import React from 'react';
import { Switch, Route } from 'react-router-dom';
import  { Homepage } from '';
import { Meditate } from '';

export default function App() {
    return (
        <>

        <Switch>
            <Route exact path='/'>
                <Homepage />
            </Route>
            
            <Route path='/meditate'>
                <Meditate />
            </Route>

            <Route>
                <h1>This page does not exist, kindly leave.</h1>
            </Route>
        </Switch>

        </>
    )
};