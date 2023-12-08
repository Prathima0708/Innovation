// Import necessary components and libraries
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import image5 from '../../assets/img/image5.png';
import lineargradient from '../../assets/img/card1.png';
import arrow from '../../assets/img/Arrow.png';
import card2 from '../../assets/img/card2.png';
import YourIdeas from '../YourIdeas/YourIdeas';
import Winner from '../Winners/Winner';
import People from '../People/People';

// Define the ButtonTab component
const ButtonTab = ({activeTab, onPressTab}) => {
  return (
    <>
      <View style={styles.buttonTabContainer}>
        {/* Button 1 */}
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 1 && styles.activeTabButton]}
          onPress={() => onPressTab(1)}>
          <Text
            style={[
              styles.tabButtonText,
              activeTab === 1 && styles.activetabButtonText,
            ]}>
            Your Ideas
          </Text>
        </TouchableOpacity>

        {/* Button 2 */}
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 2 && styles.activeTabButton]}
          onPress={() => onPressTab(2)}>
          <Text
            style={[
              styles.tabButtonText,
              activeTab === 2 && styles.activetabButtonText,
            ]}>
            Winners
          </Text>
        </TouchableOpacity>

        {/* Button 3 */}
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 3 && styles.activeTabButton]}
          onPress={() => onPressTab(3)}>
          {/* <Text style={styles.tabButtonText}>People</Text> */}
          <Text
            style={[
              styles.tabButtonText,
              activeTab === 3 && styles.activetabButtonText,
            ]}>
            People
          </Text>
        </TouchableOpacity>
      </View>
      {activeTab === 1 && (
       <YourIdeas/>
      )}

      {activeTab === 2 && (
        <Winner/>
      )}
       {activeTab === 3 && (
        <People/>
      )}
    </>
  );
};
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

export default ButtonTab;
