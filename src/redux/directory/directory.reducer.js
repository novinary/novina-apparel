const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/QbXJ0kY/hats.png',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'trainers',
      imageUrl: 'https://i.ibb.co/gTXZc25/trainers.jpg',
      id: 3,
      linkUrl: 'shop/trainers'
    },
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/rGHgXTj/womens.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/jW4gHCJ/men.png',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
