const service = require("./service");

exports.getAttendance = async (req, res) => {
   const data = await service.getAttendance();
    res.json({ message: "academic overview", data });
};
