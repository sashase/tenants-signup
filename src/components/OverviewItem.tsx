interface OverviewItemProps {
  label: string
  value: string
  dataCy?: string
}

export default function OverviewItem({
  label,
  value,
  dataCy,
}: OverviewItemProps,) {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between text-xl md:text-2xl text-black w-full">
      <p className="text-gray-600">{label}</p>
      <p data-cy={dataCy}>{value}</p>
    </div>
  )
}
