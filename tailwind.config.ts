import type { Config, } from "tailwindcss"
import colors from "tailwindcss/colors"
import {getIconCollections, iconsPlugin,} from "@egoist/tailwindcss-icons";

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                primary: colors.purple,
                foreground: colors.white,
                background: colors.zinc,
            },
        },
    },
    plugins: [
        iconsPlugin({
            collections: getIconCollections([
                "mdi",
                "ic",
                "ph",
                "devicon",
                "tabler",
                "skill-icons",
            ],),
        },),
    ],
}
