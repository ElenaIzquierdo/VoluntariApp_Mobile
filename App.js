import React from 'react';
import { Router, Scene } from 'react-native-router-flux'
import {store} from './src/store';
import { Provider, connect } from 'react-redux';
import Scenes from './src/Scenes';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider, Layout } from 'react-native-ui-kitten';

const ConnectedRouter = connect()(Router);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ApplicationProvider
                    mapping={mapping}
                    theme={lightTheme}>
                    <ConnectedRouter scenes={Scenes}/>
                </ApplicationProvider>
            </Provider>
        );
    }
}

