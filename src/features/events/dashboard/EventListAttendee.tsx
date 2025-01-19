import { Image, List } from "semantic-ui-react";
import { Attendees } from "../../../app/types/event";

type Props = {
  attendee: Attendees;
};

export default function EventListAttendee({ attendee }: Props) {
  return (
    <List.Item>
      <Image size="mini" circular src={attendee.photoURL} />
    </List.Item>
  );
}
