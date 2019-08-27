import React from 'react';
import {View, Text, Image} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {APP_COLORS} from "../constants/colors";

class Explication extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        const {descriptionStyle, viewStyle, iconStyle} = styles;
        return(
            <View style={viewStyle}>
                <FontAwesome name='angle-right' size={18} color= {APP_COLORS.color_green} style={iconStyle}/>
                <Text style={descriptionStyle}>{this.props.description}</Text>
            </View>
        );
    }

};
const styles ={
    fetStyle: {
        color: APP_COLORS.color_green,
        fontSize: 12,
        paddingTop: '5%',
        paddingLeft: '3%'
    },
    viewStyle: {
        marginBottom: '3%',
        flexDirection: 'row',
        paddingLeft: '3%'
    },
    descriptionStyle: {
        color: APP_COLORS.text_color,
        fontSize: 16,
        paddingTop: '2%',
        paddingLeft: '5%'
    },
    iconStyle: {
        paddingTop: '2%'
    }
}

export default Explication;
