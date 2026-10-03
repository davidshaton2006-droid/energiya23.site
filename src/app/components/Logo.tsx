const logoImg = "/img/logo.webp";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src={logoImg}
        width={56}
        height={84}
        decoding="async"
        alt="Завод ЭНЕРГИЯ логотип"
        style={{ width: "56px", height: "56px", objectFit: "contain", flexShrink: 0 }}
      />
      <div className="flex flex-col leading-none" style={{ minWidth: 0 }}>
        <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: '14px', color: '#6DBE45', letterSpacing: '0.05em', lineHeight: 1.2, whiteSpace: 'nowrap' }}>
          Завод
        </span>
        <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: '14px', color: '#E87722', letterSpacing: '0.05em', lineHeight: 1.2, whiteSpace: 'nowrap' }}>
          ЭНЕРГИЯ
        </span>
      </div>
    </div>
  );
}