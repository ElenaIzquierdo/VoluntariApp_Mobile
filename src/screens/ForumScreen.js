import * as React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button, Layout, Text, TopNavigation, TopNavigationProps } from 'react-native-ui-kitten';
import Header from '../components/Header';
import ForumTheme from '../components/ForumTheme';
import {APP_COLORS} from "../constants/colors";
import { connect } from 'react-redux';

class ForumScreen extends React.Component{
    constructor(props) {
        super(props)
    }

    pintarTemes(){
        return this.props.themes.map((tema)=>{
            return(
                <ForumTheme key={tema.id} titleForum={tema.title} creator={tema.creator} finished={tema.finished} data={tema.data}/>
            )
        });
    }

    render(){
        return(
            <View style={styles.viewStyle}>
                <Header headerText="VoluntariApp"/>
                <ScrollView>
                    {this.pintarTemes()}
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
});

const mapStateToProps = (state) => {
    return {
        themes: state.forumReducer.themes,
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ForumScreen)

