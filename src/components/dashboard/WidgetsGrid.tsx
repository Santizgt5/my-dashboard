'use client'

import { SimpleWidget } from "./SimpleWidget"
import { useAppSelector } from "@/store"
import { IoCartOutline } from "react-icons/io5"

const cardCounter = {
    title: 'Contador',
    subTitle: 'Productos agregados',
    icon: <IoCartOutline size={50} className="text-blue-500" />,
    href: '/dashboard/counter'
}


export const WidgetsGrid = () => {

    const { count } = useAppSelector(state => state.counter)

    return (
        <div className="flex flex-wrap p-2 items-center justify-center">
            <SimpleWidget
                label={count}
                {...cardCounter}
            />
        </div>
    )
}
