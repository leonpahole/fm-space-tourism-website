export class DataApi<T extends { slug: string }> {
  constructor(private data: T[], private pathPrefix: string) {}

  public getAll(): T[] {
    return this.data;
  }

  public getFirst(): T {
    return this.data[0];
  }

  public getUrl(d: T): string {
    return `${this.pathPrefix}/${d.slug}`;
  }

  public getBySlug(slug: string): T | null {
    return this.data.find((d) => d.slug === slug) ?? null;
  }
}
