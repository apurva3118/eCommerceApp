import React from 'react';
import { View, Pressable, Image, FlatList } from 'react-native';
import CustomHeader from '../../components/commonheader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';
import { forwardarrow } from '../../assets/svgs';
import Typography from '../../components/typography';
import { styles } from './styles';
import { SETTINGS_DATA } from '../../constants/productdata';

const Settings = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <CustomHeader title="Settings" />

      <View style={styles.container}>
        <Typography style={styles.sectionTitle}>Account</Typography>
        <Pressable style={styles.card}>
          <View style={styles.leftSection}>
            <Image
              source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
              style={styles.avatar}
            />

            <View>
              <Typography style={styles.name}>Mark Adam</Typography>
              <Typography style={styles.email}>Sunny_Koelpin45@hotmail.com</Typography>
            </View>
          </View>

          <SvgXml xml={forwardarrow} />
        </Pressable>

        {/* Divider */}
        <View style={styles.divider} />
        <Typography style={[styles.sectionTitle, { marginTop: 20 }]}>
          Setting
        </Typography>

        <FlatList
          data={SETTINGS_DATA}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable style={styles.settingItem}>
              <View style={styles.settingLeft}>
                <Image source={item.icon} />
                <Typography style={styles.settingText}>{item.title}</Typography>
              </View>

              <View style={styles.settingRight}>
                {item.rightText && (
                  <Typography style={styles.rightText}>{item.rightText}</Typography>
                )}
                <SvgXml xml={forwardarrow} />
              </View>
            </Pressable>
          )}
          ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        />
      </View>

    </SafeAreaView>
  );
};

export default Settings;
