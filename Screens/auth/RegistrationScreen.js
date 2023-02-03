import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableHighlight,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const initialState = {
  login: '',
  email: '',
  password: '',
}
export default function RegistrationScreen({navigation}) {
  const [userData, setUserData] = useState(initialState)
  const [isClicked, setIsClicked] = useState(true);
  const [isShowPsw, setIsShowPsw] = useState(false)
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const handleAnimationcloseIcon = () => {
  setIsClicked((prevState) => !prevState)
  };
  const handleChangeShowPsw = () => {
    setIsShowPsw((prevState) => !prevState)
  }
  const handleFormSubmit = () => {
    setUserData(initialState)
    setIsShowKeyboard(false)
    Keyboard.dismiss()
    console.log(userData)
    console.log(isShowKeyboard);
    console.log(Platform.OS);
  }

   Keyboard.addListener('keyboardDidHide', () => {
    setIsShowKeyboard(false)
    Keyboard.removeAllListeners('keyboardDidHide')
   })
  

   return (
     <View style={styles.container}>
       <TouchableWithoutFeedback onPress={() => {
         Keyboard.dismiss()
         setIsShowKeyboard(false)
       }
       }>
         <ImageBackground
        source={require('../../assets/images/photo_bg.jpg')}
         style={styles.imageBg}>
         <KeyboardAvoidingView
         behavior={Platform.OS === "ios" ? "padding" : null}
         >
          <View style={[styles.form, {marginBottom: isShowKeyboard ? -210 : 0}]}>
           <View style={[styles.userPhoto, {marginHorizontal: (Dimensions.get('window').width - 120 - 15 * 2) / 2}]}>
            <Icon 
               style={[styles.closeIcon,   {transform: [{ rotateZ: isClicked ? '45deg' : '0deg' }]}]} 
               name="closecircleo" 
               size={25} 
               color= {isClicked ? "#FF6C00" : '#E8E8E8'}  
               onPress={handleAnimationcloseIcon}/>
           </View>
           <Text style={styles.title}>Регистрация</Text>
            <TextInput
             style={styles.input}
             placeholder={'Логин'}
             placeholderTextColor={'#BDBDBD'}
             value={userData.login}
              onChangeText={(value) => setUserData((prevState) => ({...prevState, login: value}))}
             onFocus={() => setIsShowKeyboard(true)} 
             />
          
           <View style={{marginVertical: 16}}>
            <TextInput
              style={styles.input}
              placeholder={'Адрес электронной почты'}
               placeholderTextColor={'#BDBDBD'}
               value={userData.email}
               onChangeText={(value) => setUserData((prevState) => ({...prevState, email: value}))}
             onFocus={() => setIsShowKeyboard(true)} 
               />
             
           </View>
           <View style={ styles.pswContainer}>
             <TextInput
            style={styles.inputPsw} 
             placeholder={'Пароль'}
             placeholderTextColor={'#BDBDBD'}
               secureTextEntry={isShowPsw ? true : false}
               value={userData.password}
              onChangeText={(value) => setUserData((prevState) => ({...prevState, password: value}))}
             onFocus={() => setIsShowKeyboard(true)} 
               />
             <TouchableHighlight
               onPress={handleChangeShowPsw}
               activeOpacity={1}
               style={{ borderRadius: 8 }}>
               <Text style={ styles.pswtext}>{isShowPsw ? 'Показать' : 'Скрыть'}</Text>
           </TouchableHighlight>
           </View>
            <TouchableHighlight
             onPress={handleFormSubmit}
             underlayColor='#FF6C00'
               style={{ borderRadius: 100, backgroundColor: '#FF6C00', marginTop: 43 }}>
               <Text style={ [styles.registerButtonText, styles.text]}>Зарегистрироваться</Text>
           </TouchableHighlight>
            <TouchableHighlight
             
             underlayColor='transparent'
               >
                 <Text style={[styles.signInText, styles.text]}>Уже есть аккаунт?{ " "}
                   <Text onPress={() => navigation.navigate('Login')}>Войти</Text>
                 </Text>
            </TouchableHighlight>

          </View>
         </KeyboardAvoidingView>
        
      </ImageBackground>
       </TouchableWithoutFeedback>
      
      
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
    justifyContent: 'flex-end',
  },
  form: {
    paddingHorizontal: 15,
    paddingBottom: 78,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  text: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19, 

  },
  userPhoto: {
    position: 'relative',
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    marginTop: -60,
  },
  closeIcon: {
    position: 'absolute',
    top: 81,
    left: 107,
},
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '500',
    lineHeight: 35,
    letterSpacing: 0.01,
    marginVertical: 32
  },
  input: {
    backgroundColor: '#F6F6F6',
    borderWidth: 1, 
    borderColor: "#E8E8E8",
    borderRadius: 8,
    paddingLeft: 16,
    height: 50,
    fontFamily: 'Roboto',
    fontStyles: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 1.19,
    color: "#212121"
  },
  inputPsw: {
    flexGrow: 1,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderRightWidth: 0,
    borderColor: "#E8E8E8",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
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
  },
  pswtext: {  
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 14,
    backgroundColor: '#F6F6F6',
    borderWidth: 1, 
    borderColor: "#E8E8E8",
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderLeftWidth: 0,
    marginLeft: -16,
    color: '#1B4371'
  },
  registerButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    paddingVertical: 16
  },
  signInText: {
    color: '#1B4371',
    textAlign: 'center',
    marginTop: 16,
  }

  
});
