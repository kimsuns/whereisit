function reducer(state, action) {
  let nextState;
  let category = action.category;
  let data = action.data;

  switch (action.type) {
    case "INIT": {
      nextState = data;
      break;
    }
    case "CREATE": {
      nextState = [...state[category], data];
      break;
    }
    case "UPDATE": {
      console.log("수정", state[category]);
      console.log("수정할 데이터", data);
      nextState = state[category].map((item) =>
        String(item.id) === String(data.id) ? data : item
      );
      console.log("넥스트스테이트", nextState);
      break;
    }
    case "DELETE": {
      nextState = state[category].filter(
        (item) => String(item.id) !== String(data.id)
      );
      break;
    }
  }

  localStorage.setItem(category, JSON.stringify(nextState));

  return { ...state, [category]: nextState };
}

export default reducer;
