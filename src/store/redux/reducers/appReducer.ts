import { MainActionTypes } from '../types';
import { type IAction, type IAppState } from '../interfaces';

const initialState: IAppState = {
  isAlertVisible: false,
  isSidebarOpen: false,
  text: '',
};

const appReducer = (state = initialState, action: IAction): IAppState => {
  switch (action.type) {
    case MainActionTypes.SHOW_ALERT: {
      return {
        ...state,
        text: action.payload as string,
        isAlertVisible: true,
      };
    }
    case MainActionTypes.RESET_ALERT: {
      return {
        ...state,
        text: '',
        isAlertVisible: false,
      };
    }
    case MainActionTypes.CLOSE_SIDEBAR: {
      return {
        ...state,
        isSidebarOpen: false,
      };
    }
    case MainActionTypes.OPEN_SIDEBAR: {
      return {
        ...state,
        isSidebarOpen: true,
      };
    }
    default:
      return { ...state };
  }
};
export default appReducer;
