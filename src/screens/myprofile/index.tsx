import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';
import { forwardarrow } from '../../assets/svgs';
const { width, height } = Dimensions.get('window');

const MenuItem = ({ title }) => {
  return (
    <TouchableOpacity style={styles.menuItem}>
      <Text style={styles.menuText}>{title}</Text>
      <SvgXml xml={forwardarrow} />
    </TouchableOpacity>
  );
};

const MyProfile = () => {
  return (
    <SafeAreaView style={styles.container}>

      {/* TOP CONTENT */}
      <View style={styles.topSection}>

        {/* Header */}
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
            style={styles.avatar}
          />
          <Text style={styles.name}>Mark Adam</Text>
          <Text style={styles.email}>Sunny_Koelpin45@hotmail.com</Text>
        </View>

        {/* Menu */}
        <View style={styles.menuContainer}>
          <MenuItem title="Profile" />
          <MenuItem title="Setting" />
          <MenuItem title="Contact" />
          <MenuItem title="Share App" />
          <MenuItem title="Help" />
        </View>

      </View>

      {/* SIGN OUT (fixed bottom spacing without margin) */}
      <View style={styles.bottomSection}>
        <TouchableOpacity>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },

  topSection: {
    flex: 1,
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.02,
  },

  header: {
    alignItems: 'center',
    paddingBottom: height * 0.025,
  },

  avatar: {
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: (width * 0.25) / 2,
  },

  name: {
    fontSize: width * 0.06,
    fontWeight: '600',
    paddingTop: 8,
  },

  email: {
    fontSize: width * 0.035,
    color: 'gray',
    paddingTop: 4,
  },

  menuContainer: {
    paddingTop: height * 0.01,
    gap: height * 0.015, // ✅ clean spacing instead of margin
  },

  menuItem: {
    backgroundColor: '#EDEDED',
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.04,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  menuText: {
    fontSize: width * 0.04,
    fontWeight: '500',
  },

  arrow: {
    fontSize: width * 0.05,
    color: '#555',
  },

  bottomSection: {
    paddingBottom: height * 0.03,
    alignItems: 'center',
  },

  signOutText: {
    color: 'orange',
    fontSize: width * 0.045,
    fontWeight: '600',
  },
});