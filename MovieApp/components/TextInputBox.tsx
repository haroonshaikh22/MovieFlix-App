import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import SearchIcon from 'react-native-vector-icons/FontAwesome';

const TextInputBox = (props: any) => {
  return (
    <View style={[styles.inputBox]}>
      <TextInput
        onFocus={props.onFocus}
        maxLength={props.maxLength}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType ? props.keyboardType : 'default'}
        placeholderTextColor={'#000000'}
        placeholder={props?.placeholder}
        value={props?.value}
        onChangeText={props?.onChangeText}
        placeholderTextColor={'#FFFFFF'}
        style={{
          width: '90%',
          borderColor: '#FFFFFF',
          color: '#FFFFFF',
        }}
      />
      {props?.search && (
        <TouchableOpacity>
          <SearchIcon name="search" size={20} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TextInputBox;

const styles = StyleSheet.create({
  inputBox: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 10,
    height: 40,
    width: '100%',
    marginVertical: '5%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3A3F47',
  },
});
