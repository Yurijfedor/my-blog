import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Dimensions } from "react-native";
import { FontAwesome5, SimpleLineIcons, Feather } from '@expo/vector-icons';

const CreatePost = ({navigation}) => {
   
   return (
    <View style={{flex: 1, backgroundColor: '#fff', paddingHorizontal: 16, paddingTop: 32}}>
      <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: 160, backgroundColor: '#F6F6F6', borderRadius: 8, borderWidth: 1, borderColor: '#E8E8E8'}}>
        <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: 60, height: 60, borderRadius: 50, backgroundColor: '#fff'}}>
           <FontAwesome5 name="camera" size={24} color="#BDBDBD" />
         </View>
       </View> 
       <Text style={{ marginTop: 8, fontSize: 16, color: '#BDBDBD' }}>Загрузите фото</Text>
       <TextInput
         placeholder="Name... "
         style={{height: 50, marginTop: 20, borderBottomColor: '#E8E8E8', borderBottomWidth: 1}}
       />
       <View style={{
          flexDirection: "row",
          alignItems: "center",
         }}>
           <SimpleLineIcons style={{position: 'absolute', bottom: 10}} name="location-pin" size={24} color="#BDBDBD" />
        
          <View style={{flex: 1}}>
            <TextInput
              placeholder="Location... "
              style={{paddingLeft: 28, height: 50, marginTop: 15, borderBottomColor: '#E8E8E8', borderBottomWidth: 1}}
            />
          </View>
       </View>
       
       <TouchableHighlight
            //  onPress={handleFormSubmit}
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
