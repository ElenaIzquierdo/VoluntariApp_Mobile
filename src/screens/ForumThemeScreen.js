import * as React from 'react';
import { StyleSheet, View, ActivityIndicator, TouchableHighlight, FlatList, TextInput, Alert } from 'react-native';
import {Text} from 'react-native-ui-kitten';
import {Header} from 'react-native-elements';
import {APP_COLORS} from "../constants/colors";
import {Icon} from "react-native-elements";
import {Actions} from "react-native-router-flux";
import { connect } from 'react-redux';
import Moment from 'react-moment';
import {fetchForumTopic, fetchForumTopicComments, changeModal, changeNewComment, 
        publishNewComment, changeStatusTopic, deleteComment} from "../actions/forumthemeActions";
import Comment from "../components/Comment";
import Modal from 'react-native-modalbox';
import Button from "../components/Button";

class ForumThemeScreen extends React.Component{
    constructor(props) {
        super(props)
    }

    componentWillMount(){
        this.props.fetchForumTopic(this.props.id)
        this.props.fetchForumTopicComments(this.props.id)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.comments.length !== this.props.comments.length) {
            
            this.props.fetchForumTopicComments(this.props.id);
        }
    }

    _keyExtractor = (item) => item.id.toString();

    _renderItem = ({item}) => (
        <Comment
            id={item.id}
            image={item.image}
            user={item.user}
            content={item.content}
            created_date={item.created_date}
            delete_method={this.props.deleteComment}
            refresh_topic_method={this.props.fetchForumTopic}
            refresh_comments_method={this.props.fetchForumTopicComments}
            id_topic={this.props.id}
            owner={item.owner}
        />
    );

    renderTopicComments(){
        if(this.props.comments.length > 0){
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
        else{
            return(
                <View style={styles.viewNoComments}>
                    <Text style={styles.textNoComments}>No hi ha comentaris per aquest tema encara</Text>
                </View>
            )
        }
    }

    renderTopicCommentsView(){
        return(
            <View style={styles.viewCommentsGeneralStyle}>
                <View style={styles.viewCommentsStyle}>
                    <Text style={styles.textStyle}>Comentaris ({this.props.comments.length})</Text>
                    {this.props.theme.finished ? null:
                        <Icon name='plus' type='evilicon' color={APP_COLORS.color_neutral}
                            size={35} iconStyle={styles.iconEditStyle} onPress={() => this.props.changeModal()}/>
                    }
                    
                </View>
                <View style={{flex:1,height:"100%"}}>
                    {this.renderTopicComments()}
                </View>
            </View>
        )
    }

    displayStatus(){
        if(this.props.theme.finished){
            return(
                <View style={styles.iconInfoTextStyle}>
                    <Icon
                        name='close-o'
                        type='evilicon'
                        color={APP_COLORS.color_darkred}
                        size={20}
                    />
                    <Text style = {styles.infoStyle}> Tancat</Text>
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
                    <Text style = {styles.infoStyle}> Obert </Text>
                </View>
            );
        }
    }

    oncloseForumTopic(){
        const forumTopicInfo = {
            finished: true
        };
        Alert.alert(
            'Tancar tema',
            'Estàs segur que vols tancar aquest tema?',
            [
                {text: 'No'},
                {text: 'Sí', onPress: () => {this.props.changeStatusTopic(this.props.id, forumTopicInfo);
                                            this.props.fetchForumTopic(this.props.id);
                                            this.props.fetchForumTopicComments(this.props.id);
                                            }}
            ],
            { cancelable: false }
        );   
    }

    onopenForumTopic(){
        const forumTopicInfo = {
            finished: false
        };
        Alert.alert(
            'Obrir tema',
            'Estàs segur que vols obrir aquest tema?',
            [
                {text: 'No'},
                {text: 'Sí', onPress: () => {this.props.changeStatusTopic(this.props.id, forumTopicInfo);
                                            this.props.fetchForumTopic(this.props.id);
                                            this.props.fetchForumTopicComments(this.props.id);
                                            }}
            ],
            { cancelable: false }
        );
        
    }

    publishComment(){
        if(this.props.new_comment != ""){
            const commentInfo = {
                content: this.props.new_comment,
                forumtheme: this.props.id
            };
            this.props.publishNewComment(commentInfo);
            this.props.changeNewComment("");
            this.props.changeModal();
            this.props.fetchForumTopicComments(this.props.id);
        }
    }
    
    cancelNewComment(){
        this.props.changeNewComment("");
        this.props.changeModal();
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
                    <Modal style={styles.modalStyle} isOpen={this.props.modalOpen}>
                        <Text style={styles.modalTitle}>Afegir comentari</Text>
                        <TextInput
                            style={{ height: 50, borderColor: 'gray', borderWidth: 1, padding: '2%', textAlignVertical: "top", borderRadius: 6 }}
                            onChangeText={text => this.props.changeNewComment(text)}
                            value={this.props.new_comment} multiline={true}
                            />
                        <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                            <TouchableHighlight style={{paddingLeft: '5%'}} onPress={this.cancelNewComment.bind(this)}>
                                <Text style={{color:APP_COLORS.text_color}}>Cancel</Text>
                            </TouchableHighlight>

                            <TouchableHighlight style={{paddingRight: '5%'}} onPress={this.publishComment.bind(this)}>
                                <Text style={{color:APP_COLORS.color_checked}} >Acceptar</Text>
                            </TouchableHighlight>
                        </View>

                        
                    </Modal>
                    <View style={titleViewStyle}>
                        <Text style = {titleStyle}> {this.props.theme.title} </Text>
                        {this.props.theme.finished ? 
                            <Button colorButton={APP_COLORS.color_checked} marginL={"2%"} height={"60%"} 
                                    text={"Obrir"} path={this.onopenForumTopic.bind(this)} width={"15%"} marginR={"2%"}/>:
                                    <Button colorButton={APP_COLORS.color_darkred} marginL={"2%"} height={"60%"} text={"Tancar"} 
                                    path={this.oncloseForumTopic.bind(this)} width={"15%"} marginR={"2%"}/>}
                    </View>

                    <View style={iconInfoTextStyle}>
                        <Icon name='calendar' type='evilicon' color={APP_COLORS.text_color} size={20}/>
                        <Moment style = {infoStyle} element={Text} format="DD/MM/YYYY HH:mm">{this.props.created_date}</Moment>
                    </View>

                    <View style={iconInfoTextStyle}>
                        <Icon name='location' type='evilicon' color={APP_COLORS.text_color} size={20}/>
                        <Text style = {infoStyle}> {this.props.theme.group} </Text>
                    </View>
                    {this.displayStatus()}

                    <Text style = {descriptionStyle}> {this.props.theme.description} </Text>
                   
                    {this.renderTopicCommentsView()}
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
    },
    modalStyle: {
        height: '15%',
        width: '95%',
        padding: '2%'
    },
    modalTitle: {
        color: APP_COLORS.text_color,
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: '4%',
        paddingLeft: '2%',
        alignSelf: 'center'
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
    textNoComments: {
        color: APP_COLORS.text_color,
        fontSize: 16,
        textAlign: 'center'
    },
    viewNoComments: {
        paddingTop: '50%'
    },
    newCommentLinkText: {
        color: APP_COLORS.color_green   ,
        fontSize: 16,
        textAlign: 'center',
        textDecorationLine: 'underline'
    }
});

const mapStateToProps = (state) => {
    return {
        theme: state.forumthemeReducer.theme,
        comments: state.forumthemeReducer.comments,
        participants: state.forumthemeReducer.participants,
        tasks: state.forumthemeReducer.tasks,
        isFetching: state.forumthemeReducer.isFetching,
        modalOpen: state.forumthemeReducer.modalOpen,
        new_comment: state.forumthemeReducer.new_comment
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {
        fetchForumTopic: (id) => dispatch(fetchForumTopic(id)),
        fetchForumTopicComments: (id) => dispatch(fetchForumTopicComments(id)),
        changeModal: () => dispatch(changeModal()),
        changeNewComment: (text) => dispatch(changeNewComment(text)),
        publishNewComment: (commentInfo) => dispatch(publishNewComment(commentInfo)),
        changeStatusTopic: (id, info) => dispatch(changeStatusTopic(id, info)),
        deleteComment: (id) => dispatch(deleteComment(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ForumThemeScreen)

