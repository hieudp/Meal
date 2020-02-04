import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import Meal from "../models/meal";

const CategoryMealScreen = props => {
    const catID = props.navigation.getParam("categoryID");

    const displayedMeals = MEALS.filter(
        meal => meal.categoryIDs.indexOf(catID) >= 0
    );

    const renderMealItem = itemData => {
        return (
            <MealItem
                title={itemData.item.title}
                image={itemData.item.imageURL}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                onSelectMeal={() => {
                    props.navigation.navigate({routeName: 'MealDetail', params: {
                        mealID: itemData.item.id,
                        
                    }
                    })
                }}
            />
        );
    };

    return (
        <View style={styles.screen}>
            <FlatList
                data={displayedMeals}
                renderItem={renderMealItem}
                style={{ width: "90%", padding: 5 }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

CategoryMealScreen.navigationOptions = navigationData => {
    const catID = navigationData.navigation.getParam("categoryID");
    const selectedCategory = CATEGORIES.find(cat => cat.id === catID);

    return {
        headerTitle: selectedCategory.title
    };
};

export default CategoryMealScreen;
