import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const guidelineBaseWidth = 360;

const scale = size => (width / guidelineBaseWidth) * size;

export { scale };
