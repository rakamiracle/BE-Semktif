exports.validateDocument = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body; 

  const document = await Document.findById(id);
  if (!document) {
    return res.status(404).json({ message: 'Document not found' });
  }

  document.status = status;
  await document.save();

  res.json({ message: 'Document updated', document });
};
