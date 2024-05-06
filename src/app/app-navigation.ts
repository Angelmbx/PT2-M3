export const navigation = [
  {
    text: 'Home',
    path: '/home',
    icon: 'home'
  },
  {
    text: 'Features',
    icon: 'fas fa-caret-up',
    items: [
      {
        text: 'Profile',
        path: '/profile'
      },
      {
        text: 'Tasks',
        path: '/tasks'
      },
      {
        text: 'Current Time',
        path: '/current-time',
        icon: 'fas fa-clock'
      }
    ]
  }
];
