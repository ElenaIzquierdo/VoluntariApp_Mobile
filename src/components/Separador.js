import React from 'react';
import {View, ScrollView, Image, Alert, Text, FlatList} from 'react-native';
import Modal from 'react-native-modalbox';
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
            isOpen: false,
            isDisabled: false,
            swipeToClose: true,
            sliderValue: 0.3
        }
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

    _keyExtractor = (item, index) => item.id;

    _renderItem = ({item}) => (
        <Comment
            id={item.id}
            image={item.image}
            user={item.author}
            content={item.content}
            data={item.created_date}
        />
    );

    pintarCommentaris(){
        return(
            <FlatList
                data={this.props.comments}
                extraData={this.state}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />
        )
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
                    <Modal style={styles.modal} position={"top"} ref={"modal"} isDisabled={this.state.isDisabled}>
                        <Text style={styles.modalTitle}>Afegeix participants</Text>
                        <Button>Holaaa</Button>
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
                            onPress={() => this.refs.modal.open()}
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
    },
    modalTitle: {
        color: APP_COLORS.text_color,
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: '4%',
        paddingLeft: '2%'
    },
    modal: {
        alignItems: 'center',
        height: '50%',
        width: '75%'
    },
}

export default Separador;
