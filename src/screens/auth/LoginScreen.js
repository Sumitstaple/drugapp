import React, {Component} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image, 
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import { insertNewUser } from '../../databases/Schema';
import { useNavigation } from '@react-navigation/native';
import { getUsers } from '../../databases/Schema';

export default class LoginScreen extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      showform:'login',
      username:'',
      useremail:'',
      password:'',
      conpassword:'',
      showoffbtn:'hide',
      signupbtn:'hide',
      users:[],

    };

  }

componentDidMount(){
  getUsers().then((data) => {
        if(data.length > 0){
          this.props.navigation.navigate('Home');
        }
    }).catch((error) => {
        this.setState({ settingsData: [] });
  });

}  
ChangeForm(form){
 
this.setState({
      showform:form,
      nameError:''
    })

}
createNewUser(){

  // Signup Validation

  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(this.state.username == ""){
    this.setState({
      nameError:'Please Enter User Name!' 
    })
  }
  else if(this.state.useremail == ""){
    this.setState({
      nameError:'Please Enter User Email!'
    })
  }
  else if(this.state.password == ""){
    this.setState({
      nameError:'Please Enter Password!'
    })
  }
  else if(this.state.conpassword != this.state.password){
    // alert();
    this.setState({
      nameError:'Confirm Password Should be Same!'
    })
  }
  else if (reg.test(this.state.useremail) === false) {
    this.setState({
      nameError:'Please enter a valid Email!'
    })
  }
  else{

     const userData = {
      id: Math.floor(Date.now() / 1000),
      username: this.state.useremail,
      useremail: this.state.useremail,
      password: this.state.password,
      conpassword: this.state.conpassword
    };

    insertNewUser(userData).then((success) => {
      console.log(`new User created`);
     this.props.navigation.navigate('Home'); 
    }).catch((error) => {
        console.log(`Insert new User error ${error}`);
    });

  }

    
}
onChangeUserPass(value){
  console.log(this.state.showoffbtn)
  if(value != ""){
    this.setState({
      password:value,
    })
  }
  else{
    this.setState({
      password:'',
    })
  }
}

onChangeUserConPass(value){
  if(value != ""){
    this.setState({
      conpassword:value,
      showoffbtn:"show",
    })
  }
  else{
    this.setState({
      conpassword:'',
      showoffbtn:"hide",
    })
  }
}

onChangeUserName(value){
  if(value != ""){
    this.setState({
      username:value,
    })
  }
  else{
    this.setState({
      username:''
    })
  }
}

onChangeUserEmail(value){
  if(value != ""){
    this.setState({
      useremail:value,
    })
  }
  else{
    this.setState({
      useremail:'',
    })
  }
}

onChangeUserPass2(value){

  if(value != ""){
    this.setState({
      password:value,
    })
  }
  else{ 
    this.setState({
      password:'',
    })
  }
}

onChangeUserConPass2(value){
  if(value != ""){
    this.setState({
      conpassword:value,
      signupbtn:"show",
    })
  }
  else{
    this.setState({
      conpassword:'',
      signupbtn:"hide",
    })
  }
}

