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
  <div className="text-right w-full">
    <label className="text-sm font-medium mb-1 block text-gray-700">{label}</label>
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
);
