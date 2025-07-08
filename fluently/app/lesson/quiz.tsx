"use client";

import { challengeOptions, challenges } from "@/db/schema";
import { useState } from "react";
import Header from "./header";

type Props = {
  initialPercentage: number;
  initialHearts: number;
  initialLessonId: number;
  initialLessonChallenges: (typeof challenges.$inferSelect & {
    completed: boolean;
    challengeOptions: (typeof challengeOptions.$inferSelect)[];
  })[];
  //   userSubscription: typeof userSubscription.$inferSelect & {
  //     isActive: boolean;
  //   } | null;

  userSubscription: any; //TODO to replace with subscription DB
};

export const Quiz = ({
  initialPercentage,
  initialHearts,
  initialLessonId,
  initialLessonChallenges,
  userSubscription,
}: Props) => {
    const [hearts,setHeaders]=useState(initialHearts);
    const [percentage,setPercentage]=useState(initialPercentage)

  return <>
  <Header
  hearts={hearts}
  percentage={percentage}
  hasActiveSubscription={!!userSubscription?.isActive}
  />
  </>;
};
