import * as React from 'react';
import { StyleSheet, View } from 'react-native';
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
                <ForumTheme titleForum={"Comisió centre interés"} creator={"Julia Soler"} estat={"Obert"} data={"24/06/2019"}/>
                <ForumTheme titleForum={"Comisió centre interés"} creator={"Julia Soler"} estat={"Obert"} data={"24/06/2019"}/>
                <ForumTheme titleForum={"Comisió centre interés"} creator={"Julia Soler"} estat={"Obert"} data={"24/06/2019"}/>
                <ForumTheme titleForum={"Comisió centre interés"} creator={"Julia Soler"} estat={"Obert"} data={"24/06/2019"}/>
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

