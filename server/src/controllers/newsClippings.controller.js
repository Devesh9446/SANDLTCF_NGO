import { asyncHandler } from "../utils/asyncHandler.js";
import { apiResponse } from "../utils/apiResponse.js";
import { apiError } from "../utils/apiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { newsClippings } from "../models/newsClippings.model.js";
import {v2 as cloudinary} from 'cloudinary';

const fetchNewsClippingsPhoto = asyncHandler(async (req, res) => {
  try {
    const data = await newsClippings.find();
    res.status(200).json(new apiResponse(200, data, "data send successfully"));
  } catch (error) {
    throw new apiError(400, `Error:${error}`);
  }
});

const addNewsClippingsPhoto = asyncHandler(async (req, res) => {
  const image = req.file;
  if (!image) {
    throw new apiError(400, "image is required");
  }
  const resp1 = await uploadOnCloudinary(image.path);
  const resp2 = {
    image: resp1.url,
    public_id: resp1.public_id,
  };

  try {
    const data = new newsClippings(resp2);
    const resp = data.save();
    res
      .status(200)
      .json(new apiResponse(200, resp, "image stored successfully"));
  } catch (error) {
    throw new apiError(400, `Error:${error}`);
  }
});

const changeNewsClippingsStatus = asyncHandler(async (req, res) => {
  const { id, status } = req.body;
  if (!id) {
    throw new apiError(400, "ID is required");
  }
  try {
    const data = await newsClippings.findByIdAndUpdate(
      id,
      {
        $set: {
          status: status,
        },
      },
      {
        new: true,
      }
    );
    res
      .status(200)
      .json(new apiResponse(200, data, "Status changed successfully"));
  } catch (error) {
    throw new apiError(400, `ERROR:${error}`);
  }
});

const deleteNewsClippingsPhoto = asyncHandler(async (req, res) => {
    const { id } = req.params; 
    if (!id) {
      throw new apiError(400, "ID is required");
    }
    try {
      const data = await newsClippings.findById(id);
      const public_id = data.public_id;
  
      try {
        const response = await cloudinary.uploader.destroy(public_id);
        if (response.result === "ok") {
          await newsClippings.deleteOne({ _id: id });
          res.status(200).json(new apiResponse(200, "Image deleted successfully"));
        } else {
          throw new apiError(400, "Failed to delete an image");
        }
      } catch (error) {
        throw new apiError(400, `ERROR: ${error}`);
      }
    } catch (error) {
      throw new apiError(400, `Error: ${error}`);
    }
});

export {
  addNewsClippingsPhoto,
  deleteNewsClippingsPhoto,
  fetchNewsClippingsPhoto,
  changeNewsClippingsStatus,
};
