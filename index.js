/**
 * @format
 */

import React, { Component } from 'react';
import { AppRegistry, Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';

import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
