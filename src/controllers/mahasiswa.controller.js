const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const mahasiswa = {
    // Get all mahasiswa
    getAllMahasiswa: async (req, res) => {
        try {
            const mahasiswa = await prisma.mahasiswa.findMany();

            res.json({
                status: 'success',
                data: mahasiswa
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message
            });
        }
    },

    // Get mahasiswa by ID
    getMahasiswaById: async (req, res) => {
        try {
            const { id } = req.params;
            const mahasiswa = await prisma.mahasiswa.findUnique({
                where: { id: parseInt(id) },
                include: {
                    user: {
                        select: {
                            username: true,
                            email: true,
                            role: true
                        }
                    },
                    mahasiswaKp: {
                        include: {
                            pembimbingInstansi: true,
                            dosenPembimbing: {
                                include: {
                                    dosen: true
                                }
                            }
                        }
                    },
                    dokumen: true,
                    nilai: true
                }
            });

            if (!mahasiswa) {
                return res.status(404).json({
                    status: 'error',
                    message: 'Mahasiswa not found'
                });
            }

            res.json({
                status: 'success',
                data: mahasiswa
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message
            });
        }
    }
};

module.exports = mahasiswa;