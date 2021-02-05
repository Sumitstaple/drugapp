import React, {Component} from 'react';
import { StyleSheet,TextInput, Text, Button, TouchableOpacity, Image, View,ScrollView,FlatList,Animated } from 'react-native';
import { useNavigation ,useTheme} from '@react-navigation/native';
import CustomHeader from '../headers/CustomHeader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getContacts } from '../databases/Schema';
import { filterContactLists } from '../databases/Schema';
import CryptoJS from "react-native-crypto-js";

export default class  ContactScreen extends Component {

constructor(props) {
    super(props);
    
    this.state = {
      FlatListItems: [],
      success:true,
    };  
  }

componentDidMount(){
  getContacts().then((data) => {
    
       this.setState({ FlatListItems: data });
    }).catch((error) => {
       
  });
}
createNewcontact(){
    this.props.navigation.navigate('New Contact');
}
componentDidUpdate(){
    setTimeout(() => this.setState({success:false}), 3000);
  }

DecriptData(name){
  //Decrypt Data
 return CryptoJS.AES.decrypt(name, 'mykey').toString(CryptoJS.enc.Utf8);
}  
  render(){	   
	  return (
	  	<View style={styles.maincontactbg}>
		  	<View>
		  		<CustomHeader {...this.props} title='Contacts' />
		  	</View>
		  	 <View style={styles.contactlist}>
				<View  style={styles.searchbar}>
			<TextInput
			      style={{ height:50,paddingLeft:30,marginBottom:20,backgroundColor: '#fffff7',
 					}}
			      placeholder="Search Contact" 
			      onChangeText={(search) =>{
                  this.setState({ searchedName: search });
                    filterContactLists(search).then(filteredLists => {
                        this.setState({ FlatListItems: filteredLists });
                    }).catch(error => {
                        this.setState({ FlatListItems: [] });
                    });
                }} 
                value={this.state.searchedName}
			    />
    			    <Ionicons style={styles.seacrh} name='search' color="black" />
            
          { this.props?.route?.params?.created && this.state.success  &&(

          <Text style={{textAlign: 'center',backgroundColor:'green', alignSelf: 'stretch', color: "#fff",padding:7,marginLeft:15,marginRight:15,borderRadius:5,marginTop:10}}>{this.props?.route?.params?.created}</Text>
        )}
    			    </View>
              <FlatList
                data={this.state.FlatListItems.slice(0, 5)}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (

                  <View style={styles.card}>
                   <View style={styles.imgtext}>
  	          	    <Image style={styles.userImage} source={{uri:item.image}}/>

  	          	    <Text style={styles.name} onPress={() => this.props.navigation.navigate('ContactTransaction',{id:item.id,name:item.name})}>{this.DecriptData(item.name)}</Text>
  	          	   </View>
  	          	   <View>
    	                <TouchableOpacity style={styles.followButton}>
    	                  <Text style={styles.followButtonText} onPress={() => this.props.navigation.navigate('Make Move',{id:item.id})}>+</Text>  
    	                </TouchableOpacity>
  	                </View>
                	</View>

                  )}
                  />
              	</View>
              	
              <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              >
              <Text style={styles.buttonTextStyle} onPress={() => this.createNewcontact()}>Add Contact</Text>
            </TouchableOpacity>
		      </View>
	);
  }
}

const styles = StyleSheet.create({
card:{
	flexDirection: "row",
	padding:20,

},

  userImage:{
    height: 50,
    width: 50,
    borderRadius:10,
    borderColor:"#DCDCDC",
    borderWidth:3,
    paddingRight:25,
  },
  name:{
    fontSize:18,
    color:"#000",
    fontWeight:'700',
    paddingLeft:20,
  },
  followButton: {
    marginTop:0,
    height:35,
    width:35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:80,
    backgroundColor: "#ea1780",
  },
  followButtonText:{
    color: "#FFFFFF",
    fontSize:20,
  },
  buttonTextStyle: {
    color: '#fff',
    paddingVertical: 10,
    fontSize: 16,
    borderRadius:10,
  },
    buttonStyle: {
    backgroundColor: '#247ee8',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  card:{
  	display:'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor:'#fffff7',
    padding:15,
    marginBottom:10,
    alignItems:'center',
  },
  contactlist:{
  	paddingLeft:20,
  	paddingRight:20,
  	paddingTop:20,
  	backgroundColor:'#f6ffff',
  },
  imgtext:{
  	flexDirection:'row',
  	alignItems:'center',
  },
  searchbar:{
  	position:'relative',
  },
  seacrh:{
  	position:'absolute',
  	left:8,
  	top:18,
  	fontSize:16
  },
  maincontactbg:{
  	backgroundColor:'#f6ffff',
  },
  });