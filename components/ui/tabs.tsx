"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
}

export function Tabs({ tabs, activeTab, onTabChange, className }: TabsProps) {
  return (
    <div className={cn("border-b border-slate-200", className)}>
      <nav className="flex gap-0 overflow-x-auto scrollbar-hide -mb-px">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "relative px-4 md:px-6 py-3 md:py-4 text-sm md:text-base font-medium whitespace-nowrap transition-colors",
              activeTab === tab.id
                ? "text-[#3B82F6]"
                : "text-slate-500 hover:text-slate-900"
            )}
          >
            {tab.label}
            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3B82F6]" />
            )}
          </button>
        ))}
      </nav>
    </div>
  );
}

interface TabPanelProps {
  children: React.ReactNode;
  className?: string;
}

export function TabPanel({ children, className }: TabPanelProps) {
  return (
    <div className={cn("py-6 md:py-8", className)}>
      {children}
    </div>
  );
}
