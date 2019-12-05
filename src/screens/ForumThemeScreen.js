import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import {Text} from 'react-native-ui-kitten';
import {Header} from 'react-native-elements';
import Separador from '../components/Separador';
import {APP_COLORS} from "../constants/colors";
import {Icon} from "react-native-elements";
import {Actions} from "react-native-router-flux";
import { connect } from 'react-redux';

class ForumThemeScreen extends React.Component{
    constructor(props) {
        super(props)
    }
    render(){
        const {titleStyle, viewStyle, infoStyle, descriptionStyle, iconInfoTextStyle, titleViewStyle, iconEditStyle} = styles;
        return(
            <View style={viewStyle}>
                <Header
                    leftComponent={{ icon: 'home', color: APP_COLORS.color_neutral, onPress: () => Actions.home() }}
                    centerComponent={{ text: 'VoluntariApp', style: { color: APP_COLORS.color_neutral, fontSize: 25, fontWeight: 'bold' } }}
                    rightComponent={{ icon: 'person', color: APP_COLORS.color_neutral, onPress: () => Actions.profile()}}
                    backgroundColor={APP_COLORS.color_orange}
                />
                <View style={titleViewStyle}>
                    <Text style = {titleStyle}> {this.props.theme.title} </Text>
                    <Icon
                        name='pencil'
                        type='evilicon'
                        color={APP_COLORS.text_color}
                        size={35}
                        iconStyle={iconEditStyle}
                    />
                </View>
                <View style={iconInfoTextStyle}>
                    <Icon
                        name='calendar'
                        type='evilicon'
                        color={APP_COLORS.text_color}
                        size={20}
                    />
                    <Text style = {infoStyle}> {this.props.theme.data} </Text>
                </View>

                <View style={iconInfoTextStyle}>
                    <Icon
                        name='user'
                        type='evilicon'
                        color={APP_COLORS.text_color}
                        size={20}
                    />
                    <Text style = {infoStyle}> {this.props.theme.creator} </Text>
                </View>

                <View style={iconInfoTextStyle}>
                    <Icon
                        name='location'
                        type='evilicon'
                        color={APP_COLORS.text_color}
                        size={20}
                    />
                    <Text style = {infoStyle}> {this.props.theme.group} </Text>
                </View>

                <Text style = {descriptionStyle}> {this.props.theme.description} </Text>
                <Separador comments={this.props.comments} participants={this.props.participants} tasks={this.props.tasks}/>

            </View>
        );
    }
}




const styles = StyleSheet.create({
    iconTextStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    viewTitleStyle:{
      padding:'3%'
    },
    titleStyle:{
        color: APP_COLORS.text_color,
        fontSize: 21,
        fontWeight: 'bold',
        paddingTop: '4%',
        paddingLeft: '2%'
    },
    descriptionStyle:{
        color: APP_COLORS.text_color,
        fontSize: 17,
        paddingTop: '4%',
        paddingLeft: '7%'
    },
    viewStyle:{
        backgroundColor: APP_COLORS.color_neutral,
        width: '100%',
        height: '100%',
        flex: 1,
    },
    infoStyle:{
        color: APP_COLORS.text_color,
        fontSize: 16,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    viewInformationStyle:{
        paddingLeft:'4%'
    },
    iconInfoTextStyle: {
        flexDirection: 'row',
        paddingLeft: '7%'
    },
    titleViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconEditStyle: {
        margin: '2%'
    }
});

const mapStateToProps = (state) => {
    return {
        theme: state.forumthemeReducer.theme,
        comments: state.forumthemeReducer.comments,
        participants: state.forumthemeReducer.participants,
        tasks: state.forumthemeReducer.tasks
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ForumThemeScreen)

