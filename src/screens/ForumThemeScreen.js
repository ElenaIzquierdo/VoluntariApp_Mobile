import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Layout, Text, TopNavigation, TopNavigationProps } from 'react-native-ui-kitten';
import Header from '../components/Header';
import Separador from '../components/Separador';
import {APP_COLORS} from "../constants/colors";
import {Icon} from "react-native-elements";
import {Actions} from "react-native-router-flux";

class ForumThemeScreen extends React.Component{
    constructor(props) {
        super(props)
    }
    render(){
        const {titleStyle, viewStyle, infoStyle, descriptionStyle, iconInfoTextStyle} = styles;
        return(
            <View style={viewStyle}>
                <Header headerText="VoluntariApp"/>
                <Text style = {titleStyle}> Comisió centre interés </Text>
                <View style={iconInfoTextStyle}>
                    <Icon
                        name='calendar'
                        type='evilicon'
                        color={APP_COLORS.text_color}
                        size={20}
                    />
                    <Text style = {infoStyle}>24/06/2019 </Text>
                </View>

                <View style={iconInfoTextStyle}>
                    <Icon
                        name='user'
                        type='evilicon'
                        color={APP_COLORS.text_color}
                        size={20}
                    />
                    <Text style = {infoStyle}> Julia Soler </Text>
                </View>

                <Text style = {descriptionStyle}> En aquesta comisió pensem idees pel centre d'interes, realitzem tasques,
                                            etc. </Text>
                <Separador/>

            </View>
        );
    }
}




const styles = StyleSheet.create({
    iconTextStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    viewTitleStyle:{
      padding:'3%'
    },
    titleStyle:{
        color: APP_COLORS.text_color,
        fontSize: 25,
        fontWeight: 'bold',
        paddingTop: '4%',
        paddingLeft: '2%'
    },
    descriptionStyle:{
        color: APP_COLORS.text_color,
        fontSize: 18,
        paddingTop: '4%',
        paddingLeft: '7%'
    },
    viewStyle:{
        backgroundColor: APP_COLORS.color_neutral,
        width: '100%',
        height: '100%',
        flex: 1,
    },
    infoStyle:{
        color: APP_COLORS.text_color,
        fontSize: 16,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    viewInformationStyle:{
        paddingLeft:'4%'
    },
    iconInfoTextStyle: {
        flexDirection: 'row',
        paddingLeft: '7%'
    },
});

export default ForumThemeScreen;

