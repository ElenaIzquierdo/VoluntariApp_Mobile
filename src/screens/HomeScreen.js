import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Layout, Text, TopNavigation, TopNavigationProps } from 'react-native-ui-kitten';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import CardModified from '../components/CardModified';
import {APP_COLORS} from "../constants/colors";
import {Card, Icon} from "react-native-elements";
import {changeIteratorParam} from "../actions/homeActions";

class HomeScreen extends React.Component{
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    next(){
        if(this.props.iterator === this.props.events.length-1){
            this.props.changeIteratorParam(0);
        }
        else{
            var iter = this.props.iterator +1;
            this.props.changeIteratorParam(iter);
        }
    }

    previous(){
        if(this.props.iterator === 0){
            this.props.changeIteratorParam(this.props.events.length-1);
        }
        else{
            var iter = this.props.iterator -1;
            this.props.changeIteratorParam(iter);
        }
    }

    render(){
        return(
            <View style={styles.viewStyle}>
                <Header headerText="VoluntariApp"/>
                <Text style={styles.text} category='h5'>Properes activitats</Text>
                <CardModified image={require('../images/casalfoto.jpg')} 
                        title={this.props.events[this.props.iterator].title} 
                        grup={this.props.events[this.props.iterator].grup} 
                        dia={this.props.events[this.props.iterator].dia} 
                        hora={this.props.events[this.props.iterator].hora}/>
                <View style={styles.footer}>
                    <Icon
                        raised
                        name='chevron-left'
                        type='evilicon'
                        color={APP_COLORS.color_green}
                        size={32}
                        onPress={this.previous}
                    />
                    <Icon
                        raised
                        name='chevron-right'
                        type='evilicon'
                        color={APP_COLORS.color_green}
                        size={32}
                        onPress={this.next}
                    />
                </View>
                <Button onPress = {() => Actions.forum()}>Forum</Button>
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
    text: {
        marginVertical: 16,
        color: APP_COLORS.text_color,
        alignSelf: 'center'

    },
    footer: {
        flexDirection: 'row',
        marginBottom: '15%',
        justifyContent: 'space-between',
        paddingRight: '15%',
        paddingLeft: '15%',
        paddingTop: '5%'
    },
});

const mapStateToProps = (state) => {
    return {
        events: state.homeReducer.events,
        iterator: state.homeReducer.iterator
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {
        changeIteratorParam: (i)=>dispatch(changeIteratorParam(i))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen)
