import background from "./IMG/background.png";
import shadow from "./IMG/shadow.png";
import logo from "./IMG/logo.png";
import menu from "./IMG/menu.png";
import close from "./IMG/close.png";
import profile from "./IMG/user.png";
import search from "./IMG/search.png";
import rightArrow from "./IMG/right-arrow-forward.png";
import gamingRoom from "./IMG/gamingRoom.jpg";
import contact from "./IMG/contact.jpg";
import telephone from "./IMG/telephone.png";
import email from "./IMG/email.png";
import lock from "./IMG/lock-computer.png";
import cart from "./IMG/shopping-bag.png";
import starOutline from "./IMG/starOutline.png";
import star from "./IMG/star.png";
import heart from "./IMG/heart.png";
import heartFill from "./IMG/heartFill.png";
import closeWhite from "./IMG/close-white.png";
import minus from "./IMG/minus.png";
import plus from "./IMG/plus.png";
import product1 from "./IMG/StockCake-Elegant Audio.jpg";
import product2 from "./IMG/StockCake-Golden Luxurious Headphones.jpg";
import product3 from "./IMG/StockCake-Headphones on Laptop.jpg";
import product4 from "./IMG/StockCake-Music Production.jpg";
import product5 from "./IMG/StockCake-Studio Headphones.jpg";
import product6 from "./IMG/StockCake-Stylish Audio Headphones.jpg";
import product7 from "./IMG/StockCake-Stylish Yellow.jpg";
import product8 from "./IMG/StockCake-Serene Headphone.jpg";
import product9 from "./IMG/StockCake-Sleek Black Headphones.jpg";
import product10 from "./IMG/StockCake-Sleek Headphones.jpg";
import product11 from "./IMG/StockCake-Sleek Wireless Headphones.jpg";
import earBuds1 from "./IMG/StockCake-Elegant wireless earbuds.jpg";
import earBuds2 from "./IMG/StockCake-Sleek Wireless Earbuds.jpg";
import earBuds3 from "./IMG/StockCake-Wireless Earbuds Glow.jpg";
import earBuds4 from "./IMG/StockCake-Wireless Earbuds.jpg";
import gamingHeadphone1 from "./IMG/StockCake-Gaming Gear Glow (2).jpg";
import gamingHeadphone2 from "./IMG/StockCake-Gaming Gear Glow.jpg";
import gamingHeadphone3 from "./IMG/StockCake-Neon Gaming.jpg";
import gamingHeadphone4 from "./IMG/StockCake-Stylish Gaming Headset.jpg";
import gamingHeadphone5 from "./IMG/StockCake-Vibrant Neon Headphones.jpg";
import speaker1 from "./IMG/StockCake-Elegant Bluetooth Speaker.jpg";
import speaker2 from "./IMG/StockCake-Modern Speaker Display.jpg";
import speaker3 from "./IMG/StockCake-Speaker Advertisement Design.jpg";
import speaker4 from "./IMG/StockCake-Stylish Speaker.jpg";
import speaker5 from "./IMG/StockCake-Tech Gear.jpg";
import latest1 from "./IMG/StockCake-Modern Wireless Earbuds (2).jpg";
import latest2 from "./IMG/StockCake-Modern wireless earbuds (3).jpg";
import latest3 from "./IMG/StockCake-Modern Wireless Earbuds.jpg";
import latest4 from "./IMG/StockCake-Floating Wireless Earbuds.jpg";
import latest5 from "./IMG/StockCake-Illuminated Headphones.jpg";

let assets = {
  heart,
  heartFill,
  lock,
  telephone,
  email,
  contact,
  background,
  logo,
  menu,
  cart,
  close,
  search,
  profile,
  shadow,
  rightArrow,
  earBuds1,
  gamingRoom,
  closeWhite,
  minus,
  plus
};

