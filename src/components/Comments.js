import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {APP_COLORS} from "../constants/colors";
import Comment from '../components/Comment';

class Comments extends React.Component {
    constructor(props) {
        super(props);
    }

    _keyExtractor = (item) => item.id.toString();

    _renderItem = ({item}) => (
        <Comment
            id={item.id}
            image={item.image}
            user={item.author}
            content={item.content}
            created_date={item.created_date}
        />
    );

    pintarCommentaris(){
        return(
            <View>
                <FlatList
                    data={this.props.comments}
                    style={{width:"100%",height:"100%"}}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
            </View>
        )
    }

    render(){
        const {viewStyle, viewGeneralStyle, textStyle} = styles;
        return(
            <View style={viewGeneralStyle}>
                <View style={viewStyle}>
                    <Text style={textStyle}>Comentaris</Text>
                </View>
                <View style={{flex:1,height:"100%"}}>
                {this.pintarCommentaris()}
                </View>
            </View>
        );
    }

}

const styles ={
    viewGeneralStyle: {
        flex:1,
        height: '100%'
    },
    viewStyle: {
        flexDirection: 'row',
        backgroundColor: APP_COLORS.color_orange,
        height: '10%',
        marginTop: '5%',
        justifyContent: 'space-between',
        paddingRight: '4%',
        paddingLeft: '7%',
        alignItems: 'center'
    },
    textStyle: {
        color: APP_COLORS.color_neutral,
        fontSize: 17,
        fontWeight: 'bold'
    },
    textMarkedStyle: {
        color: APP_COLORS.color_green,
        fontSize: 17,
        fontWeight: 'bold'
    },
};

export default Comments;
