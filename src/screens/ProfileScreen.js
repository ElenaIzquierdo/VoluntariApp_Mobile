import * as React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button, Layout, Text, TopNavigation, TopNavigationProps } from 'react-native-ui-kitten';
import {Header} from 'react-native-elements';
import {APP_COLORS} from "../constants/colors";
import { connect } from 'react-redux';
import {Actions} from "react-native-router-flux";

class ProfileScreen extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <View style={styles.viewStyle}>
                <Header
                    leftComponent={{ icon: 'home', color: APP_COLORS.color_neutral, onPress: () => Actions.home() }}
                    centerComponent={{ text: 'VoluntariApp', style: { color: APP_COLORS.color_neutral, fontSize: 25, fontWeight: 'bold' } }}
                    backgroundColor={APP_COLORS.color_orange}
                />
                <Text>Perfil usuari</Text>
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


export default ProfileScreen;

