import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  InteractionManager,
} from 'react-native';

export default function PrivacyPolicyScreen() {
  return (
    <ScrollView>
      <View style={styles.Page}>
        <Text style={styles.header}>AMLAJAN PRIVACY POLICY</Text>
        <Text style={styles.paragraph}>
          This Privacy Policy describes how your personal information is
          collected, used, and shared when you visit or Amlajan.
        </Text>

        <Text style={styles.subHeader}>PERSONAL INFORMATION WE COLLECT</Text>
        <Text style={styles.paragraph}>
          Amlajan is a detail provider company. Our product provides information
          regarding the availability of oxygen cylinders in your nearby locality
          for a patient and supplying oxygen cylinders as providers. When you
          use the services, you’ll share some information with us. So we want to
          be upfront about the information we collect, how we use it, whom we
          share it with, and the controls we give you to access, update, and
          delete your information. That’s why we’ve written this Privacy Policy.
          Of course, if you still have questions about anything in our Privacy
          Policy, just contact us.
        </Text>
        <Text style={styles.subHeader}>INFORMATION YOU PROVIDE</Text>
        <Text style={styles.paragraph}>
          When you interact with our services, we collect information that you
          provide to us. we need to collect a few important details about you,
          such as your name, email address, phone number.
        </Text>
        <Text style={styles.paragraph}>
          When you contact customer support or communicate with us in any other
          way, we’ll collect whatever information you volunteer or that we need
          to resolve your question.
        </Text>
        <Text style={styles.subHeader}>SHARING YOUR PERSONAL INFORMATION</Text>
        <Text style={styles.paragraph}>
          We share the information of patients with providers and vice-versa,
          for some flow of tasks. Only the name, location and phone number will
          be shared with each other for easier communication and all the other
          data is kept safe with us.
        </Text>
        <Text style={styles.bottomLine}>
          Sambalpur, Burla, OR, 768018, India
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Page: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10,
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingBottom: 20,
    fontFamily: 'Montserrat-Regular',
  },
  subHeader: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 10,
    fontFamily: 'Montserrat-Regular',
  },
  paragraph: {
    textAlign: 'justify',
    paddingBottom: 30,
    fontFamily: 'Montserrat-Regular',
  },
  bottomLine: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
  },
});
