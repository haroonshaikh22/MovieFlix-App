import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../constant';

const SubmitButton = (props: any) => {
  return (
    <TouchableOpacity
      style={{
        width: '50%',
        backgroundColor: Colors?.primary,
        height: 40,
        borderRadius: 20,
        marginTop: '5%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={props?.SubmitHandler}>
      <Text style={{color: Colors.white, fontWeight: '600', fontSize: 14}}>
        {props?.title}
      </Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({});
