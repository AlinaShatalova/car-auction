import * as types from '../constants/actions';

const initState = {
  loading: false,
  searchParam: '',
  cars: [],
};

// eslint-disable-next-line default-param-last
const auctions = (state = initState, action) => {
  switch (action.type) {
    case types.CHANGE_SEARCH_PARAM:
      return {
        ...state,
        searchParam: action.payload,
      };
    case types.START_LOADING_AUCTIONS:
      return {
        ...state,
        loading: true,
      };
    case types.FINISH_LOADING_AUCTIONS:
      return {
        ...state,
        loading: false,
        cars: action.payload,
      };
    default: {
      return { ...state };
    }
  }
};

export default auctions;
