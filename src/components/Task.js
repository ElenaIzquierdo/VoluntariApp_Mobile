import React from 'react';
import { View, Text, Image } from 'react-native';
import {APP_COLORS} from "../constants/colors";
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { EvilIcons } from '@expo/vector-icons';
import {Actions} from "react-native-router-flux";

class Task extends React.Component {
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
                    <Text style = {styles.infoStyle}> Finalitzada </Text>
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
                    <Text style = {styles.infoStyle}> Oberta </Text>
                </View>
            );
        }

    }
    render(){
        const {textStyle, viewStyle, infoStyle, iconTextStyle, viewInformationStyle, iconInfoTextStyle,iconsEditStyle} = styles;
        return(
            <View style={viewStyle}>
                <View style={iconTextStyle}>
                    <Text style = {textStyle}> {this.props.title} </Text>
                    <View style={iconsEditStyle}>
                        <Icon
                            name='eye'
                            type='evilicon'
                            color={APP_COLORS.text_color}
                            size={32}
                        />
                        <Icon
                            name='pencil'
                            type='evilicon'
                            color={APP_COLORS.text_color}
                            size={32}
                        />
                        <Icon
                            name='trash'
                            type='evilicon'
                            color={APP_COLORS.text_color}
                            size={32}
                        />
                    </View>
                </View>
                <View style={viewInformationStyle}>
                    {this.pintarEstat()}
                    <View style={iconInfoTextStyle}>
                        <Icon
                            name='user'
                            type='evilicon'
                            color={APP_COLORS.text_color}
                            size={20}
                        />
                        <Text style = {infoStyle}> Assignat a {this.props.assignees} </Text>
                    </View>

                </View>
            </View>
        );
    }

};
const styles ={
    textStyle:{
        color: APP_COLORS.text_color,
        fontSize: 17,
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
    },
    iconsEditStyle: {
        flexDirection: 'row'
    }
}

export default Task;
