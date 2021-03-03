export interface DrinkItem {

  id?: string;
  icon: string;
  name: string;
  amount: number;
  volumeType: 'ml' | 'L';
  strength: number;

}
