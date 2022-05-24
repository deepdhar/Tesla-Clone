import React from 'react';
import { View, Text, ImageBackground, Linking } from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';

const CarItem = (props) => {
    
    const { name, tagLine, tagLineCTA, image } = props.car;

    return (
        <View style={styles.carContainer}>

            <ImageBackground 
                // source={require('../../assets/images/ModelX.jpeg')}
                source={image}
                style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>
                    {tagLine}
                    {' '}
                    <Text style={styles.subtitleCTA}>
                        {tagLineCTA}
                    </Text>
                </Text>
            </View>


            {/* Button Container */}
            <View style={styles.buttonContainer}>
                <StyledButton 
                    type="primary"
                    content={"Custom Order"} 
                    onPress={()=>{
                        Linking.openURL('https://www.tesla.com/')
                    }}
                />

                <StyledButton 
                    type="secondary" 
                    content={"Existing Inventory"} 
                    onPress={()=>{
                        console.warn("Your Inventory is empty")
                    }}
                />
            </View>

        </View>
    );
};

export default CarItem;