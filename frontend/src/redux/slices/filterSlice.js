import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    title: '',
    author: '',
    onlyFavorite: false
}

const filterSlice = createSlice({
    name: "filter",
    initialState: initialState,
    reducers: {
        setTitleFilter: (state, action) => {
            state.title = action.payload
        },
        setAuthorFilter: (state, action) =>{
            state.author = action.payload
        },
        setOnlyFavoriteFilters: (state) => {
            state.onlyFavorite = !state.onlyFavorite
        }, 
        resetFilters: () => {
            return initialState
        }
       
    }
})

export const { setTitleFilter, setAuthorFilter, setOnlyFavoriteFilters, resetFilters, } = filterSlice.actions

export const selectTitleFilter = (state) => state.filter.title

export const selectAuthorFilter = (state) => state.filter.author

export const selectOnlyFavoriteFilters = (state) => state.filter.onlyFavorite

export default filterSlice.reducer