import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React from 'react';

const Winner = () => {
  const winnerData=[
    {
    id:'1',
    img:require('../../assets/img/p1.png'),
    name:'@kunal223',
    points:'8780'
  },
    {
      id:'2',
      img:require('../../assets/img/p2.png'),
      name:'@roopa763',
      points:'8380'
    },
    {
      id:'3',
      img:require('../../assets/img/p3.png'),
      name:'@ankith878',
      points:'4390'
    },
  ]
  return (
    <ScrollView style={{height: 400, bottom: 50}}>
      <View className="flex flex-row justify-between items-center px-8 mb-3">
        <TouchableOpacity>
          <Text className="font-bold text-lg text-black">Top 3 Winners</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.winnercontainer}>
        <View style={styles.winnerimagesContainer}>
          <View style={styles.winneritem}>
            <Image
              source={require('../../assets/img/winner1.png')}
              style={styles.winnerimage}
            />
            <Text style={styles.winnertext}>@rahul567</Text>
          </View>

          <View style={[styles.winneritem, {bottom: 15, right: 20}]}>
            <Image
              source={require('../../assets/img/winner2.png')}
              style={styles.winnerimage}
            />
            <Text style={styles.winnertext}>@anil676</Text>
          </View>

          <View style={[styles.winneritem, {right: 35}]}>
            <Image
              source={require('../../assets/img/winner3.png')}
              style={styles.winnerimage}
            />
            <Text style={styles.winnertext}>@rachel655</Text>
          </View>
        </View>
      </View>

      {
        winnerData.map((data,key)=>(
          <View style={styles.roundedBox} key={data.id}>
          <View style={styles.userInfoContainer}>
            <Image
               source={data.img}  // Replace with your image source
              style={styles.roundedImage}
            />
            <View style={styles.userInfoText}>
              <Text style={styles.winnerName}>{data.name}</Text>
            </View>
            <View style={styles.userInfoText}>
              <Text style={styles.points}>{data.points}</Text>
            </View>
          </View>
        </View>
        ))
      }

     
      
    </ScrollView>
  );
};

export default Winner;

const {width, height} = Dimensions.get('window');
// Define styles for the ButtonTab component
const styles = StyleSheet.create({
  winnercontainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 30,
  },
  winnerimagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  winneritem: {
    alignItems: 'center',
  },
  winnerimage: {
    width: 100, // Adjust the width of your images
    height: 100, // Adjust the height of your images
    borderRadius: 50,
  },
  winnertext: {
    marginTop: 5,
    fontWeight: '500',
    fontSize: 12,
    color: '#303030',
  },
  roundedBox: {
    backgroundColor: '#C1EAFF', // Replace with your desired background color
    // padding: 16,
    borderRadius: 50,
    marginHorizontal: 20,
    marginVertical:10,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  roundedImage: {
    width: 50, // Adjust the width of your rounded image
    height: 50, // Adjust the height of your rounded image
    borderRadius: 25, // Make sure it's half of the width and height to make it rounded
    marginRight: 10,
  },
  userInfoText: {
    flex: 1,
  },
  winnerName: {
 
    fontWeight: '500',
    fontSize: 12,
    color: '#303030',
  },
  points: {
    textAlign:'center',
    //marginRight:20,
    fontSize: 12,
    color: '#006A9F',
  },
});
