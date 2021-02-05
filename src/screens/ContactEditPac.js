import React, {Component} from 'react';
import { StyleSheet,TextInput, Text, Button, TouchableOpacity, Image, View,ScrollView,FlatList,Animated } from 'react-native';
import { useNavigation ,useTheme} from '@react-navigation/native';
import CustomHeaderInner from '../headers/CustomHeaderInner';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class ContactEditPacScreen extends Component {


constructor(props) {
    super(props);
     this.state = {
        data:[],
    };
    
  }
changedropdown(){
  alert()
}
render(){  
  return (
    <ScrollView>
    <View style={styles.maincontactbg}>
        <View style={styles.prelative}>
          <CustomHeaderInner {...this.props} title="Martine Botosh" />
        </View>
        <View style={styles.container}>
          <View style={[styles.boxcontainer]}>
            <Text style={{width:"100%",color:"#000",fontSize:17}}>Martine Botosh</Text>
            <View style={[styles.rowflexjustify, styles.mtop]}>
              <Text style={styles.fontstyle}>Quantity</Text>
              <Text style={styles.fontstyle}>Width</Text>
            </View>
            <View style={[styles.rowflexjustify]}>
              <Text>5</Text>
              <Text>LBS</Text>
            </View>
            <View style={[styles.rowflexjustify, styles.mtop]}>
              <Text style={styles.fontstyle}>Asking</Text>
              <Text style={styles.fontstyle}>Value</Text>
            </View>
            <View style={[styles.rowflexjustify]}>
              <Text>$40.000,00</Text>
              <Text>$40.000,00</Text>
            </View>
          </View>
         
          <TouchableOpacity>
            <Text style={styles.btnstyle}>Edit pac</Text>
          </TouchableOpacity>
           <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>  
            <Text style={styles.buttonTextStyle}>Move product</Text>
          </TouchableOpacity>

        </View>
    </View>
    </ScrollView>
);
}
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  boxcontainer:{
    backgroundColor:"#fff",
    marginTop:10,
    padding:15
  },
  maincontactbg:{
      flex:1,
      backgroundColor:"#f8f9f9",
      padding:15,
  },
  rowflexjustify:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  mtop:{
    marginTop:20
  },
  whitecard:{
    backgroundColor:'#fff',
    padding:15,
  },
  fontstyle:{
    color:"#bfbfbf"
  },
  largefont:{
    fontSize:17,
    color:'#000',
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
    backgroundColor: '#fff',
    color: '#2583f5',
    paddingVertical: 18,
    fontSize: 16,
    width:'100%',
    borderRadius: 10,
    textAlign:"center",
    marginBottom:25,
    height: 60,
    borderWidth:1,
    borderColor:'#2583f5',
  },
  followButton: {
    paddingTop:3,
    height:35,
    width:35,
    paddingLeft:12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:80,
    backgroundColor: "#ea1780",
  },
  followButtonText:{
    color: "#FFFFFF",
    fontSize:20,
  },
});