type ClassType = string | undefined | null | false

function oc(mainClass: string, customClass?: ClassType): string {
    return [mainClass, customClass].filter(Boolean).join(' ')
}

export { oc }