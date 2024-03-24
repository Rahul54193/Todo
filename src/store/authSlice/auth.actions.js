import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosRequest from '../../helper/axiosRequest'

//! ======================== Redux : Async Thunk Actions ============================

/**
 * Api Action
 */
export const apiAction = createAsyncThunk(
    'auth/apiAction',
    async (val, thunkAPI) => {
        try {
            const result = await axiosRequest({
              url: '/products',
              method: 'GET',
            //   data: val,
            })
            return result
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response ? error.response?.data : error.data
            )
        }
    }
)