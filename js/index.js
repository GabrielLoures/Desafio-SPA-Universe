import { Routes } from "./routes.js";

const router = new Routes();

router.add('/', '/pages/home.html')
router.add('/explorer', '/pages/explorer.html')
router.add('/universe', '/pages/universe.html')
router.add(404, '/pages/404.html')

router.handle()

window.onpopstate = () => router.handle()

router.changeBg()