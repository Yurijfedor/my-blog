import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, TextInput, TouchableHighlight, TouchableOpacity, Dimensions, Image, Alert } from "react-native";
import { FontAwesome5, SimpleLineIcons, Feather } from '@expo/vector-icons';
import * as Location from 'expo-location'
import { Camera } from 'expo-camera'

const initialState = {
  photo: "",
  name: "",
  location: "",
}
const CreatePost = ({navigation}) => {
  const [camera, setCamera] = useState(null)
  const [postsDate, setPostsDate] = useState(initialState)
  const [currentLocation, setCurrentLocation] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back);


  const takePhoto = async () => {
    const currentPhoto = await camera.takePictureAsync()
    let { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== 'granted') {
        Alert('Permission to access location was denied');
        return;
      }
    // let location = await Location.getCurrentPositionAsync()
    // setCurrentLocation(location)
    console.log(status);
    setPostsDate((prevState) => ({ ...prevState, photo: currentPhoto.uri }))
    
  }

   
   return (
     <View style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 16, paddingTop: 32 }}>
       
       <Camera type={type} ref={(ref) => setCamera(ref)} style={{overflow: 'hidden', borderRadius: 8, borderWidth: 10, borderColor: 'red', height: '30%', justifyContent: "center", alignItems: 'center' }}>
         {postsDate.photo && <View style={{position: 'absolute', top: 10, left: 10, borderColor: '#fff', borderWidth: 1}}>
           <Image source={{ uri: postsDate.photo }} style={{width: 100, height: 100}} />
           </View>}
         <View>
          <TouchableOpacity onPress={takePhoto} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 60, height: 60, borderRadius: 50, backgroundColor: 'rgba(255, 255, 255, 0.3)',  }}>
            <FontAwesome5 name="camera" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </View>
       </Camera>
       
       <Text style={{ marginTop: 8, fontSize: 16, color: '#BDBDBD' }}>Загрузите фото</Text>

       <TextInput
         placeholder="Name... "
         value={postsDate.name}
         onChangeText={(value) => {setPostsDate((prevState) => ({...prevState, name: value}))}}
         style={{height: 50, marginTop: 20, borderBottomColor: '#E8E8E8', borderBottomWidth: 1}}
       />

       <View style={{
          flexDirection: "row",
          alignItems: "center",
         }}>
           <SimpleLineIcons style={{position: 'absolute', bottom: 10}} name="location-pin" size={24} color="#BDBDBD" />
        
          <View style={{flex: 1}}>
           <TextInput
             value={postsDate.location}
             onChangeText={(value) => { setPostsDate((prevState) => ({...prevState, location: value})) }}
              placeholder="Location... "
              style={{paddingLeft: 28, height: 50, marginTop: 15, borderBottomColor: '#E8E8E8', borderBottomWidth: 1}}
            />
          </View>
       </View>
       
       <TouchableHighlight
         onPress={() => {
           navigation.navigate('Posts', {postsDate})
             }}
             underlayColor='#FF6C00'
              style={{ borderRadius: 100, backgroundColor: '#F6F6F6', marginTop: 32 }}>
               <Text style={{color: '#BDBDBD',
                textAlign: 'center',
                paddingVertical: 16
                }}
                >Publish</Text>
       </TouchableHighlight>
       
        <TouchableHighlight
            //  onPress={handleFormSubmit}
             underlayColor='#FF6C00'
              style={{
                width: 70,
                marginHorizontal: (Dimensions.get('window').width - 70 - 16 * 2) / 2,
                borderRadius: 20,
                backgroundColor: '#F6F6F6',
                marginTop: 100
                }}>
               <Feather style={{textAlign: 'center', paddingVertical: 10}} name="trash-2" size={24} color="#BDBDBD" />
        </TouchableHighlight>

       
      </View>
    
  );
};


export default CreatePost
