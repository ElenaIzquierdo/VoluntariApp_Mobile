import React from 'react';
import {Scene, Actions} from 'react-native-router-flux';

import HomeScreen from './screens/HomeScreen';
import ForumScreen from "./screens/ForumScreen";
import ForumThemeScreen from "./screens/ForumThemeScreen"

const Scenes = Actions.create(
    <Scene key = "root" hideNavBar={true}>
        <Scene key = "home" component = {HomeScreen}/>
        <Scene key = "forum" component = {ForumScreen}/>
        <Scene key = "forumtheme" component = {ForumThemeScreen}/>
    </Scene>
)

export default Scenes

