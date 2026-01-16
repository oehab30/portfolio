interface InputProps {
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
  textarea?: boolean;
}

export const ContactInput = ({ label, type = "text", placeholder, value, onChange, textarea }: InputProps) => {
  const baseClass = "w-full bg-secondary/50 dark:bg-foreground/5 border border-border rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-muted-foreground/40";
  return (
    <div className="space-y-2">
      <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground/80 ml-1">{label}</label>
      {textarea ? (
        <textarea rows={5} value={value} onChange={(e) => onChange(e.target.value)} className={`${baseClass} resize-none`} placeholder={placeholder} />
      ) : (
        <input type={type} value={value} onChange={(e) => onChange(e.target.value)} className={baseClass} placeholder={placeholder} required />
      )}
    </div>
  );
};