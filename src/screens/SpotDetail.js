import React, {Component} from 'react';
import { StyleSheet, Text, Image,
 Button, View,ScrollView,FlatList,Animated,TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomHeaderInner from '../headers/CustomHeaderInner';

export default class SpotDetailScreen extends Component {


constructor(props) {
    super(props);
     this.state = {
        data:[],
    };
  }

render(){	
  return (
  	<View style={styles.maincontactbg}>
  			 <View style={styles.prelative}>
          <CustomHeaderInner {...this.props} title={this.props?.route?.params?.name} />
        </View>
      	<View style={styles.container}>

          <View  style={[styles.rowflexjustify, styles.mtop,styles.topheading]}>
            <Text>Total Value</Text>
          </View>

           <View  style={[styles.rowflexjustify, styles.mtop, styles.whitecard]}>
            <Text>Total</Text>
            <Text style={styles.largefont}>$40.000,00</Text>
          </View>

          <View  style={[styles.rowflexjustify, styles.mtop,styles.marginBottom,styles.topheading]}>
            <Text>Total Value</Text>
          </View>
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
        </View>
    </View>
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
  largefont:{
    fontSize:17,
    color:'#000',
  },
  prelative:{
    position:'relative',
  },
  topheading:{
    fontWeight:"800",
   
   },
  marginBottom:{
     marginBottom:20
  },   
  littleHeading:{
    color: "#ccc",
  }
});