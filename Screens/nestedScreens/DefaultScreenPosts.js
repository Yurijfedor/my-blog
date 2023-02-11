import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { PostsList } from "../../components/postsList";
import { ImagesAssets } from "../../assets/imagesAsesets";


const DefaultPostsScreen = ({navigation, route }) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    if (route.params) {
       setPosts((prevState) => [...prevState, route.params])
    }
  }, [route.params])

  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <Image
          style={styles.userPhoto}
          source={ImagesAssets.foto1}
        />
        <View style={{marginLeft: 8}}>
              <Text style={{fontSize: 13, fontWeight: '700'}}>Svyatoslav Shaklak</Text>   
              <Text style={{fontSize: 11, fontWeight: '400'}}>Ukraine</Text>
        </View> 
      </View> 
      <PostsList posts={ posts} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  userInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  userPhoto: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: 'gray' 
  },
});


export default DefaultPostsScreen;