import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

interface ContactSubmitButtonProps {
  status: 'idle' | 'sending' | 'sent' | 'error';
}

export const ContactSubmitButton = ({ status }: ContactSubmitButtonProps) => {
  const getButtonContent = () => {
    switch (status) {
      case 'sending':
        return <><Loader2 className="animate-spin" size={16}/> Sending...</>;
      case 'sent':
        return <><CheckCircle size={16}/> Sent Successfully!</>;
      case 'error':
        return <><AlertCircle size={16}/> Failed. Try Again.</>;
      default:
        return <><Send size={16}/> Send Message</>;
    }
  };

  const getButtonStyles = () => {
    if (status === 'sent') return 'bg-green-500/10 text-green-500 border border-green-500/20 cursor-default';
    if (status === 'error') return 'bg-red-500/10 text-red-500 border border-red-500/20';
    return 'bg-primary text-primary-foreground hover:brightness-110 shadow-lg shadow-primary/20';
  };

  return (
    <div className="relative">
      <motion.button 
        disabled={status === 'sending' || status === 'sent'}
        className={`w-full py-5 rounded-2xl font-bold uppercase text-xs flex items-center justify-center gap-3 transition-all ${getButtonStyles()}`}
        aria-busy={status === 'sending'}
        whileHover={status === 'idle' || status === 'error' ? { scale: 1.02 } : {}}
        whileTap={status === 'idle' || status === 'error' ? { scale: 0.98 } : {}}
      >
        {getButtonContent()}
      </motion.button>

      {/* Accessible Live Region */}
      <output className="sr-only" aria-live="polite">
        {status === 'sending' && "Sending message..."}
        {status === 'sent' && "Message sent successfully!"}
        {status === 'error' && "Error sending message. Please try again."}
      </output>
    </div>
  );
};
