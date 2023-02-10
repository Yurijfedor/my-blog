import React from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import { ImagesAssets } from '../assets/imagesAsesets';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
  }
});

 export const PostsList = ({posts}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
       keyExtractor={(item, i) => i.toString()}
              renderItem={({ item }) => (
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
                  <Image
                    style={{width: 60, height: 60, borderRadius: 10, backgroundColor: 'gray' }}
                    source={item.postsDate.photo}
                  />
                    <View style={{marginLeft: 8}}>
                          <Text style={{fontSize: 13, fontWeight: '700'}}>{item.postsDate.name}</Text>   
                          <Text style={{fontSize: 11, fontWeight: '400'}}>{item.postsDate.location}</Text>
                    </View> 
                </View>
              )}
      />
    </View>
  );
};

