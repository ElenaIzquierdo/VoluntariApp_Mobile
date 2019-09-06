import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Modal from 'react-native-modalbox';
import {APP_COLORS} from "../constants/colors";
import { Button, Icon } from 'react-native-elements';
import Comment from '../components/Comment';
import Participant from '../components/Participant';
import Task from '../components/Task';

class Separador extends React.Component {
    constructor(props) {
        super(props);
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
        this.setState({
            tasks: true,
            comments: false,
            participants: false
        })
    }

    touchParticipants(){
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

    _keyExtractor = (item) => item.id.toString();

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

    _renderParticipant = ({item}) => (
        <Participant key={item.id} id={item.id} image={item.image} name={item.name}/>
    );

    pintarPart(){
        return(
            <FlatList
                data={this.props.participants}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderParticipant}
                showsVerticalScrollIndicator={false}
            />
        )
    }

    _renderTask = ({item}) => (
        <Task title={item.title} finished={item.finished} assignees={item.assignees}/>
    );

    pintarTasques(){
        return(
            <FlatList
                data={this.props.tasks}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderTask}
            />
        )
    }

    pintarContingut(){
        if(this.state.comments){
            return (
                <View>
                    {this.pintarCommentaris()}
                </View>
            )
        }
        if(this.state.tasks){
            return this.pintarTasques()
        }
        if(this.state.participants){
            return(
                <View style={styles.viewContingutPStyle}>
                    <Modal style={styles.modal} position={"top"} ref={"modal"} isDisabled={this.state.isDisabled}>
                        <Text style={styles.modalTitle}>Afegeix participants</Text>
                        <Button>Holaaa</Button>
                    </Modal>
                    <View style={styles.viewPartStyle}>
                        <View style={styles.viewColumnP1}>
                            {this.pintarPart()}
                        </View>
                        <View style={styles.viewColumnP2}>
                            <Icon
                                name='plus'
                                type='evilicon'
                                color={APP_COLORS.color_checked}
                                size={25}
                                reverse
                                onPress={() => this.refs.modal.open()}
                            />
                        </View>
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
                <View style={{flex:1,height:"100%"}}>
                {this.pintarContingut()}
                </View>
            </View>
        );
    }

}

const styles ={
    viewGeneralStyle: {
        flex:1,
        height: '100%'
    },
    viewStyle: {
        flexDirection: 'row',
        backgroundColor: APP_COLORS.color_orange,
        height: '15%',
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
        fontSize: 14,
        color: APP_COLORS.black,
        height: '10%',
    },
    textareaContainer: {
        backgroundColor: APP_COLORS.color_white,
        margin: '1%',
        marginRight:'2%',
        borderWidth: 1,
        borderColor: APP_COLORS.color_green,
        borderRadius: 4,
        height: '11%',
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
    viewPartStyle: {
        flexDirection: 'row',
        paddingLeft: '5%',
        paddingTop: '3%'
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
    viewColumnP1: {
        width: '75%'
    },
    viewColumnP2: {
        width: '25%',
        paddingTop: '72%'
    },
};

export default Separador;
