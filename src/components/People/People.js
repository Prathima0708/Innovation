import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const People = () => {
  // Dummy data array
  const peopleData = [
    {id: '1', img: require('../../assets/img/peopl1.png'), name: '@kunal676'},
    {id: '2', img: require('../../assets/img/peopl2.png'), name: '@Andru676'},
    {id: '3', img: require('../../assets/img/peopl3.png'), name: '@roopa676'},
    {id: '4', img: require('../../assets/img/peopl4.png'), name: '@loki676'},
    {id: '5', img: require('../../assets/img/peopl5.png'), name: '@leena676'},

    // Add more dummy data as needed
  ];

  // Function to render a row of three people
  const renderRow = rowStartIndex => (
    <View style={styles.rowContainer} key={`row_${rowStartIndex}`}>
      {peopleData.slice(rowStartIndex, rowStartIndex + 3).map(person => (
        <View style={styles.personContainer} key={person.id}>
          <Image source={person.img} style={styles.personImage} />
          <Text style={styles.personName}>{person.name}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <>
      <View style={{bottom: 50}}>
        <View className="flex flex-row justify-between items-center px-8 ">
          <Text className="font-bold text-lg text-black">People</Text>
        </View>
        {Array.from({length: Math.ceil(peopleData.length / 3)}).map(
          (_, index) => renderRow(index * 2),
        )}
      </View>
      <View style={styles.button}>
        <TouchableOpacity>
          <Text style={styles.buttonText}>+ Add People</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginBottom: 10,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  personContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  personImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 5,
  },
  personName: {
    textAlign: 'center',
    color: '#303030',
    fontSize: 12,
    fontWeight: '500',
  },
  button: {
    marginHorizontal: 20,
    width: 350,
    height: 36,
    backgroundColor: '#007CBA',
  },
  buttonText: {
    color: '#FFF',

    fontSize: 12,
    textAlign: 'center',
    marginVertical: 10,
    fontWweight: '600',
  },
});

export default People;
