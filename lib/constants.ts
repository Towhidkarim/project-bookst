export const siteName = 'BookStop';
export const categories = [
  'DSA',
  'EEE',
  'Mathematics',
  'AI/ML',
  'Programing',
  'Architecture',
  'Others',
] as const;

export const routes = {
  categories: '/categories',
  allBooks: '/allbooks',
  dashboard: '/dashboard',
  orders: '/dashboard/orders',
  signUp: '/signup',
  signIn: '/signin',
  checkout: '/checkout',
};

export const queryKeys = {
  userInfo: 'qKey-userInfo',
  listings: 'qKey-listings',
  ownerListings: 'qKey-ownerListings',
};
