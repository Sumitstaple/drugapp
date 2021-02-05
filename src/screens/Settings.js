import React , {Component } from 'react';
import { ScrollView, StyleSheet,Input,Switch, Text,TextInput, Button,TouchableOpacity, View,KeyboardAvoidingView,Animated } from 'react-native';
import { settingsOptions, UpdateSettings,getSettings } from '../databases/Schema';
import CustomHeader from '../headers/CustomHeader';
import Realm from 'realm';
let realm;

export default class SettingsScreen extends Component {
 constructor(props) {
    super(props);
     this.state = {
        data:[],
        fees:false,
        wire:false,
        metric:false,
        settingsData:[],
        poundounces:"16",
        poundgrams:"448",
        ouncesgrams:"28",
    };   
  }

componentDidMount(){
	getSettings().then((data) => {
         
        if(data.length == 0){	  
		    	const settings = {
				      id: 1,
				      fees: false,
				      wire: false,
				      metric: false,
				      poundounces: "16",
				      poundgrams: "448",
				      ouncesgrams: "28",
				    };
		    	settingsOptions(settings).then((success) => {
			      console.log(`Seeting created`);
			    }).catch((error) => {
			        console.log(`Insert new setting error ${error}`);
			    });
		    }
		    else{

		    	this.setState({
			   		fees: data[0].fees,
			   		wire: data[0].wire,
			   		metric: data[0].metric,
			   		poundounces: data[0].poundounces,
				    poundgrams: data[0].poundgrams,
				    ouncesgrams: data[0].ouncesgrams,
			   	})
		    }
            
        }).catch((error) => {
            this.setState({ settingsData: [] });
        });

}

updateUserSettings(settings){

	UpdateSettings(settings).then((success) => {
      console.log(`Settings Updated`);
     
     this.props.navigation.navigate('Settings', {
            created: '',
          }); 

    }).catch((error) => {
        console.log(`Settings error ${error}`);
    });  
}
 
 toggleSwitchFees(){

 	if(this.state.fees == false){

	   	this.setState({
	   		fees:true,
	   	}, () => {
  
	   const settings = {
		id:1,
      	fees: this.state.fees,
   		wire: this.state.wire,
   		metric: this.state.metric,
   		poundounces: this.state.poundounces,
	    poundgrams: this.state.poundgrams,
	    ouncesgrams: this.state.ouncesgrams,
    };

    this.updateUserSettings(settings);

});

   	}
   	else{
   		this.setState({
	   		fees:false,
	   	}, () => {
  
	   const settings = {
		id:1,
      	fees: this.state.fees,
   		wire: this.state.wire,
   		metric: this.state.metric,
   		poundounces: this.state.poundounces,
	    poundgrams: this.state.poundgrams,
	    ouncesgrams: this.state.ouncesgrams,
    };
	    this.updateUserSettings(settings);

	});
   	}

   }

