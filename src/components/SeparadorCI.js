import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {APP_COLORS} from "../constants/colors";
import { Button, Icon } from 'react-native-elements';
import Explication from "../components/Explication";
import Objectiu from "../components/Objectiu";

class SeparadorCI extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            objectius: true,
            explicacio: false,
        }
    }

    touchObjectiu(){
        this.setState({
            objectius: true,
            explicacio: false,
        })
    }

    touchExplicacio(){
        this.setState({
            explicacio: true,
            objectius: false,
        })
    }

    renderSelectedObjectius(){
        if(this.state.objectius){
            return(<Text style={styles.textMarkedStyle}>Objectius</Text>)
        }
        else{
            return(<Text style={styles.textStyle} onPress={()=>{this.touchObjectiu()}}>Objectius</Text>)
        }
    }

    renderSelectedExplicacio(){
        if(this.state.explicacio){
            return(<Text style={styles.textMarkedStyle}>Explicacio</Text>)
        }
        else{
            return(<Text style={styles.textStyle} onPress={()=>{this.touchExplicacio()}}>Explicacio</Text>)
        }
    }
    _keyExtractor = (item) => item.id.toString();

    _renderObjectiu = ({item}) => (
        <Objectiu description={item.description}/>
    );

    _renderExplicacio = ({item}) => (
        <Explication description={item.description} title={item.title} finished={item.finished}/>
    );

    renderContingut(){
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
    }


    render(){
        const {viewStyle, viewGeneralStyle} = styles;
        return(
            <View style={viewGeneralStyle}>
                <View style={viewStyle}>
                    {this.renderSelectedObjectius()}
                    {this.renderSelectedExplicacio()}
                </View>
                <View style={{flex:1,height:"100%"}}>
                    {this.renderContingut()}
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
        paddingRight: '18%',
        paddingLeft: '18%',
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
    descriptionStyle: {
        color: APP_COLORS.text_color,
        fontSize: 16,
        paddingTop: '2%',
        paddingLeft: '7%'
    },
}

export default SeparadorCI;
