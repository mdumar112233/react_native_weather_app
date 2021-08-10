import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';


export default function Header() {
    return (
        <View>
            <Appbar.Header>
            <Appbar.Content style={{alignItems: 'center'}} title="Weather app" subtitle='Select city'/>
            </Appbar.Header>
        </View>
    )
}

const styles = StyleSheet.create({})
