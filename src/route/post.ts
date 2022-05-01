const { Router } = require("express");

const router = Router();

router.patch("/:id", async (req: any, res: any) => {
  const postId = parseInt(req.params.id);
  const post = await Table.findOne({
    where: {
      id: postId,
    },
  });
  if (post.report === 4) {
    await Table.destroy({
      where: {
        id: postId,
      },
    });
    return res.sendStatus(204);
  }
  await Table.update(
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
