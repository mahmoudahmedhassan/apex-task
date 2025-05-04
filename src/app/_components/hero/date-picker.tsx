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

interface DatePickerWithRangeProps extends React.HTMLAttributes<HTMLDivElement> {
  placeholder?: string
}

export function DatePickerWithRange({
  className,
  placeholder = "اختر التاريخ",
}: DatePickerWithRangeProps) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 5),
  })

  const isDateSelected = !!date?.from

  return (
    <div className={cn("grid gap-2 text-right", className)} dir="rtl">
      <label className="text-sm font-medium block text-gray-700">تاريخ الحجز</label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="outline"
            className={cn(
              "w-full justify-between rtl:text-right",
              isDateSelected ? "text-gray-500" : "text-gray-400"
            )}
          >
            <CalendarIcon className="ml-2 rtl:ml-0 rtl:mr-2" />
            {isDateSelected ? (
              date?.to ? (
                <>
                  {format(date.from!, "dd LLL yyyy", { locale: ar })} -{" "}
                  {format(date.to!, "dd LLL yyyy", { locale: ar })}
                </>
              ) : (
                format(date.from!, "dd LLL yyyy", { locale: ar })
              )
            ) : (
              <span>{placeholder}</span>
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
