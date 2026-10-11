const BLOBS = [
  { className: "left-[8%] top-[12%] h-56 w-56 bg-forest-300/50", delay: "0s" },
  { className: "right-[10%] top-[8%] h-72 w-72 bg-sage-300/40", delay: "1.2s" },
  { className: "left-[20%] bottom-[8%] h-64 w-64 bg-gold-300/35", delay: "2.1s" },
  { className: "right-[18%] bottom-[14%] h-48 w-48 bg-forest-200/50", delay: "0.6s" },
];

const AmbientGlow = () => (
  <div className="absolute inset-0 overflow-hidden">
    {BLOBS.map((blob, i) => (
      <div
        key={i}
        style={{ animationDelay: blob.delay }}
        className={`absolute animate-float rounded-full blur-3xl ${blob.className}`}
      />
    ))}
  </div>
);

export default AmbientGlow;
