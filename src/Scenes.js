import React from 'react';
import {Scene, Actions} from 'react-native-router-flux';

import HomeScreen from './screens/HomeScreen';
import {SecondScreen} from "./screens/SecondScreen";

const Scenes = Actions.create(
    <Scene key = "root" hideNavBar={true}>
        <Scene key = "home" component = {HomeScreen}/>
        <Scene key = "second" component = {SecondScreen}/>
    </Scene>
)

export default Scenes

