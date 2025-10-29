export interface GalleryImage {
  id: number
  title: string
  category: string
  size: "large" | "medium"
  query: string
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: "Sigiriya Rock",
    category: "Places",
    size: "large",
    query: "Sigiriya%20Rock%20ancient%20fortress%20Sri%20Lanka",
  },
  {
    id: 2,
    title: "Tea Plantations",
    category: "Places",
    size: "medium",
    query: "Sri%20Lanka%20tea%20plantations%20green%20hills",
  },
  {
    id: 3,
    title: "Mirissa Beach",
    category: "Places",
    size: "medium",
    query: "Mirissa%20Beach%20Sri%20Lanka%20sunset",
  },
  {
    id: 4,
    title: "Kandy Temple",
    category: "Places",
    size: "large",
    query: "Temple%20of%20the%20Tooth%20Kandy%20Sri%20Lanka",
  },
  {
    id: 5,
    title: "Kottu Roti",
    category: "Foods",
    size: "medium",
    query: "Kottu%20Roti%20Sri%20Lankan%20street%20food",
  },
  {
    id: 6,
    title: "Lamprais",
    category: "Foods",
    size: "medium",
    query: "Lamprais%20Sri%20Lankan%20rice%20dish",
  },
  {
    id: 7,
    title: "Curry Feast",
    category: "Foods",
    size: "large",
    query: "Sri%20Lankan%20curry%20traditional%20food%20feast",
  },
  {
    id: 8,
    title: "Hoppers",
    category: "Foods",
    size: "medium",
    query: "Hoppers%20Sri%20Lankan%20breakfast%20food",
  },
  {
    id: 9,
    title: "Kandyan Dance",
    category: "Traditions",
    size: "large",
    query: "Kandyan%20Dance%20Sri%20Lankan%20traditional%20culture",
  },
  {
    id: 10,
    title: "Batik Art",
    category: "Traditions",
    size: "medium",
    query: "Batik%20Art%20Sri%20Lankan%20traditional%20craft",
  },
  {
    id: 11,
    title: "Mask Making",
    category: "Traditions",
    size: "medium",
    query: "Sri%20Lankan%20mask%20making%20traditional%20craft",
  },
  {
    id: 12,
    title: "Weaving",
    category: "Traditions",
    size: "medium",
    query: "Sri%20Lankan%20traditional%20weaving%20textile",
  },
  {
    id: 13,
    title: "Kandy Perahera",
    category: "Festivals",
    size: "large",
    query: "Kandy%20Perahera%20festival%20elephants%20Sri%20Lanka",
  },
  {
    id: 14,
    title: "Vesak Festival",
    category: "Festivals",
    size: "medium",
    query: "Vesak%20Festival%20Sri%20Lanka%20celebration",
  },
  {
    id: 15,
    title: "New Year Celebration",
    category: "Festivals",
    size: "medium",
    query: "Sri%20Lankan%20New%20Year%20celebration%20traditional",
  },
  {
    id: 16,
    title: "Temple Festival",
    category: "Festivals",
    size: "large",
    query: "Sri%20Lankan%20temple%20festival%20celebration",
  },
]
