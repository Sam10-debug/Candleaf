import Link from "next/link"

const Button = ({title,styling,link,handleClick}) => {
  return (
    <Link href={`${link}`}>
    <button onClick={handleClick} className={styling}>
        {title}
    </button>
    </Link>
  )
}

export default Button
