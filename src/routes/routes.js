import config from "~/config";

// Layouts

// Pages
import Home from "~/pages/Home";
import Profile from "~/pages/Profile";
import Manhua from "~/pages/Manhua";
import Manhwa from "~/pages/Manhwa";
import Manga from "~/pages/Manga";
import Novel from "~/pages/Novel";

// Public Routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.manhua, component: Manhua },
    { path: config.routes.manhwa, component: Manhwa },
    { path: config.routes.manga, component: Manga },
    { path: config.routes.novel, component: Novel },
]

const privateRoutes = []

export { publicRoutes , privateRoutes }