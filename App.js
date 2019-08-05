import React from 'react';
import { Router, Scene } from 'react-native-router-flux'
import {store} from './src/store';
import { Provider, connect } from 'react-redux';
import Scenes from './src/Scenes';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider, Layout } from 'react-native-ui-kitten';

import HomeScreen from './src/screens/HomeScreen';
import ForumScreen from "./src/screens/ForumScreen";
import ForumThemeScreen from "./src/screens/ForumThemeScreen"

const ConnectedRouter = connect()(Router);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ApplicationProvider
                    mapping={mapping}
                    theme={lightTheme}>
                    <Router>
                        <Scene key = "root" hideNavBar={true}>
                            <Scene key = "home" component = {HomeScreen}/>
                            <Scene key = "forum" component = {ForumScreen}/>
                            <Scene key = "forumtheme" component = {ForumThemeScreen}/>
                        </Scene>
                    </Router>
                </ApplicationProvider>
            </Provider>
        );
    }
}

