import { Link, useLocation } from "react-router-dom"

interface Props {
  label: string,
  link: string,
  Icon: React.FC,
  small: boolean | undefined,
}

export default function LinkItem({ link, Icon, label, small }: Props) {
  const location = useLocation();

  return (
    <Link to={`/portal${link}`} className={`flex items-center justify-between gap-3 no-underline text-black px-4 py-2 rounded-md hover:bg-blue-2 hover:text-blue duration-150 ${location.pathname === `/portal${link}` ? "text-blue bg-blue-2" : "text-black-4"} ${small && "text-sm"}`}>
      <span className='flex gap-3 items-center'>
        <Icon />
        <span>{label}</span>
      </span>
    </Link>
  )
}
