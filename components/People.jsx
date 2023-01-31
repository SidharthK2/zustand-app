import React from "react";
import useStore from "@/store";

export default function People() {
  const people = useStore((state) => state.people);
  const peopleEl = people.map((p) => {
    return <li key={p}>{p}</li>;
  });
  return (
    <div className="p-2">
      <p>We have {people.length} people in store</p>
      <ul className="list-disc">{peopleEl}</ul>
    </div>
  );
}
