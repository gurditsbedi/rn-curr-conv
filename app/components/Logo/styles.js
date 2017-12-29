import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const imageWidth = Dimensions.get('window').width / 2;

const styles = EStyleSheet.create({
  $largeContainerSize: imageWidth,
  $largeImageSize: imageWidth / 2,
  $smallContainerSize: imageWidth / 2,
  $smallImageSize: imageWidth / 4,
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoCombine: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoBack: {
    width: imageWidth,
    height: imageWidth,
  },
  logo: {
    position: 'absolute',
    width: imageWidth / 2,
    height: imageWidth / 2,
  },
  logoText: {
    marginTop: 13,
    fontSize: 24,
    fontWeight: '600',
    color: '$white',
  },
});

export default styles;
