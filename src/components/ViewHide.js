import React from 'react';
import {View, Text, Image} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {APP_COLORS} from "../constants/colors";

class ViewHide extends React.Component {
    constructor(props) {
        super(props)
    }

    pintarIconAssistencia(ass){
        if(ass === "baixa"){
            return(<FontAwesome name="angle-double-down" size={18} color = {APP_COLORS.color_green}/>)
        }
        if(ass === "mitja"){
            return(<FontAwesome name="angle-up" size={18} color = {APP_COLORS.color_green}/>)
        }
        if(ass === "alta"){
            return(<FontAwesome name="angle-double-up" size={18} color = {APP_COLORS.color_green}/>)
        }
    }

    render(){
        const {viewStyle, rowStyle, titleStyle, textStyle} = styles;
        if(this.props.isHiden){
            return null
        }
        else{
            return(
                <View style={viewStyle}>
                    <Text style={titleStyle}> Llegenda </Text>
                    <View style={rowStyle}>
                        <Text style={textStyle}>Assistència baixa</Text>
                        {this.pintarIconAssistencia("baixa")}
                    </View>
                    <View style={rowStyle}>
                        <Text style={textStyle}>Assistència mitja</Text>
                        {this.pintarIconAssistencia("mitja")}
                    </View>
                    <View style={rowStyle}>
                        <Text style={textStyle}>Assistència alta</Text>
                        {this.pintarIconAssistencia("alta")}
                    </View>
                </View>
            );
        }
    }

};
const styles ={
    viewStyle: {
        width: '10%',
        marginLeft: '65%',
        marginTop: '7%',
        position: 'absolute',
        borderWidth: 0.6,
        borderColor: APP_COLORS.text_color,
        borderRadius: 8,
    },
    rowStyle: {
        flexDirection: 'row'
    },
    titleStyle: {
        color: APP_COLORS.text_color,
        fontSize: 13,
        fontWeight: 'bold',
        paddingTop: '4%',
        paddingLeft: '2%'
    },
    textStyle: {
        color: APP_COLORS.text_color,
        fontSize: 11,
        paddingLeft: '2%'
    }
}

export default ViewHide;
