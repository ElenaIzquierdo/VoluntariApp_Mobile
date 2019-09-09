import React from 'react';
import { View, Text } from 'react-native';
import {APP_COLORS} from "../constants/colors";

class Button extends React.Component {
    render(){
        const {container, textStyle} = styles;
        return(
            <View style={[container,{backgroundColor:this.props.colorButton},{marginLeft:this.props.marginL}]}>
                <Text style={textStyle}>{this.props.text}</Text>
            </View>
        )
    }
}

export default Button;

const styles = {
  container: {
      height: '66%',
      width: '15%',
      marginTop: '3%',
      marginRight: '3%',
      borderRadius: 8
  },
    textStyle: {
      alignSelf: 'center',
        color: APP_COLORS.color_white
    }
};
