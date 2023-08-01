export interface Pokemon {
    name: string;
    generation?: number;
    id: number;
    image: string;
    weight: number;
    height: number;
    catch: boolean;
    types: any[];
    stats: any[];
}