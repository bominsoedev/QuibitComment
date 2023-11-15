// Comment.tsx
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Avatar} from 'react-native-elements';

interface CommentProps {
    username: string;
    text: string;
}

const Comment: React.FC<CommentProps> = ({username, text}) => {
    return (
        <View style={{zIndex:1000}}>
            <View style={styles.container}>
                <Avatar
                    rounded
                    size="small"
                    title={username.charAt(0)}
                    titleStyle={{color: 'white'}}
                    containerStyle={styles.avatar}
                    source={require('../assets/Ellipse18.png')}
                />
                <View style={styles.commentContainer}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={styles.username}>{username}</Text>
                        <TouchableOpacity>
                            <Image source={require('../assets/Vector.png')}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={{fontSize: 16}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna otya but tempor incididunt ut labore ...</Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{
                    marginVertical: 5,
                    flex: 1,
                    marginLeft: 60,
                }}>
                    <View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <View>
                                <Text style={styles.countText}>12h</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <TouchableOpacity style={{marginRight:5}}>
                                    <Image source={require('../assets/like.png')}/>
                                </TouchableOpacity>
                                <Text style={styles.countText}>9</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <TouchableOpacity style={{marginRight:5}}>
                                    <Image source={require('../assets/reply.png')}/>
                                </TouchableOpacity>
                                <Text style={styles.countText}>3</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        zIndex: 1000,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    avatar: {
        marginRight: 8,
        backgroundColor: 'black'
    },
    commentContainer: {
        flex: 1,
        marginLeft: 4,
        padding: 15,
        backgroundColor: '#F1F2F6',
        borderRadius: 8,
    },
    username: {
        fontWeight: 'bold',
        marginBottom: 4,
        color: '#6B6B6B',
    },
    countText:{
        fontWeight: 'bold',
        color: '#6B6B6B',
        marginRight: 30
    }
});

export default Comment;
