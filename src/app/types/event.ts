export type AppEvent = {
  id: string;
  title: string;
  date: string;
  description: string;
  city: string;
  venue: string;
  hostedBy: string;
  hostPhotoURL: string;
  attendees: Attendees[];
};

export type Attendees = {
  id: string;
  name: string;
  photoURL: string;
};
