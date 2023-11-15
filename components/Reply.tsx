// Reply.tsx
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-elements';

const Reply: React.FC<ReplyProps> = ({username, text}) => {
    return (
        <View style={{position: 'relative',marginBottom:5}}>
            <View style={styles.container}>
                <Avatar
                    rounded
                    size="small"
                    title={username.charAt(0)}
                    titleStyle={{color: 'white'}}
                    containerStyle={styles.avatar}
                    source={require('../assets/Ellipse19.png')}
                />
                <View style={styles.replyContainer}>
                    <View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{marginRight:10}}>
                                <Text style={styles.username}>{username}</Text>
                            </View>
                            <View>
                                <Text style={styles.username}>{text}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.newView2}>
            </View>
        </View>
    );
};

interface ReplyProps {
    username: string;
    text: string;
}

const styles = StyleSheet.create({
    container: {
        zIndex:1000,
        top: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 16,
        marginBottom: 8,
        borderRadius: 8,
    },
    newView2: {
        position:'absolute',
        left: -18,
        bottom:20,
        width: 30,
        height: 130,
        borderLeftWidth:2,
        borderBottomWidth:2,
        borderColor:'#6B6B6B',
        borderBottomStartRadius:15
    },
    avatar: {
        marginRight: 8,
        backgroundColor: 'black'
    },
    replyContainer: {
        flex: 1,
        padding: 8,
    },
    username: {
        fontWeight: 'bold',
        marginBottom: 4,
        color: '#6B6B6B',
    },
});

export default Reply;
