export interface Header {
  text: string;
  value: string;
  align: 'start' | 'center' | 'end';
  sortable: boolean;
  isVisible: boolean;
  width: number;
}