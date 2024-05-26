export interface Purchase {
    id: number;
    item_code: string;
    ordered_by: string;
    qty: number;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
}