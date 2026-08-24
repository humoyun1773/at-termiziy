import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "border border-sky-100 dark:border-slate-800 rounded-3xl bg-white/95 dark:bg-slate-900 overflow-hidden shadow-md transition-all duration-300 hover:border-sky-300 dark:hover:border-sky-700 hover:shadow-xl data-[state=open]:border-sky-500/80 data-[state=open]:shadow-2xl",
      className
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between p-6 sm:p-7 text-left text-base sm:text-lg md:text-xl font-extrabold text-slate-900 dark:text-white transition-all duration-200 hover:bg-sky-50/50 dark:hover:bg-slate-800/60 cursor-pointer group [&[data-state=open]_.chevron-circle]:bg-sky-600 [&[data-state=open]_.chevron-circle]:text-white [&[data-state=open]_.chevron-circle]:rotate-180",
        className
      )}
      {...props}
    >
      <span className="group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors pr-4 leading-snug">
        {children}
      </span>
      <div className="chevron-circle w-9 h-9 rounded-2xl bg-sky-50 dark:bg-slate-800 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0 transition-all duration-300 shadow-xs group-hover:scale-110">
        <ChevronDown className="h-5 w-5 shrink-0 transition-transform duration-300" />
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("px-6 pb-6 sm:px-7 sm:pb-7 pt-2 border-t border-slate-100 dark:border-slate-800/80 mt-1", className)}>
      <div className="pt-2 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
        {children}
      </div>
    </div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
