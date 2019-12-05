import * as React from 'react';
import {StyleSheet, TouchableHighlight, View} from 'react-native';
import {  Text } from 'react-native-ui-kitten';
import {Header, Input} from 'react-native-elements';
import {APP_COLORS} from "../constants/colors";
import { connect } from 'react-redux';
import {Actions} from "react-native-router-flux";
import BottomNav from "../components/BottomNav";
import Button from "../components/Button";

class NewTaskScreen extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        const {viewStyle, titleStyle, viewFormStyle, labelStyle, inputStyle} = styles;
        return(
            <View style={viewStyle}>
                <Header
                    leftComponent={{ icon: 'home', color: APP_COLORS.color_neutral, onPress: () => Actions.home() }}
                    centerComponent={{ text: 'VoluntariApp', style: { color: APP_COLORS.color_neutral, fontSize: 25, fontWeight: 'bold' } }}
                    backgroundColor={APP_COLORS.color_orange}
                />
                <View style={viewStyle}>
                    <Text style={titleStyle}>Crear nova tasca</Text>
                    <View style={viewFormStyle}>
                        <Input label={"Títol"} errorMessage={"Aquest camp és obligatori"} inputStyle={inputStyle}
                               labelStyle={labelStyle}/>
                        <Input label={"Assignar a"} inputStyle={inputStyle} labelStyle={labelStyle}/>
                        <Input label={"Descripció"} inputStyle={inputStyle} labelStyle={labelStyle}/>
                    </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', height: '7%'}}>
                    <TouchableHighlight style={{paddingLeft: '5%', paddingTop: '3%'}} onPress={() => Actions.forumtheme()}>
                        <Text style={{color:APP_COLORS.color_darkred}}>Cancel·lar</Text>
                    </TouchableHighlight>
                    <Button colorButton={APP_COLORS.color_checked} text={"Crear"} path={() => Actions.forumtheme()} width={"15%"}/>
                </View>
                <BottomNav selected={"forum"}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: APP_COLORS.color_neutral,
        width: '100%',
        height: '100%',
        flex: 1,
    },
    inputStyle: {
        fontSize: 13,
        marginLeft: '7%',
    },
    labelStyle: {
        fontSize: 16,
        marginLeft: '3%',
        marginTop: '2%'
    },
    titleStyle: {
        color: APP_COLORS.text_color,
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: '4%',
        marginTop: '5%',
        alignSelf: 'center'
    },
    viewFormStyle: {
        alignContent: 'center',
        paddingTop: '15%'
    }
});


export default NewTaskScreen;

