import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import appStyle from './AppTheme';
import {WhiteLabelConfig} from './WhiteLabel/WhiteLabelConfig';

const App = () => (
  <SafeAreaView style={appStyle.screen}>
    <Text style={appStyle.title}>{WhiteLabelConfig.APP_NAME}</Text>
    <View style={appStyle.container}>
      <View style={appStyle.greeting}>
        <Text style={appStyle.greetingText}>
          {WhiteLabelConfig.GREETING_TEXT}
        </Text>
      </View>
    </View>
  </SafeAreaView>
);

export default App;