import React from 'react';
import {View, Text, Image} from 'react-native';
import {Icon} from 'react-native-elements';
import {APP_COLORS} from "../constants/colors";

class Participant extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        const {viewUserStyle,imageUserStyle,nameStyle,iconDeleteStyle} = styles;
        return(
            <View style={viewUserStyle}>
                <Image source={this.props.image} style={imageUserStyle}/>
                <Text style={nameStyle}>{this.props.name}</Text>
                <Icon
                    name='close-o'
                    type='evilicon'
                    color={APP_COLORS.text_color}
                    size={20}
                    iconStyle={iconDeleteStyle}
                />
            </View>
        );
    }

};
const styles ={
    viewUserStyle: {
        flexDirection: 'row'
    },
    nameStyle: {
        fontSize: 17,
        marginBottom: '3%'
    },
    imageUserStyle:{
        width: 27,
        height:27,
        borderRadius: 25,
        marginRight: '2%'
    },
    iconDeleteStyle: {
        marginLeft: '2%',
    },
}

export default Participant;
