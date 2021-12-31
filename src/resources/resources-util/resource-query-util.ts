export function LookForAdmissionId(admissionNo: number): {
    [key: string]: number
} {
    return admissionNo ? { admissionNo } : {}
}
