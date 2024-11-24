import { wixClientServer } from "@/lib/wixClientServer";
import Link from "next/link";
import { notFound } from "next/navigation";

const OrderPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const wixClient = await wixClientServer();

  let order;
  try {
    order = wixClient.orders.getOrder(id);
  } catch (error) {
    return notFound;
  }

  return (
    <div className="flex flex-col h-[calc(100vh-180px)] items-center justify-center ">
      <div className="shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] px-40 py-20">
        <h1 className="text-xl">Order Details</h1>
        <div className="mt-12 flex flex-col gap-6">
          <div className="">
            <span className="font-medium">Order Id: </span>
            <span>{(await order)._id}</span>
          </div>
          <div className="">
            <span className="font-medium">Receiver Name: </span>
            <span>
              {(await order).billingInfo?.contactDetails?.firstName + " "}
              {(await order).billingInfo?.contactDetails?.lastName}
            </span>
          </div>
          <div className="">
            <span className="font-medium">Receiver Email: </span>
            <span>{(await order).buyerInfo?.email}</span>
          </div>
          <div className="">
            <span className="font-medium">Price: </span>
            <span>{(await order).priceSummary?.subtotal?.amount}</span>
          </div>
          <div className="">
            <span className="font-medium">Payment Status: </span>
            <span>{(await order).paymentStatus}</span>
          </div>
          <div className="">
            <span className="font-medium">Order Status: </span>
            <span>{(await order).status}</span>
          </div>
          <div className="">
            <span className="font-medium">Delivery Address: </span>
            <span>
              {(await order).billingInfo?.address?.addressLine1 + " "}
              {(await order).billingInfo?.address?.city}
            </span>
          </div>
        </div>
      </div>
      <Link href="/" className="underline mt-6">
        Have a problem? Contact us
      </Link>
    </div>
  );
};

export default OrderPage;
