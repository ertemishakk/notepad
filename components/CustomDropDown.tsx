import React, {useState} from 'react';
import {View, Text} from 'react-native';
import DropDown from 'react-native-paper-dropdown';
import {FormikValues, useFormikContext} from 'formik';

export const CustomDropdown = ({
  label,
  list,
  id,
}: {
  label: string;
  list: {label: string; value: string}[];
  id: string;
}) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const {setFieldValue, values, errors, touched} =
    useFormikContext<FormikValues>();

  return (
    <View style={{marginVertical: 10}}>
      <DropDown
        mode="outlined"
        label={label}
        visible={showDropDown}
        showDropDown={() => setShowDropDown(true)}
        onDismiss={() => setShowDropDown(false)}
        setValue={value => setFieldValue(id, value)}
        value={values[id as keyof NoteType]}
        list={list}
        inputProps={{
          style: {backgroundColor: 'white'},
        }}
      />
      {errors[id] && touched && (
        <Text style={{color: 'red', marginTop: 10}}>
          {errors[id] as string}
        </Text>
      )}
    </View>
  );
};
