import React from 'react';
import { View, Text, Image,StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation ,useTheme} from '@react-navigation/native';

const CustomHeaderInner = (props) => {
  const navigation = useNavigation();
  return (
    <View>
    	<View style={styles.HeaderStyle}>
      <Ionicons style={styles.backarrow} name='arrow-back-outline' color="black" onPress={() => navigation.goBack(null)}  />
		 	<Text style={styles.Headertext}>{props.title}</Text>
       
		</View>
    </View>
  );
}

export default CustomHeaderInner;


const styles = StyleSheet.create({
  HeaderStyle: {
    flexDirection: 'row',
    backgroundColor: '#f8f9f9',
    height: 50,
    alignItems: 'center',
    width:"100%",
    position:'relative',
    paddingRight:35
  },
Headertext: {
    color: '#000',
    fontSize:20,
    textAlign:"center",
    width:'100%',
  },
  backarrow:{
    fontSize:25,
    position:'relative',
    left:15,
    top:0,
  }
  });