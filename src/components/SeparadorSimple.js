import React from 'react';
import {View} from 'react-native';
import {APP_COLORS} from "../constants/colors";

class SeparadorSimple extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        const { viewGeneralStyle, viewStyle} = styles;
        return(
            <View style={viewGeneralStyle}>
            </View>
        );
    }

};
const styles ={
    viewGeneralStyle: {
        height: '5%',
        backgroundColor: APP_COLORS.color_orange,
        marginTop: '3%',
        marginBottom: '5%'
    },
}

export default SeparadorSimple;
