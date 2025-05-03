import Button from "@/components/ui/CustomButton";
import React from "react";
import { ShieldPlus } from "lucide-react";
export default function AddRealty() {
  return (
    <div>
      <Button text="أضف عقارك " variant="primary" className='w-[150px]'  >
        <ShieldPlus className="w-4 h-4" />
      </Button>
    </div>
  )
} 
