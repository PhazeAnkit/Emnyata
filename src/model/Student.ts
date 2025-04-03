import mongoose, { Schema, Document } from "mongoose";

export interface IStudent extends Document {
  name: string;
  email: string;
  enrolledModules: string[]; // modules the student is studying
}

const StudentSchema = new Schema<IStudent>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // ensures no duplicate emails
    },
    enrolledModules: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model<IStudent>("Student", StudentSchema);
