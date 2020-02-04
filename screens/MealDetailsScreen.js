import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { Header } from 'react-navigation-stack';

const MealDetailScreen = (props) => {

    const mealID = props.navigation.getParam('mealID')
    const selectedMeal = MEALS.find(meal => 
        meal.id === mealID)
    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Button title="Go Back To My Categories" onPress={() => {
                props.navigation.popToTop();
                }}/>
        </View>
    )
}

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealID = navigationData.navigation.getParam('mealID')
    const selectedMeal = MEALS.find(meal => 
        meal.id === mealID
    )
    return {
        headerTitle: selectedMeal.title,
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Favourite' iconName='ios-star' onPress={() => {console.log('Mark as favourite')}}/>
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default MealDetailScreen;