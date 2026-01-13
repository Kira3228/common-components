interface TMenuItem {
  title: string;
  icon?: string;
  to?: string;
  subMenu?: TMenuItem[];
}

export default TMenuItem