let products = [
  {
    id: 1,
    img: [product1, product2, product3, product4],
    name: "Elegant Audio",
    description:
      "When your music is on, nothing else matters. The JBL Tune 770NC Adaptive Noise Cancelling wireless headphones deliver on that promise all day—and longer, while sparing you the unwanted noises. With up to 70 hours of battery life, you’ll easily get through a busy week of using them and still have enough JBL Pure Bass Sound to get you through the weekend. And if you do need a quick recharge, 5 minutes gets you an extra 3 hours of music. Lightweight, and flat-folding, the JBL Tune 770NC can also connect with two Bluetooth® devices simultaneously, so you’ll never miss a call while watching a movie on your tablet. With the free JBL Headphones app, you can tailor the sound to suit your taste. And voice prompts in your language will guide you through the features. Manage your calls and your voice assistant hassle-free right from your phone and use VoiceAware to hear yourself when you’re speaking. Just choose the color that best suits your vibe, and start having fun.",
    price: 2000,
    category: "headphone",
    subCategory: "Wireless",
    sizes: ["S", "M", "L", "XL"],
    features: [
      "Noise Cancelling",
      "Wireless",
      "Bluetooth",
      "Touch Control",
      "Voice Assistant",
    ],
    rating: 4.5,
    bestSeller: true,
    inStock: true,
    date: "2022-01-01",
    ratingStar: [star, star, star, star, starOutline],
  },
  {
    id: 2,
    img: [product2, product5, product6, product7],
    name: "Golden Luxurious Headphones",
    description:
      "The JBL Tune 720BT headphones stream powerful JBL Pure Bass sound thanks to the latest 5.3 BT technology. Easy to use, these headphones provide up to 76 hours of pure pleasure and an extra 3 hours of battery with just 5 minutes of charge. Download the free JBL Headphones App and customize your sound through the EQ, while Voice Prompts guide you through the headphone's features. Manage calls, sound, and volume from the earcup, thanks to the convenient button controls. If a call comes in while you are watching a video on another device, the JBL Tune 720BT seamlessly switches to your mobile device, so you never miss a call. Lightweight and comfortable even after hours of listening, the JBL Tune 720BT headphones fold flat in your backpack to follow you everywhere.",
    price: 4000,
    category: "headphone",
    subCategory: "In-Ear",
    sizes: ["S", "M", "L", "XL"],
    features: [
      "Noise Cancelling",
      "Wireless",
      "Bluetooth",
      "Touch Control",
      "Voice Assistant",
    ],
    rating: 4.5,
    bestSeller: true,
    inStock: true,
    date: "2022-01-01",
    ratingStar: [star, star, star, starOutline, starOutline],
  },
  {
    id: 3,
    img: [product3, product8, product9, product10],
    name: "Headphones on Laptop",
    description:
      "Headphones on Laptop with JBL Tune 510NC The JBL Tune 720BT headphones stream powerful JBL Pure Bass sound thanks to the latest 5.3 BT technology. Easy to use, these headphones provide up to 76 hours of pure pleasure and an extra 3 hours of battery with just 5 minutes of charge. Download the free JBL Headphones App and customize your sound through the EQ, while Voice Prompts guide you through the headphone's features. Manage calls, sound, and volume from the earcup, thanks to the convenient button controls. If a call comes in while you are watching a video on another device, the JBL Tune 720BT seamlessly switches to your mobile device, so you never miss a call. Lightweight and comfortable even after hours of listening, the JBL Tune 720BT headphones fold flat in your backpack to follow you everywhere.",
    price: 6000,
    category: "headphone",
    subCategory: "Wireless",
    sizes: ["S", "M", "L", "XL"],
    features: [
      "Noise Cancelling",
      "Wireless",
      "Bluetooth",
      "Touch Control",
      "Voice Assistant",
    ],
    rating: 4.5,
    bestSeller: true,
    inStock: true,
    date: "2022-01-01",
    ratingStar: [star, star, star, starOutline, starOutline],
  },
  {
    id: 4,
    img: [product4, product11, product8, product7],
    name: "JBL Tune 510NC",
    description:
      "JBL Tune 510NC The JBL Tune 720BT headphones stream powerful JBL Pure Bass sound thanks to the latest 5.3 BT technology. Easy to use, these headphones provide up to 76 hours of pure pleasure and an extra 3 hours of battery with just 5 minutes of charge. Download the free JBL Headphones App and customize your sound through the EQ, while Voice Prompts guide you through the headphone's features. Manage calls, sound, and volume from the earcup, thanks to the convenient button controls. If a call comes in while you are watching a video on another device, the JBL Tune 720BT seamlessly switches to your mobile device, so you never miss a call. Lightweight and comfortable even after hours of listening, the JBL Tune 720BT headphones fold flat in your backpack to follow you everywhere.",
    price: 3000,
    category: "headphone",
    subCategory: "On-Ear",
    sizes: ["S", "M", "L", "XL"],
    features: [
      "Noise Cancelling",
      "Wireless",
      "Bluetooth",
      "Touch Control",
      "Voice Assistant",
    ],
    rating: 4.5,
    bestSeller: true,
    inStock: true,
    date: "2022-01-01",
    ratingStar: [star, star, star, starOutline, starOutline],
  },
  {
    id: 5,
    img: [product5, product6, product7, product8],
    name: "Music Production",
    description:
      "StockCake-Music Production The JBL Tune 510BT headphones let you stream powerful JBL Pure Bass sound with no strings attached. Easy to use, these headphones provide up to 40 hours of pure pleasure and an extra 2 hours of battery with just 5 minutes of power with the USB-C charging cable. And if a call comes in while you are watching a video on another device, the JBL Tune 510BT seamlessly switches to your mobile. Bluetooth 5.0 enabled and designed to be comfortable, the JBL Tune 510BT headphones also allow you to connect to Siri or Google without using your mobile device. Available in multiple fresh colors and foldable for easy portability, the JBL Tune 510BT headphones are a grab ‘n go solution that helps you to inject music into every aspect of your busy life.",
    price: 300,
    category: "headphone",
    subCategory: "Wireless",
    sizes: ["S", "M", "L", "XL"],
    features: [
      "Noise Cancelling",
      "Wireless",
      "Bluetooth",
      "Touch Control",
      "Voice Assistant",
    ],
    rating: 4.5,
    bestSeller: true,
    inStock: true,
    date: "2022-01-01",
    ratingStar: [star, star, star, star, starOutline],
  },
  {
    id: 6,
    img: [product6, product7, product8, product9],
    name: "JBL Tune 510BT",
    description:
      "JBL tune 510 BT The JBL Tune 510BT headphones let you stream powerful JBL Pure Bass sound with no strings attached. Easy to use, these headphones provide up to 40 hours of pure pleasure and an extra 2 hours of battery with just 5 minutes of power with the USB-C charging cable. And if a call comes in while you are watching a video on another device, the JBL Tune 510BT seamlessly switches to your mobile. Bluetooth 5.0 enabled and designed to be comfortable, the JBL Tune 510BT headphones also allow you to connect to Siri or Google without using your mobile device. Available in multiple fresh colors and foldable for easy portability, the JBL Tune 510BT headphones are a grab ‘n go solution that helps you to inject music into every aspect of your busy life.",
    price: 7000,
    category: "headphone",
    subCategory: "In-Ear",
    sizes: ["S", "M", "L", "XL"],
    features: [
      "Noise Cancelling",
      "Wireless",
      "Bluetooth",
      "Touch Control",
      "Voice Assistant",
    ],
    rating: 4.5,
    bestSeller: true,
    inStock: true,
    date: "2022-01-01",
    ratingStar: [star, star, star, star, starOutline],
  },
  {
    id: 7,
    img: [product7, product8, product9, product10],
    name: "Stylish Yellow",
    description:
      "Stock Cakes Style Style The JBL Tune 510BT headphones let you stream powerful JBL Pure Bass sound with no strings attached. Easy to use, these headphones provide up to 40 hours of pure pleasure and an extra 2 hours of battery with just 5 minutes of power with the USB-C charging cable. And if a call comes in while you are watching a video on another device, the JBL Tune 510BT seamlessly switches to your mobile. Bluetooth 5.0 enabled and designed to be comfortable, the JBL Tune 510BT headphones also allow you to connect to Siri or Google without using your mobile device. Available in multiple fresh colors and foldable for easy portability, the JBL Tune 510BT headphones are a grab ‘n go solution that helps you to inject music into every aspect of your busy life.",
    price: 3500,
    category: "headphone",
    subCategory: "headphones",
    sizes: ["S", "M", "L", "XL"],
    features: [
      "Noise Cancelling",
      "Wireless",
      "Bluetooth",
      "Touch Control",
      "Voice Assistant",
    ],
    rating: 4.5,
    bestSeller: true,
    inStock: true,
    date: "2022-01-01",
    ratingStar: [star, star, star, star, starOutline],
  },
  {
    id: 8,
    img: [product8, product9, product10, product11],
    name: "JBL Tune 510BT",
    description:
      "The JBL Tune 510BT headphones let you stream powerful JBL Pure Bass sound with no strings attached. Easy to use, these headphones provide up to 40 hours of pure pleasure and an extra 2 hours of battery with just 5 minutes of power with the USB-C charging cable. And if a call comes in while you are watching a video on another device, the JBL Tune 510BT seamlessly switches to your mobile.",
    price: 1850,
    category: "headphone",
    subCategory: "Wired",
    sizes: ["S", "M", "L", "XL"],
    features: [
      "Noise Cancelling",
      "Wireless",
      "Bluetooth",
      "Touch Control",
      "Voice Assistant",
    ],
    rating: "4.5",
    bestSeller: true,
    inStock: true,
    date: "2022-01-01",
    ratingStar: [star, star, star, star, starOutline],
  },
  {
    id: 9,
    img: [product9, product10, product11, product8],
    name: "Sleek Black Headphones",
    description:
      "The JBL Tune 510BT headphones let you stream powerful JBL Pure Bass sound with no strings attached. Easy to use, these headphones provide up to 40 hours of pure pleasure and an extra 2 hours of battery with just 5 minutes of power with the USB-C charging cable. And if a call comes in while you are watching a video on another device, the JBL Tune 510BT seamlessly switches to your mobile. Bluetooth 5.0 enabled and designed to be comfortable, the JBL Tune 510BT headphones also allow you to connect to Siri or Google without using your mobile device. Available in multiple fresh colors and foldable for easy portability, the JBL Tune 510BT headphones are a grab ‘n go solution that helps you to inject music into every aspect of your busy life.",
    price: 120,
    category: "headphone",
    subCategory: "Wireless",
    sizes: ["S", "M", "L", "XL"],
    features: [
      "Noise Cancelling",
      "Wireless",
      "Bluetooth",
      "Touch Control",
      "Voice Assistant",
    ],
    rating: "4.5",
    bestSeller: true,
    inStock: true,
    date: "2022-01-01",
    ratingStar: [star, star, star, star, starOutline],
  },
  {
    id: 10,
    img: [product10, product11, product5, product6],
    name: "Sleek Headphones",
    description:
      "The JBL Tune 510BT headphones let you stream powerful JBL Pure Bass sound with no strings attached. Easy to use, these headphones provide up to 40 hours of pure pleasure and an extra 2 hours of battery with just 5 minutes of power with the USB-C charging cable. And if a call comes in while you are watching a video on another device, the JBL Tune 510BT seamlessly switches to your mobile. Bluetooth 5.0 enabled and designed to be comfortable, the JBL Tune 510BT headphones also allow you to connect to Siri or Google without using your mobile device. Available in multiple fresh colors and foldable for easy portability, the JBL Tune 510BT headphones are a grab ‘n go solution that helps you to inject music into every aspect of your busy life.",
    price: 2500,
    category: "headphone",
    subCategory: "Over-Ear",
    sizes: ["S", "M", "L", "XL"],
    features: [
      "Noise Cancelling",
      "Wireless",
      "Bluetooth",
      "Touch Control",
      "Voice Assistant",
    ],
    rating: "4.5",
    bestSeller: true,
    inStock: true,
    date: "2022-01-01",
    ratingStar: [star, star, star, starOutline, starOutline],
  },
  {
    id: 11,
    img: [product11, product1, product2, product3],
    name: "Sleek Wireless Headphones",
    description:
      "The JBL Tune 510BT headphones let you stream powerful JBL Pure Bass sound with no strings attached. Easy to use, these headphones provide up to 40 hours of pure pleasure and an extra 2 hours of battery with just 5 minutes of power with the USB-C charging cable. And if a call comes in while you are watching a video on another device, the JBL Tune 510BT seamlessly switches to your mobile. Bluetooth 5.0 enabled and designed to be comfortable, the JBL Tune 510BT headphones also allow you to connect to Siri or Google without using your mobile device. Available in multiple fresh colors and foldable for easy portability, the JBL Tune 510BT headphones are a grab ‘n go solution that helps you to inject music into every aspect of your busy life.",
    price: 640,
    category: "headphone",
    subCategory: "Wireless",
    sizes: ["S", "M", "L", "XL"],
    features: [
      "Noise Cancelling",
      "Wireless",
      "Bluetooth",
      "Touch Control",
      "Voice Assistant",
    ],
    rating: "4.5",
    bestSeller: true,
    inStock: true,
    date: "2022-01-01",
    ratingStar: [star, star, star, star, starOutline],
  },
  {
    id: 12,
    img: [product10, product11, product2, product3],
    name: "Sleek Headphones",
    description:
      "The JBL Tune 510BT headphones let you stream powerful JBL Pure Bass sound with no strings attached. Easy to use, these headphones provide up to 40 hours of pure pleasure and an extra 2 hours of battery with just 5 minutes of power with the USB-C charging cable. And if a call comes in while you are watching a video on another device, the JBL Tune 510BT seamlessly switches to your mobile. Bluetooth ",
    price: 240,
    category: "headphone",
    subCategory: "Over-Ear",
    sizes: ["S", "M", "L", "XL"],
    features: [
      "Noise Cancelling",
      "Wireless",
      "Bluetooth",
      "Touch Control",
      "Voice Assistant",
    ],
    rating: "4.5",
    bestSeller: true,
    inStock: true,
    date: "2022-01-01",
    ratingStar: [star, star, star, star, starOutline],
  },
];

