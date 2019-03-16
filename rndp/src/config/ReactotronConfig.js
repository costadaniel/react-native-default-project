/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-undef */
import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  // Coloque o seu IP dentro da rede em host caso você esteja utilizando um device real conectado via USB
  const tron = Reactotron.configure({ host: '192.168.1.28' }) // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .connect(); // let's connect!

  console.tron = tron;
  tron.clear();
}
