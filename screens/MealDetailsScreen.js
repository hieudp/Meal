import React from 'react';
import { ScrollView, View, Image, Text, StyleSheet, Button } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { Header } from 'react-navigation-stack';
import DefaultText from '../components/DefaultText';

const ListItem = props => {
    return <View style={styles.listItem}>
        <DefaultText>{props.children}</DefaultText>
    </View>
}

const MealDetailScreen = (props) => {

    const mealID = props.navigation.getParam('mealID')
    const selectedMeal = MEALS.find(meal => 
        meal.id === mealID)
    return (
        <ScrollView>
            <Image source={{uri: selectedMeal.imageURL}} style={styles.image}/>
            <View style={styles.detail}>
                        <DefaultText>{selectedMeal.duration}m</DefaultText>
                        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
                    </View>
            <Text style={styles.title}>Ingrediens: </Text>
            {selectedMeal.ingredients.map((ingredient) => <ListItem key={ingredient}>{ingredient}</ListItem>)}
            <Text style={styles.title}>Steps: </Text>
            {selectedMeal.steps.map((step) => <ListItem key={step}>{step}</ListItem>)}
        </ScrollView>
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
    image: {
        width: '100%',
        height: 200
    },
    detail: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        textAlign: 'center'
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
})

export default MealDetailScreen;