import React from 'react';
import { View, Text, Image } from 'react-native';
import {APP_COLORS} from "../constants/colors";
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { EvilIcons } from '@expo/vector-icons';

class Separador extends React.Component {
    constructor(props) {
        super(props)
    }


    render(){
        const {viewStyle, textStyle} = styles;
        return(
            <View style={viewStyle}>
                <Text style={textStyle}>Comentaris</Text>
                <Text style={textStyle}>Tasques</Text>
                <Text style={textStyle}>Participants</Text>
            </View>
        );
    }

};
const styles ={
    viewStyle: {
        flexDirection: 'row',
        backgroundColor: APP_COLORS.color_orange,
        height: '10%',
        marginTop: '5%',
        justifyContent: 'space-between',
        paddingRight: '3%',
        paddingLeft: '3%',
        alignItems: 'center'
    },
    textStyle: {
        color: APP_COLORS.color_neutral,
        fontSize: 17,
        fontWeight: 'bold'
    }
}

export default Separador;
