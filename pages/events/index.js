import React, { useEffect, useState } from "react";
import { EventCard, SectionTitle } from "../../components";

import { getEvents } from "../../services";
// import moment from 'moment'

const EventPage = ({ events }) => {
  const [eventsNow, setEventsNow] = useState([]);
  const [eventsUpcoming, setEventsUpcoming] = useState([]);
  const [eventsPast, setEventsPast] = useState([]);

  useEffect(() => {
    const { eventsUpcoming, eventsNow, eventsPast } = sortEvents(events);

    setEventsNow(eventsNow);
    setEventsUpcoming(eventsUpcoming);
    setEventsPast(eventsPast);
  }, []);

  const sortEvents = () => {
    const eventsUpcoming = [];
    const eventsNow = [];
    const eventsPast = [];

    events.forEach((e) => {
      const startDate = new Date(e.startDate).getTime();
      const endDate = new Date(e.endDate).getTime();

      if (startDate > Date.now()) {
        eventsUpcoming.push(e);
      }

      if (
        (!endDate && startDate) ||
        (startDate < Date.now() && Date.now() < endDate)
      ) {
        eventsNow.push(e);
      }

      if (endDate && endDate < Date.now()) {
        eventsPast.push(e);
      }
    });

    return { eventsUpcoming, eventsNow, eventsPast };
  };

//   console.log(
//     "upcoming:",
//     eventsUpcoming,
//     "now:",
//     eventsNow,
//     "past:",
//     eventsPast
//   );

  return (
    <>
      <div className="container mx-auto">
        <SectionTitle title="events" />
        {eventsNow.map((event) => (
          <EventCard event={event} key={event.id} />
        ))}
      </div>
      <div className="container mx-auto">
        <SectionTitle title="upcoming events" />
        {eventsUpcoming.map((event) => (
          <EventCard event={event} key={event.id} />
        ))}
      </div>
      <div className="container mx-auto">
        <SectionTitle title="past events" />
        {eventsPast.map((event) => (
          <EventCard event={event} key={event.id} />
        ))}
      </div>
    </>
  );
};

export default EventPage;

export async function getStaticProps() {
  const events = await getEvents();

  return {
    props: {
      events: events,
    },
  };
}
