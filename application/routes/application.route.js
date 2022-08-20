/* eslint-disable newline-per-chained-call */
const express = require('express');
const { body } = require('express-validator');
const {
  getApplications,
  createApplication,
  getApplicationById,
  updateApplication,
  deleteApplication,
} = require('../controllers/application');

const router = express.Router();

/**
 * @typedef Application
 * @property {string} jobId.required
 * @property {string} userId.required
 * @property {string} name
 * @property {string} about
 * @property {string} contactNo
 * @property {Array.<string>} emails
 * @property {string} city
 * @property {string} website
 * @property {Array.<string>} skills
 * @property {Array.<string>} employerNames
 * @property {Array.<string>} positions
 * @property {Array.<string>} locations
 * @property {Array.<string>} end
 * @property {Array.<string>} start
 * @property {Array.<string>} descriptions
 * @property {string} state
 * @property {string} country
 * @property {string} zip
 * @property {Array.<string>} jobPreferences
 */

const bodyValidators = () => [
  body('jobId').exists().isString(),
  body('userId').exists().isString(),
  body('name').optional().isString(),
  body('about').optional().isString(),
  body('contactNo').optional().isString(),
  body('emails').optional().isArray(),
  body('city').optional().isString(),
  body('state').optional().isString(),
  body('country').optional().isString(),
  body('zip').optional().isString(),
  body('skills').optional().isArray(),
  body('employerNames').optional().isArray(),
  body('locations').optional().isArray(),
  body('positions').optional().isArray(),
  body('start').optional().isArray(),
  body('end').optional().isArray(),
  body('descriptions').optional().isArray(),
  body('website').optional().isString(),
  body('jobPreferences').optional().isObject(),
];

const updateValidators = () => [
  body('name').optional().isString(),
  body('about').optional().isString(),
  body('contactNo').optional().isString(),
  body('emails').optional().isArray(),
  body('city').optional().isString(),
  body('state').optional().isString(),
  body('country').optional().isString(),
  body('zip').optional().isString(),
  body('skills').optional().isArray(),
  body('employerNames').optional().isArray(),
  body('locations').optional().isArray(),
  body('positions').optional().isArray(),
  body('start').optional().isArray(),
  body('end').optional().isArray(),
  body('descriptions').optional().isArray(),
  body('website').optional().isString(),
  body('jobPreferences').optional().isObject(),
  body('status').optional().isString(),
];

/**
 * Get list of Applications
 * @route GET /applications
 * @param {integer} page.query
 * @param {integer} limit.query
 * @param {string} userId.query
 * @param {string} jobIds.query
 * @group Application
 * @security JWT
 * @returns {Array.<Application>} 200 - List of application info
 */
router.get('/', getApplications);

/**
 * Create a Application
 * @route POST /applications
 * @group Application
 * @security JWT
 * @param {Application.model} Application.body.require
 * @returns {Application.model} 201 - Created Application
 */
router.post('/', ...bodyValidators(), createApplication);

/**
 * Get Application by ID
 * @route GET /applications/{id}
 * @group Application
 * @security JWT
 * @param {string} id.path.require
 * @returns {Application.model} 200 - Application for given ID
 */
router.get('/:id', getApplicationById);

/**
 * Update Application by ID
 * @route PUT /applications/{id}
 * @group Application
 * @security JWT
 * @param {string} id.path.require
 * @param {Application.model} Application.body.require
 * @returns {Application.model} 200 - Updated Application
 */
router.put('/:id', ...updateValidators(), updateApplication);

/**
 * Delete Application by ID
 * @route DELETE /applications/{id}
 * @group Application
 * @security JWT
 * @param {string} id.path.require
 * @returns {null} 200 - Delete Application
 */
router.delete('/:id', deleteApplication);

module.exports = router;
