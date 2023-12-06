import { MenuItem } from "src/app/shared/models/side-nav.model";

export const menuItems:MenuItem [] = [
    {
      title: "system_settings.transaction_management",
      subItems: [
        {
          title: "system_settings.third_party_recipient_group",
          route:"users"
        },
      ]
    }, 
  ]