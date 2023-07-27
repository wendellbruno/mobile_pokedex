export interface Pokemon {
    name: string;
    id: number;
    image: string;
    width: number;
    height: number;
    catch?: boolean;
    types: any[];
    status: any[];
}