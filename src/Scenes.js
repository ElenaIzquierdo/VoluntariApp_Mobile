import React from 'react';
import {Scene, Actions} from 'react-native-router-flux';

import HomeScreen from './screens/HomeScreen';
import FoumScreen from "./screens/FoumScreen";
import ForumThemeScreen from "./screens/ForumThemeScreen"

const Scenes = Actions.create(
    <Scene key = "root" hideNavBar={true}>
        <Scene key = "home" component = {HomeScreen}/>
        <Scene key = "forum" component = {FoumScreen}/>
        <Scene key = "forumtheme" component = {ForumThemeScreen}/>
    </Scene>
)

export default Scenes

