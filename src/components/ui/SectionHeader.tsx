import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  subtitle,
  center = false,
  light = false,
  className,
}: SectionHeaderProps) {
  const titleParts = highlight
    ? title.split(highlight)
    : [title];

  return (
    <div
      className={cn(
        "space-y-4",
        center && "text-center",
        className
      )}
    >
      {badge && (
        <div className={cn("inline-flex", center && "justify-center w-full")}>
          <span className={cn(
            "badge",
            light
              ? "bg-white/20 text-white border border-white/30"
              : "bg-brand-50 text-brand-600 border border-brand-100"
          )}>
            {badge}
          </span>
        </div>
      )}
      <h2 className={cn(
        "section-title",
        light ? "text-white" : "text-dark"
      )}>
        {highlight ? (
          <>
            {titleParts[0]}
            <span className="text-gradient-brand">{highlight}</span>
            {titleParts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {badge && (
        <div className={cn("flex", center ? "justify-center" : "justify-start")}>
          <div className="divider-brand" />
        </div>
      )}
      {subtitle && (
        <p className={cn(
          "section-subtitle",
          center && "mx-auto",
          light ? "text-white/80" : "text-concrete-600"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
