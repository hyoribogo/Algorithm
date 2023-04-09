function solution(new_id) {
    const id = new_id.toLowerCase()
                .replace(/[^\w.-]/g, "")
                .replace(/\.+/g, ".")
                .replace(/^\.|\.$/g, "")
                .replace(/^$/g, "a")
                .slice(0, 15)
                .replace(/\.$/g, "")
    return id.padEnd(3, id.at(-1))
}