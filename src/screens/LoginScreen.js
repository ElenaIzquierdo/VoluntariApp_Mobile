import * as React from 'react';
import Title from "../components/Title";
import {StyleSheet, View, ScrollView, TouchableHighlight} from 'react-native';
import {APP_COLORS} from "../constants/colors";

class LoginScreen extends React.Component{
    render(){
        return(
            <View style={styles.viewStyle}>
                <Title title={"Benvingut a VoluntariApp"}/>
            </View>
        )
    }
}

const styles = {
    viewStyle: {
        backgroundColor: APP_COLORS.color_yellow,
        width: '100%',
        height: '100%',
        flex: 1,
    },
}

export default LoginScreen;