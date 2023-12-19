
import table1 from "../models/signup_schema.js";
import value from "../models/schema.js";

export const getLoginDate = async (req, res, next) => {
  try {
    const date = await table1.find();
    res.status(200).json({
      success: true,
      date,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Server error. Could not fetch date.",
    });
  }
};


export const getEnrollDate = async (req, res, next) => {
    try {
      const date = await value.find();
      res.status(200).json({
        success: true,
        date,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        error: "Server error. Could not fetch date.",
      });
    }
  };


  export const getDate= async (req, res) => {
    const { email } = req.params;
  
    try {
      const enrollment = await value.findOne({ Email: email });
      if (enrollment) {
        res.json({ enrollmentDate: enrollment.createdAt }); // createdAt field contains enrollment date
      } else {
        res.status(404).json({ message: 'Enrollment data not found' });
      }
    } catch (error) {
      console.error('Error fetching enrollment data:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
