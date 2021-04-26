
import React from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity, FlatList, ScrollView,Alert} from 'react-native'
import {Header} from 'native-base';


const DATA = [
  {
    id: '1',
    title: 'Salade    سلطة  ',
    desc:'Une salade délicieuse et fraîche, relevée par sa sauce au St Môret.',
    price: 100,
    image: require('./../assets/Salade.jpg'),

  },
  {
    id: '2',
    title: 'Tajine   طاجين',
    desc:'Une salade délicieuse et fraîche, relevée par sa sauce au St Môret.',
    price: 20,
    image: require('./../assets/tajine.jpg'),

  },
  {
    id: '3',
    title: 'Jus   عصير',
    desc:'Une salade délicieuse et fraîche, relevée par sa sauce au St Môret.',
    price: 120,
    image: require('./../assets/Jus.jpg'),
    
  },
  {
    id: '4',
    title: 'Limonade   مشروب غازي', 
    desc:'Une salade délicieuse et fraîche, relevée par sa sauce au St Môret.',
    price: 10,
    image: require('./../assets/Limonade.jpg'),
    
  },
  {
    id: '5',
    title: 'Eau   الماء ',
    desc:'Une salade délicieuse et fraîche, relevée par sa sauce au St Môret.',
    price: 15,
    image: require('./../assets/eau.jpg'),
    
  },
];


export default function Menu() {

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
              textAlign:'center'
              
            }}
          >
           restaurant-menu
          </Text>

        </Header>  
<ScrollView  vertical={true} style={{marginBottom: 120}}>
     <FlatList
     data={DATA}
     renderItem={renderItem}
     keyExtractor={item => item.id}
     />
  </ScrollView>  
 </View>
  )
}


const createTwoButtonAlert = () =>
Alert.alert(
  "Cart",
  "if you want add to cart??",
  [
    {
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel"
    },
    { text: "OK", onPress: () => console.log(DATA) }
  ]
);

const Item = ({title, price,desc, image}) => (
  <View style={styles.card}>
  <View >
       <Image source={image} style={{width: 'auto', marginBottom: 20, height:250, borderRadius: 50 }}/>
     </View>
     <View style={{flexDirection: 'row', justifyContent:'space-evenly'}}>
       <Text style={styles.title}>{title}</Text>
       <Text style={styles.price}>{price} DH</Text>

     </View>
     <View style={{flexDirection: 'row', justifyContent:'flex-start'}}>
     <Text style={styles.desc}>{desc}</Text>
     </View>

     <View>
     <TouchableOpacity
     onPress={createTwoButtonAlert} 
      style={styles.button}
    >
      <Text style={styles.textButton}>Add To Cart</Text>
    </TouchableOpacity>
     </View>
</View>
)




// function onClickAddCart(data) {
//        console.log(data)

//         const itemcart = {
//           food: data,
//           quantity:  1,
//           price: data.price
//         }
     
//         AsyncStorage.getItem('item').then((dataCart)=>{
//             console.log(dataCart)
//             if (dataCart !== null) {
//               // We have data!!
//               const cart = JSON.parse(dataCart)
//               cart.push(itemcart)
//               AsyncStorage.setItem('cart',JSON.stringify(cart));
//             }
//             else{
//               const cart  = []
//               cart.push(itemcart)
//               AsyncStorage.setItem('cart',JSON.stringify(cart));
//             }
//             alert("Add Cart")
//           })
//           .catch((err)=>{
//             alert(err)
//           })
//       }
    


const styles = StyleSheet.create({
card: {
 paddingHorizontal: 10,
 paddingVertical: 10,
 margin: 10,
 borderRadius: 50,
 backgroundColor: '#95afc0',
 elevation: 10

},
 button: {
   backgroundColor: 'rgb(36, 68, 92)',
   paddingHorizontal: 10,
   paddingVertical: 10,
   borderRadius:15,
   marginTop: 10,
   width:200,
   marginLeft:60
  
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