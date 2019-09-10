import * as React from 'react';
import {StyleSheet, TouchableHighlight, View} from 'react-native';
import { Text } from 'react-native-ui-kitten';
import {APP_COLORS} from "../constants/colors";
import {Actions} from "react-native-router-flux";
import { Header, Input } from 'react-native-elements'
import BottomNav from "../components/BottomNav";
import Button from "../components/Button";

class NewForumThemeScreen extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        const {viewStyle, inputStyle, labelStyle, titleStyle} = styles;
        return(
            <View style={viewStyle}>
                <Header
                    leftComponent={{ icon: 'home', color: APP_COLORS.color_neutral, onPress: () => Actions.home() }}
                    centerComponent={{ text: 'VoluntariApp', style: { color: APP_COLORS.color_neutral, fontSize: 25, fontWeight: 'bold' } }}
                    rightComponent={{ icon: 'person', color: APP_COLORS.color_neutral, onPress: () => Actions.profile()}}
                    backgroundColor={APP_COLORS.color_orange}
                />
                <View style={viewStyle}>
                    <Text style={titleStyle}>Crear nou tema pel fòrum</Text>
                    <Input label={"Títol"} errorMessage={"Aquest camp és obligatori"} inputStyle={inputStyle}
                            labelStyle={labelStyle}/>
                    <Input label={"Descripció"} inputStyle={inputStyle} labelStyle={labelStyle}/>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TouchableHighlight style={{paddingLeft: '5%'}} onPress={() => Actions.forum()}>
                        <Text style={{color:APP_COLORS.text_color}}>Cancel</Text>
                    </TouchableHighlight>
                    <Button colorButton={APP_COLORS.color_checked} text={"Crear"} path={() => Actions.forumtheme()}/>
                </View>
                <BottomNav selected={"forum"}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
   viewStyle: {
       height: '100%',
       width: '100%',
       backgroundColor: APP_COLORS.color_neutral,
       flex: 1
   },
    inputStyle: {
       fontSize: 13,
        marginLeft: '7%',
    },
    labelStyle: {
        fontSize: 14,
        marginLeft: '3%',
        marginTop: '2%'
    },
    titleStyle: {
        color: APP_COLORS.text_color,
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: '4%',
        marginTop: '5%'
    },
});

export default NewForumThemeScreen;
