import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import {APP_COLORS} from "../constants/colors";

class Button extends React.Component {
    render(){
        const {container, textStyle} = styles;
        return(
            <TouchableHighlight style={[container,{backgroundColor:this.props.colorButton},{marginLeft:this.props.marginL},{width:this.props.width}]}
                                onPress={this.props.path}>
                <Text style={textStyle}>{this.props.text}</Text>
            </TouchableHighlight>
        )
    }
}

export default Button;

const styles = {
  container: {
    height: '66%',
    marginTop: '3%',
    marginRight: '3%',
    borderRadius: 8,
    paddingTop: '1%',
    alignItems: 'center'
  },
    textStyle: {
      alignSelf: 'center',
        color: APP_COLORS.color_white
    }
};
