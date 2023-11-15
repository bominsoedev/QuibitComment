import {Animated, Button, ScrollView, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import {Text, View} from '../../components/Themed';
import Reply from "../../components/Reply";
import Comment from "../../components/Comment";
import React, {useState} from "react";
import {Avatar} from "react-native-elements";


interface CommentData {
    id: number;
    username: string;
    text: string;
    replies: CommentData[];
}

const comments: CommentData[] = [
    {
        id: 2,
        username: 'Alex John',
        text: 'Replying to User1\'s comment.',
        replies: [
            {id: 3, username: 'User3', text: 'This is a reply to User2.', replies: []},
            {id: 4, username: 'User4', text: 'Another reply to User2.', replies: []},
            {id: 5, username: 'User5', text: 'Another reply to User2.', replies: []},
            {id: 6, username: 'User6', text: 'Another reply to User2.', replies: []},
            {id: 7, username: 'User7', text: 'Another reply to User2.', replies: []},
            {id: 8, username: 'User8', text: 'Another reply to User2.', replies: []},
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
];
export default function TabOneScreen() {
    const [showReplies, setShowReplies] = useState(false);

    const renderComments = (commentsData: CommentData[]) => {
        return commentsData.map(comment => (
            <View key={comment.id}>
                <Comment username={comment.username} text={comment.text}/>
                <View>
                    {renderReplies(comment.replies)}
                    {comment.replies.length > 1 && !showReplies && (
                        <View style={styles.repliesContainer}>
                            <View style={{position: 'relative'}}>
                                <View style={styles.more_container}>
                                    <TouchableOpacity onPress={handleViewMoreReplies}>
                                        <Text style={styles.viewMoreReplies}>View more {comment.replies.length -1} comments ...</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.newView2}>
                                </View>
                            </View>
                        </View>
                    )}
                </View>
            </View>
        ));
    };
    const handleViewMoreReplies = () => {
        setShowReplies(true);
    };
    const renderReplies = (replies: CommentData[]) => {
        if (!showReplies || replies.length === 0) {
            return (
                <View style={styles.repliesContainer}>
                    <Reply key={replies[0].id} username={replies[0].username} text={replies[0].text}/>
                </View>
            )
        }

        return (
            <View style={styles.repliesContainer}>
                {replies.map(reply => (
                    <Reply key={reply.id} username={reply.username} text={reply.text}/>
                ))}
            </View>
        );
    };
    return (
        <View style={styles.container}>
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
    more_container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 16,
        marginBottom: 10,
    },
    replyInputContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    input: {
        flex: 1,
        marginRight: 8,
        padding: 8,
        borderColor: '#6B6B6B',
        borderWidth: 1,
        borderRadius: 8,
    },
    repliesContainer: {
        marginLeft: 16,
        paddingLeft: 16,
    },
    viewMoreReplies: {
        fontWeight: 'bold',
        marginVertical: 4,
        color: '#6B6B6B',
    },
    newView2: {
        position: 'absolute',
        left: -18,
        bottom: 20,
        width: 30,
        height: 60,
        borderLeftWidth: 2,
        borderBottomWidth: 2,
        borderColor: '#6B6B6B',
        borderBottomStartRadius: 15,
        backgroundColor: 'transparent'
    },
});
