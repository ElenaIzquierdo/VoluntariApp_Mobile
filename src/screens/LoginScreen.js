import * as React from 'react';
import {Actions} from "react-native-router-flux";
import { connect } from 'react-redux';
import {View, TouchableHighlight, Text} from 'react-native';
import {APP_COLORS} from "../constants/colors";
import Title from "../components/Title";
import Logo from "../components/Logo";
import Subtitle from "../components/Subtitle";
import { Input } from 'react-native-elements'
import {changeLoginFormProperty, changeErrorLoginMapProperty, resetErrorLoginMap, login} from "../actions/loginActions";


class LoginScreen extends React.Component{
    validateFormLogin(){
        var count = 0;
        this.props.resetErrorLoginMap();
        if(this.props.password == ""){
            this.props.changeErrorLoginMapProperty("password_empty")
            count ++
        }
        if(this.props.email == ""){
            this.props.changeErrorLoginMapProperty("email_empty")
            count ++
        }
        if(count == 0){
            const loginInfo = {
                username: this.props.email,
                password: this.props.password,
            };
            this.props.login(loginInfo)
        }
    }
    render(){
        return(
            <View style={styles.viewStyle}>
                <Title title={"Benvingut a VoluntariApp"}/>
                <View style={styles.viewLogoStyle}>
                    <Logo/>
                </View>
                <View style={styles.viewInputStyle}>
                    <Input label={"correu electrònic"} labelStyle={styles.labelStyle} inputStyle={styles.inputStyle}
                            containerStyle={styles.containerStyle} keyboardType={'email-address'}
                            value={this.props.email}
                            onChangeText={(text) => this.props.changeLoginFormProperty("email",text)}/>
                    {this.props.errors["email_empty"] ? <Text style={styles.errorTextStyle}>El correu no pot ser buit</Text>:null}
                    <Input label={"contrassenya"} labelStyle={styles.labelStyle} inputStyle={styles.inputStyle} 
                            containerStyle={styles.containerStyle} secureTextEntry={true}
                            value={this.props.password}
                            onChangeText={(text) => this.props.changeLoginFormProperty("password",text)}/>
                    {this.props.errors["password_empty"] ? <Text style={styles.errorTextStyle}>La contrassenya no pot ser buida</Text>:null}
                </View>
                <View style={styles.viewButtonStyle}>
                <TouchableHighlight style={styles.container} onPress={this.validateFormLogin.bind(this)}>
                        <Text style={styles.textButtonStyle}>Acceptar</Text>
                    </TouchableHighlight>
                </View>
                <Subtitle text={"No tens compta?"} linkText={"Registrat!"} path={() => Actions.register()}/>
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
    },
    container: {
        height: '66%',
        marginTop: '3%',
        marginRight: '3%',
        marginLeft: '5%',
        width: '20%',
        borderRadius: 8,
        paddingTop: '1%',
        alignItems: 'center',
        backgroundColor: APP_COLORS.color_green
      },
      textButtonStyle: {
        alignSelf: 'center',
        color: APP_COLORS.color_white
    },
    errorTextStyle: {
        color: APP_COLORS.color_darkred,
        fontSize: 12,
        marginLeft: '3%'
    },
}

const mapStateToProps = (state) => {
    return {
        email: state.loginReducer.email,
        password: state.loginReducer.password,
        errors: state.loginReducer.errors
    }
};

const  mapDispatchToProps = (dispatch)=>{
    return {
        changeLoginFormProperty : (propertyName, value) => dispatch(changeLoginFormProperty(propertyName, value)),
        changeErrorLoginMapProperty: (propertyName) => dispatch(changeErrorLoginMapProperty(propertyName)),
        resetErrorLoginMap: () => dispatch(resetErrorLoginMap()),
        login: (loginInfo) => dispatch(login(loginInfo))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(LoginScreen);