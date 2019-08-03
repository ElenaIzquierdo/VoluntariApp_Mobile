import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Layout, Text, TopNavigation, TopNavigationProps } from 'react-native-ui-kitten';
import { Actions } from 'react-native-router-flux';
import connect from "react-redux/es/connect/connect";
import Header from '../components/Header';
import CardModified from '../components/CardModified';
import {APP_COLORS} from "../constants/colors";
import {Card, Icon} from "react-native-elements";
import {changeIteratorParam} from "../actions/homeActions";

class HomeScreen extends React.Component{
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <View style={styles.viewStyle}>
                <Header headerText="VoluntariApp"/>
                <Text style={styles.text} category='h5'>Properes activitats</Text>
                <CardModified image={require('../images/casalfoto.jpg')} title="Casal dilluns 15" grup="Grup Petits" dia="15/05/2019" hora="16:00"/>
                <View style={styles.footer}>
                    <Icon
                        raised
                        name='chevron-left'
                        type='evilicon'
                        color={APP_COLORS.color_green}
                        size={32}
                    />
                    <Icon
                        raised
                        name='chevron-right'
                        type='evilicon'
                        color={APP_COLORS.color_green}
                        size={32}
                    />
                </View>
                <Button onPress = {() => Actions.forum()}>Forum</Button>
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
    text: {
        marginVertical: 16,
        color: APP_COLORS.text_color,
        alignSelf: 'center'

    },
    footer: {
        flexDirection: 'row',
        marginBottom: '15%',
        justifyContent: 'space-between',
        paddingRight: '15%',
        paddingLeft: '15%',
        paddingTop: '5%'
    },
});

export default HomeScreen;

