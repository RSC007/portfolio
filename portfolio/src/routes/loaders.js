// Page chunk loaders. Kept separate so they can be both lazy-loaded by the
// router and prefetched in the background once the first page is visible.
export const pageLoaders = {
  home: () => import("../components/pages/Home"),
  about: () => import("../components/pages/About"),
  portfolio: () => import("../components/pages/Projects"),
  contact: () => import("../components/pages/Contact"),
};

export const prefetchPages = () =>
  Object.values(pageLoaders).forEach((load) => load().catch(() => {}));
