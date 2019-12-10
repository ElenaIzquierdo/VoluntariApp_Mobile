import * as React from 'react';
import {Actions} from "react-native-router-flux";
import { connect } from 'react-redux';
import {View, ActivityIndicator, Text} from 'react-native';
import {APP_COLORS} from "../constants/colors";
import Title from "../components/Title";
import {fetchEvent} from "../actions/provaActions";


class ProvaScreen extends React.Component{
    componentWillMount(){
        this.props.fetchEvent(1);
    }
    render(){
        if(this.props.isFetching){
            return (
                <View style = {{justifyContent: 'center', alignContent: 'center', width: '100%', height: '100%'}}>
                    <ActivityIndicator size="large" color={APP_COLORS.color_orange}/>
                </View>
            );
        }
        else{
            return(
                <View style={styles.viewStyle}>
                    <Title title={"Prova API"}/>
                    <Text>{this.props.event.name}</Text>
                </View>
            )
        }
    }
}

const styles = {
    viewStyle: {
        backgroundColor: APP_COLORS.color_neutral,
        width: '100%',
        height: '100%',
        flex: 1,
        paddingTop: '40%'
    },
}

const mapStateToProps = (state) => {
    return {
        event: state.provaReducer.event,
        isFetching: state.provaReducer.isFetching
    }
};

const  mapDispatchToProps = (dispatch)=>{
    return {
        fetchEvent: (id) => dispatch(fetchEvent(id)),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ProvaScreen);