export type expression = {
    value: string,
    end: string,
    index: number | undefined
}

export type operation = {
    variable1: string,
    variable2: string,
    operator: string,
}

export type binary = 1 | 0

export const Binary = (a: string | number): binary => {
    const b = Number(a)
    if (b == 1 || b == 0) return b
    throw new Error(' Error to convert a binary')
}