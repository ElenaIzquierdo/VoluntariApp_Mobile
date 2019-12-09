import * as React from 'react';
import {Actions} from "react-native-router-flux";
import { connect } from 'react-redux';
import {Header, Input, CheckBox} from 'react-native-elements';
import {View, Text, TouchableHighlight} from 'react-native';
import {APP_COLORS} from "../constants/colors";

import Subtitle from "../components/Subtitle";

import {changeRegisterFormProperty, changeCheckedDay, changeErrorRegisterMapProperty, resetErrorRegisterMap} from "../actions/registerActions";


class RegisterScreen extends React.Component{
    hasAtLeastOne(){
        var i;
        let count = 0;
        for(i = 0; i < this.props.dies.length; i++){
            console.log(this.props.dies[i])
            if(this.props.dies[i]){
                count = count +1;
            } 
        }
        console.log("COUNT ", count);
        if(count == 0) this.props.changeErrorRegisterMapProperty("days");
    }
    validateFormRegister(){  
        this.props.resetErrorRegisterMap()
        if(this.props.nom_usuari === ""){
            this.props.changeErrorRegisterMapProperty("username_empty")
        } 
        if(this.props.correu === ""){
            this.props.changeErrorRegisterMapProperty("email_empty")
        } 
        if(this.props.telf.length != 9 && this.props.telf.length != 0){
            this.props.changeErrorRegisterMapProperty("telph_size_dif_9")
        }
        if(this.props.password.lenght < 8){
            this.props.changeErrorRegisterMapProperty("password_size_dif_8")
        }
        if(this.props.password === ""){
            this.props.changeErrorRegisterMapProperty("password_size_dif_8")
        }
        if(this.props.password != this.props.password_repeted){
            this.props.changeErrorRegisterMapProperty("password_different")
        }
        //this.hasAtLeastOne()
    }

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
                {this.props.errors["days"] ? <Text style={styles.errorTextStyle}>Has d'escollir un dia a la setmana mínim</Text>:null}
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
                    {this.props.errors["username_empty"] ? <Text style={styles.errorTextStyle}>El nom d'usuari no pot ser buit</Text>:null}
                    

                    <Input label={"correu electrònic"} labelStyle={styles.labelStyle} inputStyle={styles.inputStyle}
                            containerStyle={styles.containerStyle} keyboardType={'email-address'} value={this.props.correu}
                            onChangeText={(text) => this.props.changeRegisterFormProperty("correu",text)}/>
                    {this.props.errors["email_empty"] ? <Text style={styles.errorTextStyle}>El correu no pot ser buit</Text>:null}

                    <Input label={"telefon mobil"} labelStyle={styles.labelStyle} inputStyle={styles.inputStyle}
                            containerStyle={styles.containerSmallStyle} keyboardType= {'number-pad'}
                            value={this.props.telf}
                            onChangeText={(text) => this.props.changeRegisterFormProperty("telf",text)}/>
                    {this.props.errors["telph_size_dif_9"] ? <Text style={styles.errorTextStyle}>El telefon ha de contenir 9 digits</Text>:null}
                 
                    <View style={styles.rowStyle}>
                        <View style={styles.containerSmallStyle}>
                            <Input label={"contrassenya"} labelStyle={styles.labelStyle} inputStyle={styles.inputStyle}
                                containerStyle={styles.containerStyle} secureTextEntry={true}
                                value={this.props.password}
                                onChangeText={(text) => this.props.changeRegisterFormProperty("password",text)}/>
                            {this.props.errors["password_size_dif_8"] ? <Text style={styles.errorTextStyle}>La contrassenya ha de contenir mínim 8 caràcters</Text>:null}
                        </View>
                        
                        <View style={styles.containerSmallStyle}>
                            <Input label={"contrassenya"} labelStyle={styles.labelStyle} inputStyle={styles.inputStyle}
                            containerStyle={styles.containerStyle} secureTextEntry={true}
                            value={this.props.password_repeted}
                            onChangeText={(text) => this.props.changeRegisterFormProperty("password_repeted",text)}/>
                            {this.props.errors["password_different"] ? <Text style={styles.errorTextStyle}>Les dues contrassenyes han de ser iguals</Text>:null}
                        </View>
                        
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
                    <TouchableHighlight style={styles.container} onPress={this.validateFormRegister.bind(this)}>
                        <Text style={styles.textButtonStyle}>Acceptar</Text>
                    </TouchableHighlight>
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
    },
    errorTextStyle: {
        color: APP_COLORS.color_darkred,
        fontSize: 12,
        marginLeft: '3%'
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
        password_repeted: state.registerReducer.password_repeted,
        dies: state.registerReducer.dies,
        errors: state.registerReducer.errors
    }
};

const  mapDispatchToProps = (dispatch)=>{
    return {
        changeCheckedDay: (day)=>dispatch(changeCheckedDay(day)),
        changeRegisterFormProperty : (propertyName, value) => dispatch(changeRegisterFormProperty(propertyName, value)),
        changeErrorRegisterMapProperty: (propertyName) => dispatch(changeErrorRegisterMapProperty(propertyName)),
        resetErrorRegisterMap: () => dispatch(resetErrorRegisterMap()),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(RegisterScreen);