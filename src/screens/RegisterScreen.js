import * as React from 'react';
import {Actions} from "react-native-router-flux";
import { connect } from 'react-redux';
import {Header, Input, CheckBox} from 'react-native-elements';
import {View, Text, TouchableHighlight, Picker} from 'react-native';
import {APP_COLORS} from "../constants/colors";

import Subtitle from "../components/Subtitle";

import {changeRegisterFormProperty, changeCheckedDay, changeErrorRegisterMapProperty, 
        resetErrorRegisterMap, registerUser} from "../actions/registerActions";


class RegisterScreen extends React.Component{
    howMuchDaysSelected(){
        var i;
        let count = 0;
        this.props.dies.map((dia)=>{
            if(dia.attendance) count++;
        })
        return count;
    }
    validateFormRegister(){
        let count = 0;
        this.props.resetErrorRegisterMap()
        if(this.props.nom_usuari === ""){
            this.props.changeErrorRegisterMapProperty("username_empty")
            count ++
        } 
        if(this.props.correu === ""){
            this.props.changeErrorRegisterMapProperty("email_empty")
            count ++
        } 
        if(this.props.telf.length != 9 && this.props.telf.length != 0){
            this.props.changeErrorRegisterMapProperty("telph_size_dif_9")
            count ++
        }
        if(this.props.password.lenght < 8){
            this.props.changeErrorRegisterMapProperty("password_size_dif_8")
            count ++
        }
        if(this.props.password === ""){
            this.props.changeErrorRegisterMapProperty("password_size_dif_8")
            count ++
        }
        if(this.props.password != this.props.password_repeted){
            this.props.changeErrorRegisterMapProperty("password_different")
            count ++
        }
        if(!this.props.correu.includes('@')){
            this.props.changeErrorRegisterMapProperty("incorrect_email")
            count ++
        }
        if(this.howMuchDaysSelected() == 0){
            this.props.changeErrorRegisterMapProperty("days");
            count ++
        }
        if(count == 0){
            days_translated = ""
            var i;
            for(i = 0; i < 5; i++){
                if(this.props.dies[i]){
                    days_translated += "1"
                }
                else{
                    days_translated += "0"
                }
            }
            userprofile = {
                mobile_phone: this.props.telf,
                days: days_translated,
                group: this.props.grup
            }
            const userInfo = {
                email: this.props.correu,
                password: this.props.password,
                first_name: this.props.nom_usuari,
                profile: userprofile
            };
            this.props.registerUser(userInfo)
        }
    }

    renderThirdFirstDays(){
        return this.props.dies.map((day)=>{
            if(day.id < 3){
                return(
                    <CheckBox key={day.id} title={day.day_name} size={12} textStyle={styles.infoStyle} center={false} 
                                checkedColor={APP_COLORS.color_checked} containerStyle={styles.checkBoxContainerStyle}
                                checked={day.attendance} onPress={()=>this.props.changeCheckedDay(day.id)}/>
                )
            }
        })
    }

    renderTwoLastDays(){
        return this.props.dies.map((day)=>{
            if(day.id >= 3){
                return(
                    <CheckBox key={day.id} title={day.day_name} size={12} textStyle={styles.infoStyle} center={false} 
                                checkedColor={APP_COLORS.color_checked} containerStyle={styles.checkBoxContainerStyle}
                                checked={day.attendance} onPress={()=>this.props.changeCheckedDay(day.id)}/>
                )
            }
        })
    }

    displayDays(){
        return(
            <View style={styles.viewDiesStyle}>
                <Text style={styles.textDiesStyle}>dies</Text>
                <View style={styles.rowStyle}>
                    {this.renderThirdFirstDays()}
                </View>
                <View style={styles.rowStyle}>
                    {this.renderTwoLastDays()}
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
                    {this.props.errors["incorrect_email"] ? <Text style={styles.errorTextStyle}>El correu ha de ser una direcció vàlida</Text>:null}
                    
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
                        <View style={styles.viewPickerStyle}>
                            <Text style={styles.textDiesStyle}>grup</Text>
                            <Picker selectedValue={this.props.grup}
                                    style={{height: 50, width: 135}}
                                    onValueChange={(itemValue) => this.props.changeRegisterFormProperty("grup",itemValue)}>
                                    
                                <Picker.Item label={this.props.group_choices[0]} value={this.props.group_choices[0]} />
                                <Picker.Item label={this.props.group_choices[1]} value={this.props.group_choices[1]} />
                                <Picker.Item label={this.props.group_choices[2]} value={this.props.group_choices[2]} />
                                <Picker.Item label={this.props.group_choices[3]} value={this.props.group_choices[3]} />
                                <Picker.Item label={this.props.group_choices[4]} value={this.props.group_choices[4]} />
                            </Picker>
                        </View>
                        <View style={styles.viewPicker2Style}>
                            <Text style={styles.textDiesStyle}>centre</Text>
                            <Picker selectedValue={this.props.centre}
                                    style={{height: 50, width: 150}}
                                    onValueChange={(itemValue) => this.props.changeRegisterFormProperty("centre",itemValue)}>
                                <Picker.Item label={this.props.centre_choices[0]} value={this.props.centre_choices[0]} />
                                <Picker.Item label={this.props.centre_choices[1]} value={this.props.centre_choices[1]} />
                                <Picker.Item label={this.props.centre_choices[2]} value={this.props.centre_choices[2]} />
                                <Picker.Item label={this.props.centre_choices[3]} value={this.props.centre_choices[3]} />
                                <Picker.Item label={this.props.centre_choices[4]} value={this.props.centre_choices[4]} />
                            </Picker>
                        </View>
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
    },
    viewPickerStyle: {
        marginLeft:'3%'
    },
    viewPicker2Style: {
        marginLeft:'9%'
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
        errors: state.registerReducer.errors,
        group_choices: state.registerReducer.group_choices,
        centre_choices: state.registerReducer.centre_choices
    }
};

const  mapDispatchToProps = (dispatch)=>{
    return {
        changeCheckedDay: (day)=>dispatch(changeCheckedDay(day)),
        changeRegisterFormProperty : (propertyName, value) => dispatch(changeRegisterFormProperty(propertyName, value)),
        changeErrorRegisterMapProperty: (propertyName) => dispatch(changeErrorRegisterMapProperty(propertyName)),
        resetErrorRegisterMap: () => dispatch(resetErrorRegisterMap()),
        registerUser: (userInfo) => dispatch(registerUser(userInfo)),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(RegisterScreen);