import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import Touchable from './Touchable';
import {useNavigation} from '@react-navigation/native';
import {NOTE_SCREEN} from '../screens/Note';
import {useAppSelector} from '../app/hooks';

const BottomBar = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<UseNavigationProps>();
  const notes = useAppSelector(state => state.notes);

  return (
    <View
      style={[
        {
          height: insets.bottom + 50,
        },
        styles.container,
      ]}>
      <Text style={{fontSize: 16}}>{notes.length} Notes</Text>
      <Touchable
        onPress={() => navigation.navigate(NOTE_SCREEN, {})}
        style={styles.iconContainer}>
        <Icon name="edit" size={25} color="black" />
      </Touchable>
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'whitesmoke',
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconContainer: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
});
