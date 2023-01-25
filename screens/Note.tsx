import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Formik, FormikHelpers} from 'formik';
import CustomTextField from '../components/CustomTextField';
import data from '../data.json';
import {CustomDropdown} from '../components/CustomDropDown';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../components/Button';
import {addToNotes, updateNote} from '../reducers/notes';
import {useAppDispatch} from '../app/hooks';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import HeaderRightButton from '../components/HeaderRightButton';
import * as yup from 'yup';

export const NOTE_SCREEN = 'Note';

const NewNote = () => {
  const dispatch = useAppDispatch();

  const navigation = useNavigation<UseNavigationProps>();
  const route = useRoute<RouteProp<RootNav, typeof NOTE_SCREEN>>();
  const item = route.params?.note;

  useEffect(() => {
    if (item) {
      navigation.setOptions({
        headerRight: () => <HeaderRightButton />,
      });
    }
  }, []);

  const submitForm = (values: NoteType) => {
    if (item) {
      dispatch(
        updateNote({
          ...item,
          ...values,
        }),
      );
    } else {
      dispatch(addToNotes(values));
    }
    navigation.goBack();
  };

  const schema = yup.object().shape({
    title: yup.string().required('Title is required'),
    note: yup.string().required('Note is required'),
    clientId: yup.string().required('Client is required'),
    categoryId: yup.string().required('Category is required'),
  });
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
      }}
      edges={['bottom']}>
      <Formik
        initialValues={{
          title: item?.title || '',
          note: item?.note || '',
          clientId: item?.clientId || '',
          categoryId: item?.categoryId || '',
        }}
        validationSchema={schema}
        onSubmit={submitForm}>
        {({handleSubmit}) => (
          <>
            <View style={{flex: 1}}>
              <CustomTextField id="title" />
              <CustomTextField id="note" multiline />
              <CustomDropdown
                id="clientId"
                label="Client"
                list={data.clients.map(client => ({
                  label: client.firstName + ' ' + client.lastName,
                  value: client.id,
                }))}
              />
              <CustomDropdown
                id="categoryId"
                label="Category"
                list={data.categories.map(category => ({
                  label: category.name,
                  value: category.id,
                }))}
              />
            </View>
            <Button label={item ? 'Update' : 'Create'} onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default NewNote;
