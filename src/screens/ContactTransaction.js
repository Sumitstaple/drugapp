import React, {Component} from 'react';
import { StyleSheet, Text, Image,
 Button, View,ScrollView,FlatList,Animated,TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomHeaderInner from '../headers/CustomHeaderInner';
import Realm from 'realm';
let realm;
export default class ContactTransactionScreen extends Component {


constructor(props) {
    super(props);
     this.state = {
        data:[],
    };
   
   realm = new Realm({ path: 'drugApp.realm' });
    var spots = realm.objects('spots').sorted('id', true);
    
    this.state = {
      data: spots,
    };
  }

render(){	
  return (
  	<View style={styles.maincontactbg}>
  			 <View style={styles.prelative}>
          <CustomHeaderInner {...this.props} title={this.props?.route?.params?.name} />
          <Ionicons style={[styles.editicon, styles.pabsoulte]} name='pencil-outline' color="black" onPress={() => this.props.navigation.navigate('Edit contact name',{id:this.props?.route?.params?.id})} />
        </View>
      	<View style={styles.container}>

          <View  style={[styles.rowflexjustify, styles.mtop]}>
            <Text>Transaction history</Text>
            <Text>Your Owe: <Text>$100.00</Text></Text>
          </View>

           <View  style={[styles.rowflexjustify, styles.mtop, styles.whitecard]}>
            <Text>Re-up Cost</Text>
            <Text style={styles.largefont}>-$10.00,00 <Text> <Ionicons style={styles.editicon} name='pencil-outline' color="black" /></Text></Text>
          </View>

           <View  style={[styles.rowflexjustify, styles.mtop, styles.whitecard]}>
            <Text>Re-up Cost</Text>
            <Text style={styles.largefont}>-$10.00,00 <Text> <Ionicons style={styles.editicon} name='pencil-outline' color="black" /></Text></Text>
          </View>

           <View  style={[styles.rowflexjustify, styles.mtop, styles.whitecard]}>
            <Text>Re-up Cost</Text>
            <Text style={styles.largefont}>-$10.00,00 <Text> <Ionicons style={styles.editicon} name='pencil-outline' color="black" /></Text></Text>
          </View>

           <View  style={[styles.rowflexjustify, styles.mtop, styles.whitecard]}>
            <Text>Re-up Cost</Text>
            <Text style={styles.largefont}>-$10.00,00 <Text> <Ionicons style={styles.editicon} name='pencil-outline' color="black" /></Text></Text>
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
  editicon:{
    fontSize:20,
  },
  prelative:{
    position:'relative',
  },
  pabsoulte:{
    position:'absolute',
    right:15,
    top:15,
  }
});