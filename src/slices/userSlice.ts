/* eslint-disable @typescript-eslint/no-unused-vars */

// import { setBearerToken } from '@/api/axios';
// import { _getAPI } from '@/api/common';
import { getProfileAPI } from '@/api/profile';
import { RootState } from '@/hooks/store';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';


export interface User {
    lang: string;
    email_verified: boolean;
    cover: string;
    avatar_xs: string;
    avatar_s: string;
    avatar: string;
    last_name: string;
    first_name: string;
    username: string;
    email: string;
    user_id: string;
    token: string;
    salt: string;
    created_at: string,
    last_login: string
    country_id: string
    gender: string
}

export const checkAuthenticated = createAsyncThunk('user/check', async (_arg, thunkApi) => {

    let profile: User | null = checkSession()

    try {
        const token= profile?.token
        const rs = await getProfileAPI(token)
        if (rs.success) {
            return {...rs.data, token}
        } else {
            return thunkApi.rejectWithValue(profile)
        }
    } catch (e) {
        return thunkApi.rejectWithValue(e);
    }
}
);


export const register = createAsyncThunk('user/register', async (data: any, thunkApi) => {

    let token = '';
    let profile: any

    console.log('data: ', data)

    try {
        if (profile) {
            return profile
        } else {
            return thunkApi.rejectWithValue(profile)
        }

    } catch (e) {
        console.log('error register', e)
        return thunkApi.rejectWithValue(e);
    }
}
);

export const login = createAsyncThunk('user/login', async (_arg: any, thunkApi) => {

    try {
        let data = _arg
        let profile
        if (data) {
            profile = data.user
            profile.token = data.access_token
        }
        return profile

    } catch (e) {
        console.log('error login', e)
        return thunkApi.rejectWithValue(e);
    }
}
);


export const logout = createAsyncThunk('user/logout', async (_arg, thunkApi) => {
    try {
        //console.log('arg logout',_arg);
        localStorage.removeItem('user')
        // setBearerToken(null)
        return true
    } catch (e) {
        console.log('error login', e)
        return thunkApi.rejectWithValue(e);
    }
}
);


type UsersState = {
    user: User,
    chainId: number,
    isLoading: boolean
    isLoggedIn: boolean
    isError: boolean
    error: any
}

const initialState: UsersState = {
    user: {
        lang: '',
        email_verified: false,
        cover: '',
        avatar_xs: '',
        avatar_s: '',
        avatar: '',
        last_name: '',
        first_name: '',
        username: '',
        email: '',
        user_id: '',
        token: '',
        salt: '',
        created_at: '',
        last_login: '',
        country_id: '',
        gender: '',
    },
    chainId: 97,
    isLoading: false,
    isLoggedIn: false,
    isError: false,
    error: ''
}

function saveSession(user: User | undefined) {
    localStorage.setItem('app_webview_token_s', user?.token || '')
    localStorage.setItem('user', JSON.stringify(user));
}
function removeSession() {
    localStorage.removeItem('user');
    localStorage.removeItem('app_webview_token_s')
}

export function checkSession(): User | null {
    let user = localStorage.getItem('user')
    if (!user) {
        return null
    }
    let profile = JSON.parse(user) as User
    return profile
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        clearState: (state) => {
            state.isLoading = false;
            state.isLoggedIn = false;
            // clear token
            return state;
        },

        updateChainId: (state, action: PayloadAction<number | undefined>) => {
            state.chainId = action.payload || 97;
            console.log('update chainId')
            localStorage.setItem('dapp_cctpa_chain_id', JSON.stringify(action.payload));
            return state;
        },

    },
    extraReducers: (builder) => {
        //check auth
        builder.addCase(checkAuthenticated.fulfilled, (state, { payload }) => {
            if (payload) {
                state.user = payload
                saveSession(payload)
                state.isLoading = false;
                state.isError = false;
                // setBearerToken(payload.token)
                state.isLoggedIn = true;
            } else {
                state.isLoading = false
                state.isLoggedIn = false
            }
            console.log('state', state)
        })
        builder.addCase(checkAuthenticated.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.isLoggedIn = false;
            state.isError = true;
            state.error = payload
        })
        builder.addCase(checkAuthenticated.pending, (state, _action) => {
            state.isLoading = true;
            state.isError = false;

        })

        //register
        builder.addCase(register.fulfilled, (state, { payload }) => {
            if (payload) {
                state.user = payload
                state.user.user_id = payload.user_id
                saveSession(state.user)
                state.isLoading = false;
                //console.log(`payload: ${JSON.stringify(payload)}`)
                // update token
                // set login status
                state.isLoggedIn = true;
            } else {
                state.isLoading = false
                state.isLoggedIn = false
            }
            //console.log('payload', payload)
        })
        builder.addCase(register.rejected, (state, _action) => {
            state.isLoading = false;
            state.isLoggedIn = false;
        })
        builder.addCase(register.pending, (state, _action) => {
            state.isLoading = true;
        })

        //login
        builder.addCase(login.fulfilled, (state, { payload }) => {
            state.user = payload
            saveSession(payload)
            state.isLoading = false;
            // setBearerToken(payload.token)
            state.isLoggedIn = true;
            state.error = undefined
        })
        builder.addCase(login.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.isLoggedIn = false;
            state.error = payload
        })
        builder.addCase(login.pending, (state, _action) => {
            state.isLoading = true;
            state.error = undefined
        })

        //logout
        builder.addCase(logout.fulfilled, (state, { payload }) => {
            removeSession()
            state.user = initialState.user;
            state.isLoading = false;
            state.isLoggedIn = false;
        })
        builder.addCase(logout.rejected, (state, action) => {
            removeSession()
            state.isLoading = false;
            state.isLoggedIn = false;
        })
        builder.addCase(logout.pending, (state, action) => {
            state.isLoading = true;
        })

    },
});



export const { clearState, updateChainId } = userSlice.actions;
export const userSelector = (state: RootState) => state.user;
