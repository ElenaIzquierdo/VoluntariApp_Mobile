import * as React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import { Button, Layout, Text, TopNavigation, TopNavigationProps } from 'react-native-ui-kitten';
import {Header, Icon} from 'react-native-elements';
import {APP_COLORS} from "../constants/colors";
import { connect } from 'react-redux';
import {Actions} from "react-native-router-flux";
import { FontAwesome,EvilIcons } from '@expo/vector-icons';

import {isHidenChange} from "../actions/eventActions";


class EventScreen extends React.Component{
    constructor(props) {
        super(props)
    }

    pintarViewHide(){
        if(this.props.isHiden){ return null }
        else{
            return(
                <View style={styles.viewHideStyle}>
                    <View style={styles.rowStyle}>
                        <Text style={styles.titleHideStyle}> Llegenda </Text>
                        <FontAwesome name='close' size={12} color= {APP_COLORS.text_color}
                                     style={styles.questionStyle} onPress={() => this.props.isHidenChange()}/>
                    </View>
                    <View style={styles.rowStyle}>
                        <Text style={styles.textHideStyle}>Assistència baixa</Text>
                        {this.pintarIconAssistencia("baixa")}
                    </View>
                    <View style={styles.rowStyle}>
                        <Text style={styles.textHideStyle}>Assistència mitja</Text>
                        {this.pintarIconAssistencia("mitja")}
                    </View>
                    <View style={styles.rowStyle}>
                        <Text style={styles.textHideStyle}>Assistència alta</Text>
                        {this.pintarIconAssistencia("alta")}
                    </View>
                </View>
            );
        }
    }

    pintarValoracioGlobal(){
        return(
            <View style={styles.viewValoracioStyle}>
                <FontAwesome name='star' size={18} color= {APP_COLORS.color_yellow} style={styles.starStyle}/>
                <FontAwesome name='star' size={18} color= {APP_COLORS.color_yellow} style={styles.starStyle}/>
                <FontAwesome name='star' size={18} color= {APP_COLORS.color_yellow} style={styles.starStyle}/>
            </View>
        )
    }

    pintarIconValoracio(i){
        if(i === 0){
            return(<EvilIcons name="close-o" size={18} color = {APP_COLORS.color_green}/>)
        }
        if(i === 1){
            return(<EvilIcons name="minus" size={18} color = {APP_COLORS.color_green}/>)
        }
        if(i === 2){
            return(<EvilIcons name="check" size={18} color = {APP_COLORS.color_green}/>)
        }
    }

    pintarValoracioNens(){
        return(
            <View style={styles.valoracioViewStyle}>
                <View style={styles.rowStyle}>
                    <Text style={styles.textStyle}>Respecte</Text>
                    {this.pintarIconValoracio(this.props.rate_event.respecte)}
                </View>
                <View style={styles.rowStyle}>
                    <Text style={styles.textStyle}>Rotllana</Text>
                    {this.pintarIconValoracio(this.props.rate_event.rotllana)}
                </View>
                <View style={styles.rowStyle}>
                    <Text style={styles.textStyle}>Berenar</Text>
                    {this.pintarIconValoracio(this.props.rate_event.berenar)}
                </View>
                <View style={styles.rowStyle}>
                    <Text style={styles.textStyle}>Files</Text>
                    {this.pintarIconValoracio(this.props.rate_event.files)}
                </View>
                <View style={styles.rowStyle}>
                    <Text style={styles.textStyle}>Activitat</Text>
                    {this.pintarIconValoracio(this.props.rate_event.activitat)}
                </View>
            </View>
        )
    }

    pintarIconAssistencia(ass){
        if(ass === "baixa"){
            return(<FontAwesome name="angle-double-down" size={18} color = {APP_COLORS.color_green}/>)
        }
        if(ass === "mitja"){
            return(<FontAwesome name="angle-up" size={18} color = {APP_COLORS.color_green}/>)
        }
        if(ass === "alta"){
            return(<FontAwesome name="angle-double-up" size={18} color = {APP_COLORS.color_green}/>)
        }
    }

    pintarAssistencia(){
        return(
            <View style={styles.viewAssStyle}>
                <View style={styles.rowStyle}>
                    <Text style={styles.textStyle}> Assistencia monitors</Text>
                    {this.pintarIconAssistencia(this.props.event.assMonitors)}
                </View>
                <View style={styles.rowStyle}>
                    <Text style={styles.textStyle}> Assistencia infants</Text>
                    {this.pintarIconAssistencia(this.props.event.assInfants)}
                </View>
            </View>
        )
    }

