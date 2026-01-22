import { memo } from "react";

interface InputProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
  id?: string;
  name?: string;
  required?: boolean;
  autoComplete?: string;
}

export const ContactInput = memo(({ 
  label, 
  value, 
  onChange, 
  type = "text", 
  placeholder, 
  textarea,
  id,
  name,
  required = true,
  autoComplete
}: InputProps) => {
  const baseClass = "w-full bg-secondary/50 dark:bg-foreground/5 border border-border rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-muted-foreground/40";
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="space-y-2">
      <label htmlFor={inputId} className="text-xs font-mono uppercase tracking-widest text-muted-foreground/80 ml-1">
        {label}
      </label>
      {textarea ? (
        <textarea 
          id={inputId}
          name={name || inputId}
          rows={5} 
          value={value} 
          onChange={(e) => onChange(e.target.value)} 
          className={`${baseClass} resize-none`} 
          placeholder={placeholder} 
          required={required}
          autoComplete={autoComplete}
        />
      ) : (
        <input 
          id={inputId}
          name={name || inputId}
          type={type} 
          value={value} 
          onChange={(e) => onChange(e.target.value)} 
          className={baseClass} 
          placeholder={placeholder} 
          required={required}
          autoComplete={autoComplete}
        />
      )}
    </div>
  );
});

ContactInput.displayName = 'ContactInput';