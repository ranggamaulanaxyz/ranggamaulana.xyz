export function string_to_date(date_string: string, locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions) {
    if(date_string) {
        const dateFormat = new Intl.DateTimeFormat(locales || "en-GB", {
            day: "2-digit",
            month: "long",
            year: "numeric",
            ...options
        })
        const newDate = new Date(date_string)
        return dateFormat.format(newDate)
    }
    return date_string
}