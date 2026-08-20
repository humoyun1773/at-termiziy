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
      "border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 overflow-hidden shadow-2xs transition-all duration-300 hover:border-sky-300 dark:hover:border-sky-700 hover:shadow-md data-[state=open]:border-sky-500/70 dark:data-[state=open]:border-sky-500/60 data-[state=open]:shadow-lg data-[state=open]:shadow-sky-500/10",
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
        "flex flex-1 items-center justify-between p-4 sm:p-5 text-left text-xs sm:text-sm font-bold text-slate-900 dark:text-white transition-all duration-200 hover:bg-sky-50/50 dark:hover:bg-slate-800/60 cursor-pointer group [&[data-state=open]_.chevron-circle]:bg-sky-600 [&[data-state=open]_.chevron-circle]:text-white [&[data-state=open]_.chevron-circle]:rotate-180",
        className
      )}
      {...props}
    >
      <span className="group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors pr-2 leading-snug">
        {children}
      </span>
      <div className="chevron-circle w-7 h-7 rounded-xl bg-slate-100 dark:bg-slate-800 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0 transition-all duration-300 shadow-2xs group-hover:scale-110">
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-300" />
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
    className="overflow-hidden text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("px-4 pb-4 sm:px-5 sm:pb-5 pt-1 border-t border-slate-100 dark:border-slate-800/80 mt-1", className)}>
      <div className="pt-2 text-slate-600 dark:text-slate-300 leading-relaxed">
        {children}
      </div>
    </div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