    render(){
        const {titleStyle, iconInfoTextStyle, infoStyle, viewStyle, subtitleStyle, rowStyle, downloadStyle, descriptionStyle, viewValoracioStyle} = styles;
        return(
            <View style={viewStyle}>
                <Header
                    leftComponent={{ icon: 'home', color: APP_COLORS.color_neutral, onPress: () => Actions.home() }}
                    centerComponent={{ text: 'VoluntariApp', style: { color: APP_COLORS.color_neutral, fontSize: 25, fontWeight: 'bold' } }}
                    rightComponent={{ icon: 'person', color: APP_COLORS.color_neutral, onPress: () => Actions.profile()}}
                    backgroundColor={APP_COLORS.color_orange}
                />
                <View style={viewStyle}>
                    <ScrollView>
                        <View>
                            <Text style = {titleStyle}> {this.props.event.title} </Text>
                        </View>
                        <View style={iconInfoTextStyle}>
                            <Icon
                                name='calendar'
                                type='evilicon'
                                color={APP_COLORS.text_color}
                                size={20}
                            />
                            <Text style = {infoStyle}> {this.props.event.data}-{this.props.event.hora} </Text>
                        </View>
                        <View style={iconInfoTextStyle}>
                            <Icon
                                name='location'
                                type='evilicon'
                                color={APP_COLORS.text_color}
                                size={20}
                            />
                            <Text style = {infoStyle}> {this.props.event.grup} </Text>
                        </View>
                        <View style={iconInfoTextStyle}>
                            <Icon
                                name='question'
                                type='evilicon'
                                color={APP_COLORS.text_color}
                                size={20}
                            />
                            <Text style = {infoStyle}> {this.props.event.type} </Text>
                        </View>
                        <View>
                            <View style={rowStyle}>
                                <Text style = {subtitleStyle}> Activitat </Text>
                                <FontAwesome name='download' size={22} color= {APP_COLORS.color_green} style={downloadStyle}/>
                            </View>
                            <Text style={descriptionStyle}>{this.props.event.activitat}</Text>
                        </View>
                        <View>
                            <View style={rowStyle}>
                                <Text style = {subtitleStyle}> Valoració </Text>
                                {this.pintarValoracioGlobal()}
                            </View>
                            <View>
                                {this.pintarValoracioNens()}
                            </View>
                        </View>
                        <View>
                            <Text style = {subtitleStyle}> Comentaris </Text>
                            <Text style={descriptionStyle}>{this.props.event.rate_description}</Text>
                        </View>
                        <View>
                            <View style={rowStyle}>
                                <Text style = {subtitleStyle}> Assistència </Text>
                                {this.props.isHiden ? <FontAwesome name='question-circle' size={17} color= {APP_COLORS.color_darkred}
                                                                   style={styles.questionStyle} onPress={() => this.props.isHidenChange()}/>:
                                                        null}

                            </View>
                            <View style={iconInfoTextStyle}>
                                {this.pintarAssistencia()}
                                {this.pintarViewHide()}
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: APP_COLORS.color_neutral,
        flex: 1,
        height: '100%',
        width: '100%',
        paddingBottom: '1%'
    },
    titleStyle:{
        color: APP_COLORS.text_color,
        fontSize: 21,
        fontWeight: 'bold',
        paddingTop: '4%',
        paddingLeft: '2%'
    },
    subtitleStyle: {
        color: APP_COLORS.text_color,
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: '4%',
        paddingLeft: '2%'
    },
    infoStyle:{
        color: APP_COLORS.text_color,
        fontSize: 16,
    },
    iconInfoTextStyle: {
        flexDirection: 'row',
        paddingLeft: '7%'
    },
    viewValoracioStyle: {
        flexDirection: 'row',
        paddingTop: '3%',
        paddingRight: '3%'
    },
    starStyle: {
        marginRight: '1%'
    },
    downloadStyle: {
        marginRight: '6%',
        marginTop: '3%'
    },
    rowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    valoracioViewStyle: {
        width:'50%',
        alignSelf: 'center',
        borderWidth: 0.7,
        borderColor: APP_COLORS.text_color,
        borderRadius: 8,
        padding: '1%',
        marginTop: '2%'
    },
    textStyle: {
        color: APP_COLORS.text_color,
        fontSize: 16,
        paddingTop: '2%',
        paddingLeft: '2%'
    },
    descriptionStyle: {
        color: APP_COLORS.text_color,
        fontSize: 16,
        paddingTop: '2%',
        paddingLeft: '7%'
    },
    viewAssStyle: {
        width:'55%',
        height: '100%',
    },
    questionStyle: {
        marginRight: '7%',
        marginTop: '3%'
    },
    viewHideStyle: {
        width: '35%',
        borderWidth: 0.5,
        borderColor: APP_COLORS.text_color,
        borderRadius: 8,
        marginLeft: '6%',
        paddingRight: '1%'
    },
    titleHideStyle: {
        color: APP_COLORS.text_color,
        fontSize: 12,
        fontWeight: 'bold',
        paddingTop: '1%',
        paddingLeft: '2%'
    },
    textHideStyle: {
        color: APP_COLORS.text_color,
        fontSize: 11,
        paddingLeft: '2%'
    },
});


const mapStateToProps = (state) => {
    return {
        event: state.eventReducer.event,
        rate_event: state.eventReducer.rate_event,
        isDisabled: state.eventReducer.isDisabled,
        isHiden: state.eventReducer.isHiden
    }

}

const  mapDispatchToProps = (dispatch)=>{
    return {
        isHidenChange : () => dispatch(isHidenChange())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EventScreen)

