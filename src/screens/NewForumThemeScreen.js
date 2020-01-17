import * as React from 'react';
import {StyleSheet, TouchableHighlight, View, Picker} from 'react-native';
import { Text } from 'react-native-ui-kitten';
import {APP_COLORS} from "../constants/colors";
import {Actions} from "react-native-router-flux";
import { Header, Input } from 'react-native-elements';
import { connect } from 'react-redux';
import BottomNav from "../components/BottomNav";
import Button from "../components/Button";

import {changeCreateTopicFormProperty, createForumTopic, changeErrorValue,
            resetValues} from "../actions/createForumTopicActions";

class NewForumThemeScreen extends React.Component{
    constructor(props) {
        super(props);
    }

    onPressAccept(){
        if(this.props.title != "" && this.props.group != "" && this.props.description != ""){
            const topicInfo = {
                title: this.props.title,
                group: this.props.group,
                description: this.props.description
            };
            this.props.resetValues()
            this.props.createForumTopic(topicInfo)
        }
        else{
            this.props.changeErrorValue(false)
        }
    }

    onPressCancel(){
        this.props.resetValues()
        Actions.forum()
    }

    render(){
        const {viewStyle, inputStyle, labelStyle, titleStyle, viewFormStyle, redTextStyle} = styles;
        return(
            <View style={viewStyle}>
                <Header
                    leftComponent={{ icon: 'home', color: APP_COLORS.color_neutral, onPress: () => Actions.home() }}
                    centerComponent={{ text: 'VoluntariApp', style: { color: APP_COLORS.color_neutral, fontSize: 25, fontWeight: 'bold' } }}
                    rightComponent={{ icon: 'person', color: APP_COLORS.color_neutral, onPress: () => Actions.profile()}}
                    backgroundColor={APP_COLORS.color_orange}
                />
                <View style={viewStyle}>
                    <Text style={titleStyle}>Crear nou tema pel fòrum</Text>
                    <View style={viewFormStyle}>
                        <Input label={"Títol"} inputStyle={inputStyle} labelStyle={labelStyle} value={this.props.title}
                                onChangeText={(text) => this.props.changeCreateTopicFormProperty("title",text)}/>
                        <Input label={"Descripció"} inputStyle={inputStyle} labelStyle={labelStyle} value={this.props.description}
                                onChangeText={(text) => this.props.changeCreateTopicFormProperty("description",text)}/>

                        <Text style={styles.labelTextStyle}>Grup</Text>
                        <Picker selectedValue={this.props.group}
                            style={{height: 50, width: 135}}
                            style={inputStyle}
                            onValueChange={(itemValue) => this.props.changeCreateTopicFormProperty("group",itemValue)}>

                            <Picker.Item label={this.props.group_choices[0]} value={this.props.group_choices[0]} />
                            <Picker.Item label={this.props.group_choices[1]} value={this.props.group_choices[1]} />
                            <Picker.Item label={this.props.group_choices[2]} value={this.props.group_choices[2]} />
                            <Picker.Item label={this.props.group_choices[3]} value={this.props.group_choices[3]} />
                            <Picker.Item label={this.props.group_choices[4]} value={this.props.group_choices[4]} />
                        </Picker>
                    </View>
                </View>
                {this.props.error_value ? <Text style={redTextStyle}>Tots els camps són obligatoris</Text>:null}
                <View style={{flexDirection: 'row', justifyContent: 'space-between', height: '7%'}}>
                    <TouchableHighlight style={{paddingLeft: '5%', paddingTop: '3%'}} onPress={this.onPressCancel.bind(this)}>
                        <Text style={{color:APP_COLORS.color_darkred}}>Cancel</Text>
                    </TouchableHighlight>
                    <Button colorButton={APP_COLORS.color_checked} text={"Crear"} path={this.onPressAccept.bind(this)}/>
                </View>
                <BottomNav selected={"forum"}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
   viewStyle: {
       height: '100%',
       width: '100%',
       backgroundColor: APP_COLORS.color_neutral,
       flex: 1
   },
    inputStyle: {
       fontSize: 15,
        marginLeft: '7%',
        color: APP_COLORS.text_color
    },
    labelStyle: {
        fontSize: 16,
        marginLeft: '3%',
        marginTop: '2%'
    },
    labelTextStyle: {
        fontSize: 16,
        marginLeft: '3%',
        marginTop: '2%',
        color: APP_COLORS.text_color,
        fontWeight: 'bold'
    },
    titleStyle: {
        color: APP_COLORS.text_color,
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: '4%',
        marginTop: '5%',
        alignSelf: 'center'
    },
    viewFormStyle: {
       alignContent: 'center',
        paddingTop: '15%'
    },
    redTextStyle: {
        fontSize: 15,
        marginLeft: '7%',
        color: APP_COLORS.color_darkred
    }
});

const mapStateToProps = (state) => {
    return {
        title: state.createForumTopicReducer.title,
        description: state.createForumTopicReducer.description,
        group: state.createForumTopicReducer.group,
        group_choices: state.createForumTopicReducer.group_choices,
        error_value: state.createForumTopicReducer.error_value
    }

};

const  mapDispatchToProps = (dispatch)=>{
    return {
        changeCreateTopicFormProperty : (propertyName, value) => dispatch(changeCreateTopicFormProperty(propertyName, value)),
        createForumTopic: (topicInfo) => dispatch(createForumTopic(topicInfo)),
        changeErrorValue: (value) => dispatch(changeErrorValue(value)),
        resetValues: () => dispatch(resetValues())
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(NewForumThemeScreen)
