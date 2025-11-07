// import mongoose, { Schema, Document } from "mongoose";

// export interface IOrder extends Document {
//   userEmail: string;
//   productId: number;
//   productName: string;
//   amount: number;
//   paymentStatus: string;
//   paymentId?: string;
// }

// const orderSchema = new Schema<IOrder>(
//   {
//     userEmail: { type: String, required: true },
//     productId: { type: Number, required: true },
//     productName: { type: String, required: true },
//     amount: { type: Number, required: true },
//     paymentStatus: { type: String, default: "pending" },
//     paymentId: { type: String },
//   },
//   { timestamps: true }
// );

// export default mongoose.models.Order || mongoose.model<IOrder>("Order", orderSchema);


// C:\Web-Development\MyNextjs Journey\OA\YA\New\buyflow\models\Order.ts
// import mongoose, { Schema, Document } from "mongoose";

// export interface IOrder extends Document {
//   userEmail: string;
//   productId: number;
//   productName: string;
//   amount: number;
//   currency: string;
//   status: string;
//   createdAt: Date;
// }

// const orderSchema = new Schema<IOrder>(
//   {
//     userEmail: { type: String, required: true },
//     productId: { type: Number, required: true },
//     productName: { type: String, required: true },
//     amount: { type: Number, required: true },
//     currency: { type: String, required: true },
//     status: { type: String, default: "pending" },
//   },
//   { timestamps: true }
// );

// export default mongoose.models.Order || mongoose.model<IOrder>("Order", orderSchema);





import mongoose, { Schema, Document } from "mongoose";

export interface IOrder extends Document {
  userEmail: string;
  productId: number;
  productName: string;
  amount: number;
  currency: string;
  status: string;
  paymentIntentId?: string;
  createdAt: Date;
}

const orderSchema = new Schema<IOrder>(
  {
    userEmail: { type: String, required: true },
    productId: { type: Number, required: true },
    productName: { type: String, required: true },
    amount: { type: Number, required: true },
    currency: { type: String, required: true },
    status: { type: String, default: "pending" },
    paymentIntentId: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model<IOrder>("Order", orderSchema);