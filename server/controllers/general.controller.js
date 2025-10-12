import User from "../models/User.js";

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);
    if (!user) {
      console.log("error 404 not found");
    }

    console.log("🚀 ~ getUser ~  user:", user);
    res.status(200).json(user);
  } catch (error) {
    console.log("🚀 ~ getUser ~ error:", error);

    res.status(400).json({ message: error });
  }
};

export default { getUser };
