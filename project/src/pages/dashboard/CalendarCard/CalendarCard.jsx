import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Calendar from "react-calendar";
import data from "../../../Data/Data";

export default function CalendarCard() {

  const [date, setDate] = useState(new Date());

  const eventDates = data.schedule.map(item => item.date);

  return (
    <Card className="calendar-card border-0 pt-lg-4">
      <Card.Body>

        <Calendar
          onChange={setDate}
          value={date}
          prevLabel="‹"
          nextLabel="›"

          tileContent={({ date, view }) => {
            if (view === "month") {

              const d = date.toISOString().split("T")[0];

              if (eventDates.includes(d)) {
                return <span className="event-dot"></span>;
              }

            }
          }}
        />

      </Card.Body>
    </Card>
  );
}
