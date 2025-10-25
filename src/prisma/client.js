const { PrismaClient } = require("../../generated/prisma")

let prisma;
function getPrisma() {
    if (!prisma) {
        prisma = new PrismaClient();
        prisma.$connect(); 
        process.on('beforeExit', async () => {
			try { await prisma.$disconnect(); } catch {}
		});
		process.on('SIGNIT', async () => {
			try { await prisma.$disconnect(); } finally { process.exit(0); }
		});
    }
    return prisma;
}

module.exports = { prisma: getPrisma() };