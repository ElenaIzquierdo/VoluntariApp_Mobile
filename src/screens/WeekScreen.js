import * as React from 'react';
import { StyleSheet, View, Switch, TouchableHighlight } from 'react-native';
import { Button, Layout, Text, TopNavigation, TopNavigationProps } from 'react-native-ui-kitten';
import {Header} from 'react-native-elements';
import {APP_COLORS} from "../constants/colors";
import { connect } from 'react-redux';
import {Actions} from "react-native-router-flux";
import SeparadorSimple from "../components/SeparadorSimple";
import {changeSwitchMonday} from "../actions/weekActions";
import {FontAwesome} from "@expo/vector-icons";

class WeekScreen extends React.Component{
    constructor(props) {
        super(props)
    }

    toggleSwitch = (value) => {
        this.props.changeSwitchMonday(value);
    }

    pintarFinished(finished){
        if(finished){
            return(<Text style={styles.textFinishedStyle}>Finalitzat</Text>)
        }
        else{
            return(<Text style={styles.textNotFinishedStyle}>No finalitzat</Text>)
        }

    }

    pintarDies(){
        return this.props.setmana.map((dia)=>{
            return(
                <View key={dia.id} style={styles.viewDayStyle}>
                    <View  style={styles.rowStyle}>
                        {dia.finished ?
                            <TouchableHighlight onPress = {() => Actions.event()}>
                                <Text style={styles.titleStyle}>{dia.name}{' '}{dia.date}</Text>
                            </TouchableHighlight>:
                            <View>
                                <Text style={styles.titleStyle}>{dia.name}{' '}{dia.date}</Text>
                            </View>
                        }

                        <View style={{flexDirection: 'row'}}>
                            <FontAwesome name='download' size={22} color= {APP_COLORS.text_color} style={styles.iconStyle}/>
                            <Switch value={dia.attendee} onValueChange = {this.toggleSwitch}/>
                        </View>
                    </View>
                    <View style={styles.viewFinishedStyle}>
                        {this.pintarFinished(dia.finished)}
                    </View>
                </View>
            )
        })
    }

    render(){
        return(
            <View style={styles.viewStyle}>
                <Header
                    leftComponent={{ icon: 'home', color: APP_COLORS.color_neutral, onPress: () => Actions.home() }}
                    centerComponent={{ text: 'VoluntariApp', style: { color: APP_COLORS.color_neutral, fontSize: 25, fontWeight: 'bold' } }}
                    rightComponent={{ icon: 'person', color: APP_COLORS.color_neutral, onPress: () => Actions.profile()}}
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
    },
    rowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: '2%',
        paddingRight: '3%',
    },
    descriptionStyle: {
        color: APP_COLORS.text_color,
        fontSize: 16,
        paddingTop: '2%',
        paddingLeft: '5%'
    },
    viewTopStyle: {
        height: '20%',
        paddingTop: '3%'
    },
    viewFinishedStyle: {
        paddingLeft: '2%',
    },
    textFinishedStyle: {
        color: APP_COLORS.color_green,
        fontSize: 16,
        marginLeft: '6%'
    },
    textNotFinishedStyle: {
        color: APP_COLORS.text_color,
        fontSize: 16,
        marginLeft: '6%'
    },
    viewDayStyle: {
        marginBottom: '5%',
        flexDirection: 'column'
    },
    iconStyle: {
        marginRight: '4%',
        marginTop: '2%'
    },
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

