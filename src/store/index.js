import { configureStore } from "@reduxjs/toolkit"
import popupReducer from "./reducers/popupReducer"
import authReducer from "./reducers/authReducer"
import cartReducer from "./reducers/cartReducer"

const store = configureStore({
    reducer: {
        popup: popupReducer,
        auth: authReducer,
        cart: cartReducer
    }
})
export default store