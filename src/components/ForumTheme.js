import React from 'react';
import { View, Text, Image } from 'react-native';
import {APP_COLORS} from "../constants/colors";
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { EvilIcons } from '@expo/vector-icons';

class ForumTheme extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        const {textStyle, viewStyle, infoStyle, footer, viewInformationStyle} = styles;
        return(
            <View style={viewStyle}>
                <View style={footer}>
                    <Text style = {textStyle}> {this.props.titleForum} </Text>
                    <Icon
                        name='plus'
                        type='evilicon'
                        color={APP_COLORS.text_color}
                        size={32}
                    />
                </View>
                <View style={viewInformationStyle}>
                    <Text style = {infoStyle}> Creat per {this.props.creator} </Text>
                    <Text style = {infoStyle}> {this.props.estat} </Text>
                    <Text style = {infoStyle}> {this.props.data} </Text>
                </View>
            </View>
        );
    }

};
const styles ={
    textStyle:{
        color: APP_COLORS.text_color,
        fontSize: 22,
        fontWeight: 'bold'
    },
    viewStyle:{
        padding:'3%'
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
}

export default ForumTheme;
