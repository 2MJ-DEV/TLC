"use client"
import { Button } from "@/components/ui/button"

const NotFound = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center items-center gap-3">
        <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
        <p className="">The page you are looking for does not exist.</p>
        <Button variant="default" className="mt-4" onClick={() => window.history.back()}>Go Back</Button>
      </div>
    </div>
  )
}

export default NotFound