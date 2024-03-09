import { Fragment } from 'react';
import { StatusBar } from 'expo-status-bar';
import Navigation from './src/Navigation';

export default function App() {
  return (
    <Fragment>
      <Navigation />
      <StatusBar style='light' />
    </Fragment>
  );
}
