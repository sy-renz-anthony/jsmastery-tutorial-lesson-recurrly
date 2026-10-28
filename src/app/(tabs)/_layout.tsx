import { tabs } from "@/constants/data";
import { clsx } from "clsx";
import { Tabs } from "expo-router";
import { Image, View } from "react-native";

const TabLayout = () => {
  /*this individually add the tabs to the nav bar
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="subscriptions" options={{ title: "Subscriptions" }} />
      <Tabs.Screen name="insights" options={{ title: "Insights" }} />
      <Tabs.Screen name="settings" options={{ title: "Settings" }} />
      <Tabs.Screen name="subscriptions/[id]" options={{ href: null }} />
    </Tabs>
  */

  const TabIcon = ({ focused, icon }: TabIconProps) => {
    return (
      <View className="tabs-icon">
        {/*this will render the rounded box icon and check if it is focused == true, then will give class name of tabs-active */}
        <View className={clsx("tabs-pill", focused && "tabs-active")}>
          <Image source={icon} className="tabs-glyph" />
        </View>
      </View>
    );
  };

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={tab.icon} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabLayout;
