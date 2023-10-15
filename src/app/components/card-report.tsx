"use client";
import React from "react";
import NextLink from "next/link";

import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Link } from "@nextui-org/link";

import { Reports } from "@/app/types/report.type";
import { limitCharacter } from "@/app/lib/utility";

export default function CardReport({
  reportName,
  carModel,
  carYear,
  reportFault,
  id,
}: Reports) {
  return (
    <div className="w-full flex items-center justify-center">
      <Card className="w-full rounded-md shadow-none border sm:min-h-[180px] border-black/20  lg:max-w-[340px]">
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <div className="flex gap-1 items-center">
              <Link
                as={NextLink}
                href={`/reports/${id}`}
                className="text-small font-semibold leading-none text-default-600 uppercase cursor-pointer"
              >
                {reportName}
              </Link>
            </div>
          </div>
        </CardHeader>
        <CardBody className="px-3 py-0 text-small text-default-900">
          <span className="font-semibold text-default-500 mb-1">
            Falla presentada:
          </span>
          <div className="flex w-full flex-col">
            {limitCharacter(reportFault)}
          </div>
        </CardBody>
        <CardFooter className="flex justify-between">
          <div className="flex gap-1">
            <p className="font-semibold text-default-600 text-small">
              {carYear}
            </p>
          </div>
          <div className="flex gap-1">
            <p className="font-semibold text-default-600 text-small uppercase">
              {carModel}
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
