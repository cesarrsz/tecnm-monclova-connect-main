import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Paperclip, Check } from "lucide-react";
import { toast } from "sonner";

interface MessageModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  contactName: string;
}

const MessageModal = ({ open, onOpenChange, contactName }: MessageModalProps) => {
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleSend = () => {
    if (!message.trim()) {
      toast.error("Por favor escribe un mensaje");
      return;
    }

    setSending(true);
    setTimeout(() => {
      toast.success("Mensaje enviado correctamente", {
        icon: <Check className="w-5 h-5 text-green-600" />,
      });
      setSending(false);
      setMessage("");
      onOpenChange(false);
    }, 1000);
  };

  const handleAttach = () => {
    toast.info("Seleccionar archivo");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Enviar mensaje a {contactName}</DialogTitle>
          <DialogDescription>
            Escribe tu mensaje y adjunta archivos si es necesario
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <Textarea
            placeholder="Escribe tu mensaje aquí..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="min-h-[150px] resize-none"
          />
          <div className="flex justify-between items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={handleAttach}
              className="gap-2"
            >
              <Paperclip className="w-4 h-4" />
              Adjuntar archivo
            </Button>
            <Button
              onClick={handleSend}
              disabled={sending}
              className="gap-2"
            >
              {sending ? "Enviando..." : "Enviar mensaje"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MessageModal;
