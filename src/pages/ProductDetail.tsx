import { useMemo } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Ruler, Layers, FileCheck2, Tag, Boxes, ChevronRight } from "lucide-react";
import productsData from "@/data/products.json";
import productPlaceholder from "@/assets/products/product-placeholder.jpg";

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

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = useMemo(() => ALL_PRODUCTS.find((p) => p.id === id), [id]);

  if (!product) return <Navigate to="/products" replace />;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Breadcrumbs: Products > Product title */}
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex items-center gap-1.5 text-sm text-muted-foreground flex-wrap">
            <li>
              <Link to="/products" className="font-medium text-primary hover:underline">
                Products
              </Link>
            </li>
            <li aria-hidden="true" className="flex items-center">
              <ChevronRight size={14} />
            </li>
            <li className="text-foreground font-medium line-clamp-1" aria-current="page">
              {product.title}
            </li>
          </ol>
        </nav>

        <Link
          to="/products"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary mb-6"
        >
          <ArrowLeft size={14} /> Back to Products
        </Link>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 lg:items-start">
          {/* Image — fixed 500x500 */}
          <div className="relative flex-shrink-0 mx-auto lg:mx-0">
            <div
              className="bg-white rounded-2xl overflow-hidden border border-border elevated-shadow"
              style={{ width: 500, height: 500, maxWidth: "100%" }}
            >
              <img
                src={productPlaceholder}
                alt={product.title}
                width={500}
                height={500}
                className="w-full h-full object-contain p-8 transition-transform duration-[1000ms] ease-out hover:scale-110"
              />
            </div>
            <span className="absolute top-4 left-4 text-xs font-bold tracking-wider uppercase bg-primary text-primary-foreground px-3 py-1.5 rounded">
              {product.brand}
            </span>
          </div>

          {/* Details — title, specs, then product info, then quote */}
          <div className="flex-1 min-w-0">
            <p className="eyebrow mb-3">{product.category}</p>
            <h1 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
              {product.title}
            </h1>

            <div className="space-y-4">
              <SpecRow icon={<Tag size={16} />} label="Brand" value={product.brand} />
              <SpecRow icon={<Boxes size={16} />} label="Category" value={product.category} />
              <SpecRow icon={<Ruler size={16} />} label="Size Range" value={product.sizeRange} />
              <SpecRow icon={<Layers size={16} />} label="Material" value={product.materials} />
              <SpecRow icon={<FileCheck2 size={16} />} label="Standards / Specs" value={product.standards} />
            </div>

            {/* Product Information — beside image, under attributes */}
            <div className="mt-6 bg-muted/50 border border-border rounded-xl p-5 md:p-6">
              <h2 className="font-display font-bold text-lg text-foreground mb-2">
                Product Information
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                {product.info}
              </p>
            </div>

            {/* Request a Quote — after product info */}
            <a
              href="https://wa.me/966551040126"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const SpecRow = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => {
  if (!value) return null;
  return (
    <div className="flex gap-3 pb-3 border-b border-border last:border-0">
      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </div>
        <div className="text-sm text-foreground mt-0.5">{value}</div>
      </div>
    </div>
  );
};

export default ProductDetail;
