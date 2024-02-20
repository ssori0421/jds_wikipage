import { IPost } from '@/types/post';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { convertMarkdownToPlainText, truncateText } from '@/utils/text';

interface IPostState {
  posts: IPost[];
  currentPost: IPost;
}

const initialState: IPostState = {
  posts: [],
  currentPost: {
    id: '',
    title: '',
    subTitle: '',
    content: '',
    html: '',
    created_at: '',
    updated_at: '',
  },
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    INIT_POSTS(state) {
      const localStoragePosts = JSON.parse(localStorage.getItem('posts') || '[]') as IPost[];
      state.posts = localStoragePosts;
    },

    CREATE_POST(state, action: { payload: { title: string; content: string; html: string } }) {
      const newPost = {
        ...action.payload,
        id: Date.now().toString(),
        subTitle: truncateText(convertMarkdownToPlainText(action.payload.content), 30),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };
      state.posts.push(newPost);
      localStorage.setItem('posts', JSON.stringify(state.posts));
    },

    UPDATE_POST(
      state,
      action: { payload: { param: string; title: string; content: string; html: string } }
    ) {
      const existingPostIndex = state.posts.findIndex(
        (post) => post.title === action.payload.param
      );

      if (existingPostIndex === -1) {
        throw Error;
      } else {
        const prevPost = state.posts[existingPostIndex];
        const newPost = {
          ...prevPost,
          title: action.payload.title,
          subTitle: truncateText(convertMarkdownToPlainText(action.payload.content), 30),
          content: action.payload.content,
          html: action.payload.html,
          updated_at: new Date().toISOString(),
        };
        state.posts[existingPostIndex] = newPost;
        localStorage.setItem('posts', JSON.stringify(state.posts));
      }
    },

    GET_POST(state, action: { payload: { title: string } }) {
      const findPost = state.posts.find((post) => post.title === action.payload.title) as IPost;
      state.currentPost = findPost;
    },
  },
});

export const { INIT_POSTS, CREATE_POST, UPDATE_POST, GET_POST } = postSlice.actions;
export const selectPosts = (state: RootState) => state.post.posts;
export const selectCurrentPost = (state: RootState) => state.post.currentPost;

export default postSlice.reducer;
