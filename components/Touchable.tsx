import React from 'react';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  StyleProp,
  ViewStyle,
} from 'react-native';

const Touchable = ({
  children,
  onPress,
  style,
}: {
  children: React.ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}) => {
  const Component =
    Platform.OS === 'ios'
      ? TouchableOpacity
      : (TouchableNativeFeedback as React.ElementType);
  return (
    <Component style={style} onPress={onPress}>
      {children}
    </Component>
  );
};

export default Touchable;
