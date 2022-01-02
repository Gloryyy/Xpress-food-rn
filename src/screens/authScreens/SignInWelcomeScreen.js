/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {colors, parameters, title} from '../../global/styles';
import * as Animatable from 'react-native-animatable';
import Swiper from 'react-native-swiper';
import {Icon, Button, SocialIcon} from 'react-native-elements';

export default function SignInWelcomeScreen({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 3,
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingTop: 20,
        }}>
        <Text
          style={{
            fontSize: 26,
            color: colors.buttons,
            fontWeight: 'bold',
          }}>
          DISCOVER RESTAURANTS
        </Text>
        <Text
          style={{
            fontSize: 26,
            color: colors.buttons,
            fontWeight: 'bold',
          }}>
          IN YOUR AREA
        </Text>
      </View>

      <View style={{flex: 4, justifyContent: 'center'}}>
        <Swiper autoplay>
          <View style={styles.slide1}>
            <Image
              source={{
                uri: 'https://www.wbcsd.org/var/site/storage/images/media/images/fresh_pa/80809-2-eng-GB/FRESH_PA_i1140.jpg',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View style={styles.slide2}>
            <Image
              source={{
                uri: 'https://images.theconversation.com/files/368263/original/file-20201109-22-lqiq5c.jpg?ixlib=rb-1.1.0&rect=20%2C543%2C6689%2C3339&q=45&auto=format&w=1356&h=668&fit=crop',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View style={styles.slide3}>
            <Image
              source={{
                uri: 'https://cdnexpatwomanfood.expatwoman.com/s3fs-public/balancedmeal-main.jpg',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View style={styles.slide3}>
            <Image
              source={{
                uri: 'https://fodmapchallenge.com/wp-content/uploads/2020/09/Rainbow-Buddha-Bowls-_-Vegan-Buddha-Bowls-_-Two-Spoons-961x617.jpeg',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>
        </Swiper>
      </View>

      <View style={{flex: 4, justifyContent: 'flex-end', marginBottom: 20}}>
        <View style={{marginHorizontal: 20, marginTop: 30}}>
          <Button
            title="SIGN IN"
            buttonStyle={parameters.styledButton}
            titleStyle={parameters.buttonTitle}
            onPress={() => {
              navigation.navigate('SignInScreen');
            }}
          />
        </View>

        <View style={{marginHorizontal: 20, marginTop: 30}}>
          <Button
            title="Create an account"
            buttonStyle={styles.createButton}
            titleStyle={styles.createButtonTitle}
            onPress={() => {
              navigation.navigate('SignUpScreen');
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9dd6eb',
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97cae5',
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92bbd9',
  },

  createButton: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 20,
    borderColor: colors.buttons,
  },

  createButtonTitle: {
    color: colors.grey1,
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
