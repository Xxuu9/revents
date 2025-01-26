/* eslint-disable @typescript-eslint/no-unused-expressions */
import { PayloadAction } from "@reduxjs/toolkit";
import { GenericState, createGenericSlice } from "../../app/store/genericSlice";
import { Profile } from "../../app/types/profile";
import { Timestamp } from "firebase/firestore";

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
        state.data = action.payload.map((profile) => {
          const prevProfile = state.data.find((x) => x.id === profile.id);
          return prevProfile ? { ...prevProfile, ...profile } : profile;
        });
        state.status = "finished";
      },
      prepare: (profiles) => {
        const profileArray = Array.isArray(profiles) ? profiles : [profiles];
        const mapped = profileArray.map((profile) => ({
          ...profile,
          // 确保 createdAt 始终为 ISO 字符串
          createdAt:
            profile.createdAt instanceof Timestamp
              ? profile.createdAt.toDate().toISOString()
              : profile.createdAt || new Date().toISOString(),
        }));
        return { payload: mapped };
      },
    },
    setFollowing: (state, action) => {
      state.data = state.data.map((profile) => {
        if (profile.id !== action.payload.id) return profile;
        else {
          profile.isFollowing = action.payload.isFollowing;
          return profile;
        }
      });
    },
  },
});

export const actions = profileSlice.actions;