// Earbuds Products
let earbuds = [
  {
    id: 13,
    img: [earBuds1, earBuds2, earBuds3, earBuds4],
    name: "Elegant Wireless Earbuds",
    description:
      "Enjoy powerful sound in a sleek design with our Elegant Wireless Earbuds. With noise cancellation, touch controls, and long battery life, these earbuds are perfect for on-the-go listening.",
    price: 5000,
    category: "earBuds",
    subCategory: "Wireless",
    features: ["Noise Cancelling", "Wireless", "Touch Control", "Bluetooth"],
    rating: 4.7,
    bestSeller: true,
    inStock: true,
    date: "2022-03-01",
    ratingStar: [star, star, star, star, star],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 14,
    img: [earBuds2, earBuds3, earBuds4, earBuds1],
    name: "Sleek Wireless Earbuds",
    description:
      "Experience high-quality sound and seamless connectivity with our Sleek Wireless Earbuds. These earbuds offer a comfortable fit, long battery life, and intuitive touch controls.",
    price: 4500,
    category: "earBuds",
    subCategory: "Wireless",
    features: ["Wireless", "Touch Control", "Bluetooth", "Compact Design"],
    rating: 4.6,
    bestSeller: true,
    inStock: true,
    date: "2022-04-15",
    ratingStar: [star, star, star, star, starOutline],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 15,
    img: [earBuds3, earBuds4, earBuds1, earBuds2],
    name: "Wireless Earbuds Glow",
    description:
      "Light up your listening experience with the Wireless Earbuds Glow. These earbuds feature ambient lighting, noise cancellation, and superior sound quality.",
    price: 6000,
    category: "earBuds",
    subCategory: "In-Ear",
    features: ["Glow Lighting", "Noise Cancelling", "Wireless", "Bluetooth"],
    rating: 4.8,
    bestSeller: true,
    inStock: true,
    date: "2022-05-10",
    ratingStar: [star, star, star, star, starOutline],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 16,
    img: [earBuds4, earBuds1, earBuds2, earBuds3],
    name: "Wireless Earbuds",
    description:
      "Stay connected with our Wireless Earbuds. Designed for comfort and performance, these earbuds offer long battery life, noise isolation, and easy pairing.",
    price: 4200,
    category: "earBuds",
    subCategory: "Wireless",
    features: ["Noise Isolation", "Wireless", "Touch Control", "Bluetooth"],
    rating: 4.5,
    bestSeller: true,
    inStock: true,
    date: "2022-06-05",
    ratingStar: [star, star, star, star, starOutline],
    sizes: ["S", "M", "L", "XL"],
  },
];

