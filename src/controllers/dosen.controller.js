const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const dosen = {
    getAllDosen: async (req, res) => {
        try {
            const dosen = await prisma.dosen.findMany();

            res.json({
                status: 'success',
                data: dosen
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message
            });
        }
    },

    getDosenById: async (req, res) => {
        try {
            const { id } = req.params;
            const dosen = await prisma.dosen.findUnique(id);

            if (!dosen) {
                return res.status(404).json({
                    status: 'error',
                    message: 'Dosen not found'
                });
            }

            res.json({
                status: 'success',
                data: dosen
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message
            });
        }
    }
};

module.exports = dosen;