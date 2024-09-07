import React from "react";
import { ArrowPathRoundedSquareIcon } from "@heroicons/react/24/outline";

export default function support_menu() {
  return (
    <div className="flex flex-col w-screen h-[160px] bg-pink-300  px-60 py-6">
      <h1>Xin chào, chúng tôi có thể giúp gì cho bạn?</h1>
      <div className="flex flex-row">
        <div className="border border-solid flex flex-row">
          <ArrowPathRoundedSquareIcon class="h-6 w-6 text-gray-500" />
          Thanh toán & Hoàn tiền
        </div>
      </div>
    </div>
  );
}
