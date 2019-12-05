import * as React from 'react';
import { StyleSheet, View, TouchableHighlight,  } from 'react-native';
import { Text } from 'react-native-ui-kitten';
import {Header, CheckBox} from 'react-native-elements';
import {APP_COLORS} from "../constants/colors";
import { connect } from 'react-redux';
import {Actions} from "react-native-router-flux";
import SeparadorSimple from "../components/SeparadorSimple";
import {changeSwitchForDay, setTrueModifiedAttribute, setFalseModifiedAttribute, saveChanges} from "../actions/weekActions";
import {FontAwesome} from "@expo/vector-icons";
import BottomNav from "../components/BottomNav";
import Button from "../components/Button";

class WeekScreen extends React.Component{
    constructor(props) {
        super(props)
    }

    _onPressButton(day) {
        if(!this.props.modified){
            this.props.setTrueModifiedAttribute()
        }
        this.props.changeSwitchForDay(day);
    }

    _onPressCancelModify(){
        this.props.setFalseModifiedAttribute()
    }

    _onPressSave(){
        this.props.saveChanges()
    }

    static pintarFinished(finished){
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
                            <CheckBox center key={dia.id} checked = {dia.attendee} onPress={this._onPressButton.bind(this,dia.id)}
                                        checkedIcon='dot-circle-o' uncheckedIcon='circle-o' iconRight size={18} containerStyle = {styles.containerCheckStyle}
                                        checkedColor = {APP_COLORS.color_green} uncheckedColor = {APP_COLORS.color_green}/>
                        </View>
                    </View>
                    <View style={styles.viewFinishedStyle}>
                        {WeekScreen.pintarFinished(dia.finished)}
                    </View>
                </View>
            )
        })
    }

    displayButtons(){
        if(this.props.modified){
            return(
                <View style={styles.rowStyle}>
                    <TouchableHighlight style={{paddingLeft: '5%', paddingTop: '3%'}} onPress={this._onPressCancelModify.bind(this)}>
                        <Text style={{color:APP_COLORS.color_darkred}}>Cancel·lar</Text>
                    </TouchableHighlight>
                    <Button text={"Guardar"} colorButton={APP_COLORS.color_green} width={"15%"} path={this._onPressSave.bind(this)}/>
                </View>
            )
        }
    }

    render(){
        return(
            <View>
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
                {this.displayButtons()}

            </View>
            <BottomNav selected={"programacio"}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: APP_COLORS.color_neutral,
        width: '100%',
        height: '90%',
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
    containerCheckStyle: {
        margin: '1%',
        padding: '1%',
        paddingTop: '3%'
        
    }
});


const mapStateToProps = (state) => {
    return {
        message: state.weekReducer.message,
        setmana: state.weekReducer.setmana,
        modified: state.weekReducer.modified
    }
};

const  mapDispatchToProps = (dispatch)=>{
    return {
        changeSwitchForDay : (day) => dispatch(changeSwitchForDay(day)),
        setTrueModifiedAttribute : () => dispatch(setTrueModifiedAttribute()),
        setFalseModifiedAttribute : () => dispatch(setFalseModifiedAttribute()),
        saveChanges : () => dispatch(saveChanges())
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(WeekScreen)

