function AboutStats() {
  const stats = [
    { label: 'Precision', value: '99%' },
    { label: 'Passion', value: '100%' },
    { label: 'Creative', value: 'Driven' },
    { label: 'Stack', value: 'Modern' }
  ];

  return (
    <div className="grid grid-cols-2 gap-px border bg-foreground/5 border-foreground/5">
      {stats.map((stat) => (
        <div key={stat.label} className="p-6 space-y-1 bg-background">
          <p className="text-[8px] font-mono uppercase tracking-[0.4em] text-foreground/20">{stat.label}</p>
          <p className="text-xl font-medium transition-colors font-heading text-foreground/60 group-hover:text-primary">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}

export default AboutStats;
