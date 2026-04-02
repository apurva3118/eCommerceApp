import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SnackbarVariant = 'success' | 'error' | 'warning' | 'info';
type SnackbarPosition = 'top' | 'bottom';

interface SnackbarState {
    message: string;
    variant: SnackbarVariant;
    position: SnackbarPosition;
    visible: boolean;
    duration: number;
}

interface RootSnackbarState {
    snackbar: SnackbarState;
}

const initialState: RootSnackbarState = {
    snackbar: {
        message: '',
        variant: 'success',
        position: 'bottom',
        visible: false,
        duration: 3000,
    },
};

const snackbarSlice = createSlice({
    name: 'snackbar',
    initialState,
    reducers: {
        setSnackBar: (
            state,
            action: PayloadAction<Partial<SnackbarState>>
        ) => {
            state.snackbar = {
                ...state.snackbar,
                ...action.payload,
                visible: true,
            };
        },

        hideSnackBar: (state) => {
            state.snackbar.visible = false;
        },
    },
});

export const { setSnackBar, hideSnackBar } = snackbarSlice.actions;
export default snackbarSlice.reducer;