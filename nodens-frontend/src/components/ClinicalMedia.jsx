export default function ClinicalMedia({
  src,
  alt,
  width = 700,
  height = 500,
  className = '',
  aspectClass = 'aspect-[4/3]',
  children,
}) {
  return (
    <div className={className}>
      <div className={`relative overflow-hidden border border-clinical-line bg-navy-100 ${aspectClass}`}>
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      {children}
    </div>
  );
}
