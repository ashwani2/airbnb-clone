"use client";

import Container from "../Container";

import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import { FaSkiing } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";
import { BsSnow } from "react-icons/bs";

import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This proprety is closer to beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This proprety is closer to Windmills!",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This proprety is Modern!",
  },
  {
    label: "CountrySide",
    icon: TbMountain,
    description: "This proprety is in the CountrySide!",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This proprety has a pool!",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "This proprety is in a Island!",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This proprety is close to a Lake!",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This proprety has Skiing Activities!",
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "This proprety is in a Castle!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This proprety has camping actvities!",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "This proprety has snowing actvities!",
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    description: "This proprety is in a cave!",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This proprety is in a Desert!",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "This proprety is in a Barn!",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This proprety is luxurious!",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params.get("category");
  const pathName = usePathname();

  const isMainPage = pathName === "/";

  if (!isMainPage) {
    return null;
  }
  return (
    <Container>
      <div
        className="
      pt-4
      flex
      flex-row
      justify-between
      overflow-x-auto"
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
