import React from 'react';
import {useAppDispatch} from '../app/hooks';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NOTE_SCREEN} from '../screens/Note';
import {deleteNote} from '../reducers/notes';

const DropdownMenu = () => {
  const dispatch = useAppDispatch();
  const route = useRoute<RouteProp<RootNav, typeof NOTE_SCREEN>>();
  const navigation = useNavigation<UseNavigationProps>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{padding: 20, borderBottomWidth: 0.2}}
        onPress={() => {
          dispatch(deleteNote(route.params.note?.id!));
          navigation.goBack();
        }}>
        <Text>Delete note</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DropdownMenu;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: 'silver',
    right: 10,
    top: 20,
    borderRadius: 5,
    width: 200,
  },
});
