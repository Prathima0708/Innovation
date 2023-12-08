import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native';

const HomeMain = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex flex-row justify-between m-8">
          <View>
            <Image source={require('.././../assets/card1.png')} />

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
                  <View style={styles.circle} className="bg-[#DB9A4D]"/>
                  <Text style={styles.text} >Submited</Text>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={{
                  position: 'absolute',
                  top: 260,
                  left: 20,
                  width: 100,
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

              <TouchableOpacity>
                <Image 
                  source={require('.././../assets/Arrow.png')}
                  style={{
                    position: 'absolute',
                    bottom:45,
                    // top: 25,
                    left: 180,
                    width: 30,
                    height: 20,
                  }}
                  />
              </TouchableOpacity>
          </View>
          <View>
            <View
              style={{
                transform: [{rotate: '-90deg'}],
                top: 55,
                right: 30,
              }}>
              <Text className="text-black text-lg font-medium">Great Idea</Text>
            </View>
            <View
              style={{
                top: 90,
                left: 12,
                backgroundColor: '#9EBDE7', // Adjust color as needed
                width: 2, // Ajust the width of the line
                height: 180, // Adjust the height of the line
                // marginVertical: 7, // Adjust the vertical margin
              }}
            />
          </View>
        </View>

        <View className="flex flex-row justify-between mr-10">
          <View
            style={{
              transform: [{rotate: '-90deg'}],
              left: 190,
              bottom: 95,
            }}>
            <Text className="text-black text-lg font-medium">Great Idea</Text>
          </View>
          <View
            style={{
              backgroundColor: '#DBD746', // Adjust color as needed
              width: 2, // Adjust the width of the line
              height: 180, // Adjust the height of the line
              top: 120,
              right: 23,
            }}
          />
          <View>
            <Image source={require('.././../assets/card2.png')} />

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
                  <View style={styles.circle} className="bg-[#3F7CD7]"/>
                  <Text style={styles.text} >Considered</Text>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={{
                  position: 'absolute',
                  top: 260,
                  left: 20,
                  width: 100,
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
              <TouchableOpacity>
                <Image 
                  source={require('.././../assets/Arrow.png')}
                  style={{
                    position: 'absolute',
                    bottom:45,
                    // top: 25,
                    left: 180,
                    width: 30,
                    height: 20,
                  }}
                  />
              </TouchableOpacity>
          </View>
        </View>
        <View className="mb-10">
          <Text></Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeMain;

const styles = StyleSheet.create({
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
});


