export interface MenuItem {
    title: string;
    subItems: SubMenuItem[];
  }
  
interface SubMenuItem {
    title: string;
    route: string;
  }