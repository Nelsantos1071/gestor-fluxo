import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  TrendingDown, 
  TrendingUp,
  Settings,
  Tv 
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: Users, label: "Clientes", path: "/clientes" },
  { icon: TrendingDown, label: "Contas a Pagar", path: "/contas-pagar" },
  { icon: TrendingUp, label: "Contas a Receber", path: "/contas-receber" },
  { icon: Settings, label: "Configurações", path: "/configuracoes" },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <Tv className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-sidebar-foreground">IPTV Manager</h1>
            <p className="text-xs text-muted-foreground">Gestão Financeira</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-smooth",
                isActive 
                  ? "bg-sidebar-accent text-sidebar-accent-foreground" 
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <div className="px-4 py-3 rounded-lg bg-sidebar-accent/30">
          <p className="text-xs text-muted-foreground">Versão 1.0.0</p>
        </div>
      </div>
    </aside>
  );
}
