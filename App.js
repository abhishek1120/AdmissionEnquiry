import React from 'react';
import { StyleSheet, View, ScrollView, Image, Text, TouchableOpacity, Platform ,StatusBar} from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      width: 110
    };
  }

  render() {
    const width = `${100 / parseInt(this.state.width / 110)}%`;
    return (
      // <StatusBar 
      //  barStyle= 'default'
      // />
      <ScrollView style={styles.containerm}>
        <View style={styles.bar}> 
           <Text style={styles.txt}>WELCOME TO M.E/M.TECH</Text>
        </View>
        <View >
        <Image  source={require('./assets/4.png')} style={styles.img}/>
        </View>
          

        <View style={styles.container} onLayout={this.onLayout.bind(this)}>
          <TouchableOpacity style={[styles.wrapper, { width: width }]}>
            <Image source={require('./assets/5.png') }style={[styles.box,{width:70, height: 70, resizeMode:'contain', alignSelf:'center', top:1,}]} />
            <Text style={styles.txtLog} >Bank Branch</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.wrapper, { width: width }]}>
            <Image source={require('./assets/6.png') }style={[styles.box,{width:70, height: 70, resizeMode:'contain', alignSelf:'center', top:1,}]} />
            <Text style={styles.txtLog} >University</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.wrapper, { width: width }]}>
            <Image source={require('./assets/7.png') }style={[styles.box,{width:70, height: 70, resizeMode:'contain', alignSelf:'center', top:1,}]} />
            <Text style={styles.txtLog} >Branch</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.wrapper, { width: width }]}>
            <Image source={require('./assets/12.png') }style={[styles.box,{width:70, height: 70, resizeMode:'contain', alignSelf:'center', top:1,}]} />
            <Text style={styles.txtLog} >Key Dates</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.wrapper, { width: width }]}>
            <Image source={require('./assets/9.png') }style={[styles.box,{width:70, height: 70, resizeMode:'contain', alignSelf:'center', top:1,}]} />
            <Text style={styles.txtLog} >College</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.wrapper, { width: width }]}>
            <Image source={require('./assets/10.png') }style={[styles.box,{width:70, height: 70, resizeMode:'contain', alignSelf:'center', top:1,}]} />
            <Text style={styles.txtLog} >Cut-Off</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.wrapper, { width: width }]}>
            <Image source={require('./assets/11.png') }style={[styles.box,{width:70, height: 70, resizeMode:'contain', alignSelf:'center', top:1,}]} />
            <Text style={styles.txtLog} >News</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.wrapper, { width: width }]}>
            <Image source={require('./assets/8.png') }style={[styles.box,{width:70, height: 70, resizeMode:'contain', alignSelf:'center', top:1,}]} />
            <Text style={styles.txtLog} >Q & A</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.wrapper, { width: width }]}>
            <Image source={require('./assets/13.png') }style={[styles.box,{width:70, height: 70, resizeMode:'contain', alignSelf:'center', top:1,}]} />
            <Text style={styles.txtLog} >Help Center</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

  onLayout(e) {
    if (this.state.width !== e.nativeEvent.layout.width) {
      this.setState({
        width: e.nativeEvent.layout.width
      })
    }
  }
}

const styles = StyleSheet.create({
  bar:{
    width:'100%',
    height:"8%",   
    marginTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
    backgroundColor:'#666',
    borderRadius:20,
    
    },
  containerm:{
    flex:1,
    backgroundColor:"#333",
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop:10,
    marginBottom:50,
  },
  box: {
    borderRadius:50
  },
  wrapper: {
    marginTop:10,
    marginBottom:30, 
  },
  txt:{
    textAlign:"center",
    paddingTop:'5%',
    fontWeight: 'bold',
    fontSize: 22,
    color:'white',
    marginBottom:0,
  },
  img:{
    marginTop:'15%',
    marginBottom:8,
    alignSelf:'center',
    width:300,
    height:200,
  },
  txtLog:{
    fontSize:12,
    textAlign:'center',
    color: '#eee',
    paddingTop:8,
    fontWeight:'bold'
  }
});