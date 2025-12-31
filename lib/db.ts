
export interface Product {
    id: number;
    title: string;
    category: string;
    type: string;
    price: number;
    colors: string[];
    sizes: string[];
    description: string;
    rating: number;
    image: string[];
    stock: number;
}

export const db: Product[] = [
    { id: 1, title: "men's Casual Shirt", category: "men", type: "Cotton Shirt", price: 1250, colors: ["Red", "Blue", "Black"], sizes: ["M", "L", "XL"], description: "A comfortable casual shirt suitable for daily wear.", rating: 4.5, image: ["/images/men1-piece1.png", "/images/men1-piece2.png"], stock: 20 },

    { id: 2, title: "women's Summer Dress", category: "women", type: "Cotton Summer Dress", price: 2400, colors: ["Yellow", "White", "Pink"], sizes: ["S", "M", "L"], description: "Lightweight and breezy dress perfect for summer outings.", rating: 4.7, image: ["/images/women1-piece1.png", "/images/women1-piece2.png"], stock: 15 },

    { id: 3, title: "kids' Hoodie", category: "kids", type: "Cotton Hoodie", price: 950, colors: ["Blue", "Green", "Gray"], sizes: ["XS", "S", "M"], description: "Warm and cozy hoodie for kids to play in all seasons.", rating: 4.3, image: ["/images/kids1-piece1.png", "/images/kids1-piece2.png"], stock: 12 },

    { id: 4, title: "men's Sneakers", category: "men", type: "Casual Sneakers", price: 3200, colors: ["Black", "White", "Gray"], sizes: ["M", "L", "XL", "XXL"], description: "Stylish sneakers designed for comfort and durability.", rating: 4.6, image: ["/images/men2-piece1.png", "/images/men2-piece2.png"], stock: 0 },

    { id: 5, title: "women's Handbag", category: "women", type: "Leather Handbag", price: 4500, colors: ["Brown", "Black", "Beige"], sizes: ["M", "L"], description: "Elegant handbag made of high-quality materials.", rating: 4.8, image: ["/images/women2-piece1.png", "/images/women2-piece2.png"], stock: 10 },

    { id: 6, title: "kids' T-shirt", category: "kids", type: "Cotton T-Shirt", price: 450, colors: ["Red", "Blue", "Yellow"], sizes: ["XS", "S", "M", "L"], description: "Fun and colorful t-shirt for everyday wear.", rating: 4.4, image: ["/images/kids2-piece1.png", "/images/kids2-piece2.png"], stock: 25 },

    { id: 7, title: "men's Leather Jacket", category: "men", type: "Genuine Leather Jacket", price: 8500, colors: ["Black", "Brown"], sizes: ["L", "XL", "XXL"], description: "Premium leather jacket perfect for casual and formal outings.", rating: 4.9, image: ["/images/men3-piece1.png", "/images/men3-piece2.png"], stock: 8 },

    { id: 8, title: "women's Running Shoes", category: "women", type: "Running Shoes", price: 2800, colors: ["Pink", "White", "Gray"], sizes: ["S", "M", "L", "XL"], description: "Lightweight running shoes designed for maximum comfort.", rating: 4.5, image: ["/images/women3-piece1.png", "/images/women3-piece2.png"], stock: 14 },

    { id: 9, title: "kids' Shorts", category: "kids", type: "Cotton Shorts", price: 650, colors: ["Blue", "Green", "Gray"], sizes: ["XS", "S", "M"], description: "Comfortable shorts perfect for summer and playtime.", rating: 4.2, image: ["/images/kids3-piece1.png", "/images/kids3-piece2.png"], stock: 30 },

    { id: 10, title: "men's Watch", category: "men", type: "Stainless Steel Watch", price: 12000, colors: ["Black", "Silver", "Gold"], sizes: ["M", "L"], description: "Elegant wristwatch with a stylish design for all occasions.", rating: 4.7, image: ["/images/men4-piece1.png", "/images/men4-piece2.png"], stock: 5 },

    { id: 11, title: "women's Necklace", category: "women", type: "Gold Plated Necklace", price: 1500, colors: ["Gold", "Silver"], sizes: ["S", "M"], description: "Elegant necklace suitable for parties and casual events.", rating: 4.6, image: ["/images/women4-piece1.png", "/images/women4-piece2.png"], stock: 12 },

    { id: 12, title: "kids' Sneakers", category: "kids", type: "Sport Sneakers", price: 1100, colors: ["Red", "Blue", "Yellow"], sizes: ["XS", "S", "M"], description: "Durable sneakers perfect for active kids.", rating: 4.4, image: ["/images/kids1-piece1.png", "/images/kids1-piece2.png"], stock: 20 },

    { id: 13, title: "men's Formal Shirt", category: "men", type: "Formal Cotton Shirt", price: 1800, colors: ["White", "Blue", "Gray"], sizes: ["M", "L", "XL"], description: "Classic formal shirt for office and formal events.", rating: 4.5, image: ["/images/men5-piece1.png", "/images/men5-piece2.png"], stock: 18 },

    { id: 14, title: "women's Blazer", category: "women", type: "Formal Blazer", price: 3500, colors: ["Black", "Gray", "White"], sizes: ["S", "M", "L", "XL"], description: "Chic blazer suitable for office or casual events.", rating: 4.7, image: ["/images/women1-piece1.png", "/images/women1-piece2.png"], stock: 0 },

    { id: 15, title: "kids' Cap", category: "kids", type: "Cotton Cap", price: 350, colors: ["Red", "Blue", "Green"], sizes: ["XS", "S"], description: "Cool cap for sunny days, perfect for kids.", rating: 4.3, image: ["/images/kids3-piece1.png", "/images/kids3-piece2.png"], stock: 25 },

    { id: 16, title: "men's Jeans", category: "men", type: "Cotton Denim Jeans", price: 1600, colors: ["Blue", "Black", "Gray"], sizes: ["M", "L", "XL", "XXL"], description: "Comfortable and stylish jeans for everyday wear.", rating: 4.6, image: ["/images/men6-piece1.png", "/images/men6-piece2.png"], stock: 22 },

    { id: 17, title: "women's Sandals", category: "women", type: "Casual Sandals", price: 1200, colors: ["Brown", "Black", "White"], sizes: ["S", "M", "L"], description: "Comfortable and stylish sandals for summer.", rating: 4.5, image: ["/images/women3-piece1.png", "/images/women3-piece2.png"], stock: 15 },

    { id: 18, title: "kids' Backpack", category: "kids", type: "School Backpack", price: 1300, colors: ["Blue", "Pink", "Green"], sizes: ["S", "M"], description: "Durable and colorful backpack for school and outings.", rating: 4.6, image: ["/images/kids2-piece1.png", "/images/kids2-piece2.png"], stock: 18 },

    { id: 19, title: "men's Belt", category: "men", type: "Leather Belt", price: 800, colors: ["Black", "Brown"], sizes: ["M", "L", "XL"], description: "High-quality leather belt suitable for casual and formal wear.", rating: 4.4, image: ["/images/men7-piece1.png", "/images/men7-piece2.png"], stock: 30 },

    { id: 20, title: "women's Earrings", category: "women", type: "Gold Plated Earrings", price: 900, colors: ["Gold", "Silver", "Rose Gold"], sizes: ["S", "M"], description: "Elegant earrings to complement any outfit.", rating: 4.7, image: ["/images/women4-piece1.png", "/images/women4-piece2.png"], stock: 0 }
];
