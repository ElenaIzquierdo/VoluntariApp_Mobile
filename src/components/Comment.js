import React from 'react';
import { View, Text, Alert } from 'react-native';
import {APP_COLORS} from "../constants/colors";
import Moment from 'react-moment';
import {Icon} from "react-native-elements";

class Comment extends React.Component {
    constructor(props) {
        super(props)
    }

    _onPressTrash() {
        Alert.alert(
            'Eliminar comentari',
            'Estàs segur que vols eliminar aquest comentari?',
            [
                {text: 'No'},
                {text: 'Sí', onPress: () => {this.props.delete_method(this.props.id);
                                            this.props.refresh_topic_method(this.props.id_topic);
                                            this.props.refresh_comments_method(this.props.id_topic);
                                        }}
            ],
            { cancelable: false }
        );
    }

    render(){
        const {contenttextStyle, datetextStyle, viewStyle, viewUserStyle,nameStyle} = styles;
        return(
            <View style={viewStyle}>
                <View style={viewUserStyle}>
                    <Text style={nameStyle}>{this.props.user}</Text>
                    {this.props.owner ? <Icon
                                            name='trash'
                                            type='evilicon'
                                            color={APP_COLORS.text_color}
                                            size={25}
                                            onPress={this._onPressTrash.bind(this)}
                                            />: null
                    }
                    
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
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleAvatarStyle:{
        color: APP_COLORS.color_green,
    }
}

export default Comment;
