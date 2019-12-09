import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import {APP_COLORS} from "../constants/colors";

class Subtitle extends React.Component {
    render(){
        return(
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>{this.props.text}</Text>
                <TouchableOpacity onPress={this.props.path}>
                    <Text style={styles.linkStyle}>{this.props.linkText}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles ={
    viewStyle:{
        alignContent: 'center',
        alignItems: 'center',
    },
    textStyle:{
        color: APP_COLORS.color_green,
        fontSize: 19,
        fontStyle: 'italic'
    },
    linkStyle:{
        color: APP_COLORS.color_green,
        fontSize: 19,
        fontStyle: 'italic',
        textDecorationLine: 'underline'
    }
};

export default Subtitle;