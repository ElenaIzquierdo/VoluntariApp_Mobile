
import React from 'react';
import {Image} from 'react-native';
import {APP_COLORS} from "../constants/colors";

const Logo = () => {
    return (
        <Image source={require('../images/casalfoto.jpg')} style = {styles.imageStyle}/>
    );
};

const styles = {
    imageStyle: {
        width: 150,
        height: 150,
        // Set border width.
        //borderWidth: 2,
        // Set border Hex Color Code Here.
        //borderColor: APP_COLORS.color_neutral,
        borderRadius: 75,
        overflow: "hidden",
        position: "absolute"
    }

}

export default Logo;