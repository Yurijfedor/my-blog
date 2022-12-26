import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
   return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/images/photo_bg.jpg')}
        style={styles.imageBg}>
        <View style={styles.form}>
          <View style={styles.userPhoto}></View>
            <TextInput
             style={styles.input}
             placeholder={'Логин'}
             placeholderTextColor={'#BDBDBD'}
              />
          
           <View style={{marginVertical: 16}}>
            <TextInput
              style={styles.input}
              placeholder={'Адрес электронной почты'}
              placeholderTextColor={'#BDBDBD'}/>
           </View>
           <View style={ styles.pswContainer}>
             <TextInput
               style={styles.input} 
            
             placeholder={'Пароль'}
             placeholderTextColor={'#BDBDBD'}
               secureTextEntry={true}
            clearButtonMode='always'
           />
             <Text style={ styles.pswtext}>Показать</Text>
           </View>
            
        </View>
      </ImageBackground>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: 'center',
    // alignItems: 'center'
  },
  form: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: 550,
    marginTop: 263,
  },
  userPhoto: {
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    marginTop: -60,
    marginHorizontal: 100 / 2
  },
  input: {
    backgroundColor: '#F6F6F6',
    borderWidth: 1, 
    borderColor: "#E8E8E8",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    marginHorizontal: 16,
    paddingLeft: 16,
    height: 50,
    fontFamily: 'Roboto',
    fontStyles: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 1.19,
    color: "#212121"
  },
  pswContainer: {
    flexDirection: 'row',
    width: 400
    // flex: 1
   
  },
  pswtext: {
    flexBasis: 100,
    paddingTop: 15,
    backgroundColor: '#F6F6F6',
     borderWidth: 1, 
    borderColor: "#E8E8E8",
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    marginLeft: -16,
    borderLeftWidth: 0,
    // justifyContent: 'center',
    // alignItems: 'center'
    // padding: 10,
    // margin: 5,
    // alignItems: 'center',
  }
  
});
