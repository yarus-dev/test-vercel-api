export const config = {
  runtime: "nodejs", // this is a pre-requisite
};

export default function handler(req, res) {
  const { name = "World" } = req.query;
  return res.json({
    message: `Hello ${name}!`,
  });
}
