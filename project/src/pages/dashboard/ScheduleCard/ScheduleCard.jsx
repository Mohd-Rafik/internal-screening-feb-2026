import React from "react";
import { Card } from "react-bootstrap";
import { CalendarDays, Clock, Plus } from "lucide-react";
import data from "../../../Data/Data"
const ScheduleCard = () => {
  const schedule = data?.schedule || [];

  return (
    <Card className="schedule-card border-0">
      <div className="schedule-header">
        <div>
          <h5>Upcoming Schedule</h5>
          <p>Thursday, 10th April , 2021</p>
        </div>

        <button className="add-btn">
          <Plus size={20} />
        </button>
      </div>
      <div className="schedule-list">

        {schedule.map((item) => (
          <div
            key={item.id}
            className={`schedule-item ${item.color}`}
          >

            <h6>{item.title}</h6>

            <div className="schedule-time">

              <span>
                <CalendarDays size={16} />
                {item.date}
              </span>

              <span>
                <Clock size={16} />
                {item.time}
              </span>

            </div>

            <div className="schedule-teacher">
              <div className="avatar"></div>
              <p>{item.teacher}</p>
            </div>

          </div>
        ))}

      </div>
      <button className="more-btn ">
        More Schedule
      </button>

    </Card>
  );
};

export default ScheduleCard;
