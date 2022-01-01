export function LookForAdmissionId(admissionNo: number): {
    [key: string]: number
} {
    return admissionNo ? { admissionNo } : {}
}

export function LookForId(id: string): {
    [key: string]: string
} {
    return id ? { id } : {}
}
