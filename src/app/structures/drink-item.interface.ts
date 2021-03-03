export interface DrinkItem {

  id?: string;
  icon: string;
  name: string;
  volumeType: 'ml' | 'L';
  amount: number;
  strength: number;

}
