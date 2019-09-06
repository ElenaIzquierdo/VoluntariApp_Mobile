import * as React from 'react';
import { StyleSheet, View, ScrollView, TextInput, Button } from 'react-native';
import { Text } from 'react-native-ui-kitten';
import {Header, Icon} from 'react-native-elements';
import {APP_COLORS} from "../constants/colors";
import { connect } from 'react-redux';
import {Actions} from "react-native-router-flux";
import {FontAwesome} from "@expo/vector-icons";
import {changeDescriptionModified, changeDescription} from "../actions/taskActions";

class TaskScreen extends React.Component{
    constructor(props) {
        super(props);
        this.modifyDescription = this.modifyDescription.bind(this);
    }

    modifyDescription(){
        this.props.changeDescriptionModified();
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
            if(!this.props.descriptionModified){
                return(
                    <Text style={styles.descriptionStyle}>{this.props.descriptionValue}</Text>
                )
            }
            else{
                return(
                    <TextInput style={styles.textInputStyle}
                               multiline = {true}
                               placeholder = "Escribe aquí..."
                               value={this.props.descriptionValue}
                               onChangeText={(text) => this.props.changeDescription(text)}
                    />
                )
            }
        }
        else{
            return(
                <TextInput style={styles.textInputStyle}
                           multiline = {true}
                           placeholder = "Escribe aquí..."
                           value={'Afegir descripció...'}/>
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
                            onPress={this.modifyDescription}
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
    },
    textInputStyle: {
        color: APP_COLORS.text_color,
        fontSize: 17,
        paddingTop: '4%',
        paddingRight: '2%',
        paddingLeft: '2%',
        borderColor: APP_COLORS.text_color,
        borderWidth: 1,
        marginLeft: '8%',
        width: '70%',
        borderRadius: 6,
        height: '15%'
    },
    buttonStyle: {
        height: '5%',
        width: '7%'
    }
});

const mapStateToProps = (state) => {
    return{
        task: state.taskReducer.task,
        descriptionModified: state.taskReducer.descriptionModified,
        descriptionValue: state.taskReducer.descriptionValue
    }
};

const  mapDispatchToProps = (dispatch)=> {
    return{
        changeDescriptionModified : () => dispatch(changeDescriptionModified()),
        changeDescription: (descr) => dispatch(changeDescription(descr))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(TaskScreen)


