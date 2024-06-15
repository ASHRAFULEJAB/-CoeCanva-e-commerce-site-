import { ShoppingCart } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div
      className="h-[75vh] w-full border-b border-ui-border-base relative"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6 bg-black bg-opacity-50">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal text-white"
          >
            CodeCanva Shopping Center
          </Heading>
          
        </span>
        <a href="/" target="_blank">
          <Button variant="secondary">
            Order Now
            <ShoppingCart />
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Hero
