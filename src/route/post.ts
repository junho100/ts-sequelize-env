const { Router } = require("express");
const Tables = require("../model/table");
const router = Router();

router.get("/", async (req: any, res: any) => {
  await Tables.create({
    author: "a",
    content: "b",
  });
  await Tables.create({
    author: "c",
    content: "d",
  });

  const posts = await Tables.findAll();
  res.status(200).send(posts);
});

router.patch("/:id", async (req: any, res: any) => {
  await Tables.create({
    author: "a",
    content: "b",
  });
  await Tables.create({
    author: "c",
    content: "d",
  });
  await Tables.create({
    author: "e",
    content: "f",
  });
  const postId = parseInt(req.params.id);
  const post = await Tables.findOne({
    where: {
      id: postId,
    },
  });
  if (post.report === 4) {
    await Tables.destroy({
      where: {
        id: postId,
      },
    });
    return res.sendStatus(204);
  }
  await Tables.update(
    {
      report: post.report + 1,
    },
    {
      where: {
        id: postId,
      },
    }
  );
  return res.status(200).send(post);
});

module.exports = router;
