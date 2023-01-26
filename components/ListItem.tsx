import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import moment from 'moment';
import data from '../data.json';
import {useNavigation} from '@react-navigation/native';
import {NOTE_SCREEN} from '../screens/Note';

const ListItem = ({item}: {item: NoteType}) => {
  const client = data.clients.filter(client => client.id === item.clientId)[0];
  const category = data.categories.filter(
    categ => categ.id === item.categoryId,
  )[0];
  const navigation = useNavigation<UseNavigationProps>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(NOTE_SCREEN, {note: item})}
      style={{
        borderBottomColor: 'silver',
        borderBottomWidth: 0.5,
        padding: 20,
      }}>
      <View>
        <Text numberOfLines={1} style={{fontSize: 18, fontWeight: '500'}}>
          {item.title}
        </Text>
        <Text
          numberOfLines={1}
          style={{marginTop: 10, fontSize: 15, color: 'grey'}}>
          {item.note}
        </Text>
        <Text style={{marginTop: 10, color: 'grey'}}>
          {moment().format('L')} {client.firstName + ' ' + client.lastName}{' '}
          {category.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
