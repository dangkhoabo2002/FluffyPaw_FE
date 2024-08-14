import React from "react";
import "./Po_pets.css";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function Po_pets() {
  return (
    <>
      <div className="flex flex-col px-20">
        <h1>Chó 1</h1>
        <div className="flex flex-wrap">
          <div className="petCard">
            <img
              alt="dogIcon"
              src="https://cdn4.vectorstock.com/i/1000x1000/82/13/dog-outline-icon-graphics-vector-47088213.jpg"
            />
            <div className="">
              <p>Sở thích: Gặm cỏ</p>
              <p>Giống: Cái</p>
              <p>Cân nặng: 5 kg</p>
              <div className="inline-flex gap-2 text-green-600">
                <CheckCircleIcon class="h-6 w-6 text-green-600" />
                Đã tiêm chủng
              </div>
            </div>
          </div>
          <div className="petCard">
            <img
              alt="dogIcon"
              src="https://cdn4.vectorstock.com/i/1000x1000/82/13/dog-outline-icon-graphics-vector-47088213.jpg"
            />
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
