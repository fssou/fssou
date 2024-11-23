
export class SocialMedia {
    private readonly name: string
    private readonly site: string
    private readonly handle: string
    private readonly icon: string
    private readonly info: Ref<string>
    constructor (
        name: string,
        site: string,
        handle: string,
        icon: string,
        info: Ref<string>,
    ) {
        this.name = name
        this.site = site
        this.handle = handle
        this.icon = icon
        this.info = info
    }

    public getName (): string {
        return this.name
    }

    public getSite (): string {
        return this.site
    }

    public getHandle (): string {
        return this.handle
    }

    public getIcon (): string {
        return this.icon
    }

    public getInfo (): Ref<string> {
        return this.info
    }

    public open (): void {
        navigateTo(this.getSite(), { external: true, open: { target: "_blank", }, },)
    }
}

export class SocialMediaBuilder {
    private name: string
    private site: string
    private handle: string
    private icon: string
    private info: Ref<string>

    constructor () {
        this.name = ""
        this.site = ""
        this.handle = ""
        this.icon = ""
        this.info = ref("",)
    }

    public withName (name: string,): SocialMediaBuilder {
        this.name = name
        return this
    }

    public withSite (site: string,): SocialMediaBuilder {
        this.site = site
        return this
    }

    public withHandle (handle: string,): SocialMediaBuilder {
        this.handle = handle
        return this
    }

    public withIcon (icon: string,): SocialMediaBuilder {
        this.icon = icon
        return this
    }

    public withInfo (info: Ref<string>,): SocialMediaBuilder {
        this.info = info
        return this
    }

    public build (): SocialMedia {
        return new SocialMedia(
            this.name,
            this.site,
            this.handle,
            this.icon,
            this.info,
        )
    }
}
