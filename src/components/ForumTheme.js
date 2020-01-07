import React from 'react';
import Moment from 'react-moment';
import { View, Text, TouchableHighlight  } from 'react-native';
import {APP_COLORS} from "../constants/colors";
import { Icon } from 'react-native-elements';
import {Actions} from "react-native-router-flux";

class ForumTheme extends React.Component {
    constructor(props) {
        super(props)
    }
    displayStatus(){
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
            <TouchableHighlight onPress = {() => Actions.forumtheme({id: this.props.id})}>
            <View style={viewStyle}>

                    <View style={iconTextStyle}>
                        <Text style = {textStyle}> {this.props.titleForum} </Text>
                    </View>
                    <View style={viewInformationStyle}>
                        <View style={iconInfoTextStyle}>
                            <Icon
                                name='calendar'
                                type='evilicon'
                                color={APP_COLORS.text_color}
                                size={20}
                            />
                            <Moment style = {infoStyle} element={Text} format="DD/MM/YYYY HH:mm">
                                {this.props.data}
                            </Moment>
                        </View>

                        {this.displayStatus()}
                    </View>

            </View>
            </TouchableHighlight>
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
    }
}

export default ForumTheme;
