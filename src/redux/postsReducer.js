import { CREATE_POST } from "./types"

const initState = {
  posts: [],
  fetchedPosts: []
}

export const postsReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_POST: 
      // return { ...state, posts: state.posts.concat(action.payload) }
      return { ...state, posts: [...state.posts, action.payload] }
    default: return state
  }
}