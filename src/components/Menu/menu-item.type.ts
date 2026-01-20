export default interface TMenuItem {
  title: string;
  icon?: string;
  to?: string;
  subMenu?: TMenuItem[];
}
