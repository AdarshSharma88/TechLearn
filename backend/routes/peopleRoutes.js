import express from 'express';
import { authorizedAdmin, isAuthenticated } from '../middlewares/auth.js';
import { buySubscription, paymentVerification ,getRazorPayKey, cancelSubscription} from '../controllers/paymentController.js';
import { contact, courseRequest, getDashboardStats } from '../controllers/peopleController.js';
const router = express.Router();

router.route("/contact").post(contact);
router.route("/courserequest").post(courseRequest);
router.route("/admin/stats").get(isAuthenticated,authorizedAdmin,getDashboardStats);


export default router;