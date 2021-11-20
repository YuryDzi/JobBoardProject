const { errors, getPagination } = require('u-server-utils');
const { Photo } = require('../model');
const { uploadFileToS3, deleteFileFromS3 } = require('../util/fileUtilS3');

const addPhoto = async (req, res) => {
  try {
    const { isFeatured, userId, companyId } = req.body;
    const { originalname } = req.file;

    if (!(isFeatured && userId && companyId)) {
      return res.status(400).json(errors.badRequest);
    }

    const uploadedPhoto = await uploadFileToS3(req.file);

    const photoObj = await Photo.create({
      _id: uploadedPhoto.Key,
      isFeatured: isFeatured === 'true' ? true : false,
      altText: originalname,
      userId,
      companyId,
      url: uploadedPhoto.Location,
    });

    return res.status(201).json(photoObj);
  } catch (error) {
    console.log(error);
    return res.status(500).json(errors.serverError);
  }
};

const getPhotoById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json(errors.badRequest);
    }

    const photo = await Photo.findOne({
      where: { _id: id },
    });

    return res.status(200).json(photo);
  } catch (err) {
    return res.status(500).json(errors.serverError);
  }
};

const getAllPhotos = async (req, res) => {
  const { userId, companyId } = req.query;

  try {
    const { limit, offset } = getPagination(req.query.page, req.query.limit);

    const queryObj = {};
    if (userId) {
      queryObj.userId = userId;
    }
    if (companyId) {
      queryObj.companyId = companyId;
    }

    const photos = await Photo.findAndCountAll({
      where: queryObj,
      limit,
      offset,
    });

    return res.status(200).json({ total: photos.count, photos: photos.rows });
  } catch (err) {
    return res.status(500).json(errors.serverError);
  }
};

const updatePhoto = async (req, res) => {
  try {
    const { id } = req.params;
    if (!(id && req.body)) {
      return res.status(400).json(errors.badRequest);
    }

    const { altText, isFeatured } = req.body;
    const photo = await Photo.findOne({
      where: { _id: id },
    });

    if (altText) {
      photo.altText = altText;
    }
    if (isFeatured) {
      photo.isFeatured = isFeatured;
    }

    await photo.save();

    return res.status(200).json(photo);
  } catch (err) {
    return res.status(500).json(errors.serverError);
  }
};

const deletePhoto = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json(errors.badRequest);
    }

    const photo = await Photo.findOne({
      where: { _id: id },
    });

    await photo.destroy();
    deleteFileFromS3(id);

    return res.status(200).json(null);
  } catch (err) {
    return res.status(500).json(errors.serverError);
  }
};

module.exports = {
  addPhoto,
  getPhotoById,
  getAllPhotos,
  deletePhoto,
  updatePhoto,
};