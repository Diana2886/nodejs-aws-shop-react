import { CartItem } from "./CartItem";

export enum CartStatus {
  OPEN = "OPEN",
  ORDERED = "ORDERED",
}

export type Cart = {
  id: string;
  user_id: string;
  items: CartItem[];
  created_at: Date;
  updated_at: Date;
  status: CartStatus;
};
