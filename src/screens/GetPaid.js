import React, {Component} from 'react';
import { StyleSheet,TextInput, Text, Button, TouchableOpacity, Keyboard, Image,KeyboardAvoidingView, View,ScrollView,FlatList,Animated } from 'react-native';
import { useNavigation ,useTheme} from '@react-navigation/native';
import CustomHeaderInner from '../headers/CustomHeaderInner';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default class GetPaidScreen extends Component {


constructor(props) {
    super(props);
     this.state = {
        data:[],
    };
    
  }

notesinput(){

}
render(){
  return (
    <View style={styles.mainBody}>

      <ScrollView
        keyboardShouldPersistTaps="handled"
        >
        <View style={styles.prelative}>
          <CustomHeaderInner {...this.props} title="Get Paid" />
        </View>
        {!!this.state.nameError && (
      
          <Text style={{textAlign: 'center',backgroundColor:'#f92028', alignSelf: 'stretch', color: "#fff",padding:7,marginLeft:15,marginRight:15,borderRadius:5,marginTop:10}}>{this.state.nameError}</Text>
        )}

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
            <View style={[styles.SectionStyle,styles.textAreaContainer]}>
              <TextInput
                style={[styles.inputStyle,styles.textarea]}
                placeholder="Note" 
                placeholderTextColor="#8f8f8f"
                keyboardType="default"
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                onChangeText={(userPass) =>
                  this.notesinput(userPass)
                }
                underlineColorAndroid="#f000"
                returnKeyType="next"   
                multiline={true}
                numberOfLines={10}
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
  textarea:{
     height: 100,
    textAlignVertical: 'top'
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