import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {APP_COLORS} from "../constants/colors";
import { Button, Icon } from 'react-native-elements';
import Task from "./Task";

class SeparadorCI extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            objectius: true,
            explicacio: false,
            estat_actual: false,
        }
    }

    touchObjectiu(){
        this.setState({
            objectius: true,
            explicacio: false,
            estat_actual: false
        })
    }

    touchExplicacio(){
        this.setState({
            explicacio: true,
            objectius: false,
            estat_actual: false
        })
    }

    touchEstatActual(){
        this.setState({
            estat_actual: true,
            explicacio: false,
            objectius: false
        })
    }

    pintarObjectius(){
        if(this.state.objectius){
            return(<Text style={styles.textMarkedStyle}>Objectius</Text>)
        }
        else{
            return(<Text style={styles.textStyle} onPress={()=>{this.touchObjectiu()}}>Objectius</Text>)
        }
    }

    pintarEstatActual(){
        if(this.state.estat_actual){
            return(<Text style={styles.textMarkedStyle}>Estat Actual</Text>)
        }
        else{
            return(<Text style={styles.textStyle} onPress={()=>{this.touchEstatActual()}}>Estat Actual</Text>)
        }
    }

    pintarExplicacio(){
        if(this.state.explicacio){
            return(<Text style={styles.textMarkedStyle}>Explicacio</Text>)
        }
        else{
            return(<Text style={styles.textStyle} onPress={()=>{this.touchExplicacio()}}>Explicacio</Text>)
        }
    }
    _keyExtractor = (item) => item.id.toString();

    _renderObjectiu = ({item}) => (
        <Text>{item.description}</Text>
    );

    _renderExplicacio = ({item}) => (
        <Text>{item.title}-{item.description}</Text>
    );

    pintarContingut(){
        if(this.state.objectius){
            return(
                <FlatList
                    data={this.props.objectius}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderObjectiu}
                />
            )
        }
        if(this.state.explicacio){
            return(
                <FlatList
                    data={this.props.explicacio}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderExplicacio}
                />
            )
        }
        if(this.state.estat_actual){
            return(
                <Text>{this.props.estat_actual.description}</Text>
            )
        }
    }


    render(){
        const {viewStyle, viewGeneralStyle} = styles;
        return(
            <View style={viewGeneralStyle}>
                <View style={viewStyle}>
                    {this.pintarObjectius()}
                    {this.pintarExplicacio()}
                    {this.pintarEstatActual()}
                </View>
                <View style={{flex:1,height:"100%"}}>
                    {this.pintarContingut()}
                </View>
            </View>
        );
    }

};
const styles ={
    viewGeneralStyle: {
        flex:1,
        height: '100%'
    },
    viewStyle: {
        flexDirection: 'row',
        backgroundColor: APP_COLORS.color_orange,
        height: '12%',
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
}

export default SeparadorCI;