// Speakers Products

let speakers = [
  {
    id: 17,
    img: [speaker1],
    name: "Elegant Bluetooth Speaker",
    description:
      "Enjoy immersive sound with the Elegant Bluetooth Speaker. This portable speaker offers deep bass, crystal-clear highs, and long battery life for all your audio needs.",
    price: 8000,
    category: "headphone",
    subCategory: "headphone",
    features: ["Bluetooth", "Portable", "Deep Bass", "Long Battery Life"],
    rating: 4.7,
    bestSeller: true,
    inStock: true,
    date: "2022-07-01",
    ratingStar: [star, star, star, star, star],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 18,
    img: [speaker2],
    name: "Modern Speaker Display",
    description:
      "Enhance your space with the Modern Speaker Display. This stylish speaker combines powerful audio with a contemporary design, making it a perfect addition to any room.",
    price: 7500,
    category: "audio",
    subCategory: "speakers",
    features: ["Stylish Design", "Powerful Audio", "Bluetooth"],
    rating: 4.6,
    bestSeller: true,
    inStock: true,
    date: "2022-08-01",
    ratingStar: [star, star, star, star, starOutline],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 19,
    img: [speaker3],
    name: "Speaker Advertisement Design",
    description:
      "Make a statement with the Speaker Advertisement Design. This unique speaker delivers exceptional sound quality while adding a modern touch to your space.",
    price: 7000,
    category: "audio",
    subCategory: "speakers",
    features: ["Unique Design", "High-Quality Sound", "Bluetooth"],
    rating: 4.5,
    bestSeller: true,
    inStock: true,
    date: "2022-09-01",
    ratingStar: [star, star, star, star, starOutline],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 20,
    img: [speaker4],
    name: "Stylish Speaker",
    description:
      "Bring your music to life with the Stylish Speaker. Offering a sleek design and robust sound, this speaker is perfect for any music lover.",
    price: 6500,
    category: "audio",
    subCategory: "speakers",
    features: ["Sleek Design", "Robust Sound", "Bluetooth"],
    rating: 4.5,
    bestSeller: true,
    inStock: true,
    date: "2022-10-01",
    ratingStar: [star, star, star, star, starOutline],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 21,
    img: [speaker5],
    name: "Tech Gear Speaker",
    description:
      "Tech Gear Speaker delivers superior sound performance with its advanced technology and stylish design, perfect for any setting.",
    price: 8500,
    category: "audio",
    subCategory: "speakers",
    features: ["Advanced Technology", "Superior Sound", "Bluetooth"],
    rating: 4.8,
    bestSeller: true,
    inStock: true,
    date: "2022-11-01",
    ratingStar: [star, star, star, star, star],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 22,
    img: [speaker1],
    name: "Elegant Bluetooth Speaker",
    description:
      "Enjoy immersive sound with the Elegant Bluetooth Speaker. This portable speaker offers deep bass, crystal-clear highs, and long battery life for all your audio needs.",
    price: 8000,
    category: "audio",
    subCategory: "speakers",
    features: ["Bluetooth", "Portable", "Deep Bass", "Long Battery Life"],
    rating: 4.7,
    bestSeller: true,
    inStock: true,
    date: "2022-07-01",
    ratingStar: [star, star, star, star, star],
    sizes: ["S", "M", "L", "XL"],
  },
];
// Gaming Headphones Products
let gamingHeadphones = [
  {
    id: 17,
    img: [
      gamingHeadphone2,
      gamingHeadphone1,
      gamingHeadphone3,
      gamingHeadphone4,
    ],
    name: "Neon Gaming",
    description:
      "Immerse yourself in your favorite games with the Neon Gaming headphones. Designed for optimal performance, these headphones provide excellent sound quality and a dynamic gaming experience.",
    price: 9500,
    category: "gaming",
    subCategory: "headphones",
    features: ["Dynamic Sound", "Neon Lights", "Comfort Fit"],
    rating: 4.8,
    bestSeller: true,
    inStock: true,
    date: "2023-02-01",
    ratingStar: [star, star, star, star, star],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 18,
    img: [
      gamingHeadphone3,
      gamingHeadphone2,
      gamingHeadphone1,
      gamingHeadphone4,
    ],
    name: "Stylish Gaming Headset",
    description:
      "Take your gaming to the next level with the Stylish Gaming Headset. Offering crystal-clear audio, an adjustable microphone, and comfortable padding, this headset is perfect for long gaming sessions.",
    price: 8500,
    category: "gaming",
    subCategory: "headphones",
    features: ["Adjustable Microphone", "Comfort Padding", "Clear Audio"],
    rating: 4.7,
    bestSeller: true,
    inStock: true,
    date: "2023-03-01",
    ratingStar: [star, star, star, star, starOutline],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 19,
    img: [
      gamingHeadphone4,
      gamingHeadphone2,
      gamingHeadphone3,
      gamingHeadphone1,
    ],
    name: "Vibrant Neon Headphones",
    description:
      "Add some flair to your gaming setup with the Vibrant Neon Headphones. These headphones offer immersive sound and a stylish design, perfect for any gamer.",
    price: 7800,
    category: "gaming",
    subCategory: "headphones",
    features: ["Immersive Sound", "Stylish Design", "Neon Lights"],
    rating: 4.6,
    bestSeller: true,
    inStock: true,
    date: "2023-04-01",
    ratingStar: [star, star, star, star, starOutline],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 20,
    img: [
      gamingHeadphone5,
      gamingHeadphone2,
      gamingHeadphone3,
      gamingHeadphone1,
    ],
    name: "Tech Gaming Headset",
    description:
      "Experience the latest in gaming technology with the Tech Gaming Headset. Featuring advanced Bluetooth, noise-canceling, and a sleek design, these headphones are perfect for the modern gamer.",
    price: 1000,
    category: "gaming",
    subCategory: "headphones",
    features: ["Advanced Bluetooth", "Noise-Canceling", "Sleek Design"],
    rating: 4.9,
    bestSeller: true,
    inStock: true,
    date: "2023-05-01",
    ratingStar: [star, star, star, star, star],
    sizes: ["S", "M", "L", "XL"],
  },
];

