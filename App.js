import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text styles={styles.text}>
    //     Open up App.js to start working on your app!
    //     </Text>
    //   <StatusBar style="auto" />
    // </View>
    <View style={styles.container}>
      <View style={styles.top}>
      <Text>
        Top left
      </Text>
      </View>
      <View style ={styles.containerTop}>

      </View>
      <View style={styles.containerCentter}>
          <View>
            <Text>
              Center
            </Text>
          </View>
      </View>
      <View style={styles.containerBottom}>
        <View>
          <Text style={styles.bottom}>
            Bottom left
          </Text>
        </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    flex :1,
    backgroundColor:'#e7fe7ff'
  },
  // text :{
  //   color: '#ff5f',
  //   fontSize:20,
  // },
  top : {
    marginTop: 40,
    marginLeft:20,
    marginRight:20,
    backgroundColor:'#256f78',
    paddingTop:20,
    paddingBottom:20,
    paddingLeft:20,
    paddingRight:20,
    paddingVertical:20,
    borderWidth:20,
    borderColor:'#5876f7'
  },
  topText : {
    color : 'pink',
  },
  bottom:{
    marginTop:10,
    marginBottom:10,
    borderColor:'#2578f9',
    borderWidth:20,
    marginLeft:20,
    marginRight:10,
    paddingVertical:20,
    paddingHorizontal:100,
    textAlign:'right',
    color:'orange',
  },
  containerTop:{
    flex:1,
    backgroundColor:'blue',
  },
  containerCentter:{
    borderRadius:200,
    width:150,
    height:150,
    flex:1,
    marginLeft:150,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'yellow',
  },
  containerBottom:{
    flex:1,
    backgroundColor:'red',
  }
});
