import * as React from 'react';
import {Actions} from "react-native-router-flux";

import {View} from 'react-native';
import {APP_COLORS} from "../constants/colors";
import Button from "../components/Button";
import Title from "../components/Title";
import Logo from "../components/Logo";
import Subtitle from "../components/Subtitle";

import { Input } from 'react-native-elements'

class LoginScreen extends React.Component{
    render(){
        return(
            <View style={styles.viewStyle}>
                <Title title={"Benvingut a VoluntariApp"}/>
                <View style={styles.viewLogoStyle}>
                    <Logo/>
                </View>
                <View style={styles.viewInputStyle}>
                    <Input label={"correu electrònic"} labelStyle={styles.labelStyle} inputStyle={styles.inputStyle}
                            containerStyle={styles.containerStyle}/>
                    <Input label={"contrassenya"} labelStyle={styles.labelStyle} inputStyle={styles.inputStyle} 
                            containerStyle={styles.containerStyle}/>
                </View>
                <View style={styles.viewButtonStyle}>
                    <Button colorButton={APP_COLORS.color_green} marginL={'5%'} width={'20%'} path={() => Actions.home()} text={"Entrar"}/>
                </View>
                <Subtitle text={"No tens compta?"} linkText={"Registrat!"} path={() => Actions.home()}/>
            </View>
        )
    }
}

const styles = {
    viewStyle: {
        backgroundColor: APP_COLORS.color_yellow,
        width: '100%',
        height: '100%',
        flex: 1,
        paddingTop: '40%'
    },
    viewLogoStyle: {
        marginTop: '10%',
        alignItems: 'center'
    },
    viewInputStyle: {
        paddingTop: '50%',
        paddingLeft: '15%'
    },
    inputStyle: {
        color: APP_COLORS.color_green
    },
    labelStyle: {
        color: APP_COLORS.color_green
    },
    containerStyle: {
        width: '90%'
    },
    viewButtonStyle: {
        height: '12%',
        alignItems: 'flex-end',
        marginTop: '5%',
        paddingRight: '7%',
        marginBottom: '6%'
    }

}

export default LoginScreen;