import type { Config, } from "tailwindcss"
import colors from "tailwindcss/colors"
import {getIconCollections, iconsPlugin,} from "@egoist/tailwindcss-icons";

export default <Partial<Config>>{
    plugins: [
        iconsPlugin({
            collections: getIconCollections([
                "mdi",
                "ic",
                "ph",
                "devicon",
                "tabler",
                "skill-icons",
                "line-md",
            ],),
        },),
    ],
}
