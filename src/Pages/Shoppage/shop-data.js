const SHOP_DATA = [
  {
    id: 1,
    title: 'Matka Biryani',
    routeName: 'Biryani',
    items: [
      {
        id: 1,
        name: 'Hyderabadi Biryani',
        imageUrl: 'https://i.ytimg.com/vi/tR1PyPMYKdY/maxresdefault.jpg',
        price: 25
      },
      {
        id: 2,
        name: 'Afgani Biryani',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFvuy7e9R9nhngIxuRXCW7FPkgNU3x0Z3ZpfDDsp--bBirU3tWu4ORocdKCx3YBrdWpUE&usqp=CAU',
        price: 18
      },
      {
        id: 3,
        name: 'Tandoori Biryani',
        imageUrl: 'https://i.ytimg.com/vi/nDWPMZ4rm1E/maxresdefault.jpg',
        price: 35
      },
      {
        id: 4,
        name: 'Smoke Biryani',
        imageUrl: 'https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/bsh58aqqhklnns3gdwwp',
        price: 25
      },
      {
        id: 5,
        name: 'Egg Biryani',
        imageUrl: 'https://i.pinimg.com/originals/8e/d2/7a/8ed27a73af483c00a4858a7ff2c3d4c7.jpg',
        price: 18
      },
      {
        id: 6,
        name: 'Leg Biryani',
        imageUrl: 'https://c.ndtvimg.com/2020-02/c65pekt8_biryani_625x300_03_February_20.jpg',
        price: 14
      },
      {
        id: 7,
        name: 'Paneer Biryani',
        imageUrl: 'https://spicecravings.com/wp-content/uploads/2017/09/IMG_3134-copy-e1579798948176.jpg',
        price: 18
      },
      {
        id: 8,
        name: 'Dum Biryani',
        imageUrl: 'https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg',
        price: 14
      }
    ]
  },
  {
    id: 2,
    title: 'Fries',
    routeName: 'Fries',
    items: [
      {
        id: 1,
        name: 'Cheese Fries',
        imageUrl: 'https://www.queensleeappetit.com/wp-content/uploads/2018/01/Loaded-Cheese-Fries-2-480x480.jpg',
        price: 220
      },
      {
        id: 2,
        name: 'Peri Peri Fries',
        imageUrl: 'https://www.biggyy.com/wp-content/uploads/2020/06/Peri-Peri-Fries.jpg',
        price: 280
      },
      {
        id: 3,
        name: 'Italian Fries',
        imageUrl: 'https://platedcravings.com/wp-content/uploads/2020/01/Air-Fryer-Frozen-Fries-Plated-Cravings-8.jpg',
        price: 110
      },
      {
        id: 4,
        name: 'Jalepeno Fires',
        imageUrl: 'https://www.charleys.com/Data/Sites/1/media/menu/jalapeno_pepper_fries_environ.jpg',
        price: 160
      },
      {
        id: 5,
        name: 'Loaded Pub Fires',
        imageUrl: 'https://www.everydayfamilycooking.com/wp-content/uploads/2019/08/bacon-cheese-fries-loaded.jpg',
        price: 160
      },
      {
        id: 6,
        name: 'Mexican Fires',
        imageUrl: 'https://i.pinimg.com/564x/2e/f8/03/2ef803a0c3bef9e66b23366907a19402.jpg',
        price: 160
      },
      {
        id: 7,
        name: 'salted Fries',
        imageUrl: 'https://ksbasket.in/wp-content/uploads/2021/06/salted-frenchb-fries.jpg',
        price: 190
      }
    ]
  },
  {
    id: 3,
    title: 'Tandoor',
    routeName: 'Tandoor',
    items: [
      {
        id: 1,
        name: 'Chicken Tandoori',
        imageUrl: 'https://www.whiskaffair.com/wp-content/uploads/2021/04/Tandoori-Chicken-2-3.jpg',
        price: 125
      },
      {
        id: 2,
        name: 'Paneer Tandoori',
        imageUrl: 'https://kwikky.in/wp-content/uploads/2021/07/Paneer-Tikka-Tawa.jpg',
        price: 90
      },
      {
        id: 3,
        name: 'Prawns Tandoori',
        imageUrl: 'https://mytastycurry.com/wp-content/uploads/2019/08/tandoori-Prawns1-1-500x500.jpg',
        price: 90
      },
      {
        id: 4,
        name: 'Fruits Tandoori',
        imageUrl: 'https://storage.googleapis.com/cscom-2019.appspot.com/uploads/2015/09/grilledfruitchaatir2.jpg',
        price: 165
      },
      {
        id: 5,
        name: 'Fish Tandoori',
        imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Tandoori-Fish.jpg',
        price: 185
      }
    ]
  },
  {
    id: 4,
    title: 'Sandwich',
    routeName: 'Sandwich',
    items: [
      {
        id: 1,
        name: 'Veg Sandwich',
        imageUrl: 'https://static.toiimg.com/thumb/60057435.cms?width=1200&height=900',
        price: 25
      },
      {
        id: 2,
        name: 'Grilled Sandwich',
        imageUrl: 'https://www.vegrecipesofindia.com/wp-content/uploads/2014/01/grilled-sandwich-1.jpg',
        price: 20
      },
      {
        id: 3,
        name: 'Cheese Sandwich',
        imageUrl: 'https://cdn.cdnparenting.com/articles/2020/02/27142028/GRILLED-CHEESE-SANDWICH.webp',
        price: 80
      },
      {
        id: 4,
        name: 'Corn Sandwich',
        imageUrl: 'https://i0.wp.com/www.rasoimenu.com/wp-content/uploads/2014/04/sweet-corn-sandwich-recipe.jpg?fit=1920%2C1080&ssl=1',
        price: 80
      },
      
     
    ]
  },
  {
    id: 5,
    title: 'Rolls',
    routeName: 'Rolls',
    items: [
      {
        id: 1,
        name: 'Paneer Roll',
        imageUrl: 'https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/hjh6eawpdqgexgbqtw09',
        price: 325
      },
      {
        id: 2,
        name: 'Kathi Roll',
        imageUrl: 'https://ministryofcurry.com/wp-content/uploads/2019/10/paneer-kathi-rolls-1.jpg',
        price: 20
      },
      {
        id: 3,
        name: 'Chicken Roll',
        imageUrl: 'https://www.okbazar.in/wp-content/uploads/2020/11/Screenshot_15.jpg',
        price: 25
      },
      {
        id: 4,
        name: 'Chicken Tandoor Roll',
        imageUrl: 'https://ministryofcurry.com/wp-content/uploads/2020/05/chicken-kathi-rolls_.jpg',
        price: 25
      },
      {
        id: 5,
        name: 'Egg Roll',
        imageUrl: 'https://madscookhouse.com/wp-content/uploads/2021/02/Chicken-Kathi-Roll-500x500.jpg',
        price: 40
      }
    ]
  }
]
export default SHOP_DATA