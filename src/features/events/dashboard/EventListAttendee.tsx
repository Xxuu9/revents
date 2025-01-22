import { Image, List } from "semantic-ui-react";
import { Attendees } from "../../../app/types/event";
import { Link } from "react-router-dom";

type Props = {
  attendee: Attendees;
};

export default function EventListAttendee({ attendee }: Props) {
  return (
    <List.Item as={Link} to={`profiles/${attendee.id}`}>
      <Image size="mini" circular src={attendee.photoURL} />
    </List.Item>
  );
}
