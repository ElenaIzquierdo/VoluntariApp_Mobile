import React from 'react';
import { View, Text, Image } from 'react-native';
import {APP_COLORS} from "../constants/colors";
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { EvilIcons } from '@expo/vector-icons';

class CardModified extends React.Component {
    constructor(props) {
        super(props)
    }


    render(){
        const users = [
            {
                name: 'brynn',
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
            },
            {
                name: 'elena',
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
            },
            {
                name: 'paula',
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
            },

        ]
        const {textStyle, titleStyle, imatgeStyle, texticonStyle, cardStyle, iconStyle,titlepriceStyle, ViewRow} = styles;
        return(
            <Card
                image={this.props.image}>
                <View style={styles.viewCardFooterStyle}>
                    <View style={styles.texticonStyle}>
                        <Text style={titleStyle}>
                            {this.props.title}
                        </Text>
                    </View>
                    <View style={styles.texticonStyle}>
                        <EvilIcons name="location" size={25} color = {APP_COLORS.text_color} style = {iconStyle}/>
                        <Text>{this.props.grup}</Text>
                    </View>
                    <View style={styles.texticonStyle}>
                        <EvilIcons name="calendar" size={25} color = {APP_COLORS.text_color} style = {iconStyle}/>
                        <Text>{this.props.dia}</Text>
                    </View>
                    <View style={styles.texticonStyle}>
                        <EvilIcons name="clock" size={25} color = {APP_COLORS.text_color} style = {iconStyle}/>
                        <Text>{this.props.hora}</Text>
                    </View>
                </View>
            </Card>
        );
    }

};
const styles ={
    viewCardFooterStyle: {
        backgroundColor: APP_COLORS.color_neutral
    },
    viewCard: {
        backgroundColor: APP_COLORS.color_neutral,
        height: '72%'
    },
    viewpriceStyle: {
        width: '30%',
        borderWidth: 3,
        borderRadius: 15,
        marginRight: '2%',
        borderColor: APP_COLORS.text_color
    },
    texticonStyle: {
        flexDirection: 'row',
        paddingRight: '5%',
        paddingTop: '3%'
    },
    titlepriceStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imatgeStyle: {
        borderRadius: 8,
        height: '35%',
        width: '100%'
    },
    iconStyle: {
        paddingLeft: '2%'
    },
    titleStyle: {
        color:APP_COLORS.black,
        fontSize: 21
    },
    cardStyle: {
        height: '90%',
        borderRadius: 15,
        paddingRight: '5%'
    },
    textStyle: {
        fontSize: 21,
        color:APP_COLORS.text_color,
        paddingRight: '3%',
    },
    text2Style: {
        fontSize: 21,
        textAlign: 'center',
        color:APP_COLORS.text_color
    },
    imageStyle: {
        height: '48%'
    },
    ViewRow:{
        flexDirection: 'row',
        paddingRight: '2%'
    }
}

export default CardModified;
