import React from 'react';
import { Text, View } from 'react-native';
import {APP_COLORS} from "../constants/colors";

class Title extends React.Component {
    render(){
        return(
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>{this.props.title}</Text>
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
        fontSize: 25,
        fontWeight: 'bold'
    },
};

export default Title;