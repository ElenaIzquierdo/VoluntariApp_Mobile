import React from 'react';
import {View, Text, ScrollView, Image, Modal, TouchableHighlight, Alert} from 'react-native';
import {APP_COLORS} from "../constants/colors";
import Textarea from 'react-native-textarea';
import { Button, Icon } from 'react-native-elements';
import Comment from '../components/Comment';

class Separador extends React.Component {
    constructor(props) {
        super(props)
        this.touchComment = this.touchComment.bind(this);
        this.state = {
            comments: true,
            tasks: false,
            participants: false,
            modalVisible: false,
        }
    }
    setModalVisible(visible) {
        console.log("HOLA")
        this.setState({modalVisible: visible});
    }

    touchComment(){
        this.setState({
            comments: true,
            tasks: false,
            participants: false
        })
    }

    touchTasks(){
        var tasks_new = this.state.tasks
        this.setState({
            tasks: true,
            comments: false,
            participants: false
        })
    }

    touchParticipants(){
        var part_new = this.state.participants
        this.setState({
            participants: true,
            comments: false,
            tasks: false
        })
    }

    pintarComments(){
        if(this.state.comments){
            return(<Text style={styles.textMarkedStyle}>Comentaris</Text>)
        }
        else{
            return(<Text style={styles.textStyle} onPress={()=>{this.touchComment()}}>Comentaris</Text>)
        }
    }

    pintarTasks(){
        if(this.state.tasks){
            return(<Text style={styles.textMarkedStyle}>Tasques</Text>)
        }
        else{
            return(<Text style={styles.textStyle} onPress={()=>{this.touchTasks()}}>Tasques</Text>)
        }
    }

    pintarParticipants(){
        if(this.state.participants){
            return(<Text style={styles.textMarkedStyle}>Participants</Text>)
        }
        else{
            return(<Text style={styles.textStyle} onPress={()=>{this.touchParticipants()}}>Participants</Text>)
        }
    }

    pintarCommentaris(){
        return this.props.comments.map((comment)=>{
            return(
                <Comment key={comment.id} user={comment.author} content={comment.content}
                         data={comment.created_date} image={comment.image}/>
            )
        })
    }

    pintarPart(){
        return this.props.participants.map((part)=>{
            return(
                <View style={styles.viewUserStyle} key={part.id}>
                    <Image source={part.image} style={styles.imageUserStyle}/>
                    <Text style={styles.nameStyle}>{part.name}</Text>
                    <Icon
                        name='close-o'
                        type='evilicon'
                        color={APP_COLORS.text_color}
                        size={20}
                        iconStyle={styles.iconDeleteStyle}
                    />
                </View>

            )
        })
    }

    pintarContingut(){
        if(this.state.comments){
            return(
                <View>
                    <View style={styles.container}>
                      <Textarea
                          containerStyle={styles.textareaContainer}
                          style={styles.textarea}
                          placeholder={'Fes el teu comentari'}
                          placeholderTextColor={APP_COLORS.text_color}
                          underlineColorAndroid={'transparent'}
                      />
                    </View>
                    <ScrollView>
                        {this.pintarCommentaris()}
                    </ScrollView>
                </View>
            )
        }
        if(this.state.tasks){
            return(
                <Text>Tasques del tema</Text>
            )
        }
        if(this.state.participants){
            return(
                <View style={styles.viewContingutPStyle}>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                        }}>
                        <View style={{marginTop: 22}}>
                            <View>
                                <Text>Hello World!</Text>

                                <TouchableHighlight
                                    onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible);
                                    }}>
                                    <Text>Hide Modal</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </Modal>
                    <View style={styles.viewPartStyle}>
                        {this.pintarPart()}
                    </View>
                    <View style={styles.footer}>
                        <Icon
                            name='plus'
                            type='evilicon'
                            color={APP_COLORS.color_checked}
                            size={25}
                            reverse
                            iconStyle={styles.iconDeleteStyle}
                            onPress={() => {
                                this.setModalVisible(true);
                            }}
                        />
                    </View>
                </View>
            )

        }
    }

    render(){
        const {viewStyle, viewGeneralStyle} = styles;
        return(
            <View style={viewGeneralStyle}>
                <View style={viewStyle}>
                    {this.pintarComments()}
                    {this.pintarTasks()}
                    {this.pintarParticipants()}
                </View>
                <View style={{flex:1}}>
                    {this.pintarContingut()}
                </View>
            </View>
        );
    }

};
const styles ={
    viewGeneralStyle: {
      height: '100%'
    },
    viewStyle: {
        flexDirection: 'row',
        backgroundColor: APP_COLORS.color_orange,
        height: '8%',
        marginTop: '5%',
        justifyContent: 'space-between',
        paddingRight: '4%',
        paddingLeft: '4%',
        alignItems: 'center'
    },
    textStyle: {
        color: APP_COLORS.color_neutral,
        fontSize: 17,
        fontWeight: 'bold'
    },
    textMarkedStyle: {
        color: APP_COLORS.color_green,
        fontSize: 17,
        fontWeight: 'bold'
    },
    textarea: {
        textAlignVertical: 'top',  // hack android
        fontSize: 14,
        color: APP_COLORS.black,
        height: '100%',
    },
    textareaContainer: {
        backgroundColor: APP_COLORS.color_white,
        margin: '1%',
        marginRight:'2%',
        borderWidth: 1,
        borderColor: APP_COLORS.color_green,
        borderRadius: 4,
        height: '100%',
    },
    container: {
        padding: '2%',
        //borderWidth: 0.5,
        //borderColor: APP_COLORS.color_darkred,
        height:'13%',
    },
    buttonContainerStyle: {
        width:'10%',
        backgroundColor: APP_COLORS.color_green,
    },
    botoStyle: {
    },
    viewUserStyle: {
        flexDirection: 'row'
    },
    imageUserStyle:{
        width: 27,
        height:27,
        borderRadius: 25,
        marginRight: '2%'
    },
    viewPartStyle: {
        paddingLeft: '5%',
        paddingTop: '3%'
    },
    nameStyle: {
        fontSize: 17,
        marginBottom: '3%'
    },
    iconDeleteStyle: {
        marginLeft: '2%',
    },
    footer: {
        paddingLeft: '75%',
        paddingBottom: '3%',
        marginBottom: '2%',
        paddingTop: '40%'
    },
    viewContingutPStyle: {
        height: '100%',
        paddingBottom: '2%',
    }
}

export default Separador;
