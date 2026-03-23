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
import { contact, forwardarrow, help, profile, settings, share } from '../../assets/svgs';
import { IMenuItemProps } from './myprofile';
import { styles } from './styles';
const { width, height } = Dimensions.get('window');

const MenuItem = ({ title, icon }: IMenuItemProps) => {
  return (
    <TouchableOpacity style={styles.menuItem}>

      {/* LEFT SIDE (Icon + Text) */}
      <View style={styles.leftSection}>
        <SvgXml xml={icon} />
        <Text style={styles.menuText}>{title}</Text>
      </View>

      {/* RIGHT SIDE (Arrow) */}
      <SvgXml xml={forwardarrow} />
    </TouchableOpacity>
  );
};
const MENU_ITEMS = [
  { id: 1, title: 'Profile', icon: profile },
  { id: 2, title: 'Setting', icon: settings },
  { id: 3, title: 'Contact', icon: contact },
  { id: 4, title: 'Share App', icon: share },
  { id: 5, title: 'Help', icon: help },
];
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

        <View style={styles.menuContainer}>
          {MENU_ITEMS.map(item => (
            <MenuItem key={item.id} title={item.title} icon={item.icon} />
          ))}
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