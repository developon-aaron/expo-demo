const { Tabs } = require("expo-router");

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ headerShown: false, title: "Home" }}
      />
      <Tabs.Screen
        name="profile"
        options={{ headerShown: false, title: "Profile" }}
      />
      <Tabs.Screen
        name="school"
        options={{ headerShown: false, title: "School" }}
      />
      <Tabs.Screen
        name="forum"
        options={{ headerShown: false, title: "Forum" }}
      />
      <Tabs.Screen
        name="settings"
        options={{ headerShown: false, title: "Settings" }}
      />
    </Tabs>
  );
}
