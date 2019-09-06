import * as React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import {Header, Icon} from 'react-native-elements';
import {APP_COLORS} from "../constants/colors";
import { connect } from 'react-redux';
import {Actions} from "react-native-router-flux";
import {FontAwesome} from "@expo/vector-icons";

class TaskScreen extends React.Component{
    constructor(props) {
        super(props)
    }

    pintarEstat(){
        if(this.props.task.finished){
            return(
                <View style={styles.iconInfoTextStyle}>
                    <Icon
                        name='close-o'
                        type='evilicon'
                        color={APP_COLORS.color_darkred}
                        size={20}
                    />
                    <Text style = {styles.infoStyle}> Finalitzada </Text>
                </View>
            );
        }
        else{
            return(
                <View style={styles.iconInfoTextStyle}>
                    <Icon
                        name='check'
                        type='evilicon'
                        color={APP_COLORS.color_green}
                        size={20}
                    />
                    <Text style = {styles.infoStyle}> Oberta </Text>
                </View>
            );
        }

    }

    pintarDescription(){
        if(this.props.task.description !== null){
            return(
                <Text style={styles.descriptionStyle}>{this.props.task.description}</Text>
            )
        }
    }

    pintarAssignats(){
        return this.props.task.assignees.map((ass)=>{
            return(
                <View key={ass.id} style={styles.assViewStyle}>
                    <Text style={styles.descriptionStyle}>{ass.name}</Text>
                    <FontAwesome name='times-circle' size={16} color= {APP_COLORS.color_darkred} style={styles.deleteIconStyle}/>
                </View>
            )
        })
    }

    render(){
        const {viewStyle, titleViewStyle, iconEditStyle, titleStyle, subtitleStyle} = styles;
        return(
            <View style={viewStyle}>
                <Header
                    leftComponent={{ icon: 'home', color: APP_COLORS.color_neutral, onPress: () => Actions.home() }}
                    centerComponent={{ text: 'VoluntariApp', style: { color: APP_COLORS.color_neutral, fontSize: 25, fontWeight: 'bold' } }}
                    backgroundColor={APP_COLORS.color_orange}
                    rightComponent={{ icon: 'person', color: APP_COLORS.color_neutral, onPress: () => Actions.profile() }}
                />
                <ScrollView>
                    <View style={titleViewStyle}>
                        <Text style = {titleStyle}> {this.props.task.title} </Text>
                    </View>
                    {this.pintarEstat()}
                    <View style={titleViewStyle}>
                        <Text style={subtitleStyle}>Descripció</Text>
                        <Icon
                            name='pencil'
                            type='evilicon'
                            color={APP_COLORS.text_color}
                            size={35}
                            iconStyle={iconEditStyle}
                        />
                    </View>
                    {this.pintarDescription()}
                    <View style={titleViewStyle}>
                        <Text style={subtitleStyle}>Assignats</Text>
                        <FontAwesome name='user-plus' size={19} color= {APP_COLORS.text_color} style={iconEditStyle}/>
                    </View>
                    {this.pintarAssignats()}
                    <View style={titleViewStyle}>
                        <Text style={subtitleStyle}>Adjunts</Text>
                        <FontAwesome name='paperclip' size={23} color= {APP_COLORS.text_color} style={iconEditStyle}/>
                    </View>
                </ScrollView>
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
        paddingLeft: '7%'
    },
    titleViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    assViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '55%',
        marginLeft: '7%'
    },
    iconEditStyle: {
        margin: '2%'
    },
    infoStyle:{
        color: APP_COLORS.text_color,
        fontSize: 16,
    },
    iconInfoTextStyle: {
        flexDirection: 'row',
        paddingLeft: '6%',
    },
    descriptionStyle:{
        color: APP_COLORS.text_color,
        fontSize: 17,
        paddingTop: '4%',
        paddingLeft: '7%'
    },
    deleteIconStyle: {
        marginTop: '4%'
    }
});

const mapStateToProps = (state) => {
    return{
        task: state.taskReducer.task
    }
};

const  mapDispatchToProps = (dispatch)=> {
    return{

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(TaskScreen)


