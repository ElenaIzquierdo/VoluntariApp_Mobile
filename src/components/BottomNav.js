import React from 'react';
import { View, Text } from 'react-native';
import {APP_COLORS} from "../constants/colors";
import {Icon} from "react-native-elements";
import {Actions} from "react-native-router-flux";

class BottomNav extends React.Component {
    constructor(props) {
        super(props)
    }

    displaySchedule() {
        if (this.props.selected === "programacio"){
            return (
                <View>
                    <Icon
                        name='calendar'
                        type='evilicon'
                        color={APP_COLORS.color_green}
                        size={30}
                        onPress = {() => Actions.programacio()}
                    />
                    <Text style={styles.textSelectedStyle}>Programació</Text>
                </View>
            )
        }
        else{
            return (
                <View>
                    <Icon
                        name='calendar'
                        type='evilicon'
                        color={APP_COLORS.color_white}
                        size={30}
                        onPress = {() => Actions.programacio()}
                    />
                    <Text style={styles.textStyle}>Programació</Text>
                </View>
            )
        }

    }

    displayCI() {
        if (this.props.selected === "ci"){
            return (
                <View>
                    <Icon
                        name='trophy'
                        type='evilicon'
                        color={APP_COLORS.color_green}
                        size={30}
                        onPress = {() => Actions.ci()}
                    />
                    <Text style={styles.textSelectedStyle}>Centre Interès</Text>
                </View>
            )
        }
        else{
            return (
                <View>
                    <Icon
                        name='trophy'
                        type='evilicon'
                        color={APP_COLORS.color_white}
                        size={30}
                        onPress = {() => Actions.ci()}
                    />
                    <Text style={styles.textStyle}>Centre Interès</Text>
                </View>
            )
        }

    }

    displayForum() {
        if (this.props.selected === "forum"){
            return (
                <View>
                    <Icon
                        name='comment'
                        type='evilicon'
                        color={APP_COLORS.color_green}
                        size={30}
                        onPress = {() => Actions.forum()}
                    />
                    <Text style={styles.textSelectedStyle}>Fòrum</Text>
                </View>
            )
        }
        else{
            return (
                <View>
                    <Icon
                        name='comment'
                        type='evilicon'
                        color={APP_COLORS.color_white}
                        size={30}
                        onPress = {() => Actions.forum()}
                    />
                    <Text style={styles.textStyle}>Fòrum</Text>
                </View>
            )
        }

    }

    render(){
        return(
            <View style={styles.rowStyle}>
                {this.displaySchedule()}
                {this.displayCI()}
                {this.displayForum()}
            </View>
        )
    }
}

const styles ={
    rowStyle: {
        flexDirection: 'row',
        height: '10%',
        backgroundColor: APP_COLORS.color_orange,
        justifyContent: 'space-between',
        paddingLeft: '7%',
        paddingRight: '7%',
        paddingTop: '5%'
    },
    textStyle: {
        color: APP_COLORS.color_white,
        fontSize: 11
    },
    textSelectedStyle: {
        color: APP_COLORS.color_green,
        fontSize: 11
    }
};

export default BottomNav;