// Latest Products
let latestProducts = [
  {
    id: 1,
    img: [latest1],
    name: "Modern Wireless Earbuds",
    description:
      "Experience the latest in wireless technology with our Modern Wireless Earbuds. Featuring advanced Bluetooth, noise-canceling, and a sleek design, these earbuds are perfect for the modern user.",
    price: 6500,
    category: "audio",
    subCategory: "earbuds",
    features: ["Advanced Bluetooth", "Noise-Canceling", "Sleek Design"],
    rating: 4.9,
    bestSeller: true,
    inStock: true,
    date: "2023-05-01",
  },
  {
    id: 2,
    img: [latest2],
    name: "Floating Wireless Earbuds",
    description:
      "The Floating Wireless Earbuds provide an unparalleled audio experience. With superior sound quality, noise isolation, and a unique floating design, these earbuds are truly one of a kind.",
    price: 7000,
    category: "audio",
    subCategory: "earbuds",
    features: ["Superior Sound", "Noise Isolation", "Unique Design"],
    rating: 4.8,
    bestSeller: true,
    inStock: true,
    date: "2023-06-01",
  },
  {
    id: 3,
    img: [latest3],
    name: "Modern Speaker Display",
    description:
      "Enhance your space with the Modern Speaker Display. This stylish speaker combines powerful audio with a contemporary design, making it a perfect addition to any room.",
    price: 7500,
    category: "audio",
    subCategory: "speakers",
    features: ["Stylish Design", "Powerful Audio", "Bluetooth"],
    rating: 4.6,
    bestSeller: true,
    inStock: true,
    date: "2023-07-01",
  },
  {
    id: 4,
    img: [latest4],
    name: "Floating Wireless Earbuds",
    description:
      "The Floating Wireless Earbuds provide an unparalleled audio experience. With superior sound quality, noise isolation, and a unique floating design, these earbuds are truly one of a kind.",
    price: 7000,
    category: "audio",
    subCategory: "earbuds",
    features: ["Superior Sound", "Noise Isolation", "Unique Design"],
    rating: 4.8,
    bestSeller: true,
    inStock: true,
    date: "2023-06-01",
  },
  {
    id: 5,
    img: [latest5],
    name: "Illuminated Headphones",
    description:
      "Enjoy the ultimate gaming experience with the Illuminated Headphones. Featuring a high-quality sound, a bright LED lighting, and a comfortable fit, these headphones are designed for all-day gaming.",
    price: 8000,
    category: "gaming",
    subCategory: "headphones",
    features: ["High-Quality Sound", "Bright LED Lighting", "Comfortable Fit"],
    rating: 4.7,
    bestSeller: true,
    inStock: true,
    date: "2023-08-01",
  },
  {
    id: 1,
    img: [latest1],
    name: "Modern Wireless Earbuds",
    description:
      "Experience the latest in wireless technology with our Modern Wireless Earbuds. Featuring advanced Bluetooth, noise-canceling, and a sleek design, these earbuds are perfect for the modern user.",
    price: 6500,
    category: "audio",
    subCategory: "earbuds",
    features: ["Advanced Bluetooth", "Noise-Canceling", "Sleek Design"],
    rating: 4.9,
    bestSeller: true,
    inStock: true,
    date: "2023-05-01",
  },
];

let navbar = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Collection",
    url: "/collection",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

let aboutCard = [
  {
    title: "Top-Quality Products",
    description:
      "We offer a curated selection of earbuds, headphones, and gaming headsets from leading brands known for their exceptional quality and cutting-edge technology. Our products cater to every need and budget.",
  },
  {
    title: "Customer-Centric Service",
    description:
      "At Amazing Audio, we strive to provide excellent customer service by offering personalized recommendations, free returns, and a 24/7 customer support line. Our commitment to customer satisfaction is our top priority.",
  },
  {
    title: "Stay Ahead with Trends",
    description:
      "We constantly update our product offerings with the latest trends and developments in the audio and gaming industry. By staying informed and following the latest technological advancements, you'll be well on your way to a smoother and more enjoyable gaming experience.",
  },
];
export {
  assets,
  products,
  earbuds,
  gamingHeadphones,
  latestProducts,
  speakers,
  navbar,
  aboutCard,
};
