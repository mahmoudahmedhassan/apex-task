import Button from "@/components/ui/button";
import { UserIcon } from "lucide-react";
export default function AuthButtons() {
  return (
    <div>
      <Button text=" دخول" variant="outline" size="md"  >
        <UserIcon className="w-4 h-4" />
      </Button>
 
    </div>
  )
}
