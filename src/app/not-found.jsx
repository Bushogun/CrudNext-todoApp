import Link from "next/link"

function NotFound() {
  return (
    <section>
        <div className="flex h-[calc(100vh-7rem)] justify-center items-center">
            <div className="text-center">
            <h1 className="text-4xl font-bold">
                Not Found
            </h1>
            <Link href="/" className="text-blue-600 text 2xl mt-5">
                Volver al inicio
            </Link>
            </div>
        </div>
    </section>
  )
}

export default NotFound