import React from 'react';
import {Scene, Actions} from 'react-native-router-flux';

import HomeScreen from './screens/HomeScreen';
import ForumScreen from "./screens/ForumScreen";
import ForumThemeScreen from "./screens/ForumThemeScreen"
import ProfileScreen from "./screens/ProfileScreen"
import EventScreen from "./screens/EventScreen"
import CentreInteresScreen from "./screens/CentreInteresScreen"
import ProgramacioScreen from "./screens/ProgramacioScreen"
import WeekScreen from "./screens/WeekScreen"
import TaskScreen from "./screens/TaskScreen"

const Scenes = Actions.create(
    <Scene key = "root" hideNavBar={true}>
        <Scene key = "home" component = {HomeScreen}/>
        <Scene key = "forum" component = {ForumScreen}/>
        <Scene key = "forumtheme" component = {ForumThemeScreen}/>
        <Scene key = "profile" component = {ProfileScreen}/>
        <Scene key = "event" component = {EventScreen}/>
        <Scene key = "ci" component = {CentreInteresScreen}/>
        <Scene key = "programacio" component = {ProgramacioScreen}/>
        <Scene key = "week" component = {WeekScreen}/>
        <Scene key = "task" component = {TaskScreen}/>
    </Scene>
);

export default Scenes

