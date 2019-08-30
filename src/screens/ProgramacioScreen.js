import * as React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Button, Layout, Text, TopNavigation, TopNavigationProps } from 'react-native-ui-kitten';
import {Header} from 'react-native-elements';
import {APP_COLORS} from "../constants/colors";
import { connect } from 'react-redux';
import {Actions} from "react-native-router-flux";
import Week from "../components/Week";

class ProgramacioScreen extends React.Component{
    constructor(props) {
        super(props)
    }

    _keyExtractor = (item) => item.id.toString();

    _renderSetmana = ({item}) => (
        <Week name={item.name} id={item.id}/>
    );

    render(){
        return(
            <View style={styles.viewStyle}>
                <Header
                    leftComponent={{ icon: 'menu', color: APP_COLORS.color_neutral }}
                    centerComponent={{ text: 'VoluntariApp', style: { color: APP_COLORS.color_neutral, fontSize: 25, fontWeight: 'bold' } }}
                    rightComponent={{ icon: 'home', color: APP_COLORS.color_neutral, onPress: () => Actions.home()}}
                    backgroundColor={APP_COLORS.color_orange}
                />
                <FlatList
                    data={this.props.setmanes}
                    style={{width:"100%",height:"100%"}}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderSetmana}
                />

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
        setmanes: state.programacioReducer.setmanes,
    }

}

const  mapDispatchToProps = (dispatch)=>{
    return {
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProgramacioScreen)

