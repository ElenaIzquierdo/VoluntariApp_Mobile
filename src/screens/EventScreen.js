import * as React from 'react';
import {StyleSheet, View, ScrollView, ActivityIndicator} from 'react-native';
import { Text } from 'react-native-ui-kitten';
import {Header, Icon} from 'react-native-elements';
import {APP_COLORS} from "../constants/colors";
import { connect } from 'react-redux';
import {Actions} from "react-native-router-flux";
import { FontAwesome,EvilIcons } from '@expo/vector-icons';
import Moment from 'react-moment';

import {isHidenChange, fetchEvent} from "../actions/eventActions";
import BottomNav from "../components/BottomNav";

import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';


class EventScreen extends React.Component{
    constructor(props) {
        super(props)
    }

    componentWillMount(){
        this.props.fetchEvent(this.props.id)
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
                        {EventScreen.pintarIconAssistencia("baixa")}
                    </View>
                    <View style={styles.rowStyle}>
                        <Text style={styles.textHideStyle}>Assistència mitja</Text>
                        {EventScreen.pintarIconAssistencia("mitja")}
                    </View>
                    <View style={styles.rowStyle}>
                        <Text style={styles.textHideStyle}>Assistència alta</Text>
                        {EventScreen.pintarIconAssistencia("alta")}
                    </View>
                </View>
            );
        }
    }

    pintarValoracioGlobal(){
        if(this.props.event.rate.total_rate === "0.0"){
            return(
                <View style={styles.viewValoracioStyle}>
                    <Text>
                        -
                    </Text>
                </View>
            )
        }
        else if(this.props.event.rate.total_rate === "1.0"){
            return(
                <View style={styles.viewValoracioStyle}>
                    <FontAwesome name='star' size={18} color= {APP_COLORS.color_yellow} style={styles.starStyle}/> 
                </View>
            )
        }
        else if(this.props.event.rate.total_rate === "2.0"){
            return(
                <View style={styles.viewValoracioStyle}>
                    <FontAwesome name='star' size={18} color= {APP_COLORS.color_yellow} style={styles.starStyle}/> 
                    <FontAwesome name='star' size={18} color= {APP_COLORS.color_yellow} style={styles.starStyle}/> 
                </View>
            )
        }
        else if(this.props.event.rate.total_rate === "3.0"){
            return(
                <View style={styles.viewValoracioStyle}>
                    <FontAwesome name='star' size={18} color= {APP_COLORS.color_yellow} style={styles.starStyle}/> 
                    <FontAwesome name='star' size={18} color= {APP_COLORS.color_yellow} style={styles.starStyle}/>
                    <FontAwesome name='star' size={18} color= {APP_COLORS.color_yellow} style={styles.starStyle}/> 
                </View>
            )
        }
        else if(this.props.event.rate.total_rate === "4.0"){
            return(
                <View style={styles.viewValoracioStyle}>
                    <FontAwesome name='star' size={18} color= {APP_COLORS.color_yellow} style={styles.starStyle}/> 
                    <FontAwesome name='star' size={18} color= {APP_COLORS.color_yellow} style={styles.starStyle}/>
                    <FontAwesome name='star' size={18} color= {APP_COLORS.color_yellow} style={styles.starStyle}/>
                    <FontAwesome name='star' size={18} color= {APP_COLORS.color_yellow} style={styles.starStyle}/> 
                </View>
            )
        }
        else if(this.props.event.rate.total_rate == "5.0"){
            return(
                <View style={styles.viewValoracioStyle}>
                    <FontAwesome name='star' size={18} color= {APP_COLORS.color_yellow} style={styles.starStyle}/> 
                    <FontAwesome name='star' size={18} color= {APP_COLORS.color_yellow} style={styles.starStyle}/>
                    <FontAwesome name='star' size={18} color= {APP_COLORS.color_yellow} style={styles.starStyle}/>
                    <FontAwesome name='star' size={18} color= {APP_COLORS.color_yellow} style={styles.starStyle}/>
                    <FontAwesome name='star' size={18} color= {APP_COLORS.color_yellow} style={styles.starStyle}/> 
                </View>
            )
        }
    }

    static pintarIconValoracio(i){
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
                    {EventScreen.pintarIconValoracio(this.props.event.rate.respect_rate)}
                </View>
                <View style={styles.rowStyle}>
                    <Text style={styles.textStyle}>Rotllana</Text>
                    {EventScreen.pintarIconValoracio(this.props.event.rate.circle_rate)}
                </View>
                <View style={styles.rowStyle}>
                    <Text style={styles.textStyle}>Berenar</Text>
                    {EventScreen.pintarIconValoracio(this.props.event.rate.snack_rate)}
                </View>
                <View style={styles.rowStyle}>
                    <Text style={styles.textStyle}>Files</Text>
                    {EventScreen.pintarIconValoracio(this.props.event.rate.line_rate)}
                </View>
                <View style={styles.rowStyle}>
                    <Text style={styles.textStyle}>Activitat</Text>
                    {EventScreen.pintarIconValoracio(this.props.event.rate.activity_rate)}
                </View>
            </View>
        )
    }

    static pintarIconAssistencia(ass){
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
                    {EventScreen.pintarIconAssistencia(this.props.event.assMonitors)}
                </View>
                <View style={styles.rowStyle}>
                    <Text style={styles.textStyle}> Assistencia infants</Text>
                    {EventScreen.pintarIconAssistencia(this.props.event.assInfants)}
                </View>
            </View>
        )
    }

    saveFile = async (fileUri) => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status === "granted") {
            const asset = await MediaLibrary.createAssetAsync(fileUri)
            await MediaLibrary.createAlbumAsync("Download", asset, false)
        }
    }

    downloadFile(){
        console.log("download girllll")
        const uri = "http://165.22.76.147:8080/voluntariapp/event/"+this.props.event.id+"/file"
        let fileUri = FileSystem.documentDirectory + "fitxa.pdf";
        FileSystem.downloadAsync(uri, fileUri)
        .then(({ uri }) => {
            this.saveFile(uri);
        })
        .catch(error => {
            console.error(error);
        })
    }

    render(){
        const {titleStyle, iconInfoTextStyle, infoStyle, viewStyle, subtitleStyle, rowStyle, downloadStyle, descriptionStyle} = styles;
        if(this.props.isFetching){
            return (
                <View style = {{justifyContent: 'center', alignContent: 'center', width: '100%', height: '100%'}}>
                    <ActivityIndicator size="large" color={APP_COLORS.color_orange}/>
                </View>
            );
        }
        else{
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
                                <Moment style = {infoStyle} element={Text} format="DD/MM/YYYY HH:mm">
                                    {this.props.event.start_date}
                                </Moment>
                            </View>
                            <View style={iconInfoTextStyle}>
                                <Icon
                                    name='calendar'
                                    type='evilicon'
                                    color={APP_COLORS.text_color}
                                    size={20}
                                />
                                <Moment style = {infoStyle} element={Text} format="DD/MM/YYYY HH:mm">
                                    {this.props.event.end_date}
                                </Moment>
                            </View>
                            <View style={iconInfoTextStyle}>
                                <Icon
                                    name='location'
                                    type='evilicon'
                                    color={APP_COLORS.text_color}
                                    size={20}
                                />
                                <Text style = {infoStyle}> {this.props.event.group} </Text>
                            </View>
                            <View>
                                <View style={rowStyle}>
                                    <Text style = {subtitleStyle}> Activitat </Text>
                                </View>
                                <Text style={descriptionStyle}>{this.props.event.description}</Text>
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
                                <Text style={descriptionStyle}>{this.props.event.rate.comments}</Text>
                            </View>
                            
                        </ScrollView>
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
        flex: 1,
        height: '100%',
        width: '100%',
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
        isDisabled: state.eventReducer.isDisabled,
        isHiden: state.eventReducer.isHiden,
        isFetching: state.eventReducer.isFetching
    }

};

const  mapDispatchToProps = (dispatch)=>{
    return {
        isHidenChange : () => dispatch(isHidenChange()),
        fetchEvent: (id) => dispatch(fetchEvent(id))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(EventScreen)

