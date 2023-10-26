export interface IAction {
  type: string;
  payload?: any;
}

export interface IAppState {
  isAlertVisible: boolean;
  isSidebarOpen: boolean;
  text: string;
}

interface IRequest {
  name: string;
  sum: number;
  type: string;
  call: boolean;
  email: boolean;
  SMS: boolean;
  value: number;
  city: string;
  phone: string;
  date: string;
}

export interface IUser {
  avatarUrl: string;
  fullName: string;
  request: IRequest;
}
