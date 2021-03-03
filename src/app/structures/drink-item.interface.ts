export interface DrinkItem {

  id?: string;
  icon: string;
  name: string;
  amount: number;
  volumeType: 'ml' | 'L';
  volume: number;
  strength: number;

}
