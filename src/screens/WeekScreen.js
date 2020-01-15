import * as React from 'react';
import { StyleSheet, View, TouchableHighlight, ActivityIndicator, FlatList } from 'react-native';
import { Text } from 'react-native-ui-kitten';
import {Header, CheckBox} from 'react-native-elements';
import {APP_COLORS} from "../constants/colors";
import { connect } from 'react-redux';
import {Actions} from "react-native-router-flux";
import {changeSwitchForDay, fetchActivitiesFromWeek, fetchWeek, unAttendEvent, attendEvent} from "../actions/weekActions";
import {FontAwesome} from "@expo/vector-icons";
import BottomNav from "../components/BottomNav";
import Moment from 'react-moment';

class WeekScreen extends React.Component{
    constructor(props) {
        super(props)
    }

    componentWillMount(){
        this.props.fetchWeek(this.props.id)
        this.props.fetchActivitiesFromWeek(this.props.id)
    }

    _onPressButton(day, value) {
        if(value){
            this.props.unAttendEvent(day, false);
        }
        else{
            this.props.attendEvent(day, true)
        }
    }


    static pintarFinished(finished){
        if(finished){
            return(<Text style={styles.textFinishedStyle}>Finalitzat</Text>)
        }
        else{
            return(<Text style={styles.textNotFinishedStyle}>No finalitzat</Text>)
        }

    }

    _renderItem = ({item}) => (
        <View key={item.id} style={styles.viewDayStyle}>
            <View  style={styles.rowStyle}>
                {item.finished ?
                    <TouchableHighlight onPress = {() => Actions.event({id: item.id})} style={styles.viewFinishedStyle}>
                        <View>
                            <Text style={styles.titleStyle}>{item.title}</Text>
                            <Moment style = {styles.textNotFinishedStyle} element={Text} format="DD/MM/YYYY HH:mm">
                                {item.start_date}
                            </Moment>
                        </View>
                    </TouchableHighlight>:
                    <View style={styles.viewFinishedStyle}>
                        <Text style={styles.titleStyle}>{item.title}</Text>
                        <Moment style = {styles.textNotFinishedStyle} element={Text} format="DD/MM/YYYY HH:mm">
                            {item.start_date}
                        </Moment>
                    </View>
                }

                <View style={{flexDirection: 'row'}}>
                    <CheckBox center key={item.id} checked = {item.attending} onPress={this._onPressButton.bind(this,item.id,item.attending)}
                                checkedIcon='dot-circle-o' uncheckedIcon='circle-o' iconRight size={18} containerStyle = {styles.containerCheckStyle}
                                checkedColor = {APP_COLORS.color_green} uncheckedColor = {APP_COLORS.color_green}
                                disabled={item.finished}/>
                </View>
            </View>
            <View style={styles.viewFinishedStyle}>
                {WeekScreen.pintarFinished(item.finished)}
            </View>
        </View>
    );

    _keyExtractor = (item) => item.id.toString();

    renderDies(){
        return(
            <View>
                <FlatList
                    data={this.props.days}
                    style={{width:"100%",height:"100%"}}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
            </View>
        )
    }

    renderActivitiesFromWeekView(){
        return(
            <View style={styles.viewCommentsGeneralStyle}>
                <View style={styles.viewCommentsStyle}>
                    <Text style={styles.textStyle}>Activitats ({this.props.days.length})</Text>
                </View>
                <View style={{flex:1,height:"100%"}}>
                    {this.renderDies()}
                </View>
            </View>
        )
    }


    render(){
        if(this.props.isFetching){
            return (
                <View style = {{justifyContent: 'center', alignContent: 'center', width: '100%', height: '100%'}}>
                    <ActivityIndicator size="large" color={APP_COLORS.color_orange}/>
                </View>
            );
        }
        else{
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
                        <View style={styles.rowStyle}>
                            <Text style={styles.titleStyle}>{this.props.week.name}</Text>
                        </View>
                        <Text style={styles.descriptionStyle}>{this.props.week.description}</Text>
                        
                    </View>
                    {this.renderActivitiesFromWeekView()}
    
                </View>
                <BottomNav selected={"programacio"}/>
                </View>
            );
        } 
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
        height: '16%',
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
        
    },
    viewCommentsGeneralStyle: {
        flex:1,
        height: '100%'
    },
    viewCommentsStyle: {
        flexDirection: 'row',
        backgroundColor: APP_COLORS.color_orange,
        height: '10%',
        marginTop: '5%',
        justifyContent: 'space-between',
        paddingRight: '4%',
        paddingLeft: '7%',
        alignItems: 'center'
    },
    textStyle: {
        color: APP_COLORS.color_neutral,
        fontSize: 17,
        fontWeight: 'bold'
    },
});


const mapStateToProps = (state) => {
    return {
        message: state.weekReducer.message,
        setmana: state.weekReducer.setmana,
        isFetching: state.weekReducer.isFetching,
        days: state.weekReducer.days,
        week: state.weekReducer.week
    }
};

const  mapDispatchToProps = (dispatch)=>{
    return {
        changeSwitchForDay : (day) => dispatch(changeSwitchForDay(day)),
        fetchWeek: (id) => dispatch(fetchWeek(id)),
        fetchActivitiesFromWeek: (id) => dispatch(fetchActivitiesFromWeek(id)),
        unAttendEvent: (id, value) => dispatch(unAttendEvent(id, value)),
        attendEvent: (id, value) => dispatch(attendEvent(id, value))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(WeekScreen)

