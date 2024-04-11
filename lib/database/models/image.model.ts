import { Document, Schema, model, models } from "mongoose";

export interface IImage extends Document {
    title: string;
    transformationType: string;
    publicId: string;
    secureUrl: string;
    width?: number;
    height?: number;
    config?: object;
    transformationUrl?: string;
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    author?: {
        Id: string;
        firstName: string;
        LastName: string;
    };
    created?: Date;
    updatedAt?: Date;
}

const ImageSchema = new Schema ({
    title: { type: String, required: true},
    transformationtype: { type: String, required: true },
    publicId: { type: String, required: true },
    secureUrl: {type: URL, required: true },
    width: { type: Number },
    height: { type: Number },
    config: { type: Object },
    transfromationUrl: {type: URL },
    aspectRate: { type: String},
    color: { type: String },
    prompt: { type: String },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Image = models?.Image || model('Image', ImageSchema);

export default Image;