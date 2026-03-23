import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';
import { contact, forwardarrow, help, profile, settings, share } from '../../assets/svgs';
import { IMenuItemProps } from './myprofile';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../utils/linking';

const MenuItem = ({ title, icon, onPress }: IMenuItemProps) => {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={styles.leftSection}>
        <SvgXml xml={icon} />
        <Text style={styles.menuText}>{title}</Text>
      </View>
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
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const handleMenuPress = (title: string) => {
    if (title === 'Setting') {
      navigation.navigate('Settings');
    }
  };
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
            <MenuItem key={item.id} title={item.title} icon={item.icon} onPress={() => handleMenuPress(item.title)} />
          ))}
        </View>

      </View>

      <View style={styles.bottomSection}>
        <TouchableOpacity>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

export default MyProfile;