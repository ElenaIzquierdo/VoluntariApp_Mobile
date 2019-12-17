import * as React from 'react';
import { StyleSheet, View, TouchableHighlight, Switch, ActivityIndicator } from 'react-native';
import {  Text } from 'react-native-ui-kitten';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {Header} from 'react-native-elements';
import {APP_COLORS} from "../constants/colors";
import {changeIteratorNextParam, changeIteratorPreviousParam, changeSwitch, fetchNextEvents, fetchPreviousEvents} from "../actions/homeActions";
import {EvilIcons, FontAwesome} from "@expo/vector-icons";
import Modal from 'react-native-modalbox';
import BottomNav from "../components/BottomNav";
import Moment from 'react-moment';

class HomeScreen extends React.Component{
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.next_eventsPrevious = this.next_eventsPrevious.bind(this);
        this.previous_eventsPrevious = this.previous_eventsPrevious.bind(this);
    }

    componentWillMount(){
        this.props.fetchPreviousEvents();
        this.props.fetchNextEvents();
    }

    next(){
        if(this.props.iterator === this.props.events_next.length-1){
            this.props.changeIteratorNextParam(0);
        }
        else{
            var iter = this.props.iterator +1;
            this.props.changeIteratorNextParam(iter);
        }
    }

    previous(){
        if(this.props.iterator === 0){
            this.props.changeIteratorNextParam(this.props.events_next.length-1);
        }
        else{
            var iter = this.props.iterator -1;
            this.props.changeIteratorNextParam(iter);
        }
    }

    next_eventsPrevious(){
        if(this.props.iterator_previous === 0){
            this.props.changeIteratorPreviousParam(this.props.events_previous.length-1);
        }
        else{
            var iter = this.props.iterator_previous -1;
            this.props.changeIteratorPreviousParam(iter);
        }
    }

    previous_eventsPrevious(){
        if(this.props.iterator_previous === this.props.events_previous.length-1){
            this.props.changeIteratorPreviousParam(0);
        }
        else{
            var iter = this.props.iterator_previous +1;
            this.props.changeIteratorPreviousParam(iter);
        }
    }

    toggleSwitch = (value) => {

        this.props.changeSwitch(value);
    }

    render(){
        const {iconModalStyle, modal, modalTitle, viewCardsStyle, viewCardNextStyle, viewIconArrowStyle,
            viewCardFooterStyle, texticonStyle, titleStyle, iconStyle, textStyle, infoviewStyle, viewCardPreviousStyle,
            textModalStyle, switchViewStyle} = styles;
        if(this.props.isFetching){
            return (
                <View style = {{justifyContent: 'center', alignContent: 'center', width: '100%', height: '100%'}}>
                    <ActivityIndicator size="large" color={APP_COLORS.color_orange}/>
                </View>
            );
        }
        else{
            return(
                <View style={styles.viewStyle}>
                    <Header
                        centerComponent={{ text: 'VoluntariApp', style: { color: APP_COLORS.color_neutral, fontSize: 25, fontWeight: 'bold' } }}
                        backgroundColor={APP_COLORS.color_orange}
                        rightComponent={{ icon: 'person', color: APP_COLORS.color_neutral, onPress: () => Actions.profile()}}
                    />
    
                    <View style={viewCardsStyle}>
                        <Modal style={modal} position={"center"} ref={"modal"} isDisabled={this.props.isDisabled}>
                            <Text style={modalTitle}> {this.props.events_next[this.props.iterator].title}</Text>
                            <View style={switchViewStyle}>
                                {this.props.events_next[this.props.iterator].attending ?
                                    <Text>Assistiràs</Text>:
                                    <Text>No assistiràs</Text>
                                }
                                <Switch value={this.props.events_next[this.props.iterator].attending} onValueChange = {this.toggleSwitch}/>
                            </View>
                            <FontAwesome name='download' size={55} color= {APP_COLORS.color_button_1} style={iconModalStyle}/>
                            <Text style={textModalStyle}>Descarregar la fitxa de la tarda</Text>
    
                        </Modal>
    
                        <TouchableHighlight onPress={() => this.refs.modal.open()} style={[viewCardNextStyle,{backgroundColor:'#B2C78E'}]}>
                            <View>
                                <View style={viewCardFooterStyle}>
                                    <View style={viewIconArrowStyle}>
                                        <EvilIcons name="chevron-left" size={35} color = {APP_COLORS.black} onPress={this.previous}/>
                                    </View>
                                    <View style={infoviewStyle}>
                                        <Text style={titleStyle}>
                                            {this.props.events_next[this.props.iterator].title}
                                        </Text>
                                        <View style={texticonStyle}>
                                            <EvilIcons name="location" size={25} color = {APP_COLORS.text_color} style = {iconStyle}/>
                                            <Text style={textStyle}>{this.props.events_next[this.props.iterator].group}</Text>
                                        </View>
                                        <View style={texticonStyle}>
                                            <EvilIcons name="calendar" size={25} color = {APP_COLORS.text_color} style = {iconStyle}/>
                                            <Moment style = {textStyle} element={Text} format="DD/MM/YYYY HH:mm">
                                                {this.props.events_next[this.props.iterator].start_date}
                                            </Moment>
                                        </View>
                                    </View>
                                    <View>
                                        <EvilIcons name="chevron-right" size={35} color = {APP_COLORS.black} onPress={this.next}/>
                                    </View>
                                </View>
                            </View>
                        </TouchableHighlight>
    
                        <TouchableHighlight onPress = {() => Actions.event()} style={[viewCardPreviousStyle,{backgroundColor:'#F5C15F'}]}>
                            <View>
                                <View style={viewCardFooterStyle}>
                                    <View style={viewIconArrowStyle}>
                                        <EvilIcons name="chevron-left" size={35} color = {APP_COLORS.black} onPress={this.previous_eventsPrevious}/>
                                    </View>
                                    <View style={infoviewStyle}>
                                        <Text style={titleStyle}>
                                            {this.props.events_previous[this.props.iterator_previous].title}
                                        </Text>
                                        <View style={texticonStyle}>
                                            <EvilIcons name="location" size={25} color = {APP_COLORS.text_color} style = {iconStyle}/>
                                            <Text style={textStyle}>{this.props.events_previous[this.props.iterator_previous].group}</Text>
                                        </View>
                                        <View style={texticonStyle}>
                                            <EvilIcons name="calendar" size={25} color = {APP_COLORS.text_color} style = {iconStyle}/>
                                            <Moment style = {textStyle} element={Text} format="DD/MM/YYYY HH:mm">
                                                {this.props.events_previous[this.props.iterator_previous].start_date}
                                            </Moment>
                                        </View>
                                    </View>
                                    <View>
                                        <EvilIcons name="chevron-right" size={35} color = {APP_COLORS.black} onPress={this.next_eventsPrevious}/>
                                    </View>
                                </View>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <BottomNav/>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: APP_COLORS.color_neutral,
        width: '100%',
        height: '100%',
        flex: 1,
    },
    text: {
        marginVertical: 14,
        color: APP_COLORS.color_green,
        alignSelf: 'center'

    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: '15%',
        paddingLeft: '15%',
        paddingTop: '1%'
    },
    viewCardNextStyle: {
        width: '90%',
        height: '30%',
        borderWidth: 0.5,
        borderColor: APP_COLORS.text_color,
        alignSelf: 'center',
        borderRadius: 8,
        marginTop: '10%',
        marginBottom: '2%',
        justifyContent: 'center',
    },
    viewCardPreviousStyle:{
        width: '90%',
        height: '30%',
        alignSelf: 'center',
        borderRadius: 8,
        marginTop: '15%',
        marginBottom: '2%',
        justifyContent: 'center',
    },
    viewHeaderStyle: {
        height: '20%',
    },
    viewCardFooterStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    texticonStyle: {
        flexDirection: 'row',
        paddingRight: '5%',
        paddingTop: '3%'
    },
    iconStyle: {
        paddingLeft: '2%'
    },
    titleStyle: {
        color:APP_COLORS.black,
        fontSize: 17
    },
    textStyle: {
        color:APP_COLORS.black,
        fontSize: 14
    },
    imatgeStyle: {
        height: '80%',
        width:'80%',
        alignSelf: 'center'
    },
    wrapperCardStyle: {
        height: '40%'
    },
    viewIconArrowStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '15%'
    },
    infoviewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewCardsStyle: {
        paddingTop: '20%',
        flex: 1
    },
    modalTitle: {
        color: APP_COLORS.text_color,
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: '4%',
        paddingLeft: '2%',
        alignSelf: 'center'
    },
    modal: {
        height: '45%',
        width: '75%'
    },
    iconModalStyle: {
        marginTop: '10%',
        marginBottom: '3%',
        alignSelf: 'center'
    },
    textModalStyle: {
        color: APP_COLORS.text_color,
        alignSelf: 'center'
    },
    switchViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '3%'
    }
});

const mapStateToProps = (state) => {
    return {
        events_next: state.homeReducer.events_next,
        iterator: state.homeReducer.iterator_next,
        events_previous: state.homeReducer.events_previous,
        iterator_previous: state.homeReducer.iterator_previous,
        isDisabled: state.homeReducer.isDisabled,
        switchValue: state.homeReducer.switchValue,
        isFetching: state.homeReducer.isFetching,
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {
        changeIteratorNextParam: (i)=>dispatch(changeIteratorNextParam(i)),
        changeIteratorPreviousParam: (i)=>dispatch(changeIteratorPreviousParam(i)),
        changeSwitch: (value) => dispatch(changeSwitch(value)),
        fetchPreviousEvents: () => dispatch(fetchPreviousEvents()),
        fetchNextEvents: () => dispatch(fetchNextEvents())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen)
