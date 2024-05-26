export interface Item {
    id: number;
    item_code: string;
    item_name: string;
    item_description: string;
    qty: number;
    category: string;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
  }  