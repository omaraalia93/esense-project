export interface ITabs {
    name:string,
    route:string
}

export const tabs:ITabs[] = [
    {
      name:"main.records.tabs.dashboard",
      route:"/dashboard",
    },
    {
      name:"main.records.tabs.system_settings",
      route:"/system-settings",
    },
  ]