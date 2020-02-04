import React from "react";
import MealList from '../components/MealList'


import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import Meal from "../models/meal";

const CategoryMealScreen = props => {
    const catID = props.navigation.getParam("categoryID");

    const displayedMeals = MEALS.filter(
        meal => meal.categoryIDs.indexOf(catID) >= 0
    );
    
    return (
        <MealList listData={displayedMeals} navigation={props.navigation}/>
    );
};


CategoryMealScreen.navigationOptions = navigationData => {
    const catID = navigationData.navigation.getParam("categoryID");
    const selectedCategory = CATEGORIES.find(cat => cat.id === catID);

    return {
        headerTitle: selectedCategory.title
    };
};

export default CategoryMealScreen;
