import { ReactNode, } from "react"

interface PageWrapperProps {
  title: string
  children: ReactNode
}

export default function PageWrapper({ title, children, }: PageWrapperProps,) {
  return (
    <div className="flex flex-col items-center gap-10 w-full">
      <h4 className="text-4xl md:text-6xl font-bold">{title}</h4>
      {children}
    </div>
  )
}
