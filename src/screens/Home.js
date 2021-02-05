import React, {Component} from 'react';
import { StyleSheet,TextInput, Text, Button, TouchableOpacity, Image, View,ScrollView,FlatList,Animated } from 'react-native';
import { useNavigation ,useTheme} from '@react-navigation/native';
import CustomHeader from '../headers/CustomHeader';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default class HomeScreen extends Component {


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
          <CustomHeader {...this.props} title="Dashboard" />
        </View>
        <View style={styles.container}>

           <View  style={[styles.rowflexjustify, styles.mtop, styles.whitecard]}>
            <Text><Text> <Ionicons style={styles.editicon} name='cash-outline' color="black" /></Text>  Re-up Cost</Text>
            <Text style={styles.largefont}>-$10.00,00 </Text>
          </View>

           <View  style={[styles.rowflexjustify, styles.mtop, styles.whitecard]}>
            <Text><Text> <Ionicons style={styles.editicon} name='arrow-up-outline' color="black" /></Text> Re-up Cost</Text>
            <Text style={styles.largefont}>-$10.00,00</Text>
          </View>

           <View  style={[styles.rowflexjustify, styles.mtop, styles.whitecard]}>
            <Text><Text> <Ionicons style={styles.editicon} name='arrow-down-outline' color="black" /></Text> Re-up Cost</Text>
            <Text style={styles.largefont}>-$10.00,00 </Text>
          </View>

           <View  style={[styles.rowflexjustify, styles.mtop, styles.whitecard]}>
            <Text><Text> <Ionicons style={styles.editicon} name='cash-outline' color="black" /></Text> Re-up Cost</Text>
            <Text style={styles.largefont}>-$10.00,00 </Text>
          </View>
          
          <View  style={[styles.rowflexjustify, styles.mtop, styles.whitecard]}>
            <Text><Text> <Ionicons style={styles.editicon} name='cash-outline' color="black" /></Text> Re-up Cost</Text>
            <Text style={styles.largefont}>-$10.00,00 </Text>
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