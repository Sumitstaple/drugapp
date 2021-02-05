import React , {Component } from 'react';
import { StyleSheet,Input, Text,TextInput, Button,TouchableOpacity, View,KeyboardAvoidingView,Animated } from 'react-native';
import { insertNewContact } from '../databases/Schema';
class MakeMoveScreen extends Component {

	constructor(props) {
    super(props);

    this.state = {
      name:'',
      showbtn:"false"
    };
  }
  render(){
  return (
	        <View style={styles.mainBody}>
              <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>  
                <Text style={styles.buttonTextStyle}>Re-up</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.btnstyle}>Pay pug</Text>
              </TouchableOpacity>
              <TouchableOpacity>
              <Text style={styles.btnstyle2} onPress={() => this.props.navigation.navigate('ChopAndCuff',{id:this.props?.route?.params?.id})}>Chop and cuff</Text>
              </TouchableOpacity>
              <TouchableOpacity>
              
                <Text style={styles.btnstyle3} onPress={() => this.props.navigation.navigate('GetPaid',{id:this.props?.route?.params?.id})}>Get paid</Text>
              </TouchableOpacity>
        </View> 
	  );
   }
}

export default MakeMoveScreen;


const styles = StyleSheet.create({
 mainBody:{
 	backgroundColor:'#fff',
 	height:"100%",
   padding:15,
 },
  SectionStyle: {
    marginTop: 20,
    backgroundColor:'#fff',
  },
  buttonStyle: {
    backgroundColor: '#2583f5',
    borderWidth: 0,
    color: '#FFFFFF',
    height: 60,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 25,
    width:'100%',
  },

  buttonTextStyle: {
    color: '#fff',
    paddingVertical: 15,
    fontSize: 16,
    marginBottom:30,
  },
    btnstyle:{
    backgroundColor: '#000000',
    color: '#fff',
    paddingVertical: 18,
    fontSize: 16,
    width:'100%',
    borderRadius: 10,
    textAlign:"center",
    marginBottom:25,
    height: 60,
  },
   btnstyle2:{
    backgroundColor: '#808080',
    color: '#fff',
    paddingVertical: 18,
    fontSize: 16,
    width:'100%',
    borderRadius: 10,
    textAlign:"center",
    marginBottom:25,
    height: 60,
  },
  btnstyle3:{
    backgroundColor: '#fff',
    color: '#247ee8',
    paddingVertical: 18,
    fontSize: 16,
    width:'100%',
    borderRadius: 10,
    textAlign:"center",
    marginBottom:25,
    height: 60,
    borderWidth:1,
    borderColor:'#247ee8',

  },
  })