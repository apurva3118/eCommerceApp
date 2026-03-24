import React from 'react';
import {
  View,
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
import Typography from '../../components/typography';

const MenuItem = ({ title, icon, onPress }: IMenuItemProps) => {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={styles.leftSection}>
        <SvgXml xml={icon} />
        <Typography style={styles.menuText}>{title}</Typography>
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
  { id: 6, title: 'My Orders', icon: profile }
];
const MyProfile = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const handleMenuPress = (id: number) => {
    if (id === 2) {
      navigation.navigate('Settings');
    }
    if (id === 6) {
      navigation.navigate('Orders');
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
          <Typography style={styles.name}>Mark Adam</Typography>
          <Typography style={styles.email}>Sunny_Koelpin45@hotmail.com</Typography>
        </View>

        <View style={styles.menuContainer}>
          {MENU_ITEMS.map(item => (
            <MenuItem key={item.id} title={item.title} icon={item.icon} onPress={() => handleMenuPress(item.id)} />
          ))}
        </View>

      </View>

      <View style={styles.bottomSection}>
        <TouchableOpacity>
          <Typography style={styles.signOutText}>Sign Out</Typography>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

export default MyProfile;