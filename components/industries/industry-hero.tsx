interface IndustryHeroProps {
  title: string;
  subtitle: string;
  description: string;
}

export function IndustryHero({
  title,
  subtitle,
  description,
}: IndustryHeroProps) {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#0A1628] via-[#1A2D47] to-[#0A1628] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-sm font-semibold text-[#3B82F6] uppercase tracking-wide mb-4">
            {subtitle}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
