"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Plus, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/create", label: "Create", icon: Plus },
  { href: "/capsules", label: "My Capsules", icon: Briefcase },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 h-16 border-t border-border bg-card/80 backdrop-blur-xl">
      <div className="mx-auto flex h-full max-w-[480px] items-center justify-around px-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-1 px-4 py-2 transition-all duration-300",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <div
                className={cn(
                  "relative rounded-xl p-2 transition-all duration-300",
                  isActive && "bg-primary/10 shadow-[0_0_20px_rgba(0,82,255,0.3)]"
                )}
              >
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
