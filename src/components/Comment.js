import React from 'react';
import { View, Text, Image } from 'react-native';
import { Avatar } from 'react-native-elements';
import {APP_COLORS} from "../constants/colors";

class Comment extends React.Component {
    constructor(props) {
        super(props)
    }

    pintarAvatar(){
        if(this.props.image == null){
            var str_name=this.props.user.split(" ");
            var initial_name=str_name[0].charAt(0).toUpperCase();
            var initial_surname=str_name[1].charAt(0).toUpperCase();
            var inicials = ""+initial_name+initial_surname;

            return(
                <Avatar rounded title={inicials}
                        titleStyle={styles.titleAvatarStyle}/>
            )
        }
        else{
            return(
                <Avatar
                    rounded
                    source={this.props.image}
                />
            )
        }
    }

    render(){
        const {contenttextStyle, datatextStyle, viewStyle, viewUserStyle,nameStyle} = styles;
        return(
            <View style={viewStyle}>
                <View style={viewUserStyle}>
                    {this.pintarAvatar()}
                    <Text style={nameStyle}>{this.props.user}</Text>
                </View>
                <Text style={contenttextStyle}>{this.props.content}</Text>
                <Text style={datatextStyle}>{this.props.data}</Text>

            </View>
        );
    }

};
const styles ={
    nameStyle: {
        paddingLeft: '2%'
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
    },
    titleAvatarStyle:{
        color: APP_COLORS.color_green,
    }
}

export default Comment;
