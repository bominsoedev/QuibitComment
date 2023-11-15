// Reply.tsx
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-elements';

const Reply: React.FC<ReplyProps> = ({username, text}) => {
    return (
        <View style={{position: 'relative'}}>
            <View style={styles.container}>
                <Avatar
                    rounded
                    size="small"
                    title={username.charAt(0)}
                    titleStyle={{color: 'black'}}
                    containerStyle={styles.avatar}
                />
                <View style={styles.replyContainer}>
                    <Text style={styles.username}>{username}</Text>
                    <Text>{text}</Text>
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
        bottom:30,
        width: 30,
        height: 70,
        borderLeftWidth:2,
        borderBottomWidth:2,
        borderColor:'#6B6B6B',
        borderBottomStartRadius:15
    },
    avatar: {
        marginRight: 8,
        backgroundColor: 'white'
    },
    replyContainer: {
        position:'relative',
        flex: 1,
        padding: 8,
        backgroundColor: '#6B6B6B',
        borderRadius: 8,
    },
    username: {
        fontWeight: 'bold',
        marginBottom: 4,
    },
});

export default Reply;
