import * as React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button, Layout, Text, TopNavigation, TopNavigationProps } from 'react-native-ui-kitten';
import {Header} from 'react-native-elements';
import ForumTheme from '../components/ForumTheme';
import {APP_COLORS} from "../constants/colors";
import { connect } from 'react-redux';
import {Actions} from "react-native-router-flux";

class ForumScreen extends React.Component{
    constructor(props) {
        super(props)
    }

    pintarTemesOberts(){
        return this.props.themes_open.map((tema)=>{
            return(
                <ForumTheme key={tema.id} titleForum={tema.title} creator={tema.creator} finished={tema.finished} data={tema.data}/>
            )
        });
    }

    pintarTemesTancats(){
        return this.props.themes_close.map((tema)=>{
            return(
                <ForumTheme key={tema.id} titleForum={tema.title} creator={tema.creator} finished={tema.finished} data={tema.data}/>
            )
        });
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
                <ScrollView>
                    <Text style={styles.text} category='h6'>Temes oberts</Text>
                    {this.pintarTemesOberts()}

                    <Text style={styles.textTancat} category='h6'>Temes tancats</Text>
                    {this.pintarTemesTancats()}
                </ScrollView>
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
        color: APP_COLORS.color_green,
        alignSelf: 'center'

    },

    textTancat:{
        marginVertical: 16,
        color: APP_COLORS.color_green,
        alignSelf: 'center'
    }
});

const mapStateToProps = (state) => {
    return {
        themes_open: state.forumReducer.themes_open,
        themes_close: state.forumReducer.themes_close,
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ForumScreen)

