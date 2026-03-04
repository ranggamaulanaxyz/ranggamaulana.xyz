import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

const routes: RouteConfig = [
    layout("routes/layout.tsx", [
        index("routes/welcome.tsx"),
        route("/signin", "routes/signin.tsx")
    ])
]

export default routes satisfies RouteConfig;
