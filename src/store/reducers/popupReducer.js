import { createSlice } from "@reduxjs/toolkit";


const popupSlice = createSlice({
    name: 'popup',
    initialState: {
        product: {
            id: '',
            name: '',
            img1: '',
            price: '',
            short_desc: ''
        },
        showPopup: false
    },
    reducers: {
        SHOW_POPUP: (state, { payload }) => {
            state.showPopup = true
            state.product = { ...payload.product }
        },
        HIDE_POPUP: (state) => {
            state.showPopup = false
        }
    }
})
export const popupAction = popupSlice.actions
export default popupSlice.reducer