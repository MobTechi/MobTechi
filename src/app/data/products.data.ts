import { Product } from '../model/product.model';

export const PRODUCTS: Product[] = [
  {
    name: 'Tic tac toe - XO Offline game',
    url: 'xo_offline_game',
    type: 'game',
    image: '../../../assets/icons/apps/xo_offline_game.png',
    description: 'Tic Tac Toe is one of the best puzzle games'
  },
  {
    name: 'Fitx360 - Home workout for Men',
    url: 'fitx360',
    type: 'app',
    image: '../../../assets/icons/apps/fitx360.png',
    description: 'You can build muscles and keep fitness at home without having to go to the gym'
  },
  {
    name: 'MT Player - NoAds MusicPlayer',
    url: 'mtplayer',
    type: 'app',
    image: '../../../assets/icons/apps/mt_player.png',
    description: 'Dark theme without ads and Light weight simple UI'
  }
];
