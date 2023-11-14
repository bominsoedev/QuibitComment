// Comment.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';

interface CommentProps {
    username: string;
    text: string;
}

const Comment: React.FC<CommentProps> = ({ username, text }) => {
    return (

            <View style={styles.container}>
                <Avatar
                    rounded
                    size="small"
                    title={username.charAt(0)}
                    titleStyle={{color:'black'}}
                    containerStyle={styles.avatar}
                />
                <View style={styles.commentContainer}>
                    <Text style={styles.username}>{username}</Text>
                    <Text>{text}</Text>

                </View>
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        zIndex:1000,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    avatar: {
        marginRight: 8,
        backgroundColor:'white'
    },
    commentContainer: {
        flex: 1,
        marginLeft: 4,
        padding: 8,
        backgroundColor: '#d1d1d1',
        borderRadius: 8,
    },
    username: {
        fontWeight: 'bold',
        marginBottom: 4,
    },
});

export default Comment;
