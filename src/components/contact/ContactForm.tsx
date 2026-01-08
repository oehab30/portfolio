import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";
import { ContactInput } from "./ContactInput";

export const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    await new Promise(r => setTimeout(r, 2000));
    setStatus('sent');
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} className="relative">
      <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full pointer-events-none opacity-50" />
      <form onSubmit={handleSubmit} className="relative bg-background/60 dark:bg-foreground/3 backdrop-blur-xl border border-border p-8 md:p-12 rounded-[2.5rem] space-y-8 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ContactInput label="Name" value={form.name} onChange={(v) => setForm({...form, name: v})} placeholder="Your Name" />
          <ContactInput label="Email" type="email" value={form.email} onChange={(v) => setForm({...form, email: v})} placeholder="Email@example.com" />
        </div>
        <ContactInput label="Message" textarea value={form.message} onChange={(v) => setForm({...form, message: v})} placeholder="Your project details..." />
        <motion.button 
          disabled={status !== 'idle'}
          className={`w-full py-5 rounded-2xl font-bold uppercase text-xs flex items-center justify-center gap-3 transition-all ${status === 'sent' ? 'bg-green-500' : 'bg-primary text-primary-foreground hover:brightness-110 shadow-lg shadow-primary/20'}`}
        >
          {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent Successfully!' : <><Send size={16}/> Send Message</>}
        </motion.button>
      </form>
    </motion.div>
  );
};