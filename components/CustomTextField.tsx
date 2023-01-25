import React from 'react';
import {TextInput} from 'react-native-paper';
import {FormikValues, useFormikContext} from 'formik';
import {ReturnKeyTypeOptions, View, Text} from 'react-native';
import lodash from 'lodash';

const CustomTextField = ({
  id,
  autoFocus,
  placeholder,
  returnKey = 'done',
  multiline,
}: {
  id: string;
  autoFocus?: boolean;
  placeholder?: string;
  returnKey?: ReturnKeyTypeOptions;
  multiline?: boolean;
}) => {
  const {setFieldValue, values, errors, touched} =
    useFormikContext<FormikValues>();

  return (
    <View>
      <TextInput
        value={values[id]}
        mode="outlined"
        autoFocus={autoFocus ? autoFocus : false}
        placeholder={placeholder ? placeholder : lodash.startCase(id)}
        returnKeyType={returnKey}
        onChangeText={text => setFieldValue(id, text)}
        style={{
          backgroundColor: 'white',
          marginVertical: 10,
          textAlignVertical: 'top',
          height: multiline ? 150 : 60,
        }}
        multiline={multiline}
        autoComplete="off"
        blurOnSubmit={true}
      />
      {errors[id] && touched && (
        <Text style={{color: 'red'}}>{errors[id] as string}</Text>
      )}
    </View>
  );
};

export default CustomTextField;
