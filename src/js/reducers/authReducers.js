let initialState = {
  token: null,
  error: null,
  fetching: false,
  fetched: false
}

export default function reducer(state = initialState, action) {

  switch (action.type) {

    case "GET_TOKEN": {

      return {
        ...state,
        fetching: true
      }

    }

    case "GET_TOKEN_FULFILLED": {

      return {
        ...state,
        fetching: false,
        fetched: true,
        token: action.payload
      }

    }

    case "GET_TOKEN_REJECTED": {

      return {
        ...state,
        fetching: false,
        error: action.payload
      }

    }

  }

  return state
}
