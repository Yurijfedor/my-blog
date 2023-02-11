import React from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

export const PostsList = ({ posts, navigation }) => {
  // const location = posts.currentLocation
  // console.log(posts);
  return (
    <FlatList
      data={posts}
      keyExtractor={(_, i) => i.toString()}
      renderItem={({ item }) => (
        <View style={{marginTop: 32}}>
          <Image
            style={styles.imgStyle}
            source={item.postsDate.photo}
          />
          <Text>{item.postsDate.name}</Text>
          <View style={styles.infoContainer}>
            <View style={{flexDirection: 'row'}}>
              <EvilIcons onPress={() => navigation.navigate('Comment')} name="comment" size={24} color="black" />
              <Text>0</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <EvilIcons onPress={() => navigation.navigate('Map', { ...item.postsDate.currentLocation } )} name="location" size={24} color="black" />
              <Text>{ item.postsDate.location}</Text>
            </View>  
          </View>
        </View> 
      )}
    />
  );
};

const styles = StyleSheet.create({
  imgStyle: {
    width: '100%',
    height: 240,
    borderRadius: 10,
    backgroundColor: 'black' 
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10
  },

});