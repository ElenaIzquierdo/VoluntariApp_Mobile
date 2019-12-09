import * as React from 'react';
import {Actions} from "react-native-router-flux";
import { connect } from 'react-redux';
import {Header, Input, CheckBox} from 'react-native-elements';
import {View, Text} from 'react-native';
import {APP_COLORS} from "../constants/colors";

import Subtitle from "../components/Subtitle";
import Button from "../components/Button";

import {changeRegisterFormProperty, changeCheckedDay} from "../actions/registerActions";


class RegisterScreen extends React.Component{
    displayDays(){
        return(
            <View style={styles.viewDiesStyle}>
                <Text style={styles.textDiesStyle}>dies</Text>
                <View style={styles.rowStyle}>
                    <CheckBox title={"dll"} size={12} textStyle={styles.infoStyle} center={false} 
                            checkedColor={APP_COLORS.color_checked} containerStyle={styles.checkBoxContainerStyle}
                            checked={this.props.dies[0]} onPress={()=>this.props.changeCheckedDay(0)}/>
                    <CheckBox title={"dm"} size={12} textStyle={styles.infoStyle} center={false} 
                            checkedColor={APP_COLORS.color_checked} containerStyle={styles.checkBoxContainerStyle}
                            checked={this.props.dies[1]} onPress={()=>this.props.changeCheckedDay(1)}/>
                    <CheckBox title={"dc"} size={12} textStyle={styles.infoStyle} center={false} 
                            checkedColor={APP_COLORS.color_checked} containerStyle={styles.checkBoxContainerStyle}
                            checked={this.props.dies[2]} onPress={()=>this.props.changeCheckedDay(2)}/>
                </View>
                <View style={styles.rowStyle}>
                    <CheckBox title={"dj"} size={12} textStyle={styles.infoStyle} center={false} 
                            checkedColor={APP_COLORS.color_checked} containerStyle={styles.checkBoxContainerStyle}
                            checked={this.props.dies[3]} onPress={()=>this.props.changeCheckedDay(3)}/>
                    <CheckBox title={"dv"} size={12} textStyle={styles.infoStyle} center={false} 
                            checkedColor={APP_COLORS.color_checked} containerStyle={styles.checkBoxContainerStyle}
                            checked={this.props.dies[4]} onPress={()=>this.props.changeCheckedDay(4)}/>
                </View>
            </View>
        )
    }
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
                            containerStyle={styles.containerStyle} value={this.props.nom_usuari}
                            onChangeText={(text) => this.props.changeRegisterFormProperty("nom_usuari",text)}/>
                    <Input label={"correu electrònic"} labelStyle={styles.labelStyle} inputStyle={styles.inputStyle}
                            containerStyle={styles.containerStyle} keyboardType={'email-address'} value={this.props.correu}
                            onChangeText={(text) => this.props.changeRegisterFormProperty("correu",text)}/>
                    <Input label={"telefon mobil"} labelStyle={styles.labelStyle} inputStyle={styles.inputStyle}
                            containerStyle={styles.containerSmallStyle} keyboardType= {'number-pad'}
                            value={this.props.telf}
                            onChangeText={(text) => this.props.changeRegisterFormProperty("telf",text)}/>
                    <View style={styles.rowStyle}>
                        <Input label={"contrassenya"} labelStyle={styles.labelStyle} inputStyle={styles.inputStyle}
                            containerStyle={styles.containerSmallStyle} secureTextEntry={true}
                            value={this.props.password}
                            onChangeText={(text) => this.props.changeRegisterFormProperty("password",text)}/>
                        <Input label={"contrassenya"} labelStyle={styles.labelStyle} inputStyle={styles.inputStyle}
                            containerStyle={styles.containerSmallStyle} secureTextEntry={true}
                            value={this.props.password_repeted}
                            onChangeText={(text) => this.props.changeRegisterFormProperty("password_repeted",text)}/>
                    </View>
                    
                    <View style={styles.rowStyle}>
                        <Input label={"grup"} labelStyle={styles.labelStyle} inputStyle={styles.inputStyle}
                                containerStyle={styles.containerSmallStyle} value={this.props.grup}
                                onChangeText={(text) => this.props.changeRegisterFormProperty("grup",text)}/>
                        <Input label={"centre"} labelStyle={styles.labelStyle} inputStyle={styles.inputStyle}
                                containerStyle={styles.containerSmallStyle} value={this.props.centre}
                                onChangeText={(text) => this.props.changeRegisterFormProperty("centre",text)}/>
                    </View>
                    {this.displayDays()}     
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
        paddingTop:'7%',
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
    },
    rowStyle:{
        flexDirection: 'row',
    },
    containerSmallStyle: {
        width: '45%'
    },
    infoStyle:{
        color: APP_COLORS.color_green,
        fontSize: 16,
    },
    checkBoxContainerStyle: {
        backgroundColor: APP_COLORS.color_neutral,
        borderColor: APP_COLORS.color_neutral
    },
    textDiesStyle: {
        color: APP_COLORS.color_green,
        fontSize: 16,
        fontWeight: 'bold'
    },
    viewDiesStyle: {
        paddingLeft: '3%',
        paddingTop: '2%'
    }
}

const mapStateToProps = (state) => {
    return {
        nom_usuari: state.registerReducer.nom_usuari,
        correu: state.registerReducer.correu,
        telf: state.registerReducer.telf,
        grup: state.registerReducer.grup,
        centre: state.registerReducer.centre,
        password: state.registerReducer.password,
        dies: state.registerReducer.dies
    }
};

const  mapDispatchToProps = (dispatch)=>{
    return {
        changeCheckedDay: (day)=>dispatch(changeCheckedDay(day)),
        changeRegisterFormProperty : (propertyName, value) => dispatch(changeRegisterFormProperty(propertyName, value)),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(RegisterScreen);