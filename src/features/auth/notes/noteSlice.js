import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import noteService from './noteService'


const initialState={
    notes:[],
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''
}

export const getNotes = createAsyncThunk('notes/getAll',async(ticketId,thunkAPI)=>{
    try {

        const token = thunkAPI.getState().auth.user.token
        return await noteService.getNotes(ticketId,token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})

export const createNotes = createAsyncThunk('notes/createNote',async({noteText,ticketId},thunkAPI)=>{
    try {

        const token = thunkAPI.getState().auth.user.token
        return await noteService.createNotes(noteText,ticketId,token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})

export const noteSlice = createSlice({
    name:'note',
    initialState,
    reducers:{
        reset:(state)=>initialState
    },
    extraReducers:(builder)=>{
        builder
            .addCase(getNotes.pending,(state)=>{
            state.isLoading=true
            })
            .addCase(getNotes.fulfilled,(state,action)=>{
                state.isSuccess=true
                state.isLoading=false
                state.notes=action.payload
            })
            .addCase(getNotes.rejected,(state,action)=>{
                    state.isError=true
                    state.isLoading=false
                    state.message=action.payload
            })
            .addCase(createNotes.pending,(state)=>{
                state.isLoading=true
            })
            .addCase(createNotes.fulfilled,(state,action)=>{
                    state.isSuccess=true
                    state.isLoading=false
                    state.notes.push(action.payload)
            })
            .addCase(createNotes.rejected,(state,action)=>{
                        state.isError=true
                        state.isLoading=false
                        state.message=action.payload
            })
    }

})

export const {reset} = noteSlice.actions

export default noteSlice.reducer