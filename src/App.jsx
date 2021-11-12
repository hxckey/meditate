import React from 'react';
import { Switch, Route } from 'react-router-dom';
import  * as Pages from './Pages/';


export default function App() {
    return (
        <>

        <Switch>
            <Route exact path='/'>
                <Pages.Homepage />
            </Route>
            
            <Route path='/meditate'>
                <Pages.Meditate />
            </Route>

            <Route>
                <h1>This page does not exist, kindly leave.</h1>
            </Route>
        </Switch>

        </>
    )
};