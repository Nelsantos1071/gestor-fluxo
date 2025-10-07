import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Calendar, DollarSign, Send } from "lucide-react";

export default function ContasReceber() {
  // Dados mockados
  const contas = [
    {
      id: 1,
      cliente: "João Silva",
      plano: "Premium",
      valor: "R$ 89,90",
      vencimento: "2025-10-10",
      status: "pendente",
      recorrente: true
    },
    {
      id: 2,
      cliente: "Maria Santos",
      plano: "Básico",
      valor: "R$ 59,90",
      vencimento: "2025-10-12",
      status: "pendente",
      recorrente: true
    },
    {
      id: 3,
      cliente: "Pedro Costa",
      plano: "Premium",
      valor: "R$ 89,90",
      vencimento: "2025-10-05",
      status: "vencido",
      recorrente: true
    },
    {
      id: 4,
      cliente: "Ana Oliveira",
      plano: "Premium",
      valor: "R$ 89,90",
      vencimento: "2025-10-08",
      status: "pago",
      recorrente: true
    },
  ];

  return (
    <AppLayout>
      <div className="p-8 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Contas a Receber</h1>
            <p className="text-muted-foreground">Gerencie cobranças e pagamentos de clientes</p>
          </div>
          <Button className="gradient-primary border-0 shadow-glow hover:opacity-90">
            <Plus className="w-4 h-4 mr-2" />
            Nova Cobrança
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 gradient-card border-0 shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Total a Receber</p>
                <p className="text-2xl font-bold text-success">R$ 12.450,00</p>
              </div>
              <div className="w-12 h-12 rounded-lg gradient-success flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
            </div>
          </Card>
          
          <Card className="p-6 gradient-card border-0 shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Vencendo Hoje</p>
                <p className="text-2xl font-bold text-warning">R$ 239,70</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-warning flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
            </div>
          </Card>

          <Card className="p-6 gradient-card border-0 shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Contas Vencidas</p>
                <p className="text-2xl font-bold text-destructive">R$ 89,90</p>
              </div>
              <div className="w-12 h-12 rounded-lg gradient-danger flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
            </div>
          </Card>
        </div>

        {/* Contas List */}
        <Card className="p-6 gradient-card border-0 shadow-md">
          <div className="space-y-4">
            {contas.map((conta) => (
              <div
                key={conta.id}
                className="flex items-center justify-between p-4 rounded-lg bg-background/50 hover:bg-background transition-smooth"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-12 h-12 rounded-lg gradient-success flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold">{conta.cliente}</h3>
                      <Badge variant="outline" className="text-xs">
                        {conta.plano}
                      </Badge>
                      {conta.recorrente && (
                        <Badge variant="outline" className="text-xs">
                          Recorrente
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>Vencimento: {conta.vencimento}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="font-bold text-lg text-success">{conta.valor}</p>
                  </div>
                  <Badge
                    variant={
                      conta.status === "pago" 
                        ? "default" 
                        : conta.status === "vencido" 
                        ? "destructive" 
                        : "secondary"
                    }
                    className="capitalize min-w-[100px] justify-center"
                  >
                    {conta.status}
                  </Badge>
                  {conta.status !== "pago" && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Notificar
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </AppLayout>
  );
}
