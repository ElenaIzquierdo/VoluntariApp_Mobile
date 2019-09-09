import * as React from 'react';
import { StyleSheet, View, ScrollView, TextInput } from 'react-native';
import { Text } from 'react-native-ui-kitten';
import {Header, Icon} from 'react-native-elements';
import {APP_COLORS} from "../constants/colors";
import { connect } from 'react-redux';
import {Actions} from "react-native-router-flux";
import {FontAwesome} from "@expo/vector-icons";
import Button from "../components/Button";
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
                    <View>
                        <View style={styles.titleViewStyle}>
                            <Text style={styles.subtitleStyle}>Descripció</Text>
                            <Icon
                                name='pencil'
                                type='evilicon'
                                color={APP_COLORS.text_color}
                                size={35}
                                iconStyle={styles.iconEditStyle}
                                onPress={this.modifyDescription}
                            />
                        </View>
                        <Text style={styles.descriptionStyle}>{this.props.descriptionValue}</Text>
                    </View>
                )
            }
            else{
                return(
                    <View>
                        <View style={styles.titleViewStyle}>
                            <Text style={styles.subtitleStyle}>Descripció</Text>
                            <View style={styles.iconDescrStyle}>
                                <Icon
                                    name='close-o'
                                    type='evilicon'
                                    color={APP_COLORS.color_darkred}
                                    size={35}
                                    onPress={this.modifyDescription}
                                />
                                <Icon
                                    name='check'
                                    type='evilicon'
                                    color={APP_COLORS.color_green}
                                    size={35}
                                    onPress={this.modifyDescription}
                                />
                            </View>
                        </View>
                        <TextInput style={styles.textInputStyle}
                                   multiline = {true}
                                   placeholder = "Escribe aquí..."
                                   value={this.props.descriptionValue}
                                   onChangeText={(text)=>this.props.changeDescription({text})}
                        />
                    </View>
                )
            }
        }
        else{
            return(
                <View>
                    <View style={styles.titleViewStyle}>
                        <Text style={styles.subtitleStyle}>Descripció</Text>
                        <View style={styles.iconDescrStyle}>
                            <Icon
                                name='close-o'
                                type='evilicon'
                                color={APP_COLORS.color_darkred}
                                size={35}
                                onPress={this.modifyDescription}
                            />
                            <Icon
                                name='check'
                                type='evilicon'
                                color={APP_COLORS.color_green}
                                size={35}
                                onPress={this.modifyDescription}
                            />
                        </View>
                    </View>
                    <TextInput style={styles.textInputStyle}
                               multiline = {true}
                               placeholder = "Escribe aquí..."
                               value={'Afegir descripció...'}/>
                </View>
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
                    <View style={titleViewStyle}>
                        <Text style = {titleStyle}> {this.props.task.title} </Text>
                        {this.props.task.finished ? <Button colorButton={APP_COLORS.color_checked} text={"Obrir"}/>:
                                                    <Button colorButton={APP_COLORS.color_darkred} text={"Finalitzar"}/>}

                    </View>
                    {this.pintarEstat()}

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
    iconDescrStyle: {
        flexDirection: 'row',
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
        paddingRight: '2%',
        paddingLeft: '2%',
        borderColor: APP_COLORS.text_color,
        borderWidth: 1,
        marginLeft: '8%',
        marginTop: '3%',
        width: '70%',
        borderRadius: 6,
        height: '17%'
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


