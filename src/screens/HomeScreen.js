import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Layout, Text } from 'react-native-ui-kitten';
import {Router, Scene} from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';

export const HomeScreen = () => (
    <Layout style={styles.container}>
        <Text style={styles.text} category='h4'>Welcome to UI Kitten</Text>
        <Button onPress = {() => Actions.second()}>BUTTON</Button>
    </Layout>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        marginVertical: 16,
    },
});
