import React from "react";
import {Card} from "@nextui-org/react";

import dynamic from "next/dynamic";

const PlayerAnimation = dynamic(() => import("@/components/player"), { ssr: false });

export default function CardBox({link}) {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none max-w-xs items-center justify-center h-56 max-h-60"
    >
      <PlayerAnimation link={link}/>
      
    </Card>
  );
}
