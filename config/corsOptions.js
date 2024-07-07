const corsOptions = {
  origin: (origin, callback) => {
    const whitelist = [
      "http://localhost:5173",
      // other origins goes here
    ];

    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Blocked by CORS!"));
    }
  },
  optionsSuccessStatus: 200,
};

export default corsOptions;
