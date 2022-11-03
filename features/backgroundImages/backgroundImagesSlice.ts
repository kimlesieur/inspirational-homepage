import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { getImage } from '../../api/unsplash';
import { RootState } from '../store/store';

const initialState: BackgroundImagesState = {
    urls: [],
    isLoadingImages: false,
    hasError: false
};

export const loadImages = createAsyncThunk(
    'backgroundImages/loadImages',
    async () => {
        const data = await getImage();
        return data;
    }
);

const backgroundImagesSlice = createSlice({
    name: 'backgroundImages',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(loadImages.pending, (state) => {
                state.isLoadingImages = true;
                state.hasError = false;
            })
            .addCase(loadImages.fulfilled, (state, action) => {
                state.isLoadingImages = false;
                state.hasError = false;
                state.urls = action.payload;

            })
            .addCase(loadImages.rejected, (state, action) => {
                state.isLoadingImages = false;
                state.hasError = true;
                state.urls = [];
            })
    }
});

export const selectUrls = (state: RootState) => state.backgroundImages.urls;
export default backgroundImagesSlice.reducer;

