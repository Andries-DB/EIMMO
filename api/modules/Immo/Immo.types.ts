export interface ImmoBody {
  type: string;
  title: string;
  price: number;
  adress:string;
  size: number;
  amountBedrooms: number;
  amountBathrooms : number;
  garden: boolean;
  avatar?: string | null;
}