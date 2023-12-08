import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'
import HomeTopTab from '../../components/home/HomeTopTab'
import HomeIdeas from '../../components/home/HomeIdeas'
import HomeMain from '../../components/home/HomeMain'
import HomeNav from '../../components/home/HomeNav'
import HomeStatus from '../../components/home/HomeStatus'

const Home = () => {
  return (
    <ScrollView>
      <View>
      <HomeNav/>
      <HomeStatus/>
      <HomeTopTab/>
      <HomeIdeas/>
      <HomeMain/>
    </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({})