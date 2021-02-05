import React , {Component } from 'react';
import { StyleSheet,Input, Text,TextInput, Button,TouchableOpacity, View,KeyboardAvoidingView,Animated } from 'react-native';
import { updateContactList,checkContact } from '../databases/Schema';
class UpdateContactScreen extends Component {

	constructor(props) {
    super(props);

    this.state = {
      id:this.props?.route?.params?.id,
      name:'',
      showbtn:"false"
    };
  }

onChangeText(uname){
  console.log(uname);
  if(uname != ""){
    this.setState({
      name:uname,
      showbtn:"true",
    }) 
  }
  else{
    this.setState({
      name:'',
      showbtn:"false",
    })
  }
}  
updateContact(props){

     checkContact(this.state.name).then((data) => {
       console.log(data);
         if(data.length > 0){
            this.setState({
              nameError:'Name Already Exists!'
            })
          }
          else{
            
           const userData = {
            id: this.state.id,
            name: this.state.name,
          };

          updateContactList(userData).then((success) => {
            console.log(`Contact Updated`);
           
           this.props.navigation.navigate('Contact', {
                  created: 'contact Updated',
                }); 
          }).catch((error) => {
              console.log(`update Contact error ${error}`);
          });

          }
         
    }).catch((error) => {
        this.setState({ settingsData: [] });
    });   
}
  render(){
  return (
	    <View style={styles.mainBody}>
	      {!!this.state.nameError && (
          <Text style={{textAlign: 'center',backgroundColor:'#f92028', alignSelf: 'stretch', color: "#fff",padding:7,marginLeft:15,marginRight:15,borderRadius:5,marginTop:10}}>{this.state.nameError}</Text>
        )}
      
        <View style={styles.searchcontact}>
          <KeyboardAvoidingView enabled>
           
            <View style={styles.SectionStyle}>
              <TextInput
                style={{ height:50,paddingLeft:30,marginBottom:20,
                	backgroundColor: '#f9f9f9',borderWidth:1,borderColor:'#ddd',borderRadius:10,
 					}}
                placeholder="Enter Name"
                autoCapitalize="none"
                keyboardType="default"
                onChangeText={(uname) =>
                  this.onChangeText(uname)
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              >
              {this.state.showbtn == "true" &&
              <Text style={styles.buttonTextStyle} onPress={() => this.updateContact()}>Save</Text>
              }
              {this.state.showbtn == "false" &&
              <Text style={styles.btnstyle}>Save</Text>
              }
            </TouchableOpacity>

          </KeyboardAvoidingView>
        </View> 

	    </View>
	  );
   }
}

export default UpdateContactScreen;


const styles = StyleSheet.create({
 mainBody:{
 	backgroundColor:'#fff',
 	height:"100%"
 },
  SectionStyle: {
    marginTop: 20,
    backgroundColor:'#fff',
  },
  buttonStyle: {
    backgroundColor: '#2583f5',
    borderWidth: 0,
    color: '#FFFFFF',
    height: 50,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 25,
    width:'100%',
  },

  buttonTextStyle: {
    color: '#fff',
    paddingVertical: 12,
    fontSize: 16,

  },
    btnstyle:{
    backgroundColor: '#ccc',
    color: '#000',
    padding: 15,
    fontSize: 16,
    width:'100%',
    borderRadius: 10,
    textAlign:"center"
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 0,
    paddingRight: 0,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
    backgroundColor: '#ccc',
  },
  searchcontact:{
  	padding:10
  }

  })