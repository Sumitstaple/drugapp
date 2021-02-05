import React from 'react';
import { View, Text, Image,StyleSheet } from 'react-native';


const CustomHeader = (props) => {
  return (
    <View>
    	<View style={styles.HeaderStyle}>
		 	<Text style={styles.Headertext}>{props.title}</Text>
		</View>
    </View>
  );
}
    
export default CustomHeader;


const styles = StyleSheet.create({
  HeaderStyle: {
    flexDirection: 'row',
    backgroundColor: '#f8f9f9',
    justifyContent: 'center',
    height: 50,
    alignItems: 'center',
    width:"100%",
  },
Headertext: {
    color: '#000',
    fontSize:20,
  },
  });