export const products = [
    {
      name: 'Chicken noodles',
      image: '/assets/img/chickennoodles.jpg',
      description: 'Satisfying mix of chewy noodles, succulent chicken, and savory broth creates a delightful combination of flavors and textures.',
      price: 8.99,
      availability: true
    },
    {
      name: 'Chicken with rice',
      image: '/assets/img/chickenrice.jpg',
      description: 'Tender, juicy chicken served with fluffy rice, often seasoned with herbs and spices, creating a delicious and comforting meal.',
      price: 7.99,
      availability: true
    },
    {
      name: 'Rice with Noodles',
      image: '/assets/img/ricenoodles.jpg',
      description: 'A hearty dish made with a blend of cooked rice and noodles,stir-fried with vegetables and protein, creating a tasty and filling meal.',
      price: 6.99,
      availability: true
    },
    {
      name: 'Pizza Margherita and Olives ',
      image: '/assets/img/pizzaoliv.jpg',
      description: 'A classic pizza topped with tangy tomato sauce, creamy mozzarella cheese, fresh basil, and salty olives, creating a delicious and savory flavor combination.',
      price: 9.99,
      availability: false
    },
    {
      name: 'Pizza with salami',
      image: '/assets/img/pizzasalami.jpg',
      description: 'A mouthwatering pizza topped with tangy tomato sauce, gooey mozzarella cheese, savory slices of salami, and sometimes additional toppings, creating a satisfying and flavorful meal.',
      price: 10.99,
      availability: false
    },
    {
      name: 'Pizza Margherita',
      image: '/assets/img/pizzatomato.jpg',
      description: 'A simple yet delicious pizza topped with tangy tomato sauce, creamy mozzarella cheese, and fresh basil, creating a classic and timeless flavor combination.',
      price: 15.99,
      availability: true
    }
   
  ];

  export interface IProducts {
    name: string;
    image: string;
    description: string;
    price: number;
    availability: boolean;
    }
  