import React from 'react';
import { View, Text, Image } from 'react-native';
import {APP_COLORS} from "../constants/colors";
import { EvilIcons } from '@expo/vector-icons';

class Card2 extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        const {viewStyle, viewIconArrowStyle, viewCardFooterStyle, texticonStyle, titleStyle, iconStyle, textStyle, infoviewStyle} = styles;
        return(
            <View style={[viewStyle,{backgroundColor:this.props.colorFons}]}>
                <View style={viewCardFooterStyle}>
                    <View style={viewIconArrowStyle}>
                        <EvilIcons name="chevron-left" size={35} color = {APP_COLORS.black}/>
                    </View>
                    <View style={infoviewStyle}>
                        <Text style={titleStyle}>
                            {this.props.title}
                        </Text>
                        <View style={texticonStyle}>
                            <EvilIcons name="location" size={25} color = {APP_COLORS.text_color} style = {iconStyle}/>
                            <Text style={textStyle}>{this.props.grup}</Text>
                        </View>
                        <View style={texticonStyle}>
                            <EvilIcons name="calendar" size={25} color = {APP_COLORS.text_color} style = {iconStyle}/>
                            <Text style={textStyle}>{this.props.dia} - {this.props.hora} h</Text>
                        </View>
                    </View>
                    <View>
                        <EvilIcons name="chevron-right" size={35} color = {APP_COLORS.black}/>
                    </View>
                </View>
            </View>
        );
    }

};
const styles ={
    viewStyle: {
        width: '90%',
        height: '18%',
        borderWidth: 0.5,
        borderColor: APP_COLORS.text_color,
        alignSelf: 'center',
        borderRadius: 8,
        marginTop: '10%',
        marginBottom: '2%',
        justifyContent: 'center',
    },
    viewHeaderStyle: {
        height: '20%',
    },
    viewCardFooterStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
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
        fontSize: 17
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
    },
    viewIconArrowStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '15%'
    },
    infoviewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    }
}

export default Card2;
