import * as React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import { Text } from 'react-native-ui-kitten';
import {Header, Avatar, Icon, CheckBox} from 'react-native-elements';
import {APP_COLORS} from "../constants/colors";
import { connect } from 'react-redux';
import {Actions} from "react-native-router-flux";
import {changeCheckedDay, updateProfilePicture, setTrueModifiedAttribute, setFalseModifiedAttribute, saveChanges} from "../actions/profileActions";

import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

import Button from "../components/Button";

//import ImagePicker from "react-native-image-picker";


class ProfileScreen extends React.Component{
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.getPermissionAsync();
      }
    
      getPermissionAsync = async () => {
          const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
      }

    _onPressButton(day) {
        if(!this.props.modified){
            this.props.setTrueModifiedAttribute()
        }
        this.props.changeCheckedDay(day);
    }

    _onPressCancelModify(){
        this.props.setFalseModifiedAttribute()
    }

    _onPressSave(){
        this.props.saveChanges()
    }


    pintarDies(){
        return(
            <View>
                    <CheckBox title={"Dilluns"} checked={this.props.user.dies[0]} size={14} textStyle={styles.infoStyle}
                              center={false} checkedColor={APP_COLORS.color_checked} containerStyle={styles.checkBoxContainerStyle}
                              onPress={this._onPressButton.bind(this,0)}/>
                    <CheckBox title={"Dimarts"} checked={this.props.user.dies[1]} size={14} textStyle={styles.infoStyle}
                              center={false} checkedColor={APP_COLORS.color_checked} containerStyle={styles.checkBoxContainerStyle}
                              onPress={this._onPressButton.bind(this,1)}/>
                    <CheckBox title={"Dimecres"} checked={this.props.user.dies[2]} size={14} textStyle={styles.infoStyle}
                              center={false} checkedColor={APP_COLORS.color_checked} containerStyle={styles.checkBoxContainerStyle}
                              onPress={this._onPressButton.bind(this,2)}/>
                    <CheckBox title={"Dijous"} checked={this.props.user.dies[3]} size={14} textStyle={styles.infoStyle}
                              center={false} checkedColor={APP_COLORS.color_checked} containerStyle={styles.checkBoxContainerStyle}
                              onPress={this._onPressButton.bind(this,3)}/>
                    <CheckBox title={"Divendres"} checked={this.props.user.dies[4]} size={14} textStyle={styles.infoStyle}
                              center={false} checkedColor={APP_COLORS.color_checked} containerStyle={styles.checkBoxContainerStyle}
                              onPress={this._onPressButton.bind(this,4)}/>
            </View>
        )
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1
          });
          console.log("SCREEN",result.uri)

          updateProfilePicture(result.uri)
    }

/*    pickImage = () => {
        ImagePicker.launchImageLibrary(response => {
            console.log("response", response)
            if(response.uri) {
                updateProfilePicture(respone.uri)
            }
        })
    }*/

    displayButtons(){
        if(this.props.modified){
            return(
                <View style={styles.rowStyle}>
                    <TouchableHighlight style={{paddingLeft: '5%', paddingTop: '3%'}} onPress={this._onPressCancelModify.bind(this)}>
                        <Text style={{color:APP_COLORS.color_darkred}}>Cancel·lar</Text>
                    </TouchableHighlight>
                    <Button text={"Guardar"} colorButton={APP_COLORS.color_green} width={"15%"} path={this._onPressSave.bind(this)}/>
                </View>
            )
        }
    }

    render(){
        const { viewStyle, nameStyle, viewnamephotoStyle, correuStyle, infoStyle, viewinfoStyle, buttonChangesStyle } = styles;
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
                            source={{uri: this.props.user.profilephotoURI}}
                            showEditButton={true}
                            onEditPress={this._pickImage}
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
                <View style={buttonChangesStyle}>
                    {this.displayButtons()}
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
    },
    rowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: '2%',
        paddingRight: '3%',
    },
    buttonChangesStyle: {
        paddingBottom: '8%'
    }
});

const mapStateToProps = (state) => {
    return {
        user: state.profileReducer.user,
        modified: state.profileReducer.modified
    }
};

const  mapDispatchToProps = (dispatch)=>{
    return {
        changeCheckedDay : (day) => dispatch(changeCheckedDay(day)),
        updateProfilePicture : (uri) => dispatch(updateProfilePicture(uri)),
        setTrueModifiedAttribute : () => dispatch(setTrueModifiedAttribute()),
        setFalseModifiedAttribute : () => dispatch(setFalseModifiedAttribute()),
        saveChanges : () => dispatch(saveChanges())
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ProfileScreen);

