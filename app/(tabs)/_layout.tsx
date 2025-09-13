import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Redirect, Slot } from 'expo-router';

const _layout = () => {
    const isAuthenticated = true; // Replace with actual authentication logic

    if (!isAuthenticated) {
        return <Redirect href="/(auth)/sign-in" />;
    }
    return <Slot />
  

}

export default _layout

const styles = StyleSheet.create({})