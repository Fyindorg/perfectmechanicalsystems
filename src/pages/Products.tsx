import { useMemo, useState, useDeferredValue, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";
import productsData from "@/data/products.json";
import productPlaceholder from "@/assets/products/product-placeholder.jpg";
import { useLanguage } from "@/context/LanguageContext";

interface Product {
  id: string;
  title: string;
  category: string;
  sizeRange: string;
  materials: string;
  standards: string;
  info: string;
  brand: string;
  image: string;
}

const ALL_PRODUCTS = productsData as Product[];

const PAGE_SIZE = 50;

const ProductsPage = () => {
  const { t } = useLanguage();
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState<string>("ALL");
  const [page, setPage] = useState(1);
  const deferredSearch = useDeferredValue(search);

  const brands = useMemo(() => {
    const set = new Set(ALL_PRODUCTS.map((p) => p.brand));
    return Array.from(set).sort();
  }, []);

  const filtered = useMemo(() => {
    const q = deferredSearch.trim().toLowerCase();
    return ALL_PRODUCTS.filter((p) => {
      if (brand !== "ALL" && p.brand !== brand) return false;
      if (!q) return true;
      return (
        p.category.toLowerCase().includes(q) ||
        p.title.toLowerCase().includes(q)
      );
    });
  }, [deferredSearch, brand]);

  // Reset to first page when filters change
  useEffect(() => {
    setPage(1);
  }, [deferredSearch, brand]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageStart = (currentPage - 1) * PAGE_SIZE;
  const pageItems = filtered.slice(pageStart, pageStart + PAGE_SIZE);

  const goToPage = (p: number) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Banner */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-14 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container mx-auto px-4 relative">
          <p className="eyebrow text-white/80 mb-3">Our Catalog</p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-3">
            {t("products.title") || "Products & Brands"}
          </h1>
          <p className="text-white/85 max-w-2xl">
            Browse {ALL_PRODUCTS.length}+ certified industrial products from our
            partner brands. Search by category or product name.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 text-xs md:text-sm bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2">
            <ShieldCheck size={16} />
            All products supplied with manufacturer certifications.
          </div>
        </div>
      </section>

      {/* Sticky filter bar */}
      <div className="sticky top-[64px] md:top-[88px] z-40 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col sm:flex-row gap-2.5">
            <div className="relative flex-1">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by product or category…"
                aria-label="Search products"
                className="w-full h-11 pl-9 pr-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
              />
            </div>
            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              aria-label="Filter by brand"
              className="h-11 px-3 pr-8 rounded-lg border border-border bg-background text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary sm:min-w-[200px]"
            >
              <option value="ALL">All Brands ({ALL_PRODUCTS.length})</option>
              {brands.map((b) => {
                const count = ALL_PRODUCTS.filter((p) => p.brand === b).length;
                return (
                  <option key={b} value={b}>
                    {b} ({count})
                  </option>
                );
              })}
            </select>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filtered.length}</span> of {ALL_PRODUCTS.length} products
          </p>
        </div>
      </div>

      {/* Products grid */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            No products match your search.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link
      to={`/products/${product.id}`}
      className="group bg-card rounded-xl border border-border overflow-hidden soft-shadow hover:elevated-shadow transition-all duration-300 hover:-translate-y-1 flex flex-col"
    >
      <div className="aspect-[4/3] bg-white overflow-hidden border-b border-border">
        <img
          src={productPlaceholder}
          alt={product.title}
          loading="lazy"
          className="w-full h-full object-contain p-4 transition-transform duration-[1000ms] ease-out group-hover:scale-110"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col gap-2">
        <span className="inline-block w-fit text-[10px] font-bold tracking-wider uppercase bg-primary/10 text-primary px-2 py-0.5 rounded">
          {product.brand}
        </span>
        <h3 className="font-display font-semibold text-foreground text-sm leading-snug line-clamp-2 group-hover:text-primary transition-colors">
          {product.category}
        </h3>
        <p className="text-xs text-muted-foreground line-clamp-2">
          {product.title}
        </p>
        {product.sizeRange && (
          <p className="text-[11px] text-muted-foreground mt-auto pt-2 border-t border-border">
            <span className="font-semibold text-foreground">Size:</span> {product.sizeRange}
          </p>
        )}
      </div>
    </Link>
  );
};

export default ProductsPage;
