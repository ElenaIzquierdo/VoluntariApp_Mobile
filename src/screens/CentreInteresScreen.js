import * as React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button, Layout, Text, TopNavigation, TopNavigationProps } from 'react-native-ui-kitten';
import {Header} from 'react-native-elements';
import {APP_COLORS} from "../constants/colors";
import { connect } from 'react-redux';
import {Actions} from "react-native-router-flux";
import SeparadorCI from '../components/SeparadorCI';
class CentreInteresScreen extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <View style={styles.viewStyle}>
                <Header
                    leftComponent={{ icon: 'menu', color: APP_COLORS.color_neutral }}
                    centerComponent={{ text: 'VoluntariApp', style: { color: APP_COLORS.color_neutral, fontSize: 25, fontWeight: 'bold' } }}
                    rightComponent={{ icon: 'home', color: APP_COLORS.color_neutral, onPress: () => Actions.home()}}
                    backgroundColor={APP_COLORS.color_orange}
                />
                <SeparadorCI objectius={this.props.objectius} estat_actual={this.props.estat_actual}
                                explicacio={this.props.explicacio}/>
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


const mapStateToProps = (state) => {
    return {
        objectius: state.centreinteresReducer.objectius,
        estat_actual: state.centreinteresReducer.estat_actual,
        explicacio: state.centreinteresReducer.explicacio,
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CentreInteresScreen)

