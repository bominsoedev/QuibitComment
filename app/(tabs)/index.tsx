import {Button, ScrollView, StyleSheet, TextInput} from 'react-native';

import {Text, View} from '../../components/Themed';
import Reply from "../../components/Reply";
import Comment from "../../components/Comment";
import React from "react";

interface CommentData {
    id: number;
    username: string;
    text: string;
    replies: CommentData[];
}

const comments: CommentData[] = [
    {
        id: 2,
        username: 'User2',
        text: 'Replying to User1\'s comment.',
        replies: [
            {id: 3, username: 'User3', text: 'This is a reply to User2.', replies: []},
            {id: 4, username: 'User4', text: 'Another reply to User2.', replies: []},
        ],
    },
    {
        id: 1,
        username: 'User2',
        text: 'Replying to User1\'s comment.',
        replies: [
            {id: 3, username: 'User3', text: 'This is a reply to User2.', replies: []},
            {id: 5, username: 'User4', text: 'Another reply to User2.', replies: []},
        ],
    },
    // Add more comments and replies as needed
];

const renderComments = (commentsData: CommentData[]) => {
    return commentsData.map(comment => (
        <View key={comment.id}>
            <Comment username={comment.username} text={comment.text}/>
            <View>
                {renderReplies(comment.replies)}
            </View>
        </View>
    ));
};

const renderReplies = (replies: CommentData[]) => {
    if (replies.length === 0) {
        return null;
    }

    return (
        <View style={styles.repliesContainer}>
            {replies.map(reply => (
                <Reply key={reply.id} username={reply.username} text={reply.text}/>
            ))}
        </View>
    );
};
export default function TabOneScreen() {

    return (
        <View>
                {renderComments(comments)}

            <View style={styles.replyInputContainer}>
                <TextInput placeholder="Add a reply..." style={styles.input}/>
                <Button title="Post" onPress={() => console.log('Post reply')}/>
            </View>
        </View>
    );
}

// @ts-ignore
// @ts-ignore
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    replyInputContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    input: {
        flex: 1,
        marginRight: 8,
        padding: 8,
        borderColor: '#d1d1d1',
        borderWidth: 1,
        borderRadius: 8,
    },
    repliesContainer: {
        marginLeft: 16,
        paddingLeft: 16,
    },
});
