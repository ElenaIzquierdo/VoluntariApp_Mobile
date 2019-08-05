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
        const {viewStyle} = styles;
        return(
            <View style={viewStyle}>
                <Text>Hola</Text>
            </View>
        );
    }

};
const styles ={
    viewStyle: {
        backgroundColor: APP_COLORS.color_orange,
        height: '10%',
        marginTop: '5%'
    },
}

export default Separador;
