import React from 'react';
import {Scene, Actions} from 'react-native-router-flux';

import HomeScreen from './screens/HomeScreen';
import ForumScreen from "./screens/ForumScreen";
import ForumThemeScreen from "./screens/ForumThemeScreen"
import ProfileScreen from "./screens/ProfileScreen"
import EventScreen from "./screens/EventScreen"
import CentreInteresScreen from "./screens/CentreInteresScreen"
import ProgramacioScreen from "./screens/ProgramacioScreen"

const Scenes = Actions.create(
    <Scene key = "root" hideNavBar={true}>
        <Scene key = "home" component = {HomeScreen}/>
        <Scene key = "forum" component = {ForumScreen}/>
        <Scene key = "forumtheme" component = {ForumThemeScreen}/>
        <Scene key = "profile" component = {ProfileScreen}/>
        <Scene key = "event" component = {EventScreen}/>
        <Scene key = "ci" component = {CentreInteresScreen}/>
        <Scene key = "programacio" component = {ProgramacioScreen}/>
    </Scene>
)

export default Scenes

