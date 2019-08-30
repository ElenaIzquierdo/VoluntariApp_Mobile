import React from 'react';
import {View, Text, Image} from 'react-native';
import {Icon} from 'react-native-elements';
import {APP_COLORS} from "../constants/colors";

class Explication extends React.Component {
    constructor(props) {
        super(props)
    }

    renderTitle(){
        if(this.props.finished){
            return(
                <View style={styles.rowStyle}>
                    <Text style={styles.titleFinishedStyle}>{this.props.title}</Text>
                    <Text style={styles.fetStyle}>- Fet</Text>
                </View>
            )
        }
        else{
            return(<Text style={styles.titleStyle}>{this.props.title}</Text>)
        }
    }

    render(){
        const {descriptionStyle, titleStyle, viewStyle} = styles;
        return(
            <View style={viewStyle}>
                {this.renderTitle()}
                <Text style={descriptionStyle}>{this.props.description}</Text>
            </View>
        );
    }

};
const styles ={
    fetStyle: {
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
