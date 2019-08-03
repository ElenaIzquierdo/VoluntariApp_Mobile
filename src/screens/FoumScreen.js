import * as React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button, Layout, Text, TopNavigation, TopNavigationProps } from 'react-native-ui-kitten';
import Header from '../components/Header';
import ForumTheme from '../components/ForumTheme';
import {APP_COLORS} from "../constants/colors";

class ForumScreen extends React.Component{
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <View style={styles.viewStyle}>
                <Header headerText="VoluntariApp"/>
                <ScrollView>
                    <ForumTheme titleForum={"Comisió centre interés"} creator={"Julia Soler"} finished={false} data={"24/06/2019"}/>
                    <ForumTheme titleForum={"Idees reunió equip"} creator={"Victor Gasol"} finished={false} data={"10/05/2019"}/>
                    <ForumTheme titleForum={"Idees cançons"} creator={"Laura Gonzalez"} finished={false} data={"04/04/2019"}/>
                    <ForumTheme titleForum={"Activitat dilluns 22-Sherlock"} creator={"Laura Gonzalez"} finished={true} data={"18/03/2019"}/>
                    <ForumTheme titleForum={"Activitat dilluns 22-Sherlock"} creator={"Laura Gonzalez"} finished={true} data={"18/03/2019"}/>
                    <ForumTheme titleForum={"Activitat dilluns 22-Sherlock"} creator={"Laura Gonzalez"} finished={true} data={"18/03/2019"}/>
                </ScrollView>
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
});

export default ForumScreen;

