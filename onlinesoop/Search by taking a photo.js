import React from 'react';
import { View, Image } from 'react-native';

export default function Visual1() {
    return (
        <View style={{ 
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ffffff',
        }}>
            <Image
                style={{
                    width: 300,
                    height: 500,
                    resizeMode: 'cover',
                    marginBottom: 30,
                }}
                source={require('./assets/gr.png')} 
            />
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 30,
            }}>
                <Image
                    style={{
                        width: 25, 
                        height: 25,
                        resizeMode: 'contain',
                        marginRight: 25,
                    }}
                    source={require('./assets/lk.png')} 
                />
                <Image
                    style={{
                        width: 50, 
                        height: 50,
                        resizeMode: 'contain',
                        borderRadius: 50,
                        marginRight: 5,
                    }}
                    source={require('./assets/images.png')} 
                />
                <Image
                    style={{
                        width: 25, 
                        height: 25,
                        resizeMode: 'contain',
                        marginLeft: 25,
                    }}
                    source={require('./assets/pink.jpeg')} 
                />
            </View>
        </View>
    );
}