export const timeAgo = (createdAt: string): string => {
  const createdDate: Date = new Date(createdAt);
  const now: Date = new Date();

  const diffMs: number = now.getTime() - createdDate.getTime();
  const diffHours: number = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays: number = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffMonths: number = Math.floor(diffDays / 30);
  const diffYears: number = Math.floor(diffDays / 365);

  if (diffHours < 24) {
    return `${diffHours} hora${diffHours !== 1 ? "s" : ""} atrás`;
  } else if (diffDays < 31) {
    return `${diffDays} dia${diffDays !== 1 ? "s" : ""} atrás`;
  } else if (diffMonths < 12) {
    return `${diffMonths} mês${diffMonths !== 1 ? "es" : ""} atrás`;
  } else {
    return `${diffYears} ano${diffYears !== 1 ? "s" : ""} atrás`;
  }
};
