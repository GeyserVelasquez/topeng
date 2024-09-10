import Link from "next/link";

export const NavLink = (route,name) => {
  return <Link href={route}>{name}</Link>;
};
