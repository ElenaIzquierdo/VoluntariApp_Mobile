import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {FontAwesome} from "@expo/vector-icons";
import {APP_COLORS} from "../constants/colors";

class Week extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        const {rowStyle, titleStyle, iconStyle, infoStyle, touchableStyle} = styles;
        return(
            <TouchableHighlight style={touchableStyle}>
                <View>
                    <View style={rowStyle}>
                        <Text style={titleStyle}>Setmana {this.props.id + 1}</Text>
                        <FontAwesome name='download' size={25} color= {APP_COLORS.black} style={iconStyle}/>
                    </View>
                    <View>
                        <Text style={infoStyle}>{this.props.name}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }

};
const styles ={
    touchableStyle: {
        paddingBottom: '3%'
    }
    ,
    viewStyle: {
        marginBottom: '3%'
    },
    titleStyle: {
        color: APP_COLORS.text_color,
        fontSize: 17,
        fontWeight: 'bold'
    },
    infoStyle:{
        color: APP_COLORS.text_color,
        fontSize: 16,
        marginLeft: '3%'
    },
    rowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: '2%',
        paddingTop: '2%'
    },
    iconStyle: {
        marginRight: '4%'
    }
}

export default Week;
