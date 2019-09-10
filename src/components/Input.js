import React from 'react';
import { View, Text, TextInput } from 'react-native';
import {APP_COLORS} from "../constants/colors";

class Input extends React.Component {
    render(){
        const {container, textStyle} = styles;
        return(
            <View style={container}>
                <TextInput style={styles.textInputStyle}
                           multiline = {true}
                           placeholder = "Escribe aquí..."
                           value={'Afegir descripció...'}/>
            </View>
        )
    }
}

export default Input;

const styles = {
    container: {
        height: '66%',
        width: '15%',
        marginTop: '3%',
        marginRight: '3%',
        borderRadius: 8
    },
    textStyle: {
        alignSelf: 'center',
        color: APP_COLORS.color_white
    },
    textInputStyle: {
        color: APP_COLORS.text_color,
        fontSize: 17,
        paddingRight: '2%',
        paddingLeft: '2%',
        borderColor: APP_COLORS.text_color,
        borderWidth: 1,
        marginLeft: '8%',
        marginTop: '3%',
        width: '70%',
        borderRadius: 6,
        height: '17%'
    },
};
