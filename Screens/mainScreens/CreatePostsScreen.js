import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput, TouchableHighlight, TouchableOpacity, Dimensions, Image, Alert } from "react-native";
import { FontAwesome5, SimpleLineIcons, Feather, EvilIcons } from '@expo/vector-icons';
import * as Location from 'expo-location'
import { Camera } from 'expo-camera'

const initialState = {
  photo: "",
  name: "",
  location: "",
  currentLocation: {},
}
const CreatePost = ({navigation}) => {
  const [camera, setCamera] = useState(null)
  const [postsDate, setPostsDate] = useState(initialState)
  const [type, setType] = useState(Camera.Constants.Type.back);


  const takePhoto = async () => {
    const currentPhoto = await camera.takePictureAsync()
    let { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== 'granted') {
        Alert('Permission to access location was denied');
        return;
      }
    let location = await Location.getCurrentPositionAsync()
    setPostsDate((prevState) => ({
      ...prevState,
      currentLocation: location.coords, 
      photo: currentPhoto.uri
    }))
  }

  const publishPost = async () => {
     navigation.navigate('DefaultScreen', { postsDate })
  }
   
  return (
    <View style={styles.container }>
      <Camera type={type} ref={(ref) => setCamera(ref)} style={styles.camera}>
        {postsDate.photo &&
        <View style={styles.imgContainer}>
          <Image source={{ uri: postsDate.photo }} style={styles.photo} />
        </View>}
        <View>
          <TouchableOpacity onPress={takePhoto} style={styles.makePhotoButton}>
            <FontAwesome5 name="camera" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </View>
      </Camera>
      <Text style={{ marginTop: 8, fontSize: 16, color: '#BDBDBD' }}>Загрузите фото</Text>
      <TextInput
        placeholder="Name... "
        value={postsDate.name}
        onChangeText={(value) => {setPostsDate((prevState) => ({...prevState, name: value}))}}
        style={styles.nameInput}
      />
      <View style={styles.locationInputContainer}>
        <SimpleLineIcons style={{position: 'absolute', bottom: 10}} name="location-pin" size={24} color="#BDBDBD" />
        <View style={{flex: 1}}>
          <TextInput
            value={postsDate.location}
            onChangeText={(value) => { setPostsDate((prevState) => ({...prevState, location: value})) }}
            placeholder="Location... "
            style={styles.locationInput}
          />
        </View>
      </View>
      <TouchableHighlight
        onPress={publishPost}
        underlayColor='#FF6C00'
        style={styles.publishButton}>
          <Text style={styles.publishButtonText}>Publish</Text>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor='#FF6C00'
        style={styles.deleteButton}>
          <Feather style={{textAlign: 'center', paddingVertical: 10}} name="trash-2" size={24} color="#BDBDBD" />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 32
  },
  camera: {
    overflow: 'hidden',
    borderRadius: 8,
    borderWidth: 10,
    borderColor: 'red',
    height: '30%',
    justifyContent: "center",
    alignItems: 'center' 
  },
  imgContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10
  },
  photo: {
    borderRadius: 10,
    width: 80,
    height: 80
  },
  makePhotoButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.3)', 
  },
  nameInput: {
    height: 50,
    marginTop: 20,
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1
  },
  locationInputContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  locationInput: {
    paddingLeft: 28,
    height: 50,
    marginTop: 15,
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1
  },
  publishButton: {
    borderRadius: 100,
    backgroundColor: '#F6F6F6',
    marginTop: 32 
  },
  publishButtonText: {
    color: '#BDBDBD',
    textAlign: 'center',
    paddingVertical: 16
  },
  deleteButton: {
    width: 70,
    marginHorizontal: (Dimensions.get('window').width - 70 - 16 * 2) / 2,
    borderRadius: 20,
    backgroundColor: '#F6F6F6',
    marginTop: 100
  },

})

export default CreatePost
