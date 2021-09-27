import {NativeModules} from 'react-native';

export const WhiteLabelConfig = {
  APP_NAME: NativeModules.WhiteLabelConfig.getAppName(),
  PRIMARY_COLOR: NativeModules.WhiteLabelConfig.getPrimaryColor(),
  PRIMARY_TEXT_COLOR: NativeModules.WhiteLabelConfig.getPrimaryTextColor(),
  GREETING_TEXT: NativeModules.WhiteLabelConfig.getGreetingText(),
};
