import {StyleSheet} from 'react-native';
import {WhiteLabelConfig} from './WhiteLabel/WhiteLabelConfig';

export default StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: WhiteLabelConfig.PRIMARY_COLOR,
  },
  title: {
    paddingHorizontal: 16,
    color: '#657b83',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    paddingTop: 60,
    alignItems: 'center',
  },
  greeting: {
    height: 100,
    width: 200,
    borderWidth: 1,
    borderColor: '#657b83',
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingText: {
    color: WhiteLabelConfig.PRIMARY_TEXT_COLOR,
  },
});
