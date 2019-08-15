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
        const {titleStyle, iconStyle,viewCardFooterStyle, texticonStyle, imatgeStyle, wrapperCardStyle, textStyle} = styles;
        return(
            <Card
                wrapperStyle={wrapperCardStyle}
                image={this.props.image}
                imageStyle={imatgeStyle}>
                <View style={viewCardFooterStyle}>
                    <View style={texticonStyle}>
                        <Text style={titleStyle}>
                            {this.props.title}
                        </Text>
                    </View>
                    <View style={texticonStyle}>
                        <EvilIcons name="location" size={25} color = {APP_COLORS.text_color} style = {iconStyle}/>
                        <Text style={textStyle}>{this.props.grup}</Text>
                    </View>
                    <View style={texticonStyle}>
                        <EvilIcons name="calendar" size={25} color = {APP_COLORS.text_color} style = {iconStyle}/>
                        <Text style={textStyle}>{this.props.dia}</Text>
                    </View>
                    <View style={texticonStyle}>
                        <EvilIcons name="clock" size={25} color = {APP_COLORS.text_color} style = {iconStyle}/>
                        <Text style={textStyle}>{this.props.hora}</Text>
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
    texticonStyle: {
        flexDirection: 'row',
        paddingRight: '5%',
        paddingTop: '3%'
    },
    iconStyle: {
        paddingLeft: '2%'
    },
    titleStyle: {
        color:APP_COLORS.black,
        fontSize: 14
    },
    textStyle: {
        color:APP_COLORS.black,
        fontSize: 12
    },
    imatgeStyle: {
        height: '80%',
        width:'80%',
        alignSelf: 'center'
    },
    wrapperCardStyle: {
        height: '40%'
    }
}

export default CardModified;
