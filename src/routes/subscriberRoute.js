const express = require("express");
const router = express.Router();
const {
  getSubscribers,
  getSubscriberNames,
  getSubscriberById,
  addSubscriber,
} = require('../controllers/subscriberController');

// routes are created for controllers
router.route('/subscribers').get(getSubscribers);
router.route('/subscribers/names').get(getSubscriberNames);
router.route('/subscribers/:id').get(getSubscriberById);

router.route('/subscriber/add').post(addSubscriber);

module.exports = router;
