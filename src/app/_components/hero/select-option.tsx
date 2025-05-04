import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

interface SelectInputProps {
  label: string;
  placeholder: string;
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
}

export const SelectInput: React.FC<SelectInputProps> = ({
  label,
  placeholder,
  options,
  value,
  onChange,
}) => (
  <div className="w-full" dir="rtl">
    <label className="text-sm text-start font-medium mb-1 block text-gray-700">
      {label}
    </label>
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full flex-row-reverse justify-between !text-gray-700">
        <SelectValue
          placeholder={placeholder}
          className="text-right"
        />
      </SelectTrigger>
      <SelectContent className="text-right">
        {options.map((option) => (
          <SelectItem
            key={option}
            value={option}
            className="text-sm font-medium !text-gray-700  "
          >
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
);
