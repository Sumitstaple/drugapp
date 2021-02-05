import React, {Component} from 'react';
import { StyleSheet, Text, Image,
 Button, View,ScrollView,FlatList,Animated,TouchableOpacity } from 'react-native';
import CustomHeader from '../headers/CustomHeader';
import { getSpots } from '../databases/Schema';
export default class TrapSpotScreen extends Component {


constructor(props) {
    super(props);

    this.state = {
      data: [],
      success:true,
    };
  }
componentDidMount(){
  getSpots().then((data) => {
       this.setState({ data: data });
    }).catch((error) => {
       
  });
}
createNewspot(){ 
  this.props.navigation.navigate('AddTrapSpot');
}
componentDidUpdate(){
  setTimeout(() => this.setState({success:false}), 3000);
}

render(){  
  return (
    <View style={styles.maincontactbg}>
        <View>
          <CustomHeader {...this.props} title='Trap Spot' />
        </View>
    <View style={styles.container}>
        { this.props?.route?.params?.created && this.state.success  &&(
          <Text style={styles.message}>{this.props?.route?.params?.created}</Text>
        )}
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.card}>
               
                <Image style={styles.userImage} source={require('../assets/images/flag.png')}/>
                <View style={styles.cardFooter}>
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                    <Text style={styles.name} onPress={() => this.props.navigation.navigate('SpotDetail',{id:item.id,name:item.name})}>{item.name}</Text>
                    
                  </View>
                </View>
              </TouchableOpacity>
            )
          }}/>
      </View>
      <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              >
              <Text style={styles.buttonTextStyle} onPress={() => this.createNewspot()}>Add new trap spot</Text>
            </TouchableOpacity>
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
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },
  listContainer:{
   alignItems:'center',
   paddingVertical:20,
  },
  /******** card **************/
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 5,
    backgroundColor:"white",
    flexBasis: '46%',
    marginHorizontal: 5,
    paddingVertical:30,
  },
  cardFooter: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center"
  },
  cardContent: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  userImage:{
    height: 50,
    width: 50,
    alignSelf:'center',
  },
  name:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#008080",
    fontWeight:'bold'
  },
  position:{
    fontSize:14,
    flex:1,
    alignSelf:'center',
    color:"#696969"
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
  message:{textAlign: 'center',backgroundColor:'green', alignSelf: 'stretch', color: "#fff",padding:7,marginLeft:15,marginRight:15,borderRadius:5,marginTop:10}
});