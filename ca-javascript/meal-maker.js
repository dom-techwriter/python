// https://www.youtube.com/watch?v=dfQlhjmb-P0

const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },

    get appetizers() { // when you call this, return the respective course
        return this._courses.appetizers;
    },
    get mains() {
        return this._courses.mains;
    },
    get desserts() {
        return this._courses.desserts;
    },
    set appetizers(appetizers) {
        this._courses.appetizers = appetizers;
    },
    set mains(mains) {
        this._courses.mains = mains;
    },
    set desserts(desserts) {
        this._courses.desserts = desserts;
    },

    get courses() {
      return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts,
        };
    },

    addDishToCourse (courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        };
        
        return this._courses[courseName].push(dish);
    },

    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },

    generateRandomMeal() {
        const appetizer= this.getRandomDishFromCourse('appetizers');
        const main= this.getRandomDishFromCourse('mains');
        const dessert= this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.main}. The price is $${totalPrice}.`;

    }
};



menu.addDishToCourse('appetizers','apple',1.00);
menu.addDishToCourse('appetizers','orange',1.20);
menu.addDishToCourse('appetizers','grapes',1.50);
menu.addDishToCourse('mains','chicken',5);
menu.addDishToCourse('mains','veal',5.50);
menu.addDishToCourse('mains','pork',6.20);
menu.addDishToCourse('desserts','chocolate',2.00);
menu.addDishToCourse('desserts','caramel',2.20);
menu.addDishToCourse('desserts','tart',2.60);

const meal = menu.generateRandomMeal();
console.log(meal);

