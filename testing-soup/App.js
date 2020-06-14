import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Camera } from 'expo-camera';
import {Permissions} from 'expo';
import {Ionicons} from '@expo/vector-icons'


import Constants from 'expo-constants';
// You can import from local files
//import AssetExample from './components/AssetExample';
// or any pure javascript modules available in npm

export default function App() {
  const [hasPermission, setHasPermission] = React.useState(null);
  const [cameraRef, setCameraRef] = React.useState(null);
  const [type, setType] = React.useState(Camera.Constants.Type.back);
  const [recording, setRecording] = React.useState(false)

 /* React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  /*if(hasPermission===null){
    return <View/>
  } 
  if(hasPermission===false){
    return <Text > No access to camera</Text>
  }*/
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={ref => {
        setCameraRef(ref) ;
  }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'flex-end'
          }}>
            <View style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly'
            }}>
            <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end'
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Ionicons name= 'md-reverse-camera' size={40} color="white" />
            
          </TouchableOpacity>
          
          <TouchableOpacity style={{alignSelf: 'center'}} onPress={
            async() => {
              if(!recording){
                setRecording(true)
              let video = await cameraRef.recordAsync();
              console.log('video', video);
            } else {
                setRecording(false)
                cameraRef.stopRecording()
            } 
          }}>
            <View style={{ 
               borderWidth: 2,
               borderRadius:"50%",
               borderColor: 'red',
               height: 50,
               width:50,
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center'}}
            >
              <View style={{
                 borderWidth: 2,
                 borderRadius:"50%",
                 borderColor: 'red',
                 height: 40,
                 width:40,
                 backgroundColor: 'red'}} >
              </View>
            </View>
          </TouchableOpacity>
            </View>
        </View>
      </Camera>
    </View>
  );
}
