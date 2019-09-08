import * as React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text } from 'react-native-ui-kitten';
import {Header} from 'react-native-elements';
import ForumTheme from '../components/ForumTheme';
import {APP_COLORS} from "../constants/colors";
import { connect } from 'react-redux';
import {Actions} from "react-native-router-flux";
import BottomNav from "../components/BottomNav";
import {FontAwesome} from "@expo/vector-icons";

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

    pintarFiltres(){
        return(
            <View style={styles.viewFilterStyle}>
                <FontAwesome name='filter' size={25} color= {APP_COLORS.text_color} style={styles.filterIconStyle}/>
                <View style={styles.viewTextFilterStyle}>
                    <Text style={styles.textFilterStyle}>Temes oberts, tancats</Text>
                    <Text style={styles.textFilterStyle}>Ordenat per data</Text>
                </View>
            </View>
        )
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
                    {this.pintarFiltres()}
                    {this.pintarTemesOberts()}
                    {this.pintarTemesTancats()}
                </ScrollView>
                <BottomNav selected={"forum"}/>
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
    },
    filterIconStyle: {
        marginLeft: '4%',
        marginTop: '3%',
        marginBottom: '3%'
    },
    textFilterStyle:{
        color: APP_COLORS.text_color,
        fontSize: 14,
    },
    viewFilterStyle: {
        flexDirection: 'row',
        borderBottomColor: APP_COLORS.text_color,
        borderBottomWidth: 0.6,
        width: '95%',
        alignSelf: 'center'
    },
    viewTextFilterStyle: {
        marginTop: '2%',
        marginLeft: '5%'
    }
});

const mapStateToProps = (state) => {
    return {
        themes_open: state.forumReducer.themes_open,
        themes_close: state.forumReducer.themes_close,
    }
};

const  mapDispatchToProps = (dispatch)=>{
    return {
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ForumScreen)

