"use client"

import * as React from "react"
import { addDays, format } from "date-fns"
import { ar } from "date-fns/locale"
import { CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function DatePickerWithRange({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 5),
  })

  return (
    <div className={cn("grid gap-2", className, "text-right rtl")}>
      <label className="text-sm font-medium   block text-gray-700">الفترة الزمنية</label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-full justify-between font-normal rtl:text-right",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="ml-2 rtl:ml-0 rtl:mr-2" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "dd LLL yyyy", { locale: ar })} -{" "}
                  {format(date.to, "dd LLL yyyy", { locale: ar })}
                </>
              ) : (
                format(date.from, "dd LLL yyyy", { locale: ar })
              )
            ) : (
              <span>اختر التاريخ</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
