import React from 'react';
import { View, Text, Image } from 'react-native';
import { Avatar } from 'react-native-elements';
import {APP_COLORS} from "../constants/colors";
import Moment from 'react-moment';

class Comment extends React.Component {
    constructor(props) {
        super(props)
    }

    displayAvatar(){
        if(this.props.image == null && this.props.user != null){
            var str_name=this.props.user.split(" ");
            var initial_name=str_name[0].charAt(0).toUpperCase();
            var initial_surname=str_name[1].charAt(0).toUpperCase();
            var inicials = ""+initial_name+initial_surname;

            return(
                <Avatar rounded title={inicials}
                        titleStyle={styles.titleAvatarStyle}/>
            )
        }
        else if(this.props.image != null){
            return(
                <Avatar
                    rounded
                    source={this.props.image}
                />
            )
        }
    }

    render(){
        const {contenttextStyle, datetextStyle, viewStyle, viewUserStyle,nameStyle} = styles;
        return(
            <View style={viewStyle}>
                <View style={viewUserStyle}>
                    <Text style={nameStyle}>{this.props.user}</Text>
                </View>
                <Text style={contenttextStyle}>{this.props.content}</Text>
                <Moment style = {datetextStyle} element={Text} format="DD/MM/YYYY HH:mm">
                    {this.props.created_date}
                </Moment>

            </View>
        );
    }

};
const styles ={
    nameStyle: {
        paddingLeft: '2%',
        color: APP_COLORS.color_green,
        fontSize: 15,
    },
    viewStyle:{
        padding:'3%'
    },
    contenttextStyle:{
        paddingLeft: '10%'
    },
    datetextStyle:{
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
