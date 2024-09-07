import React from "react";

export default function support_navbar(title) {
  return (
    <div className="flex flex-row justify-between w-screen px-60 py-6 bg-white">
      <div>Logo | Trung tâm trợ giúp</div>
      <div>{title.title}</div>
    </div>
  );
}
