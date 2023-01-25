import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BottomBar from '../components/BottomBar';
import {useAppSelector} from '../app/hooks';
import ListItem from '../components/ListItem';

export const NOTES_SCREEN = 'Notes';

const Notes = () => {
  const notes = useAppSelector(state => state.notes);

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: 'whitesmoke'}}
      edges={['top']}>
      <View style={{flex: 1}}>
        <Text style={{fontSize: 40, fontWeight: '600', margin: 20}}>Notes</Text>

        {notes.length === 0 && (
          <Text style={{fontSize: 18, marginHorizontal: 20}}>
            No messages found.
          </Text>
        )}

        <FlatList
          contentContainerStyle={{
            borderRadius: 10,
            backgroundColor: 'white',
            marginHorizontal: 20,
          }}
          data={notes}
          renderItem={({item}) => <ListItem item={item} />}
          keyExtractor={item => item.id!}
        />
      </View>
      <BottomBar />
    </SafeAreaView>
  );
};

export default Notes;
