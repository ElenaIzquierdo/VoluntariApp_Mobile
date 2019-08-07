import React from 'react';
import { View, Text, Image } from 'react-native';
import {APP_COLORS} from "../constants/colors";

class Comment extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        const {contenttextStyle, datatextStyle, viewStyle, viewUserStyle,imageUserStyle} = styles;
        return(
            <View style={viewStyle}>
                <View style={viewUserStyle}>
                    <Image source={this.props.image} style={imageUserStyle}/>
                    <Text>{this.props.user}</Text>
                </View>

                <Text style={contenttextStyle}>{this.props.content}</Text>
                <Text style={datatextStyle}>{this.props.data}</Text>

            </View>
        );
    }

};
const styles ={
    imageUserStyle:{
        width: 27,
        height:27,
        borderRadius: 25,
        marginRight: '2%'
    },
    viewStyle:{
        padding:'3%'
    },
    contenttextStyle:{
        paddingLeft: '10%'
    },
    datatextStyle:{
        paddingLeft: '10%',
        color:APP_COLORS.text_color
    },
    viewUserStyle: {
        flexDirection: 'row'
    }
}

export default Comment;
