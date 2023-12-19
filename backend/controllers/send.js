import value from "../models/schema.js";

export const createData = async (req, res, next) => {
  const { Name, Age ,Email, BatchPreference } = req.body;

  if (!Name || !Age || !Email || !BatchPreference) {
    res.status(400);
    return next(new Error("Name, Age, Email & BatchPreference fields are required"));
  }

  try {
    const a = await value.create({
      Name,
      Age,
      Email,
      BatchPreference,
    });

    res.status(201).json({
      success: true,
      a,
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    next(error);
  }
}
