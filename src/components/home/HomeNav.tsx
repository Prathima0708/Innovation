import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native';

const HomeNav = () => {
  return (
    <View
      className=" bg-[#007CBA] p-6  "
      style={{
        height: 200,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
      }}>
      <View className="flex flex-row justify-between items-center">
        <TouchableOpacity>
          <Image source={require('../../assets/Hamburger.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../assets/NestleIcon.png')} />
        </TouchableOpacity>
        <View style={styles.container}>
          <View style={styles.circle} className="bg-[#DB9A4D]" />
          <TouchableOpacity>
            <Image source={require('../../assets/NotificationIcon.png')} />
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex flex-row mt-6  ">
      <Text className="text-[#FFFFFF] text-[16px] pl-2">Hi Ankith </Text>
      <Text className="text-[#FFFFFF] font-bold text-[16px]">You are doing great</Text>
      </View>
    </View>
  );
};

export default HomeNav;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    left: 24,
    bottom: 4,
    zIndex: 1,
    // backgroundColor: 'black',
    // marginRight: 10, // Adjust the margin as needed
  },
  text: {
    fontSize: 12,
    color: 'black',
  },
});
