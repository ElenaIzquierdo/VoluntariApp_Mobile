import React from 'react';
import { View, Text, Image } from 'react-native';
import {APP_COLORS} from "../constants/colors";

class Comment extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        const {contenttextStyle, datatextStyle, viewStyle, viewDataContentStyle} = styles;
        return(
            <View style={viewStyle}>
                <Text>{this.props.user}</Text>

                <Text style={contenttextStyle}>{this.props.content}</Text>
                <Text style={datatextStyle}>{this.props.data}</Text>

            </View>
        );
    }

};
const styles ={
    viewStyle:{
        padding:'3%'
    },
    contenttextStyle:{
        paddingLeft: '3%'
    },
    datatextStyle:{
        paddingLeft: '3%',
        color:APP_COLORS.text_color
    },
}

export default Comment;
