/* eslint-disable @typescript-eslint/no-unused-vars */
import { IAppConfig, IChainConfig } from '@/@type/config';
import { getAppConfig } from '@/api/config';
import { RootState } from '@/hooks/store';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';



type AppConfigState = {
    appConfig: IAppConfig | null
    currentNetwork: IChainConfig | undefined
    isFetchingConfig: boolean
    fetchingConfigError: boolean
}

const initialState: AppConfigState = {
    appConfig: null,
    currentNetwork: undefined,
    isFetchingConfig: false,
    fetchingConfigError: false
}

export const fetchAppConfig = createAsyncThunk('appconfig/fetch', async (_arg, thunkApi) => {
    try {
        const response = await getAppConfig()
        //console.log(`response: ${JSON.stringify(response)}`)
        return response.data
    }
    catch (exception: any) {
       // console.log(`fetchAppConfig exception: ${exception}`)
        return thunkApi.rejectWithValue(exception)
    }
})


export const appConfigSlice = createSlice({
    name: 'appConfig',
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        // check wallet
        builder.addCase(fetchAppConfig.fulfilled, (state, { payload }) => {
            state.isFetchingConfig = false
            state.appConfig = payload
            state.currentNetwork = state.appConfig?.network_chains[0]
        }),
        builder.addCase(fetchAppConfig.rejected, (state, _action) => {
            state.isFetchingConfig = false
            state.fetchingConfigError = true
        }),
        builder.addCase(fetchAppConfig.pending, (state, _action) => {
            state.isFetchingConfig = true
            state.fetchingConfigError = false
        })
    }
});

export const appConfigSelector = (state: RootState) => state.appConfig;