import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Image } from 'react-native';

const HomeTopTab = () => {
  return (
    <SafeAreaView>
      <View className="flex flex-row justify-evenly mt-16 mb-10">
        <View className="w-[101px] text-center px-4 py-2 bg-[#C1EAFF] rounded-[30px]  ">
          <TouchableOpacity>
            <Text className="font-semibold text-[#006A9F] text-center">Your Ideas</Text>
          </TouchableOpacity>
          
        </View>

        <View className="w-[101px]   px-4 py-2 bg-[#EFEFEF] rounded-[30px]">
          <TouchableOpacity>
            <Text className="text-[#000000] text-center">Winners</Text>
          </TouchableOpacity>
        </View>

        <View className="w-[101px] text-center px-4 py-2 bg-[#EFEFEF] rounded-[30px]">
          <TouchableOpacity>
            <Text className="text-[#000000] text-center">People</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeTopTab;

const styles = StyleSheet.create({});
