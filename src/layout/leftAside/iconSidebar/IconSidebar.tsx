import { WrapIcon } from "../../section/Contact/contactInfo/WrapInfo";

type SidebarLeftPropsType = {
  icon?: React.ReactNode;
};

export const IconSidebar = (props: SidebarLeftPropsType) => {
  return (
    <WrapIcon width="24px" height="24px" cursor="pointer">
      {props.icon}
    </WrapIcon>
  );
};
