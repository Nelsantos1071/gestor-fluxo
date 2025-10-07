import { AppLayout } from "@/components/layout/AppLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WhatsappIntegration } from "@/components/configuracoes/WhatsappIntegration";
import { Settings, Save } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Configuracoes() {
  const { toast } = useToast();
  const [apiUrl, setApiUrl] = useState("https://sua-api-evolution.com");
  const [apiKey, setApiKey] = useState("");

  const handleSaveConfig = () => {
    toast({
      title: "Configurações salvas",
      description: "As configurações da API Evolution foram salvas com sucesso.",
    });
  };

  return (
    <AppLayout>
      <div className="p-8 space-y-8">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
            <Settings className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Configurações</h1>
            <p className="text-muted-foreground">Gerencie integrações e configurações do sistema</p>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="whatsapp" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="whatsapp">WhatsApp</TabsTrigger>
            <TabsTrigger value="api">API Evolution</TabsTrigger>
          </TabsList>

          {/* WhatsApp Integration Tab */}
          <TabsContent value="whatsapp" className="space-y-6">
            <WhatsappIntegration />
          </TabsContent>

          {/* API Configuration Tab */}
          <TabsContent value="api" className="space-y-6">
            <Card className="p-6 gradient-card border-0 shadow-md">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Configuração da API Evolution</h3>
                  <p className="text-sm text-muted-foreground">
                    Configure a URL e chave de acesso da sua API Evolution
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="apiUrl">URL da API</Label>
                    <Input
                      id="apiUrl"
                      placeholder="https://sua-api-evolution.com"
                      value={apiUrl}
                      onChange={(e) => setApiUrl(e.target.value)}
                    />
                    <p className="text-xs text-muted-foreground">
                      URL base da sua instância da API Evolution
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="apiKey">API Key</Label>
                    <Input
                      id="apiKey"
                      type="password"
                      placeholder="Sua chave de API"
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                    />
                    <p className="text-xs text-muted-foreground">
                      Chave de autenticação da API Evolution
                    </p>
                  </div>

                  <Button 
                    onClick={handleSaveConfig}
                    className="gradient-primary border-0 shadow-glow hover:opacity-90"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Salvar Configurações
                  </Button>
                </div>
              </div>
            </Card>

            {/* Documentação */}
            <Card className="p-6 gradient-card border-0 shadow-md">
              <div className="space-y-4">
                <h3 className="text-lg font-bold">Como configurar a API Evolution</h3>
                <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                  <li>Acesse sua instância da API Evolution</li>
                  <li>Copie a URL base da API (ex: https://api.example.com)</li>
                  <li>Gere uma API Key nas configurações</li>
                  <li>Cole as informações nos campos acima</li>
                  <li>Clique em "Salvar Configurações"</li>
                  <li>Vá para a aba "WhatsApp" e escaneie o QR Code</li>
                </ol>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
}
