import HomeScreen from '../../../features/home/components/HomeScreen';
import TasksScreen from '../../../features/tasks/TasksScreen';
import NotesScreen from '../../../features/notes/NotesScreen';
import SettingScreen from '../../../features/setting/SettingScreen';

export interface TabConfig {
  name: string;
  label: string;
  icon: string;
  component: React.ComponentType<any>;
}

export const fetchTabConfig = async (): Promise<TabConfig[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          name: 'Chat',
          label: 'Chat',
          icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4 17.17V4H20V16Z" fill="currentColor"/></svg>`,
          component: HomeScreen,
        },
        {
          name: 'Tasks',
          label: 'Tasks',
          icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20ZM9.5 15.5L7 13L8.41 11.59L9.5 12.67L13.09 9.08L14.5 10.5L9.5 15.5Z" fill="currentColor"/></svg>`,
          component: TasksScreen,
        },
        {
          name: 'Notes',
          label: 'Notes',
          icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 11H7V9H9V11ZM13 11H11V9H13V11ZM17 11H15V9H17V11ZM19 7H18V6C18 5.45 17.55 5 17 5H15V4C15 3.45 14.55 3 14 3H10C9.45 3 9 3.45 9 4V5H7C6.45 5 6 5.45 6 6V7H5C4.45 7 4 7.45 4 8V20C4 20.55 4.45 21 5 21H19C19.55 21 20 20.55 20 20V8C20 7.45 19.55 7 19 7ZM10 5H14V6H10V5ZM18 19H6V9H18V19Z" fill="currentColor"/></svg>`,
          component: NotesScreen,
        },
        {
          name: 'Setting',
          label: 'Setting',
          icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.14 12.94C19.66 12.42 20 11.75 20 11C20 10.25 19.66 9.58 19.14 9.06L21 7.2C21.39 6.81 21.39 6.18 21 5.79L18.21 3C17.82 2.61 17.19 2.61 16.8 3L14.94 4.86C14.42 4.34 13.75 4 13 4S11.58 4.34 11.06 4.86L9.2 3C8.81 2.61 8.18 2.61 7.79 3L5 5.79C4.61 6.18 4.61 6.81 5 7.2L6.86 9.06C6.34 9.58 6 10.25 6 11S6.34 12.42 6.86 12.94L5 14.8C4.61 15.19 4.61 15.82 5 16.21L7.79 19C8.18 19.39 8.81 19.39 9.2 19L11.06 17.14C11.58 17.66 12.25 18 13 18S14.42 17.66 14.94 17.14L16.8 19C17.19 19.39 17.82 19.39 18.21 19L21 16.21C21.39 15.82 21.39 15.19 21 14.8L19.14 12.94ZM13 15C11.34 15 10 13.66 10 12S11.34 9 13 9 16 10.34 16 12 14.66 15 13 15Z" fill="currentColor"/></svg>`,
          component: SettingScreen,
        },
      ]);
    }, 1000);
  });
};