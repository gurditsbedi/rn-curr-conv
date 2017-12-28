import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const imageWidth = Dimensions.get('window').width / 2;

const styles = EStyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoCombine: {
    position: 'relative',
  },
  logoBack: {
    width: imageWidth,
    height: imageWidth,
  },
  logo: {
    position: 'absolute',
    width: imageWidth / 2,
    height: imageWidth / 2,
    top: imageWidth / 4,
    left: imageWidth / 4,
  },
  logoText: {
    marginTop: 13,
    fontSize: 24,
    fontWeight: '600',
    color: '$white',
  },
});

export default styles;
