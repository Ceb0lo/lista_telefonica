import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Filtro = {
  termo?: string
}

const initialState: Filtro = {
  termo: ''
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    }
  }
})

export const { alteraTermo } = filtroSlice.actions

export default filtroSlice.reducer
