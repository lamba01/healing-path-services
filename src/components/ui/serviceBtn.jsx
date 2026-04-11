import Link from "next/link" 

export default function ServiceBtn() {
  return (
    <Link href="/contact">
    <button className="bg-coral-500 cursor-pointer hover:scale-105 capitalize py-3 px-5 rounded">
        book appointment
      </button>
    </Link>
  )
}
