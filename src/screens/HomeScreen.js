import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Layout, Text, TopNavigation, TopNavigationProps } from 'react-native-ui-kitten';
import { Actions } from 'react-native-router-flux';
import Header from '../components/Header';
import CardModified from '../components/CardModified';
import {APP_COLORS} from "../constants/colors";

export const HomeScreen = () => (
    <View style={styles.viewStyle}>
        <Header headerText="VoluntariApp"/>
        <Text style={styles.text} category='h5'>Properes activitats</Text>
        <CardModified/>
        <Button onPress = {() => Actions.second()}>BUTTON</Button>
    </View>
);

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
});
