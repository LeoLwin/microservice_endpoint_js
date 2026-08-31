const express = require("express");
const ServiceBroker = require("../broker/broker");
const ResponseStatus = require("../helper/responseStatus");

const router = express.Router();

const handleError = (res, err) => {
  console.error("Endpoint error:", err);
  res.json(ResponseStatus.UNKNOWN(err.message));
};

router.get("/list", async (req, res) => {
  try {
    const current = Number(req.query.current ?? 1);
    const limit = Number(req.query.limit ?? 10);

    if (!Number.isFinite(current) || !Number.isFinite(limit)) {
      return res.json({ message: "Invalid parameters" });
    }

    const result = await ServiceBroker.call("blog.list", { current, limit });
    console.log("Result : ", result);
    res.json({ result });
  } catch (err) {
    handleError(res, err);
  }
});

router.get("/get/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) return res.json({ message: "Blog ID is required" });

    const result = await ServiceBroker.call("blog.get", { id });
    res.json({ result });
  } catch (err) {
    handleError(res, err);
  }
});

router.post("/create", async (req, res) => {
  try {
    if (!req.body) {
      return res.json({ message: "Not found req.body" });
    }

    console.log("req.body : ", req.body);

    const { title, content, image } = req.body;

    if (!title || !content) {
      return res.json({ message: "Invalid arguments" });
    }

    const result = await ServiceBroker.call("blog.create", { title, content, image });
    console.log("Result:", result);

    res.json({ result });
  } catch (err) {
    handleError(res, err);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, image } = req.body;

    if (!id) return res.json({ message: "Blog ID is required" });

    const result = await ServiceBroker.call("blog.update", {
      id,
      title,
      content,
      image,
    });

    res.json({ result });
  } catch (err) {
    handleError(res, err);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) return res.json({ message: "Blog ID is required" });

    const result = await ServiceBroker.call("blog.delete", { id });
    res.json({ result });
  } catch (err) {
    handleError(res, err);
  }
});

module.exports = router;
