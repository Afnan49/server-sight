export interface ticket {
  id: number;
  title: string;
  request: string;
  status: 'open' | 'close';
}
