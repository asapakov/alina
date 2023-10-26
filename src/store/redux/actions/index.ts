import { MainActionTypes } from '../types';
import { type IAction } from '../interfaces';

export const showAlert = (payload: string): IAction => {
  return {
    type: MainActionTypes.SHOW_ALERT,
    payload,
  };
};

export const hideAlert = (): IAction => {
  return {
    type: MainActionTypes.RESET_ALERT,
  };
};

export const showSidebar = (): IAction => {
  return {
    type: MainActionTypes.OPEN_SIDEBAR,
  };
};

export const hideSidebar = (): IAction => {
  return {
    type: MainActionTypes.CLOSE_SIDEBAR,
  };
};

export const getUserInfo = (): IAction => {
  return {
    type: MainActionTypes.GET_USER_INFO,
  };
};

export const setRequestData = (payload: object): IAction => {
  return {
    type: MainActionTypes.EDIT_REQUEST_PROPERTY,
    payload,
  };
};

export const clearRequestData = (): IAction => {
  return {
    type: MainActionTypes.CLEAR_REQUEST_PROPERTY,
  };
};
