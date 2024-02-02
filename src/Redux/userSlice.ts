// userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


type User ={
  id: string;
  username: string;
  password:string;
  email:string;
}

interface UserState {
  currentUser : User | null;
  isLoggedIn: boolean;
  isRegistered: boolean;

}

const initialState: UserState = {
  currentUser : null,
  isLoggedIn: false,
  isRegistered: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User | null>) => {

      state.currentUser = action.payload;
      if (action.payload) {
        localStorage.setItem('user', JSON.stringify(action.payload));
      }
      

    },
    registerSuccess: (state) => {
      state.isRegistered = true;
    },
    resetRegistration: (state) => {
      state.isRegistered = false;
    },

    loginUser:(state, action:PayloadAction<Partial<User>>) => {
        const { username, password } = action.payload;
        try {
         let storedUsers = JSON.parse(localStorage.getItem('user') || '[]'); 
          console.log('Stored users:', storedUsers);
          const matchedUsers = Array(storedUsers).filter((user: User) => user.username === username && user.password === password);
          console.log('Matched users:', matchedUsers);
          
          if (matchedUsers && matchedUsers.length > 0) {
            console.log('Login successful!');
            alert('Login successful!');
           
            state.isLoggedIn = true;
      
          } else {
            // state.isLoggedIn = true;
            console.log('Invalid email or password!');
            alert('Invalid email or password!');
            state.isLoggedIn = false;
          }
        } catch (error) {
          console.error('Error during login:', error);
        }
      },
      
      logoutUser: (state) => {
      
        state.isLoggedIn = false;
        state.currentUser = null;
        // localStorage.removeItem('user');
      },
  },
});

export const { addUser, loginUser, logoutUser, registerSuccess, resetRegistration } = userSlice.actions;
export default userSlice.reducer;
