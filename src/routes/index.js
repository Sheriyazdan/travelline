import { Router } from "express";
import { ApiService } from "../services/api.service.js";

const router = Router();

const hotelInfoService = new ApiService(
  "ChannelDistributionApi/BookingForm/hotel_info"
);
const hotelReservationService = new ApiService(
  "ApiWebDistribution/BookingForm/hotel_reservation_2"
);

const handleApiError = (res, error) => {
  console.error("Error:", error.message);
  res.status(500).json({ error: error.message });
};

router.get("/hotel_info", async (req, res) => {
  const queryString = req.url.split("?")[1] || "";
  try {
    const data = await hotelInfoService.get(`?${queryString}`);
    console.log("Response:", data);
    res.json(data);
  } catch (error) {
    handleApiError(res, error);
  }
});

router.post("/hotel_reservation", async (req, res) => {
  const queryString = req.url.split("?")[1] || "";
  const requestBody = req.body;
  try {
    const data = await hotelReservationService.post(
      `?${queryString}`,
      requestBody
    );
    console.log("Response:", data);
    res.json(data);
  } catch (error) {
    handleApiError(res, error);
  }
});

export default router;
