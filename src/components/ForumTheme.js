import React from 'react';
import { View, Text, Image } from 'react-native';
import {APP_COLORS} from "../constants/colors";
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { EvilIcons } from '@expo/vector-icons';
import {Actions} from "react-native-router-flux";

class ForumTheme extends React.Component {
    constructor(props) {
        super(props)
    }
    pintarEstat(){
        if(this.props.finished){
            return(
                <View style={styles.iconInfoTextStyle}>
                    <Icon
                        name='close-o'
                        type='evilicon'
                        color={APP_COLORS.color_darkred}
                        size={20}
                    />
                    <Text style = {styles.infoStyle}> Tancat</Text>
                </View>
            );
        }
        else{
            return(
                <View style={styles.iconInfoTextStyle}>
                    <Icon
                        name='check'
                        type='evilicon'
                        color={APP_COLORS.color_green}
                        size={20}
                    />
                    <Text style = {styles.infoStyle}> Obert </Text>
                </View>
            );
        }

    }
    render(){
        const {textStyle, viewStyle, infoStyle, iconTextStyle, viewInformationStyle, iconInfoTextStyle} = styles;
        return(
            <View style={viewStyle}>
                <View style={iconTextStyle}>
                    <Text style = {textStyle}> {this.props.titleForum} </Text>
                    <Icon
                        name='plus'
                        type='evilicon'
                        color={APP_COLORS.text_color}
                        size={32}
                        onPress = {() => Actions.forumtheme()}
                    />
                </View>
                <View style={viewInformationStyle}>
                    <View style={iconInfoTextStyle}>
                        <Icon
                            name='user'
                            type='evilicon'
                            color={APP_COLORS.text_color}
                            size={20}
                        />
                        <Text style = {infoStyle}> Creat per {this.props.creator} </Text>
                    </View>

                    <View style={iconInfoTextStyle}>
                        <Icon
                            name='calendar'
                            type='evilicon'
                            color={APP_COLORS.text_color}
                            size={20}
                        />
                        <Text style = {infoStyle}> {this.props.data} </Text>
                    </View>

                    {this.pintarEstat()}
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
    iconTextStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    iconInfoTextStyle: {
        flexDirection: 'row',
    },
    viewInformationStyle:{
        paddingLeft:'4%'
    }
}

export default ForumTheme;