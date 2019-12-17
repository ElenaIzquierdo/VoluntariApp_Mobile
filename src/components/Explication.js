import React from 'react';
import Moment from 'react-moment';
import {View, Text} from 'react-native';
import {APP_COLORS} from "../constants/colors";

class Explication extends React.Component {
    constructor(props) {
        super(props)
    }

    renderTitle(){  
        if(this.props.finished){
            return(
                <View style={styles.rowStyle}>
                    <Moment style = {styles.titleFinishedStyle} element={Text} format="DD/MM/YYYY">{this.props.date}</Moment>
                    <Text style={styles.doneStyle}>- Fet</Text>
                </View>
            )
        }
        else{
            return(
                <Moment style = {styles.titleStyle} element={Text} format="DD/MM/YYYY">{this.props.date}</Moment>)
        }
    }

    render(){
        const {descriptionStyle, viewStyle} = styles;
        return(
            <View style={viewStyle}>
                {this.renderTitle()}
                <Text style={descriptionStyle}>{this.props.description}</Text>
            </View>
        );
    }

};
const styles ={
    doneStyle: {
        color: APP_COLORS.color_green,
        fontSize: 12,
        paddingTop: '5%',
        paddingLeft: '3%'
    },
    rowStyle: {
       flexDirection: 'row',
    },
    viewStyle: {
        marginBottom: '3%'
    },
    descriptionStyle: {
        color: APP_COLORS.text_color,
        fontSize: 16,
        paddingTop: '2%',
        paddingLeft: '7%'
    },
    titleStyle: {
        color: APP_COLORS.text_color,
        fontSize: 17,
        fontWeight: 'bold',
        paddingTop: '4%',
        paddingLeft: '2%'
    },
    titleFinishedStyle: {
        color: APP_COLORS.color_green,
        fontSize: 17,
        fontWeight: 'bold',
        paddingTop: '4%',
        paddingLeft: '2%'
    },
}

export default Explication;
