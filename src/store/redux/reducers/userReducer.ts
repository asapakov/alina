import { type IAction, type IUser } from '../interfaces';
import avatar from '../../../assets/images/avatar.svg';
import { MainActionTypes } from '../types';

const initialState: IUser = {
  avatarUrl: avatar,
  fullName: 'Иванов И.И.',
  request: {
    name: '',
    sum: 0,
    type: '',
    call: true,
    email: false,
    SMS: false,
    value: 1,
    city: '',
    phone: '+7 (747) 123 - 45 - 67',
    date: null,
  },
};

const userReducer = (state = initialState, action: IAction): IUser => {
  switch (action.type) {
    case MainActionTypes.EDIT_REQUEST_PROPERTY: {
      const { key, value } = action.payload;
      return {
        ...state,
        request: {
          ...state.request,
          [key]: value,
        },
      };
    }
    case MainActionTypes.CLEAR_REQUEST_PROPERTY: {
      return {
        ...state,
        request: initialState.request,
      };
    }
    default:
      return { ...state };
  }
};
export default userReducer;
