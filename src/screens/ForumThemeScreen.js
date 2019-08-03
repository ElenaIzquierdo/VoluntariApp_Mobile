import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Layout, Text, TopNavigation, TopNavigationProps } from 'react-native-ui-kitten';
import Header from '../components/Header';
import {APP_COLORS} from "../constants/colors";
import {Icon} from "react-native-elements";
import {Actions} from "react-native-router-flux";

class ForumThemeScreen extends React.Component{
    constructor(props) {
        super(props)
    }
    render(){
        const {titleStyle, viewStyle, infoStyle, viewInformationStyle,viewTitleStyle} = styles;
        return(
            <View style={viewStyle}>
                <Header headerText="VoluntariApp"/>
                <View style={viewTitleStyle}>
                    <Text style = {titleStyle}> Comisió centre interés </Text>
                </View>
                <View style={viewInformationStyle}>
                    <Text style = {infoStyle}> Creat per {this.props.creator} </Text>
                    <Text style = {infoStyle}> {this.props.estat} </Text>
                    <Text style = {infoStyle}> {this.props.data} </Text>
                </View>
            </View>
        );
    }
}




const styles = StyleSheet.create({
    viewTitleStyle:{
      padding:'10%'
    },
    titleStyle:{
        color: APP_COLORS.text_color,
        fontSize: 22,
        fontWeight: 'bold'
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
    }
});

export default ForumThemeScreen;

