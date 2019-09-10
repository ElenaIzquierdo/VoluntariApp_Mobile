import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-ui-kitten';
import {Header, Avatar, Icon, CheckBox} from 'react-native-elements';
import {APP_COLORS} from "../constants/colors";
import { connect } from 'react-redux';
import {Actions} from "react-native-router-flux";

class ProfileScreen extends React.Component{
    constructor(props) {
        super(props)
    }

    pintarDies(){
        return(
            <View>
                    <CheckBox title={"Dilluns"} checked={this.props.user.dies[0]} size={14} textStyle={styles.infoStyle}
                              center={false} checkedColor={APP_COLORS.color_checked} containerStyle={styles.checkBoxContainerStyle}/>
                    <CheckBox title={"Dimarts"} checked={this.props.user.dies[1]} size={14} textStyle={styles.infoStyle}
                              center={false} checkedColor={APP_COLORS.color_checked} containerStyle={styles.checkBoxContainerStyle}/>
                    <CheckBox title={"Dimecres"} checked={this.props.user.dies[2]} size={14} textStyle={styles.infoStyle}
                              center={false} checkedColor={APP_COLORS.color_checked} containerStyle={styles.checkBoxContainerStyle}/>
                    <CheckBox title={"Dijous"} checked={this.props.user.dies[3]} size={14} textStyle={styles.infoStyle}
                              center={false} checkedColor={APP_COLORS.color_checked} containerStyle={styles.checkBoxContainerStyle}/>
                    <CheckBox title={"Divendres"} checked={this.props.user.dies[4]} size={14} textStyle={styles.infoStyle}
                              center={false} checkedColor={APP_COLORS.color_checked} containerStyle={styles.checkBoxContainerStyle}/>
            </View>
        )
    }

    render(){
        const { viewStyle, nameStyle, viewnamephotoStyle, correuStyle, infoStyle, viewinfoStyle } = styles;
        return(
            <View style={viewStyle}>
                <Header
                    leftComponent={{ icon: 'home', color: APP_COLORS.color_neutral, onPress: () => Actions.home() }}
                    centerComponent={{ text: 'VoluntariApp', style: { color: APP_COLORS.color_neutral, fontSize: 25, fontWeight: 'bold' } }}
                    backgroundColor={APP_COLORS.color_orange}
                />
                <View style={viewStyle}>
                    <View style={viewnamephotoStyle}>
                        <Avatar
                            size="large"
                            rounded
                            source={this.props.user.profilephoto}
                            showEditButton={true}
                        />
                        <View>
                            <Text style={nameStyle}>{this.props.user.nom} {this.props.user.cognom}</Text>
                            <Text style={correuStyle}>{this.props.user.correu}</Text>
                        </View>
                    </View>
                    <View style={viewinfoStyle}>
                        <Text style={nameStyle}>Grup</Text>
                        <View style={viewnamephotoStyle}>
                            <Icon
                                name='location'
                                type='evilicon'
                                color={APP_COLORS.text_color}
                                size={23}
                            />
                            <Text style = {infoStyle}> {this.props.user.grup} - {this.props.user.projecte} </Text>
                        </View>
                        <Text style={nameStyle}>Dies a assistir</Text>
                        {this.pintarDies()}
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: APP_COLORS.color_neutral,
        width: '100%',
        height: '100%',
        flex: 1,
    },
    nameStyle: {
        color: APP_COLORS.text_color,
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: '4%',
        marginTop: '3%'
    },
    correuStyle: {
        color: APP_COLORS.text_color,
        fontSize: 14,
        marginLeft: '5%',
        marginTop: '1%'
    },
    viewnamephotoStyle: {
        paddingTop: '2%',
        paddingLeft: '7%',
        flexDirection: 'row'
    },
    infoStyle:{
        color: APP_COLORS.text_color,
        fontSize: 16,
    },
    viewinfoStyle: {
        paddingLeft: '10%',
        paddingTop: '7%'
    },
    checkBoxContainerStyle: {
        backgroundColor: APP_COLORS.color_neutral,
        borderColor: APP_COLORS.color_neutral
    }
});

const mapStateToProps = (state) => {
    return {
        user: state.profileReducer.user,
    }
};

const  mapDispatchToProps = (dispatch)=>{
    return {
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ProfileScreen);

