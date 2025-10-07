import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Phone, Mail, Tv } from "lucide-react";
import { useState } from "react";

export default function Clientes() {
  const [searchTerm, setSearchTerm] = useState("");

  // Dados mockados
  const clientes = [
    { 
      id: 1, 
      nome: "João Silva", 
      email: "joao@email.com", 
      telefone: "(11) 98765-4321",
      plano: "Premium",
      status: "ativo",
      valorMensal: "R$ 89,90"
    },
    { 
      id: 2, 
      nome: "Maria Santos", 
      email: "maria@email.com", 
      telefone: "(11) 98765-4322",
      plano: "Básico",
      status: "ativo",
      valorMensal: "R$ 59,90"
    },
    { 
      id: 3, 
      nome: "Pedro Costa", 
      email: "pedro@email.com", 
      telefone: "(11) 98765-4323",
      plano: "Premium",
      status: "inadimplente",
      valorMensal: "R$ 89,90"
    },
  ];

  const filteredClientes = clientes.filter(cliente =>
    cliente.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cliente.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AppLayout>
      <div className="p-8 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Clientes</h1>
            <p className="text-muted-foreground">Gerencie seus clientes IPTV</p>
          </div>
          <Button className="gradient-primary border-0 shadow-glow hover:opacity-90">
            <Plus className="w-4 h-4 mr-2" />
            Novo Cliente
          </Button>
        </div>

        {/* Search */}
        <Card className="p-4 gradient-card border-0 shadow-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input 
              placeholder="Buscar por nome ou email..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </Card>

        {/* Clientes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredClientes.map((cliente) => (
            <Card 
              key={cliente.id}
              className="p-6 gradient-card border-0 shadow-md hover:shadow-lg transition-smooth cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                      <Tv className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{cliente.nome}</h3>
                      <Badge 
                        variant={cliente.status === "ativo" ? "default" : "destructive"}
                        className="mt-1"
                      >
                        {cliente.status}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{cliente.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{cliente.telefone}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="text-xs text-muted-foreground">Plano</p>
                    <p className="font-semibold">{cliente.plano}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Valor Mensal</p>
                    <p className="font-bold text-lg text-success">{cliente.valorMensal}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
