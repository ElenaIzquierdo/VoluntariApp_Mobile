import React from 'react';
import { Image, ImageProps } from 'react-native';
import {
    TopNavigation,
    TopNavigationAction,
    TopNavigationActionProps,
} from 'react-native-ui-kitten';

const TopNav = (props)=> {

    const renderControlIcon = () => {
        return (
            <Image
                style={style}
                source={{uri: 'https://path-to/awesome-image.png'}}
            />
        );
    };

    const renderLeftControl = () => {
        return (
            <TopNavigationAction
                icon={this.renderControlIcon}
                onPress={this.onLeftControlPress}
            />
        );
    };

    return (
        <TopNavigation
            title='Title'
            leftControl={this.renderLeftControl()}
        />
    );
};

export default TopNav;
