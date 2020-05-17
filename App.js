import React, {Component} from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity,TextInput,Alert,Linking,Button,SafeAreaView, ScrollView,Dimensions } from 'react-native';
import * as Font from 'expo-font'
import Firebase from './components/firebase.js'
import 'react-native-gesture-handler';
import { createAppContainer, createSwitchNavigator, } from 'react-navigation';
import { createDrawerNavigator,DrawerItems } from 'react-navigation-drawer'
import { LinearGradient } from 'expo-linear-gradient';
import HomButton from './components/homebutton.js';
import Signoutbutton from './components/signoutbutton.js'
import {AntDesign,Feather} from 'react-native-vector-icons';
import {CalendarList, Agenda,calendarTheme} from 'react-native-calendars'
import * as Permissions from 'expo-permissions';
import * as Calendar from 'expo-calendar';

class HomeScreen extends React.Component{
  static navigationOptions = {
      title: 'Home'
    }
   render(){
     const {navigate} = this.props.navigation;
   return (
   <  View style={styles.container}>
   <LinearGradient
   colors = {['#bab9cb','#3c93dd','#5ea9e9']}
   style={{
             position: 'absolute',
             left: 0,
             right: 0,
             top: 0,
             height:"100%",
           }}
           />
           <TouchableOpacity
      onPress={() =>
          navigate('Login')
        }
      style={ styles.signUpStyle }>
      <Text style={ styles.buttontext }>Log In</Text>
    </TouchableOpacity>

    <TouchableOpacity
    style = {styles.signUpStyle2}
    onPress = {() =>navigate('Signup')}>

    <Text style={ styles.buttontext }>Sign Up With Email</Text>

</TouchableOpacity>
           </View>
         )
       }

}

class Events extends React.Component{
  static navigationOptions = {
      title: 'Home'
    }
   render(){
     const {navigate} = this.props.navigation;
   return (
   <  View style={styles.container}>
   <LinearGradient
   colors = {['#bab9cb','#3c93dd','#5ea9e9']}
   style={{
             position: 'absolute',
             left: 0,
             right: 0,
             top: 0,
             height:"100%",
           }}
           />
           </View>
         )
       }

}

class Profile extends React.Component{
  static navigationOptions = {
      title: 'Home'
    }
   render(){
     const {navigate} = this.props.navigation;
   return (
   <  View style={styles.container}>
   <LinearGradient
   colors = {['#bab9cb','#3c93dd','#5ea9e9']}
   style={{
             position: 'absolute',
             left: 0,
             right: 0,
             top: 0,
             height:"100%",
           }}
           />
           </View>
         )
       }

}

class Login extends React.Component{
  static navigationOptions = {
      title: 'Login'
    }
   render(){
     const {navigate} = this.props.navigation;
   return (
   <  View style={styles.container}>
   <LinearGradient
   colors = {['#bab9cb','#3c93dd','#5ea9e9']}
   style={{
             position: 'absolute',
             left: 0,
             right: 0,
             top: 0,
             height:"100%",
           }}
           />
           </View>
         )
       }

}
class Signup extends React.Component{
  static navigationOptions = {
      title: 'Signup'
    }
   render(){
     const {navigate} = this.props.navigation;
   return (
   <  View style={styles.container}>
   <LinearGradient
   colors = {['#bab9cb','#3c93dd','#5ea9e9']}
   style={{
             position: 'absolute',
             left: 0,
             right: 0,
             top: 0,
             height:"100%",
           }}
           />
           </View>
         )
       }

}

       const CustomDrawerComponent = (props) => (
         <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
           <View style={{height:150, backgroundColor: '#fff', alignItems:'center', justifyContent: 'center'}}>
           </View>
           <ScrollView>
             <DrawerItems {...props}/>
           </ScrollView>
         </SafeAreaView>
       )
       const Appstack = createDrawerNavigator({
         Home:{
         screen:HomeScreen
       },
         Events :{
         screen:Events
       },
       Profile:{
       screen:Profile
     },

   },
    {
  contentComponent: CustomDrawerComponent,
  contentOptions: {
    labelStyle: {
      fontSize: 15,
    },
  },

       }
     )


       const AppNavigator = createSwitchNavigator({
         Home: {
           screen: HomeScreen
         },
         Login:{
           screen:Login
         },
         Signup:{
           screen:Signup
         },
         Dashboard:{
           screen:Appstack
         },
         Profile:{
         screen:Profile
       },
       Events:{
         screen:Events
       },




       });


    export default createAppContainer(AppNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
