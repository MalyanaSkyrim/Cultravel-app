import types from "../actions/actionTypes";

const initialState = {
  isLoading: true,
  listNotif: []
};

const commonReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.START_LOADER: {
      return { ...state, isLoading: true };
    }

    case types.STOP_LOADER: {
      return { ...state, isLoading: false };
    }

    case types.NOTIFY: {
      const listNotif = [...state.listNotif];
      listNotif.push(payload);
      return { ...state, listNotif };
    }

    case types.ClOSE_NOTIF: {
      const listNotif = [...state.listNotif].filter(
        notif => notif.id != payload
      );
      return { ...state, listNotif };
    }

    default:
      return state;
  }
};

export default commonReducer;
