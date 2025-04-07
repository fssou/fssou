<script lang="ts" setup>
import type {PropType, Ref,} from "vue";
import type { TwitterUserData,} from "@/services/types";
import {ref,} from "vue";
import {SocialMediaBuilder,} from "@/utils/socialmedia";
import SocialMediaCard from "@/components/SocialMediaCard.vue";
import XService from "~/services/x";


const config = useRuntimeConfig()

const xService = new XService(config.public.lambdaFunctionUrl,)

const xFollowers = ref<string>("...",)

onMounted(() => {
    xService.getUsersMe().then((response,) => {
        setTimeout(() => xFollowers.value = `${response?.data?.public_metrics?.followers_count} seguidores`,5000)
    },)
},)

const twitter = new SocialMediaBuilder()
    .withName("Twitter",)
    .withSite("https://twitter.com/fssouoficial",)
    .withHandle("@fssouoficial",)
    .withIcon("i-line-md-twitter-x",)
    .withInfo(xFollowers,)
    .build()
const github = new SocialMediaBuilder()
    .withName("Github",)
    .withSite("https://github.com/fssou",)
    .withHandle("@fssou",)
    .withIcon("i-mdi-github",)
    .build()
const figma = new SocialMediaBuilder()
    .withName("Figma",)
    .withSite("https://figma.com/fssou",)
    .withHandle("@fssou",)
    .withIcon("i-devicon-figma",)
    .build()
const email = new SocialMediaBuilder()
    .withName("Email",)
    .withSite("mailto:f@francl.in",)
    .withHandle("f@francl.in",)
    .withIcon("i-mdi-email-outline",)
    .build()
const linkedin = new SocialMediaBuilder()
    .withName("Linkedin",)
    .withSite("https://linkedin.com/in/fssou",)
    .withHandle("@fssou",)
    .withIcon("i-devicon-linkedin",)
    .withInfo(ref("100 conexões",),)
    .build()
const codepen = new SocialMediaBuilder()
    .withName("Codepen",)
    .withSite("https://codepen.com/fssou",)
    .withHandle("@fssou",)
    .withIcon("i-tabler-brand-codepen",)
    .build()
const medium = new SocialMediaBuilder()
    .withName("Medium",)
    .withSite("https://medium.com/@fssou",)
    .withHandle("@fssou",)
    .withIcon("i-mdi-medium",)
    .build()

const socialMedia = [
    twitter,
    github,
    figma,
    email,
    linkedin,
    codepen,
    medium,
]

</script>

<template>
    <div
        class="grid h-full grid-cols-2 grid-rows-5 gap-6"
    >
        <SocialMediaCard
            v-for="it in socialMedia"
            :key="it.getName()"
            :social-media="it"
            :class="it.getName().toLowerCase()"
        />
    </div>
</template>

<style scoped>
@reference "~/assets/css/main.tw.reference.css";

@utility base {
    box-shadow: rgba(0, 0, 0, 0.06) 0 0 0 1px inset, rgba(0, 0, 0, 0.04) 0 2px 4px 0;
    @apply relative p-4 w-full;
    @apply flex flex-col flex-nowrap content-start items-start justify-between;
    @apply rounded-[20px];
    @apply cursor-pointer select-none overflow-hidden;
    @apply transition duration-850 ease-in-out will-change-transform;
    @apply bg-zinc-200;
    @variant hover {
        @apply bg-primary-400;
        @apply text-white;
    }
    @variant dark {
        @apply bg-zinc-800;
    }
}

.twitter {
    @apply base;
    @apply row-span-2;
}
.github {
    @apply base;
}
.figma {
    @apply base;
}
.email {
    @apply base;
    @apply col-span-2;
}
.linkedin {
    @apply base;
    @apply row-span-2;
}
.codepen {
    @apply base;
}
.medium {
    @apply base;
}
</style>
