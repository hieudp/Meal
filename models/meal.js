class Meal {
    constructor(
        id,
        categoryIDs,
        title,
        affordability,
        complexity,
        imageURL,
        duration,
        ingredients,
        steps,
        isGlutenFree,
        isVegan,
        isVegetarian,
        isLactoseFree
    ) {
        this.id = id;
        this.categoryIDs = categoryIDs;
        this.imageURL = imageURL;
        this.ingredients = ingredients;
        this.title = title;
        this.affordability = affordability;
        this.steps = steps;
        this.duration = duration;
        this.isGlutenFree = isGlutenFree;
        this.complexity = complexity;
        this.isVegan = isVegan;
        this.isVegetarian = isVegetarian;
        this.isLactoseFree = isLactoseFree;
    }
}

export default Meal;
