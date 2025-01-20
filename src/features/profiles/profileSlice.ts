import { Timestamp } from "firebase/firestore";
import { createGenericSlice, GenericState } from "../../app/store/genericSlice";
import { Profile } from "../../app/types/profile";
import { PayloadAction } from "@reduxjs/toolkit";

type State = {
  data: Profile[];
};

const initialState: State = {
  data: [],
};

export const profileSlice = createGenericSlice({
  name: "profiles",
  initialState: initialState as GenericState<Profile[]>,
  reducers: {
    success: {
      reducer: (state, action: PayloadAction<Profile[]>) => {
        state.data = action.payload;
        state.status = "finished";
      },
      prepare: (profiles) => {
        const profileArray: Profile[] = Array.isArray(profiles)
          ? profiles
          : [profiles];
        const mapped = profileArray.map((profile) => {
          return {
            ...profile,
            createdAt: profile.createdAt
              ? (profile.createdAt as unknown as Timestamp)
                  .toDate()
                  .toISOString()
              : new Date().toISOString(),
          };
        });
        return { payload: mapped };
      },
    },
  },
});

export const actions = profileSlice.actions;
