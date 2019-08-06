import React from 'react';
import { View, Text } from 'react-native';
import {APP_COLORS} from "../constants/colors";

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
                <Text>Comentaris del tema</Text>
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
                <View>
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
    }
}

export default Separador;
