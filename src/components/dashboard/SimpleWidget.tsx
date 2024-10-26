import Link from "next/link";
import React from "react";

interface Props {
  title?: string;
  subTitle?: string;
  label: number;
  icon?: React.ReactNode;
  href?: string;
}


export const SimpleWidget = ({ title, subTitle, label, icon, href }: Props) => {
  return (
    <div className="bg-white shadow-xl p-3 sm:min-w-[25%] min-w-full  rounded-2xl border-1 border-gray-50 mx-2 my-2">
      <div className="flex flex-col">
        <div>
          {
            label && (
              <div>
                <h2 className="text-3xl font-bold text-gray-600 text-center">{label}</h2>
              </div>
            )
          }
        </div>
        <div className="my-3">
          <div className="flex flex-row items-center justify-center space-x-1 ">
            {
              icon
            }
            <div id="temp" className="text-center">
              <h4 className="text-2xl">{title}</h4>
              {
                subTitle && (<p className="text-xs text-gray-500">{subTitle}</p>)
              }
            </div>
          </div>
        </div>

        <div className="w-full place-items-end text-right border-t-2 border-gray-100 mt-2 py-1">
          {
            href && (
              <Link
                href={href}
                className="border rounded-full py-1 px-4 text-xs font-semibol"
              >
                Counter
              </Link>
            )
          }
        </div>

      </div>
    </div>
  )
}