createNewOfflineUser(){
  
 //Offline Form Validation 

 if(this.state.password == ""){
    this.setState({
      nameError:'Please Enter Password!'
    })
 }
 else if(this.state.password != this.state.conpassword){
   this.setState({
      nameError:'Confirm Password Should be Same!'
    })
 }
  else{

     const userData = {
      id: Math.floor(Date.now() / 1000),
      username: this.state.useremail,
      useremail: this.state.useremail,
      password: this.state.password,
      conpassword: this.state.conpassword
    };

    insertNewUser(userData).then((success) => {
      console.log(`new User created`);

    this.setState({
      password:'',
      conpassword:'',
    })

     this.props.navigation.navigate('Home'); 
    }).catch((error) => {
        console.log(`Insert new User error ${error}`);
    });

  }

    
}
render(){
  return (
    <View style={styles.mainBody}>

      <ScrollView
        keyboardShouldPersistTaps="handled"
        >
         <View style={{alignItems: 'center',flexDirection:'row',padding: 30}}>
         {this.state.showform == "login" &&     
          <Text style={styles.loginActive} onPress={() => this.ChangeForm('login')}>Offline</Text>
           }
           {this.state.showform != "login" &&     
          <Text style={styles.loginHeadStyle} onPress={() => this.ChangeForm('login')}>Offline</Text>
           }
           {this.state.showform == "signup" && 
          <Text style={styles.loginActive} onPress={() => this.ChangeForm('signup')}>Sign up </Text>
           }
           {this.state.showform != "signup" && 
          <Text style={styles.loginHeadStyle} onPress={() => this.ChangeForm('signup')}>Sign up </Text>
           }
        </View>
        {!!this.state.nameError && (
      
          <Text style={{textAlign: 'center',backgroundColor:'#f92028', alignSelf: 'stretch', color: "#fff",padding:7,marginLeft:15,marginRight:15,borderRadius:5,marginTop:10}}>{this.state.nameError}</Text>
        )}
        {this.state.showform == "login" &&
        <View>
          <KeyboardAvoidingView enabled>
           
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Create Secure Password" 
                placeholderTextColor="#8f8f8f"
                autoCapitalize="none"
                keyboardType="default"
                onChangeText={(userPass) =>
                  this.onChangeUserPass(userPass)
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
                secureTextEntry={true}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Confirm Secure Password" 
                placeholderTextColor="#8f8f8f"
                keyboardType="default"
                onChangeText={(conPass) =>
                  this.onChangeUserConPass(conPass)
                }
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            {this.state.showoffbtn == "show" &&
            <TouchableOpacity
              style={styles.buttonStyle2}
              activeOpacity={0.5}
              >
             
              <Text style={styles.buttonTextStyle} onPress={() => this.createNewOfflineUser()}>SAVE AND CONTINUE</Text>
              
            </TouchableOpacity>
          }
             {this.state.showoffbtn == "hide" &&
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              >
              <Text style={styles.buttonTextStyle}>SAVE AND CONTINUE</Text>
             
            </TouchableOpacity>
             }
          </KeyboardAvoidingView>
        </View>
        }
        {this.state.showform == "signup" &&
        <View>
          <KeyboardAvoidingView enabled>
            
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Enter Username" 
                placeholderTextColor="#8f8f8f"
                autoCapitalize="none"
                keyboardType="default"
                onChangeText={(userName) =>
                  this.onChangeUserName(userName)
                }
                returnKeyType="next"
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Enter Email" 
                placeholderTextColor="#8f8f8f"
                autoCapitalize="none"
                keyboardType="default"
                onChangeText={(userEmail) =>
                  this.onChangeUserEmail(userEmail)
                }
                returnKeyType="next"
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Create Secure Password" 
                placeholderTextColor="#8f8f8f"
                keyboardType="default"
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                onChangeText={(userPass) =>
                  this.onChangeUserPass2(userPass)
                }
                underlineColorAndroid="#f000"
                returnKeyType="next"
                secureTextEntry={true}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Confirm Secure Password" 
                placeholderTextColor="#8f8f8f"
                keyboardType="default"
                onChangeText={(conPass) =>
                  this.onChangeUserConPass2(conPass)      
                }
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                underlineColorAndroid="#f000"
                returnKeyType="next"
                secureTextEntry={true}
              />
            </View>
            {this.state.signupbtn == "show" &&
            <TouchableOpacity
              style={styles.buttonStyle2}
              activeOpacity={0.5}
              >
             
              <Text style={styles.buttonTextStyle} onPress={() => this.createNewUser()}>SignUp</Text>
              
            </TouchableOpacity>
          }
             {this.state.signupbtn == "hide" &&
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              >
              <Text style={styles.buttonTextStyle}>SignUp</Text>
             
            </TouchableOpacity>
             }
          </KeyboardAvoidingView>
        </View>
        }
      </ScrollView>
    </View>
  );
};
}

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 50,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
    borderRadius:10,
    backgroundColor:"#f9f9f9",
  },
  buttonStyle: {
    backgroundColor: '#8cbffb',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 50,
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
    buttonStyle2: {
backgroundColor: '#2583f5',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 50,
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#fff',
    paddingVertical: 15,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#dadae8',
    backgroundColor: '#f9f9f9',
    color:"#000"
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  loginHeadStyle:{
    color: '#808080',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center',
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth :1,
    borderBottomColor: '#808080',
  },
  loginActive:{
    color: '#247ee8',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center',
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth :2,
    borderBottomColor: '#247ee8',


  }

});