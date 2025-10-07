import { AppLayout } from "@/components/layout/AppLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { Card } from "@/components/ui/card";
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  Users,
  Calendar,
  AlertCircle
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Dashboard() {
  // Dados mockados para demonstração
  const stats = {
    totalClientes: 245,
    contasReceber: "R$ 12.450,00",
    contasPagar: "R$ 3.200,00",
    saldo: "R$ 9.250,00"
  };

  const proximasContas = [
    { id: 1, cliente: "João Silva", valor: "R$ 89,90", vencimento: "2025-10-10", status: "pendente" },
    { id: 2, cliente: "Maria Santos", valor: "R$ 89,90", vencimento: "2025-10-12", status: "pendente" },
    { id: 3, cliente: "Pedro Costa", valor: "R$ 89,90", vencimento: "2025-10-15", status: "vencido" },
  ];

  return (
    <AppLayout>
      <div className="p-8 space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Visão geral do seu negócio IPTV</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total de Clientes"
            value={stats.totalClientes.toString()}
            icon={Users}
            trend={{ value: "+12% este mês", positive: true }}
          />
          <StatCard
            title="Contas a Receber"
            value={stats.contasReceber}
            icon={TrendingUp}
            variant="success"
          />
          <StatCard
            title="Contas a Pagar"
            value={stats.contasPagar}
            icon={TrendingDown}
            variant="danger"
          />
          <StatCard
            title="Saldo Atual"
            value={stats.saldo}
            icon={DollarSign}
          />
        </div>

        {/* Próximos Vencimentos */}
        <Card className="p-6 gradient-card border-0 shadow-md">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Próximos Vencimentos</h2>
                <p className="text-sm text-muted-foreground">Contas a receber nos próximos dias</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {proximasContas.map((conta) => (
              <div 
                key={conta.id}
                className="flex items-center justify-between p-4 rounded-lg bg-background/50 hover:bg-background transition-smooth"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">{conta.cliente}</p>
                    <p className="text-sm text-muted-foreground">Vencimento: {conta.vencimento}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <p className="font-bold text-lg">{conta.valor}</p>
                  <Badge 
                    variant={conta.status === "vencido" ? "destructive" : "secondary"}
                    className="capitalize"
                  >
                    {conta.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Resumo Financeiro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6 gradient-card border-0 shadow-md">
            <h3 className="text-lg font-bold mb-4">Receitas por Mês</h3>
            <div className="h-48 flex items-center justify-center text-muted-foreground">
              Gráfico de receitas será implementado
            </div>
          </Card>
          <Card className="p-6 gradient-card border-0 shadow-md">
            <h3 className="text-lg font-bold mb-4">Despesas por Categoria</h3>
            <div className="h-48 flex items-center justify-center text-muted-foreground">
              Gráfico de despesas será implementado
            </div>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
