type Gra = "data" | "bar" | "line" | "pie" | "summary";
type Col = "white" | "black" | "purple";

export interface Widget {
  title: string;
  color: Col;
  widget: Gra;
}

export interface Pie {
    id: number;
    value: number;
    label: string;
}
