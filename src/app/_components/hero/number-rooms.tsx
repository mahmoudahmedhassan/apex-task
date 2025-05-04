"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
 } from "@/components/ui/select";

import { CircleMinus, CirclePlus  } from "lucide-react";
import { useState } from "react";

export default function RoomGuestSelect() {
  const [rooms, setRooms] = useState(1);
  const [guests, setGuests] = useState(2);

  return (
    <div className="w-full" dir="rtl">
      <label className="text-sm  text-start font-medium mb-1 block text-gray-700">
        عدد الغرف
      </label>
      <Select>
        <SelectTrigger className="w-full flex-row-reverse justify-between">
          <div className="flex gap-3 ">
            <p className="text-sm   text-gray-500 flex items-center gap-1">
              <span>غرف</span>
              <span> {rooms}</span>
            </p>
            <p className="text-sm   text-gray-500 flex items-center gap-1">
              <span>ضيوف</span> <span> {guests}</span>{" "}
            </p>
          </div>
        </SelectTrigger>
        <SelectContent className="text-right">
          <SelectGroup>
            <div className="flex flex-col gap-4 p-4">
                <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center justify-between  gap-3 border rounded-3xl p-1 w-24"  >
                        <CircleMinus onClick={() => setRooms(rooms - 1)} className="w-4 h-4 text-blue-600"/>
                        <span>{rooms}</span>
                        <CirclePlus onClick={() => setRooms(rooms + 1)} className="w-4 h-4 text-blue-600"/> 
                    </div>
                    <p className="text-sm font-medium text-gray-700">عدد الغرف</p>
                </div>

                <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center justify-between  gap-3 border rounded-3xl p-1 w-24"  >
                        <CircleMinus onClick={() => setGuests(guests - 1)} className="w-4 h-4 text-blue-600"/>
                        <span>{guests}</span>
                        <CirclePlus onClick={() => setGuests(guests + 1)} className="w-4 h-4 text-blue-600"/> 
                    </div>
                    <p className="text-sm font-medium text-gray-700">عدد الضيوف</p>
                </div>
            </div>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
