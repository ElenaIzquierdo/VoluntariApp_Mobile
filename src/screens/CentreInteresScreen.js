import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import {Header} from 'react-native-elements';
import {APP_COLORS} from "../constants/colors";
import { connect } from 'react-redux';
import {Actions} from "react-native-router-flux";
import SeparadorCI from '../components/SeparadorCI';
import BottomNav from "../components/BottomNav";
import {fetchExplicacions, fetchObjectius} from "../actions/centreInteresActions";

class CentreInteresScreen extends React.Component{
    constructor(props) {
        super(props)
    }

    componentWillMount(){
        this.props.fetchExplicacions(1);
        this.props.fetchObjectius(1);
    }

    render(){
        return(
            <View style={styles.viewStyle}>
                <Header
                    leftComponent={{ icon: 'home', color: APP_COLORS.color_neutral, onPress: () => Actions.home() }}
                    centerComponent={{ text: 'VoluntariApp', style: { color: APP_COLORS.color_neutral, fontSize: 25, fontWeight: 'bold' } }}
                    rightComponent={{ icon: 'person', color: APP_COLORS.color_neutral, onPress: () => Actions.profile()}}
                    backgroundColor={APP_COLORS.color_orange}
                />
                <SeparadorCI objectius={this.props.objectius} estat_actual={this.props.estat_actual}
                                explicacions={this.props.explicacions}/>
                <BottomNav selected={"ci"}/>
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
});


const mapStateToProps = (state) => {
    return {
        objectius: state.centreinteresReducer.objectius,
        estat_actual: state.centreinteresReducer.estat_actual,
        explicacions: state.centreinteresReducer.explicacions,
    }
};

const  mapDispatchToProps = (dispatch)=>{
    return {
        fetchExplicacions: (centreInteres_id) => dispatch(fetchExplicacions(centreInteres_id)),
        fetchObjectius: (centreInteres_id) => dispatch(fetchObjectius(centreInteres_id))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(CentreInteresScreen)

