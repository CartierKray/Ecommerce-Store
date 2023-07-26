import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  return (
    <div className="">
      <h1 className="text-3xl font-bol text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex itrems-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>{data?.size?.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border-gray-600"
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
        <div className="flex flex-col-2 gap-y-6 gap-x-4">
          <h3 className="font-semibold text-black">Description:</h3>
          <div className=" text-black">
            <p className="text-sm">
              <b>KingSize Dimensions:</b>The Luxe KingSize Bed offers ample
              space, providing you and your partner with the ultimate sleeping
              comfort. Stretch out and enjoy the freedom of a spacious sleeping
              surface. <br />
              <b>Premium Quality Materials:</b> This bed is constructed with
              high-quality materials, ensuring durability and longevity. The
              sturdy frame and expert craftsmanship guarantee a reliable and
              sturdy foundation for years to come. <br />
              <b>Plush Comfort:</b> The Luxe KingSize Bed is designed with a
              plush and luxurious mattress, providing you with a cloud-like feel
              as you sink into its softness. The carefully selected mattress
              materials ensure optimal support and pressure relief for a restful
              nights sleep.
              <br /> <b>Elegant Design:</b> Its sleek and modern design adds an
              elegant touch to any bedroom decor. The minimalist aesthetics
              blend seamlessly with various interior styles, making it a perfect
              centerpiece for your bedroom. Easy Assembly: The Luxe KingSize Bed
              comes with easy-to-follow assembly instructions, ensuring a
              hassle-free setup process. You will be able to enjoy your new bed
              in no time!
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button className="flex items-center gap-x-2">
          Add To Cart
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default Info;
