import React from 'react';
import { Platform, Button as RNButton } from 'react-native';
import { Button as MUIButton } from '@mui/material';

export const Button = (props) => {
  return Platform.OS === 'web' ? (
    <MUIButton {...props} />
  ) : (
    <RNButton {...props} />
  );
};