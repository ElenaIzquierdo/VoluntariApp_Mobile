import * as React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import {Text} from 'react-native-ui-kitten';
import {Header} from 'react-native-elements';
import {APP_COLORS} from "../constants/colors";
import {Icon} from "react-native-elements";
import {Actions} from "react-native-router-flux";
import { connect } from 'react-redux';
import Moment from 'react-moment';
import {fetchForumTopic, fetchForumTopicComments} from "../actions/forumthemeActions";
import Comment from "../components/Comment";
import Comments from "../components/Comments"

class ForumThemeScreen extends React.Component{
    constructor(props) {
        super(props)
    }

    componentWillMount(){
        this.props.fetchForumTopic(this.props.id)
        this.props.fetchForumTopicComments(this.props.id)
    }

    _keyExtractor = (item) => item.id.toString();

    _renderItem = ({item}) => (
        <Comment
            id={item.id}
            image={item.image}
            user={item.author}
            content={item.content}
            created_date={item.created_date}
        />
    );

    renderTopicComments(){
        return(
            <View>
                <FlatList
                    data={this.props.comments}
                    style={{width:"100%",height:"100%"}}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
            </View>
        )
    }

    render(){
        const {titleStyle, viewStyle, infoStyle, descriptionStyle, iconInfoTextStyle, titleViewStyle, iconEditStyle} = styles;
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
                    <View style={titleViewStyle}>
                        <Text style = {titleStyle}> {this.props.theme.title} </Text>
                        <Icon name='pencil' type='evilicon' color={APP_COLORS.text_color}
                            size={35} iconStyle={iconEditStyle}/>
                    </View>

                    <View style={iconInfoTextStyle}>
                        <Icon name='calendar' type='evilicon' color={APP_COLORS.text_color} size={20}/>
                        <Moment style = {infoStyle} element={Text} format="DD/MM/YYYY HH:mm">{this.props.created_date}</Moment>
                    </View>

                    <View style={iconInfoTextStyle}>
                        <Icon name='user' type='evilicon' color={APP_COLORS.text_color} size={20}/>
                        <Text style = {infoStyle}> {this.props.theme.creator} </Text>
                    </View>

                    <View style={iconInfoTextStyle}>
                        <Icon name='location' type='evilicon' color={APP_COLORS.text_color} size={20}/>
                        <Text style = {infoStyle}> {this.props.theme.group} </Text>
                    </View>

                    <Text style = {descriptionStyle}> {this.props.theme.description} </Text>

                    <Comments comments={this.props.comments}/>

                </View>
            )
        }
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
        tasks: state.forumthemeReducer.tasks,
        isFetching: state.forumthemeReducer.isFetching
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {
        fetchForumTopic: (id) => dispatch(fetchForumTopic(id)),
        fetchForumTopicComments: (id) => dispatch(fetchForumTopicComments(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ForumThemeScreen)

