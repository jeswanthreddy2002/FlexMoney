import value from "../models/schema.js";

export const updateBatch = async (req, res) => {
    const { email } = req.params;
    const { batchPreference } = req.body;
  
    try {
      // Update batch preference in the database for the user with the given email
      await value.findOneAndUpdate({ Email: email }, { $set: { BatchPreference: batchPreference } });
      res.status(200).json({ message: 'Batch preference updated' });
    } catch (error) {
      console.error('Error updating batch preference:', error);
      res.status(500).json({ message: 'Failed to update batch preference' });
    }
  };

  export const updateDate = async (req, res) => {
    const { enrollmentDate } = req.body;
    const { email } = req.params;
  
    try {
      // Update enrollment date in the database for the user with the given email
      await value.findOneAndUpdate({ Email: email }, { $set: { createdAt: enrollmentDate } });
      res.status(200).json({ message: 'Enrollment date updated' });
    } catch (error) {
      console.error('Error updating enrollment date:', error);
      res.status(500).json({ message: 'Failed to update enrollment date' });
    }
  };