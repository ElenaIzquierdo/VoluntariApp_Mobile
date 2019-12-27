import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {FontAwesome} from "@expo/vector-icons";
import {APP_COLORS} from "../constants/colors";
import {Actions} from "react-native-router-flux";

class Week extends React.Component {
    constructor(props) {
        super(props)
    }

    static renderIconAssistencia(ass){
        if(ass === 1){
            return(<FontAwesome name="angle-double-down" size={18} color = {APP_COLORS.color_green} style={styles.iconAssStyle}/>)
        }
        if(ass === 2){
            return(<FontAwesome name="angle-up" size={18} color = {APP_COLORS.color_green} style={styles.iconAssStyle}/>)
        }
        if(ass === 3){
            return(<FontAwesome name="angle-double-up" size={18} color = {APP_COLORS.color_green} style={styles.iconAssStyle}/>)
        }
        if(ass === null){
            return(<Text style={[{color: APP_COLORS.text_color},styles.iconAssStyle]}>-</Text>)
        }
    }
    static renderIconValoracio(rate){
        if(rate === 0 || rate === null){
            return(<Text style={[{color: APP_COLORS.text_color},styles.iconAssStyle]}>-</Text>)
        }
        if(rate === 1){
            return(<FontAwesome name='star' size={18} color= {APP_COLORS.color_yellow} style={styles.starStyle}/>)
        }
        if(rate === 2){
            return(
                <View style={styles.iconInfoTextStyle}>
                    <FontAwesome name='star' size={18} color= {APP_COLORS.color_yellow} style={styles.starStyle}/>
                    <FontAwesome name='star' size={18} color= {APP_COLORS.color_yellow} style={styles.starStyle}/>
                </View>
            )
        }
        if(rate === 3){
            return(
                <View style={styles.iconInfoTextStyle}>
                    <FontAwesome name='star' size={18} color= {APP_COLORS.color_yellow} style={styles.starStyle}/>
                    <FontAwesome name='star' size={18} color= {APP_COLORS.color_yellow} style={styles.starStyle}/>
                    <FontAwesome name='star' size={18} color= {APP_COLORS.color_yellow} style={styles.starStyle}/>
                </View>
            )
        }
        if(rate === 4){
            return(
                <View style={styles.iconInfoTextStyle}>
                    <FontAwesome name='star' size={18} color= {APP_COLORS.color_yellow} style={styles.starStyle}/>
                    <FontAwesome name='star' size={18} color= {APP_COLORS.color_yellow} style={styles.starStyle}/>
                    <FontAwesome name='star' size={18} color= {APP_COLORS.color_yellow} style={styles.starStyle}/>
                    <FontAwesome name='star' size={18} color= {APP_COLORS.color_yellow} style={styles.starStyle}/>
                </View>
            )
        }
        if(rate === 5){
            return(
                <View style={styles.iconInfoTextStyle}>
                    <FontAwesome name='star' size={18} color= {APP_COLORS.color_yellow} style={styles.starStyle}/>
                    <FontAwesome name='star' size={18} color= {APP_COLORS.color_yellow} style={styles.starStyle}/>
                    <FontAwesome name='star' size={18} color= {APP_COLORS.color_yellow} style={styles.starStyle}/>
                    <FontAwesome name='star' size={18} color= {APP_COLORS.color_yellow} style={styles.starStyle}/>
                    <FontAwesome name='star' size={18} color= {APP_COLORS.color_yellow} style={styles.starStyle}/>
                </View>
            )
        }
    }

    render(){
        const {rowStyle, titleStyle, iconStyle, infoStyle, touchableStyle, iconInfoTextStyle} = styles;
        return(
            <TouchableHighlight style={touchableStyle} onPress = {() => Actions.week({id: this.props.id})}>
                <View>
                    <View style={rowStyle}>
                        <Text style={titleStyle}>{this.props.name}</Text>
                        <FontAwesome name='download' size={25} color= {APP_COLORS.text_color} style={iconStyle}/>
                    </View>
                    <View>
                        <View style={iconInfoTextStyle}>
                            <Text style={infoStyle}>Assistencia</Text>
                            {Week.renderIconAssistencia(this.props.ass)}
                        </View>
                        <View style={iconInfoTextStyle}>
                            <Text style={infoStyle}>Valoracio</Text>
                            {Week.renderIconValoracio(this.props.rate)}
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }

};
const styles ={
    touchableStyle: {
        paddingBottom: '3%'
    }
    ,
    viewStyle: {
        marginBottom: '3%'
    },
    titleStyle: {
        color: APP_COLORS.text_color,
        fontSize: 17,
        fontWeight: 'bold'
    },
    infoStyle:{
        color: APP_COLORS.text_color,
        fontSize: 16,
        marginLeft: '3%'
    },
    rowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: '2%',
        paddingTop: '2%'
    },
    iconStyle: {
        marginRight: '4%',
        marginTop: '2%'
    },
    iconInfoTextStyle: {
        flexDirection: 'row',
        paddingLeft: '3%'
    },
    iconAssStyle: {
        marginLeft: '2%'
    }
}

export default Week;
