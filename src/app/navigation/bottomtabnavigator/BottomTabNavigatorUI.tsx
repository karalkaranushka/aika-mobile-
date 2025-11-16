import React, { useEffect, useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { SvgXml } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import { fetchTabConfig, TabConfig } from './BottomTabNavigatorLogic';
import { colors } from '../../../theme/HomeTheme';

const Tab = createBottomTabNavigator();

const SCREEN_WIDTH = Dimensions.get('window').width;

const BottomTabNavigatorUI: React.FC = () => {
  const [tabs, setTabs] = useState<TabConfig[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTabs = async () => {
      try {
        const tabConfig = await fetchTabConfig();
        setTabs(tabConfig);
      } catch (error) {
        console.error('Failed to load tab config:', error);
      } finally {
        setLoading(false);
      }
    };
    loadTabs();
  }, []);

  if (loading) {
    return null; 
  }

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <CustomTabBar {...props} tabs={tabs} />}
    >
      {tabs.map((tab) => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={{ title: tab.label }}
        />
      ))}
    </Tab.Navigator>
  );
};

type CustomTabBarProps = BottomTabBarProps & { tabs: TabConfig[] };

const CustomTabBar: React.FC<CustomTabBarProps> = ({ state, descriptors, navigation, tabs }) => {
  // calculate width per tab (keeps center spacing comfortable)
  const tabCount = tabs.length || 1;
  const tabWidth = Math.min(96, Math.floor((SCREEN_WIDTH - 48) / tabCount));

  return (
    <SafeAreaView edges={['bottom']} style={styles.safeArea}>
      <View style={styles.container}>
        <LinearGradient
          colors={[colors.gradientStart, colors.gradientEnd]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.inner}
        >
          {tabs.map((tab, index) => {
            const focused = state.index === index;
            const color = focused ? '#6EE7B7' : '#C7CBD6'; 
            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: tab.name,
                canPreventDefault: true,
              });
              if (!event.defaultPrevented) {
                navigation.navigate(tab.name);
              }
            };
            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: tab.name,
              });
            };

            return (
              <TouchableOpacity
                key={tab.name}
                accessibilityRole="button"
                accessibilityState={focused ? { selected: true } : {}}
                onPress={onPress}
                onLongPress={onLongPress}
                style={[styles.tabButton, { width: tabWidth }]}
                activeOpacity={0.8}
              >
                <View style={styles.iconWrapper}>
                  <SvgXml xml={tab.icon} width={26} height={26} fill={color} />
                </View>
                <Text style={[styles.label, focused ? styles.labelActive : null]}>
                  {tab.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'transparent',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    // place the floating bar slightly above the bottom
    paddingBottom: Platform.OS === 'android' ? 10 : 18,
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: SCREEN_WIDTH - 32,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.18,
        shadowRadius: 18,
      },
      android: {
        elevation: 12,
      },
    }),
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
  },
  iconWrapper: {
    marginBottom: 4,
  },
  label: {
    fontSize: 11,
    color: '#C7CBD6',
    textAlign: 'center',
  },
  labelActive: {
    color: '#6EE7B7',
    fontWeight: '600',
  },
});

export default BottomTabNavigatorUI;