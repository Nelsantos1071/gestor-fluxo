import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  QrCode, 
  CheckCircle2, 
  XCircle, 
  RefreshCw,
  Smartphone
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function WhatsappIntegration() {
  const { toast } = useToast();
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);

  const handleGenerateQRCode = async () => {
    setIsLoading(true);
    
    // Simular chamada à API Evolution para gerar QR Code
    setTimeout(() => {
      // Em produção, isso virá da API Evolution
      setQrCodeUrl("https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=whatsapp-connection-simulation");
      setIsLoading(false);
      
      toast({
        title: "QR Code gerado",
        description: "Escaneie o QR Code com seu WhatsApp para conectar.",
      });
    }, 1500);
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setQrCodeUrl(null);
    toast({
      title: "WhatsApp desconectado",
      description: "A conexão com o WhatsApp foi removida.",
      variant: "destructive",
    });
  };

  const simulateConnection = () => {
    setIsConnected(true);
    setQrCodeUrl(null);
    toast({
      title: "WhatsApp conectado!",
      description: "Agora você pode enviar notificações aos seus clientes.",
    });
  };

  return (
    <div className="space-y-6">
      {/* Status Card */}
      <Card className="p-6 gradient-card border-0 shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className={`w-16 h-16 rounded-lg flex items-center justify-center ${
              isConnected ? 'gradient-success' : 'bg-muted'
            }`}>
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">WhatsApp Business</h3>
              <div className="flex items-center gap-2">
                {isConnected ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-success" />
                    <Badge variant="default" className="bg-success">
                      Conectado
                    </Badge>
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-muted-foreground" />
                    <Badge variant="secondary">
                      Desconectado
                    </Badge>
                  </>
                )}
              </div>
            </div>
          </div>
          
          {isConnected && (
            <Button 
              variant="destructive"
              onClick={handleDisconnect}
            >
              Desconectar
            </Button>
          )}
        </div>
      </Card>

      {/* QR Code Section */}
      {!isConnected && (
        <Card className="p-6 gradient-card border-0 shadow-md">
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 rounded-lg gradient-primary flex items-center justify-center mx-auto">
                <QrCode className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Conectar WhatsApp</h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                Escaneie o QR Code com seu WhatsApp para conectar e começar a enviar notificações automáticas
              </p>
            </div>

            {qrCodeUrl ? (
              <div className="space-y-4">
                <div className="flex justify-center p-6 bg-background rounded-lg">
                  <img 
                    src={qrCodeUrl} 
                    alt="QR Code WhatsApp"
                    className="w-64 h-64 border-4 border-primary rounded-lg"
                  />
                </div>
                
                <div className="text-center space-y-4">
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Smartphone className="w-4 h-4" />
                    <span>Abra o WhatsApp no seu celular e escaneie este código</span>
                  </div>
                  
                  <div className="flex gap-3 justify-center">
                    <Button 
                      variant="outline"
                      onClick={handleGenerateQRCode}
                      disabled={isLoading}
                    >
                      <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
                      Gerar Novo QR Code
                    </Button>
                    
                    {/* Botão para simular conexão em desenvolvimento */}
                    <Button 
                      onClick={simulateConnection}
                      className="gradient-success border-0"
                    >
                      Simular Conexão (Dev)
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex justify-center">
                <Button 
                  onClick={handleGenerateQRCode}
                  disabled={isLoading}
                  className="gradient-primary border-0 shadow-glow hover:opacity-90"
                  size="lg"
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      Gerando QR Code...
                    </>
                  ) : (
                    <>
                      <QrCode className="w-4 h-4 mr-2" />
                      Gerar QR Code
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>
        </Card>
      )}

      {/* Features Card */}
      <Card className="p-6 gradient-card border-0 shadow-md">
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Recursos de Notificação</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Lembrete de vencimento automático",
              "Confirmação de pagamento",
              "Notificação de inadimplência",
              "Mensagens personalizadas",
            ].map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-3 rounded-lg bg-background/50"
              >
                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Instructions */}
      <Card className="p-6 gradient-card border-0 shadow-md">
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Como usar</h3>
          <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
            <li>Configure a API Evolution na aba "API Evolution"</li>
            <li>Clique em "Gerar QR Code" acima</li>
            <li>Abra o WhatsApp no seu celular</li>
            <li>Vá em Menu → Aparelhos conectados → Conectar um aparelho</li>
            <li>Aponte a câmera para o QR Code na tela</li>
            <li>Aguarde a confirmação de conexão</li>
            <li>Pronto! Agora você pode enviar notificações automáticas</li>
          </ol>
        </div>
      </Card>
    </div>
  );
}
