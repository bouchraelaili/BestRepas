import React from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity, FlatList, ScrollView,Alert} from 'react-native'
import {Header,Toast } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

const DATA = [
 
    // {
    //     id: '1',
    //     title: 'Salade    سلطة  ',
    //     desc:'Une salade délicieuse et fraîche, relevée par sa sauce au St Môret.',
    //     price: 100,
    //     image: require('./../assets/Salade.jpg'),
    
    //   },
      {
        id: '2',
        title: 'Tajine   طاجين',
        desc:'Un tajine délicieux et fraîche, relevée par sa sauce au St Môret.',
        price: 70,
        image: require('./../assets/tajine.jpg'),
    
      },
      {
        id: '3',
        title: 'Jus   عصير',
        desc:'Un Jus délicieux et fraîche, relevée par sa sauce au St Môret.',
        price: 10,
        image: require('./../assets/Jus.jpg'),
        
      },

];


const createTwoButtonAlert = () =>
Alert.alert(
  "Chekout",
  "Your Plat added successfully",
  [
    
    { text: "OK", onPress: () => console.log(DATA) }
  ]
);


const Item = ({title, price,desc,image}) => (
  <View style={styles.card}>

   <View style={{flexDirection: 'row',elevation: 10, justifyContent: 'space-between'}}>
       <Image source={image} style={{width: '40%', marginBottom: 10, height:100,borderRadius:50 }}/>
         <Text style={styles.title}>{title}</Text>
         <Text style={styles.price}>{price} DH</Text>
    </View>
    <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
     <Text style={styles.desc}>{desc}</Text>
     </View>
</View>

)

export default function Cart() {

  const renderItem = ({item}) => (
    <Item title={item.title} price={item.price} desc={item.desc} image={item.image}/>
  )
  return (
 <View>
 <Header  style={{backgroundColor:'rgb(36, 68, 92)'}}>
        <Text
            style={{
              color: 'white',
              fontSize: 20,
              marginTop: 16,
              fontWeight:'bold',
              textAlign:'center',
              marginLeft:60,
              
            }}
          >
Checkout Page        </Text>

        </Header>    
<ScrollView  vertical={true} style={{marginBottom: 120}}>
     <FlatList
     data={DATA}
     renderItem={renderItem}
     keyExtractor={item => item.id}

     />
  </ScrollView>  
 <TouchableOpacity
      style={styles.button}
      onPress={createTwoButtonAlert} 
      >
      <Text style={styles.textButton}>Checkout</Text>
    </TouchableOpacity>
 </View>
  )
}



const styles = StyleSheet.create({
card: {
 paddingHorizontal: 20,
 paddingVertical: 20,
 margin: 10,
 borderRadius:1,
 backgroundColor: '#95afc0',
 elevation: 10

},
 button: {
   
        backgroundColor: 'rgb(36, 68, 92)',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius:15,
        marginTop: -60,
        width:200,
        marginLeft:100
   
  
 },
 textButton:{
  color:'white',
  fontSize:18,
  fontWeight:'bold',
  textAlign:'center'
 },
 title:{
   fontSize:16,
   fontWeight:'bold',
   color:'white',
 },
 price:{
  fontSize:16,
  fontWeight:'bold',
  color:'white',
 },
 desc:{
    fontSize:16,
    fontWeight:'bold',
    color:'white',
    textAlign:'center',
    margin:10,
  
   }
});