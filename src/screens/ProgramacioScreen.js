import * as React from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import {Header} from 'react-native-elements';
import {APP_COLORS} from "../constants/colors";
import { connect } from 'react-redux';
import {Actions} from "react-native-router-flux";
import Week from "../components/Week";
import BottomNav from "../components/BottomNav";
import {fetchWeeksForQuarter} from "../actions/programacioActions";

class ProgramacioScreen extends React.Component{
    constructor(props) {
        super(props)
    }

    componentWillMount(){
        this.props.fetchWeeksForQuarter("1");
    }

    _keyExtractor = (item) => item.id.toString();

    _renderSetmana = ({item}) => (
        <Week name={item.name} id={item.id} ass={item.attendance_avg} rate={item.rate_avg}/>
    );

    render(){
        if(this.props.isFetching){
            return(
                <View style = {{justifyContent: 'center', alignContent: 'center', width: '100%', height: '100%'}}>
                    <ActivityIndicator size="large" color={APP_COLORS.color_orange}/>
                </View>
            )
        }
        else{
            return(
                <View style={styles.viewStyle}>
                    <Header
                        leftComponent={{ icon: 'home', color: APP_COLORS.color_neutral,onPress: () => Actions.home()}}
                        centerComponent={{ text: 'VoluntariApp', style: { color: APP_COLORS.color_neutral, fontSize: 25, fontWeight: 'bold' } }}
                        rightComponent={{ icon: 'person', color: APP_COLORS.color_neutral, onPress: () => Actions.profile()}}
                        backgroundColor={APP_COLORS.color_orange}
                    />
                    <FlatList
                        data={this.props.setmanes}
                        style={{width:"100%",height:"100%"}}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderSetmana}
                    />
                    <BottomNav selected={"programacio"}/>
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
});


const mapStateToProps = (state) => {
    return {
        setmanes: state.programacioReducer.setmanes,
        isFetching: state.programacioReducer.isFetching,
    }

};

const  mapDispatchToProps = (dispatch)=>{
    return {
        fetchWeeksForQuarter: (quarter) => dispatch(fetchWeeksForQuarter(quarter)),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ProgramacioScreen)

