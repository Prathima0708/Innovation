import { View, Text ,ScrollView,TouchableOpacity,Dimensions,StyleSheet,Image} from 'react-native'
import React from 'react'
import lineargradient from '../../assets/img/card1.png';
import arrow from '../../assets/img/Arrow.png';
import card2 from '../../assets/img/card2.png';


const YourIdeas = () => {
  return (
    <ScrollView style={{height: 400, bottom: 50}}>
    <View className="flex flex-row justify-between items-center px-8">
      <View>
        <TouchableOpacity>
          <Text className="font-bold text-lg text-black">Your Ideas</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity>
          <Text className="font-semibold text-[#007CBA] font-[50]">
            Patent your Idea
          </Text>
        </TouchableOpacity>
      </View>
    </View>

    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      {/* Left side view */}
      <View style={{margin: 20, flex: 1}}>
        <Image source={lineargradient} style={{borderRadius: 30}} />

        {/* <View>
          <TouchableOpacity
            style={{
              // position: 'absolute',
              top: -270,
              left: 130,
              width: 70,
              height: 25,
              backgroundColor: 'white',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{alignItems: 'center', fontSize: 12}}
              className="text-black">
              Submitted
            </Text>
          </TouchableOpacity>
        </View> */}

        <View>
          <TouchableOpacity
            style={{
              // position: 'absolute',
              top: -290,
              left: 130,
              width: 90,
              height: 25,
              backgroundColor: 'white',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {/* <Text
              style={{alignItems: 'center', fontSize: 12}}
              className="text-black">
              Submitted
            </Text> */}
            <View style={styles.container}>
              <View style={styles.circle} className="bg-[#DB9A4D]" />
              <Text style={styles.text}>Submitted</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* <Image
          source={image5}
          style={{
            position: 'absolute',
            top: 90,
            left: 10,
            width: 210,
            height: 70,
          }}
        /> */}

        {/* <Text
          style={{
            position: 'absolute',
            top: 200,
            left: 30,
            fontSize: 16,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          className="text-black">
          Electric car {'\n'}Charging Points
        </Text> */}

        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 250,
            left: 30,
            width: 80,
            height: 25,
            backgroundColor: 'white',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#007CBA', fontSize: 12}}>
            Patent taken
          </Text>
        </TouchableOpacity>

        <Image
          source={arrow}
          style={{
            position: 'absolute',
            top: 250,
            left: 180,
            width: 30,
            height: 20,
          }}
        />
      </View>

      {/* Right side view */}
      <View style={{}}>
        <View
          style={{
            transform: [{rotate: '-90deg'}],

            top: 70,
            right: 70,
          }}>
          <Text className="text-black text-lg font-medium">
            Great Idea
          </Text>
        </View>
        <View
          style={{
            width: 2,
            height: '45%',
            backgroundColor: '#9EBDE7',
            top: 120,
            right: 30,
          }}
        />
      </View>
    </View>

    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      {/* Right side view */}
      <View style={{}}>
        <View
          style={{
            transform: [{rotate: '-90deg'}],

            top: 70,
            left: 30,
          }}>
          <Text className="text-black text-lg font-medium">
            Great Idea
          </Text>
        </View>
      </View>
      <View
        style={{
          width: 2,
          height: '51%',
          top: 130,
          right: 10,
          backgroundColor: '#DBD746',
        }}
      />
      {/* Left side view */}
      <View style={{margin: 20, flex: 1}}>
        <Image source={card2} style={{borderRadius: 30}} />

        <View>
          <TouchableOpacity
            style={{
              // position: 'absolute',
              top: -290,
              left: 130,
              width: 90,
              height: 25,
              backgroundColor: 'white',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {/* <Text
              style={{alignItems: 'center', fontSize: 12}}
              className="text-black">
              Submitted
            </Text> */}
            <View style={styles.container}>
              <View style={styles.circle} className="bg-[#3F7CD7]" />
              <Text style={styles.text}>Considered</Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 250,
            left: 30,
            width: 80,
            height: 25,
            backgroundColor: 'white',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#007CBA', fontSize: 12}}>
            Take Patent
          </Text>
        </TouchableOpacity>

        <Image
          source={arrow}
          style={{
            position: 'absolute',
            top: 250,
            left: 180,
            width: 30,
            height: 20,
          }}
        />
      </View>
    </View>
  </ScrollView>
  )
}

export default YourIdeas

const {width, height} = Dimensions.get('window');
// Define styles for the ButtonTab component
const styles = StyleSheet.create({
  buttonTabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    bottom: height * 0.1,
    paddingHorizontal: width * 0.05,
    //bottom: 80,
    //paddingHorizontal: 18,
  },
  tabButton: {
    paddingVertical: width * 0.02,
    //paddingVertical: 8,
    paddingHorizontal: 26,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#EFEFEF',
  },

  activeTabButton: {
    backgroundColor: '#C1EAFF',
    borderColor: '#3498db',
  },
  tabButtonText: {
    color: '#5A5A5A',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
  },
  activetabButtonText: {
    color: '#006A9F',
    fontSize: 14,
    fontWeight: 'bold',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    // backgroundColor: 'black',
    marginRight: 8, // Adjust the margin as needed
  },
  text: {
    fontSize: 12,
    color: 'black',
  },

  winnercontainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 30,
  },
  winnertextContainer: {
    marginBottom: 10, // Adjust the spacing between text and images
  },
  winnerimagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  winnerimageContainer: {
    overflow: 'hidden',
    borderRadius: 50,
  },
  winnerimage: {
    width: 100, // Adjust the width of your images
    height: 100, // Adjust the height of your images
  },
  winnertext: {
   
      marginRight: 5,
      fontWeight: 'bold',
      fontSize: 16,
      color: 'black',
  
  },
});