  toggleSwitchWire(){
   	if(this.state.wire == false){

	   	this.setState({
	   		wire:true,
	   	}, () => {
  
	   const settings = {
		id:1,
      	fees: this.state.fees,
   		wire: this.state.wire,
   		metric: this.state.metric,
   		poundounces: this.state.poundounces,
	    poundgrams: this.state.poundgrams,
	    ouncesgrams: this.state.ouncesgrams,
    };

    this.updateUserSettings(settings);

});
   	}
   	else{
   		this.setState({
	   		wire:false,
	   	}, () => {
  
	   const settings = {
		id:1,
      	fees: this.state.fees,
   		wire: this.state.wire,
   		metric: this.state.metric,
   		poundounces: this.state.poundounces,
	    poundgrams: this.state.poundgrams,
	    ouncesgrams: this.state.ouncesgrams,
    };

    this.updateUserSettings(settings);

});
   	}
   }
 toggleSwitchMetric(){
   	if(this.state.metric == false){
	   	this.setState({
	   		metric:true,
	   	}, () => {
  
	   const settings = {
		id:1,
      	fees: this.state.fees,
   		wire: this.state.wire,
   		metric: this.state.metric,
   		poundounces: this.state.poundounces,
	    poundgrams: this.state.poundgrams,
	    ouncesgrams: this.state.ouncesgrams,
    };

    this.updateUserSettings(settings);

});
   	}
   	else{
   		this.setState({
	   		metric:false,
	   	}, () => {
  
	   const settings = {
		id:1,
      	fees: this.state.fees,
   		wire: this.state.wire,
   		metric: this.state.metric,
   		poundounces: this.state.poundounces,
	    poundgrams: this.state.poundgrams,
	    ouncesgrams: this.state.ouncesgrams,
    };

    this.updateUserSettings(settings);

});
   	}
   }

onChangepoundounces(poundounces){
  const settings = {
		id:1,
      	fees: this.state.fees,
   		wire: this.state.wire,
   		metric: this.state.metric,
   		poundounces: poundounces,
	    poundgrams: this.state.poundgrams,
	    ouncesgrams: this.state.ouncesgrams,
    };

    this.updateUserSettings(settings);
}
onChangepoundgrams(poundgrams){
  const settings = {
		id:1,
      	fees: this.state.fees,
   		wire: this.state.wire,
   		metric: this.state.metric,
   		poundounces: this.state.poundounces,
	    poundgrams: poundgrams,
	    ouncesgrams: this.state.ouncesgrams,
    };

    this.updateUserSettings(settings);
}
onChangeouncesgrams(ounncesgrams){
  const settings = {
		id:1,
      	fees: this.state.fees,
   		wire: this.state.wire,
   		metric: this.state.metric,
   		poundounces: this.state.poundounces,
	    poundgrams: this.state.poundgrams,
	    ouncesgrams: ounncesgrams,
    };

    this.updateUserSettings(settings);
}
render(){	
  return (
  		<ScrollView>
  		<View style={styles.maincontactbg}>
  			<View>
		  		<CustomHeader {...this.props} title='Settings' />
		  	</View>
		  	<View  style={styles.settingpage}>
		  	
		  		<View style={styles.container}>
		  		<Text>Turn on Transport Fees</Text>
		  		<Switch
		  			style={styles.switchbtn}
			        trackColor={{ false: "#767577", true: "#81b0ff" }}
			        thumbColor={this.state.fees ? "#f5dd4b" : "#f4f3f4"}
			        ios_backgroundColor="#3e3e3e"
			        onValueChange={()=>this.toggleSwitchFees()}
			        value={this.state.fees}
			      />
		  	</View>
		  	<View style={styles.container}>
		  		<Text>Turn on Wire</Text>
		  		<Switch
		  			style={styles.switchbtn}
			        trackColor={{ false: "#767577", true: "#81b0ff" }}
			        thumbColor={this.state.wire ? "#f5dd4b" : "#f4f3f4"}
			        ios_backgroundColor="#3e3e3e"
			        onValueChange={()=>this.toggleSwitchWire()}
			        value={this.state.wire}
			      />
		  	</View>
		  	<View style={styles.container}>
		  		<Text>Use Metric</Text>
		  		<Switch
		  			style={styles.switchbtn}
			        trackColor={{ false: "#767577", true: "#81b0ff" }}
			        thumbColor={this.state.metric ? "#f5dd4b" : "#f4f3f4"}
			        ios_backgroundColor="#3e3e3e"
			        onValueChange={()=>this.toggleSwitchMetric()}
			        value={this.state.metric}
			      />
		  	</View>

		  	<View className={styles.bottomsettingHead}>
		  			<Text style={{fontSize:18,fontWeight:'bold',marginTop:15,marginBottom:15}}>Imperial Rounding</Text>
		  		</View>


		  		<View  style={{flexDirection: 'row',justifyContent:'space-between',alignItems:'center',marginTop:10,}} >
		  		  <View style={{width:"30%"}}>
		  			<Text style={{fontSize:16,fontWeight:'bold'}}>1 pound:</Text>
		  			</View>
		  			<View style={{flexDirection: 'row',borderWidth: 1,borderColor:"#ececec",borderRadius:10,backgroundColor:"#fff",padding:8,width:"70%",justifyContent:'space-between',alignItems:'center',}}>
			  			<TextInput 
	                autoCapitalize="none"
	                keyboardType="numeric"
	                defaultValue={this.state.poundounces}
	                onChangeText={(poundounces) =>
	                  this.onChangepoundounces(poundounces)
	                }
	                returnKeyType="next"
	                ></TextInput>
                	<Text style={{fontSize:16,}}>Ounces</Text>
                </View>
		  		</View>

		  		<View  style={{flexDirection: 'row',justifyContent:'space-between',alignItems:'center',marginTop:10,}} >
		  		  <View style={{width:"30%"}}>
		  			<Text style={{fontSize:16,fontWeight:'bold'}}>1 pound:</Text>
		  			</View>
		  			<View style={{flexDirection: 'row',borderWidth: 1,borderColor:"#ececec",borderRadius:10,backgroundColor:"#fff",padding:8,width:"70%",justifyContent:'space-between',alignItems:'center',}}>
			  			<TextInput placeholder="17"
	                autoCapitalize="none"
	                keyboardType="numeric"
	                onChangeText={(poundgrams) =>
	                  this.onChangepoundgrams(poundgrams)
	                }
	                defaultValue={this.state.poundgrams}
	                ></TextInput>
                	<Text style={{fontSize:16,}}>Grams</Text>
                </View>
		  		</View>

		  		<View  style={{flexDirection: 'row',justifyContent:'space-between',alignItems:'center',marginTop:10,}} >
		  		  <View style={{width:"30%"}}>
		  			<Text style={{fontSize:16,fontWeight:'bold'}}>1 ounce:</Text>
		  			</View>
		  			<View style={{flexDirection: 'row',borderWidth: 1,borderColor:"#ececec",borderRadius:10,backgroundColor:"#fff",padding:8,width:"70%",justifyContent:'space-between',alignItems:'center',}}>
			  			<TextInput placeholder="17"
	                autoCapitalize="none"
	                keyboardType="numeric"
	                onChangeText={(ouncesgrams) =>
	                  this.onChangeouncesgrams(ouncesgrams)
	                }
	                defaultValue={this.state.ouncesgrams} 
	                ></TextInput>
                	<Text style={{fontSize:16,}}>Grams</Text>
                </View>
		  		</View>
		  	</View>
		</View>
		</ScrollView>
);
}
}

const styles = StyleSheet.create({
	textchnage:{
		fontSize:40,
	},
  container:{
    flexDirection:"row",
    justifyContent:"space-between",
    backgroundColor:"#fff",
    padding:15,
    marginBottom:10,
    alignItems:"center",
    borderRadius:10,
  },
  flexalign:{
  	flexDirection:"row",
  	 justifyContent:"space-between",
  	 flex:1,
  },
    maincontactbg:{
    	backgroundColor:"#f8f9f9",
    	flex:1,
  },
  bottomsettingRow:{
 	flexDirection:"row",
    justifyContent:"space-between",
    padding:15,
    marginBottom:10,
    alignItems:"center",
    backgroundColor:"#ff0000",
  },
  settingpage:{
  	padding:15,
  },
  switchbtn:{
  	padding:10,
  },
 
});