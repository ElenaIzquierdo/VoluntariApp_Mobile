import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider, Layout } from 'react-native-ui-kitten';
import {HomeScreen} from './src/screens/HomeScreen';
import {SecondScreen} from './src/screens/SecondScreen';

export default class App extends React.Component {
    render() {
        return (
            <ApplicationProvider
                mapping={mapping}
                theme={lightTheme}>
                <Router>
                    <Scene key = "root" hideNavBar={true}>
                        <Scene key = "home" component = {HomeScreen}/>
                        <Scene key = "second" component = {SecondScreen}/>
                    </Scene>
                </Router>
            </ApplicationProvider>
        );
    }
}
