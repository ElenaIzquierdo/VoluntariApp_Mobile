import * as React from 'react';
import {StyleSheet, View, ScrollView, TouchableHighlight, ActivityIndicator} from 'react-native';
import { Text } from 'react-native-ui-kitten';
import {Header, CheckBox} from 'react-native-elements';
import ForumTheme from '../components/ForumTheme';
import {APP_COLORS} from "../constants/colors";
import { connect } from 'react-redux';
import {Actions} from "react-native-router-flux";
import BottomNav from "../components/BottomNav";
import {FontAwesome} from "@expo/vector-icons";
import Modal from 'react-native-modalbox';
import Button from "../components/Button";
import {closeModal, fetchClosedForumTopics, fetchOpenedForumTopics, changeFilterProperty, fetchFilteredTopics} from "../actions/forumActions";


class ForumScreen extends React.Component{
    constructor(props) {
        super(props)
    }

    componentWillMount(){
        this.props.fetchClosedForumTopics("created_date");
        this.props.fetchOpenedForumTopics("created_date");
    }

    pressOkModal(){
        if(!this.props.filters["opened"] && !this.props.filters["closed"]){
            this.props.changeFilterProperty("opened")
            this.props.changeFilterProperty("closed")
        }

        if(this.props.filters["order_by_name"]){
            this.props.fetchClosedForumTopics("title");
            this.props.fetchOpenedForumTopics("title");
        }
        else{
            this.props.fetchClosedForumTopics("created_date");
            this.props.fetchOpenedForumTopics("created_date");
        }

        this.props.closeModal()
    }

    renderOpenTopics(){
        if(this.props.filters["opened"]){
            return this.props.opened_topics.map((tema)=>{
                return(
                    <ForumTheme key={tema.id} titleForum={tema.title} creator={tema.creator} finished={tema.finished} data={tema.created_date}/>
                )
            });
        }
    }

    renderClosedTopics(){
        if(this.props.filters["closed"]){
            return this.props.closed_topics.map((topic)=>{
                return(
                    <ForumTheme key={topic.id} titleForum={topic.title} creator={topic.creator} finished={topic.finished} data={topic.created_date}/>
                )
            });
        }
    }

    renderFilters(){
        return(
            <View style={styles.viewFilterStyle}>
                <FontAwesome name='filter' size={25} color= {APP_COLORS.text_color} style={styles.filterIconStyle}
                             onPress={()=>this.props.closeModal()}/>
                <View style={styles.viewTextFilterStyle}>
                    <Text style={styles.textFilterStyle}>Temes oberts, tancats</Text>
                    <Text style={styles.textFilterStyle}>Ordenat per data</Text>
                </View>
                <Button colorButton={APP_COLORS.color_checked} marginL={"27%"} text={"Nou"} path={() => Actions.newforumtheme()} width={"15%"}/>
            </View>
        )
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
                    <Header
                        leftComponent={{ icon: 'home', color: APP_COLORS.color_neutral, onPress: () => Actions.home() }}
                        centerComponent={{ text: 'VoluntariApp', style: { color: APP_COLORS.color_neutral, fontSize: 25, fontWeight: 'bold' } }}
                        rightComponent={{ icon: 'person', color: APP_COLORS.color_neutral, onPress: () => Actions.profile()}}
                        backgroundColor={APP_COLORS.color_orange}
                    />
                    <Modal style={styles.modalStyle} position={"center"} isOpen={this.props.isOpen}>
                        <Text style={styles.modalTitle}>Filtrar per</Text>
                        <View style={styles.viewTextFilterStyle}>
                                <CheckBox title={"Temes tancats"} checked={this.props.filters["closed"]} size={14} textStyle={styles.textFilterStyle}
                                            center={true} checkedColor={APP_COLORS.color_checked} containerStyle={styles.checkBoxContainerStyle}
                                            onPress={()=>this.props.changeFilterProperty("closed")}/>
                                <CheckBox title={"Temes oberts"} checked={this.props.filters["opened"]} size={14} textStyle={styles.textFilterStyle}
                                            center={true} checkedColor={APP_COLORS.color_checked} containerStyle={styles.checkBoxContainerStyle}
                                            onPress={()=>this.props.changeFilterProperty("opened")}/>
                        </View>
                        <Text style={styles.modalTitle}>Ordenar per</Text>
                        <View style={styles.viewTextFilterStyle}>
                                <CheckBox title={"Data ceació"} checked={this.props.filters["order_by_date"]} size={14} textStyle={styles.textFilterStyle}
                                          center={true} checkedColor={APP_COLORS.color_checked} containerStyle={styles.checkBoxContainerStyle}
                                          onPress={()=>this.props.changeFilterProperty("order_by_date")} checkedIcon='dot-circle-o' uncheckedIcon='circle-o' />
                                <CheckBox title={"Títol"} checked={this.props.filters["order_by_name"]} size={14} textStyle={styles.textFilterStyle}
                                          center={true} checkedColor={APP_COLORS.color_checked} containerStyle={styles.checkBoxContainerStyle}
                                          onPress={()=>this.props.changeFilterProperty("order_by_name")} checkedIcon='dot-circle-o' uncheckedIcon='circle-o' />
                        </View>
                        <View>
                            <TouchableHighlight style={{paddingRight: '5%'}} onPress={this.pressOkModal.bind(this)}>
                                <Text style={{color:APP_COLORS.color_checked}} >Ok</Text>
                            </TouchableHighlight>
                        </View>
                    </Modal>
                    <ScrollView>
                        {this.renderFilters()}
                        {this.renderOpenTopics()}
                        {this.renderClosedTopics()}
                    </ScrollView>
                    <BottomNav selected={"forum"}/>
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
    },
    modalStyle: {
        height: '50%',
        width: '75%'
    },
    modalTitle: {
        color: APP_COLORS.text_color,
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: '4%',
        paddingLeft: '2%',
        alignSelf: 'center'
    },
    checkBoxContainerStyle: {
        backgroundColor: APP_COLORS.color_neutral
    }
});

const mapStateToProps = (state) => {
    return {
        opened_topics: state.forumReducer.opened_topics,
        closed_topics: state.forumReducer.closed_topics,
        isOpen: state.forumReducer.isOpen,
        isFetching: state.forumReducer.isFetching,
        filters: state.forumReducer.filters
    }
};

const  mapDispatchToProps = (dispatch)=>{
    return {
        closeModal: () => dispatch(closeModal()),
        fetchClosedForumTopics: (order) => dispatch(fetchClosedForumTopics(order)),
        fetchOpenedForumTopics: (order) => dispatch(fetchOpenedForumTopics(order)),
        changeFilterProperty: (propertyName) => dispatch(changeFilterProperty(propertyName)),
        fetchFilteredTopics: (status,order) => dispatch(fetchFilteredTopics(status,order))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ForumScreen)

