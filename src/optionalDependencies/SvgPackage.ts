let SvgPackage: any;
try {
  SvgPackage = require('react-native-svg');
  // Sadly we cannot verify with require('react-native-svg-transformer');
} catch (error) {
  console.error(error, SvgPackage);
  
}

export default SvgPackage;
