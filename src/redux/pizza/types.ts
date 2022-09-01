export type Pizza = {
  id: string;
  name: string;
  price: number;
  sizes: number[];
  imageUrl: string;
  types: number[];
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface PizzaSliceState {
  items: Pizza[];
  status: Status;
}

export type SearchPizzaParams = {
  sortBy: string;
  category: string;
  order: string;
  currentPage: string;
  search: string;
};
