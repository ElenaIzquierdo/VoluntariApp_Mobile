import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Layout, Text } from 'react-native-ui-kitten';

export const SecondScreen = () => (
    <Layout style={styles.container}>
        <Text style={styles.text} category='h4'>Segona Pantalla</Text>
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
