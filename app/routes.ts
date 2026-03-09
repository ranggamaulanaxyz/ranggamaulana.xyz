import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

const routes: RouteConfig = [
    layout("routes/layout.tsx", [
        index("routes/welcome.tsx"),
        route("/blog", "routes/blog/list.tsx"),
        route("/blog/create", "routes/blog/create.tsx"),
        route("/blog/:slug", "routes/blog/read.tsx"),
        route("/blog/:slug/edit", "routes/blog/edit.tsx")
    ]),
    route("/signin", "routes/signin.tsx"),
    route("/signout", "routes/signout.tsx")
]

export default routes satisfies RouteConfig;
