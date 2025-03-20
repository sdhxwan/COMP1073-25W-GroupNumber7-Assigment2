
//Create the Smoothie class
class Smoothie {
    //Constructor to initilise the properties
    constructor(size, ingredients, base) {
        this.size = size; 
        this.ingredients = ingredients; 
        this.base = base;
    }

     //Method to calculate the total price
     calculatePrice() {
        //change the price depending the size
        let sizePrices = { small: 4.0, medium: 5.5, large: 7.0 };

        
        //ingredients costs $1.0 each, except protein powder
        let ingredientPrice = this.ingredients.reduce(
            (total, ingredient) => total + (ingredient === "protein powder" ? 1.5 : 1.0),0
        );

        //$0.5 more if the base is not milk
        let baseExtra = (this.base !== "milk") ? 0.5 : 0;

        //return the total price formated to 2 decimal places
        return (sizePrices[this.size] + ingredientPrice + baseExtra).toFixed(2);
    }
}