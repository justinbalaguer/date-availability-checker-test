"use client";

import { useState } from "react";

export default function Home() {
  const [minDate, setMinDate] = useState<Date | null>();
  const [maxDate, setMaxDate] = useState<Date | null>();

  const unavailableDates = [
    new Date("2024-12-20"),
    new Date("2024-12-21"),
    new Date("2024-12-22"),
  ];

  const [message, setMessage] = useState<string>("");

  const checkAvailability = () => {
    const dateRange: Date[] = [];

    if (!minDate || !maxDate) return;

    while (minDate <= maxDate) {
      dateRange.push(new Date(minDate));
      minDate.setDate(minDate.getDate() + 1);
    }

    console.log(unavailableDates);
    console.log(dateRange);

    const isAvailable = unavailableDates.some(unavailableDate => dateRange.some(availableDate => availableDate.getTime() === unavailableDate.getTime()));

    if (isAvailable) {
      setMessage("Not Available");
    } else {
      setMessage("Available");
    }
  };

  return (
    <div>
      <div>
        <h1>Unavailable Dates</h1>
        {unavailableDates.map((date, key) => (
          <div key={key}>{date.toLocaleDateString()}</div>
        ))}
      </div>
      <div>
        <input type="date" onChange={(e) => setMinDate(e.target.valueAsDate)} />
      </div>
      <div>
        <input type="date" onChange={(e) => setMaxDate(e.target.valueAsDate)} />
      </div>
      <button onClick={checkAvailability}>Check Availability</button>

      <div>
        <h1>{message}</h1>
      </div>
    </div>
  );
}
