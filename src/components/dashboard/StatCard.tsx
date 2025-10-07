import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend?: {
    value: string;
    positive: boolean;
  };
  variant?: "default" | "success" | "danger";
}

export function StatCard({ title, value, icon: Icon, trend, variant = "default" }: StatCardProps) {
  return (
    <Card className="p-6 gradient-card border-0 shadow-md hover:shadow-lg transition-smooth">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className={cn(
            "text-3xl font-bold",
            variant === "success" && "text-success",
            variant === "danger" && "text-destructive"
          )}>
            {value}
          </p>
          {trend && (
            <p className={cn(
              "text-sm font-medium",
              trend.positive ? "text-success" : "text-destructive"
            )}>
              {trend.positive ? "+" : ""}{trend.value}
            </p>
          )}
        </div>
        <div className={cn(
          "w-12 h-12 rounded-lg flex items-center justify-center",
          variant === "success" && "gradient-success",
          variant === "danger" && "gradient-danger",
          variant === "default" && "gradient-primary"
        )}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </Card>
  );
}
