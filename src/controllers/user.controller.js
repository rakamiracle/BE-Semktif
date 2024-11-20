const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const user = {
    // Get all users
    getAllUsers: async (req, res) => {
        try {
            const users = await prisma.user.findMany();

            res.json({
                status: 'success',
                data: users
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message
            });
        }
    },

    // Get user by ID
    getUserById: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await prisma.user.findUnique({
                where: { id: parseInt(id) },
                include: {
                    mahasiswa: true,
                    dosen: true,
                    pembimbingInstansi: true,
                    kaprodi: true,
                    koordinatorKp: true
                }
            });

            if (!user) {
                return res.status(404).json({
                    status: 'error',
                    message: 'User not found'
                });
            }

            res.json({
                status: 'success',
                data: user
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message
            });
        }
    }
};

module.exports = user;