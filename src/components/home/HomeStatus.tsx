import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const HomeStatus = () => {
  return (
    // <View>
    <View style={styles.rectangle}>
      <Text  className="text-[#6A6A6A] p-4 font-semibold">Your Status</Text>

      {/* </View> */}
      <Image style={styles.statusBar} source={require('../../assets/Slider.png')} />
    </View>
  );
};

export default HomeStatus;

const styles = StyleSheet.create({
  rectangle: {
    position: 'absolute',
    right: 30,
    top: 130,
    width: 350, // Adjust the width as needed
    height: 120, // Adjust the height as needed
    backgroundColor: '#C1EAFF',
    borderRadius: 15,
  },
  statusBar: {
    left:12,
    bottom:2
  }
});
