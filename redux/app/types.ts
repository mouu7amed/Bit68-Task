export interface RootState {
  slider: {
    slider: {
      count: number;
      next: string;
      pages_number: number;
      previous: string;
      results: {
        id: number;
        image: string;
      }[];
    };
    error: string;
    loading: boolean;
  };
  categories: {
    categories: {
      count: number;
      next: string;
      pages_number: number;
      previous: string;
      results: {
        id: number;
        image: string;
        name: string;
      }[];
    };
    error: string;
    loading: boolean;
  };
  brands: {
    brands: {
      count: number;
      next: string;
      pages_number: number;
      previous: string;
      results: {
        id: number;
        image: string;
        sale_percentage: number;
      }[];
    };
    error: string;
    loading: boolean;
  };
  items: {
    items: {
      count: number;
      next: string;
      pages_number: number;
      previous: string;
      results: {
        id: number;
        image: string;
        name: string;
        price_after_sale: number;
        price_before_sale: number;
        type: string;
      }[];
    };
    error: string;
    loading: boolean;
  };
}
