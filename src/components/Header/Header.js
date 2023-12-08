import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import menu from '../../assets/img/menu.png';
import notification from '../../assets/img/notifcation.png';
import logo from '../../assets/img/logo.png';
import circle1 from '../../assets/img/circle1.png';
import circle2 from '../../assets/img/circle2.png';
import circle3 from '../../assets/img/circle3.png';
import circle4 from '../../assets/img/circle4.png';
import circle5 from '../../assets/img/circle5.png';
import rect1 from '../../assets/img/rect1.png';
import {useNavigation} from '@react-navigation/native';
import ButtonTab from '../ButtonTab/ButtonTab';


// Header component
const Header = () => {
  const navigation=useNavigation()
  const [activeTab, setActiveTab] = useState(1);

  const handleTabPress = tab => {
    console.log(tab);
    setActiveTab(tab);
  };

  return (
    <>
      {/* <View style={styles.container}>
     
        <View style={styles.firstRow}>
          <View style={styles.iconContainer}>
           

            <Image source={menu} />
          </View>

          <View style={styles.logoContainer}>
           
            <Image source={logo} />
          </View>

          <View style={styles.iconContainer}>
       
            <Image source={notification} style={{left:50}} />
          </View>
        </View>

       
        <View style={styles.secondRow}>
          <Text style={styles.greetingText}>
            Hi Ankith, You are doing great
          </Text>
        </View>
      </View> */}
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
          <View style={styles.notificationContainer}>
            <View style={styles.circle} className="bg-[#DB9A4D]" />
            <TouchableOpacity onPress={()=>navigation.navigate('Notification')}>
              <Image source={require('../../assets/NotificationIcon.png')} />
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex flex-row mt-6  ">
          <Text className="text-[#FFFFFF] text-[16px] pl-2" >Hi Ankith </Text>
          <Text className="text-[#FFFFFF] font-bold text-[16px]" style={{fontFamily:'Poppins'}}>
            You are doing great
          </Text>
        </View>
      </View>
      <View style={styles.roundedBox}>
        <Text style={styles.boxText}>Your status</Text>
        {/* Progress status content */}
        <View style={styles.progressContainer}>
          {/* 5 Circles */}
          <View style={styles.progressItem}>
            <View style={styles.progressCircle}>
              <Image source={circle1} style={styles.circleImage} />
            </View>
            <Text style={styles.progressText}>100</Text>
          </View>

          <View style={styles.progressBar}>
            <Image source={rect1} style={styles.rectangleImage} />
          </View>

          <View style={styles.progressItem}>
            <View style={styles.progressCircle}>
              <Image source={circle2} style={styles.circleImage} />
            </View>
            <Text style={styles.progressText}>100</Text>
          </View>

          <View style={styles.progressBar}>
            <Image source={rect1} style={styles.rectangleImage} />
          </View>

          <View style={styles.progressItem}>
            <View style={styles.progressCircle}>
              <Image source={circle3} style={styles.circleImage} />
            </View>
            <Text style={styles.progressText}>100</Text>
          </View>

          <View style={styles.progressBar}>
            <Image source={rect1} style={styles.rectangleImage} />
          </View>

          <View style={styles.progressItem}>
            <View style={styles.progressCircle}>
              <Image source={circle4} style={styles.circleImage} />
            </View>
            <Text style={styles.progressText}>100</Text>
          </View>

          <View style={styles.progressBar}>
            <Image source={rect1} style={styles.rectangleImage} />
          </View>

          <View style={styles.progressItem}>
            <View style={styles.progressCircle}>
              <Image source={circle5} style={styles.circleImage} />
            </View>
            <Text style={styles.progressText}>100</Text>
          </View>
        </View>

        {/* Additional content or text if needed */}
      </View>


      <View className="mb-6">
        <ButtonTab activeTab={activeTab} onPressTab={handleTabPress} />
      </View>
    </>
  );
};

// Define styles using StyleSheet
const styles = StyleSheet.create({
  notificationContainer: {
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
  container: {
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: '#007CBA',
    padding: 16,
    height: 200, // Adjusted height to accommodate two rows
  },
  progressItem: {
    alignItems: 'center',
  },
  roundedBox: {
    bottom: 90,
    backgroundColor: '#C1EAFF',
    borderRadius: 20, // Adjust the radius as needed
    padding: 16,
    paddingBottom: 3,
    margin: 20,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  progressCircle: {
    width: 40,
    height: 40,
    borderRadius: 20, // Half of the width and height for a circle
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
      android: {
        elevation: 13,
      },
    }),
  },
  circleImage: {
    width: 25, // Adjust the image size as needed
    height: 25,
    resizeMode: 'contain',
  },
  progressBar: {
    flex: 1,
    width: 24,
    height: 10,

    bottom: 10,
    backgroundColor: 'white',
    //   marginHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangleImage: {
    width: 35, // Adjust the image size as needed
    height: 38,
    resizeMode: 'contain',
  },
  boxText: {
    color: '#6A6A6A',
    fontSize: 14,
    marginBottom: 15,
    fontWeight: '500',
  },
  firstRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    width: '25%',
  },
  iconText: {
    color: 'white',
    fontSize: 18,
  },
  logoContainer: {
    width: '25%',
    alignItems: 'center',
  },
  logoText: {
    color: 'white',
    fontSize: 18,
  },
  secondRow: {
    marginTop: 28,
  },
  greetingText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Header;

// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import {Image} from 'react-native';
// import {TouchableOpacity} from 'react-native';

// const Header = () => {
//   return (
//     <View
//       className=" bg-[#007CBA] p-6  "
//       style={{
//         height: 200,
//         borderBottomLeftRadius: 50,
//         borderBottomRightRadius: 50,
//       }}>
//       <View className="flex flex-row justify-between items-center">
//         <TouchableOpacity>
//           <Image source={require('../../assets/Hamburger.png')} />
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Image source={require('../../assets/NestleIcon.png')} />
//         </TouchableOpacity>
//         <View style={styles.container}>
//           <View style={styles.circle} className="bg-[#DB9A4D]" />
//           <TouchableOpacity>
//             <Image source={require('../../assets/NotificationIcon.png')} />
//           </TouchableOpacity>
//         </View>
//       </View>

//       <View className="flex flex-row mt-6  ">
//       <Text className="text-[#FFFFFF] text-[16px] pl-2">Hi Ankith </Text>
//       <Text className="text-[#FFFFFF] font-bold text-[16px]">You are doing great</Text>
//       </View>
//     </View>
//   );
// };

// export default Header;

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   circle: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     left: 24,
//     bottom: 4,
//     zIndex: 1,
//     // backgroundColor: 'black',
//     // marginRight: 10, // Adjust the margin as needed
//   },
//   text: {
//     fontSize: 12,
//     color: 'black',
//   },
// });
