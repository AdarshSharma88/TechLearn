import { createReducer } from '@reduxjs/toolkit';
export const otherReducer = createReducer(
  {},
  builder => {
    builder
      .addCase('contactRequest', state => {
        state.loading = true;
      })
      .addCase('contactSuccess', (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase('contactFail', (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase('courseRequestRequest', state => {
        state.loading = true;
      })
      .addCase('courseRequestSuccess', (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase('courseRequestFail', (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase('clearOtherError', state => {
        state.error = null;
      })
      .addCase('clearOtherMessage', state => {
        state.message = null;
      });
  }
);