export interface ICategoryItem {
  name: string;
  value: string;
  items: ICategoryItem[];
}

export type TCategories = Array<ICategoryItem>;
