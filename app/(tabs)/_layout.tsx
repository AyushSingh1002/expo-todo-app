import {Ionicons} from '@expo/vector-icons'
import React from 'react'
import { Tabs } from 'expo-router'
import useThemes from '@/hooks/useThemes'

const _layout = () => {
    const { colors } = useThemes();
  return (
   <Tabs
   screenOptions={{
    tabBarActiveTintColor: colors.primary,
    tabBarInactiveTintColor: colors.textMuted,
    tabBarStyle: {
        borderTopColor: colors.border,
        backgroundColor: colors.surface,
        height: 90,
        paddingBottom: 30,
        paddingTop: 10,
    },
    tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: "600"
    },
    headerShown: false,
   }}
   >
    <Tabs.Screen 
    name='index'
    options={{
        title: "Todos",
        tabBarIcon: ({ color, size }) => (
            <Ionicons  name='flash-outline' size={size} color={color}/>  
        )
    }}
    />
    <Tabs.Screen 
    name='settings'
    options={{
        title: "settings",
        tabBarIcon: ({ color, size }) => (
            <Ionicons  name='settings' size={size} color={color}/>  
        )
    }}
    />
   </Tabs>
  )
}

export default _layout