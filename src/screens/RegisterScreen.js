import * as React from 'react';
import {Actions} from "react-native-router-flux";
import {Header, Input} from 'react-native-elements';
import {View, ScrollView} from 'react-native';
import {APP_COLORS} from "../constants/colors";

import Subtitle from "../components/Subtitle";
import Button from "../components/Button";

class RegisterScreen extends React.Component{
    render(){
        return(
            <View style={styles.viewStyle}>
                <Header
                    leftComponent={{ icon: 'arrow-back', color: APP_COLORS.color_neutral,onPress: () => Actions.login()}}
                    centerComponent={{ text: 'VoluntariApp', style: { color: APP_COLORS.color_neutral, fontSize: 25, fontWeight: 'bold' } }}
                    backgroundColor={APP_COLORS.color_orange}
                />
                <View style={styles.subtitleView}>
                    <Subtitle text={"Omple el formulari per tal de registrar-te"}/>
                </View>
                <View style={styles.formStyle}>
                    <Input label={"nom d'usuari"} labelStyle={styles.labelStyle} inputStyle={styles.inputStyle}
                            containerStyle={styles.containerStyle}/>
                    <Input label={"correu electrònic"} labelStyle={styles.labelStyle} inputStyle={styles.inputStyle}
                            containerStyle={styles.containerStyle} keyboardType={'email-address'}/>
                    <Input label={"telefon mobil"} labelStyle={styles.labelStyle} inputStyle={styles.inputStyle}
                            containerStyle={styles.containerStyle} keyboardType= {'number-pad'}/>
                    <Input label={"contrassenya"} labelStyle={styles.labelStyle} inputStyle={styles.inputStyle}
                            containerStyle={styles.containerStyle} secureTextEntry={true}/>
                    <Input label={"grup"} labelStyle={styles.labelStyle} inputStyle={styles.inputStyle}
                            containerStyle={styles.containerStyle}/>
                    <Input label={"centre"} labelStyle={styles.labelStyle} inputStyle={styles.inputStyle}
                            containerStyle={styles.containerStyle}/>
                    <Input label={"dies"} labelStyle={styles.labelStyle} inputStyle={styles.inputStyle}
                            containerStyle={styles.containerStyle}/>      
                </View>
                <View style={styles.viewButtonStyle}>
                    <Button colorButton={APP_COLORS.color_green} marginL={'5%'} width={'20%'} path={() => Actions.home()} text={"Acceptar"}/>
                </View>
            </View>
        )
    }
}

const styles = {
    viewStyle: {
        backgroundColor: APP_COLORS.color_neutral,
        width: '100%',
        height: '100%',
        flex: 1,
    },
    subtitleView: {
        paddingTop: '5%'
    },
    formStyle: {
        paddingTop:'5%',
        alignContent: 'center',
        paddingLeft: '3%'
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

export default RegisterScreen;