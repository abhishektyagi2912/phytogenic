"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useCollections } from "@/lib/queries";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/About", label: "About" },
];

const panelVariants = {
  hidden: { opacity: 0, y: -12, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.28, ease: "easeOut" as const, staggerChildren: 0.04, delayChildren: 0.04 },
  },
  exit: { opacity: 0, y: -8, scale: 0.98, transition: { duration: 0.15 } },
};

const tileVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

function PillLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
        active ? "bg-forest-50 text-forest-800" : "text-sage-600 hover:bg-forest-50/70 hover:text-forest-800"
      }`}
    >
      {label}
    </Link>
  );
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const [mobileCollectionsOpen, setMobileCollectionsOpen] = useState(false);
  const pathname = usePathname();
  const { data: collections } = useCollections();
  const featured = collections?.slice(0, 6) ?? [];

  return (
    <header className="sticky top-0 z-50 bg-transparent py-4 sm:py-5">
      <div className="container-custom relative flex items-center justify-center">
        <div className="flex w-full max-w-3xl items-center justify-between gap-2 rounded-full border border-sage-200/80 bg-white/85 py-2 pl-3 pr-2 shadow-xl shadow-forest-900/5 backdrop-blur-xl sm:gap-4">
          <Link href="/" className="flex flex-shrink-0 items-center gap-2.5 pl-1">
            <Image
              src="/logo.jpg"
              alt="Phytogenic logo"
              width={38}
              height={38}
              className="rounded-full object-cover"
            />
            <span className="hidden font-display text-lg font-semibold text-forest-950 sm:inline">
              Phytogenic
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            <PillLink href="/" label="Home" active={pathname === "/"} />

            <div
              onMouseEnter={() => setCollectionsOpen(true)}
              onMouseLeave={() => setCollectionsOpen(false)}
            >
              <button
                className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  collectionsOpen ? "bg-forest-50 text-forest-800" : "text-sage-600 hover:bg-forest-50/70 hover:text-forest-800"
                }`}
              >
                Collections
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-300 ${collectionsOpen ? "rotate-180" : ""}`}
                />
              </button>
            </div>

            <PillLink href="/All" label="All Products" active={pathname === "/All"} />
            <PillLink href="/About" label="About" active={pathname === "/About"} />
            <PillLink href="/Contact" label="Contact Us" active={pathname === "/Contact"} />
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/Contact"
              className="inline-flex rounded-full px-3 py-2 text-sm font-medium text-sage-600 transition-colors hover:bg-forest-50/70 hover:text-forest-800 md:hidden"
            >
              Contact
            </Link>
            <button
              aria-label="Toggle menu"
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-forest-800 transition-colors hover:bg-forest-50 md:hidden"
              onClick={() => setIsOpen((v) => !v)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {collectionsOpen && (
            <motion.div
              variants={panelVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              onMouseEnter={() => setCollectionsOpen(true)}
              onMouseLeave={() => setCollectionsOpen(false)}
              className="absolute left-1/2 top-full mt-3 w-[640px] max-w-[90vw] -translate-x-1/2 overflow-hidden rounded-3xl border border-sage-200 bg-white/95 p-5 shadow-2xl shadow-forest-900/10 backdrop-blur-xl"
            >
              <div className="pointer-events-none absolute -right-10 -top-16 h-40 w-40 rounded-full bg-gold-300/30 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-forest-300/30 blur-3xl" />

              {featured.length ? (
                <div className="relative flex max-h-[360px] flex-wrap justify-center gap-3 overflow-y-auto">
                  {featured.map((collection) => (
                    <motion.div key={collection._id} variants={tileVariants} className="w-[184px]">
                      <Link
                        href={`/Product/${collection._id}`}
                        onClick={() => setCollectionsOpen(false)}
                        className="group block overflow-hidden rounded-2xl border border-sage-100 bg-sage-50 transition-shadow hover:shadow-lg"
                      >
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={collection.image}
                            alt={collection.title}
                            fill
                            sizes="200px"
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />
                        </div>
                        <p className="truncate px-3 py-2 text-xs font-semibold text-forest-900">
                          {collection.title}
                        </p>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <p className="relative px-2 py-6 text-center text-sm text-sage-400">Loading collections…</p>
              )}

              <motion.div variants={tileVariants} className="relative mt-4 flex items-center justify-between border-t border-sage-100 pt-4">
                <p className="text-xs text-sage-500">Herbal extracts, actives &amp; speciality chemicals</p>
                <Link
                  href="/Product"
                  onClick={() => setCollectionsOpen(false)}
                  className="text-xs font-semibold text-forest-700 hover:text-forest-900"
                >
                  View all collections →
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden md:hidden"
          >
            <div className="container-custom mt-3">
              <div className="flex flex-col gap-1 rounded-3xl border border-sage-200 bg-white/95 p-4 shadow-xl backdrop-blur-xl">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-xl px-3 py-2.5 text-sm font-medium text-sage-700 hover:bg-forest-50 hover:text-forest-800"
                  >
                    {link.label}
                  </Link>
                ))}

                <button
                  onClick={() => setMobileCollectionsOpen((v) => !v)}
                  className="flex items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-medium text-sage-700 hover:bg-forest-50 hover:text-forest-800"
                >
                  Collections
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${mobileCollectionsOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {mobileCollectionsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="flex max-h-72 flex-wrap justify-center gap-2 overflow-y-auto px-1 py-2">
                        {featured.map((collection, i) => (
                          <motion.div
                            key={collection._id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25, delay: i * 0.04 }}
                            className="w-[30%] min-w-[90px]"
                          >
                            <Link
                              href={`/Product/${collection._id}`}
                              onClick={() => setIsOpen(false)}
                              className="block overflow-hidden rounded-xl border border-sage-100"
                            >
                              <div className="relative aspect-square">
                                <Image src={collection.image} alt={collection.title} fill sizes="100px" className="object-cover" />
                              </div>
                              <p className="truncate bg-sage-50 px-2 py-1 text-[10px] font-semibold text-forest-900">
                                {collection.title}
                              </p>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <Link
                  href="/All"
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-sm font-medium text-sage-700 hover:bg-forest-50 hover:text-forest-800"
                >
                  All Products
                </Link>
                <Link
                  href="/Contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-1 rounded-xl bg-forest-700 px-3 py-2.5 text-center text-sm font-semibold text-white hover:bg-forest-800"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
