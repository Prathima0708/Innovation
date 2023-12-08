import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const HomeIdeas = () => {
  return (
    <SafeAreaView>
      <View className="flex flex-row justify-between items-center px-8">
        <View>
          <TouchableOpacity>
            <Text className="font-bold text-lg text-black">Your Ideas</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity>
            <Text className="font-semibold text-[#007CBA] font-[50]">Patent your Idea</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeIdeas;

const styles = StyleSheet.create({});
