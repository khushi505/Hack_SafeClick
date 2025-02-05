import React, { useState, useEffect } from "react";
import "../Calendar/Calendar.css";
import { FaChevronLeft, FaChevronRight, FaCalendarDay } from "react-icons/fa";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const MiniCalendar = () => {
  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [days, setDays] = useState([]);

  useEffect(() => {
    renderCalendar();
  }, [currentMonth, currentYear]);

  const renderCalendar = () => {
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const lastDayDate = lastDay.getDate();
    const prevLastDay = new Date(currentYear, currentMonth, 0);
    const prevLastDayDate = prevLastDay.getDate();
    const firstDayIndex = firstDay.getDay();
    const lastDayIndex = lastDay.getDay();
    const nextDays = 6 - lastDayIndex;

    let daysArray = [];

    // Previous Month Days
    for (let x = firstDayIndex; x > 0; x--) {
      daysArray.push({ day: prevLastDayDate - x + 1, className: "prev" });
    }

    // Current Month Days
    for (let i = 1; i <= lastDayDate; i++) {
      const isToday =
        i === currentDate.getDate() &&
        currentMonth === currentDate.getMonth() &&
        currentYear === currentDate.getFullYear();
      daysArray.push({ day: i, className: isToday ? "today" : "" });
    }

    // Next Month Days
    for (let j = 1; j <= nextDays; j++) {
      daysArray.push({ day: j, className: "next" });
    }

    setDays(daysArray);
  };

  const handleNextMonth = () => {
    setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1));
    if (currentMonth === 11) setCurrentYear((prev) => prev + 1);
  };

  const handlePrevMonth = () => {
    setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1));
    if (currentMonth === 0) setCurrentYear((prev) => prev - 1);
  };

  const goToToday = () => {
    setCurrentMonth(currentDate.getMonth());
    setCurrentYear(currentDate.getFullYear());
  };

  return (
    <div className="container">
      <div className="calendar">
        <div className="header">
          <div className="month">{`${months[currentMonth]} ${currentYear}`}</div>
          <div className="btns">
            <button className="btn today-btn" onClick={goToToday}>
              <FaCalendarDay />
            </button>
            <button className="btn prev-btn" onClick={handlePrevMonth}>
              <FaChevronLeft />
            </button>
            <button className="btn next-btn" onClick={handleNextMonth}>
              <FaChevronRight />
            </button>
          </div>
        </div>
        <div className="weekdays">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="day">
              {day}
            </div>
          ))}
        </div>
        <div className="days">
          {days.map((d, index) => (
            <div key={index} className={`day ${d.className}`}>
              {d.day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiniCalendar;
