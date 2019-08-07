import React from 'react';
import { View, Text, ScrollView } from 'react-native';
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
            participants: false
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
                        <Comment user={'Elena Izquierdo'} content={'al final que fem?'}
                                 data={"24/06/2019 17:50"} image={require('../images/user1.jpg')}/>
                        <Comment user={'Laura Gonzalez'} content={'Les cartes i les activitats'}
                                 data={"24/06/2019 19:50"} image={require('../images/user2.jpeg')}/>
                        <Comment user={'Julia Soler'} content={'Mireu les tasques per enterar-vos millor'}
                                 data={"25/06/2019 20:25"} image={require('../images/user3.jpg')}/>
                        <Comment user={'Elena Izquierdo'} content={'al final que fem?'}
                                 data={"25/06/2019 20:25"} image={require('../images/user1.jpg')}/>
                        <Comment user={'Elena Izquierdo'} content={'al final que fem?'}
                                 data={"25/06/2019 20:25"} image={require('../images/user1.jpg')}/>
                        <Comment user={'Elena Izquierdo'} content={'al final que fem?'}
                                 data={"25/06/2019 20:25"} image={require('../images/user1.jpg')}/>
                        <Comment user={'Elena Izquierdo'} content={'al final que fem?'}
                                 data={"25/06/2019 20:25"} image={require('../images/user1.jpg')}/>
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
                <Text>Participants del tema</Text>
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
    }
}

export default Separador;
