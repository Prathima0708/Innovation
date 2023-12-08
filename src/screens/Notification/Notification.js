import { View, Text } from 'react-native'
import React, { useState } from 'react'
import NotificationContent from '../../components/NotificationContent/NotificationContent'

const Notification = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabPress = tab => {
      console.log(tab);
      setActiveTab(tab);
    };
  return (
    <View>
     <NotificationContent activeTab={activeTab} onPressTab={handleTabPress} />
    </View>
  )
}

export default Notification