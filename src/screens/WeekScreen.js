import * as React from 'react';
import { StyleSheet, View, Switch, TouchableHighlight } from 'react-native';
import { Button, Layout, Text, TopNavigation, TopNavigationProps } from 'react-native-ui-kitten';
import {Header} from 'react-native-elements';
import {APP_COLORS} from "../constants/colors";
import { connect } from 'react-redux';
import {Actions} from "react-native-router-flux";
import SeparadorSimple from "../components/SeparadorSimple";
import {changeSwitchMonday} from "../actions/weekActions";

class WeekScreen extends React.Component{
    constructor(props) {
        super(props)
    }

    toggleSwitch = (value) => {
        this.props.changeSwitchMonday(value);
    }

    pintarFinished(date){
        var date_now = new Date().getDate(); //Current Date
        if(date_now > date){
            return(<Text>Finalitzat</Text>)
        }
        else{
            return(<Text>No finalitzat</Text>)
        }

    }

    pintarDies(){
        return this.props.setmana.map((dia)=>{
            return(
                <View>
                    <View key={dia.id} style={styles.rowStyle}>
                        <TouchableHighlight onPress = {() => Actions.event()}>
                            <Text style={styles.titleStyle}>{dia.name}{' '}{dia.date}</Text>
                        </TouchableHighlight>
                        <Switch value={dia.attendee} onValueChange = {this.toggleSwitch}/>
                    </View>
                    {this.pintarFinished()}
                </View>
            )
        })
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
                <View style={styles.viewTopStyle}>
                    <Text style={styles.titleStyle}>Setmana {this.props.setmana[0].date}-{this.props.setmana[4].date}</Text>
                    <Text style={styles.descriptionStyle}>{this.props.message}</Text>
                </View>
                <SeparadorSimple/>
                {this.pintarDies()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: APP_COLORS.color_neutral,
        width: '100%',
        height: '100%',
    },
    titleStyle: {
        color: APP_COLORS.text_color,
        fontSize: 17,
        fontWeight: 'bold',
        paddingLeft: '3%',
        paddingTop: '2%'
    },
    rowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: '2%',
        paddingTop: '2%',
        paddingRight: '3%',
        height: '9%'
    },
    descriptionStyle: {
        color: APP_COLORS.text_color,
        fontSize: 16,
        paddingTop: '2%',
        paddingLeft: '5%'
    },
    viewTopStyle: {
        height: '20%'
    }
});


const mapStateToProps = (state) => {
    return {
        message: state.weekReducer.message,
        setmana: state.weekReducer.setmana
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {
        changeSwitchMonday : (value) => dispatch(changeSwitchMonday(value))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(WeekScreen)

