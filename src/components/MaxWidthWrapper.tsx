import { cn } from "@/lib/utils";
import { ReactNode} from "react";

interface MaxWidthWrapperProps {
    children: ReactNode;
    className?: string;
}

const MaxWidthWrapper = ({ children, className} : MaxWidthWrapperProps) => {
  return (
    <div className={cn("mx-auto w-full max-w-screen-2xl px-2 md:px-10", className)}>
        {children}
    </div>
  )
}

export default MaxWidthWrapper