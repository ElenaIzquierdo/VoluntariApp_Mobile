import * as React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { Text } from 'react-native-ui-kitten';
import {Header, Avatar, Icon, CheckBox} from 'react-native-elements';
import {APP_COLORS} from "../constants/colors";
import { connect } from 'react-redux';
import {Actions} from "react-native-router-flux";
import {changeCheckedDay, updateProfilePicture, setTrueModifiedAttribute, setFalseModifiedAttribute, 
        saveChanges, fetchUserProfile} from "../actions/profileActions";


class ProfileScreen extends React.Component{
    constructor(props) {
        super(props)
    }

    componentWillMount(){
        this.props.fetchUserProfile()
    }


    renderDays(){
        return(
            <View>
                <CheckBox title={"Dilluns"} checked={this.props.days[0]} size={14} textStyle={styles.infoStyle}
                            center={false} checkedColor={APP_COLORS.color_checked} 
                            containerStyle={styles.checkBoxContainerStyle} disabled={true}/>
                <CheckBox title={"Dimarts"} checked={this.props.days[1]} size={14} textStyle={styles.infoStyle}
                            center={false} checkedColor={APP_COLORS.color_checked} 
                            containerStyle={styles.checkBoxContainerStyle} disabled={true}/>
                <CheckBox title={"Dimecres"} checked={this.props.days[2]} size={14} textStyle={styles.infoStyle}
                            center={false} checkedColor={APP_COLORS.color_checked} 
                            containerStyle={styles.checkBoxContainerStyle} disabled={true}/>
                <CheckBox title={"Dijous"} checked={this.props.days[3]} size={14} textStyle={styles.infoStyle}
                            center={false} checkedColor={APP_COLORS.color_checked} 
                            containerStyle={styles.checkBoxContainerStyle} disabled={true}/>
                <CheckBox title={"Divendres"} checked={this.props.days[4]} size={14} textStyle={styles.infoStyle}
                            center={false} checkedColor={APP_COLORS.color_checked} 
                            containerStyle={styles.checkBoxContainerStyle} disabled={true}/>
            </View>
        )
    }

    

    displayAvatar(){
        var initial_name=this.props.user.first_name.charAt(0).toUpperCase();
        return(
            <Avatar rounded title={initial_name} size="large"
                titleStyle={styles.titleAvatarStyle}/>
        )
    }

    render(){
        const { viewStyle, nameStyle, viewnamephotoStyle, correuStyle, infoStyle, viewinfoStyle, buttonChangesStyle } = styles;
        if(this.props.isFetching){
            return(
                <View style = {{justifyContent: 'center', alignContent: 'center', width: '100%', height: '100%'}}>
                    <ActivityIndicator size="large" color={APP_COLORS.color_orange}/>
                </View>
            );
        }
        else{
            return(
                <View style={viewStyle}>
                    <Header
                        leftComponent={{ icon: 'home', color: APP_COLORS.color_neutral, onPress: () => Actions.home() }}
                        centerComponent={{ text: 'VoluntariApp', style: { color: APP_COLORS.color_neutral, fontSize: 25, fontWeight: 'bold' } }}
                        backgroundColor={APP_COLORS.color_orange}
                    />
                    <View style={viewStyle}>
                        <View style={viewnamephotoStyle}>
                            {this.displayAvatar()}
                            <View>
                                <Text style={nameStyle}>{this.props.user.first_name} {this.props.user.last_name}</Text>
                                <Text style={correuStyle}>{this.props.user.email}</Text>
                                <Text style={correuStyle}>{this.props.user.profile.mobile_phone}</Text>
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
                                <Text style = {infoStyle}> {this.props.user.profile.group} - Raval </Text>
                            </View>
                            <Text style={nameStyle}>Dies a assistir</Text>
                            {this.renderDays()}
                        </View>
                    </View>
                </View>
            );
        }  
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
    },
    rowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: '2%',
        paddingRight: '3%',
    },
    buttonChangesStyle: {
        paddingBottom: '8%'
    },
    titleAvatarStyle:{
        color: APP_COLORS.color_green,
    }
});

const mapStateToProps = (state) => {
    return {
        user: state.profileReducer.user,
        modified: state.profileReducer.modified,
        isFetching: state.profileReducer.isFetching,
        days: state.profileReducer.days
    }
};

const  mapDispatchToProps = (dispatch)=>{
    return {
        changeCheckedDay : (day) => dispatch(changeCheckedDay(day)),
        updateProfilePicture : (uri) => dispatch(updateProfilePicture(uri)),
        setTrueModifiedAttribute : () => dispatch(setTrueModifiedAttribute()),
        setFalseModifiedAttribute : () => dispatch(setFalseModifiedAttribute()),
        saveChanges : () => dispatch(saveChanges()),
        fetchUserProfile: () => dispatch(fetchUserProfile())
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ProfileScreen);

