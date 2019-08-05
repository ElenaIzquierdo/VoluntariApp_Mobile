import React from 'react';
import {Text, View } from 'react-native';
import {APP_COLORS} from "../constants/colors";
import {Actions} from "react-native-router-flux";

const Header = (props) => {
    const {textStyle,viewStyle} = styles;
    return(
        <View style = {viewStyle}>
            <Text onPress = {() => Actions.home()} style = {textStyle}> {props.headerText} </Text>
        </View>
    );
};
const styles ={
    viewStyle:{
        backgroundColor:APP_COLORS.color_orange,
        justifyContent: 'center',
        alignItems: 'center', //horizontal
        height: '15%',
        paddingTop: '3%'
    },
    textStyle:{
        color: APP_COLORS.color_neutral,
        fontSize: 25,
        fontWeight: 'bold'
    }
}

export default Header;
